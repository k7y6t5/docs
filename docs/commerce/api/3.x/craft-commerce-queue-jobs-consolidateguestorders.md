---
title: craft\commerce\queue\jobs\ConsolidateGuestOrders
code:
  - php
  - twig
---

# ConsolidateGuestOrders

Type

:   Class

Namespace

:   craft\commerce\queue\jobs

Inherits

:   [craft\commerce\queue\jobs\ConsolidateGuestOrders](craft-commerce-queue-jobs-consolidateguestorders.md) &raquo;
[craft\queue\BaseJob](https://docs.craftcms.com/api/v3/craft-queue-basejob.html) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\JobInterface](https://docs.craftcms.com/api/v3/craft-queue-jobinterface.html), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0



ConsolidateGuestOrders job





[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/ConsolidateGuestOrders.php)


## Public Properties

| Property                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [description](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#description "Defined by craft\queue\BaseJob") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The configured job description
| [emails](craft-commerce-queue-jobs-consolidateguestorders.md#emails)                                                  | [array](http://php.net/language.types.array)

### `emails`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/ConsolidateGuestOrders.php#L27)







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
| [consolidate()](craft-commerce-queue-jobs-consolidateguestorders.md#method-consolidate)                                                   |
| [execute()](craft-commerce-queue-jobs-consolidateguestorders.md#method-execute)                                                           |
| [getDescription()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-getdescription "Defined by craft\queue\BaseJob")      | Returns the description that should be used for the job.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-init "Defined by craft\queue\BaseJob")                          | Initializes the object.

### `consolidate()`

::: danger DEPRECATED
Deprecated in 3.1.4. Use [craft\commerce\services\Customers::consolidateGuestOrdersByEmail()](craft-commerce-services-customers.md#method-consolidateguestordersbyemail) instead.
:::









[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/ConsolidateGuestOrders.php#L63-L102)


#### Arguments

- `$email`




### `execute()`














[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/ConsolidateGuestOrders.php#L37-L58)


#### Arguments

- `$queue` ([yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php), [craft\queue\QueueInterface](https://docs.craftcms.com/api/v3/craft-queue-queueinterface.html)) – The queue the job belongs to






## Protected Methods

| Method                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------
| [defaultDescription()](craft-commerce-queue-jobs-consolidateguestorders.md#method-defaultdescription)                          | Returns a default description for [getDescription()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-getdescription).
| [setProgress()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-setprogress "Defined by craft\queue\BaseJob") | Sets the job progress on the queue.

### `defaultDescription()`





Returns a default description for [getDescription()](https://docs.craftcms.com/api/v3/craft-queue-basejob.html#method-getdescription).








[View source](https://github.com/craftcms/commerce/blob/master/src/queue/jobs/ConsolidateGuestOrders.php#L107-L110)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)








