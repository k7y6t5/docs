---
title: craft\commerce\base\StatInterface
code:
  - php
  - twig
---

# StatInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\base\Stat](craft-commerce-base-stat.md), [craft\commerce\stats\AverageOrderTotal](craft-commerce-stats-averageordertotal.md), [craft\commerce\stats\NewCustomers](craft-commerce-stats-newcustomers.md), [craft\commerce\stats\RepeatCustomers](craft-commerce-stats-repeatcustomers.md), [craft\commerce\stats\TopCustomers](craft-commerce-stats-topcustomers.md), [craft\commerce\stats\TopProductTypes](craft-commerce-stats-topproducttypes.md), [craft\commerce\stats\TopProducts](craft-commerce-stats-topproducts.md), [craft\commerce\stats\TopPurchasables](craft-commerce-stats-toppurchasables.md), [craft\commerce\stats\TotalOrders](craft-commerce-stats-totalorders.md), [craft\commerce\stats\TotalOrdersByCountry](craft-commerce-stats-totalordersbycountry.md), [craft\commerce\stats\TotalRevenue](craft-commerce-stats-totalrevenue.md)

Since

:   3.0



Stat Interface





[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php)






## Public Methods

| Method                                                                                   | Description
| ---------------------------------------------------------------------------------------- | -----------
| [get()](craft-commerce-base-statinterface.md#method-get)                                 |
| [getData()](craft-commerce-base-statinterface.md#method-getdata)                         |
| [getDateRangeWording()](craft-commerce-base-statinterface.md#method-getdaterangewording) |
| [getEndDate()](craft-commerce-base-statinterface.md#method-getenddate)                   |
| [getHandle()](craft-commerce-base-statinterface.md#method-gethandle)                     |
| [getStartDate()](craft-commerce-base-statinterface.md#method-getstartdate)               |
| [prepareData()](craft-commerce-base-statinterface.md#method-preparedata)                 |
| [setEndDate()](craft-commerce-base-statinterface.md#method-setenddate)                   |
| [setStartDate()](craft-commerce-base-statinterface.md#method-setstartdate)               |

### `get()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L69)



#### Returns

`mixed`



### `getData()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L74)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean)



### `getDateRangeWording()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L107)



#### Returns

[string](http://php.net/language.types.string)



### `getEndDate()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L84)



#### Returns

`mixed`



### `getHandle()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L64)



#### Returns

[string](http://php.net/language.types.string)



### `getStartDate()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L79)



#### Returns

`mixed`



### `prepareData()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L102)


#### Arguments

- `$data`

#### Returns

`mixed`



### `setEndDate()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L96)


#### Arguments

- `$date` ([null](http://php.net/language.types.null), [DateTime](http://php.net/class.datetime))

#### Returns

`mixed`



### `setStartDate()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/StatInterface.php#L90)


#### Arguments

- `$date` ([null](http://php.net/language.types.null), [DateTime](http://php.net/class.datetime))

#### Returns

`mixed`









