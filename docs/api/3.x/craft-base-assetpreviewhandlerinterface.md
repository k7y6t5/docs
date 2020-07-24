---
title: craft\base\AssetPreviewHandlerInterface
code:
  - php
  - twig
---

# AssetPreviewHandlerInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\assetpreviews\Image](craft-assetpreviews-image.md), [craft\assetpreviews\Pdf](craft-assetpreviews-pdf.md), [craft\assetpreviews\Text](craft-assetpreviews-text.md), [craft\assetpreviews\Video](craft-assetpreviews-video.md), [craft\base\AssetPreviewHandler](craft-base-assetpreviewhandler.md)

Since

:   3.4.0



The AssetPreview interface dictates the requirements to register Asset Preview handlers with Craft





[View source](https://github.com/craftcms/cms/blob/master/src/base/AssetPreviewHandlerInterface.php)






## Public Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | -------------------------------
| [getPreviewHtml()](craft-base-assetpreviewhandlerinterface.md#method-getpreviewhtml) | Returns the asset preview HTML.

### `getPreviewHtml()`





Returns the asset preview HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/AssetPreviewHandlerInterface.php#L27)



#### Returns

[string](http://php.net/language.types.string) – The preview modal HTML

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the asset can’t be previewed








