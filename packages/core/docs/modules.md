[@sact/core](README.md) / Exports

# @sact/core

This is the doc comment for file1.ts

Specify this is a module comment and rename it to my-module:

## Table of contents

### Enumerations

- [sizes](enums/sizes.md)

### Classes

- [HttpError](classes/httperror.md)
- [Sact](classes/sact.md)

### Interfaces

- [BodyReq](interfaces/bodyreq.md)
- [IRequest](interfaces/irequest.md)
- [IResponse](interfaces/iresponse.md)
- [Options](interfaces/options.md)
- [Server](interfaces/server.md)

### Type aliases

- [CallbackFunction](modules.md#callbackfunction)
- [FileRes](modules.md#fileres)
- [PLuginFunction](modules.md#pluginfunction)
- [Request](modules.md#request)
- [Response](modules.md#response)
- [cb](modules.md#cb)

### Functions

- [body](modules.md#body)
- [cors](modules.md#cors)
- [serve](modules.md#serve)

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

packages/core/src/types.ts:19

___

### FileRes

Ƭ **FileRes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sendFile` | (`file`: `string`, `response`: [`Response`](modules.md#response)) => `Promise`<`void`\> |
| `stream` | `ReadStream` |

#### Defined in

packages/core/src/serve.ts:22

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

packages/core/src/sact.ts:165

___

### Request

Ƭ **Request**<`T`\>: [`IRequest`](interfaces/irequest.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

#### Defined in

packages/core/src/types.ts:42

___

### Response

Ƭ **Response**<`T`\>: [`IResponse`](interfaces/iresponse.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

#### Defined in

packages/core/src/types.ts:28

___

### cb

Ƭ **cb**: (`err?`: `Error`) => `void`

#### Type declaration

▸ (`err?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `Error` |

##### Returns

`void`

#### Defined in

packages/core/src/types.ts:9

## Functions

### body

▸ `Const` **body**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | [`Sact`](classes/sact.md)<[`BodyReq`](interfaces/bodyreq.md), `unknown`\> |
| `opt?` | `Options` |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

packages/core/src/body.ts:29

___

### cors

▸ `Const` **cors**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | [`Sact`](classes/sact.md)<`unknown`, `unknown`\> |
| `opt?` | `Options` |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

packages/core/src/cors.ts:17

___

### serve

▸ `Const` **serve**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | [`Sact`](classes/sact.md)<`unknown`, `unknown`\> |
| `opt?` | `Options` |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

packages/core/src/serve.ts:27
