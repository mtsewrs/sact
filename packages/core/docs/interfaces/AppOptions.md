[@sact/core](../README.md) / [Exports](../modules.md) / AppOptions

# Interface: AppOptions

Options used when constructing an app. Especially for SSLApp.
These are options passed directly to uSockets, C layer.

## Hierarchy

- **`AppOptions`**

  ↳ [`Options`](Options.md)

## Table of contents

### Properties

- [cert\_file\_name](AppOptions.md#cert_file_name)
- [dh\_params\_file\_name](AppOptions.md#dh_params_file_name)
- [key\_file\_name](AppOptions.md#key_file_name)
- [passphrase](AppOptions.md#passphrase)
- [ssl\_prefer\_low\_memory\_usage](AppOptions.md#ssl_prefer_low_memory_usage)

## Properties

### cert\_file\_name

• `Optional` **cert\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:252

___

### dh\_params\_file\_name

• `Optional` **dh\_params\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:254

___

### key\_file\_name

• `Optional` **key\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:251

___

### passphrase

• `Optional` **passphrase**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:253

___

### ssl\_prefer\_low\_memory\_usage

• `Optional` **ssl\_prefer\_low\_memory\_usage**: `boolean`

This translates to SSL_MODE_RELEASE_BUFFERS

#### Defined in

node_modules/uWebSockets.js/index.d.ts:256
