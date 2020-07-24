---
title: craft\commerce\services\TaxCategories
code:
  - php
  - twig
---

# TaxCategories

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\TaxCategories](craft-commerce-services-taxcategories.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Tax category service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allTaxCategories](craft-commerce-services-taxcategories.md#alltaxcategories)                                              | [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]
| [allTaxCategoriesAsList](craft-commerce-services-taxcategories.md#alltaxcategoriesaslist)                                  | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [defaultTaxCategory](craft-commerce-services-taxcategories.md#defaulttaxcategory)                                          | [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)

### `allTaxCategories`



Type

:   [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php)



### `allTaxCategoriesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php)



### `defaultTaxCategory`



Type

:   [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php)







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
| [deleteTaxCategoryById()](craft-commerce-services-taxcategories.md#method-deletetaxcategorybyid)                                            |
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllTaxCategories()](craft-commerce-services-taxcategories.md#method-getalltaxcategories)                                                | Returns all Tax Categories
| [getAllTaxCategoriesAsList()](craft-commerce-services-taxcategories.md#method-getalltaxcategoriesaslist)                                    | Returns all Tax category names, indexed by ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDefaultTaxCategory()](craft-commerce-services-taxcategories.md#method-getdefaulttaxcategory)                                            | Get the default tax category
| [getTaxCategoriesByProductTypeId()](craft-commerce-services-taxcategories.md#method-gettaxcategoriesbyproducttypeid)                        |
| [getTaxCategoryByHandle()](craft-commerce-services-taxcategories.md#method-gettaxcategorybyhandle)                                          | Get a tax category by its handle.
| [getTaxCategoryById()](craft-commerce-services-taxcategories.md#method-gettaxcategorybyid)                                                  | Get a tax category by its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveTaxCategory()](craft-commerce-services-taxcategories.md#method-savetaxcategory)                                                        | Save a tax category.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteTaxCategoryById()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L264-L280)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllTaxCategories()`





Returns all Tax Categories




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L59-L72)



#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]



### `getAllTaxCategoriesAsList()`





Returns all Tax category names, indexed by ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L138-L143)



#### Returns

[array](http://php.net/language.types.array)



### `getDefaultTaxCategory()`





Get the default tax category




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L150-L165)



#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)



### `getTaxCategoriesByProductTypeId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L286-L313)


#### Arguments

- `$productTypeId`

#### Returns

[array](http://php.net/language.types.array)



### `getTaxCategoryByHandle()`





Get a tax category by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L109-L131)


#### Arguments

- `$taxCategoryHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)



### `getTaxCategoryById()`





Get a tax category by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L80-L101)


#### Arguments

- `$taxCategoryId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)



### `saveTaxCategory()`





Save a tax category.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/TaxCategories.php#L176-L258)


#### Arguments

- `$taxCategory` ([craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this state before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Exception](http://php.net/class.exception)









