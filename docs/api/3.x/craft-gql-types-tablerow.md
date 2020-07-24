---
title: craft\gql\types\TableRow
code:
  - php
  - twig
---

# TableRow

Type

:   Class

Namespace

:   craft\gql\types

Inherits

:   [craft\gql\types\TableRow](craft-gql-types-tablerow.md) &raquo;
[craft\gql\base\ObjectType](craft-gql-base-objecttype.md) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.3.0



Class TableRow





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/TableRow.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-gql-base-objecttype.md#method-construct "Defined by craft\gql\base\ObjectType")                       |
| [resolveWithDirectives()](craft-gql-base-objecttype.md#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.



## Protected Methods

| Method                                                  | Description
| ------------------------------------------------------- | ----------------------------------------------------------------------
| [resolve()](craft-gql-types-tablerow.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/TableRow.php#L24-L29)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








