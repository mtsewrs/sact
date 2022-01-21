[@sact/core](../README.md) / [Exports](../modules.md) / IRequest

# Interface: IRequest

## Hierarchy

- [`HttpRequest`](HttpRequest.md)

  ↳ **`IRequest`**

## Table of contents

### Methods

- [forEach](IRequest.md#foreach)
- [getHeader](IRequest.md#getheader)
- [getMethod](IRequest.md#getmethod)
- [getParameter](IRequest.md#getparameter)
- [getQuery](IRequest.md#getquery)
- [getUrl](IRequest.md#geturl)
- [setYield](IRequest.md#setyield)

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

#### Inherited from

[HttpRequest](HttpRequest.md).[forEach](HttpRequest.md#foreach)

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

#### Inherited from

[HttpRequest](HttpRequest.md).[getHeader](HttpRequest.md#getheader)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:198

___

### getMethod

▸ **getMethod**(): `string`

Returns the HTTP method, useful for "any" routes.

#### Returns

`string`

#### Inherited from

[HttpRequest](HttpRequest.md).[getMethod](HttpRequest.md#getmethod)

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

#### Inherited from

[HttpRequest](HttpRequest.md).[getParameter](HttpRequest.md#getparameter)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:200

___

### getQuery

▸ **getQuery**(): `string`

Returns the raw querystring (the part of URL after ? sign) or empty string.

#### Returns

`string`

#### Inherited from

[HttpRequest](HttpRequest.md).[getQuery](HttpRequest.md#getquery)

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

#### Inherited from

[HttpRequest](HttpRequest.md).[getQuery](HttpRequest.md#getquery)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:208

___

### getUrl

▸ **getUrl**(): `string`

Returns the URL including initial /slash

#### Returns

`string`

#### Inherited from

[HttpRequest](HttpRequest.md).[getUrl](HttpRequest.md#geturl)

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

#### Inherited from

[HttpRequest](HttpRequest.md).[setYield](HttpRequest.md#setyield)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:212
