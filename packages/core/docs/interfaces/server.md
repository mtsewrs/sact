[@sact/core](../README.md) / [Exports](../modules.md) / Server

# Interface: Server

## Hierarchy

- `TemplatedApp`

  ↳ **`Server`**

## Table of contents

### Methods

- [any](server.md#any)
- [connect](server.md#connect)
- [del](server.md#del)
- [get](server.md#get)
- [head](server.md#head)
- [listen](server.md#listen)
- [numSubscribers](server.md#numsubscribers)
- [options](server.md#options)
- [patch](server.md#patch)
- [post](server.md#post)
- [publish](server.md#publish)
- [put](server.md#put)
- [trace](server.md#trace)
- [ws](server.md#ws)

## Methods

### any

▸ **any**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.any

#### Defined in

packages/core/src/types.ts:68

___

### connect

▸ **connect**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.connect

#### Defined in

packages/core/src/types.ts:60

___

### del

▸ **del**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.del

#### Defined in

packages/core/src/types.ts:53

___

### get

▸ **get**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.get

#### Defined in

packages/core/src/types.ts:47

___

### head

▸ **head**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.head

#### Defined in

packages/core/src/types.ts:59

___

### listen

▸ **listen**(`host`, `port`, `cb`): `TemplatedApp`

Listens to hostname & port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `RecognizedString` |
| `port` | `number` |
| `cb` | (`listenSocket`: `us_listen_socket`) => `void` |

#### Returns

`TemplatedApp`

#### Inherited from

TemplatedApp.listen

#### Defined in

node_modules/uWebSockets.js/index.d.ts:271

▸ **listen**(`port`, `cb`): `TemplatedApp`

Listens to port. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `cb` | (`listenSocket`: `any`) => `void` |

#### Returns

`TemplatedApp`

#### Inherited from

TemplatedApp.listen

#### Defined in

node_modules/uWebSockets.js/index.d.ts:273

▸ **listen**(`port`, `options`, `cb`): `TemplatedApp`

Listens to port and sets Listen Options. Callback hands either false or a listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `options` | `ListenOptions` |
| `cb` | (`listenSocket`: ``false`` \| `us_listen_socket`) => `void` |

#### Returns

`TemplatedApp`

#### Inherited from

TemplatedApp.listen

#### Defined in

node_modules/uWebSockets.js/index.d.ts:275

___

### numSubscribers

▸ **numSubscribers**(`topic`): `number`

Returns number of subscribers for this topic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `RecognizedString` |

#### Returns

`number`

#### Inherited from

TemplatedApp.numSubscribers

#### Defined in

node_modules/uWebSockets.js/index.d.ts:301

___

### options

▸ **options**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.options

#### Defined in

packages/core/src/types.ts:49

___

### patch

▸ **patch**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.patch

#### Defined in

packages/core/src/types.ts:54

___

### post

▸ **post**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.post

#### Defined in

packages/core/src/types.ts:48

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): `boolean`

Publishes a message under topic, for all WebSockets under this app. See WebSocket.publish.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `RecognizedString` |
| `message` | `RecognizedString` |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

TemplatedApp.publish

#### Defined in

node_modules/uWebSockets.js/index.d.ts:299

___

### put

▸ **put**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.put

#### Defined in

packages/core/src/types.ts:58

___

### trace

▸ **trace**(`pattern`, `handler`): [`Server`](server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `handler` | (`res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `void` |

#### Returns

[`Server`](server.md)

#### Overrides

TemplatedApp.trace

#### Defined in

packages/core/src/types.ts:64

___

### ws

▸ **ws**(`pattern`, `behavior`): `TemplatedApp`

Registers a handler matching specified URL pattern where WebSocket upgrade requests are caught.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `RecognizedString` |
| `behavior` | `WebSocketBehavior` |

#### Returns

`TemplatedApp`

#### Inherited from

TemplatedApp.ws

#### Defined in

node_modules/uWebSockets.js/index.d.ts:297
