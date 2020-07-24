---
title: craft\services\Assets
code:
  - php
  - twig
---

# Assets

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Assets](craft-services-assets.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Assets service.

An instance of the Assets service is globally accessible in Craft via [`Craft::$app->assets`](craft-base-applicationtrait.md#method-getassets).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [currentUserTemporaryUploadFolder](craft-services-assets.md#currentusertemporaryuploadfolder)                              | [craft\models\VolumeFolder](craft-models-volumefolder.md)
| [totalAssets](craft-services-assets.md#totalassets)                                                                        | [integer](http://php.net/language.types.integer)
| [userTemporaryUploadFolder](craft-services-assets.md#usertemporaryuploadfolder)                                            | [craft\models\VolumeFolder](craft-models-volumefolder.md)

### `currentUserTemporaryUploadFolder`



Type

:   [craft\models\VolumeFolder](craft-models-volumefolder.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php)



### `totalAssets`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php)



### `userTemporaryUploadFolder`



Type

:   [craft\models\VolumeFolder](craft-models-volumefolder.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php)







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
| [createFolder()](craft-services-assets.md#method-createfolder)                                                                              | Save an Asset folder.
| [deleteFoldersByIds()](craft-services-assets.md#method-deletefoldersbyids)                                                                  | Deletes a folder by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [ensureFolderByFullPathAndVolume()](craft-services-assets.md#method-ensurefolderbyfullpathandvolume)                                        | Ensure a folder entry exists in the DB for the full path and return it's id. Depending on the use, it's possible to also ensure a physical folder exists.
| [findFolder()](craft-services-assets.md#method-findfolder)                                                                                  | Finds the first folder that matches a given criteria.
| [findFolders()](craft-services-assets.md#method-findfolders)                                                                                | Finds folders that match a given criteria.
| [getAllDescendantFolders()](craft-services-assets.md#method-getalldescendantfolders)                                                        | Returns all of the folders that are descendants of a given folder.
| [getAssetById()](craft-services-assets.md#method-getassetbyid)                                                                              | Returns a file by its ID.
| [getAssetPreviewHandler()](craft-services-assets.md#method-getassetpreviewhandler)                                                          | Returns the asset preview handler for a given asset, or `null` if the asset is not previewable.
| [getAssetUrl()](craft-services-assets.md#method-getasseturl)                                                                                | Returns the URL for an asset, possibly with a given transform applied.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCurrentUserTemporaryUploadFolder()](craft-services-assets.md#method-getcurrentusertemporaryuploadfolder)                                | Return the current user's temporary upload folder.
| [getFolderById()](craft-services-assets.md#method-getfolderbyid)                                                                            | Returns a folder by its ID.
| [getFolderByUid()](craft-services-assets.md#method-getfolderbyuid)                                                                          | Returns a folder by its UID.
| [getFolderTreeByFolderId()](craft-services-assets.md#method-getfoldertreebyfolderid)                                                        | Get the folder tree for Assets by a folder id.
| [getFolderTreeByVolumeIds()](craft-services-assets.md#method-getfoldertreebyvolumeids)                                                      | Get the folder tree for Assets by volume ids
| [getIconPath()](craft-services-assets.md#method-geticonpath)                                                                                | Returns a generic file extension icon path, that can be used as a fallback for assets that don't have a normal thumbnail.
| [getNameReplacementInFolder()](craft-services-assets.md#method-getnamereplacementinfolder)                                                  | Find a replacement for a filename
| [getRootFolderByVolumeId()](craft-services-assets.md#method-getrootfolderbyvolumeid)                                                        | Returns the root folder for a given volume ID.
| [getThumbPath()](craft-services-assets.md#method-getthumbpath)                                                                              | Returns the control panel thumbnail path for a given asset.
| [getThumbUrl()](craft-services-assets.md#method-getthumburl)                                                                                | Returns the control panel thumbnail URL for a given asset.
| [getTotalAssets()](craft-services-assets.md#method-gettotalassets)                                                                          | Gets the total number of assets that match a given criteria.
| [getTotalFolders()](craft-services-assets.md#method-gettotalfolders)                                                                        | Gets the total number of folders that match a given criteria.
| [getUserTemporaryUploadFolder()](craft-services-assets.md#method-getusertemporaryuploadfolder)                                              | Returns the given user's temporary upload folder.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [moveAsset()](craft-services-assets.md#method-moveasset)                                                                                    | Move or rename an Asset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [renameFolderById()](craft-services-assets.md#method-renamefolderbyid)                                                                      | Rename a folder by it's id.
| [replaceAssetFile()](craft-services-assets.md#method-replaceassetfile)                                                                      | Replace an Asset's file.
| [storeFolderRecord()](craft-services-assets.md#method-storefolderrecord)                                                                    | Store a folder by model
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createFolder()`





Save an Asset folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L212-L243)


#### Arguments

- `$folder` ([craft\models\VolumeFolder](craft-models-volumefolder.md))
- `$indexExisting` ([boolean](http://php.net/language.types.boolean)) – Set to true to just index the folder if it already exists on volume.


#### Throws

- [craft\errors\AssetConflictException](craft-errors-assetconflictexception.md)\
  if a folder already exists with such a name
- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $folder doesn’t have a parent
- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if the file actually exists on the volume, but on in the index


### `deleteFoldersByIds()`





Deletes a folder by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L311-L334)


#### Arguments

- `$folderIds` ([array](http://php.net/language.types.array), [integer](http://php.net/language.types.integer))
- `$deleteDir` ([boolean](http://php.net/language.types.boolean)) – Should the volume directory be deleted along the record, if applicable. Defaults to true.


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  If deleting a single folder and it cannot be deleted.


### `ensureFolderByFullPathAndVolume()`





Ensure a folder entry exists in the DB for the full path and return it's id. Depending on the use, it's possible to also ensure a physical folder exists.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L883-L932)


#### Arguments

- `$fullPath` ([string](http://php.net/language.types.string)) – The path to ensure the folder exists at.
- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md))
- `$justRecord` ([boolean](http://php.net/language.types.boolean)) – If set to false, will also make sure the physical folder exists on Volume.

#### Returns

[integer](http://php.net/language.types.integer)

#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  If the volume cannot be found.


### `findFolder()`





Finds the first folder that matches a given criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L516-L530)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md), [null](http://php.net/language.types.null)



### `findFolders()`





Finds folders that match a given criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L442-L474)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md)[]



### `getAllDescendantFolders()`





Returns all of the folders that are descendants of a given folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L483-L508)


#### Arguments

- `$parentFolder` ([craft\models\VolumeFolder](craft-models-volumefolder.md))
- `$orderBy` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)



### `getAssetById()`





Returns a file by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L117-L121)


#### Arguments

- `$assetId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\Asset](craft-elements-asset.md), [null](http://php.net/language.types.null)



### `getAssetPreviewHandler()`



Since

:   3.4.0



Returns the asset preview handler for a given asset, or `null` if the asset is not previewable.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L1047-L1076)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))

#### Returns

[craft\base\AssetPreviewHandlerInterface](craft-base-assetpreviewhandlerinterface.md), [null](http://php.net/language.types.null)



### `getAssetUrl()`





Returns the URL for an asset, possibly with a given transform applied.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L578-L628)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))
- `$generateNow` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the transformed image should be generated immediately if it doesn’t exist. If `null`, it will be left
up to the `generateTransformsBeforePageLoad` config setting.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getCurrentUserTemporaryUploadFolder()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use [getUserTemporaryUploadFolder()](craft-services-assets.md#method-getusertemporaryuploadfolder) instead.
:::




Return the current user's temporary upload folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L963-L966)



#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md)



### `getFolderById()`





Returns a folder by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L396-L411)


#### Arguments

- `$folderId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md), [null](http://php.net/language.types.null)



### `getFolderByUid()`





Returns a folder by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L419-L434)


#### Arguments

- `$folderUid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md), [null](http://php.net/language.types.null)



### `getFolderTreeByFolderId()`





Get the folder tree for Assets by a folder id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L379-L388)


#### Arguments

- `$folderId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)



### `getFolderTreeByVolumeIds()`





Get the folder tree for Assets by volume ids




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L343-L371)


#### Arguments

- `$allowedVolumeIds` ([array](http://php.net/language.types.array))
- `$additionalCriteria` ([array](http://php.net/language.types.array)) – Additional criteria for filtering the tree

#### Returns

[array](http://php.net/language.types.array)



### `getIconPath()`





Returns a generic file extension icon path, that can be used as a fallback
for assets that don't have a normal thumbnail.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L760-L788)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))

#### Returns

[string](http://php.net/language.types.string)



### `getNameReplacementInFolder()`





Find a replacement for a filename




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L799-L872)


#### Arguments

- `$originalFilename` ([string](http://php.net/language.types.string)) – The original filename for which to find a replacement.
- `$folderId` ([integer](http://php.net/language.types.integer)) – The folder in which to find the replacement

#### Returns

[string](http://php.net/language.types.string) – If a suitable filename replacement cannot be found.

#### Throws

- [craft\errors\AssetLogicException](craft-errors-assetlogicexception.md)\
  If a suitable filename replacement cannot be found.
- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if folder ID invalid


### `getRootFolderByVolumeId()`





Returns the root folder for a given volume ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L538-L544)


#### Arguments

- `$volumeId` ([integer](http://php.net/language.types.integer)) – The volume ID

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md), [null](http://php.net/language.types.null) – The root folder in that volume, or null if the volume doesn’t exist



### `getThumbPath()`





Returns the control panel thumbnail path for a given asset.



See also [getThumbUrl()](craft-services-assets.md#method-getthumburl)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L686-L751)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md)) – Asset to return a thumb for
- `$width` ([integer](http://php.net/language.types.integer)) – Width of the returned thumb
- `$height` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Height of the returned thumb (defaults to $width if null)
- `$generate` ([boolean](http://php.net/language.types.boolean)) – Whether to generate a thumb in none exists yet
- `$fallbackToIcon` ([boolean](http://php.net/language.types.boolean)) – Whether to return the path to a generic icon if a thumbnail can't be generated

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – Thumbnail path, or `false` if it doesn't exist and $generate is `false`

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the asset can't have a thumbnail, and $fallbackToIcon is `false`


### `getThumbUrl()`





Returns the control panel thumbnail URL for a given asset.



See also [craft\elements\Asset::getThumbUrl()](craft-elements-asset.md#method-getthumburl)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L642-L672)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md)) – Asset to return a thumb for
- `$width` ([integer](http://php.net/language.types.integer)) – Width of the returned thumb
- `$height` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Height of the returned thumb (defaults to $width if null)
- `$generate` ([boolean](http://php.net/language.types.boolean)) – Whether to generate a thumb in none exists yet
- `$fallbackToIcon` ([boolean](http://php.net/language.types.boolean)) – Whether to return the URL to a generic icon if a thumbnail can't be generated

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the asset can't have a thumbnail, and $fallbackToIcon is `false`


### `getTotalAssets()`





Gets the total number of assets that match a given criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L129-L141)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalFolders()`





Gets the total number of folders that match a given criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L552-L564)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[integer](http://php.net/language.types.integer)



### `getUserTemporaryUploadFolder()`





Returns the given user's temporary upload folder.

If no user is provided, the currently-logged in user will be used (if there is one), or a folder named after
the current session ID.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L978-L1038)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null))

#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md)

#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)


### `moveAsset()`





Move or rename an Asset.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L193-L201)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md)) – The asset whose file should be renamed
- `$folder` ([craft\models\VolumeFolder](craft-models-volumefolder.md)) – The Volume Folder to move the Asset to.
- `$filename` ([string](http://php.net/language.types.string)) – The new filename

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the asset was renamed successfully

#### Throws

- [craft\errors\AssetLogicException](craft-errors-assetlogicexception.md)\
  if the asset’s volume is missing


### `renameFolderById()`





Rename a folder by it's id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L256-L302)


#### Arguments

- `$folderId` ([integer](http://php.net/language.types.integer))
- `$newName` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string) – The new folder name after cleaning it.

#### Throws

- [craft\errors\AssetLogicException](craft-errors-assetlogicexception.md)\
  If the folder to be renamed can't be found or trying to rename the top folder.
- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  If a folder already exists with such name in the Volume, but not in Index
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  If the folder to be renamed can't be found in the Volume.
- [craft\errors\AssetConflictException](craft-errors-assetconflictexception.md)\
  If a folder already exists with such name in Assets Index


### `replaceAssetFile()`





Replace an Asset's file.

Replace an Asset's file by it's id, a local file and the filename to use.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L154-L182)


#### Arguments

- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$pathOnServer` ([string](http://php.net/language.types.string))
- `$filename` ([string](http://php.net/language.types.string))


#### Throws

- [craft\errors\FileException](craft-errors-fileexception.md)\
  If there was a problem with the actual file.
- [craft\errors\AssetLogicException](craft-errors-assetlogicexception.md)\
  If the Asset to be replaced cannot be found.


### `storeFolderRecord()`





Store a folder by model




[View source](https://github.com/craftcms/cms/blob/master/src/services/Assets.php#L939-L955)


#### Arguments

- `$folder` ([craft\models\VolumeFolder](craft-models-volumefolder.md))










## Events

### EVENT_AFTER_REPLACE_ASSET



Type

:   [craft\events\ReplaceAssetEvent](craft-events-replaceassetevent.md)



The event that is triggered after an asset is replaced.



---



### EVENT_BEFORE_REPLACE_ASSET



Type

:   [craft\events\ReplaceAssetEvent](craft-events-replaceassetevent.md)



The event that is triggered before an asset is replaced.



---



### EVENT_GET_ASSET_THUMB_URL



Type

:   [craft\events\GetAssetThumbUrlEvent](craft-events-getassetthumburlevent.md)



The event that is triggered when a thumbnail is being generated for an Asset.



---



### EVENT_GET_ASSET_URL



Type

:   [craft\events\GetAssetUrlEvent](craft-events-getasseturlevent.md)



The event that is triggered when a transform is being generated for an Asset.



---



### EVENT_GET_THUMB_PATH



Type

:   [craft\events\AssetThumbEvent](craft-events-assetthumbevent.md)



The event that is triggered when a thumbnail path is requested.



---



### EVENT_REGISTER_PREVIEW_HANDLER



Type

:   [craft\events\AssetPreviewEvent](craft-events-assetpreviewevent.md)

Since

:   3.4.0



The event that is triggered when determining the preview handler for an asset.



---




