---
title: craft\services\ElementIndexes
code:
  - php
  - twig
---

# ElementIndexes

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\ElementIndexes](craft-services-elementindexes.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The ElementIndexes service provides APIs for managing element indexes.

An instance of ElementIndexes service is globally accessible in Craft via [`Craft::$app->elementIndexes`](craft-base-applicationtrait.md#method-getelementindexes).



[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [getAvailableTableAttributes()](craft-services-elementindexes.md#method-getavailabletableattributes)                                        | Returns all of the available attributes that can be shown for a given element type source.
| [getAvailableTableFields()](craft-services-elementindexes.md#method-getavailabletablefields)                                                | Returns the fields that are available to be shown as table attributes.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getSettings()](craft-services-elementindexes.md#method-getsettings)                                                                        | Returns the element index settings for a given element type.
| [getSources()](craft-services-elementindexes.md#method-getsources)                                                                          | Returns the element index sources in the custom groupings/order.
| [getTableAttributes()](craft-services-elementindexes.md#method-gettableattributes)                                                          | Returns the attributes that should be shown for a given element type source.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveSettings()](craft-services-elementindexes.md#method-savesettings)                                                                      | Saves new element index settings for a given element type.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getAvailableTableAttributes()`





Returns all of the available attributes that can be shown for a given element type source.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L200-L222)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class
- `$includeFields` ([boolean](http://php.net/language.types.boolean)) – Whether custom fields should be included in the list

#### Returns

[array](http://php.net/language.types.array)



### `getAvailableTableFields()`





Returns the fields that are available to be shown as table attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L276-L289)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[]



### `getSettings()`





Returns the element index settings for a given element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L37-L54)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getSources()`





Returns the element index sources in the custom groupings/order.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L145-L191)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class
- `$context` ([string](http://php.net/language.types.string)) – The context

#### Returns

[array](http://php.net/language.types.array)



### `getTableAttributes()`





Returns the attributes that should be shown for a given element type source.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L231-L268)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class
- `$sourceKey` ([string](http://php.net/language.types.string)) – The element type source key

#### Returns

[array](http://php.net/language.types.array)



### `saveSettings()`





Saves new element index settings for a given element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/ElementIndexes.php#L63-L136)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class
- `$newSettings` ([array](http://php.net/language.types.array)) – The new index settings

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the settings were saved successfully










