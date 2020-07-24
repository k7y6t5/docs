---
title: craft\helpers\Assets
code:
  - php
  - twig
---

# Assets

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Assets](craft-helpers-assets.md)

Since

:   3.0.0



Class Assets





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php)






## Public Methods

| Method                                                                            | Description
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------
| [fileTransferList()](craft-helpers-assets.md#method-filetransferlist)             | Create an Asset transfer list based on a list of Assets and an array of changing folder ids.
| [filename2Title()](craft-helpers-assets.md#method-filename2title)                 | Generates a default asset title based on its filename.
| [generateUrl()](craft-helpers-assets.md#method-generateurl)                       | Generate a URL for a given Assets file in a Source Type.
| [getAllowedFileKinds()](craft-helpers-assets.md#method-getallowedfilekinds)       | Returns a list of file kinds that are allowed to be uploaded.
| [getFileKindByExtension()](craft-helpers-assets.md#method-getfilekindbyextension) | Return a file's kind by a file's extension.
| [getFileKindLabel()](craft-helpers-assets.md#method-getfilekindlabel)             | Returns the label of a given file kind.
| [getFileKinds()](craft-helpers-assets.md#method-getfilekinds)                     | Returns a list of the supported file kinds.
| [getImageEditorSource()](craft-helpers-assets.md#method-getimageeditorsource)     | Return an image path to use in Image Editor for an Asset by id and size.
| [getMaxUploadSize()](craft-helpers-assets.md#method-getmaxuploadsize)             | Returns the maximum allowed upload size in bytes per all config settings combined.
| [mirrorFolderStructure()](craft-helpers-assets.md#method-mirrorfolderstructure)   | Mirror a folder structure on a Volume.
| [parseFileLocation()](craft-helpers-assets.md#method-parsefilelocation)           | Parses a file location in the format of `{folder:X}filename.ext` returns the folder ID + filename.
| [periodList()](craft-helpers-assets.md#method-periodlist)                         | Get a list of available periods for Cache duration settings.
| [prepareAssetName()](craft-helpers-assets.md#method-prepareassetname)             | Clean an Asset's filename.
| [scaledDimensions()](craft-helpers-assets.md#method-scaleddimensions)             | Returns scaled width & height values for a maximum container size.
| [sortFolderTree()](craft-helpers-assets.md#method-sortfoldertree)                 | Sorts a folder tree by Volume sort order.
| [tempFilePath()](craft-helpers-assets.md#method-tempfilepath)                     | Get a temporary file path.
| [urlAppendix()](craft-helpers-assets.md#method-urlappendix)                       | Get appendix for an URL based on it's Source caching settings.

### `fileTransferList()`





Create an Asset transfer list based on a list of Assets and an array of
changing folder ids.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L231-L247)


#### Arguments

- `$assets` ([array](http://php.net/language.types.array)) – List of assets
- `$folderIdChanges` ([array](http://php.net/language.types.array)) – A map of folder id changes

#### Returns

[array](http://php.net/language.types.array)



### `filename2Title()`





Generates a default asset title based on its filename.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L179-L182)


#### Arguments

- `$filename` ([string](http://php.net/language.types.string)) – The asset's filename

#### Returns

[string](http://php.net/language.types.string)



### `generateUrl()`





Generate a URL for a given Assets file in a Source Type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L85-L92)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md))
- `$asset` ([craft\elements\Asset](craft-elements-asset.md))
- `$uri` ([string](http://php.net/language.types.string)) – Asset URI to use. Defaults to the filename.
- `$transformIndex` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)) – Transform index, for which the URL is being generated, if any

#### Returns

[string](http://php.net/language.types.string)



### `getAllowedFileKinds()`



Since

:   3.1.16



Returns a list of file kinds that are allowed to be uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L301-L320)



#### Returns

[array](http://php.net/language.types.array) – The allowed file kinds



### `getFileKindByExtension()`





Return a file's kind by a file's extension.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L340-L353)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file name/path

#### Returns

[string](http://php.net/language.types.string) – The file kind, or "unknown" if unknown.



### `getFileKindLabel()`





Returns the label of a given file kind.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L328-L332)


#### Arguments

- `$kind` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getFileKinds()`





Returns a list of the supported file kinds.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L289-L293)



#### Returns

[array](http://php.net/language.types.array) – The supported file kinds



### `getImageEditorSource()`





Return an image path to use in Image Editor for an Asset by id and size.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L618-L682)


#### Arguments

- `$assetId` ([integer](http://php.net/language.types.integer))
- `$size` ([integer](http://php.net/language.types.integer))

#### Returns

[false](http://php.net/language.types.boolean), [string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case of failure


### `getMaxUploadSize()`





Returns the maximum allowed upload size in bytes per all config settings combined.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L689-L708)



#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `mirrorFolderStructure()`





Mirror a folder structure on a Volume.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L192-L221)


#### Arguments

- `$sourceParentFolder` ([craft\models\VolumeFolder](craft-models-volumefolder.md)) – Folder who's children folder structure should be mirrored.
- `$destinationFolder` ([craft\models\VolumeFolder](craft-models-volumefolder.md)) – The destination folder
- `$targetTreeMap` ([array](http://php.net/language.types.array)) – Map of relative path => existing folder id

#### Returns

[array](http://php.net/language.types.array) – Map of original folder id => new folder id



### `parseFileLocation()`





Parses a file location in the format of `{folder:X}filename.ext` returns the folder ID + filename.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L362-L371)


#### Arguments

- `$location` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the file location is invalid


### `periodList()`





Get a list of available periods for Cache duration settings.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L254-L264)



#### Returns

[array](http://php.net/language.types.array)



### `prepareAssetName()`





Clean an Asset's filename.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L128-L171)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))
- `$isFilename` ([boolean](http://php.net/language.types.boolean)) – If set to true (default), will separate extension
and clean the filename separately.
- `$preventPluginModifications` ([boolean](http://php.net/language.types.boolean)) – If set to true, will prevent plugins from modify

#### Returns

[string](http://php.net/language.types.string)



### `scaledDimensions()`



Since

:   3.4.21



Returns scaled width & height values for a maximum container size.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L720-L739)


#### Arguments

- `$realWidth` ([integer](http://php.net/language.types.integer))
- `$realHeight` ([integer](http://php.net/language.types.integer))
- `$maxWidth` ([integer](http://php.net/language.types.integer))
- `$maxHeight` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array) – The scaled width and height



### `sortFolderTree()`





Sorts a folder tree by Volume sort order.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L271-L282)


#### Arguments

- `$tree`




### `tempFilePath()`





Get a temporary file path.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L62-L74)


#### Arguments

- `$extension` ([string](http://php.net/language.types.string)) – Extension to use. "tmp" by default.

#### Returns

[string](http://php.net/language.types.string) – The temporary file path

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case of failure


### `urlAppendix()`





Get appendix for an URL based on it's Source caching settings.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Assets.php#L102-L117)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md))
- `$file` ([craft\elements\Asset](craft-elements-asset.md))
- `$transformIndex` ([craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [null](http://php.net/language.types.null)) – Transform index, for which the URL is being generated, if any

#### Returns

[string](http://php.net/language.types.string)







## Constants

| Constant                   | Description
| -------------------------- | -----------
| `INDEX_SKIP_ITEMS_PATTERN` |


## Events

### EVENT_REGISTER_FILE_KINDS



Type

:   [craft\events\RegisterAssetFileKindsEvent](craft-events-registerassetfilekindsevent.md)



The event that is triggered when registering asset file kinds.



---



### EVENT_SET_FILENAME



Type

:   `\craft\helpers\SetElementTableAttributeHtmlEvent`



The event that is triggered when defining an asset’s filename.



---




