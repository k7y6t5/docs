---
title: craft\errors\ShellCommandException
code:
  - php
  - twig
---

# ShellCommandException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\ShellCommandException](craft-errors-shellcommandexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



ShellCommandException represents an exception caused by setting an invalid license key on a plugin.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php)


## Public Properties

| Property                                                   | Description
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------
| [command](craft-errors-shellcommandexception.md#command)   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The command that was executed
| [error](craft-errors-shellcommandexception.md#error)       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The command’s error output
| [exitCode](craft-errors-shellcommandexception.md#exitcode) | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The command’s exit code

### `command`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The command that was executed



[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L24)



### `error`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The command’s error output



[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L34)



### `exitCode`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The command’s exit code



[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L29)







## Public Methods

| Method                                                                                | Description
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------
| [__construct()](craft-errors-shellcommandexception.md#method-construct)               | Constructor.
| [createFromCommand()](craft-errors-shellcommandexception.md#method-createfromcommand) | Creates a ShellCommandException from a `\mikehaertl\shellcommand\Command` object
| [getName()](craft-errors-shellcommandexception.md#method-getname)                     |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L62-L79)


#### Arguments

- `$command` ([string](http://php.net/language.types.string)) – The command that was executed
- `$exitCode` ([integer](http://php.net/language.types.integer)) – The command’s exit code
- `$error` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The command’s error output
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code




### `createFromCommand()`





Creates a ShellCommandException from a `\mikehaertl\shellcommand\Command` object




[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L42-L51)


#### Arguments

- `$command` (`\mikehaertl\shellcommand\Command`) – The failed Command object

#### Returns

`static`, [false](http://php.net/language.types.boolean)



### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/ShellCommandException.php#L84-L87)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










