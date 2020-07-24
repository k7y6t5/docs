---
title: craft\helpers\Db
code:
  - php
  - twig
---

# Db

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Db](craft-helpers-db.md)

Since

:   3.0.0



Class Db





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php)






## Public Methods

| Method                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [areColumnTypesCompatible()](craft-helpers-db.md#method-arecolumntypescompatible)                       | Returns whether two column type definitions are relatively compatible with each other.
| [deleteIfExists()](craft-helpers-db.md#method-deleteifexists)                                           | Executes a DELETE command, but only if there are any rows to delete.
| [escapeParam()](craft-helpers-db.md#method-escapeparam)                                                 | Escapes commas and asterisks in a string so they are not treated as special characters in [craft\helpers\Db::parseParam()](craft-helpers-db.md#method-parseparam).
| [getMaxAllowedValueForNumericColumn()](craft-helpers-db.md#method-getmaxallowedvaluefornumericcolumn)   | Returns the maximum number allowed for a given column type.
| [getMinAllowedValueForNumericColumn()](craft-helpers-db.md#method-getminallowedvaluefornumericcolumn)   | Returns the minimum number allowed for a given column type.
| [getNumericalColumnType()](craft-helpers-db.md#method-getnumericalcolumntype)                           | Returns a number column type, taking the min, max, and number of decimal points into account.
| [getSimplifiedColumnType()](craft-helpers-db.md#method-getsimplifiedcolumntype)                         | Returns a simplified version of a given column type.
| [getTextualColumnStorageCapacity()](craft-helpers-db.md#method-gettextualcolumnstoragecapacity)         | Returns the maximum number of bytes a given textual column type can hold for a given database.
| [getTextualColumnTypeByContentLength()](craft-helpers-db.md#method-gettextualcolumntypebycontentlength) | Given a length of a piece of content, returns the underlying database column type to use for saving.
| [idByUid()](craft-helpers-db.md#method-idbyuid)                                                         | Returns the `id` of a row in the given table by its `uid`.
| [idsByUids()](craft-helpers-db.md#method-idsbyuids)                                                     | Returns an array `uid`:`id` pairs from a given table, by their `uid`s.
| [isNumericColumnType()](craft-helpers-db.md#method-isnumericcolumntype)                                 | Returns whether the given column type is numeric.
| [isTextualColumnType()](craft-helpers-db.md#method-istextualcolumntype)                                 | Returns whether the given column type is textual.
| [isTypeSupported()](craft-helpers-db.md#method-istypesupported)                                         | Returns whether a given DB connection’s schema supports a column type.
| [parseBooleanParam()](craft-helpers-db.md#method-parsebooleanparam)                                     | Parses a query param value for a boolean column and returns a [yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.
| [parseColumnLength()](craft-helpers-db.md#method-parsecolumnlength)                                     | Parses a column type definition and returns just the column length/size.
| [parseColumnType()](craft-helpers-db.md#method-parsecolumntype)                                         | Parses a column type definition and returns just the column type, if it can be determined.
| [parseDateParam()](craft-helpers-db.md#method-parsedateparam)                                           | Parses a query param value for a date/time column, and returns a [yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.
| [parseDsn()](craft-helpers-db.md#method-parsedsn)                                                       | Parses a DSN string and returns an array with the `driver` and any driver params, or just a single key.
| [parseParam()](craft-helpers-db.md#method-parseparam)                                                   | Parses a query param value and returns a [yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.
| [prepareDateForDb()](craft-helpers-db.md#method-preparedatefordb)                                       | Prepares a date to be sent to the database.
| [prepareValueForDb()](craft-helpers-db.md#method-preparevaluefordb)                                     | Prepares a value to be sent to the database.
| [prepareValuesForDb()](craft-helpers-db.md#method-preparevaluesfordb)                                   | Prepares an array or object’s values to be sent to the database.
| [uidById()](craft-helpers-db.md#method-uidbyid)                                                         | Returns the `uid` of a row in the given table by its `id`.
| [uidsByIds()](craft-helpers-db.md#method-uidsbyids)                                                     | Returns an array `id`:`uid` pairs from a given table, by their `id`s.
| [url2config()](craft-helpers-db.md#method-url2config)                                                   | Generates a DB config from a database connection URL.

### `areColumnTypesCompatible()`





Returns whether two column type definitions are relatively compatible with each other.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L373-L376)


#### Arguments

- `$typeA` ([string](http://php.net/language.types.string))
- `$typeB` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteIfExists()`



Since

:   3.0.12



Executes a DELETE command, but only if there are any rows to delete.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L698-L716)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The table where the data will be deleted from.
- `$condition` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The condition that will be put in the WHERE part. Please
refer to [craft\db\Query::where()](craft-db-query.md#method-where) on how to specify condition.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be bound to the command
- `$db` ([craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null))

#### Returns

[integer](http://php.net/language.types.integer) – Number of rows affected by the execution.

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)\
  execution failed


### `escapeParam()`





Escapes commas and asterisks in a string so they are not treated as special characters in
[craft\helpers\Db::parseParam()](craft-helpers-db.md#method-parseparam).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L407-L420)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The param value.

#### Returns

[string](http://php.net/language.types.string) – The escaped param value.



### `getMaxAllowedValueForNumericColumn()`





Returns the maximum number allowed for a given column type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L173-L183)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean) – The max allowed number, or false if it can't be determined



### `getMinAllowedValueForNumericColumn()`





Returns the minimum number allowed for a given column type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L155-L165)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean) – The min allowed number, or false if it can't be determined



### `getNumericalColumnType()`





Returns a number column type, taking the min, max, and number of decimal points into account.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L194-L224)


#### Arguments

- `$min` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$max` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$decimals` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if no column types can contain this


### `getSimplifiedColumnType()`





Returns a simplified version of a given column type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L347-L364)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getTextualColumnStorageCapacity()`





Returns the maximum number of bytes a given textual column type can hold for a given database.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L233-L275)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string)) – The textual column type to check
- `$db` ([craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null)) – The database connection

#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean) – The storage capacity of the column type in bytes, null if unlimited, or false or it can't be determined.



### `getTextualColumnTypeByContentLength()`





Given a length of a piece of content, returns the underlying database column type to use for saving.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L285-L309)


#### Arguments

- `$contentLength` ([integer](http://php.net/language.types.integer))
- `$db` ([craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null)) – The database connection

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if using an unsupported connection type


### `idByUid()`



Since

:   3.1.0



Returns the `id` of a row in the given table by its `uid`.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L726-L735)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `idsByUids()`



Since

:   3.1.0



Returns an array `uid`:`id` pairs from a given table, by their `uid`s.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L745-L752)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$uids` ([string](http://php.net/language.types.string)[])

#### Returns

[string](http://php.net/language.types.string)[]



### `isNumericColumnType()`





Returns whether the given column type is numeric.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L384-L387)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isTextualColumnType()`





Returns whether the given column type is textual.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L395-L398)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isTypeSupported()`





Returns whether a given DB connection’s schema supports a column type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L674-L684)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))
- `$db` ([craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)


### `parseBooleanParam()`



Since

:   3.4.15



Parses a query param value for a boolean column and returns a
[yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.

The follow values are supported:

- `true` or `false`
- `:empty:` or `:notempty:` (normalizes to `false` and `true`)
- `'not x'` or `'!= x'` (normalizes to the opposite of the boolean value of `x`)
- Anything else (normalizes to the boolean value of itself)

If `$defaultValue` is set, and it matches the normalized `$value`, then the resulting condition will match any
`null` values as well.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L651-L664)


#### Arguments

- `$column` ([string](http://php.net/language.types.string)) – The database column that the param is targeting.
- `$value` ([string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean)) – The param value
- `$defaultValue` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – How `null` values should be treated

#### Returns

`mixed`



### `parseColumnLength()`





Parses a column type definition and returns just the column length/size.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L332-L339)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `parseColumnType()`





Parses a column type definition and returns just the column type, if it can be determined.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L317-L324)


#### Arguments

- `$columnType` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `parseDateParam()`





Parses a query param value for a date/time column, and returns a
[yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L594-L629)


#### Arguments

- `$column` ([string](http://php.net/language.types.string)) – The database column that the param is targeting.
- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [DateTime](http://php.net/class.datetime)) – The param value
- `$defaultOperator` ([string](http://php.net/language.types.string)) – The default operator to apply to the values
(can be `not`, `!=`, `<=`, `>=`, `<`, `>`, or `=`)

#### Returns

`mixed`



### `parseDsn()`



Since

:   3.4.0



Parses a DSN string and returns an array with the `driver` and any driver params, or just a single key.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L800-L830)


#### Arguments

- `$dsn` ([string](http://php.net/language.types.string))
- `$key` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The key that is needed from the DSN. If this is

#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The full array, or the specific key value, or `false` if `$key` is a param that
doesn’t exist in the DSN string.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $dsn is invalid


### `parseParam()`





Parses a query param value and returns a [yii\db\QueryInterface::where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail)-compatible condition.

If the `$value` is a string, it will automatically be converted to an array, split on any commas within the
string (via [craft\helpers\ArrayHelper::toArray()](craft-helpers-arrayhelper.md#method-toarray)). If that is not desired behavior, you can escape the comma
with a backslash before it.

The first value can be set to either `'and'` or `'or'` to define whether *all* of the values must match, or
*any*. If it’s neither `'and'` nor `'or'`, then `'or'` will be assumed.
Values can begin with the operators `'not '`, `'!='`, `'<='`, `'>='`, `'<'`, `'>'`, or `'='`. If they don’t,
`'='` will be assumed.

Values can also be set to either `':empty:'` or `':notempty:'` if you want to search for empty or non-empty
database values. (An “empty” value is either NULL or an empty string of text).


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L445-L582)


#### Arguments

- `$column` ([string](http://php.net/language.types.string)) – The database column that the param is targeting.
- `$value` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array)) – The param value(s).
- `$defaultOperator` ([string](http://php.net/language.types.string)) – The default operator to apply to the values
(can be `not`, `!=`, `<=`, `>=`, `<`, `>`, or `=`)
- `$caseInsensitive` ([boolean](http://php.net/language.types.boolean)) – Whether the resulting condition should be case-insensitive
- `$columnType` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The database column type the param is targeting

#### Returns

`mixed`



### `prepareDateForDb()`





Prepares a date to be sent to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L133-L147)


#### Arguments

- `$date` (`mixed`) – The date to be prepared
- `$stripSeconds` ([boolean](http://php.net/language.types.boolean)) – Whether the seconds should be omitted from the formatted string

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The prepped date, or `null` if it could not be prepared



### `prepareValueForDb()`





Prepares a value to be sent to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L106-L124)


#### Arguments

- `$value` (`mixed`) – The value to be prepared

#### Returns

`mixed` – The prepped value



### `prepareValuesForDb()`





Prepares an array or object’s values to be sent to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L88-L98)


#### Arguments

- `$values` (`mixed`) – The values to be prepared

#### Returns

[array](http://php.net/language.types.array) – The prepared values



### `uidById()`



Since

:   3.1.0



Returns the `uid` of a row in the given table by its `id`.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L762-L771)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `uidsByIds()`



Since

:   3.1.0



Returns an array `id`:`uid` pairs from a given table, by their `id`s.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L781-L788)


#### Arguments

- `$table` ([string](http://php.net/language.types.string))
- `$ids` ([integer](http://php.net/language.types.integer)[])

#### Returns

[string](http://php.net/language.types.string)[]



### `url2config()`



Since

:   3.4.0



Generates a DB config from a database connection URL.

This can be used from `config/db.php`:



[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Db.php#L846-L887)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)


---

#### Example

::: code
```php
$url = craft\helpers\App::env('DB_URL');
return craft\helpers\Db::url2config($url);
```
:::






## Constants

| Constant              | Description
| --------------------- | -----------
| `SIMPLE_TYPE_NUMERIC` |
| `SIMPLE_TYPE_TEXTUAL` |



