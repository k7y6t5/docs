---
title: craft\console\Request
code:
  - php
  - twig
---

# Request

Type

:   Class

Namespace

:   craft\console

Inherits

:   [craft\console\Request](craft-console-request.md) &raquo;
[yii\console\Request](https://www.yiiframework.com/doc/api/2.0/yii-console-request) &raquo;
[yii\base\Request](https://www.yiiframework.com/doc/api/2.0/yii-base-request) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\RequestTrait](craft-base-requesttrait.md)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)


## Public Properties

| Property                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [isActionRequest](craft-console-request.md#isactionrequest)                                                                          | [boolean](http://php.net/language.types.boolean)
| [isConsoleRequest](https://www.yiiframework.com/doc/api/2.0/yii-base-request#$isConsoleRequest-detail "Defined by yii\base\Request") | [boolean](http://php.net/language.types.boolean) – The value indicating whether the current request is made via console
| [isCpRequest](craft-console-request.md#iscprequest)                                                                                  | [boolean](http://php.net/language.types.boolean)
| [isLivePreview](craft-console-request.md#islivepreview)                                                                              | [boolean](http://php.net/language.types.boolean) – Whether this is a Live Preview request.
| [isLoginRequest](craft-console-request.md#isloginrequest)                                                                            | [boolean](http://php.net/language.types.boolean)
| [isPreview](craft-console-request.md#ispreview)                                                                                      | [boolean](http://php.net/language.types.boolean)
| [isSingleActionRequest](craft-console-request.md#issingleactionrequest)                                                              | [boolean](http://php.net/language.types.boolean)
| [isSiteRequest](craft-console-request.md#issiterequest)                                                                              | [boolean](http://php.net/language.types.boolean)
| [isWebAliasSetDynamically](craft-base-requesttrait.md#iswebaliassetdynamically "Defined by craft\base\RequestTrait")                 | [boolean](http://php.net/language.types.boolean)
| [isWebrootAliasSetDynamically](craft-base-requesttrait.md#iswebrootaliassetdynamically "Defined by craft\base\RequestTrait")         | [boolean](http://php.net/language.types.boolean)
| [params](https://www.yiiframework.com/doc/api/2.0/yii-console-request#$params-detail "Defined by yii\console\Request")               | [array](http://php.net/language.types.array) – The command line arguments.
| [scriptFile](https://www.yiiframework.com/doc/api/2.0/yii-base-request#$scriptFile-detail "Defined by yii\base\Request")             | [string](http://php.net/language.types.string) – Entry script file path (processed w/ realpath())
| [scriptFilename](craft-base-requesttrait.md#scriptfilename "Defined by craft\base\RequestTrait")                                     | [string](http://php.net/language.types.string)
| [token](craft-console-request.md#token)                                                                                              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The token, or `null` if there isn’t one.

### `isActionRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isCpRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isLivePreview`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether this is a Live Preview request.



[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isLoginRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isPreview`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.1







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isSingleActionRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `isSiteRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)



### `token`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.2.0



The token, or `null` if there isn’t one.



[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php)







## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                   | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getIsActionRequest()](craft-console-request.md#method-getisactionrequest)                                                                    | Returns whether a specific controller action was requested. (Narrator: There wasn't.)
| [getIsConsoleRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#getIsConsoleRequest()-detail "Defined by yii\base\Request") | Returns a value indicating whether the current request is made via command line.
| [getIsCpRequest()](craft-console-request.md#method-getiscprequest)                                                                            | Returns whether the control panel was requested. (Narrator: It wasn't.)
| [getIsLivePreview()](craft-console-request.md#method-getislivepreview)                                                                        | Returns whether this is a Live Preview request. (Narrator: It isn't.)
| [getIsLoginRequest()](craft-console-request.md#method-getisloginrequest)                                                                      | Returns whether this was a Login request.
| [getIsPreview()](craft-console-request.md#method-getispreview)                                                                                | Returns whether this is an element preview request.
| [getIsSingleActionRequest()](craft-console-request.md#method-getissingleactionrequest)                                                        | Returns whether the current request is solely an action request. (Narrator: It isn't.)
| [getIsSiteRequest()](craft-console-request.md#method-getissiterequest)                                                                        | Returns whether the front end site was requested. (Narrator: It wasn't.)
| [getParams()](https://www.yiiframework.com/doc/api/2.0/yii-console-request#getParams()-detail "Defined by yii\console\Request")               | Returns the command line arguments.
| [getScriptFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#getScriptFile()-detail "Defined by yii\base\Request")             | Returns entry script file path.
| [getScriptFilename()](craft-base-requesttrait.md#method-getscriptfilename "Defined by craft\base\RequestTrait")                               | Returns the requested script name being used to access Craft (e.g. “index.php”).
| [getToken()](craft-console-request.md#method-gettoken)                                                                                        | Returns the token submitted with the request, if there is one.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property is defined.
| [init()](craft-console-request.md#method-init)                                                                                                | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                               | Attaches an event handler to an event.
| [resolve()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#resolve()-detail "Defined by yii\base\Request")                         | Resolves the current request into a route and the associated parameters.
| [setIsConsoleRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#setIsConsoleRequest()-detail "Defined by yii\base\Request") | Sets the value indicating whether the current request is made via command line.
| [setParams()](https://www.yiiframework.com/doc/api/2.0/yii-console-request#setParams()-detail "Defined by yii\console\Request")               | Sets the command line arguments.
| [setScriptFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#setScriptFile()-detail "Defined by yii\base\Request")             | Sets the entry script file path.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.

### `getIsActionRequest()`





Returns whether a specific controller action was requested. (Narrator: There wasn't.)




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L73-L76)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsCpRequest()`





Returns whether the control panel was requested. (Narrator: It wasn't.)




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L53-L56)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsLivePreview()`

::: danger DEPRECATED
Deprecated in 3.2.0
:::




Returns whether this is a Live Preview request. (Narrator: It isn't.)




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L117-L120)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a Live Preview request.



### `getIsLoginRequest()`



Since

:   3.2.0



Returns whether this was a Login request.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L84-L87)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPreview()`



Since

:   3.2.1



Returns whether this is an element preview request.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L106-L109)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsSingleActionRequest()`

::: danger DEPRECATED
Deprecated in 3.2.0
:::




Returns whether the current request is solely an action request. (Narrator: It isn't.)




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L95-L98)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsSiteRequest()`





Returns whether the front end site was requested. (Narrator: It wasn't.)




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L63-L66)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getToken()`



Since

:   3.2.0



Returns the token submitted with the request, if there is one.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L128-L131)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The token, or `null` if there isn’t one.



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Request.php#L25-L46)













