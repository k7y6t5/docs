---
title: craft\i18n\MessageFormatter
code:
  - php
  - twig
---

# MessageFormatter

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\MessageFormatter](craft-i18n-messageformatter.md) &raquo;
[yii\i18n\MessageFormatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.3.13









[View source](https://github.com/craftcms/cms/blob/master/src/i18n/MessageFormatter.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [errorCode](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#$errorCode-detail "Defined by yii\i18n\MessageFormatter")       | [string](http://php.net/language.types.string) – Code of the last error.
| [errorMessage](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#$errorMessage-detail "Defined by yii\i18n\MessageFormatter") | [string](http://php.net/language.types.string) – Description of the last error.





## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                               | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                               | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                 | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                             | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                 | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                             | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                         | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                 | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")               | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")               | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [format()](craft-i18n-messageformatter.md#method-format)                                                                                                | Formats a message via [ICU message format](http://userguide.icu-project.org/formatparse/messages).
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                       | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                     | Returns all behaviors attached to this component.
| [getErrorCode()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#getErrorCode()-detail "Defined by yii\i18n\MessageFormatter")       | Get the error code from the last operation.
| [getErrorMessage()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#getErrorMessage()-detail "Defined by yii\i18n\MessageFormatter") | Get the error text from the last operation.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")             | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                   | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [parse()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#parse()-detail "Defined by yii\i18n\MessageFormatter")                     | Parses an input string according to an [ICU message format](http://userguide.icu-project.org/formatparse/messages) pattern.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.

### `format()`





Formats a message via [ICU message format](http://userguide.icu-project.org/formatparse/messages).



It uses the PHP intl extension's [MessageFormatter](https://secure.php.net/manual/en/class.messageformatter.php)
and works around some issues.
If PHP intl is not installed a fallback will be used that supports a subset of the ICU message format.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/MessageFormatter.php#L21-L36)


#### Arguments

- `$pattern` ([string](http://php.net/language.types.string)) – The pattern string to insert parameters into.
- `$params` ([array](http://php.net/language.types.array)) – The array of name value pairs to insert into the format string.
- `$language` ([string](http://php.net/language.types.string)) – The locale to use for formatting locale-dependent parts

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The formatted pattern string or `false` if an error occurred





## Protected Methods

| Method                                                                                                                                                | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------
| [fallbackFormat()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter#fallbackFormat()-detail "Defined by yii\i18n\MessageFormatter") | Fallback implementation for MessageFormatter::formatMessage.






