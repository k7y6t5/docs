---
title: craft\services\Gc
code:
  - php
  - twig
---

# Gc

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Gc](craft-services-gc.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.1.0



Garbage collection service.

An instance of the GC service is globally accessible in Craft via [`Craft::$app->gc`](craft-base-applicationtrait.md#method-getgc).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Gc.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [deleteAllTrashed](craft-services-gc.md#deletealltrashed)                                                                  | [boolean](http://php.net/language.types.boolean) – Whether [hardDelete()](craft-services-gc.md#method-harddelete) should delete *all* soft-deleted rows, rather than just the ones that were deleted long enough ago to be ready for hard-deletion per the <config:softDeleteDuration> config setting.
| [probability](craft-services-gc.md#probability)                                                                            | [integer](http://php.net/language.types.integer) – The probability (parts per million) that garbage collection (GC) should be performed on a request.

### `deleteAllTrashed`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether [hardDelete()](craft-services-gc.md#method-harddelete) should delete *all* soft-deleted rows,
rather than just the ones that were deleted long enough ago to be ready
for hard-deletion per the <config:softDeleteDuration> config setting.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Gc.php#L43)



### `probability`



Type

:   [integer](http://php.net/language.types.integer)



The probability (parts per million) that garbage collection (GC) should be performed
on a request. Defaults to 10, meaning 0.001% chance.

This number should be between 0 and 1000000. A value 0 means no GC will be performed at all unless forced.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Gc.php#L36)







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
| [hardDelete()](craft-services-gc.md#method-harddelete)                                                                                      | Hard-deletes any rows in the given table(s), that are due for it.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [run()](craft-services-gc.md#method-run)                                                                                                    | Possibly runs garbage collection.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `hardDelete()`





Hard-deletes any rows in the given table(s), that are due for it.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gc.php#L90-L121)


#### Arguments

- `$tables` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[]) – The table(s) to delete rows from. They must have a `dateDeleted` column.




### `run()`





Possibly runs garbage collection.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gc.php#L51-L83)


#### Arguments

- `$force` ([boolean](http://php.net/language.types.boolean)) – Whether garbage collection should be forced. If left as `false`, then
garbage collection will only run if a random condition passes, factoring in [probability](craft-services-gc.md#probability).










## Events

### EVENT_RUN



Type

:   `\craft\services\Event`



The event that is triggered when running garbage collection.



---




