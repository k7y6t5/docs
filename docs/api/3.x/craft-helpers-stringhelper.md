---
title: craft\helpers\StringHelper
code:
  - php
  - twig
---

# StringHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\StringHelper](craft-helpers-stringhelper.md) &raquo;
[yii\helpers\StringHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-stringhelper) &raquo;
[yii\helpers\BaseStringHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper)

Since

:   3.0.0



This helper class provides various multi-byte aware string related manipulation and encoding methods.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php)






## Public Methods

| Method                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [UUID()](craft-helpers-stringhelper.md#method-uuid)                                                                                                           | Generates a valid v4 UUID string. See [http://stackoverflow.com/a/2040279/684]
| [afterFirst()](craft-helpers-stringhelper.md#method-afterfirst)                                                                                               | Gets the substring after the first occurrence of a separator.
| [afterLast()](craft-helpers-stringhelper.md#method-afterlast)                                                                                                 | Gets the substring after the last occurrence of a separator.
| [append()](craft-helpers-stringhelper.md#method-append)                                                                                                       | Returns a new string with $append appended.
| [appendRandomString()](craft-helpers-stringhelper.md#method-appendrandomstring)                                                                               | Returns a new string with a random string appended to it.
| [appendUniqueIdentifier()](craft-helpers-stringhelper.md#method-appenduniqueidentifier)                                                                       | Returns a new string with a unique identifier appended to it.
| [asciiCharMap()](craft-helpers-stringhelper.md#method-asciicharmap)                                                                                           | Returns ASCII character mappings, merging in any custom defined mappings from the <config:customAsciiCharMappings> config setting.
| [at()](craft-helpers-stringhelper.md#method-at)                                                                                                               | Returns the character at $index, with indexes starting at 0.
| [base64UrlDecode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#base64UrlDecode()-detail "Defined by yii\helpers\BaseStringHelper") | Decodes "Base 64 Encoding with URL and Filename Safe Alphabet" (RFC 4648).
| [base64UrlEncode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#base64UrlEncode()-detail "Defined by yii\helpers\BaseStringHelper") | Encodes string into "Base 64 Encoding with URL and Filename Safe Alphabet" (RFC 4648).
| [basename()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#basename()-detail "Defined by yii\helpers\BaseStringHelper")               | Returns the trailing name component of a path.
| [beforeFirst()](craft-helpers-stringhelper.md#method-beforefirst)                                                                                             | Gets the substring before the first occurrence of a separator.
| [beforeLast()](craft-helpers-stringhelper.md#method-beforelast)                                                                                               | Gets the substring before the last occurrence of a separator.
| [between()](craft-helpers-stringhelper.md#method-between)                                                                                                     | Returns the substring between $start and $end, if found, or an empty string.
| [byteLength()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#byteLength()-detail "Defined by yii\helpers\BaseStringHelper")           | Returns the number of bytes in the given string.
| [byteSubstr()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#byteSubstr()-detail "Defined by yii\helpers\BaseStringHelper")           | Returns the portion of string specified by the start and length parameters.
| [camelCase()](craft-helpers-stringhelper.md#method-camelcase)                                                                                                 | Returns a camelCase version of the given string. Trims surrounding spaces, capitalizes letters following digits, spaces, dashes and underscores, and removes spaces, dashes, as well as underscores.
| [capitalizePersonalName()](craft-helpers-stringhelper.md#method-capitalizepersonalname)                                                                       | Returns the string with the first letter of each word capitalized, except for when the word is a name which shouldn't be capitalized.
| [charsAsArray()](craft-helpers-stringhelper.md#method-charsasarray)                                                                                           | Returns an array consisting of the characters in the string.
| [collapseWhitespace()](craft-helpers-stringhelper.md#method-collapsewhitespace)                                                                               | Trims the string and replaces consecutive whitespace characters with a single space. This includes tabs and newline characters, as well as multibyte whitespace such as the thin space and ideographic space.
| [contains()](craft-helpers-stringhelper.md#method-contains)                                                                                                   | Returns true if the string contains $needle, false otherwise. By default, the comparison is case-sensitive, but can be made insensitive by setting $caseSensitive to false.
| [containsAll()](craft-helpers-stringhelper.md#method-containsall)                                                                                             | Returns true if the string contains all $needles, false otherwise. By default, the comparison is case-sensitive, but can be made insensitive by setting $caseSensitive to false.
| [containsAny()](craft-helpers-stringhelper.md#method-containsany)                                                                                             | Returns true if the string contains any $needles, false otherwise. By default, the comparison is case-sensitive, but can be made insensitive by setting $caseSensitive to false.
| [containsMb4()](craft-helpers-stringhelper.md#method-containsmb4)                                                                                             | Detects whether the given string has any 4-byte UTF-8 characters.
| [convertToUtf8()](craft-helpers-stringhelper.md#method-converttoutf8)                                                                                         | Attempts to convert a string to UTF-8 and clean any non-valid UTF-8 characters.
| [count()](craft-helpers-stringhelper.md#method-count)                                                                                                         | Returns the length of the string, implementing the countable interface.
| [countSubstrings()](craft-helpers-stringhelper.md#method-countsubstrings)                                                                                     | Returns the number of occurrences of $substring in the given string. By default, the comparison is case-sensitive, but can be made insensitive by setting $caseSensitive to false.
| [countWords()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#countWords()-detail "Defined by yii\helpers\BaseStringHelper")           | Counts words in a string.
| [dasherize()](craft-helpers-stringhelper.md#method-dasherize)                                                                                                 | Returns a lowercase and trimmed string separated by dashes. Dashes are inserted before uppercase characters (with the exception of the first character of the string), and in place of spaces as well as underscores.
| [decdec()](craft-helpers-stringhelper.md#method-decdec)                                                                                                       | Base64-decodes and decrypts a string generated by [encenc()](craft-helpers-stringhelper.md#method-encenc).
| [delimit()](craft-helpers-stringhelper.md#method-delimit)                                                                                                     | Returns a lowercase and trimmed string separated by the given delimiter. Delimiters are inserted before uppercase characters (with the exception of the first character of the string), and in place of spaces, dashes, and underscores. Alpha delimiters are not converted to lowercase.
| [dirname()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#dirname()-detail "Defined by yii\helpers\BaseStringHelper")                 | Returns parent directory's path.
| [encenc()](craft-helpers-stringhelper.md#method-encenc)                                                                                                       | Encrypts and base64-encodes a string.
| [encodeMb4()](craft-helpers-stringhelper.md#method-encodemb4)                                                                                                 | HTML-encodes any 4-byte UTF-8 characters.
| [encoding()](craft-helpers-stringhelper.md#method-encoding)                                                                                                   | Gets the encoding of the given string.
| [endsWith()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#endsWith()-detail "Defined by yii\helpers\BaseStringHelper")               | Check if given string ends with specified substring.
| [endsWithAny()](craft-helpers-stringhelper.md#method-endswithany)                                                                                             | Returns true if the string ends with any of $substrings, false otherwise.
| [ensureLeft()](craft-helpers-stringhelper.md#method-ensureleft)                                                                                               | Ensures that the string begins with $substring. If it doesn't, it's prepended.
| [ensureRight()](craft-helpers-stringhelper.md#method-ensureright)                                                                                             | Ensures that the string ends with $substring. If it doesn't, it's appended.
| [escape()](craft-helpers-stringhelper.md#method-escape)                                                                                                       | Create a escape html version of the string via "$this->utf8::htmlspecialchars()".
| [explode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#explode()-detail "Defined by yii\helpers\BaseStringHelper")                 | Explodes string into array, optionally trims values and skips empty ones.
| [extractText()](craft-helpers-stringhelper.md#method-extracttext)                                                                                             | Create an extract from a sentence, so if the search-string was found, it try to centered in the output.
| [first()](craft-helpers-stringhelper.md#method-first)                                                                                                         | Returns the first $n characters of the string.
| [floatToString()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#floatToString()-detail "Defined by yii\helpers\BaseStringHelper")     | Safely casts a float to string independent of the current locale.
| [hasLowerCase()](craft-helpers-stringhelper.md#method-haslowercase)                                                                                           | Returns whether the given string has any lowercase characters in it.
| [hasUpperCase()](craft-helpers-stringhelper.md#method-hasuppercase)                                                                                           | Returns whether the given string has any uppercase characters in it.
| [htmlDecode()](craft-helpers-stringhelper.md#method-htmldecode)                                                                                               | Convert all HTML entities to their applicable characters.
| [htmlEncode()](craft-helpers-stringhelper.md#method-htmlencode)                                                                                               | Convert all applicable characters to HTML entities.
| [humanize()](craft-helpers-stringhelper.md#method-humanize)                                                                                                   | Capitalizes the first word of the string, replaces underscores with spaces, and strips '_id'.
| [indexOf()](craft-helpers-stringhelper.md#method-indexof)                                                                                                     | Returns the index of the first occurrence of $needle in the string, and false if not found.
| [indexOfLast()](craft-helpers-stringhelper.md#method-indexoflast)                                                                                             | Returns the index of the last occurrence of $needle in the string, and false if not found. Accepts an optional offset from which to begin the search. Offsets may be negative to count from the last character in the string.
| [insert()](craft-helpers-stringhelper.md#method-insert)                                                                                                       | Inserts $substring into the string at the $index provided.
| [is()](craft-helpers-stringhelper.md#method-is)                                                                                                               | Returns true if the string contains the $pattern, otherwise false.
| [isAlpha()](craft-helpers-stringhelper.md#method-isalpha)                                                                                                     | Returns true if the string contains only alphabetic chars, false otherwise.
| [isAlphanumeric()](craft-helpers-stringhelper.md#method-isalphanumeric)                                                                                       | Returns true if the string contains only alphabetic and numeric chars, false otherwise.
| [isBase64()](craft-helpers-stringhelper.md#method-isbase64)                                                                                                   | Returns true if the string is base64 encoded, false otherwise.
| [isBlank()](craft-helpers-stringhelper.md#method-isblank)                                                                                                     | Returns true if the string contains only whitespace chars, false otherwise.
| [isHexadecimal()](craft-helpers-stringhelper.md#method-ishexadecimal)                                                                                         | Returns true if the string contains only hexadecimal chars, false otherwise.
| [isHtml()](craft-helpers-stringhelper.md#method-ishtml)                                                                                                       | Returns true if the string contains HTML-Tags, false otherwise.
| [isJson()](craft-helpers-stringhelper.md#method-isjson)                                                                                                       | Returns true if the string is JSON, false otherwise. Unlike json_decode in PHP 5.x, this method is consistent with PHP 7 and other JSON parsers, in that an empty string is not considered valid JSON.
| [isLowerCase()](craft-helpers-stringhelper.md#method-islowercase)                                                                                             | Returns true if the string contains only lower case chars, false otherwise.
| [isSerialized()](craft-helpers-stringhelper.md#method-isserialized)                                                                                           | Returns true if the string is serialized, false otherwise.
| [isUUID()](craft-helpers-stringhelper.md#method-isuuid)                                                                                                       | Returns is the given string matches a v4 UUID pattern.
| [isUpperCase()](craft-helpers-stringhelper.md#method-isuppercase)                                                                                             | Returns true if the string contains only upper case chars, false otherwise.
| [isUtf8()](craft-helpers-stringhelper.md#method-isutf8)                                                                                                       | Checks if the given string is UTF-8 encoded.
| [isWhitespace()](craft-helpers-stringhelper.md#method-iswhitespace)                                                                                           | Returns true if the string contains only whitespace chars, false otherwise.
| [last()](craft-helpers-stringhelper.md#method-last)                                                                                                           | Returns the last $number characters of the string.
| [lastSubstringOf()](craft-helpers-stringhelper.md#method-lastsubstringof)                                                                                     | Returns the last $number characters of the string.
| [length()](craft-helpers-stringhelper.md#method-length)                                                                                                       | Returns the length of the string. An alias for PHP's mb_strlen() function.
| [lineWrapAfterWord()](craft-helpers-stringhelper.md#method-linewrapafterword)                                                                                 | Line wrap the string after $limit, but also after the next word.
| [lines()](craft-helpers-stringhelper.md#method-lines)                                                                                                         | Splits on newlines and carriage returns, returning an array of strings corresponding to the lines in the string.
| [lowercaseFirst()](craft-helpers-stringhelper.md#method-lowercasefirst)                                                                                       | Converts the first character of the supplied string to lower case.
| [matchWildcard()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#matchWildcard()-detail "Defined by yii\helpers\BaseStringHelper")     | Checks if the passed string would match the given shell wildcard pattern.
| [mb_ucfirst()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#mb_ucfirst()-detail "Defined by yii\helpers\BaseStringHelper")           | This method provides a unicode-safe implementation of built-in PHP function `ucfirst()`.
| [mb_ucwords()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#mb_ucwords()-detail "Defined by yii\helpers\BaseStringHelper")           | This method provides a unicode-safe implementation of built-in PHP function `ucwords()`.
| [normalizeNumber()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#normalizeNumber()-detail "Defined by yii\helpers\BaseStringHelper") | Returns string representation of number value with replaced commas to dots, if decimal point of current locale is comma.
| [pad()](craft-helpers-stringhelper.md#method-pad)                                                                                                             | Pads the string to a given length with $padStr. If length is less than or equal to the length of the string, no padding takes places. The default string used for padding is a space, and the default type (one of 'left', 'right', 'both') is 'right'. Throws an InvalidArgumentException if $padType isn't one of those 3 values.
| [padBoth()](craft-helpers-stringhelper.md#method-padboth)                                                                                                     | Returns a new string of a given length such that both sides of the string are padded. Alias for pad() with a $padType of 'both'.
| [padLeft()](craft-helpers-stringhelper.md#method-padleft)                                                                                                     | Returns a new string of a given length such that the beginning of the string is padded. Alias for pad() with a $padType of 'left'.
| [padRight()](craft-helpers-stringhelper.md#method-padright)                                                                                                   | Returns a new string of a given length such that the end of the string is padded. Alias for pad() with a $padType of 'right'.
| [prepend()](craft-helpers-stringhelper.md#method-prepend)                                                                                                     | Returns a new string starting with $string.
| [randomString()](craft-helpers-stringhelper.md#method-randomstring)                                                                                           | Generates a random string of latin alphanumeric characters that defaults to a $length of 36. If $extendedChars is set to true, additional symbols can be included in the string. Note that the generated string is *not* a cryptographically secure string. If you need a cryptographically secure string, use [`Craft::$app->security->generateRandomString()`](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomString()-detail).
| [randomStringWithChars()](craft-helpers-stringhelper.md#method-randomstringwithchars)                                                                         | Generates a random string of characters. Note that the generated string is *not* a cryptographically secure string. If you need a cryptographically secure string, use [`Craft::$app->security->generateRandomString()`](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomString()-detail).
| [regexReplace()](craft-helpers-stringhelper.md#method-regexreplace)                                                                                           | Replaces all occurrences of $pattern in $str by $replacement. An alias for mb_ereg_replace().
| [removeHtml()](craft-helpers-stringhelper.md#method-removehtml)                                                                                               | Remove html via "strip_tags()" from the string.
| [removeHtmlBreak()](craft-helpers-stringhelper.md#method-removehtmlbreak)                                                                                     | Remove all breaks [<br> | \r\n | \r | \n | .
| [removeLeft()](craft-helpers-stringhelper.md#method-removeleft)                                                                                               | Returns a new string with the prefix $substring removed, if present.
| [removeRight()](craft-helpers-stringhelper.md#method-removeright)                                                                                             | Returns a new string with the suffix $substring removed, if present.
| [repeat()](craft-helpers-stringhelper.md#method-repeat)                                                                                                       | Returns a repeated string given a multiplier.
| [replace()](craft-helpers-stringhelper.md#method-replace)                                                                                                     | Replaces all occurrences of $search in $str by $replacement.
| [replaceAll()](craft-helpers-stringhelper.md#method-replaceall)                                                                                               | Replaces all occurrences of $search in $str by $replacement.
| [replaceBeginning()](craft-helpers-stringhelper.md#method-replacebeginning)                                                                                   | Replaces all occurrences of $search from the beginning of string with $replacement.
| [replaceEnding()](craft-helpers-stringhelper.md#method-replaceending)                                                                                         | Replaces all occurrences of $search from the beginning of string with $replacement.
| [replaceFirst()](craft-helpers-stringhelper.md#method-replacefirst)                                                                                           | Replaces first occurrences of $search from the beginning of string with $replacement.
| [replaceLast()](craft-helpers-stringhelper.md#method-replacelast)                                                                                             | Replaces last occurrences of $search from the ending of string with $replacement.
| [replaceMb4()](craft-helpers-stringhelper.md#method-replacemb4)                                                                                               | Replaces 4-byte UTF-8 characters in a string.
| [reverse()](craft-helpers-stringhelper.md#method-reverse)                                                                                                     | Returns a reversed string. A multibyte version of strrev().
| [safeTruncate()](craft-helpers-stringhelper.md#method-safetruncate)                                                                                           | Truncates the string to a given length, while ensuring that it does not split words. If $substring is provided, and truncating occurs, the string is further truncated so that the substring may be appended without exceeding t he desired length.
| [shortenAfterWord()](craft-helpers-stringhelper.md#method-shortenafterword)                                                                                   | Shorten the string after $length, but also after the next word.
| [shuffle()](craft-helpers-stringhelper.md#method-shuffle)                                                                                                     | Shorten the string after $length, but also after the next word.
| [slice()](craft-helpers-stringhelper.md#method-slice)                                                                                                         | Returns the substring beginning at $start, and up to, but not including the index specified by $end. If $end is omitted, the function extracts the remaining string. If $end is negative, it is computed from the end of the string.
| [slugify()](craft-helpers-stringhelper.md#method-slugify)                                                                                                     | Converts the string into an URL slug. This includes replacing non-ASCII characters with their closest ASCII equivalents, removing remaining non-ASCII and non-alphanumeric characters, and replacing whitespace with $replacement. The replacement defaults to a single dash, and the string is also converted to lowercase. The language of the source string can also be supplied for language-specific transliteration.
| [split()](craft-helpers-stringhelper.md#method-split)                                                                                                         | Splits a string into chunks on a given delimiter.
| [splitOnWords()](craft-helpers-stringhelper.md#method-splitonwords)                                                                                           | Splits a string into an array of the words in the string.
| [startsWith()](craft-helpers-stringhelper.md#method-startswith)                                                                                               | Returns true if the string begins with $substring, false otherwise. By default, the comparison is case-sensitive, but can be made insensitive by setting $caseSensitive to false.
| [startsWithAny()](craft-helpers-stringhelper.md#method-startswithany)                                                                                         | Returns true if the string begins with any of $substrings, false otherwise.
| [stripCssMediaQueries()](craft-helpers-stringhelper.md#method-stripcssmediaqueries)                                                                           | Remove CSS media-queries.
| [stripEmptyHtmlTags()](craft-helpers-stringhelper.md#method-stripemptyhtmltags)                                                                               | Remove any empty HTML tags.
| [stripHtml()](craft-helpers-stringhelper.md#method-striphtml)                                                                                                 | Strips HTML tags out of a given string.
| [stripWhitespace()](craft-helpers-stringhelper.md#method-stripwhitespace)                                                                                     | Strip all whitespace characters. This includes tabs and newline characters, as well as multibyte whitespace such as the thin space and ideographic space.
| [substr()](craft-helpers-stringhelper.md#method-substr)                                                                                                       | Returns the substring beginning at $start with the specified|null $length. It differs from the mb_substr() function in that providing a|null $length of null will return the rest of the string, rather than an empty string.
| [substringOf()](craft-helpers-stringhelper.md#method-substringof)                                                                                             | Gets the substring after (or before via "$beforeNeedle") the first occurrence of the "$needle".
| [surround()](craft-helpers-stringhelper.md#method-surround)                                                                                                   | Surrounds $str with the given substring.
| [swapCase()](craft-helpers-stringhelper.md#method-swapcase)                                                                                                   | Returns a case swapped version of the string.
| [tidy()](craft-helpers-stringhelper.md#method-tidy)                                                                                                           | Returns a string with smart quotes, ellipsis characters, and dashes from Windows-1252 (commonly used in Word documents) replaced by their ASCII equivalents.
| [titleize()](craft-helpers-stringhelper.md#method-titleize)                                                                                                   | Returns a trimmed string with the first letter of each word capitalized. Ignores the case of other letters, preserving any acronyms. Also accepts an array, $ignore, allowing you to list words not to be capitalized.
| [titleizeForHumans()](craft-helpers-stringhelper.md#method-titleizeforhumans)                                                                                 | Returns a trimmed string in proper title case.
| [toAscii()](craft-helpers-stringhelper.md#method-toascii)                                                                                                     | Returns an ASCII version of the string. A set of non-ASCII characters are replaced with their closest ASCII counterparts, and the rest are removed.
| [toBoolean()](craft-helpers-stringhelper.md#method-toboolean)                                                                                                 | Returns a boolean representation of the given logical string value.
| [toCamelCase()](craft-helpers-stringhelper.md#method-tocamelcase)                                                                                             | CamelCases a string.
| [toKebabCase()](craft-helpers-stringhelper.md#method-tokebabcase)                                                                                             | Kebab-cases a string.
| [toLowerCase()](craft-helpers-stringhelper.md#method-tolowercase)                                                                                             | Converts all characters in the string to lowercase. An alias for PHP's mb_strtolower().
| [toPascalCase()](craft-helpers-stringhelper.md#method-topascalcase)                                                                                           | PascalCases a string.
| [toSnakeCase()](craft-helpers-stringhelper.md#method-tosnakecase)                                                                                             | Snake_cases a string.
| [toSpaces()](craft-helpers-stringhelper.md#method-tospaces)                                                                                                   | Converts each tab in the string to some number of spaces, as defined by $tabLength. By default, each tab is converted to 4 consecutive spaces.
| [toString()](craft-helpers-stringhelper.md#method-tostring)                                                                                                   | Converts an object to its string representation. If the object is an array, will glue the array elements togeter with the $glue param. Otherwise will cast the object to a string.
| [toTabs()](craft-helpers-stringhelper.md#method-totabs)                                                                                                       | Converts each occurrence of some consecutive number of spaces, as defined by $tabLength, to a tab. By default, each 4 consecutive spaces are converted to a tab.
| [toTitleCase()](craft-helpers-stringhelper.md#method-totitlecase)                                                                                             | Converts the first character of each word in the string to uppercase.
| [toTransliterate()](craft-helpers-stringhelper.md#method-totransliterate)                                                                                     | Returns an ASCII version of the string. A set of non-ASCII characters are replaced with their closest ASCII counterparts, and the rest are removed unless instructed otherwise.
| [toUpperCase()](craft-helpers-stringhelper.md#method-touppercase)                                                                                             | Converts all characters in the string to uppercase. An alias for PHP's mb_strtoupper().
| [toWords()](craft-helpers-stringhelper.md#method-towords)                                                                                                     | Returns an array of words extracted from a string
| [trim()](craft-helpers-stringhelper.md#method-trim)                                                                                                           | Returns a string with whitespace removed from the start and end of the string. Supports the removal of unicode whitespace. Accepts an optional string of characters to strip instead of the defaults.
| [trimLeft()](craft-helpers-stringhelper.md#method-trimleft)                                                                                                   | Returns a string with whitespace removed from the start of the string.
| [trimRight()](craft-helpers-stringhelper.md#method-trimright)                                                                                                 | Returns a string with whitespace removed from the end of the string.
| [truncate()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#truncate()-detail "Defined by yii\helpers\BaseStringHelper")               | Truncates a string to the number of characters specified.
| [truncateWords()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#truncateWords()-detail "Defined by yii\helpers\BaseStringHelper")     | Truncates a string to the number of words specified.
| [upperCamelize()](craft-helpers-stringhelper.md#method-uppercamelize)                                                                                         | Returns an UpperCamelCase version of the supplied string. It trims surrounding spaces, capitalizes letters following digits, spaces, dashes and underscores, and removes spaces, dashes, underscores.
| [upperCaseFirst()](craft-helpers-stringhelper.md#method-uppercasefirst)                                                                                       | Converts the first character of the supplied string to uppercase.

### `UUID()`





Generates a valid v4 UUID string. See [http://stackoverflow.com/a/2040279/684]




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1867-L1887)



#### Returns

[string](http://php.net/language.types.string) – The UUID.

#### Throws

- [Exception](http://php.net/class.exception)


### `afterFirst()`



Since

:   3.3.0



Gets the substring after the first occurrence of a separator.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L45-L52)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search.
- `$separator` ([string](http://php.net/language.types.string)) – The separator string.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to enforce case-sensitivity.

#### Returns

[string](http://php.net/language.types.string) – The resulting string.



### `afterLast()`



Since

:   3.3.0



Gets the substring after the last occurrence of a separator.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L63-L70)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search.
- `$separator` ([string](http://php.net/language.types.string)) – The separator string.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to enforce case-sensitivity.

#### Returns

[string](http://php.net/language.types.string) – The resulting string.



### `append()`



Since

:   3.3.0



Returns a new string with $append appended.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L80-L83)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The initial un-appended string.
- `$append` ([string](http://php.net/language.types.string)) – The string to append.

#### Returns

[string](http://php.net/language.types.string) – The newly appended string.



### `appendRandomString()`



Since

:   3.3.0



Returns a new string with a random string appended to it.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L94-L97)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The initial un-appended string.
- `$length` ([integer](http://php.net/language.types.integer)) – The length of the random string.
- `$possibleChars` ([string](http://php.net/language.types.string)) – The possible random characters to append.

#### Returns

[string](http://php.net/language.types.string) – The newly appended string.



### `appendUniqueIdentifier()`



Since

:   3.3.0



Returns a new string with a unique identifier appended to it.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L108-L111)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The initial un-appended string.
- `$entropyExtra` ([string](http://php.net/language.types.string)) – Extra entropy via a string or int value.
- `$md5` ([boolean](http://php.net/language.types.boolean)) – Whether or not to return the unique identifier as a md5 hash.

#### Returns

[string](http://php.net/language.types.string) – The newly appended string.



### `asciiCharMap()`





Returns ASCII character mappings, merging in any custom defined mappings
from the <config:customAsciiCharMappings> config setting.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L121-L157)


#### Arguments

- `$flat` ([boolean](http://php.net/language.types.boolean)) – Whether the mappings should be returned as a flat array (é => e)
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Whether to include language-specific mappings (only applied if $flat is true)

#### Returns

[array](http://php.net/language.types.array) – The fully merged ASCII character mappings.



### `at()`



Since

:   3.3.0



Returns the character at $index, with indexes starting at 0.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L167-L170)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The initial string to search.
- `$index` ([integer](http://php.net/language.types.integer)) – The position of the character.

#### Returns

[string](http://php.net/language.types.string) – The resulting character.



### `beforeFirst()`



Since

:   3.3.0



Gets the substring before the first occurrence of a separator.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L181-L188)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search.
- `$separator` ([string](http://php.net/language.types.string)) – The separator string.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string) – The resulting string.



### `beforeLast()`



Since

:   3.3.0



Gets the substring before the last occurrence of a separator.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L199-L206)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search.
- `$separator` ([string](http://php.net/language.types.string)) – The separator string.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string) – The resulting string.



### `between()`





Returns the substring between $start and $end, if found, or an empty string.

An optional offset may be supplied from which to begin the search for the start string.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L218-L221)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search.
- `$start` ([string](http://php.net/language.types.string)) – Delimiter marking the start of the substring.
- `$end` ([string](http://php.net/language.types.string)) – Delimiter marking the end of the substring.
- `$offset` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Index from which to begin the search. Defaults to 0.

#### Returns

[string](http://php.net/language.types.string) – The resulting string.



### `camelCase()`





Returns a camelCase version of the given string. Trims surrounding spaces, capitalizes letters following digits,
spaces, dashes and underscores, and removes spaces, dashes, as well as underscores.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L230-L233)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to convert to camelCase.

#### Returns

[string](http://php.net/language.types.string) – The string in camelCase.



### `capitalizePersonalName()`



Since

:   3.3.0



Returns the string with the first letter of each word capitalized,
except for when the word is a name which shouldn't be capitalized.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L243-L246)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to parse.

#### Returns

[string](http://php.net/language.types.string) – The string with personal names capitalized.



### `charsAsArray()`





Returns an array consisting of the characters in the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L254-L257)


#### Arguments

- `$str` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)[] – An array of string chars



### `collapseWhitespace()`





Trims the string and replaces consecutive whitespace characters with a single space. This includes tabs and
newline characters, as well as multibyte whitespace such as the thin space and ideographic space.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L266-L269)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to remove the whitespace from.

#### Returns

[string](http://php.net/language.types.string) – The trimmed string with condensed whitespace.



### `contains()`





Returns true if the string contains $needle, false otherwise. By default, the comparison is case-sensitive, but
can be made insensitive by setting $caseSensitive to false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L280-L283)


#### Arguments

- `$haystack` ([string](http://php.net/language.types.string)) – The string being checked.
- `$needle` ([string](http://php.net/language.types.string)) – The substring to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to force case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $haystack contains $needle.



### `containsAll()`





Returns true if the string contains all $needles, false otherwise. By default, the comparison is case-sensitive,
but can be made insensitive by setting $caseSensitive to false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L313-L316)


#### Arguments

- `$haystack` ([string](http://php.net/language.types.string)) – The string being checked.
- `$needles` ([array](http://php.net/language.types.array)) – The substrings to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to force case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $haystack contains all $needles.



### `containsAny()`





Returns true if the string contains any $needles, false otherwise. By default, the comparison is case-sensitive,
but can be made insensitive by setting $caseSensitive to false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L327-L330)


#### Arguments

- `$haystack` ([string](http://php.net/language.types.string)) – The string being checked.
- `$needles` ([array](http://php.net/language.types.array)) – The substrings to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to force case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $haystack contains any $needles.



### `containsMb4()`





Detects whether the given string has any 4-byte UTF-8 characters.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L291-L302)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the string contains any 4-byte UTF-8 characters or not.



### `convertToUtf8()`





Attempts to convert a string to UTF-8 and clean any non-valid UTF-8 characters.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L338-L361)


#### Arguments

- `$str` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `count()`



Since

:   3.3.0



Returns the length of the string, implementing the countable interface.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L370-L373)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to count.

#### Returns

[integer](http://php.net/language.types.integer) – The length of the string.



### `countSubstrings()`





Returns the number of occurrences of $substring in the given string. By default, the comparison is case-sensitive,
but can be made insensitive by setting $caseSensitive to false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L384-L387)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to search through.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to search for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to enforce case-sensitivity

#### Returns

[integer](http://php.net/language.types.integer) – The number of $substring occurrences.



### `dasherize()`



Since

:   3.3.0



Returns a lowercase and trimmed string separated by dashes. Dashes are
inserted before uppercase characters (with the exception of the first
character of the string), and in place of spaces as well as underscores.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L398-L401)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to dasherize.

#### Returns

[string](http://php.net/language.types.string) – The dasherized string.



### `decdec()`





Base64-decodes and decrypts a string generated by [encenc()](craft-helpers-stringhelper.md#method-encenc).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L411-L422)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string.

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  on OpenSSL not loaded
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  on OpenSSL error


### `delimit()`





Returns a lowercase and trimmed string separated by the given delimiter. Delimiters are inserted before
uppercase characters (with the exception of the first character of the string), and in place of spaces,
dashes, and underscores. Alpha delimiters are not converted to lowercase.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L433-L436)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to delimit.
- `$delimiter` ([string](http://php.net/language.types.string)) – Sequence used to separate parts of the string

#### Returns

[string](http://php.net/language.types.string) – The delimited string.



### `encenc()`





Encrypts and base64-encodes a string.



See also [decdec()](craft-helpers-stringhelper.md#method-decdec)
[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L447-L450)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  on OpenSSL not loaded
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  on OpenSSL error


### `encodeMb4()`





HTML-encodes any 4-byte UTF-8 characters.



See also http://stackoverflow.com/a/16496730/1688568
[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L459-L469)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string

#### Returns

[string](http://php.net/language.types.string) – The string with converted 4-byte UTF-8 characters



### `encoding()`





Gets the encoding of the given string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L477-L480)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[string](http://php.net/language.types.string) – The encoding of the string.



### `endsWithAny()`



Since

:   3.3.0



Returns true if the string ends with any of $substrings, false otherwise.

By default, the comparison is case-sensitive, but can be made insensitive
by setting $caseSensitive to false.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L493-L496)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check the end of.
- `$substrings` – [] Substrings to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to force case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str ends with $substring.



### `ensureLeft()`





Ensures that the string begins with $substring. If it doesn't, it's prepended.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L505-L508)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to modify.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to add if not present.

#### Returns

[string](http://php.net/language.types.string) – The string prefixed by the $substring.



### `ensureRight()`





Ensures that the string ends with $substring. If it doesn't, it's appended.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L517-L520)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to modify.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to add if not present.

#### Returns

[string](http://php.net/language.types.string) – The string suffixed by the $substring.



### `escape()`



Since

:   3.3.0



Create a escape html version of the string via "$this->utf8::htmlspecialchars()".




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L529-L532)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to modify.

#### Returns

[string](http://php.net/language.types.string) – The string to escape.



### `extractText()`



Since

:   3.3.0



Create an extract from a sentence, so if the search-string was found, it try to centered in the output.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L544-L547)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The source string.
- `$search` ([string](http://php.net/language.types.string)) – The string to search for.
- `$length` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – By default, the length of the text divided by two.
- `$replacerForSkippedText` ([string](http://php.net/language.types.string)) – The string to use for skipped text.

#### Returns

[string](http://php.net/language.types.string) – The string to escape.



### `first()`





Returns the first $n characters of the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L556-L559)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string from which to get the substring.
- `$number` ([integer](http://php.net/language.types.integer)) – The Number of chars to retrieve from the start.

#### Returns

[string](http://php.net/language.types.string) – The first $number characters.



### `hasLowerCase()`





Returns whether the given string has any lowercase characters in it.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L567-L570)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – If the string has a lowercase character or not.



### `hasUpperCase()`





Returns whether the given string has any uppercase characters in it.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L578-L581)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – If the string has an uppercase character or not.



### `htmlDecode()`



Since

:   3.3.0



Convert all HTML entities to their applicable characters.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L591-L594)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$flags` ([integer](http://php.net/language.types.integer)) – A bitmask of these flags: https://www.php.net/manual/en/function.html-entity-decode.php

#### Returns

[string](http://php.net/language.types.string) – The decoded string.



### `htmlEncode()`



Since

:   3.3.0



Convert all applicable characters to HTML entities.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L604-L607)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$flags` ([integer](http://php.net/language.types.integer)) – A bitmask of these flags: https://www.php.net/manual/en/function.html-entity-encode.php

#### Returns

[string](http://php.net/language.types.string) – The encoded string.



### `humanize()`



Since

:   3.3.0



Capitalizes the first word of the string, replaces underscores with
spaces, and strips '_id'.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L617-L620)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[string](http://php.net/language.types.string) – The humanized string.



### `indexOf()`





Returns the index of the first occurrence of $needle in the string, and false if not found.

Accepts an optional offset from which to begin the search.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L632-L639)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check the index of.
- `$needle` ([string](http://php.net/language.types.string)) – The substring to look for.
- `$offset` ([integer](http://php.net/language.types.integer)) – The offset from which to search.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether to perform a case-sensitive search or not.

#### Returns

[integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean) – The occurrence's index if found, otherwise false.



### `indexOfLast()`





Returns the index of the last occurrence of $needle in the string,
and false if not found. Accepts an optional offset from which to begin
the search. Offsets may be negative to count from the last character
in the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L653-L660)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check the last index of.
- `$needle` ([string](http://php.net/language.types.string)) – The substring to look for.
- `$offset` ([integer](http://php.net/language.types.integer)) – The offset from which to search.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether to perform a case-sensitive search or not.

#### Returns

[integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean) – The occurrence's last index if found, otherwise false.



### `insert()`





Inserts $substring into the string at the $index provided.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L670-L673)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to insert into.
- `$substring` ([string](http://php.net/language.types.string)) – The string to be inserted.
- `$index` ([integer](http://php.net/language.types.integer)) – The 0-based index at which to insert the substring.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the insertion



### `is()`



Since

:   3.3.0



Returns true if the string contains the $pattern, otherwise false.

WARNING: Asterisks ("*") are translated into (".*") zero-or-more regular
expression wildcards.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L686-L689)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$pattern` ([string](http://php.net/language.types.string)) – The string or pattern to match against.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not we match the provided pattern.



### `isAlpha()`





Returns true if the string contains only alphabetic chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L697-L700)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only alphabetic chars.



### `isAlphanumeric()`





Returns true if the string contains only alphabetic and numeric chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L708-L711)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only alphanumeric chars.



### `isBase64()`



Since

:   3.3.0



Returns true if the string is base64 encoded, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L721-L724)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.
- `$emptyStringIsValid` ([boolean](http://php.net/language.types.boolean)) – Whether or not an empty string is considered valid.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str is base64 encoded.



### `isBlank()`



Since

:   3.3.0



Returns true if the string contains only whitespace chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L733-L736)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only whitespace characters.



### `isHexadecimal()`



Since

:   3.3.0



Returns true if the string contains only hexadecimal chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L745-L748)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only hexadecimal chars.



### `isHtml()`



Since

:   3.3.0



Returns true if the string contains HTML-Tags, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L757-L760)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains HTML tags.



### `isJson()`



Since

:   3.3.0



Returns true if the string is JSON, false otherwise. Unlike json_decode
in PHP 5.x, this method is consistent with PHP 7 and other JSON parsers,
in that an empty string is not considered valid JSON.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L772-L775)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.
- `$onlyArrayOrObjectResultsAreValid` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str is JSON.



### `isLowerCase()`





Returns true if the string contains only lower case chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L783-L786)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str is only lower case characters.



### `isSerialized()`



Since

:   3.3.0



Returns true if the string is serialized, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L795-L798)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str is serialized.



### `isUUID()`





Returns is the given string matches a v4 UUID pattern.

Version 4 UUIDs have the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x
is any hexadecimal digit and y is one of 8, 9, A, or B.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L845-L848)


#### Arguments

- `$uuid` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the string matches a v4 UUID pattern.



### `isUpperCase()`





Returns true if the string contains only upper case chars, false
otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L807-L810)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only lower case characters.



### `isUtf8()`



Since

:   3.3.0



Checks if the given string is UTF-8 encoded.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L819-L822)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the string was UTF encoded or not.



### `isWhitespace()`



Since

:   3.3.0



Returns true if the string contains only whitespace chars, false otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L831-L834)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str contains only whitespace characters.



### `last()`





Returns the last $number characters of the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L857-L860)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string from which to get the substring.
- `$number` ([integer](http://php.net/language.types.integer)) – The Number of chars to retrieve from the end.

#### Returns

[string](http://php.net/language.types.string) – The last $number characters.



### `lastSubstringOf()`



Since

:   3.3.0



Returns the last $number characters of the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L872-L879)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string from which to get the substring.
- `$needle` ([string](http://php.net/language.types.string)) – The substring to look for.
- `$beforeNeedle` ([boolean](http://php.net/language.types.boolean))
- `$caseSensetive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to perform a case sensitive search.

#### Returns

[string](http://php.net/language.types.string) – The last $number characters.



### `length()`





Returns the length of the string. An alias for PHP's mb_strlen() function.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L887-L890)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to get the length of.

#### Returns

[integer](http://php.net/language.types.integer) – The number of characters in $str.



### `lineWrapAfterWord()`



Since

:   3.3.0



Line wrap the string after $limit, but also after the next word.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L900-L903)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$limit` ([integer](http://php.net/language.types.integer)) – The number of characters to insert the line wrap.

#### Returns

[string](http://php.net/language.types.string) – The line wrapped string.



### `lines()`





Splits on newlines and carriage returns, returning an array of strings
corresponding to the lines in the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L912-L922)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to split.

#### Returns

[string](http://php.net/language.types.string)[] – An array of strings.



### `lowercaseFirst()`





Converts the first character of the supplied string to lower case.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L930-L933)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to modify.

#### Returns

[string](http://php.net/language.types.string) – The string with the first character converted to lowercase.



### `pad()`



Since

:   3.3.0



Pads the string to a given length with $padStr. If length is less than
or equal to the length of the string, no padding takes places. The
default string used for padding is a space, and the default type (one of
'left', 'right', 'both') is 'right'. Throws an InvalidArgumentException
if $padType isn't one of those 3 values.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L949-L952)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$length` ([integer](http://php.net/language.types.integer)) – The desired length after padding.
- `$padStr` ([string](http://php.net/language.types.string)) – The string used to pad. Defaults to space.
- `$padType` ([string](http://php.net/language.types.string)) – 'left', 'right', 'both'. Defaults to 'right'.

#### Returns

[string](http://php.net/language.types.string) – The padded string.



### `padBoth()`



Since

:   3.3.0



Returns a new string of a given length such that both sides of the
string are padded. Alias for pad() with a $padType of 'both'.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L964-L967)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$length` ([integer](http://php.net/language.types.integer)) – The desired length after padding.
- `$padStr` ([string](http://php.net/language.types.string)) – The string used to pad. Defaults to space.

#### Returns

[string](http://php.net/language.types.string) – The padded string.



### `padLeft()`



Since

:   3.3.0



Returns a new string of a given length such that the beginning of the
string is padded. Alias for pad() with a $padType of 'left'.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L979-L982)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$length` ([integer](http://php.net/language.types.integer)) – The desired length after padding.
- `$padStr` ([string](http://php.net/language.types.string)) – The string used to pad. Defaults to space.

#### Returns

[string](http://php.net/language.types.string) – The padded string.



### `padRight()`



Since

:   3.3.0



Returns a new string of a given length such that the end of the
string is padded. Alias for pad() with a $padType of 'right'.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L994-L997)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$length` ([integer](http://php.net/language.types.integer)) – The desired length after padding.
- `$padStr` ([string](http://php.net/language.types.string)) – The string used to pad. Defaults to space.

#### Returns

[string](http://php.net/language.types.string) – The padded string.



### `prepend()`





Returns a new string starting with $string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1006-L1009)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$string` ([string](http://php.net/language.types.string)) – The string to prepend.

#### Returns

[string](http://php.net/language.types.string) – The full prepended string.



### `randomString()`





Generates a random string of latin alphanumeric characters that defaults to a $length of 36. If $extendedChars is
set to true, additional symbols can be included in the string. Note that the generated string is *not* a
cryptographically secure string. If you need a cryptographically secure string, use
[`Craft::$app->security->generateRandomString()`](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomString()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1022-L1031)


#### Arguments

- `$length` ([integer](http://php.net/language.types.integer)) – The length of the random string. Defaults to 36.
- `$extendedChars` ([boolean](http://php.net/language.types.boolean)) – Whether to include symbols in the random string.

#### Returns

[string](http://php.net/language.types.string) – The randomly generated string.

#### Throws

- [Exception](http://php.net/class.exception)


### `randomStringWithChars()`





Generates a random string of characters. Note that the generated string is *not* a
cryptographically secure string. If you need a cryptographically secure string, use
[`Craft::$app->security->generateRandomString()`](https://www.yiiframework.com/doc/api/2.0/yii-base-security#generateRandomString()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1043-L1063)


#### Arguments

- `$validChars` ([string](http://php.net/language.types.string)) – A string containing the valid characters
- `$length` ([integer](http://php.net/language.types.integer)) – The length of the random string

#### Returns

[string](http://php.net/language.types.string) – The randomly generated string.

#### Throws

- [Exception](http://php.net/class.exception)


### `regexReplace()`





Replaces all occurrences of $pattern in $str by $replacement. An alias for mb_ereg_replace().




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1075-L1078)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$pattern` ([string](http://php.net/language.types.string)) – The regular expression pattern.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.
- `$options` ([string](http://php.net/language.types.string)) – Matching conditions to be used. Defaults to 'msr'. See
[here](http://php.net/manual/en/function.mb-ereg-replace.php) for all options.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `removeHtml()`



Since

:   3.3.0



Remove html via "strip_tags()" from the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1088-L1091)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$allowableTags` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Tags that should not be stripped.

#### Returns

[string](http://php.net/language.types.string) – The string with Html removed.



### `removeHtmlBreak()`



Since

:   3.3.0



Remove all breaks [<br> | \r\n | \r | \n | .

..] from the string.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1101-L1104)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$replacement` ([string](http://php.net/language.types.string)) – The optional string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The string with Html breaks removed.



### `removeLeft()`





Returns a new string with the prefix $substring removed, if present.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1113-L1116)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string from which to remove the prefix.
- `$substring` ([string](http://php.net/language.types.string)) – The prefix to remove.

#### Returns

[string](http://php.net/language.types.string) – The string without the prefix $substring.



### `removeRight()`





Returns a new string with the suffix $substring removed, if present.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1125-L1128)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string from which to remove the suffix.
- `$substring` ([string](http://php.net/language.types.string)) – The suffix to remove.

#### Returns

[string](http://php.net/language.types.string) – The string without the suffix $substring.



### `repeat()`



Since

:   3.3.0



Returns a repeated string given a multiplier.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1138-L1141)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$multiplier` ([integer](http://php.net/language.types.integer)) – The number of times to repeat the string.

#### Returns

[string](http://php.net/language.types.string) – The string without the suffix $substring.



### `replace()`





Replaces all occurrences of $search in $str by $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1151-L1154)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([string](http://php.net/language.types.string)) – The needle to search for.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceAll()`



Since

:   3.3.0



Replaces all occurrences of $search in $str by $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1166-L1169)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([array](http://php.net/language.types.array)) – The needle(s) to search for.
- `$replacement` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string)) – The string(s) to replace with.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to perform a case-sensitive search.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceBeginning()`



Since

:   3.3.0



Replaces all occurrences of $search from the beginning of string with $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1180-L1183)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([string](http://php.net/language.types.string)) – The needle to search for.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceEnding()`



Since

:   3.3.0



Replaces all occurrences of $search from the beginning of string with $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1194-L1197)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([string](http://php.net/language.types.string)) – The needle to search for.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceFirst()`



Since

:   3.3.0



Replaces first occurrences of $search from the beginning of string with $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1208-L1211)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([string](http://php.net/language.types.string)) – The needle to search for.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceLast()`



Since

:   3.3.0



Replaces last occurrences of $search from the ending of string with $replacement.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1222-L1225)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The haystack to search through.
- `$search` ([string](http://php.net/language.types.string)) – The needle to search for.
- `$replacement` ([string](http://php.net/language.types.string)) – The string to replace with.

#### Returns

[string](http://php.net/language.types.string) – The resulting string after the replacements.



### `replaceMb4()`



Since

:   3.1.13



Replaces 4-byte UTF-8 characters in a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1249-L1261)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string
- `$replace` ([string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable)) – The replacement string, or callback function.

#### Returns

[string](http://php.net/language.types.string) – The string with converted 4-byte UTF-8 characters


---

#### Example

::: code
```php
// Convert emojis to smilies
$string = StringHelper::replaceMb4($string, function($char) {
    switch ($char) {
        case '😀':
            return ':)';
        case '☹️':
            return ':(';
        default:
            return '¯\_(ツ)_/¯';
    }
});
```
:::


### `reverse()`





Returns a reversed string. A multibyte version of strrev().




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1269-L1272)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to reverse.

#### Returns

[string](http://php.net/language.types.string) – The reversed string.



### `safeTruncate()`



Since

:   3.3.0



Truncates the string to a given length, while ensuring that it does not split words. If $substring is provided,
and truncating occurs, the string is further truncated so that the substring may be appended without exceeding t
he desired length.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1286-L1289)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to truncate.
- `$length` ([integer](http://php.net/language.types.integer)) – The desired length of the truncated string.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to append if it can fit.
- `$ignoreDoNotSplitWordsForOneWord` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string) – The resulting string after truncating.



### `shortenAfterWord()`



Since

:   3.3.0



Shorten the string after $length, but also after the next word.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1300-L1303)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process
- `$length` ([integer](http://php.net/language.types.integer)) – The length to start the shortening.
- `$strAddOn` ([string](http://php.net/language.types.string)) – The character to use after the length.

#### Returns

[string](http://php.net/language.types.string) – The shortened string.



### `shuffle()`



Since

:   3.3.0



Shorten the string after $length, but also after the next word.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1312-L1315)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process

#### Returns

[string](http://php.net/language.types.string) – The shortened string.



### `slice()`



Since

:   3.3.0



Returns the substring beginning at $start, and up to, but not including
the index specified by $end. If $end is omitted, the function extracts
the remaining string. If $end is negative, it is computed from the end
of the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1329-L1332)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process
- `$start` ([integer](http://php.net/language.types.integer)) – Index from which to begin the extraction.
- `$end` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Index at which to end the extraction.

#### Returns

[string](http://php.net/language.types.string) – The extracted substring.



### `slugify()`



Since

:   3.3.0



Converts the string into an URL slug. This includes replacing non-ASCII
characters with their closest ASCII equivalents, removing remaining
non-ASCII and non-alphanumeric characters, and replacing whitespace with
$replacement. The replacement defaults to a single dash, and the string
is also converted to lowercase. The language of the source string can
also be supplied for language-specific transliteration.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1348-L1351)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process
- `$replacement` ([string](http://php.net/language.types.string)) – The string used to replace whitespace.
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The language of the source string.

#### Returns

[string](http://php.net/language.types.string) – The string converted to a URL slug.



### `split()`



Since

:   3.3.0



Splits a string into chunks on a given delimiter.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1361-L1364)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string
- `$delimiter` ([string](http://php.net/language.types.string)) – The delimiter to split the string on (defaults to a comma)

#### Returns

[string](http://php.net/language.types.string)[] – The segments of the string.



### `splitOnWords()`





Splits a string into an array of the words in the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1372-L1379)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string

#### Returns

[string](http://php.net/language.types.string)[] – The words in the string



### `startsWith()`





Returns true if the string begins with $substring, false otherwise. By default, the comparison is case-sensitive,
but can be made insensitive by setting $caseSensitive to false.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1390-L1393)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check the start of.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to enforce case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str starts with $substring.



### `startsWithAny()`



Since

:   3.3.0



Returns true if the string begins with any of $substrings, false otherwise.

By default the comparison is case-sensitive, but can be made insensitive by
setting $caseSensitive to false.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1406-L1409)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to check the start of.
- `$substrings` ([array](http://php.net/language.types.array)) – The substrings to look for.
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether or not to enforce case-sensitivity.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not $str starts with $substring.



### `stripCssMediaQueries()`



Since

:   3.3.0



Remove CSS media-queries.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1418-L1421)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[string](http://php.net/language.types.string) – The string, sans any CSS media queries.



### `stripEmptyHtmlTags()`



Since

:   3.3.0



Remove any empty HTML tags.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1430-L1433)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[string](http://php.net/language.types.string) – The string, sans any empty HTML tags.



### `stripHtml()`



Since

:   3.3.0



Strips HTML tags out of a given string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1442-L1445)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string.

#### Returns

[string](http://php.net/language.types.string) – The string, sans-HTML



### `stripWhitespace()`



Since

:   3.3.0



Strip all whitespace characters. This includes tabs and newline characters,
as well as multibyte whitespace such as the thin space and ideographic space.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1455-L1458)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string.

#### Returns

[string](http://php.net/language.types.string) – The string, sans-whitespace.



### `substr()`





Returns the substring beginning at $start with the specified|null $length. It differs from the mb_substr() function in
that providing a|null $length of null will return the rest of the string, rather than an empty string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1469-L1472)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to get the length of.
- `$start` ([integer](http://php.net/language.types.integer)) – Position of the first character to use.
- `$length` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Maximum number of characters used.

#### Returns

[string](http://php.net/language.types.string) – The substring of $str.



### `substringOf()`



Since

:   3.3.0



Gets the substring after (or before via "$beforeNeedle") the first occurrence of the "$needle".

If no match is found, returns an empty string.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1485-L1492)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$needle` ([string](http://php.net/language.types.string)) – The string to look for.
- `$beforeNeedle` ([boolean](http://php.net/language.types.boolean))
- `$caseSensitive` ([boolean](http://php.net/language.types.boolean)) – Whether to perform a case-sensitive search or not.

#### Returns

[string](http://php.net/language.types.string) – The substring of $str.



### `surround()`



Since

:   3.3.0



Surrounds $str with the given substring.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1502-L1505)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$substring` ([string](http://php.net/language.types.string)) – The substring to add to both sides.

#### Returns

[string](http://php.net/language.types.string) – The string with the substring both prepended and appended.



### `swapCase()`





Returns a case swapped version of the string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1513-L1516)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to swap case.

#### Returns

[string](http://php.net/language.types.string) – The string with each character's case swapped.



### `tidy()`



Since

:   3.3.0



Returns a string with smart quotes, ellipsis characters, and dashes from
Windows-1252 (commonly used in Word documents) replaced by their ASCII
equivalents.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1527-L1530)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to tidy.

#### Returns

[string](http://php.net/language.types.string) – The tidy string.



### `titleize()`





Returns a trimmed string with the first letter of each word capitalized. Ignores the case of other letters,
preserving any acronyms. Also accepts an array, $ignore, allowing you to list words not to be capitalized.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1540-L1543)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to titleize.
- `$ignore` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – An array of words not to capitalize.

#### Returns

[string](http://php.net/language.types.string) – The titleized string.



### `titleizeForHumans()`



Since

:   3.3.0



Returns a trimmed string in proper title case.

Also accepts an array, $ignore, allowing you to list words not to be
capitalized.

Adapted from John Gruber's script.

See also https://gist.github.com/gruber/9f9e8650d68b13ce4d78
[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1560-L1563)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to titleize.
- `$ignore` ([array](http://php.net/language.types.array)) – An array of words not to capitalize.

#### Returns

[string](http://php.net/language.types.string) – The titleized string.



### `toAscii()`





Returns an ASCII version of the string. A set of non-ASCII characters are replaced with their closest ASCII
counterparts, and the rest are removed.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1573-L1576)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to convert.
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The language to pull ASCII character mappings for.

#### Returns

[string](http://php.net/language.types.string) – The string that contains only ASCII characters.



### `toBoolean()`



Since

:   3.3.0



Returns a boolean representation of the given logical string value.

For example, 'true', '1', 'on' and 'yes' will return true. 'false', '0',
'off', and 'no' will return false. In all instances, case is ignored.
For other numeric strings, their sign will determine the return value.
In addition, blank strings consisting of only whitespace will return
false. For all other strings, the return value is a result of a
boolean cast.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1591-L1594)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[boolean](http://php.net/language.types.boolean) – A boolean value for the string.



### `toCamelCase()`





CamelCases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1602-L1605)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to camelize.

#### Returns

[string](http://php.net/language.types.string) – The string camelized.



### `toKebabCase()`





Kebab-cases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1616-L1624)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string the process.
- `$glue` ([string](http://php.net/language.types.string)) – The string used to glue the words together (default is a hyphen)
- `$lower` ([boolean](http://php.net/language.types.boolean)) – Whether the string should be lowercased (default is true)
- `$removePunctuation` ([boolean](http://php.net/language.types.boolean)) – Whether punctuation marks should be removed (default is true)

#### Returns

[string](http://php.net/language.types.string) – The kebab-cased string.



### `toLowerCase()`





Converts all characters in the string to lowercase. An alias for PHP's mb_strtolower().




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1632-L1635)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to convert to lowercase.

#### Returns

[string](http://php.net/language.types.string) – The lowercase string.



### `toPascalCase()`





PascalCases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1643-L1652)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.

#### Returns

[string](http://php.net/language.types.string)



### `toSnakeCase()`





Snake_cases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1660-L1663)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to snakeize.

#### Returns

[string](http://php.net/language.types.string) – The snakeized string.



### `toSpaces()`



Since

:   3.3.0



Converts each tab in the string to some number of spaces, as defined by
$tabLength. By default, each tab is converted to 4 consecutive spaces.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1674-L1677)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$tabLength` ([integer](http://php.net/language.types.integer)) – The number of spaces to replace each tab with. Defaults to four.

#### Returns

[string](http://php.net/language.types.string) – The string with tabs converted to spaces.



### `toString()`





Converts an object to its string representation. If the object is an array, will glue the array elements togeter
with the $glue param. Otherwise will cast the object to a string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1687-L1706)


#### Arguments

- `$object` (`mixed`) – The object to convert to a string.
- `$glue` ([string](http://php.net/language.types.string)) – The glue to use if the object is an array.

#### Returns

[string](http://php.net/language.types.string) – The string representation of the object.



### `toTabs()`



Since

:   3.3.0



Converts each occurrence of some consecutive number of spaces, as
defined by $tabLength, to a tab. By default, each 4 consecutive spaces
are converted to a tab.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1718-L1721)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to process.
- `$tabLength` ([integer](http://php.net/language.types.integer)) – The number of spaces to replace with a tab. Defaults to four.

#### Returns

[string](http://php.net/language.types.string) – The string with spaces converted to tabs.



### `toTitleCase()`





Converts the first character of each word in the string to uppercase.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1729-L1732)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to convert case.

#### Returns

[string](http://php.net/language.types.string) – The title-cased string.



### `toTransliterate()`



Since

:   3.3.0



Returns an ASCII version of the string. A set of non-ASCII characters are
replaced with their closest ASCII counterparts, and the rest are removed
unless instructed otherwise.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1744-L1747)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to transliterate.
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Use "transliterator_transliterate()" from the PHP intl extension.

#### Returns

[string](http://php.net/language.types.string) – The transliterated string.



### `toUpperCase()`





Converts all characters in the string to uppercase. An alias for PHP's mb_strtoupper().




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1755-L1758)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to convert to uppercase.

#### Returns

[string](http://php.net/language.types.string) – The uppercase string.



### `toWords()`



Since

:   3.1.0



Returns an array of words extracted from a string




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1769-L1789)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string
- `$lower` ([boolean](http://php.net/language.types.boolean)) – Whether the returned words should be lowercased
- `$removePunctuation` ([boolean](http://php.net/language.types.boolean)) – Whether punctuation should be removed from the returned words

#### Returns

[string](http://php.net/language.types.string)[] – The prepped words in the string



### `trim()`





Returns a string with whitespace removed from the start and end of the
string. Supports the removal of unicode whitespace. Accepts an optional
string of characters to strip instead of the defaults.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1800-L1803)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to trim.
- `$chars` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – String of characters to strip. Defaults to null.

#### Returns

[string](http://php.net/language.types.string) – The trimmed $str.



### `trimLeft()`



Since

:   3.3.0



Returns a string with whitespace removed from the start of the string.

Supports the removal of unicode whitespace. Accepts an optional
string of characters to strip instead of the defaults.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1815-L1818)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to trim.
- `$chars` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – String of characters to strip. Defaults to null.

#### Returns

[string](http://php.net/language.types.string) – The trimmed $str.



### `trimRight()`



Since

:   3.3.0



Returns a string with whitespace removed from the end of the string.

Supports the removal of unicode whitespace. Accepts an optional
string of characters to strip instead of the defaults.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1830-L1833)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to trim.
- `$chars` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – String of characters to strip. Defaults to null.

#### Returns

[string](http://php.net/language.types.string) – The trimmed $str.



### `upperCamelize()`



Since

:   3.3.0



Returns an UpperCamelCase version of the supplied string. It trims
surrounding spaces, capitalizes letters following digits, spaces, dashes
and underscores, and removes spaces, dashes, underscores.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1844-L1847)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to upper camelize.

#### Returns

[string](http://php.net/language.types.string) – The upper camelized $str.



### `upperCaseFirst()`



Since

:   3.3.0



Converts the first character of the supplied string to uppercase.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/StringHelper.php#L1856-L1859)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to modify.

#### Returns

[string](http://php.net/language.types.string) – The string with the first character being uppercase.





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------
| [truncateHtml()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basestringhelper#truncateHtml()-detail "Defined by yii\helpers\BaseStringHelper") | Truncate a string while preserving the HTML.



## Constants

| Constant       | Description
| -------------- | -----------
| `UTF8`         |
| `UUID_PATTERN` |



