---
title: craft\errors\MigrateException
code:
  - php
  - twig
---

# MigrateException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\MigrateException](craft-errors-migrateexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



MigrateException represents an error that occurred while migrating Craft or a plugin.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrateException.php)


## Public Properties

| Property                                                    | Description
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------
| [ownerHandle](craft-errors-migrateexception.md#ownerhandle) | [string](http://php.net/language.types.string) – The handle of the thing being updated
| [ownerName](craft-errors-migrateexception.md#ownername)     | [string](http://php.net/language.types.string) – The name of the thing being updated

### `ownerHandle`



Type

:   [string](http://php.net/language.types.string)



The handle of the thing being updated



[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrateException.php#L28)



### `ownerName`



Type

:   [string](http://php.net/language.types.string)



The name of the thing being updated



[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrateException.php#L23)







## Public Methods

| Method                                                             | Description
| ------------------------------------------------------------------ | ------------
| [__construct()](craft-errors-migrateexception.md#method-construct) | Constructor.
| [getName()](craft-errors-migrateexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrateException.php#L39-L49)


#### Arguments

- `$ownerName` ([string](http://php.net/language.types.string)) – The name of the thing being updated
- `$ownerHandle` ([string](http://php.net/language.types.string)) – The handle of the thing being updated
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code
- `$previous` ([Throwable](http://php.net/class.throwable), [null](http://php.net/language.types.null)) – The previous exception




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrateException.php#L54-L57)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










