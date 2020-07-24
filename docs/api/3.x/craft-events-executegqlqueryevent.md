---
title: craft\events\ExecuteGqlQueryEvent
code:
  - php
  - twig
---

# ExecuteGqlQueryEvent

Type

:   Class

Namespace

:   craft\events

Inherits

:   [craft\events\ExecuteGqlQueryEvent](craft-events-executegqlqueryevent.md) &raquo;
[yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.3.11



ExecuteGqlQueryEvent event class.





[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php)


## Public Properties

| Property                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [accessToken](craft-events-executegqlqueryevent.md#accesstoken)                                                | [string](http://php.net/language.types.string) – The access token used for this request.
| [context](craft-events-executegqlqueryevent.md#context)                                                        | `mixed`, [null](http://php.net/language.types.null) – The context that is shared between all resolvers.
| [data](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$data-detail "Defined by yii\base\Event")       | `mixed` – The data that is passed to [yii\base\Component::on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail) when attaching an event handler.
| [handled](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$handled-detail "Defined by yii\base\Event") | [boolean](http://php.net/language.types.boolean) – Whether the event is handled.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$name-detail "Defined by yii\base\Event")       | [string](http://php.net/language.types.string) – The event name.
| [operationName](craft-events-executegqlqueryevent.md#operationname)                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the operation to use if requestString contains multiple possible operations.
| [query](craft-events-executegqlqueryevent.md#query)                                                            | [string](http://php.net/language.types.string) – The GraphQL query being executed
| [result](craft-events-executegqlqueryevent.md#result)                                                          | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The query result to be returned.
| [rootValue](craft-events-executegqlqueryevent.md#rootvalue)                                                    | `mixed`, [null](http://php.net/language.types.null) – The root value to use when resolving the top-level object fields.
| [schemaId](craft-events-executegqlqueryevent.md#schemaid)                                                      | [integer](http://php.net/language.types.integer) – The id of the schema used for this request.
| [sender](https://www.yiiframework.com/doc/api/2.0/yii-base-event#$sender-detail "Defined by yii\base\Event")   | [object](http://php.net/language.types.object) – The sender of this event.
| [variables](craft-events-executegqlqueryevent.md#variables)                                                    | [array](http://php.net/language.types.array) – The variables used for this query.

### `accessToken`

::: danger DEPRECATED
Deprecated in 3.4.0. Use [schemaId](craft-events-executegqlqueryevent.md#schemaid) instead to determine schema used.
:::


Type

:   [string](http://php.net/language.types.string)



The access token used for this request.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L24)



### `context`



Type

:   `mixed`, [null](http://php.net/language.types.null)



The context that is shared between all resolvers.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L50)



### `operationName`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The name of the operation to use if requestString contains multiple possible operations.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L45)



### `query`



Type

:   [string](http://php.net/language.types.string)



The GraphQL query being executed



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L35)



### `result`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The query result to be returned.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L60)



### `rootValue`



Type

:   `mixed`, [null](http://php.net/language.types.null)



The root value to use when resolving the top-level object fields.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L55)



### `schemaId`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.4.0



The id of the schema used for this request.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L30)



### `variables`



Type

:   [array](http://php.net/language.types.array)



The variables used for this query.



[View source](https://github.com/craftcms/cms/blob/master/src/events/ExecuteGqlQueryEvent.php#L40)







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








