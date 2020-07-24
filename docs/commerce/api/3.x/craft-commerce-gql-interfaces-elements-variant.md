---
title: craft\commerce\gql\interfaces\elements\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\gql\interfaces\elements

Inherits

:   [craft\commerce\gql\interfaces\elements\Variant](craft-commerce-gql-interfaces-elements-variant.md) &raquo;
[craft\gql\interfaces\Element](https://docs.craftcms.com/api/v3/craft-gql-interfaces-element.html) &raquo;
[craft\gql\base\InterfaceType](https://docs.craftcms.com/api/v3/craft-gql-base-interfacetype.html)

Uses traits

:   [craft\gql\base\GqlTypeTrait](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html)

Since

:   3.1



Class Variant





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Variant.php)






## Public Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-commerce-gql-interfaces-elements-variant.md#method-getfielddefinitions) | List of fields for this type.
| [getName()](craft-commerce-gql-interfaces-elements-variant.md#method-getname)                         | Returns the schema object name
| [getType()](craft-commerce-gql-interfaces-elements-variant.md#method-gettype)                         | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-commerce-gql-interfaces-elements-variant.md#method-gettypegenerator)       | Returns the associated type generator class.

### `getFieldDefinitions()`





List of fields for this type.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Variant.php#L69-L163)



#### Returns

[array](http://php.net/language.types.array)



### `getName()`





Returns the schema object name








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Variant.php#L61-L64)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns an instance of this schema object's type as provided by entity registry








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Variant.php#L38-L56)


#### Arguments

- `$fields` ([array](http://php.net/language.types.array)) – Optional fields to use

#### Returns

`\GraphQL\Type\Definition\ObjectType`



### `getTypeGenerator()`





Returns the associated type generator class.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Variant.php#L30-L33)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






