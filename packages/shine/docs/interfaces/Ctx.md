[@sact/shine](../README.md) / [Exports](../modules.md) / Ctx

# Interface: Ctx<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Table of contents

### Properties

- [params](Ctx.md#params)
- [req](Ctx.md#req)
- [res](Ctx.md#res)

## Properties

### params

• **params**: `T`[``"params"``]

#### Defined in

[index.ts:14](https://github.com/mattiasewers/sact/blob/982c487/packages/shine/src/index.ts#L14)

___

### req

• **req**: `Request`<`BodyReq` & `T`[``"req"``]\>

#### Defined in

[index.ts:16](https://github.com/mattiasewers/sact/blob/982c487/packages/shine/src/index.ts#L16)

___

### res

• **res**: `Response`<`T`[``"res"``]\>

#### Defined in

[index.ts:15](https://github.com/mattiasewers/sact/blob/982c487/packages/shine/src/index.ts#L15)
