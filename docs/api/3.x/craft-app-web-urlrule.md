---
title: craft\app\web\UrlRule
code:
  - php
  - twig
---

# UrlRule

Type

:   Class

Namespace

:   craft\app\web

Inherits

:   [craft\app\web\UrlRule](craft-app-web-urlrule.md) &raquo;
[craft\web\UrlRule](craft-web-urlrule.md) &raquo;
[yii\web\UrlRule](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\web\UrlRuleInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-urlruleinterface)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/app/web/UrlRule.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [createUrlStatus](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$createUrlStatus-detail "Defined by yii\web\UrlRule") | [null](http://php.net/language.types.null), [integer](http://php.net/language.types.integer) – Status of the URL creation after the last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call.
| [defaults](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$defaults-detail "Defined by yii\web\UrlRule")               | [array](http://php.net/language.types.array) – The default GET parameters (name => value) that this rule provides.
| [encodeParams](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$encodeParams-detail "Defined by yii\web\UrlRule")       | [boolean](http://php.net/language.types.boolean) – A value indicating if parameters should be url encoded.
| [host](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$host-detail "Defined by yii\web\UrlRule")                       | [string](http://php.net/language.types.string) – The pattern used to parse and create the host info part of a URL (e.g. `http://example.
| [mode](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$mode-detail "Defined by yii\web\UrlRule")                       | [integer](http://php.net/language.types.integer) – A value indicating if this rule should be used for both request parsing and URL creation, parsing only, or creation only.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$name-detail "Defined by yii\web\UrlRule")                       | [string](http://php.net/language.types.string) – The name of this rule.
| [normalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$normalizer-detail "Defined by yii\web\UrlRule")           | [yii\web\UrlNormalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlnormalizer), [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The configuration for [yii\web\UrlNormalizer](https://www.yiiframework.com/doc/api/2.0/yii-web-urlnormalizer) used by this rule.
| [params](craft-web-urlrule.md#params "Defined by craft\web\UrlRule")                                                             | [array](http://php.net/language.types.array) – Parameters that should be passed to the controller.
| [pattern](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$pattern-detail "Defined by yii\web\UrlRule")                 | [string](http://php.net/language.types.string) – The pattern used to parse and create the path info part of a URL.
| [route](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$route-detail "Defined by yii\web\UrlRule")                     | [string](http://php.net/language.types.string) – The route to the controller action
| [suffix](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$suffix-detail "Defined by yii\web\UrlRule")                   | [string](http://php.net/language.types.string) – The URL suffix used for this rule.
| [verb](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$verb-detail "Defined by yii\web\UrlRule")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The HTTP verb (e.g. GET, POST, DELETE) that this rule should match.



## Protected Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [createStatus](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$createStatus-detail "Defined by yii\web\UrlRule") | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Status of the URL creation after the last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call.
| [placeholders](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$placeholders-detail "Defined by yii\web\UrlRule") | [array](http://php.net/language.types.array) – List of placeholders for matching parameters names.



## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-web-urlrule.md#method-construct "Defined by craft\web\UrlRule")                                                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#__toString()-detail "Defined by yii\web\UrlRule")                 |
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail "Defined by yii\web\UrlRule")                   | Creates a URL according to the given route and parameters.
| [getCreateUrlStatus()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#getCreateUrlStatus()-detail "Defined by yii\web\UrlRule") | Returns status of the URL creation after the last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [parseRequest()](craft-web-urlrule.md#method-parserequest "Defined by craft\web\UrlRule")                                                 | Parses the given request and returns the corresponding route and parameters.



## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [getNormalizer()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#getNormalizer()-detail "Defined by yii\web\UrlRule")                           |
| [getParamRules()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#getParamRules()-detail "Defined by yii\web\UrlRule")                           | Returns list of regex for matching parameter.
| [hasNormalizer()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#hasNormalizer()-detail "Defined by yii\web\UrlRule")                           |
| [substitutePlaceholderNames()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#substitutePlaceholderNames()-detail "Defined by yii\web\UrlRule") | Iterates over [placeholders](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$placeholders-detail) and checks whether each placeholder exists as a key in $matches array.



## Constants

| Constant                        | Description
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| `CREATE_STATUS_PARAMS_MISMATCH` | Represents the unsuccessful URL generation by last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call, because of mismatched or missing parameters.
| `CREATE_STATUS_PARSING_ONLY`    | Represents the unsuccessful URL generation by last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call, because rule does not support creating URLs.
| `CREATE_STATUS_ROUTE_MISMATCH`  | Represents the unsuccessful URL generation by last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call, because of mismatched route.
| `CREATE_STATUS_SUCCESS`         | Represents the successful URL generation by last [createUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#createUrl()-detail) call.
| `CREATION_ONLY`                 | Set [mode](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$mode-detail) with this value to mark that this rule is for URL creation only.
| `PARSING_ONLY`                  | Set [mode](https://www.yiiframework.com/doc/api/2.0/yii-web-urlrule#$mode-detail) with this value to mark that this rule is for URL parsing only.



