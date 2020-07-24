---
title: craft\services\Tokens
code:
  - php
  - twig
---

# Tokens

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Tokens](craft-services-tokens.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Tokens service.

An instance of the Tokens service is globally accessible in Craft via [`Craft::$app->tokens`](craft-base-applicationtrait.md#method-gettokens).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [createToken()](craft-services-tokens.md#method-createtoken)                                                                                | Creates a new token and returns it.
| [deleteExpiredTokens()](craft-services-tokens.md#method-deleteexpiredtokens)                                                                | Deletes any expired tokens.
| [deleteTokenById()](craft-services-tokens.md#method-deletetokenbyid)                                                                        | Deletes a token by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getTokenRoute()](craft-services-tokens.md#method-gettokenroute)                                                                            | Searches for a token, and possibly returns a route for the request.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [incrementTokenUsageCountById()](craft-services-tokens.md#method-incrementtokenusagecountbyid)                                              | Increments a token's usage count.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createToken()`





Creates a new token and returns it.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php#L58-L84)


#### Arguments

- `$route` (`mixed`) – Where matching requests should be routed to.
- `$usageLimit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The maximum number of times this token can be
used. Defaults to no limit.
- `$expiryDate` ([DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)) – The date that the token expires.
Defaults to the 'defaultTokenDuration' config setting.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The generated token, or `false` if there was an error.


---

#### Example

::: code
```php
// Route to a controller action
Craft::$app->tokens->createToken('action/path');

// Route to a controller action with params
Craft::$app->tokens->createToken(['action/path', [
    'foo' => 'bar'
]]);

// Route to a template
Craft::$app->tokens->createToken(['template' => 'template/path']);
```
:::


### `deleteExpiredTokens()`





Deletes any expired tokens.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php#L169-L183)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteTokenById()`





Deletes a token by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php#L155-L162)


#### Arguments

- `$tokenId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getTokenRoute()`





Searches for a token, and possibly returns a route for the request.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php#L92-L125)


#### Arguments

- `$token` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)



### `incrementTokenUsageCountById()`





Increments a token's usage count.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tokens.php#L133-L147)


#### Arguments

- `$tokenId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)










