---
title: craft\helpers\Gql
code:
  - php
  - twig
---

# Gql

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Gql](craft-helpers-gql.md)

Since

:   3.3.0



Class Gql





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php)






## Public Methods

| Method                                                                                             | Description
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------
| [applyDirectives()](craft-helpers-gql.md#method-applydirectives)                                   | Apply directives (if any) to a resolved value according to source and resolve info.
| [canQueryAssets()](craft-helpers-gql.md#method-canqueryassets)                                     | Return true if active schema can query assets.
| [canQueryCategories()](craft-helpers-gql.md#method-canquerycategories)                             | Return true if active schema can query categories.
| [canQueryEntries()](craft-helpers-gql.md#method-canqueryentries)                                   | Return true if active schema can query entries.
| [canQueryGlobalSets()](craft-helpers-gql.md#method-canqueryglobalsets)                             | Return true if active schema can query global sets.
| [canQueryTags()](craft-helpers-gql.md#method-canquerytags)                                         | Return true if active schema can query tags.
| [canQueryUsers()](craft-helpers-gql.md#method-canqueryusers)                                       | Return true if active schema can query users.
| [canSchema()](craft-helpers-gql.md#method-canschema)                                               | Returns true if the active schema can perform the action on the scope.
| [createFullAccessSchema()](craft-helpers-gql.md#method-createfullaccessschema)                     | Creates a temporary schema with full access to the GraphQL API.
| [extractAllowedEntitiesFromSchema()](craft-helpers-gql.md#method-extractallowedentitiesfromschema) | Extracts all the allowed entities from the active schema for the action.
| [getUnionType()](craft-helpers-gql.md#method-getuniontype)                                         | Get (and create if needed) a union type by name, included types and a resolver funcion.
| [isSchemaAwareOf()](craft-helpers-gql.md#method-isschemaawareof)                                   | Returns true if the active schema is aware of the provided scope(s).

### `applyDirectives()`





Apply directives (if any) to a resolved value according to source and resolve info.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L206-L230)


#### Arguments

- `$source`
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`)
- `$value`

#### Returns

`mixed`



### `canQueryAssets()`





Return true if active schema can query assets.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L105-L108)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canQueryCategories()`





Return true if active schema can query categories.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L115-L118)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canQueryEntries()`





Return true if active schema can query entries.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L94-L98)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canQueryGlobalSets()`





Return true if active schema can query global sets.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L135-L138)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canQueryTags()`





Return true if active schema can query tags.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L125-L128)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canQueryUsers()`





Return true if active schema can query users.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L145-L148)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canSchema()`





Returns true if the active schema can perform the action on the scope.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L78-L87)


#### Arguments

- `$scope` ([string](http://php.net/language.types.string)) – The scope to check.
- `$action` ([string](http://php.net/language.types.string)) – The action. Defaults to "read"

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)


### `createFullAccessSchema()`



Since

:   3.4.0



Creates a temporary schema with full access to the GraphQL API.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L175-L196)



#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md)



### `extractAllowedEntitiesFromSchema()`





Extracts all the allowed entities from the active schema for the action.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L60-L68)


#### Arguments

- `$action` ([string](http://php.net/language.types.string)) – The action for which the entities should be extracted. Defaults to "read"

#### Returns

[array](http://php.net/language.types.array)



### `getUnionType()`





Get (and create if needed) a union type by name, included types and a resolver funcion.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L158-L167)


#### Arguments

- `$typeName` ([string](http://php.net/language.types.string)) – The union type name.
- `$includedTypes` ([array](http://php.net/language.types.array)) – The type the union should include
- `$resolveFunction` ([callable](http://php.net/language.types.callable)) – The resolver function to use to resolve a specific type.

#### Returns

`mixed`



### `isSchemaAwareOf()`





Returns true if the active schema is aware of the provided scope(s).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Gql.php#L32-L52)


#### Arguments

- `$scopes` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[]) – The scope(s) to check.

#### Returns

[boolean](http://php.net/language.types.boolean)










