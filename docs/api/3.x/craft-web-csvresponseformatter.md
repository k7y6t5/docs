---
title: craft\web\CsvResponseFormatter
code:
  - php
  - twig
---

# CsvResponseFormatter

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\CsvResponseFormatter](craft-web-csvresponseformatter.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\web\ResponseFormatterInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-responseformatterinterface)

Since

:   3.4.0



CsvResponseFormatter formats the given data into CSV response content.

It is used by [yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response) to format response data.



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [contentType](craft-web-csvresponseformatter.md#contenttype)                                                               | [string](http://php.net/language.types.string) – The Content-Type header for the response
| [delimiter](craft-web-csvresponseformatter.md#delimiter)                                                                   | [string](http://php.net/language.types.string) – The field delimiter (one character only)
| [enclosure](craft-web-csvresponseformatter.md#enclosure)                                                                   | [string](http://php.net/language.types.string) – The field enclosure (one character only)
| [escapeChar](craft-web-csvresponseformatter.md#escapechar)                                                                 | [string](http://php.net/language.types.string) – The escape character (one character only)
| [headers](craft-web-csvresponseformatter.md#headers)                                                                       | [string](http://php.net/language.types.string)[] – The header row values.
| [includeHeaderRow](craft-web-csvresponseformatter.md#includeheaderrow)                                                     | [boolean](http://php.net/language.types.boolean) – Whether the response data should include a header row

### `contentType`



Type

:   [string](http://php.net/language.types.string)



The Content-Type header for the response



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L28)



### `delimiter`



Type

:   [string](http://php.net/language.types.string)



The field delimiter (one character only)



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L44)



### `enclosure`



Type

:   [string](http://php.net/language.types.string)



The field enclosure (one character only)



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L49)



### `escapeChar`



Type

:   [string](http://php.net/language.types.string)



The escape character (one character only)



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L54)



### `headers`



Type

:   [string](http://php.net/language.types.string)[]



The header row values. The array keys of first result in
[yii\web\Response::$data](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$data-detail) will be used by default.



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L39)



### `includeHeaderRow`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the response data should include a header row



[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L33)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [format()](craft-web-csvresponseformatter.md#method-format)                                                                                 | Formats the specified response.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `format()`





Formats the specified response.




[View source](https://github.com/craftcms/cms/blob/master/src/web/CsvResponseFormatter.php#L61-L97)


#### Arguments

- `$response` ([yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)) – The response to be formatted.











