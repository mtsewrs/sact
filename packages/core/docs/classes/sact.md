[@sact/core](../README.md) / [Exports](../modules.md) / Sact

# Class: Sact<REQ, RES\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `REQ` | `unknown` |
| `RES` | `unknown` |

## Table of contents

### Constructors

- [constructor](sact.md#constructor)

### Properties

- [app](sact.md#app)
- [token](sact.md#token)
- [uws](sact.md#uws)

### Methods

- [any](sact.md#any)
- [close](sact.md#close)
- [get](sact.md#get)
- [listen](sact.md#listen)
- [numSubscribers](sact.md#numsubscribers)
- [options](sact.md#options)
- [post](sact.md#post)
- [publish](sact.md#publish)
- [ready](sact.md#ready)
- [register](sact.md#register)
- [use](sact.md#use)
- [ws](sact.md#ws)

## Constructors

### constructor

• **new Sact**<`REQ`, `RES`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `REQ` | `unknown` |
| `RES` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/options.md) |

#### Defined in

packages/core/src/sact.ts:38

## Properties

### app

• **app**: [`Server`](../interfaces/server.md)

uws App or SSLApp instance, use if you have custom needs

#### Defined in

packages/core/src/sact.ts:14

___

### token

• **token**: `unknown`

The built in pino logger

#### Defined in

packages/core/src/sact.ts:30

___

### uws

• **uws**: `__module`

uws module

#### Defined in

packages/core/src/sact.ts:38

## Methods

### any

▸ **any**(`path`, `callback`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:143

___

### close

▸ **close**(): `void`

stop the server

#### Returns

`void`

#### Defined in

packages/core/src/sact.ts:67

___

### get

▸ **get**(`path`, `callback`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:125

___

### listen

▸ **listen**(`port?`): `Promise`<`Object`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `port` | `number` | `9001` |

#### Returns

`Promise`<`Object`\>

#### Defined in

packages/core/src/sact.ts:74

___

### numSubscribers

▸ **numSubscribers**(`topic`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `RecognizedString` |

#### Returns

`number`

#### Defined in

packages/core/src/sact.ts:121

___

### options

▸ **options**(`path`, `callback`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:131

___

### post

▸ **post**(`path`, `callback`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:137

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `RecognizedString` |
| `message` | `RecognizedString` |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:154

___

### ready

▸ **ready**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/core/src/sact.ts:110

___

### register

▸ **register**<`T`\>(`plugin`, `opt?`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`PLuginFunction`](../modules.md#pluginfunction)<`T`, `unknown`, `unknown`\> |
| `opt?` | `T` |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:102

___

### use

▸ **use**(`func`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:96

___

### ws

▸ **ws**(`path`, `opt`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opt` | `WebSocketBehavior` |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

packages/core/src/sact.ts:149
