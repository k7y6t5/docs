---
title: craft\services\Sites
code:
  - php
  - twig
---

# Sites

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Sites](craft-services-sites.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Sites service.

An instance of the Sites service is globally accessible in Craft via [`Craft::$app->sites`](craft-base-applicationtrait.md#method-getsites).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allGroups](craft-services-sites.md#allgroups)                                                                             | [craft\models\SiteGroup](craft-models-sitegroup.md)[] – The site groups
| [allSiteIds](craft-services-sites.md#allsiteids)                                                                           | [integer](http://php.net/language.types.integer)[] – All the sites’ IDs
| [allSites](craft-services-sites.md#allsites)                                                                               | [craft\models\Site](craft-models-site.md)[] – All the sites
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [currentSite](craft-services-sites.md#currentsite)                                                                         | [craft\models\Site](craft-models-site.md) – The current site
| [editableSiteIds](craft-services-sites.md#editablesiteids)                                                                 | [array](http://php.net/language.types.array) – All the editable sites’ IDs
| [editableSites](craft-services-sites.md#editablesites)                                                                     | [craft\models\Site](craft-models-site.md)[] – All the editable sites
| [hasCurrentSite](craft-services-sites.md#hascurrentsite)                                                                   | [boolean](http://php.net/language.types.boolean)
| [primarySite](craft-services-sites.md#primarysite)                                                                         | [craft\models\Site](craft-models-site.md) – The primary site
| [totalEditableSites](craft-services-sites.md#totaleditablesites)                                                           | [integer](http://php.net/language.types.integer)
| [totalSites](craft-services-sites.md#totalsites)                                                                           | [integer](http://php.net/language.types.integer)

### `allGroups`



Type

:   [craft\models\SiteGroup](craft-models-sitegroup.md)[]

Access

:   Read-only



The site groups



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `allSiteIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only



All the sites’ IDs



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `allSites`



Type

:   [craft\models\Site](craft-models-site.md)[]

Access

:   Read-only



All the sites



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `currentSite`



Type

:   [craft\models\Site](craft-models-site.md)



The current site



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `editableSiteIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



All the editable sites’ IDs



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `editableSites`



Type

:   [craft\models\Site](craft-models-site.md)[]

Access

:   Read-only



All the editable sites



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `hasCurrentSite`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `primarySite`



Type

:   [craft\models\Site](craft-models-site.md)

Access

:   Read-only



The primary site



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `totalEditableSites`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)



### `totalSites`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php)







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
| [deleteGroup()](craft-services-sites.md#method-deletegroup)                                                                                 | Deletes a site group.
| [deleteGroupById()](craft-services-sites.md#method-deletegroupbyid)                                                                         | Deletes a site group by its ID.
| [deleteSite()](craft-services-sites.md#method-deletesite)                                                                                   | Deletes a site.
| [deleteSiteById()](craft-services-sites.md#method-deletesitebyid)                                                                           | Deletes a site by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllGroups()](craft-services-sites.md#method-getallgroups)                                                                               | Returns all site groups.
| [getAllSiteIds()](craft-services-sites.md#method-getallsiteids)                                                                             | Returns all of the site IDs.
| [getAllSites()](craft-services-sites.md#method-getallsites)                                                                                 | Returns all sites.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCurrentSite()](craft-services-sites.md#method-getcurrentsite)                                                                           | Returns the current site.
| [getEditableSiteIds()](craft-services-sites.md#method-geteditablesiteids)                                                                   | Returns all of the site IDs that are editable by the current user.
| [getEditableSites()](craft-services-sites.md#method-geteditablesites)                                                                       | Returns all editable sites.
| [getGroupById()](craft-services-sites.md#method-getgroupbyid)                                                                               | Returns a site group by its ID.
| [getHasCurrentSite()](craft-services-sites.md#method-gethascurrentsite)                                                                     | Returns whether the current site has been set yet.
| [getPrimarySite()](craft-services-sites.md#method-getprimarysite)                                                                           | Returns the primary site. The primary site is whatever is listed first in Settings > Sites in the control panel.
| [getSiteByHandle()](craft-services-sites.md#method-getsitebyhandle)                                                                         | Returns a site by its handle.
| [getSiteById()](craft-services-sites.md#method-getsitebyid)                                                                                 | Returns a site by its ID.
| [getSiteByUid()](craft-services-sites.md#method-getsitebyuid)                                                                               | Returns a site by it's UID.
| [getSitesByGroupId()](craft-services-sites.md#method-getsitesbygroupid)                                                                     | Returns sites by a group ID.
| [getTotalEditableSites()](craft-services-sites.md#method-gettotaleditablesites)                                                             | Gets the total number of sites that are editable by the current user.
| [getTotalSites()](craft-services-sites.md#method-gettotalsites)                                                                             | Gets the total number of sites.
| [handleChangedGroup()](craft-services-sites.md#method-handlechangedgroup)                                                                   | Handle site group change
| [handleChangedSite()](craft-services-sites.md#method-handlechangedsite)                                                                     | Handle site changes.
| [handleDeletedGroup()](craft-services-sites.md#method-handledeletedgroup)                                                                   | Handle site group getting deleted.
| [handleDeletedSite()](craft-services-sites.md#method-handledeletedsite)                                                                     | Handle a deleted Site.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-services-sites.md#method-init)                                                                                               | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderSites()](craft-services-sites.md#method-reordersites)                                                                               | Reorders sites.
| [restoreSiteById()](craft-services-sites.md#method-restoresitebyid)                                                                         | Restores a site by its ID.
| [saveGroup()](craft-services-sites.md#method-savegroup)                                                                                     | Saves a site group.
| [saveSite()](craft-services-sites.md#method-savesite)                                                                                       | Saves a site.
| [setCurrentSite()](craft-services-sites.md#method-setcurrentsite)                                                                           | Sets the current site.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteGroup()`





Deletes a site group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L359-L384)


#### Arguments

- `$group` ([craft\models\SiteGroup](craft-models-sitegroup.md)) – The site group

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site group was deleted successfully



### `deleteGroupById()`





Deletes a site group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L342-L351)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The site group’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site group was deleted successfully



### `deleteSite()`





Deletes a site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L865-L1041)


#### Arguments

- `$site` ([craft\models\Site](craft-models-site.md)) – The site to be deleted
- `$transferContentTo` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site ID that should take over the deleted site’s contents

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site was deleted successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $site is the primary site
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `deleteSiteById()`





Deletes a site by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L845-L854)


#### Arguments

- `$siteId` ([integer](http://php.net/language.types.integer)) – The site ID to be deleted
- `$transferContentTo` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site ID that should take over the deleted site’s contents

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `getAllGroups()`





Returns all site groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L190-L204)



#### Returns

[craft\models\SiteGroup](craft-models-sitegroup.md)[] – The site groups



### `getAllSiteIds()`





Returns all of the site IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L394-L397)



#### Returns

[integer](http://php.net/language.types.integer)[] – All the sites’ IDs



### `getAllSites()`





Returns all sites.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L527-L530)



#### Returns

[craft\models\Site](craft-models-site.md)[] – All the sites



### `getCurrentSite()`





Returns the current site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L430-L438)



#### Returns

[craft\models\Site](craft-models-site.md) – The current site

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if no sites exist


### `getEditableSiteIds()`





Returns all of the site IDs that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L501-L520)



#### Returns

[array](http://php.net/language.types.array) – All the editable sites’ IDs



### `getEditableSites()`





Returns all editable sites.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L537-L549)



#### Returns

[craft\models\Site](craft-models-site.md)[] – All the editable sites



### `getGroupById()`





Returns a site group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L212-L215)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The site group’s ID

#### Returns

[craft\models\SiteGroup](craft-models-sitegroup.md), [null](http://php.net/language.types.null) – The site group, or null if it doesn’t exist



### `getHasCurrentSite()`





Returns whether the current site has been set yet.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L419-L422)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPrimarySite()`





Returns the primary site. The primary site is whatever is listed first in Settings > Sites in the
control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L487-L494)



#### Returns

[craft\models\Site](craft-models-site.md) – The primary site

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if no sites exist


### `getSiteByHandle()`





Returns a site by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L610-L613)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\Site](craft-models-site.md), [null](http://php.net/language.types.null)



### `getSiteById()`





Returns a site by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L599-L602)


#### Arguments

- `$siteId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\Site](craft-models-site.md), [null](http://php.net/language.types.null)



### `getSiteByUid()`





Returns a site by it's UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L405-L412)


#### Arguments

- `$uid`

#### Returns

[craft\models\Site](craft-models-site.md) – The site

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if no sites exist


### `getSitesByGroupId()`





Returns sites by a group ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L557-L571)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\Site](craft-models-site.md)[]



### `getTotalEditableSites()`





Gets the total number of sites that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L588-L591)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalSites()`





Gets the total number of sites.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L578-L581)



#### Returns

[integer](http://php.net/language.types.integer)



### `handleChangedGroup()`





Handle site group change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L267-L298)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleChangedSite()`





Handle site changes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L689-L799)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))


#### Throws

- [Throwable](http://php.net/class.throwable)


### `handleDeletedGroup()`





Handle site group getting deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L305-L334)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedSite()`





Handle a deleted Site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L1051-L1097)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)
- [Throwable](http://php.net/class.throwable)
- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L171-L180)






### `reorderSites()`





Reorders sites.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L808-L835)


#### Arguments

- `$siteIds` ([string](http://php.net/language.types.string)[]) – The site IDs in their new order

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the sites were reordered successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `restoreSiteById()`



Since

:   3.1.0



Restores a site by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L1106-L1112)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The site’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site was restored successfully



### `saveGroup()`





Saves a site group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L224-L260)


#### Arguments

- `$group` ([craft\models\SiteGroup](craft-models-sitegroup.md)) – The site group to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the group should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the site group was saved successfully



### `saveSite()`





Saves a site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L624-L681)


#### Arguments

- `$site` ([craft\models\Site](craft-models-site.md)) – The site to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the site should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if $site->id is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `setCurrentSite()`





Sets the current site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sites.php#L446-L478)


#### Arguments

- `$site` ([craft\models\Site](craft-models-site.md), [string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The current site, or its handle/ID, or null


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $site is invalid






## Constants

| Constant               | Description
| ---------------------- | -----------
| `CONFIG_SITEGROUP_KEY` |
| `CONFIG_SITES_KEY`     |


## Events

### EVENT_AFTER_CHANGE_PRIMARY_SITE



Type

:   [craft\events\SiteEvent](craft-events-siteevent.md)



The event that is triggered after the primary site has changed



---



### EVENT_AFTER_DELETE_SITE



Type

:   [craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md)



The event that is triggered after a site is deleted.



---



### EVENT_AFTER_DELETE_SITE_GROUP



Type

:   [craft\events\SiteGroupEvent](craft-events-sitegroupevent.md)



The event that is triggered after a site group is deleted.



---



### EVENT_AFTER_REORDER_SITES



Type

:   [craft\events\ReorderSitesEvent](craft-events-reordersitesevent.md)



The event that is triggered after the sites are reordered.



---



### EVENT_AFTER_SAVE_SITE



Type

:   [craft\events\SiteEvent](craft-events-siteevent.md)



The event that is triggered after a site is saved.



---



### EVENT_AFTER_SAVE_SITE_GROUP



Type

:   [craft\events\SiteGroupEvent](craft-events-sitegroupevent.md)



The event that is triggered after a site group is saved.



---



### EVENT_BEFORE_APPLY_GROUP_DELETE



Type

:   [craft\events\SiteGroupEvent](craft-events-sitegroupevent.md)

Since

:   3.1.0



The event that is triggered before a site group delete is applied to the database.



---



### EVENT_BEFORE_APPLY_SITE_DELETE



Type

:   [craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md)

Since

:   3.1.0



The event that is triggered before a site delete is applied to the database.



---



### EVENT_BEFORE_DELETE_SITE



Type

:   [craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md)



The event that is triggered before a site is deleted.

You may set [craft\events\SiteEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the site from getting deleted.



---



### EVENT_BEFORE_DELETE_SITE_GROUP



Type

:   [craft\events\SiteGroupEvent](craft-events-sitegroupevent.md)



The event that is triggered before a site group is deleted.



---



### EVENT_BEFORE_REORDER_SITES



Type

:   [craft\events\ReorderSitesEvent](craft-events-reordersitesevent.md)



The event that is triggered before the sites are reordered.



---



### EVENT_BEFORE_SAVE_SITE



Type

:   [craft\events\SiteEvent](craft-events-siteevent.md)



The event that is triggered before a site is saved.



---



### EVENT_BEFORE_SAVE_SITE_GROUP



Type

:   [craft\events\SiteGroupEvent](craft-events-sitegroupevent.md)



The event that is triggered before a site group is saved.



---




