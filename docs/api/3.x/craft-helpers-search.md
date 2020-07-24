---
title: craft\helpers\Search
code:
  - php
  - twig
---

# Search

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Search](craft-helpers-search.md)

Since

:   3.0.0



Search helper.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Search.php)






## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | ---------------------------
| [normalizeKeywords()](craft-helpers-search.md#method-normalizekeywords) | Normalizes search keywords.

### `normalizeKeywords()`





Normalizes search keywords.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Search.php#L29-L73)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)[], [string](http://php.net/language.types.string)) – The dirty keywords
- `$ignore` ([array](http://php.net/language.types.array)) – Ignore words to strip out
- `$processCharMap` ([boolean](http://php.net/language.types.boolean)) – Whether to remove punctuation and diacritics (default is true)
- `$language`

#### Returns

[string](http://php.net/language.types.string) – The cleansed keywords.










