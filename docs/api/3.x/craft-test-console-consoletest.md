---
title: craft\test\console\ConsoleTest
code:
  - php
  - twig
---

# ConsoleTest

Type

:   Class

Namespace

:   craft\test\console

Inherits

:   [craft\test\console\ConsoleTest](craft-test-console-consoletest.md) &raquo;
[craft\test\TestCase](craft-test-testcase.md) &raquo;
`Codeception\Test\Unit`

Since

:   3.2.0



Class ConsoleTest





[View source](https://github.com/craftcms/cms/blob/master/src/test/console/ConsoleTest.php)






## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------
| [assertObjectIsInstanceOfClassCallback()](craft-test-testcase.md#method-assertobjectisinstanceofclasscallback "Defined by craft\test\TestCase") | Returns a callback/Closure that checks whether the passed in object is an instance of the $class param
| [consoleCommand()](craft-test-console-consoletest.md#method-consolecommand)                                                                     |

### `consoleCommand()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/console/ConsoleTest.php#L29-L32)


#### Arguments

- `$command` ([string](http://php.net/language.types.string))
- `$parameters` ([array](http://php.net/language.types.array))
- `$ignoreStdOut` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\test\console\CommandTest](craft-test-console-commandtest.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)




## Protected Methods

| Method                                                                                                              | Description
| ------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------
| [getInaccessibleProperty()](craft-test-testcase.md#method-getinaccessibleproperty "Defined by craft\test\TestCase") | Gets an inaccessible object property.
| [invokeMethod()](craft-test-testcase.md#method-invokemethod "Defined by craft\test\TestCase")                       | Invokes a inaccessible method.
| [setInaccessibleProperty()](craft-test-testcase.md#method-setinaccessibleproperty "Defined by craft\test\TestCase") | Sets an inaccessible object property to a designated value.






