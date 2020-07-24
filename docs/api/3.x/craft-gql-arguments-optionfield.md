---
title: craft\gql\arguments\OptionField
code:
  - php
  - twig
---

# OptionField

Type

:   Class

Namespace

:   craft\gql\arguments

Inherits

:   [craft\gql\arguments\OptionField](craft-gql-arguments-optionfield.md) &raquo;
[craft\gql\base\Arguments](craft-gql-base-arguments.md)

Since

:   3.4.6



Class OptionField





[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/OptionField.php)






## Public Methods

| Method                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------
| [getArguments()](craft-gql-arguments-optionfield.md#method-getarguments)                                              | Returns the argument fields to use in GraphQL type definitions.
| [getContentArguments()](craft-gql-base-arguments.md#method-getcontentarguments "Defined by craft\gql\base\Arguments") | Returns arguments defined by the content fields.

### `getArguments()`





Returns the argument fields to use in GraphQL type definitions.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/arguments/OptionField.php#L24-L33)



#### Returns

[array](http://php.net/language.types.array) – $fields





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [buildContentArguments()](craft-gql-base-arguments.md#method-buildcontentarguments "Defined by craft\gql\base\Arguments") | Return the content arguments based on a list of contexts and an element class.






