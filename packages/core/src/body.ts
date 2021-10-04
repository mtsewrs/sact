import { PLuginFunction } from './sact';
import { readBody } from './readBody';

export interface BodyReq {
  body?: {
    fields?: {
      data: ArrayBuffer;
      name: string;
      type?: string;
      filename?: string;
    }[];
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

const blacklist = ['get', 'options', 'head', 'delete'];

// @TODO use body as function
export const body: PLuginFunction<Options, BodyReq> = (sact, options = {}) => {
  const limit = options.limit || sizes.SIZE_5MB;
  sact.use(async (req, res) => {
    if (!blacklist.includes(req.getMethod())) {
      const header = req.getHeader('content-type');
      const buffer = await readBody(res, limit);
      if (header !== 'application/json') {
        const data = sact.uws.getParts(buffer, header);
        req.body = { fields: data };
      } else {
        req.body = JSON.parse(buffer.toString());
      }
    } else {
      return Promise.resolve();
    }
  });
};
