---
title: craft\web\assets\graphiql\VendorAsset
code:
  - php
  - twig
---

# VendorAsset

Type

:   Class

Namespace

:   craft\web\assets\graphiql

Inherits

:   [craft\web\assets\graphiql\VendorAsset](craft-web-assets-graphiql-vendorasset.md) &raquo;
[craft\web\AssetBundle](craft-web-assetbundle.md) &raquo;
[yii\web\AssetBundle](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.3.0

Deprecated in

:    in 3.3.16. Use [[GraphiqlAsset]] instead.



VendorAsset asset bundle.





[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/graphiql/VendorAsset.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$basePath-detail "Defined by yii\web\AssetBundle")             | [string](http://php.net/language.types.string) – The Web-accessible directory that contains the asset files in this bundle.
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$baseUrl-detail "Defined by yii\web\AssetBundle")               | [string](http://php.net/language.types.string) – The base URL for the relative asset files listed in [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail) and [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail).
| [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail "Defined by yii\web\AssetBundle")                       | [array](http://php.net/language.types.array) – List of CSS files that this bundle contains.
| [cssOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$cssOptions-detail "Defined by yii\web\AssetBundle")         | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail) when registering the CSS files in this bundle.
| [depends](craft-web-assets-graphiql-vendorasset.md#depends)                                                                            | [array](http://php.net/language.types.array) – List of bundle class names that this bundle depends on.
| [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail "Defined by yii\web\AssetBundle")                         | [array](http://php.net/language.types.array) – List of JavaScript files that this bundle contains.
| [jsOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$jsOptions-detail "Defined by yii\web\AssetBundle")           | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerJsFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerJsFile()-detail) when registering the JS files in this bundle.
| [publishOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$publishOptions-detail "Defined by yii\web\AssetBundle") | [array](http://php.net/language.types.array) – The options to be passed to [yii\web\AssetManager::publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#publish()-detail) when the asset bundle is being published.
| [sourcePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$sourcePath-detail "Defined by yii\web\AssetBundle")         | [string](http://php.net/language.types.string) – The directory that contains the source asset files for this asset bundle.

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





[View source](https://github.com/craftcms/cms/blob/master/src/web/assets/graphiql/VendorAsset.php#L22-L24)







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
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                             | Initializes the object.
| [publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#publish()-detail "Defined by yii\web\AssetBundle")                       | Publishes the asset bundle if its source code is not under Web-accessible directory.
| [register()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#register()-detail "Defined by yii\web\AssetBundle")                     | Registers this asset bundle with a view.
| [registerAssetFiles()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#registerAssetFiles()-detail "Defined by yii\web\AssetBundle") | Registers the CSS and JS files with the given view.



## Protected Methods

| Method                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------
| [dotJs()](craft-web-assetbundle.md#method-dotjs "Defined by craft\web\AssetBundle")                     | Returns '.min.js' if Craft is configured to serve compressed JavaScript files, otherwise '.js'.
| [useCompressedJs()](craft-web-assetbundle.md#method-usecompressedjs "Defined by craft\web\AssetBundle") | Returns whether Craft is configured to serve compressed JavaScript files






