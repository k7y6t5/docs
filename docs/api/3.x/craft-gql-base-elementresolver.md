---
title: craft\gql\base\ElementResolver
code:
  - php
  - twig
---

# ElementResolver

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\ElementResolver](craft-gql-base-elementresolver.md) &raquo;
[craft\gql\base\Resolver](craft-gql-base-resolver.md)

Extended by

:   [craft\gql\resolvers\elements\Asset](craft-gql-resolvers-elements-asset.md), [craft\gql\resolvers\elements\Category](craft-gql-resolvers-elements-category.md), [craft\gql\resolvers\elements\Entry](craft-gql-resolvers-elements-entry.md), [craft\gql\resolvers\elements\GlobalSet](craft-gql-resolvers-elements-globalset.md), [craft\gql\resolvers\elements\MatrixBlock](craft-gql-resolvers-elements-matrixblock.md), [craft\gql\resolvers\elements\Tag](craft-gql-resolvers-elements-tag.md), [craft\gql\resolvers\elements\User](craft-gql-resolvers-elements-user.md)

Since

:   3.3.0



Class ElementResolver





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php)




## Protected Properties

| Property                                                                                                                     | Description
| ---------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [eagerLoadableFieldsByContext](craft-gql-base-resolver.md#eagerloadablefieldsbycontext "Defined by craft\gql\base\Resolver") | [array](http://php.net/language.types.array) – Cache fields by context.



## Public Methods

| Method                                                                                    | Description
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------
| [getArrayableArguments()](craft-gql-base-elementresolver.md#method-getarrayablearguments) | Returns a list of all the arguments that can be accepted as arrays.
| [prepareArguments()](craft-gql-base-elementresolver.md#method-preparearguments)           | Prepare arguments for use, converting to array where applicable.
| [resolve()](craft-gql-base-elementresolver.md#method-resolve)                             | Resolve a field to its value.
| [resolveOne()](craft-gql-base-elementresolver.md#method-resolveone)                       | Resolve an element query to a single result.

### `getArrayableArguments()`





Returns a list of all the arguments that can be accepted as arrays.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L28-L33)



#### Returns

[array](http://php.net/language.types.array)



### `prepareArguments()`





Prepare arguments for use, converting to array where applicable.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L125-L139)


#### Arguments

- `$arguments` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `resolve()`





Resolve a field to its value.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L54-L59)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information




### `resolveOne()`





Resolve an element query to a single result.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L44-L49)


#### Arguments

- `$source`
- `$arguments` ([array](http://php.net/language.types.array))
- `$context`
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`)

#### Returns

[craft\base\Element](craft-base-element.md), [null](http://php.net/language.types.null), `mixed`





## Protected Methods

| Method                                                                                                                          | Description
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------
| [extractEagerLoadCondition()](craft-gql-base-resolver.md#method-extracteagerloadcondition "Defined by craft\gql\base\Resolver") | Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.
| [prepareElementQuery()](craft-gql-base-elementresolver.md#method-prepareelementquery)                                           | Prepare an element query for given resolution argument set.
| [prepareQuery()](craft-gql-base-elementresolver.md#method-preparequery)                                                         | Prepare an element Query based on the source, arguments and the field name on the source.

### `prepareElementQuery()`





Prepare an element query for given resolution argument set.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L70-L120)


#### Arguments

- `$source`
- `$arguments` ([array](http://php.net/language.types.array))
- `$context`
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`)

#### Returns

[craft\elements\db\ElementQuery](craft-elements-db-elementquery.md), [array](http://php.net/language.types.array)



### `prepareQuery()`





Prepare an element Query based on the source, arguments and the field name on the source.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/ElementResolver.php#L150)


#### Arguments

- `$source` (`mixed`) – The source. Null if top-level field being resolved.
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments to apply to the query.
- `$fieldName` ([null](http://php.net/language.types.null)) – Field name to resolve on the source, if not a top-level resolution.

#### Returns

`mixed`








