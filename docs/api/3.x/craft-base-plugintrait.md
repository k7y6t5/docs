---
title: craft\base\PluginTrait
code:
  - php
  - twig
---

# PluginTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\base\Plugin](craft-base-plugin.md)

Since

:   3.0.0



PluginTrait implements the common methods and properties for plugin classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php)


## Public Properties

| Property                                                           | Description
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [changelogUrl](craft-base-plugintrait.md#changelogurl)             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s changelog URL.
| [description](craft-base-plugintrait.md#description)               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s description
| [developer](craft-base-plugintrait.md#developer)                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s name
| [developerEmail](craft-base-plugintrait.md#developeremail)         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s support email
| [developerUrl](craft-base-plugintrait.md#developerurl)             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin developer’s website URL
| [documentationUrl](craft-base-plugintrait.md#documentationurl)     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s documentation URL
| [downloadUrl](craft-base-plugintrait.md#downloadurl)               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s download URL
| [edition](craft-base-plugintrait.md#edition)                       | [string](http://php.net/language.types.string) – The active edition.
| [hasCpSection](craft-base-plugintrait.md#hascpsection)             | [boolean](http://php.net/language.types.boolean) – Whether the plugin has its own section in the control panel
| [hasCpSettings](craft-base-plugintrait.md#hascpsettings)           | [boolean](http://php.net/language.types.boolean) – Whether the plugin has a settings page in the control panel
| [isInstalled](craft-base-plugintrait.md#isinstalled)               | [boolean](http://php.net/language.types.boolean) – Whether the plugin is currently installed.
| [minVersionRequired](craft-base-plugintrait.md#minversionrequired) | [string](http://php.net/language.types.string) – The minimum required version the plugin has to be so it can be updated.
| [name](craft-base-plugintrait.md#name)                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s display name
| [packageName](craft-base-plugintrait.md#packagename)               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s package name
| [schemaVersion](craft-base-plugintrait.md#schemaversion)           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The plugin’s schema version number
| [sourceLanguage](craft-base-plugintrait.md#sourcelanguage)         | [string](http://php.net/language.types.string) – The language that the plugin’s messages were written in
| [t9nCategory](craft-base-plugintrait.md#t9ncategory)               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The translation category that this plugin’s translation messages should use.

### `changelogUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s changelog URL.

The URL should begin with `https://` and point to a plain text Markdown-formatted changelog.
Version headers must follow the general format:

```
## X.Y.Z - YYYY-MM-DD
```

with the following possible deviations:

- other text can come before the version number, like the plugin’s name
- a 4th version number is allowed (e.g. `1.2.3.4`)
- pre-release versions are allowed (e.g. `1.0.0-alpha.1`)
- the version can start with `v` (e.g. `v1.2.3`)
- the version can be hyperlinked (e.g. `[1.2.3]`)
- dates can use dots as separators, rather than hyphens (e.g. `YYYY.MM.DD`)
- a `[CRITICAL]` flag can be appended after the date to indicate a critical release

More notes:

- Releases should be listed in descending order (newest on top). Craft will stop parsing the changelog as soon as it hits a version that is older than or equal to the installed version.
- Any content that does not follow a version header line will be ignored.
- For consistency and clarity, release notes should follow [keepachangelog.com](http://keepachangelog.com/), but it’s not enforced.
- Release notes can contain notes using the format `> {note} Some note`. `{warning}` and `{tip}` are also supported.



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L85)



### `description`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s description



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L36)



### `developer`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin developer’s name



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L41)



### `developerEmail`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin developer’s support email



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L51)



### `developerUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin developer’s website URL



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L46)



### `documentationUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s documentation URL



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L56)



### `downloadUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s download URL



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L90)



### `edition`



Type

:   [string](http://php.net/language.types.string)



The active edition.



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L125)



### `hasCpSection`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the plugin has its own section in the control panel



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L110)



### `hasCpSettings`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the plugin has a settings page in the control panel



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L105)



### `isInstalled`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the plugin is currently installed. (Will only be false when a plugin is currently being installed.)



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L115)



### `minVersionRequired`



Type

:   [string](http://php.net/language.types.string)



The minimum required version the plugin has to be so it can be updated.



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L120)



### `name`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s display name



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L26)



### `packageName`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s package name



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L21)



### `schemaVersion`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The plugin’s schema version number



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L31)



### `sourceLanguage`



Type

:   [string](http://php.net/language.types.string)



The language that the plugin’s messages were written in



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L100)



### `t9nCategory`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The translation category that this plugin’s translation messages should use. Defaults to the lowercased plugin handle.



[View source](https://github.com/craftcms/cms/blob/master/src/base/PluginTrait.php#L95)













