---
title: craft\test\Craft
code:
  - php
  - twig
---

# Craft

Type

:   Class

Namespace

:   craft\test

Inherits

:   [craft\test\Craft](craft-test-craft.md) &raquo;
`Codeception\Module\Yii2`

Since

:   3.2.0



Craft module for codeception





[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php)


## Public Properties

| Property                                       | Description
| ---------------------------------------------- | -----------------------------
| [currentTest](craft-test-craft.md#currenttest) | `\Codeception\TestInterface`
| [instance](craft-test-craft.md#instance)       | `self` – The current instance

### `currentTest`



Type

:   `\Codeception\TestInterface`







[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L75)



### `instance`



Type

:   `self`



The current instance



[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L70)





## Protected Properties

| Property                                               | Description
| ------------------------------------------------------ | -----------------------------------------------------------------------------------
| [addedConfig](craft-test-craft.md#addedconfig)         | [array](http://php.net/language.types.array) – Application config file must be set.
| [requiredEvents](craft-test-craft.md#requiredevents)   | [array](http://php.net/language.types.array) – For expecting events code
| [triggeredEvents](craft-test-craft.md#triggeredevents) | [array](http://php.net/language.types.array) – For expecting events code

### `addedConfig`



Type

:   [array](http://php.net/language.types.array)



Application config file must be set.



[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L80-L87)



### `requiredEvents`



Type

:   [array](http://php.net/language.types.array)



For expecting events code



[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L97)



### `triggeredEvents`



Type

:   [array](http://php.net/language.types.array)



For expecting events code



[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L92)





## Public Methods

| Method                                                                                  | Description
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------
| [__construct()](craft-test-craft.md#method-construct)                                   | Craft constructor.
| [_before()](craft-test-craft.md#method-before)                                          |
| [_initialize()](craft-test-craft.md#method-initialize)                                  |
| [assertElementsExist()](craft-test-craft.md#method-assertelementsexist)                 |
| [assertEqualDates()](craft-test-craft.md#method-assertequaldates)                       |
| [assertPushedToQueue()](craft-test-craft.md#method-assertpushedtoqueue)                 |
| [assertTestFails()](craft-test-craft.md#method-asserttestfails)                         |
| [createDbConfig()](craft-test-craft.md#method-createdbconfig)                           | Creates a DB config according to the loaded .env variables.
| [createEventItems()](craft-test-craft.md#method-createeventitems)                       |
| [expectEvent()](craft-test-craft.md#method-expectevent)                                 | Ensure that an event is triggered by the $callback() function.
| [getCodeceptionName()](craft-test-craft.md#method-getcodeceptionname)                   |
| [getFieldLayoutByFieldHandle()](craft-test-craft.md#method-getfieldlayoutbyfieldhandle) |
| [installPlugin()](craft-test-craft.md#method-installplugin)                             |
| [mockCraftMethods()](craft-test-craft.md#method-mockcraftmethods)                       |
| [mockMethods()](craft-test-craft.md#method-mockmethods)                                 |
| [normalizePathSeparators()](craft-test-craft.md#method-normalizepathseparators)         |
| [resetProjectConfig()](craft-test-craft.md#method-resetprojectconfig)                   | Reset's the project config.
| [runQueue()](craft-test-craft.md#method-runqueue)                                       | An easy way of handling the testing of queue jobs.
| [saveElement()](craft-test-craft.md#method-saveelement)                                 |
| [setupDb()](craft-test-craft.md#method-setupdb)                                         |

### `__construct()`





Craft constructor.

We need to merge the config settings here as this is the earliest point in the instance's existence.
Doing it in _initialize() won't work as the config variables have already been added.


[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L108-L114)


#### Arguments

- `$moduleContainer` (`\Codeception\Lib\ModuleContainer`)
- `$config` ([null](http://php.net/language.types.null))




### `_before()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L137-L161)


#### Arguments

- `$test` (`\Codeception\TestInterface`)


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [ReflectionException](http://php.net/class.reflectionexception)
- [Throwable](http://php.net/class.throwable)
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)


### `_initialize()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L119-L128)






### `assertElementsExist()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L395-L412)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string))
- `$searchProperties` ([array](http://php.net/language.types.array))
- `$amount` ([integer](http://php.net/language.types.integer))
- `$searchAll` ([boolean](http://php.net/language.types.boolean)) – - Wether anyStatus() and trashed(null) should be applied

#### Returns

[array](http://php.net/language.types.array)



### `assertEqualDates()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L445-L453)


#### Arguments

- `$test` (`\Codeception\TestInterface`)
- `$dateOne` ([string](http://php.net/language.types.string))
- `$dateTwo` ([string](http://php.net/language.types.string))
- `$secondsDelta` ([float](http://php.net/language.types.float))


#### Throws

- [Exception](http://php.net/class.exception)


### `assertPushedToQueue()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L504-L514)


#### Arguments

- `$description` ([string](http://php.net/language.types.string))




### `assertTestFails()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L418-L435)


#### Arguments

- `$callable` ([callable](http://php.net/language.types.callable))
- `$message` ([string](http://php.net/language.types.string))




### `createDbConfig()`





Creates a DB config according to the loaded .env variables.




[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L317-L326)



#### Returns

[craft\config\DbConfig](craft-config-dbconfig.md)



### `createEventItems()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L545-L553)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `expectEvent()`





Ensure that an event is triggered by the $callback() function.




[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L337-L363)


#### Arguments

- `$class` ([string](http://php.net/language.types.string))
- `$eventName` ([string](http://php.net/language.types.string))
- `$callback`
- `$eventInstance` ([string](http://php.net/language.types.string))
- `$eventValues` ([array](http://php.net/language.types.array))




### `getCodeceptionName()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L297-L300)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldLayoutByFieldHandle()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L520-L539)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)



### `installPlugin()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L287-L292)


#### Arguments

- `$plugin` ([array](http://php.net/language.types.array))


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [Throwable](http://php.net/class.throwable)
- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)


### `mockCraftMethods()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L475-L478)


#### Arguments

- `$component` ([string](http://php.net/language.types.string))
- `$methods` ([array](http://php.net/language.types.array))
- `$constructParams` ([array](http://php.net/language.types.array))


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `mockMethods()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L462-L467)


#### Arguments

- `$module` ([yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module))
- `$component` ([string](http://php.net/language.types.string))
- `$methods` ([array](http://php.net/language.types.array))
- `$constructParams` ([array](http://php.net/language.types.array))


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `normalizePathSeparators()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L306-L309)


#### Arguments

- `$path`

#### Returns

[string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean)



### `resetProjectConfig()`



Since

:   3.3.10



Reset's the project config.




[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L171-L203)


#### Arguments

- `$force` ([boolean](http://php.net/language.types.boolean)) – Whether to force the reset. If set to true the `reset` key of the projectConfig configuration will
be ignored and the project config will be reset regardless.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `runQueue()`





An easy way of handling the testing of queue jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L487-L499)


#### Arguments

- `$queueItem` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array))


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)


### `saveElement()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L373-L386)


#### Arguments

- `$element` ([craft\base\Element](craft-base-element.md))
- `$failHard` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\ElementNotFoundException](craft-errors-elementnotfoundexception.md)
- [Throwable](http://php.net/class.throwable)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `setupDb()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L208-L279)




#### Throws

- [Throwable](http://php.net/class.throwable)




## Protected Methods

| Method                                                                      | Description
| --------------------------------------------------------------------------- | -----------
| [addModule()](craft-test-craft.md#method-addmodule)                         |
| [mockModulesAndPlugins()](craft-test-craft.md#method-mockmodulesandplugins) |
| [recreateClient()](craft-test-craft.md#method-recreateclient)               |
| [validateEventValue()](craft-test-craft.md#method-validateeventvalue)       |

### `addModule()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L614-L624)


#### Arguments

- `$test` (`\Codeception\PHPUnit\TestCase`)
- `$moduleClass` ([string](http://php.net/language.types.string))


#### Throws

- [ReflectionException](http://php.net/class.reflectionexception)


### `mockModulesAndPlugins()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L595-L607)


#### Arguments

- `$test` (`\Codeception\PHPUnit\TestCase`)


#### Throws

- [ReflectionException](http://php.net/class.reflectionexception)


### `recreateClient()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L631-L646)






### `validateEventValue()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/Craft.php#L559-L589)


#### Arguments

- `$event`
- `$eventRequirements` ([craft\test\EventItem](craft-test-eventitem.md))









