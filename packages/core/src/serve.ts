import { unescape } from 'querystring';
import mime from 'mime/lite';
import { Response, Request } from './types';
import { PLuginFunction } from './index';
import { sendFile } from './sendFile';

import path from 'path';
import { ReadStream } from 'fs';

interface Options {
  folder?: string;
  prefix?: string;
  index?: string | boolean;
  /**
   * Supports gzip and brotli compression but using compression might have some performance regression
   */
  compress?: 'gzip' | 'br';
  cache?: boolean;
  [key: string]: any;
}

export type FileRes = {
  sendFile: (file: string, response: Response) => Promise<void>;
  stream: ReadStream;
};

export const serve: PLuginFunction<Options> = (sact, options = {}) => {
  const folder = options.folder || 'public';
  const prefix = options.prefix || false;
  const index = options.index || false;
  const compress = options.compress ? options.compress : undefined;
  sact.use((req, res) => {
    res.sendFile = async (
      file: string,
      response: Response,
      request: Request
    ) => {
      try {
        const url = req.getUrl().replace(`${prefix ? prefix + '/' : ''}`, '');
        const name = path.join(folder, unescape(url));
        const ext = path.extname(name);
        const content_mime = mime.getType(ext);
        if (options.cache) res.writeHeader('cache-control', 'must-revalidate');
        compress && res.writeHeader('content-encoding', compress);
        await sendFile(file, response, options, content_mime);
      } catch (err) {
        const notFound = err.message && err.message.includes('ENOENT');
        if (notFound) {
          res.writeStatus('404');
          response.send('[sact]: ' + file + ' could not be found.');
        } else {
          res.writeStatus('400');
          response.send('Error sending file');
        }
      }
    };
  });

  sact.app.get('/*', async (res, req) => {
    res.onAborted(() => {
      res.aborted = true;
      if (res.stream) {
        res.stream.destroy();
      }
    });
    const url = req.getUrl().replace(`${prefix ? prefix + '/' : ''}`, '');
    const name = path.join(folder, unescape(url));
    const ext = path.extname(name);
    const content_mime = mime.getType(ext);
    if (ext === '') {
      if (index) {
        try {
          if (options.cache)
            res.writeHeader('cache-control', 'must-revalidate');
          if (compress) {
            res.writeHeader('content-encoding', compress);
          }
          await sendFile(
            path.join(folder, index as string),
            res,
            options,
            content_mime
          );
        } catch (err) {
          req.setYield(true);
        }
      } else {
        req.setYield(true);
      }
    } else {
      try {
        await sendFile(name, res, options, content_mime);
      } catch (err) {
        res.cork(() => {
          if (!res.aborted) {
            res.stream && res.stream.destroy();
            res.writeStatus('400');
            res.end(err.message ? err.message : err);
          }
        });
      }
    }
  });
};
