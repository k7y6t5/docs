---
title: craft\services\Plugins
code:
  - php
  - twig
---

# Plugins

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Plugins](craft-services-plugins.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Plugins service provides APIs for managing plugins.

An instance of the Plugins service is globally accessible in Craft via [`Craft::$app->plugins`](craft-base-applicationtrait.md#method-getplugins).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------
| [allPluginInfo](craft-services-plugins.md#allplugininfo)                                                                   | [array](http://php.net/language.types.array)
| [allPlugins](craft-services-plugins.md#allplugins)                                                                         | [craft\base\PluginInterface](craft-base-plugininterface.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [composerPluginInfo](craft-services-plugins.md#composerplugininfo)                                                         | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The plugin info, or null if an unknown handle was passed.
| [pluginConfigs](craft-services-plugins.md#pluginconfigs)                                                                   | [array](http://php.net/language.types.array)[] – Custom plugin configurations.
| [pluginLicenseKey](craft-services-plugins.md#pluginlicensekey)                                                             | [string](http://php.net/language.types.string) – The plugin’s handle
| [pluginLicenseKeyStatus](craft-services-plugins.md#pluginlicensekeystatus)                                                 | [string](http://php.net/language.types.string) – The plugin’s handle

### `allPluginInfo`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)



### `allPlugins`



Type

:   [craft\base\PluginInterface](craft-base-plugininterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)



### `composerPluginInfo`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Access

:   Read-only



The plugin info, or null if an unknown handle was passed.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)



### `pluginConfigs`



Type

:   [array](http://php.net/language.types.array)[]

Since

:   3.4.0



Custom plugin configurations.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L106)



### `pluginLicenseKey`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only



The plugin’s handle



[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)



### `pluginLicenseKeyStatus`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only



The plugin’s handle



[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php)







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
| [arePluginsLoaded()](craft-services-plugins.md#method-arepluginsloaded)                                                                     | Returns whether plugins have been loaded yet for this request.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createPlugin()](craft-services-plugins.md#method-createplugin)                                                                             | Creates and returns a new plugin instance based on its handle.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [disablePlugin()](craft-services-plugins.md#method-disableplugin)                                                                           | Disables a plugin by its handle.
| [doesPluginRequireDatabaseUpdate()](craft-services-plugins.md#method-doespluginrequiredatabaseupdate)                                       | Returns whether the given plugin’s local schema version is greater than the record we have in the database.
| [enablePlugin()](craft-services-plugins.md#method-enableplugin)                                                                             | Enables a plugin by its handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllPluginInfo()](craft-services-plugins.md#method-getallplugininfo)                                                                     | Returns info about all of the plugins we can find, whether they’re installed or not.
| [getAllPlugins()](craft-services-plugins.md#method-getallplugins)                                                                           | Returns all the enabled plugins.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getComposerPluginInfo()](craft-services-plugins.md#method-getcomposerplugininfo)                                                           | Returns the Composer-supplied info
| [getLicenseIssues()](craft-services-plugins.md#method-getlicenseissues)                                                                     | Returns any issues with a plugin license.
| [getPlugin()](craft-services-plugins.md#method-getplugin)                                                                                   | Returns an enabled plugin by its handle.
| [getPluginByPackageName()](craft-services-plugins.md#method-getpluginbypackagename)                                                         | Returns an enabled plugin by its package name.
| [getPluginHandleByClass()](craft-services-plugins.md#method-getpluginhandlebyclass)                                                         | Returns the plugin handle that contains the given class, if any.
| [getPluginIconSvg()](craft-services-plugins.md#method-getpluginiconsvg)                                                                     | Returns a plugin’s SVG icon.
| [getPluginInfo()](craft-services-plugins.md#method-getplugininfo)                                                                           | Returns info about a plugin, whether it's installed or not.
| [getPluginLicenseKey()](craft-services-plugins.md#method-getpluginlicensekey)                                                               | Returns the license key stored for a given plugin, if it was purchased through the Store.
| [getPluginLicenseKeyStatus()](craft-services-plugins.md#method-getpluginlicensekeystatus)                                                   | Returns the license key status of a given plugin.
| [getStoredPluginInfo()](craft-services-plugins.md#method-getstoredplugininfo)                                                               | Returns the stored info for a given plugin.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasIssues()](craft-services-plugins.md#method-hasissues)                                                                                   | Returns whether a plugin has licensing issues.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasPluginVersionNumberChanged()](craft-services-plugins.md#method-haspluginversionnumberchanged)                                           | Returns whether the given plugin’s version number has changed from what we have recorded in the database.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-services-plugins.md#method-init)                                                                                             | Initializes the object.
| [installPlugin()](craft-services-plugins.md#method-installplugin)                                                                           | Installs a plugin by its handle.
| [isPluginDisabled()](craft-services-plugins.md#method-isplugindisabled)                                                                     | Returns whether a given plugin is installed but disabled.
| [isPluginEnabled()](craft-services-plugins.md#method-ispluginenabled)                                                                       | Returns whether a given plugin is installed and enabled.
| [isPluginInstalled()](craft-services-plugins.md#method-isplugininstalled)                                                                   | Returns whether a given plugin is installed (even if it's disabled).
| [loadPlugins()](craft-services-plugins.md#method-loadplugins)                                                                               | Loads the enabled plugins.
| [normalizePluginLicenseKey()](craft-services-plugins.md#method-normalizepluginlicensekey)                                                   | Normalizes a plugin license key.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [savePluginSettings()](craft-services-plugins.md#method-savepluginsettings)                                                                 | Saves a plugin's settings.
| [setPluginLicenseKey()](craft-services-plugins.md#method-setpluginlicensekey)                                                               | Sets a plugin’s license key.
| [setPluginLicenseKeyStatus()](craft-services-plugins.md#method-setpluginlicensekeystatus)                                                   | Sets the license key status for a given plugin.
| [switchEdition()](craft-services-plugins.md#method-switchedition)                                                                           | Switches a plugin’s edition.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [uninstallPlugin()](craft-services-plugins.md#method-uninstallplugin)                                                                       | Uninstalls a plugin by its handle.

### `arePluginsLoaded()`





Returns whether plugins have been loaded yet for this request.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L281-L284)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `createPlugin()`





Creates and returns a new plugin instance based on its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L863-L919)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle
- `$info` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The plugin’s stored info, if any

#### Returns

[craft\base\PluginInterface](craft-base-plugininterface.md)

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if $handle is invalid


### `disablePlugin()`





Disables a plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L418-L454)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin was disabled successfully

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin isn’t installed


### `doesPluginRequireDatabaseUpdate()`





Returns whether the given plugin’s local schema version is greater than the record we have in the database.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L754-L764)


#### Arguments

- `$plugin` ([craft\base\PluginInterface](craft-base-plugininterface.md)) – The plugin

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin’s local schema version is greater than the record we have in the database



### `enablePlugin()`





Enables a plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L373-L409)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin was enabled successfully

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin isn't installed


### `getAllPluginInfo()`





Returns info about all of the plugins we can find, whether they’re installed or not.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L926-L941)



#### Returns

[array](http://php.net/language.types.array)



### `getAllPlugins()`





Returns all the enabled plugins.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L359-L364)



#### Returns

[craft\base\PluginInterface](craft-base-plugininterface.md)[]



### `getComposerPluginInfo()`





Returns the Composer-supplied info




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L847-L853)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The plugin handle. If null is passed, info for all Composer-installed plugins will be returned.

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The plugin info, or null if an unknown handle was passed.



### `getLicenseIssues()`





Returns any issues with a plugin license.

The response will be an array containing a combination of these strings:

- `wrong_edition` – if the current edition isn't the licensed one, and
  testing editions isn't allowed
- `mismatched` – if the license key is tied to a different Craft license
- `astray` – if the installed version is greater than the highest version
  the license is allowed to run
- `required` – if no license key is present but one is required
- `invalid` – if a license key is present but it’s invalid


[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1042-L1091)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)[]



### `getPlugin()`





Returns an enabled plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L292-L301)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[craft\base\PluginInterface](craft-base-plugininterface.md), [null](http://php.net/language.types.null) – The plugin, or null if it doesn’t exist



### `getPluginByPackageName()`





Returns an enabled plugin by its package name.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L309-L321)


#### Arguments

- `$packageName` ([string](http://php.net/language.types.string)) – The plugin’s package name

#### Returns

[craft\base\PluginInterface](craft-base-plugininterface.md), [null](http://php.net/language.types.null) – The plugin, or null if it doesn’t exist



### `getPluginHandleByClass()`





Returns the plugin handle that contains the given class, if any.

The plugin may not actually be installed.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L331-L352)


#### Arguments

- `$class` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin handle, or null if it can’t be determined



### `getPluginIconSvg()`





Returns a plugin’s SVG icon.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1099-L1118)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[string](http://php.net/language.types.string) – The given plugin’s SVG icon



### `getPluginInfo()`





Returns info about a plugin, whether it's installed or not.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L950-L1013)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin isn't Composer-installed


### `getPluginLicenseKey()`





Returns the license key stored for a given plugin, if it was purchased through the Store.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1127-L1130)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s license key, or null if it isn’t known

#### Throws

- [craft\errors\InvalidLicenseKeyException](craft-errors-invalidlicensekeyexception.md)


### `getPluginLicenseKeyStatus()`





Returns the license key status of a given plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1199-L1202)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[string](http://php.net/language.types.string)



### `getStoredPluginInfo()`





Returns the stored info for a given plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L814-L839)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The stored info, if there is any



### `hasIssues()`





Returns whether a plugin has licensing issues.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1021-L1024)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `hasPluginVersionNumberChanged()`





Returns whether the given plugin’s version number has changed from what we have recorded in the database.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L736-L746)


#### Arguments

- `$plugin` ([craft\base\PluginInterface](craft-base-plugininterface.md)) – The plugin

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin’s version number has changed from what we have recorded in the database



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L151-L173)






### `installPlugin()`





Installs a plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L465-L564)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle
- `$edition` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The plugin’s edition

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin was installed successfully.

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin doesn’t exist
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `isPluginDisabled()`





Returns whether a given plugin is installed but disabled.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L803-L806)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isPluginEnabled()`





Returns whether a given plugin is installed and enabled.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L791-L795)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isPluginInstalled()`





Returns whether a given plugin is installed (even if it's disabled).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L772-L783)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle

#### Returns

[boolean](http://php.net/language.types.boolean)



### `loadPlugins()`





Loads the enabled plugins.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L178-L274)






### `normalizePluginLicenseKey()`





Normalizes a plugin license key.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1171-L1191)


#### Arguments

- `$licenseKey` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

#### Throws

- [craft\errors\InvalidLicenseKeyException](craft-errors-invalidlicensekeyexception.md)


### `savePluginSettings()`





Saves a plugin's settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L691-L728)


#### Arguments

- `$plugin` ([craft\base\PluginInterface](craft-base-plugininterface.md)) – The plugin
- `$settings` ([array](http://php.net/language.types.array)) – The plugin’s new settings

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin’s settings were saved successfully



### `setPluginLicenseKey()`





Sets a plugin’s license key.

Note this should *not* be used to store license keys generated by third party stores.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1143-L1162)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle
- `$licenseKey` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The plugin’s license key

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the license key was updated successfully

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin isn't installed
- [craft\errors\InvalidLicenseKeyException](craft-errors-invalidlicensekeyexception.md)\
  if $licenseKey is invalid


### `setPluginLicenseKeyStatus()`





Sets the license key status for a given plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L1212-L1233)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle
- `$licenseKeyStatus` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The plugin’s license key status
- `$licensedEdition` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The plugin's licensed edition, if the key is valid


#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin isn't installed


### `switchEdition()`





Switches a plugin’s edition.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L656-L682)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle
- `$edition` ([string](http://php.net/language.types.string)) – The plugin’s edition


#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin doesn’t exist
- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $edition is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `uninstallPlugin()`





Uninstalls a plugin by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Plugins.php#L574-L645)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin’s handle

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin was uninstalled successfully

#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)\
  if the plugin doesn’t exist
- [Throwable](http://php.net/class.throwable)\
  if reasons






## Constants

| Constant             | Description
| -------------------- | -----------
| `CONFIG_PLUGINS_KEY` |


## Events

### EVENT_AFTER_DISABLE_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is disabled



---



### EVENT_AFTER_ENABLE_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is enabled



---



### EVENT_AFTER_INSTALL_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is installed



---



### EVENT_AFTER_LOAD_PLUGINS



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after all plugins have been loaded



---



### EVENT_AFTER_SAVE_PLUGIN_SETTINGS



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin's settings are saved



---



### EVENT_AFTER_UNINSTALL_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is uninstalled



---



### EVENT_BEFORE_DISABLE_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is disabled



---



### EVENT_BEFORE_ENABLE_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is enabled



---



### EVENT_BEFORE_INSTALL_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is installed



---



### EVENT_BEFORE_LOAD_PLUGINS



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered before any plugins have been loaded



---



### EVENT_BEFORE_SAVE_PLUGIN_SETTINGS



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin's settings are saved



---



### EVENT_BEFORE_UNINSTALL_PLUGIN



Type

:   [craft\events\PluginEvent](craft-events-pluginevent.md)



The event that is triggered before a plugin is uninstalled



---




