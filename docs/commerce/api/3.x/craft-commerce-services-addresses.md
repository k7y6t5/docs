---
title: craft\commerce\services\Addresses
code:
  - php
  - twig
---

# Addresses

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Addresses](craft-commerce-services-addresses.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Address service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [storeLocationAddress](craft-commerce-services-addresses.md#storelocationaddress)                                          | [craft\commerce\models\Address](craft-commerce-models-address.md)

### `storeLocationAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php)







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
| [addressWithinZone()](craft-commerce-services-addresses.md#method-addresswithinzone)                                                        |
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteAddressById()](craft-commerce-services-addresses.md#method-deleteaddressbyid)                                                        | Deletes an address by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAddressById()](craft-commerce-services-addresses.md#method-getaddressbyid)                                                              | Returns an address by its ID.
| [getAddressByIdAndCustomerId()](craft-commerce-services-addresses.md#method-getaddressbyidandcustomerid)                                    | Returns an address by an address id and customer id.
| [getAddressesByCustomerId()](craft-commerce-services-addresses.md#method-getaddressesbycustomerid)                                          | Returns all of a customer's addresses, by the customer's ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getStoreLocationAddress()](craft-commerce-services-addresses.md#method-getstorelocationaddress)                                            | Returns the stock location or a blank address if it's not defined.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [purgeOrphanedAddresses()](craft-commerce-services-addresses.md#method-purgeorphanedaddresses)                                              | Deletes all addresses not related to a customer, cart or order
| [removeReadOnlyAttributesFromArray()](craft-commerce-services-addresses.md#method-removereadonlyattributesfromarray)                        |
| [saveAddress()](craft-commerce-services-addresses.md#method-saveaddress)                                                                    | Saves an address.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `addressWithinZone()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L315-L368)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md))
- `$zone`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteAddressById()`





Deletes an address by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L286-L308)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The address' ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the address was deleted successfully



### `getAddressById()`





Returns an address by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L124-L135)


#### Arguments

- `$addressId` ([integer](http://php.net/language.types.integer)) – The address' ID

#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null) – The matched address or null if not found



### `getAddressByIdAndCustomerId()`





Returns an address by an address id and customer id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L166-L175)


#### Arguments

- `$addressId` ([integer](http://php.net/language.types.integer)) – The address id
- `$customerId` ([integer](http://php.net/language.types.integer)) – The customer's ID

#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null) – The matched address or null if not found



### `getAddressesByCustomerId()`





Returns all of a customer's addresses, by the customer's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L143-L157)


#### Arguments

- `$customerId` ([integer](http://php.net/language.types.integer)) – The customer's ID

#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md)[] – An array of matched addresses



### `getStoreLocationAddress()`





Returns the stock location or a blank address if it's not defined.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L182-L193)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md)



### `purgeOrphanedAddresses()`



Since

:   3.0.4



Deletes all addresses not related to a customer, cart or order




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L377-L406)




#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)
- [yii\base\ExitException](https://www.yiiframework.com/doc/api/2.0/yii-base-exitexception)


### `removeReadOnlyAttributesFromArray()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L413-L433)


#### Arguments

- `$address` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `saveAddress()`





Saves an address.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Addresses.php#L204-L278)


#### Arguments

- `$addressModel` ([craft\commerce\models\Address](craft-commerce-models-address.md)) – The address to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this address before saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the address was saved successfully.

#### Throws

- [InvalidArgumentException](http://php.net/class.invalidargumentexception)\
  if an address does not exist.
- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)








## Events

### EVENT_AFTER_DELETE_ADDRESS



Type

:   [craft\commerce\events\AddressEvent](craft-commerce-events-addressevent.md)



The event that is triggered after an address is deleted.

```php
use craft\commerce\events\AddressEvent;
use craft\commerce\services\Addresses;
use craft\commerce\models\Address;
use yii\base\Event;

Event::on(
    Addresses::class,
    Addresses::EVENT_AFTER_DELETE_ADDRESS,
    function(AddressEvent $event) {
        // @var Address $address
        $address = $event->address;

        // Remove this address from a payment gateway
        // ...
    }
);



---



### EVENT_AFTER_SAVE_ADDRESS



Type

:   [craft\commerce\events\AddressEvent](craft-commerce-events-addressevent.md)



The event that is triggered after an address is saved.

```php
use craft\commerce\events\AddressEvent;
use craft\commerce\services\Addresses;
use craft\commerce\models\Address;
use yii\base\Event;

Event::on(
    Addresses::class,
    Addresses::EVENT_AFTER_SAVE_ADDRESS,
    function(AddressEvent $event) {
        // @var Address $address
        $address = $event->address;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Set the default address in an external CRM
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_ADDRESS



Type

:   [craft\commerce\events\AddressEvent](craft-commerce-events-addressevent.md)



The event that is triggered before an address is saved.

```php
use craft\commerce\events\AddressEvent;
use craft\commerce\services\Addresses;
use craft\commerce\models\Address;
use yii\base\Event;

Event::on(
    Addresses::class,
    Addresses::EVENT_BEFORE_SAVE_ADDRESS,
    function(AddressEvent $event) {
        // @var Address $address
        $address = $event->address;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Update customer’s address in an external CRM
        // ...
    }
);
```



---




