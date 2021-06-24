interface Request {
  path: string
  method: string
  params: any
  handler: (data: any) => void
}

export class Client {
  ws: WebSocket
  url: string
  connected = false
  requests: Request[] = []
  queue: Request[] = []

  constructor(url: string) {
    this.url = url + '/shine'
    this.ws = new WebSocket(this.url)
    this.ws.onopen = () => {
      this.connected = true
      if (!!this.queue.length) {
        for (let i = 0; i < this.queue.length; i++) {
          const { path, method, params, handler } = this.queue[i]
          this.requests.push({
            path,
            method,
            params,
            handler
          })
          this.ws.send(
            JSON.stringify({ path, method, params, type: 'request' })
          )
        }
      }
    }

    this.ws.onmessage = ws => {
      let data: any = {}
      try {
        data = JSON.parse(ws.data)
      } catch (error) {
        data = { error: true, message: error.message, type: 'parse' }
      }

      if (data.error && data.type === 'parse') {
        return
      } else if (data.error && data.type === 'server') {
        for (let i = 0; i < this.requests.length; i++) {
          const req = this.requests[i]
          if (req.path === data.path && req.method === data.method) {
            req.handler(data)
          }
        }
      } else if (data.type === 'request') {
        for (let i = 0; i < this.requests.length; i++) {
          const req = this.requests[i]
          if (req.path === data.path && req.method === data.method) {
            req.handler(data)
          }
        }
      }
    }
  }

  close(code?: number, reason?: string) {
    this.ws.close(code, reason)
  }

  request<T = any>(path: string, method: string, params = {}): Promise<T> {
    return new Promise((resolve, reject) => {
      this.req(path, method, params, data => {
        if (data.type === 'server') {
          reject(data)
        } else {
          resolve(data)
        }
      })
    })
  }

  post(path: string, method: string, params: any): Promise<any> {
    return this.request(path, method, params)
  }

  req(path: string, method: string, params: any, handler: (data: any) => void) {
    if (!this.connected) {
      this.queue.push({
        path,
        method,
        params,
        handler
      })
    } else {
      this.requests.push({
        path,
        method,
        params,
        handler
      })
      this.ws.send(JSON.stringify({ path, method, params, type: 'request' }))
    }
  }
}
