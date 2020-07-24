---
title: craft\commerce\base\RequestResponseInterface
code:
  - php
  - twig
---

# RequestResponseInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\models\responses\Dummy](craft-commerce-models-responses-dummy.md), [craft\commerce\models\responses\Manual](craft-commerce-models-responses-manual.md)

Since

:   2.0



This interface class functions that a Commerce Payment needs to implement.





[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php)






## Public Methods

| Method                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------
| [getCode()](craft-commerce-base-requestresponseinterface.md#method-getcode)                                 | Returns the response code.
| [getData()](craft-commerce-base-requestresponseinterface.md#method-getdata)                                 | Returns the data.
| [getMessage()](craft-commerce-base-requestresponseinterface.md#method-getmessage)                           | Returns the gateway message.
| [getRedirectData()](craft-commerce-base-requestresponseinterface.md#method-getredirectdata)                 | Returns the redirect data provided.
| [getRedirectMethod()](craft-commerce-base-requestresponseinterface.md#method-getredirectmethod)             | Returns the redirect method to use, if any.
| [getRedirectUrl()](craft-commerce-base-requestresponseinterface.md#method-getredirecturl)                   | Returns the redirect URL to use, if any.
| [getTransactionReference()](craft-commerce-base-requestresponseinterface.md#method-gettransactionreference) | Returns the transaction reference.
| [isProcessing()](craft-commerce-base-requestresponseinterface.md#method-isprocessing)                       | Returns whether or not the payment is being processed by gateway.
| [isRedirect()](craft-commerce-base-requestresponseinterface.md#method-isredirect)                           | Returns whether or not the user needs to be redirected.
| [isSuccessful()](craft-commerce-base-requestresponseinterface.md#method-issuccessful)                       | Returns whether or not the payment was successful.
| [redirect()](craft-commerce-base-requestresponseinterface.md#method-redirect)                               | Perform the redirect.

### `getCode()`





Returns the response code.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L72)



#### Returns

[string](http://php.net/language.types.string)



### `getData()`





Returns the data.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L79)



#### Returns

`mixed`



### `getMessage()`





Returns the gateway message.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L86)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectData()`





Returns the redirect data provided.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L51)



#### Returns

[array](http://php.net/language.types.array)



### `getRedirectMethod()`





Returns the redirect method to use, if any.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L44)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectUrl()`





Returns the redirect URL to use, if any.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L58)



#### Returns

[string](http://php.net/language.types.string)



### `getTransactionReference()`





Returns the transaction reference.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L65)



#### Returns

[string](http://php.net/language.types.string)



### `isProcessing()`





Returns whether or not the payment is being processed by gateway.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L30)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isRedirect()`





Returns whether or not the user needs to be redirected.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L37)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSuccessful()`





Returns whether or not the payment was successful.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L23)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `redirect()`





Perform the redirect.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/RequestResponseInterface.php#L93)



#### Returns

`mixed`









