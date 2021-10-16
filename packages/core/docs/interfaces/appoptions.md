[@sact/core](../README.md) / [Exports](../modules.md) / AppOptions

# Interface: AppOptions

Options used when constructing an app. Especially for SSLApp.
These are options passed directly to uSockets, C layer.

## Hierarchy

- **`AppOptions`**

  ↳ [`Options`](options.md)

## Table of contents

### Properties

- [cert\_file\_name](appoptions.md#cert_file_name)
- [dh\_params\_file\_name](appoptions.md#dh_params_file_name)
- [key\_file\_name](appoptions.md#key_file_name)
- [passphrase](appoptions.md#passphrase)
- [ssl\_prefer\_low\_memory\_usage](appoptions.md#ssl_prefer_low_memory_usage)

## Properties

### cert\_file\_name

• `Optional` **cert\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:263

___

### dh\_params\_file\_name

• `Optional` **dh\_params\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:265

___

### key\_file\_name

• `Optional` **key\_file\_name**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:262

___

### passphrase

• `Optional` **passphrase**: [`RecognizedString`](../modules.md#recognizedstring)

#### Defined in

node_modules/uWebSockets.js/index.d.ts:264

___

### ssl\_prefer\_low\_memory\_usage

• `Optional` **ssl\_prefer\_low\_memory\_usage**: `boolean`

This translates to SSL_MODE_RELEASE_BUFFERS

#### Defined in

node_modules/uWebSockets.js/index.d.ts:267
