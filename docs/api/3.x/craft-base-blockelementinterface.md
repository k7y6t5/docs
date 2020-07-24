---
title: craft\base\BlockElementInterface
code:
  - php
  - twig
---

# BlockElementInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\elements\MatrixBlock](craft-elements-matrixblock.md)

Since

:   3.2.0



BlockElementInterface defines the common interface to be implemented by “block element” classes.

Block elements are elements that are owned by a parent element.



[View source](https://github.com/craftcms/cms/blob/master/src/base/BlockElementInterface.php)






## Public Methods

| Method                                                            | Description
| ----------------------------------------------------------------- | --------------------------
| [getOwner()](craft-base-blockelementinterface.md#method-getowner) | Returns the owner element.

### `getOwner()`





Returns the owner element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/BlockElementInterface.php#L28)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the element is unable to determine its owner








