---
title: craft\gql\types\QueryArgument
code:
  - php
  - twig
---

# QueryArgument

Type

:   Class

Namespace

:   craft\gql\types

Inherits

:   [craft\gql\types\QueryArgument](craft-gql-types-queryargument.md) &raquo;
`GraphQL\Type\Definition\ScalarType`

Since

:   3.3.14



Class QueryArgument





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php)


## Public Properties

| Property                                                    | Description
| ----------------------------------------------------------- | ----------------------------------------------
| [description](craft-gql-types-queryargument.md#description) | [string](http://php.net/language.types.string)
| [name](craft-gql-types-queryargument.md#name)               | [string](http://php.net/language.types.string)

### `description`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L32)



### `name`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L27)







## Public Methods

| Method                                                                 | Description
| ---------------------------------------------------------------------- | -----------------------------------------------------------
| [__construct()](craft-gql-types-queryargument.md#method-construct)     |
| [getName()](craft-gql-types-queryargument.md#method-getname)           |
| [getType()](craft-gql-types-queryargument.md#method-gettype)           | Returns a singleton instance to ensure one type per schema.
| [parseLiteral()](craft-gql-types-queryargument.md#method-parseliteral) |
| [parseValue()](craft-gql-types-queryargument.md#method-parsevalue)     |
| [serialize()](craft-gql-types-queryargument.md#method-serialize)       |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L34-L37)


#### Arguments

- `$config`




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L53-L56)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns a singleton instance to ensure one type per schema.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L44-L47)



#### Returns

[craft\gql\types\QueryArgument](craft-gql-types-queryargument.md)



### `parseLiteral()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L86-L98)


#### Arguments

- `$valueNode`
- `$variables`




### `parseValue()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L74-L81)


#### Arguments

- `$value`




### `serialize()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/QueryArgument.php#L61-L69)


#### Arguments

- `$value`











