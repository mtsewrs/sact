@sact/graphql / [Exports](modules.md)

<p background="rgb(57, 59, 58)" align="center">
  <img align="center" height="300" src="https://user-images.githubusercontent.com/4136218/105098174-f9b08480-5aa9-11eb-8167-52683d4e5b97.png" />
</p>

<p align="center">⚡️ Fast node websocket and http framework</p>
<p align="center">
  <a href="https://www.npmjs.com/~sactcore" target="_blank"><img src="https://img.shields.io/npm/v/@sact/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~sactcore" target="_blank"><img src="https://img.shields.io/npm/dm/@sact/core.svg" alt="NPM Downloads" /></a>
</p>

# Sact

This framework uses https://github.com/uNetworking/uWebSockets under the hood for speed

API documentation are located in each package under /docs or look at the tests for usage but in short

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
    console.log(`Server started`);
  } catch (error) {
    console.error(error);
  }
}

start();
```
