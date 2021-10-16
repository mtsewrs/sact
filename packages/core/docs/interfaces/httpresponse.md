[@sact/core](../README.md) / [Exports](../modules.md) / HttpResponse

# Interface: HttpResponse

An HttpResponse is valid until either onAborted callback or any of the .end/.tryEnd calls succeed. You may attach user data to this object.

## Hierarchy

- **`HttpResponse`**

  ↳ [`IResponse`](iresponse.md)

## Indexable

▪ [key: `string`]: `any`

Arbitrary user data may be attached to this object

## Table of contents

### Methods

- [close](httpresponse.md#close)
- [cork](httpresponse.md#cork)
- [end](httpresponse.md#end)
- [getProxiedRemoteAddress](httpresponse.md#getproxiedremoteaddress)
- [getProxiedRemoteAddressAsText](httpresponse.md#getproxiedremoteaddressastext)
- [getRemoteAddress](httpresponse.md#getremoteaddress)
- [getRemoteAddressAsText](httpresponse.md#getremoteaddressastext)
- [getWriteOffset](httpresponse.md#getwriteoffset)
- [onAborted](httpresponse.md#onaborted)
- [onData](httpresponse.md#ondata)
- [onWritable](httpresponse.md#onwritable)
- [tryEnd](httpresponse.md#tryend)
- [upgrade](httpresponse.md#upgrade)
- [write](httpresponse.md#write)
- [writeHeader](httpresponse.md#writeheader)
- [writeStatus](httpresponse.md#writestatus)

## Methods

### close

▸ **close**(): [`HttpResponse`](httpresponse.md)

Immediately force closes the connection. Any onAborted callback will run.

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:154

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

#### Defined in

node_modules/uWebSockets.js/index.d.ts:199

___

### end

▸ **end**(`body?`): [`HttpResponse`](httpresponse.md)

Ends this response by copying the contents of body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:149

___

### getProxiedRemoteAddress

▸ **getProxiedRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes), as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:181

___

### getProxiedRemoteAddressAsText

▸ **getProxiedRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text, as reported by the PROXY Protocol v2 compatible proxy.

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:184

___

### getRemoteAddress

▸ **getRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address in binary format (4 or 16 bytes).

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:175

___

### getRemoteAddressAsText

▸ **getRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text.

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:178

___

### getWriteOffset

▸ **getWriteOffset**(): `number`

Returns the global byte write offset for this response. Use with onWritable.

#### Returns

`number`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:157

___

### onAborted

▸ **onAborted**(`handler`): [`HttpResponse`](httpresponse.md)

Every HttpResponse MUST have an attached abort handler IF you do not respond
to it immediately inside of the callback. Returning from an Http request handler
without attaching (by calling onAborted) an abort handler is ill-use and will termiante.
When this event emits, the response has been aborted and may not be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | () => `void` |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:169

___

### onData

▸ **onData**(`handler`): [`HttpResponse`](httpresponse.md)

Handler for reading data from POST and such requests. You MUST copy the data of chunk if isLast is not true. We Neuter ArrayBuffers on return, making it zero length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`chunk`: `ArrayBuffer`, `isLast`: `boolean`) => `void` |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:172

___

### onWritable

▸ **onWritable**(`handler`): [`HttpResponse`](httpresponse.md)

Registers a handler for writable events. Continue failed write attempts in here.
You MUST return true for success, false for failure.
Writing nothing is always success, so by default you must return true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`offset`: `number`) => `boolean` |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:163

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

#### Defined in

node_modules/uWebSockets.js/index.d.ts:151

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

#### Defined in

node_modules/uWebSockets.js/index.d.ts:202

___

### write

▸ **write**(`chunk`): [`HttpResponse`](httpresponse.md)

Enters or continues chunked encoding mode. Writes part of the response. End with zero length write.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:147

___

### writeHeader

▸ **writeHeader**(`key`, `value`): [`HttpResponse`](httpresponse.md)

Writes key and value to HTTP response.
See writeStatus and corking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RecognizedString`](../modules.md#recognizedstring) |
| `value` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:145

___

### writeStatus

▸ **writeStatus**(`status`): [`HttpResponse`](httpresponse.md)

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

[`HttpResponse`](httpresponse.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:141
