---
title: craft\web\UrlManager
code:
  - php
  - twig
---

# UrlManager

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\UrlManager](craft-web-urlmanager.md) &raquo;
[yii\web\UrlManager](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$baseUrl-detail "Defined by yii\web\UrlManager")                         | [string](http://php.net/language.types.string) – The base URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cache](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$cache-detail "Defined by yii\web\UrlManager")                             | [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The cache object or the application component ID of the cache object.
| [checkToken](craft-web-urlmanager.md#checktoken)                                                                                               | [boolean](http://php.net/language.types.boolean) – Whether [parseRequest()](craft-web-urlmanager.md#method-parserequest) should check for a token on the request and route the request based on that.
| [enablePrettyUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$enablePrettyUrl-detail "Defined by yii\web\UrlManager")         | [boolean](http://php.net/language.types.boolean) – Whether to enable pretty URLs.
| [enableStrictParsing](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$enableStrictParsing-detail "Defined by yii\web\UrlManager") | [boolean](http://php.net/language.types.boolean) – Whether to enable strict parsing.
| [hostInfo](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$hostInfo-detail "Defined by yii\web\UrlManager")                       | [string](http://php.net/language.types.string) – The host info (e.g. `http://www.
| [matchedElement](craft-web-urlmanager.md#matchedelement)                                                                                       | [craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean)
| [normalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$normalizer-detail "Defined by yii\web\UrlManager")                   | [yii\web\UrlNormalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlnormalizer), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The configuration for [yii\web\UrlNormalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlnormalizer) used by this UrlManager.
| [routeParam](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$routeParam-detail "Defined by yii\web\UrlManager")                   | [string](http://php.net/language.types.string) – The GET parameter name for route.
| [routeParams](craft-web-urlmanager.md#routeparams)                                                                                             | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)
| [ruleConfig](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$ruleConfig-detail "Defined by yii\web\UrlManager")                   | [array](http://php.net/language.types.array) – The default configuration of URL rules.
| [rules](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$rules-detail "Defined by yii\web\UrlManager")                             | [array](http://php.net/language.types.array) – The rules for creating and parsing URLs when [enablePrettyUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$enablePrettyUrl-detail) is `true`.
| [scriptUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$scriptUrl-detail "Defined by yii\web\UrlManager")                     | [string](http://php.net/language.types.string) – The entry script URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [showScriptName](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$showScriptName-detail "Defined by yii\web\UrlManager")           | [boolean](http://php.net/language.types.boolean) – Whether to show entry script name in the constructed URL.
| [suffix](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$suffix-detail "Defined by yii\web\UrlManager")                           | [string](http://php.net/language.types.string) – The URL suffix used when [enablePrettyUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$enablePrettyUrl-detail) is `true`.

### `checkToken`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether [parseRequest()](craft-web-urlmanager.md#method-parserequest) should check for a token on the request and route the request based on that.



[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L73)



### `matchedElement`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php)



### `routeParams`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php)





## Protected Properties

| Property                                                                                                                 | Description
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------
| [cacheKey](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$cacheKey-detail "Defined by yii\web\UrlManager") | [string](http://php.net/language.types.string) – The cache key for cached rules



## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-web-urlmanager.md#method-construct)                                                                                   | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addRules()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#addRules()-detail "Defined by yii\web\UrlManager")                 | Adds additional URL rules.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createAbsoluteUrl()](craft-web-urlmanager.md#method-createabsoluteurl)                                                                     | Creates an absolute URL using the given route and query parameters.
| [createUrl()](craft-web-urlmanager.md#method-createurl)                                                                                     | Creates a URL using the given route and query parameters.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBaseUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#getBaseUrl()-detail "Defined by yii\web\UrlManager")             | Returns the base URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getHostInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#getHostInfo()-detail "Defined by yii\web\UrlManager")           | Returns the host info that is used by [createAbsoluteUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createAbsoluteUrl()-detail) to prepend to created URLs.
| [getMatchedElement()](craft-web-urlmanager.md#method-getmatchedelement)                                                                     | Returns the element that was matched by the URI.
| [getRouteParams()](craft-web-urlmanager.md#method-getrouteparams)                                                                           | Returns the route params, or null if we haven't parsed the URL yet.
| [getScriptUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#getScriptUrl()-detail "Defined by yii\web\UrlManager")         | Returns the entry script URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [parseRequest()](craft-web-urlmanager.md#method-parserequest)                                                                               | Parses the user request.
| [setBaseUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#setBaseUrl()-detail "Defined by yii\web\UrlManager")             | Sets the base URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [setHostInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#setHostInfo()-detail "Defined by yii\web\UrlManager")           | Sets the host info that is used by [createAbsoluteUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createAbsoluteUrl()-detail) to prepend to created URLs.
| [setMatchedElement()](craft-web-urlmanager.md#method-setmatchedelement)                                                                     | Sets the matched element for the request.
| [setRouteParams()](craft-web-urlmanager.md#method-setrouteparams)                                                                           | Sets params to be passed to the routed controller action.
| [setScriptUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#setScriptUrl()-detail "Defined by yii\web\UrlManager")         | Sets the entry script URL that is used by [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) to prepend to created URLs.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L95-L101)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))




### `createAbsoluteUrl()`





Creates an absolute URL using the given route and query parameters.



This method prepends the URL created by [createUrl()](craft-web-urlmanager.md#method-createurl) with the [hostInfo](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$hostInfo-detail).

Note that unlike [yii\helpers\Url::toRoute()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseurl#toRoute()-detail), this method always treats the given route
as an absolute route.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L151-L168)


#### Arguments

- `$params` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – Use a string to represent a route (e.g. `site/index`),
or an array to represent a route with query parameters (e.g. `['site/index', 'param1' => 'value1']`).
- `$scheme` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The scheme to use for the URL (either `http`, `https` or empty string
for protocol-relative URL).
If not specified the scheme of the current request will be used.

#### Returns

[string](http://php.net/language.types.string) – The created URL



### `createUrl()`





Creates a URL using the given route and query parameters.



You may specify the route as a string, e.g., `site/index`. You may also use an array
if you want to specify additional query parameters for the URL being created. The
array format must be:

```php
// generates: /index.php?r=site%2Findex&param1=value1&param2=value2
['site/index', 'param1' => 'value1', 'param2' => 'value2']
```

If you want to create a URL with an anchor, you can use the array format with a `#` parameter.
For example,

```php
// generates: /index.php?r=site%2Findex&param1=value1#name
['site/index', 'param1' => 'value1', '#' => 'name']
```

The URL created is a relative one. Use [createAbsoluteUrl()](craft-web-urlmanager.md#method-createabsoluteurl) to create an absolute URL.

Note that unlike [yii\helpers\Url::toRoute()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseurl#toRoute()-detail), this method always treats the given route
as an absolute route.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L132-L146)


#### Arguments

- `$params` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – Use a string to represent a route (e.g. `site/index`),
or an array to represent a route with query parameters (e.g. `['site/index', 'param1' => 'value1']`).

#### Returns

[string](http://php.net/language.types.string) – The created URL



### `getMatchedElement()`





Returns the element that was matched by the URI.

::: warning
This should only be called once the application has been fully initialized.
Otherwise some plugins may be unable to register [EVENT_REGISTER_CP_URL_RULES](craft-web-urlmanager.md#event-register-cp-url-rules)
and [EVENT_REGISTER_SITE_URL_RULES](craft-web-urlmanager.md#event-register-site-url-rules) event handlers successfully.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L215-L228)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean)


---

#### Example

::: code
```php
use craft\web\Application;

Craft::$app->on(Application::EVENT_INIT, function() {
    $element = Craft::$app->urlManager->getMatchedElement();
}
```
:::


### `getRouteParams()`





Returns the route params, or null if we haven't parsed the URL yet.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L175-L178)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `parseRequest()`





Parses the user request.








[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L106-L127)


#### Arguments

- `$request` ([yii\web\Request](https://www.yiiframework.com/doc/api/2.0/yii-web-request)) – The request component

#### Returns

[array](http://php.net/language.types.array), [boolean](http://php.net/language.types.boolean) – The route and the associated parameters. The latter is always empty
if [enablePrettyUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#$enablePrettyUrl-detail) is `false`. `false` is returned if the current request cannot be successfully parsed.



### `setMatchedElement()`



Since

:   3.2.3



Sets the matched element for the request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L236-L254)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null))




### `setRouteParams()`





Sets params to be passed to the routed controller action.




[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L186-L193)


#### Arguments

- `$params` ([array](http://php.net/language.types.array)) – The route params
- `$merge` ([boolean](http://php.net/language.types.boolean)) – Whether these params should be merged with existing params






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [buildRules()](craft-web-urlmanager.md#method-buildrules)                                                                                               | Builds URL rule objects from the given rule declarations.
| [canBeCached()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#canBeCached()-detail "Defined by yii\web\UrlManager")                       | Returns the value indicating whether result of [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#createUrl()-detail) of rule should be cached in internal cache.
| [getBuiltRulesFromCache()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#getBuiltRulesFromCache()-detail "Defined by yii\web\UrlManager") | Provides the built URL rules that are associated with the $ruleDeclarations from cache.
| [getUrlFromCache()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#getUrlFromCache()-detail "Defined by yii\web\UrlManager")               | Get URL from internal cache if exists.
| [setBuiltRulesCache()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#setBuiltRulesCache()-detail "Defined by yii\web\UrlManager")         | Stores $builtRules to cache, using $rulesDeclaration as a part of cache key.
| [setRuleToCache()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager#setRuleToCache()-detail "Defined by yii\web\UrlManager")                 | Store rule (e.g. [yii\web\UrlRule](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule)) to internal cache.

### `buildRules()`





Builds URL rule objects from the given rule declarations.








[View source](https://github.com/craftcms/cms/blob/master/src/web/UrlManager.php#L259-L289)


#### Arguments

- `$rules`

#### Returns

[yii\web\UrlRuleInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-urlruleinterface) – The rule objects built from the given rule declarations

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if a rule declaration is invalid






## Events

### EVENT_REGISTER_CP_URL_RULES



Type

:   [craft\events\RegisterUrlRulesEvent](craft-events-registerurlrulesevent.md)



The event that is triggered when registering
URL rules for the control panel.

::: warning
This event gets called during class initialization, so you should always
use a class-level event handler.
:::





---

#### Example

::: code
```php
use craft\events\RegisterUrlRulesEvent;
use craft\web\UrlManager;
use yii\base\Event;
Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $e) {
    $e->rules['foo'] => 'bar/baz';
});
```
:::


### EVENT_REGISTER_SITE_URL_RULES



Type

:   [craft\events\RegisterUrlRulesEvent](craft-events-registerurlrulesevent.md)



The event that is triggered when registering
URL rules for the front-end site.

::: warning
This event gets called during class initialization, so you should always
use a class-level event handler.
:::





---

#### Example

::: code
```php
use craft\events\RegisterUrlRulesEvent;
use craft\web\UrlManager;
use yii\base\Event;
Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_SITE_URL_RULES, function(RegisterUrlRulesEvent $e) {
    $e->rules['foo'] => 'bar/baz';
});
```
:::



