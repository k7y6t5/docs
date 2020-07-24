---
title: craft\services\Users
code:
  - php
  - twig
---

# Users

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Users](craft-services-users.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Users service provides APIs for managing users.

An instance of the Users service is globally accessible in Craft via [`Craft::$app->users`](craft-base-applicationtrait.md#method-getusers).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [userPreferences](craft-services-users.md#userpreferences)                                                                 | [array](http://php.net/language.types.array) – The user’s preferences
| [verificationCodeOnUser](craft-services-users.md#verificationcodeonuser)                                                   | [craft\elements\User](craft-elements-user.md) – The user.

### `userPreferences`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The user’s preferences



[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php)



### `verificationCodeOnUser`



Type

:   [craft\elements\User](craft-elements-user.md)

Access

:   Write-only



The user.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php)







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
| [activateUser()](craft-services-users.md#method-activateuser)                                                                               | Activates a user, bypassing email verification.
| [assignUserToDefaultGroup()](craft-services-users.md#method-assignusertodefaultgroup)                                                       | Assigns a user to the default user group.
| [assignUserToGroups()](craft-services-users.md#method-assignusertogroups)                                                                   | Assigns a user to a given list of user groups.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canImpersonate()](craft-services-users.md#method-canimpersonate)                                                                           | Returns whether a user is allowed to impersonate another user.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteUserPhoto()](craft-services-users.md#method-deleteuserphoto)                                                                         | Deletes a user’s photo.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEmailVerifyUrl()](craft-services-users.md#method-getemailverifyurl)                                                                     | Sets a new verification code on a user, and returns their new Email Verification URL.
| [getPasswordResetUrl()](craft-services-users.md#method-getpasswordreseturl)                                                                 | Sets a new verification code on a user, and returns their new Password Reset URL.
| [getUserById()](craft-services-users.md#method-getuserbyid)                                                                                 | Returns a user by their ID.
| [getUserByUid()](craft-services-users.md#method-getuserbyuid)                                                                               | Returns a user by their UID.
| [getUserByUsernameOrEmail()](craft-services-users.md#method-getuserbyusernameoremail)                                                       | Returns a user by their username or email.
| [getUserPreference()](craft-services-users.md#method-getuserpreference)                                                                     | Returns one of a user’s preferences by its key.
| [getUserPreferences()](craft-services-users.md#method-getuserpreferences)                                                                   | Returns a user’s preferences.
| [handleChangedUserFieldLayout()](craft-services-users.md#method-handlechangeduserfieldlayout)                                               | Handle user field layout changes.
| [handleInvalidLogin()](craft-services-users.md#method-handleinvalidlogin)                                                                   | Handles an invalid login for a user.
| [handleValidLogin()](craft-services-users.md#method-handlevalidlogin)                                                                       | Handles a valid login for a user.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [hasUserShunnedMessage()](craft-services-users.md#method-hasusershunnedmessage)                                                             | Returns whether a message is shunned for a user.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [isVerificationCodeValidForUser()](craft-services-users.md#method-isverificationcodevalidforuser)                                           | Returns whether a verification code is valid for the given user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-users.md#method-prunedeletedfield)                                                                     | Prune a deleted field from user group layout.
| [purgeExpiredPendingUsers()](craft-services-users.md#method-purgeexpiredpendingusers)                                                       | Deletes any pending users that have shown zero sense of urgency and are just taking up space.
| [saveLayout()](craft-services-users.md#method-savelayout)                                                                                   | Save the user field layout
| [saveUserPhoto()](craft-services-users.md#method-saveuserphoto)                                                                             | Crops and saves a user’s photo.
| [saveUserPreferences()](craft-services-users.md#method-saveuserpreferences)                                                                 | Saves a user’s preferences.
| [sendActivationEmail()](craft-services-users.md#method-sendactivationemail)                                                                 | Sends a new account activation email for a user, regardless of their status.
| [sendNewEmailVerifyEmail()](craft-services-users.md#method-sendnewemailverifyemail)                                                         | Sends a new email verification email to a user, regardless of their status.
| [sendPasswordResetEmail()](craft-services-users.md#method-sendpasswordresetemail)                                                           | Sends a password reset email to a user.
| [setVerificationCodeOnUser()](craft-services-users.md#method-setverificationcodeonuser)                                                     | Sets a new verification code on the user's record.
| [shunMessageForUser()](craft-services-users.md#method-shunmessageforuser)                                                                   | Shuns a message for a user.
| [suspendUser()](craft-services-users.md#method-suspenduser)                                                                                 | Suspends a user.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [unlockUser()](craft-services-users.md#method-unlockuser)                                                                                   | Unlocks a user, bypassing the cooldown phase.
| [unshunMessageForUser()](craft-services-users.md#method-unshunmessageforuser)                                                               | Un-shuns a message for a user.
| [unsuspendUser()](craft-services-users.md#method-unsuspenduser)                                                                             | Unsuspends a user.
| [verifyEmailForUser()](craft-services-users.md#method-verifyemailforuser)                                                                   | If 'unverifiedEmail' is set on the User, then this method will transfer it to the official email property and clear the unverified one.

### `activateUser()`





Activates a user, bypassing email verification.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L562-L601)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user was activated successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `assignUserToDefaultGroup()`





Assigns a user to the default user group.

This method is called toward the end of a public registration request.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L971-L1008)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user that was just registered.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user was assigned to the default group.



### `assignUserToGroups()`





Assigns a user to a given list of user groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L902-L961)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID
- `$groupIds` ([integer](http://php.net/language.types.integer)[]) – The groups’ IDs. Pass an empty array to remove a user from all groups.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the users were successfully assigned to the groups.



### `canImpersonate()`



Since

:   3.2.0



Returns whether a user is allowed to impersonate another user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L1068-L1097)


#### Arguments

- `$impersonator` ([craft\elements\User](craft-elements-user.md))
- `$impersonatee` ([craft\elements\User](craft-elements-user.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteUserPhoto()`





Deletes a user’s photo.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L467-L470)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user’s photo was deleted successfully



### `getEmailVerifyUrl()`





Sets a new verification code on a user, and returns their new Email Verification URL.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L381-L385)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user that should get the new Email Verification URL.

#### Returns

[string](http://php.net/language.types.string) – The new Email Verification URL.



### `getPasswordResetUrl()`





Sets a new verification code on a user, and returns their new Password Reset URL.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L393-L397)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user that should get the new Password Reset URL

#### Returns

[string](http://php.net/language.types.string) – The new Password Reset URL.



### `getUserById()`





Returns a user by their ID.

```php
$user = Craft::$app->users->getUserById($userId);
```


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L152-L156)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID.

#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null) – The user with the given ID, or `null` if a user could not be found.



### `getUserByUid()`





Returns a user by their UID.

```php
$user = Craft::$app->users->getUserByUid($userUid);
```


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L206-L212)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string)) – The user’s UID.

#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null) – The user with the given UID, or `null` if a user could not be found.



### `getUserByUsernameOrEmail()`





Returns a user by their username or email.

```php
$user = Craft::$app->users->getUserByUsernameOrEmail($loginName);
```


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L168-L194)


#### Arguments

- `$usernameOrEmail` ([string](http://php.net/language.types.string)) – The user’s username or email.

#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null) – The user with the given username/email, or `null` if a user could not be found.



### `getUserPreference()`





Returns one of a user’s preferences by its key.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L310-L314)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The user’s ID
- `$key` ([string](http://php.net/language.types.string)) – The preference’s key
- `$default` (`mixed`) – The default value, if the preference hasn’t been set

#### Returns

`mixed` – The user’s preference



### `getUserPreferences()`





Returns a user’s preferences.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L266-L280)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The user’s ID

#### Returns

[array](http://php.net/language.types.array) – The user’s preferences



### `handleChangedUserFieldLayout()`





Handle user field layout changes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L1015-L1042)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleInvalidLogin()`





Handles an invalid login for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L503-L553)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user




### `handleValidLogin()`





Handles a valid login for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L477-L496)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user




### `hasUserShunnedMessage()`





Returns whether a message is shunned for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L828-L845)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID.
- `$message` ([string](http://php.net/language.types.string)) – The message to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user has shunned the message.



### `isVerificationCodeValidForUser()`





Returns whether a verification code is valid for the given user.

This method first checks if the code has expired past the
<config:verificationCodeDuration> config setting. If it is still valid,
then, the checks the validity of the contents of the code.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L225-L258)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user to check the code for.
- `$code` ([string](http://php.net/language.types.string)) – The verification code to check for.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the code is still valid.



### `pruneDeletedField()`





Prune a deleted field from user group layout.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L1104-L1132)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `purgeExpiredPendingUsers()`





Deletes any pending users that have shown zero sense of urgency and are
just taking up space.

This method will check the <config:purgePendingUsersDuration> config
setting, and if it is set to a valid duration, it will delete any user
accounts that were created that duration ago, and have still not
activated their account.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L871-L893)






### `saveLayout()`





Save the user field layout




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L1050-L1058)


#### Arguments

- `$layout` ([craft\models\FieldLayout](craft-models-fieldlayout.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `saveUserPhoto()`





Crops and saves a user’s photo.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L408-L459)


#### Arguments

- `$fileLocation` ([string](http://php.net/language.types.string)) – The local image path on server
- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.
- `$filename` ([string](http://php.net/language.types.string)) – Name of the file to use, defaults to filename of $imagePath


#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if the file provided is not a manipulatable image
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if the user photo Volume is not provided or is invalid


### `saveUserPreferences()`





Saves a user’s preferences.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L288-L300)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user
- `$preferences` ([array](http://php.net/language.types.array)) – The user’s new preferences




### `sendActivationEmail()`





Sends a new account activation email for a user, regardless of their status.

A new verification code will generated for the user overwriting any existing one.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L324-L337)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user to send the activation email to.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the email was sent successfully.



### `sendNewEmailVerifyEmail()`





Sends a new email verification email to a user, regardless of their status.

A new verification code will generated for the user overwriting any existing one.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L347-L355)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user to send the activation email to.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the email was sent successfully.



### `sendPasswordResetEmail()`





Sends a password reset email to a user.

A new verification code be will generated for the user, overwriting any existing one.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L365-L373)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user to send the forgot password email to.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the email was sent successfully.



### `setVerificationCodeOnUser()`





Sets a new verification code on the user's record.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L853-L860)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.

#### Returns

[string](http://php.net/language.types.string) – The user’s brand new verification code.



### `shunMessageForUser()`





Shuns a message for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L783-L798)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID.
- `$message` ([string](http://php.net/language.types.string)) – The message to be shunned.
- `$expiryDate` ([DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)) – When the message should be un-shunned. Defaults to `null` (never un-shun).

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the message was shunned successfully.



### `suspendUser()`





Suspends a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L694-L727)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user was suspended successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `unlockUser()`





Unlocks a user, bypassing the cooldown phase.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L645-L685)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user was unlocked successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `unshunMessageForUser()`





Un-shuns a message for a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L807-L819)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer)) – The user’s ID.
- `$message` ([string](http://php.net/language.types.string)) – The message to un-shun.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the message was un-shunned successfully.



### `unsuspendUser()`





Unsuspends a user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L736-L773)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md)) – The user.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the user was unsuspended successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `verifyEmailForUser()`





If 'unverifiedEmail' is set on the User, then this method will transfer it to the official email property
and clear the unverified one.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Users.php#L610-L636)


#### Arguments

- `$user` ([craft\elements\User](craft-elements-user.md))

#### Returns

[boolean](http://php.net/language.types.boolean)







## Constants

| Constant                | Description
| ----------------------- | -----------
| `CONFIG_USERLAYOUT_KEY` |


## Events

### EVENT_AFTER_ACTIVATE_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user is activated.



---



### EVENT_AFTER_ASSIGN_USER_TO_DEFAULT_GROUP



Type

:   [craft\events\UserAssignGroupEvent](craft-events-userassigngroupevent.md)



The event that is triggered after a user is assigned to the default user group.



---



### EVENT_AFTER_ASSIGN_USER_TO_GROUPS



Type

:   [craft\events\UserGroupsAssignEvent](craft-events-usergroupsassignevent.md)



The event that is triggered after a user is assigned to some user groups.



---



### EVENT_AFTER_LOCK_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user is locked.



---



### EVENT_AFTER_SUSPEND_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user is suspended.



---



### EVENT_AFTER_UNLOCK_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user is unlocked.



---



### EVENT_AFTER_UNSUSPEND_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user is unsuspended.



---



### EVENT_AFTER_VERIFY_EMAIL



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered after a user's email is verified.



---



### EVENT_BEFORE_ACTIVATE_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered before a user is activated.

You may set [craft\events\UserEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting activated.



---



### EVENT_BEFORE_ASSIGN_USER_TO_DEFAULT_GROUP



Type

:   [craft\events\UserAssignGroupEvent](craft-events-userassigngroupevent.md)



The event that is triggered before a user is assigned to the default user group.

You may set [craft\events\UserAssignGroupEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting assigned to the default
user group.



---



### EVENT_BEFORE_ASSIGN_USER_TO_GROUPS



Type

:   [craft\events\UserGroupsAssignEvent](craft-events-usergroupsassignevent.md)



The event that is triggered before a user is assigned to some user groups.

You may set [craft\events\UserGroupsAssignEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting assigned to the groups.



---



### EVENT_BEFORE_SUSPEND_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered before a user is suspended.

You may set [craft\events\UserEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting suspended.



---



### EVENT_BEFORE_UNLOCK_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered before a user is unlocked.

You may set [craft\events\UserEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting unlocked.



---



### EVENT_BEFORE_UNSUSPEND_USER



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered before a user is unsuspended.

You may set [craft\events\UserEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the user from getting unsuspended.



---



### EVENT_BEFORE_VERIFY_EMAIL



Type

:   [craft\events\UserEvent](craft-events-userevent.md)



The event that is triggered before a user's email is verified.



---




