---
title: craft\gql\base\StructureElementArguments
code:
  - php
  - twig
---

# StructureElementArguments

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\StructureElementArguments](craft-gql-base-structureelementarguments.md) &raquo;
[craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Extended by

:   [craft\gql\arguments\elements\Category](craft-gql-arguments-elements-category.md), [craft\gql\arguments\elements\Entry](craft-gql-arguments-elements-entry.md)

Since

:   3.3.0



Class StructureElementArguments





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/StructureElementArguments.php)






## Public Methods

| Method                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-base-structureelementarguments.md#method-getarguments)                                     | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-base-arguments.md#method-getcontentarguments "Defined by craft\gql\base\Arguments") | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/StructureElementArguments.php#L23-L92)



#### Returns

[array](http://php.net/language.types.array) – $fields





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






