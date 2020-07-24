---
title: craft\db\MigrationManager
code:
  - php
  - twig
---

# MigrationManager

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\MigrationManager](craft-db-migrationmanager.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



MigrationManager manages a set of migrations.





[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [db](craft-db-migrationmanager.md#db)                                                                                      | [craft\db\Connection](craft-db-connection.md), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The DB connection object or the application component ID of the DB connection
| [migrationHistory](craft-db-migrationmanager.md#migrationhistory)                                                          | [array](http://php.net/language.types.array) – The migration history
| [migrationNamespace](craft-db-migrationmanager.md#migrationnamespace)                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The namespace that the migration classes are in
| [migrationPath](craft-db-migrationmanager.md#migrationpath)                                                                | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The path to the migrations directory
| [migrationTable](craft-db-migrationmanager.md#migrationtable)                                                              | [string](http://php.net/language.types.string) – The migrations table name
| [newMigrations](craft-db-migrationmanager.md#newmigrations)                                                                | [array](http://php.net/language.types.array) – The list of new migrations
| [pluginId](craft-db-migrationmanager.md#pluginid)                                                                          | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The plugin ID, if [type](craft-db-migrationmanager.md#type) is set to 'plugin'.
| [type](craft-db-migrationmanager.md#type)                                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The type of migrations we're dealing with here.

### `db`



Type

:   [craft\db\Connection](craft-db-connection.md), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string)



The DB connection object or the application component ID of the DB connection



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L61)



### `migrationHistory`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The migration history



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php)



### `migrationNamespace`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The namespace that the migration classes are in



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L51)



### `migrationPath`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The path to the migrations directory



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L56)



### `migrationTable`



Type

:   [string](http://php.net/language.types.string)



The migrations table name



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L66)



### `newMigrations`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The list of new migrations



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php)



### `pluginId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The plugin ID, if [type](craft-db-migrationmanager.md#type) is set to 'plugin'.



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L46)



### `type`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The type of migrations we're dealing with here. Can be 'app', 'plugin', or 'content'.



[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L41)







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
| [addMigrationHistory()](craft-db-migrationmanager.md#method-addmigrationhistory)                                                            | Adds a new migration entry to the history.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createMigration()](craft-db-migrationmanager.md#method-createmigration)                                                                    | Creates a new migration instance.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [down()](craft-db-migrationmanager.md#method-down)                                                                                          | Downgrades the application by reverting old migrations.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getMigrationHistory()](craft-db-migrationmanager.md#method-getmigrationhistory)                                                            | Returns the migration history.
| [getNewMigrations()](craft-db-migrationmanager.md#method-getnewmigrations)                                                                  | Returns the migrations that are not applied.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [hasRun()](craft-db-migrationmanager.md#method-hasrun)                                                                                      | Returns whether a given migration has been applied.
| [init()](craft-db-migrationmanager.md#method-init)                                                                                          | Initializes the object.
| [migrateDown()](craft-db-migrationmanager.md#method-migratedown)                                                                            | Downgrades with the specified migration.
| [migrateUp()](craft-db-migrationmanager.md#method-migrateup)                                                                                | Upgrades with the specified migration.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [removeMigrationHistory()](craft-db-migrationmanager.md#method-removemigrationhistory)                                                      | Removes an existing migration from the history.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [truncateHistory()](craft-db-migrationmanager.md#method-truncatehistory)                                                                    | Truncates the migration history.
| [up()](craft-db-migrationmanager.md#method-up)                                                                                              | Upgrades the application by applying new migrations.

### `addMigrationHistory()`





Adds a new migration entry to the history.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L340-L354)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The migration name




### `createMigration()`





Creates a new migration instance.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L99-L110)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The migration name

#### Returns

[yii\db\MigrationInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-migrationinterface), [yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration) – The migration instance

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the migration folder doesn't exist


### `down()`





Downgrades the application by reverting old migrations.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L170-L201)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The number of migrations to be reverted. Defaults to 1,
meaning the last applied migration will be reverted. If set to 0, all migrations will be reverted.


#### Throws

- [craft\errors\MigrationException](craft-errors-migrationexception.md)\
  on migrate failure


### `getMigrationHistory()`





Returns the migration history.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L323-L333)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The maximum number of records in the history to be returned. `null` for "no limit".

#### Returns

[array](http://php.net/language.types.array) – The migration history



### `getNewMigrations()`





Returns the migrations that are not applied.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L413-L441)



#### Returns

[array](http://php.net/language.types.array) – The list of new migrations



### `hasRun()`





Returns whether a given migration has been applied.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L401-L406)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The migration name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the migration has been applied



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L71-L90)






### `migrateDown()`





Downgrades with the specified migration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L267-L315)


#### Arguments

- `$migration` ([string](http://php.net/language.types.string), [yii\db\MigrationInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-migrationinterface), [yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration)) – The name of the migration to revert, or the migration itself


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if $migration is invalid
- [craft\errors\MigrationException](craft-errors-migrationexception.md)\
  on migrate failure


### `migrateUp()`





Upgrades with the specified migration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L210-L258)


#### Arguments

- `$migration` ([string](http://php.net/language.types.string), [yii\db\MigrationInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-migrationinterface), [yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration)) – The name of the migration to apply, or the migration itself


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if $migration is invalid
- [craft\errors\MigrationException](craft-errors-migrationexception.md)\
  on migrate failure


### `removeMigrationHistory()`





Removes an existing migration from the history.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L361-L374)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The migration name




### `truncateHistory()`



Since

:   3.0.32



Truncates the migration history.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L381-L393)






### `up()`





Upgrades the application by applying new migrations.




[View source](https://github.com/craftcms/cms/blob/master/src/db/MigrationManager.php#L119-L161)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The number of new migrations to be applied. If 0, it means
applying all available new migrations.


#### Throws

- [craft\errors\MigrationException](craft-errors-migrationexception.md)\
  on migrate failure






## Constants

| Constant         | Description
| ---------------- | ----------------------------------------------------------------------------------------
| `BASE_MIGRATION` | The name of the dummy migration that marks the beginning of the whole migration history.
| `TYPE_APP`       |
| `TYPE_CONTENT`   |
| `TYPE_PLUGIN`    |



