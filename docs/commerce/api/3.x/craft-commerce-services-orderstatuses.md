---
title: craft\commerce\services\OrderStatuses
code:
  - php
  - twig
---

# OrderStatuses

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\OrderStatuses](craft-commerce-services-orderstatuses.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Order status service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allOrderStatuses](craft-commerce-services-orderstatuses.md#allorderstatuses)                                              | [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [defaultOrderStatus](craft-commerce-services-orderstatuses.md#defaultorderstatus)                                          | [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)
| [defaultOrderStatusId](craft-commerce-services-orderstatuses.md#defaultorderstatusid)                                      | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [orderCountByStatus](craft-commerce-services-orderstatuses.md#ordercountbystatus)                                          | [array](http://php.net/language.types.array)

### `allOrderStatuses`



Type

:   [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md)[]

Access

:   Read-only

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php)



### `defaultOrderStatus`



Type

:   [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php)



### `defaultOrderStatusId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php)



### `orderCountByStatus`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0.11







[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php)







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
| [deleteOrderStatusById()](craft-commerce-services-orderstatuses.md#method-deleteorderstatusbyid)                                            | Delete an order status by it's id.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllOrderStatuses()](craft-commerce-services-orderstatuses.md#method-getallorderstatuses)                                                | Returns all Order Statuses
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDefaultOrderStatus()](craft-commerce-services-orderstatuses.md#method-getdefaultorderstatus)                                            | Get default order status from the DB
| [getDefaultOrderStatusForOrder()](craft-commerce-services-orderstatuses.md#method-getdefaultorderstatusfororder)                            | Get the default order status for a particular order. Defaults to the CP configured default order status.
| [getDefaultOrderStatusId()](craft-commerce-services-orderstatuses.md#method-getdefaultorderstatusid)                                        | Get default order status ID from the DB
| [getOrderCountByStatus()](craft-commerce-services-orderstatuses.md#method-getordercountbystatus)                                            |
| [getOrderStatusByHandle()](craft-commerce-services-orderstatuses.md#method-getorderstatusbyhandle)                                          | Get order status by its handle.
| [getOrderStatusById()](craft-commerce-services-orderstatuses.md#method-getorderstatusbyid)                                                  | Get an order status by ID
| [handleChangedOrderStatus()](craft-commerce-services-orderstatuses.md#method-handlechangedorderstatus)                                      | Handle order status change.
| [handleDeletedOrderStatus()](craft-commerce-services-orderstatuses.md#method-handledeletedorderstatus)                                      | Handle order status being deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedEmail()](craft-commerce-services-orderstatuses.md#method-prunedeletedemail)                                                    | Prune a deleted email from order statuses.
| [reorderOrderStatuses()](craft-commerce-services-orderstatuses.md#method-reorderorderstatuses)                                              | Reorders the order statuses.
| [saveOrderStatus()](craft-commerce-services-orderstatuses.md#method-saveorderstatus)                                                        | Save the order status.
| [statusChangeHandler()](craft-commerce-services-orderstatuses.md#method-statuschangehandler)                                                | Handler for order status change event
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteOrderStatusById()`





Delete an order status by it's id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L357-L369)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `getAllOrderStatuses()`



Since

:   2.2



Returns all Order Statuses




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L94-L126)


#### Arguments

- `$withTrashed` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md)[]



### `getDefaultOrderStatus()`





Get default order status from the DB




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L155-L158)



#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)



### `getDefaultOrderStatusForOrder()`





Get the default order status for a particular order. Defaults to the CP configured default order status.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L179-L193)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)



### `getDefaultOrderStatusId()`





Get default order status ID from the DB




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L165-L170)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getOrderCountByStatus()`



Since

:   3.0.11








[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L199-L226)



#### Returns

[array](http://php.net/language.types.array)



### `getOrderStatusByHandle()`





Get order status by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L145-L148)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)



### `getOrderStatusById()`





Get an order status by ID




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L134-L137)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)



### `handleChangedOrderStatus()`





Handle order status change.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L298-L348)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `handleDeletedOrderStatus()`





Handle order status being deleted




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L379-L399)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `pruneDeletedEmail()`





Prune a deleted email from order statuses.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L406-L419)


#### Arguments

- `$event` ([craft\commerce\events\EmailEvent](craft-commerce-events-emailevent.md))




### `reorderOrderStatuses()`





Reorders the order statuses.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L454-L468)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)
- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)
- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)


### `saveOrderStatus()`





Save the order status.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L237-L289)


#### Arguments

- `$orderStatus` ([craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md))
- `$emailIds` ([array](http://php.net/language.types.array))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this order status before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `statusChangeHandler()`





Handler for order status change event




[View source](https://github.com/craftcms/commerce/blob/master/src/services/OrderStatuses.php#L427-L442)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$orderHistory` ([craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md))








## Constants

| Constant              | Description
| --------------------- | -----------
| `CONFIG_STATUSES_KEY` |


## Events

### EVENT_DEFAULT_ORDER_STATUS



Type

:   [craft\commerce\events\DefaultOrderStatusEvent](craft-commerce-events-defaultorderstatusevent.md)



The event that is triggered when a default order status is being fetched.

Set the event object’s `orderStatus` property to override the default status set in the control panel.

```php
use craft\commerce\events\DefaultOrderStatusEvent;
use craft\commerce\services\OrderStatuses;
use craft\commerce\models\OrderStatus;
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    OrderStatuses::class,
    OrderStatuses::EVENT_DEFAULT_ORDER_STATUS,
    function(DefaultOrderStatusEvent $event) {
        // @var OrderStatus $status
        $status = $event->orderStatus;
        // @var Order $order
        $order = $event->order;

        // Choose a more appropriate order status than the control panel default
        // ...
    }
);
```



---




