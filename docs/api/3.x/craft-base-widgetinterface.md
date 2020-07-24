---
title: craft\base\WidgetInterface
code:
  - php
  - twig
---

# WidgetInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md)

Implemented by

:   [craft\base\Widget](craft-base-widget.md), [craft\widgets\CraftSupport](craft-widgets-craftsupport.md), [craft\widgets\Feed](craft-widgets-feed.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md), [craft\widgets\NewUsers](craft-widgets-newusers.md), [craft\widgets\QuickPost](craft-widgets-quickpost.md), [craft\widgets\RecentEntries](craft-widgets-recententries.md), [craft\widgets\Updates](craft-widgets-updates.md)

Since

:   3.0.0



WidgetInterface defines the common interface to be implemented by dashboard widget classes.

A class implementing this interface should also use [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md) and [craft\base\WidgetTrait](craft-base-widgettrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php)






## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getBodyHtml()](craft-base-widgetinterface.md#method-getbodyhtml)                                                                           | Returns the widget's body HTML.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getSubtitle()](craft-base-widgetinterface.md#method-getsubtitle)                                                                           | Returns the widget’s subtitle.
| [getTitle()](craft-base-widgetinterface.md#method-gettitle)                                                                                 | Returns the widget’s title.
| [icon()](craft-base-widgetinterface.md#method-icon)                                                                                         | Returns the path to the widget’s SVG icon, or the actual SVG contents.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [maxColspan()](craft-base-widgetinterface.md#method-maxcolspan)                                                                             | Returns the widget’s maximum colspan.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `getBodyHtml()`





Returns the widget's body HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php#L57)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The widget’s body HTML, or `false` if the widget
should not be visible. (If you don’t want the widget to be selectable in
the first place, use [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable).)



### `getSubtitle()`



Since

:   3.4.0



Returns the widget’s subtitle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php#L48)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The widget’s subtitle



### `getTitle()`





Returns the widget’s title.




[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php#L40)



#### Returns

[string](http://php.net/language.types.string) – The widget’s title.



### `icon()`



Since

:   3.2.0



Returns the path to the widget’s SVG icon, or the actual SVG contents.




[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php#L25)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `maxColspan()`





Returns the widget’s maximum colspan.




[View source](https://github.com/craftcms/cms/blob/master/src/base/WidgetInterface.php#L32)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The widget’s maximum colspan, if it has one









