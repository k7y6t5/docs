---
title: craft\commerce\base\Stat
code:
  - php
  - twig
---

# Stat

Type

:   Abstract Class

Namespace

:   craft\commerce\base

Inherits

:   [craft\commerce\base\Stat](craft-commerce-base-stat.md)

Implements

:   [craft\commerce\base\StatInterface](craft-commerce-base-statinterface.md)

Uses traits

:   [craft\commerce\base\StatTrait](craft-commerce-base-stattrait.md)

Extended by

:   [craft\commerce\stats\AverageOrderTotal](craft-commerce-stats-averageordertotal.md), [craft\commerce\stats\NewCustomers](craft-commerce-stats-newcustomers.md), [craft\commerce\stats\RepeatCustomers](craft-commerce-stats-repeatcustomers.md), [craft\commerce\stats\TopCustomers](craft-commerce-stats-topcustomers.md), [craft\commerce\stats\TopProductTypes](craft-commerce-stats-topproducttypes.md), [craft\commerce\stats\TopProducts](craft-commerce-stats-topproducts.md), [craft\commerce\stats\TopPurchasables](craft-commerce-stats-toppurchasables.md), [craft\commerce\stats\TotalOrders](craft-commerce-stats-totalorders.md), [craft\commerce\stats\TotalOrdersByCountry](craft-commerce-stats-totalordersbycountry.md), [craft\commerce\stats\TotalRevenue](craft-commerce-stats-totalrevenue.md)

Since

:   3.0



Stat





[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php)


## Public Properties

| Property                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------
| [cache](craft-commerce-base-stattrait.md#cache "Defined by craft\commerce\base\StatTrait")                 | [boolean](http://php.net/language.types.boolean)
| [cacheDuration](craft-commerce-base-stattrait.md#cacheduration "Defined by craft\commerce\base\StatTrait") | [integer](http://php.net/language.types.integer) – How long to cache the data, in seconds.
| [dateRange](craft-commerce-base-stattrait.md#daterange "Defined by craft\commerce\base\StatTrait")         | [string](http://php.net/language.types.string)
| [weekStartDay](craft-commerce-base-stattrait.md#weekstartday "Defined by craft\commerce\base\StatTrait")   | [integer](http://php.net/language.types.integer)



## Protected Properties

| Property                                                                                      | Description
| --------------------------------------------------------------------------------------------- | ----------------------------------------------
| [_handle](craft-commerce-base-stattrait.md#handle "Defined by craft\commerce\base\StatTrait") | [string](http://php.net/language.types.string)



## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | -----------------
| [__construct()](craft-commerce-base-stat.md#method-construct)                                                   | Stat constructor.
| [get()](craft-commerce-base-stat.md#method-get)                                                                 |
| [getChartQueryOptionsByInterval()](craft-commerce-base-stat.md#method-getchartqueryoptionsbyinterval)           |
| [getData()](craft-commerce-base-statinterface.md#method-getdata "Defined by craft\commerce\base\StatInterface") |
| [getDateRangeInterval()](craft-commerce-base-stat.md#method-getdaterangeinterval)                               |
| [getDateRangeWording()](craft-commerce-base-stat.md#method-getdaterangewording)                                 |
| [getEndDate()](craft-commerce-base-stat.md#method-getenddate)                                                   |
| [getHandle()](craft-commerce-base-stat.md#method-gethandle)                                                     |
| [getStartDate()](craft-commerce-base-stat.md#method-getstartdate)                                               |
| [prepareData()](craft-commerce-base-stat.md#method-preparedata)                                                 |
| [setEndDate()](craft-commerce-base-stat.md#method-setenddate)                                                   |
| [setStartDate()](craft-commerce-base-stat.md#method-setstartdate)                                               |

### `__construct()`





Stat constructor.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L37-L51)


#### Arguments

- `$dateRange` ([string](http://php.net/language.types.string))
- `$startDate` ([null](http://php.net/language.types.null))
- `$endDate` ([null](http://php.net/language.types.null))


#### Throws

- [Exception](http://php.net/class.exception)


### `get()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L65-L88)



#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), `mixed`, [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getChartQueryOptionsByInterval()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L372-L400)


#### Arguments

- `$interval` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getDateRangeInterval()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L405-L413)



#### Returns

`mixed`, [string](http://php.net/language.types.string)



### `getDateRangeWording()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L141-L211)



#### Returns

[string](http://php.net/language.types.string)



### `getEndDate()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L133-L136)



#### Returns

`mixed`



### `getHandle()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L56-L59)



#### Returns

[string](http://php.net/language.types.string)



### `getStartDate()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L125-L128)



#### Returns

`mixed`



### `prepareData()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L93-L96)


#### Arguments

- `$data`

#### Returns

`mixed`



### `setEndDate()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L113-L120)


#### Arguments

- `$date` ([null](http://php.net/language.types.null), [DateTime](http://php.net/class.datetime))

#### Returns

`mixed`



### `setStartDate()`














[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L101-L108)


#### Arguments

- `$date` ([null](http://php.net/language.types.null), [DateTime](http://php.net/class.datetime))

#### Returns

`mixed`





## Protected Methods

| Method                                                                     | Description
| -------------------------------------------------------------------------- | ------------------------
| [_createChartQuery()](craft-commerce-base-stat.md#method-createchartquery) |
| [_createStatQuery()](craft-commerce-base-stat.md#method-createstatquery)   | Generate base stat query

### `_createChartQuery()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L438-L477)


#### Arguments

- `$select` ([array](http://php.net/language.types.array))
- `$resultsDefaults` ([array](http://php.net/language.types.array))
- `$query` ([null](http://php.net/language.types.null), [craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

#### Throws

- [Exception](http://php.net/class.exception)


### `_createStatQuery()`





Generate base stat query




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Stat.php#L420-L429)



#### Returns

[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query)








