---
title: craft\console\Application
code:
  - php
  - twig
---

# Application

Type

:   Class

Namespace

:   craft\console

Inherits

:   [craft\console\Application](craft-console-application.md) &raquo;
[yii\console\Application](https://www.yiiframework.com/doc/api/2.0/yii-console-application) &raquo;
[yii\base\Application](https://www.yiiframework.com/doc/api/2.0/yii-base-application) &raquo;
[yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) &raquo;
[yii\di\ServiceLocator](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\ApplicationTrait](craft-base-applicationtrait.md)

Since

:   3.0.0



Craft Console Application class

An instance of the Console Application class is globally accessible to console requests in Craft via [`Craft::$app`](craft.md#app).



[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php)


## Public Properties

| Property                                                                                                                                               | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [aliases](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$aliases-detail "Defined by yii\base\Module")                                       | [array](http://php.net/language.types.array) – List of path aliases to be defined.
| [api](craft-base-applicationtrait.md#api "Defined by craft\base\ApplicationTrait")                                                                     | [craft\services\Api](craft-services-api.md) – The API service
| [assetIndexer](craft-base-applicationtrait.md#assetindexer "Defined by craft\base\ApplicationTrait")                                                   | [craft\services\AssetIndexer](craft-services-assetindexer.md) – The asset indexing service
| [assetManager](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$assetManager-detail "Defined by yii\base\Application")                   | [yii\web\AssetManager](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager) – The asset manager application component.
| [assetTransforms](craft-base-applicationtrait.md#assettransforms "Defined by craft\base\ApplicationTrait")                                             | [craft\services\AssetTransforms](craft-services-assettransforms.md) – The asset transforms service
| [assets](craft-base-applicationtrait.md#assets "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Assets](craft-services-assets.md) – The assets service
| [authManager](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$authManager-detail "Defined by yii\base\Application")                     | [yii\rbac\ManagerInterface](https://www.yiiframework.com/doc/api/2.0/yii-rbac-managerinterface) – The auth manager application component.
| [basePath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$basePath-detail "Defined by yii\base\Module")                                     | [string](http://php.net/language.types.string) – The root directory of the module.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [bootstrap](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$bootstrap-detail "Defined by yii\base\Application")                         | [array](http://php.net/language.types.array) – List of components that should be run during the application [bootstrapping process](https://www.yiiframework.com/doc/api/2.0/yii-base-application#bootstrap()-detail).
| [cache](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$cache-detail "Defined by yii\base\Application")                                 | [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface) – The cache application component.
| [canTestEditions](craft-base-applicationtrait.md#cantesteditions "Defined by craft\base\ApplicationTrait")                                             | [boolean](http://php.net/language.types.boolean)
| [canUpgradeEdition](craft-base-applicationtrait.md#canupgradeedition "Defined by craft\base\ApplicationTrait")                                         | [boolean](http://php.net/language.types.boolean)
| [categories](craft-base-applicationtrait.md#categories "Defined by craft\base\ApplicationTrait")                                                       | [craft\services\Categories](craft-services-categories.md) – The categories service
| [charset](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$charset-detail "Defined by yii\base\Application")                             | [string](http://php.net/language.types.string) – The charset currently used for the application.
| [components](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#$components-detail "Defined by yii\di\ServiceLocator")                     | [array](http://php.net/language.types.array) – The list of the component definitions or the loaded component instances (ID => definition or instance).
| [composer](craft-base-applicationtrait.md#composer "Defined by craft\base\ApplicationTrait")                                                           | [craft\services\Composer](craft-services-composer.md) – The Composer service
| [config](craft-base-applicationtrait.md#config "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Config](craft-services-config.md) – The config service
| [container](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$container-detail "Defined by yii\base\Application")                         | [array](http://php.net/language.types.array) – Values given in terms of name-value pairs
| [content](craft-base-applicationtrait.md#content "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Content](craft-services-content.md) – The content service
| [contentMigrator](craft-base-applicationtrait.md#contentmigrator "Defined by craft\base\ApplicationTrait")                                             | [craft\db\MigrationManager](craft-db-migrationmanager.md) – The content migration manager
| [controller](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$controller-detail "Defined by yii\base\Application")                       | [yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) – The currently active controller instance
| [controllerMap](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerMap-detail "Defined by yii\base\Module")                           | [array](http://php.net/language.types.array) – Mapping from controller ID to controller configurations.
| [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail "Defined by yii\base\Module")               | [string](http://php.net/language.types.string) – The namespace that controller classes are in.
| [controllerPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerPath-detail "Defined by yii\base\Module")                         | [string](http://php.net/language.types.string) – The directory that contains the controller classes.
| [dashboard](craft-base-applicationtrait.md#dashboard "Defined by craft\base\ApplicationTrait")                                                         | [craft\services\Dashboard](craft-services-dashboard.md) – The dashboard service
| [db](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$db-detail "Defined by yii\base\Application")                                       | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection) – The database connection.
| [defaultRoute](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$defaultRoute-detail "Defined by yii\base\Module")                             | [string](http://php.net/language.types.string) – The default route of this module.
| [deprecator](craft-base-applicationtrait.md#deprecator "Defined by craft\base\ApplicationTrait")                                                       | [craft\services\Deprecator](craft-services-deprecator.md) – The deprecator service
| [drafts](craft-base-applicationtrait.md#drafts "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Drafts](craft-services-drafts.md) – The drafts service
| [edition](craft-base-applicationtrait.md#edition "Defined by craft\base\ApplicationTrait")                                                             | [integer](http://php.net/language.types.integer)
| [editionName](craft-base-applicationtrait.md#editionname "Defined by craft\base\ApplicationTrait")                                                     | [string](http://php.net/language.types.string)
| [elementIndexes](craft-base-applicationtrait.md#elementindexes "Defined by craft\base\ApplicationTrait")                                               | [craft\services\ElementIndexes](craft-services-elementindexes.md) – The element indexes service
| [elements](craft-base-applicationtrait.md#elements "Defined by craft\base\ApplicationTrait")                                                           | [craft\services\Elements](craft-services-elements.md) – The elements service
| [enableCoreCommands](https://www.yiiframework.com/doc/api/2.0/yii-console-application#$enableCoreCommands-detail "Defined by yii\console\Application") | [boolean](http://php.net/language.types.boolean) – Whether to enable the commands provided by the core framework.
| [entries](craft-base-applicationtrait.md#entries "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Entries](craft-services-entries.md) – The entries service
| [entryRevisions](craft-base-applicationtrait.md#entryrevisions "Defined by craft\base\ApplicationTrait")                                               | [craft\services\EntryRevisions](craft-services-entryrevisions.md) – The entry revisions service
| [env](craft-base-applicationtrait.md#env "Defined by craft\base\ApplicationTrait")                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The environment ID Craft is currently running in.
| [errorHandler](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$errorHandler-detail "Defined by yii\base\Application")                   | [yii\web\ErrorHandler](https://www.yiiframework.com/doc/api/2.0/yii-web-errorhandler), [yii\console\ErrorHandler](https://www.yiiframework.com/doc/api/2.0/yii-console-errorhandler) – The error handler application component.
| [extensions](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$extensions-detail "Defined by yii\base\Application")                       | [array](http://php.net/language.types.array) – List of installed Yii extensions.
| [feeds](craft-base-applicationtrait.md#feeds "Defined by craft\base\ApplicationTrait")                                                                 | [craft\feeds\Feeds](craft-feeds-feeds.md) – The feeds service
| [fields](craft-base-applicationtrait.md#fields "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Fields](craft-services-fields.md) – The fields service
| [formatter](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$formatter-detail "Defined by yii\base\Application")                         | [yii\i18n\Formatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter) – The formatter application component.
| [gc](craft-base-applicationtrait.md#gc "Defined by craft\base\ApplicationTrait")                                                                       | [craft\services\Gc](craft-services-gc.md) – The garbage collection service
| [globals](craft-base-applicationtrait.md#globals "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Globals](craft-services-globals.md) – The globals service
| [gql](craft-base-applicationtrait.md#gql "Defined by craft\base\ApplicationTrait")                                                                     | [craft\services\Gql](craft-services-gql.md) – The GraphQL service
| [hasWrongEdition](craft-base-applicationtrait.md#haswrongedition "Defined by craft\base\ApplicationTrait")                                             | [boolean](http://php.net/language.types.boolean)
| [i18n](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$i18n-detail "Defined by yii\base\Application")                                   | [yii\i18n\I18N](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n) – The internationalization application component.
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail "Defined by yii\base\Module")                                                 | [string](http://php.net/language.types.string) – An ID that uniquely identifies this module among other modules which have the same [parent](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail).
| [images](craft-base-applicationtrait.md#images "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Images](craft-services-images.md) – The images service
| [info](craft-base-applicationtrait.md#info "Defined by craft\base\ApplicationTrait")                                                                   | [craft\models\Info](craft-models-info.md)
| [installedSchemaVersion](craft-base-applicationtrait.md#installedschemaversion "Defined by craft\base\ApplicationTrait")                               | [string](http://php.net/language.types.string)
| [isDbConnectionValid](craft-base-applicationtrait.md#isdbconnectionvalid "Defined by craft\base\ApplicationTrait")                                     | [boolean](http://php.net/language.types.boolean)
| [isInMaintenanceMode](craft-base-applicationtrait.md#isinmaintenancemode "Defined by craft\base\ApplicationTrait")                                     | [boolean](http://php.net/language.types.boolean)
| [isInitialized](craft-base-applicationtrait.md#isinitialized "Defined by craft\base\ApplicationTrait")                                                 | [boolean](http://php.net/language.types.boolean)
| [isInstalled](craft-base-applicationtrait.md#isinstalled "Defined by craft\base\ApplicationTrait")                                                     | [boolean](http://php.net/language.types.boolean)
| [isLive](craft-base-applicationtrait.md#islive "Defined by craft\base\ApplicationTrait")                                                               | [boolean](http://php.net/language.types.boolean)
| [isMultiSite](craft-base-applicationtrait.md#ismultisite "Defined by craft\base\ApplicationTrait")                                                     | [boolean](http://php.net/language.types.boolean)
| [isSystemOn](craft-base-applicationtrait.md#issystemon "Defined by craft\base\ApplicationTrait")                                                       | [boolean](http://php.net/language.types.boolean)
| [language](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$language-detail "Defined by yii\base\Application")                           | [string](http://php.net/language.types.string) – The language that is meant to be used for end users.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layout-detail "Defined by yii\base\Module")                                         | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The layout that should be applied for views within this module.
| [layoutPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$layoutPath-detail "Defined by yii\base\Module")                                 | [string](http://php.net/language.types.string) – The root directory of layout files.
| [licensedEdition](craft-base-applicationtrait.md#licensededition "Defined by craft\base\ApplicationTrait")                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [licensedEditionName](craft-base-applicationtrait.md#licensededitionname "Defined by craft\base\ApplicationTrait")                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [loadedModules](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$loadedModules-detail "Defined by yii\base\Application")                 | [array](http://php.net/language.types.array) – List of loaded modules indexed by their class names.
| [locale](craft-base-applicationtrait.md#locale "Defined by craft\base\ApplicationTrait")                                                               | [craft\i18n\Locale](craft-i18n-locale.md) – The Locale object for the target language
| [log](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$log-detail "Defined by yii\base\Application")                                     | [yii\log\Dispatcher](https://www.yiiframework.com/doc/api/2.0/yii-log-dispatcher) – The log dispatcher application component.
| [mailer](craft-base-applicationtrait.md#mailer "Defined by craft\base\ApplicationTrait")                                                               | [craft\mail\Mailer](craft-mail-mailer.md) – The mailer component
| [matrix](craft-base-applicationtrait.md#matrix "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Matrix](craft-services-matrix.md) – The matrix service
| [migrator](craft-base-applicationtrait.md#migrator "Defined by craft\base\ApplicationTrait")                                                           | [craft\db\MigrationManager](craft-db-migrationmanager.md) – The application’s migration manager
| [minVersionRequired](craft-base-applicationtrait.md#minversionrequired "Defined by craft\base\ApplicationTrait")                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The minimum Craft build number required to update to this build.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$module-detail "Defined by yii\base\Module")                                         | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The parent module of this module.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$modules-detail "Defined by yii\base\Module")                                       | [array](http://php.net/language.types.array) – The modules (indexed by their IDs).
| [mutex](craft-base-applicationtrait.md#mutex "Defined by craft\base\ApplicationTrait")                                                                 | [yii\mutex\Mutex](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex) – The application’s mutex service
| [name](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$name-detail "Defined by yii\base\Application")                                   | [string](http://php.net/language.types.string) – The application name.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$params-detail "Defined by yii\base\Module")                                         | [array](http://php.net/language.types.array) – Custom module parameters (name => value).
| [path](craft-base-applicationtrait.md#path "Defined by craft\base\ApplicationTrait")                                                                   | [craft\services\Path](craft-services-path.md) – The path service
| [pluginStore](craft-base-applicationtrait.md#pluginstore "Defined by craft\base\ApplicationTrait")                                                     | [craft\services\PluginStore](craft-services-pluginstore.md) – The plugin store service
| [plugins](craft-base-applicationtrait.md#plugins "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Plugins](craft-services-plugins.md) – The plugins service
| [projectConfig](craft-base-applicationtrait.md#projectconfig "Defined by craft\base\ApplicationTrait")                                                 | [craft\services\ProjectConfig](craft-services-projectconfig.md) – The system config service
| [queue](craft-base-applicationtrait.md#queue "Defined by craft\base\ApplicationTrait")                                                                 | [craft\queue\Queue](craft-queue-queue.md), [craft\queue\QueueInterface](craft-queue-queueinterface.md) – The queue service
| [relations](craft-base-applicationtrait.md#relations "Defined by craft\base\ApplicationTrait")                                                         | [craft\services\Relations](craft-services-relations.md) – The relations service
| [request](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$request-detail "Defined by yii\base\Application")                             | [yii\web\Request](https://www.yiiframework.com/doc/api/2.0/yii-web-request), [yii\console\Request](https://www.yiiframework.com/doc/api/2.0/yii-console-request) – The request component.
| [requestedAction](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$requestedAction-detail "Defined by yii\base\Application")             | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The requested Action.
| [requestedParams](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$requestedParams-detail "Defined by yii\base\Application")             | [array](http://php.net/language.types.array) – The parameters supplied to the requested action.
| [requestedRoute](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$requestedRoute-detail "Defined by yii\base\Application")               | [string](http://php.net/language.types.string) – The requested route
| [response](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$response-detail "Defined by yii\base\Application")                           | [yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response), [yii\console\Response](https://www.yiiframework.com/doc/api/2.0/yii-console-response) – The response component.
| [revisions](craft-base-applicationtrait.md#revisions "Defined by craft\base\ApplicationTrait")                                                         | [craft\services\Revisions](craft-services-revisions.md) – The revisions service
| [routes](craft-base-applicationtrait.md#routes "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Routes](craft-services-routes.md) – The routes service
| [runtimePath](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$runtimePath-detail "Defined by yii\base\Application")                     | [string](http://php.net/language.types.string) – The directory that stores runtime files.
| [schemaVersion](craft-base-applicationtrait.md#schemaversion "Defined by craft\base\ApplicationTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Craft’s schema version number.
| [search](craft-base-applicationtrait.md#search "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Search](craft-services-search.md) – The search service
| [sections](craft-base-applicationtrait.md#sections "Defined by craft\base\ApplicationTrait")                                                           | [craft\services\Sections](craft-services-sections.md) – The sections service
| [security](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$security-detail "Defined by yii\base\Application")                           | [yii\base\Security](https://www.yiiframework.com/doc/api/2.0/yii-base-security) – The security application component.
| [session](craft-console-application.md#session)                                                                                                        |
| [sites](craft-base-applicationtrait.md#sites "Defined by craft\base\ApplicationTrait")                                                                 | [craft\services\Sites](craft-services-sites.md) – The sites service
| [sourceLanguage](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$sourceLanguage-detail "Defined by yii\base\Application")               | [string](http://php.net/language.types.string) – The language that the application is written in.
| [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail "Defined by yii\base\Application")                                 | [integer](http://php.net/language.types.integer) – The current application state during a request handling life cycle.
| [structures](craft-base-applicationtrait.md#structures "Defined by craft\base\ApplicationTrait")                                                       | [craft\services\Structures](craft-services-structures.md) – The structures service
| [systemMessages](craft-base-applicationtrait.md#systemmessages "Defined by craft\base\ApplicationTrait")                                               | [craft\services\SystemMessages](craft-services-systemmessages.md) – The system email messages service
| [systemName](craft-base-applicationtrait.md#systemname "Defined by craft\base\ApplicationTrait")                                                       | [string](http://php.net/language.types.string)
| [systemSettings](craft-base-applicationtrait.md#systemsettings "Defined by craft\base\ApplicationTrait")                                               | [craft\services\SystemSettings](craft-services-systemsettings.md) – The system settings service
| [systemUid](craft-base-applicationtrait.md#systemuid "Defined by craft\base\ApplicationTrait")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [tags](craft-base-applicationtrait.md#tags "Defined by craft\base\ApplicationTrait")                                                                   | [craft\services\Tags](craft-services-tags.md) – The tags service
| [targetLanguage](craft-base-applicationtrait.md#targetlanguage "Defined by craft\base\ApplicationTrait")                                               | [string](http://php.net/language.types.string)
| [templateCaches](craft-base-applicationtrait.md#templatecaches "Defined by craft\base\ApplicationTrait")                                               | [craft\services\TemplateCaches](craft-services-templatecaches.md) – The template caches service
| [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$timeZone-detail "Defined by yii\base\Application")                           | [string](http://php.net/language.types.string) – The time zone used by this application.
| [tokens](craft-base-applicationtrait.md#tokens "Defined by craft\base\ApplicationTrait")                                                               | [craft\services\Tokens](craft-services-tokens.md) – The tokens service
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$uniqueId-detail "Defined by yii\base\Module")                                     | [string](http://php.net/language.types.string) – The unique ID of the module.
| [updates](craft-base-applicationtrait.md#updates "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Updates](craft-services-updates.md) – The updates service
| [urlManager](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$urlManager-detail "Defined by yii\base\Application")                       | [yii\web\UrlManager](https://www.yiiframework.com/doc/api/2.0/yii-web-urlmanager) – The URL manager for this application.
| [user](craft-console-application.md#user)                                                                                                              | [craft\console\User](craft-console-user.md)
| [userGroups](craft-base-applicationtrait.md#usergroups "Defined by craft\base\ApplicationTrait")                                                       | [craft\services\UserGroups](craft-services-usergroups.md) – The user groups service
| [userPermissions](craft-base-applicationtrait.md#userpermissions "Defined by craft\base\ApplicationTrait")                                             | [craft\services\UserPermissions](craft-services-userpermissions.md) – The user permissions service
| [users](craft-base-applicationtrait.md#users "Defined by craft\base\ApplicationTrait")                                                                 | [craft\services\Users](craft-services-users.md) – The users service
| [utilities](craft-base-applicationtrait.md#utilities "Defined by craft\base\ApplicationTrait")                                                         | [craft\services\Utilities](craft-services-utilities.md) – The utilities service
| [vendorPath](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$vendorPath-detail "Defined by yii\base\Application")                       | [string](http://php.net/language.types.string) – The directory that stores vendor files.
| [version](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$version-detail "Defined by yii\base\Module")                                       | [string](http://php.net/language.types.string) – The version of this module.
| [view](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$view-detail "Defined by yii\base\Application")                                   | [yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view), [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – The view application component that is used to render various view files.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$viewPath-detail "Defined by yii\base\Module")                                     | [string](http://php.net/language.types.string) – The root directory of view files.
| [volumes](craft-base-applicationtrait.md#volumes "Defined by craft\base\ApplicationTrait")                                                             | [craft\services\Volumes](craft-services-volumes.md) – The volumes service
| [yiiVersion](craft-base-applicationtrait.md#yiiversion "Defined by craft\base\ApplicationTrait")                                                       | [string](http://php.net/language.types.string)

### `session`



Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php)



### `user`



Type

:   [craft\console\User](craft-console-user.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php)







## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-console-application.md#method-construct)                                                                                | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                   | Sets an object property to null.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#afterAction()-detail "Defined by yii\base\Module")                   | This method is invoked right after an action within this module is executed.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#beforeAction()-detail "Defined by yii\base\Module")                 | This method is invoked right before an action within this module is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [bootstrap()](craft-console-application.md#method-bootstrap)                                                                                  | Initializes extensions and executes bootstrap components.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#clear()-detail "Defined by yii\di\ServiceLocator")                   | Removes the component from the locator.
| [coreCommands()](craft-console-application.md#method-corecommands)                                                                            | Returns the configuration of the built-in commands.
| [coreComponents()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#coreComponents()-detail "Defined by yii\base\Application")   | Returns the configuration of core application components.
| [createController()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createController()-detail "Defined by yii\base\Module")         | Creates a controller instance based on the given route.
| [createControllerByID()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#createControllerByID()-detail "Defined by yii\base\Module") | Creates a controller based on the given controller ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [disableMaintenanceMode()](craft-base-applicationtrait.md#method-disablemaintenancemode "Defined by craft\base\ApplicationTrait")             | Disables Maintenance Mode.
| [enableMaintenanceMode()](craft-base-applicationtrait.md#method-enablemaintenancemode "Defined by craft\base\ApplicationTrait")               | Enables Maintenance Mode.
| [end()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#end()-detail "Defined by yii\base\Application")                         | Terminates the application.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [get()](craft-console-application.md#method-get)                                                                                              | Returns the component instance with the specified ID.
| [getApi()](craft-base-applicationtrait.md#method-getapi "Defined by craft\base\ApplicationTrait")                                             | Returns the API service.
| [getAssetIndexer()](craft-base-applicationtrait.md#method-getassetindexer "Defined by craft\base\ApplicationTrait")                           | Returns the asset indexing service.
| [getAssetManager()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getAssetManager()-detail "Defined by yii\base\Application") | Returns the asset manager.
| [getAssetTransforms()](craft-base-applicationtrait.md#method-getassettransforms "Defined by craft\base\ApplicationTrait")                     | Returns the asset transforms service.
| [getAssets()](craft-base-applicationtrait.md#method-getassets "Defined by craft\base\ApplicationTrait")                                       | Returns the assets service.
| [getAuthManager()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getAuthManager()-detail "Defined by yii\base\Application")   | Returns the auth manager for this application.
| [getBasePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getBasePath()-detail "Defined by yii\base\Module")                   | Returns the root directory of the module.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getCache()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getCache()-detail "Defined by yii\base\Application")               | Returns the cache component.
| [getCanTestEditions()](craft-base-applicationtrait.md#method-getcantesteditions "Defined by craft\base\ApplicationTrait")                     | Returns whether Craft is running on a domain that is eligible to test out the editions.
| [getCanUpgradeEdition()](craft-base-applicationtrait.md#method-getcanupgradeedition "Defined by craft\base\ApplicationTrait")                 | Returns whether Craft is eligible to be upgraded to a different edition.
| [getCategories()](craft-base-applicationtrait.md#method-getcategories "Defined by craft\base\ApplicationTrait")                               | Returns the categories service.
| [getComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#getComponents()-detail "Defined by yii\di\ServiceLocator")   | Returns the list of the component definitions or the loaded component instances.
| [getComposer()](craft-base-applicationtrait.md#method-getcomposer "Defined by craft\base\ApplicationTrait")                                   | Returns the Composer service.
| [getConfig()](craft-base-applicationtrait.md#method-getconfig "Defined by craft\base\ApplicationTrait")                                       | Returns the config service.
| [getContent()](craft-base-applicationtrait.md#method-getcontent "Defined by craft\base\ApplicationTrait")                                     | Returns the content service.
| [getContentMigrator()](craft-base-applicationtrait.md#method-getcontentmigrator "Defined by craft\base\ApplicationTrait")                     | Returns the content migration manager.
| [getControllerPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getControllerPath()-detail "Defined by yii\base\Module")       | Returns the directory that contains the controller classes according to [controllerNamespace](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$controllerNamespace-detail).
| [getDashboard()](craft-base-applicationtrait.md#method-getdashboard "Defined by craft\base\ApplicationTrait")                                 | Returns the dashboard service.
| [getDb()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getDb()-detail "Defined by yii\base\Application")                     | Returns the database connection component.
| [getDeprecator()](craft-base-applicationtrait.md#method-getdeprecator "Defined by craft\base\ApplicationTrait")                               | Returns the deprecator service.
| [getDrafts()](craft-base-applicationtrait.md#method-getdrafts "Defined by craft\base\ApplicationTrait")                                       | Returns the drafts service.
| [getEdition()](craft-base-applicationtrait.md#method-getedition "Defined by craft\base\ApplicationTrait")                                     | Returns the Craft edition.
| [getEditionName()](craft-base-applicationtrait.md#method-geteditionname "Defined by craft\base\ApplicationTrait")                             | Returns the name of the Craft edition.
| [getElementIndexes()](craft-base-applicationtrait.md#method-getelementindexes "Defined by craft\base\ApplicationTrait")                       | Returns the element indexes service.
| [getElements()](craft-base-applicationtrait.md#method-getelements "Defined by craft\base\ApplicationTrait")                                   | Returns the elements service.
| [getEntries()](craft-base-applicationtrait.md#method-getentries "Defined by craft\base\ApplicationTrait")                                     | Returns the entries service.
| [getEntryRevisions()](craft-base-applicationtrait.md#method-getentryrevisions "Defined by craft\base\ApplicationTrait")                       | Returns the entry revisions service.
| [getErrorHandler()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getErrorHandler()-detail "Defined by yii\base\Application") | Returns the error handler component.
| [getFeeds()](craft-base-applicationtrait.md#method-getfeeds "Defined by craft\base\ApplicationTrait")                                         | Returns the feeds service.
| [getFields()](craft-base-applicationtrait.md#method-getfields "Defined by craft\base\ApplicationTrait")                                       | Returns the fields service.
| [getFormatter()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getFormatter()-detail "Defined by yii\base\Application")       | Returns the formatter component.
| [getGc()](craft-base-applicationtrait.md#method-getgc "Defined by craft\base\ApplicationTrait")                                               | Returns the garbage collection service.
| [getGlobals()](craft-base-applicationtrait.md#method-getglobals "Defined by craft\base\ApplicationTrait")                                     | Returns the globals service.
| [getGql()](craft-base-applicationtrait.md#method-getgql "Defined by craft\base\ApplicationTrait")                                             | Returns the GraphQL service.
| [getHasWrongEdition()](craft-base-applicationtrait.md#method-gethaswrongedition "Defined by craft\base\ApplicationTrait")                     | Returns whether Craft is running with the wrong edition.
| [getI18n()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getI18n()-detail "Defined by yii\base\Application")                 | Returns the internationalization (i18n) component.
| [getImages()](craft-base-applicationtrait.md#method-getimages "Defined by craft\base\ApplicationTrait")                                       | Returns the images service.
| [getInfo()](craft-base-applicationtrait.md#method-getinfo "Defined by craft\base\ApplicationTrait")                                           | Returns the info model, or just a particular attribute.
| [getInstalledSchemaVersion()](craft-base-applicationtrait.md#method-getinstalledschemaversion "Defined by craft\base\ApplicationTrait")       | Returns the installed schema version.
| [getInstance()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getInstance()-detail "Defined by yii\base\Module")                   | Returns the currently requested instance of this module class.
| [getIsInMaintenanceMode()](craft-base-applicationtrait.md#method-getisinmaintenancemode "Defined by craft\base\ApplicationTrait")             | Returns whether someone is currently performing a system update.
| [getIsInitialized()](craft-base-applicationtrait.md#method-getisinitialized "Defined by craft\base\ApplicationTrait")                         | Returns whether Craft has been fully initialized.
| [getIsInstalled()](craft-base-applicationtrait.md#method-getisinstalled "Defined by craft\base\ApplicationTrait")                             | Returns whether Craft is installed.
| [getIsLive()](craft-base-applicationtrait.md#method-getislive "Defined by craft\base\ApplicationTrait")                                       | Returns whether the system is currently live.
| [getIsMultiSite()](craft-base-applicationtrait.md#method-getismultisite "Defined by craft\base\ApplicationTrait")                             | Returns whether this Craft install has multiple sites.
| [getIsSystemOn()](craft-base-applicationtrait.md#method-getissystemon "Defined by craft\base\ApplicationTrait")                               | Returns whether the system is currently live.
| [getLayoutPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getLayoutPath()-detail "Defined by yii\base\Module")               | Returns the directory that contains layout view files for this module.
| [getLicensedEdition()](craft-base-applicationtrait.md#method-getlicensededition "Defined by craft\base\ApplicationTrait")                     | Returns the edition Craft is actually licensed to run in.
| [getLicensedEditionName()](craft-base-applicationtrait.md#method-getlicensededitionname "Defined by craft\base\ApplicationTrait")             | Returns the name of the edition Craft is actually licensed to run in.
| [getLocale()](craft-base-applicationtrait.md#method-getlocale "Defined by craft\base\ApplicationTrait")                                       | Returns a Locale object for the target language.
| [getLog()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getLog()-detail "Defined by yii\base\Application")                   | Returns the log dispatcher component.
| [getMailer()](craft-base-applicationtrait.md#method-getmailer "Defined by craft\base\ApplicationTrait")                                       | Returns the current mailer.
| [getMatrix()](craft-base-applicationtrait.md#method-getmatrix "Defined by craft\base\ApplicationTrait")                                       | Returns the matrix service.
| [getMigrator()](craft-base-applicationtrait.md#method-getmigrator "Defined by craft\base\ApplicationTrait")                                   | Returns the application’s migration manager.
| [getModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModule()-detail "Defined by yii\base\Module")                       | Retrieves the child module of the specified ID.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getModules()-detail "Defined by yii\base\Module")                     | Returns the sub-modules in this module.
| [getMutex()](craft-base-applicationtrait.md#method-getmutex "Defined by craft\base\ApplicationTrait")                                         | Returns the application’s mutex service.
| [getPath()](craft-base-applicationtrait.md#method-getpath "Defined by craft\base\ApplicationTrait")                                           | Returns the path service.
| [getPluginStore()](craft-base-applicationtrait.md#method-getpluginstore "Defined by craft\base\ApplicationTrait")                             | Returns the plugin store service.
| [getPlugins()](craft-base-applicationtrait.md#method-getplugins "Defined by craft\base\ApplicationTrait")                                     | Returns the plugins service.
| [getProjectConfig()](craft-base-applicationtrait.md#method-getprojectconfig "Defined by craft\base\ApplicationTrait")                         | Returns the system config service.
| [getQueue()](craft-base-applicationtrait.md#method-getqueue "Defined by craft\base\ApplicationTrait")                                         | Returns the queue service.
| [getRelations()](craft-base-applicationtrait.md#method-getrelations "Defined by craft\base\ApplicationTrait")                                 | Returns the relations service.
| [getRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getRequest()-detail "Defined by yii\base\Application")           | Returns the request component.
| [getResponse()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getResponse()-detail "Defined by yii\base\Application")         | Returns the response component.
| [getRevisions()](craft-base-applicationtrait.md#method-getrevisions "Defined by craft\base\ApplicationTrait")                                 | Returns the revisions service.
| [getRoutes()](craft-base-applicationtrait.md#method-getroutes "Defined by craft\base\ApplicationTrait")                                       | Returns the routes service.
| [getRuntimePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getRuntimePath()-detail "Defined by yii\base\Application")   | Returns the directory that stores runtime files.
| [getSearch()](craft-base-applicationtrait.md#method-getsearch "Defined by craft\base\ApplicationTrait")                                       | Returns the search service.
| [getSections()](craft-base-applicationtrait.md#method-getsections "Defined by craft\base\ApplicationTrait")                                   | Returns the sections service.
| [getSecurity()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getSecurity()-detail "Defined by yii\base\Application")         | Returns the security component.
| [getSession()](craft-console-application.md#method-getsession)                                                                                |
| [getSites()](craft-base-applicationtrait.md#method-getsites "Defined by craft\base\ApplicationTrait")                                         | Returns the sites service.
| [getStructures()](craft-base-applicationtrait.md#method-getstructures "Defined by craft\base\ApplicationTrait")                               | Returns the structures service.
| [getSystemMessages()](craft-base-applicationtrait.md#method-getsystemmessages "Defined by craft\base\ApplicationTrait")                       | Returns the system email messages service.
| [getSystemName()](craft-base-applicationtrait.md#method-getsystemname "Defined by craft\base\ApplicationTrait")                               | Returns the system name.
| [getSystemSettings()](craft-base-applicationtrait.md#method-getsystemsettings "Defined by craft\base\ApplicationTrait")                       | Returns the system settings service.
| [getSystemUid()](craft-base-applicationtrait.md#method-getsystemuid "Defined by craft\base\ApplicationTrait")                                 | Returns the system's UID.
| [getTags()](craft-base-applicationtrait.md#method-gettags "Defined by craft\base\ApplicationTrait")                                           | Returns the tags service.
| [getTargetLanguage()](craft-base-applicationtrait.md#method-gettargetlanguage "Defined by craft\base\ApplicationTrait")                       | Returns the target app language.
| [getTemplateCaches()](craft-base-applicationtrait.md#method-gettemplatecaches "Defined by craft\base\ApplicationTrait")                       | Returns the template cache service.
| [getTimeZone()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getTimeZone()-detail "Defined by yii\base\Application")         | Returns the time zone used by this application.
| [getTokens()](craft-base-applicationtrait.md#method-gettokens "Defined by craft\base\ApplicationTrait")                                       | Returns the tokens service.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getUniqueId()-detail "Defined by yii\base\Module")                   | Returns an ID that uniquely identifies this module among all modules within the current application.
| [getUpdates()](craft-base-applicationtrait.md#method-getupdates "Defined by craft\base\ApplicationTrait")                                     | Returns the updates service.
| [getUrlManager()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getUrlManager()-detail "Defined by yii\base\Application")     | Returns the URL manager for this application.
| [getUser()](craft-console-application.md#method-getuser)                                                                                      | Returns the user component.
| [getUserGroups()](craft-base-applicationtrait.md#method-getusergroups "Defined by craft\base\ApplicationTrait")                               | Returns the user groups service.
| [getUserPermissions()](craft-base-applicationtrait.md#method-getuserpermissions "Defined by craft\base\ApplicationTrait")                     | Returns the user permissions service.
| [getUsers()](craft-base-applicationtrait.md#method-getusers "Defined by craft\base\ApplicationTrait")                                         | Returns the users service.
| [getUtilities()](craft-base-applicationtrait.md#method-getutilities "Defined by craft\base\ApplicationTrait")                                 | Returns the utilities service.
| [getVendorPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getVendorPath()-detail "Defined by yii\base\Application")     | Returns the directory that stores vendor files.
| [getVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getVersion()-detail "Defined by yii\base\Module")                     | Returns current module version.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#getView()-detail "Defined by yii\base\Application")                 | Returns the view object.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#getViewPath()-detail "Defined by yii\base\Module")                   | Returns the directory that contains the view files for this module.
| [getVolumes()](craft-base-applicationtrait.md#method-getvolumes "Defined by craft\base\ApplicationTrait")                                     | Returns the volumes service.
| [getYiiVersion()](craft-base-applicationtrait.md#method-getyiiversion "Defined by craft\base\ApplicationTrait")                               | Returns the Yii framework version.
| [handleRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#handleRequest()-detail "Defined by yii\base\Application")     | Handles the specified request.
| [has()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#has()-detail "Defined by yii\base\Module")                                   | Returns a value indicating whether the locator has the specified component definition or has instantiated the component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a method is defined.
| [hasModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#hasModule()-detail "Defined by yii\base\Module")                       | Checks whether the child module of the specified ID exists.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property is defined.
| [init()](craft-console-application.md#method-init)                                                                                            | Initializes the console app by creating the command runner.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                               | Attaches an event handler to an event.
| [preInit()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#preInit()-detail "Defined by yii\base\Application")                 | Pre-initializes the application.
| [requireEdition()](craft-base-applicationtrait.md#method-requireedition "Defined by craft\base\ApplicationTrait")                             | Requires that Craft is running an equal or better edition than what's passed in
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#run()-detail "Defined by yii\base\Application")                         | Runs the application.
| [runAction()](craft-console-application.md#method-runaction)                                                                                  | Runs a controller action specified by a route.
| [saveInfo()](craft-base-applicationtrait.md#method-saveinfo "Defined by craft\base\ApplicationTrait")                                         | Updates the info row.
| [saveInfoAfterRequest()](craft-base-applicationtrait.md#method-saveinfoafterrequest "Defined by craft\base\ApplicationTrait")                 | Updates the info row at the end of the request.
| [set()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#set()-detail "Defined by yii\di\ServiceLocator")                       | Registers a component definition with this locator.
| [setAliases()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setAliases()-detail "Defined by yii\base\Module")                     | Defines path aliases.
| [setBasePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setBasePath()-detail "Defined by yii\base\Module")                   | Sets the root directory of the module.
| [setComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#setComponents()-detail "Defined by yii\di\ServiceLocator")   | Registers a set of component definitions in this locator.
| [setContainer()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#setContainer()-detail "Defined by yii\base\Application")       | Configures `Yii::$container` with the $config.
| [setEdition()](craft-base-applicationtrait.md#method-setedition "Defined by craft\base\ApplicationTrait")                                     | Sets the Craft edition.
| [setInstance()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setInstance()-detail "Defined by yii\base\Module")                   | Sets the currently requested instance of this module class.
| [setIsInstalled()](craft-base-applicationtrait.md#method-setisinstalled "Defined by craft\base\ApplicationTrait")                             | Sets Craft's record of whether it's installed
| [setLayoutPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setLayoutPath()-detail "Defined by yii\base\Module")               | Sets the directory that contains the layout files.
| [setModule()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setModule()-detail "Defined by yii\base\Module")                       | Adds a sub-module to this module.
| [setModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setModules()-detail "Defined by yii\base\Module")                     | Registers sub-modules in the current module.
| [setRuntimePath()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#setRuntimePath()-detail "Defined by yii\base\Application")   | Sets the directory that stores runtime files.
| [setTimeZone()](craft-console-application.md#method-settimezone)                                                                              | Sets the time zone used by this application.
| [setVendorPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#setVendorPath()-detail "Defined by yii\base\Application")     | Sets the directory that stores vendor files.
| [setVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setVersion()-detail "Defined by yii\base\Module")                     | Sets current module version.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#setViewPath()-detail "Defined by yii\base\Module")                   | Sets the directory that contains the view files.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.
| [updateTargetLanguage()](craft-base-applicationtrait.md#method-updatetargetlanguage "Defined by craft\base\ApplicationTrait")                 | Sets the target application language.

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L45-L49)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties.
Note that the configuration must contain both [id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail) and [basePath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$basePath-detail).


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if either [id](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$id-detail) or [basePath](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$basePath-detail) configuration is missing.


### `bootstrap()`





Initializes extensions and executes bootstrap components.



This method is called by [init()](craft-console-application.md#method-init) after the application has been fully configured.
If you override this method, make sure you also call the parent implementation.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L65-L73)






### `coreCommands()`





Returns the configuration of the built-in commands.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L113-L120)



#### Returns

[array](http://php.net/language.types.array) – The configuration of the built-in commands.



### `get()`





Returns the component instance with the specified ID.



See also:

- [has()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#has()-detail)
- [set()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#set()-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L151-L163)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – Component ID (e.g. `db`).
- `$throwException` ([boolean](http://php.net/language.types.boolean)) – Whether to throw an exception if `$id` is not registered with the locator before.

#### Returns

[object](http://php.net/language.types.object), [null](http://php.net/language.types.null) – The component of the specified ID. If `$throwException` is false and `$id`
is not registered before, null will be returned.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if `$id` refers to a nonexistent component ID


### `getSession()`










[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L125-L128)




#### Throws

- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)


### `getUser()`





Returns the user component.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L135-L138)



#### Returns

[craft\console\User](craft-console-user.md)



### `init()`





Initializes the console app by creating the command runner.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L54-L60)






### `runAction()`





Runs a controller action specified by a route.



This method parses the specified route and creates the corresponding child module(s), controller and action
instances. It then calls [craft\console\Controller::runAction()](craft-console-controller.md#method-runaction) to run the action with the given parameters.
If the route is empty, the method will use [defaultRoute](https://www.yiiframework.com/doc/api/2.0/yii-base-module#$defaultRoute-detail).

For example, to run `public function actionTest($a, $b)` assuming that the controller has options the following
code should be used:

```php
\Yii::$app->runAction('controller/test', ['option' => 'value', $a, $b]);
```




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L78-L88)


#### Arguments

- `$route` ([string](http://php.net/language.types.string)) – The route that specifies the action.
- `$params` ([array](http://php.net/language.types.array)) – The parameters to be passed to the action

#### Returns

[integer](http://php.net/language.types.integer), [yii\console\Response](https://www.yiiframework.com/doc/api/2.0/yii-console-response) – The result of the action. This can be either an exit code or Response object.
Exit code 0 means normal, and other values mean abnormal. Exit code of `null` is treaded as `0` as well.

#### Throws

- [yii\console\Exception](https://www.yiiframework.com/doc/api/2.0/yii-console-exception)\
  if the route is invalid


### `setTimeZone()`





Sets the time zone used by this application.



This is a simple wrapper of PHP function date_default_timezone_set().
Refer to the [php manual](https://secure.php.net/manual/en/timezones.php) for available timezones.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Application.php#L93-L106)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The time zone used by this application.






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------
| [defaultVersion()](https://www.yiiframework.com/doc/api/2.0/yii-base-module#defaultVersion()-detail "Defined by yii\base\Module")                       | Returns default module version.
| [loadConfig()](https://www.yiiframework.com/doc/api/2.0/yii-console-application#loadConfig()-detail "Defined by yii\console\Application")               | Loads the configuration.
| [registerErrorHandler()](https://www.yiiframework.com/doc/api/2.0/yii-base-application#registerErrorHandler()-detail "Defined by yii\base\Application") | Registers the errorHandler component as a PHP error handler.



## Constants

| Constant                 | Description
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| `OPTION_APPCONFIG`       | The option name for specifying the application configuration file path.
| `STATE_AFTER_REQUEST`    | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application is triggering [EVENT_AFTER_REQUEST](https://www.yiiframework.com/doc/api/2.0/yii-base-application#EVENT_AFTER_REQUEST-detail).
| `STATE_BEFORE_REQUEST`   | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application is triggering [EVENT_BEFORE_REQUEST](https://www.yiiframework.com/doc/api/2.0/yii-base-application#EVENT_BEFORE_REQUEST-detail).
| `STATE_BEGIN`            | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application just started.
| `STATE_END`              | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application has ended.
| `STATE_HANDLING_REQUEST` | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application is handling the request.
| `STATE_INIT`             | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application is initializing.
| `STATE_SENDING_RESPONSE` | Application state used by [state](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$state-detail): application is about to send response.



