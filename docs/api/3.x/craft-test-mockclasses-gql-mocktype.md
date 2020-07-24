---
title: craft\test\mockclasses\gql\MockType
code:
  - php
  - twig
---

# MockType

Type

:   Class

Namespace

:   craft\test\mockclasses\gql

Inherits

:   [craft\test\mockclasses\gql\MockType](craft-test-mockclasses-gql-mocktype.md) &raquo;
`GraphQL\Type\Definition\ScalarType`



Class MockType





[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php)


## Public Properties

| Property                                            | Description
| --------------------------------------------------- | ----------------------------------------------
| [name](craft-test-mockclasses-gql-mocktype.md#name) | [string](http://php.net/language.types.string)

### `name`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L16)







## Public Methods

| Method                                                                       | Description
| ---------------------------------------------------------------------------- | -----------------------------------------------------------
| [getName()](craft-test-mockclasses-gql-mocktype.md#method-getname)           |
| [getType()](craft-test-mockclasses-gql-mocktype.md#method-gettype)           | Returns a singleton instance to ensure one type per schema.
| [parseLiteral()](craft-test-mockclasses-gql-mocktype.md#method-parseliteral) |
| [parseValue()](craft-test-mockclasses-gql-mocktype.md#method-parsevalue)     |
| [serialize()](craft-test-mockclasses-gql-mocktype.md#method-serialize)       |

### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L31-L34)






### `getType()`





Returns a singleton instance to ensure one type per schema.




[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L23-L26)



#### Returns

[craft\test\mockclasses\gql\MockType](craft-test-mockclasses-gql-mocktype.md)



### `parseLiteral()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L46-L49)


#### Arguments

- `$valueNode`
- `$variables`




### `parseValue()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L41-L44)


#### Arguments

- `$value`




### `serialize()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockType.php#L36-L39)


#### Arguments

- `$value`











