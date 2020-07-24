---
title: craft\services\Api
code:
  - php
  - twig
---

# Api

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Api](craft-services-api.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The API service provides APIs for calling the Craft API (api.craftcms.com).

An instance of the API service is globally accessible in Craft via [`Craft::$app->api`](craft-base-applicationtrait.md#method-getapi).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [client](craft-services-api.md#client)                                                                                     | `\GuzzleHttp\Client`
| [countries](craft-services-api.md#countries)                                                                               | [array](http://php.net/language.types.array)
| [licenseInfo](craft-services-api.md#licenseinfo)                                                                           | [array](http://php.net/language.types.array)
| [updates](craft-services-api.md#updates)                                                                                   | [array](http://php.net/language.types.array)

### `client`



Type

:   `\GuzzleHttp\Client`







[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L35)



### `countries`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php)



### `licenseInfo`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php)



### `updates`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php)







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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getComposerWhitelist()](craft-services-api.md#method-getcomposerwhitelist)                                                                 | Returns a list of package names that Composer should be allowed to update when installing/updating packages.
| [getCountries()](craft-services-api.md#method-getcountries)                                                                                 | Returns all country data.
| [getLicenseInfo()](craft-services-api.md#method-getlicenseinfo)                                                                             | Returns info about the current Craft license.
| [getUpdates()](craft-services-api.md#method-getupdates)                                                                                     | Checks for Craft and plugin updates.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-services-api.md#method-init)                                                                                                 | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [request()](craft-services-api.md#method-request)                                                                                           |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getComposerWhitelist()`



Since

:   3.0.19



Returns a list of package names that Composer should be allowed to update when installing/updating packages.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L110-L187)


#### Arguments

- `$install` ([array](http://php.net/language.types.array)) – Package name/version pairs to be installed

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- `\GuzzleHttp\Exception\RequestException`\
  if the API gave a non-2xx response
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if composer.json can't be located


### `getCountries()`





Returns all country data.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L85-L99)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- `\GuzzleHttp\Exception\RequestException`\
  if the API gave a non-2xx response


### `getLicenseInfo()`





Returns info about the current Craft license.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L58-L65)


#### Arguments

- `$include` ([string](http://php.net/language.types.string)[])

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- `\GuzzleHttp\Exception\RequestException`\
  if the API gave a non-2xx response


### `getUpdates()`





Checks for Craft and plugin updates.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L73-L77)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- `\GuzzleHttp\Exception\RequestException`\
  if the API gave a non-2xx response


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L40-L49)






### `request()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Api.php#L196-L219)


#### Arguments

- `$method` ([string](http://php.net/language.types.string))
- `$uri` ([string](http://php.net/language.types.string))
- `$options` ([array](http://php.net/language.types.array))

#### Returns

`\Psr\Http\Message\ResponseInterface`

#### Throws

- `\GuzzleHttp\Exception\RequestException`









