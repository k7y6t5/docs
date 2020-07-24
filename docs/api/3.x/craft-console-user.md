---
title: craft\console\User
code:
  - php
  - twig
---

# User

Type

:   Class

Namespace

:   craft\console

Inherits

:   [craft\console\User](craft-console-user.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The User component provides APIs for managing the user authentication status.

An instance of the User component is globally accessible in Craft via [`Craft::$app->user`](craft-console-application.md#method-getuser).



[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [id](craft-console-user.md#id)                                                                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [identity](craft-console-user.md#identity)                                                                                 | [craft\elements\User](craft-elements-user.md), [yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)
| [isAdmin](craft-console-user.md#isadmin)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the current user is an admin.
| [isGuest](craft-console-user.md#isguest)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the current user is a guest.

### `id`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php)



### `identity`



Type

:   [craft\elements\User](craft-elements-user.md), [yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php)



### `isAdmin`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current user is an admin.



[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php)



### `isGuest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current user is a guest.



[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php)







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
| [checkPermission()](craft-console-user.md#method-checkpermission)                                                                           | Returns whether the current user has a given permission.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getId()](craft-console-user.md#method-getid)                                                                                               | Returns the current user’s ID, if they are logged in.
| [getIdentity()](craft-console-user.md#method-getidentity)                                                                                   | Returns the current identity object.
| [getIsAdmin()](craft-console-user.md#method-getisadmin)                                                                                     | Returns whether the current user is an admin.
| [getIsGuest()](craft-console-user.md#method-getisguest)                                                                                     | Returns whether the current user is a guest (not authenticated).
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [setIdentity()](craft-console-user.md#method-setidentity)                                                                                   | Sets the user identity object.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `checkPermission()`





Returns whether the current user has a given permission.




[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L47-L52)


#### Arguments

- `$permissionName` ([string](http://php.net/language.types.string)) – The name of the permission.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user has the permission.



### `getId()`





Returns the current user’s ID, if they are logged in.



See also [getIdentity()](craft-console-user.md#method-getidentity)
[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L98-L103)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getIdentity()`





Returns the current identity object.




[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L59-L62)



#### Returns

[craft\elements\User](craft-elements-user.md), [yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



### `getIsAdmin()`





Returns whether the current user is an admin.




[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L34-L39)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user is an admin.



### `getIsGuest()`





Returns whether the current user is a guest (not authenticated).




[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L87-L90)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user is a guest.



### `setIdentity()`





Sets the user identity object.




[View source](https://github.com/craftcms/cms/blob/master/src/console/User.php#L71-L80)


#### Arguments

- `$identity` ([yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface), [null](http://php.net/language.types.null)) – The identity object. If null, it
means the current user will be a guest without any associated identity.


#### Throws

- [yii\base\InvalidValueException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidvalueexception)\
  If `$identity` object does not implement [yii\web\IdentityInterface](https://www.yiiframework.com/doc/api/2.0/yii-web-identityinterface).









