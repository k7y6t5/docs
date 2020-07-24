---
title: craft\gql\types\elements\Entry
code:
  - php
  - twig
---

# Entry

Type

:   Class

Namespace

:   craft\gql\types\elements

Inherits

:   [craft\gql\types\elements\Entry](craft-gql-types-elements-entry.md) &raquo;
[craft\gql\types\elements\Element](craft-gql-types-elements-element.md) &raquo;
[craft\gql\base\ObjectType](craft-gql-base-objecttype.md) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.3.0



Class Entry





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Entry.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-gql-types-elements-entry.md#method-construct)                                                         |
| [resolveWithDirectives()](craft-gql-base-objecttype.md#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.

### `__construct()`














[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Entry.php#L27-L34)


#### Arguments

- `$config`






## Protected Methods

| Method                                                        | Description
| ------------------------------------------------------------- | ----------------------------------------------------------------------
| [resolve()](craft-gql-types-elements-entry.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Entry.php#L39-L56)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








