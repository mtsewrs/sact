[@sact/core](../README.md) / [Exports](../modules.md) / WebSocket

# Interface: WebSocket

A WebSocket connection that is valid from open to close event.
Read more about this in the user manual.

## Indexable

▪ [key: `string`]: `any`

Arbitrary user data may be attached to this object. In C++ this is done by using getUserData().

## Table of contents

### Methods

- [close](WebSocket.md#close)
- [cork](WebSocket.md#cork)
- [end](WebSocket.md#end)
- [getBufferedAmount](WebSocket.md#getbufferedamount)
- [getRemoteAddress](WebSocket.md#getremoteaddress)
- [getRemoteAddressAsText](WebSocket.md#getremoteaddressastext)
- [getTopics](WebSocket.md#gettopics)
- [isSubscribed](WebSocket.md#issubscribed)
- [ping](WebSocket.md#ping)
- [publish](WebSocket.md#publish)
- [send](WebSocket.md#send)
- [subscribe](WebSocket.md#subscribe)
- [unsubscribe](WebSocket.md#unsubscribe)

## Methods

### close

▸ **close**(): `void`

Forcefully closes this WebSocket. Immediately calls the close handler.
No WebSocket close message is sent.

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:71

___

### cork

▸ **cork**(`cb`): [`WebSocket`](WebSocket.md)

See HttpResponse.cork. Takes a function in which the socket is corked (packing many sends into one single syscall/SSL block)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `void` |

#### Returns

[`WebSocket`](WebSocket.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:94

___

### end

▸ **end**(`code?`, `shortMessage?`): `void`

Gracefully closes this WebSocket. Immediately calls the close handler.
A WebSocket close message is sent with code and shortMessage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `shortMessage?` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:66

___

### getBufferedAmount

▸ **getBufferedAmount**(): `number`

Returns the bytes buffered in backpressure. This is similar to the bufferedAmount property in the browser counterpart.
Check backpressure example.

#### Returns

`number`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:61

___

### getRemoteAddress

▸ **getRemoteAddress**(): `ArrayBuffer`

Returns the remote IP address. Note that the returned IP is binary, not text.

IPv4 is 4 byte long and can be converted to text by printing every byte as a digit between 0 and 255.
IPv6 is 16 byte long and can be converted to text in similar ways, but you typically print digits in HEX.

See getRemoteAddressAsText() for a text version.

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:103

___

### getRemoteAddressAsText

▸ **getRemoteAddressAsText**(): `ArrayBuffer`

Returns the remote IP address as text. See RecognizedString.

#### Returns

`ArrayBuffer`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:106

___

### getTopics

▸ **getTopics**(): `string`[]

Returns a list of topics this websocket is subscribed to.

#### Returns

`string`[]

#### Defined in

node_modules/uWebSockets.js/index.d.ts:86

___

### isSubscribed

▸ **isSubscribed**(`topic`): `boolean`

Returns whether this websocket is subscribed to topic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:83

___

### ping

▸ **ping**(`message?`): `boolean`

Sends a ping control message. Returns true on success in similar ways as WebSocket.send does (regarding backpressure). This helper function correlates to WebSocket::send(message, uWS::OpCode::PING, ...) in C++.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:74

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): `boolean`

Publish a message under topic. Backpressure is managed according to maxBackpressure, closeOnBackpressureLimit settings.
Order is guaranteed since v20.

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

node_modules/uWebSockets.js/index.d.ts:91

___

### send

▸ **send**(`message`, `isBinary?`, `compress?`): `boolean`

Sends a message. Make sure to check getBufferedAmount() before sending. Returns true for success, false for built up backpressure that will drain when time is given.
Returning false does not mean nothing was sent, it only means backpressure was built up. This you can check by calling getBufferedAmount() afterwards.

Make sure you properly understand the concept of backpressure. Check the backpressure example file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`RecognizedString`](../modules.md#recognizedstring) |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:56

___

### subscribe

▸ **subscribe**(`topic`): `boolean`

Subscribe to a topic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:77

___

### unsubscribe

▸ **unsubscribe**(`topic`): `boolean`

Unsubscribe from a topic. Returns true on success, if the WebSocket was subscribed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`boolean`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:80
