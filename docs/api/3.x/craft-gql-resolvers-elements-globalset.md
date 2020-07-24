---
title: craft\gql\resolvers\elements\GlobalSet
code:
  - php
  - twig
---

# GlobalSet

Type

:   Class

Namespace

:   craft\gql\resolvers\elements

Inherits

:   [craft\gql\resolvers\elements\GlobalSet](craft-gql-resolvers-elements-globalset.md) &raquo;
[craft\gql\base\ElementResolver](craft-gql-base-elementresolver.md) &raquo;
[craft\gql\base\Resolver](craft-gql-base-resolver.md)

Since

:   3.3.0



Class GlobalSet





[View source](https://github.com/craftcms/cms/blob/master/src/gql/resolvers/elements/GlobalSet.php)




## Protected Properties

| Property                                                                                                                     | Description
| ---------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [eagerLoadableFieldsByContext](craft-gql-base-resolver.md#eagerloadablefieldsbycontext "Defined by craft\gql\base\Resolver") | [array](http://php.net/language.types.array) – Cache fields by context.



## Public Methods

| Method                                                                                                                  | Description
| ----------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------
| [getArrayableArguments()](craft-gql-base-resolver.md#method-getarrayablearguments "Defined by craft\gql\base\Resolver") | Returns a list of all the arguments that can be accepted as arrays.
| [prepareArguments()](craft-gql-base-resolver.md#method-preparearguments "Defined by craft\gql\base\Resolver")           | Prepare arguments for use, converting to array where applicable.
| [prepareQuery()](craft-gql-resolvers-elements-globalset.md#method-preparequery)                                         | Prepare an element Query based on the source, arguments and the field name on the source.
| [resolve()](craft-gql-base-resolver.md#method-resolve "Defined by craft\gql\base\Resolver")                             | Resolve a field to its value.
| [resolveOne()](craft-gql-base-elementresolver.md#method-resolveone "Defined by craft\gql\base\ElementResolver")         | Resolve an element query to a single result.

### `prepareQuery()`





Prepare an element Query based on the source, arguments and the field name on the source.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/resolvers/elements/GlobalSet.php#L25-L42)


#### Arguments

- `$source` (`mixed`) – The source. Null if top-level field being resolved.
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments to apply to the query.
- `$fieldName` ([null](http://php.net/language.types.null)) – Field name to resolve on the source, if not a top-level resolution.

#### Returns

`mixed`





## Protected Methods

| Method                                                                                                                            | Description
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------
| [extractEagerLoadCondition()](craft-gql-base-resolver.md#method-extracteagerloadcondition "Defined by craft\gql\base\Resolver")   | Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.
| [prepareElementQuery()](craft-gql-base-elementresolver.md#method-prepareelementquery "Defined by craft\gql\base\ElementResolver") | Prepare an element query for given resolution argument set.






