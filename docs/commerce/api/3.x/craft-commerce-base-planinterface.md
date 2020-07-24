---
title: craft\commerce\base\PlanInterface
code:
  - php
  - twig
---

# PlanInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\base\Plan](craft-commerce-base-plan.md), [craft\commerce\models\subscriptions\DummyPlan](craft-commerce-models-subscriptions-dummyplan.md)

Since

:   2.0



PlanInterface defines the common interface to be implemented by plan classes.





[View source](https://github.com/craftcms/commerce/blob/master/src/base/PlanInterface.php)






## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------
| [canSwitchFrom()](craft-commerce-base-planinterface.md#method-canswitchfrom) | Returns whether it's possible to switch to this plan from a different plan.

### `canSwitchFrom()`





Returns whether it's possible to switch to this plan from a different plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/PlanInterface.php#L25)


#### Arguments

- `$currentPlant` ([craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)









