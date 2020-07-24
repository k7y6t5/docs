---
title: craft\commerce\helpers\Product
code:
  - php
  - twig
---

# Product

Type

:   Class

Namespace

:   craft\commerce\helpers

Inherits

:   [craft\commerce\helpers\Product](craft-commerce-helpers-product.md)

Since

:   2.0



Product helper





[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Product.php)






## Public Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------
| [populateProductFromPost()](craft-commerce-helpers-product.md#method-populateproductfrompost)         | Populates a product from the post data.
| [populateProductVariantModel()](craft-commerce-helpers-product.md#method-populateproductvariantmodel) | Populates all Variant Models from HUD or POST data
| [productFromPost()](craft-commerce-helpers-product.md#method-productfrompost)                         | Instantiates the product specified by the post data.

### `populateProductFromPost()`





Populates a product from the post data.




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Product.php#L114-L149)


#### Arguments

- `$product` ([craft\commerce\elements\Product](craft-commerce-elements-product.md), [null](http://php.net/language.types.null))
- `$request` ([craft\web\Request](https://docs.craftcms.com/api/v3/craft-web-request.html), [null](http://php.net/language.types.null))

#### Returns

[craft\commerce\elements\Product](craft-commerce-elements-product.md)

#### Throws

- [yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception)


### `populateProductVariantModel()`





Populates all Variant Models from HUD or POST data




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Product.php#L36-L72)


#### Arguments

- `$product` ([craft\commerce\elements\Product](craft-commerce-elements-product.md))
- `$variant`
- `$key`

#### Returns

[craft\commerce\elements\Variant](craft-commerce-elements-variant.md)



### `productFromPost()`



Since

:   3.1.3



Instantiates the product specified by the post data.




[View source](https://github.com/craftcms/commerce/blob/master/src/helpers/Product.php#L82-L104)


#### Arguments

- `$request` ([craft\web\Request](https://docs.craftcms.com/api/v3/craft-web-request.html), [null](http://php.net/language.types.null))

#### Returns

[craft\commerce\elements\Product](craft-commerce-elements-product.md)

#### Throws

- [yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception)









