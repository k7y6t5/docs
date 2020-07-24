---
title: craft\services\Revisions
code:
  - php
  - twig
---

# Revisions

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Revisions](craft-services-revisions.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



Revisions service.

An instance of the Revisions service is globally accessible in Craft via [`Craft::$app->revisions`](craft-base-applicationtrait.md#method-getrevisions).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Revisions.php)


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
| [createRevision()](craft-services-revisions.md#method-createrevision)                                                                       | Creates a new revision for the given element.
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
| [revertToRevision()](craft-services-revisions.md#method-reverttorevision)                                                                   | Reverts an element to a revision, and creates a new revision for the element.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createRevision()`





Creates a new revision for the given element.

If the element appears to have not changed since its last revision, its last revision will be returned instead.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Revisions.php#L66-L200)


#### Arguments

- `$source` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to create a revision for
- `$creatorId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The user ID that the revision should be attributed to
- `$notes` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The revision notes
- `$newAttributes` ([array](http://php.net/language.types.array)) – Any attributes to apply to the draft
- `$force` ([boolean](http://php.net/language.types.boolean)) – Whether to force a new revision even if the element doesn't appear to have changed since the last revision

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The new revision

#### Throws

- [Throwable](http://php.net/class.throwable)


### `revertToRevision()`





Reverts an element to a revision, and creates a new revision for the element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Revisions.php#L211-L261)


#### Arguments

- `$revision` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The revision whose source element should be reverted to
- `$creatorId` ([integer](http://php.net/language.types.integer)) – The user ID that the new revision should be attributed to

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The new source element

#### Throws

- [craft\errors\InvalidElementException](craft-errors-invalidelementexception.md)
- [Throwable](http://php.net/class.throwable)








## Events

### EVENT_AFTER_CREATE_REVISION



Type

:   `\craft\services\DraftEvent`



The event that is triggered after a revision is created.



---



### EVENT_AFTER_REVERT_TO_REVISION



Type

:   `\craft\services\DraftEvent`



The event that is triggered after an element is reverted to a revision.



---



### EVENT_BEFORE_CREATE_REVISION



Type

:   `\craft\services\DraftEvent`



The event that is triggered before a revision is created.



---



### EVENT_BEFORE_REVERT_TO_REVISION



Type

:   `\craft\services\DraftEvent`



The event that is triggered before an element is reverted to a revision.



---




