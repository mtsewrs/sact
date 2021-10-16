[@sact/core](README.md) / Exports

# @sact/core

## Table of contents

### Enumerations

- [ListenOptions](enums/listenoptions.md)
- [sizes](enums/sizes.md)

### Classes

- [HttpError](classes/httperror.md)
- [Sact](classes/sact.md)

### Interfaces

- [AppOptions](interfaces/appoptions.md)
- [BodyReq](interfaces/bodyreq.md)
- [HttpRequest](interfaces/httprequest.md)
- [HttpResponse](interfaces/httpresponse.md)
- [IRequest](interfaces/irequest.md)
- [IResponse](interfaces/iresponse.md)
- [MultipartField](interfaces/multipartfield.md)
- [Options](interfaces/options.md)
- [Server](interfaces/server.md)
- [TemplatedApp](interfaces/templatedapp.md)
- [WebSocket](interfaces/websocket.md)
- [WebSocketBehavior](interfaces/websocketbehavior.md)
- [us\_listen\_socket](interfaces/us_listen_socket.md)
- [us\_socket](interfaces/us_socket.md)
- [us\_socket\_context\_t](interfaces/us_socket_context_t.md)

### Type aliases

- [CallbackFunction](modules.md#callbackfunction)
- [CompressOptions](modules.md#compressoptions)
- [PLuginFunction](modules.md#pluginfunction)
- [RecognizedString](modules.md#recognizedstring)
- [Request](modules.md#request)
- [Response](modules.md#response)

### Variables

- [DEDICATED\_COMPRESSOR\_128KB](modules.md#dedicated_compressor_128kb)
- [DEDICATED\_COMPRESSOR\_16KB](modules.md#dedicated_compressor_16kb)
- [DEDICATED\_COMPRESSOR\_256KB](modules.md#dedicated_compressor_256kb)
- [DEDICATED\_COMPRESSOR\_32KB](modules.md#dedicated_compressor_32kb)
- [DEDICATED\_COMPRESSOR\_3KB](modules.md#dedicated_compressor_3kb)
- [DEDICATED\_COMPRESSOR\_4KB](modules.md#dedicated_compressor_4kb)
- [DEDICATED\_COMPRESSOR\_64KB](modules.md#dedicated_compressor_64kb)
- [DEDICATED\_COMPRESSOR\_8KB](modules.md#dedicated_compressor_8kb)
- [DISABLED](modules.md#disabled)
- [SHARED\_COMPRESSOR](modules.md#shared_compressor)

### Functions

- [App](modules.md#app)
- [RateLimit](modules.md#ratelimit)
- [SSLApp](modules.md#sslapp)
- [body](modules.md#body)
- [getParts](modules.md#getparts)
- [us\_listen\_socket\_close](modules.md#us_listen_socket_close)
- [us\_socket\_local\_port](modules.md#us_socket_local_port)

## Type aliases

### CallbackFunction

Ƭ **CallbackFunction**<`REQ`, `RES`\>: (`req`: [`Request`](modules.md#request)<`REQ`\>, `res`: [`Response`](modules.md#response)<`RES`\>, `next`: () => `void`) => `Promise`<`any`\> \| `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `REQ` | { [key: string]: `any`;  } |
| `RES` | { [key: string]: `any`;  } |

#### Type declaration

▸ (`req`, `res`, `next`): `Promise`<`any`\> \| `void`

Callback function for routes

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](modules.md#request)<`REQ`\> |
| `res` | [`Response`](modules.md#response)<`RES`\> |
| `next` | () => `void` |

##### Returns

`Promise`<`any`\> \| `void`

#### Defined in

[packages/core/src/types.ts:15](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L15)

___

### CompressOptions

Ƭ **CompressOptions**: `number`

WebSocket compression options

#### Defined in

node_modules/uWebSockets.js/index.d.ts:342

___

### PLuginFunction

Ƭ **PLuginFunction**<`OPTIONS`, `REQ`, `RES`\>: (`sact`: [`Sact`](classes/sact.md)<`REQ`, `RES`\>, `opt?`: `OPTIONS`) => `Promise`<`any`\> \| `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OPTIONS` | `any` |
| `REQ` | `unknown` |
| `RES` | `unknown` |

#### Type declaration

▸ (`sact`, `opt?`): `Promise`<`any`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | [`Sact`](classes/sact.md)<`REQ`, `RES`\> |
| `opt?` | `OPTIONS` |

##### Returns

`Promise`<`any`\> \| `void`

#### Defined in

[packages/core/src/sact.ts:156](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L156)

___

### RecognizedString

Ƭ **RecognizedString**: `string` \| `ArrayBuffer` \| `Uint8Array` \| `Int8Array` \| `Uint16Array` \| `Int16Array` \| `Uint32Array` \| `Int32Array` \| `Float32Array` \| `Float64Array`

Recognized string types, things C++ can read and understand as strings.
"String" does not have to mean "text", it can also be "binary".

Ironically, JavaScript strings are the least performant of all options, to pass or receive to/from C++.
This because we expect UTF-8, which is packed in 8-byte chars. JavaScript strings are UTF-16 internally meaning extra copies and reinterpretation are required.

That's why all events pass data by ArrayBuffer and not JavaScript strings, as they allow zero-copy data passing.

You can always do Buffer.from(arrayBuffer).toString(), but keeping things binary and as ArrayBuffer is preferred.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:45

___

### Request

Ƭ **Request**<`T`\>: [`IRequest`](interfaces/irequest.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

#### Defined in

[packages/core/src/types.ts:41](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L41)

___

### Response

Ƭ **Response**<`T`\>: [`IResponse`](interfaces/iresponse.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

#### Defined in

[packages/core/src/types.ts:28](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/types.ts#L28)

## Variables

### DEDICATED\_COMPRESSOR\_128KB

• **DEDICATED\_COMPRESSOR\_128KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 128KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:360

___

### DEDICATED\_COMPRESSOR\_16KB

• **DEDICATED\_COMPRESSOR\_16KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 16KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:354

___

### DEDICATED\_COMPRESSOR\_256KB

• **DEDICATED\_COMPRESSOR\_256KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 256KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:362

___

### DEDICATED\_COMPRESSOR\_32KB

• **DEDICATED\_COMPRESSOR\_32KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 32KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:356

___

### DEDICATED\_COMPRESSOR\_3KB

• **DEDICATED\_COMPRESSOR\_3KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 3KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:348

___

### DEDICATED\_COMPRESSOR\_4KB

• **DEDICATED\_COMPRESSOR\_4KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 4KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:350

___

### DEDICATED\_COMPRESSOR\_64KB

• **DEDICATED\_COMPRESSOR\_64KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 64KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:358

___

### DEDICATED\_COMPRESSOR\_8KB

• **DEDICATED\_COMPRESSOR\_8KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 8KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:352

___

### DISABLED

• **DISABLED**: [`CompressOptions`](modules.md#compressoptions)

No compression (always a good idea if you operate using an efficient binary protocol)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:344

___

### SHARED\_COMPRESSOR

• **SHARED\_COMPRESSOR**: [`CompressOptions`](modules.md#compressoptions)

Zero memory overhead compression (recommended for pub/sub where same message is sent to many receivers)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:346

## Functions

### App

▸ **App**(`options?`): [`TemplatedApp`](interfaces/templatedapp.md)

Constructs a non-SSL app. An app is your starting point where you attach behavior to URL routes.
This is also where you listen and run your app, set any SSL options (in case of SSLApp) and the like.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AppOptions`](interfaces/appoptions.md) |

#### Returns

[`TemplatedApp`](interfaces/templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:320

___

### RateLimit

▸ `Const` **RateLimit**(`limit`, `interval`): (`ws`: [`WebSocket`](interfaces/websocket.md)) => `boolean`

const rateLimit = RateLimit(1, 10000) //  limit is: 1 message per 10 seconds.

rateLimit(ws) returns true if over limit

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `interval` | `number` |

#### Returns

`fn`

(ws: WebSocket) => boolean

▸ (`ws`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | [`WebSocket`](interfaces/websocket.md) |

##### Returns

`boolean`

#### Defined in

[packages/core/src/wsRateLimit.ts:12](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/wsRateLimit.ts#L12)

___

### SSLApp

▸ **SSLApp**(`options`): [`TemplatedApp`](interfaces/templatedapp.md)

Constructs an SSL app. See App.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AppOptions`](interfaces/appoptions.md) |

#### Returns

[`TemplatedApp`](interfaces/templatedapp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:323

___

### body

▸ `Const` **body**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | [`Sact`](classes/sact.md)<`unknown`, `unknown`\> |
| `opt?` | `Options` |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

[packages/core/src/body.ts:23](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/body.ts#L23)

___

### getParts

▸ **getParts**(`body`, `contentType`): [`MultipartField`](interfaces/multipartfield.md)[] \| `undefined`

Takes a POSTed body and contentType, and returns an array of parts if the request is a multipart request

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RecognizedString`](modules.md#recognizedstring) |
| `contentType` | [`RecognizedString`](modules.md#recognizedstring) |

#### Returns

[`MultipartField`](interfaces/multipartfield.md)[] \| `undefined`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:339

___

### us\_listen\_socket\_close

▸ **us_listen_socket_close**(`listenSocket`): `void`

Closes a uSockets listen socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listenSocket` | [`us_listen_socket`](interfaces/us_listen_socket.md) |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:326

___

### us\_socket\_local\_port

▸ **us_socket_local_port**(`socket`): `number`

Gets local port of socket (or listenSocket) or -1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`us_socket`](interfaces/us_socket.md) |

#### Returns

`number`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:329
