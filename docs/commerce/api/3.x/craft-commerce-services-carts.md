---
title: craft\commerce\services\Carts
code:
  - php
  - twig
---

# Carts

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Carts](craft-commerce-services-carts.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Cart service. This manages the cart currently in the session, this service should mainly be used by web controller actions.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [activeCartEdgeDuration](craft-commerce-services-carts.md#activecartedgeduration)                                          | [string](http://php.net/language.types.string)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cart](craft-commerce-services-carts.md#cart)                                                                              | [craft\commerce\elements\Order](craft-commerce-elements-order.md)
| [hasSessionCartNumber](craft-commerce-services-carts.md#hassessioncartnumber)                                              | [boolean](http://php.net/language.types.boolean)

### `activeCartEdgeDuration`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php)



### `cart`



Type

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php)



### `hasSessionCartNumber`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   2.1.11







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php)





## Protected Properties

| Property                                              | Description
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------
| [cartName](craft-commerce-services-carts.md#cartname) | [string](http://php.net/language.types.string) – Session key for storing the cart number

### `cartName`



Type

:   [string](http://php.net/language.types.string)



Session key for storing the cart number



[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L41)





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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [forgetCart()](craft-commerce-services-carts.md#method-forgetcart)                                                                          | Forgets the cart in the current session.
| [generateCartNumber()](craft-commerce-services-carts.md#method-generatecartnumber)                                                          | Generate a new random cart number and returns it.
| [getActiveCartEdgeDuration()](craft-commerce-services-carts.md#method-getactivecartedgeduration)                                            | Calculates the date of the active cart duration edge.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCart()](craft-commerce-services-carts.md#method-getcart)                                                                                | Get the current cart for this session.
| [getCartName()](craft-commerce-services-carts.md#method-getcartname)                                                                        |
| [getHasSessionCartNumber()](craft-commerce-services-carts.md#method-gethassessioncartnumber)                                                | Returns whether there is a cart number in the session.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [purgeIncompleteCarts()](craft-commerce-services-carts.md#method-purgeincompletecarts)                                                      | Removes all carts that are incomplete and older than the config setting.
| [restorePreviousCartForCurrentUser()](craft-commerce-services-carts.md#method-restorepreviouscartforcurrentuser)                            | Restores previous cart for the current user if their current cart is empty.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `forgetCart()`





Forgets the cart in the current session.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L150-L154)



#### Returns

`void`

#### Throws

- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)


### `generateCartNumber()`



Since

:   2.0



Generate a new random cart number and returns it.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L162-L165)



#### Returns

[string](http://php.net/language.types.string)



### `getActiveCartEdgeDuration()`



Since

:   2.2



Calculates the date of the active cart duration edge.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L174-L181)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [Exception](http://php.net/class.exception)


### `getCart()`





Get the current cart for this session.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L57-L110)


#### Arguments

- `$forceSave` ([boolean](http://php.net/language.types.boolean)) – Force the cart to save when requesting it.

#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md)

#### Throws

- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)


### `getCartName()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L200-L203)



#### Returns

[string](http://php.net/language.types.string)



### `getHasSessionCartNumber()`



Since

:   2.1.11



Returns whether there is a cart number in the session.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L190-L194)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)


### `purgeIncompleteCarts()`





Removes all carts that are incomplete and older than the config setting.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L265-L299)



#### Returns

[integer](http://php.net/language.types.integer) – The number of carts purged from the database

#### Throws

- [Exception](http://php.net/class.exception)
- [Throwable](http://php.net/class.throwable)


### `restorePreviousCartForCurrentUser()`





Restores previous cart for the current user if their current cart is empty.

Ideally this is only used when a user logs in.


[View source](https://github.com/craftcms/commerce/blob/master/src/services/Carts.php#L246-L256)




#### Throws

- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)
- [Throwable](http://php.net/class.throwable)









