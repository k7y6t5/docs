---
title: craft\fields\data\OptionData
code:
  - php
  - twig
---

# OptionData

Type

:   Class

Namespace

:   craft\fields\data

Inherits

:   [craft\fields\data\OptionData](craft-fields-data-optiondata.md)

Implements

:   [craft\base\Serializable](craft-base-serializable.md)

Extended by

:   [craft\fields\data\SingleOptionFieldData](craft-fields-data-singleoptionfielddata.md)

Since

:   3.0.0



Class OptionData





[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php)


## Public Properties

| Property                                             | Description
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------
| [label](craft-fields-data-optiondata.md#label)       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [selected](craft-fields-data-optiondata.md#selected) | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)
| [value](craft-fields-data-optiondata.md#value)       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

### `label`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L23)



### `selected`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L33)



### `value`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L28)







## Public Methods

| Method                                                            | Description
| ----------------------------------------------------------------- | --------------------------------------
| [__construct()](craft-fields-data-optiondata.md#method-construct) | Constructor
| [__toString()](craft-fields-data-optiondata.md#method-tostring)   |
| [serialize()](craft-fields-data-optiondata.md#method-serialize)   | Returns the object’s serialized value.

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L42-L47)


#### Arguments

- `$label` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$value` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$selected` ([boolean](http://php.net/language.types.boolean))




### `__toString()`










[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L52-L55)



#### Returns

[string](http://php.net/language.types.string)



### `serialize()`





Returns the object’s serialized value.








[View source](https://github.com/craftcms/cms/blob/master/src/fields/data/OptionData.php#L60-L63)



#### Returns

`mixed` – The serialized value










