---
title: craft\errors\InvalidPluginException
code:
  - php
  - twig
---

# InvalidPluginException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



Class InvalidPluginException





[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidPluginException.php)


## Public Properties

| Property                                                | Description
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------
| [handle](craft-errors-invalidpluginexception.md#handle) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The invalid plugin handle

### `handle`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The invalid plugin handle



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidPluginException.php#L23)







## Public Methods

| Method                                                                   | Description
| ------------------------------------------------------------------------ | ------------
| [__construct()](craft-errors-invalidpluginexception.md#method-construct) | Constructor.
| [getName()](craft-errors-invalidpluginexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidPluginException.php#L32-L41)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle that doesn’t exist or doesn’t extend/implement [craft\base\PluginInterface](craft-base-plugininterface.md)
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidPluginException.php#L46-L49)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










