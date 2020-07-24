---
title: craft\commerce\Plugin
code:
  - php
  - twig
---

# Plugin

Type

:   Class

Namespace

:   craft\commerce

Inherits

:   [craft\commerce\Plugin](craft-commerce-plugin.md) &raquo;
[craft\base\Plugin](https://docs.craftcms.com/api/v3/craft-base-plugin.html) &raquo;
[yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) &raquo;
[yii\di\ServiceLocator](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\base\PluginInterface](https://docs.craftcms.com/api/v3/craft-base-plugininterface.html), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\PluginTrait](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html), [craft\commerce\plugin\Routes](craft-commerce-plugin-routes.md), [craft\commerce\plugin\Services](craft-commerce-plugin-services.md), [craft\commerce\plugin\Variables](craft-commerce-plugin-variables.md)

Since

:   2.0









[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php)


## Public Properties

| Property                                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [addresses](craft-commerce-plugin-services.md#addresses "Defined by craft\commerce\plugin\Services")                                     | [craft\commerce\services\Addresses](craft-commerce-services-addresses.md) – The address service
| [aliases](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$aliases-detail "Defined by yii\base\Module")                         | [array](http://php.net/language.types.array) – List of path aliases to be defined.
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$basePath-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The root directory of the module.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")               | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [carts](craft-commerce-plugin-services.md#carts "Defined by craft\commerce\plugin\Services")                                             | [craft\commerce\services\Carts](craft-commerce-services-carts.md) – The cart service
| [changelogUrl](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#changelogurl "Defined by craft\base\PluginTrait")            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s changelog URL.
| [components](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#$components-detail "Defined by yii\di\ServiceLocator")       | [array](http://php.net/language.types.array) – The list of the component definitions or the loaded component instances (ID => definition or instance).
| [controllerMap](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerMap-detail "Defined by yii\base\Module")             | [array](http://php.net/language.types.array) – Mapping from controller ID to controller configurations.
| [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail "Defined by yii\base\Module") | [string](http://php.net/language.types.string) – The namespace that controller classes are in.
| [controllerPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerPath-detail "Defined by yii\base\Module")           | [string](http://php.net/language.types.string) – The directory that contains the controller classes.
| [countries](craft-commerce-plugin-services.md#countries "Defined by craft\commerce\plugin\Services")                                     | [craft\commerce\services\Countries](craft-commerce-services-countries.md) – The countries service
| [cpNavItem](craft-commerce-plugin.md#cpnavitem)                                                                                          | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)
| [currencies](craft-commerce-plugin-services.md#currencies "Defined by craft\commerce\plugin\Services")                                   | [craft\commerce\services\Currencies](craft-commerce-services-currencies.md) – The currencies service
| [customers](craft-commerce-plugin-services.md#customers "Defined by craft\commerce\plugin\Services")                                     | [craft\commerce\services\Customers](craft-commerce-services-customers.md) – The customers service
| [defaultRoute](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$defaultRoute-detail "Defined by yii\base\Module")               | [string](http://php.net/language.types.string) – The default route of this module.
| [description](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#description "Defined by craft\base\PluginTrait")              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s description
| [developer](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#developer "Defined by craft\base\PluginTrait")                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s name
| [developerEmail](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#developeremail "Defined by craft\base\PluginTrait")        | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s support email
| [developerUrl](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#developerurl "Defined by craft\base\PluginTrait")            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s website URL
| [discounts](craft-commerce-plugin-services.md#discounts "Defined by craft\commerce\plugin\Services")                                     | [craft\commerce\services\Discounts](craft-commerce-services-discounts.md) – The discounts service
| [documentationUrl](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#documentationurl "Defined by craft\base\PluginTrait")    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s documentation URL
| [donation](craft-commerce-plugin-variables.md#donation "Defined by craft\commerce\plugin\Variables")                                     | [craft\commerce\elements\Donation](craft-commerce-elements-donation.md) – The donation purchasable
| [downloadUrl](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#downloadurl "Defined by craft\base\PluginTrait")              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s download URL
| [edition](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#edition "Defined by craft\base\PluginTrait")                      | [string](http://php.net/language.types.string) – The active edition.
| [emails](craft-commerce-plugin-services.md#emails "Defined by craft\commerce\plugin\Services")                                           | [craft\commerce\services\Emails](craft-commerce-services-emails.md) – The emails service
| [formulas](craft-commerce-plugin-services.md#formulas "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Formulas](craft-commerce-services-formulas.md) – The formulas service
| [gateways](craft-commerce-plugin-services.md#gateways "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Gateways](craft-commerce-services-gateways.md) – The gateways service
| [handle](https://docs.craftcms.com/api/v3/craft-base-plugin.html#handle "Defined by craft\base\Plugin")                                  | [string](http://php.net/language.types.string) – The plugin’s handle
| [hasCpSection](craft-commerce-plugin.md#hascpsection)                                                                                    | [boolean](http://php.net/language.types.boolean) – Whether the plugin has its own section in the control panel
| [hasCpSettings](craft-commerce-plugin.md#hascpsettings)                                                                                  | [boolean](http://php.net/language.types.boolean) – Whether the plugin has a settings page in the control panel
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail "Defined by yii\base\Module")                                   | [string](http://php.net/language.types.string) – An ID that uniquely identifies this module among other modules which have the same [parent](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail).
| [isInstalled](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#isinstalled "Defined by craft\base\PluginTrait")              | [boolean](http://php.net/language.types.boolean) – Whether the plugin is currently installed.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layout-detail "Defined by yii\base\Module")                           | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The layout that should be applied for views within this module.
| [layoutPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layoutPath-detail "Defined by yii\base\Module")                   | [string](http://php.net/language.types.string) – The root directory of layout files.
| [lineItemStatuses](craft-commerce-plugin-services.md#lineitemstatuses "Defined by craft\commerce\plugin\Services")                       | [craft\commerce\services\LineItemStatuses](craft-commerce-services-lineitemstatuses.md) – The lineItems service
| [lineItems](craft-commerce-plugin-services.md#lineitems "Defined by craft\commerce\plugin\Services")                                     | [craft\commerce\services\LineItems](craft-commerce-services-lineitems.md) – The lineItems service
| [migrator](https://docs.craftcms.com/api/v3/craft-base-plugin.html#migrator "Defined by craft\base\Plugin")                              | [craft\db\MigrationManager](https://docs.craftcms.com/api/v3/craft-db-migrationmanager.html) – The plugin’s migration manager
| [minVersionRequired](craft-commerce-plugin.md#minversionrequired)                                                                        | [string](http://php.net/language.types.string) – The minimum required version the plugin has to be so it can be updated.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail "Defined by yii\base\Module")                           | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The parent module of this module.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$modules-detail "Defined by yii\base\Module")                         | [array](http://php.net/language.types.array) – The modules (indexed by their IDs).
| [name](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#name "Defined by craft\base\PluginTrait")                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s display name
| [orderAdjustments](craft-commerce-plugin-services.md#orderadjustments "Defined by craft\commerce\plugin\Services")                       | [craft\commerce\services\OrderAdjustments](craft-commerce-services-orderadjustments.md) – The orderAdjustments service
| [orderHistories](craft-commerce-plugin-services.md#orderhistories "Defined by craft\commerce\plugin\Services")                           | [craft\commerce\services\OrderHistories](craft-commerce-services-orderhistories.md) – The orderHistories service
| [orderStatuses](craft-commerce-plugin-services.md#orderstatuses "Defined by craft\commerce\plugin\Services")                             | [craft\commerce\services\OrderStatuses](craft-commerce-services-orderstatuses.md) – The orderStatuses service
| [orders](craft-commerce-plugin-services.md#orders "Defined by craft\commerce\plugin\Services")                                           | [craft\commerce\services\Orders](craft-commerce-services-orders.md) – The orders service
| [packageName](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#packagename "Defined by craft\base\PluginTrait")              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s package name
| [params](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$params-detail "Defined by yii\base\Module")                           | [array](http://php.net/language.types.array) – Custom module parameters (name => value).
| [paymentCurrencies](craft-commerce-plugin-services.md#paymentcurrencies "Defined by craft\commerce\plugin\Services")                     | [craft\commerce\services\PaymentCurrencies](craft-commerce-services-paymentcurrencies.md) – The paymentCurrencies service
| [paymentSources](craft-commerce-plugin-services.md#paymentsources "Defined by craft\commerce\plugin\Services")                           | [craft\commerce\services\PaymentSources](craft-commerce-services-paymentsources.md) – The payment sources service
| [payments](craft-commerce-plugin-services.md#payments "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Payments](craft-commerce-services-payments.md) – The payments service
| [pdf](craft-commerce-plugin-services.md#pdf "Defined by craft\commerce\plugin\Services")                                                 | [craft\commerce\services\Pdf](craft-commerce-services-pdf.md) – The PDF service
| [plans](craft-commerce-plugin-services.md#plans "Defined by craft\commerce\plugin\Services")                                             | [craft\commerce\services\Plans](craft-commerce-services-plans.md) – The subscription plans service
| [productTypes](craft-commerce-plugin-services.md#producttypes "Defined by craft\commerce\plugin\Services")                               | [craft\commerce\services\ProductTypes](craft-commerce-services-producttypes.md) – The productTypes service
| [products](craft-commerce-plugin-services.md#products "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Products](craft-commerce-services-products.md) – The products service
| [purchasables](craft-commerce-plugin-services.md#purchasables "Defined by craft\commerce\plugin\Services")                               | [craft\commerce\services\Purchasables](craft-commerce-services-purchasables.md) – The purchasables service
| [sales](craft-commerce-plugin-services.md#sales "Defined by craft\commerce\plugin\Services")                                             | [craft\commerce\services\Sales](craft-commerce-services-sales.md) – The sales service
| [schemaVersion](craft-commerce-plugin.md#schemaversion)                                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s schema version number
| [settings](https://docs.craftcms.com/api/v3/craft-base-plugin.html#settings "Defined by craft\base\Plugin")                              | [craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html), [null](http://php.net/language.types.null) – The model that the plugin’s settings should be stored on, if the plugin has settings
| [settingsResponse](craft-commerce-plugin.md#settingsresponse)                                                                            | `mixed` – The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](https://docs.craftcms.com/api/v3/craft-controllers-pluginscontroller.html#method-actioneditpluginsettings)
| [shippingCategories](craft-commerce-plugin-services.md#shippingcategories "Defined by craft\commerce\plugin\Services")                   | [craft\commerce\services\ShippingCategories](craft-commerce-services-shippingcategories.md) – The shippingCategories service
| [shippingMethods](craft-commerce-plugin-services.md#shippingmethods "Defined by craft\commerce\plugin\Services")                         | [craft\commerce\services\ShippingMethods](craft-commerce-services-shippingmethods.md) – The shippingMethods service
| [shippingRuleCategories](craft-commerce-plugin-services.md#shippingrulecategories "Defined by craft\commerce\plugin\Services")           | [craft\commerce\services\ShippingRuleCategories](craft-commerce-services-shippingrulecategories.md) – The shippingRuleCategories service
| [shippingRules](craft-commerce-plugin-services.md#shippingrules "Defined by craft\commerce\plugin\Services")                             | [craft\commerce\services\ShippingRules](craft-commerce-services-shippingrules.md) – The shippingRules service
| [shippingZones](craft-commerce-plugin-services.md#shippingzones "Defined by craft\commerce\plugin\Services")                             | [craft\commerce\services\ShippingZones](craft-commerce-services-shippingzones.md) – The shippingZones service
| [sourceLanguage](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#sourcelanguage "Defined by craft\base\PluginTrait")        | [string](http://php.net/language.types.string) – The language that the plugin’s messages were written in
| [states](craft-commerce-plugin-services.md#states "Defined by craft\commerce\plugin\Services")                                           | [craft\commerce\services\States](craft-commerce-services-states.md) – The states service
| [subscriptions](craft-commerce-plugin-services.md#subscriptions "Defined by craft\commerce\plugin\Services")                             | [craft\commerce\services\Subscriptions](craft-commerce-services-subscriptions.md) – The subscriptions service
| [t9nCategory](https://docs.craftcms.com/api/v3/craft-base-plugintrait.html#t9ncategory "Defined by craft\base\PluginTrait")              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The translation category that this plugin’s translation messages should use.
| [taxCategories](craft-commerce-plugin-services.md#taxcategories "Defined by craft\commerce\plugin\Services")                             | [craft\commerce\services\TaxCategories](craft-commerce-services-taxcategories.md) – The taxCategories service
| [taxRates](craft-commerce-plugin-services.md#taxrates "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\TaxRates](craft-commerce-services-taxrates.md) – The taxRates service
| [taxZones](craft-commerce-plugin-services.md#taxzones "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\TaxZones](craft-commerce-services-taxzones.md) – The taxZones service
| [taxes](craft-commerce-plugin-services.md#taxes "Defined by craft\commerce\plugin\Services")                                             | [craft\commerce\services\Taxes](craft-commerce-services-taxes.md) – The taxes service
| [transactions](craft-commerce-plugin-services.md#transactions "Defined by craft\commerce\plugin\Services")                               | [craft\commerce\services\Transactions](craft-commerce-services-transactions.md) – The transactions service
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$uniqueId-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The unique ID of the module.
| [variants](craft-commerce-plugin-services.md#variants "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Variants](craft-commerce-services-variants.md) – The variants service
| [version](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$version-detail "Defined by yii\base\Module")                         | [string](http://php.net/language.types.string) – The version of this module.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$viewPath-detail "Defined by yii\base\Module")                       | [string](http://php.net/language.types.string) – The root directory of view files.
| [webhooks](craft-commerce-plugin-services.md#webhooks "Defined by craft\commerce\plugin\Services")                                       | [craft\commerce\services\Webhooks](craft-commerce-services-webhooks.md) – The variants service

### `cpNavItem`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php)



### `hasCpSection`



Type

:   [boolean](http://php.net/language.types.boolean)





Whether the plugin has its own section in the control panel





[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L134)



### `hasCpSettings`



Type

:   [boolean](http://php.net/language.types.boolean)





Whether the plugin has a settings page in the control panel





[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L129)



### `minVersionRequired`



Type

:   [string](http://php.net/language.types.string)





The minimum required version the plugin has to be so it can be updated.





[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L139)



### `schemaVersion`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)





The plugin’s schema version number





[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L124)



### `settingsResponse`



Type

:   `mixed`

Access

:   Read-only



The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](https://docs.craftcms.com/api/v3/craft-controllers-pluginscontroller.html#method-actioneditpluginsettings)



[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php)







## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                       | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-__construct "Defined by craft\base\Plugin")                    | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#__get()-detail "Defined by yii\di\ServiceLocator")                   | Getter magic method.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#__isset()-detail "Defined by yii\di\ServiceLocator")               | Checks if a property value is null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                         | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                     | Sets a component property to be null.
| [_registerElementExports()](craft-commerce-plugin.md#method-registerelementexports)                                                           | Register the element exportables
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#afterAction()-detail "Defined by yii\base\Module")                   | This method is invoked right after an action within this module is executed.
| [afterSaveSettings()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-aftersavesettings "Defined by craft\base\Plugin")        | Performs actions after the plugin’s settings are saved.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#beforeAction()-detail "Defined by yii\base\Module")                 | This method is invoked right before an action within this module is executed.
| [beforeInstall()](craft-commerce-plugin.md#method-beforeinstall)                                                                              | Performs actions before the plugin is installed.
| [beforeSaveSettings()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-beforesavesettings "Defined by craft\base\Plugin")      | Performs actions before the plugin’s settings are saved.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#clear()-detail "Defined by yii\di\ServiceLocator")                   | Removes the component from the locator.
| [createController()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createController()-detail "Defined by yii\base\Module")         | Creates a controller instance based on the given route.
| [createControllerByID()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createControllerByID()-detail "Defined by yii\base\Module") | Creates a controller based on the given controller ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [editions()](craft-commerce-plugin.md#method-editions)                                                                                        |
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#get()-detail "Defined by yii\di\ServiceLocator")                       | Returns the component instance with the specified ID.
| [getAddresses()](craft-commerce-plugin-services.md#method-getaddresses "Defined by craft\commerce\plugin\Services")                           | Returns the address service
| [getBasePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getBasePath()-detail "Defined by yii\base\Module")                   | Returns the root directory of the module.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getCarts()](craft-commerce-plugin-services.md#method-getcarts "Defined by craft\commerce\plugin\Services")                                   | Returns the cart service
| [getComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#getComponents()-detail "Defined by yii\di\ServiceLocator")   | Returns the list of the component definitions or the loaded component instances.
| [getControllerPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getControllerPath()-detail "Defined by yii\base\Module")       | Returns the directory that contains the controller classes according to [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail).
| [getCountries()](craft-commerce-plugin-services.md#method-getcountries "Defined by craft\commerce\plugin\Services")                           | Returns the countries service
| [getCpNavItem()](craft-commerce-plugin.md#method-getcpnavitem)                                                                                | Returns the control panel nav item definition for this plugin, if it has a section in the control panel.
| [getCurrencies()](craft-commerce-plugin-services.md#method-getcurrencies "Defined by craft\commerce\plugin\Services")                         | Returns the currencies service
| [getCustomers()](craft-commerce-plugin-services.md#method-getcustomers "Defined by craft\commerce\plugin\Services")                           | Returns the customers service
| [getDiscounts()](craft-commerce-plugin-services.md#method-getdiscounts "Defined by craft\commerce\plugin\Services")                           | Returns the discounts service
| [getDonation()](craft-commerce-plugin-variables.md#method-getdonation "Defined by craft\commerce\plugin\Variables")                           | Returns the donation purchasable
| [getEmails()](craft-commerce-plugin-services.md#method-getemails "Defined by craft\commerce\plugin\Services")                                 | Returns the emails service
| [getFormulas()](craft-commerce-plugin-services.md#method-getformulas "Defined by craft\commerce\plugin\Services")                             | Returns the formulas service
| [getGateways()](craft-commerce-plugin-services.md#method-getgateways "Defined by craft\commerce\plugin\Services")                             | Returns the gateways service
| [getHandle()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-gethandle "Defined by craft\base\Plugin")                        | Returns the plugin’s handle (really just an alias of [yii\base\Module::$id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail)).
| [getInstance()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getInstance()-detail "Defined by yii\base\Module")                   | Returns the currently requested instance of this module class.
| [getLayoutPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getLayoutPath()-detail "Defined by yii\base\Module")               | Returns the directory that contains layout view files for this module.
| [getLineItemStatuses()](craft-commerce-plugin-services.md#method-getlineitemstatuses "Defined by craft\commerce\plugin\Services")             | Returns the lineItems statuses service
| [getLineItems()](craft-commerce-plugin-services.md#method-getlineitems "Defined by craft\commerce\plugin\Services")                           | Returns the lineItems service
| [getMigrator()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-getmigrator "Defined by craft\base\Plugin")                    | Returns the plugin’s migration manager
| [getModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModule()-detail "Defined by yii\base\Module")                       | Retrieves the child module of the specified ID.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModules()-detail "Defined by yii\base\Module")                     | Returns the sub-modules in this module.
| [getOrderAdjustments()](craft-commerce-plugin-services.md#method-getorderadjustments "Defined by craft\commerce\plugin\Services")             | Returns the orderAdjustments service
| [getOrderHistories()](craft-commerce-plugin-services.md#method-getorderhistories "Defined by craft\commerce\plugin\Services")                 | Returns the orderHistories service
| [getOrderStatuses()](craft-commerce-plugin-services.md#method-getorderstatuses "Defined by craft\commerce\plugin\Services")                   | Returns the orderStatuses service
| [getOrders()](craft-commerce-plugin-services.md#method-getorders "Defined by craft\commerce\plugin\Services")                                 | Returns the orders service
| [getPaymentCurrencies()](craft-commerce-plugin-services.md#method-getpaymentcurrencies "Defined by craft\commerce\plugin\Services")           | Returns the paymentCurrencies service
| [getPaymentSources()](craft-commerce-plugin-services.md#method-getpaymentsources "Defined by craft\commerce\plugin\Services")                 | Returns the payment sources service
| [getPayments()](craft-commerce-plugin-services.md#method-getpayments "Defined by craft\commerce\plugin\Services")                             | Returns the payments service
| [getPdf()](craft-commerce-plugin-services.md#method-getpdf "Defined by craft\commerce\plugin\Services")                                       | Returns the PDF service
| [getPlans()](craft-commerce-plugin-services.md#method-getplans "Defined by craft\commerce\plugin\Services")                                   | Returns the payment sources service
| [getProductTypes()](craft-commerce-plugin-services.md#method-getproducttypes "Defined by craft\commerce\plugin\Services")                     | Returns the productTypes service
| [getProducts()](craft-commerce-plugin-services.md#method-getproducts "Defined by craft\commerce\plugin\Services")                             | Returns the products service
| [getPurchasables()](craft-commerce-plugin-services.md#method-getpurchasables "Defined by craft\commerce\plugin\Services")                     | Returns the purchasables service
| [getSales()](craft-commerce-plugin-services.md#method-getsales "Defined by craft\commerce\plugin\Services")                                   | Returns the sales service
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-getsettings "Defined by craft\base\Plugin")                    | Returns the model that the plugin’s settings should be stored on, if the plugin has settings.
| [getSettingsResponse()](craft-commerce-plugin.md#method-getsettingsresponse)                                                                  | Returns the settings page response.
| [getShippingCategories()](craft-commerce-plugin-services.md#method-getshippingcategories "Defined by craft\commerce\plugin\Services")         | Returns the shippingCategories service
| [getShippingMethods()](craft-commerce-plugin-services.md#method-getshippingmethods "Defined by craft\commerce\plugin\Services")               | Returns the shippingMethods service
| [getShippingRuleCategories()](craft-commerce-plugin-services.md#method-getshippingrulecategories "Defined by craft\commerce\plugin\Services") | Returns the shippingRules service
| [getShippingRules()](craft-commerce-plugin-services.md#method-getshippingrules "Defined by craft\commerce\plugin\Services")                   | Returns the shippingRules service
| [getShippingZones()](craft-commerce-plugin-services.md#method-getshippingzones "Defined by craft\commerce\plugin\Services")                   | Returns the shippingZones service
| [getStates()](craft-commerce-plugin-services.md#method-getstates "Defined by craft\commerce\plugin\Services")                                 | Returns the states service
| [getSubscriptions()](craft-commerce-plugin-services.md#method-getsubscriptions "Defined by craft\commerce\plugin\Services")                   | Returns the subscriptions service
| [getTaxCategories()](craft-commerce-plugin-services.md#method-gettaxcategories "Defined by craft\commerce\plugin\Services")                   | Returns the taxCategories service
| [getTaxRates()](craft-commerce-plugin-services.md#method-gettaxrates "Defined by craft\commerce\plugin\Services")                             | Returns the taxRates service
| [getTaxZones()](craft-commerce-plugin-services.md#method-gettaxzones "Defined by craft\commerce\plugin\Services")                             | Returns the taxZones service
| [getTaxes()](craft-commerce-plugin-services.md#method-gettaxes "Defined by craft\commerce\plugin\Services")                                   | Returns the taxes service
| [getTransactions()](craft-commerce-plugin-services.md#method-gettransactions "Defined by craft\commerce\plugin\Services")                     | Returns the transactions service
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getUniqueId()-detail "Defined by yii\base\Module")                   | Returns an ID that uniquely identifies this module among all modules within the current application.
| [getVariants()](craft-commerce-plugin-services.md#method-getvariants "Defined by craft\commerce\plugin\Services")                             | Returns the variants service
| [getVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getVersion()-detail "Defined by yii\base\Module")                     | Returns current module version.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getViewPath()-detail "Defined by yii\base\Module")                   | Returns the directory that contains the view files for this module.
| [getWebhooks()](craft-commerce-plugin-services.md#method-getwebhooks "Defined by craft\commerce\plugin\Services")                             | Returns the webhooks service
| [has()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#has()-detail "Defined by yii\di\ServiceLocator")                       | Returns a value indicating whether the locator has the specified component definition or has instantiated the component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                 | Returns a value indicating whether a method is defined.
| [hasModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#hasModule()-detail "Defined by yii\base\Module")                       | Checks whether the child module of the specified ID exists.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")             | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-plugin.md#method-init)                                                                                                | Initializes the module.
| [install()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-install "Defined by craft\base\Plugin")                            | Installs the plugin.
| [is()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-is "Defined by craft\base\Plugin")                                      | Compares the active edition with the given edition.
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
| [setSettings()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-setsettings "Defined by craft\base\Plugin")                    | Sets the plugin settings
| [setVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setVersion()-detail "Defined by yii\base\Module")                     | Sets current module version.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setViewPath()-detail "Defined by yii\base\Module")                   | Sets the directory that contains the view files.
| [t()](craft-commerce-plugin.md#method-t)                                                                                                      |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.
| [uninstall()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-uninstall "Defined by craft\base\Plugin")                        | Uninstalls the plugin.

### `_registerElementExports()`



Since

:   2.2



Register the element exportables




[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L649-L655)






### `beforeInstall()`





Performs actions before the plugin is installed.








[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L180-L194)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plugin should be installed



### `editions()`










[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L98-L104)






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




[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L207-L280)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getSettingsResponse()`





Returns the settings page response.








[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L199-L202)



#### Returns

`mixed` – The result that should be returned from [craft\controllers\PluginsController::actionEditPluginSettings()](https://docs.craftcms.com/api/v3/craft-controllers-pluginscontroller.html#method-actioneditpluginsettings)



### `init()`





Initializes the module.



This method is called after the module is created and initialized with property values
given in configuration. The default implementation will initialize [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail)
if it is not set.

If you override this method, please make sure you call the parent implementation.




[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L148-L175)






### `t()`



Since

:   2.2.0







See also `Craft::t()`
[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L115-L118)


#### Arguments

- `$message`
- `$params` ([array](http://php.net/language.types.array))
- `$language` ([null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)





## Protected Methods

| Method                                                                                                                                           | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------
| [afterInstall()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-afterinstall "Defined by craft\base\Plugin")                     | Performs actions after the plugin is installed.
| [afterUninstall()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-afteruninstall "Defined by craft\base\Plugin")                 | Performs actions after the plugin is uninstalled.
| [beforeUninstall()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-beforeuninstall "Defined by craft\base\Plugin")               | Performs actions before the plugin is uninstalled.
| [cpNavIconPath()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-cpnaviconpath "Defined by craft\base\Plugin")                   | Returns the path to the SVG icon that should be used in the plugin’s nav item in the control panel.
| [createInstallMigration()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-createinstallmigration "Defined by craft\base\Plugin") | Instantiates and returns the plugin’s installation migration, if it has one.
| [createSettingsModel()](craft-commerce-plugin.md#method-createsettingsmodel)                                                                     | Creates and returns the model used to store the plugin’s settings.
| [defaultVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#defaultVersion()-detail "Defined by yii\base\Module")                | Returns default module version.
| [settingsHtml()](https://docs.craftcms.com/api/v3/craft-base-plugin.html#method-settingshtml "Defined by craft\base\Plugin")                     | Returns the rendered settings HTML, which will be inserted into the content block on the settings page.

### `createSettingsModel()`





Creates and returns the model used to store the plugin’s settings.








[View source](https://github.com/craftcms/commerce/blob/master/src/Plugin.php#L286-L289)



#### Returns

[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html), [null](http://php.net/language.types.null)





## Constants

| Constant       | Description
| -------------- | -----------
| `EDITION_LITE` |
| `EDITION_PRO`  |



