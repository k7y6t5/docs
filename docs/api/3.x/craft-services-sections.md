---
title: craft\services\Sections
code:
  - php
  - twig
---

# Sections

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Sections](craft-services-sections.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Sections service.

An instance of the Sections service is globally accessible in Craft via [`Craft::$app->sections`](craft-base-applicationtrait.md#method-getsections).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------
| [allEntryTypes](craft-services-sections.md#allentrytypes)                                                                  | [craft\models\EntryType](craft-models-entrytype.md)[]
| [allSectionIds](craft-services-sections.md#allsectionids)                                                                  | [integer](http://php.net/language.types.integer)[] – All the sections’ IDs.
| [allSections](craft-services-sections.md#allsections)                                                                      | [craft\models\Section](craft-models-section.md)[] – All the sections.
| [autoResaveEntries](craft-services-sections.md#autoresaveentries)                                                          | [boolean](http://php.net/language.types.boolean) – Whether entries should be resaved after a section or entry type has been updated.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [editableSectionIds](craft-services-sections.md#editablesectionids)                                                        | [integer](http://php.net/language.types.integer)[] – All the editable sections’ IDs.
| [editableSections](craft-services-sections.md#editablesections)                                                            | [craft\models\Section](craft-models-section.md)[] – All the editable sections.
| [totalEditableSections](craft-services-sections.md#totaleditablesections)                                                  | [integer](http://php.net/language.types.integer)
| [totalSections](craft-services-sections.md#totalsections)                                                                  | [integer](http://php.net/language.types.integer)

### `allEntryTypes`



Type

:   [craft\models\EntryType](craft-models-entrytype.md)[]

Access

:   Read-only

Since

:   3.3.0







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `allSectionIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only



All the sections’ IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `allSections`



Type

:   [craft\models\Section](craft-models-section.md)[]

Access

:   Read-only



All the sections.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `autoResaveEntries`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.21



Whether entries should be resaved after a section or entry type has been updated.

::: tip
Entries will be resaved regardless of what this is set to, when a section’s Propagation Method setting changes.
:::

::: warning
Don’t disable this unless you know what you’re doing, as entries won’t reflect section/entry type changes until
they’ve been resaved. (You can resave entries manually by running the `resave/entries` console command.)
:::



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L123)



### `editableSectionIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only



All the editable sections’ IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `editableSections`



Type

:   [craft\models\Section](craft-models-section.md)[]

Access

:   Read-only



All the editable sections.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `totalEditableSections`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)



### `totalSections`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php)







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
| [deleteEntryType()](craft-services-sections.md#method-deleteentrytype)                                                                      | Deletes an entry type.
| [deleteEntryTypeById()](craft-services-sections.md#method-deleteentrytypebyid)                                                              | Deletes an entry type by its ID.
| [deleteSection()](craft-services-sections.md#method-deletesection)                                                                          | Deletes a section.
| [deleteSectionById()](craft-services-sections.md#method-deletesectionbyid)                                                                  | Deletes a section by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllEntryTypes()](craft-services-sections.md#method-getallentrytypes)                                                                    | Returns all entry types.
| [getAllSectionIds()](craft-services-sections.md#method-getallsectionids)                                                                    | Returns all of the section IDs.
| [getAllSections()](craft-services-sections.md#method-getallsections)                                                                        | Returns all sections.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEditableSectionIds()](craft-services-sections.md#method-geteditablesectionids)                                                          | Returns all of the section IDs that are editable by the current user.
| [getEditableSections()](craft-services-sections.md#method-geteditablesections)                                                              | Returns all editable sections.
| [getEntryTypeById()](craft-services-sections.md#method-getentrytypebyid)                                                                    | Returns an entry type by its ID.
| [getEntryTypesByHandle()](craft-services-sections.md#method-getentrytypesbyhandle)                                                          | Returns entry types that have a given handle.
| [getEntryTypesBySectionId()](craft-services-sections.md#method-getentrytypesbysectionid)                                                    | Returns a section’s entry types.
| [getSectionByHandle()](craft-services-sections.md#method-getsectionbyhandle)                                                                | Gets a section by its handle.
| [getSectionById()](craft-services-sections.md#method-getsectionbyid)                                                                        | Returns a section by its ID.
| [getSectionByUid()](craft-services-sections.md#method-getsectionbyuid)                                                                      | Gets a section by its UID.
| [getSectionSiteSettings()](craft-services-sections.md#method-getsectionsitesettings)                                                        | Returns a section’s site-specific settings.
| [getSectionsByType()](craft-services-sections.md#method-getsectionsbytype)                                                                  | Returns all sections of a given type.
| [getTotalEditableSections()](craft-services-sections.md#method-gettotaleditablesections)                                                    | Gets the total number of sections that are editable by the current user.
| [getTotalSections()](craft-services-sections.md#method-gettotalsections)                                                                    | Gets the total number of sections.
| [handleChangedEntryType()](craft-services-sections.md#method-handlechangedentrytype)                                                        | Handle entry type change
| [handleChangedSection()](craft-services-sections.md#method-handlechangedsection)                                                            | Handle section change
| [handleDeletedEntryType()](craft-services-sections.md#method-handledeletedentrytype)                                                        | Handle an entry type getting deleted
| [handleDeletedSection()](craft-services-sections.md#method-handledeletedsection)                                                            | Handle a section getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [isSectionTemplateValid()](craft-services-sections.md#method-issectiontemplatevalid)                                                        | Returns whether a section’s entries have URLs for the given site ID, and if the section’s template path is valid.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-sections.md#method-prunedeletedfield)                                                                  | Prune a deleted field from entry type layouts.
| [pruneDeletedSite()](craft-services-sections.md#method-prunedeletedsite)                                                                    | Prune a deleted site from section site settings.
| [reorderEntryTypes()](craft-services-sections.md#method-reorderentrytypes)                                                                  | Reorders entry types.
| [saveEntryType()](craft-services-sections.md#method-saveentrytype)                                                                          | Saves an entry type.
| [saveSection()](craft-services-sections.md#method-savesection)                                                                              | Saves a section.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteEntryType()`





Deletes an entry type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1380-L1395)


#### Arguments

- `$entryType` ([craft\models\EntryType](craft-models-entrytype.md))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the entry type was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons

---

#### Example

::: code
```php
$success = Craft::$app->sections->deleteEntry($entryType);
```
:::


### `deleteEntryTypeById()`





Deletes an entry type by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1356-L1365)


#### Arguments

- `$entryTypeId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the entry type was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons

---

#### Example

::: code
```php
$success = Craft::$app->sections->deleteEntryTypeById(1);
```
:::


### `deleteSection()`





Deletes a section.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L833-L851)


#### Arguments

- `$section` ([craft\models\Section](craft-models-section.md))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the section was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons

---

#### Example

::: code
```php
$success = Craft::$app->sections->deleteSection($section);
```
:::


### `deleteSectionById()`





Deletes a section by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L809-L818)


#### Arguments

- `$sectionId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the section was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons

---

#### Example

::: code
```php
$success = Craft::$app->sections->deleteSectionById(1);
```
:::


### `getAllEntryTypes()`



Since

:   3.3.0



Returns all entry types.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1043-L1053)



#### Returns

[craft\models\EntryType](craft-models-entrytype.md)[]


---

#### Example

::: code
```php
$entryTypes = Craft::$app->sections->getAllEntryTypes(1);
```
:::


### `getAllSectionIds()`





Returns all of the section IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L152-L155)



#### Returns

[integer](http://php.net/language.types.integer)[] – All the sections’ IDs.


---

#### Example

::: code
```php
$sectionIds = Craft::$app->sections->allSectionIds;
```
```twig
{% set sectionIds = craft.app.sections.allSectionIds %}
```
:::


### `getAllSections()`





Returns all sections.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L190-L212)



#### Returns

[craft\models\Section](craft-models-section.md)[] – All the sections.


---

#### Example

::: code
```php
$sections = Craft::$app->sections->allSections;
```
```twig
{% set sections = craft.app.sections.allSections %}
```
:::


### `getEditableSectionIds()`





Returns all of the section IDs that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L171-L174)



#### Returns

[integer](http://php.net/language.types.integer)[] – All the editable sections’ IDs.


---

#### Example

::: code
```php
$sectionIds = Craft::$app->sections->editableSectionIds;
```
```twig
{% set sectionIds = craft.app.sections.editableSectionIds %}
```
:::


### `getEditableSections()`





Returns all editable sections.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L228-L238)



#### Returns

[craft\models\Section](craft-models-section.md)[] – All the editable sections.


---

#### Example

::: code
```php
$sections = Craft::$app->sections->editableSections;
```
```twig
{% set sections = craft.app.sections.editableSections %}
```
:::


### `getEntryTypeById()`





Returns an entry type by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1067-L1082)


#### Arguments

- `$entryTypeId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\EntryType](craft-models-entrytype.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$entryType = Craft::$app->sections->getEntryTypeById(1);
```
:::


### `getEntryTypesByHandle()`





Returns entry types that have a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1096-L1107)


#### Arguments

- `$entryTypeHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\EntryType](craft-models-entrytype.md)[]


---

#### Example

::: code
```php
$entryTypes = Craft::$app->sections->getEntryTypesByHandle('article');
```
:::


### `getEntryTypesBySectionId()`





Returns a section’s entry types.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1017-L1029)


#### Arguments

- `$sectionId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\EntryType](craft-models-entrytype.md)[]


---

#### Example

::: code
```php
$entryTypes = Craft::$app->sections->getEntryTypesBySectionId(1);
```
:::


### `getSectionByHandle()`





Gets a section by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L356-L359)


#### Arguments

- `$sectionHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$section = Craft::$app->sections->getSectionByHandle('news');
```
```twig
{% set section = craft.app.sections.getSectionByHandle('news') %}
```
:::


### `getSectionById()`





Returns a section by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L315-L318)


#### Arguments

- `$sectionId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$section = Craft::$app->sections->getSectionById(1);
```
```twig
{% set section = craft.app.sections.getSectionById(1) %}
```
:::


### `getSectionByUid()`



Since

:   3.1.0



Gets a section by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L336-L339)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$section = Craft::$app->sections->getSectionByUid('b3a9eef3-9444-4995-84e2-6dc6b60aebd2');
```
```twig
{% set section = craft.app.sections.getSectionByUid('b3a9eef3-9444-4995-84e2-6dc6b60aebd2') %}
```
:::


### `getSectionSiteSettings()`





Returns a section’s site-specific settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L367-L390)


#### Arguments

- `$sectionId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\Section_SiteSettings](craft-models-section_sitesettings.md)[] – The section’s site-specific settings.



### `getSectionsByType()`





Returns all sections of a given type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L257-L260)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The section type (`single`, `channel`, or `structure`)

#### Returns

[craft\models\Section](craft-models-section.md)[] – All the sections of the given type.


---

#### Example

::: code
```php
use craft\models\Section;

$singles = Craft::$app->sections->getSectionsByType(Section::TYPE_SINGLE);
```
```twig
{% set singles = craft.app.sections.getSectionsByType('single') %}
```
:::


### `getTotalEditableSections()`





Gets the total number of sections that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L295-L298)



#### Returns

[integer](http://php.net/language.types.integer)


---

#### Example

::: code
```php
$total = Craft::$app->sections->totalEditableSections;
```
```twig
{% set total = craft.app.sections.totalEditableSections %}
```
:::


### `getTotalSections()`





Gets the total number of sections.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L276-L279)



#### Returns

[integer](http://php.net/language.types.integer)


---

#### Example

::: code
```php
$total = Craft::$app->sections->totalSections;
```
```twig
{% set total = craft.app.sections.totalSections %}
```
:::


### `handleChangedEntryType()`





Handle entry type change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1197-L1309)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleChangedSection()`





Handle section change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L597-L794)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedEntryType()`





Handle an entry type getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1402-L1464)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedSection()`





Handle a section getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L858-L916)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `isSectionTemplateValid()`

::: danger DEPRECATED
Deprecated in 3.3.0
:::




Returns whether a section’s entries have URLs for the given site ID, and if the section’s template path is valid.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L990-L1000)


#### Arguments

- `$section` ([craft\models\Section](craft-models-section.md))
- `$siteId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `pruneDeletedField()`



Since

:   3.1.20



Prune a deleted field from entry type layouts.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L944-L980)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `pruneDeletedSite()`





Prune a deleted site from section site settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L923-L936)


#### Arguments

- `$event` ([craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md))




### `reorderEntryTypes()`





Reorders entry types.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1318-L1341)


#### Arguments

- `$entryTypeIds` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the entry types were reordered successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveEntryType()`





Saves an entry type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L1118-L1190)


#### Arguments

- `$entryType` ([craft\models\EntryType](craft-models-entrytype.md)) – The entry type to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the entry type should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the entry type was saved successfully

#### Throws

- [craft\errors\EntryTypeNotFoundException](craft-errors-entrytypenotfoundexception.md)\
  if $entryType->id is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveSection()`





Saves a section.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Sections.php#L425-L590)


#### Arguments

- `$section` ([craft\models\Section](craft-models-section.md)) – The section to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the section should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\SectionNotFoundException](craft-errors-sectionnotfoundexception.md)\
  if $section->id is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons

---

#### Example

::: code
```php
use craft\models\Section;
use craft\models\Section_SiteSettings;

$section = new Section([
    'name' => 'News',
    'handle' => 'news',
    'type' => Section::TYPE_CHANNEL,
    'siteSettings' => [
        new Section_SiteSettings([
            'siteId' => Craft::$app->sites->getPrimarySite()->id,
            'enabledByDefault' => true,
            'hasUrls' => true,
            'uriFormat' => 'foo/{slug}',
            'template' => 'foo/_entry',
        ]),
    ]
]);

$success = Craft::$app->sections->saveSection($section);
```
:::






## Constants

| Constant                | Description
| ----------------------- | -----------
| `CONFIG_ENTRYTYPES_KEY` |
| `CONFIG_SECTIONS_KEY`   |


## Events

### EVENT_AFTER_DELETE_ENTRY_TYPE



Type

:   [craft\events\EntryTypeEvent](craft-events-entrytypeevent.md)



The event that is triggered after an entry type is deleted.



---



### EVENT_AFTER_DELETE_SECTION



Type

:   [craft\events\SectionEvent](craft-events-sectionevent.md)



The event that is triggered after a section is deleted.



---



### EVENT_AFTER_SAVE_ENTRY_TYPE



Type

:   [craft\events\EntryTypeEvent](craft-events-entrytypeevent.md)



The event that is triggered after an entry type is saved.



---



### EVENT_AFTER_SAVE_SECTION



Type

:   [craft\events\SectionEvent](craft-events-sectionevent.md)



The event that is triggered after a section is saved.



---



### EVENT_BEFORE_APPLY_ENTRY_TYPE_DELETE



Type

:   [craft\events\EntryTypeEvent](craft-events-entrytypeevent.md)

Since

:   3.1.0



The event that is triggered before an entry type delete is applied to the database.



---



### EVENT_BEFORE_APPLY_SECTION_DELETE



Type

:   [craft\events\SectionEvent](craft-events-sectionevent.md)

Since

:   3.1.0



The event that is triggered before a section delete is applied to the database.



---



### EVENT_BEFORE_DELETE_ENTRY_TYPE



Type

:   [craft\events\EntryTypeEvent](craft-events-entrytypeevent.md)



The event that is triggered before an entry type is deleted.



---



### EVENT_BEFORE_DELETE_SECTION



Type

:   [craft\events\SectionEvent](craft-events-sectionevent.md)



The event that is triggered before a section is deleted.



---



### EVENT_BEFORE_SAVE_ENTRY_TYPE



Type

:   [craft\events\EntryTypeEvent](craft-events-entrytypeevent.md)



The event that is triggered before an entry type is saved.



---



### EVENT_BEFORE_SAVE_SECTION



Type

:   [craft\events\SectionEvent](craft-events-sectionevent.md)



The event that is triggered before a section is saved.



---




