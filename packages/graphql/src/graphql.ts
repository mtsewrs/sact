import {
  PLuginFunction,
  Response,
  Request,
  BodyReq,
  HttpError,
} from '@sact/core';
import {
  RenderPageOptions,
  renderPlaygroundPage,
} from 'graphql-playground-html';
import { parse, GraphQLSchema, validateSchema, GraphQLError } from 'graphql';
import { compileQuery, isCompiledQuery, CompiledQuery } from 'graphql-jit';

export interface Options {
  path?: string;
  playgroundOptions?: RenderPageOptions;
  formatError?: (err: GraphQLError) => any;
  context?: (
    res: Response,
    req: Request
  ) => { [key: string]: any } | Promise<{ [key: string]: any }>;
  schema: GraphQLSchema;
}

const cache = new Map<string, CompiledQuery>();

export const graphql: PLuginFunction<Options, BodyReq> = (sact, opt) => {
  if (!opt || !opt.schema) {
    throw new Error(
      '[sact-graphql] Graphql server requires options with a schema.'
    );
  }

  validateSchema(opt.schema);

  const path = opt.path || '/graphql';

  sact.post(path, async (req, res) => {
    const { query, variables } = await req.json();

    if (!query) {
      throw new HttpError('query must be supplied to graphql', 400);
    }

    if (!cache.has(query)) {
      const document = parse(query);
      cache.set(query, compileQuery(opt.schema, document) as CompiledQuery);
    }

    const cached = cache.get(query);

    if (!isCompiledQuery(cached)) {
      res.statusCode = 500;
      return cached;
    }

    const context =
      typeof opt.context === 'function' &&
      opt.context[Symbol.toStringTag] === 'AsyncFunction'
        ? await opt.context(res, req)
        : typeof opt.context === 'function'
        ? opt.context(res, req)
        : opt.context;
    const executionResult = await cached.query(null, context, variables);
    const err: any = executionResult.errors ? executionResult.errors[0] : null;
    if (err && err.originalError && !err.originalError.status) {
      res.statusCode = 500;
    } else if (err && err.originalError && err.originalError.status) {
      res.statusCode = err.originalError.status;
    }
    (executionResult as any).errors = executionResult.errors
      ? executionResult.errors.map((err) =>
          opt.formatError ? opt.formatError(err) : { message: err.message }
        )
      : undefined;

    return executionResult;
  });

  sact.get(path, async () => {
    const playground = renderPlaygroundPage({
      endpoint: path,
      ...opt.playgroundOptions,
    });
    return playground;
  });
};
