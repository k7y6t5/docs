---
title: craft\gql\TypeLoader
code:
  - php
  - twig
---

# TypeLoader

Type

:   Class

Namespace

:   craft\gql

Inherits

:   [craft\gql\TypeLoader](craft-gql-typeloader.md)

Since

:   3.3.0



Class TypeLoader





[View source](https://github.com/craftcms/cms/blob/master/src/gql/TypeLoader.php)






## Public Methods

| Method                                                        | Description
| ------------------------------------------------------------- | ------------------------------------------------
| [flush()](craft-gql-typeloader.md#method-flush)               | Flush all registered type loaders.
| [loadType()](craft-gql-typeloader.md#method-loadtype)         |
| [registerType()](craft-gql-typeloader.md#method-registertype) | Register a type with a callable loader function.

### `flush()`





Flush all registered type loaders.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/TypeLoader.php#L56-L59)






### `loadType()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/TypeLoader.php#L31-L40)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))

#### Returns

`\GraphQL\Type\Definition\Type`

#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)


### `registerType()`





Register a type with a callable loader function.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/TypeLoader.php#L48-L51)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))
- `$loader` ([callable](http://php.net/language.types.callable))











