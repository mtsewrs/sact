import { WebSocket } from 'uWebSockets.js';

export const RateLimit = (limit: number, interval: number) => {
  let now = 0;
  const last = Symbol() as unknown as string;
  const count = Symbol() as unknown as string;
  setInterval(() => ++now, interval);
  return (ws: WebSocket) => {
    if (ws[last] != now) {
      ws[last] = now;
      ws[count] = 1;
      return false;
    } else {
      return ++ws[count] > limit;
    }
  };
};
