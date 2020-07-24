---
title: craft\commerce\models\responses\DummySubscriptionResponse
code:
  - php
  - twig
---

# DummySubscriptionResponse

Type

:   Class

Namespace

:   craft\commerce\models\responses

Inherits

:   [craft\commerce\models\responses\DummySubscriptionResponse](craft-commerce-models-responses-dummysubscriptionresponse.md)

Implements

:   [craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)

Since

:   2.0



This is a dummy gateway request response.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php)






## Public Methods

| Method                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------
| [getData()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-getdata)                                       | Returns the response data.
| [getNextPaymentDate()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-getnextpaymentdate)                 | Returns the time of next payment.
| [getReference()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-getreference)                             | Returns the subscription reference.
| [getTrialDays()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-gettrialdays)                             | Returns the number of trial days on the subscription.
| [isCanceled()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-iscanceled)                                 | Returns whether the subscription is canceled.
| [isInactive()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-isinactive)                                 | Whether the subscription is unpaid.
| [isScheduledForCancellation()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-isscheduledforcancellation) | Returns whether the subscription is scheduled to be canceled.
| [setIsCanceled()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-setiscanceled)                           |
| [setTrialDays()](craft-commerce-models-responses-dummysubscriptionresponse.md#method-settrialdays)                             |

### `getData()`





Returns the response data.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L52-L55)



#### Returns

`mixed`



### `getNextPaymentDate()`





Returns the time of next payment.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L76-L79)



#### Returns

[DateTime](http://php.net/class.datetime)



### `getReference()`





Returns the subscription reference.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L60-L63)



#### Returns

[string](http://php.net/language.types.string)



### `getTrialDays()`





Returns the number of trial days on the subscription.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L68-L71)



#### Returns

[integer](http://php.net/language.types.integer)



### `isCanceled()`





Returns whether the subscription is canceled.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L84-L87)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isInactive()`





Whether the subscription is unpaid.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L100-L103)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isScheduledForCancellation()`





Returns whether the subscription is scheduled to be canceled.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L92-L95)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `setIsCanceled()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L36-L39)


#### Arguments

- `$isCanceled`




### `setTrialDays()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/DummySubscriptionResponse.php#L44-L47)


#### Arguments

- `$trialDays`











