---
title: craft\base\ElementActionInterface
code:
  - php
  - twig
---

# ElementActionInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md)

Implemented by

:   [craft\base\ElementAction](craft-base-elementaction.md), [craft\elements\actions\CopyReferenceTag](craft-elements-actions-copyreferencetag.md), [craft\elements\actions\DeepDuplicate](craft-elements-actions-deepduplicate.md), [craft\elements\actions\Delete](craft-elements-actions-delete.md), [craft\elements\actions\DeleteAssets](craft-elements-actions-deleteassets.md), [craft\elements\actions\DeleteUsers](craft-elements-actions-deleteusers.md), [craft\elements\actions\DownloadAssetFile](craft-elements-actions-downloadassetfile.md), [craft\elements\actions\Duplicate](craft-elements-actions-duplicate.md), [craft\elements\actions\Edit](craft-elements-actions-edit.md), [craft\elements\actions\EditImage](craft-elements-actions-editimage.md), [craft\elements\actions\NewChild](craft-elements-actions-newchild.md), [craft\elements\actions\PreviewAsset](craft-elements-actions-previewasset.md), [craft\elements\actions\RenameFile](craft-elements-actions-renamefile.md), [craft\elements\actions\ReplaceFile](craft-elements-actions-replacefile.md), [craft\elements\actions\Restore](craft-elements-actions-restore.md), [craft\elements\actions\SetStatus](craft-elements-actions-setstatus.md), [craft\elements\actions\SuspendUsers](craft-elements-actions-suspendusers.md), [craft\elements\actions\UnsuspendUsers](craft-elements-actions-unsuspendusers.md), [craft\elements\actions\View](craft-elements-actions-view.md)

Since

:   3.0.0



ElementActionInterface defines the common interface to be implemented by element action classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php)






## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getConfirmationMessage()](craft-base-elementactioninterface.md#method-getconfirmationmessage)                                              | Returns a confirmation message that should be displayed before the action is performed.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getMessage()](craft-base-elementactioninterface.md#method-getmessage)                                                                      | Returns the message that should be displayed to the user after the action is performed.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getTriggerHtml()](craft-base-elementactioninterface.md#method-gettriggerhtml)                                                              | Returns the action’s trigger HTML.
| [getTriggerLabel()](craft-base-elementactioninterface.md#method-gettriggerlabel)                                                            | Returns the action’s trigger label.
| [isDestructive()](craft-base-elementactioninterface.md#method-isdestructive)                                                                | Returns whether this action is destructive in nature.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [performAction()](craft-base-elementactioninterface.md#method-performaction)                                                                | Performs the action on any elements that match the given criteria.
| [setElementType()](craft-base-elementactioninterface.md#method-setelementtype)                                                              | Sets the element type on the action.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `getConfirmationMessage()`





Returns a confirmation message that should be displayed before the action is performed.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L53)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The confirmation message, if any.



### `getMessage()`





Returns the message that should be displayed to the user after the action is performed.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L68)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The message that should be displayed to the user.



### `getTriggerHtml()`





Returns the action’s trigger HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L46)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The action’s trigger HTML.



### `getTriggerLabel()`





Returns the action’s trigger label.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L39)



#### Returns

[string](http://php.net/language.types.string) – The action’s trigger label



### `isDestructive()`





Returns whether this action is destructive in nature.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L25)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this action is destructive in nature.



### `performAction()`





Performs the action on any elements that match the given criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L61)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query defining which elements the action should affect.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the action was performed successfully.



### `setElementType()`





Sets the element type on the action.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementActionInterface.php#L32)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string))










