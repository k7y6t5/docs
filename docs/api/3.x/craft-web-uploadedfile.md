---
title: craft\web\UploadedFile
code:
  - php
  - twig
---

# UploadedFile

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\UploadedFile](craft-web-uploadedfile.md) &raquo;
[yii\web\UploadedFile](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



UploadedFile represents the information for an uploaded file.





[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php)


## Public Properties

| Property                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------
| [baseName](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$baseName-detail "Defined by yii\web\UploadedFile")   | [string](http://php.net/language.types.string) – Original file base name
| [error](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$error-detail "Defined by yii\web\UploadedFile")         | [integer](http://php.net/language.types.integer) – An error code describing the status of this file uploading.
| [extension](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$extension-detail "Defined by yii\web\UploadedFile") | [string](http://php.net/language.types.string) – File extension
| [hasError](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$hasError-detail "Defined by yii\web\UploadedFile")   | [boolean](http://php.net/language.types.boolean) – Whether there is an error with the uploaded file.
| [mimeType](craft-web-uploadedfile.md#mimetype)                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [name](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$name-detail "Defined by yii\web\UploadedFile")           | [string](http://php.net/language.types.string) – The original name of the file being uploaded
| [size](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$size-detail "Defined by yii\web\UploadedFile")           | [integer](http://php.net/language.types.integer) – The actual size of the uploaded file in bytes
| [tempName](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$tempName-detail "Defined by yii\web\UploadedFile")   | [string](http://php.net/language.types.string) – The path of the uploaded file on the server.
| [type](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$type-detail "Defined by yii\web\UploadedFile")           | [string](http://php.net/language.types.string) – The MIME-type of the uploaded file (such as "image/gif").

### `mimeType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.1.7







[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#__toString()-detail "Defined by yii\web\UploadedFile")       | String output.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [getBaseName()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#getBaseName()-detail "Defined by yii\web\UploadedFile")     |
| [getExtension()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#getExtension()-detail "Defined by yii\web\UploadedFile")   |
| [getHasError()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#getHasError()-detail "Defined by yii\web\UploadedFile")     |
| [getInstance()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#getInstance()-detail "Defined by yii\web\UploadedFile")     | Returns an uploaded file for the given model attribute.
| [getInstanceByName()](craft-web-uploadedfile.md#method-getinstancebyname)                                                                 | Returns an instance of the specified uploaded file. The name can be a plain string or a string like an array element (e.g. 'Post[imageFile]', or 'Post[0][imageFile]').
| [getInstances()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#getInstances()-detail "Defined by yii\web\UploadedFile")   | Returns all uploaded files for the given model attribute.
| [getInstancesByName()](craft-web-uploadedfile.md#method-getinstancesbyname)                                                               | Returns an array of instances starting with specified array name.
| [getMimeType()](craft-web-uploadedfile.md#method-getmimetype)                                                                             | Returns the MIME type of the file, based on [craft\helpers\FileHelper::getMimeType()](craft-helpers-filehelper.md#method-getmimetype) rather than what the request told us.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [reset()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#reset()-detail "Defined by yii\web\UploadedFile")                 | Cleans up the loaded UploadedFile instances.
| [saveAs()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#saveAs()-detail "Defined by yii\web\UploadedFile")               | Saves the uploaded file.
| [saveAsTempFile()](craft-web-uploadedfile.md#method-saveastempfile)                                                                       | Saves the uploaded file to a temp location.

### `getInstanceByName()`





Returns an instance of the specified uploaded file. The name can be a plain string or a string like an array
element (e.g. 'Post[imageFile]', or 'Post[0][imageFile]').




[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php#L31-L42)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the file input field
- `$ensureTempFileExists` ([boolean](http://php.net/language.types.boolean)) – Whether to only return the instance if its temp files still exists

#### Returns

`static`, [null](http://php.net/language.types.null) – The instance of the uploaded file. null is returned if no file is uploaded for the
specified name.



### `getInstancesByName()`





Returns an array of instances starting with specified array name.

If multiple files were uploaded and saved as 'Files[0]', 'Files[1]', 'Files[n]'..., you can have them all by
passing 'Files' as array name.


[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php#L57-L78)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the array of files
- `$lookForSingleInstance` ([boolean](http://php.net/language.types.boolean)) – If set to true, will look for a single instance of the given name.
- `$ensureTempFilesExist` ([boolean](http://php.net/language.types.boolean)) – Whether only instances whose temp files still exist should be returned.

#### Returns

[craft\web\UploadedFile](craft-web-uploadedfile.md)[] – The array of UploadedFile objects. Empty array is returned if no adequate upload was
found. Please note that this array will contain all files from all subarrays regardless
how deeply nested they are.



### `getMimeType()`



Since

:   3.1.7



Returns the MIME type of the file, based on [craft\helpers\FileHelper::getMimeType()](craft-helpers-filehelper.md#method-getmimetype) rather than what the
request told us.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php#L115-L137)


#### Arguments

- `$magicFile` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Name of the optional magic database file (or alias).
- `$checkExtension` ([boolean](http://php.net/language.types.boolean)) – Whether to use the file extension to determine the MIME type in case
`finfo_open()` cannot determine it.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  when the `fileinfo` PHP extension is not installed and `$checkExtension` is `false`.


### `saveAsTempFile()`





Saves the uploaded file to a temp location.



See also [error](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#$error-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/web/UploadedFile.php#L88-L102)


#### Arguments

- `$deleteTempFile` ([boolean](http://php.net/language.types.boolean)) – Whether to delete the temporary file after saving.
If true, you will not be able to save the uploaded file again in the current request.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The path to the temp file, or false if the file wasn't saved successfully





## Protected Methods

| Method                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------
| [copyTempFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-uploadedfile#copyTempFile()-detail "Defined by yii\web\UploadedFile") | Copy temporary file into file specified






