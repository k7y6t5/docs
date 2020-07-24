---
title: craft\queue\jobs\ApplyNewPropagationMethod
code:
  - php
  - twig
---

# ApplyNewPropagationMethod

Type

:   Class

Namespace

:   craft\queue\jobs

Inherits

:   [craft\queue\jobs\ApplyNewPropagationMethod](craft-queue-jobs-applynewpropagationmethod.md) &raquo;
[craft\queue\BaseJob](craft-queue-basejob.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\JobInterface](craft-queue-jobinterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.4.8



ApplyNewPropagationMethod loads all elements that match a given criteria,
and resaves them to apply a new propagation method to them, duplicating them for any sites
where they would have been deleted in the process.





[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/ApplyNewPropagationMethod.php)


## Public Properties

| Property                                                                           | Description
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [criteria](craft-queue-jobs-applynewpropagationmethod.md#criteria)                 | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The element criteria that determines which elements the new propagation method should be applied to
| [description](craft-queue-basejob.md#description "Defined by craft\queue\BaseJob") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The configured job description
| [elementType](craft-queue-jobs-applynewpropagationmethod.md#elementtype)           | [string](http://php.net/language.types.string), [craft\base\ElementInterface](craft-base-elementinterface.md) – The element type to use

### `criteria`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The element criteria that determines which elements the
new propagation method should be applied to



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/ApplyNewPropagationMethod.php#L40)



### `elementType`



Type

:   [string](http://php.net/language.types.string), [craft\base\ElementInterface](craft-base-elementinterface.md)



The element type to use



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/ApplyNewPropagationMethod.php#L34)







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
| [execute()](craft-queue-jobs-applynewpropagationmethod.md#method-execute)                                                                 |
| [getDescription()](craft-queue-basejob.md#method-getdescription "Defined by craft\queue\BaseJob")                                         | Returns the description that should be used for the job.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-queue-basejob.md#method-init "Defined by craft\queue\BaseJob")                                                             | Initializes the object.

### `execute()`














[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/ApplyNewPropagationMethod.php#L45-L111)


#### Arguments

- `$queue` ([yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php), [craft\queue\QueueInterface](craft-queue-queueinterface.md)) – The queue the job belongs to






## Protected Methods

| Method                                                                                          | Description
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------
| [defaultDescription()](craft-queue-jobs-applynewpropagationmethod.md#method-defaultdescription) | Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).
| [setProgress()](craft-queue-basejob.md#method-setprogress "Defined by craft\queue\BaseJob")     | Sets the job progress on the queue.

### `defaultDescription()`





Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).








[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/ApplyNewPropagationMethod.php#L116-L119)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)








