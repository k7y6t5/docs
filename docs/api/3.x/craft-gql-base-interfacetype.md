---
title: craft\gql\base\InterfaceType
code:
  - php
  - twig
---

# InterfaceType

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\InterfaceType](craft-gql-base-interfacetype.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Extended by

:   [craft\gql\interfaces\Element](craft-gql-interfaces-element.md), [craft\gql\interfaces\Structure](craft-gql-interfaces-structure.md), [craft\gql\interfaces\elements\Asset](craft-gql-interfaces-elements-asset.md), [craft\gql\interfaces\elements\Category](craft-gql-interfaces-elements-category.md), [craft\gql\interfaces\elements\Entry](craft-gql-interfaces-elements-entry.md), [craft\gql\interfaces\elements\GlobalSet](craft-gql-interfaces-elements-globalset.md), [craft\gql\interfaces\elements\MatrixBlock](craft-gql-interfaces-elements-matrixblock.md), [craft\gql\interfaces\elements\Tag](craft-gql-interfaces-elements-tag.md), [craft\gql\interfaces\elements\User](craft-gql-interfaces-elements-user.md)

Since

:   3.3.0



Class InterfaceType





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/InterfaceType.php)






## Public Methods

| Method                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-base-gqltypetrait.md#method-getfielddefinitions "Defined by craft\gql\base\GqlTypeTrait") | List of fields for this type.
| [getName()](craft-gql-base-interfacetype.md#method-getname)                                                                 | Returns the schema object name
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype "Defined by craft\gql\base\GqlTypeTrait")                         | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-gql-base-interfacetype.md#method-gettypegenerator)                                               | Returns the associated type generator class.

### `getName()`





Returns the schema object name




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/InterfaceType.php#L25)



#### Returns

[string](http://php.net/language.types.string)



### `getTypeGenerator()`





Returns the associated type generator class.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/InterfaceType.php#L32)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






