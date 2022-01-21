[@sact/session](../README.md) / [Exports](../modules.md) / Session

# Class: Session<STORE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `STORE` | extends `GenericStore` |

## Table of contents

### Constructors

- [constructor](Session.md#constructor)

### Properties

- [\_id](Session.md#_id)
- [\_options](Session.md#_options)
- [\_reply](Session.md#_reply)
- [\_req](Session.md#_req)
- [\_store](Session.md#_store)

### Methods

- [delete](Session.md#delete)
- [get](Session.md#get)
- [getKey](Session.md#getkey)
- [getSessionId](Session.md#getsessionid)
- [set](Session.md#set)
- [setCookie](Session.md#setcookie)
- [setCostumCookie](Session.md#setcostumcookie)

## Constructors

### constructor

• **new Session**<`STORE`\>(`req`, `reply`, `store`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `STORE` | extends `GenericStore` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<{ `cookies`: { [key: string]: `any`;  }  }\> |
| `reply` | `IResponse` |
| `store` | `STORE` |
| `options` | [`Options`](../interfaces/Options.md) |

#### Defined in

[session.ts:24](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L24)

## Properties

### \_id

• **\_id**: `string`

#### Defined in

[session.ts:16](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L16)

___

### \_options

• **\_options**: [`Options`](../interfaces/Options.md)

#### Defined in

[session.ts:15](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L15)

___

### \_reply

• **\_reply**: `IResponse`

#### Defined in

[session.ts:22](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L22)

___

### \_req

• **\_req**: `Request`<{ `cookies`: { [key: string]: `any`;  }  }\>

#### Defined in

[session.ts:17](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L17)

___

### \_store

• **\_store**: `STORE`

#### Defined in

[session.ts:14](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L14)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[session.ts:81](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L81)

___

### get

▸ **get**(): `Promise`<{ [key: string]: `any`; `id`: `string`  }\>

#### Returns

`Promise`<{ [key: string]: `any`; `id`: `string`  }\>

#### Defined in

[session.ts:68](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L68)

___

### getKey

▸ **getKey**(): `string`

#### Returns

`string`

#### Defined in

[session.ts:64](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L64)

___

### getSessionId

▸ **getSessionId**(): `string`

#### Returns

`string`

#### Defined in

[session.ts:49](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L49)

___

### set

▸ **set**(`id`, `meta?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `meta?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[session.ts:75](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L75)

___

### setCookie

▸ **setCookie**(`unset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unset?` | `boolean` |

#### Returns

`void`

#### Defined in

[session.ts:58](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L58)

___

### setCostumCookie

▸ **setCostumCookie**(`name`, `value`, `unset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |
| `unset?` | `boolean` |

#### Returns

`void`

#### Defined in

[session.ts:53](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/session.ts#L53)
