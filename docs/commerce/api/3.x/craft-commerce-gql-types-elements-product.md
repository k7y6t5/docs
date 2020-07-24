---
title: craft\commerce\gql\types\elements\Product
code:
  - php
  - twig
---

# Product

Type

:   Class

Namespace

:   craft\commerce\gql\types\elements

Inherits

:   [craft\commerce\gql\types\elements\Product](craft-commerce-gql-types-elements-product.md) &raquo;
[craft\gql\types\elements\Element](https://docs.craftcms.com/api/v3/craft-gql-types-elements-element.html) &raquo;
[craft\gql\base\ObjectType](https://docs.craftcms.com/api/v3/craft-gql-base-objecttype.html) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.0



Class Product





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Product.php)






## Public Methods

| Method                                                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-commerce-gql-types-elements-product.md#method-construct)                                                                                 |
| [resolveWithDirectives()](https://docs.craftcms.com/api/v3/craft-gql-base-objecttype.html#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.

### `__construct()`














[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Product.php#L26-L33)


#### Arguments

- `$config`






## Protected Methods

| Method                                                                   | Description
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------
| [resolve()](craft-commerce-gql-types-elements-product.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/types/elements/Product.php#L38-L49)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








