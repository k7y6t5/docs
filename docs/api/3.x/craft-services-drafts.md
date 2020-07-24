---
title: craft\services\Drafts
code:
  - php
  - twig
---

# Drafts

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Drafts](craft-services-drafts.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



Drafts service.

An instance of the Drafts service is globally accessible in Craft via [`Craft::$app->drafts`](craft-base-applicationtrait.md#method-getdrafts).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php)


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
| [applyDraft()](craft-services-drafts.md#method-applydraft)                                                                                  | Applies a draft onto its source element.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createDraft()](craft-services-drafts.md#method-createdraft)                                                                                | Creates a new draft for the given element.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEditableDrafts()](craft-services-drafts.md#method-geteditabledrafts)                                                                    | Returns drafts for a given element ID that the current user is allowed to edit
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [mergeSourceChanges()](craft-services-drafts.md#method-mergesourcechanges)                                                                  | Merges recent source element changes into a draft.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [purgeUnsavedDrafts()](craft-services-drafts.md#method-purgeunsaveddrafts)                                                                  | Deletes any sourceless drafts that were never formally saved.
| [saveElementAsDraft()](craft-services-drafts.md#method-saveelementasdraft)                                                                  | Saves an element as a draft.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `applyDraft()`





Applies a draft onto its source element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L345-L435)


#### Arguments

- `$draft` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The draft

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The updated source element

#### Throws

- [Throwable](http://php.net/class.throwable)


### `createDraft()`





Creates a new draft for the given element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L107-L176)


#### Arguments

- `$source` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to create a draft for
- `$creatorId` ([integer](http://php.net/language.types.integer)) – The user ID that the draft should be attributed to
- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The draft name
- `$notes` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The draft notes
- `$newAttributes` ([array](http://php.net/language.types.array)) – Any attributes to apply to the draft

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The new draft

#### Throws

- [Throwable](http://php.net/class.throwable)


### `getEditableDrafts()`





Returns drafts for a given element ID that the current user is allowed to edit




[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L75-L94)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$permission` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `mergeSourceChanges()`



Since

:   3.4.0



Merges recent source element changes into a draft.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L215-L303)


#### Arguments

- `$draft` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The draft




### `purgeUnsavedDrafts()`





Deletes any sourceless drafts that were never formally saved.

This method will check the <config:purgeUnsavedDraftsDuration> config
setting, and if it is set to a valid duration, it will delete any
sourceless drafts that were created that duration ago, and have still not
been formally saved.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L445-L490)






### `saveElementAsDraft()`





Saves an element as a draft.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Drafts.php#L188-L207)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$creatorId` ([integer](http://php.net/language.types.integer))
- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$notes` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)








## Events

### EVENT_AFTER_APPLY_DRAFT



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)



The event that is triggered after a draft is applied to its source element.



---



### EVENT_AFTER_CREATE_DRAFT



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)



The event that is triggered after a draft is created.



---



### EVENT_AFTER_MERGE_SOURCE_CHANGES



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)

Since

:   3.4.0



The event that is triggered after source changes are merged into a draft.



---



### EVENT_BEFORE_APPLY_DRAFT



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)



The event that is triggered before a draft is applied to its source element.



---



### EVENT_BEFORE_CREATE_DRAFT



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)



The event that is triggered before a draft is created.



---



### EVENT_BEFORE_MERGE_SOURCE_CHANGES



Type

:   [craft\events\DraftEvent](craft-events-draftevent.md)

Since

:   3.4.0



The event that is triggered before source changes are merged into a draft.



---




