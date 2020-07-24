---
title: craft\services\Utilities
code:
  - php
  - twig
---

# Utilities

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Utilities](craft-services-utilities.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Utilities service provides APIs for managing utilities.

An instance of the Utilities service is globally accessible in Craft via [`Craft::$app->utilities()`](craft-base-applicationtrait.md#method-getutilities).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allUtilityTypes](craft-services-utilities.md#allutilitytypes)                                                             | [string](http://php.net/language.types.string)[]
| [authorizedUtilityTypes](craft-services-utilities.md#authorizedutilitytypes)                                               | [string](http://php.net/language.types.string)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allUtilityTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php)



### `authorizedUtilityTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php)







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
| [checkAuthorization()](craft-services-utilities.md#method-checkauthorization)                                                               | Returns whether the current user is authorized to use a given utility.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllUtilityTypes()](craft-services-utilities.md#method-getallutilitytypes)                                                               | Returns all available utility type classes.
| [getAuthorizedUtilityTypes()](craft-services-utilities.md#method-getauthorizedutilitytypes)                                                 | Returns all utility type classes that the user has permission to use.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getUtilityTypeById()](craft-services-utilities.md#method-getutilitytypebyid)                                                               | Returns a utility class by its ID
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `checkAuthorization()`





Returns whether the current user is authorized to use a given utility.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php#L122-L126)


#### Arguments

- `$class` ([string](http://php.net/language.types.string)) – The utility class

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllUtilityTypes()`





Returns all available utility type classes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php#L63-L96)



#### Returns

[string](http://php.net/language.types.string)[]



### `getAuthorizedUtilityTypes()`





Returns all utility type classes that the user has permission to use.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php#L103-L114)



#### Returns

[string](http://php.net/language.types.string)[]



### `getUtilityTypeById()`





Returns a utility class by its ID




[View source](https://github.com/craftcms/cms/blob/master/src/services/Utilities.php#L134-L144)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)









## Events

### EVENT_REGISTER_UTILITY_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering utility types.

Utility types must implement [craft\base\UtilityInterface](craft-base-utilityinterface.md). [craft\base\Utility](craft-base-utility.md) provides a base implementation.

See [Utility Types](https://docs.craftcms.com/v3/utility-types.html) for documentation on creating utility types.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\services\Utilities;
use yii\base\Event;

Event::on(Utilities::class,
    Utilities::EVENT_REGISTER_UTILITY_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyUtilityType::class;
    }
);
```
:::



