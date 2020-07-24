---
title: craft\gql\base\GeneratorInterface
code:
  - php
  - twig
---

# GeneratorInterface

Type

:   Interface

Namespace

:   craft\gql\base

Implemented by

:   [craft\gql\types\generators\AssetType](craft-gql-types-generators-assettype.md), [craft\gql\types\generators\CategoryType](craft-gql-types-generators-categorytype.md), [craft\gql\types\generators\ElementType](craft-gql-types-generators-elementtype.md), [craft\gql\types\generators\EntryType](craft-gql-types-generators-entrytype.md), [craft\gql\types\generators\GlobalSetType](craft-gql-types-generators-globalsettype.md), [craft\gql\types\generators\MatrixBlockType](craft-gql-types-generators-matrixblocktype.md), [craft\gql\types\generators\TableRowType](craft-gql-types-generators-tablerowtype.md), [craft\gql\types\generators\TagType](craft-gql-types-generators-tagtype.md), [craft\gql\types\generators\UserType](craft-gql-types-generators-usertype.md)

Since

:   3.3.0



Class GeneratorInterface





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GeneratorInterface.php)






## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | -----------------------
| [generateTypes()](craft-gql-base-generatorinterface.md#method-generatetypes) | Generate GraphQL types.

### `generateTypes()`





Generate GraphQL types.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GeneratorInterface.php#L25)


#### Arguments

- `$context` (`mixed`) – Context for generated types

#### Returns

[array](http://php.net/language.types.array)









