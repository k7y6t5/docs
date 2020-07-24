---
title: craft\commerce\services\LineItems
code:
  - php
  - twig
---

# LineItems

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\LineItems](craft-commerce-services-lineitems.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Line item service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php)


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
| [createLineItem()](craft-commerce-services-lineitems.md#method-createlineitem)                                                              | Create a line item.
| [deleteAllLineItemsByOrderId()](craft-commerce-services-lineitems.md#method-deletealllineitemsbyorderid)                                    | Deletes all line items associated with an order, per the order's ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllLineItemsByOrderId()](craft-commerce-services-lineitems.md#method-getalllineitemsbyorderid)                                          | Returns an order's line items, per the order's ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getLineItemById()](craft-commerce-services-lineitems.md#method-getlineitembyid)                                                            | Get a line item by its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [resolveLineItem()](craft-commerce-services-lineitems.md#method-resolvelineitem)                                                            | Takes an order ID, a purchasable ID, options, and resolves it to a line item.
| [saveLineItem()](craft-commerce-services-lineitems.md#method-savelineitem)                                                                  | Save a line item.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createLineItem()`





Create a line item.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L343-L372)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer)) – The order ID the line item is associated with
- `$purchasableId` ([integer](http://php.net/language.types.integer)) – The ID of the purchasable the line item represents
- `$options` ([array](http://php.net/language.types.array)) – Options to set on the line item
- `$qty` ([integer](http://php.net/language.types.integer)) – The quantity to set on the line item
- `$note` ([string](http://php.net/language.types.string)) – The note on the line item

#### Returns

[craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the purchasable ID is not valid


### `deleteAllLineItemsByOrderId()`





Deletes all line items associated with an order, per the order's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L380-L383)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer)) – The order's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether any line items were deleted



### `getAllLineItemsByOrderId()`





Returns an order's line items, per the order's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L152-L171)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer)) – The order's ID

#### Returns

[craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)[] – An array of all the line items for the matched order.



### `getLineItemById()`





Get a line item by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L316-L329)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The line item ID

#### Returns

[craft\commerce\models\LineItem](craft-commerce-models-lineitem.md), [null](http://php.net/language.types.null) – Line item or null, if not found.



### `resolveLineItem()`





Takes an order ID, a purchasable ID, options, and resolves it to a line item.

If a line item is found for that order ID with those exact options, that line item is
returned. Otherwise, a new line item is returned.


[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L184-L204)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer))
- `$purchasableId` ([integer](http://php.net/language.types.integer)) – The purchasable's ID
- `$options` ([array](http://php.net/language.types.array)) – Options for the line item

#### Returns

[craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)



### `saveLineItem()`





Save a line item.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItems.php#L214-L308)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)) – The line item to save.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the Line Item should be validated.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)








## Events

### EVENT_AFTER_SAVE_LINE_ITEM



Type

:   [craft\commerce\events\LineItemEvent](craft-commerce-events-lineitemevent.md)



The event that is triggeredd after a line item is saved.

```php
use craft\commerce\events\LineItemEvent;
use craft\commerce\services\LineItems;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    LineItems::class,
    LineItems::EVENT_AFTER_SAVE_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Reserve stock
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_LINE_ITEM



Type

:   [craft\commerce\events\LineItemEvent](craft-commerce-events-lineitemevent.md)



The event that is triggered before a line item is saved.

```php
use craft\commerce\events\LineItemEvent;
use craft\commerce\services\LineItems;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    LineItems::class,
    LineItems::EVENT_BEFORE_SAVE_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Notify a third party service about changes to an order
        // ...
    }
);
```



---



### EVENT_CREATE_LINE_ITEM



Type

:   [craft\commerce\events\LineItemEvent](craft-commerce-events-lineitemevent.md)



The event that is triggered after a line item has been created from a purchasable.

```php
use craft\commerce\events\LineItemEvent;
use craft\commerce\services\LineItems;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    LineItems::class,
    LineItems::EVENT_CREATE_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Call a third party service based on the line item options
        // ...
    }
);
```



---



### EVENT_POPULATE_LINE_ITEM



Type

:   [craft\commerce\events\LineItemEvent](craft-commerce-events-lineitemevent.md)



The event that is triggered as a line item is being populated from a purchasable.

```php
use craft\commerce\events\LineItemEvent;
use craft\commerce\services\LineItems;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    LineItems::class,
    LineItems::EVENT_POPULATE_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Modify the price of a line item
        // ...
    }
);
```



---




