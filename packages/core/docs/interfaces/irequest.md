[@sact/core](../README.md) / [Exports](../modules.md) / IRequest

# Interface: IRequest

## Hierarchy

- `HttpRequest`

  ↳ **`IRequest`**

## Table of contents

### Methods

- [forEach](irequest.md#foreach)
- [getHeader](irequest.md#getheader)
- [getMethod](irequest.md#getmethod)
- [getParameter](irequest.md#getparameter)
- [getQuery](irequest.md#getquery)
- [getUrl](irequest.md#geturl)
- [setYield](irequest.md#setyield)

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

HttpRequest.forEach

#### Defined in

node_modules/uWebSockets.js/index.d.ts:216

___

### getHeader

▸ **getHeader**(`lowerCaseKey`): `string`

Returns the lowercased header value or empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerCaseKey` | `RecognizedString` |

#### Returns

`string`

#### Inherited from

HttpRequest.getHeader

#### Defined in

node_modules/uWebSockets.js/index.d.ts:204

___

### getMethod

▸ **getMethod**(): `string`

Returns the HTTP method, useful for "any" routes.

#### Returns

`string`

#### Inherited from

HttpRequest.getMethod

#### Defined in

node_modules/uWebSockets.js/index.d.ts:210

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

HttpRequest.getParameter

#### Defined in

node_modules/uWebSockets.js/index.d.ts:206

___

### getQuery

▸ **getQuery**(): `string`

Returns the raw querystring (the part of URL after ? sign) or empty string.

#### Returns

`string`

#### Inherited from

HttpRequest.getQuery

#### Defined in

node_modules/uWebSockets.js/index.d.ts:212

▸ **getQuery**(`key`): `string`

Returns a decoded query parameter value or empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Inherited from

HttpRequest.getQuery

#### Defined in

node_modules/uWebSockets.js/index.d.ts:214

___

### getUrl

▸ **getUrl**(): `string`

Returns the URL including initial /slash

#### Returns

`string`

#### Inherited from

HttpRequest.getUrl

#### Defined in

node_modules/uWebSockets.js/index.d.ts:208

___

### setYield

▸ **setYield**(`yield`): `HttpRequest`

Setting yield to true is to say that this route handler did not handle the route, causing the router to continue looking for a matching route handler, or fail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `yield` | `boolean` |

#### Returns

`HttpRequest`

#### Inherited from

HttpRequest.setYield

#### Defined in

node_modules/uWebSockets.js/index.d.ts:218
