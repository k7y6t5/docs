---
title: craft\commerce\services\ProductTypes
code:
  - php
  - twig
---

# ProductTypes

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\ProductTypes](craft-commerce-services-producttypes.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Product type service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allProductTypeIds](craft-commerce-services-producttypes.md#allproducttypeids)                                             | [array](http://php.net/language.types.array) – An array of all the product types’ IDs.
| [allProductTypes](craft-commerce-services-producttypes.md#allproducttypes)                                                 | [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[] – An array of all product types.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [editableProductTypeIds](craft-commerce-services-producttypes.md#editableproducttypeids)                                   | [array](http://php.net/language.types.array) – An array of all the editable product types’ IDs.
| [editableProductTypes](craft-commerce-services-producttypes.md#editableproducttypes)                                       | [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[] – An array of all the editable product types.

### `allProductTypeIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



An array of all the product types’ IDs.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php)



### `allProductTypes`



Type

:   [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[]

Access

:   Read-only



An array of all product types.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php)



### `editableProductTypeIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



An array of all the editable product types’ IDs.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php)



### `editableProductTypes`



Type

:   [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[]

Access

:   Read-only



An array of all the editable product types.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php)







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
| [afterSaveSiteHandler()](craft-commerce-services-producttypes.md#method-aftersavesitehandler)                                               | Adds a new product type setting row when a Site is added to Craft.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteProductTypeById()](craft-commerce-services-producttypes.md#method-deleteproducttypebyid)                                             | Deletes a product type by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllProductTypeIds()](craft-commerce-services-producttypes.md#method-getallproducttypeids)                                               | Returns all of the product type IDs.
| [getAllProductTypes()](craft-commerce-services-producttypes.md#method-getallproducttypes)                                                   | Returns all product types.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEditableProductTypeIds()](craft-commerce-services-producttypes.md#method-geteditableproducttypeids)                                     | Returns all of the product type IDs that are editable by the current user.
| [getEditableProductTypes()](craft-commerce-services-producttypes.md#method-geteditableproducttypes)                                         | Returns all editable product types.
| [getProductTypeByHandle()](craft-commerce-services-producttypes.md#method-getproducttypebyhandle)                                           | Returns a product type by its handle.
| [getProductTypeById()](craft-commerce-services-producttypes.md#method-getproducttypebyid)                                                   | Returns a product type by its ID.
| [getProductTypeByUid()](craft-commerce-services-producttypes.md#method-getproducttypebyuid)                                                 | Returns a product type by its UID.
| [getProductTypeSites()](craft-commerce-services-producttypes.md#method-getproducttypesites)                                                 | Returns an array of product type site settings for a product type by its ID.
| [getProductTypesByShippingCategoryId()](craft-commerce-services-producttypes.md#method-getproducttypesbyshippingcategoryid)                 | Returns all product types by a shipping category id.
| [getProductTypesByTaxCategoryId()](craft-commerce-services-producttypes.md#method-getproducttypesbytaxcategoryid)                           | Returns all product types by a tax category id.
| [handleChangedProductType()](craft-commerce-services-producttypes.md#method-handlechangedproducttype)                                       | Handle a product type change.
| [handleDeletedProductType()](craft-commerce-services-producttypes.md#method-handledeletedproducttype)                                       | Handle a product type getting deleted.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [isProductTypeTemplateValid()](craft-commerce-services-producttypes.md#method-isproducttypetemplatevalid)                                   | Returns whether a product type’s products have URLs, and if the template path is valid.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-commerce-services-producttypes.md#method-prunedeletedfield)                                                     | Prune a deleted field from category group layouts.
| [pruneDeletedSite()](craft-commerce-services-producttypes.md#method-prunedeletedsite)                                                       | Prune a deleted site from category group site settings.
| [saveProductType()](craft-commerce-services-producttypes.md#method-saveproducttype)                                                         | Saves a product type.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `afterSaveSiteHandler()`





Adds a new product type setting row when a Site is added to Craft.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L885-L901)


#### Arguments

- `$event` ([craft\events\SiteEvent](https://docs.craftcms.com/api/v3/craft-events-siteevent.html)) – The event that triggered this.




### `deleteProductTypeById()`





Deletes a product type by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L685-L690)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The product type's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the product type was deleted successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `getAllProductTypeIds()`





Returns all of the product type IDs.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L182-L194)



#### Returns

[array](http://php.net/language.types.array) – An array of all the product types’ IDs.



### `getAllProductTypes()`





Returns all product types.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L201-L214)



#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[] – An array of all product types.



### `getEditableProductTypeIds()`





Returns all of the product type IDs that are editable by the current user.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L161-L175)



#### Returns

[array](http://php.net/language.types.array) – An array of all the editable product types’ IDs.



### `getEditableProductTypes()`





Returns all editable product types.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L142-L154)



#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md)[] – An array of all the editable product types.



### `getProductTypeByHandle()`





Returns a product type by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L222-L243)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The product type's handle.

#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md), [null](http://php.net/language.types.null) – The product type or `null`.



### `getProductTypeById()`





Returns a product type by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L814-L835)


#### Arguments

- `$productTypeId` ([integer](http://php.net/language.types.integer)) – The product type's ID

#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md), [null](http://php.net/language.types.null) – Either the product type or `null`



### `getProductTypeByUid()`





Returns a product type by its UID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L843-L846)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string)) – The product type's UID

#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md), [null](http://php.net/language.types.null) – Either the product type or `null`



### `getProductTypeSites()`





Returns an array of product type site settings for a product type by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L251-L275)


#### Arguments

- `$productTypeId` ([integer](http://php.net/language.types.integer)) – The product type ID

#### Returns

[array](http://php.net/language.types.array) – The product type settings.



### `getProductTypesByShippingCategoryId()`





Returns all product types by a shipping category id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L662-L676)


#### Arguments

- `$shippingCategoryId`

#### Returns

[array](http://php.net/language.types.array)



### `getProductTypesByTaxCategoryId()`





Returns all product types by a tax category id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L640-L654)


#### Arguments

- `$taxCategoryId`

#### Returns

[array](http://php.net/language.types.array)



### `handleChangedProductType()`





Handle a product type change.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L401-L632)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `handleDeletedProductType()`





Handle a product type getting deleted.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L699-L747)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `isProductTypeTemplateValid()`





Returns whether a product type’s products have URLs, and if the template path is valid.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L856-L878)


#### Arguments

- `$productType` ([craft\commerce\models\ProductType](craft-commerce-models-producttype.md)) – The product for which to validate the template.
- `$siteId` ([integer](http://php.net/language.types.integer)) – The site for which to valid for

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the template is valid.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `pruneDeletedField()`





Prune a deleted field from category group layouts.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L774-L806)


#### Arguments

- `$event` ([craft\events\FieldEvent](https://docs.craftcms.com/api/v3/craft-events-fieldevent.html))




### `pruneDeletedSite()`





Prune a deleted site from category group site settings.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L754-L767)


#### Arguments

- `$event` ([craft\events\DeleteSiteEvent](https://docs.craftcms.com/api/v3/craft-events-deletesiteevent.html))




### `saveProductType()`





Saves a product type.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ProductTypes.php#L285-L392)


#### Arguments

- `$productType` ([craft\commerce\models\ProductType](craft-commerce-models-producttype.md)) – The product type model.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – If validation should be ran.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the product type was saved successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `CONFIG_PRODUCTTYPES_KEY` |


## Events

### EVENT_AFTER_SAVE_PRODUCTTYPE



Type

:   [craft\commerce\events\ProductTypeEvent](craft-commerce-events-producttypeevent.md)



The event that is triggered after a product type has been saved.

```php
use craft\commerce\events\ProductTypeEvent;
use craft\commerce\services\ProductTypes;
use craft\commerce\models\ProductType;
use yii\base\Event;

Event::on(
    ProductTypes::class,
    ProductTypes::EVENT_AFTER_SAVE_PRODUCTTYPE,
    function(ProductTypeEvent $event) {
        // @var ProductType|null $productType
        $productType = $event->productType;

        // Prepare some third party system for a new product type
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_PRODUCTTYPE



Type

:   [craft\commerce\events\ProductTypeEvent](craft-commerce-events-producttypeevent.md)



The event that is triggered before a product type is saved.

```php
use craft\commerce\events\ProductTypeEvent;
use craft\commerce\services\ProductTypes;
use craft\commerce\models\ProductType;
use yii\base\Event;

Event::on(
    ProductTypes::class,
    ProductTypes::EVENT_BEFORE_SAVE_PRODUCTTYPE,
    function(ProductTypeEvent $event) {
        // @var ProductType|null $productType
        $productType = $event->productType;
        
        // Create an audit trail of this action
        // ...
    }
);
```



---




