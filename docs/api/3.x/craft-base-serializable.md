---
title: craft\base\Serializable
code:
  - php
  - twig
---

# Serializable

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\data\ColorData](craft-fields-data-colordata.md), [craft\fields\data\OptionData](craft-fields-data-optiondata.md), [craft\fields\data\SingleOptionFieldData](craft-fields-data-singleoptionfielddata.md), [craft\test\mockclasses\serializable\Serializable](craft-test-mockclasses-serializable-serializable.md)

Since

:   3.0.0



Serializable is the interface that should be implemented by classes who want to support customizable representation of their instances
when getting stored somewhere.





[View source](https://github.com/craftcms/cms/blob/master/src/base/Serializable.php)






## Public Methods

| Method                                                     | Description
| ---------------------------------------------------------- | --------------------------------------
| [serialize()](craft-base-serializable.md#method-serialize) | Returns the object’s serialized value.

### `serialize()`





Returns the object’s serialized value.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Serializable.php#L24)



#### Returns

`mixed` – The serialized value









