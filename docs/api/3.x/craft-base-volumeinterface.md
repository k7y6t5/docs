---
title: craft\base\VolumeInterface
code:
  - php
  - twig
---

# VolumeInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md)

Implemented by

:   [craft\base\FlysystemVolume](craft-base-flysystemvolume.md), [craft\base\Volume](craft-base-volume.md), [craft\volumes\Local](craft-volumes-local.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\volumes\Temp](craft-volumes-temp.md)

Since

:   3.0.0



VolumeInterface defines the common interface to be implemented by volume classes.

A class implementing this interface should also use [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md) and [craft\base\VolumeTrait](craft-base-volumetrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php)






## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [copyFile()](craft-base-volumeinterface.md#method-copyfile)                                                                                 | Copies a file.
| [createDir()](craft-base-volumeinterface.md#method-createdir)                                                                               | Creates a directory.
| [createFileByStream()](craft-base-volumeinterface.md#method-createfilebystream)                                                             | Creates a file.
| [deleteDir()](craft-base-volumeinterface.md#method-deletedir)                                                                               | Deletes a directory.
| [deleteFile()](craft-base-volumeinterface.md#method-deletefile)                                                                             | Deletes a file.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [fileExists()](craft-base-volumeinterface.md#method-fileexists)                                                                             | Returns whether a file exists.
| [folderExists()](craft-base-volumeinterface.md#method-folderexists)                                                                         | Returns whether a folder exists at the given path.
| [getFileList()](craft-base-volumeinterface.md#method-getfilelist)                                                                           | List files.
| [getFileMetadata()](craft-base-volumeinterface.md#method-getfilemetadata)                                                                   | Return the metadata about a file.
| [getFileStream()](craft-base-volumeinterface.md#method-getfilestream)                                                                       | Gets a stream ready for reading by a file's URI.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getRootUrl()](craft-base-volumeinterface.md#method-getrooturl)                                                                             | Returns the URL to the source, if it’s accessible via HTTP traffic.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [renameDir()](craft-base-volumeinterface.md#method-renamedir)                                                                               | Renames a directory.
| [renameFile()](craft-base-volumeinterface.md#method-renamefile)                                                                             | Renames a file.
| [saveFileLocally()](craft-base-volumeinterface.md#method-savefilelocally)                                                                   | Save a file from the source's uriPath to a local target path.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [updateFileByStream()](craft-base-volumeinterface.md#method-updatefilebystream)                                                             | Updates a file.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `copyFile()`





Copies a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L109)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$newPath` ([string](http://php.net/language.types.string)) – The path of the new file, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file with such a name exists already
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be renamed cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `createDir()`





Creates a directory.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L144)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `createFileByStream()`





Creates a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L60)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$stream` ([resource](http://php.net/language.types.resource)) – The stream to file
- `$config` ([array](http://php.net/language.types.array)) – Additional config options to pass to the adapter


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file already exists at the path on the Volume
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `deleteDir()`





Deletes a directory.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L152)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something goes wrong


### `deleteFile()`





Deletes a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L87)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something goes wrong


### `fileExists()`





Returns whether a file exists.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L79)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root

#### Returns

[boolean](http://php.net/language.types.boolean)



### `folderExists()`





Returns whether a folder exists at the given path.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L135)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The folder path to check

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getFileList()`





List files.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L40)


#### Arguments

- `$directory` ([string](http://php.net/language.types.string)) – The path of the directory to list files of
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to fetch file list recursively

#### Returns

[array](http://php.net/language.types.array)



### `getFileMetadata()`





Return the metadata about a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L49)


#### Arguments

- `$uri` ([string](http://php.net/language.types.string)) – URI to the file on the volume

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file cannot be found


### `getFileStream()`





Gets a stream ready for reading by a file's URI.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L127)


#### Arguments

- `$uriPath` ([string](http://php.net/language.types.string))

#### Returns

[resource](http://php.net/language.types.resource)

#### Throws

- [craft\errors\AssetException](craft-errors-assetexception.md)\
  if a stream cannot be created


### `getRootUrl()`





Returns the URL to the source, if it’s accessible via HTTP traffic.

The URL should end in a `/`.


[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L31)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The root URL, or `false` if there isn’t one



### `renameDir()`





Renames a directory.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L163)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root
- `$newName` ([string](http://php.net/language.types.string)) – The new path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `renameFile()`





Renames a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L98)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The old path of the file, relative to the source’s root
- `$newPath` ([string](http://php.net/language.types.string)) – The new path of the file, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file with such a name exists already
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be renamed cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `saveFileLocally()`





Save a file from the source's uriPath to a local target path.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L118)


#### Arguments

- `$uriPath` ([string](http://php.net/language.types.string))
- `$targetPath` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer) – Amount of bytes copied



### `updateFileByStream()`





Updates a file.




[View source](https://github.com/craftcms/cms/blob/master/src/base/VolumeInterface.php#L71)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$stream` ([resource](http://php.net/language.types.resource)) – The new contents of the file as a stream
- `$config` ([array](http://php.net/language.types.array)) – Additional config options to pass to the adapter


#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be updated cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong








