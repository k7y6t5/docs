---
title: craft\helpers\ChartHelper
code:
  - php
  - twig
---

# ChartHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\ChartHelper](craft-helpers-charthelper.md)

Since

:   3.0.0



Class ChartHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php)






## Public Methods

| Method                                                                                     | Description
| ------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------
| [dateRanges()](craft-helpers-charthelper.md#method-dateranges)                             | Returns the predefined date ranges with their label, start date and end date.
| [formats()](craft-helpers-charthelper.md#method-formats)                                   | Returns the short date, decimal, percent and currency D3 formats based on Craft's locale settings
| [getRunChartDataFromQuery()](craft-helpers-charthelper.md#method-getrunchartdatafromquery) | Returns the data for a run chart, based on a given DB query, start/end dates, and the desired time interval unit.
| [getRunChartIntervalUnit()](craft-helpers-charthelper.md#method-getrunchartintervalunit)   | Returns the interval unit that should be used in a run chart, based on the given start and end dates.
| [shortDateFormats()](craft-helpers-charthelper.md#method-shortdateformats)                 | Returns the D3 short date formats based on Yii's short date format

### `dateRanges()`





Returns the predefined date ranges with their label, start date and end date.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php#L212-L222)



#### Returns

[array](http://php.net/language.types.array)



### `formats()`





Returns the short date, decimal, percent and currency D3 formats based on Craft's locale settings




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php#L146-L151)



#### Returns

[array](http://php.net/language.types.array)



### `getRunChartDataFromQuery()`





Returns the data for a run chart, based on a given DB query, start/end dates, and the desired time interval unit.

The query’s SELECT clause should already be set to a column aliased as `value`.
The $options array can override the following defaults:

 - `intervalUnit`  - The time interval unit to use ('hour', 'day', 'month', or 'year').
                     By default, a unit will be decided automatically based on the start/end date duration.
 - `categoryLabel` - The label to use for the chart categories (times). Defaults to "Date".
 - `valueLabel`    - The label to use for the chart values. Defaults to "Value".
 - `valueType`     - The type of values that are being plotted ('number', 'currency', 'percent', 'time'). Defaults to 'number'.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php#L47-L112)


#### Arguments

- `$query` ([craft\db\Query](craft-db-query.md)) – The DB query that should be used. It will be executed for each time interval,
with additional conditions on the $dateColumn, via [craft\db\Query::scalar()](craft-db-query.md#method-scalar).
- `$startDate` ([DateTime](http://php.net/class.datetime)) – The start of the time duration to select (inclusive)
- `$endDate` ([DateTime](http://php.net/class.datetime)) – The end of the time duration to select (exclusive)
- `$dateColumn` ([string](http://php.net/language.types.string)) – The column that represents the date
- `$func` ([string](http://php.net/language.types.string)) – The aggregate function to call for each date interval ('count', 'sum', 'average', 'min', or 'max')
- `$q` ([string](http://php.net/language.types.string)) – The column name or expression to pass into the aggregate function (make sure column names are ``\craft\helpers\quoted``)
- `$options` ([array](http://php.net/language.types.array)) – Any customizations that should be made over the default options

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getRunChartIntervalUnit()`





Returns the interval unit that should be used in a run chart, based on the given start and end dates.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php#L121-L139)


#### Arguments

- `$startDate` ([DateTime](http://php.net/class.datetime))
- `$endDate` ([DateTime](http://php.net/class.datetime))

#### Returns

[string](http://php.net/language.types.string) – The unit that the chart should use ('hour', 'day', 'month', or 'year')



### `shortDateFormats()`





Returns the D3 short date formats based on Yii's short date format




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ChartHelper.php#L158-L205)



#### Returns

[array](http://php.net/language.types.array)










