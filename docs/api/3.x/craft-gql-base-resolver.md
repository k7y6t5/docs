---
title: craft\gql\base\Resolver
code:
  - php
  - twig
---

# Resolver

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\Resolver](craft-gql-base-resolver.md)

Extended by

:   [craft\gql\base\ElementResolver](craft-gql-base-elementresolver.md), [craft\gql\resolvers\OptionField](craft-gql-resolvers-optionfield.md), [craft\gql\resolvers\elements\Asset](craft-gql-resolvers-elements-asset.md), [craft\gql\resolvers\elements\Category](craft-gql-resolvers-elements-category.md), [craft\gql\resolvers\elements\Entry](craft-gql-resolvers-elements-entry.md), [craft\gql\resolvers\elements\GlobalSet](craft-gql-resolvers-elements-globalset.md), [craft\gql\resolvers\elements\MatrixBlock](craft-gql-resolvers-elements-matrixblock.md), [craft\gql\resolvers\elements\Tag](craft-gql-resolvers-elements-tag.md), [craft\gql\resolvers\elements\User](craft-gql-resolvers-elements-user.md)

Since

:   3.3.0



Class Resolver





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php)




## Protected Properties

| Property                                                                                | Description
| --------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [eagerLoadableFieldsByContext](craft-gql-base-resolver.md#eagerloadablefieldsbycontext) | [array](http://php.net/language.types.array) – Cache fields by context.

### `eagerLoadableFieldsByContext`



Type

:   [array](http://php.net/language.types.array)



Cache fields by context.



[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php#L35)





## Public Methods

| Method                                                                             | Description
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------
| [getArrayableArguments()](craft-gql-base-resolver.md#method-getarrayablearguments) | Returns a list of all the arguments that can be accepted as arrays.
| [prepareArguments()](craft-gql-base-resolver.md#method-preparearguments)           | Prepare arguments for use, converting to array where applicable.
| [resolve()](craft-gql-base-resolver.md#method-resolve)                             | Resolve a field to its value.

### `getArrayableArguments()`





Returns a list of all the arguments that can be accepted as arrays.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php#L52-L55)



#### Returns

[array](http://php.net/language.types.array)



### `prepareArguments()`





Prepare arguments for use, converting to array where applicable.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php#L63-L81)


#### Arguments

- `$arguments` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `resolve()`





Resolve a field to its value.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php#L45)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information






## Protected Methods

| Method                                                                                     | Description
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------
| [extractEagerLoadCondition()](craft-gql-base-resolver.md#method-extracteagerloadcondition) | Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.

### `extractEagerLoadCondition()`





Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Resolver.php#L89-L259)


#### Arguments

- `$resolveInfo`

#### Returns

[array](http://php.net/language.types.array)








