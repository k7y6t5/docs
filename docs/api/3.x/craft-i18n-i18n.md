---
title: craft\i18n\I18N
code:
  - php
  - twig
---

# I18N

Type

:   Class

Namespace

:   craft\i18n

Inherits

:   [craft\i18n\I18N](craft-i18n-i18n.md) &raquo;
[yii\i18n\I18N](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)


## Public Properties

| Property                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allLocaleIds](craft-i18n-i18n.md#alllocaleids)                                                                                | [array](http://php.net/language.types.array) – An array of locale IDs.
| [allLocales](craft-i18n-i18n.md#alllocales)                                                                                    | [craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.
| [appLocaleIds](craft-i18n-i18n.md#applocaleids)                                                                                | [array](http://php.net/language.types.array) – An array of locale IDs.
| [appLocales](craft-i18n-i18n.md#applocales)                                                                                    | [craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [editableLocaleIds](craft-i18n-i18n.md#editablelocaleids)                                                                      | [array](http://php.net/language.types.array)
| [editableLocales](craft-i18n-i18n.md#editablelocales)                                                                          | [array](http://php.net/language.types.array)
| [isIntlLoaded](craft-i18n-i18n.md#isintlloaded)                                                                                | [boolean](http://php.net/language.types.boolean) – Whether the Intl extension is loaded.
| [messageFormatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#$messageFormatter-detail "Defined by yii\i18n\I18N") | [yii\i18n\MessageFormatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter) – The message formatter to be used to format message via ICU message format.
| [primarySiteLocale](craft-i18n-i18n.md#primarysitelocale)                                                                      | [craft\i18n\Locale](craft-i18n-locale.md) – A [craft\i18n\Locale](craft-i18n-locale.md) object representing the primary locale.
| [primarySiteLocaleId](craft-i18n-i18n.md#primarysitelocaleid)                                                                  | [string](http://php.net/language.types.string) – The primary locale ID.
| [siteLocaleIds](craft-i18n-i18n.md#sitelocaleids)                                                                              | [array](http://php.net/language.types.array) – An array of locale IDs.
| [siteLocales](craft-i18n-i18n.md#sitelocales)                                                                                  | [craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.
| [translations](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#$translations-detail "Defined by yii\i18n\I18N")         | [array](http://php.net/language.types.array) – List of [yii\i18n\MessageSource](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messagesource) configurations or objects.

### `allLocaleIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



An array of locale IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `allLocales`



Type

:   [craft\i18n\Locale](craft-i18n-locale.md)[]

Access

:   Read-only



An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `appLocaleIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



An array of locale IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `appLocales`



Type

:   [craft\i18n\Locale](craft-i18n-locale.md)[]

Access

:   Read-only



An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `editableLocaleIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `editableLocales`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `isIntlLoaded`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the Intl extension is loaded.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `primarySiteLocale`



Type

:   [craft\i18n\Locale](craft-i18n-locale.md)

Access

:   Read-only



A [craft\i18n\Locale](craft-i18n-locale.md) object representing the primary locale.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `primarySiteLocaleId`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The primary locale ID.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `siteLocaleIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



An array of locale IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)



### `siteLocales`



Type

:   [craft\i18n\Locale](craft-i18n-locale.md)[]

Access

:   Read-only



An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.



[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [format()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#format()-detail "Defined by yii\i18n\I18N")                               | Formats a message using [yii\i18n\MessageFormatter](https://www.yiiframework.com/doc/api/2.0/yii-i18n-messageformatter).
| [getAllLocaleIds()](craft-i18n-i18n.md#method-getalllocaleids)                                                                              | Returns an array of all known locale IDs.
| [getAllLocales()](craft-i18n-i18n.md#method-getalllocales)                                                                                  | Returns an array of all known locales.
| [getAppLocaleIds()](craft-i18n-i18n.md#method-getapplocaleids)                                                                              | Returns an array of the locale IDs which Craft has been translated into. The list of locales is based on whatever files exist in `vendor/craftcms/cms/src/translations/`.
| [getAppLocales()](craft-i18n-i18n.md#method-getapplocales)                                                                                  | Returns an array of locales that Craft is translated into. The list of locales is based on whatever files exist in `vendor/craftcms/cms/src/translations/`.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEditableLocaleIds()](craft-i18n-i18n.md#method-geteditablelocaleids)                                                                    | Returns an array of the editable locale IDs.
| [getEditableLocales()](craft-i18n-i18n.md#method-geteditablelocales)                                                                        | Returns a list of locales that are editable by the current user.
| [getIsIntlLoaded()](craft-i18n-i18n.md#method-getisintlloaded)                                                                              | Returns whether the [Intl extension](http://php.net/manual/en/book.intl.php) is loaded.
| [getLocaleById()](craft-i18n-i18n.md#method-getlocalebyid)                                                                                  | Returns a locale by its ID.
| [getMessageFormatter()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#getMessageFormatter()-detail "Defined by yii\i18n\I18N")     | Returns the message formatter instance.
| [getMessageSource()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#getMessageSource()-detail "Defined by yii\i18n\I18N")           | Returns the message source for the given category.
| [getPrimarySiteLocale()](craft-i18n-i18n.md#method-getprimarysitelocale)                                                                    | Returns the site's primary locale. The primary locale is whatever is listed first in Settings > Locales in the control panel.
| [getPrimarySiteLocaleId()](craft-i18n-i18n.md#method-getprimarysitelocaleid)                                                                | Returns the site's primary locale ID. The primary locale is whatever is listed first in Settings > Locales in the control panel.
| [getSiteLocaleIds()](craft-i18n-i18n.md#method-getsitelocaleids)                                                                            | Returns an array of the site locale IDs.
| [getSiteLocales()](craft-i18n-i18n.md#method-getsitelocales)                                                                                | Returns an array of the site locales.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-i18n-i18n.md#method-init)                                                                                                    | Initializes the component by configuring the default message categories.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [setMessageFormatter()](https://www.yiiframework.com/doc/api/2.0/yii-i18n-i18n#setMessageFormatter()-detail "Defined by yii\i18n\I18N")     |
| [translate()](craft-i18n-i18n.md#method-translate)                                                                                          | Translates a message to the specified language.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getAllLocaleIds()`





Returns an array of all known locale IDs.

If the [PHP intl extension](http://php.net/manual/en/book.intl.php) is loaded, then this will be based on
all of the locale IDs it knows about. Otherwise, it will be based on the locale data files located in
`vendor/craftcms/cms/src/config/locales/` and `config/locales/`.


[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L91-L126)



#### Returns

[array](http://php.net/language.types.array) – An array of locale IDs.



### `getAllLocales()`





Returns an array of all known locales.



See also [getAllLocaleIds()](craft-i18n-i18n.md#method-getalllocaleids)
[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L134-L144)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.



### `getAppLocaleIds()`





Returns an array of the locale IDs which Craft has been translated into. The list of locales is based on whatever
files exist in `vendor/craftcms/cms/src/translations/`.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L178-L213)



#### Returns

[array](http://php.net/language.types.array) – An array of locale IDs.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case of failure


### `getAppLocales()`





Returns an array of locales that Craft is translated into. The list of locales is based on whatever files exist
in `vendor/craftcms/cms/src/translations/`.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L156-L169)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case of failure


### `getEditableLocaleIds()`





Returns an array of the editable locale IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L304-L314)



#### Returns

[array](http://php.net/language.types.array)



### `getEditableLocales()`





Returns a list of locales that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L281-L297)



#### Returns

[array](http://php.net/language.types.array)



### `getIsIntlLoaded()`





Returns whether the [Intl extension](http://php.net/manual/en/book.intl.php) is loaded.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L65-L68)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the Intl extension is loaded.



### `getLocaleById()`





Returns a locale by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L76-L79)


#### Arguments

- `$localeId` ([string](http://php.net/language.types.string))

#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)



### `getPrimarySiteLocale()`





Returns the site's primary locale. The primary locale is whatever is listed first in Settings > Locales in the
control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L240-L244)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md) – A [craft\i18n\Locale](craft-i18n-locale.md) object representing the primary locale.



### `getPrimarySiteLocaleId()`





Returns the site's primary locale ID. The primary locale is whatever is listed first in Settings > Locales in the
control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L252-L255)



#### Returns

[string](http://php.net/language.types.string) – The primary locale ID.



### `getSiteLocaleIds()`





Returns an array of the site locale IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L262-L274)



#### Returns

[array](http://php.net/language.types.array) – An array of locale IDs.



### `getSiteLocales()`





Returns an array of the site locales.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L223-L232)



#### Returns

[craft\i18n\Locale](craft-i18n-locale.md)[] – An array of [craft\i18n\Locale](craft-i18n-locale.md) objects.



### `init()`





Initializes the component by configuring the default message categories.








[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L53-L58)






### `translate()`





Translates a message to the specified language.



After translation the message will be formatted using [craft\i18n\MessageFormatter](craft-i18n-messageformatter.md) if it contains
ICU message format and `$params` are not empty.




[View source](https://github.com/craftcms/cms/blob/master/src/i18n/I18N.php#L319-L347)


#### Arguments

- `$category` ([string](http://php.net/language.types.string)) – The message category.
- `$message` ([string](http://php.net/language.types.string)) – The message to be translated.
- `$params` ([array](http://php.net/language.types.array)) – The parameters that will be used to replace the corresponding placeholders in the message.
- `$language` ([string](http://php.net/language.types.string)) – The language code (e.g. `en-US`, `en`).

#### Returns

[string](http://php.net/language.types.string) – The translated and formatted message.










