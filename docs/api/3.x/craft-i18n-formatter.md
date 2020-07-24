---
title: craft\i18n\Formatter
code:
  - php
  - twig
---

# Formatter

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\Formatter](craft-i18n-formatter.md) &raquo;
[yii\i18n\Formatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php)


## Public Properties

| Property                                                                                                                                                     | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [amName](craft-i18n-formatter.md#amname)                                                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The localized AM name.
| [baseUnits](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$baseUnits-detail "Defined by yii\i18n\Formatter")                                   | [array](http://php.net/language.types.array) – The base units that are used as multipliers for smallest possible unit from [measureUnits](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$measureUnits-detail).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                   | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [booleanFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$booleanFormat-detail "Defined by yii\i18n\Formatter")                           | [array](http://php.net/language.types.array) – The text to be displayed when formatting a boolean value.
| [calendar](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$calendar-detail "Defined by yii\i18n\Formatter")                                     | `\IntlCalendar`, [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The calendar to be used for date formatting.
| [currencyCode](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$currencyCode-detail "Defined by yii\i18n\Formatter")                             | [string](http://php.net/language.types.string) – The 3-letter ISO 4217 currency code indicating the default currency to use for [asCurrency()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asCurrency()-detail).
| [currencyDecimalSeparator](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$currencyDecimalSeparator-detail "Defined by yii\i18n\Formatter")     | [string](http://php.net/language.types.string) – The character displayed as the decimal point when formatting a currency.
| [currencySymbols](craft-i18n-formatter.md#currencysymbols)                                                                                                   | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The locale's currency symbols.
| [dateFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$dateFormat-detail "Defined by yii\i18n\Formatter")                                 | [string](http://php.net/language.types.string) – The default format string to be used to format a [date](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asDate()-detail).
| [dateTimeFormats](craft-i18n-formatter.md#datetimeformats)                                                                                                   | [array](http://php.net/language.types.array) – The locale’s date/time formats.
| [datetimeFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$datetimeFormat-detail "Defined by yii\i18n\Formatter")                         | [string](http://php.net/language.types.string) – The default format string to be used to format a [date and time](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asDatetime()-detail).
| [decimalSeparator](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$decimalSeparator-detail "Defined by yii\i18n\Formatter")                     | [string](http://php.net/language.types.string) – The character displayed as the decimal point when formatting a number.
| [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail "Defined by yii\i18n\Formatter")                       | [string](http://php.net/language.types.string) – The time zone that is assumed for input values if they do not include a time zone explicitly.
| [language](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$language-detail "Defined by yii\i18n\Formatter")                                     | [string](http://php.net/language.types.string) – The language code (e.g. `en-US`, `en`) that is used to translate internal messages.
| [locale](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$locale-detail "Defined by yii\i18n\Formatter")                                         | [string](http://php.net/language.types.string) – The locale ID that is used to localize the date and number formatting.
| [measureUnits](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$measureUnits-detail "Defined by yii\i18n\Formatter")                             | [array](http://php.net/language.types.array) – Configuration of weight and length measurement units.
| [monthNames](craft-i18n-formatter.md#monthnames)                                                                                                             | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The localized month names.
| [nullDisplay](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$nullDisplay-detail "Defined by yii\i18n\Formatter")                               | [string](http://php.net/language.types.string) – The text to be displayed when formatting a `null` value.
| [numberFormatterOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterOptions-detail "Defined by yii\i18n\Formatter")         | [array](http://php.net/language.types.array) – A list of name value pairs that are passed to the intl [NumberFormatter::setAttribute()](https://secure.
| [numberFormatterSymbols](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterSymbols-detail "Defined by yii\i18n\Formatter")         | [array](http://php.net/language.types.array) – A list of name value pairs that are passed to the intl [NumberFormatter::setSymbol()](https://secure.
| [numberFormatterTextOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterTextOptions-detail "Defined by yii\i18n\Formatter") | [array](http://php.net/language.types.array) – A list of name value pairs that are passed to the intl [NumberFormatter::setTextAttribute()](https://secure.
| [pmName](craft-i18n-formatter.md#pmname)                                                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The localized PM name.
| [sizeFormatBase](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$sizeFormatBase-detail "Defined by yii\i18n\Formatter")                         | [integer](http://php.net/language.types.integer) – The base at which a kilobyte is calculated (1000 or 1024 bytes per kilobyte), used by [asSize()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asSize()-detail) and [asShortSize()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asShortSize()-detail).
| [standAloneMonthNames](craft-i18n-formatter.md#standalonemonthnames)                                                                                         | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The localized "stand alone" month names.
| [standAloneWeekDayNames](craft-i18n-formatter.md#standaloneweekdaynames)                                                                                     | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The localized "stand alone" day of the week names.
| [systemOfUnits](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$systemOfUnits-detail "Defined by yii\i18n\Formatter")                           | [string](http://php.net/language.types.string) – Default system of measure units.
| [thousandSeparator](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$thousandSeparator-detail "Defined by yii\i18n\Formatter")                   | [string](http://php.net/language.types.string) – The character displayed as the thousands separator (also called grouping separator) character when formatting a number.
| [timeFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeFormat-detail "Defined by yii\i18n\Formatter")                                 | [string](http://php.net/language.types.string) – The default format string to be used to format a [time](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asTime()-detail).
| [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail "Defined by yii\i18n\Formatter")                                     | [string](http://php.net/language.types.string) – The time zone to use for formatting time and date values.
| [weekDayNames](craft-i18n-formatter.md#weekdaynames)                                                                                                         | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The localized day of the week names.

### `amName`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The localized AM name.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L53)



### `currencySymbols`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The locale's currency symbols.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L63)



### `dateTimeFormats`



Type

:   [array](http://php.net/language.types.array)



The locale’s date/time formats.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L28)



### `monthNames`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The localized month names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L38)



### `pmName`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The localized PM name.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L58)



### `standAloneMonthNames`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The localized "stand alone" month names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L33)



### `standAloneWeekDayNames`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The localized "stand alone" day of the week names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L43)



### `weekDayNames`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The localized day of the week names.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L48)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [asBoolean()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asBoolean()-detail "Defined by yii\i18n\Formatter")               | Formats the value as a boolean.
| [asCurrency()](craft-i18n-formatter.md#method-ascurrency)                                                                                   | Formats the value as a currency number.
| [asDate()](craft-i18n-formatter.md#method-asdate)                                                                                           | Formats the value as a date.
| [asDatetime()](craft-i18n-formatter.md#method-asdatetime)                                                                                   | Formats the value as a datetime.
| [asDecimal()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asDecimal()-detail "Defined by yii\i18n\Formatter")               | Formats the value as a decimal number.
| [asDuration()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asDuration()-detail "Defined by yii\i18n\Formatter")             | Represents the value as duration in human readable format.
| [asEmail()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asEmail()-detail "Defined by yii\i18n\Formatter")                   | Formats the value as a mailto link.
| [asHtml()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asHtml()-detail "Defined by yii\i18n\Formatter")                     | Formats the value as HTML text.
| [asImage()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asImage()-detail "Defined by yii\i18n\Formatter")                   | Formats the value as an image tag.
| [asInteger()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asInteger()-detail "Defined by yii\i18n\Formatter")               | Formats the value as an integer number by removing any decimal digits without rounding.
| [asLength()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asLength()-detail "Defined by yii\i18n\Formatter")                 | Formats the value as a length in human readable form for example `12 meters`.
| [asNtext()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asNtext()-detail "Defined by yii\i18n\Formatter")                   | Formats the value as an HTML-encoded plain text with newlines converted into breaks.
| [asOrdinal()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asOrdinal()-detail "Defined by yii\i18n\Formatter")               | Formats the value as a ordinal value of a number.
| [asParagraphs()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asParagraphs()-detail "Defined by yii\i18n\Formatter")         | Formats the value as HTML-encoded text paragraphs.
| [asPercent()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asPercent()-detail "Defined by yii\i18n\Formatter")               | Formats the value as a percent number with "%" sign.
| [asRaw()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asRaw()-detail "Defined by yii\i18n\Formatter")                       | Formats the value as is without any formatting.
| [asRelativeTime()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asRelativeTime()-detail "Defined by yii\i18n\Formatter")     | Formats the value as the time interval between a date and now in human readable form.
| [asScientific()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asScientific()-detail "Defined by yii\i18n\Formatter")         | Formats the value as a scientific number.
| [asShortLength()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asShortLength()-detail "Defined by yii\i18n\Formatter")       | Formats the value as a length in human readable form for example `12 m`.
| [asShortSize()](craft-i18n-formatter.md#method-asshortsize)                                                                                 | Formats the value in bytes as a size in human readable form for example `12 kB`.
| [asShortWeight()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asShortWeight()-detail "Defined by yii\i18n\Formatter")       | Formats the value as a weight in human readable form for example `12 kg`.
| [asSize()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asSize()-detail "Defined by yii\i18n\Formatter")                     | Formats the value in bytes as a size in human readable form, for example `12 kilobytes`.
| [asSpellout()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asSpellout()-detail "Defined by yii\i18n\Formatter")             | Formats the value as a number spellout.
| [asText()](craft-i18n-formatter.md#method-astext)                                                                                           | Formats the value as an HTML-encoded plain text.
| [asTime()](craft-i18n-formatter.md#method-astime)                                                                                           | Formats the value as a time.
| [asTimestamp()](craft-i18n-formatter.md#method-astimestamp)                                                                                 | Formats the value as a human-readable timestamp.
| [asUrl()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asUrl()-detail "Defined by yii\i18n\Formatter")                       | Formats the value as a hyperlink.
| [asWeight()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asWeight()-detail "Defined by yii\i18n\Formatter")                 | Formats the value as a weight in human readable form for example `12 kilograms`.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [format()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#format()-detail "Defined by yii\i18n\Formatter")                     | Formats the value based on the given format type.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `asCurrency()`





Formats the value as a currency number.

This function does not requires the [PHP intl extension](http://php.net/manual/en/book.intl.php) to be installed
to work but it is highly recommended to install it to get good formatting results.


[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L239-L275)


#### Arguments

- `$value` (`mixed`) – The value to be formatted.
- `$currency` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The 3-letter ISO 4217 currency code indicating the currency to use.
If null, [currencyCode](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$currencyCode-detail) will be used.
- `$options` ([array](http://php.net/language.types.array)) – Optional configuration for the number formatter. This parameter will be merged with [numberFormatterOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterOptions-detail).
- `$textOptions` ([array](http://php.net/language.types.array)) – Optional configuration for the number formatter. This parameter will be merged with [numberFormatterTextOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterTextOptions-detail).
- `$stripZeros` ([boolean](http://php.net/language.types.boolean)) – Whether the formatted currency should remove the fraction digits if $value has no minor value (e.g. cents).

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the input value is not numeric.
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if no currency is given and [currencyCode](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$currencyCode-detail) is not defined.


### `asDate()`





Formats the value as a date.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L73-L112)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The value to be formatted. The following
types of value are supported:

- an integer representing a UNIX timestamp. A UNIX timestamp is always in UTC by its definition.
- a string that can be [parsed to create a DateTime object](https://secure.php.net/manual/en/datetime.formats.php).
  The timestamp is assumed to be in [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) unless a time zone is explicitly given.
- a PHP [DateTime](https://secure.php.net/manual/en/class.datetime.php) object. You may set the time zone
  for the DateTime object to specify the source time zone.

The formatter will convert date values according to [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) before formatting it.
If no timezone conversion should be performed, you need to set [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) and [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) to the same value.
Also no conversion will be performed on values that have no time information, e.g. `"2017-06-05"`.
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format used to convert the value into a date string.
If null, [dateFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$dateFormat-detail) will be used.

This can be "short", "medium", "long", or "full", which represents a preset format of different lengths.
It can also be a custom format as specified in the [ICU manual](http://userguide.icu-project.org/formatparse/datetime).

Alternatively this can be a string prefixed with `php:` representing a format that can be recognized by the
PHP [date()](https://secure.php.net/manual/en/function.date.php)-function.

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `asDatetime()`





Formats the value as a datetime.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L151-L170)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The value to be formatted. The following
types of value are supported:

- an integer representing a UNIX timestamp. A UNIX timestamp is always in UTC by its definition.
- a string that can be [parsed to create a DateTime object](https://secure.php.net/manual/en/datetime.formats.php).
  The timestamp is assumed to be in [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) unless a time zone is explicitly given.
- a PHP [DateTime](https://secure.php.net/manual/en/class.datetime.php) object. You may set the time zone
  for the DateTime object to specify the source time zone.

The formatter will convert date values according to [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) before formatting it.
If no timezone conversion should be performed, you need to set [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) and [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) to the same value.
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format used to convert the value into a date string.
If null, [datetimeFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$datetimeFormat-detail) will be used.

This can be "short", "medium", "long", or "full", which represents a preset format of different lengths.
It can also be a custom format as specified in the [ICU manual](http://userguide.icu-project.org/formatparse/datetime).

Alternatively this can be a string prefixed with `php:` representing a format that can be recognized by the
PHP [date()](https://secure.php.net/manual/en/function.date.php)-function.

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `asShortSize()`



Since

:   3.4.0



Formats the value in bytes as a size in human readable form for example `12 kB`.



This is the short form of [asSize()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asSize()-detail).

If [sizeFormatBase](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$sizeFormatBase-detail) is 1024, [binary prefixes](http://en.wikipedia.org/wiki/Binary_prefix) (e.g. kibibyte/KiB, mebibyte/MiB, ...)
are used in the formatting result.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L293-L296)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)) – Value in bytes to be formatted.
- `$decimals` ([integer](http://php.net/language.types.integer)) – The number of digits after the decimal point.
- `$options` ([array](http://php.net/language.types.array)) – Optional configuration for the number formatter. This parameter will be merged with [numberFormatterOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterOptions-detail).
- `$textOptions` ([array](http://php.net/language.types.array)) – Optional configuration for the number formatter. This parameter will be merged with [numberFormatterTextOptions](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$numberFormatterTextOptions-detail).

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the input value is not numeric or the formatting failed.


### `asText()`





Formats the value as an HTML-encoded plain text.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L280-L287)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The value to be formatted.

#### Returns

[string](http://php.net/language.types.string) – The formatted result.



### `asTime()`





Formats the value as a time.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L122-L141)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The value to be formatted. The following
types of value are supported:

- an integer representing a UNIX timestamp. A UNIX timestamp is always in UTC by its definition.
- a string that can be [parsed to create a DateTime object](https://secure.php.net/manual/en/datetime.formats.php).
  The timestamp is assumed to be in [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) unless a time zone is explicitly given.
- a PHP [DateTime](https://secure.php.net/manual/en/class.datetime.php) object. You may set the time zone
  for the DateTime object to specify the source time zone.

The formatter will convert date values according to [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) before formatting it.
If no timezone conversion should be performed, you need to set [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) and [timeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeZone-detail) to the same value.
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format used to convert the value into a date string.
If null, [timeFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$timeFormat-detail) will be used.

This can be "short", "medium", "long", or "full", which represents a preset format of different lengths.
It can also be a custom format as specified in the [ICU manual](http://userguide.icu-project.org/formatparse/datetime).

Alternatively this can be a string prefixed with `php:` representing a format that can be recognized by the
PHP [date()](https://secure.php.net/manual/en/function.date.php)-function.

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `asTimestamp()`





Formats the value as a human-readable timestamp.

- If $value is from today, "Today" or the formatted time will be returned, depending on whether $value contains time information
- If $value is from yesterday, "Yesterday" will be returned
- If $value is within the past 7 days, the weekday will be returned

See also [datetimeFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$datetimeFormat-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/i18n/Formatter.php#L196-L221)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The value to be formatted. The following
types of value are supported:
- an int representing a UNIX timestamp
- a string that can be [parsed to create a DateTime object](http://php.net/manual/en/datetime.formats.php).
  The timestamp is assumed to be in [defaultTimeZone](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$defaultTimeZone-detail) unless a time zone is explicitly given.
- a PHP [DateTime](http://php.net/manual/en/class.datetime.php) object
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The format used to convert the value into a date string.
If null, [dateFormat](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#$dateFormat-detail) will be used.
This can be "short", "medium", "long", or "full", which represents a preset format of different lengths.
It can also be a custom format as specified in the [ICU manual](http://userguide.icu-project.org/formatparse/datetime).
Alternatively this can be a string prefixed with `php:` representing a format that can be recognized by the
PHP [date()](http://php.net/manual/en/function.date.php)-function.

#### Returns

[string](http://php.net/language.types.string) – The formatted result.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the input value can not be evaluated as a date value.
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the date format is invalid.




## Protected Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------
| [asCurrencyStringFallback()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asCurrencyStringFallback()-detail "Defined by yii\i18n\Formatter")           | Fallback for formatting value as a currency number.
| [asDecimalStringFallback()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asDecimalStringFallback()-detail "Defined by yii\i18n\Formatter")             | Fallback for formatting value as a decimal number.
| [asIntegerStringFallback()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asIntegerStringFallback()-detail "Defined by yii\i18n\Formatter")             | Fallback for formatting value as an integer number by removing any decimal digits without rounding.
| [asPercentStringFallback()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#asPercentStringFallback()-detail "Defined by yii\i18n\Formatter")             | Fallback for formatting value as a percent number with "%" sign.
| [createNumberFormatter()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#createNumberFormatter()-detail "Defined by yii\i18n\Formatter")                 | Creates a number formatter based on the given type and format.
| [formatNumber()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#formatNumber()-detail "Defined by yii\i18n\Formatter")                                   | Given the value in bytes formats number part of the human readable form.
| [isNormalizedValueMispresented()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#isNormalizedValueMispresented()-detail "Defined by yii\i18n\Formatter") | Checks if string representations of given value and its normalized version are different.
| [normalizeDatetimeValue()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#normalizeDatetimeValue()-detail "Defined by yii\i18n\Formatter")               | Normalizes the given datetime value as a DateTime object that can be taken by various date/time formatting methods.
| [normalizeNumericStringValue()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#normalizeNumericStringValue()-detail "Defined by yii\i18n\Formatter")     | Normalizes a numeric string value.
| [normalizeNumericValue()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-formatter#normalizeNumericValue()-detail "Defined by yii\i18n\Formatter")                 | Normalizes a numeric input value.



## Constants

| Constant               | Description
| ---------------------- | -----------
| `FORMAT_WIDTH_LONG`    |
| `FORMAT_WIDTH_SHORT`   |
| `UNIT_LENGTH`          |
| `UNIT_SYSTEM_IMPERIAL` |
| `UNIT_SYSTEM_METRIC`   |
| `UNIT_WEIGHT`          |



