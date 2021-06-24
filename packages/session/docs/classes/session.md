[@sact/session](../README.md) / [Exports](../modules.md) / Session

# Class: Session<STORE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `STORE` | extends `GenericStore` |

## Table of contents

### Constructors

- [constructor](session.md#constructor)

### Properties

- [\_id](session.md#_id)
- [\_options](session.md#_options)
- [\_reply](session.md#_reply)
- [\_req](session.md#_req)
- [\_store](session.md#_store)

### Methods

- [delete](session.md#delete)
- [get](session.md#get)
- [getKey](session.md#getkey)
- [getSessionId](session.md#getsessionid)
- [set](session.md#set)
- [setCookie](session.md#setcookie)
- [setCostumCookie](session.md#setcostumcookie)

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
| `req` | `Request`<`Object`\> |
| `reply` | `Response`<`Object`\> |
| `store` | `STORE` |
| `options` | [`Options`](../interfaces/options.md) |

#### Defined in

session/src/session.ts:18

## Properties

### \_id

• **\_id**: `string`

#### Defined in

session/src/session.ts:16

___

### \_options

• **\_options**: [`Options`](../interfaces/options.md)

#### Defined in

session/src/session.ts:15

___

### \_reply

• **\_reply**: `Response`<`Object`\>

#### Defined in

session/src/session.ts:18

___

### \_req

• **\_req**: `Request`<`Object`\>

#### Defined in

session/src/session.ts:17

___

### \_store

• **\_store**: `STORE`

#### Defined in

session/src/session.ts:14

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

session/src/session.ts:67

___

### get

▸ **get**(): `Promise`<`Object`\>

#### Returns

`Promise`<`Object`\>

#### Defined in

session/src/session.ts:54

___

### getKey

▸ **getKey**(): `string`

#### Returns

`string`

#### Defined in

session/src/session.ts:50

___

### getSessionId

▸ **getSessionId**(): `string`

#### Returns

`string`

#### Defined in

session/src/session.ts:27

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

session/src/session.ts:61

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

session/src/session.ts:44

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

session/src/session.ts:39
