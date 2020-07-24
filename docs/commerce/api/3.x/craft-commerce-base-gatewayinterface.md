---
title: craft\commerce\base\GatewayInterface
code:
  - php
  - twig
---

# GatewayInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Extends

:   [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html)

Implemented by

:   [craft\commerce\base\Gateway](craft-commerce-base-gateway.md), [craft\commerce\base\SubscriptionGateway](craft-commerce-base-subscriptiongateway.md), [craft\commerce\gateways\Dummy](craft-commerce-gateways-dummy.md), [craft\commerce\gateways\Manual](craft-commerce-gateways-manual.md), [craft\commerce\gateways\MissingGateway](craft-commerce-gateways-missinggateway.md)

Since

:   2.0



GatewayInterface defines the common interface to be implemented by gateway classes.

A class implementing this interface should also use `\craft\commerce\base\SavableComponentTrait` and [craft\commerce\base\GatewayTrait](craft-commerce-base-gatewaytrait.md).



[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php)






## Public Methods

| Method                                                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [authorize()](craft-commerce-base-gatewayinterface.md#method-authorize)                                                                                                        | Makes an authorize request.
| [availableForUseWithOrder()](craft-commerce-base-gatewayinterface.md#method-availableforusewithorder)                                                                          | Returns true if gateway supports payments for the supplied order.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [capture()](craft-commerce-base-gatewayinterface.md#method-capture)                                                                                                            | Makes a capture request.
| [completeAuthorize()](craft-commerce-base-gatewayinterface.md#method-completeauthorize)                                                                                        | Complete the authorization for offsite payments.
| [completePurchase()](craft-commerce-base-gatewayinterface.md#method-completepurchase)                                                                                          | Complete the purchase for offsite payments.
| [createPaymentSource()](craft-commerce-base-gatewayinterface.md#method-createpaymentsource)                                                                                    | Creates a payment source from source data and user id.
| [deletePaymentSource()](craft-commerce-base-gatewayinterface.md#method-deletepaymentsource)                                                                                    | Deletes a payment source on the gateway by its token.
| [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getPaymentFormModel()](craft-commerce-base-gatewayinterface.md#method-getpaymentformmodel)                                                                                    | Returns payment form model to use in payment forms.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getTransactionHashFromWebhook()](craft-commerce-base-gatewayinterface.md#method-gettransactionhashfromwebhook)                                                                | Retrieves the transaction hash from the webhook data. This could be a query string param or part of the response data.
| [isSelectable()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [processWebHook()](craft-commerce-base-gatewayinterface.md#method-processwebhook)                                                                                              | Processes a webhook and return a response
| [purchase()](craft-commerce-base-gatewayinterface.md#method-purchase)                                                                                                          | Makes a purchase request.
| [refund()](craft-commerce-base-gatewayinterface.md#method-refund)                                                                                                              | Makes an refund request.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [supportsAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportsauthorize)                                                                                        | Returns true if gateway supports authorize requests.
| [supportsCapture()](craft-commerce-base-gatewayinterface.md#method-supportscapture)                                                                                            | Returns true if gateway supports capture requests.
| [supportsCompleteAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportscompleteauthorize)                                                                        | Returns true if gateway supports completing authorize requests
| [supportsCompletePurchase()](craft-commerce-base-gatewayinterface.md#method-supportscompletepurchase)                                                                          | Returns true if gateway supports completing purchase requests
| [supportsPartialRefund()](craft-commerce-base-gatewayinterface.md#method-supportspartialrefund)                                                                                | Returns true if gateway supports partial refund requests.
| [supportsPaymentSources()](craft-commerce-base-gatewayinterface.md#method-supportspaymentsources)                                                                              | Returns true if gateway supports storing payment sources
| [supportsPurchase()](craft-commerce-base-gatewayinterface.md#method-supportspurchase)                                                                                          | Returns true if gateway supports purchase requests.
| [supportsRefund()](craft-commerce-base-gatewayinterface.md#method-supportsrefund)                                                                                              | Returns true if gateway supports refund requests.
| [supportsWebhooks()](craft-commerce-base-gatewayinterface.md#method-supportswebhooks)                                                                                          | Returns true if gateway supports webhooks.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `authorize()`





Makes an authorize request.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L36)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The authorize transaction
- `$form` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – A form filled with payment info

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `availableForUseWithOrder()`





Returns true if gateway supports payments for the supplied order.

This method is called before a payment is made for the supplied order. It can be
used by developers building a checkout and deciding if this gateway should be shown as
and option to the customer.

It also can prevent a gateway from being used with a particular order.

An example of this can be found in the manual payment gateway: It has a setting that can limit it's use
to only be used with orders that are of a zero value amount. See below for an example of how it uses this
method to reject the gateway's use on orders that are not $0.00 if the setting is turned on

```php
public function availableForUseWithOrder($order): bool
 if ($this->onlyAllowForZeroPriceOrders && $order->getTotalPrice() != 0) {
   return false;
 }
return true;
}
```


[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L205)


#### Arguments

- `$order` – Order The order this gateway can or can not be available for payment with.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `capture()`





Makes a capture request.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L45)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The capture transaction
- `$reference` ([string](http://php.net/language.types.string)) – Reference for the transaction being captured.

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `completeAuthorize()`





Complete the authorization for offsite payments.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L53)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `completePurchase()`





Complete the purchase for offsite payments.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L61)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `createPaymentSource()`





Creates a payment source from source data and user id.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L70)


#### Arguments

- `$sourceData` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md))
- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)



### `deletePaymentSource()`





Deletes a payment source on the gateway by its token.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L78)


#### Arguments

- `$token` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPaymentFormModel()`





Returns payment form model to use in payment forms.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L85)



#### Returns

[craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)



### `getTransactionHashFromWebhook()`



Since

:   3.1.9



Retrieves the transaction hash from the webhook data. This could be a query string
param or part of the response data.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L214)



#### Returns

`mixed`



### `processWebHook()`





Processes a webhook and return a response




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L110)



#### Returns

[craft\web\Response](https://docs.craftcms.com/api/v3/craft-web-response.html)

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if something goes wrong


### `purchase()`





Makes a purchase request.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L94)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The purchase transaction
- `$form` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – A form filled with payment info

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `refund()`





Makes an refund request.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L102)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The refund transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `supportsAuthorize()`





Returns true if gateway supports authorize requests.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L117)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCapture()`





Returns true if gateway supports capture requests.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L124)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCompleteAuthorize()`





Returns true if gateway supports completing authorize requests




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L131)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCompletePurchase()`





Returns true if gateway supports completing purchase requests




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L138)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPartialRefund()`





Returns true if gateway supports partial refund requests.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L166)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPaymentSources()`





Returns true if gateway supports storing payment sources




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L145)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPurchase()`





Returns true if gateway supports purchase requests.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L152)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsRefund()`





Returns true if gateway supports refund requests.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L159)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsWebhooks()`





Returns true if gateway supports webhooks.

If `true` is returned, this show the webhook url
to the person setting up your gateway (after the gateway is saved).
This also affects whether the webhook controller should route webhook requests to your
`processWebHook()` method in this class.


[View source](https://github.com/craftcms/commerce/blob/master/src/base/GatewayInterface.php#L178)



#### Returns

[boolean](http://php.net/language.types.boolean)









