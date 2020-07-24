---
title: craft\gql\types\Query
code:
  - php
  - twig
---

# Query

Type

:   Class

Namespace

:   craft\gql\types

Inherits

:   [craft\gql\types\Query](craft-gql-types-query.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Since

:   3.3.0



Class Query





[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Query.php)






## Public Methods

| Method                                                                                              | Description
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-types-query.md#method-getfielddefinitions)                        |
| [getName()](craft-gql-types-query.md#method-getname)                                                |
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype "Defined by craft\gql\base\GqlTypeTrait") | Returns an instance of this schema object's type as provided by entity registry

### `getFieldDefinitions()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Query.php#L25-L28)




#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)\
  if class called incorrectly.


### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/types/Query.php#L33-L36)








## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






