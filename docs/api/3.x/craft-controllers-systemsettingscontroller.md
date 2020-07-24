---
title: craft\controllers\SystemSettingsController
code:
  - php
  - twig
---

# SystemSettingsController

Type

:   Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\SystemSettingsController](craft-controllers-systemsettingscontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   3.0.0



The SystemSettingsController class is a controller that handles various control panel settings related tasks such as
displaying, saving and testing Craft settings in the control panel.

Note that all actions in this controller require administrator access in order to execute.



[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php)


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

| Property                                                                                   | Description
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](craft-web-controller.md#allowanonymous "Defined by craft\web\Controller") | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.



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
| [actionEditEmailSettings()](craft-controllers-systemsettingscontroller.md#method-actioneditemailsettings)                                               | Renders the email settings page.
| [actionEditGlobalSet()](craft-controllers-systemsettingscontroller.md#method-actioneditglobalset)                                                       | Global Set edit form.
| [actionGeneralSettings()](craft-controllers-systemsettingscontroller.md#method-actiongeneralsettings)                                                   | Shows the general settings form.
| [actionSaveEmailSettings()](craft-controllers-systemsettingscontroller.md#method-actionsaveemailsettings)                                               | Saves the email settings.
| [actionSaveGeneralSettings()](craft-controllers-systemsettingscontroller.md#method-actionsavegeneralsettings)                                           | Saves the general settings.
| [actionTestEmailSettings()](craft-controllers-systemsettingscontroller.md#method-actiontestemailsettings)                                               | Tests the email settings.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                           | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                   | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                       | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-web-controller.md#method-beforeaction "Defined by craft\web\Controller")                                                         | This method is invoked right before an action is executed.
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
| [init()](craft-controllers-systemsettingscontroller.md#method-init)                                                                                     | Initializes the object.
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

### `actionEditEmailSettings()`





Renders the email settings page.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L132-L191)


#### Arguments

- `$settings` ([craft\models\MailSettings](craft-models-mailsettings.md), [null](http://php.net/language.types.null)) – The posted email settings, if there were any validation errors
- `$adapter` ([craft\mail\transportadapters\TransportAdapterInterface](craft-mail-transportadapters-transportadapterinterface.md), [null](http://php.net/language.types.null)) – The transport adapter, if there were any validation errors

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if a plugin returns an invalid mail transport type


### `actionEditGlobalSet()`





Global Set edit form.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L295-L347)


#### Arguments

- `$globalSetId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The global set’s ID, if any.
- `$globalSet` ([craft\elements\GlobalSet](craft-elements-globalset.md), [null](http://php.net/language.types.null)) – The global set being edited, if there were any validation errors.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if the requested global set cannot be found


### `actionGeneralSettings()`





Shows the general settings form.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L55-L100)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionSaveEmailSettings()`





Saves the email settings.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L198-L225)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `actionSaveGeneralSettings()`





Saves the general settings.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L107-L122)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `actionTestEmailSettings()`





Tests the email settings.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L230-L285)






### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/SystemSettingsController.php#L42-L48)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [allowAnonymous](craft-web-controller.md#allowanonymous) is set to an invalid value






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `ALLOW_ANONYMOUS_LIVE`    |
| `ALLOW_ANONYMOUS_NEVER`   |
| `ALLOW_ANONYMOUS_OFFLINE` |



