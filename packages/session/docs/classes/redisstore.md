[@sact/session](../README.md) / [Exports](../modules.md) / RedisStore

# Class: RedisStore

## Hierarchy

- `GenericStore`

  ↳ **`RedisStore`**

## Table of contents

### Constructors

- [constructor](redisstore.md#constructor)

### Properties

- [byteLength](redisstore.md#bytelength)
- [client](redisstore.md#client)
- [maxAge](redisstore.md#maxage)
- [prefix](redisstore.md#prefix)

### Methods

- [close](redisstore.md#close)
- [connect](redisstore.md#connect)
- [createSessionId](redisstore.md#createsessionid)
- [delete](redisstore.md#delete)
- [deleteActiveSessions](redisstore.md#deleteactivesessions)
- [get](redisstore.md#get)
- [getActiveSessions](redisstore.md#getactivesessions)
- [getReferenceKey](redisstore.md#getreferencekey)
- [getSessionKey](redisstore.md#getsessionkey)
- [set](redisstore.md#set)

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

session/src/redis-store.ts:18

## Properties

### byteLength

• `Optional` **byteLength**: `number`

#### Inherited from

GenericStore.byteLength

#### Defined in

session/src/generic-store.ts:12

___

### client

• `Optional` **client**: `any`

#### Defined in

session/src/redis-store.ts:17

___

### maxAge

• `Optional` **maxAge**: `number`

#### Defined in

session/src/redis-store.ts:18

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

GenericStore.prefix

#### Defined in

session/src/generic-store.ts:11

## Methods

### close

▸ **close**(): `any`

#### Returns

`any`

#### Defined in

session/src/redis-store.ts:26

___

### connect

▸ **connect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

session/src/redis-store.ts:30

___

### createSessionId

▸ **createSessionId**(): `string`

#### Returns

`string`

#### Inherited from

GenericStore.createSessionId

#### Defined in

session/src/generic-store.ts:24

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

session/src/redis-store.ts:80

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

session/src/redis-store.ts:38

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

session/src/redis-store.ts:59

___

### getActiveSessions

▸ **getActiveSessions**(): `any`

#### Returns

`any`

#### Defined in

session/src/redis-store.ts:55

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

session/src/generic-store.ts:32

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

session/src/generic-store.ts:28

___

### set

▸ **set**(`session_id`, `id`, `meta?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |
| `id` | `string` |
| `meta` | `Object` |

#### Returns

`Promise`<`any`\>

#### Defined in

session/src/redis-store.ts:64
