---
title: craft\fields\BaseRelationField
code:
  - php
  - twig
---

# BaseRelationField

Type

:   Abstract Class

Namespace

:   craft\fields

Inherits

:   [craft\fields\BaseRelationField](craft-fields-baserelationfield.md) &raquo;
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

Extended by

:   [craft\fields\Assets](craft-fields-assets.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Users](craft-fields-users.md)

Since

:   3.0.0



BaseRelationField is the base class for classes representing a relational field.





[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)


## Public Properties

| Property                                                                                                                                           | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                   | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allowLimit](craft-fields-baserelationfield.md#allowlimit)                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether to allow the Limit setting
| [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources)                                                                     | [boolean](http://php.net/language.types.boolean) – Whether to allow multiple source selection in the settings
| [allowSelfRelations](craft-fields-baserelationfield.md#allowselfrelations)                                                                         | [boolean](http://php.net/language.types.boolean) – Whether elements should be allowed to relate themselves.
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                               | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                         | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [columnPrefix](craft-base-fieldtrait.md#columnprefix "Defined by craft\base\FieldTrait")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s content column prefix
| [contentColumnType](craft-base-fieldinterface.md#contentcolumntype "Defined by craft\base\FieldInterface")                                         | [string](http://php.net/language.types.string) – The column type.
| [contentGqlType](craft-base-fieldinterface.md#contentgqltype "Defined by craft\base\FieldInterface")                                               | `\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)
| [context](craft-base-fieldtrait.md#context "Defined by craft\base\FieldTrait")                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s context
| [dateCreated](craft-base-savablecomponenttrait.md#datecreated "Defined by craft\base\SavableComponentTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](craft-base-savablecomponenttrait.md#dateupdated "Defined by craft\base\SavableComponentTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [eagerLoadingGqlConditions](craft-base-eagerloadingfieldinterface.md#eagerloadinggqlconditions "Defined by craft\base\EagerLoadingFieldInterface") | [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)
| [elementValidationRules](craft-fields-baserelationfield.md#elementvalidationrules)                                                                 | [array](http://php.net/language.types.array)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                       | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                             | [array](http://php.net/language.types.array) – The first errors.
| [group](craft-base-fieldinterface.md#group "Defined by craft\base\FieldInterface")                                                                 | [craft\records\FieldGroup](craft-records-fieldgroup.md), [null](http://php.net/language.types.null)
| [groupId](craft-base-fieldtrait.md#groupid "Defined by craft\base\FieldTrait")                                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s group’s ID
| [handle](craft-base-fieldtrait.md#handle "Defined by craft\base\FieldTrait")                                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s handle
| [id](craft-base-savablecomponenttrait.md#id "Defined by craft\base\SavableComponentTrait")                                                         | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [instructions](craft-base-fieldtrait.md#instructions "Defined by craft\base\FieldTrait")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s instructions
| [isNew](craft-base-savablecomponentinterface.md#isnew "Defined by craft\base\SavableComponentInterface")                                           | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [isTranslatable](craft-fields-baserelationfield.md#istranslatable)                                                                                 | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                   | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [layoutId](craft-base-fieldtrait.md#layoutid "Defined by craft\base\FieldTrait")                                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the field layout that the field was fetched from
| [limit](craft-fields-baserelationfield.md#limit)                                                                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of relations this field can have (used if [allowLimit](craft-fields-baserelationfield.md#allowlimit) is set to true)
| [localizeRelations](craft-fields-baserelationfield.md#localizerelations)                                                                           | [integer](http://php.net/language.types.integer) – Whether each site should get its own unique set of relations
| [name](craft-base-fieldtrait.md#name "Defined by craft\base\FieldTrait")                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s name
| [oldHandle](craft-base-fieldtrait.md#oldhandle "Defined by craft\base\FieldTrait")                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s previous handle
| [oldSettings](craft-base-fieldtrait.md#oldsettings "Defined by craft\base\FieldTrait")                                                             | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The field’s previous settings
| [required](craft-base-fieldtrait.md#required "Defined by craft\base\FieldTrait")                                                                   | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the field is required in the field layout it was fetched from
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                   | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchable](craft-base-fieldtrait.md#searchable "Defined by craft\base\FieldTrait")                                                               | [boolean](http://php.net/language.types.boolean) – Whether the field's values should be registered as search keywords on the elements.
| [selectionLabel](craft-fields-baserelationfield.md#selectionlabel)                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The label that should be used on the selection input
| [settings](craft-base-savablecomponentinterface.md#settings "Defined by craft\base\SavableComponentInterface")                                     | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-fields-baserelationfield.md#settingshtml)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOption](craft-base-field.md#sortoption "Defined by craft\base\Field")                                                                         | [array](http://php.net/language.types.array)
| [sortOrder](craft-base-fieldtrait.md#sortorder "Defined by craft\base\FieldTrait")                                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s sort position in the field layout it was fetched from
| [source](craft-fields-baserelationfield.md#source)                                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The source key that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to false)
| [sourceOptions](craft-fields-baserelationfield.md#sourceoptions)                                                                                   | [array](http://php.net/language.types.array)
| [sources](craft-fields-baserelationfield.md#sources)                                                                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The source keys that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to true)
| [tabId](craft-base-fieldtrait.md#tabid "Defined by craft\base\FieldTrait")                                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The tab ID of the field layout that the field was fetched from
| [targetSiteFieldHtml](craft-fields-baserelationfield.md#targetsitefieldhtml)                                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [targetSiteId](craft-fields-baserelationfield.md#targetsiteid)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The UID of the site that this field should relate elements from
| [translationDescription](craft-base-fieldinterface.md#translationdescription "Defined by craft\base\FieldInterface")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [translationKeyFormat](craft-base-fieldtrait.md#translationkeyformat "Defined by craft\base\FieldTrait")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s translation key format, if [translationMethod](craft-base-fieldtrait.md#translationmethod) is "custom"
| [translationMethod](craft-base-fieldtrait.md#translationmethod "Defined by craft\base\FieldTrait")                                                 | [string](http://php.net/language.types.string) – The field’s translation method
| [uid](craft-base-fieldtrait.md#uid "Defined by craft\base\FieldTrait")                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field's UID
| [validateRelatedElements](craft-fields-baserelationfield.md#validaterelatedelements)                                                               | [boolean](http://php.net/language.types.boolean) – Whether related elements should be validated when the source element is saved.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                               | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [viewMode](craft-fields-baserelationfield.md#viewmode)                                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The view mode
| [viewModeFieldHtml](craft-fields-baserelationfield.md#viewmodefieldhtml)                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

### `allowLimit`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to allow the Limit setting



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L160)



### `allowMultipleSources`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to allow multiple source selection in the settings



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L155)



### `allowSelfRelations`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.21



Whether elements should be allowed to relate themselves.



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L166)



### `elementValidationRules`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)



### `isTranslatable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)



### `limit`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The maximum number of relations this field can have (used if [allowLimit](craft-fields-baserelationfield.md#allowlimit) is set to true)



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L135)



### `localizeRelations`



Type

:   [integer](http://php.net/language.types.integer)



Whether each site should get its own unique set of relations



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L150)



### `selectionLabel`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The label that should be used on the selection input



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L140)



### `settingsHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)



### `source`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The source key that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to false)



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L120)



### `sourceOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)



### `sources`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The source keys that this field can relate elements from (used if [allowMultipleSources](craft-fields-baserelationfield.md#allowmultiplesources) is set to true)



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L115)



### `targetSiteFieldHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)



### `targetSiteId`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The UID of the site that this field should relate elements from



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L125)



### `validateRelatedElements`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether related elements should be validated when the source element is saved.



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L145)



### `viewMode`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The view mode



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L130)



### `viewModeFieldHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php)





## Protected Properties

| Property                                                                       | Description
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------
| [allowLargeThumbsView](craft-fields-baserelationfield.md#allowlargethumbsview) | [boolean](http://php.net/language.types.boolean) – Whether to allow the “Large Thumbnails” view mode
| [inputJsClass](craft-fields-baserelationfield.md#inputjsclass)                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The JS class that should be initialized for the input
| [inputTemplate](craft-fields-baserelationfield.md#inputtemplate)               | [string](http://php.net/language.types.string) – Template to use for field rendering
| [settingsTemplate](craft-fields-baserelationfield.md#settingstemplate)         | [string](http://php.net/language.types.string) – Template to use for settings rendering
| [sortable](craft-fields-baserelationfield.md#sortable)                         | [boolean](http://php.net/language.types.boolean) – Whether the elements have a custom sort order

### `allowLargeThumbsView`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to allow the “Large Thumbnails” view mode



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L171)



### `inputJsClass`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The JS class that should be initialized for the input



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L186)



### `inputTemplate`



Type

:   [string](http://php.net/language.types.string)



Template to use for field rendering



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L181)



### `settingsTemplate`



Type

:   [string](http://php.net/language.types.string)



Template to use for settings rendering



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L176)



### `sortable`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the elements have a custom sort order



[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L191)





## Public Methods

| Method                                                                                                                                                            | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                         | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                                       |
| [__construct()](craft-fields-baserelationfield.md#method-construct)                                                                                               | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                           | Sets value of an object property.
| [__toString()](craft-base-field.md#method-tostring "Defined by craft\base\Field")                                                                                 | Use the translated field name as the string representation.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                       | Sets an object property to null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                               | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                               | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                             | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                                       | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")                                     | Performs actions after a component is deleted.
| [afterElementDelete()](craft-base-fieldinterface.md#method-afterelementdelete "Defined by craft\base\FieldInterface")                                             | Performs actions after the element has been deleted.
| [afterElementPropagate()](craft-base-fieldinterface.md#method-afterelementpropagate "Defined by craft\base\FieldInterface")                                       | Performs actions after the element has been fully saved and propagated to other sites.
| [afterElementRestore()](craft-base-fieldinterface.md#method-afterelementrestore "Defined by craft\base\FieldInterface")                                           | Performs actions after the element has been restored.
| [afterElementSave()](craft-fields-baserelationfield.md#method-afterelementsave)                                                                                   | Performs actions after the element has been saved.
| [afterSave()](craft-fields-baserelationfield.md#method-aftersave)                                                                                                 | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                     | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                           | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                         | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                   | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                                 | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                                           | Returns the list of attribute names.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")                         | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")                                   | Performs actions before a component is deleted.
| [beforeElementDelete()](craft-base-fieldinterface.md#method-beforeelementdelete "Defined by craft\base\FieldInterface")                                           | Performs actions before an element is deleted.
| [beforeElementRestore()](craft-base-fieldinterface.md#method-beforeelementrestore "Defined by craft\base\FieldInterface")                                         | Performs actions before an element is restored.
| [beforeElementSave()](craft-base-fieldinterface.md#method-beforeelementsave "Defined by craft\base\FieldInterface")                                               | Performs actions before an element is saved.
| [beforeSave()](craft-fields-baserelationfield.md#method-beforesave)                                                                                               | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                   | This method is invoked before validation starts.
| [behaviors()](craft-base-model.md#method-behaviors "Defined by craft\base\Model")                                                                                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                   | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                         | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                               | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes "Defined by craft\base\Model")                                                               | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultSelectionLabel()](craft-fields-baserelationfield.md#method-defaultselectionlabel)                                                                         | Returns the default [selectionLabel](craft-fields-baserelationfield.md#selectionlabel) value.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                           | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                         | Detaches all behaviors from the component.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                                                   | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                         | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                       | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                 | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                               | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                   | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                         | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                               | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")                             | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                     | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                 | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                               | Returns all behaviors attached to this component.
| [getContentColumnType()](craft-base-fieldinterface.md#method-getcontentcolumntype "Defined by craft\base\FieldInterface")                                         | Returns the column type that this field should get within the content table.
| [getContentGqlType()](craft-base-fieldinterface.md#method-getcontentgqltype "Defined by craft\base\FieldInterface")                                               | Returns the GraphQL type to be used for this field type.
| [getEagerLoadingGqlConditions()](craft-base-eagerloadingfieldinterface.md#method-geteagerloadinggqlconditions "Defined by craft\base\EagerLoadingFieldInterface") | Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading should not be allowed in the GraphQL context.
| [getEagerLoadingMap()](craft-fields-baserelationfield.md#method-geteagerloadingmap)                                                                               | Returns an array that maps source-to-target element IDs based on this custom field.
| [getElementValidationRules()](craft-fields-baserelationfield.md#method-getelementvalidationrules)                                                                 | Returns the validation rules for an element with this field.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                                   | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                 | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                             | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                     | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                   | Returns the first error of every attribute in the model.
| [getGroup()](craft-base-fieldinterface.md#method-getgroup "Defined by craft\base\FieldInterface")                                                                 | Returns the field’s group.
| [getInputHtml()](craft-fields-baserelationfield.md#method-getinputhtml)                                                                                           | Returns the field’s input HTML.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                                           | Returns whether the component is new (unsaved).
| [getIsTranslatable()](craft-fields-baserelationfield.md#method-getistranslatable)                                                                                 | Returns whether the field should be shown as translatable in the UI.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                         | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                         | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-fields-baserelationfield.md#method-getsearchkeywords)                                                                                 | Returns the search keywords that should be associated with this field.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")                                     | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-fields-baserelationfield.md#method-getsettingshtml)                                                                                     | Returns the component’s settings HTML.
| [getSortOption()](craft-base-field.md#method-getsortoption "Defined by craft\base\Field")                                                                         | Returns the sort option array that should be included in the element’s [sortOptions()](craft-base-elementinterface.md#method-sortoptions) response.
| [getSourceOptions()](craft-fields-baserelationfield.md#method-getsourceoptions)                                                                                   | Normalizes the available sources into select input options.
| [getStaticHtml()](craft-fields-baserelationfield.md#method-getstatichtml)                                                                                         | Returns a static (non-editable) version of the field’s input HTML.
| [getTableAttributeHtml()](craft-fields-baserelationfield.md#method-gettableattributehtml)                                                                         | Returns the HTML that should be shown for this field in Table View.
| [getTargetSiteFieldHtml()](craft-fields-baserelationfield.md#method-gettargetsitefieldhtml)                                                                       | Returns the HTML for the Target Site setting.
| [getTranslationDescription()](craft-base-fieldinterface.md#method-gettranslationdescription "Defined by craft\base\FieldInterface")                               | Returns the description of this field’s translation support.
| [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey "Defined by craft\base\FieldInterface")                                               | Returns the field’s translation key, based on a given element.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                     | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getViewModeFieldHtml()](craft-fields-baserelationfield.md#method-getviewmodefieldhtml)                                                                           | Returns the HTML for the View Mode setting.
| [hasContentColumn()](craft-fields-baserelationfield.md#method-hascontentcolumn)                                                                                   | Returns whether this field has a column in the content table.
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                                                 | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                       | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                               | Returns a value indicating whether a property is defined.
| [init()](craft-fields-baserelationfield.md#method-init)                                                                                                           | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                   | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                             | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                         | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                 | Returns a value indicating whether the attribute is safe for massive assignments.
| [isEmpty()](craft-base-field.md#method-isempty "Defined by craft\base\Field")                                                                                     |
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")                                   | Returns whether the component should be selectable in component Type selects.
| [isValueEmpty()](craft-fields-baserelationfield.md#method-isvalueempty)                                                                                           | Returns whether the given value should be considered “empty” to a validator.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                       | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                       | Populates a set of models with the data from end user.
| [modifyElementIndexQuery()](craft-fields-baserelationfield.md#method-modifyelementindexquery)                                                                     | Modifies an element index query.
| [modifyElementsQuery()](craft-fields-baserelationfield.md#method-modifyelementsquery)                                                                             | Modifies an element query.
| [normalizeValue()](craft-fields-baserelationfield.md#method-normalizevalue)                                                                                       | Normalizes the field’s value for use.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                 | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                                       | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                             | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                             | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                         | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                   | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                             | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                                         | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                   | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                             | Returns a list of scenarios and the corresponding active attributes.
| [serializeValue()](craft-fields-baserelationfield.md#method-serializevalue)                                                                                       | Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                     | Sets the attribute values in a massive way.
| [setIsFresh()](craft-base-fieldinterface.md#method-setisfresh "Defined by craft\base\FieldInterface")                                                             | Sets whether the field is fresh.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                         | Sets the scenario for the model.
| [settingsAttributes()](craft-fields-baserelationfield.md#method-settingsattributes)                                                                               | Returns the list of settings attribute names.
| [supportedTranslationMethods()](craft-fields-baserelationfield.md#method-supportedtranslationmethods)                                                             | Returns which translation methods the field supports.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                               | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                         | Triggers an event.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                                           | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                               | Validates multiple models.
| [validateRelatedElements()](craft-fields-baserelationfield.md#method-validaterelatedelements)                                                                     | Validates the related elements.
| [valueType()](craft-fields-baserelationfield.md#method-valuetype)                                                                                                 | Returns the PHPDoc type this field’s values will have.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](craft-fields-baserelationfield.md#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L201-L212)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `afterElementSave()`





Performs actions after the element has been saved.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L730-L758)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that was just saved
- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `afterSave()`





Performs actions after a component is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L716-L725)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the component is brand new




### `beforeSave()`





Performs actions before a component is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L697-L711)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the component is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component should be saved



### `defaultSelectionLabel()`





Returns the default [selectionLabel](craft-fields-baserelationfield.md#selectionlabel) value.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L87-L90)



#### Returns

[string](http://php.net/language.types.string) – The default selection label



### `getEagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on this custom field.



This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L640-L689)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – An array of the source elements

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored.



### `getElementValidationRules()`





Returns the validation rules for an element with this field.



Rules should be defined in the array syntax required by [yii\base\Model::rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail),
with one difference: you can skip the first argument (the attribute list).

```php
[
    // explicitly specify the field attribute
    [$this->handle, 'string', 'min' => 3, 'max' => 12],
    // skip the field attribute
    ['string', 'min' => 3, 'max' => 12],
    // you can only pass the validator class name/handle if not setting any params
    'bool',
]
```

To register validation rules that should only be enforced for _live_ elements,
set the rule [scenario](https://www.yiiframework.com/doc/guide/2.0/en/structure-models#scenarios)
to `live`:

```php
[
    ['string', 'min' => 3, 'max' => 12, 'on' => \craft\base\Element::SCENARIO_LIVE],
]
```




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L269-L284)



#### Returns

[array](http://php.net/language.types.array)



### `getInputHtml()`





Returns the field’s input HTML.



An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="'.$name.'">'.$value.'</textarea>';
```

For more complex inputs, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](craft-web-view.md#method-rendertemplate). For example, the following code would render a template located at
`path/to/myplugin/templates/_fieldinput.html`, passing the `$name` and `$value` variables to it:

```php
return Craft::$app->view->renderTemplate('myplugin/_fieldinput', [
    'name'  => $name,
    'value' => $value
]);
```

If you need to tie any JavaScript code to your input, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](craft-web-view.md#method-namespaceinputs),
however your JavaScript code will be left untouched.
For example, if getInputHtml() returns the following HTML:

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

Thankfully, [craft\web\View](craft-web-view.md) provides a couple handy methods that can help you deal with this:

- [craft\web\View::namespaceInputId()](craft-web-view.md#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](craft-web-view.md#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](craft-web-view.md#method-formatinputid) will format an input name to look more like an ID attribute value.

So here’s what a getInputHtml() method that includes field-targeting JavaScript code might look like:

```php
public function getInputHtml($value, $element)
{
    // Come up with an ID value based on $name
    $id = Craft::$app->view->formatInputId($name);
    // Figure out what that ID is going to be namespaced into
    $namespacedId = Craft::$app->view->namespaceInputId($id);
    // Render and return the input template
    return Craft::$app->view->renderTemplate('myplugin/_fieldinput', [
        'name'         => $name,
        'id'           => $id,
        'namespacedId' => $namespacedId,
        'value'        => $value
    ]);
}
```

And the _fieldinput.html template might look like this:

```twig
<textarea id="{{ id }}" name="{{ name }}">{{ value }}</textarea>
<script type="text/javascript">
    var textarea = document.getElementById('{{ namespacedId }}');
</script>
```

The same principles also apply if you’re including your JavaScript code with
[craft\web\View::registerJs()](craft-web-view.md#method-registerjs).




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L537-L551)


#### Arguments

- `$value` (`mixed`) – The field’s value. This will either be the [normalized value](craft-fields-baserelationfield.md#method-normalizevalue),
raw POST data (i.e. if there was a validation error), or null
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

[string](http://php.net/language.types.string) – The input HTML.



### `getIsTranslatable()`





Returns whether the field should be shown as translatable in the UI.



Note this method has no effect on whether the field’s value will get copied over to other
sites when the entry is actually getting saved. That is determined by [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey).




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L529-L532)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element being edited

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSearchKeywords()`





Returns the search keywords that should be associated with this field.



The keywords can be separated by commas and/or whitespace; it doesn’t really matter. [craft\services\Search](craft-services-search.md)
will be able to find the individual keywords in whatever string is returned, and normalize them for you.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L556-L566)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with, if there is one

#### Returns

[string](http://php.net/language.types.string) – A string of search keywords.



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




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L260-L264)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSourceOptions()`





Normalizes the available sources into select input options.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L765-L785)



#### Returns

[array](http://php.net/language.types.array)



### `getStaticHtml()`





Returns a static (non-editable) version of the field’s input HTML.



This function is called to output field values when viewing entry drafts.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L571-L598)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with

#### Returns

[string](http://php.net/language.types.string) – The static version of the field’s input HTML



### `getTableAttributeHtml()`





Returns the HTML that should be shown for this field in Table View.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L603-L635)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for this field in Table View



### `getTargetSiteFieldHtml()`





Returns the HTML for the Target Site setting.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L792-L838)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getViewModeFieldHtml()`





Returns the HTML for the View Mode setting.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L845-L869)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `hasContentColumn()`





Returns whether this field has a column in the content table.



::: warning
If you set this to `false`, you will be on your own in terms of saving and retrieving your field values.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L55-L58)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L217-L225)






### `isValueEmpty()`





Returns whether the given value should be considered “empty” to a validator.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L363-L371)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with, if there is one

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the value should be considered “empty”



### `modifyElementIndexQuery()`



Since

:   3.0.9



Modifies an element index query.



This method will be called whenever an element index is being loaded,
which contains a column for this field.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L507-L524)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query




### `modifyElementsQuery()`





Modifies an element query.



This method will be called whenever elements are being searched for that
may have this field assigned to them. If the method returns `false`, the
query will be stopped before it ever gets a chance to execute.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L447-L502)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query
- `$value` (`mixed`) – The value that was set on this field’s corresponding
element query param, if any.

#### Returns

[null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean) – `false` in the event that the method is sure that no
elements are going to be found.



### `normalizeValue()`





Normalizes the field’s value for use.



This method is called when the field’s value is first accessed from the element. For example, the first time
`entry.myFieldHandle` is called from a template, or right before [getInputHtml()](craft-fields-baserelationfield.md#method-getinputhtml) is called. Whatever
this method returns is what `entry.myFieldHandle` will likewise return, and what [getInputHtml()](craft-fields-baserelationfield.md#method-getinputhtml)’s and
[serializeValue()](craft-fields-baserelationfield.md#method-serializevalue)’s $value arguments will be set to.

The value passed into this method will vary depending on the context.

- If a new, unsaved element is being edited for the first time (such as an entry within a Quick Post widget
  on the Dashboard), the value will be `null`.
- If an element is currently being saved, the value will be the field’s POST data.
- If an existing element was retrieved from the database, the value will be whatever is stored in the field’s
  `content` table column. (Or if the field doesn’t have a `content` table column per [hasContentColumn()](craft-fields-baserelationfield.md#method-hascontentcolumn),
  the value will be `null`.)




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L376-L433)


#### Arguments

- `$value` (`mixed`) – The raw field value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

`mixed` – The prepared field value



### `serializeValue()`





Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.



Data types that are JSON-encodable are safe (arrays, integers, strings, booleans, etc).
Whatever this returns should be something [normalizeValue()](craft-fields-baserelationfield.md#method-normalizevalue) can handle.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L438-L442)


#### Arguments

- `$value` (`mixed`) – The raw field value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

`mixed` – The serialized field value



### `settingsAttributes()`





Returns the list of settings attribute names.



By default, this method returns all public non-static properties that were defined on the called class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L241-L255)



#### Returns

[array](http://php.net/language.types.array) – The list of settings attribute names



### `supportedTranslationMethods()`





Returns which translation methods the field supports.



This method should return an array with at least one of the following values:
- 'none' (values will always be copied to other sites)
- 'language' (values will be copied to other sites with the same language)
- 'site' (values will never be copied to other sites)
- 'custom' (values will be copied/not copied depending on a custom translation key)




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L63-L69)



#### Returns

[string](http://php.net/language.types.string)[]



### `validateRelatedElements()`





Validates the related elements.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L291-L327)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))




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




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L95-L98)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [availableSources()](craft-fields-baserelationfield.md#method-availablesources)                                                                         | Returns the sources that should be available to choose from within the field's settings
| [defineRules()](craft-fields-baserelationfield.md#method-definerules)                                                                                   | Returns the validation rules for attributes.
| [elementType()](craft-fields-baserelationfield.md#method-elementtype)                                                                                   | Returns the element class associated with this field type.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [inputSelectionCriteria()](craft-fields-baserelationfield.md#method-inputselectioncriteria)                                                             | Returns any additional criteria parameters limiting which elements the field should be able to select.
| [inputSiteId()](craft-fields-baserelationfield.md#method-inputsiteid)                                                                                   | Returns the site ID that the input should select elements from.
| [inputSources()](craft-fields-baserelationfield.md#method-inputsources)                                                                                 | Returns an array of the source keys the field should be able to select elements from.
| [inputTemplateVariables()](craft-fields-baserelationfield.md#method-inputtemplatevariables)                                                             | Returns an array of variables that should be passed to the input template.
| [isFresh()](craft-base-field.md#method-isfresh "Defined by craft\base\Field")                                                                           | Returns whether this is the first time the element's content has been edited.
| [requestParamName()](craft-base-field.md#method-requestparamname "Defined by craft\base\Field")                                                         | Returns the field’s param name on the request.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [settingsTemplateVariables()](craft-fields-baserelationfield.md#method-settingstemplatevariables)                                                       | Returns an array of variables that should be passed to the settings template.
| [supportedViewModes()](craft-fields-baserelationfield.md#method-supportedviewmodes)                                                                     | Returns the field’s supported view modes.
| [targetSiteId()](craft-fields-baserelationfield.md#method-targetsiteid)                                                                                 | Returns the site ID that target elements should have.
| [viewMode()](craft-fields-baserelationfield.md#method-viewmode)                                                                                         | Returns the field’s current view mode.

### `availableSources()`





Returns the sources that should be available to choose from within the field's settings




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L1078-L1081)



#### Returns

[array](http://php.net/language.types.array)



### `defineRules()`



Since

:   3.4.9



Returns the validation rules for attributes.



See [rules()](craft-base-model.md#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](craft-base-model.md#method-rules) so [EVENT_DEFINE_RULES](craft-base-model.md#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L231-L236)



#### Returns

[array](http://php.net/language.types.array)



### `elementType()`





Returns the element class associated with this field type.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L77-L80)



#### Returns

[string](http://php.net/language.types.string) – The Element class name

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the method hasn't been implemented by the subclass


### `inputSelectionCriteria()`





Returns any additional criteria parameters limiting which elements the field should be able to select.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L989-L995)



#### Returns

[array](http://php.net/language.types.array)



### `inputSiteId()`



Since

:   3.4.19



Returns the site ID that the input should select elements from.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L1004-L1010)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))

#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `inputSources()`





Returns an array of the source keys the field should be able to select elements from.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L973-L982)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string)



### `inputTemplateVariables()`





Returns an array of variables that should be passed to the input template.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L896-L965)


#### Arguments

- `$value` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `settingsTemplateVariables()`



Since

:   3.2.10



Returns an array of variables that should be passed to the settings template.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L877-L887)



#### Returns

[array](http://php.net/language.types.array)



### `supportedViewModes()`





Returns the field’s supported view modes.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L1043-L1054)



#### Returns

[array](http://php.net/language.types.array)



### `targetSiteId()`





Returns the site ID that target elements should have.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L1018-L1036)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))

#### Returns

[integer](http://php.net/language.types.integer)



### `viewMode()`





Returns the field’s current view mode.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/BaseRelationField.php#L1061-L1071)



#### Returns

[string](http://php.net/language.types.string)





## Constants

| Constant                        | Description
| ------------------------------- | ---------------------------------
| `SCENARIO_DEFAULT`              | The name of the default scenario.
| `TRANSLATION_METHOD_CUSTOM`     |
| `TRANSLATION_METHOD_LANGUAGE`   |
| `TRANSLATION_METHOD_NONE`       |
| `TRANSLATION_METHOD_SITE`       |
| `TRANSLATION_METHOD_SITE_GROUP` |


## Events

### EVENT_DEFINE_SELECTION_CRITERIA



Type

:   [craft\events\ElementCriteriaEvent](craft-events-elementcriteriaevent.md)

Since

:   3.4.16



The event that is triggered when defining the selection criteria for this field.



---




