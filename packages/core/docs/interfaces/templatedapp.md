[@sact/core](../README.md) / [Exports](../modules.md) / TemplatedApp

# Interface: TemplatedApp

TemplatedApp is either an SSL or non-SSL app. See App for more info, read user manual.

## Hierarchy

- **`TemplatedApp`**

  ↳ [`Server`](server.md)

## Table of contents

### Methods

- [addServerName](templatedapp.md#addservername)
- [any](templatedapp.md#any)
- [connect](templatedapp.md#connect)
- [del](templatedapp.md#del)
- [get](templatedapp.md#get)
- [head](templatedapp.md#head)
- [listen](templatedapp.md#listen)
- [missingServerName](templatedapp.md#missingservername)
- [numSubscribers](templatedapp.md#numsubscribers)
- [options](templatedapp.md#options)
- [patch](templatedapp.md#patch)
- [post](templatedapp.md#post)
- [publish](templatedapp.md#publish)
- [put](templatedapp.md#put)
- [removeServerName](templatedapp.md#removeservername)
- [trace](templatedapp.md#trace)
- [ws](templatedapp.md#ws)

## Methods

### addServerName

▸ **addServerName**(`hostname`, `options`): [`TemplatedApp`](templatedapp.md)

Adds a server name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostname` | `string` |
| `options` | [`AppOptions`](appoptions.md) |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:310

___

### any

▸ **any**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP handler matching specified URL pattern on any HTTP method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:302

___

### connect

▸ **connect**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP CONNECT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:298

___

### del

▸ **del**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP DELETE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:290

___

### get

▸ **get**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP GET handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:284

___

### head

▸ **head**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP HEAD handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:296

___

### listen

▸ **listen**(`host`, `port`, `cb`): [`TemplatedApp`](templatedapp.md)

Listens to hostname & port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`RecognizedString`](../modules.md#recognizedstring) |
| `port` | `number` |
| `cb` | (`listenSocket`: [`us_listen_socket`](us_listen_socket.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:278

▸ **listen**(`port`, `cb`): [`TemplatedApp`](templatedapp.md)

Listens to port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `cb` | (`listenSocket`: `any`) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:280

▸ **listen**(`port`, `options`, `cb`): [`TemplatedApp`](templatedapp.md)

Listens to port and sets Listen Options. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `options` | [`ListenOptions`](../enums/listenoptions.md) |
| `cb` | (`listenSocket`: ``false`` \| [`us_listen_socket`](us_listen_socket.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:282

___

### missingServerName

▸ **missingServerName**(`cb`): [`TemplatedApp`](templatedapp.md)

Registers a synchronous callback on missing server names. See /examples/ServerName.js.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`hostname`: `string`) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:314

___

### numSubscribers

▸ **numSubscribers**(`topic`): `number`

Returns number of subscribers for this topic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`number`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:308

___

### options

▸ **options**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP OPTIONS handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:288

___

### patch

▸ **patch**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP PATCH handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:292

___

### post

▸ **post**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP POST handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:286

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): `boolean`

Publishes a message under topic, for all WebSockets under this app. See WebSocket.publish.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |
| `message` | [`RecognizedString`](../modules.md#recognizedstring) |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:306

___

### put

▸ **put**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP PUT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:294

___

### removeServerName

▸ **removeServerName**(`hostname`): [`TemplatedApp`](templatedapp.md)

Removes a server name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostname` | `string` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:312

___

### trace

▸ **trace**(`pattern`, `handler`): [`TemplatedApp`](templatedapp.md)

Registers an HTTP TRACE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](httpresponse.md), `req`: [`HttpRequest`](httprequest.md)) => `void` |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:300

___

### ws

▸ **ws**(`pattern`, `behavior`): [`TemplatedApp`](templatedapp.md)

Registers a handler matching specified URL pattern where WebSocket upgrade requests are caught.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `behavior` | [`WebSocketBehavior`](websocketbehavior.md) |

#### Returns

[`TemplatedApp`](templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:304
