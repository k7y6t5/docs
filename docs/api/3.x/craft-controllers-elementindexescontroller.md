---
title: craft\controllers\ElementIndexesController
code:
  - php
  - twig
---

# ElementIndexesController

Type

:   Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\ElementIndexesController](craft-controllers-elementindexescontroller.md) &raquo;
[craft\controllers\BaseElementsController](craft-controllers-baseelementscontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   3.0.0



The ElementIndexesController class is a controller that handles various element index related actions.

Note that all actions in the controller require an authenticated Craft session via [allowAnonymous](craft-web-controller.md#allowanonymous).



[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php)


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
| [actions](craft-controllers-elementindexescontroller.md#actions)                           | [craft\base\ElementActionInterface](craft-base-elementactioninterface.md)[], [null](http://php.net/language.types.null)
| [allowAnonymous](craft-web-controller.md#allowanonymous "Defined by craft\web\Controller") | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.
| [context](craft-controllers-elementindexescontroller.md#context)                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [elementQuery](craft-controllers-elementindexescontroller.md#elementquery)                 | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md), [null](http://php.net/language.types.null)
| [elementType](craft-controllers-elementindexescontroller.md#elementtype)                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [exporters](craft-controllers-elementindexescontroller.md#exporters)                       | [craft\base\ElementExporterInterface](craft-base-elementexporterinterface.md)[], [null](http://php.net/language.types.null)
| [paginated](craft-controllers-elementindexescontroller.md#paginated)                       | [boolean](http://php.net/language.types.boolean)
| [source](craft-controllers-elementindexescontroller.md#source)                             | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)
| [sourceKey](craft-controllers-elementindexescontroller.md#sourcekey)                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [viewState](craft-controllers-elementindexescontroller.md#viewstate)                       | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

### `actions`



Type

:   [craft\base\ElementActionInterface](craft-base-elementactioninterface.md)[], [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L77)



### `context`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L46)



### `elementQuery`



Type

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L72)



### `elementType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L41)



### `exporters`



Type

:   [craft\base\ElementExporterInterface](craft-base-elementexporterinterface.md)[], [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L82)



### `paginated`

::: danger DEPRECATED
Deprecated in 3.4.6
:::


Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L67)



### `source`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L56)



### `sourceKey`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L51)



### `viewState`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L61)





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
| [actionCountElements()](craft-controllers-elementindexescontroller.md#method-actioncountelements)                                                       | Returns the total number of elements that match the current criteria.
| [actionCreateExportToken()](craft-controllers-elementindexescontroller.md#method-actioncreateexporttoken)                                               | Creates an export token.
| [actionExport()](craft-controllers-elementindexescontroller.md#method-actionexport)                                                                     | Exports element data.
| [actionGetElements()](craft-controllers-elementindexescontroller.md#method-actiongetelements)                                                           | Renders and returns an element index container, plus its first batch of elements.
| [actionGetMoreElements()](craft-controllers-elementindexescontroller.md#method-actiongetmoreelements)                                                   | Renders and returns a subsequent batch of elements for an element index.
| [actionGetSourceTreeHtml()](craft-controllers-elementindexescontroller.md#method-actiongetsourcetreehtml)                                               | Returns the source tree HTML for an element index.
| [actionPerformAction()](craft-controllers-elementindexescontroller.md#method-actionperformaction)                                                       | Performs an action on one or more selected elements.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                           | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                   | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                       | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-controllers-elementindexescontroller.md#method-beforeaction)                                                                     | This method is invoked right before an action is executed.
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
| [getElementQuery()](craft-controllers-elementindexescontroller.md#method-getelementquery)                                                               | Returns the element query that’s defining which elements will be returned in the current request.
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
| [init()](craft-controllers-baseelementscontroller.md#method-init "Defined by craft\controllers\BaseElementsController")                                 | Initializes the application component.
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

### `actionCountElements()`



Since

:   3.4.6



Returns the total number of elements that match the current criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L158-L166)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionCreateExportToken()`

::: danger DEPRECATED
Deprecated in 3.4.4
:::


Since

:   3.2.0



Creates an export token.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L323-L344)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)
- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)


### `actionExport()`



Since

:   3.4.4



Exports element data.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L287-L312)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionGetElements()`





Renders and returns an element index container, plus its first batch of elements.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L135-L139)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionGetMoreElements()`





Renders and returns a subsequent batch of elements for an element index.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L146-L150)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionGetSourceTreeHtml()`





Returns the source tree HTML for an element index.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L267-L278)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionPerformAction()`





Performs an action on one or more selected elements.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L174-L260)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the requested element action is not supported by the element type, or its parameters didn’t validate


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




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L87-L112)


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


### `getElementQuery()`





Returns the element query that’s defining which elements will be returned in the current request.

Other components can fetch this like so:

```php
$criteria = Craft::$app->controller->getElementQuery();
```


[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L125-L128)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)





## Protected Methods

| Method                                                                                                                                | Description
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------
| [actionData()](craft-controllers-elementindexescontroller.md#method-actiondata)                                                       | Returns the data for the available actions.
| [availableActions()](craft-controllers-elementindexescontroller.md#method-availableactions)                                           | Returns the available actions for the current source.
| [availableExporters()](craft-controllers-elementindexescontroller.md#method-availableexporters)                                       | Returns the available exporters for the current source.
| [context()](craft-controllers-baseelementscontroller.md#method-context "Defined by craft\controllers\BaseElementsController")         | Returns the context that this controller is being called in.
| [elementQuery()](craft-controllers-elementindexescontroller.md#method-elementquery)                                                   | Returns the element query based on the current params.
| [elementResponseData()](craft-controllers-elementindexescontroller.md#method-elementresponsedata)                                     | Returns the element data to be returned to the client.
| [elementType()](craft-controllers-baseelementscontroller.md#method-elementtype "Defined by craft\controllers\BaseElementsController") | Returns the posted element type class.
| [exporterData()](craft-controllers-elementindexescontroller.md#method-exporterdata)                                                   | Returns the data for the available exporters.
| [includeActions()](craft-controllers-elementindexescontroller.md#method-includeactions)                                               | Identify whether index actions should be included in the element index
| [source()](craft-controllers-elementindexescontroller.md#method-source)                                                               | Returns the selected source info.
| [viewState()](craft-controllers-elementindexescontroller.md#method-viewstate)                                                         | Returns the current view state.

### `actionData()`





Returns the data for the available actions.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L629-L649)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `availableActions()`





Returns the available actions for the current source.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L550-L586)



#### Returns

[craft\base\ElementActionInterface](craft-base-elementactioninterface.md)[], [null](http://php.net/language.types.null)



### `availableExporters()`



Since

:   3.4.0



Returns the available exporters for the current source.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L594-L622)



#### Returns

[craft\base\ElementExporterInterface](craft-base-elementexporterinterface.md)[], [null](http://php.net/language.types.null)



### `elementQuery()`





Returns the element query based on the current params.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L428-L498)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)



### `elementResponseData()`





Returns the element data to be returned to the client.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L507-L543)


#### Arguments

- `$includeContainer` ([boolean](http://php.net/language.types.boolean)) – Whether the element container should be included in the response data
- `$includeActions` ([boolean](http://php.net/language.types.boolean)) – Whether info about the available actions should be included in the response data

#### Returns

[array](http://php.net/language.types.array)



### `exporterData()`



Since

:   3.4.0



Returns the data for the available exporters.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L657-L673)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `includeActions()`





Identify whether index actions should be included in the element index




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L380-L383)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `source()`





Returns the selected source info.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L391-L405)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)\
  if the user is not permitted to access the requested source


### `viewState()`





Returns the current view state.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/ElementIndexesController.php#L412-L421)



#### Returns

[array](http://php.net/language.types.array)





## Constants

| Constant                  | Description
| ------------------------- | -----------
| `ALLOW_ANONYMOUS_LIVE`    |
| `ALLOW_ANONYMOUS_NEVER`   |
| `ALLOW_ANONYMOUS_OFFLINE` |



