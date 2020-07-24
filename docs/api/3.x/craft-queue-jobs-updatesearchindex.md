---
title: craft\queue\jobs\UpdateSearchIndex
code:
  - php
  - twig
---

# UpdateSearchIndex

Type

:   Class

Namespace

:   craft\queue\jobs

Inherits

:   [craft\queue\jobs\UpdateSearchIndex](craft-queue-jobs-updatesearchindex.md) &raquo;
[craft\queue\BaseJob](craft-queue-basejob.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\JobInterface](craft-queue-jobinterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



UpdateSearchIndex job





[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php)


## Public Properties

| Property                                                                           | Description
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [description](craft-queue-basejob.md#description "Defined by craft\queue\BaseJob") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The configured job description
| [elementId](craft-queue-jobs-updatesearchindex.md#elementid)                       | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The ID(s) of the element(s) to update
| [elementType](craft-queue-jobs-updatesearchindex.md#elementtype)                   | [string](http://php.net/language.types.string), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The type of elements to update.
| [fieldHandles](craft-queue-jobs-updatesearchindex.md#fieldhandles)                 | [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The field handles that should be indexed
| [siteId](craft-queue-jobs-updatesearchindex.md#siteid)                             | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The site ID of the elements to update, or `'*'` to update all sites

### `elementId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The ID(s) of the element(s) to update



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L31)



### `elementType`



Type

:   [string](http://php.net/language.types.string), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The type of elements to update.



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L26)



### `fieldHandles`



Type

:   [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)

Since

:   3.4.0



The field handles that should be indexed



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L42)



### `siteId`



Type

:   [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The site ID of the elements to update, or `'*'` to update all sites



[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L36)







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
| [execute()](craft-queue-jobs-updatesearchindex.md#method-execute)                                                                         |
| [getDescription()](craft-queue-basejob.md#method-getdescription "Defined by craft\queue\BaseJob")                                         | Returns the description that should be used for the job.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-queue-basejob.md#method-init "Defined by craft\queue\BaseJob")                                                             | Initializes the object.

### `execute()`














[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L47-L63)


#### Arguments

- `$queue` ([yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php), [craft\queue\QueueInterface](craft-queue-queueinterface.md)) – The queue the job belongs to






## Protected Methods

| Method                                                                                      | Description
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------
| [defaultDescription()](craft-queue-jobs-updatesearchindex.md#method-defaultdescription)     | Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).
| [setProgress()](craft-queue-basejob.md#method-setprogress "Defined by craft\queue\BaseJob") | Sets the job progress on the queue.

### `defaultDescription()`





Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).








[View source](https://github.com/craftcms/cms/blob/master/src/queue/jobs/UpdateSearchIndex.php#L68-L71)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)








