---
title: craft\controllers\TemplatesController
code:
  - php
  - twig
---

# TemplatesController

Type

:   Class

Namespace

:   craft\controllers

Inherits

:   [craft\controllers\TemplatesController](craft-controllers-templatescontroller.md) &raquo;
[craft\web\Controller](craft-web-controller.md) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   3.0.0



The TemplatesController class is a controller that handles various template rendering related tasks for both the
control panel and front-end of a Craft site.

Note that all actions in the controller are open to do not require an authenticated Craft session in order to execute.



[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [action](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$action-detail "Defined by yii\base\Controller")                           | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The action that is currently being executed.
| [actionParams](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#$actionParams-detail "Defined by yii\web\Controller")                 | [array](http://php.net/language.types.array) – The parameters bound to the current action.
| [allowAnonymous](craft-controllers-templatescontroller.md#allowanonymous)                                                                        | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.
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





[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L40-L47)







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
| [actionConfigSyncKickoff()](craft-controllers-templatescontroller.md#method-actionconfigsynckickoff)                                                    | Renders the Project Config Sync kickoff template.
| [actionIncompatibleConfigAlert()](craft-controllers-templatescontroller.md#method-actionincompatibleconfigalert)                                        | Renders the incompatible project config alert template.
| [actionManualUpdateNotification()](craft-controllers-templatescontroller.md#method-actionmanualupdatenotification)                                      | Renders the Manual Update notification template.
| [actionOffline()](craft-controllers-templatescontroller.md#method-actionoffline)                                                                        | Shows the 'offline' template.
| [actionRender()](craft-controllers-templatescontroller.md#method-actionrender)                                                                          | Renders a template.
| [actionRenderError()](craft-controllers-templatescontroller.md#method-actionrendererror)                                                                | Renders an error template.
| [actionRequirementsCheck()](craft-controllers-templatescontroller.md#method-actionrequirementscheck)                                                    |
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](craft-web-controller.md#method-aserrorjson "Defined by craft\web\Controller")                                                           | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](craft-web-controller.md#method-asjsonp "Defined by craft\web\Controller")                                                                   | Sets the response format of the given data as JSONP.
| [asRaw()](craft-web-controller.md#method-asraw "Defined by craft\web\Controller")                                                                       | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](craft-controllers-templatescontroller.md#method-beforeaction)                                                                          | This method is invoked right before an action is executed.
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

### `actionConfigSyncKickoff()`





Renders the Project Config Sync kickoff template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L132-L135)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionIncompatibleConfigAlert()`





Renders the incompatible project config alert template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L142-L145)


#### Arguments

- `$issues`

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionManualUpdateNotification()`





Renders the Manual Update notification template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L122-L125)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionOffline()`





Shows the 'offline' template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L106-L115)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionRender()`





Renders a template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L80-L99)


#### Arguments

- `$template` ([string](http://php.net/language.types.string))
- `$variables` ([array](http://php.net/language.types.array))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\NotFoundHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-notfoundhttpexception)\
  if the requested template cannot be found


### `actionRenderError()`





Renders an error template.




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L193-L250)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionRequirementsCheck()`










[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L151-L186)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)\
  if it's an Ajax request and the server doesn’t meet Craft’s requirements


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




[View source](https://github.com/craftcms/cms/blob/master/src/controllers/TemplatesController.php#L52-L70)


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



