---
title: craft\commerce\services\PaymentSources
code:
  - php
  - twig
---

# PaymentSources

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\PaymentSources](craft-commerce-services-paymentsources.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Payment Sources service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allGatewayPaymentSourcesByUserId](craft-commerce-services-paymentsources.md#allgatewaypaymentsourcesbyuserid)             | [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]
| [allPaymentSourcesByUserId](craft-commerce-services-paymentsources.md#allpaymentsourcesbyuserid)                           | [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allGatewayPaymentSourcesByUserId`



Type

:   [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php)



### `allPaymentSourcesByUserId`



Type

:   [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php)







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
| [createPaymentSource()](craft-commerce-services-paymentsources.md#method-createpaymentsource)                                               | Creates a payment source for a user in the gateway based on a payment form.
| [deletePaymentSourceById()](craft-commerce-services-paymentsources.md#method-deletepaymentsourcebyid)                                       | Delete a payment source by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllGatewayPaymentSourcesByUserId()](craft-commerce-services-paymentsources.md#method-getallgatewaypaymentsourcesbyuserid)               | Returns a user's payment sources on a gateway, per the user's ID.
| [getAllPaymentSourcesByUserId()](craft-commerce-services-paymentsources.md#method-getallpaymentsourcesbyuserid)                             | Returns a user's payment sources, per the user's ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getPaymentSourceById()](craft-commerce-services-paymentsources.md#method-getpaymentsourcebyid)                                             | Returns a payment source by its ID.
| [getPaymentSourceByIdAndUserId()](craft-commerce-services-paymentsources.md#method-getpaymentsourcebyidanduserid)                           | Returns a payment source by its ID and user ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [savePaymentSource()](craft-commerce-services-paymentsources.md#method-savepaymentsource)                                                   | Saves a payment source.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createPaymentSource()`





Creates a payment source for a user in the gateway based on a payment form.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L198-L217)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user's ID
- `$gateway` ([craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)) – The gateway
- `$paymentForm` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – The payment form to use
- `$sourceDescription` ([string](http://php.net/language.types.string)) – The payment form to use

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md) – The saved payment source.

#### Throws

- [craft\commerce\errors\PaymentSourceException](craft-commerce-errors-paymentsourceexception.md)\
  If unable to create the payment source


### `deletePaymentSourceById()`





Delete a payment source by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L282-L306)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The ID

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)\
  in case something went wrong when deleting.


### `getAllGatewayPaymentSourcesByUserId()`





Returns a user's payment sources on a gateway, per the user's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L136-L154)


#### Arguments

- `$gatewayId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The gateway's ID
- `$userId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The user's ID

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]



### `getAllPaymentSourcesByUserId()`





Returns a user's payment sources, per the user's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L110-L127)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The user's ID

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)[]



### `getPaymentSourceById()`





Returns a payment source by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L162-L169)


#### Arguments

- `$sourceId` ([integer](http://php.net/language.types.integer)) – The source ID

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null)



### `getPaymentSourceByIdAndUserId()`





Returns a payment source by its ID and user ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L178-L186)


#### Arguments

- `$sourceId` ([integer](http://php.net/language.types.integer)) – The source ID
- `$userId` ([integer](http://php.net/language.types.integer)) – The source's user ID

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null)



### `savePaymentSource()`





Saves a payment source.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/PaymentSources.php#L227-L273)


#### Arguments

- `$paymentSource` ([craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)) – The payment source being saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this payment source before saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the payment source was saved successfully

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the payment source couldn't be found








## Events

### EVENT_AFTER_SAVE_PAYMENT_SOURCE



Type

:   [craft\commerce\events\PaymentSourceEvent](craft-commerce-events-paymentsourceevent.md)



The event that is triggered after a payment source is added.

```php
use craft\commerce\events\PaymentSourceEvent;
use craft\commerce\services\PaymentSources;
use craft\commerce\models\PaymentSource;
use yii\base\Event;

Event::on(
    PaymentSources::class,
    PaymentSources::EVENT_AFTER_SAVE_PAYMENT_SOURCE,
    function(PaymentSourceEvent $event) {
        // @var PaymentSource $source
        $source = $event->paymentSource;

        // Settle any outstanding balance
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_PAYMENT_SOURCE



Type

:   [craft\commerce\events\PaymentSourceEvent](craft-commerce-events-paymentsourceevent.md)



The event that is triggered before a payment source is added.

```php
use craft\commerce\events\PaymentSourceEvent;
use craft\commerce\services\PaymentSources;
use craft\commerce\models\PaymentSource;
use yii\base\Event;

Event::on(
    PaymentSources::class,
    PaymentSources::EVENT_BEFORE_SAVE_PAYMENT_SOURCE,
    function(PaymentSourceEvent $event) {
        // @var PaymentSource $source
        $source = $event->paymentSource;

        // ...
    }
);
```



---



### EVENT_DELETE_PAYMENT_SOURCE



Type

:   [craft\commerce\events\PaymentSourceEvent](craft-commerce-events-paymentsourceevent.md)



The event that is triggered when a payment source is deleted.

```php
use craft\commerce\events\PaymentSourceEvent;
use craft\commerce\services\PaymentSources;
use craft\commerce\models\PaymentSource;
use yii\base\Event;

Event::on(
    PaymentSources::class,
    PaymentSources::EVENT_DELETE_PAYMENT_SOURCE,
    function(PaymentSourceEvent $event) {
        // @var PaymentSource $source
        $source = $event->paymentSource;

        // Warn a user they don’t have any valid payment sources saved
        // ...
    }
);
```



---




