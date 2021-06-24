[@sact/shine](README.md) / Exports

# @sact/shine

## Table of contents

### Interfaces

- [Options](interfaces/options.md)

### Type aliases

- [Ctx](modules.md#ctx)

### Functions

- [shine](modules.md#shine)

## Type aliases

### Ctx

Ƭ **Ctx**<`T`\>: { `isWs`: `boolean` ; `params`: `T`[``"params"``] \| `any` ; `req?`: `Request`<`BodyReq` & `T`[``"req"``]\> ; `res?`: `Response`<`T`[``"res"``]\>  } & `T`[``"context"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

index.ts:8

## Functions

### shine

▸ `Const` **shine**(`sact`, `opt?`): `void` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sact` | `Sact`<`BodyReq`, `unknown`\> |
| `opt?` | [`Options`](interfaces/options.md) |

#### Returns

`void` \| `Promise`<`any`\>

#### Defined in

index.ts:36
