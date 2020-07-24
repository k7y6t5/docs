---
title: craft\services\Tags
code:
  - php
  - twig
---

# Tags

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Tags](craft-services-tags.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Tags service.

An instance of the Tags service is globally accessible in Craft via [`Craft::$app->tags`](craft-base-applicationtrait.md#method-gettags).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allTagGroupIds](craft-services-tags.md#alltaggroupids)                                                                    | [array](http://php.net/language.types.array)
| [allTagGroups](craft-services-tags.md#alltaggroups)                                                                        | [craft\models\TagGroup](craft-models-taggroup.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [totalTagGroups](craft-services-tags.md#totaltaggroups)                                                                    | [integer](http://php.net/language.types.integer)

### `allTagGroupIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php)



### `allTagGroups`



Type

:   [craft\models\TagGroup](craft-models-taggroup.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php)



### `totalTagGroups`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php)







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
| [deleteTagGroup()](craft-services-tags.md#method-deletetaggroup)                                                                            | Deletes a tag group.
| [deleteTagGroupById()](craft-services-tags.md#method-deletetaggroupbyid)                                                                    | Deletes a tag group by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllTagGroupIds()](craft-services-tags.md#method-getalltaggroupids)                                                                      | Returns all of the group IDs.
| [getAllTagGroups()](craft-services-tags.md#method-getalltaggroups)                                                                          | Returns all tag groups.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getTagById()](craft-services-tags.md#method-gettagbyid)                                                                                    | Returns a tag by its ID.
| [getTagGroupByHandle()](craft-services-tags.md#method-gettaggroupbyhandle)                                                                  | Gets a group by its handle.
| [getTagGroupById()](craft-services-tags.md#method-gettaggroupbyid)                                                                          | Returns a group by its ID.
| [getTagGroupByUid()](craft-services-tags.md#method-gettaggroupbyuid)                                                                        | Returns a group by its UID.
| [getTotalTagGroups()](craft-services-tags.md#method-gettotaltaggroups)                                                                      | Gets the total number of tag groups.
| [handleChangedTagGroup()](craft-services-tags.md#method-handlechangedtaggroup)                                                              | Handle tag group change
| [handleDeletedTagGroup()](craft-services-tags.md#method-handledeletedtaggroup)                                                              | Handle Tag group getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-tags.md#method-prunedeletedfield)                                                                      | Prune a deleted field from tag group layouts.
| [saveTagGroup()](craft-services-tags.md#method-savetaggroup)                                                                                | Saves a tag group.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteTagGroup()`





Deletes a tag group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L320-L335)


#### Arguments

- `$tagGroup` ([craft\models\TagGroup](craft-models-taggroup.md)) – The tag group

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the tag group was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `deleteTagGroupById()`



Since

:   3.0.12



Deletes a tag group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L298-L311)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer)) – The tag group's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the tag group was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `getAllTagGroupIds()`





Returns all of the group IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L77-L80)



#### Returns

[array](http://php.net/language.types.array)



### `getAllTagGroups()`





Returns all tag groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L87-L109)



#### Returns

[craft\models\TagGroup](craft-models-taggroup.md)[]



### `getTagById()`





Returns a tag by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L451-L455)


#### Arguments

- `$tagId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\Tag](craft-elements-tag.md), [null](http://php.net/language.types.null)



### `getTagGroupByHandle()`





Gets a group by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L150-L153)


#### Arguments

- `$groupHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\TagGroup](craft-models-taggroup.md), [null](http://php.net/language.types.null)



### `getTagGroupById()`





Returns a group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L127-L130)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\TagGroup](craft-models-taggroup.md), [null](http://php.net/language.types.null)



### `getTagGroupByUid()`





Returns a group by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L138-L141)


#### Arguments

- `$groupUid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\TagGroup](craft-models-taggroup.md), [null](http://php.net/language.types.null)



### `getTotalTagGroups()`





Gets the total number of tag groups.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L116-L119)



#### Returns

[integer](http://php.net/language.types.integer)



### `handleChangedTagGroup()`





Handle tag group change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L224-L288)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedTagGroup()`





Handle Tag group getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L342-L400)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `pruneDeletedField()`





Prune a deleted field from tag group layouts.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L407-L439)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `saveTagGroup()`





Saves a tag group.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Tags.php#L164-L217)


#### Arguments

- `$tagGroup` ([craft\models\TagGroup](craft-models-taggroup.md)) – The tag group to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the tag group should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the tag group was saved successfully

#### Throws

- [craft\errors\TagGroupNotFoundException](craft-errors-taggroupnotfoundexception.md)\
  if $tagGroup->id is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons






## Constants

| Constant              | Description
| --------------------- | -----------
| `CONFIG_TAGGROUP_KEY` |


## Events

### EVENT_AFTER_DELETE_GROUP



Type

:   [craft\events\TagGroupEvent](craft-events-taggroupevent.md)



The event that is triggered after a tag group is deleted.



---



### EVENT_AFTER_SAVE_GROUP



Type

:   [craft\events\TagGroupEvent](craft-events-taggroupevent.md)



The event that is triggered after a tag group is saved.



---



### EVENT_BEFORE_APPLY_GROUP_DELETE



Type

:   [craft\events\TagGroupEvent](craft-events-taggroupevent.md)

Since

:   3.1.0



The event that is triggered before a tag group delete is applied to the database.



---



### EVENT_BEFORE_DELETE_GROUP



Type

:   [craft\events\TagGroupEvent](craft-events-taggroupevent.md)



The event that is triggered before a tag group is deleted.



---



### EVENT_BEFORE_SAVE_GROUP



Type

:   [craft\events\TagGroupEvent](craft-events-taggroupevent.md)



The event that is triggered before a tag group is saved.



---




