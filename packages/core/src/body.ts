import { PLuginFunction } from './sact';
import { readBody } from './readBody';

export interface BodyReq {
  fields?: {
    data: ArrayBuffer;
    name: string;
    type?: string;
    filename?: string;
  }[];
  body?: {
    [key: string]: any;
  };
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
  limit?: number;
}

export const body: PLuginFunction<Options, BodyReq> = (sact, options = {}) => {
  const limit = options.limit || sizes.SIZE_5MB;
  sact.use(async (req, res) => {
    if (req.getMethod() === 'post') {
      const header = req.getHeader('content-type');
      const buffer = await readBody(res, limit);
      if (header !== 'application/json') {
        const data = sact.uws.getParts(buffer, header);
        req.fields = data;
      } else {
        req.body = JSON.parse(buffer.toString());
      }
    } else {
      return Promise.resolve();
    }
  });
};
