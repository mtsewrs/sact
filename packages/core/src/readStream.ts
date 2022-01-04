import { Readable } from 'stream';
import { Response } from './types';

export const readStream = (res: Response<unknown>) =>
  new Promise<Readable>((resolve) => {
    const readable = new Readable();

    readable._read = () => {
      if (res.paused) {
        res.paused = false;
        res.resume();
      }
    };

    res.onData((array_buffer, is_last) => {
      let buffer;
      if (readable.listenerCount('data') > 0) {
        // Store a direct Buffer reference as this will be immediately consumed
        buffer = Buffer.from(array_buffer);
      } else {
        // Store a copy of the array_buffer as we have no immediate consumer yet
        // If we do not copy, this chunk will be lost in stream queue as it will be deallocated by uWebsockets
        buffer = Buffer.concat([Buffer.from(array_buffer)]);
      }

      if (!readable.push(buffer)) {
        if (!res.paused) {
          res.paused = true;
          res.pause();
        }
      }

      if (is_last) {
        readable.push(null);
        resolve(readable);
      }
    });
  });
