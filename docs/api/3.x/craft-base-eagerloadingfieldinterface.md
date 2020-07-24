---
title: craft\base\EagerLoadingFieldInterface
code:
  - php
  - twig
---

# EagerLoadingFieldInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Users](craft-fields-users.md)

Since

:   3.0.0



EagerLoadingFieldInterface defines the common interface to be implemented by field classes that support eager-loading.





[View source](https://github.com/craftcms/cms/blob/master/src/base/EagerLoadingFieldInterface.php)






## Public Methods

| Method                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------
| [getEagerLoadingGqlConditions()](craft-base-eagerloadingfieldinterface.md#method-geteagerloadinggqlconditions) | Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading should not be allowed in the GraphQL context.
| [getEagerLoadingMap()](craft-base-eagerloadingfieldinterface.md#method-geteagerloadingmap)                     | Returns an array that maps source-to-target element IDs based on this custom field.

### `getEagerLoadingGqlConditions()`



Since

:   3.3.0



Returns an array that lists the scopes this custom field allows when eager-loading or false if eager-loading
should not be allowed in the GraphQL context.




[View source](https://github.com/craftcms/cms/blob/master/src/base/EagerLoadingFieldInterface.php#L40)



#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)



### `getEagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on this custom field.

This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.


[View source](https://github.com/craftcms/cms/blob/master/src/base/EagerLoadingFieldInterface.php#L31)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – An array of the source elements

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored.









