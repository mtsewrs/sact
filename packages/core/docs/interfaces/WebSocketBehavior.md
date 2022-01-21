[@sact/core](../README.md) / [Exports](../modules.md) / WebSocketBehavior

# Interface: WebSocketBehavior

A structure holding settings and handlers for a WebSocket URL route handler.

## Table of contents

### Properties

- [compression](WebSocketBehavior.md#compression)
- [idleTimeout](WebSocketBehavior.md#idletimeout)
- [maxBackpressure](WebSocketBehavior.md#maxbackpressure)
- [maxPayloadLength](WebSocketBehavior.md#maxpayloadlength)
- [sendPingsAutomatically](WebSocketBehavior.md#sendpingsautomatically)

### Methods

- [close](WebSocketBehavior.md#close)
- [drain](WebSocketBehavior.md#drain)
- [message](WebSocketBehavior.md#message)
- [open](WebSocketBehavior.md#open)
- [ping](WebSocketBehavior.md#ping)
- [pong](WebSocketBehavior.md#pong)
- [upgrade](WebSocketBehavior.md#upgrade)

## Properties

### compression

• `Optional` **compression**: `number`

What permessage-deflate compression to use. uWS.DISABLED, uWS.SHARED_COMPRESSOR or any of the uWS.DEDICATED_COMPRESSOR_xxxKB. Defaults to uWS.DISABLED.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:224

___

### idleTimeout

• `Optional` **idleTimeout**: `number`

Maximum amount of seconds that may pass without sending or getting a message. Connection is closed if this timeout passes. Resolution (granularity) for timeouts are typically 4 seconds, rounded to closest.
Disable by using 0. Defaults to 120.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:222

___

### maxBackpressure

• `Optional` **maxBackpressure**: `number`

Maximum length of allowed backpressure per socket when publishing or sending messages. Slow receivers with too high backpressure will be skipped until they catch up or timeout. Defaults to 1024 * 1024.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:226

___

### maxPayloadLength

• `Optional` **maxPayloadLength**: `number`

Maximum length of received message. If a client tries to send you a message larger than this, the connection is immediately closed. Defaults to 16 * 1024.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:218

___

### sendPingsAutomatically

• `Optional` **sendPingsAutomatically**: `number`

Whether or not we should automatically send pings to uphold a stable connection given whatever idleTimeout.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:228

## Methods

### close

▸ `Optional` **close**(`ws`, `code`, `message`): `void`

Handler for close event, no matter if error, timeout or graceful close. You may not use WebSocket after this event. Do not send on this WebSocket from within here, it is closed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |
| `code` | `number` |
| `message` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:240

___

### drain

▸ `Optional` **drain**(`ws`): `void`

Handler for when WebSocket backpressure drains. Check ws.getBufferedAmount(). Use this to guide / drive your backpressure throttling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:238

___

### message

▸ `Optional` **message**(`ws`, `message`, `isBinary`): `void`

Handler for a WebSocket message. Messages are given as ArrayBuffer no matter if they are binary or not. Given ArrayBuffer is valid during the lifetime of this callback (until first await or return) and will be neutered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |
| `message` | `ArrayBuffer` |
| `isBinary` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:236

___

### open

▸ `Optional` **open**(`ws`): `void`

Handler for new WebSocket connection. WebSocket is valid from open to close, no errors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:234

___

### ping

▸ `Optional` **ping**(`ws`, `message`): `void`

Handler for received ping control message. You do not need to handle this, pong messages are automatically sent as per the standard.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |
| `message` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:242

___

### pong

▸ `Optional` **pong**(`ws`, `message`): `void`

Handler for received pong control message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](WebSocket.md) |
| `message` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:244

___

### upgrade

▸ `Optional` **upgrade**(`res`, `req`, `context`): `void`

Upgrade handler used to intercept HTTP upgrade requests and potentially upgrade to WebSocket.
See UpgradeAsync and UpgradeSync example files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`HttpResponse`](HttpResponse.md) |
| `req` | [`HttpRequest`](HttpRequest.md) |
| `context` | [`us_socket_context_t`](us_socket_context_t.md) |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:232
