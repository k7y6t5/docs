---
title: craft\base\PluginInterface
code:
  - php
  - twig
---

# PluginInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\base\Plugin](craft-base-plugin.md)

Since

:   3.0.0



PluginInterface defines the common interface to be implemented by plugin classes.

A class implementing this interface should also use [craft\base\PluginTrait](craft-base-plugintrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php)






## Public Methods

| Method                                                                            | Description
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------
| [afterSaveSettings()](craft-base-plugininterface.md#method-aftersavesettings)     | Performs actions after the plugin’s settings are saved.
| [beforeSaveSettings()](craft-base-plugininterface.md#method-beforesavesettings)   | Performs actions before the plugin’s settings are saved.
| [editions()](craft-base-plugininterface.md#method-editions)                       | Returns supported plugin editions (lowest to highest).
| [getCpNavItem()](craft-base-plugininterface.md#method-getcpnavitem)               | Returns the control panel nav item definition for this plugin, if it has a section in the control panel.
| [getHandle()](craft-base-plugininterface.md#method-gethandle)                     | Returns the plugin’s handle (really just an alias of [yii\base\Module::$id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail)).
| [getMigrator()](craft-base-plugininterface.md#method-getmigrator)                 | Returns the plugin’s migration manager
| [getSettings()](craft-base-plugininterface.md#method-getsettings)                 | Returns the model that the plugin’s settings should be stored on, if the plugin has settings.
| [getSettingsResponse()](craft-base-plugininterface.md#method-getsettingsresponse) | Returns the settings page response.
| [getVersion()](craft-base-plugininterface.md#method-getversion)                   | Returns the plugin’s current version.
| [install()](craft-base-plugininterface.md#method-install)                         | Installs the plugin.
| [setSettings()](craft-base-plugininterface.md#method-setsettings)                 | Sets the plugin settings
| [uninstall()](craft-base-plugininterface.md#method-uninstall)                     | Uninstalls the plugin.

### `afterSaveSettings()`



Since

:   3.0.16



Performs actions after the plugin’s settings are saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L147)






### `beforeSaveSettings()`



Since

:   3.0.16



Performs actions before the plugin’s settings are saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L140)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin’s settings should be saved.



### `editions()`



Since

:   3.1.0



Returns supported plugin editions (lowest to highest).




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L28)



#### Returns

[string](http://php.net/language.types.string)[]



### `getCpNavItem()`





Returns the control panel nav item definition for this plugin, if it has a section in the control panel.

The returned array should contain the following keys:

- `label` – The human-facing nav item label
- `url` – The URL the nav item should link to
- `id` – The HTML `id` attribute the nav item should have (optional)
- `icon` – The path to an SVG file that should be used as the nav item icon (optional)
- `fontIcon` – A character/ligature from Craft’s font icon set (optional)
- `badgeCount` – A number that should be displayed beside the nav item when unselected
- `subnav` – A sub-array of subnav items

The subnav array should be associative, with identifiable keys set to sub-arrays with the following keys:

- `label` – The human-facing subnav item label
- `url` – The URL the subnav item should link to

For example:

```php
return [
    'label' => 'Commerce',
    'url' => 'commerce',
    'subnav' => [
        'orders' => ['label' => 'Orders', 'url' => 'commerce/orders',
        'discounts' => ['label' => 'Discounts', 'url' => 'commerce/discounts',
    ],
];
```

Control panel templates can specify which subnav item is selected by defining a `selectedSubnavItem` variable.

```twig
{% set selectedSubnavItem = 'orders' %}
```

See also:

- [craft\base\PluginTrait::$hasCpSection](craft-base-plugintrait.md#hascpsection)
- [craft\web\twig\variables\Cp::nav()](craft-web-twig-variables-cp.md#method-nav)

[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L129)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getHandle()`





Returns the plugin’s handle (really just an alias of [yii\base\Module::$id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail)).




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L35)



#### Returns

[string](http://php.net/language.types.string) – The plugin’s handle



### `getMigrator()`





Returns the plugin’s migration manager




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L65)



#### Returns

[craft\db\MigrationManager](craft-db-migrationmanager.md) – The plugin’s migration manager



### `getSettings()`





Returns the model that the plugin’s settings should be stored on, if the plugin has settings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L72)



#### Returns

[craft\base\Model](craft-base-model.md), [null](http://php.net/language.types.null) – The model that the plugin’s settings should be stored on, if the plugin has settings



### `getSettingsResponse()`





Returns the settings page response.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L86)



#### Returns

`mixed` – The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](craft-controllers-pluginscontroller.md#method-actioneditpluginsettings)



### `getVersion()`





Returns the plugin’s current version.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L42)



#### Returns

[string](http://php.net/language.types.string) – The plugin’s current version



### `install()`





Installs the plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L50)



#### Returns

`void`, [false](http://php.net/language.types.boolean) – Return `false` to indicate the installation failed.
All other return values mean the installation was successful.



### `setSettings()`





Sets the plugin settings




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L79)


#### Arguments

- `$settings` ([array](http://php.net/language.types.array)) – The plugin settings that should be set on the settings model




### `uninstall()`





Uninstalls the plugin.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginInterface.php#L58)



#### Returns

`void`, [false](http://php.net/language.types.boolean) – Return `false` to indicate the uninstallation failed.
All other return values mean the uninstallation was successful.









