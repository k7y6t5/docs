---
title: craft\commerce\elements\traits\OrderValidatorsTrait
code:
  - php
  - twig
---

# OrderValidatorsTrait

Type

:   Trait

Namespace

:   craft\commerce\elements\traits

Implemented by

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md)









[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php)






## Public Methods

| Method                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------
| [validateAddress()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddress)                   | Validates addresses, and also adds prefixed validation errors to order
| [validateAddressCanBeUsed()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddresscanbeused) | Validates that an address belongs to the order‘s customer.
| [validateAddressReuse()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddressreuse)         | Validates that shipping address isn't being set to be the same as billing address, when billing address is set to be shipping address
| [validateCouponCode()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatecouponcode)             |
| [validateGatewayId()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validategatewayid)               |
| [validateLineItems()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatelineitems)               | Validates line items, and also adds prefixed validation errors to order
| [validatePaymentCurrency()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatepaymentcurrency)   |
| [validatePaymentSourceId()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatepaymentsourceid)   |

### `validateAddress()`





Validates addresses, and also adds prefixed validation errors to order




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L77-L85)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute being validated




### `validateAddressCanBeUsed()`





Validates that an address belongs to the order‘s customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L92-L128)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute being validated




### `validateAddressReuse()`





Validates that shipping address isn't being set to be the same as billing address, when billing address is set to be shipping address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L135-L140)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute being validated




### `validateCouponCode()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L162-L169)


#### Arguments

- `$attribute`




### `validateGatewayId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L31-L39)


#### Arguments

- `$attribute`
- `$params`
- `$validator` ([yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator))




### `validateLineItems()`





Validates line items, and also adds prefixed validation errors to order




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L147-L157)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute being validated




### `validatePaymentCurrency()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L62-L70)


#### Arguments

- `$attribute`
- `$params`
- `$validator` ([yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator))




### `validatePaymentSourceId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderValidatorsTrait.php#L46-L55)


#### Arguments

- `$attribute`
- `$params`
- `$validator` ([yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator))










