---
title: craft\db\mysql\ColumnSchemaBuilder
code:
  - php
  - twig
---

# ColumnSchemaBuilder

Type

:   Class

Namespace

:   craft\db\mysql

Inherits

:   [craft\db\mysql\ColumnSchemaBuilder](craft-db-mysql-columnschemabuilder.md) &raquo;
[yii\db\mysql\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-mysql-columnschemabuilder) &raquo;
[yii\db\ColumnSchemaBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/mysql/ColumnSchemaBuilder.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------
| [categoryMap](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$categoryMap-detail "Defined by yii\db\ColumnSchemaBuilder") | [array](http://php.net/language.types.array) – Mapping of abstract column types (keys) to type categories (values).
| [comment](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$comment-detail "Defined by yii\db\ColumnSchemaBuilder")         | [string](http://php.net/language.types.string) – Comment value of the column.
| [db](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$db-detail "Defined by yii\db\ColumnSchemaBuilder")                   | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The current database connection.



## Protected Properties

| Property                                                                                                                                     | Description
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [after](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$after-detail "Defined by yii\db\ColumnSchemaBuilder")           | [string](http://php.net/language.types.string) – The column after which this column will be added.
| [append](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$append-detail "Defined by yii\db\ColumnSchemaBuilder")         | `mixed` – SQL string to be appended to column schema definition.
| [check](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$check-detail "Defined by yii\db\ColumnSchemaBuilder")           | [string](http://php.net/language.types.string) – The `CHECK` constraint for the column.
| [default](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$default-detail "Defined by yii\db\ColumnSchemaBuilder")       | `mixed` – Default value of the column.
| [isFirst](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$isFirst-detail "Defined by yii\db\ColumnSchemaBuilder")       | [boolean](http://php.net/language.types.boolean) – Whether this column is to be inserted at the beginning of the table.
| [isNotNull](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$isNotNull-detail "Defined by yii\db\ColumnSchemaBuilder")   | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the column is or not nullable.
| [isUnique](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$isUnique-detail "Defined by yii\db\ColumnSchemaBuilder")     | [boolean](http://php.net/language.types.boolean) – Whether the column values should be unique.
| [isUnsigned](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$isUnsigned-detail "Defined by yii\db\ColumnSchemaBuilder") | [boolean](http://php.net/language.types.boolean) – Whether the column values should be unsigned.
| [length](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$length-detail "Defined by yii\db\ColumnSchemaBuilder")         | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – Column size or precision definition.
| [type](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#$type-detail "Defined by yii\db\ColumnSchemaBuilder")             | [string](http://php.net/language.types.string) – The column type definition such as INTEGER, VARCHAR, DATETIME, etc.



## Public Methods

| Method                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                     | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#__construct()-detail "Defined by yii\db\ColumnSchemaBuilder")             | Create a column schema builder instance giving the type and value precision.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                       | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#__toString()-detail "Defined by yii\db\ColumnSchemaBuilder")               | Builds the full string for the column's schema.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                   | Sets an object property to null.
| [after()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#after()-detail "Defined by yii\db\ColumnSchemaBuilder")                         | Adds an `AFTER` constraint to the column.
| [append()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#append()-detail "Defined by yii\db\ColumnSchemaBuilder")                       | Specify additional SQL to be appended to column definition.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be set.
| [check()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#check()-detail "Defined by yii\db\ColumnSchemaBuilder")                         | Sets a `CHECK` constraint for the column.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                               | Returns the fully qualified name of this class.
| [comment()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#comment()-detail "Defined by yii\db\ColumnSchemaBuilder")                     | Specifies the comment for column.
| [defaultExpression()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#defaultExpression()-detail "Defined by yii\db\ColumnSchemaBuilder") | Specify the default SQL expression for the column.
| [defaultValue()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#defaultValue()-detail "Defined by yii\db\ColumnSchemaBuilder")           | Specify the default value for the column.
| [first()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#first()-detail "Defined by yii\db\ColumnSchemaBuilder")                         | Adds an `FIRST` constraint to the column.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a property is defined.
| [init()](craft-db-mysql-columnschemabuilder.md#method-init)                                                                                                   | Initializes the object.
| [notNull()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#notNull()-detail "Defined by yii\db\ColumnSchemaBuilder")                     | Adds a `NOT NULL` constraint to the column.
| [null()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#null()-detail "Defined by yii\db\ColumnSchemaBuilder")                           | Adds a `NULL` constraint to the column.
| [unique()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#unique()-detail "Defined by yii\db\ColumnSchemaBuilder")                       | Adds a `UNIQUE` constraint to the column.
| [unsigned()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#unsigned()-detail "Defined by yii\db\ColumnSchemaBuilder")                   | Marks column as unsigned.

### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/mysql/ColumnSchemaBuilder.php#L23-L29)








## Protected Methods

| Method                                                                                                                                                            | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------
| [buildAfterString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildAfterString()-detail "Defined by yii\db\ColumnSchemaBuilder")       | Builds the after constraint for the column. Defaults to unsupported.
| [buildAppendString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildAppendString()-detail "Defined by yii\db\ColumnSchemaBuilder")     | Builds the custom string that's appended to column definition.
| [buildCheckString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildCheckString()-detail "Defined by yii\db\ColumnSchemaBuilder")       | Builds the check constraint for the column.
| [buildCommentString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildCommentString()-detail "Defined by yii\db\ColumnSchemaBuilder")   | Builds the comment specification for the column.
| [buildCompleteString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildCompleteString()-detail "Defined by yii\db\ColumnSchemaBuilder") | Returns the complete column definition from input format.
| [buildDefaultString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildDefaultString()-detail "Defined by yii\db\ColumnSchemaBuilder")   | Builds the default value specification for the column.
| [buildFirstString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildFirstString()-detail "Defined by yii\db\ColumnSchemaBuilder")       | Builds the first constraint for the column. Defaults to unsupported.
| [buildLengthString()](craft-db-mysql-columnschemabuilder.md#method-buildlengthstring)                                                                             | Builds the length/precision part of the column.
| [buildNotNullString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildNotNullString()-detail "Defined by yii\db\ColumnSchemaBuilder")   | Builds the not null constraint for the column.
| [buildUniqueString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildUniqueString()-detail "Defined by yii\db\ColumnSchemaBuilder")     | Builds the unique constraint for the column.
| [buildUnsignedString()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#buildUnsignedString()-detail "Defined by yii\db\ColumnSchemaBuilder") | Builds the unsigned string for column. Defaults to unsupported.
| [getTypeCategory()](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschemabuilder#getTypeCategory()-detail "Defined by yii\db\ColumnSchemaBuilder")         | Returns the category of the column type.

### `buildLengthString()`





Builds the length/precision part of the column.








[View source](https://github.com/craftcms/cms/blob/master/src/db/mysql/ColumnSchemaBuilder.php#L34-L51)



#### Returns

[string](http://php.net/language.types.string)





## Constants

| Constant           | Description
| ------------------ | -----------
| `CATEGORY_NUMERIC` |
| `CATEGORY_OTHER`   |
| `CATEGORY_PK`      |
| `CATEGORY_STRING`  |
| `CATEGORY_TIME`    |



