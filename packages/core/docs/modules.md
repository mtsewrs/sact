[@sact/core](README.md) / Exports

# @sact/core

## Table of contents

### Enumerations

- [ListenOptions](enums/ListenOptions.md)
- [sizes](enums/sizes.md)

### Classes

- [HttpError](classes/HttpError.md)
- [Sact](classes/Sact.md)

### Interfaces

- [AppOptions](interfaces/AppOptions.md)
- [BodyReq](interfaces/BodyReq.md)
- [HttpRequest](interfaces/HttpRequest.md)
- [HttpResponse](interfaces/HttpResponse.md)
- [IRequest](interfaces/IRequest.md)
- [IResponse](interfaces/IResponse.md)
- [MultipartField](interfaces/MultipartField.md)
- [Options](interfaces/Options.md)
- [TemplatedApp](interfaces/TemplatedApp.md)
- [WebSocket](interfaces/WebSocket.md)
- [WebSocketBehavior](interfaces/WebSocketBehavior.md)
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
- [DEDICATED\_DECOMPRESSOR](modules.md#dedicated_decompressor)
- [DEDICATED\_DECOMPRESSOR\_16KB](modules.md#dedicated_decompressor_16kb)
- [DEDICATED\_DECOMPRESSOR\_1KB](modules.md#dedicated_decompressor_1kb)
- [DEDICATED\_DECOMPRESSOR\_2KB](modules.md#dedicated_decompressor_2kb)
- [DEDICATED\_DECOMPRESSOR\_32KB](modules.md#dedicated_decompressor_32kb)
- [DEDICATED\_DECOMPRESSOR\_4KB](modules.md#dedicated_decompressor_4kb)
- [DEDICATED\_DECOMPRESSOR\_512B](modules.md#dedicated_decompressor_512b)
- [DEDICATED\_DECOMPRESSOR\_8KB](modules.md#dedicated_decompressor_8kb)
- [DISABLED](modules.md#disabled)
- [SHARED\_COMPRESSOR](modules.md#shared_compressor)
- [SHARED\_DECOMPRESSOR](modules.md#shared_decompressor)

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

Ƭ **CallbackFunction**<`REQ`, `RES`\>: (`req`: [`Request`](modules.md#request)<`REQ`\>, `res`: [`Response`](modules.md#response)<`RES`\>) => `void` \| `Promise`<`any`\>

#### Type parameters

| Name |
| :------ |
| `REQ` |
| `RES` |

#### Type declaration

▸ (`req`, `res`): `void` \| `Promise`<`any`\>

Callback function for routes

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](modules.md#request)<`REQ`\> |
| `res` | [`Response`](modules.md#response)<`RES`\> |

##### Returns

`void` \| `Promise`<`any`\>

#### Defined in

[packages/core/src/types.ts:10](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/types.ts#L10)

___

### CompressOptions

Ƭ **CompressOptions**: `number`

WebSocket compression options. Combine any compressor with any decompressor using bitwise OR.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:331

___

### PLuginFunction

Ƭ **PLuginFunction**<`OPTIONS`\>: (`sact`: `any`, `opt?`: `OPTIONS`) => `Promise`<`any`\> \| `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OPTIONS` | `any` |

#### Type declaration

▸ (`sact`, `opt?`): `Promise`<`any`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | `any` |
| `opt?` | `OPTIONS` |

##### Returns

`Promise`<`any`\> \| `void`

#### Defined in

[packages/core/src/sact.ts:161](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L161)

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

Ƭ **Request**<`T`\>: [`IRequest`](interfaces/IRequest.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[packages/core/src/types.ts:23](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/types.ts#L23)

___

### Response

Ƭ **Response**<`T`\>: [`IResponse`](interfaces/IResponse.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[packages/core/src/types.ts:15](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/types.ts#L15)

## Variables

### DEDICATED\_COMPRESSOR\_128KB

• **DEDICATED\_COMPRESSOR\_128KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 128KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:351

___

### DEDICATED\_COMPRESSOR\_16KB

• **DEDICATED\_COMPRESSOR\_16KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 16KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:345

___

### DEDICATED\_COMPRESSOR\_256KB

• **DEDICATED\_COMPRESSOR\_256KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 256KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:353

___

### DEDICATED\_COMPRESSOR\_32KB

• **DEDICATED\_COMPRESSOR\_32KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 32KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:347

___

### DEDICATED\_COMPRESSOR\_3KB

• **DEDICATED\_COMPRESSOR\_3KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 3KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:339

___

### DEDICATED\_COMPRESSOR\_4KB

• **DEDICATED\_COMPRESSOR\_4KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 4KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:341

___

### DEDICATED\_COMPRESSOR\_64KB

• **DEDICATED\_COMPRESSOR\_64KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 64KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:349

___

### DEDICATED\_COMPRESSOR\_8KB

• **DEDICATED\_COMPRESSOR\_8KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated compress window, requires 8KB of memory per socket

#### Defined in

node_modules/uWebSockets.js/index.d.ts:343

___

### DEDICATED\_DECOMPRESSOR

• **DEDICATED\_DECOMPRESSOR**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 32KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:369

___

### DEDICATED\_DECOMPRESSOR\_16KB

• **DEDICATED\_DECOMPRESSOR\_16KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 16KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:357

___

### DEDICATED\_DECOMPRESSOR\_1KB

• **DEDICATED\_DECOMPRESSOR\_1KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 1KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:365

___

### DEDICATED\_DECOMPRESSOR\_2KB

• **DEDICATED\_DECOMPRESSOR\_2KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 2KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:363

___

### DEDICATED\_DECOMPRESSOR\_32KB

• **DEDICATED\_DECOMPRESSOR\_32KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 32KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:355

___

### DEDICATED\_DECOMPRESSOR\_4KB

• **DEDICATED\_DECOMPRESSOR\_4KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 4KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:361

___

### DEDICATED\_DECOMPRESSOR\_512B

• **DEDICATED\_DECOMPRESSOR\_512B**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 512B of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:367

___

### DEDICATED\_DECOMPRESSOR\_8KB

• **DEDICATED\_DECOMPRESSOR\_8KB**: [`CompressOptions`](modules.md#compressoptions)

Sliding dedicated decompress window, requires 8KB of memory per socket (plus about 23KB)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:359

___

### DISABLED

• **DISABLED**: [`CompressOptions`](modules.md#compressoptions)

No compression (always a good idea if you operate using an efficient binary protocol)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:333

___

### SHARED\_COMPRESSOR

• **SHARED\_COMPRESSOR**: [`CompressOptions`](modules.md#compressoptions)

Zero memory overhead compression.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:335

___

### SHARED\_DECOMPRESSOR

• **SHARED\_DECOMPRESSOR**: [`CompressOptions`](modules.md#compressoptions)

Zero memory overhead decompression.

#### Defined in

node_modules/uWebSockets.js/index.d.ts:337

## Functions

### App

▸ **App**(`options?`): [`TemplatedApp`](interfaces/TemplatedApp.md)

Constructs a non-SSL app. An app is your starting point where you attach behavior to URL routes.
This is also where you listen and run your app, set any SSL options (in case of SSLApp) and the like.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AppOptions`](interfaces/AppOptions.md) |

#### Returns

[`TemplatedApp`](interfaces/TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:309

___

### RateLimit

▸ `Const` **RateLimit**(`limit`, `interval`): (`ws`: [`WebSocket`](interfaces/WebSocket.md)) => `boolean`

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
| `ws` | [`WebSocket`](interfaces/WebSocket.md) |

##### Returns

`boolean`

#### Defined in

[packages/core/src/wsRateLimit.ts:12](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/wsRateLimit.ts#L12)

___

### SSLApp

▸ **SSLApp**(`options`): [`TemplatedApp`](interfaces/TemplatedApp.md)

Constructs an SSL app. See App.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AppOptions`](interfaces/AppOptions.md) |

#### Returns

[`TemplatedApp`](interfaces/TemplatedApp.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:312

___

### body

▸ `Const` **body**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | `any` |
| `opt?` | `Options` |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

[packages/core/src/body.ts:29](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/body.ts#L29)

___

### getParts

▸ **getParts**(`body`, `contentType`): [`MultipartField`](interfaces/MultipartField.md)[] \| `undefined`

Takes a POSTed body and contentType, and returns an array of parts if the request is a multipart request

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RecognizedString`](modules.md#recognizedstring) |
| `contentType` | [`RecognizedString`](modules.md#recognizedstring) |

#### Returns

[`MultipartField`](interfaces/MultipartField.md)[] \| `undefined`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:328

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

node_modules/uWebSockets.js/index.d.ts:315

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

node_modules/uWebSockets.js/index.d.ts:318
