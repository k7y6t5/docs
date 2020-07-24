---
title: craft\web\AssetBundle
code:
  - php
  - twig
---

# AssetBundle

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\AssetBundle](craft-web-assetbundle.md) &raquo;
[yii\web\AssetBundle](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Extended by

:   [craft\web\assets\admintable\AdminTableAsset](craft-web-assets-admintable-admintableasset.md), [craft\web\assets\assetindexes\AssetIndexesAsset](craft-web-assets-assetindexes-assetindexesasset.md), [craft\web\assets\axios\AxiosAsset](craft-web-assets-axios-axiosasset.md), [craft\web\assets\clearcaches\ClearCachesAsset](craft-web-assets-clearcaches-clearcachesasset.md), [craft\web\assets\cp\CpAsset](craft-web-assets-cp-cpasset.md), [craft\web\assets\craftsupport\CraftSupportAsset](craft-web-assets-craftsupport-craftsupportasset.md), [craft\web\assets\d3\D3Asset](craft-web-assets-d3-d3asset.md), [craft\web\assets\dashboard\DashboardAsset](craft-web-assets-dashboard-dashboardasset.md), [craft\web\assets\datepickeri18n\DatepickerI18nAsset](craft-web-assets-datepickeri18n-datepickeri18nasset.md), [craft\web\assets\dbbackup\DbBackupAsset](craft-web-assets-dbbackup-dbbackupasset.md), [craft\web\assets\deprecationerrors\DeprecationErrorsAsset](craft-web-assets-deprecationerrors-deprecationerrorsasset.md), [craft\web\assets\editentry\EditEntryAsset](craft-web-assets-editentry-editentryasset.md), [craft\web\assets\editsection\EditSectionAsset](craft-web-assets-editsection-editsectionasset.md), [craft\web\assets\edittransform\EditTransformAsset](craft-web-assets-edittransform-edittransformasset.md), [craft\web\assets\edituser\EditUserAsset](craft-web-assets-edituser-edituserasset.md), [craft\web\assets\elementresizedetector\ElementResizeDetectorAsset](craft-web-assets-elementresizedetector-elementresizedetectorasset.md), [craft\web\assets\fabric\FabricAsset](craft-web-assets-fabric-fabricasset.md), [craft\web\assets\feed\FeedAsset](craft-web-assets-feed-feedasset.md), [craft\web\assets\fields\FieldsAsset](craft-web-assets-fields-fieldsasset.md), [craft\web\assets\fieldsettings\FieldSettingsAsset](craft-web-assets-fieldsettings-fieldsettingsasset.md), [craft\web\assets\fileupload\FileUploadAsset](craft-web-assets-fileupload-fileuploadasset.md), [craft\web\assets\findreplace\FindReplaceAsset](craft-web-assets-findreplace-findreplaceasset.md), [craft\web\assets\garnish\GarnishAsset](craft-web-assets-garnish-garnishasset.md), [craft\web\assets\generalsettings\GeneralSettingsAsset](craft-web-assets-generalsettings-generalsettingsasset.md), [craft\web\assets\graphiql\GraphiqlAsset](craft-web-assets-graphiql-graphiqlasset.md), [craft\web\assets\graphiql\VendorAsset](craft-web-assets-graphiql-vendorasset.md), [craft\web\assets\installer\InstallerAsset](craft-web-assets-installer-installerasset.md), [craft\web\assets\jquerypayment\JqueryPaymentAsset](craft-web-assets-jquerypayment-jquerypaymentasset.md), [craft\web\assets\jquerytouchevents\JqueryTouchEventsAsset](craft-web-assets-jquerytouchevents-jquerytoucheventsasset.md), [craft\web\assets\jqueryui\JqueryUiAsset](craft-web-assets-jqueryui-jqueryuiasset.md), [craft\web\assets\login\LoginAsset](craft-web-assets-login-loginasset.md), [craft\web\assets\matrix\MatrixAsset](craft-web-assets-matrix-matrixasset.md), [craft\web\assets\matrixsettings\MatrixSettingsAsset](craft-web-assets-matrixsettings-matrixsettingsasset.md), [craft\web\assets\newusers\NewUsersAsset](craft-web-assets-newusers-newusersasset.md), [craft\web\assets\picturefill\PicturefillAsset](craft-web-assets-picturefill-picturefillasset.md), [craft\web\assets\plugins\PluginsAsset](craft-web-assets-plugins-pluginsasset.md), [craft\web\assets\pluginstore\PluginStoreAsset](craft-web-assets-pluginstore-pluginstoreasset.md), [craft\web\assets\pluginstoreoauth\PluginStoreOauthAsset](craft-web-assets-pluginstoreoauth-pluginstoreoauthasset.md), [craft\web\assets\positionselect\PositionSelectAsset](craft-web-assets-positionselect-positionselectasset.md), [craft\web\assets\prismjs\PrismJsAsset](craft-web-assets-prismjs-prismjsasset.md), [craft\web\assets\queuemanager\QueueManagerAsset](craft-web-assets-queuemanager-queuemanagerasset.md), [craft\web\assets\quickpost\QuickPostAsset](craft-web-assets-quickpost-quickpostasset.md), [craft\web\assets\qunit\QunitAsset](craft-web-assets-qunit-qunitasset.md), [craft\web\assets\recententries\RecentEntriesAsset](craft-web-assets-recententries-recententriesasset.md), [craft\web\assets\routes\RoutesAsset](craft-web-assets-routes-routesasset.md), [craft\web\assets\selectize\SelectizeAsset](craft-web-assets-selectize-selectizeasset.md), [craft\web\assets\sites\SitesAsset](craft-web-assets-sites-sitesasset.md), [craft\web\assets\systemmessages\SystemMessagesAsset](craft-web-assets-systemmessages-systemmessagesasset.md), [craft\web\assets\tablesettings\TableSettingsAsset](craft-web-assets-tablesettings-tablesettingsasset.md), [craft\web\assets\tests\TestsAsset](craft-web-assets-tests-testsasset.md), [craft\web\assets\timepicker\TimepickerAsset](craft-web-assets-timepicker-timepickerasset.md), [craft\web\assets\updater\UpdaterAsset](craft-web-assets-updater-updaterasset.md), [craft\web\assets\updates\UpdatesAsset](craft-web-assets-updates-updatesasset.md), [craft\web\assets\updateswidget\UpdatesWidgetAsset](craft-web-assets-updateswidget-updateswidgetasset.md), [craft\web\assets\userpermissions\UserPermissionsAsset](craft-web-assets-userpermissions-userpermissionsasset.md), [craft\web\assets\utilities\UtilitiesAsset](craft-web-assets-utilities-utilitiesasset.md), [craft\web\assets\velocity\VelocityAsset](craft-web-assets-velocity-velocityasset.md), [craft\web\assets\vue\VueAsset](craft-web-assets-vue-vueasset.md), [craft\web\assets\xregexp\XregexpAsset](craft-web-assets-xregexp-xregexpasset.md)









[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetBundle.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$basePath-detail "Defined by yii\web\AssetBundle")             | [string](http://php.net/language.types.string) – The Web-accessible directory that contains the asset files in this bundle.
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$baseUrl-detail "Defined by yii\web\AssetBundle")               | [string](http://php.net/language.types.string) – The base URL for the relative asset files listed in [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail) and [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail).
| [css](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$css-detail "Defined by yii\web\AssetBundle")                       | [array](http://php.net/language.types.array) – List of CSS files that this bundle contains.
| [cssOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$cssOptions-detail "Defined by yii\web\AssetBundle")         | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail) when registering the CSS files in this bundle.
| [depends](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$depends-detail "Defined by yii\web\AssetBundle")               | [array](http://php.net/language.types.array) – List of bundle class names that this bundle depends on.
| [js](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$js-detail "Defined by yii\web\AssetBundle")                         | [array](http://php.net/language.types.array) – List of JavaScript files that this bundle contains.
| [jsOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$jsOptions-detail "Defined by yii\web\AssetBundle")           | [array](http://php.net/language.types.array) – The options that will be passed to [yii\web\View::registerJsFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerJsFile()-detail) when registering the JS files in this bundle.
| [publishOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$publishOptions-detail "Defined by yii\web\AssetBundle") | [array](http://php.net/language.types.array) – The options to be passed to [yii\web\AssetManager::publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager#publish()-detail) when the asset bundle is being published.
| [sourcePath](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#$sourcePath-detail "Defined by yii\web\AssetBundle")         | [string](http://php.net/language.types.string) – The directory that contains the source asset files for this asset bundle.





## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                         | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")               | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                           | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                       | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                   | Returns the fully qualified name of this class.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                             | Initializes the object.
| [publish()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#publish()-detail "Defined by yii\web\AssetBundle")                       | Publishes the asset bundle if its source code is not under Web-accessible directory.
| [register()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#register()-detail "Defined by yii\web\AssetBundle")                     | Registers this asset bundle with a view.
| [registerAssetFiles()](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle#registerAssetFiles()-detail "Defined by yii\web\AssetBundle") | Registers the CSS and JS files with the given view.



## Protected Methods

| Method                                                               | Description
| -------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------
| [dotJs()](craft-web-assetbundle.md#method-dotjs)                     | Returns '.min.js' if Craft is configured to serve compressed JavaScript files, otherwise '.js'.
| [useCompressedJs()](craft-web-assetbundle.md#method-usecompressedjs) | Returns whether Craft is configured to serve compressed JavaScript files

### `dotJs()`





Returns '.min.js' if Craft is configured to serve compressed JavaScript files, otherwise '.js'.




[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetBundle.php#L41-L44)



#### Returns

[string](http://php.net/language.types.string)



### `useCompressedJs()`





Returns whether Craft is configured to serve compressed JavaScript files




[View source](https://github.com/craftcms/cms/blob/master/src/web/AssetBundle.php#L27-L34)



#### Returns

[boolean](http://php.net/language.types.boolean)








