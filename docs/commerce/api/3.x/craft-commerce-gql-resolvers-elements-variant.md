---
title: craft\commerce\gql\resolvers\elements\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\gql\resolvers\elements

Inherits

:   [craft\commerce\gql\resolvers\elements\Variant](craft-commerce-gql-resolvers-elements-variant.md) &raquo;
[craft\gql\base\ElementResolver](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html) &raquo;
[craft\gql\base\Resolver](https://docs.craftcms.com/api/v3/craft-gql-base-resolver.html)

Since

:   3.1



Class Variant





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/resolvers/elements/Variant.php)




## Protected Properties

| Property                                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [eagerLoadableFieldsByContext](https://docs.craftcms.com/api/v3/craft-gql-base-resolver.html#eagerloadablefieldsbycontext "Defined by craft\gql\base\Resolver") | [array](http://php.net/language.types.array) – Cache fields by context.



## Public Methods

| Method                                                                                                                                                                   | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------
| [getArrayableArguments()](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html#method-getarrayablearguments "Defined by craft\gql\base\ElementResolver") | Returns a list of all the arguments that can be accepted as arrays.
| [prepareArguments()](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html#method-preparearguments "Defined by craft\gql\base\ElementResolver")           | Prepare arguments for use, converting to array where applicable.
| [prepareQuery()](craft-commerce-gql-resolvers-elements-variant.md#method-preparequery)                                                                                   | Prepare an element Query based on the source, arguments and the field name on the source.
| [resolve()](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html#method-resolve "Defined by craft\gql\base\ElementResolver")                             | Resolve a field to its value.
| [resolveOne()](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html#method-resolveone "Defined by craft\gql\base\ElementResolver")                       | Resolve an element query to a single result.

### `prepareQuery()`





Prepare an element Query based on the source, arguments and the field name on the source.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/resolvers/elements/Variant.php#L27-L63)


#### Arguments

- `$source` (`mixed`) – The source. Null if top-level field being resolved.
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments to apply to the query.
- `$fieldName` ([null](http://php.net/language.types.null)) – Field name to resolve on the source, if not a top-level resolution.

#### Returns

`mixed`





## Protected Methods

| Method                                                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------
| [extractEagerLoadCondition()](https://docs.craftcms.com/api/v3/craft-gql-base-resolver.html#method-extracteagerloadcondition "Defined by craft\gql\base\Resolver")   | Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.
| [prepareElementQuery()](https://docs.craftcms.com/api/v3/craft-gql-base-elementresolver.html#method-prepareelementquery "Defined by craft\gql\base\ElementResolver") | Prepare an element query for given resolution argument set.






