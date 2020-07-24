---
title: craft\services\Deprecator
code:
  - php
  - twig
---

# Deprecator

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Deprecator](craft-services-deprecator.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Deprecator service.

An instance of the Deprecator service is globally accessible in Craft via [`Craft::$app->deprecator`](craft-base-applicationtrait.md#method-getdeprecator).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [logTarget](craft-services-deprecator.md#logtarget)                                                                        | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – Whether deprecation errors should be logged in the database ('db'), error logs ('logs'), or not at all (false).
| [logs](craft-services-deprecator.md#logs)                                                                                  | [craft\models\DeprecationError](craft-models-deprecationerror.md)[]
| [requestLogs](craft-services-deprecator.md#requestlogs)                                                                    | [craft\models\DeprecationError](craft-models-deprecationerror.md)[]
| [throwExceptions](craft-services-deprecator.md#throwexceptions)                                                            | [boolean](http://php.net/language.types.boolean) – Whether deprecation warnings should throw exceptions rather than being logged.
| [totalLogs](craft-services-deprecator.md#totallogs)                                                                        | [integer](http://php.net/language.types.integer)

### `logTarget`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Since

:   3.0.7



Whether deprecation errors should be logged in the database ('db'),
error logs ('logs'), or not at all (false).

Changing this will prevent deprecation errors from showing up in the "Deprecation Warnings" utility
or in the "Deprecated" panel in the Debug Toolbar.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L50)



### `logs`



Type

:   [craft\models\DeprecationError](craft-models-deprecationerror.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php)



### `requestLogs`



Type

:   [craft\models\DeprecationError](craft-models-deprecationerror.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php)



### `throwExceptions`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.18



Whether deprecation warnings should throw exceptions rather than being logged.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L39)



### `totalLogs`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteAllLogs()](craft-services-deprecator.md#method-deletealllogs)                                                                        | Deletes all logs.
| [deleteLogById()](craft-services-deprecator.md#method-deletelogbyid)                                                                        | Deletes a log by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getLogById()](craft-services-deprecator.md#method-getlogbyid)                                                                              | Returns a log by its ID.
| [getLogs()](craft-services-deprecator.md#method-getlogs)                                                                                    | Get 'em all.
| [getRequestLogs()](craft-services-deprecator.md#method-getrequestlogs)                                                                      | Returns the deprecation errors that were logged in the current request.
| [getTotalLogs()](craft-services-deprecator.md#method-gettotallogs)                                                                          | Returns the total number of deprecation errors that have been logged.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-services-deprecator.md#method-init)                                                                                          | Initializes the object.
| [log()](craft-services-deprecator.md#method-log)                                                                                            | Logs a new deprecation error.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [storeLogs()](craft-services-deprecator.md#method-storelogs)                                                                                | Stores all the deprecation warnings that were logged in this request.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteAllLogs()`





Deletes all logs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L233-L240)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteLogById()`





Deletes a log by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L219-L226)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLogById()`





Returns a log by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L204-L211)


#### Arguments

- `$logId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\DeprecationError](craft-models-deprecationerror.md), [null](http://php.net/language.types.null)



### `getLogs()`





Get 'em all.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L178-L196)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\models\DeprecationError](craft-models-deprecationerror.md)[]



### `getRequestLogs()`





Returns the deprecation errors that were logged in the current request.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L155-L158)



#### Returns

[craft\models\DeprecationError](craft-models-deprecationerror.md)[]



### `getTotalLogs()`





Returns the total number of deprecation errors that have been logged.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L165-L170)



#### Returns

[integer](http://php.net/language.types.integer)



### `init()`



Since

:   3.4.12



Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L66-L73)






### `log()`





Logs a new deprecation error.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L84-L113)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))
- `$message` ([string](http://php.net/language.types.string))
- `$file` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$line` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))


#### Throws

- [craft\errors\DeprecationException](craft-errors-deprecationexception.md)


### `storeLogs()`



Since

:   3.4.12



Stores all the deprecation warnings that were logged in this request.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Deprecator.php#L120-L148)













