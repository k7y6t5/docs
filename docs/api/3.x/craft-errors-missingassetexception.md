---
title: craft\errors\MissingAssetException
code:
  - php
  - twig
---

# MissingAssetException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\MissingAssetException](craft-errors-missingassetexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.2.0



MissingAssetException represents an exception caused by an asset record that doesn't exist.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php)


## Public Properties

| Property                                                       | Description
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------
| [filename](craft-errors-missingassetexception.md#filename)     | [string](http://php.net/language.types.string)
| [folder](craft-errors-missingassetexception.md#folder)         | [craft\models\VolumeFolder](craft-models-volumefolder.md)
| [indexEntry](craft-errors-missingassetexception.md#indexentry) | [craft\models\AssetIndexData](craft-models-assetindexdata.md)
| [volume](craft-errors-missingassetexception.md#volume)         | [craft\base\VolumeInterface](craft-base-volumeinterface.md), [craft\base\Volume](craft-base-volume.md)

### `filename`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L43)



### `folder`



Type

:   [craft\models\VolumeFolder](craft-models-volumefolder.md)







[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L38)



### `indexEntry`



Type

:   [craft\models\AssetIndexData](craft-models-assetindexdata.md)







[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L28)



### `volume`



Type

:   [craft\base\VolumeInterface](craft-base-volumeinterface.md), [craft\base\Volume](craft-base-volume.md)







[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L33)







## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | -----------
| [__construct()](craft-errors-missingassetexception.md#method-construct) | Constructor
| [getName()](craft-errors-missingassetexception.md#method-getname)       |

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L56-L63)


#### Arguments

- `$indexEntry` ([craft\models\AssetIndexData](craft-models-assetindexdata.md))
- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md))
- `$folder` ([craft\models\VolumeFolder](craft-models-volumefolder.md))
- `$filename` ([string](http://php.net/language.types.string))
- `$message` ([string](http://php.net/language.types.string))
- `$code` ([integer](http://php.net/language.types.integer))
- `$previous` ([Throwable](http://php.net/class.throwable), [null](http://php.net/language.types.null))




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/MissingAssetException.php#L68-L71)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










