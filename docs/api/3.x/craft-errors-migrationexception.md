---
title: craft\errors\MigrationException
code:
  - php
  - twig
---

# MigrationException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\MigrationException](craft-errors-migrationexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



MigrationException represents an exception thrown while executing a migration.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrationException.php)


## Public Properties

| Property                                                  | Description
| --------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------
| [migration](craft-errors-migrationexception.md#migration) | [yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration) – The migration being executed
| [output](craft-errors-migrationexception.md#output)       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The migration output

### `migration`



Type

:   [yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration)



The migration being executed



[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrationException.php#L24)



### `output`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The migration output



[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrationException.php#L29)







## Public Methods

| Method                                                               | Description
| -------------------------------------------------------------------- | ------------
| [__construct()](craft-errors-migrationexception.md#method-construct) | Constructor.
| [getName()](craft-errors-migrationexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrationException.php#L40-L50)


#### Arguments

- `$migration` ([yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration)) – The migration being executed
- `$output` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The migration output
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code
- `$previous` ([Throwable](http://php.net/class.throwable), [null](http://php.net/language.types.null)) – The previous exception




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/MigrationException.php#L55-L58)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










