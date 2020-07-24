---
title: craft\web\User
code:
  - php
  - twig
---

# User

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\User](craft-web-user.md) &raquo;
[yii\web\User](https://www.yiiframework.com/doc/api/2.0/yii-web-user) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The User component provides APIs for managing the user authentication status.

An instance of the User component is globally accessible in Craft via [`Craft::$app->user`](https://www.yiiframework.com/doc/api/2.0/yii-web-application#getUser()-detail).



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)


## Public Properties

| Property                                                                                                                                     | Description
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [absoluteAuthTimeout](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$absoluteAuthTimeout-detail "Defined by yii\web\User")           | [integer](http://php.net/language.types.integer) – The number of seconds in which the user will be logged out automatically regardless of activity.
| [absoluteAuthTimeoutParam](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$absoluteAuthTimeoutParam-detail "Defined by yii\web\User") | [string](http://php.net/language.types.string) – The session variable name used to store the value of absolute expiration timestamp of the authenticated state.
| [acceptableRedirectTypes](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$acceptableRedirectTypes-detail "Defined by yii\web\User")   | [array](http://php.net/language.types.array) – MIME types for which this component should redirect to the [loginUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$loginUrl-detail).
| [accessChecker](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$accessChecker-detail "Defined by yii\web\User")                       | [yii\rbac\CheckAccessInterface](https://www.yiiframework.com/doc/api/2.0/yii-rbac-checkaccessinterface) – The access checker to use for checking access.
| [authTimeout](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$authTimeout-detail "Defined by yii\web\User")                           | [integer](http://php.net/language.types.integer) – The number of seconds in which the user will be logged out automatically if he remains inactive.
| [authTimeoutParam](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$authTimeoutParam-detail "Defined by yii\web\User")                 | [string](http://php.net/language.types.string) – The session variable name used to store the value of expiration timestamp of the authenticated state.
| [autoRenewCookie](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$autoRenewCookie-detail "Defined by yii\web\User")                   | [boolean](http://php.net/language.types.boolean) – Whether to automatically renew the identity cookie each time a page is requested.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                   | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [elevatedSessionTimeout](craft-web-user.md#elevatedsessiontimeout)                                                                           | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean) – The number of seconds left in the current elevated user session or false if it has been disabled.
| [elevatedSessionTimeoutParam](craft-web-user.md#elevatedsessiontimeoutparam)                                                                 | [string](http://php.net/language.types.string) – The session variable name used to store the value of the expiration timestamp of the elevated session state.
| [enableAutoLogin](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableAutoLogin-detail "Defined by yii\web\User")                   | [boolean](http://php.net/language.types.boolean) – Whether to enable cookie-based login.
| [enableSession](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableSession-detail "Defined by yii\web\User")                       | [boolean](http://php.net/language.types.boolean) – Whether to use session to persist authentication status across multiple requests.
| [hasElevatedSession](craft-web-user.md#haselevatedsession)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the user currently has an elevated session
| [id](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$id-detail "Defined by yii\web\User")                                             | [string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer) – The unique identifier for the user.
| [idParam](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$idParam-detail "Defined by yii\web\User")                                   | [string](http://php.net/language.types.string) – The session variable name used to store the value of [id](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$id-detail).
| [identity](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$identity-detail "Defined by yii\web\User")                                 | [yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [null](http://php.net/language.types.null) – The identity object associated with the currently logged-in user.
| [identityClass](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$identityClass-detail "Defined by yii\web\User")                       | [string](http://php.net/language.types.string) – The class name of the [identity](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$identity-detail) object.
| [identityCookie](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$identityCookie-detail "Defined by yii\web\User")                     | [array](http://php.net/language.types.array) – The configuration of the identity cookie.
| [isAdmin](craft-web-user.md#isadmin)                                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether the current user is an admin.
| [isGuest](craft-web-user.md#isguest)                                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether the current user is a guest.
| [loginUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$loginUrl-detail "Defined by yii\web\User")                                 | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The URL for login when [loginRequired()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginRequired()-detail) is called.
| [remainingSessionTime](craft-web-user.md#remainingsessiontime)                                                                               | [integer](http://php.net/language.types.integer) – The seconds left in the session, or -1 if their session will expire when their HTTP session ends.
| [rememberedUsername](craft-web-user.md#rememberedusername)                                                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [returnUrl](craft-web-user.md#returnurl)                                                                                                     | [string](http://php.net/language.types.string) – The URL that the user should be redirected to after login.
| [returnUrlParam](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$returnUrlParam-detail "Defined by yii\web\User")                     | [string](http://php.net/language.types.string) – The session variable name used to store the value of [returnUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$returnUrl-detail).
| [tokenParam](craft-web-user.md#tokenparam)                                                                                                   | [string](http://php.net/language.types.string) – The session variable name used to store the user session token.
| [usernameCookie](craft-web-user.md#usernamecookie)                                                                                           | [array](http://php.net/language.types.array) – The configuration of the username cookie.

### `elevatedSessionTimeout`



Type

:   [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



The number of seconds left in the current elevated user session
or false if it has been disabled.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `elevatedSessionTimeoutParam`



Type

:   [string](http://php.net/language.types.string)



The session variable name used to store the value of the expiration timestamp of the elevated session state.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L51)



### `hasElevatedSession`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the user currently has an elevated session



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `isAdmin`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current user is an admin.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `isGuest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current user is a guest.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `remainingSessionTime`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only



The seconds left in the session, or -1 if their session will expire when their HTTP session ends.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `rememberedUsername`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `returnUrl`



Type

:   [string](http://php.net/language.types.string)



The URL that the user should be redirected to after login.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php)



### `tokenParam`



Type

:   [string](http://php.net/language.types.string)



The session variable name used to store the user session token.



[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L40)



### `usernameCookie`



Type

:   [array](http://php.net/language.types.array)



The configuration of the username cookie.

See also [yii\web\Cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie)

[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L46)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
| [can()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#can()-detail "Defined by yii\web\User")                                       | Checks if the user can perform the operation as specified by the given permission.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [checkPermission()](craft-web-user.md#method-checkpermission)                                                                               | Returns whether the current user has a given permission.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [destroyDebugPreferencesInSession()](craft-web-user.md#method-destroydebugpreferencesinsession)                                             | Removes the debug preferences from the session.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [generateToken()](craft-web-user.md#method-generatetoken)                                                                                   | Generates a new user session token.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getElevatedSessionTimeout()](craft-web-user.md#method-getelevatedsessiontimeout)                                                           | Returns how many seconds are left in the current elevated user session.
| [getHasElevatedSession()](craft-web-user.md#method-gethaselevatedsession)                                                                   | Returns whether the user currently has an elevated session.
| [getId()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getId()-detail "Defined by yii\web\User")                                   | Returns a value that uniquely represents the user.
| [getIdentity()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getIdentity()-detail "Defined by yii\web\User")                       | Returns the identity object associated with the currently logged-in user.
| [getIsAdmin()](craft-web-user.md#method-getisadmin)                                                                                         | Returns whether the current user is an admin.
| [getIsGuest()](craft-web-user.md#method-getisguest)                                                                                         | Returns a value indicating whether the user is a guest (not authenticated).
| [getRemainingSessionTime()](craft-web-user.md#method-getremainingsessiontime)                                                               | Returns how many seconds are left in the current user session.
| [getRememberedUsername()](craft-web-user.md#method-getrememberedusername)                                                                   | Returns the username of the account that the browser was last logged in as.
| [getReturnUrl()](craft-web-user.md#method-getreturnurl)                                                                                     | Returns the URL that the browser should be redirected to after successful login.
| [guestRequired()](craft-web-user.md#method-guestrequired)                                                                                   | Redirects the user browser away from a guest page.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [login()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#login()-detail "Defined by yii\web\User")                                   | Logs in a user.
| [loginByAccessToken()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginByAccessToken()-detail "Defined by yii\web\User")         | Logs in a user by the given access token.
| [loginByUserId()](craft-web-user.md#method-loginbyuserid)                                                                                   | Logs in a user by their ID.
| [loginRequired()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginRequired()-detail "Defined by yii\web\User")                   | Redirects the user browser to the login page.
| [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail "Defined by yii\web\User")                                 | Logs out the current user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [removeReturnUrl()](craft-web-user.md#method-removereturnurl)                                                                               | Removes the stored return URL, if there is one.
| [saveDebugPreferencesToSession()](craft-web-user.md#method-savedebugpreferencestosession)                                                   | Saves the logged-in user’s Debug toolbar preferences to the session.
| [sendUsernameCookie()](craft-web-user.md#method-sendusernamecookie)                                                                         | Sends a username cookie.
| [setIdentity()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#setIdentity()-detail "Defined by yii\web\User")                       | Sets the user identity object.
| [setReturnUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#setReturnUrl()-detail "Defined by yii\web\User")                     | Remembers the URL in the session so that it can be retrieved back later by [getReturnUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getReturnUrl()-detail).
| [startElevatedSession()](craft-web-user.md#method-startelevatedsession)                                                                     | Starts an elevated user session for the current user.
| [switchIdentity()](craft-web-user.md#method-switchidentity)                                                                                 | Switches to a new identity for the current user.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `checkPermission()`





Returns whether the current user has a given permission.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L251-L256)


#### Arguments

- `$permissionName` ([string](http://php.net/language.types.string)) – The name of the permission.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user has the permission.



### `destroyDebugPreferencesInSession()`





Removes the debug preferences from the session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L383-L388)






### `generateToken()`



Since

:   3.1.1



Generates a new user session token.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L456-L468)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))




### `getElevatedSessionTimeout()`





Returns how many seconds are left in the current elevated user session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L264-L286)



#### Returns

[integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean) – The number of seconds left in the current elevated user session
or false if it has been disabled.



### `getHasElevatedSession()`





Returns whether the user currently has an elevated session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L293-L301)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user currently has an elevated session



### `getIsAdmin()`





Returns whether the current user is an admin.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L238-L243)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user is an admin.



### `getIsGuest()`





Returns a value indicating whether the user is a guest (not authenticated).








[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L185-L188)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user is a guest.


---

#### Example

::: code
```php{1}
$isGuest = Craft::$app->user->isGuest;
```
```twig
{% if craft.app.user.isGuest %}
    <a href="{{ url(craft.app.config.general.getLoginPath()) }}">
        Login
    </a>
{% else %}
    <a href="{{ url(craft.app.config.general.getLogoutPath()) }}">
        Logout
    </a>
{% endif %}
```
:::


### `getRemainingSessionTime()`





Returns how many seconds are left in the current user session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L210-L228)



#### Returns

[integer](http://php.net/language.types.integer) – The seconds left in the session, or -1 if their session will expire when their HTTP session ends.



### `getRememberedUsername()`





Returns the username of the account that the browser was last logged in as.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L160-L163)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$username = Craft::$app->user->rememberedUsername;
```
```twig{5}
<form method="post" action="" accept-charset="UTF-8">
    {{ csrfInput() }}
    {{ actionInput('users/login') }}

    {% set username = craft.app.user.rememberedUsername %}
    <input type="text" name="loginName" value="{{ username }}">

    <input type="password" name="password">

    <input type="submit" value="Login">
</form>
```
:::


### `getReturnUrl()`





Returns the URL that the browser should be redirected to after successful login.



This method reads the return URL from the session. It is usually used by the login action which
may call this method to redirect the browser to where it goes after successful authentication.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L104-L124)


#### Arguments

- `$defaultUrl` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The default return URL in case it was not set previously.
If this is null and the return URL was not set previously, [craft\web\Application::$homeUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-application#$homeUrl-detail) will be redirected to.
Please refer to [setReturnUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#setReturnUrl()-detail) on accepted format of the URL.

#### Returns

[string](http://php.net/language.types.string) – The URL that the user should be redirected to after login.



### `guestRequired()`



Since

:   3.4.0



Redirects the user browser away from a guest page.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L197-L203)



#### Returns

[craft\web\Response](craft-web-response.md) – The redirection response

#### Throws

- `\craft\web\ForbiddenHttpException`\
  if the request doesn’t accept a redirect response


### `loginByUserId()`





Logs in a user by their ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L66-L75)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID
- `$duration` ([integer](http://php.net/language.types.integer)) – The number of seconds that the user can remain in logged-in status.
Defaults to 0, meaning login till the user closes the browser or the session is manually destroyed.
If greater than 0 and [enableAutoLogin](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableAutoLogin-detail) is true, cookie-based login will be supported.
Note that if [enableSession](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableSession-detail) is false, this parameter will be ignored.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user is logged in



### `removeReturnUrl()`





Removes the stored return URL, if there is one.



See also [getReturnUrl()](craft-web-user.md#method-getreturnurl)
[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L131-L134)






### `saveDebugPreferencesToSession()`





Saves the logged-in user’s Debug toolbar preferences to the session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L364-L378)






### `sendUsernameCookie()`





Sends a username cookie.

This method is used after a user is logged in. It saves the logged-in user's username in a cookie,
so that login forms can remember the initial Username value on login forms.

See also [afterLogin()](craft-web-user.md#method-afterlogin)
[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L86-L99)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md))




### `startElevatedSession()`





Starts an elevated user session for the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L310-L356)


#### Arguments

- `$password` ([string](http://php.net/language.types.string)) – The current user’s password

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the password was valid, and the user session has been elevated

#### Throws

- [craft\errors\UserLockedException](craft-errors-userlockedexception.md)\
  if the user is locked.


### `switchIdentity()`





Switches to a new identity for the current user.



When [enableSession](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableSession-detail) is true, this method may use session and/or cookie to store the user identity information,
according to the value of `$duration`. Please refer to [login()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#login()-detail) for more details.

This method is mainly called by [login()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#login()-detail), [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail) and [loginByCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginByCookie()-detail)
when the current user needs to be associated with the corresponding identity information.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L434-L448)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [null](http://php.net/language.types.null)) – The identity information to be associated with the current user.
If null, it means switching the current user to be a guest.
- `$duration` ([integer](http://php.net/language.types.integer)) – Number of seconds that the user can remain in logged-in status.
This parameter is used only when `$identity` is not null.






## Protected Methods

| Method                                                                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------
| [afterLogin()](craft-web-user.md#method-afterlogin)                                                                                                             | This method is called after the user is successfully logged in.
| [afterLogout()](craft-web-user.md#method-afterlogout)                                                                                                           | This method is invoked right after a user is logged out via [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail).
| [beforeLogin()](craft-web-user.md#method-beforelogin)                                                                                                           | This method is called before logging in a user.
| [beforeLogout()](craft-web-user.md#method-beforelogout)                                                                                                         | This method is invoked when calling [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail) to log out a user.
| [checkRedirectAcceptable()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#checkRedirectAcceptable()-detail "Defined by yii\web\User")                   | Checks if the `Accept` header contains a content type that allows redirection to the login page.
| [getAccessChecker()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getAccessChecker()-detail "Defined by yii\web\User")                                 | Returns the access checker used for checking access.
| [getAuthManager()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getAuthManager()-detail "Defined by yii\web\User")                                     | Returns auth manager associated with the user component.
| [getIdentityAndDurationFromCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#getIdentityAndDurationFromCookie()-detail "Defined by yii\web\User") | Determines if an identity cookie has a valid format and contains a valid auth key.
| [loginByCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginByCookie()-detail "Defined by yii\web\User")                                       | Logs in a user by cookie.
| [regenerateCsrfToken()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#regenerateCsrfToken()-detail "Defined by yii\web\User")                           | Regenerates CSRF token
| [removeIdentityCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#removeIdentityCookie()-detail "Defined by yii\web\User")                         | Removes the identity cookie.
| [renewAuthStatus()](craft-web-user.md#method-renewauthstatus)                                                                                                   | Updates the authentication status using the information from session and cookie.
| [renewIdentityCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#renewIdentityCookie()-detail "Defined by yii\web\User")                           | Renews the identity cookie.
| [sendIdentityCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#sendIdentityCookie()-detail "Defined by yii\web\User")                             | Sends an identity cookie.

### `afterLogin()`





This method is called after the user is successfully logged in.



The default implementation will trigger the [EVENT_AFTER_LOGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-user#EVENT_AFTER_LOGIN-detail) event.
If you override this method, make sure you call the parent implementation
so that the event is triggered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L406-L429)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface)) – The user identity information
- `$cookieBased` ([boolean](http://php.net/language.types.boolean)) – Whether the login is cookie-based
- `$duration` ([integer](http://php.net/language.types.integer)) – Number of seconds that the user can remain in logged-in status.
If 0, it means login till the user closes the browser or the session is manually destroyed.




### `afterLogout()`





This method is invoked right after a user is logged out via [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail).



The default implementation will trigger the [EVENT_AFTER_LOGOUT](https://www.yiiframework.com/doc/api/2.0/yii-web-user#EVENT_AFTER_LOGOUT-detail) event.
If you override this method, make sure you call the parent implementation
so that the event is triggered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L533-L548)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface)) – The user identity information




### `beforeLogin()`





This method is called before logging in a user.



The default implementation will trigger the [EVENT_BEFORE_LOGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-user#EVENT_BEFORE_LOGIN-detail) event.
If you override this method, make sure you call the parent implementation
so that the event is triggered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L393-L401)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface)) – The user identity information
- `$cookieBased` ([boolean](http://php.net/language.types.boolean)) – Whether the login is cookie-based
- `$duration` ([integer](http://php.net/language.types.integer)) – Number of seconds that the user can remain in logged-in status.
If 0, it means login till the user closes the browser or the session is manually destroyed.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user should continue to be logged in



### `beforeLogout()`





This method is invoked when calling [logout()](https://www.yiiframework.com/doc/api/2.0/yii-web-user#logout()-detail) to log out a user.



The default implementation will trigger the [EVENT_BEFORE_LOGOUT](https://www.yiiframework.com/doc/api/2.0/yii-web-user#EVENT_BEFORE_LOGOUT-detail) event.
If you override this method, make sure you call the parent implementation
so that the event is triggered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L507-L528)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface)) – The user identity information

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user should continue to be logged out



### `renewAuthStatus()`





Updates the authentication status using the information from session and cookie.



This method will try to determine the user identity using the [idParam](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$idParam-detail) session variable.

If [authTimeout](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$authTimeout-detail) is set, this method will refresh the timer.

If the user identity cannot be determined by session, this method will try to [login by cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-user#loginByCookie()-detail)
if [enableAutoLogin](https://www.yiiframework.com/doc/api/2.0/yii-web-user#$enableAutoLogin-detail) is true.




[View source](https://github.com/craftcms/cms/blob/master/src/web/User.php#L473-L502)








## Constants

| Constant              | Description
| --------------------- | -----------
| `EVENT_AFTER_LOGIN`   |
| `EVENT_AFTER_LOGOUT`  |
| `EVENT_BEFORE_LOGIN`  |
| `EVENT_BEFORE_LOGOUT` |



