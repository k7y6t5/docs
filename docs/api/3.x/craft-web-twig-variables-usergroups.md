---
title: craft\web\twig\variables\UserGroups
code:
  - php
  - twig
---

# UserGroups

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\UserGroups](craft-web-twig-variables-usergroups.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



User group functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserGroups.php)






## Public Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | --------------------------------
| [getAllGroups()](craft-web-twig-variables-usergroups.md#method-getallgroups)         | Returns all user groups.
| [getGroupByHandle()](craft-web-twig-variables-usergroups.md#method-getgroupbyhandle) | Gets a user group by its handle.
| [getGroupById()](craft-web-twig-variables-usergroups.md#method-getgroupbyid)         | Gets a user group by its ID.

### `getAllGroups()`





Returns all user groups.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserGroups.php#L31-L38)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md)[]



### `getGroupByHandle()`





Gets a user group by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserGroups.php#L59-L64)


#### Arguments

- `$groupHandle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)



### `getGroupById()`





Gets a user group by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserGroups.php#L46-L51)


#### Arguments

- `$groupId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)










