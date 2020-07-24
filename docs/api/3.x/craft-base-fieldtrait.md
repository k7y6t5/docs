---
title: craft\base\FieldTrait
code:
  - php
  - twig
---

# FieldTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\base\Field](craft-base-field.md), [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\MissingField](craft-fields-missingfield.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Table](craft-fields-table.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md)

Since

:   3.0.0



FieldTrait implements the common methods and properties for field classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php)


## Public Properties

| Property                                                              | Description
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [columnPrefix](craft-base-fieldtrait.md#columnprefix)                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s content column prefix
| [context](craft-base-fieldtrait.md#context)                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s context
| [groupId](craft-base-fieldtrait.md#groupid)                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s group’s ID
| [handle](craft-base-fieldtrait.md#handle)                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s handle
| [instructions](craft-base-fieldtrait.md#instructions)                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s instructions
| [layoutId](craft-base-fieldtrait.md#layoutid)                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the field layout that the field was fetched from
| [name](craft-base-fieldtrait.md#name)                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s name
| [oldHandle](craft-base-fieldtrait.md#oldhandle)                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s previous handle
| [oldSettings](craft-base-fieldtrait.md#oldsettings)                   | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The field’s previous settings
| [required](craft-base-fieldtrait.md#required)                         | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the field is required in the field layout it was fetched from
| [searchable](craft-base-fieldtrait.md#searchable)                     | [boolean](http://php.net/language.types.boolean) – Whether the field's values should be registered as search keywords on the elements.
| [sortOrder](craft-base-fieldtrait.md#sortorder)                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The field’s sort position in the field layout it was fetched from
| [tabId](craft-base-fieldtrait.md#tabid)                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The tab ID of the field layout that the field was fetched from
| [translationKeyFormat](craft-base-fieldtrait.md#translationkeyformat) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field’s translation key format, if [translationMethod](craft-base-fieldtrait.md#translationmethod) is "custom"
| [translationMethod](craft-base-fieldtrait.md#translationmethod)       | [string](http://php.net/language.types.string) – The field’s translation method
| [uid](craft-base-fieldtrait.md#uid)                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field's UID

### `columnPrefix`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s content column prefix



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L72)



### `context`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s context



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L36)



### `groupId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The field’s group’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L21)



### `handle`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s handle



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L31)



### `instructions`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s instructions



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L41)



### `layoutId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The ID of the field layout that the field was fetched from



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L85)



### `name`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s name



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L26)



### `oldHandle`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s previous handle



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L61)



### `oldSettings`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Since

:   3.1.2



The field’s previous settings



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L67)



### `required`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether the field is required in the field layout it was fetched from



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L95)



### `searchable`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the field's values should be registered as search keywords on the elements.



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L46)



### `sortOrder`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The field’s sort position in the field layout it was fetched from



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L100)



### `tabId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The tab ID of the field layout that the field was fetched from



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L90)



### `translationKeyFormat`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field’s translation key format, if [translationMethod](craft-base-fieldtrait.md#translationmethod) is "custom"



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L56)



### `translationMethod`



Type

:   [string](http://php.net/language.types.string)



The field’s translation method



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L51)



### `uid`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field's UID



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldTrait.php#L77)













