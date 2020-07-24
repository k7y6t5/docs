---
title: craft\db\pgsql\QueryBuilder
code:
  - php
  - twig
---

# QueryBuilder

Type

:   Class

Namespace

:   craft\db\pgsql

Inherits

:   [craft\db\pgsql\QueryBuilder](craft-db-pgsql-querybuilder.md) &raquo;
[yii\db\pgsql\QueryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder) &raquo;
[yii\db\QueryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/pgsql/QueryBuilder.php)


## Public Properties

| Property                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------
| [db](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$db-detail "Defined by yii\db\QueryBuilder")                       | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The database connection.
| [separator](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$separator-detail "Defined by yii\db\QueryBuilder")         | [string](http://php.net/language.types.string) – The separator between different fragments of a SQL statement.
| [typeMap](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#$typeMap-detail "Defined by yii\db\pgsql\QueryBuilder") | [array](http://php.net/language.types.array) – Mapping from abstract column types (keys) to physical column types (values).



## Protected Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [conditionBuilders](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$conditionBuilders-detail "Defined by yii\db\QueryBuilder")   | [array](http://php.net/language.types.array) – Map of query condition to builder methods.
| [conditionClasses](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$conditionClasses-detail "Defined by yii\db\QueryBuilder")     | [array](http://php.net/language.types.array) – Map of condition aliases to condition classes.
| [expressionBuilders](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$expressionBuilders-detail "Defined by yii\db\QueryBuilder") | [string](http://php.net/language.types.string)[], [yii\db\ExpressionBuilderInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressionbuilderinterface) – Maps expression class to expression builder class.



## Public Methods

| Method                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                     | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#__construct()-detail "Defined by yii\db\QueryBuilder")                           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                   | Sets an object property to null.
| [addCheck()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addCheck()-detail "Defined by yii\db\QueryBuilder")                                 | Creates a SQL command for adding a check constraint to an existing table.
| [addColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addColumn()-detail "Defined by yii\db\QueryBuilder")                               | Builds a SQL statement for adding a new DB column.
| [addCommentOnColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addCommentOnColumn()-detail "Defined by yii\db\QueryBuilder")             | Builds a SQL command for adding comment to column.
| [addCommentOnTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addCommentOnTable()-detail "Defined by yii\db\QueryBuilder")               | Builds a SQL command for adding comment to table.
| [addDefaultValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addDefaultValue()-detail "Defined by yii\db\QueryBuilder")                   | Creates a SQL command for adding a default value constraint to an existing table.
| [addForeignKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addForeignKey()-detail "Defined by yii\db\QueryBuilder")                       | Builds a SQL statement for adding a foreign key constraint to an existing table.
| [addPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addPrimaryKey()-detail "Defined by yii\db\QueryBuilder")                       | Builds a SQL statement for adding a primary key constraint to an existing table.
| [addUnique()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#addUnique()-detail "Defined by yii\db\QueryBuilder")                               | Creates a SQL command for adding an unique constraint to an existing table.
| [alterColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#alterColumn()-detail "Defined by yii\db\pgsql\QueryBuilder")               | Builds a SQL statement for changing the definition of a column.
| [batchInsert()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#batchInsert()-detail "Defined by yii\db\pgsql\QueryBuilder")               | Generates a batch INSERT SQL statement.
| [bindParam()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#bindParam()-detail "Defined by yii\db\QueryBuilder")                               | Helper method to add $value to $params array using [PARAM_PREFIX](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#PARAM_PREFIX-detail).
| [build()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#build()-detail "Defined by yii\db\QueryBuilder")                                       | Generates a SELECT SQL statement from a [yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) object.
| [buildAndCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildAndCondition()-detail "Defined by yii\db\QueryBuilder")               | Connects two or more SQL expressions with the `AND` or `OR` operator.
| [buildBetweenCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildBetweenCondition()-detail "Defined by yii\db\QueryBuilder")       | Creates an SQL expressions with the `BETWEEN` operator.
| [buildColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildColumns()-detail "Defined by yii\db\QueryBuilder")                         | Processes columns and properly quotes them if necessary.
| [buildCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildCondition()-detail "Defined by yii\db\QueryBuilder")                     | Parses the condition specification and generates the corresponding SQL expression.
| [buildExistsCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildExistsCondition()-detail "Defined by yii\db\QueryBuilder")         | Creates an SQL expressions with the `EXISTS` operator.
| [buildExpression()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildExpression()-detail "Defined by yii\db\QueryBuilder")                   | Builds given $expression
| [buildFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildFrom()-detail "Defined by yii\db\QueryBuilder")                               |
| [buildGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildGroupBy()-detail "Defined by yii\db\QueryBuilder")                         |
| [buildHashCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildHashCondition()-detail "Defined by yii\db\QueryBuilder")             | Creates a condition based on column-value pairs.
| [buildHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildHaving()-detail "Defined by yii\db\QueryBuilder")                           |
| [buildInCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildInCondition()-detail "Defined by yii\db\QueryBuilder")                 | Creates an SQL expressions with the `IN` operator.
| [buildJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildJoin()-detail "Defined by yii\db\QueryBuilder")                               |
| [buildLikeCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildLikeCondition()-detail "Defined by yii\db\QueryBuilder")             | Creates an SQL expressions with the `LIKE` operator.
| [buildLimit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildLimit()-detail "Defined by yii\db\QueryBuilder")                             |
| [buildNotCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildNotCondition()-detail "Defined by yii\db\QueryBuilder")               | Inverts an SQL expressions with `NOT` operator.
| [buildOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildOrderBy()-detail "Defined by yii\db\QueryBuilder")                         |
| [buildOrderByAndLimit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildOrderByAndLimit()-detail "Defined by yii\db\QueryBuilder")         | Builds the ORDER BY and LIMIT/OFFSET clauses and appends them to the given SQL.
| [buildSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildSelect()-detail "Defined by yii\db\QueryBuilder")                           |
| [buildSimpleCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildSimpleCondition()-detail "Defined by yii\db\QueryBuilder")         | Creates an SQL expressions like `"column" operator value`.
| [buildUnion()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildUnion()-detail "Defined by yii\db\QueryBuilder")                             |
| [buildWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildWhere()-detail "Defined by yii\db\QueryBuilder")                             |
| [buildWithQueries()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#buildWithQueries()-detail "Defined by yii\db\QueryBuilder")                 |
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be set.
| [checkIntegrity()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#checkIntegrity()-detail "Defined by yii\db\pgsql\QueryBuilder")         | Builds a SQL statement for enabling or disabling integrity check.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                               | Returns the fully qualified name of this class.
| [createConditionFromArray()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#createConditionFromArray()-detail "Defined by yii\db\QueryBuilder") | Transforms $condition defined in array format (as described in [yii\db\Query::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#where()-detail) to instance of `\yii\db\yii\db\condition\ConditionInterface` according to [conditionClasses](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$conditionClasses-detail) map.
| [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail "Defined by yii\db\pgsql\QueryBuilder")               | Builds a SQL statement for creating a new index.
| [createTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#createTable()-detail "Defined by yii\db\QueryBuilder")                           | Builds a SQL statement for creating a new DB table.
| [createView()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#createView()-detail "Defined by yii\db\QueryBuilder")                             | Creates a SQL View.
| [delete()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#delete()-detail "Defined by yii\db\QueryBuilder")                                     | Creates a DELETE SQL statement.
| [dropCheck()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropCheck()-detail "Defined by yii\db\QueryBuilder")                               | Creates a SQL command for dropping a check constraint.
| [dropColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropColumn()-detail "Defined by yii\db\QueryBuilder")                             | Builds a SQL statement for dropping a DB column.
| [dropCommentFromColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropCommentFromColumn()-detail "Defined by yii\db\QueryBuilder")       | Builds a SQL command for adding comment to column.
| [dropCommentFromTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropCommentFromTable()-detail "Defined by yii\db\QueryBuilder")         | Builds a SQL command for adding comment to table.
| [dropDefaultValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropDefaultValue()-detail "Defined by yii\db\QueryBuilder")                 | Creates a SQL command for dropping a default value constraint.
| [dropForeignKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropForeignKey()-detail "Defined by yii\db\QueryBuilder")                     | Builds a SQL statement for dropping a foreign key constraint.
| [dropIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#dropIndex()-detail "Defined by yii\db\pgsql\QueryBuilder")                   | Builds a SQL statement for dropping an index.
| [dropPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropPrimaryKey()-detail "Defined by yii\db\QueryBuilder")                     | Builds a SQL statement for removing a primary key constraint to an existing table.
| [dropTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropTable()-detail "Defined by yii\db\QueryBuilder")                               | Builds a SQL statement for dropping a DB table.
| [dropTableIfExists()](craft-db-pgsql-querybuilder.md#method-droptableifexists)                                                                                | Builds a SQL statement for dropping a DB table if it exists.
| [dropUnique()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropUnique()-detail "Defined by yii\db\QueryBuilder")                             | Creates a SQL command for dropping an unique constraint.
| [dropView()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#dropView()-detail "Defined by yii\db\QueryBuilder")                                 | Drops a SQL View.
| [executeResetSequence()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#executeResetSequence()-detail "Defined by yii\db\QueryBuilder")         | Execute a SQL statement for resetting the sequence value of a table's primary key.
| [fixedOrder()](craft-db-pgsql-querybuilder.md#method-fixedorder)                                                                                              | Builds the SQL expression used to return a DB result in a fixed order.
| [getColumnType()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#getColumnType()-detail "Defined by yii\db\QueryBuilder")                       | Converts an abstract column type into a physical column type.
| [getExpressionBuilder()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#getExpressionBuilder()-detail "Defined by yii\db\QueryBuilder")         | Gets object of [yii\db\ExpressionBuilderInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressionbuilderinterface) that is suitable for $expression.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#init()-detail "Defined by yii\db\QueryBuilder")                                         | Initializes the object.
| [insert()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#insert()-detail "Defined by yii\db\pgsql\QueryBuilder")                         | Creates an INSERT SQL statement.
| [renameColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#renameColumn()-detail "Defined by yii\db\QueryBuilder")                         | Builds a SQL statement for renaming a column.
| [renameSequence()](craft-db-pgsql-querybuilder.md#method-renamesequence)                                                                                      | Builds a SQL statement for renaming a DB sequence.
| [renameTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#renameTable()-detail "Defined by yii\db\pgsql\QueryBuilder")               | Builds a SQL statement for renaming a DB table.
| [replace()](craft-db-pgsql-querybuilder.md#method-replace)                                                                                                    | Builds a SQL statement for replacing some text with other text in a given table column.
| [resetSequence()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#resetSequence()-detail "Defined by yii\db\pgsql\QueryBuilder")           | Creates a SQL statement for resetting the sequence value of a table's primary key.
| [selectExists()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#selectExists()-detail "Defined by yii\db\QueryBuilder")                         | Creates a SELECT EXISTS() SQL statement.
| [setConditionClasses()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#setConditionClasses()-detail "Defined by yii\db\QueryBuilder")           | Setter for [conditionClasses](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$conditionClasses-detail) property.
| [setExpressionBuilders()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#setExpressionBuilders()-detail "Defined by yii\db\QueryBuilder")       | Setter for [expressionBuilders](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$expressionBuilders-detail) property.
| [truncateTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#truncateTable()-detail "Defined by yii\db\pgsql\QueryBuilder")           | Builds a SQL statement for truncating a DB table.
| [update()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#update()-detail "Defined by yii\db\pgsql\QueryBuilder")                         | Creates an UPDATE SQL statement.
| [upsert()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#upsert()-detail "Defined by yii\db\pgsql\QueryBuilder")                         | Creates an SQL statement to insert rows into a database table if they do not already exist (matching unique constraints), or update them if they do.

### `dropTableIfExists()`





Builds a SQL statement for dropping a DB table if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/db/pgsql/QueryBuilder.php#L26-L29)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be dropped. The name will be properly quoted by the method.

#### Returns

[string](http://php.net/language.types.string) – The SQL statement for dropping a DB table.



### `fixedOrder()`





Builds the SQL expression used to return a DB result in a fixed order.

http://stackoverflow.com/a/1310188/684


[View source](https://github.com/craftcms/cms/blob/master/src/db/pgsql/QueryBuilder.php#L83-L96)


#### Arguments

- `$column` ([string](http://php.net/language.types.string)) – The column name that contains the values.
- `$values` ([array](http://php.net/language.types.array)) – The column values, in the order in which the rows should be returned in.

#### Returns

[string](http://php.net/language.types.string) – The SQL expression.



### `renameSequence()`





Builds a SQL statement for renaming a DB sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/db/pgsql/QueryBuilder.php#L38-L41)


#### Arguments

- `$oldName` ([string](http://php.net/language.types.string)) – The sequence to be renamed. The name will be properly quoted by the method.
- `$newName` ([string](http://php.net/language.types.string)) – The new sequence name. The name will be properly quoted by the method.

#### Returns

[string](http://php.net/language.types.string) – The SQL statement for renaming a DB table.



### `replace()`





Builds a SQL statement for replacing some text with other text in a given table column.




[View source](https://github.com/craftcms/cms/blob/master/src/db/pgsql/QueryBuilder.php#L56-L72)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table to be updated.
- `$column` ([string](http://php.net/language.types.string)) – The column to be searched.
- `$find` ([string](http://php.net/language.types.string)) – The text to be searched for.
- `$replace` ([string](http://php.net/language.types.string)) – The replacement text.
- `$condition` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string)) – The condition that will be put in the WHERE part. Please
refer to [yii\db\Query::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#where()-detail) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The binding parameters that will be generated by this method.
They should be bound to the DB command later.

#### Returns

[string](http://php.net/language.types.string) – The SQL statement for replacing some text in a given table.





## Protected Methods

| Method                                                                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultConditionClasses()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#defaultConditionClasses()-detail "Defined by yii\db\pgsql\QueryBuilder")     | Contains array of default condition classes. Extend this method, if you want to change default condition classes for the query builder. See [conditionClasses](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$conditionClasses-detail) docs for details.
| [defaultExpressionBuilders()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#defaultExpressionBuilders()-detail "Defined by yii\db\pgsql\QueryBuilder") | Contains array of default expression builders. Extend this method and override it, if you want to change default expression builders for this query builder. See [expressionBuilders](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#$expressionBuilders-detail) docs for details.
| [extractAlias()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#extractAlias()-detail "Defined by yii\db\QueryBuilder")                                       | Extracts table alias if there is one or returns false
| [hasLimit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#hasLimit()-detail "Defined by yii\db\QueryBuilder")                                               | Checks to see if the given limit is effective.
| [hasOffset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#hasOffset()-detail "Defined by yii\db\QueryBuilder")                                             | Checks to see if the given offset is effective.
| [prepareInsertSelectSubQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#prepareInsertSelectSubQuery()-detail "Defined by yii\db\QueryBuilder")         | Prepare select-subquery and field names for INSERT INTO .
| [prepareInsertValues()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#prepareInsertValues()-detail "Defined by yii\db\QueryBuilder")                         | Prepares a `VALUES` part for an `INSERT` SQL statement.
| [prepareUpdateSets()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#prepareUpdateSets()-detail "Defined by yii\db\QueryBuilder")                             | Prepares a `SET` parts for an `UPDATE` SQL statement.
| [prepareUpsertColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#prepareUpsertColumns()-detail "Defined by yii\db\QueryBuilder")                       |



## Constants

| Constant       | Description
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------
| `INDEX_B_TREE` | Defines a B-tree index for [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail).
| `INDEX_GIN`    | Defines a GIN index for [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail).
| `INDEX_GIST`   | Defines a GiST index for [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail).
| `INDEX_HASH`   | Defines a hash index for [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail).
| `INDEX_UNIQUE` | Defines a UNIQUE index for [createIndex()](https://www.yiiframework.com/doc/api/2.0/yii-db-pgsql-querybuilder#createIndex()-detail).
| `PARAM_PREFIX` | The prefix for automatically generated query binding parameters.



