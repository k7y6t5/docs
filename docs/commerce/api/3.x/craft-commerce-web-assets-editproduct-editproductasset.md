---
title: craft\commerce\web\assets\editproduct\EditProductAsset
code:
  - php
  - twig
---

# EditProductAsset

Type

:   Class

Namespace

:   craft\commerce\web\assets\editproduct

Inherits

:   [craft\commerce\web\assets\editproduct\EditProductAsset](craft-commerce-web-assets-editproduct-editproductasset.md) &raquo;
[craft\web\AssetBundle](https://docs.craftcms.com/api/v3/craft-web-assetbundle.html) &raquo;
[yii\web\AssetBundle](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Edit Product asset bundle





[View source](https://github.com/craftcms/commerce/blob/master/src/web/assets/editproduct/EditProductAsset.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$basePath-detail "Defined by yii\web\AssetBundle")             | [string](http://php.net/language.types.string) – The Web-accessible directory that contains the asset files in this bundle.
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$baseUrl-detail "Defined by yii\web\AssetBundle")               | [string](http://php.net/language.types.string) – The base URL for the relative asset files listed in [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail) and [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail).
| [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail "Defined by yii\web\AssetBundle")                       | [array](http://php.net/language.types.array) – List of CSS files that this bundle contains.
| [cssOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$cssOptions-detail "Defined by yii\web\AssetBundle")         | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail) when registering the CSS files in this bundle.
| [depends](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$depends-detail "Defined by yii\web\AssetBundle")               | [array](http://php.net/language.types.array) – List of bundle class names that this bundle depends on.
| [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail "Defined by yii\web\AssetBundle")                         | [array](http://php.net/language.types.array) – List of JavaScript files that this bundle contains.
| [jsOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$jsOptions-detail "Defined by yii\web\AssetBundle")           | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerJsFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerJsFile()-detail) when registering the JS files in this bundle.
| [publishOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$publishOptions-detail "Defined by yii\web\AssetBundle") | [array](http://php.net/language.types.array) – The options to be passed to [yii\web\AssetManager::publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#publish()-detail) when the asset bundle is being published.
| [sourcePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$sourcePath-detail "Defined by yii\web\AssetBundle")         | [string](http://php.net/language.types.string) – The directory that contains the source asset files for this asset bundle.





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
| [init()](craft-commerce-web-assets-editproduct-editproductasset.md#method-init)                                                                   | Initializes the bundle.
| [publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#publish()-detail "Defined by yii\web\AssetBundle")                       | Publishes the asset bundle if its source code is not under Web-accessible directory.
| [register()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#register()-detail "Defined by yii\web\AssetBundle")                     | Registers this asset bundle with a view.
| [registerAssetFiles()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#registerAssetFiles()-detail "Defined by yii\web\AssetBundle") | Registers the CSS and JS files with the given view.

### `init()`





Initializes the bundle.



If you override this method, make sure you call the parent implementation in the last.




[View source](https://github.com/craftcms/commerce/blob/master/src/web/assets/editproduct/EditProductAsset.php#L24-L41)








## Protected Methods

| Method                                                                                                                                     | Description
| ------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------
| [dotJs()](https://docs.craftcms.com/api/v3/craft-web-assetbundle.html#method-dotjs "Defined by craft\web\AssetBundle")                     | Returns '.min.js' if Craft is configured to serve compressed JavaScript files, otherwise '.js'.
| [useCompressedJs()](https://docs.craftcms.com/api/v3/craft-web-assetbundle.html#method-usecompressedjs "Defined by craft\web\AssetBundle") | Returns whether Craft is configured to serve compressed JavaScript files






