---
title: craft\commerce\base\AdjusterInterface
code:
  - php
  - twig
---

# AdjusterInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\adjusters\Discount](craft-commerce-adjusters-discount.md), [craft\commerce\adjusters\Shipping](craft-commerce-adjusters-shipping.md), [craft\commerce\adjusters\Tax](craft-commerce-adjusters-tax.md)

Since

:   2.0



A method all adjusters must implement





[View source](https://github.com/craftcms/commerce/blob/master/src/base/AdjusterInterface.php)






## Public Methods

| Method                                                             | Description
| ------------------------------------------------------------------ | ---------------------------------------
| [adjust()](craft-commerce-base-adjusterinterface.md#method-adjust) | Returns adjustments to add to the order

### `adjust()`





Returns adjustments to add to the order




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AdjusterInterface.php#L27)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]









