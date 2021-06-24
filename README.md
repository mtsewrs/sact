<p background="rgb(57, 59, 58)" align="center">
  <img align="center" height="300" src="https://user-images.githubusercontent.com/4136218/105098174-f9b08480-5aa9-11eb-8167-52683d4e5b97.png" />
</p>

<p align="center">⚡️ Simple and fast node websocket and http framework</p>
<p align="center">
  <a href="https://www.npmjs.com/~sactcore" target="_blank"><img src="https://img.shields.io/npm/v/@sact/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~sactcore" target="_blank"><img src="https://img.shields.io/npm/dm/@sact/core.svg" alt="NPM Downloads" /></a>
</p>

# Sact

### Core features

- Async first
- Middleware support
- Plugin system
- Body parsing
- File serving

### Core plugins

- @sact/cookie - Cookie parsing
- @sact/session - Sessions
- @sact/auth - Opinionated authentication
- @sact/graphql - Graphql
- @sact/shine - Shine (opinionated json-rpc api sub-framework)

API documentation are heavily lacking but generated ones by typedoc are located in each package under /docs. You can also look at the tests for each package for usage but the main server package is `@sact/core` the rest are plugins for various cases, use it if you want

#### Install

```bash
  yarn add @sact/core
```

#### Minimal setup

```js
import { Stract } from '@sact/core';

const app = new Sact();

app.get('/', async () => ({ foo: 'bar' }));

async function start() {
  try {
    await app.listen(9001);
    console.log('Server started');
  } catch (error) {
    console.error(error);
  }
}

start();
```

## Middlewares

```
app.use((req, res) => {
  req.foo = 'bar'
 console.log(`Requested route ${req.getUrl()}`)
})

app.get('/foo', async (req) => req.foo)
```

## Plugins

```
// register middlewares or routes here
const plugin = (app, options) => {
  app.foo = 'bar'

  app.use((req, res) => {
    console.log(`Requested route ${req.getUrl()}`)
  })

  app.get('/foo', async () => app.foo)
}

app.register(plugin, {})
```

This framework uses https://github.com/uNetworking/uWebSockets under the hood
