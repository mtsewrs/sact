[@sact/cookie](../README.md) / [Exports](../modules.md) / Options

# Interface: Options

## Hierarchy

- `CookieSerializeOptions`

  ↳ **`Options`**

## Table of contents

### Properties

- [domain](Options.md#domain)
- [expires](Options.md#expires)
- [httpOnly](Options.md#httponly)
- [maxAge](Options.md#maxage)
- [path](Options.md#path)
- [sameSite](Options.md#samesite)
- [secure](Options.md#secure)

### Methods

- [encode](Options.md#encode)

## Properties

### domain

• `Optional` **domain**: `string`

Specifies the value for the Domain Set-Cookie attribute. By default, no
domain is set, and most clients will consider the cookie to apply to only
the current domain.

#### Inherited from

CookieSerializeOptions.domain

#### Defined in

node_modules/@types/cookie/index.d.ts:12

___

### expires

• `Optional` **expires**: `Date`

Specifies the `Date` object to be the value for the `Expires`
`Set-Cookie` attribute. By default, no expiration is set, and most
clients will consider this a "non-persistent cookie" and will delete it
on a condition like exiting a web browser application.

*Note* the cookie storage model specification states that if both
`expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
possible not all clients by obey this, so if both are set, they should
point to the same date and time.

#### Inherited from

CookieSerializeOptions.expires

#### Defined in

node_modules/@types/cookie/index.d.ts:37

___

### httpOnly

• `Optional` **httpOnly**: `boolean`

Specifies the boolean value for the `HttpOnly` `Set-Cookie` attribute.
When truthy, the `HttpOnly` attribute is set, otherwise it is not. By
default, the `HttpOnly` attribute is not set.

*Note* be careful when setting this to true, as compliant clients will
not allow client-side JavaScript to see the cookie in `document.cookie`.

#### Inherited from

CookieSerializeOptions.httpOnly

#### Defined in

node_modules/@types/cookie/index.d.ts:46

___

### maxAge

• `Optional` **maxAge**: `number`

Specifies the number (in seconds) to be the value for the `Max-Age`
`Set-Cookie` attribute. The given number will be converted to an integer
by rounding down. By default, no maximum age is set.

*Note* the cookie storage model specification states that if both
`expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
possible not all clients by obey this, so if both are set, they should
point to the same date and time.

#### Inherited from

CookieSerializeOptions.maxAge

#### Defined in

node_modules/@types/cookie/index.d.ts:57

___

### path

• `Optional` **path**: `string`

Specifies the value for the `Path` `Set-Cookie` attribute. By default,
the path is considered the "default path".

#### Inherited from

CookieSerializeOptions.path

#### Defined in

node_modules/@types/cookie/index.d.ts:62

___

### sameSite

• `Optional` **sameSite**: `boolean` \| ``"lax"`` \| ``"strict"`` \| ``"none"``

Specifies the boolean or string to be the value for the `SameSite`
`Set-Cookie` attribute.

- `true` will set the `SameSite` attribute to `Strict` for strict same
site enforcement.
- `false` will not set the `SameSite` attribute.
- `'lax'` will set the `SameSite` attribute to Lax for lax same site
enforcement.
- `'strict'` will set the `SameSite` attribute to Strict for strict same
site enforcement.
 - `'none'` will set the SameSite attribute to None for an explicit
 cross-site cookie.

#### Inherited from

CookieSerializeOptions.sameSite

#### Defined in

node_modules/@types/cookie/index.d.ts:77

___

### secure

• `Optional` **secure**: `boolean`

Specifies the boolean value for the `Secure` `Set-Cookie` attribute. When
truthy, the `Secure` attribute is set, otherwise it is not. By default,
the `Secure` attribute is not set.

*Note* be careful when setting this to `true`, as compliant clients will
not send the cookie back to the server in the future if the browser does
not have an HTTPS connection.

#### Inherited from

CookieSerializeOptions.secure

#### Defined in

node_modules/@types/cookie/index.d.ts:87

## Methods

### encode

▸ `Optional` **encode**(`val`): `string`

Specifies a function that will be used to encode a cookie's value. Since
value of a cookie has a limited character set (and must be a simple
string), this function can be used to encode a value into a string suited
for a cookie's value.

The default function is the global `encodeURIComponent`, which will
encode a JavaScript string into UTF-8 byte sequences and then URL-encode
any that fall outside of the cookie range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Inherited from

CookieSerializeOptions.encode

#### Defined in

node_modules/@types/cookie/index.d.ts:24
