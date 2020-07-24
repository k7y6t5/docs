---
title: craft\services\Routes
code:
  - php
  - twig
---

# Routes

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Routes](craft-services-routes.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Routes service.

An instance of the Routes service is globally accessible in Craft via [`Craft::$app->routes`](craft-base-applicationtrait.md#method-getroutes).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [configFileRoutes](craft-services-routes.md#configfileroutes)                                                              | [array](http://php.net/language.types.array)
| [dbRoutes](craft-services-routes.md#dbroutes)                                                                              | [array](http://php.net/language.types.array)
| [projectConfigRoutes](craft-services-routes.md#projectconfigroutes)                                                        | [array](http://php.net/language.types.array)

### `configFileRoutes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php)



### `dbRoutes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php)



### `projectConfigRoutes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteRouteByUid()](craft-services-routes.md#method-deleteroutebyuid)                                                                      | Deletes a route by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getConfigFileRoutes()](craft-services-routes.md#method-getconfigfileroutes)                                                                | Returns the routes defined in `config/routes.php`
| [getDbRoutes()](craft-services-routes.md#method-getdbroutes)                                                                                | Returns the routes defined in the control panel.
| [getProjectConfigRoutes()](craft-services-routes.md#method-getprojectconfigroutes)                                                          | Returns the routes defined in the project config.
| [handleDeletedSite()](craft-services-routes.md#method-handledeletedsite)                                                                    | Handle a deleted site when it affects existing routes
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveRoute()](craft-services-routes.md#method-saveroute)                                                                                    | Saves a new or existing route.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateRouteOrder()](craft-services-routes.md#method-updaterouteorder)                                                                      | Updates the route order.

### `deleteRouteByUid()`



Since

:   3.1.0



Deletes a route by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L228-L255)


#### Arguments

- `$routeUid` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getConfigFileRoutes()`





Returns the routes defined in `config/routes.php`




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L57-L91)



#### Returns

[array](http://php.net/language.types.array)



### `getDbRoutes()`

::: danger DEPRECATED
Deprecated in 3.1.0. Use [craft\services\Routes::getProjectConfigRoutes()](craft-services-routes.md#method-getprojectconfigroutes) instead.
:::




Returns the routes defined in the control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L99-L102)



#### Returns

[array](http://php.net/language.types.array)



### `getProjectConfigRoutes()`





Returns the routes defined in the project config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L109-L136)



#### Returns

[array](http://php.net/language.types.array)



### `handleDeletedSite()`





Handle a deleted site when it affects existing routes




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L262-L272)


#### Arguments

- `$event` ([craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md))




### `saveRoute()`





Saves a new or existing route.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L148-L219)


#### Arguments

- `$uriParts` ([array](http://php.net/language.types.array)) – The URI as defined by the user. This is an array where each element is either a
string or an array containing the name of a subpattern and the subpattern
- `$template` ([string](http://php.net/language.types.string)) – The template to route matching requests to
- `$siteUid` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site UID the route should be limited to, if any
- `$routeUid` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The route UID, if editing an existing route

#### Returns

[string](http://php.net/language.types.string) – $routeUid The route UID.



### `updateRouteOrder()`





Updates the route order.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Routes.php#L279-L284)


#### Arguments

- `$routeUids`








## Constants

| Constant            | Description
| ------------------- | -----------
| `CONFIG_ROUTES_KEY` |


## Events

### EVENT_AFTER_DELETE_ROUTE



Type

:   [craft\events\RouteEvent](craft-events-routeevent.md)



The event that is triggered after a route is deleted.



---



### EVENT_AFTER_SAVE_ROUTE



Type

:   [craft\events\RouteEvent](craft-events-routeevent.md)



The event that is triggered after a route is saved.



---



### EVENT_BEFORE_DELETE_ROUTE



Type

:   [craft\events\RouteEvent](craft-events-routeevent.md)



The event that is triggered before a route is deleted.



---



### EVENT_BEFORE_SAVE_ROUTE



Type

:   [craft\events\RouteEvent](craft-events-routeevent.md)



The event that is triggered before a route is saved.



---




