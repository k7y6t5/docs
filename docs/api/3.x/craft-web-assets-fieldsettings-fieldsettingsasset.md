---
title: craft\web\assets\fieldsettings\FieldSettingsAsset
code:
  - php
  - twig
---

# FieldSettingsAsset

Type

:   Class

Namespace

:   craft\web\assets\fieldsettings

Inherits

:   [craft\web\assets\fieldsettings\FieldSettingsAsset](craft-web-assets-fieldsettings-fieldsettingsasset.md) &raquo;
[craft\web\AssetBundle](craft-web-assetbundle.md) &raquo;
[yii\web\AssetBundle](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.4.22



Asset bundle for field settings views





[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/fieldsettings/FieldSettingsAsset.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$basePath-detail "Defined by yii\web\AssetBundle")             | [string](http://php.net/language.types.string) – The Web-accessible directory that contains the asset files in this bundle.
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$baseUrl-detail "Defined by yii\web\AssetBundle")               | [string](http://php.net/language.types.string) – The base URL for the relative asset files listed in [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail) and [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail).
| [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail "Defined by yii\web\AssetBundle")                       | [array](http://php.net/language.types.array) – List of CSS files that this bundle contains.
| [cssOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$cssOptions-detail "Defined by yii\web\AssetBundle")         | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail) when registering the CSS files in this bundle.
| [depends](craft-web-assets-fieldsettings-fieldsettingsasset.md#depends)                                                                | [array](http://php.net/language.types.array) – List of bundle class names that this bundle depends on.
| [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail "Defined by yii\web\AssetBundle")                         | [array](http://php.net/language.types.array) – List of JavaScript files that this bundle contains.
| [jsOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$jsOptions-detail "Defined by yii\web\AssetBundle")           | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerJsFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerJsFile()-detail) when registering the JS files in this bundle.
| [publishOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$publishOptions-detail "Defined by yii\web\AssetBundle") | [array](http://php.net/language.types.array) – The options to be passed to [yii\web\AssetManager::publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#publish()-detail) when the asset bundle is being published.
| [sourcePath](craft-web-assets-fieldsettings-fieldsettingsasset.md#sourcepath)                                                          | [string](http://php.net/language.types.string) – The directory that contains the source asset files for this asset bundle.

### `depends`



Type

:   [array](http://php.net/language.types.array)





List of bundle class names that this bundle depends on.

For example:

```php
public $depends = [
   'yii\web\YiiAsset',
   'yii\bootstrap\BootstrapAsset',
];
```





[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/fieldsettings/FieldSettingsAsset.php#L28-L30)



### `sourcePath`



Type

:   [string](http://php.net/language.types.string)





The directory that contains the source asset files for this asset bundle.
A source asset file is a file that is part of your source code repository of your Web application.

You must set this property if the directory containing the source asset files is not Web accessible.
By setting this property, `\craft\web\assets\fieldsettings\AssetManager` will publish the source asset files
to a Web-accessible directory automatically when the asset bundle is registered on a page.

If you do not set this property, it means the source asset files are located under [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$basePath-detail).

You can use either a directory or an alias of the directory.





[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/fieldsettings/FieldSettingsAsset.php#L23)







## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                         | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")               | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                           | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                       | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                   | Returns the fully qualified name of this class.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property is defined.
| [init()](craft-web-assets-fieldsettings-fieldsettingsasset.md#method-init)                                                                        | Initializes the bundle.
| [publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#publish()-detail "Defined by yii\web\AssetBundle")                       | Publishes the asset bundle if its source code is not under Web-accessible directory.
| [register()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#register()-detail "Defined by yii\web\AssetBundle")                     | Registers this asset bundle with a view.
| [registerAssetFiles()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#registerAssetFiles()-detail "Defined by yii\web\AssetBundle") | Registers the CSS and JS files with the given view.

### `init()`





Initializes the bundle.



If you override this method, make sure you call the parent implementation in the last.




[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/fieldsettings/FieldSettingsAsset.php#L35-L42)








## Protected Methods

| Method                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------
| [dotJs()](craft-web-assetbundle.md#method-dotjs "Defined by craft\web\AssetBundle")                     | Returns '.min.js' if Craft is configured to serve compressed JavaScript files, otherwise '.js'.
| [useCompressedJs()](craft-web-assetbundle.md#method-usecompressedjs "Defined by craft\web\AssetBundle") | Returns whether Craft is configured to serve compressed JavaScript files






