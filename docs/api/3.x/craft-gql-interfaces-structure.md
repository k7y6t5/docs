---
title: craft\gql\interfaces\Structure
code:
  - php
  - twig
---

# Structure

Type

:   Abstract Class

Namespace

:   craft\gql\interfaces

Inherits

:   [craft\gql\interfaces\Structure](craft-gql-interfaces-structure.md) &raquo;
[craft\gql\interfaces\Element](craft-gql-interfaces-element.md) &raquo;
[craft\gql\base\InterfaceType](craft-gql-base-interfacetype.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Extended by

:   [craft\gql\interfaces\elements\Category](craft-gql-interfaces-elements-category.md), [craft\gql\interfaces\elements\Entry](craft-gql-interfaces-elements-entry.md)

Since

:   3.3.0



Class Structure





[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Structure.php)






## Public Methods

| Method                                                                                                                  | Description
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-interfaces-structure.md#method-getfielddefinitions)                                   | List of fields for this type.
| [getName()](craft-gql-interfaces-structure.md#method-getname)                                                           | Returns the schema object name
| [getType()](craft-gql-base-gqltypetrait.md#method-gettype "Defined by craft\gql\base\GqlTypeTrait")                     | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-gql-base-interfacetype.md#method-gettypegenerator "Defined by craft\gql\base\InterfaceType") | Returns the associated type generator class.

### `getFieldDefinitions()`





List of fields for this type.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Structure.php#L24-L53)



#### Returns

[array](http://php.net/language.types.array)



### `getName()`





Returns the schema object name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Structure.php#L58-L61)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






