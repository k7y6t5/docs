---
title: craft\gql\interfaces\elements\GlobalSet
code:
  - php
  - twig
---

# GlobalSet

Type

:   Class

Namespace

:   craft\gql\interfaces\elements

Inherits

:   [craft\gql\interfaces\elements\GlobalSet](craft-gql-interfaces-elements-globalset.md) &raquo;
[craft\gql\interfaces\Element](craft-gql-interfaces-element.md) &raquo;
[craft\gql\base\InterfaceType](craft-gql-base-interfacetype.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Since

:   3.3.0



Class GlobalSet





[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/elements/GlobalSet.php)






## Public Methods

| Method                                                                                         | Description
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-interfaces-elements-globalset.md#method-getfielddefinitions) | List of fields for this type.
| [getName()](craft-gql-interfaces-elements-globalset.md#method-getname)                         | Returns the schema object name
| [getType()](craft-gql-interfaces-elements-globalset.md#method-gettype)                         | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-gql-interfaces-elements-globalset.md#method-gettypegenerator)       | Returns the associated type generator class.

### `getFieldDefinitions()`





List of fields for this type.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/elements/GlobalSet.php#L68-L82)



#### Returns

[array](http://php.net/language.types.array)



### `getName()`





Returns the schema object name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/elements/GlobalSet.php#L60-L63)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns an instance of this schema object's type as provided by entity registry








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/elements/GlobalSet.php#L37-L55)


#### Arguments

- `$fields` ([array](http://php.net/language.types.array)) – Optional fields to use

#### Returns

`\GraphQL\Type\Definition\ObjectType`



### `getTypeGenerator()`





Returns the associated type generator class.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/elements/GlobalSet.php#L29-L32)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






