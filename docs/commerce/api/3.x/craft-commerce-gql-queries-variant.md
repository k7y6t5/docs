---
title: craft\commerce\gql\queries\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\gql\queries

Inherits

:   [craft\commerce\gql\queries\Variant](craft-commerce-gql-queries-variant.md) &raquo;
[craft\gql\base\Query](https://docs.craftcms.com/api/v3/craft-gql-base-query.html)

Uses traits

:   [craft\gql\base\GqlTypeTrait](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html)

Since

:   3.1



Class Variant





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/queries/Variant.php)






## Public Methods

| Method                                                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html#method-getfielddefinitions "Defined by craft\gql\base\GqlTypeTrait") | List of fields for this type.
| [getQueries()](craft-commerce-gql-queries-variant.md#method-getqueries)                                                                                        | Returns the queries defined by the class as an array.
| [getType()](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html#method-gettype "Defined by craft\gql\base\GqlTypeTrait")                         | Returns an instance of this schema object's type as provided by entity registry

### `getQueries()`





Returns the queries defined by the class as an array.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/queries/Variant.php#L28-L48)


#### Arguments

- `$checkToken` ([boolean](http://php.net/language.types.boolean)) – Whether the token should be checked for allowed queries.
Note that passing a parameter to this method is now deprecated. Use [craft\helpers\Gql::createFullAccessSchema()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-createfullaccessschema) instead.

#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






