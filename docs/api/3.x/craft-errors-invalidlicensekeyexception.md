---
title: craft\errors\InvalidLicenseKeyException
code:
  - php
  - twig
---

# InvalidLicenseKeyException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\InvalidLicenseKeyException](craft-errors-invalidlicensekeyexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



InvalidLicenseKeyException represents an exception caused by setting an invalid license key on a plugin.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidLicenseKeyException.php)


## Public Properties

| Property                                                            | Description
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------
| [licenseKey](craft-errors-invalidlicensekeyexception.md#licensekey) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The license key

### `licenseKey`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The license key



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidLicenseKeyException.php#L23)







## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | ------------
| [__construct()](craft-errors-invalidlicensekeyexception.md#method-construct) | Constructor.
| [getName()](craft-errors-invalidlicensekeyexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidLicenseKeyException.php#L32-L41)


#### Arguments

- `$licenseKey` ([string](http://php.net/language.types.string)) – The invalid license key
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidLicenseKeyException.php#L46-L49)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










