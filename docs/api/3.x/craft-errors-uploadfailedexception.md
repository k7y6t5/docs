---
title: craft\errors\UploadFailedException
code:
  - php
  - twig
---

# UploadFailedException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\UploadFailedException](craft-errors-uploadfailedexception.md) &raquo;
[craft\errors\FileException](craft-errors-fileexception.md) &raquo;
[yii\base\UserException](https://www.yiiframework.com/doc/api/2.0/yii-base-userexception) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



Class UploadFailedException





[View source](https://github.com/craftcms/cms/blob/master/src/errors/UploadFailedException.php)


## Public Properties

| Property                                                     | Description
| ------------------------------------------------------------ | -------------------------------------------------------------
| [errorCode](craft-errors-uploadfailedexception.md#errorcode) | [integer](http://php.net/language.types.integer) – Error code

### `errorCode`



Type

:   [integer](http://php.net/language.types.integer)



Error code



[View source](https://github.com/craftcms/cms/blob/master/src/errors/UploadFailedException.php#L23)







## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | -----------
| [__construct()](craft-errors-uploadfailedexception.md#method-construct) | Constructor
| [getName()](craft-errors-uploadfailedexception.md#method-getname)       |

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/errors/UploadFailedException.php#L32-L58)


#### Arguments

- `$errorCode` ([integer](http://php.net/language.types.integer))
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$previous` ([Throwable](http://php.net/class.throwable), [null](http://php.net/language.types.null))




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/UploadFailedException.php#L63-L66)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










