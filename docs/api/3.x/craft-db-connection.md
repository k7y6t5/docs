---
title: craft\db\Connection
code:
  - php
  - twig
---

# Connection

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\Connection](craft-db-connection.md) &raquo;
[yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\db\PrimaryReplicaTrait](craft-db-primaryreplicatrait.md)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)


## Public Properties

| Property                                                                                                                                     | Description
| -------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$attributes-detail "Defined by yii\db\Connection")                   | [array](http://php.net/language.types.array) – PDO attributes (name => value) that should be set when calling [open()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#open()-detail) to establish a DB connection.
| [backupFilePath](craft-db-connection.md#backupfilepath)                                                                                      | [string](http://php.net/language.types.string)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                   | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [charset](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$charset-detail "Defined by yii\db\Connection")                         | [string](http://php.net/language.types.string) – The charset used for database connection.
| [commandClass](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$commandClass-detail "Defined by yii\db\Connection")               | [string](http://php.net/language.types.string) – The class used to create new database [yii\db\Command](https://www.yiiframework.com/doc/api/2.0/yii-db-command) objects.
| [commandMap](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$commandMap-detail "Defined by yii\db\Connection")                   | [array](http://php.net/language.types.array) – Mapping between PDO driver names and [yii\db\Command](https://www.yiiframework.com/doc/api/2.0/yii-db-command) classes.
| [driverName](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$driverName-detail "Defined by yii\db\Connection")                   | [string](http://php.net/language.types.string) – Name of the DB driver
| [dsn](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$dsn-detail "Defined by yii\db\Connection")                                 | [string](http://php.net/language.types.string) – The Data Source Name, or DSN, contains the information required to connect to the database.
| [emulatePrepare](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$emulatePrepare-detail "Defined by yii\db\Connection")           | [boolean](http://php.net/language.types.boolean) – Whether to turn on prepare emulation.
| [enableLogging](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableLogging-detail "Defined by yii\db\Connection")             | [boolean](http://php.net/language.types.boolean) – Whether to enable logging of database queries.
| [enableProfiling](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableProfiling-detail "Defined by yii\db\Connection")         | [boolean](http://php.net/language.types.boolean) – Whether to enable profiling of opening database connection and database queries.
| [enableQueryCache](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableQueryCache-detail "Defined by yii\db\Connection")       | [boolean](http://php.net/language.types.boolean) – Whether to enable query caching.
| [enableReplicas](craft-db-primaryreplicatrait.md#enablereplicas "Defined by craft\db\PrimaryReplicaTrait")                                   | [boolean](http://php.net/language.types.boolean)
| [enableSavepoint](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableSavepoint-detail "Defined by yii\db\Connection")         | [boolean](http://php.net/language.types.boolean) – Whether to enable [savepoint](http://en.
| [enableSchemaCache](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableSchemaCache-detail "Defined by yii\db\Connection")     | [boolean](http://php.net/language.types.boolean) – Whether to enable schema caching.
| [enableSlaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$enableSlaves-detail "Defined by yii\db\Connection")               | [boolean](http://php.net/language.types.boolean) – Whether to enable read/write splitting by using [slaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaves-detail) to read data.
| [ignoredBackupTables](craft-db-connection.md#ignoredbackuptables)                                                                            | [string](http://php.net/language.types.string)[]
| [isActive](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$isActive-detail "Defined by yii\db\Connection")                       | [boolean](http://php.net/language.types.boolean) – Whether the DB connection is established
| [isMysql](craft-db-connection.md#ismysql)                                                                                                    | [boolean](http://php.net/language.types.boolean)
| [isPgsql](craft-db-connection.md#ispgsql)                                                                                                    | [boolean](http://php.net/language.types.boolean)
| [lastInsertID](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$lastInsertID-detail "Defined by yii\db\Connection")               | [string](http://php.net/language.types.string) – The row ID of the last row inserted, or the last value retrieved from the sequence object
| [master](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$master-detail "Defined by yii\db\Connection")                           | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The currently active master connection.
| [masterConfig](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masterConfig-detail "Defined by yii\db\Connection")               | [array](http://php.net/language.types.array) – The configuration that should be merged with every master configuration listed in [masters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masters-detail).
| [masterPdo](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masterPdo-detail "Defined by yii\db\Connection")                     | [PDO](http://php.net/class.pdo) – The PDO instance for the currently active master connection.
| [masters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masters-detail "Defined by yii\db\Connection")                         | [array](http://php.net/language.types.array) – List of master connection configurations.
| [password](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$password-detail "Defined by yii\db\Connection")                       | [string](http://php.net/language.types.string) – The password for establishing DB connection.
| [pdo](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$pdo-detail "Defined by yii\db\Connection")                                 | [PDO](http://php.net/class.pdo) – The PHP PDO instance associated with this DB connection.
| [pdoClass](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$pdoClass-detail "Defined by yii\db\Connection")                       | [string](http://php.net/language.types.string) – Custom PDO wrapper class.
| [primaries](craft-db-primaryreplicatrait.md#primaries "Defined by craft\db\PrimaryReplicaTrait")                                             | [array](http://php.net/language.types.array)
| [primary](craft-db-primaryreplicatrait.md#primary "Defined by craft\db\PrimaryReplicaTrait")                                                 | [craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null) – The currently active primary connection.
| [primaryConfig](craft-db-primaryreplicatrait.md#primaryconfig "Defined by craft\db\PrimaryReplicaTrait")                                     | [array](http://php.net/language.types.array)
| [primaryPdo](craft-db-primaryreplicatrait.md#primarypdo "Defined by craft\db\PrimaryReplicaTrait")                                           | [PDO](http://php.net/class.pdo) – The PDO instance for the currently active primary connection.
| [queryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$queryBuilder-detail "Defined by yii\db\Connection")               | [yii\db\QueryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder) – The query builder for the current DB connection.
| [queryCache](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$queryCache-detail "Defined by yii\db\Connection")                   | [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface), [string](http://php.net/language.types.string) – The cache object or the ID of the cache application component that is used for query caching.
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$queryCacheDuration-detail "Defined by yii\db\Connection")   | [integer](http://php.net/language.types.integer) – The default number of seconds that query results can remain valid in cache.
| [replica](craft-db-primaryreplicatrait.md#replica "Defined by craft\db\PrimaryReplicaTrait")                                                 | [craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null) – The currently active replica connection.
| [replicaConfig](craft-db-primaryreplicatrait.md#replicaconfig "Defined by craft\db\PrimaryReplicaTrait")                                     | [array](http://php.net/language.types.array)
| [replicaPdo](craft-db-primaryreplicatrait.md#replicapdo "Defined by craft\db\PrimaryReplicaTrait")                                           | [PDO](http://php.net/class.pdo), [null](http://php.net/language.types.null) – The PDO instance for the currently active replica connection.
| [replicas](craft-db-primaryreplicatrait.md#replicas "Defined by craft\db\PrimaryReplicaTrait")                                               | [array](http://php.net/language.types.array)
| [schema](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$schema-detail "Defined by yii\db\Connection")                           | [yii\db\Schema](https://www.yiiframework.com/doc/api/2.0/yii-db-schema) – The schema information for the database opened by this connection.
| [schemaCache](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$schemaCache-detail "Defined by yii\db\Connection")                 | [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface), [string](http://php.net/language.types.string) – The cache object or the ID of the cache application component that is used to cache the table metadata.
| [schemaCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$schemaCacheDuration-detail "Defined by yii\db\Connection") | [integer](http://php.net/language.types.integer) – Number of seconds that table metadata can remain valid in cache.
| [schemaCacheExclude](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$schemaCacheExclude-detail "Defined by yii\db\Connection")   | [array](http://php.net/language.types.array) – List of tables whose metadata should NOT be cached.
| [schemaMap](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$schemaMap-detail "Defined by yii\db\Connection")                     | [array](http://php.net/language.types.array) – Mapping between PDO driver names and [yii\db\Schema](https://www.yiiframework.com/doc/api/2.0/yii-db-schema) classes.
| [serverRetryInterval](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$serverRetryInterval-detail "Defined by yii\db\Connection") | [integer](http://php.net/language.types.integer) – The retry interval in seconds for dead servers listed in [masters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masters-detail) and [slaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaves-detail).
| [serverStatusCache](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$serverStatusCache-detail "Defined by yii\db\Connection")     | [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The cache object or the ID of the cache application component that is used to store the health status of the DB servers specified in [masters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masters-detail) and [slaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaves-detail).
| [serverVersion](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$serverVersion-detail "Defined by yii\db\Connection")             | [string](http://php.net/language.types.string) – Server version as a string.
| [shuffleMasters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$shuffleMasters-detail "Defined by yii\db\Connection")           | [boolean](http://php.net/language.types.boolean) – Whether to shuffle [masters](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$masters-detail) before getting one.
| [shufflePrimaries](craft-db-primaryreplicatrait.md#shuffleprimaries "Defined by craft\db\PrimaryReplicaTrait")                               | [boolean](http://php.net/language.types.boolean)
| [slave](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slave-detail "Defined by yii\db\Connection")                             | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The currently active slave connection.
| [slaveConfig](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaveConfig-detail "Defined by yii\db\Connection")                 | [array](http://php.net/language.types.array) – The configuration that should be merged with every slave configuration listed in [slaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaves-detail).
| [slavePdo](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slavePdo-detail "Defined by yii\db\Connection")                       | [PDO](http://php.net/class.pdo) – The PDO instance for the currently active slave connection.
| [slaves](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$slaves-detail "Defined by yii\db\Connection")                           | [array](http://php.net/language.types.array) – List of slave connection configurations.
| [supportsMb4](craft-db-connection.md#supportsmb4)                                                                                            | [boolean](http://php.net/language.types.boolean)
| [tablePrefix](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$tablePrefix-detail "Defined by yii\db\Connection")                 | [string](http://php.net/language.types.string) – The common prefix or suffix for table names.
| [transaction](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$transaction-detail "Defined by yii\db\Connection")                 | [yii\db\Transaction](https://www.yiiframework.com/doc/api/2.0/yii-db-transaction), [null](http://php.net/language.types.null) – The currently active transaction.
| [username](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$username-detail "Defined by yii\db\Connection")                       | [string](http://php.net/language.types.string) – The username for establishing DB connection.
| [version](craft-db-connection.md#version)                                                                                                    | [string](http://php.net/language.types.string)

### `backupFilePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0.38







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)



### `ignoredBackupTables`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)



### `isMysql`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)



### `isPgsql`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)



### `supportsMb4`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)



### `version`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#__clone()-detail "Defined by yii\db\Connection")                     | Reset the connection after cloning.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__sleep()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#__sleep()-detail "Defined by yii\db\Connection")                     | Close the connection before serializing.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [backup()](craft-db-connection.md#method-backup)                                                                                            | Performs a backup operation. If a `backupCommand` config setting has been set, will execute it. If not, will execute the default database schema specific backup defined in `getDefaultBackupCommand()`, which uses `pg_dump` for PostgreSQL and `mysqldump` for MySQL.
| [backupTo()](craft-db-connection.md#method-backupto)                                                                                        | Performs a backup operation. If a `backupCommand` config setting has been set, will execute it. If not, will execute the default database schema specific backup defined in `getDefaultBackupCommand()`, which uses `pg_dump` for PostgreSQL and `mysqldump` for MySQL.
| [beginTransaction()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#beginTransaction()-detail "Defined by yii\db\Connection")   | Starts a transaction.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#cache()-detail "Defined by yii\db\Connection")                         | Uses query cache for the queries performed with the callable.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [close()](craft-db-connection.md#method-close)                                                                                              | Closes the currently active DB connection.
| [columnExists()](craft-db-connection.md#method-columnexists)                                                                                | Checks if a column exists in a table.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#createCommand()-detail "Defined by yii\db\Connection")         | Creates a command for execution.
| [createFromConfig()](craft-db-connection.md#method-createfromconfig)                                                                        | Creates a new Connection instance based off the given DbConfig object.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBackupFilePath()](craft-db-connection.md#method-getbackupfilepath)                                                                      | Returns the path for a new backup file.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDriverName()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getDriverName()-detail "Defined by yii\db\Connection")         | Returns the name of the DB driver. Based on the the current [dsn](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#$dsn-detail), in case it was not set explicitly by an end user.
| [getForeignKeyName()](craft-db-connection.md#method-getforeignkeyname)                                                                      | Returns a foreign key name based on the table and column names.
| [getIgnoredBackupTables()](craft-db-connection.md#method-getignoredbackuptables)                                                            | Returns the core table names whose data should be excluded from database backups.
| [getIndexName()](craft-db-connection.md#method-getindexname)                                                                                | Returns an index name based on the table, column names, and whether it should be unique.
| [getIsActive()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getIsActive()-detail "Defined by yii\db\Connection")             | Returns a value indicating whether the DB connection is established.
| [getIsMysql()](craft-db-connection.md#method-getismysql)                                                                                    | Returns whether this is a MySQL connection.
| [getIsPgsql()](craft-db-connection.md#method-getispgsql)                                                                                    | Returns whether this is a PostgreSQL connection.
| [getLastInsertID()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getLastInsertID()-detail "Defined by yii\db\Connection")     | Returns the ID of the last inserted row or sequence value.
| [getMaster()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getMaster()-detail "Defined by yii\db\Connection")                 | Returns the currently active master connection.
| [getMasterPdo()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getMasterPdo()-detail "Defined by yii\db\Connection")           | Returns the PDO instance for the currently active master connection.
| [getPrimary()](craft-db-primaryreplicatrait.md#method-getprimary "Defined by craft\db\PrimaryReplicaTrait")                                 | Returns the currently active primary connection.
| [getPrimaryKeyName()](craft-db-connection.md#method-getprimarykeyname)                                                                      | Returns a primary key name based on the table and column names.
| [getPrimaryPdo()](craft-db-primaryreplicatrait.md#method-getprimarypdo "Defined by craft\db\PrimaryReplicaTrait")                           | Returns the PDO instance for the currently active primary connection.
| [getQueryBuilder()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getQueryBuilder()-detail "Defined by yii\db\Connection")     | Returns the query builder for the current DB connection.
| [getReplica()](craft-db-primaryreplicatrait.md#method-getreplica "Defined by craft\db\PrimaryReplicaTrait")                                 | Returns the currently active replica connection.
| [getReplicaPdo()](craft-db-primaryreplicatrait.md#method-getreplicapdo "Defined by craft\db\PrimaryReplicaTrait")                           | Returns the PDO instance for the currently active replica connection.
| [getSchema()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getSchema()-detail "Defined by yii\db\Connection")                 | Returns the schema information for the database opened by this connection.
| [getServerVersion()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getServerVersion()-detail "Defined by yii\db\Connection")   | Returns a server version as a string comparable by `\version_compare()`.
| [getSlave()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getSlave()-detail "Defined by yii\db\Connection")                   | Returns the currently active slave connection.
| [getSlavePdo()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getSlavePdo()-detail "Defined by yii\db\Connection")             | Returns the PDO instance for the currently active slave connection.
| [getSupportsMb4()](craft-db-connection.md#method-getsupportsmb4)                                                                            | Returns whether the database supports 4+ byte characters.
| [getTableSchema()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getTableSchema()-detail "Defined by yii\db\Connection")       | Obtains the schema information for the named table.
| [getTransaction()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#getTransaction()-detail "Defined by yii\db\Connection")       | Returns the currently active transaction.
| [getVersion()](craft-db-connection.md#method-getversion)                                                                                    | Returns the version of the DB.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#noCache()-detail "Defined by yii\db\Connection")                     | Disables query cache temporarily.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [open()](craft-db-connection.md#method-open)                                                                                                | Establishes a DB connection.
| [quoteColumnName()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#quoteColumnName()-detail "Defined by yii\db\Connection")     | Quotes a column name for use in a query.
| [quoteDatabaseName()](craft-db-connection.md#method-quotedatabasename)                                                                      |
| [quoteSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#quoteSql()-detail "Defined by yii\db\Connection")                   | Processes a SQL statement by quoting table and column names that are enclosed within double brackets.
| [quoteTableName()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#quoteTableName()-detail "Defined by yii\db\Connection")       | Quotes a table name for use in a query.
| [quoteValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#quoteValue()-detail "Defined by yii\db\Connection")               | Quotes a string value for use in a query.
| [restore()](craft-db-connection.md#method-restore)                                                                                          | Restores a database at the given file path.
| [setDriverName()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#setDriverName()-detail "Defined by yii\db\Connection")         | Changes the current driver name.
| [setQueryBuilder()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#setQueryBuilder()-detail "Defined by yii\db\Connection")     | Can be used to set [yii\db\QueryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder) configuration via Connection configuration array.
| [setSupportsMb4()](craft-db-connection.md#method-setsupportsmb4)                                                                            | Sets whether the database supports 4+ byte characters.
| [tableExists()](craft-db-connection.md#method-tableexists)                                                                                  | Returns whether a table exists.
| [transaction()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#transaction()-detail "Defined by yii\db\Connection")             | Executes callback provided in a transaction.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [trimObjectName()](craft-db-connection.md#method-trimobjectname)                                                                            | Ensures that an object name is within the schema's limit.
| [useMaster()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#useMaster()-detail "Defined by yii\db\Connection")                 | Executes the provided callback by using the master connection.
| [usePrimary()](craft-db-primaryreplicatrait.md#method-useprimary "Defined by craft\db\PrimaryReplicaTrait")                                 | Executes the provided callback by using the primary connection.

### `backup()`





Performs a backup operation. If a `backupCommand` config setting has been set, will execute it. If not,
will execute the default database schema specific backup defined in `getDefaultBackupCommand()`, which uses
`pg_dump` for PostgreSQL and `mysqldump` for MySQL.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L233-L238)



#### Returns

[string](http://php.net/language.types.string) – The file path to the database backup

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the backupCommand config setting is false
- [craft\errors\ShellCommandException](craft-errors-shellcommandexception.md)\
  in case of failure


### `backupTo()`





Performs a backup operation. If a `backupCommand` config setting has been set, will execute it. If not,
will execute the default database schema specific backup defined in `getDefaultBackupCommand()`, which uses
`pg_dump` for PostgreSQL and `mysqldump` for MySQL.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L249-L303)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The file path the database backup should be saved at


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the backupCommand config setting is false
- [craft\errors\ShellCommandException](craft-errors-shellcommandexception.md)\
  in case of failure


### `close()`



Since

:   3.4.11



Closes the currently active DB connection.



It does nothing if the connection is already closed.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L184-L188)






### `columnExists()`





Checks if a column exists in a table.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L383-L395)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$column` ([string](http://php.net/language.types.string))
- `$refresh` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if there is no support for the current driver type


### `createFromConfig()`

::: danger DEPRECATED
Deprecated in 3.0.18. Use [craft\helpers\App::dbConfig()](craft-helpers-app.md#method-dbconfig) instead.
:::




Creates a new Connection instance based off the given DbConfig object.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L77-L81)


#### Arguments

- `$config` ([craft\config\DbConfig](craft-config-dbconfig.md))

#### Returns

`static`



### `getBackupFilePath()`



Since

:   3.0.38



Returns the path for a new backup file.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L196-L203)



#### Returns

[string](http://php.net/language.types.string)



### `getForeignKeyName()`





Returns a foreign key name based on the table and column names.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L422-L431)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string)



### `getIgnoredBackupTables()`





Returns the core table names whose data should be excluded from database backups.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L210-L222)



#### Returns

[string](http://php.net/language.types.string)[]



### `getIndexName()`





Returns an index name based on the table, column names, and whether
it should be unique.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L443-L452)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))
- `$unique` ([boolean](http://php.net/language.types.boolean))
- `$foreignKey` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string)



### `getIsMysql()`





Returns whether this is a MySQL connection.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L95-L98)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPgsql()`





Returns whether this is a PostgreSQL connection.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L105-L108)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPrimaryKeyName()`





Returns a primary key name based on the table and column names.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L404-L413)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string)



### `getSupportsMb4()`





Returns whether the database supports 4+ byte characters.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L126-L132)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getVersion()`

::: danger DEPRECATED
Deprecated in 3.4.21. Use [yii\db\Schema::getServerVersion()](https://www.yiiframework.com/doc/api/2.0/yii-db-schema#getServerVersion()-detail) instead.
:::




Returns the version of the DB.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L116-L119)



#### Returns

[string](http://php.net/language.types.string)



### `open()`





Establishes a DB connection.



It does nothing if a DB connection has already been established.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L149-L178)




#### Throws

- [craft\errors\DbConnectException](craft-errors-dbconnectexception.md)\
  if there are any issues
- [Throwable](http://php.net/class.throwable)


### `quoteDatabaseName()`










[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L350-L353)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `restore()`





Restores a database at the given file path.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L312-L344)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The path of the database backup to restore.


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the restoreCommand config setting is false
- [craft\errors\ShellCommandException](craft-errors-shellcommandexception.md)\
  in case of failure


### `setSupportsMb4()`





Sets whether the database supports 4+ byte characters.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L139-L142)


#### Arguments

- `$supportsMb4` ([boolean](http://php.net/language.types.boolean))




### `tableExists()`





Returns whether a table exists.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L362-L372)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$refresh` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `trimObjectName()`





Ensures that an object name is within the schema's limit.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Connection.php#L460-L494)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------
| [createPdoInstance()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#createPdoInstance()-detail "Defined by yii\db\Connection")               | Creates the PDO instance.
| [initConnection()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#initConnection()-detail "Defined by yii\db\Connection")                     | Initializes the DB connection.
| [openFromPool()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#openFromPool()-detail "Defined by yii\db\Connection")                         | Opens the connection to a server in the pool.
| [openFromPoolSequentially()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#openFromPoolSequentially()-detail "Defined by yii\db\Connection") | Opens the connection to a server in the pool.



## Constants

| Constant       | Description
| -------------- | -----------
| `DRIVER_MYSQL` |
| `DRIVER_PGSQL` |


## Events

### EVENT_AFTER_CREATE_BACKUP



Type

:   [craft\events\BackupEvent](craft-events-backupevent.md)



The event that is triggered after the backup is created.



---



### EVENT_AFTER_RESTORE_BACKUP



Type

:   [craft\events\RestoreEvent](craft-events-restoreevent.md)



The event that is triggered after the restore occurred.



---



### EVENT_BEFORE_CREATE_BACKUP



Type

:   [craft\events\BackupEvent](craft-events-backupevent.md)



The event that is triggered before the backup is created.



---



### EVENT_BEFORE_RESTORE_BACKUP



Type

:   [craft\events\RestoreEvent](craft-events-restoreevent.md)



The event that is triggered before the restore is started.



---




