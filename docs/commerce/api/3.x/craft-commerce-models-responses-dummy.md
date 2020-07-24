---
title: craft\commerce\models\responses\Dummy
code:
  - php
  - twig
---

# Dummy

Type

:   Class

Namespace

:   craft\commerce\models\responses

Inherits

:   [craft\commerce\models\responses\Dummy](craft-commerce-models-responses-dummy.md)

Implements

:   [craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)

Since

:   2.0



This is a dummy gateway request response.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php)






## Public Methods

| Method                                                                                               | Description
| ---------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------
| [__construct()](craft-commerce-models-responses-dummy.md#method-construct)                           |
| [getCode()](craft-commerce-models-responses-dummy.md#method-getcode)                                 | Returns the response code.
| [getData()](craft-commerce-models-responses-dummy.md#method-getdata)                                 | Returns the data.
| [getMessage()](craft-commerce-models-responses-dummy.md#method-getmessage)                           | Returns the gateway message.
| [getRedirectData()](craft-commerce-models-responses-dummy.md#method-getredirectdata)                 | Returns the redirect data provided.
| [getRedirectMethod()](craft-commerce-models-responses-dummy.md#method-getredirectmethod)             | Returns the redirect method to use, if any.
| [getRedirectUrl()](craft-commerce-models-responses-dummy.md#method-getredirecturl)                   | Returns the redirect URL to use, if any.
| [getTransactionReference()](craft-commerce-models-responses-dummy.md#method-gettransactionreference) | Returns the transaction reference.
| [isProcessing()](craft-commerce-models-responses-dummy.md#method-isprocessing)                       | Returns whether or not the payment is being processed by gateway.
| [isRedirect()](craft-commerce-models-responses-dummy.md#method-isredirect)                           | Returns whether or not the user needs to be redirected.
| [isSuccessful()](craft-commerce-models-responses-dummy.md#method-issuccessful)                       | Returns whether or not the payment was successful.
| [redirect()](craft-commerce-models-responses-dummy.md#method-redirect)                               | Perform the redirect.

### `__construct()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L25-L43)


#### Arguments

- `$form`




### `getCode()`





Returns the response code.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L96-L99)



#### Returns

[string](http://php.net/language.types.string)



### `getData()`





Returns the data.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L120-L123)



#### Returns

`mixed`



### `getMessage()`





Returns the gateway message.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L104-L107)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectData()`





Returns the redirect data provided.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L72-L75)



#### Returns

[array](http://php.net/language.types.array)



### `getRedirectMethod()`





Returns the redirect method to use, if any.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L64-L67)



#### Returns

[string](http://php.net/language.types.string)



### `getRedirectUrl()`





Returns the redirect URL to use, if any.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L80-L83)



#### Returns

[string](http://php.net/language.types.string)



### `getTransactionReference()`





Returns the transaction reference.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L88-L91)



#### Returns

[string](http://php.net/language.types.string)



### `isProcessing()`





Returns whether or not the payment is being processed by gateway.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L128-L131)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isRedirect()`





Returns whether or not the user needs to be redirected.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L56-L59)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSuccessful()`





Returns whether or not the payment was successful.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L48-L51)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `redirect()`





Perform the redirect.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/responses/Dummy.php#L112-L115)



#### Returns

`mixed`










