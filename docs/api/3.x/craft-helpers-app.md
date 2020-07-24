---
title: craft\helpers\App
code:
  - php
  - twig
---

# App

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\App](craft-helpers-app.md)

Since

:   3.0.0



App helper.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php)






## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------
| [assetManagerConfig()](craft-helpers-app.md#method-assetmanagerconfig)       | Returns the `assetManager` component config for web requests.
| [backtrace()](craft-helpers-app.md#method-backtrace)                         | Returns the backtrace as a string (omitting the final frame where this method was called).
| [cacheConfig()](craft-helpers-app.md#method-cacheconfig)                     | Returns the `cache` component config.
| [checkForValidIconv()](craft-helpers-app.md#method-checkforvalidiconv)       | Returns whether the server has a valid version of the iconv extension installed.
| [dbConfig()](craft-helpers-app.md#method-dbconfig)                           | Returns the `db` component config.
| [editionHandle()](craft-helpers-app.md#method-editionhandle)                 | Returns the handle of the given Craft edition.
| [editionIdByHandle()](craft-helpers-app.md#method-editionidbyhandle)         | Returns the ID of a Craft edition by its handle.
| [editionName()](craft-helpers-app.md#method-editionname)                     | Returns the name of the given Craft edition.
| [editions()](craft-helpers-app.md#method-editions)                           | Returns an array of all known Craft editions’ IDs.
| [env()](craft-helpers-app.md#method-env)                                     | Returns an environment variable, checking for it in `$_SERVER` and calling `getenv()` as a fallback.
| [extensionVersion()](craft-helpers-app.md#method-extensionversion)           | Returns a PHP extension version, without the distribution info.
| [humanizeClass()](craft-helpers-app.md#method-humanizeclass)                 | Returns a humanized class name.
| [isEphemeral()](craft-helpers-app.md#method-isephemeral)                     | Returns whether Craft is running on an environment with ephemeral storage.
| [isNitro()](craft-helpers-app.md#method-isnitro)                             | Returns whether Craft is running within [Nitro](https://getnitro.sh).
| [isValidEdition()](craft-helpers-app.md#method-isvalidedition)               | Returns whether an edition is valid.
| [licenseKey()](craft-helpers-app.md#method-licensekey)                       |
| [logConfig()](craft-helpers-app.md#method-logconfig)                         | Returns the `log` component config.
| [mailSettings()](craft-helpers-app.md#method-mailsettings)                   | Returns the system email settings.
| [mailerConfig()](craft-helpers-app.md#method-mailerconfig)                   | Returns the `mailer` component config.
| [maxPowerCaptain()](craft-helpers-app.md#method-maxpowercaptain)             | Sets PHP’s memory limit to the maximum specified by the <config:phpMaxMemoryLimit> config setting, and gives the script an unlimited amount of time to execute.
| [mutexConfig()](craft-helpers-app.md#method-mutexconfig)                     | Returns the `mutex` component config.
| [normalizeVersion()](craft-helpers-app.md#method-normalizeversion)           | Removes distribution info from a version
| [phpConfigValueAsBool()](craft-helpers-app.md#method-phpconfigvalueasbool)   | Retrieves a bool PHP config setting and normalizes it to an actual bool.
| [phpConfigValueInBytes()](craft-helpers-app.md#method-phpconfigvalueinbytes) | Retrieves a disk size PHP config setting and normalizes it into bytes.
| [phpVersion()](craft-helpers-app.md#method-phpversion)                       | Returns the PHP version, without the distribution info.
| [projectConfigConfig()](craft-helpers-app.md#method-projectconfigconfig)     | Returns the `projectConfig` component config.
| [sessionConfig()](craft-helpers-app.md#method-sessionconfig)                 | Returns the `session` component config for web requests.
| [testIniSet()](craft-helpers-app.md#method-testiniset)                       | Tests whether ini_set() works.
| [userConfig()](craft-helpers-app.md#method-userconfig)                       | Returns the `user` component config for web requests.
| [viewConfig()](craft-helpers-app.md#method-viewconfig)                       | Returns the `view` component config.
| [webRequestConfig()](craft-helpers-app.md#method-webrequestconfig)           | Returns the `request` component config for web requests.
| [webResponseConfig()](craft-helpers-app.md#method-webresponseconfig)         | Returns the `response` component config for web requests.

### `assetManagerConfig()`



Since

:   3.0.18



Returns the `assetManager` component config for web requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L388-L400)



#### Returns

[array](http://php.net/language.types.array)



### `backtrace()`



Since

:   3.0.13



Returns the backtrace as a string (omitting the final frame where this method was called).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L350-L366)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The max number of stack frames to be included (0 means no limit)

#### Returns

[string](http://php.net/language.types.string)



### `cacheConfig()`



Since

:   3.0.18



Returns the `cache` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L408-L419)



#### Returns

[array](http://php.net/language.types.array)



### `checkForValidIconv()`





Returns whether the server has a valid version of the iconv extension installed.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L274-L283)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `dbConfig()`



Since

:   3.0.18



Returns the `db` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L428-L464)


#### Arguments

- `$dbConfig` ([craft\config\DbConfig](craft-config-dbconfig.md), [null](http://php.net/language.types.null)) – The database config settings

#### Returns

[array](http://php.net/language.types.array)



### `editionHandle()`



Since

:   3.1.0



Returns the handle of the given Craft edition.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L94-L104)


#### Arguments

- `$edition` ([integer](http://php.net/language.types.integer)) – An edition’s ID.

#### Returns

[string](http://php.net/language.types.string) – The edition’s name.



### `editionIdByHandle()`



Since

:   3.1.0



Returns the ID of a Craft edition by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L132-L142)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – An edition’s handle

#### Returns

[integer](http://php.net/language.types.integer) – The edition’s ID

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $handle is invalid


### `editionName()`





Returns the name of the given Craft edition.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L112-L122)


#### Arguments

- `$edition` ([integer](http://php.net/language.types.integer)) – An edition’s ID.

#### Returns

[string](http://php.net/language.types.string) – The edition’s name.



### `editions()`





Returns an array of all known Craft editions’ IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L82-L85)



#### Returns

[array](http://php.net/language.types.array) – All the known Craft editions’ IDs.



### `env()`



Since

:   3.4.18



Returns an environment variable, checking for it in `$_SERVER` and calling `getenv()` as a fallback.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L61-L64)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The environment variable name

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean) – The environment variable value



### `extensionVersion()`





Returns a PHP extension version, without the distribution info.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L175-L179)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The extension name

#### Returns

[string](http://php.net/language.types.string)



### `humanizeClass()`





Returns a humanized class name.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L291-L296)


#### Arguments

- `$class` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `isEphemeral()`



Since

:   3.4.0



Returns whether Craft is running on an environment with ephemeral storage.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L374-L377)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isNitro()`



Since

:   3.4.19



Returns whether Craft is running within [Nitro](https://getnitro.sh).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L72-L75)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isValidEdition()`





Returns whether an edition is valid.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L150-L157)


#### Arguments

- `$edition` (`mixed`) – An edition’s ID (or is it?)

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether $edition is a valid edition ID.



### `licenseKey()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L319-L341)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `logConfig()`



Since

:   3.0.18



Returns the `log` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L533-L571)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `mailSettings()`



Since

:   3.1.0



Returns the system email settings.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L472-L476)



#### Returns

[craft\models\MailSettings](craft-models-mailsettings.md)



### `mailerConfig()`



Since

:   3.0.18



Returns the `mailer` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L485-L508)


#### Arguments

- `$settings` ([craft\models\MailSettings](craft-models-mailsettings.md), [null](http://php.net/language.types.null)) – The system mail settings

#### Returns

[array](http://php.net/language.types.array)



### `maxPowerCaptain()`





Sets PHP’s memory limit to the maximum specified by the
<config:phpMaxMemoryLimit> config setting, and gives the script an
unlimited amount of time to execute.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L303-L314)






### `mutexConfig()`



Since

:   3.0.18



Returns the `mutex` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L516-L525)



#### Returns

[array](http://php.net/language.types.array)



### `normalizeVersion()`





Removes distribution info from a version




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L187-L190)


#### Arguments

- `$version` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `phpConfigValueAsBool()`





Retrieves a bool PHP config setting and normalizes it to an actual bool.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L198-L204)


#### Arguments

- `$var` ([string](http://php.net/language.types.string)) – The PHP config setting to retrieve.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether it is set to the php.ini equivelant of `true`.



### `phpConfigValueInBytes()`



Since

:   3.0.38



Retrieves a disk size PHP config setting and normalizes it into bytes.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L213-L231)


#### Arguments

- `$var` ([string](http://php.net/language.types.string)) – The PHP config setting to retrieve.

#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float) – The value normalized into bytes.



### `phpVersion()`





Returns the PHP version, without the distribution info.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L164-L167)



#### Returns

[string](http://php.net/language.types.string)



### `projectConfigConfig()`





Returns the `projectConfig` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L576-L582)






### `sessionConfig()`



Since

:   3.0.18



Returns the `session` component config for web requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L590-L602)



#### Returns

[array](http://php.net/language.types.array)



### `testIniSet()`



Since

:   3.0.40



Tests whether ini_set() works.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L239-L267)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `userConfig()`



Since

:   3.0.18



Returns the `user` component config for web requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L610-L639)



#### Returns

[array](http://php.net/language.types.array)



### `viewConfig()`



Since

:   3.0.18



Returns the `view` component config.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L647-L662)



#### Returns

[array](http://php.net/language.types.array)



### `webRequestConfig()`



Since

:   3.0.18



Returns the `request` component config for web requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L670-L703)



#### Returns

[array](http://php.net/language.types.array)



### `webResponseConfig()`



Since

:   3.3.0



Returns the `response` component config for web requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/App.php#L711-L727)



#### Returns

[array](http://php.net/language.types.array)










