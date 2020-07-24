---
title: craft\errors\InvalidTypeException
code:
  - php
  - twig
---

# InvalidTypeException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\InvalidTypeException](craft-errors-invalidtypeexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



Class InvalidTypeException





[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidTypeException.php)


## Public Properties

| Property                                                          | Description
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [class](craft-errors-invalidtypeexception.md#class)               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The invalid class name
| [requiredType](craft-errors-invalidtypeexception.md#requiredtype) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The base class or interface that [class](craft-errors-invalidtypeexception.md#class) was supposed to be

### `class`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The invalid class name



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidTypeException.php#L23)



### `requiredType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The base class or interface that [class](craft-errors-invalidtypeexception.md#class) was supposed to be



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidTypeException.php#L28)







## Public Methods

| Method                                                                 | Description
| ---------------------------------------------------------------------- | ------------
| [__construct()](craft-errors-invalidtypeexception.md#method-construct) | Constructor.
| [getName()](craft-errors-invalidtypeexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidTypeException.php#L38-L48)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The class that doesn’t exist or doesn’t extend/implement $requiredType
- `$requiredType` ([string](http://php.net/language.types.string)) – The base class or interface that $class was supposed to be
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidTypeException.php#L53-L56)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










