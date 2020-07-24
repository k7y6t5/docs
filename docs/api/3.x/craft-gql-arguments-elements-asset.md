---
title: craft\gql\arguments\elements\Asset
code:
  - php
  - twig
---

# Asset

Type

:   Class

Namespace

:   craft\gql\arguments\elements

Inherits

:   [craft\gql\arguments\elements\Asset](craft-gql-arguments-elements-asset.md) &raquo;
[craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Since

:   3.3.0



Class Asset





[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Asset.php)






## Public Methods

| Method                                                                                    | Description
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-arguments-elements-asset.md#method-getarguments)               | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-arguments-elements-asset.md#method-getcontentarguments) | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Asset.php#L27-L86)



#### Returns

[array](http://php.net/language.types.array) – $fields



### `getContentArguments()`





Returns arguments defined by the content fields.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Asset.php#L91-L95)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






