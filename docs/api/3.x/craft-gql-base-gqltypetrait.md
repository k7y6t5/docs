---
title: craft\gql\base\GqlTypeTrait
code:
  - php
  - twig
---

# GqlTypeTrait

Type

:   Trait

Namespace

:   craft\gql\base

Implemented by

:   [craft\gql\base\InterfaceType](craft-gql-base-interfacetype.md), [craft\gql\base\Query](craft-gql-base-query.md), [craft\gql\interfaces\Element](craft-gql-interfaces-element.md), [craft\gql\interfaces\Structure](craft-gql-interfaces-structure.md), [craft\gql\interfaces\elements\Asset](craft-gql-interfaces-elements-asset.md), [craft\gql\interfaces\elements\Category](craft-gql-interfaces-elements-category.md), [craft\gql\interfaces\elements\Entry](craft-gql-interfaces-elements-entry.md), [craft\gql\interfaces\elements\GlobalSet](craft-gql-interfaces-elements-globalset.md), [craft\gql\interfaces\elements\MatrixBlock](craft-gql-interfaces-elements-matrixblock.md), [craft\gql\interfaces\elements\Tag](craft-gql-interfaces-elements-tag.md), [craft\gql\interfaces\elements\User](craft-gql-interfaces-elements-user.md), [craft\gql\queries\Asset](craft-gql-queries-asset.md), [craft\gql\queries\Category](craft-gql-queries-category.md), [craft\gql\queries\Entry](craft-gql-queries-entry.md), [craft\gql\queries\GlobalSet](craft-gql-queries-globalset.md), [craft\gql\queries\Ping](craft-gql-queries-ping.md), [craft\gql\queries\Tag](craft-gql-queries-tag.md), [craft\gql\queries\User](craft-gql-queries-user.md), [craft\gql\types\Query](craft-gql-types-query.md)

Since

:   3.3.0



Trait GqlTypeTrait





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GqlTypeTrait.php)






## Public Methods

| Method                                                                             | Description
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-base-gqltypetrait.md#method-getfielddefinitions) | List of fields for this type.
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype)                         | Returns an instance of this schema object's type as provided by entity registry

### `getFieldDefinitions()`





List of fields for this type.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GqlTypeTrait.php#L27-L41)



#### Returns

[array](http://php.net/language.types.array)



### `getType()`





Returns an instance of this schema object's type as provided by entity registry




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GqlTypeTrait.php#L49-L55)


#### Arguments

- `$fields` ([array](http://php.net/language.types.array)) – Optional fields to use

#### Returns

`\GraphQL\Type\Definition\ObjectType`





## Protected Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields) | Return conditional fields for this type.

### `getConditionalFields()`





Return conditional fields for this type.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/GqlTypeTrait.php#L62-L65)



#### Returns

[array](http://php.net/language.types.array)







