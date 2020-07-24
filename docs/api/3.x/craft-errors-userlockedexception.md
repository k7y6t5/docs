---
title: craft\errors\UserLockedException
code:
  - php
  - twig
---

# UserLockedException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\UserLockedException](craft-errors-userlockedexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.1.7



Class UserLockedException





[View source](https://github.com/craftcms/cms/blob/master/src/errors/UserLockedException.php)


## Public Properties

| Property                                         | Description
| ------------------------------------------------ | -----------------------------------------------------------------------
| [user](craft-errors-userlockedexception.md#user) | [craft\elements\User](craft-elements-user.md) – The user that's locked.

### `user`



Type

:   [craft\elements\User](craft-elements-user.md)



The user that's locked.



[View source](https://github.com/craftcms/cms/blob/master/src/errors/UserLockedException.php#L25)







## Public Methods

| Method                                                                | Description
| --------------------------------------------------------------------- | -----------
| [__construct()](craft-errors-userlockedexception.md#method-construct) | Constructor
| [getName()](craft-errors-userlockedexception.md#method-getname)       |

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/errors/UserLockedException.php#L35-L39)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md))
- `$message` ([string](http://php.net/language.types.string))
- `$code` ([integer](http://php.net/language.types.integer))
- `$previous` ([Throwable](http://php.net/class.throwable), [null](http://php.net/language.types.null))




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/UserLockedException.php#L44-L47)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










