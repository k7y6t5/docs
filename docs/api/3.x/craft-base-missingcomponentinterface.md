---
title: craft\base\MissingComponentInterface
code:
  - php
  - twig
---

# MissingComponentInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\MissingField](craft-fields-missingfield.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md)

Since

:   3.0.0



MissingComponentInterface defines the common interface for classes that represent a missing component class.

A class implementing this interface should also implement [craft\base\ComponentInterface](craft-base-componentinterface.md) and [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable),
and use [craft\base\MissingComponentTrait](craft-base-missingcomponenttrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentInterface.php)












