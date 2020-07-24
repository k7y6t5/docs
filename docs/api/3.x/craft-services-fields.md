---
title: craft\services\Fields
code:
  - php
  - twig
---

# Fields

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Fields](craft-services-fields.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Fields service.

An instance of the Fields service is globally accessible in Craft via [`Craft::$app->fields`](craft-base-applicationtrait.md#method-getfields).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allFieldTypes](craft-services-fields.md#allfieldtypes)                                                                    | [string](http://php.net/language.types.string)[] – The available field type classes
| [allFields](craft-services-fields.md#allfields)                                                                            | [craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields
| [allGroups](craft-services-fields.md#allgroups)                                                                            | [craft\models\FieldGroup](craft-models-fieldgroup.md)[] – The field groups
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [fieldTypesWithContent](craft-services-fields.md#fieldtypeswithcontent)                                                    | [string](http://php.net/language.types.string)[] – The field type classes
| [fieldsWithContent](craft-services-fields.md#fieldswithcontent)                                                            | [craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields
| [ignoreProjectConfigChanges](craft-services-fields.md#ignoreprojectconfigchanges)                                          | [boolean](http://php.net/language.types.boolean) – Whether to ignore changes to the project config.
| [oldFieldColumnPrefix](craft-services-fields.md#oldfieldcolumnprefix)                                                      | [string](http://php.net/language.types.string)

### `allFieldTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only



The available field type classes



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)



### `allFields`



Type

:   [craft\base\FieldInterface](craft-base-fieldinterface.md)[]

Access

:   Read-only



The fields



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)



### `allGroups`



Type

:   [craft\models\FieldGroup](craft-models-fieldgroup.md)[]

Access

:   Read-only



The field groups



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)



### `fieldTypesWithContent`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only



The field type classes



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)



### `fieldsWithContent`



Type

:   [craft\base\FieldInterface](craft-base-fieldinterface.md)[]

Access

:   Read-only



The fields



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php)



### `ignoreProjectConfigChanges`

::: danger DEPRECATED
Deprecated in 3.1.2. Use [craft\services\ProjectConfig::$muteEvents](craft-services-projectconfig.md#muteevents) instead.
:::


Type

:   [boolean](http://php.net/language.types.boolean)



Whether to ignore changes to the project config.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L174)



### `oldFieldColumnPrefix`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L168)







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
| [applyFieldDelete()](craft-services-fields.md#method-applyfielddelete)                                                                      | Applies a field delete to the database.
| [applyFieldSave()](craft-services-fields.md#method-applyfieldsave)                                                                          | Applies a field save to the database.
| [assembleLayout()](craft-services-fields.md#method-assemblelayout)                                                                          | Assembles a field layout.
| [assembleLayoutFromPost()](craft-services-fields.md#method-assemblelayoutfrompost)                                                          | Assembles a field layout from post data.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createField()](craft-services-fields.md#method-createfield)                                                                                | Creates a field with a given config.
| [createFieldConfig()](craft-services-fields.md#method-createfieldconfig)                                                                    | Creates a field config array for the given field.
| [deleteField()](craft-services-fields.md#method-deletefield)                                                                                | Deletes a field.
| [deleteFieldById()](craft-services-fields.md#method-deletefieldbyid)                                                                        | Deletes a field by its ID.
| [deleteGroup()](craft-services-fields.md#method-deletegroup)                                                                                | Deletes a field group.
| [deleteGroupById()](craft-services-fields.md#method-deletegroupbyid)                                                                        | Deletes a field group by its ID.
| [deleteLayout()](craft-services-fields.md#method-deletelayout)                                                                              | Deletes a field layout.
| [deleteLayoutById()](craft-services-fields.md#method-deletelayoutbyid)                                                                      | Deletes a field layout(s) by its ID.
| [deleteLayoutsByType()](craft-services-fields.md#method-deletelayoutsbytype)                                                                | Deletes field layouts associated with a given element type.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [doesFieldWithHandleExist()](craft-services-fields.md#method-doesfieldwithhandleexist)                                                      | Returns whether a field exists with a given handle and context.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllFieldTypes()](craft-services-fields.md#method-getallfieldtypes)                                                                      | Returns all available field type classes.
| [getAllFields()](craft-services-fields.md#method-getallfields)                                                                              | Returns all fields within a field context(s).
| [getAllGroups()](craft-services-fields.md#method-getallgroups)                                                                              | Returns all field groups.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCompatibleFieldTypes()](craft-services-fields.md#method-getcompatiblefieldtypes)                                                        | Returns all field types whose column types are considered compatible with a given field.
| [getFieldByHandle()](craft-services-fields.md#method-getfieldbyhandle)                                                                      | Returns a field by its handle.
| [getFieldById()](craft-services-fields.md#method-getfieldbyid)                                                                              | Returns a field by its ID.
| [getFieldByUid()](craft-services-fields.md#method-getfieldbyuid)                                                                            | Returns a field by its UID.
| [getFieldIdsByLayoutId()](craft-services-fields.md#method-getfieldidsbylayoutid)                                                            | Returns the field IDs for a given layout ID.
| [getFieldIdsByLayoutIds()](craft-services-fields.md#method-getfieldidsbylayoutids)                                                          | Returns the field IDs grouped by layout IDs, for a given set of layout IDs.
| [getFieldTypesWithContent()](craft-services-fields.md#method-getfieldtypeswithcontent)                                                      | Returns all field types that have a column in the content table.
| [getFieldsByElementType()](craft-services-fields.md#method-getfieldsbyelementtype)                                                          | Returns all of the fields used by a given element type.
| [getFieldsByGroupId()](craft-services-fields.md#method-getfieldsbygroupid)                                                                  | Returns all the fields in a given group.
| [getFieldsByLayoutId()](craft-services-fields.md#method-getfieldsbylayoutid)                                                                | Returns the fields in a field layout, identified by its ID.
| [getFieldsWithContent()](craft-services-fields.md#method-getfieldswithcontent)                                                              | Returns all fields that have a column in the content table.
| [getGroupById()](craft-services-fields.md#method-getgroupbyid)                                                                              | Returns a field group by its ID.
| [getGroupByUid()](craft-services-fields.md#method-getgroupbyuid)                                                                            | Returns a field group by its UID.
| [getLayoutById()](craft-services-fields.md#method-getlayoutbyid)                                                                            | Returns a field layout by its ID.
| [getLayoutByType()](craft-services-fields.md#method-getlayoutbytype)                                                                        | Returns a field layout by its associated element type.
| [getLayoutTabsById()](craft-services-fields.md#method-getlayouttabsbyid)                                                                    | Returns a layout's tabs by its ID.
| [handleChangedField()](craft-services-fields.md#method-handlechangedfield)                                                                  | Handle field changes.
| [handleChangedGroup()](craft-services-fields.md#method-handlechangedgroup)                                                                  | Handle field group change
| [handleDeletedField()](craft-services-fields.md#method-handledeletedfield)                                                                  | Handle a field getting deleted.
| [handleDeletedGroup()](craft-services-fields.md#method-handledeletedgroup)                                                                  | Handle field group getting deleted.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [prepFieldForSave()](craft-services-fields.md#method-prepfieldforsave)                                                                      | Preps a field to be saved.
| [refreshFields()](craft-services-fields.md#method-refreshfields)                                                                            | Refreshes the internal field cache.
| [restoreLayoutById()](craft-services-fields.md#method-restorelayoutbyid)                                                                    | Restores a field layout by its ID.
| [saveField()](craft-services-fields.md#method-savefield)                                                                                    | Saves a field.
| [saveGroup()](craft-services-fields.md#method-savegroup)                                                                                    | Saves a field group.
| [saveLayout()](craft-services-fields.md#method-savelayout)                                                                                  | Saves a field layout.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateFieldVersion()](craft-services-fields.md#method-updatefieldversion)                                                                  | Sets a new field version, so the CustomFieldBehavior class will get regenerated on the next request.

### `applyFieldDelete()`



Since

:   3.1.0



Applies a field delete to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L899-L961)


#### Arguments

- `$fieldUid`


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if database error


### `applyFieldSave()`



Since

:   3.1.0



Applies a field save to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1432-L1576)


#### Arguments

- `$fieldUid` ([string](http://php.net/language.types.string))
- `$data` ([array](http://php.net/language.types.array))
- `$context` ([string](http://php.net/language.types.string))




### `assembleLayout()`





Assembles a field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1146-L1204)


#### Arguments

- `$postedFieldLayout` ([array](http://php.net/language.types.array)) – The post data for the field layout
- `$requiredFields` ([array](http://php.net/language.types.array)) – The field IDs that should be marked as required in the field layout

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md) – The field layout



### `assembleLayoutFromPost()`





Assembles a field layout from post data.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1125-L1137)


#### Arguments

- `$namespace` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The namespace that the form data was posted in, if any

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md) – The field layout



### `createField()`





Creates a field with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L540-L563)


#### Arguments

- `$config` (`mixed`) – The field’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md) – The field



### `createFieldConfig()`



Since

:   3.1.0



Creates a field config array for the given field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L712-L733)


#### Arguments

- `$field` ([craft\base\FieldInterface](craft-base-fieldinterface.md))

#### Returns

[array](http://php.net/language.types.array)



### `deleteField()`





Deletes a field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L853-L874)


#### Arguments

- `$field` ([craft\base\FieldInterface](craft-base-fieldinterface.md)) – The field

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `deleteFieldById()`





Deletes a field by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L835-L844)


#### Arguments

- `$fieldId` ([integer](http://php.net/language.types.integer)) – The field’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field was deleted successfully



### `deleteGroup()`





Deletes a field group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L393-L423)


#### Arguments

- `$group` ([craft\models\FieldGroup](craft-models-fieldgroup.md)) – The field group

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field group was deleted successfully



### `deleteGroupById()`





Deletes a field group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L376-L385)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The field group’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field group was deleted successfully



### `deleteLayout()`





Deletes a field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1356-L1376)


#### Arguments

- `$layout` ([craft\models\FieldLayout](craft-models-fieldlayout.md)) – The field layout

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field layout was deleted successfully



### `deleteLayoutById()`





Deletes a field layout(s) by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1333-L1348)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[]) – The field layout’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field layout was deleted successfully



### `deleteLayoutsByType()`





Deletes field layouts associated with a given element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1384-L1391)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The element type

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field layouts were deleted successfully



### `doesFieldWithHandleExist()`





Returns whether a field exists with a given handle and context.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L662-L665)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The field handle
- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The field context (defauts to ContentService::$fieldContext)

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether a field with that handle exists



### `getAllFieldTypes()`





Returns all available field type classes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L433-L462)



#### Returns

[string](http://php.net/language.types.string)[] – The available field type classes



### `getAllFields()`





Returns all fields within a field context(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L572-L598)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The field context(s) to fetch fields from. Defaults to {@link ContentService::$fieldContext}.
Set to `false` to get all fields regardless of context.

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getAllGroups()`





Returns all field groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L209-L223)



#### Returns

[craft\models\FieldGroup](craft-models-fieldgroup.md)[] – The field groups



### `getCompatibleFieldTypes()`





Returns all field types whose column types are considered compatible with a given field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L490-L532)


#### Arguments

- `$field` ([craft\base\FieldInterface](craft-base-fieldinterface.md)) – The current field to base compatible fields on
- `$includeCurrent` ([boolean](http://php.net/language.types.boolean)) – Whether $field's class should be included

#### Returns

[string](http://php.net/language.types.string)[] – The compatible field type classes



### `getFieldByHandle()`





Returns a field by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L650-L653)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The field’s handle

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md), [null](http://php.net/language.types.null) – The field, or null if it doesn’t exist


---

#### Example

::: code
```php
$body = Craft::$app->fields->getFieldByHandle('body');
```
```twig
{% set body = craft.app.fields.getFieldByHandle('body') %}
{{ body.instructions }}
```
:::


### `getFieldById()`





Returns a field by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L618-L621)


#### Arguments

- `$fieldId` ([integer](http://php.net/language.types.integer)) – The field’s ID

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md), [null](http://php.net/language.types.null) – The field, or null if it doesn’t exist



### `getFieldByUid()`





Returns a field by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L629-L632)


#### Arguments

- `$fieldUid` ([string](http://php.net/language.types.string)) – The field’s UID

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md), [null](http://php.net/language.types.null) – The field, or null if it doesn’t exist



### `getFieldIdsByLayoutId()`



Since

:   3.1.24



Returns the field IDs for a given layout ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1058-L1065)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer)) – The field layout ID

#### Returns

[integer](http://php.net/language.types.integer)[]



### `getFieldIdsByLayoutIds()`





Returns the field IDs grouped by layout IDs, for a given set of layout IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1073-L1087)


#### Arguments

- `$layoutIds` ([integer](http://php.net/language.types.integer)[]) – The field layout IDs

#### Returns

[array](http://php.net/language.types.array)



### `getFieldTypesWithContent()`





Returns all field types that have a column in the content table.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L469-L481)



#### Returns

[string](http://php.net/language.types.string)[] – The field type classes



### `getFieldsByElementType()`





Returns all of the fields used by a given element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L684-L703)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string))

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getFieldsByGroupId()`





Returns all the fields in a given group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L673-L676)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The field group’s ID

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getFieldsByLayoutId()`





Returns the fields in a field layout, identified by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1095-L1117)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer)) – The field layout’s ID

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getFieldsWithContent()`





Returns all fields that have a column in the content table.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L605-L610)



#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getGroupById()`





Returns a field group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L231-L234)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The field group’s ID

#### Returns

[craft\models\FieldGroup](craft-models-fieldgroup.md), [null](http://php.net/language.types.null) – The field group, or null if it doesn’t exist



### `getGroupByUid()`



Since

:   3.3.0



Returns a field group by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L243-L246)


#### Arguments

- `$groupUid` ([string](http://php.net/language.types.string)) – The field group’s UID

#### Returns

[craft\models\FieldGroup](craft-models-fieldgroup.md), [null](http://php.net/language.types.null) – The field group, or null if it doesn’t exist



### `getLayoutById()`





Returns a field layout by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L986-L997)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer)) – The field layout’s ID

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null) – The field layout, or null if it doesn’t exist



### `getLayoutByType()`





Returns a field layout by its associated element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1005-L1025)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The associated element type

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md) – The field layout



### `getLayoutTabsById()`





Returns a layout's tabs by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1033-L1049)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer)) – The field layout’s ID

#### Returns

[craft\models\FieldLayoutTab](craft-models-fieldlayouttab.md)[] – The field layout’s tabs



### `handleChangedField()`





Handle field changes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L817-L827)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))


#### Throws

- [Throwable](http://php.net/class.throwable)


### `handleChangedGroup()`





Handle field group change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L298-L328)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedField()`





Handle a field getting deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L881-L890)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedGroup()`





Handle field group getting deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L335-L368)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `prepFieldForSave()`



Since

:   3.1.2



Preps a field to be saved.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L790-L809)


#### Arguments

- `$field` ([craft\base\FieldInterface](craft-base-fieldinterface.md))




### `refreshFields()`



Since

:   3.0.20



Refreshes the internal field cache.

This should be called whenever a field is updated or deleted directly in
the database, rather than going through this service.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L971-L975)






### `restoreLayoutById()`



Since

:   3.1.0



Restores a field layout by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1400-L1407)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The field layout’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the layout was restored successfully



### `saveField()`





Saves a field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L743-L782)


#### Arguments

- `$field` ([craft\base\FieldInterface](craft-base-fieldinterface.md)) – The Field to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the field should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field was saved successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveGroup()`





Saves a field group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L255-L291)


#### Arguments

- `$group` ([craft\models\FieldGroup](craft-models-fieldgroup.md)) – The field group to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the group should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field group was saved successfully



### `saveLayout()`





Saves a field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1214-L1325)


#### Arguments

- `$layout` ([craft\models\FieldLayout](craft-models-fieldlayout.md)) – The field layout
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the layout should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field layout was saved successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $layout->id is set to an invalid layout ID


### `updateFieldVersion()`





Sets a new field version, so the CustomFieldBehavior class
will get regenerated on the next request.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Fields.php#L1413-L1422)










## Constants

| Constant                | Description
| ----------------------- | -----------
| `CONFIG_FIELDGROUP_KEY` |
| `CONFIG_FIELDS_KEY`     |


## Events

### EVENT_AFTER_DELETE_FIELD



Type

:   [craft\events\FieldEvent](craft-events-fieldevent.md)



The event that is triggered after a field is deleted.



---



### EVENT_AFTER_DELETE_FIELD_GROUP



Type

:   [craft\events\FieldGroupEvent](craft-events-fieldgroupevent.md)



The event that is triggered after a field group is deleted.



---



### EVENT_AFTER_DELETE_FIELD_LAYOUT



Type

:   [craft\events\FieldLayoutEvent](craft-events-fieldlayoutevent.md)



The event that is triggered after a field layout is deleted.



---



### EVENT_AFTER_SAVE_FIELD



Type

:   [craft\events\FieldEvent](craft-events-fieldevent.md)



The event that is triggered after a field is saved.



---



### EVENT_AFTER_SAVE_FIELD_GROUP



Type

:   [craft\events\FieldGroupEvent](craft-events-fieldgroupevent.md)



The event that is triggered after a field group is saved.



---



### EVENT_AFTER_SAVE_FIELD_LAYOUT



Type

:   [craft\events\FieldLayoutEvent](craft-events-fieldlayoutevent.md)



The event that is triggered after a field layout is saved.



---



### EVENT_BEFORE_APPLY_FIELD_DELETE



Type

:   [craft\events\FieldEvent](craft-events-fieldevent.md)

Since

:   3.1.0



The event that is triggered before a field delete is applied to the database.



---



### EVENT_BEFORE_APPLY_GROUP_DELETE



Type

:   [craft\events\FieldGroupEvent](craft-events-fieldgroupevent.md)

Since

:   3.1.0



The event that is triggered before a field group delete is applied to the database.



---



### EVENT_BEFORE_DELETE_FIELD



Type

:   [craft\events\FieldEvent](craft-events-fieldevent.md)



The event that is triggered before a field is deleted.



---



### EVENT_BEFORE_DELETE_FIELD_GROUP



Type

:   [craft\events\FieldGroupEvent](craft-events-fieldgroupevent.md)



The event that is triggered before a field group is deleted.



---



### EVENT_BEFORE_DELETE_FIELD_LAYOUT



Type

:   [craft\events\FieldLayoutEvent](craft-events-fieldlayoutevent.md)



The event that is triggered before a field layout is deleted.



---



### EVENT_BEFORE_SAVE_FIELD



Type

:   [craft\events\FieldEvent](craft-events-fieldevent.md)



The event that is triggered before a field is saved.



---



### EVENT_BEFORE_SAVE_FIELD_GROUP



Type

:   [craft\events\FieldGroupEvent](craft-events-fieldgroupevent.md)



The event that is triggered before a field group is saved.



---



### EVENT_BEFORE_SAVE_FIELD_LAYOUT



Type

:   [craft\events\FieldLayoutEvent](craft-events-fieldlayoutevent.md)



The event that is triggered before a field layout is saved.



---



### EVENT_REGISTER_FIELD_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering field types.

Field types must implement [craft\base\FieldInterface](craft-base-fieldinterface.md). [craft\base\Field](craft-base-field.md) provides a base implementation.

See [Field Types](https://docs.craftcms.com/v3/field-types.html) for documentation on creating field types.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\services\Fields;
use yii\base\Event;

Event::on(Fields::class,
    Fields::EVENT_REGISTER_FIELD_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyFieldType::class;
    }
);
```
:::



