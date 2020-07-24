---
title: craft\commerce\services\OrderAdjustments
code:
  - php
  - twig
---

# OrderAdjustments

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\OrderAdjustments](craft-commerce-services-orderadjustments.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Order adjustment service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [adjusters](craft-commerce-services-orderadjustments.md#adjusters)                                                         | [string](http://php.net/language.types.string)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `adjusters`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php)







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
| [deleteAllOrderAdjustmentsByOrderId()](craft-commerce-services-orderadjustments.md#method-deleteallorderadjustmentsbyorderid)               | Delete all adjustments belonging to an order by its ID.
| [deleteOrderAdjustmentByAdjustmentId()](craft-commerce-services-orderadjustments.md#method-deleteorderadjustmentbyadjustmentid)             | Delete an order adjustment by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAdjusters()](craft-commerce-services-orderadjustments.md#method-getadjusters)                                                           | Get all order adjusters.
| [getAllOrderAdjustmentsByOrderId()](craft-commerce-services-orderadjustments.md#method-getallorderadjustmentsbyorderid)                     | Get all order adjustments by order's ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getOrderAdjustmentById()](craft-commerce-services-orderadjustments.md#method-getorderadjustmentbyid)                                       |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveOrderAdjustment()](craft-commerce-services-orderadjustments.md#method-saveorderadjustment)                                             | Save an order adjustment.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteAllOrderAdjustmentsByOrderId()`





Delete all adjustments belonging to an order by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L216-L219)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteOrderAdjustmentByAdjustmentId()`





Delete an order adjustment by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L227-L236)


#### Arguments

- `$adjustmentId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAdjusters()`





Get all order adjusters.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L78-L114)



#### Returns

[string](http://php.net/language.types.string)[]



### `getAllOrderAdjustmentsByOrderId()`





Get all order adjustments by order's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L142-L158)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]



### `getOrderAdjustmentById()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L120-L134)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md), [null](http://php.net/language.types.null)



### `saveOrderAdjustment()`





Save an order adjustment.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderAdjustments.php#L168-L207)


#### Arguments

- `$orderAdjustment` ([craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the Order Adjustment should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)








## Events

### EVENT_REGISTER_DISCOUNT_ADJUSTERS



Type

:   [craft\events\RegisterComponentTypesEvent](https://docs.craftcms.com/api/v3/craft-events-registercomponenttypesevent.html)

Since

:   3.1.9



The event that is triggered for registration of additional adjusters.



---



### EVENT_REGISTER_ORDER_ADJUSTERS



Type

:   [craft\events\RegisterComponentTypesEvent](https://docs.craftcms.com/api/v3/craft-events-registercomponenttypesevent.html)



The event that is triggered for registration of additional adjusters.

```php
use craft\events\RegisterComponentTypesEvent;
use craft\commerce\services\OrderAdjustments;
use yii\base\Event;

Event::on(
    OrderAdjustments::class,
    OrderAdjustments::EVENT_REGISTER_ORDER_ADJUSTERS,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyAdjuster::class;
    }
);
```



---




