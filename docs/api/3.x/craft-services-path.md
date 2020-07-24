---
title: craft\services\Path
code:
  - php
  - twig
---

# Path

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Path](craft-services-path.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Path service provides APIs for getting server paths that are used by Craft.

An instance of the Path service is globally accessible in Craft via [`Craft::$app->path`](craft-base-applicationtrait.md#method-getpath).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [assetSourcesPath](craft-services-path.md#assetsourcespath)                                                                | [string](http://php.net/language.types.string)
| [assetThumbsPath](craft-services-path.md#assetthumbspath)                                                                  | [string](http://php.net/language.types.string)
| [assetsIconsPath](craft-services-path.md#assetsiconspath)                                                                  | [string](http://php.net/language.types.string)
| [assetsPath](craft-services-path.md#assetspath)                                                                            | [string](http://php.net/language.types.string)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachePath](craft-services-path.md#cachepath)                                                                              | [string](http://php.net/language.types.string)
| [compiledClassesPath](craft-services-path.md#compiledclassespath)                                                          | [string](http://php.net/language.types.string)
| [compiledTemplatesPath](craft-services-path.md#compiledtemplatespath)                                                      | [string](http://php.net/language.types.string)
| [composerBackupsPath](craft-services-path.md#composerbackupspath)                                                          | [string](http://php.net/language.types.string)
| [configBackupPath](craft-services-path.md#configbackuppath)                                                                | [string](http://php.net/language.types.string)
| [configDeltaPath](craft-services-path.md#configdeltapath)                                                                  | [string](http://php.net/language.types.string)
| [configPath](craft-services-path.md#configpath)                                                                            | [string](http://php.net/language.types.string)
| [cpTemplatesPath](craft-services-path.md#cptemplatespath)                                                                  | [string](http://php.net/language.types.string)
| [cpTranslationsPath](craft-services-path.md#cptranslationspath)                                                            | [string](http://php.net/language.types.string)
| [dbBackupPath](craft-services-path.md#dbbackuppath)                                                                        | [string](http://php.net/language.types.string)
| [imageEditorSourcesPath](craft-services-path.md#imageeditorsourcespath)                                                    | [string](http://php.net/language.types.string)
| [licenseKeyPath](craft-services-path.md#licensekeypath)                                                                    | [string](http://php.net/language.types.string)
| [logPath](craft-services-path.md#logpath)                                                                                  | [string](http://php.net/language.types.string)
| [pluginIconsPath](craft-services-path.md#pluginiconspath)                                                                  | [string](http://php.net/language.types.string)
| [projectConfigFilePath](craft-services-path.md#projectconfigfilepath)                                                      | [string](http://php.net/language.types.string)
| [rebrandPath](craft-services-path.md#rebrandpath)                                                                          | [string](http://php.net/language.types.string)
| [runtimePath](craft-services-path.md#runtimepath)                                                                          | [string](http://php.net/language.types.string)
| [sessionPath](craft-services-path.md#sessionpath)                                                                          | [string](http://php.net/language.types.string)
| [siteTemplatesPath](craft-services-path.md#sitetemplatespath)                                                              | [string](http://php.net/language.types.string)
| [siteTranslationsPath](craft-services-path.md#sitetranslationspath)                                                        | [string](http://php.net/language.types.string)
| [storagePath](craft-services-path.md#storagepath)                                                                          | [string](http://php.net/language.types.string)
| [tempAssetUploadsPath](craft-services-path.md#tempassetuploadspath)                                                        | [string](http://php.net/language.types.string)
| [tempPath](craft-services-path.md#temppath)                                                                                | [string](http://php.net/language.types.string)
| [vendorPath](craft-services-path.md#vendorpath)                                                                            | [string](http://php.net/language.types.string)

### `assetSourcesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `assetThumbsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `assetsIconsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `assetsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `cachePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `compiledClassesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `compiledTemplatesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `composerBackupsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0.38







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `configBackupPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.1.0







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `configDeltaPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `configPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `cpTemplatesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `cpTranslationsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `dbBackupPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `imageEditorSourcesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `licenseKeyPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `logPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `pluginIconsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `projectConfigFilePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.1.2







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `rebrandPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `runtimePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `sessionPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `siteTemplatesPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `siteTranslationsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `storagePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `tempAssetUploadsPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `tempPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)



### `vendorPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php)







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
| [getAssetSourcesPath()](craft-services-path.md#method-getassetsourcespath)                                                                  | Returns the path to the `storage/runtime/assets/sources/` directory.
| [getAssetThumbsPath()](craft-services-path.md#method-getassetthumbspath)                                                                    | Returns the path to the `storage/runtime/assets/thumbs/` directory.
| [getAssetsIconsPath()](craft-services-path.md#method-getassetsiconspath)                                                                    | Returns the path to the `storage/runtime/assets/icons/` directory.
| [getAssetsPath()](craft-services-path.md#method-getassetspath)                                                                              | Returns the path to the `storage/runtime/assets/` directory.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachePath()](craft-services-path.md#method-getcachepath)                                                                                | Returns the path to the file cache directory.
| [getCompiledClassesPath()](craft-services-path.md#method-getcompiledclassespath)                                                            | Returns the path to the `storage/runtime/compiled_classes/` directory.
| [getCompiledTemplatesPath()](craft-services-path.md#method-getcompiledtemplatespath)                                                        | Returns the path to the `storage/runtime/compiled_templates/` directory.
| [getComposerBackupsPath()](craft-services-path.md#method-getcomposerbackupspath)                                                            | Returns the path to the `storage/composer-backups/` directory.
| [getConfigBackupPath()](craft-services-path.md#method-getconfigbackuppath)                                                                  | Returns the path to the `storage/config-backups/` directory.
| [getConfigDeltaPath()](craft-services-path.md#method-getconfigdeltapath)                                                                    | Returns the path to the `storage/config-deltas/` directory.
| [getConfigPath()](craft-services-path.md#method-getconfigpath)                                                                              | Returns the path to the `config/` directory.
| [getCpTemplatesPath()](craft-services-path.md#method-getcptemplatespath)                                                                    | Returns the path to the `app/templates/` directory.
| [getCpTranslationsPath()](craft-services-path.md#method-getcptranslationspath)                                                              | Returns the path to the `app/translations/` directory.
| [getDbBackupPath()](craft-services-path.md#method-getdbbackuppath)                                                                          | Returns the path to the `storage/backups/` directory.
| [getImageEditorSourcesPath()](craft-services-path.md#method-getimageeditorsourcespath)                                                      | Returns the path to the `storage/runtime/assets/imageeditor/` folder.
| [getLicenseKeyPath()](craft-services-path.md#method-getlicensekeypath)                                                                      | Returns the path to the license key file.
| [getLogPath()](craft-services-path.md#method-getlogpath)                                                                                    | Returns the path to the `storage/logs/` directory.
| [getPluginIconsPath()](craft-services-path.md#method-getpluginiconspath)                                                                    | Returns the path to the `storage/runtime/pluginicons/` directory.
| [getProjectConfigFilePath()](craft-services-path.md#method-getprojectconfigfilepath)                                                        | Returns the path to `config/project.yaml`.
| [getRebrandPath()](craft-services-path.md#method-getrebrandpath)                                                                            | Returns the path to the `storage/rebrand/` directory.
| [getRuntimePath()](craft-services-path.md#method-getruntimepath)                                                                            | Returns the path to the `storage/runtime/` directory.
| [getSessionPath()](craft-services-path.md#method-getsessionpath)                                                                            | Returns the path to the `storage/runtime/sessions/` directory.
| [getSiteTemplatesPath()](craft-services-path.md#method-getsitetemplatespath)                                                                | Returns the path to the `templates/` directory.
| [getSiteTranslationsPath()](craft-services-path.md#method-getsitetranslationspath)                                                          | Returns the path to the `translations/` directory.
| [getStoragePath()](craft-services-path.md#method-getstoragepath)                                                                            | Returns the path to the `storage/` directory.
| [getTempAssetUploadsPath()](craft-services-path.md#method-gettempassetuploadspath)                                                          | Returns the path to the `storage/runtime/assets/tempuploads/` directory.
| [getTempPath()](craft-services-path.md#method-gettemppath)                                                                                  | Returns the path to the `storage/runtime/temp/` directory.
| [getVendorPath()](craft-services-path.md#method-getvendorpath)                                                                              | Returns the path to the `vendor/` directory.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getAssetSourcesPath()`





Returns the path to the `storage/runtime/assets/sources/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L295-L304)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getAssetThumbsPath()`





Returns the path to the `storage/runtime/assets/thumbs/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L329-L338)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getAssetsIconsPath()`





Returns the path to the `storage/runtime/assets/icons/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L346-L355)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getAssetsPath()`





Returns the path to the `storage/runtime/assets/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L261-L270)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getCachePath()`





Returns the path to the file cache directory.

This will be located at `storage/runtime/cache/` by default, but that can be overridden with the 'cachePath'
config setting in `config/filecache.php`.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L510-L519)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getCompiledClassesPath()`





Returns the path to the `storage/runtime/compiled_classes/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L456-L465)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getCompiledTemplatesPath()`





Returns the path to the `storage/runtime/compiled_templates/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L473-L482)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getComposerBackupsPath()`



Since

:   3.0.38



Returns the path to the `storage/composer-backups/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L110-L120)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getConfigBackupPath()`



Since

:   3.1.0



Returns the path to the `storage/config-backups/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L130-L140)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getConfigDeltaPath()`



Since

:   3.4.0



Returns the path to the `storage/config-deltas/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L150-L160)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getConfigPath()`





Returns the path to the `config/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L50-L63)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getCpTemplatesPath()`





Returns the path to the `app/templates/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L428-L431)



#### Returns

[string](http://php.net/language.types.string)



### `getCpTranslationsPath()`





Returns the path to the `app/translations/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L397-L400)



#### Returns

[string](http://php.net/language.types.string)



### `getDbBackupPath()`





Returns the path to the `storage/backups/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L227-L236)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getImageEditorSourcesPath()`





Returns the path to the `storage/runtime/assets/imageeditor/` folder.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L312-L321)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getLicenseKeyPath()`





Returns the path to the license key file.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L526-L529)



#### Returns

[string](http://php.net/language.types.string)



### `getLogPath()`





Returns the path to the `storage/logs/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L381-L390)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getPluginIconsPath()`





Returns the path to the `storage/runtime/pluginicons/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L363-L372)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getProjectConfigFilePath()`



Since

:   3.1.2



Returns the path to `config/project.yaml`.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L71-L74)



#### Returns

[string](http://php.net/language.types.string)



### `getRebrandPath()`





Returns the path to the `storage/rebrand/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L169-L178)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getRuntimePath()`





Returns the path to the `storage/runtime/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L208-L218)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getSessionPath()`





Returns the path to the `storage/runtime/sessions/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L490-L499)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getSiteTemplatesPath()`





Returns the path to the `templates/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L439-L448)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getSiteTranslationsPath()`





Returns the path to the `translations/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L408-L421)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getStoragePath()`





Returns the path to the `storage/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L83-L100)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getTempAssetUploadsPath()`





Returns the path to the `storage/runtime/assets/tempuploads/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L278-L287)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getTempPath()`





Returns the path to the `storage/runtime/temp/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L244-L253)


#### Arguments

- `$create` ([boolean](http://php.net/language.types.boolean)) – Whether the directory should be created if it doesn't exist

#### Returns

[string](http://php.net/language.types.string)



### `getVendorPath()`





Returns the path to the `vendor/` directory.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Path.php#L186-L199)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)









