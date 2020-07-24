---
title: craft\commerce\models\responses\Manual
code:
  - php
  - twig
---

# Manual

Type

:   Class

Namespace

:   craft\commerce\models\responses

Inherits

:   [craft\commerce\models\responses\Manual](craft-commerce-models-responses-manual.md)

Implements

:   [craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)

Since

:   2.0



This is a dummy gateway request response.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php)






## Public Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------
| [getCode()](craft-commerce-models-responses-manual.md#method-getcode)                                 | Returns the response code.
| [getData()](craft-commerce-models-responses-manual.md#method-getdata)                                 | Returns the data.
| [getMessage()](craft-commerce-models-responses-manual.md#method-getmessage)                           | Returns the gateway message.
| [getRedirectData()](craft-commerce-models-responses-manual.md#method-getredirectdata)                 | Returns the redirect data provided.
| [getRedirectMethod()](craft-commerce-models-responses-manual.md#method-getredirectmethod)             | Returns the redirect method to use, if any.
| [getRedirectUrl()](craft-commerce-models-responses-manual.md#method-getredirecturl)                   | Returns the redirect URL to use, if any.
| [getTransactionReference()](craft-commerce-models-responses-manual.md#method-gettransactionreference) | Returns the transaction reference.
| [isProcessing()](craft-commerce-models-responses-manual.md#method-isprocessing)                       | Returns whether or not the payment is being processed by gateway.
| [isRedirect()](craft-commerce-models-responses-manual.md#method-isredirect)                           | Returns whether or not the user needs to be redirected.
| [isSuccessful()](craft-commerce-models-responses-manual.md#method-issuccessful)                       | Returns whether or not the payment was successful.
| [redirect()](craft-commerce-models-responses-manual.md#method-redirect)                               | Perform the redirect.

### `getCode()`





Returns the response code.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L71-L74)



#### Returns

[string](http://php.net/language.types.string)



### `getData()`





Returns the data.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L95-L98)



#### Returns

`mixed`



### `getMessage()`





Returns the gateway message.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L79-L82)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectData()`





Returns the redirect data provided.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L47-L50)



#### Returns

[array](http://php.net/language.types.array)



### `getRedirectMethod()`





Returns the redirect method to use, if any.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L39-L42)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectUrl()`





Returns the redirect URL to use, if any.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L55-L58)



#### Returns

[string](http://php.net/language.types.string)



### `getTransactionReference()`





Returns the transaction reference.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L63-L66)



#### Returns

[string](http://php.net/language.types.string)



### `isProcessing()`





Returns whether or not the payment is being processed by gateway.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L103-L106)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isRedirect()`





Returns whether or not the user needs to be redirected.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L31-L34)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSuccessful()`





Returns whether or not the payment was successful.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L23-L26)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `redirect()`





Perform the redirect.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Manual.php#L87-L90)



#### Returns

`mixed`










