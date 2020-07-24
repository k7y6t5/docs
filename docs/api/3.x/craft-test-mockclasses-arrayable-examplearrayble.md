---
title: craft\test\mockclasses\arrayable\ExampleArrayble
code:
  - php
  - twig
---

# ExampleArrayble

Type

:   Class

Namespace

:   craft\test\mockclasses\arrayable

Inherits

:   [craft\test\mockclasses\arrayable\ExampleArrayble](craft-test-mockclasses-arrayable-examplearrayble.md)

Implements

:   [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable)

Uses traits

:   [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait)

Since

:   3.2.0



Class ExampleArrayble





[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/arrayable/ExampleArrayble.php)


## Public Properties

| Property                                                                                           | Description
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------
| [exampleArrayableParam](craft-test-mockclasses-arrayable-examplearrayble.md#examplearrayableparam) | [string](http://php.net/language.types.string)
| [extraField](craft-test-mockclasses-arrayable-examplearrayble.md#extrafield)                       | [string](http://php.net/language.types.string)

### `exampleArrayableParam`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/arrayable/ExampleArrayble.php#L27)



### `extraField`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/arrayable/ExampleArrayble.php#L32)







## Public Methods

| Method                                                                                                                              | Description
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [extraFields()](craft-test-mockclasses-arrayable-examplearrayble.md#method-extrafields)                                             |
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")   | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait") | Converts the model into an array.

### `extraFields()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/arrayable/ExampleArrayble.php#L37-L42)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).






