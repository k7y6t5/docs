---
title: craft\queue\QueueInterface
code:
  - php
  - twig
---

# QueueInterface

Type

:   Interface

Namespace

:   craft\queue

Implemented by

:   [craft\queue\Queue](craft-queue-queue.md)

Since

:   3.0.0



QueueInterface defines the common interface to be implemented by queue classes.





[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php)






## Public Methods

| Method                                                                          | Description
| ------------------------------------------------------------------------------- | -------------------------------------------------
| [getHasReservedJobs()](craft-queue-queueinterface.md#method-gethasreservedjobs) | Returns whether there are any reserved jobs.
| [getHasWaitingJobs()](craft-queue-queueinterface.md#method-gethaswaitingjobs)   | Returns whether there are any waiting jobs.
| [getJobDetails()](craft-queue-queueinterface.md#method-getjobdetails)           | Returns detailed info about a single job.
| [getJobInfo()](craft-queue-queueinterface.md#method-getjobinfo)                 | Returns info about the jobs in the queue.
| [getTotalJobs()](craft-queue-queueinterface.md#method-gettotaljobs)             | Returns the total number of jobs in the queue.
| [release()](craft-queue-queueinterface.md#method-release)                       | Releases a job from the queue.
| [releaseAll()](craft-queue-queueinterface.md#method-releaseall)                 | Releases all jobs.
| [retry()](craft-queue-queueinterface.md#method-retry)                           | Re-adds a failed job to the queue.
| [retryAll()](craft-queue-queueinterface.md#method-retryall)                     | Retries all failed jobs.
| [run()](craft-queue-queueinterface.md#method-run)                               | Runs all the queued-up jobs.
| [setProgress()](craft-queue-queueinterface.md#method-setprogress)               | Sets the progress for the currently reserved job.

### `getHasReservedJobs()`





Returns whether there are any reserved jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L73)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHasWaitingJobs()`





Returns whether there are any waiting jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L66)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getJobDetails()`



Since

:   3.4.0



Returns detailed info about a single job.

The response array can contain the following keys:

- `status` – the job status (1 = waiting, 2 = reserved, 3 = done, 4 = failed)
- `progress` – the job progress (0-100)
- `description` – the job description
- `ttr` – the job’s time-to-reserve, in seconds
- `error` – the error message (if the job failed)
- `job` – the deserialized job

Any other key/value pairs are allowed and will be displayed on the details page.


[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L118)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $id is an invalid job ID


### `getJobInfo()`





Returns info about the jobs in the queue.

The response array should have sub-arrays with the following keys:

- `id` – the job ID
- `status` – the job status (1 = waiting, 2 = reserved, 3 = done, 4 = failed)
- `progress` – the job progress (0-100)
- `description` – the job description
- `error` – the error message (if the job failed)


[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L97)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getTotalJobs()`



Since

:   3.4.0



Returns the total number of jobs in the queue.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L81)



#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `release()`





Releases a job from the queue.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L51)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))




### `releaseAll()`



Since

:   3.4.0



Releases all jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L44)






### `retry()`





Re-adds a failed job to the queue.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L30)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))




### `retryAll()`



Since

:   3.4.0



Retries all failed jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L37)






### `run()`





Runs all the queued-up jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L23)






### `setProgress()`





Sets the progress for the currently reserved job.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/QueueInterface.php#L59)


#### Arguments

- `$progress` ([integer](http://php.net/language.types.integer)) – The job progress (1-100)
- `$label` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The progress label










