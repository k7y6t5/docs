---
title: craft\commerce\base\ShippingMethodInterface
code:
  - php
  - twig
---

# ShippingMethodInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\base\ShippingMethod](craft-commerce-base-shippingmethod.md), [craft\commerce\models\ShippingMethod](craft-commerce-models-shippingmethod.md), [craft\commerce\models\ShippingMethodOption](craft-commerce-models-shippingmethodoption.md)

Since

:   2.0



Interface ShippingMethod





[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php)






## Public Methods

| Method                                                                                                     | Description
| ---------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------
| [getCpEditUrl()](craft-commerce-base-shippingmethodinterface.md#method-getcpediturl)                       | Returns the control panel URL to manage this method and its rules.
| [getHandle()](craft-commerce-base-shippingmethodinterface.md#method-gethandle)                             | Returns the unique handle of this Shipping Method.
| [getId()](craft-commerce-base-shippingmethodinterface.md#method-getid)                                     | Returns the ID of this Shipping Method, if it is managed by Craft Commerce.
| [getIsEnabled()](craft-commerce-base-shippingmethodinterface.md#method-getisenabled)                       | Returns whether this shipping method is enabled for listing and selection by customers.
| [getMatchingShippingRule()](craft-commerce-base-shippingmethodinterface.md#method-getmatchingshippingrule) | The first matching shipping rule for this shipping method
| [getName()](craft-commerce-base-shippingmethodinterface.md#method-getname)                                 | Returns the name of this Shipping Method as displayed to the customer and in the control panel.
| [getPriceForOrder()](craft-commerce-base-shippingmethodinterface.md#method-getpricefororder)               |
| [getShippingRules()](craft-commerce-base-shippingmethodinterface.md#method-getshippingrules)               | Returns an array of rules that meet the `ShippingRules` interface.
| [getType()](craft-commerce-base-shippingmethodinterface.md#method-gettype)                                 | Returns the type of Shipping Method. This might be the name of the plugin or provider.
| [matchOrder()](craft-commerce-base-shippingmethodinterface.md#method-matchorder)                           | Is this shipping method available to the order?

### `getCpEditUrl()`





Returns the control panel URL to manage this method and its rules.

An empty string will result in no link.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L55)



#### Returns

[string](http://php.net/language.types.string)



### `getHandle()`





Returns the unique handle of this Shipping Method.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L47)



#### Returns

[string](http://php.net/language.types.string)



### `getId()`





Returns the ID of this Shipping Method, if it is managed by Craft Commerce.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L33)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The shipping method ID, or null if it is not managed by Craft Commerce



### `getIsEnabled()`





Returns whether this shipping method is enabled for listing and selection by customers.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L69)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getMatchingShippingRule()`





The first matching shipping rule for this shipping method




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L83)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[null](http://php.net/language.types.null), [craft\commerce\base\ShippingRuleInterface](craft-commerce-base-shippingruleinterface.md)



### `getName()`





Returns the name of this Shipping Method as displayed to the customer and in the control panel.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L40)



#### Returns

[string](http://php.net/language.types.string)



### `getPriceForOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L75)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[float](http://php.net/language.types.float)



### `getShippingRules()`





Returns an array of rules that meet the `ShippingRules` interface.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L62)



#### Returns

[craft\commerce\base\ShippingRuleInterface](craft-commerce-base-shippingruleinterface.md)[] – The array of ShippingRules



### `getType()`





Returns the type of Shipping Method. This might be the name of the plugin or provider.

The core shipping methods have type: `Custom`. This is shown in the control panel only.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L26)



#### Returns

[string](http://php.net/language.types.string)



### `matchOrder()`





Is this shipping method available to the order?




[View source](https://github.com/craftcms/commerce/blob/master/src/base/ShippingMethodInterface.php#L91)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[boolean](http://php.net/language.types.boolean)









