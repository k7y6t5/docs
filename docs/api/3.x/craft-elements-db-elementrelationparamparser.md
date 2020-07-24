---
title: craft\elements\db\ElementRelationParamParser
code:
  - php
  - twig
---

# ElementRelationParamParser

Type

:   Class

Namespace

:   craft\elements\db

Inherits

:   [craft\elements\db\ElementRelationParamParser](craft-elements-db-elementrelationparamparser.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Parses a relatedTo param on an ElementQuery.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementRelationParamParser.php)


## Public Properties

| Property                                                         | Description
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------
| [fields](craft-elements-db-elementrelationparamparser.md#fields) | [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null) – The custom fields that are game for the query.

### `fields`



Type

:   [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null)



The custom fields that are game for the query.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementRelationParamParser.php#L57)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [parse()](craft-elements-db-elementrelationparamparser.md#method-parse)                                                                   | Parses a `relatedTo` element query param and returns the condition that should be applied back on the element query, or `false` if there's an issue.

### `parse()`





Parses a `relatedTo` element query param and returns the condition that should
be applied back on the element query, or `false` if there's an issue.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementRelationParamParser.php#L66-L128)


#### Arguments

- `$relatedToParam` (`mixed`)

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)







## Constants

| Constant      | Description
| ------------- | -----------
| `DIR_FORWARD` |
| `DIR_REVERSE` |



