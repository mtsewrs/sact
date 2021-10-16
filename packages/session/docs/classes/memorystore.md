[@sact/session](../README.md) / [Exports](../modules.md) / MemoryStore

# Class: MemoryStore

## Hierarchy

- `GenericStore`

  ↳ **`MemoryStore`**

## Table of contents

### Constructors

- [constructor](memorystore.md#constructor)

### Properties

- [byteLength](memorystore.md#bytelength)
- [prefix](memorystore.md#prefix)
- [store](memorystore.md#store)

### Methods

- [createSessionId](memorystore.md#createsessionid)
- [delete](memorystore.md#delete)
- [get](memorystore.md#get)
- [getReferenceKey](memorystore.md#getreferencekey)
- [getSessionKey](memorystore.md#getsessionkey)
- [set](memorystore.md#set)

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

[session/src/memory-store.ts:11](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/memory-store.ts#L11)

## Properties

### byteLength

• `Optional` **byteLength**: `number`

#### Inherited from

GenericStore.byteLength

#### Defined in

[session/src/generic-store.ts:12](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/generic-store.ts#L12)

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

GenericStore.prefix

#### Defined in

[session/src/generic-store.ts:11](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/generic-store.ts#L11)

___

### store

• **store**: `Map`<`string`, `any`\>

#### Defined in

[session/src/memory-store.ts:11](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/memory-store.ts#L11)

## Methods

### createSessionId

▸ **createSessionId**(): `string`

#### Returns

`string`

#### Inherited from

GenericStore.createSessionId

#### Defined in

[session/src/generic-store.ts:24](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/generic-store.ts#L24)

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

[session/src/memory-store.ts:28](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/memory-store.ts#L28)

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

[session/src/memory-store.ts:17](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/memory-store.ts#L17)

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

[session/src/generic-store.ts:32](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/generic-store.ts#L32)

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

[session/src/generic-store.ts:28](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/generic-store.ts#L28)

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

[session/src/memory-store.ts:22](https://github.com/mattiasewers/sact/blob/df76a34/packages/session/src/memory-store.ts#L22)
