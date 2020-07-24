---
title: craft\models\Section
code:
  - php
  - twig
---

# Section

Type

:   Class

Namespace

:   craft\models

Inherits

:   [craft\models\Section](craft-models-section.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   3.0.0



Section model class.





[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [enableVersioning](craft-models-section.md#enableversioning)                                                                     | [boolean](http://php.net/language.types.boolean) – Enable versioning
| [entryTypes](craft-models-section.md#entrytypes)                                                                                 | [craft\models\EntryType](craft-models-entrytype.md)[]
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [handle](craft-models-section.md#handle)                                                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Handle
| [hasMultiSiteEntries](craft-models-section.md#hasmultisiteentries)                                                               | [boolean](http://php.net/language.types.boolean)
| [id](craft-models-section.md#id)                                                                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – ID
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [maxLevels](craft-models-section.md#maxlevels)                                                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Max levels
| [name](craft-models-section.md#name)                                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Name
| [previewTargets](craft-models-section.md#previewtargets)                                                                         | [array](http://php.net/language.types.array) – Preview targets
| [propagateEntries](craft-models-section.md#propagateentries)                                                                     | [boolean](http://php.net/language.types.boolean) – Propagate entries
| [propagationMethod](craft-models-section.md#propagationmethod)                                                                   | [string](http://php.net/language.types.string) – Propagation method This will be set to one of the following: - `none` – Only save entries in the site they were created in - `siteGroup` – Save entries to other sites in the same site group - `language` – Save entries to other sites with the same language - `all` – Save entries to all sites enabled for this section
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [siteIds](craft-models-section.md#siteids)                                                                                       | [integer](http://php.net/language.types.integer)[]
| [siteSettings](craft-models-section.md#sitesettings)                                                                             | [craft\models\Section_SiteSettings](craft-models-section_sitesettings.md)[]
| [structureId](craft-models-section.md#structureid)                                                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Structure ID
| [type](craft-models-section.md#type)                                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Type
| [uid](craft-models-section.md#uid)                                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Section's UID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `enableVersioning`



Type

:   [boolean](http://php.net/language.types.boolean)



Enable versioning



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L74)



### `entryTypes`



Type

:   [craft\models\EntryType](craft-models-entrytype.md)[]







[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php)



### `handle`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Handle



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L59)



### `hasMultiSiteEntries`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.0.35







[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php)



### `id`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



ID



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L44)



### `maxLevels`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Max levels



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L69)



### `name`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Name



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L54)



### `previewTargets`



Type

:   [array](http://php.net/language.types.array)



Preview targets



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L99)



### `propagateEntries`

::: danger DEPRECATED
Deprecated in 3.2.0. Use [propagationMethod](craft-models-section.md#propagationmethod) instead
:::


Type

:   [boolean](http://php.net/language.types.boolean)



Propagate entries



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L94)



### `propagationMethod`



Type

:   [string](http://php.net/language.types.string)

Since

:   3.2.0



Propagation method

This will be set to one of the following:

- `none` – Only save entries in the site they were created in
- `siteGroup` – Save entries to other sites in the same site group
- `language` – Save entries to other sites with the same language
- `all` – Save entries to all sites enabled for this section



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L88)



### `siteIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php)



### `siteSettings`



Type

:   [craft\models\Section_SiteSettings](craft-models-section_sitesettings.md)[]







[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php)



### `structureId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Structure ID



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L49)



### `type`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Type



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L64)



### `uid`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Section's UID



[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L104)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                     |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                         | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                     | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                         | Sets value of an object property.
| [__toString()](craft-models-section.md#method-tostring)                                                                                         | Use the translated section name as the string representation.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [addSiteSettingsErrors()](craft-models-section.md#method-addsitesettingserrors)                                                                 | Adds site-specific errors to the model.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](craft-models-section.md#method-attributelabels)                                                                             | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
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
| [getEntryTypes()](craft-models-section.md#method-getentrytypes)                                                                                 | Returns the section's entry types.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getHasMultiSiteEntries()](craft-models-section.md#method-gethasmultisiteentries)                                                               | Returns whether entries in this section support multiple sites.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSiteIds()](craft-models-section.md#method-getsiteids)                                                                                       | Returns the site IDs that are enabled for the section.
| [getSiteSettings()](craft-models-section.md#method-getsitesettings)                                                                             | Returns the section's site-specific settings, indexed by site ID.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [init()](craft-models-section.md#method-init)                                                                                                   | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
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
| [setEntryTypes()](craft-models-section.md#method-setentrytypes)                                                                                 | Sets the section's entry types.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setSiteSettings()](craft-models-section.md#method-setsitesettings)                                                                             | Sets the section's site-specific settings.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.
| [validatePreviewTargets()](craft-models-section.md#method-validatepreviewtargets)                                                               | Validates the preview targets.
| [validateSiteSettings()](craft-models-section.md#method-validatesitesettings)                                                                   | Validates the site settings.

### `__toString()`





Use the translated section name as the string representation.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L236-L239)



#### Returns

[string](http://php.net/language.types.string)



### `addSiteSettingsErrors()`





Adds site-specific errors to the model.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L292-L300)


#### Arguments

- `$errors` ([array](http://php.net/language.types.array))
- `$siteId` ([integer](http://php.net/language.types.integer))




### `attributeLabels()`





Returns the attribute labels.



Attribute labels are mainly used for display purpose. For example, given an attribute
`firstName`, we can declare a label `First Name` which is more user-friendly and can
be displayed to end users.

By default an attribute label is generated using [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail).
This method allows you to explicitly specify attribute labels.

Note, in order to inherit labels defined in the parent class, a child class needs to
merge the parent labels with child labels using functions such as `array_merge()`.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L142-L149)



#### Returns

[array](http://php.net/language.types.array) – Attribute labels (name => label)



### `getEntryTypes()`





Returns the section's entry types.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L307-L320)



#### Returns

[craft\models\EntryType](craft-models-entrytype.md)[]



### `getHasMultiSiteEntries()`



Since

:   3.0.35



Returns whether entries in this section support multiple sites.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L339-L346)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSiteIds()`





Returns the site IDs that are enabled for the section.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L281-L284)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getSiteSettings()`





Returns the section's site-specific settings, indexed by site ID.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L246-L260)



#### Returns

[craft\models\Section_SiteSettings](craft-models-section_sitesettings.md)[]



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L119-L137)






### `setEntryTypes()`



Since

:   3.1.0



Sets the section's entry types.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L328-L331)


#### Arguments

- `$entryTypes` ([craft\models\EntryType](craft-models-entrytype.md)[])




### `setSiteSettings()`





Sets the section's site-specific settings.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L267-L274)


#### Arguments

- `$siteSettings` ([craft\models\Section_SiteSettings](craft-models-section_sitesettings.md)[]) – Array of Section_SiteSettings objects.




### `validatePreviewTargets()`





Validates the preview targets.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L211-L229)






### `validateSiteSettings()`





Validates the site settings.




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L185-L206)








## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineRules()](craft-models-section.md#method-definerules)                                                                                             | Returns the validation rules for attributes.
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




[View source](https://github.com/craftcms/cms/blob/master/src/models/Section.php#L154-L180)



#### Returns

[array](http://php.net/language.types.array)





## Constants

| Constant                        | Description
| ------------------------------- | ---------------------------------
| `PROPAGATION_METHOD_ALL`        |
| `PROPAGATION_METHOD_LANGUAGE`   |
| `PROPAGATION_METHOD_NONE`       |
| `PROPAGATION_METHOD_SITE_GROUP` |
| `SCENARIO_DEFAULT`              | The name of the default scenario.
| `TYPE_CHANNEL`                  |
| `TYPE_SINGLE`                   |
| `TYPE_STRUCTURE`                |



