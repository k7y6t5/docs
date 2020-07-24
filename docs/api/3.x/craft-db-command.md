---
title: craft\db\Command
code:
  - php
  - twig
---

# Command

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\Command](craft-db-command.md) &raquo;
[yii\db\Command](https://www.yiiframework.com/doc/api/2.0/yii-db-command) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php)


## Public Properties

| Property                                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")               | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [db](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$db-detail "Defined by yii\db\Command")                                     | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The DB connection that this command is associated with
| [fetchMode](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$fetchMode-detail "Defined by yii\db\Command")                       | [integer](http://php.net/language.types.integer) – The default fetch mode for this command.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$params-detail "Defined by yii\db\Command")                             | [array](http://php.net/language.types.array) – The parameters (name => value) that are bound to the current PDO statement.
| [pdoStatement](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$pdoStatement-detail "Defined by yii\db\Command")                 | [PDOStatement](http://php.net/class.pdostatement) – The PDOStatement object that this command is associated with
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$queryCacheDependency-detail "Defined by yii\db\Command") | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this command
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$queryCacheDuration-detail "Defined by yii\db\Command")     | [integer](http://php.net/language.types.integer) – The default number of seconds that query results can remain valid in cache.
| [rawSql](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$rawSql-detail "Defined by yii\db\Command")                             | [string](http://php.net/language.types.string) – The raw SQL with parameter values inserted into the corresponding placeholders in [sql](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$sql-detail).
| [sql](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$sql-detail "Defined by yii\db\Command")                                   | [string](http://php.net/language.types.string) – The SQL statement to be executed



## Protected Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------
| [pendingParams](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$pendingParams-detail "Defined by yii\db\Command") | [array](http://php.net/language.types.array) – Pending parameters to be bound to the current PDO statement.



## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                   | Sets an object property to null.
| [addCheck()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addCheck()-detail "Defined by yii\db\Command")                           | Creates a SQL command for adding a check constraint to an existing table.
| [addColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addColumn()-detail "Defined by yii\db\Command")                         | Creates a SQL command for adding a new DB column.
| [addCommentOnColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addCommentOnColumn()-detail "Defined by yii\db\Command")       | Builds a SQL command for adding comment to column.
| [addCommentOnTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addCommentOnTable()-detail "Defined by yii\db\Command")         | Builds a SQL command for adding comment to table.
| [addDefaultValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addDefaultValue()-detail "Defined by yii\db\Command")             | Creates a SQL command for adding a default value constraint to an existing table.
| [addForeignKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addForeignKey()-detail "Defined by yii\db\Command")                 | Creates a SQL command for adding a foreign key constraint to an existing table.
| [addPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addPrimaryKey()-detail "Defined by yii\db\Command")                 | Creates a SQL command for adding a primary key constraint to an existing table.
| [addUnique()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#addUnique()-detail "Defined by yii\db\Command")                         | Creates a SQL command for adding an unique constraint to an existing table.
| [alterColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#alterColumn()-detail "Defined by yii\db\Command")                     | Creates a SQL command for changing the definition of a column.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [batchInsert()](craft-db-command.md#method-batchinsert)                                                                                       | Creates a batch INSERT command.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [bindParam()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindParam()-detail "Defined by yii\db\Command")                         | Binds a parameter to the SQL statement to be executed.
| [bindValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindValue()-detail "Defined by yii\db\Command")                         | Binds a value to a parameter.
| [bindValues()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindValues()-detail "Defined by yii\db\Command")                       | Binds a list of values to the corresponding parameters.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#cache()-detail "Defined by yii\db\Command")                                 | Enables query cache for this command.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be set.
| [cancel()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#cancel()-detail "Defined by yii\db\Command")                               | Cancels the execution of the SQL statement.
| [checkIntegrity()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#checkIntegrity()-detail "Defined by yii\db\Command")               | Builds a SQL command for enabling or disabling integrity check.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#createIndex()-detail "Defined by yii\db\Command")                     | Creates a SQL command for creating a new index.
| [createTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#createTable()-detail "Defined by yii\db\Command")                     | Creates a SQL command for creating a new DB table.
| [createView()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#createView()-detail "Defined by yii\db\Command")                       | Creates a SQL View.
| [delete()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#delete()-detail "Defined by yii\db\Command")                               | Creates a DELETE command.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [dropCheck()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropCheck()-detail "Defined by yii\db\Command")                         | Creates a SQL command for dropping a check constraint.
| [dropColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropColumn()-detail "Defined by yii\db\Command")                       | Creates a SQL command for dropping a DB column.
| [dropCommentFromColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropCommentFromColumn()-detail "Defined by yii\db\Command") | Builds a SQL command for dropping comment from column.
| [dropCommentFromTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropCommentFromTable()-detail "Defined by yii\db\Command")   | Builds a SQL command for dropping comment from table.
| [dropDefaultValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropDefaultValue()-detail "Defined by yii\db\Command")           | Creates a SQL command for dropping a default value constraint.
| [dropForeignKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropForeignKey()-detail "Defined by yii\db\Command")               | Creates a SQL command for dropping a foreign key constraint.
| [dropIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropIndex()-detail "Defined by yii\db\Command")                         | Creates a SQL command for dropping an index.
| [dropPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropPrimaryKey()-detail "Defined by yii\db\Command")               | Creates a SQL command for removing a primary key constraint to an existing table.
| [dropTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropTable()-detail "Defined by yii\db\Command")                         | Creates a SQL command for dropping a DB table.
| [dropTableIfExists()](craft-db-command.md#method-droptableifexists)                                                                           | Creates a SQL statement for dropping a DB table, if it exists.
| [dropUnique()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropUnique()-detail "Defined by yii\db\Command")                       | Creates a SQL command for dropping an unique constraint.
| [dropView()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#dropView()-detail "Defined by yii\db\Command")                           | Drops a SQL View.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [execute()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#execute()-detail "Defined by yii\db\Command")                             | Executes the SQL statement.
| [executeResetSequence()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#executeResetSequence()-detail "Defined by yii\db\Command")   | Executes a db command resetting the sequence value of a table's primary key.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getRawSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#getRawSql()-detail "Defined by yii\db\Command")                         | Returns the raw SQL by inserting parameter values into the corresponding placeholders in [sql](https://www.yiiframework.com/doc/api/2.0/yii-db-command#$sql-detail).
| [getSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#getSql()-detail "Defined by yii\db\Command")                               | Returns the SQL statement for this command.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                         | Initializes the object.
| [insert()](craft-db-command.md#method-insert)                                                                                                 | Creates an INSERT command.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#noCache()-detail "Defined by yii\db\Command")                             | Disables query cache for this command.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                               | Attaches an event handler to an event.
| [prepare()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#prepare()-detail "Defined by yii\db\Command")                             | Prepares the SQL statement to be executed.
| [query()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#query()-detail "Defined by yii\db\Command")                                 | Executes the SQL statement and returns query result.
| [queryAll()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#queryAll()-detail "Defined by yii\db\Command")                           | Executes the SQL statement and returns ALL rows at once.
| [queryColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#queryColumn()-detail "Defined by yii\db\Command")                     | Executes the SQL statement and returns the first column of the result.
| [queryOne()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#queryOne()-detail "Defined by yii\db\Command")                           | Executes the SQL statement and returns the first row of the result.
| [queryScalar()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#queryScalar()-detail "Defined by yii\db\Command")                     | Executes the SQL statement and returns the value of the first column in the first row of data.
| [renameColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#renameColumn()-detail "Defined by yii\db\Command")                   | Creates a SQL command for renaming a column.
| [renameSequence()](craft-db-command.md#method-renamesequence)                                                                                 | Creates a SQL statement for renaming a DB sequence.
| [renameTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#renameTable()-detail "Defined by yii\db\Command")                     | Creates a SQL command for renaming a DB table.
| [replace()](craft-db-command.md#method-replace)                                                                                               | Creates a SQL statement for replacing some text with other text in a given table column.
| [resetSequence()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#resetSequence()-detail "Defined by yii\db\Command")                 | Creates a SQL command for resetting the sequence value of a table's primary key.
| [restore()](craft-db-command.md#method-restore)                                                                                               | Creates a SQL statement for restoring a soft-deleted row.
| [setRawSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#setRawSql()-detail "Defined by yii\db\Command")                         | Specifies the SQL statement to be executed. The SQL statement will not be modified in any way.
| [setSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#setSql()-detail "Defined by yii\db\Command")                               | Specifies the SQL statement to be executed. The SQL statement will be quoted using [yii\db\Connection::quoteSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-connection#quoteSql()-detail).
| [softDelete()](craft-db-command.md#method-softdelete)                                                                                         | Creates a SQL statement for soft-deleting a row.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.
| [truncateTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#truncateTable()-detail "Defined by yii\db\Command")                 | Creates a SQL command for truncating a DB table.
| [update()](craft-db-command.md#method-update)                                                                                                 | Creates an UPDATE command.
| [upsert()](craft-db-command.md#method-upsert)                                                                                                 | Creates a command to insert rows into a database table if they do not already exist (matching unique constraints), or update them if they do.

### `batchInsert()`





Creates a batch INSERT command.



For example,

```php
$connection->createCommand()->batchInsert('user', ['name', 'age'], [
    ['Tom', 30],
    ['Jane', 20],
    ['Linda', 25],
])->execute();
```

The method will properly escape the column names, and quote the values to be inserted.

Note that the values in each row must match the corresponding column names.

Also note that the created command is not executed until [execute()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#execute()-detail) is called.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L58-L82)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table that new rows will be inserted into.
- `$columns` ([array](http://php.net/language.types.array)) – The column names.
- `$rows` ([array](http://php.net/language.types.array)) – The rows to be batch inserted into the table.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether `dateCreated`, `dateUpdated`, and `uid` values should be added to $columns.

#### Returns

`static` – The command object itself.



### `dropTableIfExists()`





Creates a SQL statement for dropping a DB table, if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L171-L176)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be dropped. The name will be properly quoted by the method.

#### Returns

[craft\db\Command](craft-db-command.md) – The command object itself



### `insert()`





Creates an INSERT command.



For example,

```php
$connection->createCommand()->insert('user', [
    'name' => 'Sam',
    'age' => 30,
])->execute();
```

The method will properly escape the column names, and bind the values to be inserted.

Note that the created command is not executed until [execute()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#execute()-detail) is called.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L29-L48)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table that new rows will be inserted into.
- `$columns` ([array](http://php.net/language.types.array)) – The column data (name => value) to be inserted into the table.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether `dateCreated`, `dateUpdated`, and `uid` values should be added to $columns.

#### Returns

`static` – The command object itself



### `renameSequence()`





Creates a SQL statement for renaming a DB sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L185-L190)


#### Arguments

- `$oldName` ([string](http://php.net/language.types.string)) – The sequence to be renamed. The name will be properly quoted by the method.
- `$newName` ([string](http://php.net/language.types.string)) – The new sequence name. The name will be properly quoted by the method.

#### Returns

[craft\db\Command](craft-db-command.md) – The command object itself



### `replace()`





Creates a SQL statement for replacing some text with other text in a given table column.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L158-L163)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$column` ([string](http://php.net/language.types.string)) – The column to be searched.
- `$find` ([string](http://php.net/language.types.string)) – The text to be searched for.
- `$replace` ([string](http://php.net/language.types.string)) – The replacement text.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.

#### Returns

[craft\db\Command](craft-db-command.md) – The command object itself.



### `restore()`



Since

:   3.1.0



Creates a SQL statement for restoring a soft-deleted row.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L219-L224)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.

#### Returns

`static` – The command object itself.



### `softDelete()`



Since

:   3.1.0



Creates a SQL statement for soft-deleting a row.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L202-L207)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.

#### Returns

`static` – The command object itself.



### `update()`





Creates an UPDATE command.



For example,

```php
$connection->createCommand()->update('user', ['status' => 1], 'age > 30')->execute();
```

or with using parameter binding for the condition:

```php
$minAge = 30;
$connection->createCommand()->update('user', ['status' => 1], 'age > :minAge', [':minAge' => $minAge])->execute();
```

The method will properly escape the column names and bind the values to be updated.

Note that the created command is not executed until [execute()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#execute()-detail) is called.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L135-L144)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$columns` ([array](http://php.net/language.types.array)) – The column data (name => value) to be updated.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command.
- `$includeAuditColumns` ([boolean](http://php.net/language.types.boolean)) – Whether the `dateUpdated` value should be added to $columns.

#### Returns

`static` – The command object itself.



### `upsert()`





Creates a command to insert rows into a database table if
they do not already exist (matching unique constraints),
or update them if they do.



For example,

```php
$sql = $queryBuilder->upsert('pages', [
    'name' => 'Front page',
    'url' => 'http://example.com/', // url is unique
    'visits' => 0,
], [
    'visits' => new \yii\db\Expression('visits + 1'),
], $params);
```

The method will properly escape the table and column names.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Command.php#L97-L123)


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

[$this](craft-db-command.md) – The command object itself.





## Protected Methods

| Method                                                                                                                                                | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [bindPendingParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindPendingParams()-detail "Defined by yii\db\Command")                 | Binds pending parameters that were registered via [bindValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindValue()-detail) and [bindValues()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#bindValues()-detail).
| [getCacheKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#getCacheKey()-detail "Defined by yii\db\Command")                             | Returns the cache key for the query.
| [internalExecute()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#internalExecute()-detail "Defined by yii\db\Command")                     | Executes a prepared statement.
| [logQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#logQuery()-detail "Defined by yii\db\Command")                                   | Logs the current database query if query logging is enabled and returns the profiling token if profiling is enabled.
| [queryInternal()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#queryInternal()-detail "Defined by yii\db\Command")                         | Performs the actual DB query of a SQL statement.
| [refreshTableSchema()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#refreshTableSchema()-detail "Defined by yii\db\Command")               | Refreshes table schema, which was marked by [requireTableSchemaRefresh()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#requireTableSchemaRefresh()-detail).
| [requireTableSchemaRefresh()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#requireTableSchemaRefresh()-detail "Defined by yii\db\Command") | Marks a specified table schema to be refreshed after command execution.
| [requireTransaction()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#requireTransaction()-detail "Defined by yii\db\Command")               | Marks the command to be executed in transaction.
| [reset()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#reset()-detail "Defined by yii\db\Command")                                         | Resets command properties to their initial state.
| [setRetryHandler()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#setRetryHandler()-detail "Defined by yii\db\Command")                     | Sets a callable (e.g. anonymous function) that is called when [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception) is thrown when executing the command. The signature of the callable should be:






