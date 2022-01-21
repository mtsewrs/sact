[@sact/graphql](../README.md) / [Exports](../modules.md) / Options

# Interface: Options

## Table of contents

### Properties

- [path](Options.md#path)
- [playgroundOptions](Options.md#playgroundoptions)
- [schema](Options.md#schema)

### Methods

- [context](Options.md#context)
- [formatError](Options.md#formaterror)

## Properties

### path

• `Optional` **path**: `string`

#### Defined in

[graphql.ts:17](https://github.com/mattiasewers/sact/blob/982c487/packages/graphql/src/graphql.ts#L17)

___

### playgroundOptions

• `Optional` **playgroundOptions**: `RenderPageOptions`

#### Defined in

[graphql.ts:18](https://github.com/mattiasewers/sact/blob/982c487/packages/graphql/src/graphql.ts#L18)

___

### schema

• **schema**: `GraphQLSchema`

#### Defined in

[graphql.ts:24](https://github.com/mattiasewers/sact/blob/982c487/packages/graphql/src/graphql.ts#L24)

## Methods

### context

▸ `Optional` **context**(`res`, `req`): { [key: string]: `any`;  } \| `Promise`<{ [key: string]: `any`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `IResponse` |
| `req` | `IRequest` |

#### Returns

{ [key: string]: `any`;  } \| `Promise`<{ [key: string]: `any`;  }\>

#### Defined in

[graphql.ts:20](https://github.com/mattiasewers/sact/blob/982c487/packages/graphql/src/graphql.ts#L20)

___

### formatError

▸ `Optional` **formatError**(`err`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `GraphQLError` |

#### Returns

`any`

#### Defined in

[graphql.ts:19](https://github.com/mattiasewers/sact/blob/982c487/packages/graphql/src/graphql.ts#L19)
