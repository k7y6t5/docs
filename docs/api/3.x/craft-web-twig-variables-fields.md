---
title: craft\web\twig\variables\Fields
code:
  - php
  - twig
---

# Fields

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Fields](craft-web-twig-variables-fields.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Fields provides an API for accessing information about fields. It is accessible from templates via `craft.fields`.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php)






## Public Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | ------------------------------------------------------
| [getAllFieldTypes()](craft-web-twig-variables-fields.md#method-getallfieldtypes)     | Returns all available field type classes.
| [getAllFields()](craft-web-twig-variables-fields.md#method-getallfields)             | Returns all fields.
| [getAllGroups()](craft-web-twig-variables-fields.md#method-getallgroups)             | Returns all field groups.
| [getFieldByHandle()](craft-web-twig-variables-fields.md#method-getfieldbyhandle)     | Returns a field by its handle.
| [getFieldById()](craft-web-twig-variables-fields.md#method-getfieldbyid)             | Returns a field by its ID.
| [getFieldsByGroupId()](craft-web-twig-variables-fields.md#method-getfieldsbygroupid) | Returns all the fields in a given group.
| [getGroupById()](craft-web-twig-variables-fields.md#method-getgroupbyid)             | Returns a field group by its ID.
| [getLayoutById()](craft-web-twig-variables-fields.md#method-getlayoutbyid)           | Returns a field layout by its ID.
| [getLayoutByType()](craft-web-twig-variables-fields.md#method-getlayoutbytype)       | Returns a field layout by its associated element type.

### `getAllFieldTypes()`





Returns all available field type classes.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L147-L152)



#### Returns

[string](http://php.net/language.types.string)[] – The available field type classes



### `getAllFields()`





Returns all fields.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L91-L98)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The attribute to index the fields by

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getAllGroups()`





Returns all field groups.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L34-L41)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The attribute to index the field groups by

#### Returns

[craft\models\FieldGroup](craft-models-fieldgroup.md)[] – The field groups



### `getFieldByHandle()`





Returns a field by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L78-L83)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The field’s handle

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md), [null](http://php.net/language.types.null) – The field, or null if it doesn’t exist



### `getFieldById()`





Returns a field by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L65-L70)


#### Arguments

- `$fieldId` ([integer](http://php.net/language.types.integer)) – The field’s ID

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md), [null](http://php.net/language.types.null) – The field, or null if it doesn’t exist



### `getFieldsByGroupId()`





Returns all the fields in a given group.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L107-L114)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The field group’s ID
- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The attribute to index the fields by

#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields



### `getGroupById()`





Returns a field group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L49-L54)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The field group’s ID

#### Returns

[craft\models\FieldGroup](craft-models-fieldgroup.md), [null](http://php.net/language.types.null) – The field group, or null if it doesn’t exist



### `getLayoutById()`





Returns a field layout by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L122-L127)


#### Arguments

- `$layoutId` ([integer](http://php.net/language.types.integer)) – The field layout’s ID

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null) – The field layout, or null if it doesn’t exist



### `getLayoutByType()`





Returns a field layout by its associated element type.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Fields.php#L135-L140)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The associated element type

#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md) – The field layout










