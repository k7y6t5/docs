---
title: craft\services\SystemMessages
code:
  - php
  - twig
---

# SystemMessages

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\SystemMessages](craft-services-systemmessages.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



System Messages service.

An instance of the System Messages service is globally accessible in Craft via [`Craft::$app->systemMessages`](craft-base-applicationtrait.md#method-getsystemmessages).



[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allDefaultMessages](craft-services-systemmessages.md#alldefaultmessages)                                                  | [craft\models\SystemMessage](craft-models-systemmessage.md)[]
| [allMessages](craft-services-systemmessages.md#allmessages)                                                                | [craft\models\SystemMessage](craft-models-systemmessage.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allDefaultMessages`



Type

:   [craft\models\SystemMessage](craft-models-systemmessage.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php)



### `allMessages`



Type

:   [craft\models\SystemMessage](craft-models-systemmessage.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php)







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
| [getAllDefaultMessages()](craft-services-systemmessages.md#method-getalldefaultmessages)                                                    | Returns all of the default system email messages, without subject/body overrides.
| [getAllMessages()](craft-services-systemmessages.md#method-getallmessages)                                                                  | Returns all of the system email messages in a given language, with subject/body overrides.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDefaultMessage()](craft-services-systemmessages.md#method-getdefaultmessage)                                                            | Returns a default system email messages by its key, without subject/body overrides.
| [getMessage()](craft-services-systemmessages.md#method-getmessage)                                                                          | Returns a system email messages in a given language by its key, with subject/body overrides.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveMessage()](craft-services-systemmessages.md#method-savemessage)                                                                        | Saves the subject/body overrides for a system email message.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getAllDefaultMessages()`





Returns all of the default system email messages, without subject/body overrides.




[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php#L44-L94)



#### Returns

[craft\models\SystemMessage](craft-models-systemmessage.md)[]



### `getAllMessages()`





Returns all of the system email messages in a given language, with subject/body overrides.




[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php#L113-L143)


#### Arguments

- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\SystemMessage](craft-models-systemmessage.md)[]



### `getDefaultMessage()`





Returns a default system email messages by its key, without subject/body overrides.




[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php#L102-L105)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\SystemMessage](craft-models-systemmessage.md), [null](http://php.net/language.types.null)



### `getMessage()`





Returns a system email messages in a given language by its key, with subject/body overrides.




[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php#L152-L193)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\SystemMessage](craft-models-systemmessage.md), [null](http://php.net/language.types.null)



### `saveMessage()`





Saves the subject/body overrides for a system email message.




[View source](https://github.com/craftcms/cms/blob/master/src/services/SystemMessages.php#L202-L216)


#### Arguments

- `$message` ([craft\models\SystemMessage](craft-models-systemmessage.md))
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)









## Events

### EVENT_REGISTER_MESSAGES



Type

:   [craft\events\RegisterEmailMessagesEvent](craft-events-registeremailmessagesevent.md)



The event that is triggered when registering email messages.



---




