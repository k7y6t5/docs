---
title: craft\gql\base\Arguments
code:
  - php
  - twig
---

# Arguments

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\Arguments](craft-gql-base-arguments.md)

Extended by

:   [craft\gql\arguments\OptionField](craft-gql-arguments-optionfield.md), [craft\gql\arguments\Transform](craft-gql-arguments-transform.md), [craft\gql\arguments\elements\Asset](craft-gql-arguments-elements-asset.md), [craft\gql\arguments\elements\Category](craft-gql-arguments-elements-category.md), [craft\gql\arguments\elements\Entry](craft-gql-arguments-elements-entry.md), [craft\gql\arguments\elements\GlobalSet](craft-gql-arguments-elements-globalset.md), [craft\gql\arguments\elements\MatrixBlock](craft-gql-arguments-elements-matrixblock.md), [craft\gql\arguments\elements\Tag](craft-gql-arguments-elements-tag.md), [craft\gql\arguments\elements\User](craft-gql-arguments-elements-user.md), [craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md), [craft\gql\base\StructureElementArguments](craft-gql-base-structureelementarguments.md)

Since

:   3.3.0



Class Arguments





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Arguments.php)






## Public Methods

| Method                                                                          | Description
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-base-arguments.md#method-getarguments)               | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-base-arguments.md#method-getcontentarguments) | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Arguments.php#L27-L41)



#### Returns

[array](http://php.net/language.types.array) – $fields



### `getContentArguments()`





Returns arguments defined by the content fields.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Arguments.php#L48-L51)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                              | Description
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments) | Return the content arguments based on a list of contexts and an element class.

### `buildContentArguments()`

::: danger DEPRECATED
Deprecated in 3.4.5. Use [craft\services\Gql::getContentArguments()](craft-services-gql.md#method-getcontentarguments) instead.
:::




Return the content arguments based on a list of contexts and an element class.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Arguments.php#L61-L64)


#### Arguments

- `$contexts` ([array](http://php.net/language.types.array))
- `$elementClass` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)








