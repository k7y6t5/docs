---
title: craft\queue\JobInterface
code:
  - php
  - twig
---

# JobInterface

Type

:   Interface

Namespace

:   craft\queue

Extends

:   [yii\queue\JobInterface](https://github.com/yiisoft/yii2-queue/blob/master/src/JobInterface.php)

Implemented by

:   [craft\queue\BaseJob](craft-queue-basejob.md), [craft\queue\jobs\ApplyMatrixPropagationMethod](craft-queue-jobs-applymatrixpropagationmethod.md), [craft\queue\jobs\ApplyNewPropagationMethod](craft-queue-jobs-applynewpropagationmethod.md), [craft\queue\jobs\ConvertEntryRevisions](craft-queue-jobs-convertentryrevisions.md), [craft\queue\jobs\DeleteStaleTemplateCaches](craft-queue-jobs-deletestaletemplatecaches.md), [craft\queue\jobs\FindAndReplace](craft-queue-jobs-findandreplace.md), [craft\queue\jobs\GeneratePendingTransforms](craft-queue-jobs-generatependingtransforms.md), [craft\queue\jobs\LocalizeRelations](craft-queue-jobs-localizerelations.md), [craft\queue\jobs\PropagateElements](craft-queue-jobs-propagateelements.md), [craft\queue\jobs\ResaveElements](craft-queue-jobs-resaveelements.md), [craft\queue\jobs\UpdateElementSlugsAndUris](craft-queue-jobs-updateelementslugsanduris.md), [craft\queue\jobs\UpdateSearchIndex](craft-queue-jobs-updatesearchindex.md)

Since

:   3.0.0



JobInterface defines the common interface to be implemented by job classes.

A class implementing this interface should also use `\craft\queue\SavableComponentTrait` and `\craft\queue\JobTrait`.



[View source](https://github.com/craftcms/cms/blob/master/src/queue/JobInterface.php)






## Public Methods

| Method                                                                | Description
| --------------------------------------------------------------------- | --------------------------------------------------------
| [execute()](craft-queue-jobinterface.md#method-execute)               |
| [getDescription()](craft-queue-jobinterface.md#method-getdescription) | Returns the description that should be used for the job.

### `execute()`










[View source](https://github.com/craftcms/cms/blob/master/src/queue/JobInterface.php#L29)


#### Arguments

- `$queue` ([yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php), [craft\queue\QueueInterface](craft-queue-queueinterface.md)) – The queue the job belongs to




### `getDescription()`





Returns the description that should be used for the job.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/JobInterface.php#L24)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)









