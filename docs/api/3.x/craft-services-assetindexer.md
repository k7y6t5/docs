---
title: craft\services\AssetIndexer
code:
  - php
  - twig
---

# AssetIndexer

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\AssetIndexer](craft-services-assetindexer.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class AssetIndexer



See also http://craftcms.com

[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [indexingSessionId](craft-services-assetindexer.md#indexingsessionid)                                                      | [string](http://php.net/language.types.string)

### `indexingSessionId`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php)







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
| [deleteStaleIndexingData()](craft-services-assetindexer.md#method-deletestaleindexingdata)                                                  | Clean up stale asset indexing data. Stale indexing data is all session data for sessions that have all the recordIds set.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extractFolderItemsFromIndexList()](craft-services-assetindexer.md#method-extractfolderitemsfromindexlist)                                  | Remove folder items from an index list and return their paths.
| [extractSkippedItemsFromIndexList()](craft-services-assetindexer.md#method-extractskippeditemsfromindexlist)                                | Remove skipped items from an index list and return their paths.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getIndexListOnVolume()](craft-services-assetindexer.md#method-getindexlistonvolume)                                                        | Returns a sorted list of files on a volume.
| [getIndexingSessionId()](craft-services-assetindexer.md#method-getindexingsessionid)                                                        | Returns a unique indexing session id.
| [getMissingFiles()](craft-services-assetindexer.md#method-getmissingfiles)                                                                  | Return a list of missing files for an indexing session.
| [getNextIndexEntry()](craft-services-assetindexer.md#method-getnextindexentry)                                                              | Returns the next item to index in an indexing session.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [indexFile()](craft-services-assetindexer.md#method-indexfile)                                                                              | Index a single file by Volume and path.
| [indexFileByEntry()](craft-services-assetindexer.md#method-indexfilebyentry)                                                                | Indexes a file by its index entry.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [prepareIndexList()](craft-services-assetindexer.md#method-prepareindexlist)                                                                | Gets the index list for a volume.
| [processIndexForVolume()](craft-services-assetindexer.md#method-processindexforvolume)                                                      | Process index for a volume.
| [storeIndexList()](craft-services-assetindexer.md#method-storeindexlist)                                                                    | Store the index list in the index data table.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateIndexEntry()](craft-services-assetindexer.md#method-updateindexentry)                                                                | Update indexing-process related data on an index entry.

### `deleteStaleIndexingData()`





Clean up stale asset indexing data. Stale indexing data is all session data for sessions that have all the recordIds set.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L449-L472)




#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `extractFolderItemsFromIndexList()`





Remove folder items from an index list and return their paths.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L195-L204)


#### Arguments

- `$indexList` ([array](http://php.net/language.types.array)) – Index list generated by `AssetIndexer::getIndexListOnVolume()`

#### Returns

[array](http://php.net/language.types.array)



### `extractSkippedItemsFromIndexList()`





Remove skipped items from an index list and return their paths.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L163-L187)


#### Arguments

- `$indexList` ([array](http://php.net/language.types.array)) – Index list generated by `AssetIndexer::getIndexListOnVolume()`

#### Returns

[array](http://php.net/language.types.array)



### `getIndexListOnVolume()`





Returns a sorted list of files on a volume.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L125-L155)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md)) – The Volume to perform indexing on.
- `$directory` ([string](http://php.net/language.types.string)) – Optional path to get index list on a subfolder.

#### Returns

[array](http://php.net/language.types.array)



### `getIndexingSessionId()`





Returns a unique indexing session id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L44-L47)



#### Returns

[string](http://php.net/language.types.string)



### `getMissingFiles()`





Return a list of missing files for an indexing session.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L327-L373)


#### Arguments

- `$sessionId` ([string](http://php.net/language.types.string)) – Session id.

#### Returns

[array](http://php.net/language.types.array)



### `getNextIndexEntry()`





Returns the next item to index in an indexing session.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L275-L299)


#### Arguments

- `$sessionId` ([string](http://php.net/language.types.string)) – Session id.
- `$volumeId` ([integer](http://php.net/language.types.integer)) – Volume id.

#### Returns

[craft\models\AssetIndexData](craft-models-assetindexdata.md), [null](http://php.net/language.types.null)



### `indexFile()`





Index a single file by Volume and path.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L387-L407)


#### Arguments

- `$volume` ([craft\base\Volume](craft-base-volume.md))
- `$path` ([string](http://php.net/language.types.string))
- `$sessionId` ([string](http://php.net/language.types.string)) – Optional indexing session id.
- `$cacheImages` ([boolean](http://php.net/language.types.boolean)) – Whether remotely-stored images should be downloaded and stored locally, to speed up transform generation.
- `$createIfMissing` ([boolean](http://php.net/language.types.boolean)) – Whether the asset record should be created if it doesn't exist yet

#### Returns

[boolean](http://php.net/language.types.boolean), [craft\elements\Asset](craft-elements-asset.md)

#### Throws

- [craft\errors\MissingAssetException](craft-errors-missingassetexception.md)\
  if the asset record doesn't exist and $createIfMissing is false
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  If the file to be indexed cannot be found.


### `indexFileByEntry()`





Indexes a file by its index entry.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L420-L442)


#### Arguments

- `$indexEntry` ([craft\models\AssetIndexData](craft-models-assetindexdata.md))
- `$cacheImages` ([boolean](http://php.net/language.types.boolean)) – Whether remotely-stored images should be downloaded and stored locally, to speed up transform generation.
- `$createIfMissing` ([boolean](http://php.net/language.types.boolean)) – Whether the asset record should be created if it doesn't exist yet

#### Returns

[boolean](http://php.net/language.types.boolean), [craft\elements\Asset](craft-elements-asset.md)

#### Throws

- [craft\errors\MissingAssetException](craft-errors-missingassetexception.md)\
  if the asset record doesn't exist and $createIfMissing is false
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  If the file to be indexed cannot be found.
- [craft\errors\AssetDisallowedExtensionException](craft-errors-assetdisallowedextensionexception.md)\
  If the file being indexed has a disallowed extension


### `prepareIndexList()`





Gets the index list for a volume.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L57-L116)


#### Arguments

- `$sessionId` ([string](http://php.net/language.types.string)) – Session id.
- `$volumeId` ([integer](http://php.net/language.types.integer)) – Volume id.
- `$directory` ([string](http://php.net/language.types.string)) – Optional path to get index list on a subfolder.

#### Returns

[array](http://php.net/language.types.array)



### `processIndexForVolume()`





Process index for a volume.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L238-L266)


#### Arguments

- `$sessionId` ([string](http://php.net/language.types.string)) – Session id.
- `$volumeId` ([integer](http://php.net/language.types.integer)) – Volume id.
- `$cacheImages` ([boolean](http://php.net/language.types.boolean)) – Whether remotely-stored images should be downloaded and stored locally, to speed up transform generation.

#### Returns

`mixed`



### `storeIndexList()`





Store the index list in the index data table.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L213-L228)


#### Arguments

- `$indexList` ([array](http://php.net/language.types.array)) – Index list generated by `AssetIndexer::getIndexListOnVolume()`
- `$sessionId` ([string](http://php.net/language.types.string)) – Session id.
- `$volumeId` ([integer](http://php.net/language.types.integer)) – Volume id.




### `updateIndexEntry()`





Update indexing-process related data on an index entry.




[View source](https://github.com/craftcms/cms/blob/master/src/services/AssetIndexer.php#L307-L318)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer)) – Index entry id.
- `$data` ([array](http://php.net/language.types.array)) – Key=>value array of data to update.











