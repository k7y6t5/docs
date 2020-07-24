---
title: craft\commerce\base\ShippingRuleInterface
code:
  - php
  - twig
---

# ShippingRuleInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\models\ShippingRule](craft-commerce-models-shippingrule.md)

Since

:   2.0



Interface ShippingRule





[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php)






## Public Methods

| Method                                                                                       | Description
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------
| [getBaseRate()](craft-commerce-base-shippingruleinterface.md#method-getbaserate)             | Returns a base shipping cost. This is added at the order level.
| [getDescription()](craft-commerce-base-shippingruleinterface.md#method-getdescription)       | Returns a description of the rates applied by this rule; Zero will not make any changes.
| [getIsEnabled()](craft-commerce-base-shippingruleinterface.md#method-getisenabled)           | Returns whether this shipping rule is enabled for listing and selection.
| [getMaxRate()](craft-commerce-base-shippingruleinterface.md#method-getmaxrate)               | Returns a max cost this rule should ever apply.
| [getMinRate()](craft-commerce-base-shippingruleinterface.md#method-getminrate)               | Returns a min cost this rule should have applied.
| [getOptions()](craft-commerce-base-shippingruleinterface.md#method-getoptions)               | Returns this data as json on the order's shipping adjustment.
| [getPerItemRate()](craft-commerce-base-shippingruleinterface.md#method-getperitemrate)       | Returns the flat rate that is multiplied per qty.
| [getPercentageRate()](craft-commerce-base-shippingruleinterface.md#method-getpercentagerate) | Returns the percentage rate that is multiplied per line item subtotal.
| [getWeightRate()](craft-commerce-base-shippingruleinterface.md#method-getweightrate)         | Returns the rate that is multiplied by the line item's weight.
| [matchOrder()](craft-commerce-base-shippingruleinterface.md#method-matchorder)               | Returns whether this rule a match on the order. If false is returned, the shipping engine tries the next rule.

### `getBaseRate()`





Returns a base shipping cost. This is added at the order level.

Zero will not make any changes.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L75)



#### Returns

[float](http://php.net/language.types.float)



### `getDescription()`





Returns a description of the rates applied by this rule;
Zero will not make any changes.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L101)



#### Returns

[string](http://php.net/language.types.string)



### `getIsEnabled()`





Returns whether this shipping rule is enabled for listing and selection.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L33)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getMaxRate()`





Returns a max cost this rule should ever apply.

If the total of your rates as applied to the order are greater than this, an order level adjustment is made to reduce the shipping amount on the order.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L83)



#### Returns

[float](http://php.net/language.types.float)



### `getMinRate()`





Returns a min cost this rule should have applied.

If the total of your rates as applied to the order are less than this, the baseShippingCost
on the order is modified to meet this min rate.
Zero will not make any changes.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L93)



#### Returns

[float](http://php.net/language.types.float)



### `getOptions()`





Returns this data as json on the order's shipping adjustment.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L40)



#### Returns

`mixed`



### `getPerItemRate()`





Returns the flat rate that is multiplied per qty.

Zero will not make any changes.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L58)


#### Arguments

- `$shippingCategory` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The shipping category for the rate requested. A null category should use the default shipping category set up in Craft Commerce.

#### Returns

[float](http://php.net/language.types.float)



### `getPercentageRate()`





Returns the percentage rate that is multiplied per line item subtotal.

Zero will not make any changes.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L49)


#### Arguments

- `$shippingCategory` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The shipping category for the rate requested. A null category should use the default shipping category set up in Craft Commerce.

#### Returns

[float](http://php.net/language.types.float)



### `getWeightRate()`





Returns the rate that is multiplied by the line item's weight.

Zero will not make any changes.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L67)


#### Arguments

- `$shippingCategory` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The shipping category for the rate requested. A null category should use the default shipping category set up in Craft Commerce.

#### Returns

[float](http://php.net/language.types.float)



### `matchOrder()`





Returns whether this rule a match on the order. If false is returned, the shipping engine tries the next rule.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingRuleInterface.php#L26)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[boolean](http://php.net/language.types.boolean)









