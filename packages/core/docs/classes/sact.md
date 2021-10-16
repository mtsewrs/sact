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
- [port](sact.md#port)
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

[packages/core/src/sact.ts:35](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L35)

## Properties

### app

• **app**: [`Server`](../interfaces/server.md)

uws App or SSLApp instance, use if you have custom needs

#### Defined in

[packages/core/src/sact.ts:15](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L15)

___

### port

• **port**: `number`

the port the app is listening on

#### Defined in

[packages/core/src/sact.ts:31](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L31)

___

### uws

• **uws**: `__module`

uws module

#### Defined in

[packages/core/src/sact.ts:35](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L35)

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

[packages/core/src/sact.ts:134](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L134)

___

### close

▸ **close**(): `void`

stop the server

#### Returns

`void`

#### Defined in

[packages/core/src/sact.ts:58](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L58)

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

[packages/core/src/sact.ts:116](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L116)

___

### listen

▸ **listen**(`port?`): `Promise`<`Object`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `port` | `number` | `0` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[packages/core/src/sact.ts:65](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L65)

___

### numSubscribers

▸ **numSubscribers**(`topic`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |

#### Returns

`number`

#### Defined in

[packages/core/src/sact.ts:112](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L112)

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

[packages/core/src/sact.ts:122](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L122)

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

[packages/core/src/sact.ts:128](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L128)

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |
| `message` | [`RecognizedString`](../modules.md#recognizedstring) |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:145](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L145)

___

### ready

▸ **ready**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/sact.ts:101](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L101)

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

[packages/core/src/sact.ts:93](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L93)

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

[packages/core/src/sact.ts:87](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L87)

___

### ws

▸ **ws**(`path`, `opt`): [`Sact`](sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opt` | [`WebSocketBehavior`](../interfaces/websocketbehavior.md) |

#### Returns

[`Sact`](sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:140](https://github.com/mattiasewers/sact/blob/df76a34/packages/core/src/sact.ts#L140)
