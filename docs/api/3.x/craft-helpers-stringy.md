---
title: craft\helpers\Stringy
code:
  - php
  - twig
---

# Stringy

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Stringy](craft-helpers-stringy.md) &raquo;
`Stringy\Stringy`

Since

:   3.0.0



The entire purpose of this class is so we can get at the charsArray in Stringy, which is a protected method
and the creators did not want to expose as public.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Stringy.php)






## Public Methods

| Method                                                                                   | Description
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [getAsciiCharMap()](craft-helpers-stringy.md#method-getasciicharmap)                     | Public wrapper for [charsArray()](craft-helpers-stringy.md#method-charsarray).
| [getLangSpecificCharsArray()](craft-helpers-stringy.md#method-getlangspecificcharsarray) | Public wrapper for `\craft\helpers\langSpecificCharsArray()`.

### `getAsciiCharMap()`





Public wrapper for [charsArray()](craft-helpers-stringy.md#method-charsarray).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Stringy.php#L38-L41)



#### Returns

[array](http://php.net/language.types.array)



### `getLangSpecificCharsArray()`



Since

:   3.0.10



Public wrapper for `\craft\helpers\langSpecificCharsArray()`.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Stringy.php#L28-L31)


#### Arguments

- `$language` ([string](http://php.net/language.types.string)) – Language of the source string

#### Returns

[array](http://php.net/language.types.array) – An array of replacements





## Protected Methods

| Method                                                     | Description
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------
| [charsArray()](craft-helpers-stringy.md#method-charsarray) | Returns the replacements for the toAscii() method, including any custom mappings provided by the <config:customAsciiCharMappings> config setting.

### `charsArray()`





Returns the replacements for the toAscii() method, including any custom
mappings provided by the <config:customAsciiCharMappings> config setting.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Stringy.php#L49-L56)



#### Returns

[array](http://php.net/language.types.array)








