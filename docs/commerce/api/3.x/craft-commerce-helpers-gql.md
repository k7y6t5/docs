---
title: craft\commerce\helpers\Gql
code:
  - php
  - twig
---

# Gql

Type

:   Class

Namespace

:   craft\commerce\helpers

Inherits

:   [craft\commerce\helpers\Gql](craft-commerce-helpers-gql.md) &raquo;
[craft\helpers\Gql](https://docs.craftcms.com/api/v3/craft-helpers-gql.html)

Since

:   3.0



Class Commerce Gql





[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Gql.php)






## Public Methods

| Method                                                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------
| [applyDirectives()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-applydirectives "Defined by craft\helpers\Gql")                                   | Apply directives (if any) to a resolved value according to source and resolve info.
| [canQueryAssets()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canqueryassets "Defined by craft\helpers\Gql")                                     | Return true if active schema can query assets.
| [canQueryCategories()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canquerycategories "Defined by craft\helpers\Gql")                             | Return true if active schema can query categories.
| [canQueryEntries()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canqueryentries "Defined by craft\helpers\Gql")                                   | Return true if active schema can query entries.
| [canQueryGlobalSets()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canqueryglobalsets "Defined by craft\helpers\Gql")                             | Return true if active schema can query global sets.
| [canQueryProducts()](craft-commerce-helpers-gql.md#method-canqueryproducts)                                                                                          | Return true if active schema can query products.
| [canQueryTags()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canquerytags "Defined by craft\helpers\Gql")                                         | Return true if active schema can query tags.
| [canQueryUsers()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canqueryusers "Defined by craft\helpers\Gql")                                       | Return true if active schema can query users.
| [canSchema()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-canschema "Defined by craft\helpers\Gql")                                               | Returns true if the active schema can perform the action on the scope.
| [createFullAccessSchema()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-createfullaccessschema "Defined by craft\helpers\Gql")                     | Creates a temporary schema with full access to the GraphQL API.
| [extractAllowedEntitiesFromSchema()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-extractallowedentitiesfromschema "Defined by craft\helpers\Gql") | Extracts all the allowed entities from the active schema for the action.
| [getUnionType()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-getuniontype "Defined by craft\helpers\Gql")                                         | Get (and create if needed) a union type by name, included types and a resolver funcion.
| [isSchemaAwareOf()](https://docs.craftcms.com/api/v3/craft-helpers-gql.html#method-isschemaawareof "Defined by craft\helpers\Gql")                                   | Returns true if the active schema is aware of the provided scope(s).

### `canQueryProducts()`





Return true if active schema can query products.




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Gql.php#L25-L29)



#### Returns

[boolean](http://php.net/language.types.boolean)










