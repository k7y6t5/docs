---
title: craft\i18n\Locale
code:
  - php
  - twig
---

# Locale

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\Locale](craft-i18n-locale.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Stores locale info.





[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)


## Public Properties

| Property                                              | Description
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------
| [aMName](craft-i18n-locale.md#amname)                 | [string](http://php.net/language.types.string) – The "AM" name.
| [dateFormat](craft-i18n-locale.md#dateformat)         | [string](http://php.net/language.types.string) – The localized ICU date format.
| [dateTimeFormat](craft-i18n-locale.md#datetimeformat) | [string](http://php.net/language.types.string) – The localized ICU date + time format.
| [displayName](craft-i18n-locale.md#displayname)       | [string](http://php.net/language.types.string)
| [formatter](craft-i18n-locale.md#formatter)           | [craft\i18n\Formatter](craft-i18n-formatter.md) – A formatter for this locale.
| [id](craft-i18n-locale.md#id)                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The locale ID.
| [languageID](craft-i18n-locale.md#languageid)         | [string](http://php.net/language.types.string) – This locale’s language ID.
| [monthNames](craft-i18n-locale.md#monthnames)         | [array](http://php.net/language.types.array) – The localized month names.
| [name](craft-i18n-locale.md#name)                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [nativeName](craft-i18n-locale.md#nativename)         | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)
| [orientation](craft-i18n-locale.md#orientation)       | [string](http://php.net/language.types.string) – The language’s orientation.
| [pMName](craft-i18n-locale.md#pmname)                 | [string](http://php.net/language.types.string) – The "PM" name.
| [scriptID](craft-i18n-locale.md#scriptid)             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The locale’s script ID, if it has one.
| [territoryID](craft-i18n-locale.md#territoryid)       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The locale’s territory ID, if it has one.
| [timeFormat](craft-i18n-locale.md#timeformat)         | [string](http://php.net/language.types.string) – The localized ICU time format.
| [weekDayNames](craft-i18n-locale.md#weekdaynames)     | [array](http://php.net/language.types.array) – The localized day of the week names.

### `aMName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The "AM" name.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `dateFormat`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The localized ICU date format.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `dateTimeFormat`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The localized ICU date + time format.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `displayName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `formatter`



Type

:   [craft\i18n\Formatter](craft-i18n-formatter.md)

Access

:   Read-only



A formatter for this locale.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `id`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The locale ID.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L232)



### `languageID`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



This locale’s language ID.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `monthNames`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The localized month names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `name`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `nativeName`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `orientation`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The language’s orientation.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `pMName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The "PM" name.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `scriptID`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



The locale’s script ID, if it has one.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `territoryID`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



The locale’s territory ID, if it has one.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `timeFormat`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The localized ICU time format.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)



### `weekDayNames`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The localized day of the week names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-i18n-locale.md#method-construct)                                                                                    | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__toString()](craft-i18n-locale.md#method-tostring)                                                                                      | Use the ID as the string representation of locales.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [getAMName()](craft-i18n-locale.md#method-getamname)                                                                                      | Returns the "AM" name for this locale.
| [getCurrencySymbol()](craft-i18n-locale.md#method-getcurrencysymbol)                                                                      | Returns this locale’s symbol for a given currency.
| [getDateFormat()](craft-i18n-locale.md#method-getdateformat)                                                                              | Returns the localized ICU date format.
| [getDateTimeFormat()](craft-i18n-locale.md#method-getdatetimeformat)                                                                      | Returns the localized ICU date + time format.
| [getDisplayName()](craft-i18n-locale.md#method-getdisplayname)                                                                            | Returns the locale name in a given language.
| [getFormatter()](craft-i18n-locale.md#method-getformatter)                                                                                | Returns a [craft\i18n\Formatter](craft-i18n-formatter.md) for this locale.
| [getId()](craft-i18n-locale.md#method-getid)                                                                                              | Returns the locale ID.
| [getLanguageID()](craft-i18n-locale.md#method-getlanguageid)                                                                              | Returns this locale’s language ID.
| [getMonthName()](craft-i18n-locale.md#method-getmonthname)                                                                                | Returns a localized month name.
| [getMonthNames()](craft-i18n-locale.md#method-getmonthnames)                                                                              | Returns all of the localized month names.
| [getName()](craft-i18n-locale.md#method-getname)                                                                                          | Returns the locale name in a given language.
| [getNativeName()](craft-i18n-locale.md#method-getnativename)                                                                              | Returns the locale name in its own language.
| [getNumberPattern()](craft-i18n-locale.md#method-getnumberpattern)                                                                        | Returns a number pattern used by this locale.
| [getNumberSymbol()](craft-i18n-locale.md#method-getnumbersymbol)                                                                          | Returns a number symbol used by this locale.
| [getOrientation()](craft-i18n-locale.md#method-getorientation)                                                                            | Returns the language’s orientation (ltr or rtl).
| [getPMName()](craft-i18n-locale.md#method-getpmname)                                                                                      | Returns the "PM" name for this locale.
| [getScriptID()](craft-i18n-locale.md#method-getscriptid)                                                                                  | Returns this locale’s script ID.
| [getTerritoryID()](craft-i18n-locale.md#method-getterritoryid)                                                                            | Returns this locale’s territory ID.
| [getTextAttribute()](craft-i18n-locale.md#method-gettextattribute)                                                                        | Returns a text attribute used by this locale.
| [getTimeFormat()](craft-i18n-locale.md#method-gettimeformat)                                                                              | Returns the localized ICU time format.
| [getWeekDayName()](craft-i18n-locale.md#method-getweekdayname)                                                                            | Returns a localized day of the week name.
| [getWeekDayNames()](craft-i18n-locale.md#method-getweekdaynames)                                                                          | Returns all of the localized day of the week names.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L251-L272)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – The locale ID.
- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  If $id is an unsupported locale.


### `__toString()`





Use the ID as the string representation of locales.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L279-L282)



#### Returns

[string](http://php.net/language.types.string)



### `getAMName()`





Returns the "AM" name for this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L655-L662)



#### Returns

[string](http://php.net/language.types.string) – The "AM" name.



### `getCurrencySymbol()`





Returns this locale’s symbol for a given currency.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L812-L825)


#### Arguments

- `$currency` ([string](http://php.net/language.types.string)) – The 3-letter ISO 4217 currency code indicating the currency to use.

#### Returns

[string](http://php.net/language.types.string) – The currency symbol.



### `getDateFormat()`





Returns the localized ICU date format.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L472-L475)


#### Arguments

- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_SHORT, ::MEDIUM, ::LONG, ::FULL
- `$format` ([string](http://php.net/language.types.string)) – The format type that should be returned. Values: Locale::FORMAT_ICU (default), ::FORMAT_PHP, ::FORMAT_JUI

#### Returns

[string](http://php.net/language.types.string) – The localized ICU date format.



### `getDateTimeFormat()`





Returns the localized ICU date + time format.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L496-L499)


#### Arguments

- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_SHORT, ::MEDIUM, ::LONG, ::FULL
- `$format` ([string](http://php.net/language.types.string)) – The format type that should be returned. Values: Locale::FORMAT_ICU (default), ::FORMAT_PHP, ::FORMAT_JUI

#### Returns

[string](http://php.net/language.types.string) – The localized ICU date + time format.



### `getDisplayName()`





Returns the locale name in a given language.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L352-L390)


#### Arguments

- `$inLocale` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)



### `getFormatter()`





Returns a [craft\i18n\Formatter](craft-i18n-formatter.md) for this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L411-L460)



#### Returns

[craft\i18n\Formatter](craft-i18n-formatter.md) – A formatter for this locale.



### `getId()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use id instead.
:::




Returns the locale ID.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L836-L841)



#### Returns

[string](http://php.net/language.types.string)



### `getLanguageID()`





Returns this locale’s language ID.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L289-L296)



#### Returns

[string](http://php.net/language.types.string) – This locale’s language ID.



### `getMonthName()`





Returns a localized month name.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L509-L548)


#### Arguments

- `$month` ([integer](http://php.net/language.types.integer)) – The month to return (1-12).
- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_ABBREVIATED, ::MEDIUM, ::FULL
- `$standAlone` ([boolean](http://php.net/language.types.boolean)) – Whether to return the "stand alone" month name.

#### Returns

[string](http://php.net/language.types.string) – The localized month name.



### `getMonthNames()`





Returns all of the localized month names.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L557-L566)


#### Arguments

- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_ABBREVIATED, ::MEDIUM, ::FULL
- `$standAlone` ([boolean](http://php.net/language.types.boolean)) – Whether to return the "stand alone" month names.

#### Returns

[array](http://php.net/language.types.array) – The localized month names.



### `getName()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use getDisplayName() instead.
:::




Returns the locale name in a given language.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L850-L860)


#### Arguments

- `$targetLocaleId` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getNativeName()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use getDisplayName() instead.
:::




Returns the locale name in its own language.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L868-L873)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)



### `getNumberPattern()`





Returns a number pattern used by this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L724-L744)


#### Arguments

- `$style` ([integer](http://php.net/language.types.integer)) – The pattern style to return.
Accepted values: Locale::STYLE_DECIMAL, ::STYLE_CURRENCY, ::STYLE_PERCENT, ::STYLE_SCIENTIFIC

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The pattern



### `getNumberSymbol()`





Returns a number symbol used by this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L756-L804)


#### Arguments

- `$symbol` ([integer](http://php.net/language.types.integer)) – The symbol to return. Accepted values: Locale::SYMBOL_DECIMAL_SEPARATOR,
::SYMBOL_GROUPING_SEPARATOR, ::SYMBOL_PATTERN_SEPARATOR, ::SYMBOL_PERCENT, ::SYMBOL_ZERO_DIGIT,
::SYMBOL_DIGIT, ::SYMBOL_MINUS_SIGN, ::SYMBOL_PLUS_SIGN, ::SYMBOL_CURRENCY, ::SYMBOL_INTL_CURRENCY,
::SYMBOL_MONETARY_SEPARATOR, ::SYMBOL_EXPONENTIAL, ::SYMBOL_PERMILL, ::SYMBOL_PAD_ESCAPE,
::SYMBOL_INFINITY, ::SYMBOL_NAN, ::SYMBOL_SIGNIFICANT_DIGIT, ::SYMBOL_MONETARY_GROUPING_SEPARATOR

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The symbol.



### `getOrientation()`





Returns the language’s orientation (ltr or rtl).




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L397-L404)



#### Returns

[string](http://php.net/language.types.string) – The language’s orientation.



### `getPMName()`





Returns the "PM" name for this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L669-L676)



#### Returns

[string](http://php.net/language.types.string) – The "PM" name.



### `getScriptID()`





Returns this locale’s script ID.

A script ID consists of only the last four characters after a dash in the locale ID.


[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L305-L318)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The locale’s script ID, if it has one.



### `getTerritoryID()`





Returns this locale’s territory ID.

A territory ID consists of only the last two to three letter or digits after a dash in the locale ID.


[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L327-L344)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The locale’s territory ID, if it has one.



### `getTextAttribute()`





Returns a text attribute used by this locale.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L687-L715)


#### Arguments

- `$attribute` ([integer](http://php.net/language.types.integer)) – The attribute to return. Values: Locale::

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The attribute.



### `getTimeFormat()`





Returns the localized ICU time format.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L484-L487)


#### Arguments

- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_SHORT, ::MEDIUM, ::LONG, ::FULL
- `$format` ([string](http://php.net/language.types.string)) – The format type that should be returned. Values: Locale::FORMAT_ICU (default), ::FORMAT_PHP, ::FORMAT_JUI

#### Returns

[string](http://php.net/language.types.string) – The localized ICU time format.



### `getWeekDayName()`





Returns a localized day of the week name.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L576-L630)


#### Arguments

- `$day` ([integer](http://php.net/language.types.integer)) – The day of the week to return (0-6), where 0 stands for Sunday.
- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_ABBREVIATED, ::SHORT, ::MEDIUM, ::FULL
- `$standAlone` ([boolean](http://php.net/language.types.boolean)) – Whether to return the "stand alone" day of the week name.

#### Returns

[string](http://php.net/language.types.string) – The localized day of the week name.



### `getWeekDayNames()`





Returns all of the localized day of the week names.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Locale.php#L639-L648)


#### Arguments

- `$length` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format length that should be returned. Values: Locale::LENGTH_ABBREVIATED, ::MEDIUM, ::FULL
- `$standAlone` ([boolean](http://php.net/language.types.boolean)) – Whether to return the "stand alone" day of the week names.

#### Returns

[array](http://php.net/language.types.array) – The localized day of the week names.







## Constants

| Constant                             | Description
| ------------------------------------ | -----------
| `ATTR_CURRENCY_CODE`                 |
| `ATTR_DEFAULT_RULESET`               |
| `ATTR_NEGATIVE_PREFIX`               |
| `ATTR_NEGATIVE_SUFFIX`               |
| `ATTR_PADDING_CHARACTER`             |
| `ATTR_POSITIVE_PREFIX`               |
| `ATTR_POSITIVE_SUFFIX`               |
| `ATTR_PUBLIC_RULESETS`               |
| `FORMAT_ICU`                         |
| `FORMAT_JUI`                         |
| `FORMAT_PHP`                         |
| `LENGTH_ABBREVIATED`                 |
| `LENGTH_FULL`                        |
| `LENGTH_LONG`                        |
| `LENGTH_MEDIUM`                      |
| `LENGTH_SHORT`                       |
| `STYLE_CURRENCY`                     |
| `STYLE_DECIMAL`                      |
| `STYLE_PERCENT`                      |
| `STYLE_SCIENTIFIC`                   |
| `SYMBOL_CURRENCY`                    |
| `SYMBOL_DECIMAL_SEPARATOR`           |
| `SYMBOL_DIGIT`                       |
| `SYMBOL_EXPONENTIAL`                 |
| `SYMBOL_GROUPING_SEPARATOR`          |
| `SYMBOL_INFINITY`                    |
| `SYMBOL_INTL_CURRENCY`               |
| `SYMBOL_MINUS_SIGN`                  |
| `SYMBOL_MONETARY_GROUPING_SEPARATOR` |
| `SYMBOL_MONETARY_SEPARATOR`          |
| `SYMBOL_NAN`                         |
| `SYMBOL_PAD_ESCAPE`                  |
| `SYMBOL_PATTERN_SEPARATOR`           |
| `SYMBOL_PERCENT`                     |
| `SYMBOL_PERMILL`                     |
| `SYMBOL_PLUS_SIGN`                   |
| `SYMBOL_SIGNIFICANT_DIGIT`           |
| `SYMBOL_ZERO_DIGIT`                  |



