---
title: craft\commerce\base\PurchasableInterface
code:
  - php
  - twig
---

# PurchasableInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\base\Purchasable](craft-commerce-base-purchasable.md), [craft\commerce\elements\Donation](craft-commerce-elements-donation.md), [craft\commerce\elements\Variant](craft-commerce-elements-variant.md), [craft\commerce\test\mockclasses\Purchasable](craft-commerce-test-mockclasses-purchasable.md)

Since

:   2.0



Interface Purchasable





[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php)






## Public Methods

| Method                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterOrderComplete()](craft-commerce-base-purchasableinterface.md#method-afterordercomplete)                 | Runs any logic needed for this purchasable after it was on an order that was just completed (not when an order was paid, although paying an order will complete it).
| [getDescription()](craft-commerce-base-purchasableinterface.md#method-getdescription)                         | Returns your element's title or any additional descriptive information.
| [getId()](craft-commerce-base-purchasableinterface.md#method-getid)                                           | Returns the element’s ID.
| [getIsAvailable()](craft-commerce-base-purchasableinterface.md#method-getisavailable)                         | Returns whether the purchasable is currently available for purchase.
| [getIsPromotable()](craft-commerce-base-purchasableinterface.md#method-getispromotable)                       | Returns whether this purchasable can be subject to discounts or sales.
| [getIsShippable()](craft-commerce-base-purchasableinterface.md#method-getisshippable)                         | Returns whether this purchasable can be shipped and whether it is counted in shipping calculations.
| [getIsTaxable()](craft-commerce-base-purchasableinterface.md#method-getistaxable)                             | Returns whether this purchasable is exempt from taxes.
| [getLineItemRules()](craft-commerce-base-purchasableinterface.md#method-getlineitemrules)                     | Returns any validation rules this purchasable required the line item to have.
| [getPrice()](craft-commerce-base-purchasableinterface.md#method-getprice)                                     | Returns the base price the item will be added to the line item with.
| [getPromotionRelationSource()](craft-commerce-base-purchasableinterface.md#method-getpromotionrelationsource) | Returns the source param used for knowing if a promotion category is related to this purchasable.
| [getSalePrice()](craft-commerce-base-purchasableinterface.md#method-getsaleprice)                             | Returns the base price the item will be added to the line item with.
| [getShippingCategoryId()](craft-commerce-base-purchasableinterface.md#method-getshippingcategoryid)           | Returns the purchasable's shipping category ID.
| [getSku()](craft-commerce-base-purchasableinterface.md#method-getsku)                                         | Returns a unique code. Unique as per the commerce_purchasables table.
| [getSnapshot()](craft-commerce-base-purchasableinterface.md#method-getsnapshot)                               | Returns an array of data that is serializable to json for storing a line item at time of adding to the cart or order.
| [getTaxCategoryId()](craft-commerce-base-purchasableinterface.md#method-gettaxcategoryid)                     | Returns the purchasable's tax category ID.
| [hasFreeShipping()](craft-commerce-base-purchasableinterface.md#method-hasfreeshipping)                       | Returns whether this purchasable has free shipping.
| [populateLineItem()](craft-commerce-base-purchasableinterface.md#method-populatelineitem)                     | Populates the line item when this purchasable is found on it. Called when Purchasable is added to the cart and when the cart recalculates.

### `afterOrderComplete()`





Runs any logic needed for this purchasable after it was on an order that was just completed (not when an order was paid, although paying an order will complete it).

This is called for each line item the purchasable was contained within.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L113)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

`void`



### `getDescription()`





Returns your element's title or any additional descriptive information.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L55)



#### Returns

[string](http://php.net/language.types.string)



### `getId()`





Returns the element’s ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L26)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getIsAvailable()`





Returns whether the purchasable is currently available for purchase.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L76)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPromotable()`





Returns whether this purchasable can be subject to discounts or sales.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L141)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsShippable()`





Returns whether this purchasable can be shipped and whether it is counted in shipping calculations.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L127)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsTaxable()`





Returns whether this purchasable is exempt from taxes.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L134)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLineItemRules()`





Returns any validation rules this purchasable required the line item to have.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L102)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

[array](http://php.net/language.types.array)



### `getPrice()`





Returns the base price the item will be added to the line item with.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L33)



#### Returns

[float](http://php.net/language.types.float) – Decimal(14,4)



### `getPromotionRelationSource()`





Returns the source param used for knowing if a promotion category is related to this purchasable.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L148)



#### Returns

`mixed`



### `getSalePrice()`





Returns the base price the item will be added to the line item with.

It provides opportunity to populate the salePrice if sales have not already been applied.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L41)



#### Returns

[float](http://php.net/language.types.float) – Decimal(14,4)



### `getShippingCategoryId()`





Returns the purchasable's shipping category ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L69)



#### Returns

[integer](http://php.net/language.types.integer)



### `getSku()`





Returns a unique code. Unique as per the commerce_purchasables table.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L48)



#### Returns

[string](http://php.net/language.types.string)



### `getSnapshot()`





Returns an array of data that is serializable to json for storing a line
item at time of adding to the cart or order.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L94)



#### Returns

[array](http://php.net/language.types.array)



### `getTaxCategoryId()`





Returns the purchasable's tax category ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L62)



#### Returns

[integer](http://php.net/language.types.integer)



### `hasFreeShipping()`





Returns whether this purchasable has free shipping.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L120)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `populateLineItem()`





Populates the line item when this purchasable is found on it. Called when
Purchasable is added to the cart and when the cart recalculates.

This is your chance to modify the weight, height, width, length, price
and saleAmount. This is called before any LineItems::EVENT_POPULATE_LINE_ITEM event listeners.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/PurchasableInterface.php#L86)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))










