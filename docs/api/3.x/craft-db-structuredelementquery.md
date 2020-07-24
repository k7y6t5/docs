---
title: craft\db\StructuredElementQuery
code:
  - php
  - twig
---

# StructuredElementQuery

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\StructuredElementQuery](craft-db-structuredelementquery.md) &raquo;
[yii\db\ActiveQuery](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery) &raquo;
[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ActiveQueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-activequeryinterface), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Uses traits

:   [yii\db\ActiveQueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait), [yii\db\ActiveRelationTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait), [yii\db\QueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/StructuredElementQuery.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [asArray](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#$asArray-detail "Defined by yii\db\ActiveQueryTrait")                 | [boolean](http://php.net/language.types.boolean) – Whether to return each record as an array.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                                     | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait")           | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                             | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                                       | [array](http://php.net/language.types.array) – How to group the query results.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                                         | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                             | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [inverseOf](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#$inverseOf-detail "Defined by yii\db\ActiveRelationTrait")       | [string](http://php.net/language.types.string) – The name of the relation that is the inverse of this relation.
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                             | [array](http://php.net/language.types.array) – How to join with other tables.
| [joinWith](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#$joinWith-detail "Defined by yii\db\ActiveQuery")                         | [array](http://php.net/language.types.array) – A list of relations that this query should be joined with
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                                 | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [link](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#$link-detail "Defined by yii\db\ActiveRelationTrait")                 | [array](http://php.net/language.types.array) – The columns of the primary and foreign tables that establish a relation.
| [modelClass](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#$modelClass-detail "Defined by yii\db\ActiveQueryTrait")           | [string](http://php.net/language.types.string) – The name of the ActiveRecord class.
| [multiple](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#$multiple-detail "Defined by yii\db\ActiveRelationTrait")         | [boolean](http://php.net/language.types.boolean) – Whether this query represents a relation to more than one record.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                               | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [on](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#$on-detail "Defined by yii\db\ActiveQuery")                                     | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The join condition to be used when this query is used in a relational context.
| [orderBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$orderBy-detail "Defined by yii\db\QueryTrait")                             | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                                         | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [primaryModel](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#$primaryModel-detail "Defined by yii\db\ActiveRelationTrait") | [yii\db\ActiveRecord](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord) – The primary model of a relational query.
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDependency-detail "Defined by yii\db\Query")             | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this query
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDuration-detail "Defined by yii\db\Query")                 | [integer](http://php.net/language.types.integer), [true](http://php.net/language.types.boolean) – The default number of seconds that query results can remain valid in cache.
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                                         | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                             | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [sql](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#$sql-detail "Defined by yii\db\ActiveQuery")                                   | [string](http://php.net/language.types.string) – The SQL statement to be executed for retrieving AR records.
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#$tablesUsedInFrom-detail "Defined by yii\db\ActiveQuery")         | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                           | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [via](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#$via-detail "Defined by yii\db\ActiveRelationTrait")                   | [array](http://php.net/language.types.array), [object](http://php.net/language.types.object) – The query associated with the junction table.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                                 | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [with](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#$with-detail "Defined by yii\db\ActiveQueryTrait")                       | [array](http://php.net/language.types.array) – A list of relations that this query should be performed with
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.





## Public Methods

| Method                                                                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#__clone()-detail "Defined by yii\db\ActiveRelationTrait")                   | Clones internal objects.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#__construct()-detail "Defined by yii\db\ActiveQuery")                           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                     | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")                               | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                                           | Add more columns to the SELECT part of the query.
| [alias()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#alias()-detail "Defined by yii\db\ActiveQuery")                                       | Define an alias for the table defined in [modelClass](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#$modelClass-detail).
| [all()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#all()-detail "Defined by yii\db\ActiveQuery")                                           | Executes query and returns all results as an array.
| [andFilterCompare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterCompare()-detail "Defined by yii\db\Query")                             | Adds a filtering condition for a specific column and allow the user to choose a filter operator.
| [andFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterHaving()-detail "Defined by yii\db\Query")                               | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andFilterWhere()-detail "Defined by yii\db\QueryTrait")                       | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andHaving()-detail "Defined by yii\db\Query")                                           | Adds an additional HAVING condition to the existing one.
| [andOnCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#andOnCondition()-detail "Defined by yii\db\ActiveQuery")                     | Adds an additional ON condition to the existing one.
| [andWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andWhere()-detail "Defined by yii\db\QueryTrait")                                   | Adds an additional WHERE condition to the existing one.
| [asArray()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#asArray()-detail "Defined by yii\db\ActiveQueryTrait")                         | Sets the [asArray()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#asArray()-detail) property.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                   | Attaches a list of behaviors to the component.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                                   | Starts a batch query.
| [behaviors()](craft-db-structuredelementquery.md#method-behaviors)                                                                                          | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                                   | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                             | Returns the fully qualified name of this class.
| [column()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#column()-detail "Defined by yii\db\Query")                                                 | Executes the query and returns the first column of the result.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#count()-detail "Defined by yii\db\Query")                                                   | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                                 | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#createCommand()-detail "Defined by yii\db\ActiveQuery")                       | Creates a DB command that can be used to execute this query.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                   | Detaches all behaviors from the component.
| [distinct()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#distinct()-detail "Defined by yii\db\Query")                                             | Sets the value indicating whether to SELECT DISTINCT or not.
| [each()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#each()-detail "Defined by yii\db\Query")                                                     | Starts a batch query and retrieves data row by row.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")                   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#exists()-detail "Defined by yii\db\Query")                                                 | Returns a value indicating whether the query result contains any row of data.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")                             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [findFor()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#findFor()-detail "Defined by yii\db\ActiveRelationTrait")                   | Finds the related records for the specified primary record.
| [findWith()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#findWith()-detail "Defined by yii\db\ActiveQueryTrait")                       | Finds records corresponding to one or multiple relations and populates them into the primary models.
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                                     | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                         | Returns all behaviors attached to this component.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#getTablesUsedInFrom()-detail "Defined by yii\db\ActiveQuery")           | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                                               | Sets the GROUP BY part of the query.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                 | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a property is defined.
| [having()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#having()-detail "Defined by yii\db\Query")                                                 | Sets the HAVING part of the query.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                                     | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#init()-detail "Defined by yii\db\ActiveQuery")                                         | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                                           | Appends an INNER JOIN part to the query.
| [innerJoinWith()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#innerJoinWith()-detail "Defined by yii\db\ActiveQuery")                       | Inner joins with the specified relations.
| [inverseOf()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#inverseOf()-detail "Defined by yii\db\ActiveRelationTrait")               | Sets the name of the relation that is the inverse of this relation.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                                     | Appends a JOIN part to the query.
| [joinWith()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#joinWith()-detail "Defined by yii\db\ActiveQuery")                                 | Joins with the specified relations.
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                                             | Appends a LEFT OUTER JOIN part to the query.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                                         | Sets the LIMIT part of the query.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                                       | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                                       | Returns the minimum of the specified column values.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                                               | Disables query cache for this Query.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                           | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                                       | Sets the OFFSET part of the query.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                             | Attaches an event handler to an event.
| [onCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#onCondition()-detail "Defined by yii\db\ActiveQuery")                           | Sets the ON condition for a relational query.
| [one()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#one()-detail "Defined by yii\db\ActiveQuery")                                           | Executes query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                                 | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")                         | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                                             | Adds an additional HAVING condition to the existing one.
| [orOnCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#orOnCondition()-detail "Defined by yii\db\ActiveQuery")                       | Adds an additional ON condition to the existing one.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orWhere()-detail "Defined by yii\db\QueryTrait")                                     | Adds an additional WHERE condition to the existing one.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail "Defined by yii\db\QueryTrait")                                     | Sets the ORDER BY part of the query.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                                 | Sets the parameters to be bound to the query.
| [populate()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#populate()-detail "Defined by yii\db\ActiveQuery")                                 | Converts the raw query results into the format as specified by this query.
| [populateRelation()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#populateRelation()-detail "Defined by yii\db\ActiveRelationTrait") | Finds the related records and populates them into the primary models.
| [prepare()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#prepare()-detail "Defined by yii\db\ActiveQuery")                                   | Prepares for building SQL.
| [rightJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#rightJoin()-detail "Defined by yii\db\Query")                                           | Appends a RIGHT OUTER JOIN part to the query.
| [scalar()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#scalar()-detail "Defined by yii\db\Query")                                                 | Returns the query result as a scalar value.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                                 | Sets the SELECT part of the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                                       | Returns the sum of the specified column values.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                   | Triggers an event.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                                   | Appends a SQL statement using UNION operator.
| [via()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerelationtrait#via()-detail "Defined by yii\db\ActiveRelationTrait")                           | Specifies the relation associated with the junction table.
| [viaTable()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#viaTable()-detail "Defined by yii\db\ActiveQuery")                                 | Specifies the junction table for a relational query.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                                         | Sets the WHERE part of the query.
| [with()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#with()-detail "Defined by yii\db\ActiveQueryTrait")                               | Specifies the relations with which this query should be performed.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                                           | Prepends a SQL statement using WITH syntax.

### `behaviors()`





Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\db\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/db/StructuredElementQuery.php#L24-L29)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.





## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [cleanUpTableNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cleanUpTableNames()-detail "Defined by yii\db\Query")                         | Clean up table names and aliases Both aliases and names are enclosed into {{ and }}.
| [createModels()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#createModels()-detail "Defined by yii\db\ActiveQueryTrait")             | Converts found rows into model instances.
| [filterCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterCondition()-detail "Defined by yii\db\QueryTrait")                   | Removes [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail) from the given query condition.
| [getPrimaryTableName()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#getPrimaryTableName()-detail "Defined by yii\db\ActiveQuery")         |
| [getTableNameAndAlias()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#getTableNameAndAlias()-detail "Defined by yii\db\ActiveQuery")       | Returns the table name and the table alias for [modelClass](https://www.yiiframework.com/doc/api/2.0/yii-db-activequerytrait#$modelClass-detail).
| [getUnaliasedColumnsFromSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUnaliasedColumnsFromSelect()-detail "Defined by yii\db\Query") |
| [getUniqueColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUniqueColumns()-detail "Defined by yii\db\Query")                           | Returns unique column names excluding duplicates.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail "Defined by yii\db\QueryTrait")                                   | Returns a value indicating whether the give value is "empty".
| [normalizeOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#normalizeOrderBy()-detail "Defined by yii\db\QueryTrait")                 | Normalizes format of ORDER BY data.
| [normalizeSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#normalizeSelect()-detail "Defined by yii\db\Query")                             | Normalizes the SELECT columns passed to [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) or [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail).
| [queryScalar()](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery#queryScalar()-detail "Defined by yii\db\ActiveQuery")                         | Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.
| [setCommandCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#setCommandCache()-detail "Defined by yii\db\Query")                             | Sets $command cache, if this query has enabled caching.






