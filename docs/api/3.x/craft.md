---
title: Craft
code:
  - php
  - twig
---

# Craft

Type

:   Class

Inherits

:   [Craft](craft.md) &raquo;
`Yii`

Since

:   3.0.0



Craft is helper class serving common Craft and Yii framework functionality.

It encapsulates `\Yii` and ultimately [yii\BaseYii](https://www.yiiframework.com/doc/api/2.0/yii-baseyii), which provides the actual implementation.



[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php)


## Public Properties

| Property            | Description
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------
| [app](craft.md#app) | [craft\web\Application](craft-web-application.md), [craft\console\Application](craft-console-application.md) – The application instance.

### `app`



Type

:   [craft\web\Application](craft-web-application.md), [craft\console\Application](craft-console-application.md)



The application instance.



[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L46)







## Public Methods

| Method                                                     | Description
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------
| [autoload()](craft.md#method-autoload)                     | Class autoloader.
| [cookieConfig()](craft.md#method-cookieconfig)             | Generates and returns a cookie config.
| [createGuzzleClient()](craft.md#method-createguzzleclient) | Creates a Guzzle client configured with the given array merged with any default values in config/guzzle.php.
| [dd()](craft.md#method-dd)                                 | Displays a variable and ends the request. (“Dump and die”)
| [dump()](craft.md#method-dump)                             | Displays a variable.
| [parseEnv()](craft.md#method-parseenv)                     | Checks if a string references an environment variable (`$VARIABLE_NAME`) and/or an alias (`@aliasName`), and returns the referenced value.

### `autoload()`





Class autoloader.




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L170-L175)


#### Arguments

- `$className` ([string](http://php.net/language.types.string))




### `cookieConfig()`





Generates and returns a cookie config.




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L141-L163)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Any config options that should be included in the config.
- `$request` ([yii\web\Request](https://www.yiiframework.com/doc/api/2.0/yii-web-request), [null](http://php.net/language.types.null)) – The request object

#### Returns

[array](http://php.net/language.types.array) – The cookie config array.



### `createGuzzleClient()`





Creates a Guzzle client configured with the given array merged with any default values in config/guzzle.php.




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L326-L345)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Guzzle client config settings

#### Returns

`\GuzzleHttp\Client`



### `dd()`





Displays a variable and ends the request. (“Dump and die”)




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L119-L132)


#### Arguments

- `$var` (`mixed`) – The variable to be dumped.
- `$depth` ([integer](http://php.net/language.types.integer)) – The maximum depth that the dumper should go into the variable. Defaults to 10.
- `$highlight` ([boolean](http://php.net/language.types.boolean)) – Whether the result should be syntax-highlighted. Defaults to true.


#### Throws

- [yii\base\ExitException](https://www.yiiframework.com/doc/api/2.0/yii-base-exitexception)\
  if the application is in testing mode


### `dump()`





Displays a variable.




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L106-L109)


#### Arguments

- `$var` (`mixed`) – The variable to be dumped.
- `$depth` ([integer](http://php.net/language.types.integer)) – The maximum depth that the dumper should go into the variable. Defaults to 10.
- `$highlight` ([boolean](http://php.net/language.types.boolean)) – Whether the result should be syntax-highlighted. Defaults to true.




### `parseEnv()`



Since

:   3.1.0



Checks if a string references an environment variable (`$VARIABLE_NAME`)
and/or an alias (`@aliasName`), and returns the referenced value.

If the string references an environment variable with a value of `true`
or `false`, a boolean value will be returned.




[View source](https://github.com/craftcms/cms/blob/master/src/Craft.php#L77-L97)


#### Arguments

- `$str` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The parsed value, or the original value if it didn’t
reference an environment variable and/or alias.


---

#### Example

::: code
```php
$value1 = Craft::parseEnv('$SMTP_PASSWORD');
$value2 = Craft::parseEnv('@webroot');
```
:::






## Constants

| Constant   | Description
| ---------- | -----------
| `Client`   |
| `Personal` |
| `Pro`      |
| `Solo`     |



