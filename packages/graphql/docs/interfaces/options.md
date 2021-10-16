[@sact/graphql](../README.md) / [Exports](../modules.md) / Options

# Interface: Options

## Table of contents

### Properties

- [context](options.md#context)
- [formatError](options.md#formaterror)
- [path](options.md#path)
- [playgroundOptions](options.md#playgroundoptions)
- [schema](options.md#schema)

## Properties

### context

• `Optional` **context**: (`res`: `Response`<`Object`\>, `req`: `Request`<`Object`\>) => { [key: string]: `any`;  } \| `Promise`<`Object`\>

#### Type declaration

▸ (`res`, `req`): { [key: string]: `any`;  } \| `Promise`<`Object`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `Response`<`Object`\> |
| `req` | `Request`<`Object`\> |

##### Returns

{ [key: string]: `any`;  } \| `Promise`<`Object`\>

#### Defined in

[graphql/src/graphql.ts:13](https://github.com/mattiasewers/sact/blob/df76a34/packages/graphql/src/graphql.ts#L13)

___

### formatError

• `Optional` **formatError**: (`err`: `GraphQLError`) => `any`

#### Type declaration

▸ (`err`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `GraphQLError` |

##### Returns

`any`

#### Defined in

[graphql/src/graphql.ts:12](https://github.com/mattiasewers/sact/blob/df76a34/packages/graphql/src/graphql.ts#L12)

___

### path

• `Optional` **path**: `string`

#### Defined in

[graphql/src/graphql.ts:10](https://github.com/mattiasewers/sact/blob/df76a34/packages/graphql/src/graphql.ts#L10)

___

### playgroundOptions

• `Optional` **playgroundOptions**: `RenderPageOptions`

#### Defined in

[graphql/src/graphql.ts:11](https://github.com/mattiasewers/sact/blob/df76a34/packages/graphql/src/graphql.ts#L11)

___

### schema

• **schema**: `GraphQLSchema`

#### Defined in

[graphql/src/graphql.ts:17](https://github.com/mattiasewers/sact/blob/df76a34/packages/graphql/src/graphql.ts#L17)
