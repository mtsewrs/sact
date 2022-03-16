export class HttpError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number = 400, data: any = {}) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
