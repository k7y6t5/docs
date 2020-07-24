---
title: craft\services\UserPermissions
code:
  - php
  - twig
---

# UserPermissions

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\UserPermissions](craft-services-userpermissions.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



User Permissions service.

An instance of the User Permissions service is globally accessible in Craft via [`Craft::$app->userPermissions`](craft-base-applicationtrait.md#method-getuserpermissions).



[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allPermissions](craft-services-userpermissions.md#allpermissions)                                                         | [array](http://php.net/language.types.array)
| [assignablePermissions](craft-services-userpermissions.md#assignablepermissions)                                           | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allPermissions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php)



### `assignablePermissions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php)







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
| [doesGroupHavePermission()](craft-services-userpermissions.md#method-doesgrouphavepermission)                                               | Returns whether a given user group has a given permission.
| [doesUserHavePermission()](craft-services-userpermissions.md#method-doesuserhavepermission)                                                 | Returns whether a given user has a given permission.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllPermissions()](craft-services-userpermissions.md#method-getallpermissions)                                                           | Returns all of the known permissions, sorted by category.
| [getAssignablePermissions()](craft-services-userpermissions.md#method-getassignablepermissions)                                             | Returns the permissions that the current user is allowed to assign to another user.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getGroupPermissionsByUserId()](craft-services-userpermissions.md#method-getgrouppermissionsbyuserid)                                       | Returns all of the group permissions a given user has.
| [getPermissionsByGroupId()](craft-services-userpermissions.md#method-getpermissionsbygroupid)                                               | Returns all of a given user group's permissions.
| [getPermissionsByUserId()](craft-services-userpermissions.md#method-getpermissionsbyuserid)                                                 | Returns all of a given user's permissions.
| [handleChangedGroupPermissions()](craft-services-userpermissions.md#method-handlechangedgrouppermissions)                                   | Handle any changed group permissions.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveGroupPermissions()](craft-services-userpermissions.md#method-savegrouppermissions)                                                     | Saves new permissions for a user group.
| [saveUserPermissions()](craft-services-userpermissions.md#method-saveuserpermissions)                                                       | Saves new permissions for a user.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `doesGroupHavePermission()`





Returns whether a given user group has a given permission.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L287-L293)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))
- `$checkPermission` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `doesUserHavePermission()`





Returns whether a given user has a given permission.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L350-L356)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))
- `$checkPermission` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllPermissions()`





Returns all of the known permissions, sorted by category.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L58-L217)



#### Returns

[array](http://php.net/language.types.array)



### `getAssignablePermissions()`





Returns the permissions that the current user is allowed to assign to another user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L225-L243)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)) – The recipient of the permissions. If set, their current permissions will be included as well.

#### Returns

[array](http://php.net/language.types.array)



### `getGroupPermissionsByUserId()`





Returns all of the group permissions a given user has.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L271-L278)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)



### `getPermissionsByGroupId()`





Returns all of a given user group's permissions.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L251-L263)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)



### `getPermissionsByUserId()`





Returns all of a given user's permissions.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L327-L341)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)



### `handleChangedGroupPermissions()`





Handle any changed group permissions.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L411-L450)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `saveGroupPermissions()`





Saves new permissions for a user group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L303-L319)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))
- `$permissions` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if this is called from Craft Solo edition


### `saveUserPermissions()`





Saves new permissions for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserPermissions.php#L367-L404)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))
- `$permissions` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if this is called from Craft Solo edition
- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)








## Events

### EVENT_REGISTER_PERMISSIONS



Type

:   [craft\events\RegisterUserPermissionsEvent](craft-events-registeruserpermissionsevent.md)



The event that is triggered when registering user permissions.



---




