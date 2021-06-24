[@sact/auth](README.md) / Exports

# @sact/auth

## Table of contents

### Interfaces

- [Options](interfaces/options.md)

### Type aliases

- [AuthReq](modules.md#authreq)

### Functions

- [auth](modules.md#auth)

## Type aliases

### AuthReq

Ƭ **AuthReq**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authenticate` | () => `Promise`<`void`\> |
| `authenticateOrFail` | () => `Promise`<`void`\> |
| `login` | (`id`: `string`, `meta?`: `any`) => `Promise`<`void`\> |
| `user` | `string` \| ``null`` |

#### Defined in

auth.ts:13

## Functions

### auth

▸ `Const` **auth**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | `Sact`<`unknown`, `unknown`\> |
| `opt?` | [`Options`](interfaces/options.md) |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

auth.ts:66
