---
title: craft\gql\base\ElementArguments
code:
  - php
  - twig
---

# ElementArguments

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Extended by

:   [craft\gql\arguments\elements\Asset](craft-gql-arguments-elements-asset.md), [craft\gql\arguments\elements\Category](craft-gql-arguments-elements-category.md), [craft\gql\arguments\elements\Entry](craft-gql-arguments-elements-entry.md), [craft\gql\arguments\elements\GlobalSet](craft-gql-arguments-elements-globalset.md), [craft\gql\arguments\elements\MatrixBlock](craft-gql-arguments-elements-matrixblock.md), [craft\gql\arguments\elements\Tag](craft-gql-arguments-elements-tag.md), [craft\gql\arguments\elements\User](craft-gql-arguments-elements-user.md), [craft\gql\base\StructureElementArguments](craft-gql-base-structureelementarguments.md)

Since

:   3.3.0



Class ElementArguments





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementArguments.php)






## Public Methods

| Method                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-base-elementarguments.md#method-getarguments)                                              | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-base-arguments.md#method-getcontentarguments "Defined by craft\gql\base\Arguments") | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementArguments.php#L23-L132)



#### Returns

[array](http://php.net/language.types.array) – $fields





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






