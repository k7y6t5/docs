---
title: craft\services\AssetTransforms
code:
  - php
  - twig
---

# AssetTransforms

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\AssetTransforms](craft-services-assettransforms.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Asset Transforms service.

An instance of the Asset Transforms service is globally accessible in Craft via [`Craft::$app->assetTransforms`](craft-base-applicationtrait.md#method-getassettransforms).



[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [activeTransformIndex](craft-services-assettransforms.md#activetransformindex)                                             | [craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)
| [allTransforms](craft-services-assettransforms.md#alltransforms)                                                           | [craft\models\AssetTransform](craft-models-assettransform.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedCloudImageSize](craft-services-assettransforms.md#cachedcloudimagesize)                                             | [integer](http://php.net/language.types.integer)
| [pendingTransformIndexIds](craft-services-assettransforms.md#pendingtransformindexids)                                     | [array](http://php.net/language.types.array)

### `activeTransformIndex`



Type

:   [craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php)



### `allTransforms`



Type

:   [craft\models\AssetTransform](craft-models-assettransform.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php)



### `cachedCloudImageSize`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php)



### `pendingTransformIndexIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php)







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
| [deleteAllTransformData()](craft-services-assettransforms.md#method-deletealltransformdata)                                                 | Delete *ALL* transform data (including thumbs and sources) associated with the Asset.
| [deleteCreatedTransformsForAsset()](craft-services-assettransforms.md#method-deletecreatedtransformsforasset)                               | Delete created transforms for an Asset.
| [deleteQueuedSourceFiles()](craft-services-assettransforms.md#method-deletequeuedsourcefiles)                                               | Delete all image sources queued up for deletion.
| [deleteResizedAssetVersion()](craft-services-assettransforms.md#method-deleteresizedassetversion)                                           | Delete all the generated thumbnails for the Asset.
| [deleteTransform()](craft-services-assettransforms.md#method-deletetransform)                                                               | Deletes an asset transform.
| [deleteTransformById()](craft-services-assettransforms.md#method-deletetransformbyid)                                                       | Deletes an asset transform by its ID.
| [deleteTransformIndex()](craft-services-assettransforms.md#method-deletetransformindex)                                                     | Delete a transform index by.
| [deleteTransformIndexDataByAssetId()](craft-services-assettransforms.md#method-deletetransformindexdatabyassetid)                           | Delete transform records by an Asset id
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [detectAutoTransformFormat()](craft-services-assettransforms.md#method-detectautotransformformat)                                           | Detect the auto web-safe format for the Asset. Returns null, if the Asset is not an image.
| [eagerLoadTransforms()](craft-services-assettransforms.md#method-eagerloadtransforms)                                                       | Eager-loads transform indexes for a given set of file IDs.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [ensureTransformUrlByIndexModel()](craft-services-assettransforms.md#method-ensuretransformurlbyindexmodel)                                 | Get a transform URL by the transform index model.
| [getActiveTransformIndex()](craft-services-assettransforms.md#method-getactivetransformindex)                                               |
| [getAllCreatedTransformsForAsset()](craft-services-assettransforms.md#method-getallcreatedtransformsforasset)                               | Get an array of AssetTransformIndex models for all created transforms for an Asset.
| [getAllTransforms()](craft-services-assettransforms.md#method-getalltransforms)                                                             | Returns all named asset transforms.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachedCloudImageSize()](craft-services-assettransforms.md#method-getcachedcloudimagesize)                                               | Get the size of max cached cloud images dimension.
| [getLocalImageSource()](craft-services-assettransforms.md#method-getlocalimagesource)                                                       | Get a local image source to use for transforms.
| [getPendingTransformIndexIds()](craft-services-assettransforms.md#method-getpendingtransformindexids)                                       | Returns a list of pending transform index IDs.
| [getTransformByHandle()](craft-services-assettransforms.md#method-gettransformbyhandle)                                                     | Returns an asset transform by its handle.
| [getTransformById()](craft-services-assettransforms.md#method-gettransformbyid)                                                             | Returns an asset transform by its ID.
| [getTransformByUid()](craft-services-assettransforms.md#method-gettransformbyuid)                                                           | Returns an asset transform by its UID.
| [getTransformFilename()](craft-services-assettransforms.md#method-gettransformfilename)                                                     | Return the filename used by the Transform Index for the Asset.
| [getTransformIndex()](craft-services-assettransforms.md#method-gettransformindex)                                                           | Get a transform index row. If it doesn't exist - create one.
| [getTransformIndexModelByAssetIdAndHandle()](craft-services-assettransforms.md#method-gettransformindexmodelbyassetidandhandle)             | Get a transform index model by a row id.
| [getTransformIndexModelById()](craft-services-assettransforms.md#method-gettransformindexmodelbyid)                                         | Get a transform index model by a row id.
| [getTransformSubfolder()](craft-services-assettransforms.md#method-gettransformsubfolder)                                                   | Return a subfolder used by the Transform Index for the Asset.
| [getTransformSubpath()](craft-services-assettransforms.md#method-gettransformsubpath)                                                       | Returns the path to a transform, relative to the asset's folder.
| [getTransformUri()](craft-services-assettransforms.md#method-gettransformuri)                                                               | Returns the URI for a transform, relative to the asset's folder.
| [getUrlForTransformByAssetAndTransformIndex()](craft-services-assettransforms.md#method-geturlfortransformbyassetandtransformindex)         | Get URL for Transform by the transform index model.
| [getUrlForTransformByIndexId()](craft-services-assettransforms.md#method-geturlfortransformbyindexid)                                       | Get URL for Transform by TransformIndexId.
| [handleChangedTransform()](craft-services-assettransforms.md#method-handlechangedtransform)                                                 | Handle transform change.
| [handleDeletedTransform()](craft-services-assettransforms.md#method-handledeletedtransform)                                                 | Handle transform being deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [normalizeTransform()](craft-services-assettransforms.md#method-normalizetransform)                                                         | Normalize a transform from handle or a set of properties to an AssetTransform.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [queueSourceForDeletingIfNecessary()](craft-services-assettransforms.md#method-queuesourcefordeletingifnecessary)                           | Deletes an image local source if required by config.
| [saveTransform()](craft-services-assettransforms.md#method-savetransform)                                                                   | Saves an asset transform.
| [setActiveTransformIndex()](craft-services-assettransforms.md#method-setactivetransformindex)                                               |
| [storeLocalSource()](craft-services-assettransforms.md#method-storelocalsource)                                                             | Store a local image copy to a destination path.
| [storeTransformIndexData()](craft-services-assettransforms.md#method-storetransformindexdata)                                               | Store a transform index data by it's model.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [validateTransformIndexResult()](craft-services-assettransforms.md#method-validatetransformindexresult)                                     | Validates a transform index result to see if the index is still valid for a given file.

### `deleteAllTransformData()`





Delete *ALL* transform data (including thumbs and sources) associated with the Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1169-L1180)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))




### `deleteCreatedTransformsForAsset()`





Delete created transforms for an Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1218-L1243)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something went very wrong when deleting a transform


### `deleteQueuedSourceFiles()`





Delete all image sources queued up for deletion.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1011-L1017)






### `deleteResizedAssetVersion()`





Delete all the generated thumbnails for the Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1187-L1210)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))




### `deleteTransform()`





Deletes an asset transform.

Note that passing an ID to this function is now deprecated. Use [deleteTransformById()](craft-services-assettransforms.md#method-deletetransformbyid) instead.


[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L316-L336)


#### Arguments

- `$transform` ([integer](http://php.net/language.types.integer), [craft\models\AssetTransform](craft-models-assettransform.md)) – The transform

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the transform was deleted

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)\
  on DB error


### `deleteTransformById()`





Deletes an asset transform by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L296-L305)


#### Arguments

- `$transformId` ([integer](http://php.net/language.types.integer)) – The transform's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the transform was deleted.

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)\
  on DB error


### `deleteTransformIndex()`





Delete a transform index by.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L903-L908)


#### Arguments

- `$indexId` ([integer](http://php.net/language.types.integer))




### `deleteTransformIndexDataByAssetId()`





Delete transform records by an Asset id




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L891-L896)


#### Arguments

- `$assetId` ([integer](http://php.net/language.types.integer))




### `detectAutoTransformFormat()`





Detect the auto web-safe format for the Asset. Returns null, if the Asset is not an image.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1056-L1098)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))

#### Returns

`mixed`, [string](http://php.net/language.types.string)

#### Throws

- [craft\errors\AssetLogicException](craft-errors-assetlogicexception.md)\
  If attempting to detect an image format for a non-image.


### `eagerLoadTransforms()`





Eager-loads transform indexes for a given set of file IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L383-L456)


#### Arguments

- `$assets` ([craft\elements\Asset](craft-elements-asset.md)[], [array](http://php.net/language.types.array)) – The files to eager-load tranforms for
- `$transforms` ([array](http://php.net/language.types.array)) – The transform definitions to eager-load




### `ensureTransformUrlByIndexModel()`





Get a transform URL by the transform index model.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L567-L637)


#### Arguments

- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  If there was an error generating the transform.


### `getActiveTransformIndex()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1267-L1270)



#### Returns

[craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)



### `getAllCreatedTransformsForAsset()`





Get an array of AssetTransformIndex models for all created transforms for an Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1251-L1262)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))

#### Returns

[array](http://php.net/language.types.array)



### `getAllTransforms()`





Returns all named asset transforms.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L118-L131)



#### Returns

[craft\models\AssetTransform](craft-models-assettransform.md)[]



### `getCachedCloudImageSize()`





Get the size of max cached cloud images dimension.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L987-L990)



#### Returns

[integer](http://php.net/language.types.integer)



### `getLocalImageSource()`





Get a local image source to use for transforms.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L918-L980)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  If there was an error downloading the remote file.
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  If the file cannot be found.


### `getPendingTransformIndexIds()`





Returns a list of pending transform index IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L817-L823)



#### Returns

[array](http://php.net/language.types.array)



### `getTransformByHandle()`





Returns an asset transform by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L139-L142)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\AssetTransform](craft-models-assettransform.md), [null](http://php.net/language.types.null)



### `getTransformById()`





Returns an asset transform by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L150-L153)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\AssetTransform](craft-models-assettransform.md), [null](http://php.net/language.types.null)



### `getTransformByUid()`



Since

:   3.1.0



Returns an asset transform by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L162-L165)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\AssetTransform](craft-models-assettransform.md), [null](http://php.net/language.types.null)



### `getTransformFilename()`





Return the filename used by the Transform Index for the Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1125-L1132)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)



### `getTransformIndex()`





Get a transform index row. If it doesn't exist - create one.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L466-L529)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\models\AssetTransformIndex](craft-models-assettransformindex.md)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  if the transform cannot be found by the handle


### `getTransformIndexModelByAssetIdAndHandle()`





Get a transform index model by a row id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L847-L857)


#### Arguments

- `$assetId` ([integer](http://php.net/language.types.integer))
- `$transformHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)



### `getTransformIndexModelById()`





Get a transform index model by a row id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L831-L838)


#### Arguments

- `$transformId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)



### `getTransformSubfolder()`





Return a subfolder used by the Transform Index for the Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1107-L1116)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)



### `getTransformSubpath()`





Returns the path to a transform, relative to the asset's folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1141-L1144)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)



### `getTransformUri()`





Returns the URI for a transform, relative to the asset's folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1153-L1162)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)



### `getUrlForTransformByAssetAndTransformIndex()`





Get URL for Transform by the transform index model.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L881-L884)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$transformIndexModel` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[string](http://php.net/language.types.string)



### `getUrlForTransformByIndexId()`





Get URL for Transform by TransformIndexId.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L865-L872)


#### Arguments

- `$transformId` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string)



### `handleChangedTransform()`





Handle transform change.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L227-L287)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedTransform()`





Handle transform being deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L343-L375)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `normalizeTransform()`





Normalize a transform from handle or a set of properties to an AssetTransform.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L734-L773)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\models\AssetTransform](craft-models-assettransform.md), [null](http://php.net/language.types.null)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  if $transform is an invalid transform handle


### `queueSourceForDeletingIfNecessary()`





Deletes an image local source if required by config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L997-L1006)


#### Arguments

- `$imageSource` ([string](http://php.net/language.types.string))




### `saveTransform()`





Saves an asset transform.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L175-L220)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md)) – The transform to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the transform should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  If attempting to update a non-existing transform.


### `setActiveTransformIndex()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1275-L1278)


#### Arguments

- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))




### `storeLocalSource()`





Store a local image copy to a destination path.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L1025-L1047)


#### Arguments

- `$source` ([string](http://php.net/language.types.string))
- `$destination` ([string](http://php.net/language.types.string))




### `storeTransformIndexData()`





Store a transform index data by it's model.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L781-L810)


#### Arguments

- `$index` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md))

#### Returns

[craft\models\AssetTransformIndex](craft-models-assettransformindex.md)



### `validateTransformIndexResult()`





Validates a transform index result to see if the index is still valid for a given file.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetTransforms.php#L539-L558)


#### Arguments

- `$result` ([array](http://php.net/language.types.array))
- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md))
- `$asset` ([craft\elements\Asset](craft-elements-asset.md), [array](http://php.net/language.types.array)) – The asset object or a raw database result

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the index result is still valid







## Constants

| Constant               | Description
| ---------------------- | -----------
| `CONFIG_TRANSFORM_KEY` |


## Events

### EVENT_AFTER_DELETE_ASSET_TRANSFORM



Type

:   [craft\events\AssetTransformEvent](craft-events-assettransformevent.md)



The event that is triggered after an asset transform is deleted



---



### EVENT_AFTER_DELETE_TRANSFORMS



Type

:   [craft\events\AssetTransformImageEvent](craft-events-assettransformimageevent.md)



The event that is triggered after deleting generated transforms.



---



### EVENT_AFTER_SAVE_ASSET_TRANSFORM



Type

:   [craft\events\AssetTransformEvent](craft-events-assettransformevent.md)



The event that is triggered after an asset transform is saved



---



### EVENT_BEFORE_APPLY_TRANSFORM_DELETE



Type

:   [craft\events\AssetTransformEvent](craft-events-assettransformevent.md)

Since

:   3.1.0



The event that is triggered before a transform delete is applied to the database.



---



### EVENT_BEFORE_DELETE_ASSET_TRANSFORM



Type

:   [craft\events\AssetTransformEvent](craft-events-assettransformevent.md)



The event that is triggered before an asset transform is deleted



---



### EVENT_BEFORE_DELETE_TRANSFORMS



Type

:   [craft\events\AssetTransformImageEvent](craft-events-assettransformimageevent.md)



The event that is triggered before deleting generated transforms.



---



### EVENT_BEFORE_SAVE_ASSET_TRANSFORM



Type

:   [craft\events\AssetTransformEvent](craft-events-assettransformevent.md)



The event that is triggered before an asset transform is saved



---



### EVENT_GENERATE_TRANSFORM



Type

:   [craft\events\GenerateTransformEvent](craft-events-generatetransformevent.md)



The event that is triggered when a transform is being generated for an Asset.



---




