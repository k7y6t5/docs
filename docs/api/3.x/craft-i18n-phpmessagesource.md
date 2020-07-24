---
title: craft\i18n\PhpMessageSource
code:
  - php
  - twig
---

# PhpMessageSource

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\PhpMessageSource](craft-i18n-phpmessagesource.md) &raquo;
[yii\i18n\PhpMessageSource](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource) &raquo;
[yii\i18n\MessageSource](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class PhpMessageSource





[View source](https://github.com/craftcms/cms/blob/master/src/i18n/PhpMessageSource.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------
| [allowOverrides](craft-i18n-phpmessagesource.md#allowoverrides)                                                                                  | [boolean](http://php.net/language.types.boolean) – Whether the messages can be overridden by translations in the site’s translations folder
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#$basePath-detail "Defined by yii\i18n\PhpMessageSource")           | [string](http://php.net/language.types.string) – The base path for all translated messages.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [fileMap](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#$fileMap-detail "Defined by yii\i18n\PhpMessageSource")             | [array](http://php.net/language.types.array) – Mapping between message categories and the corresponding message file paths.
| [forceTranslation](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#$forceTranslation-detail "Defined by yii\i18n\MessageSource") | [boolean](http://php.net/language.types.boolean) – Whether to force message translation when the source and target languages are the same.
| [sourceLanguage](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#$sourceLanguage-detail "Defined by yii\i18n\MessageSource")     | [string](http://php.net/language.types.string) – The language that the original messages are in.

### `allowOverrides`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the messages can be overridden by translations in the site’s translations folder



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/PhpMessageSource.php#L24)







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
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [translate()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#translate()-detail "Defined by yii\i18n\MessageSource")       | Translates a message to the specified language.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.



## Protected Methods

| Method                                                                                                                                                            | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [getMessageFilePath()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#getMessageFilePath()-detail "Defined by yii\i18n\PhpMessageSource")     | Returns message file path for the specified language and category.
| [loadFallbackMessages()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#loadFallbackMessages()-detail "Defined by yii\i18n\PhpMessageSource") | The method is normally called by [loadMessages()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#loadMessages()-detail) to load the fallback messages for the language.
| [loadMessages()](craft-i18n-phpmessagesource.md#method-loadmessages)                                                                                              | Loads the message translation for the specified $language and $category.
| [loadMessagesFromFile()](craft-i18n-phpmessagesource.md#method-loadmessagesfromfile)                                                                              | Loads the message translation for the specified language and category or returns null if file doesn't exist.
| [translateMessage()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#translateMessage()-detail "Defined by yii\i18n\MessageSource")               | Translates the specified message.

### `loadMessages()`





Loads the message translation for the specified $language and $category.



If translation for specific locale code such as `en-US` isn't found it
tries more generic `en`. When both are present, the `en-US` messages will be merged
over `en`. See [loadFallbackMessages()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-phpmessagesource#loadFallbackMessages()-detail) for details.
If the $language is less specific than [sourceLanguage](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#$sourceLanguage-detail), the method will try to
load the messages for [sourceLanguage](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#$sourceLanguage-detail). For example: [sourceLanguage](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource#$sourceLanguage-detail) is `en-GB`,
$language is `en`. The method will load the messages for `en` and merge them over `en-GB`.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/PhpMessageSource.php#L29-L39)


#### Arguments

- `$category` ([string](http://php.net/language.types.string)) – The message category
- `$language` ([string](http://php.net/language.types.string)) – The target language

#### Returns

[array](http://php.net/language.types.array) – The loaded messages. The keys are original messages, and the values are the translated messages.



### `loadMessagesFromFile()`





Loads the message translation for the specified language and category or returns null if file doesn't exist.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/PhpMessageSource.php#L44-L54)


#### Arguments

- `$messageFile` ([string](http://php.net/language.types.string)) – Path to message file

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Array of messages or null if file not found








