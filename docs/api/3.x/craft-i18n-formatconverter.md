---
title: craft\i18n\FormatConverter
code:
  - php
  - twig
---

# FormatConverter

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\FormatConverter](craft-i18n-formatconverter.md) &raquo;
[yii\helpers\FormatConverter](https://www.yiiframework.com/doc/api/2.0/yii-helpers-formatconverter) &raquo;
[yii\helpers\BaseFormatConverter](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter)

Since

:   3.0.6









[View source](https://github.com/craftcms/cms/blob/master/src/i18n/FormatConverter.php)


## Public Properties

| Property                                                                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------
| [juiFallbackDatePatterns](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter#$juiFallbackDatePatterns-detail "Defined by yii\helpers\BaseFormatConverter") | [array](http://php.net/language.types.array) – The jQuery UI fallback definition to use for the ICU short patterns `short`, `medium`, `long` and `full`.
| [phpFallbackDatePatterns](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter#$phpFallbackDatePatterns-detail "Defined by yii\helpers\BaseFormatConverter") | [array](http://php.net/language.types.array) – The php fallback definition to use for the ICU short patterns `short`, `medium`, `long` and `full`.





## Public Methods

| Method                                                                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------
| [convertDateIcuToJui()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter#convertDateIcuToJui()-detail "Defined by yii\helpers\BaseFormatConverter") | Converts a date format pattern from [ICU format][] to [jQuery UI date format][].
| [convertDateIcuToPhp()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter#convertDateIcuToPhp()-detail "Defined by yii\helpers\BaseFormatConverter") | Converts a date format pattern from [ICU format][] to [php date() function format][].
| [convertDatePhpToIcu()](craft-i18n-formatconverter.md#method-convertdatephptoicu)                                                                                           | Converts a date format pattern from [php date() function format][] to [ICU format][].
| [convertDatePhpToJui()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseformatconverter#convertDatePhpToJui()-detail "Defined by yii\helpers\BaseFormatConverter") | Converts a date format pattern from [php date() function format][] to [jQuery UI date format][].

### `convertDatePhpToIcu()`





Converts a date format pattern from [php date() function format][] to [ICU format][].



Pattern constructs that are not supported by the ICU format will be removed.

[php date() function format]: https://secure.php.net/manual/en/function.date.php
[ICU format]: http://userguide.icu-project.org/formatparse/datetime#TOC-Date-Time-Format-Syntax

Since 2.0.13 it handles escaped characters correctly.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/FormatConverter.php#L20-L41)


#### Arguments

- `$pattern` ([string](http://php.net/language.types.string)) – Date format pattern in php date()-function format.

#### Returns

[string](http://php.net/language.types.string) – The converted date format pattern.










