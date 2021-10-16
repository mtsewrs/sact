[@sact/auth](../README.md) / [Exports](../modules.md) / AuthReq

# Interface: AuthReq

## Table of contents

### Properties

- [authenticate](authreq.md#authenticate)
- [authenticateOrFail](authreq.md#authenticateorfail)
- [login](authreq.md#login)
- [logout](authreq.md#logout)
- [user](authreq.md#user)

## Properties

### authenticate

• **authenticate**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Authenticate the user

```typescript
await req.authenticate() //  👈 All you need to do, the user will then be available on req.user
```

##### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:35](https://github.com/mattiasewers/sact/blob/df76a34/packages/auth/src/auth.ts#L35)

___

### authenticateOrFail

• **authenticateOrFail**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Authenticate the user or throw a 401 status if failed

```typescript
await req.authenticateOrFail() //  👈 All you need to do, the user will then be available on req.user
```

##### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:43](https://github.com/mattiasewers/sact/blob/df76a34/packages/auth/src/auth.ts#L43)

___

### login

• **login**: <T\>(`id`: `string`, `meta?`: `T`) => `Promise`<`void`\>

#### Type declaration

▸ <`T`\>(`id`, `meta?`): `Promise`<`void`\>

Login in the user by id

```typescript
// login the user by id and some optional meta data
await req.login('some-user-id', {})
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `meta?` | `T` |

##### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:27](https://github.com/mattiasewers/sact/blob/df76a34/packages/auth/src/auth.ts#L27)

___

### logout

• **logout**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Log user out

##### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:18](https://github.com/mattiasewers/sact/blob/df76a34/packages/auth/src/auth.ts#L18)

___

### user

• **user**: `string`

#### Defined in

[auth.ts:14](https://github.com/mattiasewers/sact/blob/df76a34/packages/auth/src/auth.ts#L14)
