---
title: craft\commerce\base\TaxEngineInterface
code:
  - php
  - twig
---

# TaxEngineInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Extends

:   [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html)

Implemented by

:   [craft\commerce\engines\Tax](craft-commerce-engines-tax.md), [craft\commerce\services\Taxes](craft-commerce-services-taxes.md)

Since

:   3.1



Tax Engine Interface





[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php)






## Public Methods

| Method                                                                                                                                             | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------
| [cpTaxNavSubItems()](craft-commerce-base-taxengineinterface.md#method-cptaxnavsubitems)                                                            | The tax subNav items
| [createTaxCategories()](craft-commerce-base-taxengineinterface.md#method-createtaxcategories)                                                      | Whether Craft Commerce should allow tax categories to be created by users.
| [createTaxRates()](craft-commerce-base-taxengineinterface.md#method-createtaxrates)                                                                | Whether Craft Commerce should allow tax rates to be created by users.
| [createTaxZones()](craft-commerce-base-taxengineinterface.md#method-createtaxzones)                                                                | Whether Craft Commerce should allow tax zones to be created by users.
| [deleteTaxCategories()](craft-commerce-base-taxengineinterface.md#method-deletetaxcategories)                                                      | Whether Craft Commerce should allow tax categories to be deleted.
| [deleteTaxRates()](craft-commerce-base-taxengineinterface.md#method-deletetaxrates)                                                                | Whether Craft Commerce should allow tax rates to be deleted.
| [deleteTaxZones()](craft-commerce-base-taxengineinterface.md#method-deletetaxzones)                                                                | Whether Craft Commerce should allow tax zones to be deleted.
| [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname "Defined by craft\base\ComponentInterface") | Returns the display name of this class.
| [editTaxCategories()](craft-commerce-base-taxengineinterface.md#method-edittaxcategories)                                                          | Whether Craft Commerce should allow tax categories to be edited.
| [editTaxRates()](craft-commerce-base-taxengineinterface.md#method-edittaxrates)                                                                    | Whether Craft Commerce should allow tax rates to be edited.
| [editTaxZones()](craft-commerce-base-taxengineinterface.md#method-edittaxzones)                                                                    | Whether Craft Commerce should allow tax zones to be edited.
| [taxAdjusterClass()](craft-commerce-base-taxengineinterface.md#method-taxadjusterclass)                                                            | Return class name for the Adjuster to be used for tax
| [taxCategoryActionHtml()](craft-commerce-base-taxengineinterface.md#method-taxcategoryactionhtml)                                                  | Any action html to be added to the tax categories index header
| [taxRateActionHtml()](craft-commerce-base-taxengineinterface.md#method-taxrateactionhtml)                                                          | Any action html to be added to the tax rates index header
| [taxZoneActionHtml()](craft-commerce-base-taxengineinterface.md#method-taxzoneactionhtml)                                                          | Any action html to be added to the tax zones index header
| [viewTaxCategories()](craft-commerce-base-taxengineinterface.md#method-viewtaxcategories)                                                          | Whether Craft Commerce should show the tax categories interface and allow tax categories to be edited.
| [viewTaxRates()](craft-commerce-base-taxengineinterface.md#method-viewtaxrates)                                                                    | Whether Craft Commerce should show the tax rates interface and allow tax rates to be edited.
| [viewTaxZones()](craft-commerce-base-taxengineinterface.md#method-viewtaxzones)                                                                    | Whether Craft Commerce should show the tax zones interface and allow tax zones to be edited.

### `cpTaxNavSubItems()`





The tax subNav items




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L145)



#### Returns

[array](http://php.net/language.types.array)



### `createTaxCategories()`





Whether Craft Commerce should allow tax categories to be created by users.

will not be called if viewTaxCategories is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L36)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `createTaxRates()`





Whether Craft Commerce should allow tax rates to be created by users.

will not be called if viewTaxRates is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L115)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `createTaxZones()`





Whether Craft Commerce should allow tax zones to be created by users.

will not be called if viewTaxZones is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L75)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteTaxCategories()`





Whether Craft Commerce should allow tax categories to be deleted.

will not be called if viewTaxCategories is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L52)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteTaxRates()`





Whether Craft Commerce should allow tax rates to be deleted.

will not be called if viewTaxRates is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L131)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteTaxZones()`





Whether Craft Commerce should allow tax zones to be deleted.

will not be called if viewTaxZones is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L91)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `editTaxCategories()`





Whether Craft Commerce should allow tax categories to be edited.

will not be called if viewTaxCategories is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L44)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `editTaxRates()`





Whether Craft Commerce should allow tax rates to be edited.

will not be called if viewTaxRates is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L123)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `editTaxZones()`





Whether Craft Commerce should allow tax zones to be edited.

will not be called if viewTaxZones is returned as false;


[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L83)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `taxAdjusterClass()`





Return class name for the Adjuster to be used for tax




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L20)



#### Returns

[string](http://php.net/language.types.string)



### `taxCategoryActionHtml()`





Any action html to be added to the tax categories index header




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L59)



#### Returns

[string](http://php.net/language.types.string)



### `taxRateActionHtml()`





Any action html to be added to the tax rates index header




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L138)



#### Returns

[string](http://php.net/language.types.string)



### `taxZoneActionHtml()`





Any action html to be added to the tax zones index header




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L98)



#### Returns

[string](http://php.net/language.types.string)



### `viewTaxCategories()`





Whether Craft Commerce should show the tax categories interface
and allow tax categories to be edited.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L28)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `viewTaxRates()`





Whether Craft Commerce should show the tax rates interface
and allow tax rates to be edited.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L107)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `viewTaxZones()`





Whether Craft Commerce should show the tax zones interface
and allow tax zones to be edited.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/TaxEngineInterface.php#L67)



#### Returns

[boolean](http://php.net/language.types.boolean)









