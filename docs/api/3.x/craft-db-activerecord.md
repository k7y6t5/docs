---
title: craft\db\ActiveRecord
code:
  - php
  - twig
---

# ActiveRecord

Type

:   Abstract Class

Namespace

:   craft\db

Inherits

:   [craft\db\ActiveRecord](craft-db-activerecord.md) &raquo;
[yii\db\ActiveRecord](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord) &raquo;
[yii\db\BaseActiveRecord](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface), [yii\db\ActiveRecordInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface)

Uses traits

:   [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\records\Asset](craft-records-asset.md), [craft\records\AssetIndexData](craft-records-assetindexdata.md), [craft\records\AssetTransform](craft-records-assettransform.md), [craft\records\Category](craft-records-category.md), [craft\records\CategoryGroup](craft-records-categorygroup.md), [craft\records\CategoryGroup_SiteSettings](craft-records-categorygroup_sitesettings.md), [craft\records\CraftIdToken](craft-records-craftidtoken.md), [craft\records\Element](craft-records-element.md), [craft\records\Element_SiteSettings](craft-records-element_sitesettings.md), [craft\records\Entry](craft-records-entry.md), [craft\records\EntryType](craft-records-entrytype.md), [craft\records\Field](craft-records-field.md), [craft\records\FieldGroup](craft-records-fieldgroup.md), [craft\records\FieldLayout](craft-records-fieldlayout.md), [craft\records\FieldLayoutField](craft-records-fieldlayoutfield.md), [craft\records\FieldLayoutTab](craft-records-fieldlayouttab.md), [craft\records\GlobalSet](craft-records-globalset.md), [craft\records\GqlSchema](craft-records-gqlschema.md), [craft\records\GqlToken](craft-records-gqltoken.md), [craft\records\MatrixBlock](craft-records-matrixblock.md), [craft\records\MatrixBlockType](craft-records-matrixblocktype.md), [craft\records\Migration](craft-records-migration.md), [craft\records\Plugin](craft-records-plugin.md), [craft\records\Section](craft-records-section.md), [craft\records\Section_SiteSettings](craft-records-section_sitesettings.md), [craft\records\Session](craft-records-session.md), [craft\records\Site](craft-records-site.md), [craft\records\SiteGroup](craft-records-sitegroup.md), [craft\records\Structure](craft-records-structure.md), [craft\records\StructureElement](craft-records-structureelement.md), [craft\records\SystemMessage](craft-records-systemmessage.md), [craft\records\Tag](craft-records-tag.md), [craft\records\TagGroup](craft-records-taggroup.md), [craft\records\Token](craft-records-token.md), [craft\records\User](craft-records-user.md), [craft\records\UserGroup](craft-records-usergroup.md), [craft\records\UserGroup_User](craft-records-usergroup_user.md), [craft\records\UserPermission](craft-records-userpermission.md), [craft\records\UserPermission_User](craft-records-userpermission_user.md), [craft\records\UserPermission_UserGroup](craft-records-userpermission_usergroup.md), [craft\records\Volume](craft-records-volume.md), [craft\records\VolumeFolder](craft-records-volumefolder.md), [craft\records\Widget](craft-records-widget.md)

Since

:   3.0.0



Active Record base class.





[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php)


## Public Properties

| Property                                                                                                                                               | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                       | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                   | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [dirtyAttributes](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#$dirtyAttributes-detail "Defined by yii\db\BaseActiveRecord")       | [array](http://php.net/language.types.array) – The changed attribute values (name-value pairs)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                           | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                 | [array](http://php.net/language.types.array) – The first errors.
| [isNewRecord](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#$isNewRecord-detail "Defined by yii\db\ActiveRecordInterface")     | [boolean](http://php.net/language.types.boolean) – Whether the record is new and should be inserted when calling [save()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#save()-detail).
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                       | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [oldAttributes](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#$oldAttributes-detail "Defined by yii\db\BaseActiveRecord")           | [array](http://php.net/language.types.array) – The old attribute values (name-value pairs)
| [oldPrimaryKey](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#$oldPrimaryKey-detail "Defined by yii\db\ActiveRecordInterface") | `mixed` – The old primary key value.
| [primaryKey](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#$primaryKey-detail "Defined by yii\db\ActiveRecordInterface")       | `mixed` – The primary key value.
| [relatedRecords](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#$relatedRecords-detail "Defined by yii\db\BaseActiveRecord")         | [array](http://php.net/language.types.array) – An array of related records indexed by relation names.
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                       | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                   | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.





## Public Methods

| Method                                                                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                       | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                       | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#__get()-detail "Defined by yii\db\BaseActiveRecord")                                 | PHP getter magic method.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#__isset()-detail "Defined by yii\db\BaseActiveRecord")                             | Checks if a property value is null.
| [__set()](craft-db-activerecord.md#method-set)                                                                                                                  | PHP setter magic method.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#__unset()-detail "Defined by yii\db\BaseActiveRecord")                             | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                           | Adds a list of errors.
| [afterDelete()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#afterDelete()-detail "Defined by yii\db\BaseActiveRecord")                     | This method is invoked after deleting a record.
| [afterFind()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#afterFind()-detail "Defined by yii\db\BaseActiveRecord")                         | This method is called when the AR object is created and populated with the query result.
| [afterRefresh()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#afterRefresh()-detail "Defined by yii\db\BaseActiveRecord")                   | This method is called when the AR object is refreshed.
| [afterSave()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#afterSave()-detail "Defined by yii\db\BaseActiveRecord")                         | This method is called at the end of inserting or updating a record.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                               | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#attributes()-detail "Defined by yii\db\ActiveRecordInterface")             | Returns the list of all attribute names of the record.
| [beforeDelete()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#beforeDelete()-detail "Defined by yii\db\BaseActiveRecord")                   | This method is invoked before deleting a record.
| [beforeSave()](craft-db-activerecord.md#method-beforesave)                                                                                                      | This method is called at the beginning of inserting or updating a record.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                 | This method is invoked before validation starts.
| [behaviors()](craft-db-activerecord.md#method-behaviors)                                                                                                        | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#canGetProperty()-detail "Defined by yii\db\BaseActiveRecord")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#canSetProperty()-detail "Defined by yii\db\BaseActiveRecord")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [delete()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#delete()-detail "Defined by yii\db\ActiveRecordInterface")                     | Deletes the record from the database.
| [deleteAll()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#deleteAll()-detail "Defined by yii\db\ActiveRecordInterface")               | Deletes records using the provided conditions.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [equals()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#equals()-detail "Defined by yii\db\ActiveRecordInterface")                     | Returns a value indicating whether the given active record is the same as the current one.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#find()-detail "Defined by yii\db\ActiveRecordInterface")                         | Creates an [yii\db\ActiveQueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-activequeryinterface) instance for query purpose.
| [findAll()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#findAll()-detail "Defined by yii\db\ActiveRecordInterface")                   | Returns a list of active record models that match the specified primary key value(s) or a set of column values.
| [findBySql()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#findBySql()-detail "Defined by yii\db\ActiveRecord")                                 | Creates an [yii\db\ActiveQuery](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery) instance with a given SQL statement.
| [findOne()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#findOne()-detail "Defined by yii\db\ActiveRecordInterface")                   | Returns a single active record model instance by a primary key or an array of column values.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                 | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getAttribute()-detail "Defined by yii\db\ActiveRecordInterface")         | Returns the named attribute value.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getAttributeHint()-detail "Defined by yii\db\BaseActiveRecord")           | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getAttributeLabel()-detail "Defined by yii\db\BaseActiveRecord")         | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                             | Returns all behaviors attached to this component.
| [getDb()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getDb()-detail "Defined by yii\db\ActiveRecordInterface")                       | Returns the connection used by this AR class.
| [getDirtyAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getDirtyAttributes()-detail "Defined by yii\db\BaseActiveRecord")       | Returns the attribute values that have been modified since they are loaded or saved most recently.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                 | Returns the first error of every attribute in the model.
| [getIsNewRecord()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getIsNewRecord()-detail "Defined by yii\db\ActiveRecordInterface")     | Returns a value indicating whether the current record is new (not saved in the database).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                       | Returns an iterator for traversing the attributes in the model.
| [getOldAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getOldAttribute()-detail "Defined by yii\db\BaseActiveRecord")             | Returns the old value of the named attribute.
| [getOldAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getOldAttributes()-detail "Defined by yii\db\BaseActiveRecord")           | Returns the old attribute values.
| [getOldPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getOldPrimaryKey()-detail "Defined by yii\db\ActiveRecordInterface") | Returns the old primary key value(s).
| [getPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getPrimaryKey()-detail "Defined by yii\db\ActiveRecordInterface")       | Returns the primary key value(s).
| [getRelatedRecords()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#getRelatedRecords()-detail "Defined by yii\db\BaseActiveRecord")         | Returns all populated related records.
| [getRelation()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#getRelation()-detail "Defined by yii\db\ActiveRecordInterface")           | Returns the relation object with the specified name.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                       | Returns the scenario that this model is used in.
| [getTableSchema()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#getTableSchema()-detail "Defined by yii\db\ActiveRecord")                       | Returns the schema information of the DB table associated with this AR class.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#hasAttribute()-detail "Defined by yii\db\ActiveRecordInterface")         | Returns a value indicating whether the record has an attribute with the specified name.
| [hasErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#hasErrors()-detail "Defined by yii\base\Model")                                           | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMany()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#hasMany()-detail "Defined by yii\db\BaseActiveRecord")                             | Declares a `has-many` relation.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                 | Returns a value indicating whether a method is defined.
| [hasOne()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#hasOne()-detail "Defined by yii\db\BaseActiveRecord")                               | Declares a `has-one` relation.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                             | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#init()-detail "Defined by yii\db\BaseActiveRecord")                                   | Initializes the object.
| [insert()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#insert()-detail "Defined by yii\db\ActiveRecordInterface")                     | Inserts the record into the database using the attribute values of this record.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                 | Returns static class instance, which can be used to obtain meta information.
| [instantiate()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#instantiate()-detail "Defined by yii\db\BaseActiveRecord")                     | Creates an active record instance.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeChanged()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#isAttributeChanged()-detail "Defined by yii\db\BaseActiveRecord")       | Returns a value indicating whether the named attribute has been changed.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                               | Returns a value indicating whether the attribute is safe for massive assignments.
| [isPrimaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#isPrimaryKey()-detail "Defined by yii\db\ActiveRecordInterface")         | Returns a value indicating whether the given set of attributes represents the primary key for this model.
| [isRelationPopulated()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#isRelationPopulated()-detail "Defined by yii\db\BaseActiveRecord")     | Check whether the named relation has been populated with records.
| [isTransactional()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#isTransactional()-detail "Defined by yii\db\ActiveRecord")                     | Returns a value indicating whether the specified operation is transactional in the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [link()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#link()-detail "Defined by yii\db\ActiveRecordInterface")                         | Establishes the relationship between two records.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                     | Populates the model with input data.
| [loadDefaultValues()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#loadDefaultValues()-detail "Defined by yii\db\ActiveRecord")                 | Loads default values from database table schema.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                     | Populates a set of models with the data from end user.
| [markAttributeDirty()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#markAttributeDirty()-detail "Defined by yii\db\BaseActiveRecord")       | Marks an attribute dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#offsetExists()-detail "Defined by yii\db\BaseActiveRecord")                   | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#offsetUnset()-detail "Defined by yii\db\BaseActiveRecord")                     | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                           | This method is invoked when an unsafe attribute is being massively assigned.
| [optimisticLock()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#optimisticLock()-detail "Defined by yii\db\BaseActiveRecord")               | Returns the name of the column that stores the lock version for implementing optimistic locking.
| [populateRecord()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#populateRecord()-detail "Defined by yii\db\ActiveRecord")                       | Populates an active record object using a row of data from the database/storage.
| [populateRelation()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#populateRelation()-detail "Defined by yii\db\ActiveRecordInterface") | Populates the named relation with the related records.
| [primaryKey()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#primaryKey()-detail "Defined by yii\db\ActiveRecordInterface")             | Returns the primary key **name(s)** for this AR class.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#refresh()-detail "Defined by yii\db\ActiveRecord")                                     | Repopulates this active record with the latest data.
| [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail "Defined by yii\base\Model")                                                   | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [save()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#save()-detail "Defined by yii\db\ActiveRecordInterface")                         | Saves the current record.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttribute()](craft-db-activerecord.md#method-setattribute)                                                                                                  | Sets the named attribute value.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                   | Sets the attribute values in a massive way.
| [setIsNewRecord()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#setIsNewRecord()-detail "Defined by yii\db\BaseActiveRecord")               | Sets the value indicating whether the record is new.
| [setOldAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#setOldAttribute()-detail "Defined by yii\db\BaseActiveRecord")             | Sets the old value of the named attribute.
| [setOldAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#setOldAttributes()-detail "Defined by yii\db\BaseActiveRecord")           | Sets the old attribute values.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                       | Sets the scenario for the model.
| [tableName()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#tableName()-detail "Defined by yii\db\ActiveRecord")                                 | Declares the name of the database table associated with this AR class.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                             | Converts the model into an array.
| [transactions()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#transactions()-detail "Defined by yii\db\ActiveRecord")                           | Declares which DB operations should be performed within a transaction in different scenarios.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                       | Triggers an event.
| [unlink()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#unlink()-detail "Defined by yii\db\ActiveRecordInterface")                     | Destroys the relationship between two records.
| [unlinkAll()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#unlinkAll()-detail "Defined by yii\db\BaseActiveRecord")                         | Destroys the relationship in current model.
| [update()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#update()-detail "Defined by yii\db\ActiveRecordInterface")                     | Saves the changes to this active record into the database.
| [updateAll()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecordinterface#updateAll()-detail "Defined by yii\db\ActiveRecordInterface")               | Updates records using the provided attribute values and conditions.
| [updateAllCounters()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#updateAllCounters()-detail "Defined by yii\db\ActiveRecord")                 | Updates the whole table using the provided counter changes and conditions.
| [updateAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#updateAttributes()-detail "Defined by yii\db\BaseActiveRecord")           | Updates the specified attributes.
| [updateCounters()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#updateCounters()-detail "Defined by yii\db\BaseActiveRecord")               | Updates one or several counter columns for the current AR object.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                             | Validates multiple models.

### `__set()`



Since

:   3.4.0



PHP setter magic method.



This method is overridden so that AR attributes can be accessed like properties.




[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php#L36-L42)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – Property name
- `$value` (`mixed`) – Property value




### `beforeSave()`





This method is called at the beginning of inserting or updating a record.



The default implementation will trigger an [EVENT_BEFORE_INSERT](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#EVENT_BEFORE_INSERT-detail) event when `$insert` is `true`,
or an [EVENT_BEFORE_UPDATE](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#EVENT_BEFORE_UPDATE-detail) event if `$insert` is `false`.
When overriding this method, make sure you call the parent implementation like the following:

```php
public function beforeSave($insert)
{
    if (!parent::beforeSave($insert)) {
        return false;
    }

    // ...custom code here...
    return true;
}
```




[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php#L69-L73)


#### Arguments

- `$insert` ([boolean](http://php.net/language.types.boolean)) – Whether this method called while inserting a record.
If `false`, it means the method is called while updating a record.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the insertion or updating should continue.
If `false`, the insertion or updating will be cancelled.



### `behaviors()`



Since

:   3.4.0



Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\db\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php#L48-L54)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `setAttribute()`



Since

:   3.4.0



Sets the named attribute value.








[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php#L60-L64)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The attribute name
- `$value` (`mixed`) – The attribute value.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the named attribute does not exist.




## Protected Methods

| Method                                                                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [createRelationQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#createRelationQuery()-detail "Defined by yii\db\BaseActiveRecord") | Creates a query instance for `has-one` or `has-many` relation.
| [deleteInternal()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#deleteInternal()-detail "Defined by yii\db\ActiveRecord")                   | Deletes an ActiveRecord without considering transaction.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")       | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")     | Extracts the root field names from nested fields.
| [insertInternal()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#insertInternal()-detail "Defined by yii\db\ActiveRecord")                   | Inserts an ActiveRecord into DB without considering transaction.
| [prepareForDb()](craft-db-activerecord.md#method-preparefordb)                                                                                              | Sets the `dateCreated`, `dateUpdated`, and `uid` attributes on the record.
| [refreshInternal()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#refreshInternal()-detail "Defined by yii\db\BaseActiveRecord")         | Repopulates this active record with the latest data from a newly fetched instance.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")             | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [updateInternal()](https://www.yiiframework.com/doc/api/2.0/yii-db-baseactiverecord#updateInternal()-detail "Defined by yii\db\BaseActiveRecord")           |

### `prepareForDb()`



Since

:   3.1.0



Sets the `dateCreated`, `dateUpdated`, and `uid` attributes on the record.




[View source](https://github.com/craftcms/cms/blob/master/src/db/ActiveRecord.php#L80-L106)








## Constants

| Constant           | Description
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| `OP_ALL`           | All three operations: insert, update, delete.
| `OP_DELETE`        | The delete operation. This is mainly used when overriding [transactions()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#transactions()-detail) to specify which operations are transactional.
| `OP_INSERT`        | The insert operation. This is mainly used when overriding [transactions()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#transactions()-detail) to specify which operations are transactional.
| `OP_UPDATE`        | The update operation. This is mainly used when overriding [transactions()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#transactions()-detail) to specify which operations are transactional.
| `SCENARIO_DEFAULT` | The name of the default scenario.


## Events

### EVENT_DEFINE_BEHAVIORS



Type

:   [craft\events\DefineBehaviorsEvent](craft-events-definebehaviorsevent.md)

Since

:   3.4.0



The event that is triggered when defining the class behaviors

See also [behaviors()](craft-db-activerecord.md#method-behaviors)

---




