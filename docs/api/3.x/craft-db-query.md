---
title: craft\db\Query
code:
  - php
  - twig
---

# Query

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\Query](craft-db-query.md) &raquo;
[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [yii\db\QueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait)

Extended by

:   [craft\elements\db\AssetQuery](craft-elements-db-assetquery.md), [craft\elements\db\CategoryQuery](craft-elements-db-categoryquery.md), [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md), [craft\elements\db\EntryQuery](craft-elements-db-entryquery.md), [craft\elements\db\GlobalSetQuery](craft-elements-db-globalsetquery.md), [craft\elements\db\MatrixBlockQuery](craft-elements-db-matrixblockquery.md), [craft\elements\db\TagQuery](craft-elements-db-tagquery.md), [craft\elements\db\UserQuery](craft-elements-db-userquery.md)

Since

:   3.0.0



Class Query





[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                           | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait") | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                             | [array](http://php.net/language.types.array) – How to group the query results.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                               | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                   | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – How to join with other tables.
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                       | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                     | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [orderBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$orderBy-detail "Defined by yii\db\QueryTrait")                   | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDependency-detail "Defined by yii\db\Query")   | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this query
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDuration-detail "Defined by yii\db\Query")       | [integer](http://php.net/language.types.integer), [true](http://php.net/language.types.boolean) – The default number of seconds that query results can remain valid in cache.
| [rawSql](craft-db-query.md#rawsql)                                                                                                     | [string](http://php.net/language.types.string)
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                   | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$tablesUsedInFrom-detail "Defined by yii\db\Query")           | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                 | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                     | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.

### `rawSql`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                 |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")               | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                           | Add more columns to the SELECT part of the query.
| [all()](craft-db-query.md#method-all)                                                                                                       | Executes the query and returns all results as an array.
| [andFilterCompare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterCompare()-detail "Defined by yii\db\Query")             | Adds a filtering condition for a specific column and allow the user to choose a filter operator.
| [andFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterHaving()-detail "Defined by yii\db\Query")               | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andFilterWhere()-detail "Defined by yii\db\QueryTrait")       | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andHaving()-detail "Defined by yii\db\Query")                           | Adds an additional HAVING condition to the existing one.
| [andWhere()](craft-db-query.md#method-andwhere)                                                                                             | Adds an additional WHERE condition to the existing one.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                   | Starts a batch query.
| [behaviors()](craft-db-query.md#method-behaviors)                                                                                           | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                   | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [column()](craft-db-query.md#method-column)                                                                                                 | Executes the query and returns the first column of the result.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#count()-detail "Defined by yii\db\Query")                                   | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                 | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail "Defined by yii\db\Query")                   | Creates a DB command that can be used to execute this query.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [distinct()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#distinct()-detail "Defined by yii\db\Query")                             | Sets the value indicating whether to SELECT DISTINCT or not.
| [each()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#each()-detail "Defined by yii\db\Query")                                     | Starts a batch query and retrieves data row by row.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](craft-db-query.md#method-exists)                                                                                                 | Returns a value indicating whether the query result contains any row of data.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                     | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getRawSql()](craft-db-query.md#method-getrawsql)                                                                                           | Shortcut for `createCommand()->getRawSql()`.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getTablesUsedInFrom()-detail "Defined by yii\db\Query")       | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                               | Sets the GROUP BY part of the query.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [having()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#having()-detail "Defined by yii\db\Query")                                 | Sets the HAVING part of the query.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](craft-db-query.md#method-init)                                                                                                     | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                           | Appends an INNER JOIN part to the query.
| [isJoined()](craft-db-query.md#method-isjoined)                                                                                             | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                     | Appends a JOIN part to the query.
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                             | Appends a LEFT OUTER JOIN part to the query.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                         | Sets the LIMIT part of the query.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                       | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                       | Returns the minimum of the specified column values.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                               | Disables query cache for this Query.
| [nth()](craft-db-query.md#method-nth)                                                                                                       | Executes the query and returns a single row of result at a given offset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                       | Sets the OFFSET part of the query.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [one()](craft-db-query.md#method-one)                                                                                                       | Executes the query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                 | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")         | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                             | Adds an additional HAVING condition to the existing one.
| [orWhere()](craft-db-query.md#method-orwhere)                                                                                               | Adds an additional WHERE condition to the existing one.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the ORDER BY part of the query.
| [pairs()](craft-db-query.md#method-pairs)                                                                                                   | Executes the query and returns the first two columns in the results as key/value pairs.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                 | Sets the parameters to be bound to the query.
| [populate()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#populate()-detail "Defined by yii\db\Query")                             | Converts the raw query results into the format as specified by this query.
| [prepare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#prepare()-detail "Defined by yii\db\Query")                               | Prepares for building SQL.
| [rightJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#rightJoin()-detail "Defined by yii\db\Query")                           | Appends a RIGHT OUTER JOIN part to the query.
| [scalar()](craft-db-query.md#method-scalar)                                                                                                 | Returns the query result as a scalar value.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                 | Sets the SELECT part of the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                       | Returns the sum of the specified column values.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                   | Appends a SQL statement using UNION operator.
| [where()](craft-db-query.md#method-where)                                                                                                   | Sets the WHERE part of the query.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                           | Prepends a SQL statement using WITH syntax.

### `all()`





Executes the query and returns all results as an array.








[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L149-L156)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array) – The query results. If the query results in nothing, an empty array will be returned.



### `andWhere()`





Adds an additional WHERE condition to the existing one.



The new condition and the existing one will be joined using the `AND` operator.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L93-L100)


#### Arguments

- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The new WHERE condition. Please refer to [where()](craft-db-query.md#method-where)
on how to specify this parameter.
- `$params` ([array](http://php.net/language.types.array)) – The parameters (name => value) to be bound to the query.

#### Returns

[$this](craft-db-query.md) – The query object itself



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




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L53-L59)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `column()`





Executes the query and returns the first column of the result.








[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L199-L206)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array) – The first column of the query result. An empty array is returned if the query results in nothing.



### `exists()`





Returns a value indicating whether the query result contains any row of data.








[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L211-L218)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query result contains any row of data.



### `getRawSql()`





Shortcut for `createCommand()->getRawSql()`.



See also:

- [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail)
- [yii\db\Command::getRawSql()](https://www.yiiframework.com/doc/api/2.0/yii-db-command#getRawSql()-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L248-L251)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[string](http://php.net/language.types.string)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L41-L48)






### `isJoined()`





Returns whether a given table has been joined in this query.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L67-L76)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `nth()`





Executes the query and returns a single row of result at a given offset.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L229-L237)


#### Arguments

- `$n` ([integer](http://php.net/language.types.integer)) – The offset of the row to return. If [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail) is set, $offset will be added to it.
- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The row (in terms of an array) of the query result. Null is returned if the query
results in nothing.



### `one()`





Executes the query and returns a single row of result.








[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L163-L178)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The first row (in terms of an array) of the query result. Null is returned if the query
results in nothing.



### `orWhere()`





Adds an additional WHERE condition to the existing one.



The new condition and the existing one will be joined using the `OR` operator.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L105-L112)


#### Arguments

- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The new WHERE condition. Please refer to [where()](craft-db-query.md#method-where)
on how to specify this parameter.
- `$params` ([array](http://php.net/language.types.array)) – The parameters (name => value) to be bound to the query.

#### Returns

[$this](craft-db-query.md) – The query object itself



### `pairs()`





Executes the query and returns the first two columns in the results as key/value pairs.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L125-L144)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to execute the query.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array) – The query results. If the query results in nothing, an empty array will be returned.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if less than two columns were selected


### `scalar()`





Returns the query result as a scalar value.



The value returned will be the first column in the first row of the query results.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L183-L194)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean) – The value of the first column in the first row of the query result.
False is returned if the query result is empty.



### `where()`





Sets the WHERE part of the query.



The method requires a `$condition` parameter, and optionally a `$params` parameter
specifying the values to be bound to the query.

The `$condition` parameter should be either a string (e.g. `'id=1'`) or an array.

{@inheritdoc}




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L81-L88)


#### Arguments

- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The conditions that should be put in the WHERE part.
- `$params` ([array](http://php.net/language.types.array)) – The parameters (name => value) to be bound to the query.

#### Returns

[$this](craft-db-query.md) – The query object itself





## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [cleanUpTableNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cleanUpTableNames()-detail "Defined by yii\db\Query")                         | Clean up table names and aliases Both aliases and names are enclosed into {{ and }}.
| [filterCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterCondition()-detail "Defined by yii\db\QueryTrait")                   | Removes [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail) from the given query condition.
| [getUnaliasedColumnsFromSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUnaliasedColumnsFromSelect()-detail "Defined by yii\db\Query") |
| [getUniqueColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUniqueColumns()-detail "Defined by yii\db\Query")                           | Returns unique column names excluding duplicates.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail "Defined by yii\db\QueryTrait")                                   | Returns a value indicating whether the give value is "empty".
| [normalizeOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#normalizeOrderBy()-detail "Defined by yii\db\QueryTrait")                 | Normalizes format of ORDER BY data.
| [normalizeSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#normalizeSelect()-detail "Defined by yii\db\Query")                             | Normalizes the SELECT columns passed to [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) or [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail).
| [queryScalar()](craft-db-query.md#method-queryscalar)                                                                                                     | Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.
| [setCommandCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#setCommandCache()-detail "Defined by yii\db\Query")                             | Sets $command cache, if this query has enabled caching.

### `queryScalar()`





Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.



Restores the value of select to make this query reusable.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Query.php#L256-L263)


#### Arguments

- `$selectExpression` ([string](http://php.net/language.types.string), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface))
- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string)







## Events

### EVENT_DEFINE_BEHAVIORS



Type

:   [craft\events\DefineBehaviorsEvent](craft-events-definebehaviorsevent.md)



The event that is triggered when defining the class behaviors

See also [behaviors()](craft-db-query.md#method-behaviors)

---



### EVENT_INIT



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after the query's init cycle

See also [init()](craft-db-query.md#method-init)

---




