[@sact/core](../README.md) / [Exports](../modules.md) / TemplatedApp

# Interface: TemplatedApp

TemplatedApp is either an SSL or non-SSL app. See App for more info, read user manual.

## Table of contents

### Methods

- [addServerName](TemplatedApp.md#addservername)
- [any](TemplatedApp.md#any)
- [connect](TemplatedApp.md#connect)
- [del](TemplatedApp.md#del)
- [get](TemplatedApp.md#get)
- [head](TemplatedApp.md#head)
- [listen](TemplatedApp.md#listen)
- [missingServerName](TemplatedApp.md#missingservername)
- [numSubscribers](TemplatedApp.md#numsubscribers)
- [options](TemplatedApp.md#options)
- [patch](TemplatedApp.md#patch)
- [post](TemplatedApp.md#post)
- [publish](TemplatedApp.md#publish)
- [put](TemplatedApp.md#put)
- [removeServerName](TemplatedApp.md#removeservername)
- [trace](TemplatedApp.md#trace)
- [ws](TemplatedApp.md#ws)

## Methods

### addServerName

▸ **addServerName**(`hostname`, `options`): [`TemplatedApp`](TemplatedApp.md)

Adds a server name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostname` | `string` |
| `options` | [`AppOptions`](AppOptions.md) |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:299

___

### any

▸ **any**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP handler matching specified URL pattern on any HTTP method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:291

___

### connect

▸ **connect**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP CONNECT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:287

___

### del

▸ **del**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP DELETE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:279

___

### get

▸ **get**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP GET handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:273

___

### head

▸ **head**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP HEAD handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:285

___

### listen

▸ **listen**(`host`, `port`, `cb`): [`TemplatedApp`](TemplatedApp.md)

Listens to hostname & port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`RecognizedString`](../modules.md#recognizedstring) |
| `port` | `number` |
| `cb` | (`listenSocket`: [`us_listen_socket`](us_listen_socket.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:267

▸ **listen**(`port`, `cb`): [`TemplatedApp`](TemplatedApp.md)

Listens to port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `cb` | (`listenSocket`: `any`) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:269

▸ **listen**(`port`, `options`, `cb`): [`TemplatedApp`](TemplatedApp.md)

Listens to port and sets Listen Options. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `options` | [`ListenOptions`](../enums/ListenOptions.md) |
| `cb` | (`listenSocket`: ``false`` \| [`us_listen_socket`](us_listen_socket.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:271

___

### missingServerName

▸ **missingServerName**(`cb`): [`TemplatedApp`](TemplatedApp.md)

Registers a synchronous callback on missing server names. See /examples/ServerName.js.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`hostname`: `string`) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:303

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

node_modules/uWebSockets.js/index.d.ts:297

___

### options

▸ **options**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP OPTIONS handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:277

___

### patch

▸ **patch**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP PATCH handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:281

___

### post

▸ **post**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP POST handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:275

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

node_modules/uWebSockets.js/index.d.ts:295

___

### put

▸ **put**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP PUT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:283

___

### removeServerName

▸ **removeServerName**(`hostname`): [`TemplatedApp`](TemplatedApp.md)

Removes a server name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostname` | `string` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:301

___

### trace

▸ **trace**(`pattern`, `handler`): [`TemplatedApp`](TemplatedApp.md)

Registers an HTTP TRACE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `handler` | (`res`: [`HttpResponse`](HttpResponse.md), `req`: [`HttpRequest`](HttpRequest.md)) => `void` |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:289

___

### ws

▸ **ws**(`pattern`, `behavior`): [`TemplatedApp`](TemplatedApp.md)

Registers a handler matching specified URL pattern where WebSocket upgrade requests are caught.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`RecognizedString`](../modules.md#recognizedstring) |
| `behavior` | [`WebSocketBehavior`](WebSocketBehavior.md) |

#### Returns

[`TemplatedApp`](TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:293
