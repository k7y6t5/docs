---
title: craft\base\SortableFieldInterface
code:
  - php
  - twig
---

# SortableFieldInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md)

Since

:   3.2.0



SortableFieldInterface defines the common interface to be implemented by field classes that can be available as
sort options on element indexes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/SortableFieldInterface.php)






## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------
| [getSortOption()](craft-base-sortablefieldinterface.md#method-getsortoption) | Returns the sort option array that should be included in the element’s [sortOptions()](craft-base-elementinterface.md#method-sortoptions) response.

### `getSortOption()`





Returns the sort option array that should be included in the element’s
[sortOptions()](craft-base-elementinterface.md#method-sortoptions) response.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SortableFieldInterface.php#L25)



#### Returns

[array](http://php.net/language.types.array)









