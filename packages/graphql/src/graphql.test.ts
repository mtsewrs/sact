import request from 'supertest';
import { Sact, body, HttpError } from '@sact/core';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { graphql } from '.';

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    testString: {
      type: GraphQLString,
      resolve(_, __, { world }) {
        return 'hello ' + world;
      },
    },
    foo: {
      type: GraphQLString,
      resolve() {
        return 'bar';
      },
    },
    error: {
      type: GraphQLString,
      resolve() {
        throw new HttpError('some error', 400);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: queryType,
});

const app = new Sact();

app.register(body);

app.register(graphql, {
  schema,
  context: async () => ({
    world: 'world',
  }),
});

beforeEach(async () => {
  await app.listen();
});

afterEach(() => {
  app.close();
});

describe('Graphql Server', () => {
  it('can respond with graphql json', async () => {
    const resp = await request(app).post('/graphql').send({
      query: '{foo}',
    });
    expect(resp.body.data.foo).toEqual('bar');
  });

  it('can respond with context data', async () => {
    const resp = await request(app).post('/graphql').send({
      query: '{testString}',
    });
    expect(resp.body.data.testString).toEqual('hello world');
  });

  it('can respond with error code', async () => {
    const resp = await request(app).post('/graphql').send({
      query: '{error}',
    });
    expect(resp.status).toEqual(400);
  });
});
