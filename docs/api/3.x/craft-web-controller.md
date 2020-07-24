---
title: craft\web\Controller
code:
  - php
  - twig
---

# Controller

Type

:   Abstract Class

Namespace

:   craft\web

Inherits

:   [craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Extended by

:   [craft\controllers\AppController](craft-controllers-appcontroller.md), [craft\controllers\AssetSettingsController](craft-controllers-assetsettingscontroller.md), [craft\controllers\AssetTransformsController](craft-controllers-assettransformscontroller.md), [craft\controllers\AssetsController](craft-controllers-assetscontroller.md), [craft\controllers\BaseElementsController](craft-controllers-baseelementscontroller.md), [craft\controllers\BaseEntriesController](craft-controllers-baseentriescontroller.md), [craft\controllers\BaseUpdaterController](craft-controllers-baseupdatercontroller.md), [craft\controllers\CategoriesController](craft-controllers-categoriescontroller.md), [craft\controllers\ChartsController](craft-controllers-chartscontroller.md), [craft\controllers\ConfigSyncController](craft-controllers-configsynccontroller.md), [craft\controllers\DashboardController](craft-controllers-dashboardcontroller.md), [craft\controllers\DraftsController](craft-controllers-draftscontroller.md), [craft\controllers\ElementIndexSettingsController](craft-controllers-elementindexsettingscontroller.md), [craft\controllers\ElementIndexesController](craft-controllers-elementindexescontroller.md), [craft\controllers\ElementsController](craft-controllers-elementscontroller.md), [craft\controllers\EntriesController](craft-controllers-entriescontroller.md), [craft\controllers\EntryRevisionsController](craft-controllers-entryrevisionscontroller.md), [craft\controllers\ExportController](craft-controllers-exportcontroller.md), [craft\controllers\FieldsController](craft-controllers-fieldscontroller.md), [craft\controllers\GlobalsController](craft-controllers-globalscontroller.md), [craft\controllers\GraphqlController](craft-controllers-graphqlcontroller.md), [craft\controllers\InstallController](craft-controllers-installcontroller.md), [craft\controllers\LivePreviewController](craft-controllers-livepreviewcontroller.md), [craft\controllers\NotFoundController](craft-controllers-notfoundcontroller.md), [craft\controllers\PluginStoreController](craft-controllers-pluginstorecontroller.md), [craft\controllers\PluginsController](craft-controllers-pluginscontroller.md), [craft\controllers\PreviewController](craft-controllers-previewcontroller.md), [craft\controllers\QueueController](craft-controllers-queuecontroller.md), [craft\controllers\RebrandController](craft-controllers-rebrandcontroller.md), [craft\controllers\RoutesController](craft-controllers-routescontroller.md), [craft\controllers\SectionsController](craft-controllers-sectionscontroller.md), [craft\controllers\SitesController](craft-controllers-sitescontroller.md), [craft\controllers\StructuresController](craft-controllers-structurescontroller.md), [craft\controllers\SystemMessagesController](craft-controllers-systemmessagescontroller.md), [craft\controllers\SystemSettingsController](craft-controllers-systemsettingscontroller.md), [craft\controllers\TagsController](craft-controllers-tagscontroller.md), [craft\controllers\TemplatesController](craft-controllers-templatescontroller.md), [craft\controllers\UpdaterController](craft-controllers-updatercontroller.md), [craft\controllers\UserSettingsController](craft-controllers-usersettingscontroller.md), [craft\controllers\UsersController](craft-controllers-userscontroller.md), [craft\controllers\UtilitiesController](craft-controllers-utilitiescontroller.md), [craft\controllers\VolumesController](craft-controllers-volumescontroller.md), [craft\controllers\pluginstore\InstallController](craft-controllers-pluginstore-installcontroller.md), [craft\controllers\pluginstore\RemoveController](craft-controllers-pluginstore-removecontroller.md), [craft\test\mockclasses\controllers\TestController](craft-test-mockclasses-controllers-testcontroller.md)

Since

:   3.0.0



Controller is a base class that all controllers in Craft extend.

It extends Yii’s [yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller), overwriting specific methods as required.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php)


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

| Property                                                 | Description
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](craft-web-controller.md#allowanonymous) | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.

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



[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L58)





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
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson)                                                                                             | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp)                                                                                                     | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw)                                                                                                         | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-web-controller.md#method-beforeaction)                                                                                           | This method is invoked right before an action is executed.
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
| [init()](craft-web-controller.md#method-init)                                                                                                           | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [redirect()](craft-web-controller.md#method-redirect)                                                                                                   | Redirects the browser to the specified URL.
| [redirectToPostedUrl()](craft-web-controller.md#method-redirecttopostedurl)                                                                             | Redirects to the URI specified in the POST.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#refresh()-detail "Defined by yii\web\Controller")                               | Refreshes the current page.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                               | Renders a view and applies layout if available.
| [renderAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#renderAjax()-detail "Defined by yii\web\Controller")                         | Renders a view in response to an AJAX request.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                 | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                       | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                 | Renders a view without applying layout.
| [renderTemplate()](craft-web-controller.md#method-rendertemplate)                                                                                       | Renders a template.
| [requireAcceptsJson()](craft-web-controller.md#method-requireacceptsjson)                                                                               | Throws a 400 error if the request doesn't accept JSON.
| [requireAdmin()](craft-web-controller.md#method-requireadmin)                                                                                           | Throws a 403 error if the current user is not an admin.
| [requireAuthorization()](craft-web-controller.md#method-requireauthorization)                                                                           | Checks whether the current user can perform a given action, and ends the request with a 403 error if they don’t.
| [requireCpRequest()](craft-web-controller.md#method-requirecprequest)                                                                                   | Throws a 400 error if the current request isn’t a control panel request.
| [requireElevatedSession()](craft-web-controller.md#method-requireelevatedsession)                                                                       | Requires that the user has an elevated session.
| [requireGuest()](craft-web-controller.md#method-requireguest)                                                                                           | Redirects the user to the account template if they are logged in.
| [requireLogin()](craft-web-controller.md#method-requirelogin)                                                                                           | Redirects the user to the login template if they're not logged in.
| [requirePermission()](craft-web-controller.md#method-requirepermission)                                                                                 | Checks whether the current user has a given permission, and ends the request with a 403 error if they don’t.
| [requirePostRequest()](craft-web-controller.md#method-requirepostrequest)                                                                               | Throws a 400 error if this isn’t a POST request
| [requireSiteRequest()](craft-web-controller.md#method-requiresiterequest)                                                                               | Throws a 400 error if the current request isn’t a site request.
| [requireToken()](craft-web-controller.md#method-requiretoken)                                                                                           | Throws a 400 error if the current request doesn’t have a valid Craft token.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                     | Runs a request specified in terms of a route.
| [runAction()](craft-web-controller.md#method-runaction)                                                                                                 | Runs an action within this controller with the specified action ID and parameters.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                             | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                     | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.

### `asErrorJson()`





Responds to the request with a JSON error message.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L464-L467)


#### Arguments

- `$error` ([string](http://php.net/language.types.string)) – The error message.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `asJsonP()`





Sets the response format of the given data as JSONP.



See also:

- [yii\web\Response::$format](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$format-detail)
- [yii\web\Response::FORMAT_JSONP](https://www.yiiframework.com/doc/api/2.0/yii-web-response#FORMAT_JSONP-detail)
- [yii\web\JsonResponseFormatter](https://www.yiiframework.com/doc/api/2.0/yii-web-jsonresponseformatter)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L431-L438)


#### Arguments

- `$data` (`mixed`) – The data that should be formatted.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response) – A response that is configured to send `$data` formatted as JSON.



### `asRaw()`





Sets the response format of the given data as RAW.



See also:

- [yii\web\Response::$format](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$format-detail)
- [yii\web\Response::FORMAT_RAW](https://www.yiiframework.com/doc/api/2.0/yii-web-response#FORMAT_RAW-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L449-L456)


#### Arguments

- `$data` (`mixed`) – The data that should *not* be formatted.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response) – A response that is configured to send `$data` without formatting.



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


[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L125-L170)


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


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L64-L90)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [allowAnonymous](craft-web-controller.md#allowanonymous) is set to an invalid value


### `redirect()`





Redirects the browser to the specified URL.



This method is a shortcut to [craft\web\Response::redirect()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#redirect()-detail).

You can use it in an action by returning the [craft\web\Response](craft-web-response.md) directly:

```php
// stop executing this action and redirect to login page
return $this->redirect(['login']);
```




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L473-L484)


#### Arguments

- `$url` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – The URL to be redirected to. This can be in one of the following formats:

- a string representing a URL (e.g. "http://example.com")
- a string representing a URL alias (e.g. "@example.com")
- an array in the format of `[$route, ...name-value pairs...]` (e.g. `['site/index', 'ref' => 1]`)
  [yii\helpers\Url::to()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseurl#to()-detail) will be used to convert the array into a URL.

Any relative URL that starts with a single forward slash "/" will be converted
into an absolute one by prepending it with the host info of the current request.
- `$statusCode` ([integer](http://php.net/language.types.integer)) – The HTTP status code. Defaults to 302.
See <https://tools.ietf.org/html/rfc2616#section-10>
for details about HTTP status code

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response) – The current response object



### `redirectToPostedUrl()`





Redirects to the URI specified in the POST.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L404-L419)


#### Arguments

- `$object` (`mixed`) – Object containing properties that should be parsed for in the URL.
- `$default` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The default URL to redirect them to, if no 'redirect' parameter exists. If this is left
null, then the current request’s path will be used.

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the redirect param was tampered with


### `renderTemplate()`





Renders a template.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L216-L241)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The name of the template to load
- `$variables` ([array](http://php.net/language.types.array)) – The variables that should be available to the template
- `$templateMode` ([string](http://php.net/language.types.string)) – The template mode to use

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the view file does not exist.


### `requireAcceptsJson()`





Throws a 400 error if the request doesn't accept JSON.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L349-L354)




#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request doesn't accept JSON


### `requireAdmin()`





Throws a 403 error if the current user is not an admin.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L278-L292)


#### Arguments

- `$requireAdminChanges` ([boolean](http://php.net/language.types.boolean)) – Whether the <config:allowAdminChanges>
config setting must also be enabled.


#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the current user is not an admin


### `requireAuthorization()`





Checks whether the current user can perform a given action, and ends the request with a 403 error if they don’t.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L313-L318)


#### Arguments

- `$action` ([string](http://php.net/language.types.string)) – The name of the action to check.


#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the current user is not authorized


### `requireCpRequest()`



Since

:   3.1.0



Throws a 400 error if the current request isn’t a control panel request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L375-L380)




#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if this is not a control panel request


### `requireElevatedSession()`





Requires that the user has an elevated session.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L325-L330)




#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the current user does not have an elevated session


### `requireGuest()`



Since

:   3.4.0



Redirects the user to the account template if they are logged in.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L261-L269)






### `requireLogin()`





Redirects the user to the login template if they're not logged in.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L246-L254)






### `requirePermission()`





Checks whether the current user has a given permission, and ends the request with a 403 error if they don’t.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L300-L305)


#### Arguments

- `$permissionName` ([string](http://php.net/language.types.string)) – The name of the permission.


#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the current user doesn’t have the required permission


### `requirePostRequest()`





Throws a 400 error if this isn’t a POST request




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L337-L342)




#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request is not a post request


### `requireSiteRequest()`



Since

:   3.1.0



Throws a 400 error if the current request isn’t a site request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L388-L393)




#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request is not a site request


### `requireToken()`





Throws a 400 error if the current request doesn’t have a valid Craft token.



See also [craft\web\Request::getToken()](craft-web-request.md#method-gettoken)
[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L362-L367)




#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request does not have a valid Craft token


### `runAction()`





Runs an action within this controller with the specified action ID and parameters.



If the action ID is empty, the method will use [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/web/Controller.php#L175-L205)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – The ID of the action to be executed.
- `$params` ([array](http://php.net/language.types.array)) – The parameters (name-value pairs) to be passed to the action.

#### Returns

`mixed` – The result of the action.

#### Throws

- [yii\base\InvalidRouteException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidrouteexception)\
  if the requested action ID cannot be resolved into an action successfully.






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `ALLOW_ANONYMOUS_LIVE`    |
| `ALLOW_ANONYMOUS_NEVER`   |
| `ALLOW_ANONYMOUS_OFFLINE` |



