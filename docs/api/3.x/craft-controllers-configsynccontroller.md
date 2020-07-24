---
title: craft\controllers\ConfigSyncController
code:
  - php
  - twig
---

# ConfigSyncController

Type

:   Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\ConfigSyncController](craft-controllers-configsynccontroller.md) &raquo;
[craft\controllers\BaseUpdaterController](craft-controllers-baseupdatercontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   3.1.0



ConfigSyncController handles the Project Config Sync workflow





[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php)


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

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](craft-controllers-baseupdatercontroller.md#allowanonymous "Defined by craft\controllers\BaseUpdaterController") | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.
| [data](craft-controllers-baseupdatercontroller.md#data "Defined by craft\controllers\BaseUpdaterController")                     | [array](http://php.net/language.types.array) – The data associated with the current update



## Public Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                 | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                 | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                               | Sets an object property to null.
| [actionApplyYamlChanges()](craft-controllers-configsynccontroller.md#method-actionapplyyamlchanges)                                                       | Applies changes in `project.yaml` to the project config.
| [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall "Defined by craft\controllers\BaseUpdaterController")   | Installs Composer dependencies.
| [actionComposerOptimize()](craft-controllers-baseupdatercontroller.md#method-actioncomposeroptimize "Defined by craft\controllers\BaseUpdaterController") | Optimizes the Composer autoloader.
| [actionComposerRemove()](craft-controllers-baseupdatercontroller.md#method-actioncomposerremove "Defined by craft\controllers\BaseUpdaterController")     | Removes Composer dependencies.
| [actionFinish()](craft-controllers-baseupdatercontroller.md#method-actionfinish "Defined by craft\controllers\BaseUpdaterController")                     | Finishes the update process.
| [actionIndex()](craft-controllers-baseupdatercontroller.md#method-actionindex "Defined by craft\controllers\BaseUpdaterController")                       | Kicks off the update.
| [actionInstallPlugin()](craft-controllers-configsynccontroller.md#method-actioninstallplugin)                                                             | Installs a plugin.
| [actionPrecheck()](craft-controllers-baseupdatercontroller.md#method-actionprecheck "Defined by craft\controllers\BaseUpdaterController")                 | Ensures that PHP’s memory_limit and max_execution_time settings are high enough to run Composer.
| [actionRecheckComposer()](craft-controllers-baseupdatercontroller.md#method-actionrecheckcomposer "Defined by craft\controllers\BaseUpdaterController")   | Rechecks for composer.json, if it couldn't be found in the initial state.
| [actionRegenerateYaml()](craft-controllers-configsynccontroller.md#method-actionregenerateyaml)                                                           | Regenerates `project.yaml` based on the loaded project config.
| [actionRetry()](craft-controllers-configsynccontroller.md#method-actionretry)                                                                             | Re-kicks off the sync, after the user has had a chance to run `composer install`
| [actionUninstallPlugin()](craft-controllers-configsynccontroller.md#method-actionuninstallplugin)                                                         | Uninstalls a plugin.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                               | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                       | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                             | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                   | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                     | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                         | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                     | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                   | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                 | Attaches a list of behaviors to the component.
| [beforeAction()](craft-controllers-baseupdatercontroller.md#method-beforeaction "Defined by craft\controllers\BaseUpdaterController")                     | This method is invoked right before an action is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                             | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#bindActionParams()-detail "Defined by yii\base\Controller")             | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                           | Returns the fully qualified name of this class.
| [createAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#createAction()-detail "Defined by yii\base\Controller")                     | Creates an action based on the given action ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                   | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                 | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                 | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [findLayoutFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#findLayoutFile()-detail "Defined by yii\base\Controller")                 | Finds the applicable layout file.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                         | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                       | Returns all behaviors attached to this component.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getModules()-detail "Defined by yii\base\Controller")                         | Returns all ancestor modules of this controller.
| [getRoute()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getRoute()-detail "Defined by yii\base\Controller")                             | Returns the route of the current request.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getUniqueId()-detail "Defined by yii\base\Controller")                       | Returns the unique ID of the controller.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getView()-detail "Defined by yii\base\Controller")                               | Returns the view object that can be used to render views or view files.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface#getViewPath()-detail "Defined by yii\base\ViewContextInterface")   |
| [goBack()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#goBack()-detail "Defined by yii\web\Controller")                                   | Redirects the browser to the last visited page.
| [goHome()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#goHome()-detail "Defined by yii\web\Controller")                                   | Redirects the browser to the home page.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")               | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                       | Returns a value indicating whether a property is defined.
| [init()](craft-web-controller.md#method-init "Defined by craft\web\Controller")                                                                           | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                         | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                           | Attaches an event handler to an event.
| [redirect()](craft-web-controller.md#method-redirect "Defined by craft\web\Controller")                                                                   | Redirects the browser to the specified URL.
| [redirectToPostedUrl()](craft-web-controller.md#method-redirecttopostedurl "Defined by craft\web\Controller")                                             | Redirects to the URI specified in the POST.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#refresh()-detail "Defined by yii\web\Controller")                                 | Refreshes the current page.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                                 | Renders a view and applies layout if available.
| [renderAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#renderAjax()-detail "Defined by yii\web\Controller")                           | Renders a view in response to an AJAX request.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                   | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                         | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                   | Renders a view without applying layout.
| [renderTemplate()](craft-web-controller.md#method-rendertemplate "Defined by craft\web\Controller")                                                       | Renders a template.
| [requireAcceptsJson()](craft-web-controller.md#method-requireacceptsjson "Defined by craft\web\Controller")                                               | Throws a 400 error if the request doesn't accept JSON.
| [requireAdmin()](craft-web-controller.md#method-requireadmin "Defined by craft\web\Controller")                                                           | Throws a 403 error if the current user is not an admin.
| [requireAuthorization()](craft-web-controller.md#method-requireauthorization "Defined by craft\web\Controller")                                           | Checks whether the current user can perform a given action, and ends the request with a 403 error if they don’t.
| [requireCpRequest()](craft-web-controller.md#method-requirecprequest "Defined by craft\web\Controller")                                                   | Throws a 400 error if the current request isn’t a control panel request.
| [requireElevatedSession()](craft-web-controller.md#method-requireelevatedsession "Defined by craft\web\Controller")                                       | Requires that the user has an elevated session.
| [requireGuest()](craft-web-controller.md#method-requireguest "Defined by craft\web\Controller")                                                           | Redirects the user to the account template if they are logged in.
| [requireLogin()](craft-web-controller.md#method-requirelogin "Defined by craft\web\Controller")                                                           | Redirects the user to the login template if they're not logged in.
| [requirePermission()](craft-web-controller.md#method-requirepermission "Defined by craft\web\Controller")                                                 | Checks whether the current user has a given permission, and ends the request with a 403 error if they don’t.
| [requirePostRequest()](craft-web-controller.md#method-requirepostrequest "Defined by craft\web\Controller")                                               | Throws a 400 error if this isn’t a POST request
| [requireSiteRequest()](craft-web-controller.md#method-requiresiterequest "Defined by craft\web\Controller")                                               | Throws a 400 error if the current request isn’t a site request.
| [requireToken()](craft-web-controller.md#method-requiretoken "Defined by craft\web\Controller")                                                           | Throws a 400 error if the current request doesn’t have a valid Craft token.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                       | Runs a request specified in terms of a route.
| [runAction()](craft-web-controller.md#method-runaction "Defined by craft\web\Controller")                                                                 | Runs an action within this controller with the specified action ID and parameters.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                               | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                       | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                 | Triggers an event.

### `actionApplyYamlChanges()`





Applies changes in `project.yaml` to the project config.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L50-L55)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `actionInstallPlugin()`





Installs a plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L98-L123)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionRegenerateYaml()`





Regenerates `project.yaml` based on the loaded project config.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L63-L68)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `actionRetry()`





Re-kicks off the sync, after the user has had a chance to run `composer install`




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L39-L42)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionUninstallPlugin()`





Uninstalls a plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L75-L91)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)





## Protected Methods

| Method                                                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------
| [actionOption()](craft-controllers-baseupdatercontroller.md#method-actionoption "Defined by craft\controllers\BaseUpdaterController")               | Returns an option definition that kicks off a new action.
| [actionState()](craft-controllers-baseupdatercontroller.md#method-actionstate "Defined by craft\controllers\BaseUpdaterController")                 | Sets the state info for the given next action.
| [actionStatus()](craft-controllers-configsynccontroller.md#method-actionstatus)                                                                     | Returns the status message for the given action.
| [ensureComposerJson()](craft-controllers-baseupdatercontroller.md#method-ensurecomposerjson "Defined by craft\controllers\BaseUpdaterController")   | Ensures that composer.json can be found.
| [finishedState()](craft-controllers-baseupdatercontroller.md#method-finishedstate "Defined by craft\controllers\BaseUpdaterController")             | Sets the state info for when the job is done.
| [initialData()](craft-controllers-configsynccontroller.md#method-initialdata)                                                                       | Returns the initial data.
| [initialState()](craft-controllers-configsynccontroller.md#method-initialstate)                                                                     | Returns the initial state for the updater JS.
| [installPlugin()](craft-controllers-baseupdatercontroller.md#method-installplugin "Defined by craft\controllers\BaseUpdaterController")             | Attempts to install a plugin by its handle.
| [noComposerJsonState()](craft-controllers-baseupdatercontroller.md#method-nocomposerjsonstate "Defined by craft\controllers\BaseUpdaterController") | Returns the initial state if composer.json couldn't be found.
| [pageTitle()](craft-controllers-configsynccontroller.md#method-pagetitle)                                                                           | Returns the page title
| [postComposerInstallState()](craft-controllers-configsynccontroller.md#method-postcomposerinstallstate)                                             | Returns the state data for after [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall) is done.
| [realInitialState()](craft-controllers-baseupdatercontroller.md#method-realinitialstate "Defined by craft\controllers\BaseUpdaterController")       | Returns the real initial state for the updater JS.
| [returnUrl()](craft-controllers-configsynccontroller.md#method-returnurl)                                                                           | Returns the return URL that should be passed with a finished state.
| [runMigrations()](craft-controllers-baseupdatercontroller.md#method-runmigrations "Defined by craft\controllers\BaseUpdaterController")             | Runs the migrations for a given list of handles.
| [send()](craft-controllers-baseupdatercontroller.md#method-send "Defined by craft\controllers\BaseUpdaterController")                               | Sends a state response.
| [sendComposerError()](craft-controllers-baseupdatercontroller.md#method-sendcomposererror "Defined by craft\controllers\BaseUpdaterController")     | Sends an "error" state response for a Composer error
| [sendFinished()](craft-controllers-baseupdatercontroller.md#method-sendfinished "Defined by craft\controllers\BaseUpdaterController")               | Sends a "finished" state response.
| [sendNextAction()](craft-controllers-baseupdatercontroller.md#method-sendnextaction "Defined by craft\controllers\BaseUpdaterController")           | Sends a "next action" state response.

### `actionStatus()`





Returns the status message for the given action.








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L234-L256)


#### Arguments

- `$action` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $action isn't valid


### `initialData()`





Returns the initial data.








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L136-L153)



#### Returns

[array](http://php.net/language.types.array)



### `initialState()`





Returns the initial state for the updater JS.








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L158-L213)



#### Returns

[array](http://php.net/language.types.array)



### `pageTitle()`





Returns the page title








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L128-L131)



#### Returns

[string](http://php.net/language.types.string)



### `postComposerInstallState()`





Returns the state data for after [actionComposerInstall()](craft-controllers-baseupdatercontroller.md#method-actioncomposerinstall) is done.








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L218-L221)



#### Returns

[array](http://php.net/language.types.array)



### `returnUrl()`





Returns the return URL that should be passed with a finished state.








[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ConfigSyncController.php#L226-L229)



#### Returns

[string](http://php.net/language.types.string)





## Constants

| Constant                    | Description
| --------------------------- | -----------
| `ACTION_APPLY_YAML_CHANGES` |
| `ACTION_COMPOSER_INSTALL`   |
| `ACTION_COMPOSER_OPTIMIZE`  |
| `ACTION_COMPOSER_REMOVE`    |
| `ACTION_FINISH`             |
| `ACTION_INSTALL_PLUGIN`     |
| `ACTION_PRECHECK`           |
| `ACTION_RECHECK_COMPOSER`   |
| `ACTION_REGENERATE_YAML`    |
| `ACTION_RETRY`              |
| `ACTION_UNINSTALL_PLUGIN`   |
| `ALLOW_ANONYMOUS_LIVE`      |
| `ALLOW_ANONYMOUS_NEVER`     |
| `ALLOW_ANONYMOUS_OFFLINE`   |



