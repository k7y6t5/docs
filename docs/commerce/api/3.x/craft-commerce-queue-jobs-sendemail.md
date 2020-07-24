---
title: craft\commerce\queue\jobs\SendEmail
code:
  - php
  - twig
---

# SendEmail

Type

:   Class

Namespace

:   craft\commerce\queue\jobs

Inherits

:   [craft\commerce\queue\jobs\SendEmail](craft-commerce-queue-jobs-sendemail.md) &raquo;
[craft\queue\BaseJob](https://docs.craftcms.com/api/v3/craft-queue-basejob.html) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\JobInterface](https://docs.craftcms.com/api/v3/craft-queue-jobinterface.html), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)









[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php)


## Public Properties

| Property                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [commerceEmailId](craft-commerce-queue-jobs-sendemail.md#commerceemailid)                                             | [integer](http://php.net/language.types.integer) – The commerce email ID
| [description](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#description "Defined by craft\queue\BaseJob") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The configured job description
| [orderData](craft-commerce-queue-jobs-sendemail.md#orderdata)                                                         | [array](http://php.net/language.types.array) – Order Data at time of order status change
| [orderHistoryId](craft-commerce-queue-jobs-sendemail.md#orderhistoryid)                                               | [integer](http://php.net/language.types.integer) – The order history ID
| [orderId](craft-commerce-queue-jobs-sendemail.md#orderid)                                                             | [integer](http://php.net/language.types.integer) – Order ID

### `commerceEmailId`



Type

:   [integer](http://php.net/language.types.integer)



The commerce email ID



[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L29)



### `orderData`



Type

:   [array](http://php.net/language.types.array)



Order Data at time of order status change



[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L24)



### `orderHistoryId`



Type

:   [integer](http://php.net/language.types.integer)



The order history ID



[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L34)



### `orderId`



Type

:   [integer](http://php.net/language.types.integer)



Order ID



[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L19)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [execute()](craft-commerce-queue-jobs-sendemail.md#method-execute)                                                                        |
| [getDescription()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-getdescription "Defined by craft\queue\BaseJob")      | Returns the description that should be used for the job.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-init "Defined by craft\queue\BaseJob")                          | Initializes the object.

### `execute()`










[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L38-L51)


#### Arguments

- `$queue`






## Protected Methods

| Method                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------
| [defaultDescription()](craft-commerce-queue-jobs-sendemail.md#method-defaultdescription)                                       |
| [setProgress()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-setprogress "Defined by craft\queue\BaseJob") | Sets the job progress on the queue.

### `defaultDescription()`










[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/SendEmail.php#L54-L57)











