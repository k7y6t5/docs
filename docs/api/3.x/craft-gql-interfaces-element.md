---
title: craft\gql\interfaces\Element
code:
  - php
  - twig
---

# Element

Type

:   Class

Namespace

:   craft\gql\interfaces

Inherits

:   [craft\gql\interfaces\Element](craft-gql-interfaces-element.md) &raquo;
[craft\gql\base\InterfaceType](craft-gql-base-interfacetype.md)

Uses traits

:   [craft\gql\base\GqlTypeTrait](craft-gql-base-gqltypetrait.md)

Extended by

:   [craft\gql\interfaces\Structure](craft-gql-interfaces-structure.md), [craft\gql\interfaces\elements\Asset](craft-gql-interfaces-elements-asset.md), [craft\gql\interfaces\elements\Category](craft-gql-interfaces-elements-category.md), [craft\gql\interfaces\elements\Entry](craft-gql-interfaces-elements-entry.md), [craft\gql\interfaces\elements\GlobalSet](craft-gql-interfaces-elements-globalset.md), [craft\gql\interfaces\elements\MatrixBlock](craft-gql-interfaces-elements-matrixblock.md), [craft\gql\interfaces\elements\Tag](craft-gql-interfaces-elements-tag.md), [craft\gql\interfaces\elements\User](craft-gql-interfaces-elements-user.md)

Since

:   3.3.0



Class Element





[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Element.php)






## Public Methods

| Method                                                                              | Description
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------
| [getFieldDefinitions()](craft-gql-interfaces-element.md#method-getfielddefinitions) | List of fields for this type.
| [getName()](craft-gql-interfaces-element.md#method-getname)                         | Returns the schema object name
| [getType()](craft-gql-interfaces-element.md#method-gettype)                         | Returns an instance of this schema object's type as provided by entity registry
| [getTypeGenerator()](craft-gql-interfaces-element.md#method-gettypegenerator)       | Returns the associated type generator class.

### `getFieldDefinitions()`





List of fields for this type.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Element.php#L62-L133)



#### Returns

[array](http://php.net/language.types.array)



### `getName()`





Returns the schema object name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Element.php#L138-L141)



#### Returns

[string](http://php.net/language.types.string)



### `getType()`





Returns an instance of this schema object's type as provided by entity registry








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Element.php#L39-L57)


#### Arguments

- `$fields` ([array](http://php.net/language.types.array)) – Optional fields to use

#### Returns

`\GraphQL\Type\Definition\ObjectType`



### `getTypeGenerator()`





Returns the associated type generator class.








[View source](https://github.com/craftcms/cms/blob/master/src/gql/interfaces/Element.php#L31-L34)



#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------
| [getConditionalFields()](craft-gql-base-gqltypetrait.md#method-getconditionalfields "Defined by craft\gql\base\GqlTypeTrait") | Return conditional fields for this type.






