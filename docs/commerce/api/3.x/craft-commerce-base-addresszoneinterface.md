---
title: craft\commerce\base\AddressZoneInterface
code:
  - php
  - twig
---

# AddressZoneInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Implemented by

:   [craft\commerce\models\ShippingAddressZone](craft-commerce-models-shippingaddresszone.md), [craft\commerce\models\TaxAddressZone](craft-commerce-models-taxaddresszone.md)

Since

:   2.0



Zone Interface defines the common interface to be implemented by zones in commerce.





[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php)






## Public Methods

| Method                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------
| [getCountries()](craft-commerce-base-addresszoneinterface.md#method-getcountries)                             | Return the array of Commerce Countries this zone contains
| [getCountryIds()](craft-commerce-base-addresszoneinterface.md#method-getcountryids)                           | Return the array of Commerce Country IDs this zone contains
| [getIsCountryBased()](craft-commerce-base-addresszoneinterface.md#method-getiscountrybased)                   | Whether this zone is based on countries only.
| [getStateIds()](craft-commerce-base-addresszoneinterface.md#method-getstateids)                               | Return the array of Commerce State IDs this zone contains
| [getStates()](craft-commerce-base-addresszoneinterface.md#method-getstates)                                   | Return the array of Commerce States this zone contains
| [getZipCodeConditionFormula()](craft-commerce-base-addresszoneinterface.md#method-getzipcodeconditionformula) | Return the zip code match

### `getCountries()`





Return the array of Commerce Countries this zone contains




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L54)



#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md)[]



### `getCountryIds()`





Return the array of Commerce Country IDs this zone contains




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L33)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getIsCountryBased()`





Whether this zone is based on countries only.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L26)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getStateIds()`





Return the array of Commerce State IDs this zone contains




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L40)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getStates()`





Return the array of Commerce States this zone contains




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L47)



#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md)[]



### `getZipCodeConditionFormula()`



Since

:   2.2



Return the zip code match




[View source](https://github.com/craftcms/commerce/blob/master/src/base/AddressZoneInterface.php#L62)



#### Returns

[string](http://php.net/language.types.string)









