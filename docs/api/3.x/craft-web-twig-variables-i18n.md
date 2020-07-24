---
title: craft\web\twig\variables\I18N
code:
  - php
  - twig
---

# I18N

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\I18N](craft-web-twig-variables-i18n.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Localization functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php)






## Public Methods

| Method                                                                                   | Description
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------
| [getAllLocales()](craft-web-twig-variables-i18n.md#method-getalllocales)                 | Gets all known languages.
| [getAppLocales()](craft-web-twig-variables-i18n.md#method-getapplocales)                 | Returns the locales that the application is translated for.
| [getCurrentLocale()](craft-web-twig-variables-i18n.md#method-getcurrentlocale)           | Returns the current locale.
| [getDatepickerJsFormat()](craft-web-twig-variables-i18n.md#method-getdatepickerjsformat) | Returns the jQuery UI Datepicker date format, per the current locale.
| [getEditableLocaleIds()](craft-web-twig-variables-i18n.md#method-geteditablelocaleids)   | Returns an array of the editable locale IDs.
| [getEditableLocales()](craft-web-twig-variables-i18n.md#method-geteditablelocales)       | Returns a list of locales that are editable by the current user.
| [getLocaleById()](craft-web-twig-variables-i18n.md#method-getlocalebyid)                 | Returns a locale by its ID.
| [getLocaleData()](craft-web-twig-variables-i18n.md#method-getlocaledata)                 | Returns the localization data for a given locale.
| [getPrimarySiteLocale()](craft-web-twig-variables-i18n.md#method-getprimarysitelocale)   | Returns the site's primary locale.
| [getSiteLocaleIds()](craft-web-twig-variables-i18n.md#method-getsitelocaleids)           | Returns an array of the site locale IDs.
| [getSiteLocales()](craft-web-twig-variables-i18n.md#method-getsitelocales)               | Returns the locales that the site is translated for.
| [getTimepickerJsFormat()](craft-web-twig-variables-i18n.md#method-gettimepickerjsformat) | Returns the jQuery Timepicker time format, per the current locale.

### `getAllLocales()`





Gets all known languages.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L27-L32)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[]



### `getAppLocales()`





Returns the locales that the application is translated for.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L39-L44)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[]



### `getCurrentLocale()`





Returns the current locale.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L51-L56)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)



### `getDatepickerJsFormat()`





Returns the jQuery UI Datepicker date format, per the current locale.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L154-L159)



#### Returns

[string](http://php.net/language.types.string)



### `getEditableLocaleIds()`





Returns an array of the editable locale IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L124-L129)



#### Returns

[array](http://php.net/language.types.array)



### `getEditableLocales()`





Returns a list of locales that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L112-L117)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[]



### `getLocaleById()`





Returns a locale by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L64-L69)


#### Arguments

- `$localeId` ([string](http://php.net/language.types.string))

#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)



### `getLocaleData()`





Returns the localization data for a given locale.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L137-L147)


#### Arguments

- `$localeId` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)



### `getPrimarySiteLocale()`





Returns the site's primary locale.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L100-L105)



#### Returns

[string](http://php.net/language.types.string)



### `getSiteLocaleIds()`





Returns an array of the site locale IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L88-L93)



#### Returns

[array](http://php.net/language.types.array)



### `getSiteLocales()`





Returns the locales that the site is translated for.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L76-L81)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[]



### `getTimepickerJsFormat()`





Returns the jQuery Timepicker time format, per the current locale.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/I18N.php#L166-L171)



#### Returns

[string](http://php.net/language.types.string)










