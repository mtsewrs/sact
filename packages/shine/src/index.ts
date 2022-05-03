import { Request, Response, BodyReq, PLuginFunction, Sact } from '@sact/core'
import * as jetpack from 'fs-jetpack'
import { parse } from 'path'

import { build_routes } from './build_routes'

export interface Ctx<
  T extends {
    req?: unknown
    res?: unknown
    params?: unknown
    context?: unknown
  }
> {
  params: T['params']
  res: Response<T['res']>
  req: Request<BodyReq & T['req']>
  context: T['context']
  method: 'post' | 'get' | 'delete' | 'put' | 'head'
}

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
}

export const shine: PLuginFunction<Options> = (app: Sact<BodyReq>, options) => {
  const context = options?.context || {}
  const prefix = options?.prefix || ''
  const ts = options?.ts

  const path = options?.path || 'src/routes'
  let paths = jetpack.list(path)
  const functions = jetpack.find(path, {
    matching: ts ? '**/*.ts' : '**/*.js',
  })

  if (!functions.length || !paths?.length) {
    throw new Error('[@sact/shine] Could not find' + path)
  }

  const functionsFound = []
  const methods: Record<string, any> = {}
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]

    for (let j = 0; j < functions.length; j++) {
      const f = functions[j]
      const name = parse(f).name
      functionsFound.push(name)
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

  build_routes(app, paths, methods, context, prefix)
}
