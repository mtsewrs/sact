[@sact/core](../README.md) / [Exports](../modules.md) / HttpError

# Class: HttpError

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](HttpError.md#constructor)

### Properties

- [message](HttpError.md#message)
- [name](HttpError.md#name)
- [stack](HttpError.md#stack)
- [status](HttpError.md#status)
- [prepareStackTrace](HttpError.md#preparestacktrace)
- [stackTraceLimit](HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](HttpError.md#capturestacktrace)

## Constructors

### constructor

• **new HttpError**(`message`, `status?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `status` | `number` | `400` |

#### Overrides

Error.constructor

#### Defined in

[packages/core/src/error.ts:4](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/error.ts#L4)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• **status**: `number`

#### Defined in

[packages/core/src/error.ts:2](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/error.ts#L2)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
