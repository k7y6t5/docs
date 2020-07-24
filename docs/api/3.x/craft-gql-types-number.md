---
title: craft\gql\types\Number
code:
  - php
  - twig
---

# Number

Type

:   Class

Namespace

:   craft\gql\types

Inherits

:   [craft\gql\types\Number](craft-gql-types-number.md) &raquo;
`GraphQL\Type\Definition\ScalarType`

Since

:   3.4.0



Class Number





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php)


## Public Properties

| Property                                             | Description
| ---------------------------------------------------- | ----------------------------------------------
| [description](craft-gql-types-number.md#description) | [string](http://php.net/language.types.string)
| [name](craft-gql-types-number.md#name)               | [string](http://php.net/language.types.string)

### `description`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L34)



### `name`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L29)







## Public Methods

| Method                                                          | Description
| --------------------------------------------------------------- | -----------------------------------------------------------
| [__construct()](craft-gql-types-number.md#method-construct)     |
| [getName()](craft-gql-types-number.md#method-getname)           |
| [getType()](craft-gql-types-number.md#method-gettype)           | Returns a singleton instance to ensure one type per schema.
| [parseLiteral()](craft-gql-types-number.md#method-parseliteral) |
| [parseValue()](craft-gql-types-number.md#method-parsevalue)     |
| [serialize()](craft-gql-types-number.md#method-serialize)       |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L36-L39)


#### Arguments

- `$config`




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L55-L58)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns a singleton instance to ensure one type per schema.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L46-L49)



#### Returns

[craft\gql\types\Number](craft-gql-types-number.md)



### `parseLiteral()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L96-L113)


#### Arguments

- `$valueNode`
- `$variables`




### `parseValue()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L84-L91)


#### Arguments

- `$value`




### `serialize()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Number.php#L63-L79)


#### Arguments

- `$value`











