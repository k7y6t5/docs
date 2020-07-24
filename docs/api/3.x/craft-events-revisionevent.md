---
title: craft\events\RevisionEvent
code:
  - php
  - twig
---

# RevisionEvent

Type

:   Class

Namespace

:   craft\events

Inherits

:   [craft\events\RevisionEvent](craft-events-revisionevent.md) &raquo;
[yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



Revision event class.





[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php)


## Public Properties

| Property                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [creatorId](craft-events-revisionevent.md#creatorid)                                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The creator ID
| [data](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$data-detail "Defined by yii\base\Event")       | `mixed` – The data that is passed to [yii\base\Component::on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail) when attaching an event handler.
| [handled](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$handled-detail "Defined by yii\base\Event") | [boolean](http://php.net/language.types.boolean) – Whether the event is handled.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$name-detail "Defined by yii\base\Event")       | [string](http://php.net/language.types.string) – The event name.
| [revision](craft-events-revisionevent.md#revision)                                                             | [craft\base\ElementInterface](craft-base-elementinterface.md), [craft\behaviors\RevisionBehavior](craft-behaviors-revisionbehavior.md), [null](http://php.net/language.types.null) – The revision associated with the event (if it exists yet)
| [revisionNotes](craft-events-revisionevent.md#revisionnotes)                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The revision notes
| [revisionNum](craft-events-revisionevent.md#revisionnum)                                                       | [integer](http://php.net/language.types.integer) – The revision number
| [sender](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$sender-detail "Defined by yii\base\Event")   | [object](http://php.net/language.types.object) – The sender of this event.
| [source](craft-events-revisionevent.md#source)                                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md) – The source element

### `creatorId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The creator ID



[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php#L30)



### `revision`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [craft\behaviors\RevisionBehavior](craft-behaviors-revisionbehavior.md), [null](http://php.net/language.types.null)



The revision associated with the event (if it exists yet)



[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php#L45)



### `revisionNotes`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The revision notes



[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php#L40)



### `revisionNum`



Type

:   [integer](http://php.net/language.types.integer)



The revision number



[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php#L35)



### `source`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)



The source element



[View source](https://github.com/craftcms/cms/blob/master/src/events/RevisionEvent.php#L25)







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








