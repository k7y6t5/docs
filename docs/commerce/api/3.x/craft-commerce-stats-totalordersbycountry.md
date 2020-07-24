---
title: craft\commerce\stats\TotalOrdersByCountry
code:
  - php
  - twig
---

# TotalOrdersByCountry

Type

:   Class

Namespace

:   craft\commerce\stats

Inherits

:   [craft\commerce\stats\TotalOrdersByCountry](craft-commerce-stats-totalordersbycountry.md) &raquo;
[craft\commerce\base\Stat](craft-commerce-base-stat.md)

Implements

:   [craft\commerce\base\StatInterface](craft-commerce-base-statinterface.md)

Uses traits

:   [craft\commerce\base\StatTrait](craft-commerce-base-stattrait.md)

Since

:   3.0



Total Orders by Country Stat





[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php)


## Public Properties

| Property                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------
| [cache](craft-commerce-base-stattrait.md#cache "Defined by craft\commerce\base\StatTrait")                 | [boolean](http://php.net/language.types.boolean)
| [cacheDuration](craft-commerce-base-stattrait.md#cacheduration "Defined by craft\commerce\base\StatTrait") | [integer](http://php.net/language.types.integer) – How long to cache the data, in seconds.
| [dateRange](craft-commerce-base-stattrait.md#daterange "Defined by craft\commerce\base\StatTrait")         | [string](http://php.net/language.types.string)
| [limit](craft-commerce-stats-totalordersbycountry.md#limit)                                                |
| [type](craft-commerce-stats-totalordersbycountry.md#type)                                                  | [string](http://php.net/language.types.string) – Type of stat e.g. 'shipping' or 'billing'.
| [weekStartDay](craft-commerce-base-stattrait.md#weekstartday "Defined by craft\commerce\base\StatTrait")   | [integer](http://php.net/language.types.integer)

### `limit`









[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L34)



### `type`



Type

:   [string](http://php.net/language.types.string)



Type of stat e.g. 'shipping' or 'billing'.



[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L32)





## Protected Properties

| Property                                                       | Description
| -------------------------------------------------------------- | ----------------------------------------------
| [_handle](craft-commerce-stats-totalordersbycountry.md#handle) | [string](http://php.net/language.types.string)

### `_handle`



Type

:   [string](http://php.net/language.types.string)











[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L27)





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------
| [__construct()](craft-commerce-stats-totalordersbycountry.md#method-construct)                                                              | Stat constructor.
| [get()](craft-commerce-base-stat.md#method-get "Defined by craft\commerce\base\Stat")                                                       |
| [getChartQueryOptionsByInterval()](craft-commerce-base-stat.md#method-getchartqueryoptionsbyinterval "Defined by craft\commerce\base\Stat") |
| [getData()](craft-commerce-stats-totalordersbycountry.md#method-getdata)                                                                    |
| [getDateRangeInterval()](craft-commerce-base-stat.md#method-getdaterangeinterval "Defined by craft\commerce\base\Stat")                     |
| [getDateRangeWording()](craft-commerce-base-stat.md#method-getdaterangewording "Defined by craft\commerce\base\Stat")                       |
| [getEndDate()](craft-commerce-base-stat.md#method-getenddate "Defined by craft\commerce\base\Stat")                                         |
| [getHandle()](craft-commerce-stats-totalordersbycountry.md#method-gethandle)                                                                |
| [getStartDate()](craft-commerce-base-stat.md#method-getstartdate "Defined by craft\commerce\base\Stat")                                     |
| [prepareData()](craft-commerce-stats-totalordersbycountry.md#method-preparedata)                                                            |
| [setEndDate()](craft-commerce-base-stat.md#method-setenddate "Defined by craft\commerce\base\Stat")                                         |
| [setStartDate()](craft-commerce-base-stat.md#method-setstartdate "Defined by craft\commerce\base\Stat")                                     |

### `__construct()`





Stat constructor.








[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L39-L46)


#### Arguments

- `$dateRange` ([string](http://php.net/language.types.string))
- `$type`
- `$startDate` ([null](http://php.net/language.types.null))
- `$endDate` ([null](http://php.net/language.types.null))


#### Throws

- [Exception](http://php.net/class.exception)


### `getData()`














[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L51-L102)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean)



### `getHandle()`














[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L107-L110)



#### Returns

[string](http://php.net/language.types.string)



### `prepareData()`














[View source](https://github.com/craftcms/commerce/blob/master/src/stats/TotalOrdersByCountry.php#L115-L128)


#### Arguments

- `$data`

#### Returns

`mixed`





## Protected Methods

| Method                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------- | ------------------------
| [_createChartQuery()](craft-commerce-base-stat.md#method-createchartquery "Defined by craft\commerce\base\Stat") |
| [_createStatQuery()](craft-commerce-base-stat.md#method-createstatquery "Defined by craft\commerce\base\Stat")   | Generate base stat query






