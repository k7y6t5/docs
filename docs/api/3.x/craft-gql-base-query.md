---
title: craft\gql\base\Query
code:
  - php
  - twig
---

# Query

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\Query](craft-gql-base-query.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Extended by

:   [craft\gql\queries\Asset](craft-gql-queries-asset.md), [craft\gql\queries\Category](craft-gql-queries-category.md), [craft\gql\queries\Entry](craft-gql-queries-entry.md), [craft\gql\queries\GlobalSet](craft-gql-queries-globalset.md), [craft\gql\queries\Ping](craft-gql-queries-ping.md), [craft\gql\queries\Tag](craft-gql-queries-tag.md), [craft\gql\queries\User](craft-gql-queries-user.md)

Since

:   3.3.0



Class Query





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Query.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-base-gqltypetrait.md#method-getfielddefinitions "Defined by craft\gql\base\GqlTypeTrait") | List of fields for this type.
| [getQueries()](craft-gql-base-query.md#method-getqueries)                                                                   | Returns the queries defined by the class as an array.
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype "Defined by craft\gql\base\GqlTypeTrait")                         | Returns an instance of this schema object's type as provided by entity registry

### `getQueries()`





Returns the queries defined by the class as an array.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Query.php#L27)


#### Arguments

- `$checkToken` ([boolean](http://php.net/language.types.boolean)) – Whether the token should be checked for allowed queries.
Note that passing a parameter to this method is now deprecated. Use [craft\helpers\Gql::createFullAccessSchema()](craft-helpers-gql.md#method-createfullaccessschema) instead.

#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






