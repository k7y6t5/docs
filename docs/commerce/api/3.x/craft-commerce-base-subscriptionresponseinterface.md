---
title: craft\commerce\base\SubscriptionResponseInterface
code:
  - php
  - twig
---

# SubscriptionResponseInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\models\responses\DummySubscriptionResponse](craft-commerce-models-responses-dummysubscriptionresponse.md)

Since

:   2.0



This interface class functions that a Subscription response needs to implement





[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php)






## Public Methods

| Method                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------
| [getData()](craft-commerce-base-subscriptionresponseinterface.md#method-getdata)                                       | Returns the response data.
| [getNextPaymentDate()](craft-commerce-base-subscriptionresponseinterface.md#method-getnextpaymentdate)                 | Returns the time of next payment.
| [getReference()](craft-commerce-base-subscriptionresponseinterface.md#method-getreference)                             | Returns the subscription reference.
| [getTrialDays()](craft-commerce-base-subscriptionresponseinterface.md#method-gettrialdays)                             | Returns the number of trial days on the subscription.
| [isCanceled()](craft-commerce-base-subscriptionresponseinterface.md#method-iscanceled)                                 | Returns whether the subscription is canceled.
| [isInactive()](craft-commerce-base-subscriptionresponseinterface.md#method-isinactive)                                 | Whether the subscription is unpaid.
| [isScheduledForCancellation()](craft-commerce-base-subscriptionresponseinterface.md#method-isscheduledforcancellation) | Returns whether the subscription is scheduled to be canceled.

### `getData()`





Returns the response data.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L25)



#### Returns

`mixed`



### `getNextPaymentDate()`





Returns the time of next payment.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L46)



#### Returns

[DateTime](http://php.net/class.datetime)



### `getReference()`





Returns the subscription reference.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L32)



#### Returns

[string](http://php.net/language.types.string)



### `getTrialDays()`





Returns the number of trial days on the subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L39)



#### Returns

[integer](http://php.net/language.types.integer)



### `isCanceled()`





Returns whether the subscription is canceled.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L53)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isInactive()`





Whether the subscription is unpaid.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L67)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isScheduledForCancellation()`





Returns whether the subscription is scheduled to be canceled.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionResponseInterface.php#L60)



#### Returns

[boolean](http://php.net/language.types.boolean)









