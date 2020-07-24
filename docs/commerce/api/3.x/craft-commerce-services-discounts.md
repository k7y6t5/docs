---
title: craft\commerce\services\Discounts
code:
  - php
  - twig
---

# Discounts

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Discounts](craft-commerce-services-discounts.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0y



Discount service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allActiveDiscounts](craft-commerce-services-discounts.md#allactivediscounts)                                              | [array](http://php.net/language.types.array)
| [allDiscounts](craft-commerce-services-discounts.md#alldiscounts)                                                          | [craft\commerce\models\Discount](craft-commerce-models-discount.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allActiveDiscounts`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   2.2.14







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php)



### `allDiscounts`



Type

:   [craft\commerce\models\Discount](craft-commerce-models-discount.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [clearCustomerUsageHistoryById()](craft-commerce-services-discounts.md#method-clearcustomerusagehistorybyid)                                |
| [clearDiscountUsesById()](craft-commerce-services-discounts.md#method-cleardiscountusesbyid)                                                | Clear total discount uses
| [clearEmailUsageHistoryById()](craft-commerce-services-discounts.md#method-clearemailusagehistorybyid)                                      |
| [deleteDiscountById()](craft-commerce-services-discounts.md#method-deletediscountbyid)                                                      | Delete a discount by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllActiveDiscounts()](craft-commerce-services-discounts.md#method-getallactivediscounts)                                                | Get all currently active discounts
| [getAllDiscounts()](craft-commerce-services-discounts.md#method-getalldiscounts)                                                            | Get all discounts.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCustomerUsageStatsById()](craft-commerce-services-discounts.md#method-getcustomerusagestatsbyid)                                        | Customer usage stats for discount
| [getDiscountByCode()](craft-commerce-services-discounts.md#method-getdiscountbycode)                                                        | Returns an enabled discount by its code.
| [getDiscountById()](craft-commerce-services-discounts.md#method-getdiscountbyid)                                                            | Get a discount by its ID.
| [getDiscountsRelatedToPurchasable()](craft-commerce-services-discounts.md#method-getdiscountsrelatedtopurchasable)                          |
| [getEmailUsageStatsById()](craft-commerce-services-discounts.md#method-getemailusagestatsbyid)                                              | Email usage stats for discount
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [matchLineItem()](craft-commerce-services-discounts.md#method-matchlineitem)                                                                | Match a line item against a discount.
| [matchOrder()](craft-commerce-services-discounts.md#method-matchorder)                                                                      |
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [orderCompleteHandler()](craft-commerce-services-discounts.md#method-ordercompletehandler)                                                  | Updates discount uses counters.
| [orderCouponAvailable()](craft-commerce-services-discounts.md#method-ordercouponavailable)                                                  | Is discount coupon available to the order
| [populateDiscountRelations()](craft-commerce-services-discounts.md#method-populatediscountrelations)                                        | Populates a discount's relations.
| [reorderDiscounts()](craft-commerce-services-discounts.md#method-reorderdiscounts)                                                          | Reorder discounts by an array of ids.
| [saveDiscount()](craft-commerce-services-discounts.md#method-savediscount)                                                                  | Save a discount.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `clearCustomerUsageHistoryById()`



Since

:   3.0








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L761-L768)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `clearDiscountUsesById()`



Since

:   3.0



Clear total discount uses




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L791-L797)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `clearEmailUsageHistoryById()`



Since

:   3.0








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L775-L782)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `deleteDiscountById()`





Delete a discount by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L732-L754)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllActiveDiscounts()`



Since

:   2.2.14



Get all currently active discounts




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L268-L303)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [Exception](http://php.net/class.exception)


### `getAllDiscounts()`





Get all discounts.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L240-L258)



#### Returns

[craft\commerce\models\Discount](craft-commerce-models-discount.md)[]



### `getCustomerUsageStatsById()`





Customer usage stats for discount




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L839-L848)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array) – Return in the format ['uses' => int, 'customers' => int]



### `getDiscountByCode()`





Returns an enabled discount by its code.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L403-L414)


#### Arguments

- `$code` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\models\Discount](craft-commerce-models-discount.md), [null](http://php.net/language.types.null)



### `getDiscountById()`





Get a discount by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L230-L233)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\Discount](craft-commerce-models-discount.md), [null](http://php.net/language.types.null)



### `getDiscountsRelatedToPurchasable()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L421-L443)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))

#### Returns

[array](http://php.net/language.types.array)



### `getEmailUsageStatsById()`





Email usage stats for discount




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L822-L831)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array) – Return in the format ['uses' => int, 'emails' => int]



### `matchLineItem()`





Match a line item against a discount.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L453-L502)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))
- `$discount` ([craft\commerce\models\Discount](craft-commerce-models-discount.md))
- `$matchOrder` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `matchOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L509-L604)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$discount` ([craft\commerce\models\Discount](craft-commerce-models-discount.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `orderCompleteHandler()`





Updates discount uses counters.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L855-L932)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))




### `orderCouponAvailable()`





Is discount coupon available to the order




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L353-L395)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$explanation` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `populateDiscountRelations()`





Populates a discount's relations.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L310-L344)


#### Arguments

- `$discount` ([craft\commerce\models\Discount](craft-commerce-models-discount.md))




### `reorderDiscounts()`





Reorder discounts by an array of ids.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L805-L814)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `saveDiscount()`





Save a discount.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Discounts.php#L615-L724)


#### Arguments

- `$model` ([craft\commerce\models\Discount](craft-commerce-models-discount.md)) – The discount being saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this discount before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Exception](http://php.net/class.exception)








## Events

### EVENT_AFTER_DELETE_DISCOUNT



Type

:   [craft\commerce\events\DiscountEvent](craft-commerce-events-discountevent.md)



The event that is triggered after a discount is deleted.

```php
use craft\commerce\events\DiscountEvent;
use craft\commerce\services\Discounts;
use craft\commerce\models\Discount;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_AFTER_DELETE_DISCOUNT,
    function(DiscountEvent $event) {
        // @var Discount $discount
        $discount = $event->discount;

        // Remove this discount from a payment gateway
        // ...
    }
);
```



---



### EVENT_AFTER_SAVE_DISCOUNT



Type

:   [craft\commerce\events\DiscountEvent](craft-commerce-events-discountevent.md)



The event that is triggered after a discount is saved.

```php
use craft\commerce\events\DiscountEvent;
use craft\commerce\services\Discounts;
use craft\commerce\models\Discount;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_AFTER_SAVE_DISCOUNT,
    function(DiscountEvent $event) {
        // @var Discount $discount
        $discount = $event->discount;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Set this discount as default in an external CRM
        // ...
    }
);
```



---



### EVENT_BEFORE_MATCH_LINE_ITEM



Type

:   [craft\commerce\events\MatchLineItemEvent](craft-commerce-events-matchlineitemevent.md)



The event that is triggered when a line item is matched with a discount.

This event will be raised if all standard conditions are met.
You may set the `isValid` property to `false` on the event to prevent the matching of the discount to the line item.

```php
use craft\commerce\services\Discounts;
use craft\commerce\events\MatchLineItemEvent;
use craft\commerce\models\Discount;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_BEFORE_MATCH_LINE_ITEM,
    function(MatchLineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var Discount $discount
        $discount = $event->discount;

        // Check some business rules and prevent a match in special cases
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_DISCOUNT



Type

:   [craft\commerce\events\DiscountEvent](craft-commerce-events-discountevent.md)



The event that is triggered before a discount is saved.

```php
use craft\commerce\events\DiscountEvent;
use craft\commerce\services\Discounts;
use craft\commerce\models\Discount;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_BEFORE_SAVE_DISCOUNT,
    function(DiscountEvent $event) {
        // @var Discount $discount
        $discount = $event->discount;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Let an external CRM know about a client’s new discount
        // ...
    }
);
```



---



### EVENT_DISCOUNT_MATCHES_LINE_ITEM



Type

:   [craft\commerce\events\MatchLineItemEvent](craft-commerce-events-matchlineitemevent.md)



The event that is triggered when a line item is matched with a discount.

This event will be raised if all standard conditions are met.
You may set the `isValid` property to `false` on the event to prevent the matching of the discount to the line item.

```php
use craft\commerce\services\Discounts;
use craft\commerce\events\MatchLineItemEvent;
use craft\commerce\models\Discount;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_DISCOUNT_MATCHES_LINE_ITEM,
    function(MatchLineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var Discount $discount
        $discount = $event->discount;

        // Check some business rules and prevent a match in special cases
        // ...
    }
);
```



---



### EVENT_DISCOUNT_MATCHES_ORDER



Type

:   [craft\commerce\events\MatchOrderEvent](craft-commerce-events-matchorderevent.md)



The event that is triggered when an order is matched with a discount.

You may set the `isValid` property to `false` on the event to prevent the matching of the discount with the order.

```php
use craft\commerce\services\Discounts;
use craft\commerce\events\MatchOrderEvent;
use craft\commerce\models\Discount;
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    Discounts::class,
    Discounts::EVENT_DISCOUNT_MATCHES_ORDER,
    function(MatchLineOrder $event) {
        // @var Order $order
        $order = $event->order;
        // @var Discount $discount
        $discount = $event->discount;

        // Check some business rules and prevent a match in special cases
        // ... $event->isValid = false; // set to false if you want it to NOT match as it would.
    }
);
```



---




