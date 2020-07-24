---
title: craft\commerce\services\ShippingCategories
code:
  - php
  - twig
---

# ShippingCategories

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\ShippingCategories](craft-commerce-services-shippingcategories.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Shipping category service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------
| [allShippingCategories](craft-commerce-services-shippingcategories.md#allshippingcategories)                               | [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]
| [allShippingCategoriesAsList](craft-commerce-services-shippingcategories.md#allshippingcategoriesaslist)                   | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [defaultShippingCategory](craft-commerce-services-shippingcategories.md#defaultshippingcategory)                           | [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)

### `allShippingCategories`



Type

:   [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php)



### `allShippingCategoriesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php)



### `defaultShippingCategory`



Type

:   [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteShippingCategoryById()](craft-commerce-services-shippingcategories.md#method-deleteshippingcategorybyid)                             |
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllShippingCategories()](craft-commerce-services-shippingcategories.md#method-getallshippingcategories)                                 | Returns all Shipping Categories
| [getAllShippingCategoriesAsList()](craft-commerce-services-shippingcategories.md#method-getallshippingcategoriesaslist)                     | Returns all Shipping category names, by ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDefaultShippingCategory()](craft-commerce-services-shippingcategories.md#method-getdefaultshippingcategory)                             | Returns the default shipping category.
| [getShippingCategoriesByProductTypeId()](craft-commerce-services-shippingcategories.md#method-getshippingcategoriesbyproducttypeid)         |
| [getShippingCategoryByHandle()](craft-commerce-services-shippingcategories.md#method-getshippingcategorybyhandle)                           | Get a shipping category by its handle.
| [getShippingCategoryById()](craft-commerce-services-shippingcategories.md#method-getshippingcategorybyid)                                   | Get a shipping category by its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveShippingCategory()](craft-commerce-services-shippingcategories.md#method-saveshippingcategory)                                         |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteShippingCategoryById()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L264-L278)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllShippingCategories()`





Returns all Shipping Categories




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L58-L72)



#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]



### `getAllShippingCategoriesAsList()`





Returns all Shipping category names, by ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L79-L84)



#### Returns

[array](http://php.net/language.types.array)



### `getDefaultShippingCategory()`





Returns the default shipping category.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L150-L165)



#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)



### `getShippingCategoriesByProductTypeId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L284-L312)


#### Arguments

- `$productTypeId`

#### Returns

[array](http://php.net/language.types.array)



### `getShippingCategoryByHandle()`





Get a shipping category by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L122-L143)


#### Arguments

- `$shippingCategoryHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)



### `getShippingCategoryById()`





Get a shipping category by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L93-L114)


#### Arguments

- `$shippingCategoryId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)



### `saveShippingCategory()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingCategories.php#L174-L258)


#### Arguments

- `$shippingCategory` ([craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Exception](http://php.net/class.exception)









