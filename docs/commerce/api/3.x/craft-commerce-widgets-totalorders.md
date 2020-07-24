---
title: craft\commerce\widgets\TotalOrders
code:
  - php
  - twig
---

# TotalOrders

Type

:   Class

Namespace

:   craft\commerce\widgets

Inherits

:   [craft\commerce\widgets\TotalOrders](craft-commerce-widgets-totalorders.md) &raquo;
[craft\base\Widget](https://docs.craftcms.com/api/v3/craft-base-widget.html) &raquo;
[craft\base\SavableComponent](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html), [craft\base\WidgetInterface](https://docs.craftcms.com/api/v3/craft-base-widgetinterface.html), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\SavableComponentTrait](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html), [craft\base\WidgetTrait](https://docs.craftcms.com/api/v3/craft-base-widgettrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   3.0



Total Orders widget





[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php)


## Public Properties

| Property                                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                            | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                      | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [bodyHtml](craft-commerce-widgets-totalorders.md#bodyhtml)                                                                                      | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The widget’s body HTML, or `false` if the widget should not be visible.
| [colspan](https://docs.craftcms.com/api/v3/craft-base-widgettrait.html#colspan "Defined by craft\base\WidgetTrait")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The user’s chosen cospan for the widget
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#datecreated "Defined by craft\base\SavableComponentTrait") | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateRange](craft-commerce-widgets-totalorders.md#daterange)                                                                                    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#dateupdated "Defined by craft\base\SavableComponentTrait") | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [endDate](craft-commerce-widgets-totalorders.md#enddate)                                                                                        | [integer](http://php.net/language.types.integer), [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                    | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                          | [array](http://php.net/language.types.array) – The first errors.
| [id](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#id "Defined by craft\base\SavableComponentTrait")                   | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [isNew](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#isnew "Defined by craft\base\SavableComponent")                       | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#settings "Defined by craft\base\SavableComponent")                 | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-commerce-widgets-totalorders.md#settingshtml)                                                                              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [showChart](craft-commerce-widgets-totalorders.md#showchart)                                                                                    | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean)
| [startDate](craft-commerce-widgets-totalorders.md#startdate)                                                                                    | [integer](http://php.net/language.types.integer), [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)
| [subtitle](craft-commerce-widgets-totalorders.md#subtitle)                                                                                      |
| [title](craft-commerce-widgets-totalorders.md#title)                                                                                            | [string](http://php.net/language.types.string) – The widget’s title.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                            | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `bodyHtml`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Access

:   Read-only



The widget’s body HTML, or `false` if the widget
should not be visible. (If you don’t want the widget to be selectable in
the first place, use [isSelectable()](craft-commerce-widgets-totalorders.md#method-isselectable).)



[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php)



### `dateRange`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L43)



### `endDate`



Type

:   [integer](http://php.net/language.types.integer), [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L38)



### `settingsHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php)



### `showChart`



Type

:   [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L48)



### `startDate`



Type

:   [integer](http://php.net/language.types.integer), [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L33)



### `subtitle`



Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php)



### `title`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The widget’s title.



[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php)







## Public Methods

| Method                                                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                      | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                             |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                          | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                        | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                                    | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                        | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                    | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                          | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                          | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                        | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                               | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-afterdelete "Defined by craft\base\SavableComponent")               | Performs actions after a component is deleted.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-aftersave "Defined by craft\base\SavableComponent")                   | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                      | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                    | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                              | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                            | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                                      | Returns the list of attribute names.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforeapplydelete "Defined by craft\base\SavableComponent")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforedelete "Defined by craft\base\SavableComponent")             | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforesave "Defined by craft\base\SavableComponent")                 | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                              | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                                         | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                      | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                      | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                              | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                    | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                          | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                       | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                      | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                    | Detaches all behaviors from the component.
| [displayName()](craft-commerce-widgets-totalorders.md#method-displayname)                                                                                    | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                    | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                  | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                            | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                          | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")              | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                    | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                          | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")                        | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                            | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                          | Returns all behaviors attached to this component.
| [getBodyHtml()](craft-commerce-widgets-totalorders.md#method-getbodyhtml)                                                                                    | Returns the widget's body HTML.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                           | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                            | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                        | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                              | Returns the first error of every attribute in the model.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-getisnew "Defined by craft\base\SavableComponent")                     | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                    | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                    | Returns the scenario that this model is used in.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-getsettings "Defined by craft\base\SavableComponent")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-commerce-widgets-totalorders.md#method-getsettingshtml)                                                                            | Returns the component’s settings HTML.
| [getSubtitle()](craft-commerce-widgets-totalorders.md#method-getsubtitle)                                                                                    |
| [getTitle()](craft-commerce-widgets-totalorders.md#method-gettitle)                                                                                          | Returns the widget’s title.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                         | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                  | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property is defined for this component.
| [icon()](craft-commerce-widgets-totalorders.md#method-icon)                                                                                                  | Returns the path to the widget’s SVG icon, or the actual SVG contents.
| [iconPath()](https://docs.craftcms.com/api/v3/craft-base-widget.html#method-iconpath "Defined by craft\base\Widget")                                         | Returns the path to the widget’s SVG icon.
| [init()](craft-commerce-widgets-totalorders.md#method-init)                                                                                                  |
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")              | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                        | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                    | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                            | Returns a value indicating whether the attribute is safe for massive assignments.
| [isSelectable()](craft-commerce-widgets-totalorders.md#method-isselectable)                                                                                  | Returns whether the component should be selectable in component Type selects.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                  | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                  | Populates a set of models with the data from end user.
| [maxColspan()](craft-commerce-widgets-totalorders.md#method-maxcolspan)                                                                                      | Returns the widget’s maximum colspan.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                            | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                                  | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                        | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                        | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                    | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                              | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                        | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                 | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                              | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                        | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                    | Sets the scenario for the model.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-settingsattributes "Defined by craft\base\SavableComponent") | Returns the list of settings attribute names.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                          | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                    | Triggers an event.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")   | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                          | Validates multiple models.

### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L78-L81)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `getBodyHtml()`





Returns the widget's body HTML.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L119-L146)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The widget’s body HTML, or `false` if the widget
should not be visible. (If you don’t want the widget to be selectable in
the first place, use [isSelectable()](craft-commerce-widgets-totalorders.md#method-isselectable).)



### `getSettingsHtml()`





Returns the component’s settings HTML.



An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="foo">'.$this->foo.'</textarea>';
```

For more complex settings, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-rendertemplate). For example, the following code would render a template located at
`src/templates/_settings.html`, passing the settings to it:

```php
return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
    'widget' => $this
]);
```

If you need to tie any JavaScript code to your settings, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputs),
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

Thankfully, [craft\web\View](https://docs.craftcms.com/api/v3/craft-web-view.html) service provides a couple handy methods that can help you deal
with this:

- [craft\web\View::namespaceInputId()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-formatinputid) will format an input name to look more like an ID attribute value.

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
[craft\web\View::registerJs()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-registerjs).




[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L159-L169)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSubtitle()`










[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L107-L114)






### `getTitle()`





Returns the widget’s title.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L94-L105)



#### Returns

[string](http://php.net/language.types.string) – The widget’s title.



### `icon()`





Returns the path to the widget’s SVG icon, or the actual SVG contents.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L86-L89)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `init()`










[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L55-L65)






### `isSelectable()`





Returns whether the component should be selectable in component Type selects.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L70-L73)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component should be selectable in component Type selects.



### `maxColspan()`





Returns the widget’s maximum colspan.








[View source](https://github.com/craftcms/commerce/blob/master/src/widgets/TotalOrders.php#L151-L154)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The widget’s maximum colspan, if it has one





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowMultipleInstances()](https://docs.craftcms.com/api/v3/craft-base-widget.html#method-allowmultipleinstances "Defined by craft\base\Widget")        | Returns whether the widget can be selected more than once.
| [defineRules()](https://docs.craftcms.com/api/v3/craft-base-widget.html#method-definerules "Defined by craft\base\Widget")                              | Returns the validation rules for attributes.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.



