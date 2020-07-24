---
title: craft\gql\queries\Tag
code:
  - php
  - twig
---

# Tag

Type

:   Class

Namespace

:   craft\gql\queries

Inherits

:   [craft\gql\queries\Tag](craft-gql-queries-tag.md) &raquo;
[craft\gql\base\Query](craft-gql-base-query.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Since

:   3.3.0



Class Tag





[View source](https://github.com/craftcms/cms/blob/master/src/gql/queries/Tag.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-base-gqltypetrait.md#method-getfielddefinitions "Defined by craft\gql\base\GqlTypeTrait") | List of fields for this type.
| [getQueries()](craft-gql-queries-tag.md#method-getqueries)                                                                  | Returns the queries defined by the class as an array.
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype "Defined by craft\gql\base\GqlTypeTrait")                         | Returns an instance of this schema object's type as provided by entity registry

### `getQueries()`





Returns the queries defined by the class as an array.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/queries/Tag.php#L28-L48)


#### Arguments

- `$checkToken` ([boolean](http://php.net/language.types.boolean)) – Whether the token should be checked for allowed queries.
Note that passing a parameter to this method is now deprecated. Use [craft\helpers\Gql::createFullAccessSchema()](craft-helpers-gql.md#method-createfullaccessschema) instead.

#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






