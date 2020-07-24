---
title: craft\gql\arguments\elements\User
code:
  - php
  - twig
---

# User

Type

:   Class

Namespace

:   craft\gql\arguments\elements

Inherits

:   [craft\gql\arguments\elements\User](craft-gql-arguments-elements-user.md) &raquo;
[craft\gql\base\ElementArguments](craft-gql-base-elementarguments.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Since

:   3.3.0



Class User





[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/User.php)






## Public Methods

| Method                                                                                   | Description
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-arguments-elements-user.md#method-getarguments)               | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-arguments-elements-user.md#method-getcontentarguments) | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/User.php#L28-L62)



#### Returns

[array](http://php.net/language.types.array) – $fields



### `getContentArguments()`





Returns arguments defined by the content fields.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/elements/User.php#L67-L82)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






