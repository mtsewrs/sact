import { Readable } from 'stream';
import { parse, ParsedUrlQuery } from 'querystring';
import { MultipartField, PLuginFunction, Sact } from './sact';
import { readBody } from './readBody';
import { HttpError } from './error';
import { readStream } from './readStream';

export interface BodyReq {
  json: <T = Record<string, any>>() => Promise<T>;
  fields: () => Promise<MultipartField[] | undefined>;
  stream: () => Promise<Readable>;
  buffer: () => Promise<Buffer>;
  form: () => Promise<ParsedUrlQuery>;
}

export enum sizes {
  SIZE_1MB = 1 * 1024 * 1024,
  SIZE_5MB = 5 * 1024 * 1024,
  SIZE_50MB = 50 * 1024 * 1024,
  SIZE_100MB = 100 * 1024 * 1024,
  SIZE_150MB = 150 * 1024 * 1024,
  SIZE_200MB = 200 * 1024 * 1024,
}

interface Options {
  /**
   * body limit, defaults to 5 mb
   */
  limit?: number;
}

export const body: PLuginFunction<Options> = (
  sact: Sact<BodyReq>,
  options = {}
) => {
  const limit = options.limit || sizes.SIZE_5MB;
  sact.use((req, res) => {
    req.json = async () => {
      const buffer = await readBody(res, limit);
      try {
        return JSON.parse(buffer.toString());
      } catch {
        throw new HttpError('Invalid json', 400);
      }
    };

    req.form = async () => {
      const buffer = await readBody(res, limit);
      const form = buffer.toString();
      return parse(form);
    };

    req.buffer = () => {
      return readBody(res, limit);
    };

    req.fields = async () => {
      const header = req.getHeader('content-type');
      const buffer = await readBody(res, limit);
      return sact.uws.getParts(buffer, header);
    };

    req.stream = () => {
      return readStream(res);
    };
  });
};
