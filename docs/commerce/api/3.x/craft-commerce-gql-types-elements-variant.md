---
title: craft\commerce\gql\types\elements\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\gql\types\elements

Inherits

:   [craft\commerce\gql\types\elements\Variant](craft-commerce-gql-types-elements-variant.md) &raquo;
[craft\gql\types\elements\Element](https://docs.craftcms.com/api/v3/craft-gql-types-elements-element.html) &raquo;
[craft\gql\base\ObjectType](https://docs.craftcms.com/api/v3/craft-gql-base-objecttype.html) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.1



Class Variant





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Variant.php)






## Public Methods

| Method                                                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-commerce-gql-types-elements-variant.md#method-construct)                                                                                 |
| [resolveWithDirectives()](https://docs.craftcms.com/api/v3/craft-gql-base-objecttype.html#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.

### `__construct()`














[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Variant.php#L26-L33)


#### Arguments

- `$config`






## Protected Methods

| Method                                                                   | Description
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------
| [resolve()](craft-commerce-gql-types-elements-variant.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Variant.php#L38-L52)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








