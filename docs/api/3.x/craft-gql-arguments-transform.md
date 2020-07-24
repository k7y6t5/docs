---
title: craft\gql\arguments\Transform
code:
  - php
  - twig
---

# Transform

Type

:   Class

Namespace

:   craft\gql\arguments

Inherits

:   [craft\gql\arguments\Transform](craft-gql-arguments-transform.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Since

:   3.3.0



Class Transform





[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/Transform.php)






## Public Methods

| Method                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-arguments-transform.md#method-getarguments)                                                | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-base-arguments.md#method-getcontentarguments "Defined by craft\gql\base\Arguments") | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/Transform.php#L24-L78)



#### Returns

[array](http://php.net/language.types.array) – $fields





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






