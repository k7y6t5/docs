---
title: craft\base\PreviewableFieldInterface
code:
  - php
  - twig
---

# PreviewableFieldInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md)

Since

:   3.0.0



PreviewableFieldInterface defines the common interface to be implemented by field classes
that wish to be previewable on element indexes in the control panel.





[View source](https://github.com/craftcms/cms/blob/master/src/base/PreviewableFieldInterface.php)






## Public Methods

| Method                                                                                          | Description
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------
| [getTableAttributeHtml()](craft-base-previewablefieldinterface.md#method-gettableattributehtml) | Returns the HTML that should be shown for this field in Table View.

### `getTableAttributeHtml()`





Returns the HTML that should be shown for this field in Table View.




[View source](https://github.com/craftcms/cms/blob/master/src/base/PreviewableFieldInterface.php#L26)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for this field in Table View









