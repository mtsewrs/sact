[@sact/core](../README.md) / [Exports](../modules.md) / HttpRequest

# Interface: HttpRequest

An HttpRequest is stack allocated and only accessible during the callback invocation.

## Hierarchy

- **`HttpRequest`**

  ↳ [`IRequest`](IRequest.md)

## Table of contents

### Methods

- [forEach](HttpRequest.md#foreach)
- [getHeader](HttpRequest.md#getheader)
- [getMethod](HttpRequest.md#getmethod)
- [getParameter](HttpRequest.md#getparameter)
- [getQuery](HttpRequest.md#getquery)
- [getUrl](HttpRequest.md#geturl)
- [setYield](HttpRequest.md#setyield)

## Methods

### forEach

▸ **forEach**(`cb`): `void`

Loops over all headers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`key`: `string`, `value`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:210

___

### getHeader

▸ **getHeader**(`lowerCaseKey`): `string`

Returns the lowercased header value or empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerCaseKey` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:198

___

### getMethod

▸ **getMethod**(): `string`

Returns the HTTP method, useful for "any" routes.

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:204

___

### getParameter

▸ **getParameter**(`index`): `string`

Returns the parsed parameter at index. Corresponds to route.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:200

___

### getQuery

▸ **getQuery**(): `string`

Returns the raw querystring (the part of URL after ? sign) or empty string.

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:206

▸ **getQuery**(`key`): `string`

Returns a decoded query parameter value or empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:208

___

### getUrl

▸ **getUrl**(): `string`

Returns the URL including initial /slash

#### Returns

`string`

#### Defined in

node_modules/uWebSockets.js/index.d.ts:202

___

### setYield

▸ **setYield**(`yield`): [`HttpRequest`](HttpRequest.md)

Setting yield to true is to say that this route handler did not handle the route, causing the router to continue looking for a matching route handler, or fail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `yield` | `boolean` |

#### Returns

[`HttpRequest`](HttpRequest.md)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:212
