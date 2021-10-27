import { Response } from './types';

export function handlePromise(res: Response, promise: Promise<any>): void {
  promise
    .then((data) => {
      if (typeof data === 'undefined') {
        return;
      }
      const result = ['array', 'object', 'number'].includes(typeof data)
        ? JSON.stringify(data)
        : data;
      if (!res.aborted) {
        res.cork(() => {
          res.statusCode && res.writeStatus(String(res.statusCode));
          ['array', 'object', 'number'].includes(typeof data) &&
            res.writeHeader('Content-Type', 'application/json');
          res.end(result);
        });
      }
    })
    .catch((error) => {
      if (error.status) {
        if (!res.aborted) {
          res.cork(() => {
            res.writeStatus(String(error.status));
            res.writeHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                error: true,
                message: error.message,
                status: error.status,
              })
            );
          });
        }
      } else {
        console.error(error);
        if (!res.aborted) {
          res.cork(() => {
            res.writeStatus('500');
            res.writeHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                error: true,
                message: error.message,
                status: 500,
              })
            );
          });
        }
      }
    });
}
