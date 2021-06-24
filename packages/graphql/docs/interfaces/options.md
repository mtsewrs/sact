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

graphql/src/graphql.ts:13

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

graphql/src/graphql.ts:12

___

### path

• `Optional` **path**: `string`

#### Defined in

graphql/src/graphql.ts:10

___

### playgroundOptions

• `Optional` **playgroundOptions**: `RenderPageOptions`

#### Defined in

graphql/src/graphql.ts:11

___

### schema

• **schema**: `GraphQLSchema`

#### Defined in

graphql/src/graphql.ts:17
