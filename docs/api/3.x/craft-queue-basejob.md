---
title: craft\queue\BaseJob
code:
  - php
  - twig
---

# BaseJob

Type

:   Abstract Class

Namespace

:   craft\queue

Inherits

:   [craft\queue\BaseJob](craft-queue-basejob.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\JobInterface](craft-queue-jobinterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Extended by

:   [craft\queue\jobs\ApplyMatrixPropagationMethod](craft-queue-jobs-applymatrixpropagationmethod.md), [craft\queue\jobs\ApplyNewPropagationMethod](craft-queue-jobs-applynewpropagationmethod.md), [craft\queue\jobs\ConvertEntryRevisions](craft-queue-jobs-convertentryrevisions.md), [craft\queue\jobs\DeleteStaleTemplateCaches](craft-queue-jobs-deletestaletemplatecaches.md), [craft\queue\jobs\FindAndReplace](craft-queue-jobs-findandreplace.md), [craft\queue\jobs\GeneratePendingTransforms](craft-queue-jobs-generatependingtransforms.md), [craft\queue\jobs\LocalizeRelations](craft-queue-jobs-localizerelations.md), [craft\queue\jobs\PropagateElements](craft-queue-jobs-propagateelements.md), [craft\queue\jobs\ResaveElements](craft-queue-jobs-resaveelements.md), [craft\queue\jobs\UpdateElementSlugsAndUris](craft-queue-jobs-updateelementslugsanduris.md), [craft\queue\jobs\UpdateSearchIndex](craft-queue-jobs-updatesearchindex.md)

Since

:   3.0.0



Job is the base class for classes representing jobs in terms of objects.





[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php)


## Public Properties

| Property                                          | Description
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [description](craft-queue-basejob.md#description) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The configured job description

### `description`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The configured job description



[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php#L23)







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
| [execute()](craft-queue-jobinterface.md#method-execute "Defined by craft\queue\JobInterface")                                             |
| [getDescription()](craft-queue-basejob.md#method-getdescription)                                                                          | Returns the description that should be used for the job.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-queue-basejob.md#method-init)                                                                                              | Initializes the object.

### `getDescription()`





Returns the description that should be used for the job.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php#L49-L52)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php#L38-L44)








## Protected Methods

| Method                                                                   | Description
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------
| [defaultDescription()](craft-queue-basejob.md#method-defaultdescription) | Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).
| [setProgress()](craft-queue-basejob.md#method-setprogress)               | Sets the job progress on the queue.

### `defaultDescription()`





Returns a default description for [getDescription()](craft-queue-basejob.md#method-getdescription).




[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php#L59-L62)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `setProgress()`





Sets the job progress on the queue.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/BaseJob.php#L71-L90)


#### Arguments

- `$queue` ([yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php), [craft\queue\QueueInterface](craft-queue-queueinterface.md))
- `$progress` ([float](http://php.net/language.types.float)) – A number between 0 and 1
- `$label` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The progress label









