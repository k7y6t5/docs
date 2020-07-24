---
title: craft\events\DefineEagerLoadingMapEvent
code:
  - php
  - twig
---

# DefineEagerLoadingMapEvent

Type

:   Class

Namespace

:   craft\events

Inherits

:   [craft\events\DefineEagerLoadingMapEvent](craft-events-defineeagerloadingmapevent.md) &raquo;
[yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.1.0



DefineEagerLoadingMapEvent class.





[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php)


## Public Properties

| Property                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [criteria](craft-events-defineeagerloadingmapevent.md#criteria)                                                | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.
| [data](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$data-detail "Defined by yii\base\Event")       | `mixed` – The data that is passed to [yii\base\Component::on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail) when attaching an event handler.
| [elementType](craft-events-defineeagerloadingmapevent.md#elementtype)                                          | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element type class to eager-load.
| [handle](craft-events-defineeagerloadingmapevent.md#handle)                                                    | [string](http://php.net/language.types.string) – The property handle used to identify which target elements should be included in the map
| [handled](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$handled-detail "Defined by yii\base\Event") | [boolean](http://php.net/language.types.boolean) – Whether the event is handled.
| [map](craft-events-defineeagerloadingmapevent.md#map)                                                          | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – An array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$name-detail "Defined by yii\base\Event")       | [string](http://php.net/language.types.string) – The event name.
| [sender](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$sender-detail "Defined by yii\base\Event")   | [object](http://php.net/language.types.object) – The sender of this event.
| [sourceElements](craft-events-defineeagerloadingmapevent.md#sourceelements)                                    | [craft\base\ElementInterface](craft-base-elementinterface.md)[] – An array of the source elements

### `criteria`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.



[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php#L44)



### `elementType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element type class to eager-load.



[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php#L34)



### `handle`



Type

:   [string](http://php.net/language.types.string)



The property handle used to identify which target elements should be included in the map



[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php#L29)



### `map`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



An array of element ID mappings, where each element is a sub-array with `source` and `target` keys.



[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php#L39)



### `sourceElements`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)[]



An array of the source elements



[View source](https://github.com/craftcms/cms/blob/master/src/events/DefineEagerLoadingMapEvent.php#L24)







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








