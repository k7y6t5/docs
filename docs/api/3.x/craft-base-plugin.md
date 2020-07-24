---
title: craft\base\Plugin
code:
  - php
  - twig
---

# Plugin

Type

:   Class

Namespace

:   craft\base

Inherits

:   [craft\base\Plugin](craft-base-plugin.md) &raquo;
[yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) &raquo;
[yii\di\ServiceLocator](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\base\PluginInterface](craft-base-plugininterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\PluginTrait](craft-base-plugintrait.md)

Since

:   3.0.0



Plugin is the base class for classes representing plugins in terms of objects.





[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)


## Public Properties

| Property                                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [aliases](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$aliases-detail "Defined by yii\base\Module")                         | [array](http://php.net/language.types.array) – List of path aliases to be defined.
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$basePath-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The root directory of the module.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")               | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [changelogUrl](craft-base-plugintrait.md#changelogurl "Defined by craft\base\PluginTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s changelog URL.
| [components](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#$components-detail "Defined by yii\di\ServiceLocator")       | [array](http://php.net/language.types.array) – The list of the component definitions or the loaded component instances (ID => definition or instance).
| [controllerMap](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerMap-detail "Defined by yii\base\Module")             | [array](http://php.net/language.types.array) – Mapping from controller ID to controller configurations.
| [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail "Defined by yii\base\Module") | [string](http://php.net/language.types.string) – The namespace that controller classes are in.
| [controllerPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerPath-detail "Defined by yii\base\Module")           | [string](http://php.net/language.types.string) – The directory that contains the controller classes.
| [cpNavItem](craft-base-plugin.md#cpnavitem)                                                                                              | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)
| [defaultRoute](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$defaultRoute-detail "Defined by yii\base\Module")               | [string](http://php.net/language.types.string) – The default route of this module.
| [description](craft-base-plugintrait.md#description "Defined by craft\base\PluginTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s description
| [developer](craft-base-plugintrait.md#developer "Defined by craft\base\PluginTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s name
| [developerEmail](craft-base-plugintrait.md#developeremail "Defined by craft\base\PluginTrait")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s support email
| [developerUrl](craft-base-plugintrait.md#developerurl "Defined by craft\base\PluginTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s website URL
| [documentationUrl](craft-base-plugintrait.md#documentationurl "Defined by craft\base\PluginTrait")                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s documentation URL
| [downloadUrl](craft-base-plugintrait.md#downloadurl "Defined by craft\base\PluginTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s download URL
| [edition](craft-base-plugintrait.md#edition "Defined by craft\base\PluginTrait")                                                         | [string](http://php.net/language.types.string) – The active edition.
| [handle](craft-base-plugin.md#handle)                                                                                                    | [string](http://php.net/language.types.string) – The plugin’s handle
| [hasCpSection](craft-base-plugintrait.md#hascpsection "Defined by craft\base\PluginTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the plugin has its own section in the control panel
| [hasCpSettings](craft-base-plugintrait.md#hascpsettings "Defined by craft\base\PluginTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the plugin has a settings page in the control panel
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail "Defined by yii\base\Module")                                   | [string](http://php.net/language.types.string) – An ID that uniquely identifies this module among other modules which have the same [parent](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail).
| [isInstalled](craft-base-plugintrait.md#isinstalled "Defined by craft\base\PluginTrait")                                                 | [boolean](http://php.net/language.types.boolean) – Whether the plugin is currently installed.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layout-detail "Defined by yii\base\Module")                           | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The layout that should be applied for views within this module.
| [layoutPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layoutPath-detail "Defined by yii\base\Module")                   | [string](http://php.net/language.types.string) – The root directory of layout files.
| [migrator](craft-base-plugin.md#migrator)                                                                                                | [craft\db\MigrationManager](craft-db-migrationmanager.md) – The plugin’s migration manager
| [minVersionRequired](craft-base-plugintrait.md#minversionrequired "Defined by craft\base\PluginTrait")                                   | [string](http://php.net/language.types.string) – The minimum required version the plugin has to be so it can be updated.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail "Defined by yii\base\Module")                           | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The parent module of this module.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$modules-detail "Defined by yii\base\Module")                         | [array](http://php.net/language.types.array) – The modules (indexed by their IDs).
| [name](craft-base-plugintrait.md#name "Defined by craft\base\PluginTrait")                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s display name
| [packageName](craft-base-plugintrait.md#packagename "Defined by craft\base\PluginTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s package name
| [params](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$params-detail "Defined by yii\base\Module")                           | [array](http://php.net/language.types.array) – Custom module parameters (name => value).
| [schemaVersion](craft-base-plugintrait.md#schemaversion "Defined by craft\base\PluginTrait")                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s schema version number
| [settings](craft-base-plugin.md#settings)                                                                                                | [craft\base\Model](craft-base-model.md), [null](http://php.net/language.types.null) – The model that the plugin’s settings should be stored on, if the plugin has settings
| [settingsResponse](craft-base-plugin.md#settingsresponse)                                                                                | `mixed` – The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](craft-controllers-pluginscontroller.md#method-actioneditpluginsettings)
| [sourceLanguage](craft-base-plugintrait.md#sourcelanguage "Defined by craft\base\PluginTrait")                                           | [string](http://php.net/language.types.string) – The language that the plugin’s messages were written in
| [t9nCategory](craft-base-plugintrait.md#t9ncategory "Defined by craft\base\PluginTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The translation category that this plugin’s translation messages should use.
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$uniqueId-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The unique ID of the module.
| [version](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$version-detail "Defined by yii\base\Module")                         | [string](http://php.net/language.types.string) – The version of this module.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$viewPath-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The root directory of view files.

### `cpNavItem`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)



### `handle`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The plugin’s handle



[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)



### `migrator`



Type

:   [craft\db\MigrationManager](craft-db-migrationmanager.md)

Access

:   Read-only



The plugin’s migration manager



[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)



### `settings`



Type

:   [craft\base\Model](craft-base-model.md), [null](http://php.net/language.types.null)



The model that the plugin’s settings should be stored on, if the plugin has settings



[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)



### `settingsResponse`



Type

:   `mixed`

Access

:   Read-only



The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](craft-controllers-pluginscontroller.md#method-actioneditpluginsettings)



[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php)







## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-base-plugin.md#method-construct)                                                                                        | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                   | Sets an object property to null.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#afterAction()-detail "Defined by yii\base\Module")                   | This method is invoked right after an action within this module is executed.
| [afterSaveSettings()](craft-base-plugin.md#method-aftersavesettings)                                                                          | Performs actions after the plugin’s settings are saved.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#beforeAction()-detail "Defined by yii\base\Module")                 | This method is invoked right before an action within this module is executed.
| [beforeSaveSettings()](craft-base-plugin.md#method-beforesavesettings)                                                                        | Performs actions before the plugin’s settings are saved.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#clear()-detail "Defined by yii\di\ServiceLocator")                   | Removes the component from the locator.
| [createController()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createController()-detail "Defined by yii\base\Module")         | Creates a controller instance based on the given route.
| [createControllerByID()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createControllerByID()-detail "Defined by yii\base\Module") | Creates a controller based on the given controller ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [editions()](craft-base-plugin.md#method-editions)                                                                                            | Returns supported plugin editions (lowest to highest).
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#get()-detail "Defined by yii\base\Module")                                   | Returns the component instance with the specified ID.
| [getBasePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getBasePath()-detail "Defined by yii\base\Module")                   | Returns the root directory of the module.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#getComponents()-detail "Defined by yii\di\ServiceLocator")   | Returns the list of the component definitions or the loaded component instances.
| [getControllerPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getControllerPath()-detail "Defined by yii\base\Module")       | Returns the directory that contains the controller classes according to [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail).
| [getCpNavItem()](craft-base-plugin.md#method-getcpnavitem)                                                                                    | Returns the control panel nav item definition for this plugin, if it has a section in the control panel.
| [getHandle()](craft-base-plugin.md#method-gethandle)                                                                                          | Returns the plugin’s handle (really just an alias of [yii\base\Module::$id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail)).
| [getInstance()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getInstance()-detail "Defined by yii\base\Module")                   | Returns the currently requested instance of this module class.
| [getLayoutPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getLayoutPath()-detail "Defined by yii\base\Module")               | Returns the directory that contains layout view files for this module.
| [getMigrator()](craft-base-plugin.md#method-getmigrator)                                                                                      | Returns the plugin’s migration manager
| [getModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModule()-detail "Defined by yii\base\Module")                       | Retrieves the child module of the specified ID.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModules()-detail "Defined by yii\base\Module")                     | Returns the sub-modules in this module.
| [getSettings()](craft-base-plugin.md#method-getsettings)                                                                                      | Returns the model that the plugin’s settings should be stored on, if the plugin has settings.
| [getSettingsResponse()](craft-base-plugin.md#method-getsettingsresponse)                                                                      | Returns the settings page response.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getUniqueId()-detail "Defined by yii\base\Module")                   | Returns an ID that uniquely identifies this module among all modules within the current application.
| [getVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getVersion()-detail "Defined by yii\base\Module")                     | Returns current module version.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getViewPath()-detail "Defined by yii\base\Module")                   | Returns the directory that contains the view files for this module.
| [has()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#has()-detail "Defined by yii\base\Module")                                   | Returns a value indicating whether the locator has the specified component definition or has instantiated the component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a method is defined.
| [hasModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#hasModule()-detail "Defined by yii\base\Module")                       | Checks whether the child module of the specified ID exists.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                         | Initializes the object.
| [install()](craft-base-plugin.md#method-install)                                                                                              | Installs the plugin.
| [is()](craft-base-plugin.md#method-is)                                                                                                        | Compares the active edition with the given edition.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                               | Attaches an event handler to an event.
| [runAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#runAction()-detail "Defined by yii\base\Module")                       | Runs a controller action specified by a route.
| [set()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#set()-detail "Defined by yii\di\ServiceLocator")                       | Registers a component definition with this locator.
| [setAliases()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setAliases()-detail "Defined by yii\base\Module")                     | Defines path aliases.
| [setBasePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setBasePath()-detail "Defined by yii\base\Module")                   | Sets the root directory of the module.
| [setComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#setComponents()-detail "Defined by yii\di\ServiceLocator")   | Registers a set of component definitions in this locator.
| [setInstance()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setInstance()-detail "Defined by yii\base\Module")                   | Sets the currently requested instance of this module class.
| [setLayoutPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setLayoutPath()-detail "Defined by yii\base\Module")               | Sets the directory that contains the layout files.
| [setModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setModule()-detail "Defined by yii\base\Module")                       | Adds a sub-module to this module.
| [setModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setModules()-detail "Defined by yii\base\Module")                     | Registers sub-modules in the current module.
| [setSettings()](craft-base-plugin.md#method-setsettings)                                                                                      | Sets the plugin settings
| [setVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setVersion()-detail "Defined by yii\base\Module")                     | Sets current module version.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setViewPath()-detail "Defined by yii\base\Module")                   | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.
| [uninstall()](craft-base-plugin.md#method-uninstall)                                                                                          | Uninstalls the plugin.

### `__construct()`





Constructor.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L70-L116)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – The ID of this module.
- `$parent` ([yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module)) – The parent module (if any).
- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties.




### `afterSaveSettings()`



Since

:   3.0.16



Performs actions after the plugin’s settings are saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L324-L330)






### `beforeSaveSettings()`



Since

:   3.0.16



Performs actions before the plugin’s settings are saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L312-L319)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin’s settings should be saved.



### `editions()`



Since

:   3.1.0



Returns supported plugin editions (lowest to highest).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L54-L59)



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




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L241-L253)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getHandle()`





Returns the plugin’s handle (really just an alias of [yii\base\Module::$id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail)).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L121-L124)



#### Returns

[string](http://php.net/language.types.string) – The plugin’s handle



### `getMigrator()`





Returns the plugin’s migration manager








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L232-L236)



#### Returns

[craft\db\MigrationManager](craft-db-migrationmanager.md) – The plugin’s migration manager



### `getSettings()`





Returns the model that the plugin’s settings should be stored on, if the plugin has settings.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L183-L194)



#### Returns

[craft\base\Model](craft-base-model.md), [null](http://php.net/language.types.null) – The model that the plugin’s settings should be stored on, if the plugin has settings



### `getSettingsResponse()`





Returns the settings page response.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L212-L227)



#### Returns

`mixed` – The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](craft-controllers-pluginscontroller.md#method-actioneditpluginsettings)



### `install()`





Installs the plugin.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L129-L156)



#### Returns

`void`, [false](http://php.net/language.types.boolean) – Return `false` to indicate the installation failed.
All other return values mean the installation was successful.



### `is()`



Since

:   3.1.0



Compares the active edition with the given edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L270-L304)


#### Arguments

- `$edition` ([string](http://php.net/language.types.string)) – The edition to compare the active edition against
- `$operator` ([string](http://php.net/language.types.string)) – The comparison operator to use. `=` by default,
meaning the method will return `true` if the active edition is equal to
the passed-in edition.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if `$edition` is an unsupported edition,
or if `$operator` is an invalid operator.


### `setSettings()`





Sets the plugin settings








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L199-L207)


#### Arguments

- `$settings` ([array](http://php.net/language.types.array)) – The plugin settings that should be set on the settings model




### `uninstall()`





Uninstalls the plugin.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L161-L178)



#### Returns

`void`, [false](http://php.net/language.types.boolean) – Return `false` to indicate the uninstallation failed.
All other return values mean the uninstallation was successful.





## Protected Methods

| Method                                                                                                                            | Description
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------
| [afterInstall()](craft-base-plugin.md#method-afterinstall)                                                                        | Performs actions after the plugin is installed.
| [afterUninstall()](craft-base-plugin.md#method-afteruninstall)                                                                    | Performs actions after the plugin is uninstalled.
| [beforeInstall()](craft-base-plugin.md#method-beforeinstall)                                                                      | Performs actions before the plugin is installed.
| [beforeUninstall()](craft-base-plugin.md#method-beforeuninstall)                                                                  | Performs actions before the plugin is uninstalled.
| [cpNavIconPath()](craft-base-plugin.md#method-cpnaviconpath)                                                                      | Returns the path to the SVG icon that should be used in the plugin’s nav item in the control panel.
| [createInstallMigration()](craft-base-plugin.md#method-createinstallmigration)                                                    | Instantiates and returns the plugin’s installation migration, if it has one.
| [createSettingsModel()](craft-base-plugin.md#method-createsettingsmodel)                                                          | Creates and returns the model used to store the plugin’s settings.
| [defaultVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#defaultVersion()-detail "Defined by yii\base\Module") | Returns default module version.
| [settingsHtml()](craft-base-plugin.md#method-settingshtml)                                                                        | Returns the rendered settings HTML, which will be inserted into the content block on the settings page.

### `afterInstall()`





Performs actions after the plugin is installed.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L366-L368)






### `afterUninstall()`





Performs actions after the plugin is uninstalled.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L383-L385)






### `beforeInstall()`





Performs actions before the plugin is installed.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L358-L361)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin should be installed



### `beforeUninstall()`





Performs actions before the plugin is uninstalled.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L375-L378)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin should be uninstalled



### `cpNavIconPath()`





Returns the path to the SVG icon that should be used in the plugin’s nav item in the control panel.



See also [getCpNavItem()](craft-base-plugin.md#method-getcpnavitem)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L413-L418)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `createInstallMigration()`





Instantiates and returns the plugin’s installation migration, if it has one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L337-L351)



#### Returns

[craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null) – The plugin’s installation migration



### `createSettingsModel()`





Creates and returns the model used to store the plugin’s settings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L392-L395)



#### Returns

[craft\base\Model](craft-base-model.md), [null](http://php.net/language.types.null)



### `settingsHtml()`





Returns the rendered settings HTML, which will be inserted into the content block on the settings page.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Plugin.php#L402-L405)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The rendered settings HTML







## Events

### EVENT_AFTER_SAVE_SETTINGS



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)

Since

:   3.0.16



The event that is triggered after the plugin’s settings are saved



---



### EVENT_BEFORE_SAVE_SETTINGS



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)

Since

:   3.0.16



The event that is triggered before the plugin’s settings are saved.

You may set [craft\events\ModelEvent::$isValid](https://www.yiiframework.com/doc/api/2.0/yii-base-modelevent#$isValid-detail) to `false` to prevent the plugin’s settings from saving.



---




