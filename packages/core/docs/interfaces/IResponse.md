[@sact/core](../README.md) / [Exports](../modules.md) / IResponse

# Interface: IResponse

## Hierarchy

- [`HttpResponse`](HttpResponse.md)

  ↳ **`IResponse`**

## Table of contents

### Properties

- [statusCode](IResponse.md#statuscode)

### Methods

- [close](IResponse.md#close)
- [cork](IResponse.md#cork)
- [end](IResponse.md#end)
- [getProxiedRemoteAddress](IResponse.md#getproxiedremoteaddress)
- [getProxiedRemoteAddressAsText](IResponse.md#getproxiedremoteaddressastext)
- [getRemoteAddress](IResponse.md#getremoteaddress)
- [getRemoteAddressAsText](IResponse.md#getremoteaddressastext)
- [getWriteOffset](IResponse.md#getwriteoffset)
- [onAborted](IResponse.md#onaborted)
- [onData](IResponse.md#ondata)
- [onWritable](IResponse.md#onwritable)
- [tryEnd](IResponse.md#tryend)
- [upgrade](IResponse.md#upgrade)
- [write](IResponse.md#write)
- [writeHeader](IResponse.md#writeheader)
- [writeStatus](IResponse.md#writestatus)

## Properties

### statusCode

• **statusCode**: `number`

#### Defined in

[packages/core/src/types.ts:18](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/types.ts#L18)

## Methods

### close

▸ **close**(): [`HttpResponse`](HttpResponse.md)

Immediately force closes the connection. Any onAborted callback will run.

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[close](HttpResponse.md#close)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:141

___

### cork

▸ **cork**(`cb`): [`HttpResponse`](HttpResponse.md)

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

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[cork](HttpResponse.md#cork)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:186

___

### end

▸ **end**(`body?`, `closeConnection?`): [`HttpResponse`](HttpResponse.md)

Ends this response by copying the contents of body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`RecognizedString`](../modules.md#recognizedstring) |
| `closeConnection?` | `boolean` |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[end](HttpResponse.md#end)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:136

___

### getProxiedRemoteAddress

▸ **getProxiedRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes), as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Inherited from

[HttpResponse](HttpResponse.md).[getProxiedRemoteAddress](HttpResponse.md#getproxiedremoteaddress)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:168

___

### getProxiedRemoteAddressAsText

▸ **getProxiedRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text, as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Inherited from

[HttpResponse](HttpResponse.md).[getProxiedRemoteAddressAsText](HttpResponse.md#getproxiedremoteaddressastext)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:171

___

### getRemoteAddress

▸ **getRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes).

#### Returns

`ArrayBuffer`

#### Inherited from

[HttpResponse](HttpResponse.md).[getRemoteAddress](HttpResponse.md#getremoteaddress)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:162

___

### getRemoteAddressAsText

▸ **getRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text.

#### Returns

`ArrayBuffer`

#### Inherited from

[HttpResponse](HttpResponse.md).[getRemoteAddressAsText](HttpResponse.md#getremoteaddressastext)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:165

___

### getWriteOffset

▸ **getWriteOffset**(): `number`

Returns the global byte write offset for this response. Use with onWritable.

#### Returns

`number`

#### Inherited from

[HttpResponse](HttpResponse.md).[getWriteOffset](HttpResponse.md#getwriteoffset)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:144

___

### onAborted

▸ **onAborted**(`handler`): [`HttpResponse`](HttpResponse.md)

Every HttpResponse MUST have an attached abort handler IF you do not respond
to it immediately inside of the callback. Returning from an Http request handler
without attaching (by calling onAborted) an abort handler is ill-use and will termiante.
When this event emits, the response has been aborted and may not be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `void` |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[onAborted](HttpResponse.md#onaborted)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:156

___

### onData

▸ **onData**(`handler`): [`HttpResponse`](HttpResponse.md)

Handler for reading data from POST and such requests. You MUST copy the data of chunk if isLast is not true. We Neuter ArrayBuffers on return, making it zero length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`chunk`: `ArrayBuffer`, `isLast`: `boolean`) => `void` |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[onData](HttpResponse.md#ondata)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:159

___

### onWritable

▸ **onWritable**(`handler`): [`HttpResponse`](HttpResponse.md)

Registers a handler for writable events. Continue failed write attempts in here.
You MUST return true for success, false for failure.
Writing nothing is always success, so by default you must return true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`offset`: `number`) => `boolean` |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[onWritable](HttpResponse.md#onwritable)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:150

___

### tryEnd

▸ **tryEnd**(`fullBodyOrChunk`, `totalSize`): [`boolean`, `boolean`]

Ends this response, or tries to, by streaming appropriately sized chunks of body. Use in conjunction with onWritable. Returns tuple [ok, hasResponded].

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullBodyOrChunk` | [`RecognizedString`](../modules.md#recognizedstring) |
| `totalSize` | `number` |

#### Returns

[`boolean`, `boolean`]

#### Inherited from

[HttpResponse](HttpResponse.md).[tryEnd](HttpResponse.md#tryend)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:138

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
| `secWebSocketKey` | [`RecognizedString`](../modules.md#recognizedstring) |
| `secWebSocketProtocol` | [`RecognizedString`](../modules.md#recognizedstring) |
| `secWebSocketExtensions` | [`RecognizedString`](../modules.md#recognizedstring) |
| `context` | [`us_socket_context_t`](us_socket_context_t.md) |

#### Returns

`void`

#### Inherited from

[HttpResponse](HttpResponse.md).[upgrade](HttpResponse.md#upgrade)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:189

___

### write

▸ **write**(`chunk`): `boolean`

Enters or continues chunked encoding mode. Writes part of the response. End with zero length write. Returns true if no backpressure was added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`boolean`

#### Inherited from

[HttpResponse](HttpResponse.md).[write](HttpResponse.md#write)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:134

___

### writeHeader

▸ **writeHeader**(`key`, `value`): [`HttpResponse`](HttpResponse.md)

Writes key and value to HTTP response.
See writeStatus and corking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RecognizedString`](../modules.md#recognizedstring) |
| `value` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[writeHeader](HttpResponse.md#writeheader)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:132

___

### writeStatus

▸ **writeStatus**(`status`): [`HttpResponse`](HttpResponse.md)

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
| `status` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

[`HttpResponse`](HttpResponse.md)

#### Inherited from

[HttpResponse](HttpResponse.md).[writeStatus](HttpResponse.md#writestatus)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:128
