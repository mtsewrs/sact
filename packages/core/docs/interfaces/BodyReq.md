[@sact/core](../README.md) / [Exports](../modules.md) / BodyReq

# Interface: BodyReq

## Table of contents

### Methods

- [fields](BodyReq.md#fields)
- [json](BodyReq.md#json)
- [stream](BodyReq.md#stream)

## Methods

### fields

▸ **fields**(): `Promise`<`undefined` \| [`MultipartField`](MultipartField.md)[]\>

#### Returns

`Promise`<`undefined` \| [`MultipartField`](MultipartField.md)[]\>

#### Defined in

[packages/core/src/body.ts:9](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/body.ts#L9)

___

### json

▸ **json**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | { [key: string]: `any`;  } |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/core/src/body.ts:8](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/body.ts#L8)

___

### stream

▸ **stream**(): `Promise`<`Readable`\>

#### Returns

`Promise`<`Readable`\>

#### Defined in

[packages/core/src/body.ts:10](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/body.ts#L10)
