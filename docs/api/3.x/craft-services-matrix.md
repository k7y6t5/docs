---
title: craft\services\Matrix
code:
  - php
  - twig
---

# Matrix

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Matrix](craft-services-matrix.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Matrix service provides APIs for managing Matrix fields.

An instance of the Matrix service is globally accessible in Craft via [`Craft::$app->matrix`](craft-base-applicationtrait.md#method-getmatrix).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allBlockTypes](craft-services-matrix.md#allblocktypes)                                                                    | [craft\models\MatrixBlockType](craft-models-matrixblocktype.md)[] – An array of block types.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [ignoreProjectConfigChanges](craft-services-matrix.md#ignoreprojectconfigchanges)                                          | [boolean](http://php.net/language.types.boolean) – Whether to ignore changes to the project config.

### `allBlockTypes`



Type

:   [craft\models\MatrixBlockType](craft-models-matrixblocktype.md)[]

Access

:   Read-only

Since

:   3.3.0



An array of block types.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php)



### `ignoreProjectConfigChanges`

::: danger DEPRECATED
Deprecated in 3.1.2. Use [craft\services\ProjectConfig::$muteEvents](craft-services-projectconfig.md#muteevents) instead.
:::


Type

:   [boolean](http://php.net/language.types.boolean)



Whether to ignore changes to the project config.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L51)







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
| [defineContentTableName()](craft-services-matrix.md#method-definecontenttablename)                                                          | Defines a new Matrix content table name.
| [deleteBlockType()](craft-services-matrix.md#method-deleteblocktype)                                                                        | Deletes a block type.
| [deleteMatrixField()](craft-services-matrix.md#method-deletematrixfield)                                                                    | Deletes a Matrix field.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [duplicateBlocks()](craft-services-matrix.md#method-duplicateblocks)                                                                        | Duplicates Matrix blocks from one owner element to another.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllBlockTypes()](craft-services-matrix.md#method-getallblocktypes)                                                                      | Returns all the block types.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getBlockById()](craft-services-matrix.md#method-getblockbyid)                                                                              | Returns a block by its ID.
| [getBlockTypeById()](craft-services-matrix.md#method-getblocktypebyid)                                                                      | Returns a block type by its ID.
| [getBlockTypesByFieldId()](craft-services-matrix.md#method-getblocktypesbyfieldid)                                                          | Returns the block types for a given Matrix field.
| [getContentTableName()](craft-services-matrix.md#method-getcontenttablename)                                                                | Returns the content table name for a given Matrix field.
| [getSupportedSiteIds()](craft-services-matrix.md#method-getsupportedsiteids)                                                                | Returns the site IDs that are supported by Matrix blocks for the given propagation method and owner element.
| [getSupportedSiteIdsForField()](craft-services-matrix.md#method-getsupportedsiteidsforfield)                                                | Returns the site IDs that are supported by Matrix blocks for the given Matrix field and owner element.
| [handleChangedBlockType()](craft-services-matrix.md#method-handlechangedblocktype)                                                          | Handle block type change
| [handleDeletedBlockType()](craft-services-matrix.md#method-handledeletedblocktype)                                                          | Handle block type change
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveBlockType()](craft-services-matrix.md#method-saveblocktype)                                                                            | Saves a block type.
| [saveField()](craft-services-matrix.md#method-savefield)                                                                                    | Saves a Matrix field.
| [saveSettings()](craft-services-matrix.md#method-savesettings)                                                                              | Saves a Matrix field's settings.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [validateBlockType()](craft-services-matrix.md#method-validateblocktype)                                                                    | Validates a block type.
| [validateFieldSettings()](craft-services-matrix.md#method-validatefieldsettings)                                                            | Validates a Matrix field's settings.

### `defineContentTableName()`



Since

:   3.0.23



Defines a new Matrix content table name.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L716-L726)


#### Arguments

- `$field` ([craft\fields\Matrix](craft-fields-matrix.md))

#### Returns

[string](http://php.net/language.types.string)



### `deleteBlockType()`





Deletes a block type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L425-L429)


#### Arguments

- `$blockType` ([craft\models\MatrixBlockType](craft-models-matrixblocktype.md)) – The block type.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the block type was deleted successfully.



### `deleteMatrixField()`





Deletes a Matrix field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L662-L695)


#### Arguments

- `$matrixField` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the field was deleted successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)


### `duplicateBlocks()`



Since

:   3.2.0



Duplicates Matrix blocks from one owner element to another.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L893-L978)


#### Arguments

- `$field` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field to duplicate blocks for
- `$source` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The source element blocks should be duplicated from
- `$target` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The target element blocks should be duplicated to
- `$checkOtherSites` ([boolean](http://php.net/language.types.boolean)) – Whether to duplicate blocks for the source element's other supported sites


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `getAllBlockTypes()`



Since

:   3.3.0



Returns all the block types.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L116-L128)



#### Returns

[craft\models\MatrixBlockType](craft-models-matrixblocktype.md)[] – An array of block types.



### `getBlockById()`





Returns a block by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L735-L739)


#### Arguments

- `$blockId` ([integer](http://php.net/language.types.integer)) – The Matrix block’s ID.
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site ID to return. Defaults to the current site.

#### Returns

[craft\elements\MatrixBlock](craft-elements-matrixblock.md), [null](http://php.net/language.types.null) – The Matrix block, or `null` if it didn’t exist.



### `getBlockTypeById()`





Returns a block type by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L136-L147)


#### Arguments

- `$blockTypeId` ([integer](http://php.net/language.types.integer)) – The block type ID.

#### Returns

[craft\models\MatrixBlockType](craft-models-matrixblocktype.md), [null](http://php.net/language.types.null) – The block type, or `null` if it didn’t exist.



### `getBlockTypesByFieldId()`





Returns the block types for a given Matrix field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L87-L108)


#### Arguments

- `$fieldId` ([integer](http://php.net/language.types.integer)) – The Matrix field ID.

#### Returns

[craft\models\MatrixBlockType](craft-models-matrixblocktype.md)[] – An array of block types.



### `getContentTableName()`

::: danger DEPRECATED
Deprecated in 3.0.23. Use [craft\fields\Matrix::$contentTable](craft-fields-matrix.md#contenttable) instead.
:::




Returns the content table name for a given Matrix field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L704-L707)


#### Arguments

- `$matrixField` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The table name, or `false` if $useOldHandle was set to `true` and there was no old handle.



### `getSupportedSiteIds()`



Since

:   3.3.18



Returns the site IDs that are supported by Matrix blocks for the given propagation method and owner element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L1002-L1032)


#### Arguments

- `$propagationMethod` ([string](http://php.net/language.types.string))
- `$owner` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[integer](http://php.net/language.types.integer)[]



### `getSupportedSiteIdsForField()`

::: danger DEPRECATED
Deprecated in 3.3.18. Use [getSupportedSiteIds()](craft-services-matrix.md#method-getsupportedsiteids) instead.
:::


Since

:   3.2.0



Returns the site IDs that are supported by Matrix blocks for the given Matrix field and owner element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L989-L992)


#### Arguments

- `$field` ([craft\fields\Matrix](craft-fields-matrix.md))
- `$owner` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[integer](http://php.net/language.types.integer)[]



### `handleChangedBlockType()`





Handle block type change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L313-L417)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedBlockType()`





Handle block type change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L437-L526)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveBlockType()`





Saves a block type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L240-L306)


#### Arguments

- `$blockType` ([craft\models\MatrixBlockType](craft-models-matrixblocktype.md)) – The block type to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the block type should be validated before being saved.
Defaults to `true`.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if an error occurs when saving the block type
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveField()`





Saves a Matrix field.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L748-L881)


#### Arguments

- `$field` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field
- `$owner` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveSettings()`





Saves a Matrix field's settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L582-L653)


#### Arguments

- `$matrixField` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field
- `$validate` ([boolean](http://php.net/language.types.boolean)) – Whether the settings should be validated before being saved.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the settings saved successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `validateBlockType()`





Validates a block type.

If the block type doesn’t validate, any validation errors will be stored on the block type.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L159-L228)


#### Arguments

- `$blockType` ([craft\models\MatrixBlockType](craft-models-matrixblocktype.md)) – The block type.
- `$validateUniques` ([boolean](http://php.net/language.types.boolean)) – Whether the Name and Handle attributes should be validated to
ensure they’re unique. Defaults to `true`.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the block type validated.



### `validateFieldSettings()`





Validates a Matrix field's settings.

If the settings don’t validate, any validation errors will be stored on the settings model.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Matrix.php#L536-L572)


#### Arguments

- `$matrixField` ([craft\fields\Matrix](craft-fields-matrix.md)) – The Matrix field

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the settings validated.







## Constants

| Constant               | Description
| ---------------------- | -----------
| `CONFIG_BLOCKTYPE_KEY` |



