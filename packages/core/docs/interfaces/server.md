[@sact/core](../README.md) / [Exports](../modules.md) / Server

# Interface: Server

## Hierarchy

- [`TemplatedApp`](templatedapp.md)

  ↳ **`Server`**

## Table of contents

### Methods

- [addServerName](server.md#addservername)
- [any](server.md#any)
- [connect](server.md#connect)
- [del](server.md#del)
- [get](server.md#get)
- [head](server.md#head)
- [listen](server.md#listen)
- [missingServerName](server.md#missingservername)
- [numSubscribers](server.md#numsubscribers)
- [options](server.md#options)
- [patch](server.md#patch)
- [post](server.md#post)
- [publish](server.md#publish)
- [put](server.md#put)
- [removeServerName](server.md#removeservername)
- [trace](server.md#trace)
- [ws](server.md#ws)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[addServerName](templatedapp.md#addservername)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:310

___

### any

▸ **any**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP handler matching specified URL pattern on any HTTP method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[any](templatedapp.md#any)

#### Defined in

[packages/core/src/types.ts:67](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L67)

___

### connect

▸ **connect**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP CONNECT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[connect](templatedapp.md#connect)

#### Defined in

[packages/core/src/types.ts:59](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L59)

___

### del

▸ **del**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP DELETE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[del](templatedapp.md#del)

#### Defined in

[packages/core/src/types.ts:52](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L52)

___

### get

▸ **get**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP GET handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[get](templatedapp.md#get)

#### Defined in

[packages/core/src/types.ts:46](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L46)

___

### head

▸ **head**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP HEAD handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[head](templatedapp.md#head)

#### Defined in

[packages/core/src/types.ts:58](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L58)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[listen](templatedapp.md#listen)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[listen](templatedapp.md#listen)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[listen](templatedapp.md#listen)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[missingServerName](templatedapp.md#missingservername)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[numSubscribers](templatedapp.md#numsubscribers)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:308

___

### options

▸ **options**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP OPTIONS handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[options](templatedapp.md#options)

#### Defined in

[packages/core/src/types.ts:48](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L48)

___

### patch

▸ **patch**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP PATCH handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[patch](templatedapp.md#patch)

#### Defined in

[packages/core/src/types.ts:53](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L53)

___

### post

▸ **post**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP POST handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[post](templatedapp.md#post)

#### Defined in

[packages/core/src/types.ts:47](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L47)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[publish](templatedapp.md#publish)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:306

___

### put

▸ **put**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP PUT handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[put](templatedapp.md#put)

#### Defined in

[packages/core/src/types.ts:57](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L57)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[removeServerName](templatedapp.md#removeservername)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:312

___

### trace

▸ **trace**(`pattern`, `handler`): [`Server`](server.md)

Registers an HTTP TRACE handler matching specified URL pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

[TemplatedApp](templatedapp.md).[trace](templatedapp.md#trace)

#### Defined in

[packages/core/src/types.ts:63](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L63)

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

#### Inherited from

[TemplatedApp](templatedapp.md).[ws](templatedapp.md#ws)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:304
