---
title: craft\helpers\DateTimeHelper
code:
  - php
  - twig
---

# DateTimeHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\DateTimeHelper](craft-helpers-datetimehelper.md)

Since

:   3.0.0



Class DateTimeHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php)






## Public Methods

| Method                                                                                            | Description
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [currentTimeStamp()](craft-helpers-datetimehelper.md#method-currenttimestamp)                     |
| [currentUTCDateTime()](craft-helpers-datetimehelper.md#method-currentutcdatetime)                 |
| [humanDurationFromInterval()](craft-helpers-datetimehelper.md#method-humandurationfrominterval)   | Returns the interval in a human-friendly string.
| [intervalToSeconds()](craft-helpers-datetimehelper.md#method-intervaltoseconds)                   | Returns the number of seconds that a given DateInterval object spans.
| [isInThePast()](craft-helpers-datetimehelper.md#method-isinthepast)                               | Returns true if the specified date was in the past, otherwise false.
| [isIso8601()](craft-helpers-datetimehelper.md#method-isiso8601)                                   | Determines whether the given value is an ISO-8601-formatted date, as formatted by either [DateTime::ATOM](http://php.net/manual/en/class.datetime.php#datetime.constants.atom) or [DateTime::ISO8601](http://php.net/manual/en/class.datetime.php#datetime.constants.iso8601) (with or without the colon between the hours and minutes of the timezone).
| [isThisMonth()](craft-helpers-datetimehelper.md#method-isthismonth)                               | Returns true if given date is in this month
| [isThisWeek()](craft-helpers-datetimehelper.md#method-isthisweek)                                 | Returns true if given date is in this week
| [isThisYear()](craft-helpers-datetimehelper.md#method-isthisyear)                                 | Returns true if given date is in this year
| [isToday()](craft-helpers-datetimehelper.md#method-istoday)                                       | Returns true if given date is today.
| [isValidIntervalString()](craft-helpers-datetimehelper.md#method-isvalidintervalstring)           | Returns true if interval string is a valid interval.
| [isValidTimeStamp()](craft-helpers-datetimehelper.md#method-isvalidtimestamp)                     |
| [isWithinLast()](craft-helpers-datetimehelper.md#method-iswithinlast)                             | Returns true if specified datetime was within the interval specified, else false.
| [isYesterday()](craft-helpers-datetimehelper.md#method-isyesterday)                               | Returns true if given date was yesterday
| [normalizeTimeZone()](craft-helpers-datetimehelper.md#method-normalizetimezone)                   | Normalizes a timezone string to a PHP timezone identifier.
| [secondsToHumanTimeDuration()](craft-helpers-datetimehelper.md#method-secondstohumantimeduration) |
| [secondsToInterval()](craft-helpers-datetimehelper.md#method-secondstointerval)                   | Creates a DateInterval object based on a given number of seconds.
| [timeZoneAbbreviation()](craft-helpers-datetimehelper.md#method-timezoneabbreviation)             | Returns the timezone abbreviation for a given timezone name.
| [timeZoneOffset()](craft-helpers-datetimehelper.md#method-timezoneoffset)                         | Returns a given timezone’s offset from UTC (e.g. '+10:00' or '-06:00').
| [toDateTime()](craft-helpers-datetimehelper.md#method-todatetime)                                 | Converts a value into a DateTime object.
| [toIso8601()](craft-helpers-datetimehelper.md#method-toiso8601)                                   | Converts a date to an ISO-8601 string.
| [translateDate()](craft-helpers-datetimehelper.md#method-translatedate)                           | Translates the words in a formatted date string to the application’s language.

### `currentTimeStamp()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L260-L265)



#### Returns

[integer](http://php.net/language.types.integer)



### `currentUTCDateTime()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L252-L255)



#### Returns

[DateTime](http://php.net/class.datetime)



### `humanDurationFromInterval()`





Returns the interval in a human-friendly string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L521-L571)


#### Arguments

- `$dateInterval` ([DateInterval](http://php.net/class.dateinterval))
- `$showSeconds` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string)



### `intervalToSeconds()`





Returns the number of seconds that a given DateInterval object spans.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L489-L495)


#### Arguments

- `$dateInterval` ([DateInterval](http://php.net/class.dateinterval))

#### Returns

[integer](http://php.net/language.types.integer)



### `isInThePast()`





Returns true if the specified date was in the past, otherwise false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L465-L470)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if the specified date was in the past, false otherwise.



### `isIso8601()`





Determines whether the given value is an ISO-8601-formatted date, as formatted by either
[DateTime::ATOM](http://php.net/manual/en/class.datetime.php#datetime.constants.atom) or
[DateTime::ISO8601](http://php.net/manual/en/class.datetime.php#datetime.constants.iso8601) (with or without
the colon between the hours and minutes of the timezone).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L227-L230)


#### Arguments

- `$value` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the value is an ISO-8601 date string



### `isThisMonth()`





Returns true if given date is in this month




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L424-L430)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if date is in this month, false otherwise.



### `isThisWeek()`





Returns true if given date is in this week




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L410-L416)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if date is in this week, false otherwise.



### `isThisYear()`





Returns true if given date is in this year




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L396-L402)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if date is in this year, false otherwise.



### `isToday()`





Returns true if given date is today.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L368-L374)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if date is today, false otherwise.



### `isValidIntervalString()`





Returns true if interval string is a valid interval.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L503-L512)


#### Arguments

- `$intervalString` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isValidTimeStamp()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L351-L360)


#### Arguments

- `$timestamp` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isWithinLast()`





Returns true if specified datetime was within the interval specified, else false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L440-L457)


#### Arguments

- `$date` (`mixed`) – The timestamp to check
- `$timeInterval` (`mixed`) – The numeric value with space then time type.
Example of valid types: '6 hours', '2 days', '1 minute'.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the $dateString was within the specified $timeInterval.



### `isYesterday()`





Returns true if given date was yesterday




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L382-L388)


#### Arguments

- `$date` (`mixed`) – The timestamp to check

#### Returns

[boolean](http://php.net/language.types.boolean) – True if date was yesterday, false otherwise.



### `normalizeTimeZone()`





Normalizes a timezone string to a PHP timezone identifier.

Supports the following formats:
 - Time zone abbreviation (EST, MDT)
 - Difference to Greenwich time (GMT) in hours, with/without a colon between the hours and minutes (+0200, -0200, +02:00, -02:00)
 - A PHP timezone identifier (UTC, GMT, Atlantic/Azores)


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L161-L185)


#### Arguments

- `$timeZone` ([string](http://php.net/language.types.string)) – The timezone to be normalized

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The PHP timezone identifier, or `false` if it could not be determined



### `secondsToHumanTimeDuration()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L298-L345)


#### Arguments

- `$seconds` ([integer](http://php.net/language.types.integer)) – The number of seconds
- `$showSeconds` ([boolean](http://php.net/language.types.boolean)) – Whether to output seconds or not

#### Returns

[string](http://php.net/language.types.string)



### `secondsToInterval()`





Creates a DateInterval object based on a given number of seconds.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L478-L481)


#### Arguments

- `$seconds` ([integer](http://php.net/language.types.integer))

#### Returns

[DateInterval](http://php.net/class.dateinterval)



### `timeZoneAbbreviation()`





Returns the timezone abbreviation for a given timezone name.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L193-L198)


#### Arguments

- `$timeZone` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `timeZoneOffset()`





Returns a given timezone’s offset from UTC (e.g. '+10:00' or '-06:00').




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L206-L216)


#### Arguments

- `$timeZone` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `toDateTime()`





Converts a value into a DateTime object.

`$value` can be in the following formats:

 - All W3C date and time formats (http://www.w3.org/TR/NOTE-datetime)
 - MySQL DATE and DATETIME formats (http://dev.mysql.com/doc/refman/5.1/en/datetime.html)
 - Relaxed versions of W3C and MySQL formats (single-digit months, days, and hours)
 - Unix timestamps
 - An array with at least one of these keys defined: `datetime`, `date`, or `time`. Supported keys include:
     - `date` – a date string in `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS.MU` formats or the current locale’s short date format
     - `time` – a time string in `HH:MM` (24-hour) format or the current locale’s short time format
     - `datetime` – A timestamp in any of the non-array formats supported by this method
     - `timezone` – A [valid PHP timezone](http://php.net/manual/en/timezones.php). If set, this will override
       the assumed timezone per `$assumeSystemTimeZone`.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L83-L148)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The value that should be converted to a DateTime object.
- `$assumeSystemTimeZone` ([boolean](http://php.net/language.types.boolean)) – Whether it should be assumed that the value was set in the system timezone if
the timezone was not specified. If this is `false`, UTC will be assumed.
- `$setToSystemTimeZone` ([boolean](http://php.net/language.types.boolean)) – Whether to set the resulting DateTime object to the system timezone.

#### Returns

[DateTime](http://php.net/class.datetime), [false](http://php.net/language.types.boolean) – The DateTime object, or `false` if $object could not be converted to one

#### Throws

- [Exception](http://php.net/class.exception)


### `toIso8601()`





Converts a date to an ISO-8601 string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L238-L247)


#### Arguments

- `$date` (`mixed`) – The date, in any format that [toDateTime()](craft-helpers-datetimehelper.md#method-todatetime) supports.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The date formatted as an ISO-8601 string, or `false` if $date was not a valid date



### `translateDate()`

::: danger DEPRECATED
Deprecated in 3.0.6. Use [craft\i18n\Formatter::asDate()](craft-i18n-formatter.md#method-asdate) instead.
:::




Translates the words in a formatted date string to the application’s language.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/DateTimeHelper.php#L276-L291)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The formatted date string
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The language code (e.g. `en-US`, `en`). If this is null, the current
[application language](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$language-detail) will be used.

#### Returns

[string](http://php.net/language.types.string) – The translated date string







## Constants

| Constant         | Description
| ---------------- | -----------
| `SECONDS_DAY`    |
| `SECONDS_HOUR`   |
| `SECONDS_MINUTE` |
| `SECONDS_MONTH`  |
| `SECONDS_YEAR`   |



