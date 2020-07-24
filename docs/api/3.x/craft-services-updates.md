---
title: craft\services\Updates
code:
  - php
  - twig
---

# Updates

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Updates](craft-services-updates.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Updates service.

An instance of the Updates service is globally accessible in Craft via [`Craft::$app->updates`](craft-base-applicationtrait.md#method-getupdates).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cacheKey](craft-services-updates.md#cachekey)                                                                             | [string](http://php.net/language.types.string)
| [hasCraftVersionChanged](craft-services-updates.md#hascraftversionchanged)                                                 | [boolean](http://php.net/language.types.boolean)
| [isCraftDbMigrationNeeded](craft-services-updates.md#iscraftdbmigrationneeded)                                             | [boolean](http://php.net/language.types.boolean)
| [isCraftSchemaVersionCompatible](craft-services-updates.md#iscraftschemaversioncompatible)                                 | [boolean](http://php.net/language.types.boolean)
| [isCriticalUpdateAvailable](craft-services-updates.md#iscriticalupdateavailable)                                           | [boolean](http://php.net/language.types.boolean)
| [isPluginDbUpdateNeeded](craft-services-updates.md#isplugindbupdateneeded)                                                 | [boolean](http://php.net/language.types.boolean)
| [isUpdateInfoCached](craft-services-updates.md#isupdateinfocached)                                                         | [boolean](http://php.net/language.types.boolean)
| [newPluginInfo](craft-services-updates.md#newplugininfo)                                                                   | [craft\base\PluginInterface](craft-base-plugininterface.md)
| [pendingMigrationHandles](craft-services-updates.md#pendingmigrationhandles)                                               | [string](http://php.net/language.types.string)[]
| [totalAvailableUpdates](craft-services-updates.md#totalavailableupdates)                                                   | [integer](http://php.net/language.types.integer)
| [updates](craft-services-updates.md#updates)                                                                               | [craft\models\Updates](craft-models-updates.md)
| [wasCraftBreakpointSkipped](craft-services-updates.md#wascraftbreakpointskipped)                                           | [boolean](http://php.net/language.types.boolean)

### `cacheKey`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L41)



### `hasCraftVersionChanged`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `isCraftDbMigrationNeeded`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `isCraftSchemaVersionCompatible`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `isCriticalUpdateAvailable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `isPluginDbUpdateNeeded`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `isUpdateInfoCached`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `newPluginInfo`



Type

:   [craft\base\PluginInterface](craft-base-plugininterface.md)

Access

:   Write-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `pendingMigrationHandles`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `totalAvailableUpdates`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `updates`



Type

:   [craft\models\Updates](craft-models-updates.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)



### `wasCraftBreakpointSkipped`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [cacheUpdates()](craft-services-updates.md#method-cacheupdates)                                                                             | Caches new update info.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getHasCraftVersionChanged()](craft-services-updates.md#method-gethascraftversionchanged)                                                   | Returns whether a different Craft version has been uploaded.
| [getIsCraftDbMigrationNeeded()](craft-services-updates.md#method-getiscraftdbmigrationneeded)                                               | Returns whether Craft needs to run any database migrations.
| [getIsCraftSchemaVersionCompatible()](craft-services-updates.md#method-getiscraftschemaversioncompatible)                                   | Returns whether the uploaded DB schema is equal to or greater than the installed schema.
| [getIsCriticalUpdateAvailable()](craft-services-updates.md#method-getiscriticalupdateavailable)                                             | Returns whether a critical update is available.
| [getIsPluginDbUpdateNeeded()](craft-services-updates.md#method-getisplugindbupdateneeded)                                                   | Returns whether a plugin needs to run a database update.
| [getIsUpdateInfoCached()](craft-services-updates.md#method-getisupdateinfocached)                                                           | Returns whether the update info is cached.
| [getPendingMigrationHandles()](craft-services-updates.md#method-getpendingmigrationhandles)                                                 | Returns a list of things with updated schema versions.
| [getTotalAvailableUpdates()](craft-services-updates.md#method-gettotalavailableupdates)                                                     |
| [getUpdates()](craft-services-updates.md#method-getupdates)                                                                                 |
| [getWasCraftBreakpointSkipped()](craft-services-updates.md#method-getwascraftbreakpointskipped)                                             | Returns true if the version stored in craft_info is less than the minimum required version on the file system.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [runMigrations()](craft-services-updates.md#method-runmigrations)                                                                           | Runs the pending migrations for the given list of handles.
| [setNewPluginInfo()](craft-services-updates.md#method-setnewplugininfo)                                                                     |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateCraftVersionInfo()](craft-services-updates.md#method-updatecraftversioninfo)                                                         | Updates the Craft version info in the craft_info table.

### `cacheUpdates()`



Since

:   3.3.16



Caches new update info.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L122-L130)


#### Arguments

- `$updateData` ([array](http://php.net/language.types.array))

#### Returns

[craft\models\Updates](craft-models-updates.md)



### `getHasCraftVersionChanged()`





Returns whether a different Craft version has been uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L278-L281)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsCraftDbMigrationNeeded()`





Returns whether Craft needs to run any database migrations.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L311-L319)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsCraftSchemaVersionCompatible()`





Returns whether the uploaded DB schema is equal to or greater than the installed schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L299-L304)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsCriticalUpdateAvailable()`





Returns whether a critical update is available.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L81-L87)


#### Arguments

- `$check` ([boolean](http://php.net/language.types.boolean)) – Whether to check for updates if they aren't cached already

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPluginDbUpdateNeeded()`





Returns whether a plugin needs to run a database update.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L260-L271)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsUpdateInfoCached()`





Returns whether the update info is cached.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L58-L61)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPendingMigrationHandles()`





Returns a list of things with updated schema versions.

Craft CMS will be represented as "craft", plugins will be represented by their handles, and content will be represented as "content".

See also [runMigrations()](craft-services-updates.md#method-runmigrations)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L170-L194)


#### Arguments

- `$includeContent` ([boolean](http://php.net/language.types.boolean)) – Whether pending content migrations should be considered

#### Returns

[string](http://php.net/language.types.string)[]



### `getTotalAvailableUpdates()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L67-L73)


#### Arguments

- `$check` ([boolean](http://php.net/language.types.boolean)) – Whether to check for updates if they aren't cached already

#### Returns

[integer](http://php.net/language.types.integer)



### `getUpdates()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L93-L113)


#### Arguments

- `$refresh` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\models\Updates](craft-models-updates.md)



### `getWasCraftBreakpointSkipped()`





Returns true if the version stored in craft_info is less than the minimum required version on the file system.

This effectively makes sure that a user cannot manually update past a manual breakpoint.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L289-L292)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `runMigrations()`





Runs the pending migrations for the given list of handles.



See also [getPendingMigrationHandles()](craft-services-updates.md#method-getpendingmigrationhandles)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L203-L253)


#### Arguments

- `$handles` ([string](http://php.net/language.types.string)[]) – The list of handles to run migrations for


#### Throws

- [craft\errors\MigrateException](craft-errors-migrateexception.md)


### `setNewPluginInfo()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L136-L159)


#### Arguments

- `$plugin` ([craft\base\PluginInterface](craft-base-plugininterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `updateCraftVersionInfo()`





Updates the Craft version info in the craft_info table.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Updates.php#L326-L342)



#### Returns

[boolean](http://php.net/language.types.boolean)










