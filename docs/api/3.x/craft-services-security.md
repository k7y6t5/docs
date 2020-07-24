---
title: craft\services\Security
code:
  - php
  - twig
---

# Security

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Security](craft-services-security.md) &raquo;
[yii\base\Security](https://www.yiiframework.com/doc/api/2.0/yii-base-security) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Security component.

An instance of the Security component is globally accessible in Craft via [`Craft::$app->security`](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getSecurity()-detail).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allowedCiphers](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$allowedCiphers-detail "Defined by yii\base\Security")             | [array](http://php.net/language.types.array)[] – Look-up table of block sizes and key sizes for each supported OpenSSL cipher.
| [authKeyInfo](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$authKeyInfo-detail "Defined by yii\base\Security")                   | [string](http://php.net/language.types.string) – HKDF info value for derivation of message authentication key.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cipher](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$cipher-detail "Defined by yii\base\Security")                             | [string](http://php.net/language.types.string) – The cipher to use for encryption and decryption.
| [derivationIterations](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$derivationIterations-detail "Defined by yii\base\Security") | [integer](http://php.net/language.types.integer) – Derivation iterations count.
| [kdfHash](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$kdfHash-detail "Defined by yii\base\Security")                           | [string](http://php.net/language.types.string) – Hash algorithm for key derivation.
| [macHash](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$macHash-detail "Defined by yii\base\Security")                           | [string](http://php.net/language.types.string) – Hash algorithm for message authentication.
| [minimumPasswordLength](craft-services-security.md#minimumpasswordlength)                                                                      | [integer](http://php.net/language.types.integer)
| [passwordHashCost](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$passwordHashCost-detail "Defined by yii\base\Security")         | [integer](http://php.net/language.types.integer) – Default cost used for password hashing.
| [passwordHashStrategy](https://www.yiiframework.com/doc/api/2.0/yii-base-security#$passwordHashStrategy-detail "Defined by yii\base\Security") | [string](http://php.net/language.types.string) – Strategy, which should be used to generate password hash.
| [sensitiveKeywords](craft-services-security.md#sensitivekeywords)                                                                              | [string](http://php.net/language.types.string)[] – Keywords used to reference sensitive data
| [validationKey](craft-services-security.md#validationkey)                                                                                      | [string](http://php.net/language.types.string)

### `minimumPasswordLength`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php)



### `sensitiveKeywords`



Type

:   [string](http://php.net/language.types.string)[]



Keywords used to reference sensitive data

See also [redactIfSensitive()](craft-services-security.md#method-redactifsensitive)

[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L29)



### `validationKey`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php)







## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                         | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                         | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")               | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                           | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                       | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")           | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")         | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                     | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                   | Returns the fully qualified name of this class.
| [compareString()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#compareString()-detail "Defined by yii\base\Security")               | Performs string comparison using timing attack resistant approach.
| [decryptByKey()](craft-services-security.md#method-decryptbykey)                                                                                  | Verifies and decrypts data encrypted with [encryptByKey()](craft-services-security.md#method-encryptbykey).
| [decryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#decryptByPassword()-detail "Defined by yii\base\Security")       | Verifies and decrypts data encrypted with [encryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encryptByPassword()-detail).
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")           | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")         | Detaches all behaviors from the component.
| [encryptByKey()](craft-services-security.md#method-encryptbykey)                                                                                  | Encrypts data using a cryptographic key.
| [encryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encryptByPassword()-detail "Defined by yii\base\Security")       | Encrypts data using a password.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")         | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [generatePasswordHash()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generatePasswordHash()-detail "Defined by yii\base\Security") | Generates a secure hash from a password and a random salt.
| [generateRandomKey()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomKey()-detail "Defined by yii\base\Security")       | Generates specified number of random bytes.
| [generateRandomString()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomString()-detail "Defined by yii\base\Security") | Generates a random string of specified length.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                 | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")               | Returns all behaviors attached to this component.
| [getMinimumPasswordLength()](craft-services-security.md#method-getminimumpasswordlength)                                                          |
| [getValidationKey()](craft-services-security.md#method-getvalidationkey)                                                                          | Deprecated wrapper for [Craft::$app->config->general->securityKey](craft-config-generalconfig.md#securitykey).
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")       | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property is defined.
| [hashData()](craft-services-security.md#method-hashdata)                                                                                          | Prefixes data with a keyed hash value so that it can later be detected if it is tampered.
| [hashPassword()](craft-services-security.md#method-hashpassword)                                                                                  | Hashes a given password with the bcrypt blowfish encryption algorithm.
| [hkdf()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#hkdf()-detail "Defined by yii\base\Security")                                 | Derives a key from the given input key using the standard HKDF algorithm.
| [init()](craft-services-security.md#method-init)                                                                                                  |
| [maskToken()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#maskToken()-detail "Defined by yii\base\Security")                       | Masks a token to make it uncompressible.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                 | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                   | Attaches an event handler to an event.
| [pbkdf2()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#pbkdf2()-detail "Defined by yii\base\Security")                             | Derives a key from the given password using the standard PBKDF2 algorithm.
| [redactIfSensitive()](craft-services-security.md#method-redactifsensitive)                                                                        | Checks the given key to see if it looks like it contains sensitive info, and if so, redacts the given value.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                         | Triggers an event.
| [unmaskToken()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#unmaskToken()-detail "Defined by yii\base\Security")                   | Unmasks a token previously masked by `maskToken`.
| [validateData()](craft-services-security.md#method-validatedata)                                                                                  | Validates if the given data is tampered.
| [validatePassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#validatePassword()-detail "Defined by yii\base\Security")         | Verifies a password against a hash.

### `decryptByKey()`





Verifies and decrypts data encrypted with [encryptByKey()](craft-services-security.md#method-encryptbykey).







See also [encryptByKey()](craft-services-security.md#method-encryptbykey)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L163-L170)


#### Arguments

- `$data` ([string](http://php.net/language.types.string)) – The encrypted data to decrypt
- `$inputKey` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The input to use for encryption and authentication
- `$info` ([string](http://php.net/language.types.string)) – Optional context and application specific information, see [hkdf()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#hkdf()-detail)

#### Returns

[boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string) – The decrypted data or false on authentication failure

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  on OpenSSL not loaded
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  on OpenSSL error


### `encryptByKey()`





Encrypts data using a cryptographic key.



Derives keys for encryption and authentication from the input key using HKDF and a random salt,
which is very fast relative to [encryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encryptByPassword()-detail). The input key must be properly
random -- use [generateRandomKey()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomKey()-detail) to generate keys.
The encrypted data includes a keyed message authentication code (MAC) so there is no need
to hash input or output data.



See also:

- [decryptByKey()](craft-services-security.md#method-decryptbykey)
- [encryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encryptByPassword()-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L144-L151)


#### Arguments

- `$data` ([string](http://php.net/language.types.string)) – The data to encrypt
- `$inputKey` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The input to use for encryption and authentication
- `$info` ([string](http://php.net/language.types.string)) – Optional context and application specific information, see [hkdf()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#hkdf()-detail)

#### Returns

[string](http://php.net/language.types.string) – The encrypted data

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  on OpenSSL not loaded
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  on OpenSSL error


### `getMinimumPasswordLength()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L48-L51)



#### Returns

[integer](http://php.net/language.types.integer)



### `getValidationKey()`

::: danger DEPRECATED
Deprecated in 3.0.0-beta.27. Use [Craft::$app->config->general->securityKey](craft-config-generalconfig.md#securitykey) instead.
:::




Deprecated wrapper for [Craft::$app->config->general->securityKey](craft-config-generalconfig.md#securitykey).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L78-L82)



#### Returns

[string](http://php.net/language.types.string)



### `hashData()`





Prefixes data with a keyed hash value so that it can later be detected if it is tampered.



There is no need to hash inputs or outputs of [encryptByKey()](craft-services-security.md#method-encryptbykey) or [encryptByPassword()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encryptByPassword()-detail)
as those methods perform the task.



See also:

- [validateData()](craft-services-security.md#method-validatedata)
- [generateRandomKey()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomKey()-detail)
- [hkdf()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#hkdf()-detail)
- [pbkdf2()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#pbkdf2()-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L99-L106)


#### Arguments

- `$data` ([string](http://php.net/language.types.string)) – The data to be protected
- `$key` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The secret key to be used for generating hash. Should be a secure
cryptographic key.
- `$rawHash` ([boolean](http://php.net/language.types.boolean)) – Whether the generated hash value is in raw binary format. If false, lowercase
hex digits will be generated.

#### Returns

[string](http://php.net/language.types.string) – The data prefixed with the keyed hash

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the validation key could not be written
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  when HMAC generation fails.


### `hashPassword()`





Hashes a given password with the bcrypt blowfish encryption algorithm.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L61-L70)


#### Arguments

- `$password` ([string](http://php.net/language.types.string)) – The string to hash
- `$validateHash` ([boolean](http://php.net/language.types.boolean)) – If you want to validate the just generated hash. Will throw an exception if
validation fails.

#### Returns

[string](http://php.net/language.types.string) – The hash.



### `init()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L38-L43)






### `redactIfSensitive()`





Checks the given key to see if it looks like it contains sensitive info, and if so, redacts the given value.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L179-L193)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))
- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The possibly-redacted value



### `validateData()`





Validates if the given data is tampered.







See also [hashData()](craft-services-security.md#method-hashdata)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Security.php#L124-L131)


#### Arguments

- `$data` ([string](http://php.net/language.types.string)) – The data to be validated. The data must be previously
generated by [hashData()](craft-services-security.md#method-hashdata).
- `$key` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The secret key that was previously used to generate the hash for the data in [hashData()](craft-services-security.md#method-hashdata).
function to see the supported hashing algorithms on your system. This must be the same
as the value passed to [hashData()](craft-services-security.md#method-hashdata) when generating the hash for the data.
- `$rawHash` ([boolean](http://php.net/language.types.boolean)) – This should take the same value as when you generate the data using [hashData()](craft-services-security.md#method-hashdata).
It indicates whether the hash value in the data is in binary format. If false, it means the hash value consists
of lowercase hex digits only.
hex digits will be generated.

#### Returns

[string](http://php.net/language.types.string) – The real data with the hash stripped off. False if the data is tampered.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the validation key could not be written
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  when HMAC generation fails.




## Protected Methods

| Method                                                                                                                            | Description
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------
| [decrypt()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#decrypt()-detail "Defined by yii\base\Security")           | Decrypts data.
| [encrypt()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#encrypt()-detail "Defined by yii\base\Security")           | Encrypts data.
| [generateSalt()](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateSalt()-detail "Defined by yii\base\Security") | Generates a salt that can be used to generate a password hash.






