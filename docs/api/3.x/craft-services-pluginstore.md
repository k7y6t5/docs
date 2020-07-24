---
title: craft\services\PluginStore
code:
  - php
  - twig
---

# PluginStore

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\PluginStore](craft-services-pluginstore.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Plugin Store service.

An instance of the Plugin Store service is globally accessible in Craft via [`Craft::$app->pluginStore`](craft-base-applicationtrait.md#method-getpluginstore).



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [craftApiEndpoint](craft-services-pluginstore.md#craftapiendpoint)                                                         | [string](http://php.net/language.types.string) – API endpoint
| [craftIdEndpoint](craft-services-pluginstore.md#craftidendpoint)                                                           | [string](http://php.net/language.types.string) – Craft ID endpoint
| [craftIdOauthClientId](craft-services-pluginstore.md#craftidoauthclientid)                                                 | [string](http://php.net/language.types.string) – CraftIdOauthClientId
| [craftOauthEndpoint](craft-services-pluginstore.md#craftoauthendpoint)                                                     | [string](http://php.net/language.types.string) – OAuth endpoint
| [devServerManifestPath](craft-services-pluginstore.md#devservermanifestpath)                                               | [string](http://php.net/language.types.string) – Dev server manifest path
| [devServerPublicPath](craft-services-pluginstore.md#devserverpublicpath)                                                   | [string](http://php.net/language.types.string) – Dev server public path
| [token](craft-services-pluginstore.md#token)                                                                               | [craft\models\CraftIdToken](craft-models-craftidtoken.md), [null](http://php.net/language.types.null)
| [useDevServer](craft-services-pluginstore.md#usedevserver)                                                                 | [boolean](http://php.net/language.types.boolean) – Enable dev server

### `craftApiEndpoint`



Type

:   [string](http://php.net/language.types.string)



API endpoint



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L41)



### `craftIdEndpoint`



Type

:   [string](http://php.net/language.types.string)



Craft ID endpoint



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L31)



### `craftIdOauthClientId`



Type

:   [string](http://php.net/language.types.string)



CraftIdOauthClientId



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L46)



### `craftOauthEndpoint`



Type

:   [string](http://php.net/language.types.string)



OAuth endpoint



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L36)



### `devServerManifestPath`



Type

:   [string](http://php.net/language.types.string)



Dev server manifest path



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L51)



### `devServerPublicPath`



Type

:   [string](http://php.net/language.types.string)



Dev server public path



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L56)



### `token`



Type

:   [craft\models\CraftIdToken](craft-models-craftidtoken.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php)



### `useDevServer`



Type

:   [boolean](http://php.net/language.types.boolean)



Enable dev server



[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L61)







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
| [deleteToken()](craft-services-pluginstore.md#method-deletetoken)                                                                           | Deletes an OAuth token.
| [deleteTokenByUserId()](craft-services-pluginstore.md#method-deletetokenbyuserid)                                                           | Deletes the token from its user ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getToken()](craft-services-pluginstore.md#method-gettoken)                                                                                 | Returns the OAuth token.
| [getTokenByUserId()](craft-services-pluginstore.md#method-gettokenbyuserid)                                                                 | Returns the token by user ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveToken()](craft-services-pluginstore.md#method-savetoken)                                                                               | Saves the OAuth token.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteToken()`





Deletes an OAuth token.




[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L153-L171)






### `deleteTokenByUserId()`





Deletes the token from its user ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L179-L192)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getToken()`





Returns the OAuth token.




[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L121-L148)



#### Returns

[craft\models\CraftIdToken](craft-models-craftidtoken.md), [null](http://php.net/language.types.null)



### `getTokenByUserId()`





Returns the token by user ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L200-L209)


#### Arguments

- `$userId`

#### Returns

[craft\models\CraftIdToken](craft-models-craftidtoken.md), [null](http://php.net/language.types.null)



### `saveToken()`





Saves the OAuth token.




[View source](https://github.com/craftcms/cms/blob/master/src/services/PluginStore.php#L68-L114)


#### Arguments

- `$tokenArray` ([array](http://php.net/language.types.array))











