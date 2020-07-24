---
title: craft\gql\types\elements\User
code:
  - php
  - twig
---

# User

Type

:   Class

Namespace

:   craft\gql\types\elements

Inherits

:   [craft\gql\types\elements\User](craft-gql-types-elements-user.md) &raquo;
[craft\gql\types\elements\Element](craft-gql-types-elements-element.md) &raquo;
[craft\gql\base\ObjectType](craft-gql-base-objecttype.md) &raquo;
`GraphQL\Type\Definition\ObjectType`

Since

:   3.3.0



Class User





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/User.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [__construct()](craft-gql-types-elements-user.md#method-construct)                                                          |
| [resolveWithDirectives()](craft-gql-base-objecttype.md#method-resolvewithdirectives "Defined by craft\gql\base\ObjectType") | Resolve a value with the directives that apply to it.

### `__construct()`














[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/User.php#L28-L35)


#### Arguments

- `$config`






## Protected Methods

| Method                                                       | Description
| ------------------------------------------------------------ | ----------------------------------------------------------------------
| [resolve()](craft-gql-types-elements-user.md#method-resolve) | Resolve a field value with arguments, context and resolve information.

### `resolve()`





Resolve a field value with arguments, context and resolve information.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/elements/User.php#L40-L50)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information

#### Returns

`mixed` – $result








