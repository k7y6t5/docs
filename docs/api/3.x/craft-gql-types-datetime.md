---
title: craft\gql\types\DateTime
code:
  - php
  - twig
---

# DateTime

Type

:   Class

Namespace

:   craft\gql\types

Inherits

:   [craft\gql\types\DateTime](craft-gql-types-datetime.md) &raquo;
`GraphQL\Type\Definition\ScalarType`

Since

:   3.3.0



Class DateTime





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php)


## Public Properties

| Property                                               | Description
| ------------------------------------------------------ | ----------------------------------------------
| [description](craft-gql-types-datetime.md#description) | [string](http://php.net/language.types.string)
| [name](craft-gql-types-datetime.md#name)               | [string](http://php.net/language.types.string)

### `description`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L31)



### `name`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L26)







## Public Methods

| Method                                                            | Description
| ----------------------------------------------------------------- | -----------------------------------------------------------
| [__construct()](craft-gql-types-datetime.md#method-construct)     |
| [getName()](craft-gql-types-datetime.md#method-getname)           |
| [getType()](craft-gql-types-datetime.md#method-gettype)           | Returns a singleton instance to ensure one type per schema.
| [parseLiteral()](craft-gql-types-datetime.md#method-parseliteral) |
| [parseValue()](craft-gql-types-datetime.md#method-parsevalue)     |
| [serialize()](craft-gql-types-datetime.md#method-serialize)       |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L33-L36)


#### Arguments

- `$config`




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L52-L55)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns a singleton instance to ensure one type per schema.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L43-L46)



#### Returns

[craft\gql\types\DateTime](craft-gql-types-datetime.md)



### `parseLiteral()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L82-L90)


#### Arguments

- `$valueNode`
- `$variables`




### `parseValue()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L74-L77)


#### Arguments

- `$value`




### `serialize()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/DateTime.php#L60-L69)


#### Arguments

- `$value`











