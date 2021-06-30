import { Request, Response, BodyReq, PLuginFunction } from '@sact/core'
import * as jetpack from 'fs-jetpack'
import { parse } from 'path'

import { http } from './http'
import { ws } from './ws'

export type Ctx<
  T extends {
    req?: unknown
    res?: unknown
    context?: unknown
    params?: unknown
  }
> = {
  res: Response<T['res']>
  req: Request<BodyReq & T['req']>
  isWs: boolean
  params: T['params'] | any
} & T['context']

export interface Options {
  context?: any
  prefix?: string
  /**
   * path from your project root
   */
  path: string
  /**
   * tells the plugin to look for .ts or .js files
   */
  ts?: boolean
  wsOnly?: boolean
  httpOnly?: boolean
}

export const shine: PLuginFunction<Options, BodyReq> = (app, options) => {
  const context = options.context || {}
  const prefix = options.prefix || ''
  const ts = options.ts
  const wsOnly = options.wsOnly || false
  const httpOnly = options.httpOnly || false

  const path = options.path || 'src/routes'
  let paths = jetpack.list(path)
  const functions = jetpack.find(path, {
    matching: ts ? '**/*.ts' : '**/*.js',
  })
  if (!functions.length) {
    throw new Error('[@sact/shine] Could not find' + path)
  }
  const methods = {}
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]

    for (let j = 0; j < functions.length; j++) {
      const f = functions[j]
      const name = parse(f).name
      if (f.includes(p)) {
        const method = require(process.cwd() + '/' + f)
        if (methods[p]) {
          methods[p] = {
            ...methods[p],
            [name]: method.default || method[name],
          }
        } else {
          methods[p] = {
            [name]: method.default || method[name],
          }
        }
      }
    }
  }
  if (!httpOnly) {
    ws(app, methods, context, ts)
  }
  if (!wsOnly) {
    http(app, paths, methods, context, prefix)
  }
}
