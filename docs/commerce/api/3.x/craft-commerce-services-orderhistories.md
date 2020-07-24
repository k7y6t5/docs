---
title: craft\commerce\services\OrderHistories
code:
  - php
  - twig
---

# OrderHistories

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\OrderHistories](craft-commerce-services-orderhistories.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Order history service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [createOrderHistoryFromOrder()](craft-commerce-services-orderhistories.md#method-createorderhistoryfromorder)                               | Create an order history from an order.
| [deleteOrderHistoryById()](craft-commerce-services-orderhistories.md#method-deleteorderhistorybyid)                                         | Delete an order history by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllOrderHistoriesByOrderId()](craft-commerce-services-orderhistories.md#method-getallorderhistoriesbyorderid)                           | Get all order histories by an order ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getOrderHistoryById()](craft-commerce-services-orderhistories.md#method-getorderhistorybyid)                                               | Get order history by its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveOrderHistory()](craft-commerce-services-orderhistories.md#method-saveorderhistory)                                                     | Save an order history.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createOrderHistoryFromOrder()`





Create an order history from an order.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php#L103-L127)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$oldStatusId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteOrderHistoryById()`





Delete an order history by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php#L178-L187)


#### Arguments

- `$id`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllOrderHistoriesByOrderId()`





Get all order histories by an order ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php#L80-L94)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – OrderId

#### Returns

[craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md)[]



### `getOrderHistoryById()`





Get order history by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php#L65-L72)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md), [null](http://php.net/language.types.null)



### `saveOrderHistory()`





Save an order history.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderHistories.php#L137-L170)


#### Arguments

- `$model` ([craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the Order Adjustment should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)








## Events

### EVENT_ORDER_STATUS_CHANGE



Type

:   [craft\commerce\events\OrderStatusEvent](craft-commerce-events-orderstatusevent.md)



The event that is triggered when an order status is changed.

Plugins can get notified when an order status is changed

```php
use craft\commerce\events\OrderStatusEvent;
use craft\commerce\services\OrderHistories;
use craft\commerce\models\OrderHistory;
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    OrderHistories::class,
    OrderHistories::EVENT_ORDER_STATUS_CHANGE,
    function(OrderStatusEvent $event) {
        // @var OrderHistory $orderHistory
        $orderHistory = $event->orderHistory;
        // @var Order $order
        $order = $event->order;
        
        // Let the delivery department know the order’s ready to be delivered
        // ...
    }
);
```



---




