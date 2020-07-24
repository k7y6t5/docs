---
title: craft\gql\types\elements\Asset
code:
  - php
  - twig
---

# Asset

Type

:   Class

Namespace

:   craft\gql\types\elements

Inherits

:   [craft\gql\types\elements\Asset](craft-gql-types-elements-asset.md) &raquo;
[craft\gql\types\elements\Element](craft-gql-types-elements-element.md) &raquo;
[craft\gql\base\ObjectType](craft-gql-base-objecttype.md) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.3.0



Class Asset





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Asset.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-gql-types-elements-asset.md#method-construct)                                                         |
| [resolveWithDirectives()](craft-gql-base-objecttype.md#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.

### `__construct()`














[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Asset.php#L28-L35)


#### Arguments

- `$config`






## Protected Methods

| Method                                                        | Description
| ------------------------------------------------------------- | ----------------------------------------------------------------------
| [resolve()](craft-gql-types-elements-asset.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/Asset.php#L40-L61)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








