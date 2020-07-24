---
title: craft\test\console\CommandTest
code:
  - php
  - twig
---

# CommandTest

Type

:   Class

Namespace

:   craft\test\console

Inherits

:   [craft\test\console\CommandTest](craft-test-console-commandtest.md)

Since

:   3.2.0



Class ConsoleTest





[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php)




## Protected Properties

| Property                                                                           | Description
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------
| [actionId](craft-test-console-commandtest.md#actionid)                             | [string](http://php.net/language.types.string)
| [command](craft-test-console-commandtest.md#command)                               | [string](http://php.net/language.types.string)
| [controller](craft-test-console-commandtest.md#controller)                         | [craft\console\Controller](craft-console-controller.md)
| [currentIndex](craft-test-console-commandtest.md#currentindex)                     | [integer](http://php.net/language.types.integer)
| [desiredExitCode](craft-test-console-commandtest.md#desiredexitcode)               | [integer](http://php.net/language.types.integer)
| [eventChain](craft-test-console-commandtest.md#eventchain)                         | [array](http://php.net/language.types.array), [craft\test\console\CommandTestItem](craft-test-console-commandtestitem.md)
| [eventChainItemsHandled](craft-test-console-commandtest.md#eventchainitemshandled) | [integer](http://php.net/language.types.integer)
| [expectedExitCode](craft-test-console-commandtest.md#expectedexitcode)             | [integer](http://php.net/language.types.integer)
| [hasExecuted](craft-test-console-commandtest.md#hasexecuted)                       | [boolean](http://php.net/language.types.boolean)
| [ignoreStdOut](craft-test-console-commandtest.md#ignorestdout)                     | [boolean](http://php.net/language.types.boolean)
| [parameters](craft-test-console-commandtest.md#parameters)                         | [array](http://php.net/language.types.array)
| [test](craft-test-console-commandtest.md#test)                                     | [craft\test\console\ConsoleTest](craft-test-console-consoletest.md)

### `actionId`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L80)



### `command`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L40)



### `controller`



Type

:   [craft\console\Controller](craft-console-controller.md)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L75)



### `currentIndex`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L70)



### `desiredExitCode`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L85)



### `eventChain`



Type

:   [array](http://php.net/language.types.array), [craft\test\console\CommandTestItem](craft-test-console-commandtestitem.md)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L65)



### `eventChainItemsHandled`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L90)



### `expectedExitCode`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L55)



### `hasExecuted`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L60)



### `ignoreStdOut`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L50)



### `parameters`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L45)



### `test`



Type

:   [craft\test\console\ConsoleTest](craft-test-console-consoletest.md)







[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L35)





## Public Methods

| Method                                                                    | Description
| ------------------------------------------------------------------------- | ------------------------
| [__construct()](craft-test-console-commandtest.md#method-construct)       | CommandTest constructor.
| [confirm()](craft-test-console-commandtest.md#method-confirm)             |
| [exitCode()](craft-test-console-commandtest.md#method-exitcode)           |
| [outputCommand()](craft-test-console-commandtest.md#method-outputcommand) |
| [prompt()](craft-test-console-commandtest.md#method-prompt)               |
| [run()](craft-test-console-commandtest.md#method-run)                     |
| [select()](craft-test-console-commandtest.md#method-select)               |
| [stdOut()](craft-test-console-commandtest.md#method-stdout)               |
| [stderr()](craft-test-console-commandtest.md#method-stderr)               |

### `__construct()`





CommandTest constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L101-L108)


#### Arguments

- `$consoleTest` ([craft\test\console\ConsoleTest](craft-test-console-consoletest.md))
- `$command` ([string](http://php.net/language.types.string))
- `$parameters` ([array](http://php.net/language.types.array))
- `$ignoreStdOut` ([boolean](http://php.net/language.types.boolean))


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `confirm()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L195-L203)


#### Arguments

- `$message` ([string](http://php.net/language.types.string))
- `$returnValue`
- `$default` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `exitCode()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L129-L133)


#### Arguments

- `$value`

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `outputCommand()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L152-L159)


#### Arguments

- `$desiredOutput` ([string](http://php.net/language.types.string))
- `$withScriptName` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `prompt()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L179-L187)


#### Arguments

- `$prompt` ([string](http://php.net/language.types.string))
- `$returnValue`
- `$options` ([array](http://php.net/language.types.array))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `run()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L113-L123)




#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)


### `select()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L211-L219)


#### Arguments

- `$prompt`
- `$returnValue`
- `$options` ([array](http://php.net/language.types.array))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `stdOut()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L139-L145)


#### Arguments

- `$desiredOutput` ([string](http://php.net/language.types.string))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `stderr()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L165-L171)


#### Arguments

- `$desiredOutput` ([string](http://php.net/language.types.string))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)





## Protected Methods

| Method                                                                                  | Description
| --------------------------------------------------------------------------------------- | -----------
| [addEventChainItem()](craft-test-console-commandtest.md#method-addeventchainitem)       |
| [confirmHandler()](craft-test-console-commandtest.md#method-confirmhandler)             |
| [getNextItem()](craft-test-console-commandtest.md#method-getnextitem)                   |
| [outputCommandHandler()](craft-test-console-commandtest.md#method-outputcommandhandler) |
| [promptHandler()](craft-test-console-commandtest.md#method-prompthandler)               |
| [runHandlerCheck()](craft-test-console-commandtest.md#method-runhandlercheck)           |
| [selectHandler()](craft-test-console-commandtest.md#method-selecthandler)               |
| [setupController()](craft-test-console-commandtest.md#method-setupcontroller)           |
| [stdOutHandler()](craft-test-console-commandtest.md#method-stdouthandler)               |
| [stderrHandler()](craft-test-console-commandtest.md#method-stderrhandler)               |

### `addEventChainItem()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L406-L411)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)



### `confirmHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L324-L339)



#### Returns

[Closure](http://php.net/class.closure)



### `getNextItem()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L384-L399)



#### Returns

[craft\test\console\CommandTestItem](craft-test-console-commandtestitem.md), [null](http://php.net/language.types.null)



### `outputCommandHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L256-L270)



#### Returns

[Closure](http://php.net/class.closure)



### `promptHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L304-L319)



#### Returns

[Closure](http://php.net/class.closure)



### `runHandlerCheck()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L367-L379)


#### Arguments

- `$out`
- `$type`

#### Returns

[craft\test\console\CommandTestItem](craft-test-console-commandtestitem.md)



### `selectHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L344-L359)



#### Returns

[Closure](http://php.net/class.closure)



### `setupController()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L224-L251)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `stdOutHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L275-L284)



#### Returns

[Closure](http://php.net/class.closure)



### `stderrHandler()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/CommandTest.php#L289-L299)



#### Returns

[Closure](http://php.net/class.closure)





## Constants

| Constant         | Description
| ---------------- | -----------
| `CONFIRM`        |
| `OUTPUT_COMMAND` |
| `PROMPT`         |
| `SELECT`         |
| `STD_ERR`        |
| `STD_OUT`        |



