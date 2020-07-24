---
title: craft\fields\data\SingleOptionFieldData
code:
  - php
  - twig
---

# SingleOptionFieldData

Type

:   Class

Namespace

:   craft\fields\data

Inherits

:   [craft\fields\data\SingleOptionFieldData](craft-fields-data-singleoptionfielddata.md) &raquo;
[craft\fields\data\OptionData](craft-fields-data-optiondata.md)

Implements

:   [craft\base\Serializable](craft-base-serializable.md)

Since

:   3.0.0



Single-select option field data class.





[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/SingleOptionFieldData.php)


## Public Properties

| Property                                                                                       | Description
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------
| [label](craft-fields-data-optiondata.md#label "Defined by craft\fields\data\OptionData")       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [selected](craft-fields-data-optiondata.md#selected "Defined by craft\fields\data\OptionData") | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)
| [value](craft-fields-data-optiondata.md#value "Defined by craft\fields\data\OptionData")       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)





## Public Methods

| Method                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------
| [__construct()](craft-fields-data-optiondata.md#method-construct "Defined by craft\fields\data\OptionData") | Constructor
| [__toString()](craft-fields-data-optiondata.md#method-tostring "Defined by craft\fields\data\OptionData")   |
| [getOptions()](craft-fields-data-singleoptionfielddata.md#method-getoptions)                                | Returns the options.
| [serialize()](craft-fields-data-optiondata.md#method-serialize "Defined by craft\fields\data\OptionData")   | Returns the object’s serialized value.
| [setOptions()](craft-fields-data-singleoptionfielddata.md#method-setoptions)                                | Sets the options.

### `getOptions()`





Returns the options.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/SingleOptionFieldData.php#L28-L31)



#### Returns

[craft\fields\data\OptionData](craft-fields-data-optiondata.md)[]



### `setOptions()`





Sets the options.




[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/SingleOptionFieldData.php#L38-L41)


#### Arguments

- `$options` ([craft\fields\data\OptionData](craft-fields-data-optiondata.md)[])











