---
title: craft\db\TableSchema
code:
  - php
  - twig
---

# TableSchema

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\TableSchema](craft-db-tableschema.md) &raquo;
[yii\db\TableSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/db/TableSchema.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [columnNames](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$columnNames-detail "Defined by yii\db\TableSchema")   | [array](http://php.net/language.types.array) – List of column names
| [columns](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$columns-detail "Defined by yii\db\TableSchema")           | [yii\db\ColumnSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-columnschema) – Column metadata of this table.
| [extendedForeignKeys](craft-db-tableschema.md#extendedforeignkeys)                                                               | [array](http://php.net/language.types.array)
| [foreignKeys](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$foreignKeys-detail "Defined by yii\db\TableSchema")   | [array](http://php.net/language.types.array) – Foreign keys of this table.
| [fullName](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$fullName-detail "Defined by yii\db\TableSchema")         | [string](http://php.net/language.types.string) – The full name of this table, which includes the schema name prefix, if any.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$name-detail "Defined by yii\db\TableSchema")                 | [string](http://php.net/language.types.string) – The name of this table.
| [primaryKey](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$primaryKey-detail "Defined by yii\db\TableSchema")     | [string](http://php.net/language.types.string)[] – Primary keys of this table.
| [schemaName](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$schemaName-detail "Defined by yii\db\TableSchema")     | [string](http://php.net/language.types.string) – The name of the schema that this table belongs to.
| [sequenceName](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#$sequenceName-detail "Defined by yii\db\TableSchema") | [string](http://php.net/language.types.string) – Sequence name for the primary key.

### `extendedForeignKeys`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/TableSchema.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [addExtendedForeignKey()](craft-db-tableschema.md#method-addextendedforeignkey)                                                           | Adds an extended foreign key to the internal array.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [fixPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#fixPrimaryKey()-detail "Defined by yii\db\TableSchema")     | Manually specifies the primary key for this table.
| [getColumn()](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#getColumn()-detail "Defined by yii\db\TableSchema")             | Gets the named column metadata.
| [getColumnNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema#getColumnNames()-detail "Defined by yii\db\TableSchema")   | Returns the names of all columns in this table.
| [getExtendedForeignKeys()](craft-db-tableschema.md#method-getextendedforeignkeys)                                                         | Returns the array of extended foreign keys.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `addExtendedForeignKey()`





Adds an extended foreign key to the internal array.




[View source](https://github.com/craftcms/cms/blob/master/src/db/TableSchema.php#L38-L41)


#### Arguments

- `$key` ([integer](http://php.net/language.types.integer))
- `$extendedForeignKey` ([array](http://php.net/language.types.array))




### `getExtendedForeignKeys()`





Returns the array of extended foreign keys.




[View source](https://github.com/craftcms/cms/blob/master/src/db/TableSchema.php#L27-L30)



#### Returns

[array](http://php.net/language.types.array)










