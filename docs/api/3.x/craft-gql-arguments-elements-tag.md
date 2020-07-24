---
title: craft\gql\arguments\elements\Tag
code:
  - php
  - twig
---

# Tag

Type

:   Class

Namespace

:   craft\gql\arguments\elements

Inherits

:   [craft\gql\arguments\elements\Tag](craft-gql-arguments-elements-tag.md) &raquo;
[craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Since

:   3.3.0



Class Tag





[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Tag.php)






## Public Methods

| Method                                                                                  | Description
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-arguments-elements-tag.md#method-getarguments)               | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-arguments-elements-tag.md#method-getcontentarguments) | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Tag.php#L27-L41)



#### Returns

[array](http://php.net/language.types.array) – $fields



### `getContentArguments()`





Returns arguments defined by the content fields.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/Tag.php#L46-L50)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






