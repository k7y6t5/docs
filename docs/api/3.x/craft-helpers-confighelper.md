---
title: craft\helpers\ConfigHelper
code:
  - php
  - twig
---

# ConfigHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\ConfigHelper](craft-helpers-confighelper.md)

Since

:   3.0.0



Config helper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ConfigHelper.php)






## Public Methods

| Method                                                                        | Description
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------
| [durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) | Normalizes a time duration value into the number of seconds it represents.
| [localizedValue()](craft-helpers-confighelper.md#method-localizedvalue)       | Returns a localized config setting value.
| [sizeInBytes()](craft-helpers-confighelper.md#method-sizeinbytes)             | Normalizes a file size value into the number of bytes it represents.

### `durationInSeconds()`





Normalizes a time duration value into the number of seconds it represents.

Accepted formats:
- integer (the duration in seconds)
- string (a [duration interval](https://en.wikipedia.org/wiki/ISO_8601#Durations))
- DateInterval object
- an empty value (represents 0 seconds)


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ConfigHelper.php#L34-L53)


#### Arguments

- `$value` (`mixed`)

#### Returns

[integer](http://php.net/language.types.integer) – The time duration in seconds

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the duration can't be determined


### `localizedValue()`





Returns a localized config setting value.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ConfigHelper.php#L102-L127)


#### Arguments

- `$value` (`mixed`) – The config setting value. This can be specified in one of the following forms:
- A scalar value or null: represents the desired value directly, and will be returned verbatim.
- An associative array: represents the desired values across all sites, indexed by site handles.
  If a matching site handle isn’t listed, the first value will be returned.
- A PHP callable: either an anonymous function or an array representing a class method (`[$class or $object, $method]`).
  The callable will be passed the site handle if known, and should return the desired config value.
- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

`mixed`



### `sizeInBytes()`





Normalizes a file size value into the number of bytes it represents.

Accepted formats;
- integer (the size in bytes)
- string (a [shorthand byte value](http://php.net/manual/en/faq.using.php#faq.using.shorthandbytes) ending in `K` (Kilobytes), `M` (Megabytes), or `G` (Gigabytes))


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ConfigHelper.php#L65-L88)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)) – The size

#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float) – The size in bytes










