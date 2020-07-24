---
title: craft\test\TestCase
code:
  - php
  - twig
---

# TestCase

Type

:   Class

Namespace

:   craft\test

Inherits

:   [craft\test\TestCase](craft-test-testcase.md) &raquo;
`Codeception\Test\Unit`

Extended by

:   [craft\test\console\ConsoleTest](craft-test-console-consoletest.md)

Since

:   3.2.0



Class TestCase





[View source](https://github.com/craftcms/cms/blob/master/src/test/TestCase.php)






## Public Methods

| Method                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------
| [assertObjectIsInstanceOfClassCallback()](craft-test-testcase.md#method-assertobjectisinstanceofclasscallback) | Returns a callback/Closure that checks whether the passed in object is an instance of the $class param

### `assertObjectIsInstanceOfClassCallback()`





Returns a callback/Closure that checks whether the passed in object is an instance of the $class param




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestCase.php#L31-L36)


#### Arguments

- `$class` ([string](http://php.net/language.types.string))

#### Returns

[Closure](http://php.net/class.closure)





## Protected Methods

| Method                                                                             | Description
| ---------------------------------------------------------------------------------- | -----------------------------------------------------------
| [getInaccessibleProperty()](craft-test-testcase.md#method-getinaccessibleproperty) | Gets an inaccessible object property.
| [invokeMethod()](craft-test-testcase.md#method-invokemethod)                       | Invokes a inaccessible method.
| [setInaccessibleProperty()](craft-test-testcase.md#method-setinaccessibleproperty) | Sets an inaccessible object property to a designated value.

### `getInaccessibleProperty()`





Gets an inaccessible object property.




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestCase.php#L75-L92)


#### Arguments

- `$object`
- `$propertyName`
- `$revoke` ([boolean](http://php.net/language.types.boolean)) – Whether to make property inaccessible after getting

#### Returns

`mixed`

#### Throws

- [ReflectionException](http://php.net/class.reflectionexception)


### `invokeMethod()`





Invokes a inaccessible method.




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestCase.php#L105-L116)


#### Arguments

- `$object`
- `$method`
- `$args` ([array](http://php.net/language.types.array))
- `$revoke` ([boolean](http://php.net/language.types.boolean)) – Whether to make method inaccessible after execution

#### Returns

`mixed`

#### Throws

- [ReflectionException](http://php.net/class.reflectionexception)


### `setInaccessibleProperty()`





Sets an inaccessible object property to a designated value.




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestCase.php#L48-L63)


#### Arguments

- `$object`
- `$propertyName`
- `$value`
- `$revoke` ([boolean](http://php.net/language.types.boolean)) – Whether to make property inaccessible after setting


#### Throws

- [ReflectionException](http://php.net/class.reflectionexception)







