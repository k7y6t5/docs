---
title: craft\services\Content
code:
  - php
  - twig
---

# Content

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Content](craft-services-content.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Content service.

An instance of the Content service is globally accessible in Craft via [`Craft::$app->content`](craft-base-applicationtrait.md#method-getcontent).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [contentTable](craft-services-content.md#contenttable)                                                                     | [string](http://php.net/language.types.string)
| [fieldColumnPrefix](craft-services-content.md#fieldcolumnprefix)                                                           | [string](http://php.net/language.types.string)
| [fieldContext](craft-services-content.md#fieldcontext)                                                                     | [string](http://php.net/language.types.string)

### `contentTable`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L43)



### `fieldColumnPrefix`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L48)



### `fieldContext`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L53)







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
| [getContentRow()](craft-services-content.md#method-getcontentrow)                                                                           | Returns the content row for a given element, with field column prefixes removed from the keys.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [populateElementContent()](craft-services-content.md#method-populateelementcontent)                                                         | Populates a given element with its custom field values.
| [saveContent()](craft-services-content.md#method-savecontent)                                                                               | Saves an element's content.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getContentRow()`





Returns the content row for a given element, with field column prefixes removed from the keys.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L61-L93)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element whose content we're looking for.

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The element's content row values, or null if the row could not be found



### `populateElementContent()`





Populates a given element with its custom field values.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L100-L126)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element for which we should create a new content model.




### `saveContent()`





Saves an element's content.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Content.php#L136-L218)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element whose content we're saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the content was saved successfully. If it wasn't, any validation errors will be saved on the
element and its content model.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $element has not been saved yet








## Events

### EVENT_AFTER_SAVE_CONTENT



Type

:   [craft\events\ElementContentEvent](craft-events-elementcontentevent.md)



The event that is triggered after an element's content is saved.



---



### EVENT_BEFORE_SAVE_CONTENT



Type

:   [craft\events\ElementContentEvent](craft-events-elementcontentevent.md)



The event that is triggered before an element's content is saved.



---




