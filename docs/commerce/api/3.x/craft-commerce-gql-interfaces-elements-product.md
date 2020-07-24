---
title: craft\commerce\gql\interfaces\elements\Product
code:
  - php
  - twig
---

# Product

Type

:   Class

Namespace

:   craft\commerce\gql\interfaces\elements

Inherits

:   [craft\commerce\gql\interfaces\elements\Product](craft-commerce-gql-interfaces-elements-product.md) &raquo;
[craft\gql\interfaces\Element](https://docs.craftcms.com/api/v3/craft-gql-interfaces-element.html) &raquo;
[craft\gql\base\InterfaceType](https://docs.craftcms.com/api/v3/craft-gql-base-interfacetype.html)

Uses traits

:   [craft\gql\base\GqlTypeTrait](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html)

Since

:   3.0



Class Product





[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Product.php)






## Public Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-commerce-gql-interfaces-elements-product.md#method-getfielddefinitions) | List of fields for this type.
| [getName()](craft-commerce-gql-interfaces-elements-product.md#method-getname)                         | Returns the schema object name
| [getType()](craft-commerce-gql-interfaces-elements-product.md#method-gettype)                         | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-commerce-gql-interfaces-elements-product.md#method-gettypegenerator)       | Returns the associated type generator class.

### `getFieldDefinitions()`





List of fields for this type.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Product.php#L68-L97)



#### Returns

[array](http://php.net/language.types.array)



### `getName()`





Returns the schema object name








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Product.php#L60-L63)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns an instance of this schema object's type as provided by entity registry








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Product.php#L37-L55)


#### Arguments

- `$fields` ([array](http://php.net/language.types.array)) – Optional fields to use

#### Returns

`\GraphQL\Type\Definition\ObjectType`



### `getTypeGenerator()`





Returns the associated type generator class.








[View source](https://github.com/craftcms/commerce/blob/master/src/gql/interfaces/elements/Product.php#L29-L32)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](https://docs.craftcms.com/api/v3/craft-gql-base-gqltypetrait.html#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






