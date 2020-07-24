---
title: craft\db\Migration
code:
  - php
  - twig
---

# Migration

Type

:   Abstract Class

Namespace

:   craft\db

Inherits

:   [craft\db\Migration](craft-db-migration.md) &raquo;
[yii\db\Migration](https://www.yiiframework.com/doc/api/2.0/yii-db-migration) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\MigrationInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-migrationinterface)

Uses traits

:   [yii\db\SchemaBuilderTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait)

Extended by

:   [craft\migrations\CreateDbCacheTable](craft-migrations-createdbcachetable.md), [craft\migrations\CreateMatrixContentTable](craft-migrations-creatematrixcontenttable.md), [craft\migrations\CreatePhpSessionTable](craft-migrations-createphpsessiontable.md), [craft\migrations\Install](craft-migrations-install.md)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php)


## Public Properties

| Property                                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")               | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [compact](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#$compact-detail "Defined by yii\db\Migration")                       | [boolean](http://php.net/language.types.boolean) – Indicates whether the console output should be compacted.
| [db](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#$db-detail "Defined by yii\db\Migration")                                 | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The DB connection object or the application component ID of the DB connection that this migration should work with.
| [maxSqlOutputLength](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#$maxSqlOutputLength-detail "Defined by yii\db\Migration") | [integer](http://php.net/language.types.integer) – Max number of characters of the SQL outputted.





## Public Methods

| Method                                                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                           | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                           | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                 | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                             | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                         | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                             | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                         | Sets an object property to null.
| [addColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#addColumn()-detail "Defined by yii\db\Migration")                           | Builds and executes a SQL statement for adding a new DB column.
| [addCommentOnColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#addCommentOnColumn()-detail "Defined by yii\db\Migration")         | Builds and execute a SQL statement for adding comment to column.
| [addCommentOnTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#addCommentOnTable()-detail "Defined by yii\db\Migration")           | Builds a SQL statement for adding comment to table.
| [addForeignKey()](craft-db-migration.md#method-addforeignkey)                                                                                       | Builds a SQL statement for adding a foreign key constraint to an existing table.
| [addPrimaryKey()](craft-db-migration.md#method-addprimarykey)                                                                                       | Builds and executes a SQL statement for creating a primary key.
| [alterColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#alterColumn()-detail "Defined by yii\db\Migration")                       | Builds and executes a SQL statement for changing the definition of a column.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")             | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")           | Attaches a list of behaviors to the component.
| [batchInsert()](craft-db-migration.md#method-batchinsert)                                                                                           | Creates and executes an batch INSERT SQL statement.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                       | Returns a list of behaviors that this component should behave as.
| [bigInteger()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#bigInteger()-detail "Defined by yii\db\SchemaBuilderTrait")       | Creates a bigint column.
| [bigPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#bigPrimaryKey()-detail "Defined by yii\db\SchemaBuilderTrait") | Creates a big primary key column.
| [binary()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#binary()-detail "Defined by yii\db\SchemaBuilderTrait")               | Creates a binary column.
| [boolean()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#boolean()-detail "Defined by yii\db\SchemaBuilderTrait")             | Creates a boolean column.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property can be set.
| [char()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#char()-detail "Defined by yii\db\SchemaBuilderTrait")                   | Creates a char column.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                     | Returns the fully qualified name of this class.
| [createIndex()](craft-db-migration.md#method-createindex)                                                                                           | Builds and executes a SQL statement for creating a new index.
| [createTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#createTable()-detail "Defined by yii\db\Migration")                       | Builds and executes a SQL statement for creating a new DB table.
| [date()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#date()-detail "Defined by yii\db\SchemaBuilderTrait")                   | Creates a date column.
| [dateTime()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#dateTime()-detail "Defined by yii\db\SchemaBuilderTrait")           | Creates a datetime column.
| [decimal()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#decimal()-detail "Defined by yii\db\SchemaBuilderTrait")             | Creates a decimal column.
| [delete()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#delete()-detail "Defined by yii\db\Migration")                                 | Creates and executes a DELETE SQL statement.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")             | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")           | Detaches all behaviors from the component.
| [double()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#double()-detail "Defined by yii\db\SchemaBuilderTrait")               | Creates a double column.
| [down()](craft-db-migration.md#method-down)                                                                                                         | This method contains the logic to be executed when removing this migration.
| [dropColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropColumn()-detail "Defined by yii\db\Migration")                         | Builds and executes a SQL statement for dropping a DB column.
| [dropCommentFromColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropCommentFromColumn()-detail "Defined by yii\db\Migration")   | Builds and execute a SQL statement for dropping comment from column.
| [dropCommentFromTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropCommentFromTable()-detail "Defined by yii\db\Migration")     | Builds a SQL statement for dropping comment from table.
| [dropForeignKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropForeignKey()-detail "Defined by yii\db\Migration")                 | Builds a SQL statement for dropping a foreign key constraint.
| [dropIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropIndex()-detail "Defined by yii\db\Migration")                           | Builds and executes a SQL statement for dropping an index.
| [dropPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropPrimaryKey()-detail "Defined by yii\db\Migration")                 | Builds and executes a SQL statement for dropping a primary key.
| [dropTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#dropTable()-detail "Defined by yii\db\Migration")                           | Builds and executes a SQL statement for dropping a DB table.
| [dropTableIfExists()](craft-db-migration.md#method-droptableifexists)                                                                               | Creates and executes a SQL statement for dropping a DB table, if it exists.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")           | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [enum()](craft-db-migration.md#method-enum)                                                                                                         | Creates an enum column for MySQL and PostgreSQL, or a string column with a check constraint for others.
| [execute()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#execute()-detail "Defined by yii\db\Migration")                               | Executes a SQL statement.
| [float()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#float()-detail "Defined by yii\db\SchemaBuilderTrait")                 | Creates a float column.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                   | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                 | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")         | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#init()-detail "Defined by yii\db\Migration")                                     | Initializes the migration.
| [insert()](craft-db-migration.md#method-insert)                                                                                                     | Creates and executes an INSERT SQL statement.
| [integer()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#integer()-detail "Defined by yii\db\SchemaBuilderTrait")             | Creates an integer column.
| [json()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#json()-detail "Defined by yii\db\SchemaBuilderTrait")                   | Creates a JSON column.
| [longText()](craft-db-migration.md#method-longtext)                                                                                                 | Creates a longtext column for MySQL, or text column for others.
| [mediumText()](craft-db-migration.md#method-mediumtext)                                                                                             | Creates a mediumtext column for MySQL, or text column for others.
| [money()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#money()-detail "Defined by yii\db\SchemaBuilderTrait")                 | Creates a money column.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                   | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                     | Attaches an event handler to an event.
| [primaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#primaryKey()-detail "Defined by yii\db\SchemaBuilderTrait")       | Creates a primary key column.
| [renameColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#renameColumn()-detail "Defined by yii\db\Migration")                     | Builds and executes a SQL statement for renaming a column.
| [renameSequence()](craft-db-migration.md#method-renamesequence)                                                                                     | Creates and executes a SQL statement for renaming a DB sequence.
| [renameTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#renameTable()-detail "Defined by yii\db\Migration")                       | Builds and executes a SQL statement for renaming a DB table.
| [replace()](craft-db-migration.md#method-replace)                                                                                                   | Creates and executes a SQL statement for replacing some text with other text in a given table column.
| [restore()](craft-db-migration.md#method-restore)                                                                                                   | Creates and executes a SQL statement for restoring a soft-deleted row.
| [safeDown()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#safeDown()-detail "Defined by yii\db\Migration")                             | This method contains the logic to be executed when removing this migration.
| [safeUp()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#safeUp()-detail "Defined by yii\db\Migration")                                 | This method contains the logic to be executed when applying this migration.
| [smallInteger()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#smallInteger()-detail "Defined by yii\db\SchemaBuilderTrait")   | Creates a smallint column.
| [softDelete()](craft-db-migration.md#method-softdelete)                                                                                             | Creates and executes a SQL statement for soft-deleting a row.
| [string()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#string()-detail "Defined by yii\db\SchemaBuilderTrait")               | Creates a string column.
| [text()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#text()-detail "Defined by yii\db\SchemaBuilderTrait")                   | Creates a text column.
| [time()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#time()-detail "Defined by yii\db\SchemaBuilderTrait")                   | Creates a time column.
| [timestamp()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#timestamp()-detail "Defined by yii\db\SchemaBuilderTrait")         | Creates a timestamp column.
| [tinyInteger()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#tinyInteger()-detail "Defined by yii\db\SchemaBuilderTrait")     | Creates a tinyint column. If tinyint is not supported by the DBMS, smallint will be used.
| [tinyText()](craft-db-migration.md#method-tinytext)                                                                                                 | Creates a tinytext column for MySQL, or text column for others.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                           | Triggers an event.
| [truncateTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#truncateTable()-detail "Defined by yii\db\Migration")                   | Builds and executes a SQL statement for truncating a DB table.
| [uid()](craft-db-migration.md#method-uid)                                                                                                           | Shortcut for creating a uid column
| [up()](craft-db-migration.md#method-up)                                                                                                             | This method contains the logic to be executed when applying this migration.
| [update()](craft-db-migration.md#method-update)                                                                                                     | Creates and executes an UPDATE SQL statement.
| [upsert()](craft-db-migration.md#method-upsert)                                                                                                     | Creates and executes a command to insert rows into a database table if they do not already exist (matching unique constraints), or update them if they do.

### `addForeignKey()`





Builds a SQL statement for adding a foreign key constraint to an existing table.



The method will properly quote the table and column names.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L361-L368)


#### Arguments

- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The name of the foreign key constraint. If null, a name will be automatically generated.
- `$table` ([string](http://php.net/language.types.string)) – The table that the foreign key constraint will be added to.
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The name of the column to that the constraint will be added on. If there are multiple columns, separate them with commas or use an array.
- `$refTable` ([string](http://php.net/language.types.string)) – The table that the foreign key references to.
- `$refColumns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The name of the column that the foreign key references to. If there are multiple columns, separate them with commas or use an array.
- `$delete` ([string](http://php.net/language.types.string)) – The ON DELETE option. Most DBMS support these options: RESTRICT, CASCADE, NO ACTION, SET DEFAULT, SET NULL
- `$update` ([string](http://php.net/language.types.string)) – The ON UPDATE option. Most DBMS support these options: RESTRICT, CASCADE, NO ACTION, SET DEFAULT, SET NULL




### `addPrimaryKey()`





Builds and executes a SQL statement for creating a primary key.



The method will properly quote the table and column names.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L342-L349)


#### Arguments

- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The name of the primary key constraint. If null, a name will be automatically generated.
- `$table` ([string](http://php.net/language.types.string)) – The table that the primary key constraint will be added to.
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – Comma separated string or array of columns that the primary key will consist of.




### `batchInsert()`





Creates and executes an batch INSERT SQL statement.

The method will properly escape the column names, and bind the values to be inserted.


[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L224-L232)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table that new rows will be inserted into.
- `$columns` ([array](http://php.net/language.types.array)) – The column names.
- `$rows` ([array](http://php.net/language.types.array)) – The rows to be batch inserted into the table.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether `dateCreated`, `dateUpdated`, and `uid` values should be added to $columns.




### `createIndex()`





Builds and executes a SQL statement for creating a new index.








[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L379-L386)


#### Arguments

- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The name of the index. The name will be properly quoted by the method. If null, a name will be automatically generated.
- `$table` ([string](http://php.net/language.types.string)) – The table that the new index will be created for. The table name will be properly quoted by the method.
- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The column(s) that should be included in the index. If there are multiple columns, please separate them
by commas or use an array. Each column name will be properly quoted by the method. Quoting will be skipped for column names that
include a left parenthesis "(".
- `$unique` ([boolean](http://php.net/language.types.boolean)) – Whether to add UNIQUE constraint on the created index.




### `down()`





This method contains the logic to be executed when removing this migration.

The default implementation throws an exception indicating the migration cannot be removed.
Child classes may override this method if the corresponding migrations can be removed.


[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L84-L109)


#### Arguments

- `$throwExceptions` ([boolean](http://php.net/language.types.boolean)) – Whether exceptions should be thrown

#### Returns

[false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `dropTableIfExists()`





Creates and executes a SQL statement for dropping a DB table, if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L310-L318)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be dropped. The name will be properly quoted by the method.




### `enum()`





Creates an enum column for MySQL and PostgreSQL, or a string column with a check constraint for others.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L163-L179)


#### Arguments

- `$columnName` ([string](http://php.net/language.types.string)) – The column name
- `$values` ([string](http://php.net/language.types.string)[]) – The allowed column values

#### Returns

[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) – The column instance which can be further customized.



### `insert()`





Creates and executes an INSERT SQL statement.

The method will properly escape the column names, and bind the values to be inserted.


[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L204-L212)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table that new rows will be inserted into.
- `$columns` ([array](http://php.net/language.types.array)) – The column data (name=>value) to be inserted into the table.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether to include the data for the audit columns
(dateCreated, dateUpdated, uid).




### `longText()`





Creates a longtext column for MySQL, or text column for others.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L147-L154)



#### Returns

[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) – The column instance which can be further customized.



### `mediumText()`





Creates a mediumtext column for MySQL, or text column for others.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L133-L140)



#### Returns

[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) – The column instance which can be further customized.



### `renameSequence()`





Creates and executes a SQL statement for renaming a DB sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L326-L334)


#### Arguments

- `$oldName` ([string](http://php.net/language.types.string)) – The sequence to be renamed. The name will be properly quoted by the method.
- `$newName` ([string](http://php.net/language.types.string)) – The new sequence name. The name will be properly quoted by the method.




### `replace()`





Creates and executes a SQL statement for replacing some text with other text in a given table column.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L292-L300)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$column` ([string](http://php.net/language.types.string)) – The column to be searched.
- `$find` ([string](http://php.net/language.types.string)) – The text to be searched for.
- `$replace` ([string](http://php.net/language.types.string)) – The replacement text.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.




### `restore()`



Since

:   3.1.0



Creates and executes a SQL statement for restoring a soft-deleted row.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L416-L424)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.




### `softDelete()`



Since

:   3.1.0



Creates and executes a SQL statement for soft-deleting a row.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L397-L405)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.




### `tinyText()`





Creates a tinytext column for MySQL, or text column for others.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L119-L126)



#### Returns

[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) – The column instance which can be further customized.



### `uid()`





Shortcut for creating a uid column




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L186-L189)



#### Returns

[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) – The column instance which can be further customized.



### `up()`





This method contains the logic to be executed when applying this migration.

Child classes may override this method to provide actual migration logic.


[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L47-L72)


#### Arguments

- `$throwExceptions` ([boolean](http://php.net/language.types.boolean)) – Whether exceptions should be thrown

#### Returns

[false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `update()`





Creates and executes an UPDATE SQL statement.

The method will properly escape the column names and bind the values to be updated.


[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L271-L279)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$columns` ([array](http://php.net/language.types.array)) – The column data (name => value) to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether the `dateUpdated` value should be added to $columns.




### `upsert()`



Since

:   2.0.14



Creates and executes a command to insert rows into a database table if
they do not already exist (matching unique constraints),
or update them if they do.



The method will properly escape the column names, and bind the values to be inserted.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Migration.php#L246-L257)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table that new rows will be inserted into/updated in.
- `$insertColumns` ([array](http://php.net/language.types.array), [craft\db\Query](craft-db-query.md)) – The column data (name => value) to be inserted into the table or instance
of [craft\db\Query](craft-db-query.md) to perform `INSERT INTO ... SELECT` SQL statement.
- `$updateColumns` ([array](http://php.net/language.types.array), [boolean](http://php.net/language.types.boolean)) – The column data (name => value) to be updated if they already exist.
If `true` is passed, the column data will be updated to match the insert column data.
If `false` is passed, no update will be performed if the column data already exists.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether `dateCreated`, `dateUpdated`, and `uid` values should be added to $columns.

#### Returns

[$this](craft-db-migration.md) – The command object itself.





## Protected Methods

| Method                                                                                                                              | Description
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------
| [beginCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#beginCommand()-detail "Defined by yii\db\Migration")     | Prepares for a command to be executed, and outputs to the console.
| [endCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-migration#endCommand()-detail "Defined by yii\db\Migration")         | Finalizes after the command has been executed, and outputs to the console the time elapsed.
| [getDb()](https://www.yiiframework.com/doc/api/2.0/yii-db-schemabuildertrait#getDb()-detail "Defined by yii\db\SchemaBuilderTrait") |





## Events

### EVENT_AFTER_DOWN



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)

Since

:   3.0.6



The event that is triggered after the migration is reverted



---



### EVENT_AFTER_UP



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)

Since

:   3.0.6



The event that is triggered after the migration is executed



---




