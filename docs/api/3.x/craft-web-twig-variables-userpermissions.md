---
title: craft\web\twig\variables\UserPermissions
code:
  - php
  - twig
---

# UserPermissions

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\UserPermissions](craft-web-twig-variables-userpermissions.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



User permission functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserPermissions.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------
| [getAllPermissions()](craft-web-twig-variables-userpermissions.md#method-getallpermissions)                     | Returns all of the known permissions, sorted by category.
| [getGroupPermissionsByUserId()](craft-web-twig-variables-userpermissions.md#method-getgrouppermissionsbyuserid) | Returns all of the group permissions a given user has.

### `getAllPermissions()`





Returns all of the known permissions, sorted by category.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserPermissions.php#L28-L33)



#### Returns

[array](http://php.net/language.types.array)



### `getGroupPermissionsByUserId()`





Returns all of the group permissions a given user has.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserPermissions.php#L41-L46)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)










