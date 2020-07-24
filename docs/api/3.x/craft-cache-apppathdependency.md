---
title: craft\cache\AppPathDependency
code:
  - php
  - twig
---

# AppPathDependency

Type

:   Class

Namespace

:   craft\cache

Inherits

:   [craft\cache\AppPathDependency](craft-cache-apppathdependency.md) &raquo;
[yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



AppPathDependency is used to determine if Craft’s base path has changed.





[View source](https://github.com/craftcms/cms/blob/master/src/cache/AppPathDependency.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------
| [appPath](craft-cache-apppathdependency.md#apppath)                                                                              | [string](http://php.net/language.types.string) – Craft’s base path
| [data](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#$data-detail "Defined by yii\caching\Dependency")         | `mixed` – The dependency data that is saved in cache and later is compared with the latest dependency data.
| [reusable](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#$reusable-detail "Defined by yii\caching\Dependency") | [boolean](http://php.net/language.types.boolean) – Whether this dependency is reusable or not.

### `appPath`



Type

:   [string](http://php.net/language.types.string)



Craft’s base path



[View source](https://github.com/craftcms/cms/blob/master/src/cache/AppPathDependency.php#L25)







## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                               | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                 | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                             | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                 | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                             | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                         | Returns the fully qualified name of this class.
| [evaluateDependency()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#evaluateDependency()-detail "Defined by yii\caching\Dependency") | Evaluates the dependency by generating and saving the data related with dependency.
| [getHasChanged()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#getHasChanged()-detail "Defined by yii\caching\Dependency")           | Returns a value indicating whether the dependency has changed.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property is defined.
| [init()](craft-cache-apppathdependency.md#method-init)                                                                                                  | Initializes the object.
| [isChanged()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#isChanged()-detail "Defined by yii\caching\Dependency")                   | Checks whether the dependency is changed.
| [resetReusableData()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#resetReusableData()-detail "Defined by yii\caching\Dependency")   | Resets all cached data for reusable dependencies.

### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/cache/AppPathDependency.php#L30-L34)








## Protected Methods

| Method                                                                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------
| [generateDependencyData()](craft-cache-apppathdependency.md#method-generatedependencydata)                                                                  | Generates the data needed to determine if dependency has been changed.
| [generateReusableHash()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency#generateReusableHash()-detail "Defined by yii\caching\Dependency") | Generates a unique hash that can be used for retrieving reusable dependency data.

### `generateDependencyData()`





Generates the data needed to determine if dependency has been changed.




[View source](https://github.com/craftcms/cms/blob/master/src/cache/AppPathDependency.php#L42-L45)


#### Arguments

- `$cache` ([yii\caching\Cache](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache)) – The cache component that is currently evaluating this dependency.

#### Returns

[string](http://php.net/language.types.string) – The data needed to determine if dependency has been changed.








