---
title: craft\behaviors\FieldLayoutBehavior
code:
  - php
  - twig
---

# FieldLayoutBehavior

Type

:   Class

Namespace

:   craft\behaviors

Inherits

:   [craft\behaviors\FieldLayoutBehavior](craft-behaviors-fieldlayoutbehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Field Layout behavior.





[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------
| [elementType](craft-behaviors-fieldlayoutbehavior.md#elementtype)                                                | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element type that the field layout will be associated with
| [fieldLayout](craft-behaviors-fieldlayoutbehavior.md#fieldlayout)                                                | [craft\models\FieldLayout](craft-models-fieldlayout.md)
| [fieldLayoutId](craft-behaviors-fieldlayoutbehavior.md#fieldlayoutid)                                            | [integer](http://php.net/language.types.integer)
| [fields](craft-behaviors-fieldlayoutbehavior.md#fields)                                                          | [craft\base\FieldInterface](craft-base-fieldinterface.md)[]
| [idAttribute](craft-behaviors-fieldlayoutbehavior.md#idattribute)                                                | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The attribute on the owner that holds the field layout ID
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior

### `elementType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element type that the field layout will be associated with



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L27)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](craft-models-fieldlayout.md)







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php)



### `fieldLayoutId`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php)



### `fields`



Type

:   [craft\base\FieldInterface](craft-base-fieldinterface.md)[]







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php)



### `idAttribute`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The attribute on the owner that holds the field layout ID



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L32)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#attach()-detail "Defined by yii\base\Behavior")                     | Attaches the behavior object to the component.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [detach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#detach()-detail "Defined by yii\base\Behavior")                     | Detaches the behavior object from the component.
| [events()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#events()-detail "Defined by yii\base\Behavior")                     | Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.
| [getFieldLayout()](craft-behaviors-fieldlayoutbehavior.md#method-getfieldlayout)                                                          | Returns the owner's field layout.
| [getFieldLayoutId()](craft-behaviors-fieldlayoutbehavior.md#method-getfieldlayoutid)                                                      | Returns the owner's field layout ID.
| [getFields()](craft-behaviors-fieldlayoutbehavior.md#method-getfields)                                                                    | Returns the fields associated with the owner's field layout.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-behaviors-fieldlayoutbehavior.md#method-init)                                                                              | Initializes the object.
| [setFieldLayout()](craft-behaviors-fieldlayoutbehavior.md#method-setfieldlayout)                                                          | Sets the owner's field layout.
| [setFieldLayoutId()](craft-behaviors-fieldlayoutbehavior.md#method-setfieldlayoutid)                                                      | Sets the owner's field layout ID.
| [setFields()](craft-behaviors-fieldlayoutbehavior.md#method-setfields)                                                                    | Sets the fields associated with the owner's field layout

### `getFieldLayout()`





Returns the owner's field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L109-L128)



#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the configured field layout ID is invalid


### `getFieldLayoutId()`





Returns the owner's field layout ID.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L72-L91)



#### Returns

[integer](http://php.net/language.types.integer)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the field layout ID could not be determined


### `getFields()`





Returns the fields associated with the owner's field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L145-L158)



#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[]



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L53-L64)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the behavior was not configured properly


### `setFieldLayout()`





Sets the owner's field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L135-L138)


#### Arguments

- `$fieldLayout` ([craft\models\FieldLayout](craft-models-fieldlayout.md))




### `setFieldLayoutId()`





Sets the owner's field layout ID.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L98-L101)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable))




### `setFields()`





Sets the fields associated with the owner's field layout




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/FieldLayoutBehavior.php#L165-L168)


#### Arguments

- `$fields` ([craft\base\FieldInterface](craft-base-fieldinterface.md)[])











