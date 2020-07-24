---
title: craft\commerce\services\LineItemStatuses
code:
  - php
  - twig
---

# LineItemStatuses

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\LineItemStatuses](craft-commerce-services-lineitemstatuses.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Order status service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allLineItemStatuses](craft-commerce-services-lineitemstatuses.md#alllineitemstatuses)                                     | [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [defaultLineItemStatus](craft-commerce-services-lineitemstatuses.md#defaultlineitemstatus)                                 | [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)
| [defaultLineItemStatusId](craft-commerce-services-lineitemstatuses.md#defaultlineitemstatusid)                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

### `allLineItemStatuses`



Type

:   [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php)



### `defaultLineItemStatus`



Type

:   [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php)



### `defaultLineItemStatusId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php)







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
| [archiveLineItemStatusById()](craft-commerce-services-lineitemstatuses.md#method-archivelineitemstatusbyid)                                 | Archive an line item status by it's id.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllLineItemStatuses()](craft-commerce-services-lineitemstatuses.md#method-getalllineitemstatuses)                                       | Returns all Order Statuses
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDefaultLineItemStatus()](craft-commerce-services-lineitemstatuses.md#method-getdefaultlineitemstatus)                                   | Get default lineItem status from the DB
| [getDefaultLineItemStatusForLineItem()](craft-commerce-services-lineitemstatuses.md#method-getdefaultlineitemstatusforlineitem)             | Get the default lineItem status for a particular lineItem. Defaults to the CP configured default lineItem status.
| [getDefaultLineItemStatusId()](craft-commerce-services-lineitemstatuses.md#method-getdefaultlineitemstatusid)                               | Get default lineItem status ID from the DB
| [getLineItemStatusByHandle()](craft-commerce-services-lineitemstatuses.md#method-getlineitemstatusbyhandle)                                 | Get line item status by its handle.
| [getLineItemStatusById()](craft-commerce-services-lineitemstatuses.md#method-getlineitemstatusbyid)                                         | Get an line item status by ID
| [handleArchivedLineItemStatus()](craft-commerce-services-lineitemstatuses.md#method-handlearchivedlineitemstatus)                           | Handle line item status being archived
| [handleChangedLineItemStatus()](craft-commerce-services-lineitemstatuses.md#method-handlechangedlineitemstatus)                             | Handle line item status change.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderLineItemStatuses()](craft-commerce-services-lineitemstatuses.md#method-reorderlineitemstatuses)                                     | Reorders the line item statuses.
| [saveLineItemStatus()](craft-commerce-services-lineitemstatuses.md#method-savelineitemstatus)                                               | Save the line item status.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `archiveLineItemStatusById()`





Archive an line item status by it's id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L265-L273)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `getAllLineItemStatuses()`





Returns all Order Statuses




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L309-L324)



#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md)[]



### `getDefaultLineItemStatus()`





Get default lineItem status from the DB




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L132-L143)



#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)



### `getDefaultLineItemStatusForLineItem()`





Get the default lineItem status for a particular lineItem. Defaults to the CP configured default lineItem status.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L151-L162)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)



### `getDefaultLineItemStatusId()`





Get default lineItem status ID from the DB




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L116-L125)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getLineItemStatusByHandle()`





Get line item status by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L88-L109)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)



### `getLineItemStatusById()`





Get an line item status by ID




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L332-L353)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)



### `handleArchivedLineItemStatus()`





Handle line item status being archived




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L283-L302)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `handleChangedLineItemStatus()`





Handle line item status change.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L228-L256)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `reorderLineItemStatuses()`





Reorders the line item statuses.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L365-L379)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)
- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)
- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)


### `saveLineItemStatus()`





Save the line item status.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/LineItemStatuses.php#L173-L219)


#### Arguments

- `$lineItemStatus` ([craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this line item status before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)






## Constants

| Constant              | Description
| --------------------- | -----------
| `CONFIG_STATUSES_KEY` |


## Events

### EVENT_DEFAULT_LINE_ITEM_STATUS



Type

:   [craft\commerce\events\DefaultLineItemStatusEvent](craft-commerce-events-defaultlineitemstatusevent.md)



The event that is triggered when getting a default status for a line item.
You may set [craft\commerce\events\DefaultLineItemStatusEvent::$lineItemStatus](craft-commerce-events-defaultlineitemstatusevent.md#lineitemstatus) to a desired LineItemStatus to override the default status set in CP

Plugins can get notified when a default line item status is being fetched

```php
use craft\commerce\events\DefaultLineItemStatusEvent;
use craft\commerce\services\LineItemStatuses;
use yii\base\Event;

Event::on(LineItemStatuses::class, LineItemStatuses::EVENT_DEFAULT_LINE_ITEM_STATUS, function(DefaultLineItemStatusEvent $e) {
    // Do something - perhaps figure out a better default line item status than the one set in CP
});
```



---




