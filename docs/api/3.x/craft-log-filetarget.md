---
title: craft\log\FileTarget
code:
  - php
  - twig
---

# FileTarget

Type

:   Class

Namespace

:   craft\log

Inherits

:   [craft\log\FileTarget](craft-log-filetarget.md) &raquo;
[yii\log\FileTarget](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget) &raquo;
[yii\log\Target](https://www.yiiframework.com/doc/api/2.0/yii-log-target) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\LogTargetTrait](craft-base-logtargettrait.md)

Since

:   3.0.0



Class FileTarget





[View source](https://github.com/craftcms/cms/blob/master/src/log/FileTarget.php)


## Public Properties

| Property                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [categories](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$categories-detail "Defined by yii\log\Target")                 | [array](http://php.net/language.types.array) – List of message categories that this target is interested in.
| [dirMode](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$dirMode-detail "Defined by yii\log\FileTarget")               | [integer](http://php.net/language.types.integer) – The permission to be set for newly created directories.
| [enableRotation](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$enableRotation-detail "Defined by yii\log\FileTarget") | [boolean](http://php.net/language.types.boolean) – Whether log files should be rotated when they reach a certain [maximum size](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$maxFileSize-detail).
| [enabled](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$enabled-detail "Defined by yii\log\Target")                       | [boolean](http://php.net/language.types.boolean) – A value indicating whether this log target is enabled.
| [except](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$except-detail "Defined by yii\log\Target")                         | [array](http://php.net/language.types.array) – List of message categories that this target is NOT interested in.
| [exportInterval](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$exportInterval-detail "Defined by yii\log\Target")         | [integer](http://php.net/language.types.integer) – How many messages should be accumulated before they are exported.
| [fileMode](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$fileMode-detail "Defined by yii\log\FileTarget")             | [integer](http://php.net/language.types.integer) – The permission to be set for newly created log files.
| [includeUserIp](craft-base-logtargettrait.md#includeuserip "Defined by craft\base\LogTargetTrait")                                   | [boolean](http://php.net/language.types.boolean) – Whether the user IP should be included in the default log prefix.
| [levels](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$levels-detail "Defined by yii\log\Target")                         | [integer](http://php.net/language.types.integer) – The message levels that this target is interested in.
| [logFile](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$logFile-detail "Defined by yii\log\FileTarget")               | [string](http://php.net/language.types.string) – Log file path or [path alias](guide:concept-aliases).
| [logVars](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$logVars-detail "Defined by yii\log\Target")                       | [array](http://php.net/language.types.array) – List of the PHP predefined variables that should be logged in a message.
| [maskVars](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$maskVars-detail "Defined by yii\log\Target")                     | [array](http://php.net/language.types.array) – List of the PHP predefined variables that should NOT be logged "as is" and should always be replaced with a mask `***` before logging, when exist.
| [maxFileSize](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$maxFileSize-detail "Defined by yii\log\FileTarget")       | [integer](http://php.net/language.types.integer) – Maximum log file size, in kilo-bytes.
| [maxLogFiles](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$maxLogFiles-detail "Defined by yii\log\FileTarget")       | [integer](http://php.net/language.types.integer) – Number of log files used for rotation.
| [messages](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$messages-detail "Defined by yii\log\Target")                     | [array](http://php.net/language.types.array) – The messages that are retrieved from the logger so far by this log target.
| [microtime](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$microtime-detail "Defined by yii\log\Target")                   | [boolean](http://php.net/language.types.boolean) – Whether to log time with microseconds.
| [prefix](https://www.yiiframework.com/doc/api/2.0/yii-log-target#$prefix-detail "Defined by yii\log\Target")                         | [callable](http://php.net/language.types.callable) – A PHP callable that returns a string to be prefixed to every exported message.
| [rotateByCopy](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#$rotateByCopy-detail "Defined by yii\log\FileTarget")     | [boolean](http://php.net/language.types.boolean) – Whether to rotate log files by copy and truncate in contrast to rotation by renaming files.





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
| [collect()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#collect()-detail "Defined by yii\log\Target")                           | Processes the given log messages.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [export()](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#export()-detail "Defined by yii\log\FileTarget")                     | Writes log messages to a file.
| [filterMessages()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#filterMessages()-detail "Defined by yii\log\Target")             | Filters the given messages according to their categories and levels.
| [formatMessage()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#formatMessage()-detail "Defined by yii\log\Target")               | Formats a log message for display as a string.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEnabled()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#getEnabled()-detail "Defined by yii\log\Target")                     | Check whether the log target is enabled.
| [getLevels()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#getLevels()-detail "Defined by yii\log\Target")                       |
| [getMessagePrefix()](craft-base-logtargettrait.md#method-getmessageprefix "Defined by craft\base\LogTargetTrait")                           | Returns a string to be prefixed to the given message.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [setEnabled()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#setEnabled()-detail "Defined by yii\log\Target")                     | Sets a value indicating whether this log target is enabled.
| [setLevels()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#setLevels()-detail "Defined by yii\log\Target")                       | Sets the message levels that this target is interested in.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.



## Protected Methods

| Method                                                                                                                            | Description
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------
| [getContextMessage()](craft-base-logtargettrait.md#method-getcontextmessage "Defined by craft\base\LogTargetTrait")               | Generates the context information to be logged.
| [getTime()](https://www.yiiframework.com/doc/api/2.0/yii-log-target#getTime()-detail "Defined by yii\log\Target")                 | Returns formatted ('Y-m-d H:i:s') timestamp for message.
| [rotateFiles()](https://www.yiiframework.com/doc/api/2.0/yii-log-filetarget#rotateFiles()-detail "Defined by yii\log\FileTarget") | Rotates log files.






