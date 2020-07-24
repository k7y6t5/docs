---
title: craft\services\UserGroups
code:
  - php
  - twig
---

# UserGroups

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\UserGroups](craft-services-usergroups.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



User Groups service.

An instance of the User Groups service is globally accessible in Craft via [`Craft::$app->userGroups`](craft-base-applicationtrait.md#method-getusergroups).



[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allGroups](craft-services-usergroups.md#allgroups)                                                                        | [craft\models\UserGroup](craft-models-usergroup.md)[]
| [assignableGroups](craft-services-usergroups.md#assignablegroups)                                                          | [craft\models\UserGroup](craft-models-usergroup.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allGroups`



Type

:   [craft\models\UserGroup](craft-models-usergroup.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php)



### `assignableGroups`



Type

:   [craft\models\UserGroup](craft-models-usergroup.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php)







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
| [deleteGroup()](craft-services-usergroups.md#method-deletegroup)                                                                            | Deletes a user group.
| [deleteGroupById()](craft-services-usergroups.md#method-deletegroupbyid)                                                                    | Deletes a user group by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllGroups()](craft-services-usergroups.md#method-getallgroups)                                                                          | Returns all user groups.
| [getAssignableGroups()](craft-services-usergroups.md#method-getassignablegroups)                                                            | Returns the user groups that the current user is allowed to assign to another user.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getGroupByHandle()](craft-services-usergroups.md#method-getgroupbyhandle)                                                                  | Gets a user group by its handle.
| [getGroupById()](craft-services-usergroups.md#method-getgroupbyid)                                                                          | Gets a user group by its ID.
| [getGroupByUid()](craft-services-usergroups.md#method-getgroupbyuid)                                                                        | Gets a user group by its UID.
| [getGroupsByUserId()](craft-services-usergroups.md#method-getgroupsbyuserid)                                                                | Gets user groups by a user ID.
| [handleChangedUserGroup()](craft-services-usergroups.md#method-handlechangedusergroup)                                                      | Handle any changed user groups.
| [handleDeletedUserGroup()](craft-services-usergroups.md#method-handledeletedusergroup)                                                      | Handle any deleted user groups.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveGroup()](craft-services-usergroups.md#method-savegroup)                                                                                | Saves a user group.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteGroup()`



Since

:   3.0.12



Deletes a user group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L332-L349)


#### Arguments

- `$group` ([craft\models\UserGroup](craft-models-usergroup.md)) – The user group

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user group was deleted successfully

#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if this is called from Craft Solo edition


### `deleteGroupById()`





Deletes a user group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L311-L322)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The user group's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user group was deleted successfully

#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if this is called from Craft Solo edition


### `getAllGroups()`





Returns all user groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L65-L81)



#### Returns

[craft\models\UserGroup](craft-models-usergroup.md)[]



### `getAssignableGroups()`





Returns the user groups that the current user is allowed to assign to another user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L89-L116)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)) – The recipient of the user groups. If set, their current groups will be included as well.

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md)[]



### `getGroupByHandle()`





Gets a user group by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L154-L161)


#### Arguments

- `$groupHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)



### `getGroupById()`





Gets a user group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L124-L131)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)



### `getGroupByUid()`





Gets a user group by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L139-L146)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)



### `getGroupsByUserId()`





Gets user groups by a user ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L169-L188)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md)[]



### `handleChangedUserGroup()`





Handle any changed user groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L248-L272)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedUserGroup()`





Handle any deleted user groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L279-L302)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `saveGroup()`





Saves a user group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/UserGroups.php#L198-L241)


#### Arguments

- `$group` ([craft\models\UserGroup](craft-models-usergroup.md)) – The user group to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the user group should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if this is called from Craft Solo edition






## Constants

| Constant                 | Description
| ------------------------ | -----------
| `CONFIG_USERPGROUPS_KEY` |


## Events

### EVENT_AFTER_DELETE_USER_GROUP



Type

:   [craft\events\UserGroupEvent](craft-events-usergroupevent.md)



The event that is triggered after a user group is saved.



---



### EVENT_AFTER_SAVE_USER_GROUP



Type

:   [craft\events\UserGroupEvent](craft-events-usergroupevent.md)



The event that is triggered after a user group is saved.



---



### EVENT_BEFORE_APPLY_GROUP_DELETE



Type

:   [craft\events\UserGroupEvent](craft-events-usergroupevent.md)

Since

:   3.1.0



The event that is triggered before a user group delete is applied to the database.



---



### EVENT_BEFORE_DELETE_USER_GROUP



Type

:   [craft\events\UserGroupEvent](craft-events-usergroupevent.md)



The event that is triggered before a user group is deleted.



---



### EVENT_BEFORE_SAVE_USER_GROUP



Type

:   [craft\events\UserGroupEvent](craft-events-usergroupevent.md)



The event that is triggered before a user group is saved.



---




