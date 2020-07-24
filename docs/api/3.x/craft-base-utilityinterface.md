---
title: craft\base\UtilityInterface
code:
  - php
  - twig
---

# UtilityInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\ComponentInterface](craft-base-componentinterface.md)

Implemented by

:   [craft\base\Utility](craft-base-utility.md), [craft\utilities\AssetIndexes](craft-utilities-assetindexes.md), [craft\utilities\ClearCaches](craft-utilities-clearcaches.md), [craft\utilities\DbBackup](craft-utilities-dbbackup.md), [craft\utilities\DeprecationErrors](craft-utilities-deprecationerrors.md), [craft\utilities\FindAndReplace](craft-utilities-findandreplace.md), [craft\utilities\Migrations](craft-utilities-migrations.md), [craft\utilities\PhpInfo](craft-utilities-phpinfo.md), [craft\utilities\QueueManager](craft-utilities-queuemanager.md), [craft\utilities\SystemMessages](craft-utilities-systemmessages.md), [craft\utilities\SystemReport](craft-utilities-systemreport.md), [craft\utilities\Updates](craft-utilities-updates.md)

Since

:   3.0.0



UtilityInterface defines the common interface to be implemented by utility classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------
| [badgeCount()](craft-base-utilityinterface.md#method-badgecount)                                                | Returns the number that should be shown in the utility’s nav item badge.
| [contentHtml()](craft-base-utilityinterface.md#method-contenthtml)                                              | Returns the utility's content HTML.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface") | Returns the display name of this class.
| [footerHtml()](craft-base-utilityinterface.md#method-footerhtml)                                                | Returns the utility’s footer HTML.
| [iconPath()](craft-base-utilityinterface.md#method-iconpath)                                                    | Returns the path to the utility’s SVG icon.
| [id()](craft-base-utilityinterface.md#method-id)                                                                | Returns the utility’s unique identifier.
| [toolbarHtml()](craft-base-utilityinterface.md#method-toolbarhtml)                                              | Returns the utility’s toolbar HTML.

### `badgeCount()`





Returns the number that should be shown in the utility’s nav item badge.

If `0` is returned, no badge will be shown


[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L41)



#### Returns

[integer](http://php.net/language.types.integer)



### `contentHtml()`





Returns the utility's content HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L48)



#### Returns

[string](http://php.net/language.types.string)



### `footerHtml()`



Since

:   3.4.0



Returns the utility’s footer HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L64)



#### Returns

[string](http://php.net/language.types.string)



### `iconPath()`





Returns the path to the utility’s SVG icon.




[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L32)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `id()`





Returns the utility’s unique identifier.

The ID should be in `kebab-case`, as it will be visible in the URL (`admin/utilities/the-handle`).


[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L25)



#### Returns

[string](http://php.net/language.types.string)



### `toolbarHtml()`



Since

:   3.4.0



Returns the utility’s toolbar HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/UtilityInterface.php#L56)



#### Returns

[string](http://php.net/language.types.string)









