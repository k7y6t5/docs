---
title: craft\helpers\Number
code:
  - php
  - twig
---

# Number

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Number](craft-helpers-number.md)

Since

:   3.0.0



Class Number





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php)






## Public Methods

| Method                                                      | Description
| ----------------------------------------------------------- | -------------------------------------------------------
| [lowerAlpha()](craft-helpers-number.md#method-loweralpha)   | Returns the lowercase alphabetic version of a number
| [lowerRoman()](craft-helpers-number.md#method-lowerroman)   | Returns the lowercase roman numeral version of a number
| [makeNumeric()](craft-helpers-number.md#method-makenumeric) | Returns the numeric value of a variable.
| [upperAlpha()](craft-helpers-number.md#method-upperalpha)   | Returns the uppercase alphabetic version of a number
| [upperRoman()](craft-helpers-number.md#method-upperroman)   | Returns the uppercase roman numeral version of a number
| [word()](craft-helpers-number.md#method-word)               | Returns the "word" version of a number

### `lowerAlpha()`





Returns the lowercase alphabetic version of a number




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L75-L80)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – The number

#### Returns

[string](http://php.net/language.types.string) – The alphabetic version of the number



### `lowerRoman()`





Returns the lowercase roman numeral version of a number




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L124-L129)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – The number

#### Returns

[string](http://php.net/language.types.string) – The roman numeral version of the number



### `makeNumeric()`





Returns the numeric value of a variable.

If the variable is an object with a __toString() method, the numeric value of its string representation will be
returned.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L140-L151)


#### Arguments

- `$var` (`mixed`)

#### Returns

`mixed`



### `upperAlpha()`





Returns the uppercase alphabetic version of a number




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L54-L67)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – The number

#### Returns

[string](http://php.net/language.types.string) – The alphabetic version of the number



### `upperRoman()`





Returns the uppercase roman numeral version of a number




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L88-L116)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – The number

#### Returns

[string](http://php.net/language.types.string) – The roman numeral version of the number



### `word()`





Returns the "word" version of a number




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Number.php#L26-L45)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – The number

#### Returns

[string](http://php.net/language.types.string) – The number word, or the original number if it's >= 10










