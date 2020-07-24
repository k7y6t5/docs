---
title: craft\controllers\UsersController
code:
  - php
  - twig
---

# UsersController

Type

:   Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\UsersController](craft-controllers-userscontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   3.0.0



The UsersController class is a controller that handles various user account related tasks such as logging-in,
impersonating a user, logging out, forgetting passwords, setting passwords, validating accounts, activating
accounts, creating users, saving users, processing user avatars, deleting, suspending and unsuspending users.

Note that all actions in the controller, except [actionLogin()](craft-controllers-userscontroller.md#method-actionlogin), [actionLogout()](craft-controllers-userscontroller.md#method-actionlogout), [actionGetRemainingSessionTime()](craft-controllers-userscontroller.md#method-actiongetremainingsessiontime),
[actionSendPasswordResetEmail()](craft-controllers-userscontroller.md#method-actionsendpasswordresetemail), [actionSetPassword()](craft-controllers-userscontroller.md#method-actionsetpassword), [actionVerifyEmail()](craft-controllers-userscontroller.md#method-actionverifyemail) and [actionSaveUser()](craft-controllers-userscontroller.md#method-actionsaveuser) require an
authenticated Craft session via [allowAnonymous](craft-controllers-userscontroller.md#allowanonymous).



[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [action](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$action-detail "Defined by yii\base\Controller")                           | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The action that is currently being executed.
| [actionParams](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#$actionParams-detail "Defined by yii\web\Controller")                 | [array](http://php.net/language.types.array) – The parameters bound to the current action.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail "Defined by yii\base\Controller")             | [string](http://php.net/language.types.string) – The ID of the action that is used when the action ID is not specified in the request.
| [enableCsrfValidation](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#$enableCsrfValidation-detail "Defined by yii\web\Controller") | [boolean](http://php.net/language.types.boolean) – Whether to enable CSRF validation for the actions in this controller.
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$id-detail "Defined by yii\base\Controller")                                   | [string](http://php.net/language.types.string) – The ID of this controller.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$layout-detail "Defined by yii\base\Controller")                           | [null](http://php.net/language.types.null), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The name of the layout to be applied to this controller's views.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$module-detail "Defined by yii\base\Controller")                           | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The module that this controller belongs to.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$modules-detail "Defined by yii\base\Controller")                         | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – All ancestor modules that this controller is located within.
| [route](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$route-detail "Defined by yii\base\Controller")                             | [string](http://php.net/language.types.string) – The route (module ID, controller ID and action ID) of the current request.
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$uniqueId-detail "Defined by yii\base\Controller")                       | [string](http://php.net/language.types.string) – The controller ID that is prefixed with the module ID (if any).
| [view](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$view-detail "Defined by yii\base\Controller")                               | [yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view), [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – The view object that can be used to render views or view files.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface#$viewPath-detail "Defined by yii\base\ViewContextInterface")   | [string](http://php.net/language.types.string) – The view path that may be prefixed to a relative view name.



## Protected Properties

| Property                                                              | Description
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](craft-controllers-userscontroller.md#allowanonymous) | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.

### `allowAnonymous`



Type

:   [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[]





Whether this controller’s actions can be accessed anonymously.

This can be set to any of the following:

- `false` or `self::ALLOW_ANONYMOUS_NEVER` (default) – indicates that all controller actions should never be
  accessed anonymously
- `true` or `self::ALLOW_ANONYMOUS_LIVE` – indicates that all controller actions can be accessed anonymously when
   the system is live
- `self::ALLOW_ANONYMOUS_OFFLINE` – indicates that all controller actions can be accessed anonymously when the
   system is offline
- `self::ALLOW_ANONYMOUS_LIVE | self::ALLOW_ANONYMOUS_OFFLINE` – indicates that all controller actions can be
   accessed anonymously when the system is live or offline
- An array of action IDs (e.g. `['save-guest-entry', 'edit-guest-entry']`) – indicates that the listed action IDs
  can be accessed anonymously when the system is live
- An array of action ID/bitwise pairs (e.g. `['save-guest-entry' => self::ALLOW_ANONYMOUS_OFFLINE]` – indicates
  that the listed action IDs can be accessed anonymously per the bitwise int assigned to it.





[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L92-L102)





## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                               | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                               | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                 | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                             | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                 | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                             | Sets an object property to null.
| [actionActivateUser()](craft-controllers-userscontroller.md#method-actionactivateuser)                                                                  | Manually activates a user account. Only admins have access.
| [actionDeleteUser()](craft-controllers-userscontroller.md#method-actiondeleteuser)                                                                      | Deletes a user.
| [actionDeleteUserPhoto()](craft-controllers-userscontroller.md#method-actiondeleteuserphoto)                                                            | Delete all the photos for current user.
| [actionEditUser()](craft-controllers-userscontroller.md#method-actionedituser)                                                                          | Edit a user account.
| [actionGetElevatedSessionTimeout()](craft-controllers-userscontroller.md#method-actiongetelevatedsessiontimeout)                                        | Returns how many seconds are left in the current elevated user session.
| [actionGetPasswordResetUrl()](craft-controllers-userscontroller.md#method-actiongetpasswordreseturl)                                                    | Generates a new verification code for a given user, and returns its URL.
| [actionGetRemainingSessionTime()](craft-controllers-userscontroller.md#method-actiongetremainingsessiontime)                                            | Returns how many seconds are left in the current user session.
| [actionImpersonate()](craft-controllers-userscontroller.md#method-actionimpersonate)                                                                    | Logs a user in for impersonation. Requires you to be an administrator.
| [actionLogin()](craft-controllers-userscontroller.md#method-actionlogin)                                                                                | Displays the login template, and handles login post requests.
| [actionLogout()](craft-controllers-userscontroller.md#method-actionlogout)                                                                              |
| [actionSaveFieldLayout()](craft-controllers-userscontroller.md#method-actionsavefieldlayout)                                                            | Saves the user field layout.
| [actionSaveUser()](craft-controllers-userscontroller.md#method-actionsaveuser)                                                                          | Provides an endpoint for saving a user account.
| [actionSendActivationEmail()](craft-controllers-userscontroller.md#method-actionsendactivationemail)                                                    | Sends a new activation email to a user.
| [actionSendPasswordResetEmail()](craft-controllers-userscontroller.md#method-actionsendpasswordresetemail)                                              | Sends a password reset email.
| [actionSessionInfo()](craft-controllers-userscontroller.md#method-actionsessioninfo)                                                                    | Returns information about the current user session, if any.
| [actionSetPassword()](craft-controllers-userscontroller.md#method-actionsetpassword)                                                                    | Sets a user's password once they've verified they have access to their email.
| [actionStartElevatedSession()](craft-controllers-userscontroller.md#method-actionstartelevatedsession)                                                  | Starts an elevated user session.
| [actionSuspendUser()](craft-controllers-userscontroller.md#method-actionsuspenduser)                                                                    | Suspends a user.
| [actionUnlockUser()](craft-controllers-userscontroller.md#method-actionunlockuser)                                                                      | Unlocks a user, bypassing the cooldown phase.
| [actionUnsuspendUser()](craft-controllers-userscontroller.md#method-actionunsuspenduser)                                                                | Unsuspends a user.
| [actionUploadUserPhoto()](craft-controllers-userscontroller.md#method-actionuploaduserphoto)                                                            | Upload a user photo.
| [actionUserContentSummary()](craft-controllers-userscontroller.md#method-actionusercontentsummary)                                                      | Returns a summary of the content that is owned by a given user ID(s).
| [actionVerifyEmail()](craft-controllers-userscontroller.md#method-actionverifyemail)                                                                    | Verifies that a user has access to an email address.
| [actionVerifyPassword()](craft-controllers-userscontroller.md#method-actionverifypassword)                                                              | Verifies a password for a user.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                           | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                   | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                       | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-controllers-userscontroller.md#method-beforeaction)                                                                              | This method is invoked right before an action is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                           | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#bindActionParams()-detail "Defined by yii\base\Controller")           | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                         | Returns the fully qualified name of this class.
| [createAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#createAction()-detail "Defined by yii\base\Controller")                   | Creates an action based on the given action ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                 | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")               | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")               | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [findLayoutFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#findLayoutFile()-detail "Defined by yii\base\Controller")               | Finds the applicable layout file.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                       | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                     | Returns all behaviors attached to this component.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getModules()-detail "Defined by yii\base\Controller")                       | Returns all ancestor modules of this controller.
| [getRoute()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getRoute()-detail "Defined by yii\base\Controller")                           | Returns the route of the current request.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getUniqueId()-detail "Defined by yii\base\Controller")                     | Returns the unique ID of the controller.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getView()-detail "Defined by yii\base\Controller")                             | Returns the view object that can be used to render views or view files.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface#getViewPath()-detail "Defined by yii\base\ViewContextInterface") |
| [goBack()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#goBack()-detail "Defined by yii\web\Controller")                                 | Redirects the browser to the last visited page.
| [goHome()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#goHome()-detail "Defined by yii\web\Controller")                                 | Redirects the browser to the home page.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")             | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property is defined.
| [init()](craft-web-controller.md#method-init "Defined by craft\web\Controller")                                                                         | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [redirect()](craft-web-controller.md#method-redirect "Defined by craft\web\Controller")                                                                 | Redirects the browser to the specified URL.
| [redirectToPostedUrl()](craft-web-controller.md#method-redirecttopostedurl "Defined by craft\web\Controller")                                           | Redirects to the URI specified in the POST.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#refresh()-detail "Defined by yii\web\Controller")                               | Refreshes the current page.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                               | Renders a view and applies layout if available.
| [renderAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#renderAjax()-detail "Defined by yii\web\Controller")                         | Renders a view in response to an AJAX request.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                 | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                       | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                 | Renders a view without applying layout.
| [renderTemplate()](craft-web-controller.md#method-rendertemplate "Defined by craft\web\Controller")                                                     | Renders a template.
| [requireAcceptsJson()](craft-web-controller.md#method-requireacceptsjson "Defined by craft\web\Controller")                                             | Throws a 400 error if the request doesn't accept JSON.
| [requireAdmin()](craft-web-controller.md#method-requireadmin "Defined by craft\web\Controller")                                                         | Throws a 403 error if the current user is not an admin.
| [requireAuthorization()](craft-web-controller.md#method-requireauthorization "Defined by craft\web\Controller")                                         | Checks whether the current user can perform a given action, and ends the request with a 403 error if they don’t.
| [requireCpRequest()](craft-web-controller.md#method-requirecprequest "Defined by craft\web\Controller")                                                 | Throws a 400 error if the current request isn’t a control panel request.
| [requireElevatedSession()](craft-web-controller.md#method-requireelevatedsession "Defined by craft\web\Controller")                                     | Requires that the user has an elevated session.
| [requireGuest()](craft-web-controller.md#method-requireguest "Defined by craft\web\Controller")                                                         | Redirects the user to the account template if they are logged in.
| [requireLogin()](craft-web-controller.md#method-requirelogin "Defined by craft\web\Controller")                                                         | Redirects the user to the login template if they're not logged in.
| [requirePermission()](craft-web-controller.md#method-requirepermission "Defined by craft\web\Controller")                                               | Checks whether the current user has a given permission, and ends the request with a 403 error if they don’t.
| [requirePostRequest()](craft-web-controller.md#method-requirepostrequest "Defined by craft\web\Controller")                                             | Throws a 400 error if this isn’t a POST request
| [requireSiteRequest()](craft-web-controller.md#method-requiresiterequest "Defined by craft\web\Controller")                                             | Throws a 400 error if the current request isn’t a site request.
| [requireToken()](craft-web-controller.md#method-requiretoken "Defined by craft\web\Controller")                                                         | Throws a 400 error if the current request doesn’t have a valid Craft token.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                     | Runs a request specified in terms of a route.
| [runAction()](craft-web-controller.md#method-runaction "Defined by craft\web\Controller")                                                               | Runs an action within this controller with the specified action ID and parameters.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                             | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                     | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.

### `actionActivateUser()`





Manually activates a user account. Only admins have access.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L568-L587)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionDeleteUser()`





Deletes a user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1476-L1526)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `actionDeleteUserPhoto()`





Delete all the photos for current user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1290-L1312)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionEditUser()`





Edit a user account.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L599-L894)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The user’s ID, if any, or a string that indicates the user to be edited ('current' or 'client').
- `$user` ([craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)) – The user being edited, if there were any validation errors.
- `$errors` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – Any errors that occurred as a result of the previous action.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if the requested user cannot be found
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if there’s a mismatch between|null $userId and|null $user


### `actionGetElevatedSessionTimeout()`





Returns how many seconds are left in the current elevated user session.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L260-L267)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionGetPasswordResetUrl()`





Generates a new verification code for a given user, and returns its URL.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L405-L423)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the existing password submitted with the request is invalid


### `actionGetRemainingSessionTime()`

::: danger DEPRECATED
Deprecated in 3.4.0. Use [actionSessionInfo()](craft-controllers-userscontroller.md#method-actionsessioninfo) instead.
:::




Returns how many seconds are left in the current user session.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L216-L220)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionImpersonate()`





Logs a user in for impersonation. Requires you to be an administrator.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L178-L208)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)


### `actionLogin()`





Displays the login template, and handles login post requests.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L124-L170)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionLogout()`










[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L302-L326)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionSaveFieldLayout()`





Saves the user field layout.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1569-L1587)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `actionSaveUser()`





Provides an endpoint for saving a user account.

This action accounts for the following scenarios:
- An admin registering a new user account.
- An admin editing an existing user account.
- A normal user with user-administration permissions registering a new user account.
- A normal user with user-administration permissions editing an existing user account.
- A guest registering a new user account ("public registration").
This action behaves the same regardless of whether it was requested from the control panel or the front-end site.


[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L912-L1233)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if the requested user cannot be found
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if attempting to create a client account, and one already exists
- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if attempting public registration but public registration is not allowed


### `actionSendActivationEmail()`





Sends a new activation email to a user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1320-L1356)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the user is not pending


### `actionSendPasswordResetEmail()`





Sends a password reset email.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L334-L397)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if the requested user cannot be found


### `actionSessionInfo()`



Since

:   3.4.0



Returns information about the current user session, if any.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L228-L253)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionSetPassword()`





Sets a user's password once they've verified they have access to their email.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L430-L520)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionStartElevatedSession()`





Starts an elevated user session.

return Response


[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L274-L297)






### `actionSuspendUser()`





Suspends a user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1403-L1431)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if a non-admin is attempting to suspend an admin


### `actionUnlockUser()`





Unlocks a user, bypassing the cooldown phase.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1364-L1395)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if a non-admin is attempting to unlock an admin


### `actionUnsuspendUser()`





Unsuspends a user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1534-L1562)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if a non-admin is attempting to unsuspend an admin


### `actionUploadUserPhoto()`





Upload a user photo.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1241-L1282)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the uploaded file is not an image


### `actionUserContentSummary()`



Since

:   3.0.13



Returns a summary of the content that is owned by a given user ID(s).




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1439-L1469)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `actionVerifyEmail()`





Verifies that a user has access to an email address.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L527-L561)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionVerifyPassword()`





Verifies a password for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L1594-L1603)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `beforeAction()`





This method is invoked right before an action is executed.



The method will trigger the [EVENT_BEFORE_ACTION](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#EVENT_BEFORE_ACTION-detail) event. The return value of the method
will determine whether the action should continue to run.

In case the action should not run, the request should be handled inside of the `beforeAction` code
by either providing the necessary output or redirecting the request. Otherwise the response will be empty.

If you override this method, your code should look like the following:

```php
public function beforeAction($action)
{
    // your custom code here, if you want the code to run before action filters,
    // which are triggered on the [EVENT_BEFORE_ACTION](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#EVENT_BEFORE_ACTION-detail) event, e.g. PageCache or AccessControl

    if (!parent::beforeAction($action)) {
        return false;
    }

    // other custom code here

    return true; // or false to not run the action
}
```




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/UsersController.php#L107-L116)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action)) – The action to be executed.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the action should continue to run.

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request is missing a valid CSRF token
- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the user is not logged in or lacks the necessary permissions
- [craft\web\ServiceUnavailableHttpException](craft-web-serviceunavailablehttpexception.md)\
  if the system is offline and the user isn't allowed to access it






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `ALLOW_ANONYMOUS_LIVE`    |
| `ALLOW_ANONYMOUS_NEVER`   |
| `ALLOW_ANONYMOUS_OFFLINE` |


## Events

### EVENT_DEFINE_CONTENT_SUMMARY



Type

:   [craft\events\DefineUserContentSummaryEvent](craft-events-defineusercontentsummaryevent.md)

Since

:   3.0.13



The event that is triggered when defining a summary of content owned by a user(s), before they are deleted





---

#### Example

::: code
```php
use craft\controllers\UsersController;
use craft\events\DefineUserContentSummaryEvent;
use yii\base\Event;

Event::on(UsersController::class, UsersController::EVENT_DEFINE_CONTENT_SUMMARY, function(DefineUserContentSummaryEvent $e) {
    $e->contentSummary[] = 'A pair of sneakers';
});
```
:::


### EVENT_LOGIN_FAILURE



Type

:   [craft\events\LoginFailureEvent](craft-events-loginfailureevent.md)



The event that is triggered when a failed login attempt was made



---



### EVENT_REGISTER_USER_ACTIONS



Type

:   [craft\events\RegisterUserActionsEvent](craft-events-registeruseractionsevent.md)



The event that is triggered when a user’s available actions are being registered



---




