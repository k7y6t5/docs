---
title: craft\test\TestSetup
code:
  - php
  - twig
---

# TestSetup

Type

:   Class

Namespace

:   craft\test

Inherits

:   [craft\test\TestSetup](craft-test-testsetup.md)

Since

:   3.2



Class TestSetup.

TestSetup performs various setup tasks required for craft\test\Craft.
It is not intended for use within public tests.
Use the various features of `craft\test\Craft` instead.



[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php)






## Public Methods

| Method                                                                                      | Description
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------
| [appClass()](craft-test-testsetup.md#method-appclass)                                       |
| [appType()](craft-test-testsetup.md#method-apptype)                                         | Determine the app type. If the parent is `craft\test\console\ConsoleTest`.
| [cleanseDb()](craft-test-testsetup.md#method-cleansedb)                                     |
| [configureCraft()](craft-test-testsetup.md#method-configurecraft)                           |
| [createConfigService()](craft-test-testsetup.md#method-createconfigservice)                 |
| [createTestCraftObjectConfig()](craft-test-testsetup.md#method-createtestcraftobjectconfig) |
| [getCraftServiceMap()](craft-test-testsetup.md#method-getcraftservicemap)                   |
| [getMock()](craft-test-testsetup.md#method-getmock)                                         |
| [getMockApp()](craft-test-testsetup.md#method-getmockapp)                                   |
| [getSeedProjectConfigData()](craft-test-testsetup.md#method-getseedprojectconfigdata)       | Returns the data from the project.yml file specified in the codeception.yml file.
| [setupCraftDb()](craft-test-testsetup.md#method-setupcraftdb)                               |
| [setupProjectConfig()](craft-test-testsetup.md#method-setupprojectconfig)                   |
| [tearDownCraft()](craft-test-testsetup.md#method-teardowncraft)                             | Taken from the Yii2 Module $i->_after
| [useProjectConfig()](craft-test-testsetup.md#method-useprojectconfig)                       | Whether project config should be used in tests.
| [validateAndApplyMigration()](craft-test-testsetup.md#method-validateandapplymigration)     |
| [warmCraft()](craft-test-testsetup.md#method-warmcraft)                                     | Creates a craft object to play with. Ensures the Craft::$app service locator is working.

### `appClass()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L293-L301)


#### Arguments

- `$preDefinedAppType` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `appType()`





Determine the app type. If the parent is `craft\test\console\ConsoleTest`.

Its a console test. Else, web.


[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L279-L287)



#### Returns

[string](http://php.net/language.types.string)



### `cleanseDb()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L145-L160)


#### Arguments

- `$connection` ([craft\db\Connection](craft-db-connection.md))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `configureCraft()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L306-L352)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `createConfigService()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L263-L271)



#### Returns

[craft\services\Config](craft-services-config.md)



### `createTestCraftObjectConfig()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L204-L258)



#### Returns

[array](http://php.net/language.types.array)



### `getCraftServiceMap()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L545-L619)



#### Returns

[array](http://php.net/language.types.array)



### `getMock()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L533-L538)


#### Arguments

- `$test` (`\Codeception\PHPUnit\TestCase`)
- `$class` ([string](http://php.net/language.types.string))

#### Returns

`\PHPUnit\Framework\MockObject\MockObject`



### `getMockApp()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L489-L525)


#### Arguments

- `$test` (`\Codeception\PHPUnit\TestCase`)
- `$serviceMap` ([array](http://php.net/language.types.array))
- `$appClass` ([string](http://php.net/language.types.string))

#### Returns

`\PHPUnit\Framework\MockObject\MockObject`



### `getSeedProjectConfigData()`





Returns the data from the project.yml file specified in the codeception.yml file.




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L383-L403)


#### Arguments

- `$asYaml` ([boolean](http://php.net/language.types.boolean)) – Whether the raw yaml data should be returned. If set to false the parsed array data will be returned.

#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The project config in either yaml or as an array.



### `setupCraftDb()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L435-L480)


#### Arguments

- `$connection` ([craft\db\Connection](craft-db-connection.md))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `setupProjectConfig()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L358-L375)


#### Arguments

- `$projectConfigFile` ([string](http://php.net/language.types.string)) – - Whether to override the file specified in codeception.yml with a custom file.


#### Throws

- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)


### `tearDownCraft()`





Taken from the Yii2 Module $i->_after




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L121-L138)






### `useProjectConfig()`





Whether project config should be used in tests.

Returns the projectConfig configuration array if yes - `false` if not.


[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L412-L429)



#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)



### `validateAndApplyMigration()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L171-L199)


#### Arguments

- `$class` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array))
- `$ignorePreviousMigrations` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [craft\errors\MigrationException](craft-errors-migrationexception.md)


### `warmCraft()`





Creates a craft object to play with. Ensures the Craft::$app service locator is working.




[View source](https://github.com/craftcms/cms/blob/master/src/test/TestSetup.php#L110-L116)



#### Returns

`mixed`

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)









