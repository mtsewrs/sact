[@sact/core](../README.md) / [Exports](../modules.md) / IResponse

# Interface: IResponse

## Hierarchy

- `HttpResponse`

  ↳ **`IResponse`**

## Table of contents

### Properties

- [aborted](iresponse.md#aborted)
- [getHeader](iresponse.md#getheader)
- [header](iresponse.md#header)
- [headers](iresponse.md#headers)
- [redirect](iresponse.md#redirect)
- [send](iresponse.md#send)
- [sendFile](iresponse.md#sendfile)
- [setHeader](iresponse.md#setheader)
- [statusCode](iresponse.md#statuscode)

### Methods

- [close](iresponse.md#close)
- [cork](iresponse.md#cork)
- [end](iresponse.md#end)
- [getProxiedRemoteAddress](iresponse.md#getproxiedremoteaddress)
- [getProxiedRemoteAddressAsText](iresponse.md#getproxiedremoteaddressastext)
- [getRemoteAddress](iresponse.md#getremoteaddress)
- [getRemoteAddressAsText](iresponse.md#getremoteaddressastext)
- [getWriteOffset](iresponse.md#getwriteoffset)
- [onAborted](iresponse.md#onaborted)
- [onData](iresponse.md#ondata)
- [onWritable](iresponse.md#onwritable)
- [tryEnd](iresponse.md#tryend)
- [upgrade](iresponse.md#upgrade)
- [write](iresponse.md#write)
- [writeHeader](iresponse.md#writeheader)
- [writeStatus](iresponse.md#writestatus)

## Properties

### aborted

• **aborted**: `boolean`

#### Defined in

packages/core/src/types.ts:37

___

### getHeader

• **getHeader**: (`value`: `string`) => `string`

#### Type declaration

▸ (`value`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`string`

#### Defined in

packages/core/src/types.ts:35

___

### header

• **header**: (`key`: `string`, `value`: `string`) => [`IResponse`](iresponse.md)

#### Type declaration

▸ (`key`, `value`): [`IResponse`](iresponse.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

##### Returns

[`IResponse`](iresponse.md)

#### Defined in

packages/core/src/types.ts:34

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

packages/core/src/types.ts:38

___

### redirect

• **redirect**: (`path`: `string`) => `void`

#### Type declaration

▸ (`path`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`void`

#### Defined in

packages/core/src/types.ts:36

___

### send

• **send**: (`data?`: `string`, `async?`: `boolean`) => `void`

#### Type declaration

▸ (`data?`, `async?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `string` |
| `async?` | `boolean` |

##### Returns

`void`

#### Defined in

packages/core/src/types.ts:31

___

### sendFile

• **sendFile**: (`file`: `string`, `res`: [`Response`](../modules.md#response)<`Object`\>, `req`: [`Request`](../modules.md#request)<`Object`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`file`, `res`, `req`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `res` | [`Response`](../modules.md#response)<`Object`\> |
| `req` | [`Request`](../modules.md#request)<`Object`\> |

##### Returns

`Promise`<`void`\>

#### Defined in

packages/core/src/types.ts:32

___

### setHeader

• **setHeader**: (`key`: `string`, `value`: `string`) => [`IResponse`](iresponse.md)

#### Type declaration

▸ (`key`, `value`): [`IResponse`](iresponse.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

##### Returns

[`IResponse`](iresponse.md)

#### Defined in

packages/core/src/types.ts:33

___

### statusCode

• **statusCode**: `number`

#### Defined in

packages/core/src/types.ts:39

## Methods

### close

▸ **close**(): `HttpResponse`

Immediately force closes the connection. Any onAborted callback will run.

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.close

#### Defined in

node_modules/uWebSockets.js/index.d.ts:147

___

### cork

▸ **cork**(`cb`): `void`

Corking a response is a performance improvement in both CPU and network, as you ready the IO system for writing multiple chunks at once.
By default, you're corked in the immediately executing top portion of the route handler. In all other cases, such as when returning from
await, or when being called back from an async database request or anything that isn't directly executing in the route handler, you'll want
to cork before calling writeStatus, writeHeader or just write. Corking takes a callback in which you execute the writeHeader, writeStatus and
such calls, in one atomic IO operation. This is important, not only for TCP but definitely for TLS where each write would otherwise result
in one TLS block being sent off, each with one send syscall.

Example usage:

res.cork(() => {
  res.writeStatus("200 OK").writeHeader("Some", "Value").write("Hello world!");
});

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `void` |

#### Returns

`void`

#### Inherited from

HttpResponse.cork

#### Defined in

node_modules/uWebSockets.js/index.d.ts:192

___

### end

▸ **end**(`body?`): `HttpResponse`

Ends this response by copying the contents of body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | `RecognizedString` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.end

#### Defined in

node_modules/uWebSockets.js/index.d.ts:142

___

### getProxiedRemoteAddress

▸ **getProxiedRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes), as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Inherited from

HttpResponse.getProxiedRemoteAddress

#### Defined in

node_modules/uWebSockets.js/index.d.ts:174

___

### getProxiedRemoteAddressAsText

▸ **getProxiedRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text, as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Inherited from

HttpResponse.getProxiedRemoteAddressAsText

#### Defined in

node_modules/uWebSockets.js/index.d.ts:177

___

### getRemoteAddress

▸ **getRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes).

#### Returns

`ArrayBuffer`

#### Inherited from

HttpResponse.getRemoteAddress

#### Defined in

node_modules/uWebSockets.js/index.d.ts:168

___

### getRemoteAddressAsText

▸ **getRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text.

#### Returns

`ArrayBuffer`

#### Inherited from

HttpResponse.getRemoteAddressAsText

#### Defined in

node_modules/uWebSockets.js/index.d.ts:171

___

### getWriteOffset

▸ **getWriteOffset**(): `number`

Returns the global byte write offset for this response. Use with onWritable.

#### Returns

`number`

#### Inherited from

HttpResponse.getWriteOffset

#### Defined in

node_modules/uWebSockets.js/index.d.ts:150

___

### onAborted

▸ **onAborted**(`handler`): `HttpResponse`

Every HttpResponse MUST have an attached abort handler IF you do not respond
to it immediately inside of the callback. Returning from an Http request handler
without attaching (by calling onAborted) an abort handler is ill-use and will termiante.
When this event emits, the response has been aborted and may not be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `void` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.onAborted

#### Defined in

node_modules/uWebSockets.js/index.d.ts:162

___

### onData

▸ **onData**(`handler`): `HttpResponse`

Handler for reading data from POST and such requests. You MUST copy the data of chunk if isLast is not true. We Neuter ArrayBuffers on return, making it zero length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`chunk`: `ArrayBuffer`, `isLast`: `boolean`) => `void` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.onData

#### Defined in

node_modules/uWebSockets.js/index.d.ts:165

___

### onWritable

▸ **onWritable**(`handler`): `HttpResponse`

Registers a handler for writable events. Continue failed write attempts in here.
You MUST return true for success, false for failure.
Writing nothing is always success, so by default you must return true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`offset`: `number`) => `boolean` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.onWritable

#### Defined in

node_modules/uWebSockets.js/index.d.ts:156

___

### tryEnd

▸ **tryEnd**(`fullBodyOrChunk`, `totalSize`): [`boolean`, `boolean`]

Ends this response, or tries to, by streaming appropriately sized chunks of body. Use in conjunction with onWritable. Returns tuple [ok, hasResponded].

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullBodyOrChunk` | `RecognizedString` |
| `totalSize` | `number` |

#### Returns

[`boolean`, `boolean`]

#### Inherited from

HttpResponse.tryEnd

#### Defined in

node_modules/uWebSockets.js/index.d.ts:144

___

### upgrade

▸ **upgrade**<`T`\>(`userData`, `secWebSocketKey`, `secWebSocketProtocol`, `secWebSocketExtensions`, `context`): `void`

Upgrades a HttpResponse to a WebSocket. See UpgradeAsync, UpgradeSync example files.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `userData` | `T` |
| `secWebSocketKey` | `RecognizedString` |
| `secWebSocketProtocol` | `RecognizedString` |
| `secWebSocketExtensions` | `RecognizedString` |
| `context` | `us_socket_context_t` |

#### Returns

`void`

#### Inherited from

HttpResponse.upgrade

#### Defined in

node_modules/uWebSockets.js/index.d.ts:195

___

### write

▸ **write**(`chunk`): `HttpResponse`

Enters or continues chunked encoding mode. Writes part of the response. End with zero length write.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `RecognizedString` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.write

#### Defined in

node_modules/uWebSockets.js/index.d.ts:140

___

### writeHeader

▸ **writeHeader**(`key`, `value`): `HttpResponse`

Writes key and value to HTTP response.
See writeStatus and corking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `RecognizedString` |
| `value` | `RecognizedString` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.writeHeader

#### Defined in

node_modules/uWebSockets.js/index.d.ts:138

___

### writeStatus

▸ **writeStatus**(`status`): `HttpResponse`

Writes the HTTP status message such as "200 OK".
This has to be called first in any response, otherwise
it will be called automatically with "200 OK".

If you want to send custom headers in a WebSocket
upgrade response, you have to call writeStatus with
"101 Switching Protocols" before you call writeHeader,
otherwise your first call to writeHeader will call
writeStatus with "200 OK" and the upgrade will fail.

As you can imagine, we format outgoing responses in a linear
buffer, not in a hash table. You can read about this in
the user manual under "corking".

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `RecognizedString` |

#### Returns

`HttpResponse`

#### Inherited from

HttpResponse.writeStatus

#### Defined in

node_modules/uWebSockets.js/index.d.ts:134
