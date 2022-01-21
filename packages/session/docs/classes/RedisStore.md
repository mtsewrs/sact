[@sact/session](../README.md) / [Exports](../modules.md) / RedisStore

# Class: RedisStore

## Hierarchy

- `GenericStore`

  ↳ **`RedisStore`**

## Table of contents

### Constructors

- [constructor](RedisStore.md#constructor)

### Properties

- [byteLength](RedisStore.md#bytelength)
- [client](RedisStore.md#client)
- [maxAge](RedisStore.md#maxage)
- [prefix](RedisStore.md#prefix)

### Methods

- [close](RedisStore.md#close)
- [connect](RedisStore.md#connect)
- [createSessionId](RedisStore.md#createsessionid)
- [delete](RedisStore.md#delete)
- [deleteActiveSessions](RedisStore.md#deleteactivesessions)
- [get](RedisStore.md#get)
- [getActiveSessions](RedisStore.md#getactivesessions)
- [getReferenceKey](RedisStore.md#getreferencekey)
- [getSessionKey](RedisStore.md#getsessionkey)
- [set](RedisStore.md#set)

## Constructors

### constructor

• **new RedisStore**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` |

#### Overrides

GenericStore.constructor

#### Defined in

[redis-store.ts:20](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L20)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

GenericStore.byteLength

#### Defined in

[generic-store.ts:12](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L12)

___

### client

• `Optional` **client**: `any`

#### Defined in

[redis-store.ts:17](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L17)

___

### maxAge

• `Optional` **maxAge**: `number`

#### Defined in

[redis-store.ts:18](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L18)

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

GenericStore.prefix

#### Defined in

[generic-store.ts:11](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L11)

## Methods

### close

▸ **close**(): `any`

#### Returns

`any`

#### Defined in

[redis-store.ts:32](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L32)

___

### connect

▸ **connect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[redis-store.ts:36](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L36)

___

### createSessionId

▸ **createSessionId**(): `string`

#### Returns

`string`

#### Inherited from

GenericStore.createSessionId

#### Defined in

[generic-store.ts:24](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L24)

___

### delete

▸ **delete**(`session_id`, `value`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |
| `value` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[redis-store.ts:86](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L86)

___

### deleteActiveSessions

▸ **deleteActiveSessions**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[redis-store.ts:44](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L44)

___

### get

▸ **get**(`session_id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[redis-store.ts:65](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L65)

___

### getActiveSessions

▸ **getActiveSessions**(): `any`

#### Returns

`any`

#### Defined in

[redis-store.ts:61](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L61)

___

### getReferenceKey

▸ **getReferenceKey**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

GenericStore.getReferenceKey

#### Defined in

[generic-store.ts:32](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L32)

___

### getSessionKey

▸ **getSessionKey**(`session_id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |

#### Returns

`string`

#### Inherited from

GenericStore.getSessionKey

#### Defined in

[generic-store.ts:28](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L28)

___

### set

▸ **set**(`session_id`, `id`, `meta`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |
| `id` | `string` |
| `meta` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[redis-store.ts:70](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/redis-store.ts#L70)
