---
title: craft\web\twig\variables\CategoryGroups
code:
  - php
  - twig
---

# CategoryGroups

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\CategoryGroups](craft-web-twig-variables-categorygroups.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Class CategoryGroupsVariable





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php)






## Public Methods

| Method                                                                                         | Description
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------
| [getAllGroupIds()](craft-web-twig-variables-categorygroups.md#method-getallgroupids)           | Returns all of the group IDs.
| [getAllGroups()](craft-web-twig-variables-categorygroups.md#method-getallgroups)               | Returns all category groups.
| [getEditableGroupIds()](craft-web-twig-variables-categorygroups.md#method-geteditablegroupids) | Returns all of the category group IDs that are editable by the current user.
| [getEditableGroups()](craft-web-twig-variables-categorygroups.md#method-geteditablegroups)     | Returns all editable groups.
| [getGroupByHandle()](craft-web-twig-variables-categorygroups.md#method-getgroupbyhandle)       | Returns a group by its handle.
| [getGroupById()](craft-web-twig-variables-categorygroups.md#method-getgroupbyid)               | Returns a group by its ID.
| [getTotalGroups()](craft-web-twig-variables-categorygroups.md#method-gettotalgroups)           | Gets the total number of category groups.

### `getAllGroupIds()`





Returns all of the group IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L28-L33)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getAllGroups()`





Returns all category groups.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L53-L60)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md)[]



### `getEditableGroupIds()`





Returns all of the category group IDs that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L40-L45)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getEditableGroups()`





Returns all editable groups.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L68-L75)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md)[]



### `getGroupByHandle()`





Returns a group by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L108-L113)


#### Arguments

- `$groupHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md), [null](http://php.net/language.types.null)



### `getGroupById()`





Returns a group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L95-L100)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\CategoryGroup](craft-models-categorygroup.md), [null](http://php.net/language.types.null)



### `getTotalGroups()`





Gets the total number of category groups.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CategoryGroups.php#L82-L87)



#### Returns

[integer](http://php.net/language.types.integer)










