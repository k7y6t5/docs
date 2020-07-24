---
title: craft\helpers\Component
code:
  - php
  - twig
---

# Component

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Component](craft-helpers-component.md)

Since

:   3.0.0



Component helper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Component.php)






## Public Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------
| [createComponent()](craft-helpers-component.md#method-createcomponent)               | Instantiates and populates a component, and ensures that it is an instance of a given interface.
| [mergeSettings()](craft-helpers-component.md#method-mergesettings)                   | Extracts settings from a given component config, and returns a new config array with the settings merged in.
| [validateComponentClass()](craft-helpers-component.md#method-validatecomponentclass) | Returns whether a component class exists, is an instance of a given interface, and doesn't belong to a disabled plugin.

### `createComponent()`





Instantiates and populates a component, and ensures that it is an instance of a given interface.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Component.php#L88-L111)


#### Arguments

- `$config` (`mixed`) – The component’s class name, or its config, with a `type` value and optionally a `settings` value.
- `$instanceOf` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The class or interface that the component must be an instance of.

#### Returns

[craft\base\ComponentInterface](craft-base-componentinterface.md) – The component

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if $config doesn’t contain a `type` value, or the type isn’s compatible with|null $instanceOf.
- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)\
  if the class specified by $config doesn’t exist, or belongs to an uninstalled plugin


### `mergeSettings()`





Extracts settings from a given component config, and returns a new config array with the settings merged in.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Component.php#L119-L133)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `validateComponentClass()`



Since

:   3.2.0



Returns whether a component class exists, is an instance of a given interface,
and doesn't belong to a disabled plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Component.php#L35-L77)


#### Arguments

- `$class` ([string](http://php.net/language.types.string)) – The component’s class name.
- `$instanceOf` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The class or interface that the component must be an instance of.
- `$throwException` ([boolean](http://php.net/language.types.boolean)) – Whether an exception should be thrown if an issue is encountered

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if $config doesn’t contain a `type` value, or the type isn’s compatible with|null $instanceOf.
- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)\
  if the class specified by $config doesn’t exist, or belongs to an uninstalled plugin









