---
title: craft\commerce\fields\Variants
code:
  - php
  - twig
---

# Variants

Type

:   Class

Namespace

:   craft\commerce\fields

Inherits

:   [craft\commerce\fields\Variants](craft-commerce-fields-variants.md) &raquo;
[craft\fields\BaseRelationField](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html) &raquo;
[craft\base\Field](https://docs.craftcms.com/api/v3/craft-base-field.html) &raquo;
[craft\base\SavableComponent](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\EagerLoadingFieldInterface](https://docs.craftcms.com/api/v3/craft-base-eagerloadingfieldinterface.html), [craft\base\FieldInterface](https://docs.craftcms.com/api/v3/craft-base-fieldinterface.html), [craft\base\PreviewableFieldInterface](https://docs.craftcms.com/api/v3/craft-base-previewablefieldinterface.html), [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\FieldTrait](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html), [craft\base\SavableComponentTrait](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Class Variant Field





[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php)


## Public Properties

| Property                                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                                    | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allowLimit](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowlimit "Defined by craft\fields\BaseRelationField")                           | [boolean](http://php.net/language.types.boolean) – Whether to allow the Limit setting
| [allowMultipleSources](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowmultiplesources "Defined by craft\fields\BaseRelationField")       | [boolean](http://php.net/language.types.boolean) – Whether to allow multiple source selection in the settings
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                                | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                          | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [columnPrefix](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#columnprefix "Defined by craft\base\FieldTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s content column prefix
| [contentColumnType](https://docs.craftcms.com/api/v3/craft-base-field.html#contentcolumntype "Defined by craft\base\Field")                                         | [string](http://php.net/language.types.string) – The column type.
| [contentGqlType](craft-commerce-fields-variants.md#contentgqltype)                                                                                                  | `\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)
| [context](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#context "Defined by craft\base\FieldTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s context
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#datecreated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#dateupdated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [eagerLoadingGqlConditions](https://docs.craftcms.com/api/v3/craft-base-field.html#eagerloadinggqlconditions "Defined by craft\base\Field")                         | [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)
| [elementValidationRules](https://docs.craftcms.com/api/v3/craft-base-field.html#elementvalidationrules "Defined by craft\base\Field")                               | [array](http://php.net/language.types.array)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                                        | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                              | [array](http://php.net/language.types.array) – The first errors.
| [group](https://docs.craftcms.com/api/v3/craft-base-field.html#group "Defined by craft\base\Field")                                                                 | [craft\records\FieldGroup](https://docs.craftcms.com/api/v3/craft-records-fieldgroup.html), [null](http://php.net/language.types.null)
| [groupId](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#groupid "Defined by craft\base\FieldTrait")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s group’s ID
| [handle](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#handle "Defined by craft\base\FieldTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s handle
| [id](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#id "Defined by craft\base\SavableComponentTrait")                                       | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [instructions](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#instructions "Defined by craft\base\FieldTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s instructions
| [isNew](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#isnew "Defined by craft\base\SavableComponent")                                           | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [isTranslatable](https://docs.craftcms.com/api/v3/craft-base-field.html#istranslatable "Defined by craft\base\Field")                                               | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                                    | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [layoutId](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#layoutid "Defined by craft\base\FieldTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the field layout that the field was fetched from
| [limit](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#limit "Defined by craft\fields\BaseRelationField")                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of relations this field can have (used if [allowLimit](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowlimit) is set to true)
| [localizeRelations](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#localizerelations "Defined by craft\fields\BaseRelationField")             | [integer](http://php.net/language.types.integer) – Whether each site should get its own unique set of relations
| [name](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#name "Defined by craft\base\FieldTrait")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s name
| [oldHandle](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#oldhandle "Defined by craft\base\FieldTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s previous handle
| [oldSettings](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#oldsettings "Defined by craft\base\FieldTrait")                                           | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The field’s previous settings
| [required](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#required "Defined by craft\base\FieldTrait")                                                 | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the field is required in the field layout it was fetched from
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                                    | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchable](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#searchable "Defined by craft\base\FieldTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the field's values should be registered as search keywords on the elements.
| [selectionLabel](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#selectionlabel "Defined by craft\fields\BaseRelationField")                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The label that should be used on the selection input
| [settings](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#settings "Defined by craft\base\SavableComponent")                                     | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#settingshtml "Defined by craft\base\SavableComponent")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOption](https://docs.craftcms.com/api/v3/craft-base-field.html#sortoption "Defined by craft\base\Field")                                                       | [array](http://php.net/language.types.array)
| [sortOrder](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#sortorder "Defined by craft\base\FieldTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s sort position in the field layout it was fetched from
| [source](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#source "Defined by craft\fields\BaseRelationField")                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The source key that this field can relate elements from (used if [allowMultipleSources](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowmultiplesources) is set to false)
| [sourceOptions](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#sourceoptions "Defined by craft\fields\BaseRelationField")                     | [array](http://php.net/language.types.array)
| [sources](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#sources "Defined by craft\fields\BaseRelationField")                                 | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The source keys that this field can relate elements from (used if [allowMultipleSources](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowmultiplesources) is set to true)
| [tabId](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#tabid "Defined by craft\base\FieldTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The tab ID of the field layout that the field was fetched from
| [targetSiteFieldHtml](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#targetsitefieldhtml "Defined by craft\fields\BaseRelationField")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [targetSiteId](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#targetsiteid "Defined by craft\fields\BaseRelationField")                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The UID of the site that this field should relate elements from
| [translationDescription](https://docs.craftcms.com/api/v3/craft-base-field.html#translationdescription "Defined by craft\base\Field")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [translationKeyFormat](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#translationkeyformat "Defined by craft\base\FieldTrait")                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s translation key format, if [translationMethod](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#translationmethod) is "custom"
| [translationMethod](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#translationmethod "Defined by craft\base\FieldTrait")                               | [string](http://php.net/language.types.string) – The field’s translation method
| [uid](https://docs.craftcms.com/api/v3/craft-base-fieldtrait.html#uid "Defined by craft\base\FieldTrait")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field's UID
| [validateRelatedElements](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#validaterelatedelements "Defined by craft\fields\BaseRelationField") | [boolean](http://php.net/language.types.boolean) – Whether related elements should be validated when the source element is saved.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                                | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [viewMode](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#viewmode "Defined by craft\fields\BaseRelationField")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The view mode
| [viewModeFieldHtml](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#viewmodefieldhtml "Defined by craft\fields\BaseRelationField")             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

### `contentGqlType`



Type

:   `\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.1.4







[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php)





## Protected Properties

| Property                                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------
| [allowLargeThumbsView](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#allowlargethumbsview "Defined by craft\fields\BaseRelationField") | [boolean](http://php.net/language.types.boolean) – Whether to allow the “Large Thumbnails” view mode
| [inputJsClass](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#inputjsclass "Defined by craft\fields\BaseRelationField")                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The JS class that should be initialized for the input
| [inputTemplate](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#inputtemplate "Defined by craft\fields\BaseRelationField")               | [string](http://php.net/language.types.string) – Template to use for field rendering
| [settingsTemplate](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#settingstemplate "Defined by craft\fields\BaseRelationField")         | [string](http://php.net/language.types.string) – Template to use for settings rendering
| [sortable](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#sortable "Defined by craft\fields\BaseRelationField")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements have a custom sort order



## Public Methods

| Method                                                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                                      | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                             |
| [__construct()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-__construct "Defined by craft\fields\BaseRelationField")                         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                                        | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                                                    | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                                        | Sets the value of a component property.
| [__toString()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-__tostring "Defined by craft\base\Field")                                                       | Use the translated field name as the string representation.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                    | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                          | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                                          | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                        | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                               | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-afterdelete "Defined by craft\base\SavableComponent")                               | Performs actions after a component is deleted.
| [afterElementDelete()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-afterelementdelete "Defined by craft\base\Field")                                       | Performs actions after the element has been deleted.
| [afterElementPropagate()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-afterelementpropagate "Defined by craft\base\Field")                                 | Performs actions after the element has been fully saved and propagated to other sites.
| [afterElementRestore()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-afterelementrestore "Defined by craft\base\Field")                                     | Performs actions after the element has been restored.
| [afterElementSave()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-afterelementsave "Defined by craft\base\Field")                                           | Performs actions after the element has been saved.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-aftersave "Defined by craft\base\SavableComponent")                                   | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                      | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                    | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                              | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                                            | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                                                      | Returns the list of attribute names.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforeapplydelete "Defined by craft\base\SavableComponent")                   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforedelete "Defined by craft\base\SavableComponent")                             | Performs actions before a component is deleted.
| [beforeElementDelete()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-beforeelementdelete "Defined by craft\base\Field")                                     | Performs actions before an element is deleted.
| [beforeElementRestore()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-beforeelementrestore "Defined by craft\base\Field")                                   | Performs actions before an element is restored.
| [beforeElementSave()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-beforeelementsave "Defined by craft\base\Field")                                         | Performs actions before an element is saved.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-beforesave "Defined by craft\base\SavableComponent")                                 | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                              | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                                                         | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                              | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                    | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                          | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                       | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultSelectionLabel()](craft-commerce-fields-variants.md#method-defaultselectionlabel)                                                                                    | Returns the default [selectionLabel](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#selectionlabel) value.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                      | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                    | Detaches all behaviors from the component.
| [displayName()](craft-commerce-fields-variants.md#method-displayname)                                                                                                        | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                    | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                                  | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                            | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                          | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                              | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                                    | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                          | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")                                        | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                                | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                            | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                          | Returns all behaviors attached to this component.
| [getContentColumnType()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getcontentcolumntype "Defined by craft\base\Field")                                   | Returns the column type that this field should get within the content table.
| [getContentGqlType()](craft-commerce-fields-variants.md#method-getcontentgqltype)                                                                                            | Returns the GraphQL type to be used for this field type.
| [getEagerLoadingGqlConditions()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-geteagerloadinggqlconditions "Defined by craft\base\Field")                   | Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading should not be allowed in the GraphQL context.
| [getEagerLoadingMap()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-geteagerloadingmap "Defined by craft\fields\BaseRelationField")           | Returns an array that maps source-to-target element IDs based on this custom field.
| [getElementValidationRules()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getelementvalidationrules "Defined by craft\base\Field")                         | Returns the validation rules for an element with this field.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                           | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                            | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                        | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                              | Returns the first error of every attribute in the model.
| [getGroup()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getgroup "Defined by craft\base\Field")                                                           | Returns the field’s group.
| [getInputHtml()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getinputhtml "Defined by craft\base\Field")                                                   | Returns the field’s input HTML.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-getisnew "Defined by craft\base\SavableComponent")                                     | Returns whether the component is new (unsaved).
| [getIsTranslatable()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getistranslatable "Defined by craft\base\Field")                                         | Returns whether the field should be shown as translatable in the UI.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                    | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                    | Returns the scenario that this model is used in.
| [getSearchKeywords()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getsearchkeywords "Defined by craft\base\Field")                                         | Returns the search keywords that should be associated with this field.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-getsettings "Defined by craft\base\SavableComponent")                               | Returns an array of the component’s settings.
| [getSettingsHtml()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-getsettingshtml "Defined by craft\base\SavableComponent")                       | Returns the component’s settings HTML.
| [getSortOption()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getsortoption "Defined by craft\base\Field")                                                 | Returns the sort option array that should be included in the element’s [sortOptions()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-sortoptions) response.
| [getSourceOptions()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-getsourceoptions "Defined by craft\fields\BaseRelationField")               | Normalizes the available sources into select input options.
| [getStaticHtml()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-getstatichtml "Defined by craft\base\Field")                                                 | Returns a static (non-editable) version of the field’s input HTML.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-gettableattributehtml "Defined by craft\base\Field")                                 | Returns the HTML that should be shown for this field in Table View.
| [getTargetSiteFieldHtml()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-gettargetsitefieldhtml "Defined by craft\fields\BaseRelationField")   | Returns the HTML for the Target Site setting.
| [getTranslationDescription()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-gettranslationdescription "Defined by craft\base\Field")                         | Returns the description of this field’s translation support.
| [getTranslationKey()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-gettranslationkey "Defined by craft\base\Field")                                         | Returns the field’s translation key, based on a given element.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getViewModeFieldHtml()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-getviewmodefieldhtml "Defined by craft\fields\BaseRelationField")       | Returns the HTML for the View Mode setting.
| [hasContentColumn()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-hascontentcolumn "Defined by craft\base\Field")                                           | Returns whether this field has a column in the content table.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                         | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                            | Returns a value indicating whether a property is defined for this component.
| [init()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-init "Defined by craft\base\Field")                                                                   | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                              | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                                        | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                                    | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                            | Returns a value indicating whether the attribute is safe for massive assignments.
| [isEmpty()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-isempty "Defined by craft\base\Field")                                                             |
| [isSelectable()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-isselectable "Defined by craft\base\SavableComponent")                             | Returns whether the component should be selectable in component Type selects.
| [isValueEmpty()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-isvalueempty "Defined by craft\base\Field")                                                   | Returns whether the given value should be considered “empty” to a validator.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                  | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                  | Populates a set of models with the data from end user.
| [modifyElementIndexQuery()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-modifyelementindexquery "Defined by craft\base\Field")                             | Modifies an element index query.
| [modifyElementsQuery()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-modifyelementsquery "Defined by craft\base\Field")                                     | Modifies an element query.
| [normalizeValue()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-normalizevalue "Defined by craft\base\Field")                                               | Normalizes the field’s value for use.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                            | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                                                  | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                        | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                        | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                    | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                              | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                        | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                                 | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                              | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                        | Returns a list of scenarios and the corresponding active attributes.
| [serializeValue()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-serializevalue "Defined by craft\base\Field")                                               | Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                | Sets the attribute values in a massive way.
| [setIsFresh()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-setisfresh "Defined by craft\base\Field")                                                       | Sets whether the field is fresh.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                    | Sets the scenario for the model.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html#method-settingsattributes "Defined by craft\base\SavableComponent")                 | Returns the list of settings attribute names.
| [supportedTranslationMethods()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-supportedtranslationmethods "Defined by craft\base\Field")                     | Returns which translation methods the field supports.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                          | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                    | Triggers an event.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                   | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                          | Validates multiple models.
| [validateRelatedElements()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-validaterelatedelements "Defined by craft\fields\BaseRelationField") | Validates the related elements.
| [valueType()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-valuetype "Defined by craft\base\Field")                                                         | Returns the PHPDoc type this field’s values will have.

### `defaultSelectionLabel()`





Returns the default [selectionLabel](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#selectionlabel) value.








[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php#L37-L40)



#### Returns

[string](http://php.net/language.types.string) – The default selection label



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php#L29-L32)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `getContentGqlType()`



Since

:   3.1.4



Returns the GraphQL type to be used for this field type.








[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php#L46-L54)



#### Returns

`\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                                           | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [availableSources()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-availablesources "Defined by craft\fields\BaseRelationField")                   | Returns the sources that should be available to choose from within the field's settings
| [defineRules()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-definerules "Defined by craft\base\Field")                                                         | Returns the validation rules for attributes.
| [elementType()](craft-commerce-fields-variants.md#method-elementtype)                                                                                                            | Returns the element class associated with this field type.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")                            | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")                          | Extracts the root field names from nested fields.
| [inputSelectionCriteria()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-inputselectioncriteria "Defined by craft\fields\BaseRelationField")       | Returns any additional criteria parameters limiting which elements the field should be able to select.
| [inputSiteId()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-inputsiteid "Defined by craft\fields\BaseRelationField")                             | Returns the site ID that the input should select elements from.
| [inputSources()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-inputsources "Defined by craft\fields\BaseRelationField")                           | Returns an array of the source keys the field should be able to select elements from.
| [inputTemplateVariables()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-inputtemplatevariables "Defined by craft\fields\BaseRelationField")       | Returns an array of variables that should be passed to the input template.
| [isFresh()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-isfresh "Defined by craft\base\Field")                                                                 | Returns whether this is the first time the element's content has been edited.
| [requestParamName()](https://docs.craftcms.com/api/v3/craft-base-field.html#method-requestparamname "Defined by craft\base\Field")                                               | Returns the field’s param name on the request.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")                                  | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [settingsTemplateVariables()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-settingstemplatevariables "Defined by craft\fields\BaseRelationField") | Returns an array of variables that should be passed to the settings template.
| [supportedViewModes()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-supportedviewmodes "Defined by craft\fields\BaseRelationField")               | Returns the field’s supported view modes.
| [targetSiteId()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-targetsiteid "Defined by craft\fields\BaseRelationField")                           | Returns the site ID that target elements should have.
| [viewMode()](https://docs.craftcms.com/api/v3/craft-fields-baserelationfield.html#method-viewmode "Defined by craft\fields\BaseRelationField")                                   | Returns the field’s current view mode.

### `elementType()`





Returns the element class associated with this field type.








[View source](https://github.com/craftcms/commerce/blob/master/src/fields/Variants.php#L59-L62)



#### Returns

[string](http://php.net/language.types.string) – The Element class name

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the method hasn't been implemented by the subclass




## Constants

| Constant                        | Description
| ------------------------------- | ---------------------------------
| `SCENARIO_DEFAULT`              | The name of the default scenario.
| `TRANSLATION_METHOD_CUSTOM`     |
| `TRANSLATION_METHOD_LANGUAGE`   |
| `TRANSLATION_METHOD_NONE`       |
| `TRANSLATION_METHOD_SITE`       |
| `TRANSLATION_METHOD_SITE_GROUP` |



