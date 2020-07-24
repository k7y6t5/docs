---
title: craft\helpers\Sequence
code:
  - php
  - twig
---

# Sequence

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Sequence](craft-helpers-sequence.md)

Since

:   3.0.31



Class Sequence





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Sequence.php)






## Public Methods

| Method                                                | Description
| ----------------------------------------------------- | ----------------------------------------------
| [current()](craft-helpers-sequence.md#method-current) | Returns the current value in a given sequence.
| [next()](craft-helpers-sequence.md#method-next)       | Returns the next number in a given sequence.

### `current()`



Since

:   3.0.32



Returns the current value in a given sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Sequence.php#L31-L35)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The sequence name.
- `$length` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The minimum string length that should be returned. (Numbers that are too short will be left-padded with `0`s.)

#### Returns

[integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)



### `next()`





Returns the next number in a given sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Sequence.php#L46-L74)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The sequence name.
- `$length` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The minimum string length that should be returned. (Numbers that are too short will be left-padded with `0`s.)

#### Returns

[integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)\
  if a lock could not be acquired for the sequence
- [Throwable](http://php.net/class.throwable)\
  if reasons









