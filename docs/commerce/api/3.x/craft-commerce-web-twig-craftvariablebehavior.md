---
title: craft\commerce\web\twig\CraftVariableBehavior
code:
  - php
  - twig
---

# CraftVariableBehavior

Type

:   Class

Namespace

:   craft\commerce\web\twig

Inherits

:   [craft\commerce\web\twig\CraftVariableBehavior](craft-commerce-web-twig-craftvariablebehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Class CraftVariableBehavior





[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------
| [commerce](craft-commerce-web-twig-craftvariablebehavior.md#commerce)                                            | [craft\commerce\Plugin](craft-commerce-plugin.md)
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior

### `commerce`



Type

:   [craft\commerce\Plugin](craft-commerce-plugin.md)







[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L33)







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
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-commerce-web-twig-craftvariablebehavior.md#method-init)                                                                    |
| [orders()](craft-commerce-web-twig-craftvariablebehavior.md#method-orders)                                                                | Returns a new OrderQuery instance.
| [products()](craft-commerce-web-twig-craftvariablebehavior.md#method-products)                                                            | Returns a new ProductQuery instance.
| [subscriptions()](craft-commerce-web-twig-craftvariablebehavior.md#method-subscriptions)                                                  | Returns a new SubscriptionQuery instance.
| [variants()](craft-commerce-web-twig-craftvariablebehavior.md#method-variants)                                                            | Returns a new VariantQuery instance.

### `init()`










[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L35-L41)






### `orders()`





Returns a new OrderQuery instance.




[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L49-L56)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\commerce\elements\db\OrderQuery](craft-commerce-elements-db-orderquery.md)



### `products()`





Returns a new ProductQuery instance.




[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L79-L86)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\commerce\elements\db\ProductQuery](craft-commerce-elements-db-productquery.md)



### `subscriptions()`





Returns a new SubscriptionQuery instance.




[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L64-L71)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\commerce\elements\db\SubscriptionQuery](craft-commerce-elements-db-subscriptionquery.md)



### `variants()`





Returns a new VariantQuery instance.




[View source](https://github.com/craftcms/commerce/blob/master/src/web/twig/CraftVariableBehavior.php#L94-L101)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md)










