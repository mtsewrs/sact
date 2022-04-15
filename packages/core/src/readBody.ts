import { Response } from './types';
import { HttpError } from './error';

export function readBody(
  res: Response<unknown>,
  limit: number
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    let buffer = Buffer.from('');
    res.onData((ab, isLast) => {
      const chunk = Buffer.from(ab);
      buffer = Buffer.concat([buffer, chunk]);
      if (buffer.length > limit) {
        reject(new HttpError('post body is too big', 413));
      }
      if (isLast) {
        resolve(buffer);
      }
    });
  });
}
