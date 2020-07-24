---
title: craft\mail\transportadapters\TransportAdapterInterface
code:
  - php
  - twig
---

# TransportAdapterInterface

Type

:   Interface

Namespace

:   craft\mail\transportadapters

Extends

:   [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md)

Implemented by

:   [craft\mail\transportadapters\BaseTransportAdapter](craft-mail-transportadapters-basetransportadapter.md), [craft\mail\transportadapters\Gmail](craft-mail-transportadapters-gmail.md), [craft\mail\transportadapters\Sendmail](craft-mail-transportadapters-sendmail.md), [craft\mail\transportadapters\Smtp](craft-mail-transportadapters-smtp.md)

Since

:   3.0.0



TransportAdapterInterface defines the common interface to be implemented by SwiftMailer transport adapter classes.





[View source](https://github.com/craftcms/cms/blob/master/src/mail/transportadapters/TransportAdapterInterface.php)






## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [defineTransport()](craft-mail-transportadapters-transportadapterinterface.md#method-definetransport)                                       | Returns the config array or \Swift_Transport object that should be passed to [craft\mail\Mailer::setTransport()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#setTransport()-detail).
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `defineTransport()`





Returns the config array or \Swift_Transport object that should be passed to [craft\mail\Mailer::setTransport()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#setTransport()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/mail/transportadapters/TransportAdapterInterface.php#L25)



#### Returns

[array](http://php.net/language.types.array), `\Swift_Transport`









