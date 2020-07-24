---
title: craft\gql\resolvers\OptionField
code:
  - php
  - twig
---

# OptionField

Type

:   Class

Namespace

:   craft\gql\resolvers

Inherits

:   [craft\gql\resolvers\OptionField](craft-gql-resolvers-optionfield.md) &raquo;
[craft\gql\base\Resolver](craft-gql-base-resolver.md)

Since

:   3.4.6



Class OptionField





[View source](https://github.com/craftcms/cms/blob/master/src/gql/resolvers/OptionField.php)




## Protected Properties

| Property                                                                                                                     | Description
| ---------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [eagerLoadableFieldsByContext](craft-gql-base-resolver.md#eagerloadablefieldsbycontext "Defined by craft\gql\base\Resolver") | [array](http://php.net/language.types.array) – Cache fields by context.



## Public Methods

| Method                                                                                                                  | Description
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------
| [getArrayableArguments()](craft-gql-base-resolver.md#method-getarrayablearguments "Defined by craft\gql\base\Resolver") | Returns a list of all the arguments that can be accepted as arrays.
| [prepareArguments()](craft-gql-base-resolver.md#method-preparearguments "Defined by craft\gql\base\Resolver")           | Prepare arguments for use, converting to array where applicable.
| [resolve()](craft-gql-resolvers-optionfield.md#method-resolve)                                                          | Resolve a field to its value.

### `resolve()`





Resolve a field to its value.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/resolvers/OptionField.php#L28-L47)


#### Arguments

- `$source` (`mixed`) – The parent data source to use for resolving this field
- `$arguments` ([array](http://php.net/language.types.array)) – Arguments for resolving this field.
- `$context` (`mixed`) – The context shared between all resolvers
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – The resolve information






## Protected Methods

| Method                                                                                                                          | Description
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------
| [extractEagerLoadCondition()](craft-gql-base-resolver.md#method-extracteagerloadcondition "Defined by craft\gql\base\Resolver") | Extract eager load conditions for a given resolve information. Preferrably at the very top of the query.






