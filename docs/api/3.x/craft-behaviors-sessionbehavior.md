---
title: craft\behaviors\SessionBehavior
code:
  - php
  - twig
---

# SessionBehavior

Type

:   Class

Namespace

:   craft\behaviors

Inherits

:   [craft\behaviors\SessionBehavior](craft-behaviors-sessionbehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Extends \yii\web\Session to add support for setting the session folder and creating it if it doesn’t exist.





[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [assetBundleFlashKey](craft-behaviors-sessionbehavior.md#assetbundleflashkey)                                    | [string](http://php.net/language.types.string) – The name of the flash key that stores asset bundle data
| [assetBundleFlashes](craft-behaviors-sessionbehavior.md#assetbundleflashes)                                      | [array](http://php.net/language.types.array) – The queued-up asset bundles.
| [authAccessParam](craft-behaviors-sessionbehavior.md#authaccessparam)                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The session variable name used to store the authorization keys for the current session.
| [error](craft-behaviors-sessionbehavior.md#error)                                                                | [string](http://php.net/language.types.string) – The message.
| [jsFlashKey](craft-behaviors-sessionbehavior.md#jsflashkey)                                                      | [string](http://php.net/language.types.string) – The name of the flash key that stores JS data
| [jsFlashes](craft-behaviors-sessionbehavior.md#jsflashes)                                                        | [array](http://php.net/language.types.array) – The stored JS flashes.
| [notice](craft-behaviors-sessionbehavior.md#notice)                                                              | [string](http://php.net/language.types.string) – The message.
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior

### `assetBundleFlashKey`



Type

:   [string](http://php.net/language.types.string)



The name of the flash key that stores asset bundle data



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L36)



### `assetBundleFlashes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The queued-up asset bundles.



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php)



### `authAccessParam`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The session variable name used to store the authorization keys for the current session.

See also:

- [authorize()](craft-behaviors-sessionbehavior.md#method-authorize)
- [deauthorize()](craft-behaviors-sessionbehavior.md#method-deauthorize)
- [checkAuthorization()](craft-behaviors-sessionbehavior.md#method-checkauthorization)


[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L31)



### `error`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only



The message.



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php)



### `jsFlashKey`



Type

:   [string](http://php.net/language.types.string)



The name of the flash key that stores JS data



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L41)



### `jsFlashes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The stored JS flashes.



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php)



### `notice`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only



The message.



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [addAssetBundleFlash()](craft-behaviors-sessionbehavior.md#method-addassetbundleflash)                                                    | Queues up an asset bundle to be registered on a future request.
| [addJsFlash()](craft-behaviors-sessionbehavior.md#method-addjsflash)                                                                      | Stores JS in the user’s flash data.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#attach()-detail "Defined by yii\base\Behavior")                     | Attaches the behavior object to the component.
| [authorize()](craft-behaviors-sessionbehavior.md#method-authorize)                                                                        | Authorizes the user to perform an action for the duration of the session.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [checkAuthorization()](craft-behaviors-sessionbehavior.md#method-checkauthorization)                                                      | Returns whether the user is authorized to perform an action.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [deauthorize()](craft-behaviors-sessionbehavior.md#method-deauthorize)                                                                    | Deauthorizes the user from performing an action.
| [detach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#detach()-detail "Defined by yii\base\Behavior")                     | Detaches the behavior object from the component.
| [events()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#events()-detail "Defined by yii\base\Behavior")                     | Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.
| [getAssetBundleFlashes()](craft-behaviors-sessionbehavior.md#method-getassetbundleflashes)                                                | Returns the list of queued-up asset bundles in the session flash data.
| [getJsFlashes()](craft-behaviors-sessionbehavior.md#method-getjsflashes)                                                                  | Returns the stored JS flashes.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [setError()](craft-behaviors-sessionbehavior.md#method-seterror)                                                                          | Stores an error message in the user’s flash data.
| [setNotice()](craft-behaviors-sessionbehavior.md#method-setnotice)                                                                        | Stores a notice in the user’s flash data.

### `addAssetBundleFlash()`





Queues up an asset bundle to be registered on a future request.

Asset bundles that were queued with this method can be registered using [getAssetBundleFlashes()](craft-behaviors-sessionbehavior.md#method-getassetbundleflashes) or
[craft\web\View::getBodyHtml()](craft-web-view.md#method-getbodyhtml).

See also [getAssetBundleFlashes()](craft-behaviors-sessionbehavior.md#method-getassetbundleflashes)
[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L85-L94)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The class name of the asset bundle (without the leading backslash)
- `$position` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – If set, this forces a minimum position for javascript files.


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $name isn't an asset bundle class name


### `addJsFlash()`





Stores JS in the user’s flash data.

The JavaScript code will be stored on the session, and can be retrieved
by calling [getJsFlashes()](craft-behaviors-sessionbehavior.md#method-getjsflashes) or [craft\web\View::getBodyHtml()](craft-web-view.md#method-getbodyhtml).

See also:

- [getJsFlashes()](craft-behaviors-sessionbehavior.md#method-getjsflashes)
- [craft\web\View::registerJs()](craft-web-view.md#method-registerjs)

[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L121-L126)


#### Arguments

- `$js` ([string](http://php.net/language.types.string)) – The JS code block to be registered
- `$position` ([integer](http://php.net/language.types.integer)) – The position at which the JS script tag should
be inserted in a page.
- `$key` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The key that identifies the JS code block.




### `authorize()`





Authorizes the user to perform an action for the duration of the session.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L148-L156)


#### Arguments

- `$action` ([string](http://php.net/language.types.string))




### `checkAuthorization()`





Returns whether the user is authorized to perform an action.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L180-L185)


#### Arguments

- `$action` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deauthorize()`





Deauthorizes the user from performing an action.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L163-L172)


#### Arguments

- `$action` ([string](http://php.net/language.types.string))




### `getAssetBundleFlashes()`





Returns the list of queued-up asset bundles in the session flash data.



See also [addAssetBundleFlash()](craft-behaviors-sessionbehavior.md#method-addassetbundleflash)
[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L103-L106)


#### Arguments

- `$delete` ([boolean](http://php.net/language.types.boolean)) – Whether to delete the stored flashes. Defaults to `true`.

#### Returns

[array](http://php.net/language.types.array) – The queued-up asset bundles.



### `getJsFlashes()`





Returns the stored JS flashes.



See also [addJsFlash()](craft-behaviors-sessionbehavior.md#method-addjsflash)
[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L135-L138)


#### Arguments

- `$delete` ([boolean](http://php.net/language.types.boolean)) – Whether to delete the stored flashes. Defaults to `true`.

#### Returns

[array](http://php.net/language.types.array) – The stored JS flashes.



### `setError()`





Stores an error message in the user’s flash data.

The message will be stored on the session, and can be retrieved by calling
`\craft\behaviors\getFlash()` or `\craft\behaviors\getAllFlashes()`.
Only one flash error message can be stored at a time.


[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L69-L72)


#### Arguments

- `$message` ([string](http://php.net/language.types.string)) – The message.




### `setNotice()`





Stores a notice in the user’s flash data.

The message will be stored on the session, and can be retrieved by calling
`\craft\behaviors\getFlash()` or `\craft\behaviors\getAllFlashes()`.
Only one flash notice can be stored at a time.


[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/SessionBehavior.php#L55-L58)


#### Arguments

- `$message` ([string](http://php.net/language.types.string)) – The message.











