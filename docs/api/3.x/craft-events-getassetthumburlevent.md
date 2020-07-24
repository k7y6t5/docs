---
title: craft\events\GetAssetThumbUrlEvent
code:
  - php
  - twig
---

# GetAssetThumbUrlEvent

Type

:   Class

Namespace

:   craft\events

Inherits

:   [craft\events\GetAssetThumbUrlEvent](craft-events-getassetthumburlevent.md) &raquo;
[yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Get Asset thumb url event class





[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php)


## Public Properties

| Property                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [asset](craft-events-getassetthumburlevent.md#asset)                                                           | [craft\elements\Asset](craft-elements-asset.md) – The Asset which the thumbnail should be for.
| [data](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$data-detail "Defined by yii\base\Event")       | `mixed` – The data that is passed to [yii\base\Component::on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail) when attaching an event handler.
| [generate](craft-events-getassetthumburlevent.md#generate)                                                     | [boolean](http://php.net/language.types.boolean) – Whether the thumbnail should be generated if it doesn't exist yet.
| [handled](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$handled-detail "Defined by yii\base\Event") | [boolean](http://php.net/language.types.boolean) – Whether the event is handled.
| [height](craft-events-getassetthumburlevent.md#height)                                                         | [integer](http://php.net/language.types.integer) – Requested thumbnail height
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$name-detail "Defined by yii\base\Event")       | [string](http://php.net/language.types.string) – The event name.
| [sender](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$sender-detail "Defined by yii\base\Event")   | [object](http://php.net/language.types.object) – The sender of this event.
| [size](craft-events-getassetthumburlevent.md#size)                                                             | [integer](http://php.net/language.types.integer) – Requested thumbnail size (width and height)
| [url](craft-events-getassetthumburlevent.md#url)                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Url to requested Asset that should be used instead.
| [width](craft-events-getassetthumburlevent.md#width)                                                           | [integer](http://php.net/language.types.integer) – Requested thumbnail width

### `asset`



Type

:   [craft\elements\Asset](craft-elements-asset.md)



The Asset which the thumbnail should be for.



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L25)



### `generate`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the thumbnail should be generated if it doesn't exist yet.



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L46)



### `height`



Type

:   [integer](http://php.net/language.types.integer)



Requested thumbnail height



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L35)



### `size`

::: danger DEPRECATED
Deprecated in 3.0.0-RC7. Use [width](craft-events-getassetthumburlevent.md#width) and [height](craft-events-getassetthumburlevent.md#height) instead
:::


Type

:   [integer](http://php.net/language.types.integer)



Requested thumbnail size (width and height)



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L41)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Url to requested Asset that should be used instead.



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L51)



### `width`



Type

:   [integer](http://php.net/language.types.integer)



Requested thumbnail width



[View source](https://github.com/craftcms/cms/blob/master/src/events/GetAssetThumbUrlEvent.php#L30)







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








