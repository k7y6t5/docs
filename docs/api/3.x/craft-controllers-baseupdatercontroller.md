---
title: craft\controllers\BaseUpdaterController
code:
  - php
  - twig
---

# BaseUpdaterController

Type

:   Abstract Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\BaseUpdaterController](craft-controllers-baseupdatercontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Extended by

:   [craft\controllers\ConfigSyncController](craft-controllers-configsynccontroller.md), [craft\controllers\UpdaterController](craft-controllers-updatercontroller.md), [craft\controllers\pluginstore\InstallController](craft-controllers-pluginstore-installcontroller.md), [craft\controllers\pluginstore\RemoveController](craft-controllers-pluginstore-removecontroller.md)

Since

:   3.0.0



BaseUpdaterController provides the base class for Craft/plugin installation/updating/removal.





[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php)


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

| Property                                                                    | Description
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](craft-controllers-baseupdatercontroller.md#allowanonymous) | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.
| [data](craft-controllers-baseupdatercontroller.md#data)                     | [array](http://php.net/language.types.array) – The data associated with the current update

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





[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L48)



### `data`



Type

:   [array](http://php.net/language.types.array)



The data associated with the current update



[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L53)





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
| [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall)                                                      | Installs Composer dependencies.
| [actionComposerOptimize()](craft-controllers-baseupdatercontroller.md#method-actioncomposeroptimize)                                                    | Optimizes the Composer autoloader.
| [actionComposerRemove()](craft-controllers-baseupdatercontroller.md#method-actioncomposerremove)                                                        | Removes Composer dependencies.
| [actionFinish()](craft-controllers-baseupdatercontroller.md#method-actionfinish)                                                                        | Finishes the update process.
| [actionIndex()](craft-controllers-baseupdatercontroller.md#method-actionindex)                                                                          | Kicks off the update.
| [actionPrecheck()](craft-controllers-baseupdatercontroller.md#method-actionprecheck)                                                                    | Ensures that PHP’s memory_limit and max_execution_time settings are high enough to run Composer.
| [actionRecheckComposer()](craft-controllers-baseupdatercontroller.md#method-actionrecheckcomposer)                                                      | Rechecks for composer.json, if it couldn't be found in the initial state.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                           | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                   | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                       | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-controllers-baseupdatercontroller.md#method-beforeaction)                                                                        | This method is invoked right before an action is executed.
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

### `actionComposerInstall()`





Installs Composer dependencies.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L169-L191)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionComposerOptimize()`





Optimizes the Composer autoloader.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L222-L245)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionComposerRemove()`





Removes Composer dependencies.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L198-L214)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionFinish()`





Finishes the update process.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L252-L261)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionIndex()`





Kicks off the update.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L90-L106)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionPrecheck()`





Ensures that PHP’s memory_limit and max_execution_time settings are high enough to run Composer.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L113-L152)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionRecheckComposer()`





Rechecks for composer.json, if it couldn't be found in the initial state.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L159-L162)



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




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L60-L82)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action)) – The action to be executed.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the action should continue to run.

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if it's not a control panel request
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if there's invalid data in the request




## Protected Methods

| Method                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------
| [actionOption()](craft-controllers-baseupdatercontroller.md#method-actionoption)                         | Returns an option definition that kicks off a new action.
| [actionState()](craft-controllers-baseupdatercontroller.md#method-actionstate)                           | Sets the state info for the given next action.
| [actionStatus()](craft-controllers-baseupdatercontroller.md#method-actionstatus)                         | Returns the status message for the given action.
| [ensureComposerJson()](craft-controllers-baseupdatercontroller.md#method-ensurecomposerjson)             | Ensures that composer.json can be found.
| [finishedState()](craft-controllers-baseupdatercontroller.md#method-finishedstate)                       | Sets the state info for when the job is done.
| [initialData()](craft-controllers-baseupdatercontroller.md#method-initialdata)                           | Returns the initial data.
| [initialState()](craft-controllers-baseupdatercontroller.md#method-initialstate)                         | Returns the initial state for the updater JS.
| [installPlugin()](craft-controllers-baseupdatercontroller.md#method-installplugin)                       | Attempts to install a plugin by its handle.
| [noComposerJsonState()](craft-controllers-baseupdatercontroller.md#method-nocomposerjsonstate)           | Returns the initial state if composer.json couldn't be found.
| [pageTitle()](craft-controllers-baseupdatercontroller.md#method-pagetitle)                               | Returns the page title
| [postComposerInstallState()](craft-controllers-baseupdatercontroller.md#method-postcomposerinstallstate) | Returns the state data for after [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall) is done.
| [realInitialState()](craft-controllers-baseupdatercontroller.md#method-realinitialstate)                 | Returns the real initial state for the updater JS.
| [returnUrl()](craft-controllers-baseupdatercontroller.md#method-returnurl)                               | Returns the return URL that should be passed with a finished state.
| [runMigrations()](craft-controllers-baseupdatercontroller.md#method-runmigrations)                       | Runs the migrations for a given list of handles.
| [send()](craft-controllers-baseupdatercontroller.md#method-send)                                         | Sends a state response.
| [sendComposerError()](craft-controllers-baseupdatercontroller.md#method-sendcomposererror)               | Sends an "error" state response for a Composer error
| [sendFinished()](craft-controllers-baseupdatercontroller.md#method-sendfinished)                         | Sends a "finished" state response.
| [sendNextAction()](craft-controllers-baseupdatercontroller.md#method-sendnextaction)                     | Sends a "next action" state response.

### `actionOption()`





Returns an option definition that kicks off a new action.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L429-L433)


#### Arguments

- `$label` ([string](http://php.net/language.types.string))
- `$action` ([string](http://php.net/language.types.string))
- `$state` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `actionState()`





Sets the state info for the given next action.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L442-L451)


#### Arguments

- `$nextAction` ([string](http://php.net/language.types.string))
- `$state` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `actionStatus()`





Returns the status message for the given action.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L460-L480)


#### Arguments

- `$action` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $action isn't valid


### `ensureComposerJson()`





Ensures that composer.json can be found.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L326-L334)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether composer.json can be found



### `finishedState()`





Sets the state info for when the job is done.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L488-L498)


#### Arguments

- `$state` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `initialData()`





Returns the initial data.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L275)



#### Returns

[array](http://php.net/language.types.array)



### `initialState()`





Returns the initial state for the updater JS.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L282)



#### Returns

[array](http://php.net/language.types.array)



### `installPlugin()`





Attempts to install a plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L582-L622)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))
- `$edition` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array) – Array with installation results



### `noComposerJsonState()`





Returns the initial state if composer.json couldn't be found.



See also [ensureComposerJson()](craft-controllers-baseupdatercontroller.md#method-ensurecomposerjson)
[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L342-L351)



#### Returns

[array](http://php.net/language.types.array)



### `pageTitle()`





Returns the page title




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L268)



#### Returns

[string](http://php.net/language.types.string)



### `postComposerInstallState()`





Returns the state data for after [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall) is done.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L312)



#### Returns

[array](http://php.net/language.types.array)



### `realInitialState()`





Returns the real initial state for the updater JS.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L290-L305)


#### Arguments

- `$force` ([boolean](http://php.net/language.types.boolean)) – Whether to go through with the update even if Maintenance Mode is enabled

#### Returns

[array](http://php.net/language.types.array)



### `returnUrl()`





Returns the return URL that should be passed with a finished state.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L319)



#### Returns

[string](http://php.net/language.types.string)



### `runMigrations()`





Runs the migrations for a given list of handles.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L507-L573)


#### Arguments

- `$handles` ([string](http://php.net/language.types.string)[])
- `$restoreAction` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)



### `send()`





Sends a state response.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L359-L365)


#### Arguments

- `$state` ([array](http://php.net/language.types.array))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `sendComposerError()`





Sends an "error" state response for a Composer error




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L401-L419)


#### Arguments

- `$error` ([string](http://php.net/language.types.string)) – The status message to show
- `$e` ([Throwable](http://php.net/class.throwable)) – The exception that was thrown
- `$output` ([string](http://php.net/language.types.string)) – The Composer output
- `$state` ([array](http://php.net/language.types.array))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `sendFinished()`





Sends a "finished" state response.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L386-L390)


#### Arguments

- `$state` ([array](http://php.net/language.types.array))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `sendNextAction()`





Sends a "next action" state response.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/BaseUpdaterController.php#L374-L378)


#### Arguments

- `$nextAction` ([string](http://php.net/language.types.string)) – The next action that should be run
- `$state` ([array](http://php.net/language.types.array))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)





## Constants

| Constant                   | Description
| -------------------------- | -----------
| `ACTION_COMPOSER_INSTALL`  |
| `ACTION_COMPOSER_OPTIMIZE` |
| `ACTION_COMPOSER_REMOVE`   |
| `ACTION_FINISH`            |
| `ACTION_PRECHECK`          |
| `ACTION_RECHECK_COMPOSER`  |
| `ALLOW_ANONYMOUS_LIVE`     |
| `ALLOW_ANONYMOUS_NEVER`    |
| `ALLOW_ANONYMOUS_OFFLINE`  |



