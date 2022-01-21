[@sact/auth](../README.md) / [Exports](../modules.md) / AuthReq

# Interface: AuthReq

## Table of contents

### Properties

- [user](AuthReq.md#user)

### Methods

- [authenticate](AuthReq.md#authenticate)
- [authenticateOrFail](AuthReq.md#authenticateorfail)
- [login](AuthReq.md#login)
- [logout](AuthReq.md#logout)

## Properties

### user

• `Optional` **user**: `string`

#### Defined in

[auth.ts:15](https://github.com/mattiasewers/sact/blob/982c487/packages/auth/src/auth.ts#L15)

## Methods

### authenticate

▸ **authenticate**(): `Promise`<`void`\>

Authenticate the user

```typescript
await req.authenticate() //  👈 All you need to do, the user will then be available on req.user
```

#### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:36](https://github.com/mattiasewers/sact/blob/982c487/packages/auth/src/auth.ts#L36)

___

### authenticateOrFail

▸ **authenticateOrFail**(): `Promise`<`void`\>

Authenticate the user or throw a 401 status if failed

```typescript
await req.authenticateOrFail() //  👈 All you need to do, the user will then be available on req.user
```

#### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:44](https://github.com/mattiasewers/sact/blob/982c487/packages/auth/src/auth.ts#L44)

___

### login

▸ **login**<`T`\>(`id`, `meta?`): `Promise`<`void`\>

Login in the user by id

```typescript
// login the user by id and some optional meta data
await req.login('some-user-id', {})
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `meta?` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:28](https://github.com/mattiasewers/sact/blob/982c487/packages/auth/src/auth.ts#L28)

___

### logout

▸ **logout**(): `Promise`<`void`\>

Log user out

#### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:19](https://github.com/mattiasewers/sact/blob/982c487/packages/auth/src/auth.ts#L19)
