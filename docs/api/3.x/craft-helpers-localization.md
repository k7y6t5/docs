---
title: craft\helpers\Localization
code:
  - php
  - twig
---

# Localization

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Localization](craft-helpers-localization.md)

Since

:   3.0.0



Class Localization





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Localization.php)






## Public Methods

| Method                                                                                  | Description
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------
| [findMissingTranslation()](craft-helpers-localization.md#method-findmissingtranslation) | Looks for a missing translation string in Yii's core translations.
| [localeData()](craft-helpers-localization.md#method-localedata)                         | Returns fallback data for a locale if the Intl extension isn't loaded.
| [normalizeLanguage()](craft-helpers-localization.md#method-normalizelanguage)           | Normalizes a language into the correct format (e.g. `en-US`).
| [normalizeNumber()](craft-helpers-localization.md#method-normalizenumber)               | Normalizes a user-submitted number for use in code and/or to be saved into the database.

### `findMissingTranslation()`





Looks for a missing translation string in Yii's core translations.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Localization.php#L113-L172)


#### Arguments

- `$event` ([yii\i18n\MissingTranslationEvent](https://www.yiiframework.com/doc/api/2.0/yii-i18n-missingtranslationevent))




### `localeData()`





Returns fallback data for a locale if the Intl extension isn't loaded.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Localization.php#L85-L106)


#### Arguments

- `$localeId` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `normalizeLanguage()`





Normalizes a language into the correct format (e.g. `en-US`).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Localization.php#L35-L48)


#### Arguments

- `$language` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $language is invalid.


### `normalizeNumber()`





Normalizes a user-submitted number for use in code and/or to be saved into the database.

Group symbols are removed (e.g. 1,000,000 => 1000000), and decimals are converted to a periods, if the current
locale uses something else.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Localization.php#L60-L77)


#### Arguments

- `$number` (`mixed`) – The number that should be normalized.
- `$localeId` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The locale ID that the number is set in

#### Returns

`mixed` – The normalized number.










