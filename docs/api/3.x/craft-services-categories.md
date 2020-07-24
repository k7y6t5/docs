---
title: craft\services\Categories
code:
  - php
  - twig
---

# Categories

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Categories](craft-services-categories.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Categories service.

An instance of the Categories service is globally accessible in Craft via [`Craft::$app->categories`](craft-base-applicationtrait.md#method-getcategories).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allGroupIds](craft-services-categories.md#allgroupids)                                                                    | [integer](http://php.net/language.types.integer)[]
| [allGroups](craft-services-categories.md#allgroups)                                                                        | [craft\models\CategoryGroup](craft-models-categorygroup.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [editableGroupIds](craft-services-categories.md#editablegroupids)                                                          | [integer](http://php.net/language.types.integer)[]
| [editableGroups](craft-services-categories.md#editablegroups)                                                              | [craft\models\CategoryGroup](craft-models-categorygroup.md)[]
| [totalGroups](craft-services-categories.md#totalgroups)                                                                    | [integer](http://php.net/language.types.integer)

### `allGroupIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)



### `allGroups`



Type

:   [craft\models\CategoryGroup](craft-models-categorygroup.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)



### `editableGroupIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)



### `editableGroups`



Type

:   [craft\models\CategoryGroup](craft-models-categorygroup.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)



### `totalGroups`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php)







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
| [applyBranchLimitToCategories()](craft-services-categories.md#method-applybranchlimittocategories)                                          | Filters an array of categories down to only <= X branches.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteGroup()](craft-services-categories.md#method-deletegroup)                                                                            | Deletes a category group.
| [deleteGroupById()](craft-services-categories.md#method-deletegroupbyid)                                                                    | Deletes a category group by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [fillGapsInCategories()](craft-services-categories.md#method-fillgapsincategories)                                                          | Patches an array of categories, filling in any gaps in the tree.
| [getAllGroupIds()](craft-services-categories.md#method-getallgroupids)                                                                      | Returns all of the group IDs.
| [getAllGroups()](craft-services-categories.md#method-getallgroups)                                                                          | Returns all category groups.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCategoryById()](craft-services-categories.md#method-getcategorybyid)                                                                    | Returns a category by its ID.
| [getEditableGroupIds()](craft-services-categories.md#method-geteditablegroupids)                                                            | Returns all of the category group IDs that are editable by the current user.
| [getEditableGroups()](craft-services-categories.md#method-geteditablegroups)                                                                | Returns all editable groups.
| [getGroupByHandle()](craft-services-categories.md#method-getgroupbyhandle)                                                                  | Returns a group by its handle.
| [getGroupById()](craft-services-categories.md#method-getgroupbyid)                                                                          | Returns a group by its ID.
| [getGroupByUid()](craft-services-categories.md#method-getgroupbyuid)                                                                        | Returns a group by its UID.
| [getGroupSiteSettings()](craft-services-categories.md#method-getgroupsitesettings)                                                          | Returns a group's site settings.
| [getTotalGroups()](craft-services-categories.md#method-gettotalgroups)                                                                      | Gets the total number of category groups.
| [handleChangedCategoryGroup()](craft-services-categories.md#method-handlechangedcategorygroup)                                              | Handle category group change
| [handleDeletedCategoryGroup()](craft-services-categories.md#method-handledeletedcategorygroup)                                              | Handle Category group getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [isGroupTemplateValid()](craft-services-categories.md#method-isgrouptemplatevalid)                                                          | Returns whether a group’s categories have URLs for the given site ID, and if the group’s template path is valid.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-categories.md#method-prunedeletedfield)                                                                | Prune a deleted field from category group layouts.
| [pruneDeletedSite()](craft-services-categories.md#method-prunedeletedsite)                                                                  | Prune a deleted site from category group site settings.
| [saveGroup()](craft-services-categories.md#method-savegroup)                                                                                | Saves a category group.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `applyBranchLimitToCategories()`





Filters an array of categories down to only <= X branches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L785-L804)


#### Arguments

- `$categories` ([craft\elements\Category](craft-elements-category.md)[])
- `$branchLimit` ([integer](http://php.net/language.types.integer))




### `deleteGroup()`





Deletes a category group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L546-L557)


#### Arguments

- `$group` ([craft\models\CategoryGroup](craft-models-categorygroup.md)) – The category group

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the category group was deleted successfully



### `deleteGroupById()`



Since

:   3.0.12



Deletes a category group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L525-L538)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The category group's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the category group was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `fillGapsInCategories()`





Patches an array of categories, filling in any gaps in the tree.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L745-L777)


#### Arguments

- `$categories` ([craft\elements\Category](craft-elements-category.md)[])




### `getAllGroupIds()`





Returns all of the group IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L86-L89)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getAllGroups()`





Returns all category groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L106-L125)



#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md)[]



### `getCategoryById()`





Returns a category by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L715-L738)


#### Arguments

- `$categoryId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\Category](craft-elements-category.md), [null](http://php.net/language.types.null)



### `getEditableGroupIds()`





Returns all of the category group IDs that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L96-L99)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getEditableGroups()`





Returns all editable groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L132-L142)



#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md)[]



### `getGroupByHandle()`





Returns a group by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L183-L186)


#### Arguments

- `$groupHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md), [null](http://php.net/language.types.null)



### `getGroupById()`





Returns a group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L160-L163)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md), [null](http://php.net/language.types.null)



### `getGroupByUid()`



Since

:   3.1.0



Returns a group by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L172-L175)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md), [null](http://php.net/language.types.null)



### `getGroupSiteSettings()`





Returns a group's site settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L194-L213)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\CategoryGroup_SiteSettings](craft-models-categorygroup_sitesettings.md)[]



### `getTotalGroups()`





Gets the total number of category groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L149-L152)



#### Returns

[integer](http://php.net/language.types.integer)



### `handleChangedCategoryGroup()`





Handle category group change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L324-L515)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedCategoryGroup()`





Handle Category group getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L583-L644)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `isGroupTemplateValid()`





Returns whether a group’s categories have URLs for the given site ID, and if the group’s template path is valid.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L566-L576)


#### Arguments

- `$group` ([craft\models\CategoryGroup](craft-models-categorygroup.md))
- `$siteId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `pruneDeletedField()`





Prune a deleted field from category group layouts.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L651-L683)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `pruneDeletedSite()`





Prune a deleted site from category group site settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L690-L703)


#### Arguments

- `$event` ([craft\events\DeleteSiteEvent](craft-events-deletesiteevent.md))




### `saveGroup()`





Saves a category group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Categories.php#L224-L317)


#### Arguments

- `$group` ([craft\models\CategoryGroup](craft-models-categorygroup.md)) – The category group to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the category group should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the category group was saved successfully

#### Throws

- [craft\errors\CategoryGroupNotFoundException](craft-errors-categorygroupnotfoundexception.md)\
  if $group has an invalid ID
- [Throwable](http://php.net/class.throwable)\
  if reasons






## Constants

| Constant                  | Description
| ------------------------- | -----------
| `CONFIG_CATEGORYROUP_KEY` |


## Events

### EVENT_AFTER_DELETE_GROUP



Type

:   [craft\events\CategoryGroupEvent](craft-events-categorygroupevent.md)



The event that is triggered after a category group is deleted.



---



### EVENT_AFTER_SAVE_GROUP



Type

:   [craft\events\CategoryGroupEvent](craft-events-categorygroupevent.md)



The event that is triggered after a category group is saved.



---



### EVENT_BEFORE_APPLY_GROUP_DELETE



Type

:   [craft\events\CategoryGroupEvent](craft-events-categorygroupevent.md)

Since

:   3.1.0



The event that is triggered before a category group delete is applied to the database.



---



### EVENT_BEFORE_DELETE_GROUP



Type

:   [craft\events\CategoryGroupEvent](craft-events-categorygroupevent.md)



The event that is triggered before a category group is deleted.



---



### EVENT_BEFORE_SAVE_GROUP



Type

:   [craft\events\CategoryGroupEvent](craft-events-categorygroupevent.md)



The event that is triggered before a category group is saved.



---




