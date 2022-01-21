[@sact/core](../README.md) / [Exports](../modules.md) / Sact

# Class: Sact<REQ, RES\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `REQ` | `unknown` |
| `RES` | `unknown` |

## Table of contents

### Constructors

- [constructor](Sact.md#constructor)

### Properties

- [app](Sact.md#app)
- [port](Sact.md#port)
- [uws](Sact.md#uws)

### Methods

- [any](Sact.md#any)
- [close](Sact.md#close)
- [get](Sact.md#get)
- [listen](Sact.md#listen)
- [numSubscribers](Sact.md#numsubscribers)
- [options](Sact.md#options)
- [post](Sact.md#post)
- [publish](Sact.md#publish)
- [ready](Sact.md#ready)
- [register](Sact.md#register)
- [use](Sact.md#use)
- [ws](Sact.md#ws)

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
| `options` | [`Options`](../interfaces/Options.md) |

#### Defined in

[packages/core/src/sact.ts:37](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L37)

## Properties

### app

• **app**: [`TemplatedApp`](../interfaces/TemplatedApp.md)

uws App or SSLApp instance, use if you have custom needs

#### Defined in

[packages/core/src/sact.ts:15](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L15)

___

### port

• `Optional` **port**: `number`

the port the app is listening on

#### Defined in

[packages/core/src/sact.ts:31](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L31)

___

### uws

• **uws**: `__module` = `uws`

uws module

#### Defined in

[packages/core/src/sact.ts:35](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L35)

## Methods

### any

▸ **any**(`path`, `callback`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:139](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L139)

___

### close

▸ **close**(): `void`

stop the server

#### Returns

`void`

#### Defined in

[packages/core/src/sact.ts:58](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L58)

___

### get

▸ **get**(`path`, `callback`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:121](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L121)

___

### listen

▸ **listen**(`port?`): `Promise`<{ `port`: `number` ; `token`: `unknown` ; `url`: `string`  }\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `port` | `number` | `0` | number, defaults to 0 |

#### Returns

`Promise`<{ `port`: `number` ; `token`: `unknown` ; `url`: `string`  }\>

Promise with port, listen token and url

#### Defined in

[packages/core/src/sact.ts:70](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L70)

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

[packages/core/src/sact.ts:117](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L117)

___

### options

▸ **options**(`path`, `callback`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:127](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L127)

___

### post

▸ **post**(`path`, `callback`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:133](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L133)

___

### publish

▸ **publish**(`topic`, `message`, `isBinary?`, `compress?`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | [`RecognizedString`](../modules.md#recognizedstring) |
| `message` | [`RecognizedString`](../modules.md#recognizedstring) |
| `isBinary?` | `boolean` |
| `compress?` | `boolean` |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:150](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L150)

___

### ready

▸ **ready**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/sact.ts:106](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L106)

___

### register

▸ **register**<`T`\>(`plugin`, `opt?`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`PLuginFunction`](../modules.md#pluginfunction)<`T`\> |
| `opt?` | `T` |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:98](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L98)

___

### use

▸ **use**(`func`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`CallbackFunction`](../modules.md#callbackfunction)<`REQ`, `RES`\> |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:92](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L92)

___

### ws

▸ **ws**(`path`, `opt`): [`Sact`](Sact.md)<`REQ`, `RES`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opt` | [`WebSocketBehavior`](../interfaces/WebSocketBehavior.md) |

#### Returns

[`Sact`](Sact.md)<`REQ`, `RES`\>

#### Defined in

[packages/core/src/sact.ts:145](https://github.com/mattiasewers/sact/blob/982c487/packages/core/src/sact.ts#L145)
