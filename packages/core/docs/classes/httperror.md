[@sact/core](../README.md) / [Exports](../modules.md) / HttpError

# Class: HttpError

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](httperror.md#constructor)

### Properties

- [message](httperror.md#message)
- [name](httperror.md#name)
- [stack](httperror.md#stack)
- [status](httperror.md#status)
- [prepareStackTrace](httperror.md#preparestacktrace)
- [stackTraceLimit](httperror.md#stacktracelimit)

### Methods

- [captureStackTrace](httperror.md#capturestacktrace)

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

[packages/core/src/error.ts:2](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/error.ts#L2)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### status

• **status**: `number`

#### Defined in

[packages/core/src/error.ts:2](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/error.ts#L2)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

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

node_modules/@types/node/globals.d.ts:140

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133
