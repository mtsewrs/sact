[@sact/core](../README.md) / [Exports](../modules.md) / Options

# Interface: Options

## Hierarchy

- `AppOptions`

  ↳ **`Options`**

## Table of contents

### Properties

- [cert\_file\_name](options.md#cert_file_name)
- [dh\_params\_file\_name](options.md#dh_params_file_name)
- [key\_file\_name](options.md#key_file_name)
- [logger](options.md#logger)
- [passphrase](options.md#passphrase)
- [ssl](options.md#ssl)
- [ssl\_prefer\_low\_memory\_usage](options.md#ssl_prefer_low_memory_usage)

## Properties

### cert\_file\_name

• `Optional` **cert\_file\_name**: `RecognizedString`

#### Inherited from

AppOptions.cert\_file\_name

#### Defined in

node_modules/uWebSockets.js/index.d.ts:256

___

### dh\_params\_file\_name

• `Optional` **dh\_params\_file\_name**: `RecognizedString`

#### Inherited from

AppOptions.dh\_params\_file\_name

#### Defined in

node_modules/uWebSockets.js/index.d.ts:258

___

### key\_file\_name

• `Optional` **key\_file\_name**: `RecognizedString`

#### Inherited from

AppOptions.key\_file\_name

#### Defined in

node_modules/uWebSockets.js/index.d.ts:255

___

### logger

• `Optional` **logger**: `Logger`

#### Defined in

packages/core/src/types.ts:12

___

### passphrase

• `Optional` **passphrase**: `RecognizedString`

#### Inherited from

AppOptions.passphrase

#### Defined in

node_modules/uWebSockets.js/index.d.ts:257

___

### ssl

• `Optional` **ssl**: `boolean`

#### Defined in

packages/core/src/types.ts:13

___

### ssl\_prefer\_low\_memory\_usage

• `Optional` **ssl\_prefer\_low\_memory\_usage**: `boolean`

This translates to SSL_MODE_RELEASE_BUFFERS

#### Inherited from

AppOptions.ssl\_prefer\_low\_memory\_usage

#### Defined in

node_modules/uWebSockets.js/index.d.ts:260
