---
title: craft\commerce\services\ShippingZones
code:
  - php
  - twig
---

# ShippingZones

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\ShippingZones](craft-commerce-services-shippingzones.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Shipping zone service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allShippingZones](craft-commerce-services-shippingzones.md#allshippingzones)                                              | [craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allShippingZones`



Type

:   [craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php)







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
| [deleteShippingZoneById()](craft-commerce-services-shippingzones.md#method-deleteshippingzonebyid)                                          |
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllShippingZones()](craft-commerce-services-shippingzones.md#method-getallshippingzones)                                                | Get all shipping zones.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getShippingZoneById()](craft-commerce-services-shippingzones.md#method-getshippingzonebyid)                                                | Get a shipping zoneby its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveShippingZone()](craft-commerce-services-shippingzones.md#method-saveshippingzone)                                                      | Save a shipping zone.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteShippingZoneById()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php#L192-L201)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllShippingZones()`





Get all shipping zones.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php#L49-L62)



#### Returns

[craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md)[]



### `getShippingZoneById()`





Get a shipping zoneby its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php#L70-L89)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md), [null](http://php.net/language.types.null)



### `saveShippingZone()`





Save a shipping zone.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/ShippingZones.php#L100-L186)


#### Arguments

- `$model` ([craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this rule before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Exception](http://php.net/class.exception)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)









