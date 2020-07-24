---
title: craft\services\EntryRevisions
code:
  - php
  - twig
---

# EntryRevisions

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\EntryRevisions](craft-services-entryrevisions.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0

Deprecated in

:    in 3.2.0



Entry Revisions service.

An instance of the Entry Revisions service is globally accessible in Craft via [`Craft::$app->entryRevisions`](craft-base-applicationtrait.md#method-getentryrevisions).



[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [doesEntryHaveVersions()](craft-services-entryrevisions.md#method-doesentryhaveversions)                                                    | Returns whether an entry has any versions stored.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getDraftById()](craft-services-entryrevisions.md#method-getdraftbyid)                                                                      | Returns a draft by its ID.
| [getDraftsByEntryId()](craft-services-entryrevisions.md#method-getdraftsbyentryid)                                                          | Returns drafts of a given entry.
| [getEditableDraftsByEntryId()](craft-services-entryrevisions.md#method-geteditabledraftsbyentryid)                                          | Returns the drafts of a given entry that are editable by the current user.
| [getVersionById()](craft-services-entryrevisions.md#method-getversionbyid)                                                                  | Returns a version by its ID.
| [getVersionsByEntryId()](craft-services-entryrevisions.md#method-getversionsbyentryid)                                                      | Returns versions by an entry ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `doesEntryHaveVersions()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use an entry query instead.
:::




Returns whether an entry has any versions stored.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L156-L163)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer)) – The entry ID to search for
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site ID to search for

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getDraftById()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use an entry query instead.
:::




Returns a draft by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L81-L87)


#### Arguments

- `$draftId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\elements\Entry](craft-elements-entry.md), [null](http://php.net/language.types.null)



### `getDraftsByEntryId()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use an entry query instead.
:::




Returns drafts of a given entry.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L98-L106)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$withContent` ([boolean](http://php.net/language.types.boolean)) – Whether the field content should be included on the drafts

#### Returns

[craft\elements\Entry](craft-elements-entry.md)[]



### `getEditableDraftsByEntryId()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use [craft\services\Drafts::getEditableDrafts()](craft-services-drafts.md#method-geteditabledrafts) instead.
:::




Returns the drafts of a given entry that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L117-L130)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\Entry](craft-elements-entry.md)[]

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getVersionById()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use an entry query instead.
:::




Returns a version by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L139-L146)


#### Arguments

- `$versionId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\elements\Entry](craft-elements-entry.md), [null](http://php.net/language.types.null)



### `getVersionsByEntryId()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use an entry query instead.
:::




Returns versions by an entry ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/EntryRevisions.php#L176-L186)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer)) – The entry ID to search for.
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site ID to search for.
- `$limit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The limit on the number of versions to retrieve.
- `$includeCurrent` ([boolean](http://php.net/language.types.boolean)) – Whether to include the current "top" version of the entry.
- `$withContent` ([boolean](http://php.net/language.types.boolean)) – Whether the field content should be included on the versions

#### Returns

[craft\elements\Entry](craft-elements-entry.md)[]









## Events

### EVENT_AFTER_DELETE_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered after a draft is deleted.



---



### EVENT_AFTER_PUBLISH_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered after a draft is published.



---



### EVENT_AFTER_REVERT_ENTRY_TO_VERSION

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\VersionEvent`



The event that is triggered after an entry is reverted to an old version.



---



### EVENT_AFTER_SAVE_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered after a draft is saved.



---



### EVENT_BEFORE_DELETE_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered before a draft is deleted.



---



### EVENT_BEFORE_PUBLISH_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered before a draft is published.



---



### EVENT_BEFORE_REVERT_ENTRY_TO_VERSION

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\VersionEvent`



The event that is triggered before an entry is reverted to an old version.



---



### EVENT_BEFORE_SAVE_DRAFT

::: danger DEPRECATED
Deprecated in 3.2.0
:::


Type

:   `\craft\services\DraftEvent`



The event that is triggered before a draft is saved.



---




