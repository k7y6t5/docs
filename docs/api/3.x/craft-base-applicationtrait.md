---
title: craft\base\ApplicationTrait
code:
  - php
  - twig
---

# ApplicationTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\console\Application](craft-console-application.md), [craft\web\Application](craft-web-application.md)

Since

:   3.0.0



ApplicationTrait





[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php)


## Public Properties

| Property                                                                | Description
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------
| [env](craft-base-applicationtrait.md#env)                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The environment ID Craft is currently running in.
| [minVersionRequired](craft-base-applicationtrait.md#minversionrequired) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The minimum Craft build number required to update to this build.
| [schemaVersion](craft-base-applicationtrait.md#schemaversion)           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Craft’s schema version number.

### `env`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The environment ID Craft is currently running in.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L152)



### `minVersionRequired`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The minimum Craft build number required to update to this build.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L147)



### `schemaVersion`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Craft’s schema version number.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L142)







## Public Methods

| Method                                                                                         | Description
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------
| [disableMaintenanceMode()](craft-base-applicationtrait.md#method-disablemaintenancemode)       | Disables Maintenance Mode.
| [enableMaintenanceMode()](craft-base-applicationtrait.md#method-enablemaintenancemode)         | Enables Maintenance Mode.
| [getApi()](craft-base-applicationtrait.md#method-getapi)                                       | Returns the API service.
| [getAssetIndexer()](craft-base-applicationtrait.md#method-getassetindexer)                     | Returns the asset indexing service.
| [getAssetTransforms()](craft-base-applicationtrait.md#method-getassettransforms)               | Returns the asset transforms service.
| [getAssets()](craft-base-applicationtrait.md#method-getassets)                                 | Returns the assets service.
| [getCanTestEditions()](craft-base-applicationtrait.md#method-getcantesteditions)               | Returns whether Craft is running on a domain that is eligible to test out the editions.
| [getCanUpgradeEdition()](craft-base-applicationtrait.md#method-getcanupgradeedition)           | Returns whether Craft is eligible to be upgraded to a different edition.
| [getCategories()](craft-base-applicationtrait.md#method-getcategories)                         | Returns the categories service.
| [getComposer()](craft-base-applicationtrait.md#method-getcomposer)                             | Returns the Composer service.
| [getConfig()](craft-base-applicationtrait.md#method-getconfig)                                 | Returns the config service.
| [getContent()](craft-base-applicationtrait.md#method-getcontent)                               | Returns the content service.
| [getContentMigrator()](craft-base-applicationtrait.md#method-getcontentmigrator)               | Returns the content migration manager.
| [getDashboard()](craft-base-applicationtrait.md#method-getdashboard)                           | Returns the dashboard service.
| [getDeprecator()](craft-base-applicationtrait.md#method-getdeprecator)                         | Returns the deprecator service.
| [getDrafts()](craft-base-applicationtrait.md#method-getdrafts)                                 | Returns the drafts service.
| [getEdition()](craft-base-applicationtrait.md#method-getedition)                               | Returns the Craft edition.
| [getEditionName()](craft-base-applicationtrait.md#method-geteditionname)                       | Returns the name of the Craft edition.
| [getElementIndexes()](craft-base-applicationtrait.md#method-getelementindexes)                 | Returns the element indexes service.
| [getElements()](craft-base-applicationtrait.md#method-getelements)                             | Returns the elements service.
| [getEntries()](craft-base-applicationtrait.md#method-getentries)                               | Returns the entries service.
| [getEntryRevisions()](craft-base-applicationtrait.md#method-getentryrevisions)                 | Returns the entry revisions service.
| [getFeeds()](craft-base-applicationtrait.md#method-getfeeds)                                   | Returns the feeds service.
| [getFields()](craft-base-applicationtrait.md#method-getfields)                                 | Returns the fields service.
| [getGc()](craft-base-applicationtrait.md#method-getgc)                                         | Returns the garbage collection service.
| [getGlobals()](craft-base-applicationtrait.md#method-getglobals)                               | Returns the globals service.
| [getGql()](craft-base-applicationtrait.md#method-getgql)                                       | Returns the GraphQL service.
| [getHasWrongEdition()](craft-base-applicationtrait.md#method-gethaswrongedition)               | Returns whether Craft is running with the wrong edition.
| [getImages()](craft-base-applicationtrait.md#method-getimages)                                 | Returns the images service.
| [getInfo()](craft-base-applicationtrait.md#method-getinfo)                                     | Returns the info model, or just a particular attribute.
| [getInstalledSchemaVersion()](craft-base-applicationtrait.md#method-getinstalledschemaversion) | Returns the installed schema version.
| [getIsInMaintenanceMode()](craft-base-applicationtrait.md#method-getisinmaintenancemode)       | Returns whether someone is currently performing a system update.
| [getIsInitialized()](craft-base-applicationtrait.md#method-getisinitialized)                   | Returns whether Craft has been fully initialized.
| [getIsInstalled()](craft-base-applicationtrait.md#method-getisinstalled)                       | Returns whether Craft is installed.
| [getIsLive()](craft-base-applicationtrait.md#method-getislive)                                 | Returns whether the system is currently live.
| [getIsMultiSite()](craft-base-applicationtrait.md#method-getismultisite)                       | Returns whether this Craft install has multiple sites.
| [getIsSystemOn()](craft-base-applicationtrait.md#method-getissystemon)                         | Returns whether the system is currently live.
| [getLicensedEdition()](craft-base-applicationtrait.md#method-getlicensededition)               | Returns the edition Craft is actually licensed to run in.
| [getLicensedEditionName()](craft-base-applicationtrait.md#method-getlicensededitionname)       | Returns the name of the edition Craft is actually licensed to run in.
| [getLocale()](craft-base-applicationtrait.md#method-getlocale)                                 | Returns a Locale object for the target language.
| [getMailer()](craft-base-applicationtrait.md#method-getmailer)                                 | Returns the current mailer.
| [getMatrix()](craft-base-applicationtrait.md#method-getmatrix)                                 | Returns the matrix service.
| [getMigrator()](craft-base-applicationtrait.md#method-getmigrator)                             | Returns the application’s migration manager.
| [getMutex()](craft-base-applicationtrait.md#method-getmutex)                                   | Returns the application’s mutex service.
| [getPath()](craft-base-applicationtrait.md#method-getpath)                                     | Returns the path service.
| [getPluginStore()](craft-base-applicationtrait.md#method-getpluginstore)                       | Returns the plugin store service.
| [getPlugins()](craft-base-applicationtrait.md#method-getplugins)                               | Returns the plugins service.
| [getProjectConfig()](craft-base-applicationtrait.md#method-getprojectconfig)                   | Returns the system config service.
| [getQueue()](craft-base-applicationtrait.md#method-getqueue)                                   | Returns the queue service.
| [getRelations()](craft-base-applicationtrait.md#method-getrelations)                           | Returns the relations service.
| [getRevisions()](craft-base-applicationtrait.md#method-getrevisions)                           | Returns the revisions service.
| [getRoutes()](craft-base-applicationtrait.md#method-getroutes)                                 | Returns the routes service.
| [getSearch()](craft-base-applicationtrait.md#method-getsearch)                                 | Returns the search service.
| [getSections()](craft-base-applicationtrait.md#method-getsections)                             | Returns the sections service.
| [getSites()](craft-base-applicationtrait.md#method-getsites)                                   | Returns the sites service.
| [getStructures()](craft-base-applicationtrait.md#method-getstructures)                         | Returns the structures service.
| [getSystemMessages()](craft-base-applicationtrait.md#method-getsystemmessages)                 | Returns the system email messages service.
| [getSystemName()](craft-base-applicationtrait.md#method-getsystemname)                         | Returns the system name.
| [getSystemSettings()](craft-base-applicationtrait.md#method-getsystemsettings)                 | Returns the system settings service.
| [getSystemUid()](craft-base-applicationtrait.md#method-getsystemuid)                           | Returns the system's UID.
| [getTags()](craft-base-applicationtrait.md#method-gettags)                                     | Returns the tags service.
| [getTargetLanguage()](craft-base-applicationtrait.md#method-gettargetlanguage)                 | Returns the target app language.
| [getTemplateCaches()](craft-base-applicationtrait.md#method-gettemplatecaches)                 | Returns the template cache service.
| [getTokens()](craft-base-applicationtrait.md#method-gettokens)                                 | Returns the tokens service.
| [getUpdates()](craft-base-applicationtrait.md#method-getupdates)                               | Returns the updates service.
| [getUserGroups()](craft-base-applicationtrait.md#method-getusergroups)                         | Returns the user groups service.
| [getUserPermissions()](craft-base-applicationtrait.md#method-getuserpermissions)               | Returns the user permissions service.
| [getUsers()](craft-base-applicationtrait.md#method-getusers)                                   | Returns the users service.
| [getUtilities()](craft-base-applicationtrait.md#method-getutilities)                           | Returns the utilities service.
| [getVolumes()](craft-base-applicationtrait.md#method-getvolumes)                               | Returns the volumes service.
| [getYiiVersion()](craft-base-applicationtrait.md#method-getyiiversion)                         | Returns the Yii framework version.
| [requireEdition()](craft-base-applicationtrait.md#method-requireedition)                       | Requires that Craft is running an equal or better edition than what's passed in
| [saveInfo()](craft-base-applicationtrait.md#method-saveinfo)                                   | Updates the info row.
| [saveInfoAfterRequest()](craft-base-applicationtrait.md#method-saveinfoafterrequest)           | Updates the info row at the end of the request.
| [setEdition()](craft-base-applicationtrait.md#method-setedition)                               | Sets the Craft edition.
| [setIsInstalled()](craft-base-applicationtrait.md#method-setisinstalled)                       | Sets Craft's record of whether it's installed
| [updateTargetLanguage()](craft-base-applicationtrait.md#method-updatetargetlanguage)           | Sets the target application language.

### `disableMaintenanceMode()`





Disables Maintenance Mode.



See also:

- [getIsInMaintenanceMode()](craft-base-applicationtrait.md#method-getisinmaintenancemode)
- [disableMaintenanceMode()](craft-base-applicationtrait.md#method-disablemaintenancemode)

[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L595-L599)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `enableMaintenanceMode()`





Enables Maintenance Mode.



See also:

- [getIsInMaintenanceMode()](craft-base-applicationtrait.md#method-getisinmaintenancemode)
- [disableMaintenanceMode()](craft-base-applicationtrait.md#method-disablemaintenancemode)

[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L582-L586)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getApi()`





Returns the API service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L825-L829)



#### Returns

[craft\services\Api](craft-services-api.md) – The API service



### `getAssetIndexer()`





Returns the asset indexing service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L847-L851)



#### Returns

[craft\services\AssetIndexer](craft-services-assetindexer.md) – The asset indexing service



### `getAssetTransforms()`





Returns the asset transforms service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L858-L862)



#### Returns

[craft\services\AssetTransforms](craft-services-assettransforms.md) – The asset transforms service



### `getAssets()`





Returns the assets service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L836-L840)



#### Returns

[craft\services\Assets](craft-services-assets.md) – The assets service



### `getCanTestEditions()`





Returns whether Craft is running on a domain that is eligible to test out the editions.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L510-L521)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getCanUpgradeEdition()`





Returns whether Craft is eligible to be upgraded to a different edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L484-L503)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getCategories()`





Returns the categories service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L869-L873)



#### Returns

[craft\services\Categories](craft-services-categories.md) – The categories service



### `getComposer()`





Returns the Composer service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L880-L884)



#### Returns

[craft\services\Composer](craft-services-composer.md) – The Composer service



### `getConfig()`





Returns the config service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L891-L895)



#### Returns

[craft\services\Config](craft-services-config.md) – The config service



### `getContent()`





Returns the content service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L902-L906)



#### Returns

[craft\services\Content](craft-services-content.md) – The content service



### `getContentMigrator()`





Returns the content migration manager.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L913-L917)



#### Returns

[craft\db\MigrationManager](craft-db-migrationmanager.md) – The content migration manager



### `getDashboard()`





Returns the dashboard service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L924-L928)



#### Returns

[craft\services\Dashboard](craft-services-dashboard.md) – The dashboard service



### `getDeprecator()`





Returns the deprecator service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L935-L939)



#### Returns

[craft\services\Deprecator](craft-services-deprecator.md) – The deprecator service



### `getDrafts()`



Since

:   3.2.0



Returns the drafts service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L947-L951)



#### Returns

[craft\services\Drafts](craft-services-drafts.md) – The drafts service



### `getEdition()`





Returns the Craft edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L369-L374)



#### Returns

[integer](http://php.net/language.types.integer)



### `getEditionName()`





Returns the name of the Craft edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L381-L385)



#### Returns

[string](http://php.net/language.types.string)



### `getElementIndexes()`





Returns the element indexes service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L958-L962)



#### Returns

[craft\services\ElementIndexes](craft-services-elementindexes.md) – The element indexes service



### `getElements()`





Returns the elements service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L969-L973)



#### Returns

[craft\services\Elements](craft-services-elements.md) – The elements service



### `getEntries()`





Returns the entries service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L991-L995)



#### Returns

[craft\services\Entries](craft-services-entries.md) – The entries service



### `getEntryRevisions()`

::: danger DEPRECATED
Deprecated in 3.2.0.
:::




Returns the entry revisions service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1003-L1007)



#### Returns

[craft\services\EntryRevisions](craft-services-entryrevisions.md) – The entry revisions service



### `getFeeds()`

::: danger DEPRECATED
Deprecated in 3.4.24
:::




Returns the feeds service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1015-L1019)



#### Returns

[craft\feeds\Feeds](craft-feeds-feeds.md) – The feeds service



### `getFields()`





Returns the fields service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1026-L1030)



#### Returns

[craft\services\Fields](craft-services-fields.md) – The fields service



### `getGc()`





Returns the garbage collection service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1037-L1040)



#### Returns

[craft\services\Gc](craft-services-gc.md) – The garbage collection service



### `getGlobals()`





Returns the globals service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1047-L1051)



#### Returns

[craft\services\Globals](craft-services-globals.md) – The globals service



### `getGql()`



Since

:   3.3.0



Returns the GraphQL service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1059-L1063)



#### Returns

[craft\services\Gql](craft-services-gql.md) – The GraphQL service



### `getHasWrongEdition()`





Returns whether Craft is running with the wrong edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L426-L432)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getImages()`





Returns the images service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1070-L1074)



#### Returns

[craft\services\Images](craft-services-images.md) – The images service



### `getInfo()`





Returns the info model, or just a particular attribute.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L609-L659)


#### Arguments

- `$throwException` – Whether an exception should be thrown if the `info` table doesn't exist

#### Returns

[craft\models\Info](craft-models-info.md)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)\
  if the `info` table doesn’t exist yet and `$throwException` is `true`
- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)\
  if the info table is missing its row


### `getInstalledSchemaVersion()`



Since

:   3.2.0



Returns the installed schema version.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L315-L318)



#### Returns

[string](http://php.net/language.types.string)



### `getIsInMaintenanceMode()`





Returns whether someone is currently performing a system update.



See also:

- [enableMaintenanceMode()](craft-base-applicationtrait.md#method-enablemaintenancemode)
- [disableMaintenanceMode()](craft-base-applicationtrait.md#method-disablemaintenancemode)

[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L569-L573)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsInitialized()`



Since

:   3.0.13



Returns whether Craft has been fully initialized.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L326-L329)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsInstalled()`





Returns whether Craft is installed.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L270-L296)


#### Arguments

- `$refresh` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsLive()`



Since

:   3.1.0



Returns whether the system is currently live.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L540-L548)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsMultiSite()`





Returns whether this Craft install has multiple sites.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L338-L362)


#### Arguments

- `$refresh` ([boolean](http://php.net/language.types.boolean)) – Whether to ignore the cached result and check again
- `$withTrashed` ([boolean](http://php.net/language.types.boolean)) – Whether to factor in soft-deleted sites

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsSystemOn()`

::: danger DEPRECATED
Deprecated in 3.1.0. Use [getIsLive()](craft-base-applicationtrait.md#method-getislive) instead.
:::




Returns whether the system is currently live.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L556-L560)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLicensedEdition()`





Returns the edition Craft is actually licensed to run in.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L392-L402)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getLicensedEditionName()`





Returns the name of the edition Craft is actually licensed to run in.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L409-L419)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getLocale()`





Returns a Locale object for the target language.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1081-L1085)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md) – The Locale object for the target language



### `getMailer()`





Returns the current mailer.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1092-L1096)



#### Returns

[craft\mail\Mailer](craft-mail-mailer.md) – The mailer component



### `getMatrix()`





Returns the matrix service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1103-L1107)



#### Returns

[craft\services\Matrix](craft-services-matrix.md) – The matrix service



### `getMigrator()`





Returns the application’s migration manager.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1114-L1118)



#### Returns

[craft\db\MigrationManager](craft-db-migrationmanager.md) – The application’s migration manager



### `getMutex()`





Returns the application’s mutex service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1125-L1129)



#### Returns

[yii\mutex\Mutex](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex) – The application’s mutex service



### `getPath()`





Returns the path service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1136-L1140)



#### Returns

[craft\services\Path](craft-services-path.md) – The path service



### `getPluginStore()`





Returns the plugin store service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1158-L1162)



#### Returns

[craft\services\PluginStore](craft-services-pluginstore.md) – The plugin store service



### `getPlugins()`





Returns the plugins service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1147-L1151)



#### Returns

[craft\services\Plugins](craft-services-plugins.md) – The plugins service



### `getProjectConfig()`





Returns the system config service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1258-L1262)



#### Returns

[craft\services\ProjectConfig](craft-services-projectconfig.md) – The system config service



### `getQueue()`





Returns the queue service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1169-L1173)



#### Returns

[craft\queue\Queue](craft-queue-queue.md), [craft\queue\QueueInterface](craft-queue-queueinterface.md) – The queue service



### `getRelations()`





Returns the relations service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1180-L1184)



#### Returns

[craft\services\Relations](craft-services-relations.md) – The relations service



### `getRevisions()`



Since

:   3.2.0



Returns the revisions service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1192-L1196)



#### Returns

[craft\services\Revisions](craft-services-revisions.md) – The revisions service



### `getRoutes()`





Returns the routes service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1203-L1207)



#### Returns

[craft\services\Routes](craft-services-routes.md) – The routes service



### `getSearch()`





Returns the search service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1214-L1218)



#### Returns

[craft\services\Search](craft-services-search.md) – The search service



### `getSections()`





Returns the sections service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1225-L1229)



#### Returns

[craft\services\Sections](craft-services-sections.md) – The sections service



### `getSites()`





Returns the sites service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1236-L1240)



#### Returns

[craft\services\Sites](craft-services-sites.md) – The sites service



### `getStructures()`





Returns the structures service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1247-L1251)



#### Returns

[craft\services\Structures](craft-services-structures.md) – The structures service



### `getSystemMessages()`





Returns the system email messages service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L980-L984)



#### Returns

[craft\services\SystemMessages](craft-services-systemmessages.md) – The system email messages service



### `getSystemName()`



Since

:   3.1.4



Returns the system name.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L763-L776)



#### Returns

[string](http://php.net/language.types.string)



### `getSystemSettings()`





Returns the system settings service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1269-L1273)



#### Returns

[craft\services\SystemSettings](craft-services-systemsettings.md) – The system settings service



### `getSystemUid()`





Returns the system's UID.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L528-L532)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTags()`





Returns the tags service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1280-L1284)



#### Returns

[craft\services\Tags](craft-services-tags.md) – The tags service



### `getTargetLanguage()`





Returns the target app language.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L248-L262)


#### Arguments

- `$useUserLanguage` ([boolean](http://php.net/language.types.boolean)) – Whether the user's preferred language should be used.

#### Returns

[string](http://php.net/language.types.string)



### `getTemplateCaches()`





Returns the template cache service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1291-L1295)



#### Returns

[craft\services\TemplateCaches](craft-services-templatecaches.md) – The template caches service



### `getTokens()`





Returns the tokens service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1302-L1306)



#### Returns

[craft\services\Tokens](craft-services-tokens.md) – The tokens service



### `getUpdates()`





Returns the updates service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1313-L1317)



#### Returns

[craft\services\Updates](craft-services-updates.md) – The updates service



### `getUserGroups()`





Returns the user groups service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1324-L1328)



#### Returns

[craft\services\UserGroups](craft-services-usergroups.md) – The user groups service



### `getUserPermissions()`





Returns the user permissions service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1335-L1339)



#### Returns

[craft\services\UserPermissions](craft-services-userpermissions.md) – The user permissions service



### `getUsers()`





Returns the users service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1346-L1350)



#### Returns

[craft\services\Users](craft-services-users.md) – The users service



### `getUtilities()`





Returns the utilities service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1357-L1361)



#### Returns

[craft\services\Utilities](craft-services-utilities.md) – The utilities service



### `getVolumes()`





Returns the volumes service.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L1368-L1372)



#### Returns

[craft\services\Volumes](craft-services-volumes.md) – The volumes service



### `getYiiVersion()`





Returns the Yii framework version.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L783-L786)



#### Returns

[string](http://php.net/language.types.string)



### `requireEdition()`





Requires that Craft is running an equal or better edition than what's passed in




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L466-L477)


#### Arguments

- `$edition` ([integer](http://php.net/language.types.integer)) – The Craft edition to require.
- `$orBetter` ([boolean](http://php.net/language.types.boolean)) – If true, makes $edition the minimum edition required.


#### Throws

- [craft\errors\WrongEditionException](craft-errors-wrongeditionexception.md)\
  if attempting to do something not allowed by the current Craft edition


### `saveInfo()`





Updates the info row.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L706-L755)


#### Arguments

- `$info` ([craft\models\Info](craft-models-info.md))
- `$attributeNames` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The attributes to save

#### Returns

[boolean](http://php.net/language.types.boolean)



### `saveInfoAfterRequest()`



Since

:   3.1.33



Updates the info row at the end of the request.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L666-L682)






### `setEdition()`





Sets the Craft edition.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L440-L457)


#### Arguments

- `$edition` ([integer](http://php.net/language.types.integer)) – The edition to set.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `setIsInstalled()`





Sets Craft's record of whether it's installed




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L303-L307)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null))




### `updateTargetLanguage()`





Sets the target application language.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ApplicationTrait.php#L218-L240)


#### Arguments

- `$useUserLanguage` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the user's preferred language should be used.
If null, the user’s preferred language will be used if this is a control panel request or a console request.










