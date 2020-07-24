---
title: craft\commerce\controllers\OrdersController
code:
  - php
  - twig
---

# OrdersController

Type

:   Class

Namespace

:   craft\commerce\controllers

Inherits

:   [craft\commerce\controllers\OrdersController](craft-commerce-controllers-orderscontroller.md) &raquo;
[craft\web\Controller](https://docs.craftcms.com/api/v3/craft-web-controller.html) &raquo;
[yii\web\Controller](https://www.yiiframework.com/doc/api/2.0/yii-web-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Since

:   2.2



Class Order Editor Controller





[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php)


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

| Property                                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAnonymous](https://docs.craftcms.com/api/v3/craft-web-controller.html#allowanonymous "Defined by craft\web\Controller") | [integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string)[] – Whether this controller’s actions can be accessed anonymously.



## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                 | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                               | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#__construct()-detail "Defined by yii\base\Controller")                     |
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                   | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                   | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                               | Sets a component property to be null.
| [actionCustomerSearch()](craft-commerce-controllers-orderscontroller.md#method-actioncustomersearch)                                                    |
| [actionDeleteOrder()](craft-commerce-controllers-orderscontroller.md#method-actiondeleteorder)                                                          | Deletes an order.
| [actionEditOrder()](craft-commerce-controllers-orderscontroller.md#method-actioneditorder)                                                              |
| [actionGetIndexSourcesBadgeCounts()](craft-commerce-controllers-orderscontroller.md#method-actiongetindexsourcesbadgecounts)                            |
| [actionGetPaymentModal()](craft-commerce-controllers-orderscontroller.md#method-actiongetpaymentmodal)                                                  | Returns Payment Modal
| [actionNewOrder()](craft-commerce-controllers-orderscontroller.md#method-actionneworder)                                                                | Create an order
| [actionOrderIndex()](craft-commerce-controllers-orderscontroller.md#method-actionorderindex)                                                            | Index of orders
| [actionPurchasableSearch()](craft-commerce-controllers-orderscontroller.md#method-actionpurchasablesearch)                                              |
| [actionPurchasablesTable()](craft-commerce-controllers-orderscontroller.md#method-actionpurchasablestable)                                              |
| [actionRefresh()](craft-commerce-controllers-orderscontroller.md#method-actionrefresh)                                                                  | The refresh action accepts a json representation of an order, recalculates it depending on the mode submitted, and returns the order as json with any validation errors.
| [actionSave()](craft-commerce-controllers-orderscontroller.md#method-actionsave)                                                                        |
| [actionSendEmail()](craft-commerce-controllers-orderscontroller.md#method-actionsendemail)                                                              |
| [actionTransactionCapture()](craft-commerce-controllers-orderscontroller.md#method-actiontransactioncapture)                                            | Captures Transaction
| [actionTransactionRefund()](craft-commerce-controllers-orderscontroller.md#method-actiontransactionrefund)                                              | Refunds transaction.
| [actionUpdateOrderAddress()](craft-commerce-controllers-orderscontroller.md#method-actionupdateorderaddress)                                            | Updates an order address
| [actionUserOrdersTable()](craft-commerce-controllers-orderscontroller.md#method-actionuserorderstable)                                                  |
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                             | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                     | This method is invoked right after an action is executed.
| [asErrorJson()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-aserrorjson "Defined by craft\web\Controller")                        | Responds to the request with a JSON error message.
| [asJson()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asJson()-detail "Defined by yii\web\Controller")                                 | Send data formatted as JSON.
| [asJsonP()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-asjsonp "Defined by craft\web\Controller")                                | Sets the response format of the given data as JSONP.
| [asRaw()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-asraw "Defined by craft\web\Controller")                                    | Sets the response format of the given data as RAW.
| [asXml()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#asXml()-detail "Defined by yii\web\Controller")                                   | Send data formatted as XML.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [beforeAction()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-beforeaction "Defined by craft\web\Controller")                      | This method is invoked right before an action is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                           | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#bindActionParams()-detail "Defined by yii\web\Controller")             | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                 | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                 | Returns a value indicating whether a property can be set.
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
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                       | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-controllers-orderscontroller.md#method-init)                                                                                    |
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [redirect()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-redirect "Defined by craft\web\Controller")                              | Redirects the browser to the specified URL.
| [redirectToPostedUrl()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-redirecttopostedurl "Defined by craft\web\Controller")        | Redirects to the URI specified in the POST.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#refresh()-detail "Defined by yii\web\Controller")                               | Refreshes the current page.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                               | Renders a view and applies layout if available.
| [renderAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-controller#renderAjax()-detail "Defined by yii\web\Controller")                         | Renders a view in response to an AJAX request.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                 | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                       | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                 | Renders a view without applying layout.
| [renderTemplate()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-rendertemplate "Defined by craft\web\Controller")                  | Renders a template.
| [requireAcceptsJson()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requireacceptsjson "Defined by craft\web\Controller")          | Throws a 400 error if the request doesn't accept JSON.
| [requireAdmin()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requireadmin "Defined by craft\web\Controller")                      | Throws a 403 error if the current user is not an admin.
| [requireAuthorization()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requireauthorization "Defined by craft\web\Controller")      | Checks whether the current user can perform a given action, and ends the request with a 403 error if they don’t.
| [requireCpRequest()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requirecprequest "Defined by craft\web\Controller")              | Throws a 400 error if the current request isn’t a control panel request.
| [requireElevatedSession()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requireelevatedsession "Defined by craft\web\Controller")  | Requires that the user has an elevated session.
| [requireGuest()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requireguest "Defined by craft\web\Controller")                      | Redirects the user to the account template if they are logged in.
| [requireLogin()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requirelogin "Defined by craft\web\Controller")                      | Redirects the user to the login template if they're not logged in.
| [requirePermission()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requirepermission "Defined by craft\web\Controller")            | Checks whether the current user has a given permission, and ends the request with a 403 error if they don’t.
| [requirePostRequest()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requirepostrequest "Defined by craft\web\Controller")          | Throws a 400 error if this isn’t a POST request
| [requireSiteRequest()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requiresiterequest "Defined by craft\web\Controller")          | Throws a 400 error if the current request isn’t a site request.
| [requireToken()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-requiretoken "Defined by craft\web\Controller")                      | Throws a 400 error if the current request doesn’t have a valid Craft token.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                     | Runs a request specified in terms of a route.
| [runAction()](https://docs.craftcms.com/api/v3/craft-web-controller.html#method-runaction "Defined by craft\web\Controller")                            | Runs an action within this controller with the specified action ID and parameters.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                             | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                     | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.

### `actionCustomerSearch()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L532-L550)


#### Arguments

- `$query` ([null](http://php.net/language.types.null))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)



### `actionDeleteOrder()`





Deletes an order.




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L231-L250)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if you try to edit a non existing Id.
- [Throwable](http://php.net/class.throwable)


### `actionEditOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L131-L158)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `actionGetIndexSourcesBadgeCounts()`



Since

:   3.0.11








[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L646-L657)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionGetPaymentModal()`





Returns Payment Modal




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L668-L736)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)
- `\Twig\Error\LoaderError`
- `\Twig\Error\RuntimeError`
- `\Twig\Error\SyntaxError`


### `actionNewOrder()`





Create an order




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L100-L122)






### `actionOrderIndex()`





Index of orders




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L82-L95)


#### Arguments

- `$orderStatusHandle` ([string](http://php.net/language.types.string))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `actionPurchasableSearch()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L425-L479)


#### Arguments

- `$query` ([null](http://php.net/language.types.null))

#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `actionPurchasablesTable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L487-L526)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)
- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `actionRefresh()`





The refresh action accepts a json representation of an order, recalculates it depending on the mode submitted,
and returns the order as json with any validation errors.




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L259-L293)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `actionSave()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L167-L222)




#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionSendEmail()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L556-L592)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionTransactionCapture()`





Captures Transaction




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L746-L774)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [craft\commerce\errors\TransactionException](craft-commerce-errors-transactionexception.md)
- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionTransactionRefund()`





Refunds transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L783-L844)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [craft\errors\MissingComponentException](https://docs.craftcms.com/api/v3/craft-errors-missingcomponentexception.html)
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionUpdateOrderAddress()`





Updates an order address




[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L603-L639)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)


### `actionUserOrdersTable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L301-L364)



#### Returns

[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response)

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [yii\web\ForbiddenHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-forbiddenhttpexception)


### `init()`










[View source](https://github.com/craftcms/commerce/blob/master/src/controllers/OrdersController.php#L68-L73)




#### Throws

- [yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `ALLOW_ANONYMOUS_LIVE`    |
| `ALLOW_ANONYMOUS_NEVER`   |
| `ALLOW_ANONYMOUS_OFFLINE` |



