---
title: craft\commerce\services\Orders
code:
  - php
  - twig
---

# Orders

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Orders](craft-commerce-services-orders.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Orders service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php)


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
| [cartArray()](craft-commerce-services-orders.md#method-cartarray)                                                                           |
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getOrderById()](craft-commerce-services-orders.md#method-getorderbyid)                                                                     | Get an order by its ID.
| [getOrderByNumber()](craft-commerce-services-orders.md#method-getorderbynumber)                                                             | Get an order by its number.
| [getOrdersByCustomer()](craft-commerce-services-orders.md#method-getordersbycustomer)                                                       | Get all orders by their customer.
| [getOrdersByEmail()](craft-commerce-services-orders.md#method-getordersbyemail)                                                             | Get all orders by their email.
| [handleChangedFieldLayout()](craft-commerce-services-orders.md#method-handlechangedfieldlayout)                                             | Handle field layout change
| [handleDeletedFieldLayout()](craft-commerce-services-orders.md#method-handledeletedfieldlayout)                                             | Handle field layout being deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-commerce-services-orders.md#method-prunedeletedfield)                                                           | Prune a deleted field from order field layouts.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `cartArray()`

::: danger DEPRECATED
Deprecated since version 3.0: use `$order->toArray()` instead
:::









[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L174-L346)


#### Arguments

- `$cart` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[array](http://php.net/language.types.array)



### `getOrderById()`





Get an order by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L102-L113)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)



### `getOrderByNumber()`





Get an order by its number.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L121-L127)


#### Arguments

- `$number` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)



### `getOrdersByCustomer()`





Get all orders by their customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L135-L151)


#### Arguments

- `$customer` ([integer](http://php.net/language.types.integer), [craft\commerce\models\Customer](craft-commerce-models-customer.md))

#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md)[], [null](http://php.net/language.types.null)



### `getOrdersByEmail()`





Get all orders by their email.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L159-L167)


#### Arguments

- `$email` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md)[], [null](http://php.net/language.types.null)



### `handleChangedFieldLayout()`





Handle field layout change




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L38-L57)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))




### `handleDeletedFieldLayout()`





Handle field layout being deleted




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L91-L94)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))




### `pruneDeletedField()`





Prune a deleted field from order field layouts.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Orders.php#L65-L84)


#### Arguments

- `$event` ([craft\events\FieldEvent](https://docs.craftcms.com/api/v3/craft-events-fieldevent.html))








## Constants

| Constant                 | Description
| ------------------------ | -----------
| `CONFIG_FIELDLAYOUT_KEY` |



