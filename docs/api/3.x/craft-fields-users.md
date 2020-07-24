---
title: craft\fields\Users
code:
  - php
  - twig
---

# Users

Type

:   Class

Namespace

:   craft\fields

Inherits

:   [craft\fields\Users](craft-fields-users.md) &raquo;
[craft\fields\BaseRelationField](craft-fields-baserelationfield.md) &raquo;
[craft\base\Field](craft-base-field.md) &raquo;
[craft\base\SavableComponent](craft-base-savablecomponent.md) &raquo;
[craft\base\Component](craft-base-component.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](craft-base-componentinterface.md), [craft\base\EagerLoadingFieldInterface](craft-base-eagerloadingfieldinterface.md), [craft\base\FieldInterface](craft-base-fieldinterface.md), [craft\base\PreviewableFieldInterface](craft-base-previewablefieldinterface.md), [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [craft\base\FieldTrait](craft-base-fieldtrait.md), [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   3.0.0



Users represents a Users field.





[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allowLimit](craft-fields-baserelationfield.md#allowlimit "Defined by craft\fields\BaseRelationField")                           | [boolean](http://php.net/language.types.boolean) – Whether to allow the Limit setting
| [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources "Defined by craft\fields\BaseRelationField")       | [boolean](http://php.net/language.types.boolean) – Whether to allow multiple source selection in the settings
| [allowSelfRelations](craft-fields-baserelationfield.md#allowselfrelations "Defined by craft\fields\BaseRelationField")           | [boolean](http://php.net/language.types.boolean) – Whether elements should be allowed to relate themselves.
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [columnPrefix](craft-base-fieldtrait.md#columnprefix "Defined by craft\base\FieldTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s content column prefix
| [contentColumnType](craft-base-fieldinterface.md#contentcolumntype "Defined by craft\base\FieldInterface")                       | [string](http://php.net/language.types.string) – The column type.
| [contentGqlType](craft-fields-users.md#contentgqltype)                                                                           | `\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)
| [context](craft-base-fieldtrait.md#context "Defined by craft\base\FieldTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s context
| [dateCreated](craft-base-savablecomponenttrait.md#datecreated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](craft-base-savablecomponenttrait.md#dateupdated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [eagerLoadingGqlConditions](craft-fields-users.md#eagerloadinggqlconditions)                                                     | [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)
| [elementValidationRules](craft-fields-baserelationfield.md#elementvalidationrules "Defined by craft\fields\BaseRelationField")   | [array](http://php.net/language.types.array)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [group](craft-base-fieldinterface.md#group "Defined by craft\base\FieldInterface")                                               | [craft\records\FieldGroup](craft-records-fieldgroup.md), [null](http://php.net/language.types.null)
| [groupId](craft-base-fieldtrait.md#groupid "Defined by craft\base\FieldTrait")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s group’s ID
| [handle](craft-base-fieldtrait.md#handle "Defined by craft\base\FieldTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s handle
| [id](craft-base-savablecomponenttrait.md#id "Defined by craft\base\SavableComponentTrait")                                       | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [instructions](craft-base-fieldtrait.md#instructions "Defined by craft\base\FieldTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s instructions
| [isNew](craft-base-savablecomponentinterface.md#isnew "Defined by craft\base\SavableComponentInterface")                         | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [isTranslatable](craft-fields-baserelationfield.md#istranslatable "Defined by craft\fields\BaseRelationField")                   | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [layoutId](craft-base-fieldtrait.md#layoutid "Defined by craft\base\FieldTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the field layout that the field was fetched from
| [limit](craft-fields-baserelationfield.md#limit "Defined by craft\fields\BaseRelationField")                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of relations this field can have (used if [allowLimit](craft-fields-baserelationfield.md#allowlimit) is set to true)
| [localizeRelations](craft-fields-baserelationfield.md#localizerelations "Defined by craft\fields\BaseRelationField")             | [integer](http://php.net/language.types.integer) – Whether each site should get its own unique set of relations
| [name](craft-base-fieldtrait.md#name "Defined by craft\base\FieldTrait")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s name
| [oldHandle](craft-base-fieldtrait.md#oldhandle "Defined by craft\base\FieldTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s previous handle
| [oldSettings](craft-base-fieldtrait.md#oldsettings "Defined by craft\base\FieldTrait")                                           | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The field’s previous settings
| [required](craft-base-fieldtrait.md#required "Defined by craft\base\FieldTrait")                                                 | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the field is required in the field layout it was fetched from
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchable](craft-base-fieldtrait.md#searchable "Defined by craft\base\FieldTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the field's values should be registered as search keywords on the elements.
| [selectionLabel](craft-fields-baserelationfield.md#selectionlabel "Defined by craft\fields\BaseRelationField")                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The label that should be used on the selection input
| [settings](craft-base-savablecomponentinterface.md#settings "Defined by craft\base\SavableComponentInterface")                   | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-fields-baserelationfield.md#settingshtml "Defined by craft\fields\BaseRelationField")                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOption](craft-base-field.md#sortoption "Defined by craft\base\Field")                                                       | [array](http://php.net/language.types.array)
| [sortOrder](craft-base-fieldtrait.md#sortorder "Defined by craft\base\FieldTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s sort position in the field layout it was fetched from
| [source](craft-fields-baserelationfield.md#source "Defined by craft\fields\BaseRelationField")                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The source key that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to false)
| [sourceOptions](craft-fields-baserelationfield.md#sourceoptions "Defined by craft\fields\BaseRelationField")                     | [array](http://php.net/language.types.array)
| [sources](craft-fields-baserelationfield.md#sources "Defined by craft\fields\BaseRelationField")                                 | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The source keys that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to true)
| [tabId](craft-base-fieldtrait.md#tabid "Defined by craft\base\FieldTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The tab ID of the field layout that the field was fetched from
| [targetSiteFieldHtml](craft-fields-baserelationfield.md#targetsitefieldhtml "Defined by craft\fields\BaseRelationField")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [targetSiteId](craft-fields-baserelationfield.md#targetsiteid "Defined by craft\fields\BaseRelationField")                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The UID of the site that this field should relate elements from
| [translationDescription](craft-base-fieldinterface.md#translationdescription "Defined by craft\base\FieldInterface")             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [translationKeyFormat](craft-base-fieldtrait.md#translationkeyformat "Defined by craft\base\FieldTrait")                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s translation key format, if [translationMethod](craft-base-fieldtrait.md#translationmethod) is "custom"
| [translationMethod](craft-base-fieldtrait.md#translationmethod "Defined by craft\base\FieldTrait")                               | [string](http://php.net/language.types.string) – The field’s translation method
| [uid](craft-base-fieldtrait.md#uid "Defined by craft\base\FieldTrait")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field's UID
| [validateRelatedElements](craft-fields-baserelationfield.md#validaterelatedelements "Defined by craft\fields\BaseRelationField") | [boolean](http://php.net/language.types.boolean) – Whether related elements should be validated when the source element is saved.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [viewMode](craft-fields-baserelationfield.md#viewmode "Defined by craft\fields\BaseRelationField")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The view mode
| [viewModeFieldHtml](craft-fields-baserelationfield.md#viewmodefieldhtml "Defined by craft\fields\BaseRelationField")             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

### `contentGqlType`



Type

:   `\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.3.0







[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php)



### `eagerLoadingGqlConditions`



Type

:   [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.3.0







[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php)





## Protected Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------
| [allowLargeThumbsView](craft-fields-baserelationfield.md#allowlargethumbsview "Defined by craft\fields\BaseRelationField") | [boolean](http://php.net/language.types.boolean) – Whether to allow the “Large Thumbnails” view mode
| [inputJsClass](craft-fields-baserelationfield.md#inputjsclass "Defined by craft\fields\BaseRelationField")                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The JS class that should be initialized for the input
| [inputTemplate](craft-fields-baserelationfield.md#inputtemplate "Defined by craft\fields\BaseRelationField")               | [string](http://php.net/language.types.string) – Template to use for field rendering
| [settingsTemplate](craft-fields-baserelationfield.md#settingstemplate "Defined by craft\fields\BaseRelationField")         | [string](http://php.net/language.types.string) – Template to use for settings rendering
| [sortable](craft-fields-baserelationfield.md#sortable "Defined by craft\fields\BaseRelationField")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements have a custom sort order



## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                         | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                       |
| [__construct()](craft-fields-baserelationfield.md#method-construct "Defined by craft\fields\BaseRelationField")                                   | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                           | Sets value of an object property.
| [__toString()](craft-base-field.md#method-tostring "Defined by craft\base\Field")                                                                 | Use the translated field name as the string representation.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                       | Sets an object property to null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")               | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                               | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                             | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                       | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")                     | Performs actions after a component is deleted.
| [afterElementDelete()](craft-base-fieldinterface.md#method-afterelementdelete "Defined by craft\base\FieldInterface")                             | Performs actions after the element has been deleted.
| [afterElementPropagate()](craft-base-fieldinterface.md#method-afterelementpropagate "Defined by craft\base\FieldInterface")                       | Performs actions after the element has been fully saved and propagated to other sites.
| [afterElementRestore()](craft-base-fieldinterface.md#method-afterelementrestore "Defined by craft\base\FieldInterface")                           | Performs actions after the element has been restored.
| [afterElementSave()](craft-fields-baserelationfield.md#method-afterelementsave "Defined by craft\fields\BaseRelationField")                       | Performs actions after the element has been saved.
| [afterSave()](craft-fields-baserelationfield.md#method-aftersave "Defined by craft\fields\BaseRelationField")                                     | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                     | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")           | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")         | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                   | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                 | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                           | Returns the list of attribute names.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")         | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")                   | Performs actions before a component is deleted.
| [beforeElementDelete()](craft-base-fieldinterface.md#method-beforeelementdelete "Defined by craft\base\FieldInterface")                           | Performs actions before an element is deleted.
| [beforeElementRestore()](craft-base-fieldinterface.md#method-beforeelementrestore "Defined by craft\base\FieldInterface")                         | Performs actions before an element is restored.
| [beforeElementSave()](craft-base-fieldinterface.md#method-beforeelementsave "Defined by craft\base\FieldInterface")                               | Performs actions before an element is saved.
| [beforeSave()](craft-fields-baserelationfield.md#method-beforesave "Defined by craft\fields\BaseRelationField")                                   | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                   | This method is invoked before validation starts.
| [behaviors()](craft-base-model.md#method-behaviors "Defined by craft\base\Model")                                                                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                   | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                         | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")               | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes "Defined by craft\base\Model")                                               | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultSelectionLabel()](craft-fields-users.md#method-defaultselectionlabel)                                                                     | Returns the default [selectionLabel](craft-fields-baserelationfield.md#selectionlabel) value.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")           | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")         | Detaches all behaviors from the component.
| [displayName()](craft-fields-users.md#method-displayname)                                                                                         | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")         | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")       | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                 | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                               | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")   | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")         | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")               | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")             | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                     | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                 | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")               | Returns all behaviors attached to this component.
| [getContentColumnType()](craft-base-fieldinterface.md#method-getcontentcolumntype "Defined by craft\base\FieldInterface")                         | Returns the column type that this field should get within the content table.
| [getContentGqlType()](craft-fields-users.md#method-getcontentgqltype)                                                                             | Returns the GraphQL type to be used for this field type.
| [getEagerLoadingGqlConditions()](craft-fields-users.md#method-geteagerloadinggqlconditions)                                                       | Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading should not be allowed in the GraphQL context.
| [getEagerLoadingMap()](craft-fields-baserelationfield.md#method-geteagerloadingmap "Defined by craft\fields\BaseRelationField")                   | Returns an array that maps source-to-target element IDs based on this custom field.
| [getElementValidationRules()](craft-fields-baserelationfield.md#method-getelementvalidationrules "Defined by craft\fields\BaseRelationField")     | Returns the validation rules for an element with this field.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                   | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                 | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                             | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                     | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                   | Returns the first error of every attribute in the model.
| [getGroup()](craft-base-fieldinterface.md#method-getgroup "Defined by craft\base\FieldInterface")                                                 | Returns the field’s group.
| [getInputHtml()](craft-fields-baserelationfield.md#method-getinputhtml "Defined by craft\fields\BaseRelationField")                               | Returns the field’s input HTML.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                           | Returns whether the component is new (unsaved).
| [getIsTranslatable()](craft-fields-baserelationfield.md#method-getistranslatable "Defined by craft\fields\BaseRelationField")                     | Returns whether the field should be shown as translatable in the UI.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                         | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                         | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-fields-baserelationfield.md#method-getsearchkeywords "Defined by craft\fields\BaseRelationField")                     | Returns the search keywords that should be associated with this field.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")                     | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-fields-baserelationfield.md#method-getsettingshtml "Defined by craft\fields\BaseRelationField")                         | Returns the component’s settings HTML.
| [getSortOption()](craft-base-field.md#method-getsortoption "Defined by craft\base\Field")                                                         | Returns the sort option array that should be included in the element’s [sortOptions()](craft-base-elementinterface.md#method-sortoptions) response.
| [getSourceOptions()](craft-fields-baserelationfield.md#method-getsourceoptions "Defined by craft\fields\BaseRelationField")                       | Normalizes the available sources into select input options.
| [getStaticHtml()](craft-fields-baserelationfield.md#method-getstatichtml "Defined by craft\fields\BaseRelationField")                             | Returns a static (non-editable) version of the field’s input HTML.
| [getTableAttributeHtml()](craft-fields-baserelationfield.md#method-gettableattributehtml "Defined by craft\fields\BaseRelationField")             | Returns the HTML that should be shown for this field in Table View.
| [getTargetSiteFieldHtml()](craft-fields-baserelationfield.md#method-gettargetsitefieldhtml "Defined by craft\fields\BaseRelationField")           | Returns the HTML for the Target Site setting.
| [getTranslationDescription()](craft-base-fieldinterface.md#method-gettranslationdescription "Defined by craft\base\FieldInterface")               | Returns the description of this field’s translation support.
| [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey "Defined by craft\base\FieldInterface")                               | Returns the field’s translation key, based on a given element.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                     | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getViewModeFieldHtml()](craft-fields-baserelationfield.md#method-getviewmodefieldhtml "Defined by craft\fields\BaseRelationField")               | Returns the HTML for the View Mode setting.
| [hasContentColumn()](craft-fields-baserelationfield.md#method-hascontentcolumn "Defined by craft\fields\BaseRelationField")                       | Returns whether this field has a column in the content table.
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                                 | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")       | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property is defined.
| [init()](craft-fields-baserelationfield.md#method-init "Defined by craft\fields\BaseRelationField")                                               | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")   | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")             | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")         | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                 | Returns a value indicating whether the attribute is safe for massive assignments.
| [isEmpty()](craft-base-field.md#method-isempty "Defined by craft\base\Field")                                                                     |
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")                   | Returns whether the component should be selectable in component Type selects.
| [isValueEmpty()](craft-fields-baserelationfield.md#method-isvalueempty "Defined by craft\fields\BaseRelationField")                               | Returns whether the given value should be considered “empty” to a validator.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                       | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                       | Populates a set of models with the data from end user.
| [modifyElementIndexQuery()](craft-fields-baserelationfield.md#method-modifyelementindexquery "Defined by craft\fields\BaseRelationField")         | Modifies an element index query.
| [modifyElementsQuery()](craft-fields-baserelationfield.md#method-modifyelementsquery "Defined by craft\fields\BaseRelationField")                 | Modifies an element query.
| [normalizeValue()](craft-fields-baserelationfield.md#method-normalizevalue "Defined by craft\fields\BaseRelationField")                           | Normalizes the field’s value for use.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                 | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                       | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                             | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                             | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                         | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                   | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")             | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                         | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                   | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                             | Returns a list of scenarios and the corresponding active attributes.
| [serializeValue()](craft-fields-baserelationfield.md#method-serializevalue "Defined by craft\fields\BaseRelationField")                           | Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                     | Sets the attribute values in a massive way.
| [setIsFresh()](craft-base-fieldinterface.md#method-setisfresh "Defined by craft\base\FieldInterface")                                             | Sets whether the field is fresh.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                         | Sets the scenario for the model.
| [settingsAttributes()](craft-fields-baserelationfield.md#method-settingsattributes "Defined by craft\fields\BaseRelationField")                   | Returns the list of settings attribute names.
| [supportedTranslationMethods()](craft-fields-baserelationfield.md#method-supportedtranslationmethods "Defined by craft\fields\BaseRelationField") | Returns which translation methods the field supports.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")               | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                         | Triggers an event.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                           | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")               | Validates multiple models.
| [validateRelatedElements()](craft-fields-baserelationfield.md#method-validaterelatedelements "Defined by craft\fields\BaseRelationField")         | Validates the related elements.
| [valueType()](craft-fields-users.md#method-valuetype)                                                                                             | Returns the PHPDoc type this field’s values will have.

### `defaultSelectionLabel()`





Returns the default [selectionLabel](craft-fields-baserelationfield.md#selectionlabel) value.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L48-L51)



#### Returns

[string](http://php.net/language.types.string) – The default selection label



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L32-L35)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `getContentGqlType()`



Since

:   3.3.0



Returns the GraphQL type to be used for this field type.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L64-L72)



#### Returns

`\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)



### `getEagerLoadingGqlConditions()`



Since

:   3.3.0



Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading
should not be allowed in the GraphQL context.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L78-L94)



#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)



### `valueType()`



Since

:   3.2.0



Returns the PHPDoc type this field’s values will have.



It will be used by the generated `CustomFieldBehavior` class.

If the values can be of more than one type, return multiple types separated by `|`s.

```php
public static function phpDocType()
{
     return 'int|mixed|\\craft\\elements\\db\\ElementQuery';
}
```




[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L56-L59)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [availableSources()](craft-fields-baserelationfield.md#method-availablesources "Defined by craft\fields\BaseRelationField")                             | Returns the sources that should be available to choose from within the field's settings
| [defineRules()](craft-fields-baserelationfield.md#method-definerules "Defined by craft\fields\BaseRelationField")                                       | Returns the validation rules for attributes.
| [elementType()](craft-fields-users.md#method-elementtype)                                                                                               | Returns the element class associated with this field type.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [inputSelectionCriteria()](craft-fields-baserelationfield.md#method-inputselectioncriteria "Defined by craft\fields\BaseRelationField")                 | Returns any additional criteria parameters limiting which elements the field should be able to select.
| [inputSiteId()](craft-fields-baserelationfield.md#method-inputsiteid "Defined by craft\fields\BaseRelationField")                                       | Returns the site ID that the input should select elements from.
| [inputSources()](craft-fields-baserelationfield.md#method-inputsources "Defined by craft\fields\BaseRelationField")                                     | Returns an array of the source keys the field should be able to select elements from.
| [inputTemplateVariables()](craft-fields-baserelationfield.md#method-inputtemplatevariables "Defined by craft\fields\BaseRelationField")                 | Returns an array of variables that should be passed to the input template.
| [isFresh()](craft-base-field.md#method-isfresh "Defined by craft\base\Field")                                                                           | Returns whether this is the first time the element's content has been edited.
| [requestParamName()](craft-base-field.md#method-requestparamname "Defined by craft\base\Field")                                                         | Returns the field’s param name on the request.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [settingsTemplateVariables()](craft-fields-baserelationfield.md#method-settingstemplatevariables "Defined by craft\fields\BaseRelationField")           | Returns an array of variables that should be passed to the settings template.
| [supportedViewModes()](craft-fields-baserelationfield.md#method-supportedviewmodes "Defined by craft\fields\BaseRelationField")                         | Returns the field’s supported view modes.
| [targetSiteId()](craft-fields-baserelationfield.md#method-targetsiteid "Defined by craft\fields\BaseRelationField")                                     | Returns the site ID that target elements should have.
| [viewMode()](craft-fields-baserelationfield.md#method-viewmode "Defined by craft\fields\BaseRelationField")                                             | Returns the field’s current view mode.

### `elementType()`





Returns the element class associated with this field type.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/Users.php#L40-L43)



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



