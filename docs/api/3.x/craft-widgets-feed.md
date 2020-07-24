---
title: craft\widgets\Feed
code:
  - php
  - twig
---

# Feed

Type

:   Class

Namespace

:   craft\widgets

Inherits

:   [craft\widgets\Feed](craft-widgets-feed.md) &raquo;
[craft\base\Widget](craft-base-widget.md) &raquo;
[craft\base\SavableComponent](craft-base-savablecomponent.md) &raquo;
[craft\base\Component](craft-base-component.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](craft-base-componentinterface.md), [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md), [craft\base\WidgetInterface](craft-base-widgetinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md), [craft\base\WidgetTrait](craft-base-widgettrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   3.0.0



Feed represents a Feed dashboard widget.





[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [bodyHtml](craft-widgets-feed.md#bodyhtml)                                                                                       | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The widget’s body HTML, or `false` if the widget should not be visible.
| [colspan](craft-base-widgettrait.md#colspan "Defined by craft\base\WidgetTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The user’s chosen cospan for the widget
| [dateCreated](craft-base-savablecomponenttrait.md#datecreated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](craft-base-savablecomponenttrait.md#dateupdated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [id](craft-base-savablecomponenttrait.md#id "Defined by craft\base\SavableComponentTrait")                                       | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [isNew](craft-base-savablecomponentinterface.md#isnew "Defined by craft\base\SavableComponentInterface")                         | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [limit](craft-widgets-feed.md#limit)                                                                                             | [integer](http://php.net/language.types.integer) – The maximum number of feed items to display
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](craft-base-savablecomponentinterface.md#settings "Defined by craft\base\SavableComponentInterface")                   | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-widgets-feed.md#settingshtml)                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [subtitle](craft-base-widget.md#subtitle "Defined by craft\base\Widget")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The widget’s subtitle
| [title](craft-widgets-feed.md#title)                                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The feed title
| [url](craft-widgets-feed.md#url)                                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The feed URL
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `bodyHtml`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Access

:   Read-only



The widget’s body HTML, or `false` if the widget
should not be visible. (If you don’t want the widget to be selectable in
the first place, use [isSelectable()](craft-base-widget.md#method-isselectable).)



[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php)



### `limit`



Type

:   [integer](http://php.net/language.types.integer)



The maximum number of feed items to display



[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L52)



### `settingsHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php)



### `title`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The feed title



[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L47)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The feed URL



[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L42)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                     |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                         | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                     | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                         | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                       | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")               | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")       | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                     | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-base-model.md#method-behaviors "Defined by craft\base\Model")                                                               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes "Defined by craft\base\Model")                                             | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [displayName()](craft-widgets-feed.md#method-displayname)                                                                                       | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getBodyHtml()](craft-widgets-feed.md#method-getbodyhtml)                                                                                       | Returns the widget's body HTML.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                         | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")                   | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-widgets-feed.md#method-getsettingshtml)                                                                               | Returns the component’s settings HTML.
| [getSubtitle()](craft-base-widget.md#method-getsubtitle "Defined by craft\base\Widget")                                                         | Returns the widget’s subtitle.
| [getTitle()](craft-widgets-feed.md#method-gettitle)                                                                                             | Returns the widget’s title.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [icon()](craft-widgets-feed.md#method-icon)                                                                                                     | Returns the path to the widget’s SVG icon, or the actual SVG contents.
| [iconPath()](craft-base-widget.md#method-iconpath "Defined by craft\base\Widget")                                                               | Returns the path to the widget’s SVG icon.
| [init()](craft-widgets-feed.md#method-init)                                                                                                     | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [isSelectable()](craft-base-widget.md#method-isselectable "Defined by craft\base\Widget")                                                       | Returns whether the component should be selectable in component Type selects.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [maxColspan()](craft-base-widget.md#method-maxcolspan "Defined by craft\base\Widget")                                                           | Returns the widget’s maximum colspan.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface")     | Returns the list of settings attribute names.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                         | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L26-L29)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `getBodyHtml()`





Returns the widget's body HTML.








[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L100-L130)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The widget’s body HTML, or `false` if the widget
should not be visible. (If you don’t want the widget to be selectable in
the first place, use [isSelectable()](craft-base-widget.md#method-isselectable).)



### `getSettingsHtml()`





Returns the component’s settings HTML.



An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="foo">'.$this->foo.'</textarea>';
```

For more complex settings, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](craft-web-view.md#method-rendertemplate). For example, the following code would render a template located at
`src/templates/_settings.html`, passing the settings to it:

```php
return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
    'widget' => $this
]);
```

If you need to tie any JavaScript code to your settings, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](craft-web-view.md#method-namespaceinputs),
however your JavaScript code will be left untouched.
For example, if getSettingsHtml() returns the following HTML:

```html
<textarea id="foo" name="foo"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

…then it might actually look like this before getting output to the browser:

```html
<textarea id="namespace-foo" name="namespace[foo]"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

As you can see, that JavaScript code will not be able to find the textarea, because the textarea’s `id=`
attribute was changed from `foo` to `namespace-foo`.
Before you start adding `namespace-` to the beginning of your element ID selectors, keep in mind that the actual
namespace is going to change depending on the context. Often they are randomly generated. So it’s not quite
that simple.

Thankfully, [craft\web\View](craft-web-view.md) service provides a couple handy methods that can help you deal
with this:

- [craft\web\View::namespaceInputId()](craft-web-view.md#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](craft-web-view.md#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](craft-web-view.md#method-formatinputid) will format an input name to look more like an ID attribute value.

So here’s what a getSettingsHtml() method that includes field-targeting JavaScript code might look like:

```php
public function getSettingsHtml()
{
    // Come up with an ID value for 'foo'
    $id = Craft::$app->getView()->formatInputId('foo');
    // Figure out what that ID is going to be namespaced into
    $namespacedId = Craft::$app->view->namespaceInputId($id);
    // Render and return the input template
    return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
        'id'           => $id,
        'namespacedId' => $namespacedId,
        'widget'       => $this
    ]);
}
```

And the _widget-settings.twig template might look like this:

```twig
<textarea id="{{ id }}" name="foo">{{ widget.foo }}</textarea>
<script type="text/javascript">
    var textarea = document.getElementById('{{ namespacedId }}');
</script>
```

The same principles also apply if you’re including your JavaScript code with
[craft\web\View::registerJs()](craft-web-view.md#method-registerjs).




[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L81-L87)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTitle()`





Returns the widget’s title.








[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L92-L95)



#### Returns

[string](http://php.net/language.types.string) – The widget’s title.



### `icon()`



Since

:   3.2.0



Returns the path to the widget’s SVG icon, or the actual SVG contents.








[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L34-L37)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L57-L64)








## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowMultipleInstances()](craft-base-widget.md#method-allowmultipleinstances "Defined by craft\base\Widget")                                           | Returns whether the widget can be selected more than once.
| [defineRules()](craft-widgets-feed.md#method-definerules)                                                                                               | Returns the validation rules for attributes.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).

### `defineRules()`



Since

:   3.4.0



Returns the validation rules for attributes.



See [rules()](craft-base-model.md#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](craft-base-model.md#method-rules) so [EVENT_DEFINE_RULES](craft-base-model.md#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/cms/blob/master/src/widgets/Feed.php#L69-L76)



#### Returns

[array](http://php.net/language.types.array)





## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.



