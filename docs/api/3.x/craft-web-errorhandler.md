---
title: craft\web\ErrorHandler
code:
  - php
  - twig
---

# ErrorHandler

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\ErrorHandler](craft-web-errorhandler.md) &raquo;
[yii\web\ErrorHandler](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler) &raquo;
[yii\base\ErrorHandler](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class ErrorHandler





[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php)


## Public Properties

| Property                                                                                                                                                 | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                               | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [callStackItemView](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$callStackItemView-detail "Defined by yii\web\ErrorHandler")           | [string](http://php.net/language.types.string) – The path of the view file for rendering exceptions and errors call stack element.
| [discardExistingOutput](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#$discardExistingOutput-detail "Defined by yii\base\ErrorHandler") | [boolean](http://php.net/language.types.boolean) – Whether to discard any existing page output before error display.
| [displayVars](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$displayVars-detail "Defined by yii\web\ErrorHandler")                       | [array](http://php.net/language.types.array) – List of the PHP predefined variables that should be displayed on the error page.
| [errorAction](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$errorAction-detail "Defined by yii\web\ErrorHandler")                       | [string](http://php.net/language.types.string) – The route (e.g. `site/error`) to the controller action that will be used to display external errors.
| [errorView](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$errorView-detail "Defined by yii\web\ErrorHandler")                           | [string](http://php.net/language.types.string) – The path of the view file for rendering exceptions without call stack information.
| [exception](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#$exception-detail "Defined by yii\base\ErrorHandler")                         | [Exception](http://php.net/class.exception), [null](http://php.net/language.types.null) – The exception that is being handled currently.
| [exceptionView](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$exceptionView-detail "Defined by yii\web\ErrorHandler")                   | [string](http://php.net/language.types.string) – The path of the view file for rendering exceptions.
| [maxSourceLines](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$maxSourceLines-detail "Defined by yii\web\ErrorHandler")                 | [integer](http://php.net/language.types.integer) – Maximum number of source code lines to be displayed.
| [maxTraceSourceLines](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$maxTraceSourceLines-detail "Defined by yii\web\ErrorHandler")       | [integer](http://php.net/language.types.integer) – Maximum number of trace source code lines to be displayed.
| [memoryReserveSize](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#$memoryReserveSize-detail "Defined by yii\base\ErrorHandler")         | [integer](http://php.net/language.types.integer) – The size of the reserved memory.
| [previousExceptionView](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$previousExceptionView-detail "Defined by yii\web\ErrorHandler")   | [string](http://php.net/language.types.string) – The path of the view file for rendering previous exceptions.
| [traceLine](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#$traceLine-detail "Defined by yii\web\ErrorHandler")                           | [string](http://php.net/language.types.string) – Trace line with placeholders to be be substituted.





## Public Methods

| Method                                                                                                                                                                          | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                       | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                                       | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                         | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                     | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                         | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                     | Sets an object property to null.
| [addTypeLinks()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#addTypeLinks()-detail "Defined by yii\web\ErrorHandler")                                         | Adds informational links to the given PHP type/class.
| [argumentsToString()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#argumentsToString()-detail "Defined by yii\web\ErrorHandler")                               | Converts arguments array to its string representation.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                       | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                                   | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                 | Returns the fully qualified name of this class.
| [clearOutput()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#clearOutput()-detail "Defined by yii\base\ErrorHandler")                                         | Removes all output echoed before calling this method.
| [convertExceptionToError()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#convertExceptionToError()-detail "Defined by yii\base\ErrorHandler")                 | Converts an exception into a PHP error.
| [convertExceptionToString()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#convertExceptionToString()-detail "Defined by yii\base\ErrorHandler")               | Converts an exception into a simple string.
| [convertExceptionToVerboseString()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#convertExceptionToVerboseString()-detail "Defined by yii\base\ErrorHandler") | Converts an exception into a string that has verbose information about the exception and its trace.
| [createFrameworkVersionLink()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#createFrameworkVersionLink()-detail "Defined by yii\web\ErrorHandler")             | Creates string containing HTML link which refers to the page with the current version of the framework and version number text.
| [createHttpStatusLink()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#createHttpStatusLink()-detail "Defined by yii\web\ErrorHandler")                         | Creates HTML containing link to the page with the information on given HTTP status code.
| [createServerInformationLink()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#createServerInformationLink()-detail "Defined by yii\web\ErrorHandler")           | Creates string containing HTML link which refers to the home page of determined web-server software and its full name.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                             | Returns all behaviors attached to this component.
| [getExceptionName()](craft-web-errorhandler.md#method-getexceptionname)                                                                                                         | Returns human-readable exception name.
| [handleError()](craft-web-errorhandler.md#method-handleerror)                                                                                                                   | Handles PHP execution errors such as warnings and notices.
| [handleException()](craft-web-errorhandler.md#method-handleexception)                                                                                                           | Handles uncaught PHP exceptions.
| [handleFatalError()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#handleFatalError()-detail "Defined by yii\base\ErrorHandler")                               | Handles fatal PHP errors.
| [handleHhvmError()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#handleHhvmError()-detail "Defined by yii\base\ErrorHandler")                                 | Handles HHVM execution errors such as warnings and notices.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                             | Returns a value indicating whether a property is defined.
| [htmlEncode()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#htmlEncode()-detail "Defined by yii\web\ErrorHandler")                                             | Converts special characters to HTML entities.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                           | Initializes the object.
| [isCoreFile()](craft-web-errorhandler.md#method-iscorefile)                                                                                                                     | Determines whether given name of the file belongs to the framework.
| [logException()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#logException()-detail "Defined by yii\base\ErrorHandler")                                       | Logs the given exception.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                               | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                 | Attaches an event handler to an event.
| [register()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#register()-detail "Defined by yii\base\ErrorHandler")                                               | Register this error handler.
| [renderCallStack()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#renderCallStack()-detail "Defined by yii\web\ErrorHandler")                                   | Renders call stack.
| [renderCallStackItem()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#renderCallStackItem()-detail "Defined by yii\web\ErrorHandler")                           | Renders a single call stack element.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#renderFile()-detail "Defined by yii\web\ErrorHandler")                                             | Renders a view file as a PHP script.
| [renderPreviousExceptions()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#renderPreviousExceptions()-detail "Defined by yii\web\ErrorHandler")                 | Renders the previous exception stack for a given Exception.
| [renderRequest()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#renderRequest()-detail "Defined by yii\web\ErrorHandler")                                       | Renders the global variables of the request.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                       | Triggers an event.
| [unregister()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#unregister()-detail "Defined by yii\base\ErrorHandler")                                           | Unregisters this error handler by restoring the PHP error and exception handlers.

### `getExceptionName()`





Returns human-readable exception name.








[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L80-L98)


#### Arguments

- `$exception` ([Exception](http://php.net/class.exception))

#### Returns

[string](http://php.net/language.types.string) – Human-readable exception name or null if it cannot be determined



### `handleError()`





Handles PHP execution errors such as warnings and notices.



This method is used as a PHP error handler. It will simply raise an `\craft\web\ErrorException`.




[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L67-L75)


#### Arguments

- `$code` ([integer](http://php.net/language.types.integer)) – The level of the error raised.
- `$message` ([string](http://php.net/language.types.string)) – The error message.
- `$file` ([string](http://php.net/language.types.string)) – The filename that the error was raised in.
- `$line` ([integer](http://php.net/language.types.integer)) – The line number the error was raised at.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the normal error handler continues.

#### Throws

- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)


### `handleException()`





Handles uncaught PHP exceptions.



This method is implemented as a PHP exception handler.




[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L36-L62)


#### Arguments

- `$exception` ([Exception](http://php.net/class.exception)) – The exception that is not caught




### `isCoreFile()`





Determines whether given name of the file belongs to the framework.








[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L103-L114)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – Name to be checked.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether given name of the file belongs to the framework.





## Protected Methods

| Method                                                                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [convertExceptionToArray()](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler#convertExceptionToArray()-detail "Defined by yii\web\ErrorHandler")                 | Converts an exception into an array.
| [getTypeUrl()](craft-web-errorhandler.md#method-gettypeurl)                                                                                                                   | Returns the informational link URL for a given PHP type/class.
| [handleFallbackExceptionMessage()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#handleFallbackExceptionMessage()-detail "Defined by yii\base\ErrorHandler") | Handles exception thrown during exception processing in [handleException()](https://www.yiiframework.com/doc/api/2.0/yii-base-errorhandler#handleException()-detail).
| [renderException()](craft-web-errorhandler.md#method-renderexception)                                                                                                         | Renders the exception.
| [shouldRenderSimpleHtml()](craft-web-errorhandler.md#method-shouldrendersimplehtml)                                                                                           |

### `getTypeUrl()`





Returns the informational link URL for a given PHP type/class.








[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L134-L153)


#### Arguments

- `$class` ([string](http://php.net/language.types.string)) – The type or class name.
- `$method` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The method name.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The informational link URL.



### `renderException()`





Renders the exception.








[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L119-L129)


#### Arguments

- `$exception` ([Exception](http://php.net/class.exception), [Error](http://php.net/class.error)) – The exception to be rendered.




### `shouldRenderSimpleHtml()`



Since

:   3.4.10












[View source](https://github.com/craftcms/cms/blob/master/src/web/ErrorHandler.php#L178-L181)



#### Returns

[boolean](http://php.net/language.types.boolean) – If simple HTML should be rendered







## Events

### EVENT_BEFORE_HANDLE_EXCEPTION



Type

:   [craft\events\ExceptionEvent](craft-events-exceptionevent.md)



The event that is triggered before handling an exception.



---




