---
title: craft\db\mysql\ColumnSchema
code:
  - php
  - twig
---

# ColumnSchema

Type

:   Class

Namespace

:   craft\db\mysql

Inherits

:   [craft\db\mysql\ColumnSchema](craft-db-mysql-columnschema.md) &raquo;
[yii\db\mysql\ColumnSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-mysql-columnschema) &raquo;
[yii\db\ColumnSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)









[View source](https://github.com/craftcms/cms/blob/master/src/db/mysql/ColumnSchema.php)


## Public Properties

| Property                                                                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------
| [allowNull](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$allowNull-detail "Defined by yii\db\ColumnSchema")                               | [boolean](http://php.net/language.types.boolean) – Whether this column can be null.
| [autoIncrement](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$autoIncrement-detail "Defined by yii\db\ColumnSchema")                       | [boolean](http://php.net/language.types.boolean) – Whether this column is auto-incremental
| [comment](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$comment-detail "Defined by yii\db\ColumnSchema")                                   | [string](http://php.net/language.types.string) – Comment of this column.
| [dbType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$dbType-detail "Defined by yii\db\ColumnSchema")                                     | [string](http://php.net/language.types.string) – The DB type of this column.
| [defaultValue](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$defaultValue-detail "Defined by yii\db\ColumnSchema")                         | `mixed` – Default value of this column
| [disableJsonSupport](https://www.yiiframework.com/doc/api/2.0/yii-db-mysql-columnschema#$disableJsonSupport-detail "Defined by yii\db\mysql\ColumnSchema") | [boolean](http://php.net/language.types.boolean) – Whether the column schema should OMIT using JSON support feature.
| [enumValues](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$enumValues-detail "Defined by yii\db\ColumnSchema")                             | [array](http://php.net/language.types.array) – Enumerable values.
| [isPrimaryKey](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$isPrimaryKey-detail "Defined by yii\db\ColumnSchema")                         | [boolean](http://php.net/language.types.boolean) – Whether this column is a primary key
| [name](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$name-detail "Defined by yii\db\ColumnSchema")                                         | [string](http://php.net/language.types.string) – Name of this column (without quotes).
| [phpType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$phpType-detail "Defined by yii\db\ColumnSchema")                                   | [string](http://php.net/language.types.string) – The PHP type of this column.
| [precision](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$precision-detail "Defined by yii\db\ColumnSchema")                               | [integer](http://php.net/language.types.integer) – Precision of the column data, if it is numeric.
| [scale](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$scale-detail "Defined by yii\db\ColumnSchema")                                       | [integer](http://php.net/language.types.integer) – Scale of the column data, if it is numeric.
| [size](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$size-detail "Defined by yii\db\ColumnSchema")                                         | [integer](http://php.net/language.types.integer) – Display size of the column.
| [type](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$type-detail "Defined by yii\db\ColumnSchema")                                         | [string](http://php.net/language.types.string) – Abstract type of this column.
| [unsigned](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$unsigned-detail "Defined by yii\db\ColumnSchema")                                 | [boolean](http://php.net/language.types.boolean) – Whether this column is unsigned.





## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [dbTypecast()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#dbTypecast()-detail "Defined by yii\db\ColumnSchema")         | Converts the input value according to [type](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$type-detail) and [dbType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$dbType-detail) for use in a db query.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [phpTypecast()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#phpTypecast()-detail "Defined by yii\db\ColumnSchema")       | Converts the input value according to [phpType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$phpType-detail) after retrieval from the database.



## Protected Methods

| Method                                                       | Description
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------
| [typecast()](craft-db-mysql-columnschema.md#method-typecast) | Converts the input value according to [phpType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$phpType-detail) after retrieval from the database.

### `typecast()`





Converts the input value according to [phpType](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema#$phpType-detail) after retrieval from the database.



If the value is null or an `\Expression`, it will not be converted.




[View source](https://github.com/craftcms/cms/blob/master/src/db/mysql/ColumnSchema.php#L15-L31)


#### Arguments

- `$value` (`mixed`) – Input value

#### Returns

`mixed` – Converted value








