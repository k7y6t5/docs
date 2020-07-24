---
title: craft\queue\Queue
code:
  - php
  - twig
---

# Queue

Type

:   Class

Namespace

:   craft\queue

Inherits

:   [craft\queue\Queue](craft-queue-queue.md) &raquo;
[yii\queue\cli\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php) &raquo;
[yii\queue\Queue](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\queue\QueueInterface](craft-queue-queueinterface.md), [yii\base\BootstrapInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-bootstrapinterface), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Craft Queue





[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)


## Public Properties

| Property                                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attempts](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#$attempts-detail "Defined by yii\queue\Queue")                     | [integer](http://php.net/language.types.integer) – Default attempt count
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                    | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [channel](craft-queue-queue.md#channel)                                                                                                       | [string](http://php.net/language.types.string) – The `channel` column value to the queue should use.
| [commandClass](craft-queue-queue.md#commandclass)                                                                                             | [string](http://php.net/language.types.string) – Command class name
| [commandOptions](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php#$commandOptions-detail "Defined by yii\queue\cli\Queue") | [array](http://php.net/language.types.array) – Of additional options of command
| [db](craft-queue-queue.md#db)                                                                                                                 | [craft\db\Connection](craft-db-connection.md), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The database connection to use
| [hasReservedJobs](craft-queue-queue.md#hasreservedjobs)                                                                                       | [boolean](http://php.net/language.types.boolean)
| [hasWaitingJobs](craft-queue-queue.md#haswaitingjobs)                                                                                         | [boolean](http://php.net/language.types.boolean)
| [jobInfo](craft-queue-queue.md#jobinfo)                                                                                                       | [array](http://php.net/language.types.array)
| [loopConfig](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php#$loopConfig-detail "Defined by yii\queue\cli\Queue")         | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string)
| [mutex](craft-queue-queue.md#mutex)                                                                                                           | [yii\mutex\Mutex](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The mutex component to use
| [mutexTimeout](craft-queue-queue.md#mutextimeout)                                                                                             | [integer](http://php.net/language.types.integer) – The time (in seconds) to wait for mutex locks to be released when attempting to reserve new jobs.
| [progress](craft-queue-queue.md#progress)                                                                                                     | [integer](http://php.net/language.types.integer) – The job progress (1-100)
| [serializer](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#$serializer-detail "Defined by yii\queue\Queue")                 | [yii\queue\serializers\SerializerInterface](https://github.com/yiisoft/yii2-queue/blob/master/src/serializers/SerializerInterface.php), [array](http://php.net/language.types.array)
| [strictJobType](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#$strictJobType-detail "Defined by yii\queue\Queue")           | [boolean](http://php.net/language.types.boolean) – Whether to enable strict job type control.
| [tableName](craft-queue-queue.md#tablename)                                                                                                   | [string](http://php.net/language.types.string) – The table name the queue is stored in.
| [totalDelayed](craft-queue-queue.md#totaldelayed)                                                                                             | [integer](http://php.net/language.types.integer)
| [totalFailed](craft-queue-queue.md#totalfailed)                                                                                               | [integer](http://php.net/language.types.integer)
| [totalJobs](craft-queue-queue.md#totaljobs)                                                                                                   | [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)
| [totalReserved](craft-queue-queue.md#totalreserved)                                                                                           | [integer](http://php.net/language.types.integer)
| [totalWaiting](craft-queue-queue.md#totalwaiting)                                                                                             | [integer](http://php.net/language.types.integer)
| [ttr](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#$ttr-detail "Defined by yii\queue\Queue")                               | [integer](http://php.net/language.types.integer) – Default time to reserve a job
| [workerPid](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#$workerPid-detail "Defined by yii\queue\Queue")                   |

### `channel`



Type

:   [string](http://php.net/language.types.string)

Since

:   3.4.0



The `channel` column value to the queue should use.



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L69)



### `commandClass`



Type

:   [string](http://php.net/language.types.string)





Command class name





[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L74)



### `db`



Type

:   [craft\db\Connection](craft-db-connection.md), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string)

Since

:   3.4.0



The database connection to use



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L46)



### `hasReservedJobs`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `hasWaitingJobs`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `jobInfo`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `mutex`



Type

:   [yii\mutex\Mutex](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string)

Since

:   3.4.0



The mutex component to use



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L52)



### `mutexTimeout`



Type

:   [integer](http://php.net/language.types.integer)



The time (in seconds) to wait for mutex locks to be released when attempting to reserve new jobs.



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L57)



### `progress`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Write-only



The job progress (1-100)



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `tableName`



Type

:   [string](http://php.net/language.types.string)

Since

:   3.4.0



The table name the queue is stored in.



[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L63)



### `totalDelayed`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `totalFailed`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `totalJobs`



Type

:   [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `totalReserved`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)



### `totalWaiting`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php)







## Public Methods

| Method                                                                                                                                           | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                        | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                        | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")              | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                          | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                      | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                          | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                      | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")          | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")        | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                    | Returns a list of behaviors that this component should behave as.
| [bootstrap()](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php#bootstrap()-detail "Defined by yii\queue\cli\Queue")           | Bootstrap method to be called during application bootstrap stage.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")        | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")        | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                  | Returns the fully qualified name of this class.
| [delay()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#delay()-detail "Defined by yii\queue\Queue")                           | Sets delay for later execute.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")          | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")        | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")        | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")              | Returns all behaviors attached to this component.
| [getHasReservedJobs()](craft-queue-queue.md#method-gethasreservedjobs)                                                                           | Returns whether there are any reserved jobs.
| [getHasWaitingJobs()](craft-queue-queue.md#method-gethaswaitingjobs)                                                                             | Returns whether there are any waiting jobs.
| [getJobDetails()](craft-queue-queue.md#method-getjobdetails)                                                                                     | Returns detailed info about a single job.
| [getJobInfo()](craft-queue-queue.md#method-getjobinfo)                                                                                           | Returns info about the jobs in the queue.
| [getTotalDelayed()](craft-queue-queue.md#method-gettotaldelayed)                                                                                 | Returns the total number of delayed jobs
| [getTotalFailed()](craft-queue-queue.md#method-gettotalfailed)                                                                                   | Returns the total number of failed jobs
| [getTotalJobs()](craft-queue-queue.md#method-gettotaljobs)                                                                                       | Returns the total number of jobs in the queue.
| [getTotalReserved()](craft-queue-queue.md#method-gettotalreserved)                                                                               | Returns the total number of reserved jobs
| [getTotalWaiting()](craft-queue-queue.md#method-gettotalwaiting)                                                                                 | Returns the total number of waiting jobs
| [getWorkerPid()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#getWorkerPid()-detail "Defined by yii\queue\Queue")             | Uses for CLI drivers and gets process ID of a worker.
| [handleError()](craft-queue-queue.md#method-handleerror)                                                                                         |
| [handleResponse()](craft-queue-queue.md#method-handleresponse)                                                                                   | Figure out how to initiate a new worker.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")      | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                  | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")              | Returns a value indicating whether a property is defined.
| [init()](craft-queue-queue.md#method-init)                                                                                                       | Initializes the object.
| [isDone()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#isDone()-detail "Defined by yii\queue\Queue")                         |
| [isFailed()](craft-queue-queue.md#method-isfailed)                                                                                               |
| [isReserved()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#isReserved()-detail "Defined by yii\queue\Queue")                 |
| [isWaiting()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#isWaiting()-detail "Defined by yii\queue\Queue")                   |
| [listen()](craft-queue-queue.md#method-listen)                                                                                                   | Listens to the queue and runs new jobs.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                  | Attaches an event handler to an event.
| [priority()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#priority()-detail "Defined by yii\queue\Queue")                     | Sets job priority.
| [push()](craft-queue-queue.md#method-push)                                                                                                       | Pushes job into queue.
| [release()](craft-queue-queue.md#method-release)                                                                                                 | Releases a job from the queue.
| [releaseAll()](craft-queue-queue.md#method-releaseall)                                                                                           | Releases all jobs.
| [retry()](craft-queue-queue.md#method-retry)                                                                                                     | Re-adds a failed job to the queue.
| [retryAll()](craft-queue-queue.md#method-retryall)                                                                                               | Retries all failed jobs.
| [run()](craft-queue-queue.md#method-run)                                                                                                         | Runs all the queued-up jobs.
| [setProgress()](craft-queue-queue.md#method-setprogress)                                                                                         | Sets the progress for the currently reserved job.
| [status()](craft-queue-queue.md#method-status)                                                                                                   |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                        | Triggers an event.
| [ttr()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#ttr()-detail "Defined by yii\queue\Queue")                               | Sets TTR for job execute.
| [unserializeMessage()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#unserializeMessage()-detail "Defined by yii\queue\Queue") | Unserializes.

### `getHasReservedJobs()`





Returns whether there are any reserved jobs.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L299-L305)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHasWaitingJobs()`





Returns whether there are any waiting jobs.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L288-L294)



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




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L362-L389)


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




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L404-L439)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getTotalDelayed()`





Returns the total number of delayed jobs




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L325-L331)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalFailed()`





Returns the total number of failed jobs




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L351-L357)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalJobs()`



Since

:   3.4.0



Returns the total number of jobs in the queue.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L394-L399)



#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `getTotalReserved()`





Returns the total number of reserved jobs




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L338-L344)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalWaiting()`





Returns the total number of waiting jobs




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L312-L318)



#### Returns

[integer](http://php.net/language.types.integer)



### `handleError()`














[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L444-L468)


#### Arguments

- `$event` ([yii\queue\ExecEvent](https://github.com/yiisoft/yii2-queue/blob/master/src/ExecEvent.php))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `handleResponse()`





Figure out how to initiate a new worker.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L473-L526)






### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L99-L113)






### `isFailed()`










[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L143-L146)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – Of a job message

#### Returns

[boolean](http://php.net/language.types.boolean)



### `listen()`





Listens to the queue and runs new jobs.




[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L132-L137)


#### Arguments

- `$delay` ([integer](http://php.net/language.types.integer)) – Number of seconds for waiting new job.




### `push()`





Pushes job into queue.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L165-L188)


#### Arguments

- `$job` ([yii\queue\JobInterface](https://github.com/yiisoft/yii2-queue/blob/master/src/JobInterface.php), `mixed`)

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Id of a job message



### `release()`





Releases a job from the queue.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L249-L254)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))




### `releaseAll()`



Since

:   3.4.0



Releases all jobs.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L259-L264)






### `retry()`





Re-adds a failed job to the queue.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L193-L213)


#### Arguments

- `$id` ([string](http://php.net/language.types.string))




### `retryAll()`



Since

:   3.4.0



Retries all failed jobs.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L218-L244)






### `run()`





Runs all the queued-up jobs.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L118-L125)






### `setProgress()`





Sets the progress for the currently reserved job.








[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L269-L283)


#### Arguments

- `$progress` ([integer](http://php.net/language.types.integer)) – The job progress (1-100)
- `$label` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The progress label




### `status()`










[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L151-L160)


#### Arguments

- `$id`






## Protected Methods

| Method                                                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------
| [getCommandId()](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php#getCommandId()-detail "Defined by yii\queue\cli\Queue") |
| [handleMessage()](https://github.com/yiisoft/yii2-queue/blob/master/src/Queue.php#handleMessage()-detail "Defined by yii\queue\Queue")       |
| [pushMessage()](craft-queue-queue.md#method-pushmessage)                                                                                     |
| [reserve()](craft-queue-queue.md#method-reserve)                                                                                             |
| [runWorker()](https://github.com/yiisoft/yii2-queue/blob/master/src/cli/Queue.php#runWorker()-detail "Defined by yii\queue\cli\Queue")       | Runs worker.

### `pushMessage()`














[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L531-L552)


#### Arguments

- `$message` ([string](http://php.net/language.types.string))
- `$ttr` ([integer](http://php.net/language.types.integer)) – Time to reserve in seconds
- `$delay` ([integer](http://php.net/language.types.integer))
- `$priority` (`mixed`)

#### Returns

[string](http://php.net/language.types.string) – Id of a job message



### `reserve()`










[View source](https://github.com/craftcms/cms/blob/master/src/queue/Queue.php#L558-L602)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The payload, or null if there aren't any jobs to reserve

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case it hasn't waited the lock




## Constants

| Constant          | Description
| ----------------- | -----------
| `STATUS_DONE`     |
| `STATUS_FAILED`   |
| `STATUS_RESERVED` |
| `STATUS_WAITING`  |



