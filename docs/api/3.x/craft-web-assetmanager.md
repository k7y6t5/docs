---
title: craft\web\AssetManager
code:
  - php
  - twig
---

# AssetManager

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\AssetManager](craft-web-assetmanager.md) &raquo;
[yii\web\AssetManager](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php)


## Public Properties

| Property                                                                                                                                   | Description
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$afterCopy-detail "Defined by yii\web\AssetManager")             | `callback` – A PHP callback that is called after a sub-directory or file is successfully copied.
| [appendTimestamp](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$appendTimestamp-detail "Defined by yii\web\AssetManager") | [boolean](http://php.net/language.types.boolean) – Whether to append a timestamp to the URL of every published asset.
| [assetMap](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$assetMap-detail "Defined by yii\web\AssetManager")               | [array](http://php.net/language.types.array) – Mapping from source asset files (keys) to target asset files (values).
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$basePath-detail "Defined by yii\web\AssetManager")               | [string](http://php.net/language.types.string) – The root directory storing the published asset files.
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$baseUrl-detail "Defined by yii\web\AssetManager")                 | [string](http://php.net/language.types.string) – The base URL through which the published asset files can be accessed.
| [beforeCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$beforeCopy-detail "Defined by yii\web\AssetManager")           | `callback` – A PHP callback that is called before copying each sub-directory or file.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                 | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [bundles](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$bundles-detail "Defined by yii\web\AssetManager")                 | [array](http://php.net/language.types.array), [boolean](http://php.net/language.types.boolean) – List of asset bundle configurations.
| [converter](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$converter-detail "Defined by yii\web\AssetManager")             | [yii\web\AssetConverterInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-assetconverterinterface) – The asset converter.
| [dirMode](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$dirMode-detail "Defined by yii\web\AssetManager")                 | [integer](http://php.net/language.types.integer) – The permission to be set for newly generated asset directories.
| [fileMode](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$fileMode-detail "Defined by yii\web\AssetManager")               | [integer](http://php.net/language.types.integer) – The permission to be set for newly published asset files.
| [forceCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$forceCopy-detail "Defined by yii\web\AssetManager")             | [boolean](http://php.net/language.types.boolean) – Whether the directory being published should be copied even if it is found in the target directory.
| [hashCallback](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$hashCallback-detail "Defined by yii\web\AssetManager")       | [callable](http://php.net/language.types.callable) – A callback that will be called to produce hash for asset directory generation.
| [linkAssets](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$linkAssets-detail "Defined by yii\web\AssetManager")           | [boolean](http://php.net/language.types.boolean) – Whether to use symbolic link to publish asset files.





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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAssetPath()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#getAssetPath()-detail "Defined by yii\web\AssetManager")     | Returns the actual file path for the specified asset.
| [getAssetUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#getAssetUrl()-detail "Defined by yii\web\AssetManager")       | Returns the actual URL for the specified asset.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getBundle()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#getBundle()-detail "Defined by yii\web\AssetManager")           | Returns the named asset bundle.
| [getConverter()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#getConverter()-detail "Defined by yii\web\AssetManager")     | Returns the asset converter.
| [getPublishedPath()](craft-web-assetmanager.md#method-getpublishedpath)                                                                     | Returns the published path of a file/directory path.
| [getPublishedUrl()](craft-web-assetmanager.md#method-getpublishedurl)                                                                       | Returns the URL of a published file/directory path.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#publish()-detail "Defined by yii\web\AssetManager")               | Publishes a file or a directory.
| [setConverter()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#setConverter()-detail "Defined by yii\web\AssetManager")     | Sets the asset converter.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getPublishedPath()`





Returns the published path of a file/directory path.




[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php#L31-L39)


#### Arguments

- `$sourcePath` ([string](http://php.net/language.types.string)) – Directory or file path being published
- `$publish` ([boolean](http://php.net/language.types.boolean)) – Whether the directory or file should be published, if not already

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The published file or directory path, or false if $publish is false and the file or directory does not exist



### `getPublishedUrl()`





Returns the URL of a published file/directory path.




[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php#L49-L70)


#### Arguments

- `$sourcePath` ([string](http://php.net/language.types.string)) – Directory or file path being published
- `$publish` ([boolean](http://php.net/language.types.boolean)) – Whether the directory or file should be published, if not already
- `$filePath` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – A file path, relative to $sourcePath if $sourcePath is a directory, that should be appended to the returned URL.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The published URL for the file or directory, or false if $publish is false and the file or directory does not exist





## Protected Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------
| [hash()](craft-web-assetmanager.md#method-hash)                                                                                               | Generate a CRC32 hash for the directory path. Collisions are higher than MD5 but generates a much smaller hash string.
| [loadBundle()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#loadBundle()-detail "Defined by yii\web\AssetManager")           | Loads asset bundle class by name.
| [loadDummyBundle()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#loadDummyBundle()-detail "Defined by yii\web\AssetManager") | Loads dummy bundle by name.
| [publishDirectory()](craft-web-assetmanager.md#method-publishdirectory)                                                                       | Publishes a directory.
| [publishFile()](craft-web-assetmanager.md#method-publishfile)                                                                                 | Publishes a file.
| [resolveAsset()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#resolveAsset()-detail "Defined by yii\web\AssetManager")       |

### `hash()`





Generate a CRC32 hash for the directory path. Collisions are higher
than MD5 but generates a much smaller hash string.








[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php#L75-L101)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – String to be hashed.

#### Returns

[string](http://php.net/language.types.string) – Hashed string.



### `publishDirectory()`





Publishes a directory.








[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php#L106-L114)


#### Arguments

- `$src` ([string](http://php.net/language.types.string)) – The asset directory to be published
- `$options` ([array](http://php.net/language.types.array)) – The options to be applied when publishing a directory.
The following options are supported:

- only: array, list of patterns that the file paths should match if they want to be copied.
- except: array, list of patterns that the files or directories should match if they want to be excluded from being copied.
- caseSensitive: boolean, whether patterns specified at "only" or "except" should be case sensitive. Defaults to true.
- beforeCopy: callback, a PHP callback that is called before copying each sub-directory or file.
  This overrides [beforeCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$beforeCopy-detail) if set.
- afterCopy: callback, a PHP callback that is called after a sub-directory or file is successfully copied.
  This overrides [afterCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$afterCopy-detail) if set.
- forceCopy: boolean, whether the directory being published should be copied even if
  it is found in the target directory. This option is used only when publishing a directory.
  This overrides [forceCopy](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#$forceCopy-detail) if set.

#### Returns

[string](http://php.net/language.types.string)[] – The path directory and the URL that the asset is published as.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the asset to be published does not exist.


### `publishFile()`





Publishes a file.








[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetManager.php#L119-L131)


#### Arguments

- `$src` ([string](http://php.net/language.types.string)) – The asset file to be published

#### Returns

[string](http://php.net/language.types.string)[] – The path and the URL that the asset is published as.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the asset to be published does not exist.







