---
title: craft\commerce\helpers\Currency
code:
  - php
  - twig
---

# Currency

Type

:   Class

Namespace

:   craft\commerce\helpers

Inherits

:   [craft\commerce\helpers\Currency](craft-commerce-helpers-currency.md)

Since

:   2.0



Class Currency





[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Currency.php)






## Public Methods

| Method                                                                           | Description
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------
| [defaultDecimals()](craft-commerce-helpers-currency.md#method-defaultdecimals)   |
| [formatAsCurrency()](craft-commerce-helpers-currency.md#method-formatascurrency) | Formats and optionally converts a currency amount into the supplied valid payment currency as per the rate setup in payment currencies.
| [round()](craft-commerce-helpers-currency.md#method-round)                       | Rounds the amount as per the currency minor unit information. Not passing a currency model results in rounding in default currency.

### `defaultDecimals()`










[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Currency.php#L45-L52)



#### Returns

[integer](http://php.net/language.types.integer)



### `formatAsCurrency()`





Formats and optionally converts a currency amount into the supplied valid payment currency as per the rate setup in payment currencies.




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Currency.php#L64-L95)


#### Arguments

- `$amount`
- `$currency`
- `$convert` ([boolean](http://php.net/language.types.boolean))
- `$format` ([boolean](http://php.net/language.types.boolean))
- `$stripZeros` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string)



### `round()`





Rounds the amount as per the currency minor unit information. Not passing
a currency model results in rounding in default currency.




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Currency.php#L30-L40)


#### Arguments

- `$amount` ([float](http://php.net/language.types.float))
- `$currency` ([craft\commerce\models\PaymentCurrency](craft-commerce-models-paymentcurrency.md), [null](http://php.net/language.types.null))

#### Returns

[float](http://php.net/language.types.float)










