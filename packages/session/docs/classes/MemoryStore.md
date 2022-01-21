[@sact/session](../README.md) / [Exports](../modules.md) / MemoryStore

# Class: MemoryStore

## Hierarchy

- `GenericStore`

  ↳ **`MemoryStore`**

## Table of contents

### Constructors

- [constructor](MemoryStore.md#constructor)

### Properties

- [byteLength](MemoryStore.md#bytelength)
- [prefix](MemoryStore.md#prefix)
- [store](MemoryStore.md#store)

### Methods

- [createSessionId](MemoryStore.md#createsessionid)
- [delete](MemoryStore.md#delete)
- [get](MemoryStore.md#get)
- [getReferenceKey](MemoryStore.md#getreferencekey)
- [getSessionKey](MemoryStore.md#getsessionkey)
- [set](MemoryStore.md#set)

## Constructors

### constructor

• **new MemoryStore**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` |

#### Overrides

GenericStore.constructor

#### Defined in

[memory-store.ts:13](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/memory-store.ts#L13)

## Properties

### byteLength

• **byteLength**: `number`

#### Inherited from

GenericStore.byteLength

#### Defined in

[generic-store.ts:12](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L12)

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

GenericStore.prefix

#### Defined in

[generic-store.ts:11](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/generic-store.ts#L11)

___

### store

• **store**: `Map`<`string`, `any`\>

#### Defined in

[memory-store.ts:11](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/memory-store.ts#L11)

## Methods

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

▸ **delete**(`session_id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |

#### Returns

`void`

#### Defined in

[memory-store.ts:28](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/memory-store.ts#L28)

___

### get

▸ **get**(`session_id`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |

#### Returns

`any`

#### Defined in

[memory-store.ts:17](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/memory-store.ts#L17)

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

▸ **set**(`session_id`, `value`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session_id` | `string` |
| `value` | `string` |
| `meta` | `Object` |

#### Returns

`void`

#### Defined in

[memory-store.ts:22](https://github.com/mattiasewers/sact/blob/982c487/packages/session/src/memory-store.ts#L22)
