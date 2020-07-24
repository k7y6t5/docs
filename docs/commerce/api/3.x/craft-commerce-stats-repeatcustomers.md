---
title: craft\commerce\stats\RepeatCustomers
code:
  - php
  - twig
---

# RepeatCustomers

Type

:   Class

Namespace

:   craft\commerce\stats

Inherits

:   [craft\commerce\stats\RepeatCustomers](craft-commerce-stats-repeatcustomers.md) &raquo;
[craft\commerce\base\Stat](craft-commerce-base-stat.md)

Implements

:   [craft\commerce\base\StatInterface](craft-commerce-base-statinterface.md)

Uses traits

:   [craft\commerce\base\StatTrait](craft-commerce-base-stattrait.md)

Since

:   3.0



Repeat Customers Stat





[View source](https://github.com/craftcms/commerce/blob/master/src/stats/RepeatCustomers.php)


## Public Properties

| Property                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------
| [cache](craft-commerce-base-stattrait.md#cache "Defined by craft\commerce\base\StatTrait")                 | [boolean](http://php.net/language.types.boolean)
| [cacheDuration](craft-commerce-base-stattrait.md#cacheduration "Defined by craft\commerce\base\StatTrait") | [integer](http://php.net/language.types.integer) – How long to cache the data, in seconds.
| [dateRange](craft-commerce-base-stattrait.md#daterange "Defined by craft\commerce\base\StatTrait")         | [string](http://php.net/language.types.string)
| [weekStartDay](craft-commerce-base-stattrait.md#weekstartday "Defined by craft\commerce\base\StatTrait")   | [integer](http://php.net/language.types.integer)



## Protected Properties

| Property                                                  | Description
| --------------------------------------------------------- | ----------------------------------------------
| [_handle](craft-commerce-stats-repeatcustomers.md#handle) | [string](http://php.net/language.types.string)

### `_handle`



Type

:   [string](http://php.net/language.types.string)











[View source](https://github.com/craftcms/commerce/blob/master/src/stats/RepeatCustomers.php#L24)





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------
| [__construct()](craft-commerce-base-stat.md#method-construct "Defined by craft\commerce\base\Stat")                                         | Stat constructor.
| [get()](craft-commerce-base-stat.md#method-get "Defined by craft\commerce\base\Stat")                                                       |
| [getChartQueryOptionsByInterval()](craft-commerce-base-stat.md#method-getchartqueryoptionsbyinterval "Defined by craft\commerce\base\Stat") |
| [getData()](craft-commerce-stats-repeatcustomers.md#method-getdata)                                                                         |
| [getDateRangeInterval()](craft-commerce-base-stat.md#method-getdaterangeinterval "Defined by craft\commerce\base\Stat")                     |
| [getDateRangeWording()](craft-commerce-base-stat.md#method-getdaterangewording "Defined by craft\commerce\base\Stat")                       |
| [getEndDate()](craft-commerce-base-stat.md#method-getenddate "Defined by craft\commerce\base\Stat")                                         |
| [getHandle()](craft-commerce-base-stat.md#method-gethandle "Defined by craft\commerce\base\Stat")                                           |
| [getStartDate()](craft-commerce-base-stat.md#method-getstartdate "Defined by craft\commerce\base\Stat")                                     |
| [prepareData()](craft-commerce-base-stat.md#method-preparedata "Defined by craft\commerce\base\Stat")                                       |
| [setEndDate()](craft-commerce-base-stat.md#method-setenddate "Defined by craft\commerce\base\Stat")                                         |
| [setStartDate()](craft-commerce-base-stat.md#method-setstartdate "Defined by craft\commerce\base\Stat")                                     |

### `getData()`














[View source](https://github.com/craftcms/commerce/blob/master/src/stats/RepeatCustomers.php#L29-L49)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean)





## Protected Methods

| Method                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------- | ------------------------
| [_createChartQuery()](craft-commerce-base-stat.md#method-createchartquery "Defined by craft\commerce\base\Stat") |
| [_createStatQuery()](craft-commerce-base-stat.md#method-createstatquery "Defined by craft\commerce\base\Stat")   | Generate base stat query






