---
title: craft\errors\InvalidSubpathException
code:
  - php
  - twig
---

# InvalidSubpathException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\InvalidSubpathException](craft-errors-invalidsubpathexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



Class InvalidSubpathException





[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidSubpathException.php)


## Public Properties

| Property                                                   | Description
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------
| [subpath](craft-errors-invalidsubpathexception.md#subpath) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The invalid subpath

### `subpath`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The invalid subpath



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidSubpathException.php#L23)







## Public Methods

| Method                                                                    | Description
| ------------------------------------------------------------------------- | ------------
| [__construct()](craft-errors-invalidsubpathexception.md#method-construct) | Constructor.
| [getName()](craft-errors-invalidsubpathexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidSubpathException.php#L33-L42)


#### Arguments

- `$subpath` ([string](http://php.net/language.types.string)) – The invalid subpath
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code
- `$previous` ([Throwable](http://php.net/class.throwable)) – The previous exception




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidSubpathException.php#L47-L50)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










