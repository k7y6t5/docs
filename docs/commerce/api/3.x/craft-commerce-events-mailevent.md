---
title: craft\commerce\events\MailEvent
code:
  - php
  - twig
---

# MailEvent

Type

:   Class

Namespace

:   craft\commerce\events

Inherits

:   [craft\commerce\events\MailEvent](craft-commerce-events-mailevent.md) &raquo;
[craft\events\CancelableEvent](https://docs.craftcms.com/api/v3/craft-events-cancelableevent.html) &raquo;
[yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Class MailEvent





[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php)


## Public Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [commerceEmail](craft-commerce-events-mailevent.md#commerceemail)                                                               | [craft\commerce\models\Email](craft-commerce-models-email.md) – Commerce email object
| [craftEmail](craft-commerce-events-mailevent.md#craftemail)                                                                     | [craft\mail\Message](https://docs.craftcms.com/api/v3/craft-mail-message.html) – Craft email object
| [data](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$data-detail "Defined by yii\base\Event")                        | `mixed` – The data that is passed to [yii\base\Component::on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail) when attaching an event handler.
| [handled](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$handled-detail "Defined by yii\base\Event")                  | [boolean](http://php.net/language.types.boolean) – Whether the event is handled.
| [isValid](https://docs.craftcms.com/api/v3/craft-events-cancelableevent.html#isvalid "Defined by craft\events\CancelableEvent") | [boolean](http://php.net/language.types.boolean) – Whether to continue performing the action that called this event
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$name-detail "Defined by yii\base\Event")                        | [string](http://php.net/language.types.string) – The event name.
| [order](craft-commerce-events-mailevent.md#order)                                                                               | [craft\commerce\elements\Order](craft-commerce-elements-order.md) – Commerce order
| [orderData](craft-commerce-events-mailevent.md#orderdata)                                                                       | [array](http://php.net/language.types.array) – Order data at the time the email sends.
| [orderHistory](craft-commerce-events-mailevent.md#orderhistory)                                                                 | [craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md) – The order history
| [sender](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$sender-detail "Defined by yii\base\Event")                    | [object](http://php.net/language.types.object) – The sender of this event.

### `commerceEmail`



Type

:   [craft\commerce\models\Email](craft-commerce-models-email.md)



Commerce email object



[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php#L32)



### `craftEmail`



Type

:   [craft\mail\Message](https://docs.craftcms.com/api/v3/craft-mail-message.html)



Craft email object



[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php#L27)



### `order`



Type

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md)



Commerce order



[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php#L37)



### `orderData`



Type

:   [array](http://php.net/language.types.array)



Order data at the time the email sends.



[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php#L47)



### `orderHistory`



Type

:   [craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md)



The order history



[View source](https://github.com/craftcms/commerce/blob/master/src/events/MailEvent.php#L42)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [hasHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-event#hasHandlers()-detail "Defined by yii\base\Event")                 | Returns a value indicating whether there is any handler attached to the specified class-level event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-event#off()-detail "Defined by yii\base\Event")                                 | Detaches an event handler from a class-level event.
| [offAll()](https://www.yiiframework.com/doc/api/2.0/yii-base-event#offAll()-detail "Defined by yii\base\Event")                           | Detaches all registered class-level event handlers.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-event#on()-detail "Defined by yii\base\Event")                                   | Attaches an event handler to a class-level event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-event#trigger()-detail "Defined by yii\base\Event")                         | Triggers a class-level event.








