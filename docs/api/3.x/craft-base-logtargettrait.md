---
title: craft\base\LogTargetTrait
code:
  - php
  - twig
---

# LogTargetTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\log\FileTarget](craft-log-filetarget.md)

Since

:   3.1.23



LogTargetTrait implements the common methods and properties for log target classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/LogTargetTrait.php)


## Public Properties

| Property                                                    | Description
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------
| [includeUserIp](craft-base-logtargettrait.md#includeuserip) | [boolean](http://php.net/language.types.boolean) – Whether the user IP should be included in the default log prefix.

### `includeUserIp`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.0.25



Whether the user IP should be included in the default log prefix.

See also [yii\log\Target::$prefix](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$prefix-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/base/LogTargetTrait.php#L33)







## Public Methods

| Method                                                                     | Description
| -------------------------------------------------------------------------- | -----------------------------------------------------
| [getMessagePrefix()](craft-base-logtargettrait.md#method-getmessageprefix) | Returns a string to be prefixed to the given message.

### `getMessagePrefix()`





Returns a string to be prefixed to the given message.

If [yii\log\Target::$prefix](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$prefix-detail) is configured it will return the result of the callback.

See also [yii\log\Target::getMessagePrefix()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#getMessagePrefix()-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/base/LogTargetTrait.php#L46-L76)


#### Arguments

- `$message` ([array](http://php.net/language.types.array)) – The message being exported.
The message structure follows that in [yii\log\Logger::$messages](https://www.yiiframework.com/doc/api/2.0/yii-log-logger#$messages-detail).

#### Returns

[string](http://php.net/language.types.string) – The prefix string

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [Throwable](http://php.net/class.throwable)




## Protected Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | -----------------------------------------------
| [getContextMessage()](craft-base-logtargettrait.md#method-getcontextmessage) | Generates the context information to be logged.

### `getContextMessage()`





Generates the context information to be logged.



See also [yii\log\Target::getContextMessage()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#getContextMessage()-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/base/LogTargetTrait.php#L84-L102)



#### Returns

[string](http://php.net/language.types.string) – The context information. If an empty string, it means no context information.







