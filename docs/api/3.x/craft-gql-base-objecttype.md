---
title: craft\gql\base\ObjectType
code:
  - php
  - twig
---

# ObjectType

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\ObjectType](craft-gql-base-objecttype.md) &raquo;
`GraphQL\Type\Definition\ObjectType`

Extended by

:   [craft\gql\types\TableRow](craft-gql-types-tablerow.md), [craft\gql\types\elements\Asset](craft-gql-types-elements-asset.md), [craft\gql\types\elements\Category](craft-gql-types-elements-category.md), [craft\gql\types\elements\Element](craft-gql-types-elements-element.md), [craft\gql\types\elements\Entry](craft-gql-types-elements-entry.md), [craft\gql\types\elements\GlobalSet](craft-gql-types-elements-globalset.md), [craft\gql\types\elements\MatrixBlock](craft-gql-types-elements-matrixblock.md), [craft\gql\types\elements\Tag](craft-gql-types-elements-tag.md), [craft\gql\types\elements\User](craft-gql-types-elements-user.md)

Since

:   3.3.0



Class ObjectType





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ObjectType.php)






## Public Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | -----------------------------------------------------
| [__construct()](craft-gql-base-objecttype.md#method-construct)                       |
| [resolveWithDirectives()](craft-gql-base-objecttype.md#method-resolvewithdirectives) | Resolve a value with the directives that apply to it.

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ObjectType.php#L28-L32)


#### Arguments

- `$config`




### `resolveWithDirectives()`





Resolve a value with the directives that apply to it.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ObjectType.php#L45-L55)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result

#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)\
  if an error occurs




## Protected Methods

| Method                                                   | Description
| -------------------------------------------------------- | ----------------------------------------------------------------------
| [resolve()](craft-gql-base-objecttype.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ObjectType.php#L67-L76)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








