---
title: craft\base\GqlInlineFragmentFieldInterface
code:
  - php
  - twig
---

# GqlInlineFragmentFieldInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\Matrix](craft-fields-matrix.md)

Since

:   3.3.0



GqlInlineFragmentFieldInterface defines the common interface to be implemented by fields that support inline GraphQL fragments.





[View source](https://github.com/craftcms/cms/blob/master/src/base/GqlInlineFragmentFieldInterface.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------
| [getGqlFragmentEntityByName()](craft-base-gqlinlinefragmentfieldinterface.md#method-getgqlfragmententitybyname) | Returns a GraphQL fragment by its GraphQL fragment name.

### `getGqlFragmentEntityByName()`





Returns a GraphQL fragment by its GraphQL fragment name.




[View source](https://github.com/craftcms/cms/blob/master/src/base/GqlInlineFragmentFieldInterface.php#L24)


#### Arguments

- `$fragmentName` ([string](http://php.net/language.types.string))

#### Returns

[craft\base\GqlInlineFragmentInterface](craft-base-gqlinlinefragmentinterface.md)









