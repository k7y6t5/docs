---
title: craft\db\FixedOrderExpression
code:
  - php
  - twig
---

# FixedOrderExpression

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\FixedOrderExpression](craft-db-fixedorderexpression.md) &raquo;
[yii\db\Expression](https://www.yiiframework.com/doc/api/2.0/yii-db-expression) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)

Since

:   3.0.0



FixedOrderExpression represents the SQL used to apply a fixed order to a DB result.





[View source](https://github.com/craftcms/cms/blob/master/src/db/FixedOrderExpression.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------
| [column](craft-db-fixedorderexpression.md#column)                                                                          | [string](http://php.net/language.types.string) – The column name that contains the values
| [db](craft-db-fixedorderexpression.md#db)                                                                                  | [craft\db\Connection](craft-db-connection.md) – The DB connection
| [expression](https://www.yiiframework.com/doc/api/2.0/yii-db-expression#$expression-detail "Defined by yii\db\Expression") | [string](http://php.net/language.types.string) – The DB expression
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-expression#$params-detail "Defined by yii\db\Expression")         | [array](http://php.net/language.types.array) – List of parameters that should be bound for this expression.
| [values](craft-db-fixedorderexpression.md#values)                                                                          | [array](http://php.net/language.types.array) – The column values, in the order in which the rows should be returned in

### `column`



Type

:   [string](http://php.net/language.types.string)



The column name that contains the values



[View source](https://github.com/craftcms/cms/blob/master/src/db/FixedOrderExpression.php#L23)



### `db`



Type

:   [craft\db\Connection](craft-db-connection.md)



The DB connection



[View source](https://github.com/craftcms/cms/blob/master/src/db/FixedOrderExpression.php#L33)



### `values`



Type

:   [array](http://php.net/language.types.array)



The column values, in the order in which the rows should be returned in



[View source](https://github.com/craftcms/cms/blob/master/src/db/FixedOrderExpression.php#L28)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-db-fixedorderexpression.md#method-construct)                                                                        | Constructor
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-expression#__toString()-detail "Defined by yii\db\Expression")             | String magic method.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/db/FixedOrderExpression.php#L44-L52)


#### Arguments

- `$column` ([string](http://php.net/language.types.string)) – The column name that contains the values.
- `$values` ([array](http://php.net/language.types.array)) – The column values, in the order in which the rows should be returned in.
- `$db` ([craft\db\Connection](craft-db-connection.md)) – The DB connection
- `$params` ([array](http://php.net/language.types.array)) – Parameters
- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties.











