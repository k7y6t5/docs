---
title: craft\commerce\gql\arguments\elements\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\gql\arguments\elements

Inherits

:   [craft\commerce\gql\arguments\elements\Variant](craft-commerce-gql-arguments-elements-variant.md) &raquo;
[craft\gql\base\ElementArguments](https://docs.craftcms.com/api/v3/craft-gql-base-elementarguments.html) &raquo;
[craft\gql\base\Arguments](https://docs.craftcms.com/api/v3/craft-gql-base-arguments.html)

Since

:   3.1



Class Variant





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/arguments/elements/Variant.php)






## Public Methods

| Method                                                                                               | Description
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-commerce-gql-arguments-elements-variant.md#method-getarguments)               | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-commerce-gql-arguments-elements-variant.md#method-getcontentarguments) | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/arguments/elements/Variant.php#L26-L80)



#### Returns

[array](http://php.net/language.types.array) – $fields



### `getContentArguments()`



Since

:   3.1.2



Returns arguments defined by the content fields.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/arguments/elements/Variant.php#L86-L89)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------
| [buildContentArguments()](https://docs.craftcms.com/api/v3/craft-gql-base-arguments.html#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






