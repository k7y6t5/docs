---
title: craft\web\twig\Extension
code:
  - php
  - twig
---

# Extension

Type

:   Class

Namespace

:   craft\web\twig

Inherits

:   [craft\web\twig\Extension](craft-web-twig-extension.md) &raquo;
`Twig\Extension\AbstractExtension`

Implements

:   `Twig\Extension\GlobalsInterface`

Since

:   3.0.0



Class Extension





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php)




## Protected Properties

| Property                                               | Description
| ------------------------------------------------------ | -------------------------------------------------------------------------------
| [environment](craft-web-twig-extension.md#environment) | `\Twig\Environment`, [null](http://php.net/language.types.null)
| [view](craft-web-twig-extension.md#view)               | [craft\web\View](craft-web-view.md), [null](http://php.net/language.types.null)

### `environment`



Type

:   `\Twig\Environment`, [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L84)



### `view`



Type

:   [craft\web\View](craft-web-view.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L79)





## Public Methods

| Method                                                                            | Description
| --------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__construct()](craft-web-twig-extension.md#method-construct)                     | Constructor
| [appendFilter()](craft-web-twig-extension.md#method-appendfilter)                 | Appends HTML to the end of the given tag.
| [atomFilter()](craft-web-twig-extension.md#method-atomfilter)                     | Converts a date to the Atom format.
| [attrFilter()](craft-web-twig-extension.md#method-attrfilter)                     | Modifies a HTML tag’s attributes, supporting the same attribute definitions as [craft\helpers\Html::renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail).
| [camelFilter()](craft-web-twig-extension.md#method-camelfilter)                   | CamelCases a string.
| [cloneFunction()](craft-web-twig-extension.md#method-clonefunction)               | Returns a clone of the given variable.
| [dateFilter()](craft-web-twig-extension.md#method-datefilter)                     | Extending Twig's |date filter so we can run any translations on the output.
| [datetimeFilter()](craft-web-twig-extension.md#method-datetimefilter)             | Formats the value as a date+time.
| [encencFilter()](craft-web-twig-extension.md#method-encencfilter)                 | Encrypts and base64-encodes a string.
| [expressionFunction()](craft-web-twig-extension.md#method-expressionfunction)     |
| [filterFilter()](craft-web-twig-extension.md#method-filterfilter)                 | Filters an array.
| [getCsrfInput()](craft-web-twig-extension.md#method-getcsrfinput)                 |
| [getFilters()](craft-web-twig-extension.md#method-getfilters)                     |
| [getFootHtml()](craft-web-twig-extension.md#method-getfoothtml)                   |
| [getFunctions()](craft-web-twig-extension.md#method-getfunctions)                 |
| [getGlobals()](craft-web-twig-extension.md#method-getglobals)                     |
| [getHeadHtml()](craft-web-twig-extension.md#method-getheadhtml)                   |
| [getNodeVisitors()](craft-web-twig-extension.md#method-getnodevisitors)           |
| [getTests()](craft-web-twig-extension.md#method-gettests)                         |
| [getTokenParsers()](craft-web-twig-extension.md#method-gettokenparsers)           |
| [gqlFunction()](craft-web-twig-extension.md#method-gqlfunction)                   | Executes a GraphQL query against the full schema.
| [groupFilter()](craft-web-twig-extension.md#method-groupfilter)                   | Groups an array by a the results of an arrow function, or value of a property.
| [indexOfFilter()](craft-web-twig-extension.md#method-indexoffilter)               | Returns the index of an item in a string or array, or -1 if it cannot be found.
| [jsonEncodeFilter()](craft-web-twig-extension.md#method-jsonencodefilter)         | This method will JSON encode a variable. We're overriding Twig's default implementation to set some stricter encoding options on text/html/xml requests.
| [kebabFilter()](craft-web-twig-extension.md#method-kebabfilter)                   | Kebab-cases a string.
| [lcfirstFilter()](craft-web-twig-extension.md#method-lcfirstfilter)               | Lowercases the first character of a multibyte string.
| [literalFilter()](craft-web-twig-extension.md#method-literalfilter)               | Escapes commas and asterisks in a string so they are not treated as special characters in [craft\helpers\Db::parseParam()](craft-helpers-db.md#method-parseparam).
| [markdownFilter()](craft-web-twig-extension.md#method-markdownfilter)             | Parses text through Markdown.
| [mergeFilter()](craft-web-twig-extension.md#method-mergefilter)                   | Merges an array with another one.
| [multisortFilter()](craft-web-twig-extension.md#method-multisortfilter)           | Duplicates an array and sorts it with [craft\helpers\ArrayHelper::multisort()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#multisort()-detail).
| [parseAttrFilter()](craft-web-twig-extension.md#method-parseattrfilter)           | Parses an HTML tag to find its attributes.
| [parseRefsFilter()](craft-web-twig-extension.md#method-parserefsfilter)           | Parses a string for reference tags.
| [pascalFilter()](craft-web-twig-extension.md#method-pascalfilter)                 | PascalCases a string.
| [pluginFunction()](craft-web-twig-extension.md#method-pluginfunction)             | Returns a plugin instance by its handle.
| [prependFilter()](craft-web-twig-extension.md#method-prependfilter)               | Prepends HTML to the beginning of given tag.
| [purifyFilter()](craft-web-twig-extension.md#method-purifyfilter)                 | Purifies the given HTML using HTML Purifier.
| [renderObjectTemplate()](craft-web-twig-extension.md#method-renderobjecttemplate) |
| [replaceFilter()](craft-web-twig-extension.md#method-replacefilter)               | Replaces Twig's |replace filter, adding support for passing in separate search and replace arrays.
| [roundFunction()](craft-web-twig-extension.md#method-roundfunction)               | Rounds the given value.
| [rssFilter()](craft-web-twig-extension.md#method-rssfilter)                       | Converts a date to the RSS format.
| [seqFunction()](craft-web-twig-extension.md#method-seqfunction)                   | Returns the next number in a given sequence, or the current number in the sequence.
| [shuffleFunction()](craft-web-twig-extension.md#method-shufflefunction)           | Shuffles an array.
| [snakeFilter()](craft-web-twig-extension.md#method-snakefilter)                   | Snake_cases a string.
| [svgFunction()](craft-web-twig-extension.md#method-svgfunction)                   | Returns the contents of a given SVG file.
| [tagFunction()](craft-web-twig-extension.md#method-tagfunction)                   | Generates a complete HTML tag.
| [timeFilter()](craft-web-twig-extension.md#method-timefilter)                     | Formats the value as a time.
| [translateFilter()](craft-web-twig-extension.md#method-translatefilter)           | Translates the given message.
| [ucfirstFilter()](craft-web-twig-extension.md#method-ucfirstfilter)               | Uppercases the first character of a multibyte string.
| [withoutFilter()](craft-web-twig-extension.md#method-withoutfilter)               | Returns an array without certain values.
| [withoutKeyFilter()](craft-web-twig-extension.md#method-withoutkeyfilter)         | Returns an array without a certain key.

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L92-L96)


#### Arguments

- `$view` ([craft\web\View](craft-web-view.md))
- `$environment` (`\Twig\Environment`)




### `appendFilter()`



Since

:   3.3.0



Appends HTML to the end of the given tag.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L597-L605)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag that `$html` should be appended to
- `$html` ([string](http://php.net/language.types.string)) – The HTML to append to `$tag`.
- `$ifExists` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – What to do if `$tag` already contains a child of the same type as the element
defined by `$html`. Set to `'keep'` if no action should be taken, or `'replace'` if it should be replaced
by `$tag`.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML



### `atomFilter()`





Converts a date to the Atom format.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L615-L618)


#### Arguments

- `$env` (`\Twig\Environment`)
- `$date` ([DateTime](http://php.net/class.datetime), [DateTimeInterface](http://php.net/class.datetimeinterface), [string](http://php.net/language.types.string)) – A date
- `$timezone` ([DateTimeZone](http://php.net/class.datetimezone), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The target timezone, null to use the default, false to leave unchanged

#### Returns

[string](http://php.net/language.types.string) – The formatted date



### `attrFilter()`



Since

:   3.3.0



Modifies a HTML tag’s attributes, supporting the same attribute definitions as [craft\helpers\Html::renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L628-L636)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag whose attributes should be modified.
- `$attributes` ([array](http://php.net/language.types.array)) – The attributes to be added to the tag.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML tag.



### `camelFilter()`





CamelCases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L355-L358)


#### Arguments

- `$string` (`mixed`) – The string

#### Returns

[string](http://php.net/language.types.string)



### `cloneFunction()`





Returns a clone of the given variable.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L944-L947)


#### Arguments

- `$var` (`mixed`)

#### Returns

`mixed`



### `dateFilter()`





Extending Twig's |date filter so we can run any translations on the output.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L562-L584)


#### Arguments

- `$env` (`\Twig\Environment`)
- `$date` ([DateTimeInterface](http://php.net/class.datetimeinterface), [DateInterval](http://php.net/class.dateinterval), [string](http://php.net/language.types.string)) – A date
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target format, null to use the default
- `$timezone` ([DateTimeZone](http://php.net/class.datetimezone), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The target timezone, null to use the default, false to leave unchanged
- `$locale` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target locale the date should be formatted for. By default the current systme locale will be used.

#### Returns

`mixed`, [string](http://php.net/language.types.string)



### `datetimeFilter()`





Formats the value as a date+time.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L691-L709)


#### Arguments

- `$env` (`\Twig\Environment`)
- `$date` ([DateTimeInterface](http://php.net/class.datetimeinterface), [string](http://php.net/language.types.string)) – A date
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target format, null to use the default
- `$timezone` ([DateTimeZone](http://php.net/class.datetimezone), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The target timezone, null to use the default, false to leave unchanged
- `$locale` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target locale the date should be formatted for. By default the current systme locale will be used.

#### Returns

`mixed`, [string](http://php.net/language.types.string)



### `encencFilter()`





Encrypts and base64-encodes a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L717-L720)


#### Arguments

- `$str` (`mixed`) – The string

#### Returns

[string](http://php.net/language.types.string)



### `expressionFunction()`



Since

:   3.1.0








[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L956-L959)


#### Arguments

- `$expression` (`mixed`)
- `$params` (`mixed`)
- `$config` (`mixed`)

#### Returns

[yii\db\Expression](https://www.yiiframework.com/doc/api/2.0/yii-db-expression)



### `filterFilter()`





Filters an array.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L729-L742)


#### Arguments

- `$arr` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable))
- `$arrow` ([callable](http://php.net/language.types.callable), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getCsrfInput()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use csrfInput() instead.
:::









[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1252-L1256)



#### Returns

[string](http://php.net/language.types.string)



### `getFilters()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L200-L261)






### `getFootHtml()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use endBody() instead.
:::









[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1277-L1286)



#### Returns

[string](http://php.net/language.types.string)



### `getFunctions()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L892-L936)






### `getGlobals()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1173-L1243)






### `getHeadHtml()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use head() instead.
:::









[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1262-L1271)



#### Returns

[string](http://php.net/language.types.string)



### `getNodeVisitors()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L101-L109)






### `getTests()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L266-L276)






### `getTokenParsers()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L114-L195)






### `gqlFunction()`



Since

:   3.3.12



Executes a GraphQL query against the full schema.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L970-L974)


#### Arguments

- `$query` ([string](http://php.net/language.types.string)) – The GraphQL query
- `$variables` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – Query variables
- `$operationName` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The operation name

#### Returns

[array](http://php.net/language.types.array) – The query result



### `groupFilter()`





Groups an array by a the results of an arrow function, or value of a property.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L752-L780)


#### Arguments

- `$arr` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable))
- `$arrow` ([callable](http://php.net/language.types.callable), [string](http://php.net/language.types.string)) – The arrow function or property name that determines the group the item should be grouped in

#### Returns

[array](http://php.net/language.types.array)[] – The grouped items

#### Throws

- `\Twig\Error\RuntimeError`\
  if $arr is not of type array or Traversable


### `indexOfFilter()`





Returns the index of an item in a string or array, or -1 if it cannot be found.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L789-L812)


#### Arguments

- `$haystack` (`mixed`)
- `$needle` (`mixed`)

#### Returns

[integer](http://php.net/language.types.integer)



### `jsonEncodeFilter()`





This method will JSON encode a variable. We're overriding Twig's default implementation to set some stricter
encoding options on text/html/xml requests.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L394-L408)


#### Arguments

- `$value` (`mixed`) – The value to JSON encode.
- `$options` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – Either null or a bitmask consisting of JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP,
JSON_HEX_APOS, JSON_NUMERIC_CHECK, JSON_PRETTY_PRINT, JSON_UNESCAPED_SLASHES,
JSON_FORCE_OBJECT
- `$depth` ([integer](http://php.net/language.types.integer)) – The maximum depth

#### Returns

`mixed` – The JSON encoded value.



### `kebabFilter()`





Kebab-cases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L344-L347)


#### Arguments

- `$string` (`mixed`) – The string
- `$glue` ([string](http://php.net/language.types.string)) – The string used to glue the words together (default is a hyphen)
- `$lower` ([boolean](http://php.net/language.types.boolean)) – Whether the string should be lowercased (default is true)
- `$removePunctuation` ([boolean](http://php.net/language.types.boolean)) – Whether punctuation marks should be removed (default is true)

#### Returns

[string](http://php.net/language.types.string) – The kebab-cased string



### `lcfirstFilter()`





Lowercases the first character of a multibyte string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L330-L333)


#### Arguments

- `$string` (`mixed`) – The multibyte string.

#### Returns

[string](http://php.net/language.types.string) – The string with the first character converted to lowercase.



### `literalFilter()`





Escapes commas and asterisks in a string so they are not treated as special characters in
[craft\helpers\Db::parseParam()](craft-helpers-db.md#method-parseparam).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L821-L824)


#### Arguments

- `$value` (`mixed`) – The param value.

#### Returns

[string](http://php.net/language.types.string) – The escaped param value.



### `markdownFilter()`





Parses text through Markdown.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L836-L843)


#### Arguments

- `$markdown` (`mixed`) – The markdown text to parse
- `$flavor` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The markdown flavor to use. Can be 'original', 'gfm' (GitHub-Flavored Markdown),
'gfm-comment' (GFM with newlines converted to `<br>`s),
or 'extra' (Markdown Extra). Default is 'original'.
- `$inlineOnly` ([boolean](http://php.net/language.types.boolean)) – Whether to only parse inline elements, omitting any `<p>` tags.

#### Returns

[string](http://php.net/language.types.string)



### `mergeFilter()`



Since

:   3.4.0



Merges an array with another one.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L854-L861)


#### Arguments

- `$arr1` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – An array
- `$arr2` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – An array
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether the arrays should be merged recursively using [yii\helpers\BaseArrayHelper::merge()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#merge()-detail)

#### Returns

[array](http://php.net/language.types.array) – The merged array



### `multisortFilter()`





Duplicates an array and sorts it with [craft\helpers\ArrayHelper::multisort()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#multisort()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L881-L887)


#### Arguments

- `$array` (`mixed`) – The array to be sorted. The array will be modified after calling this method.
- `$key` ([string](http://php.net/language.types.string), [Closure](http://php.net/class.closure), [array](http://php.net/language.types.array)) – The key(s) to be sorted by. This refers to a key name of the sub-array
elements, a property name of the objects, or an anonymous function returning the values for comparison
purpose. The anonymous function signature should be: `function($item)`.
To sort by multiple keys, provide an array of keys here.
- `$direction` ([integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array)) – The sorting direction. It can be either `SORT_ASC` or `SORT_DESC`.
When sorting by multiple keys with different sorting directions, use an array of sorting directions.
- `$sortFlag` ([integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array)) – The PHP sort flag. Valid values include
`SORT_REGULAR`, `SORT_NUMERIC`, `SORT_STRING`, `SORT_LOCALE_STRING`, `SORT_NATURAL` and `SORT_FLAG_CASE`.
Please refer to [PHP manual](http://php.net/manual/en/function.sort.php)
for more details. When sorting by multiple keys with different sort flags, use an array of sort flags.

#### Returns

[array](http://php.net/language.types.array) – The sorted array

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the $direction or $sortFlag parameters do not have
correct number of elements as that of $key.


### `parseAttrFilter()`



Since

:   3.4.0



Parses an HTML tag to find its attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L455-L463)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag to parse

#### Returns

[array](http://php.net/language.types.array) – The parsed HTML tag attributes

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if `$tag` doesn't contain a valid HTML tag


### `parseRefsFilter()`





Parses a string for reference tags.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L472-L475)


#### Arguments

- `$str` (`mixed`)
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)



### `pascalFilter()`





PascalCases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L366-L369)


#### Arguments

- `$string` (`mixed`) – The string

#### Returns

[string](http://php.net/language.types.string)



### `pluginFunction()`



Since

:   3.1.0



Returns a plugin instance by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L983-L986)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plugin handle

#### Returns

[craft\base\PluginInterface](craft-base-plugininterface.md), [null](http://php.net/language.types.null) – The plugin, or `null` if it's not installed



### `prependFilter()`



Since

:   3.3.0



Prepends HTML to the beginning of given tag.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L488-L496)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag that `$html` should be prepended to
- `$html` ([string](http://php.net/language.types.string)) – The HTML to prepend to `$tag`.
- `$ifExists` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – What to do if `$tag` already contains a child of the same type as the element
defined by `$html`. Set to `'keep'` if no action should be taken, or `'replace'` if it should be replaced
by `$tag`.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML



### `purifyFilter()`



Since

:   3.4.0



Purifies the given HTML using HTML Purifier.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L507-L525)


#### Arguments

- `$html` ([string](http://php.net/language.types.string)) – The HTML to be purified
- `$config` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The HTML Purifier config. This can either be the name of a JSON file within
`config/htmlpurifier/` (sans `.json` extension) or a config array.

#### Returns

[string](http://php.net/language.types.string) – The purified HTML



### `renderObjectTemplate()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1029-L1032)


#### Arguments

- `$template` ([string](http://php.net/language.types.string))
- `$object` (`mixed`)

#### Returns

[string](http://php.net/language.types.string)



### `replaceFilter()`





Replaces Twig's |replace filter, adding support for passing in separate
search and replace arrays.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L536-L550)


#### Arguments

- `$str` (`mixed`)
- `$search` (`mixed`)
- `$replace` (`mixed`)

#### Returns

`mixed`



### `roundFunction()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use Twig's |round filter instead.
:::




Rounds the given value.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L997-L1002)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float))
- `$precision` ([integer](http://php.net/language.types.integer))
- `$mode` ([integer](http://php.net/language.types.integer))

#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `rssFilter()`





Converts a date to the RSS format.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L646-L649)


#### Arguments

- `$env` (`\Twig\Environment`)
- `$date` ([DateTime](http://php.net/class.datetime), [DateTimeInterface](http://php.net/class.datetimeinterface), [string](http://php.net/language.types.string)) – A date
- `$timezone` ([DateTimeZone](http://php.net/class.datetimezone), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The target timezone, null to use the default, false to leave unchanged

#### Returns

[string](http://php.net/language.types.string) – The formatted date



### `seqFunction()`



Since

:   3.0.31



Returns the next number in a given sequence, or the current number in the sequence.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1016-L1022)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The sequence name.
- `$length` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The minimum string length that should be returned. (Numbers that are too short will be left-padded with `0`s.)
- `$next` ([boolean](http://php.net/language.types.boolean)) – Whether the next number in the sequence should be returned (and the sequence should be incremented).
If set to `false`, the current number in the sequence will be returned instead.

#### Returns

[integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons
- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `shuffleFunction()`





Shuffles an array.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1040-L1051)


#### Arguments

- `$arr` (`mixed`)

#### Returns

`mixed`



### `snakeFilter()`





Snake_cases a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L377-L380)


#### Arguments

- `$string` (`mixed`) – The string

#### Returns

[string](http://php.net/language.types.string)



### `svgFunction()`





Returns the contents of a given SVG file.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1066-L1146)


#### Arguments

- `$svg` ([string](http://php.net/language.types.string), [craft\elements\Asset](craft-elements-asset.md)) – An SVG asset, a file path, or raw SVG markup
- `$sanitize` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the SVG should be sanitized of potentially
malicious scripts. By default the SVG will only be sanitized if an asset
or markup is passed in. (File paths are assumed to be safe.)
- `$namespace` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether class names and IDs within the SVG
should be namespaced to avoid conflicts with other elements in the DOM.
By default the SVG will only be namespaced if an asset or markup is passed in.
- `$class` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – A CSS class name that should be added to the `<svg>` element.

#### Returns

[string](http://php.net/language.types.string)



### `tagFunction()`



Since

:   3.3.0



Generates a complete HTML tag.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L1158-L1168)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The tag type ('p', 'div', etc.)
- `$attributes` ([array](http://php.net/language.types.array)) – The HTML tag attributes in terms of name-value pairs.
If `text` is supplied, the value will be HTML-encoded and included as the contents of the tag.
If 'html' is supplied, the value will be included as the contents of the tag, without getting encoded.

#### Returns

[string](http://php.net/language.types.string)



### `timeFilter()`





Formats the value as a time.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L661-L679)


#### Arguments

- `$env` (`\Twig\Environment`)
- `$date` ([DateTimeInterface](http://php.net/class.datetimeinterface), [string](http://php.net/language.types.string)) – A date
- `$format` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target format, null to use the default
- `$timezone` ([DateTimeZone](http://php.net/class.datetimezone), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The target timezone, null to use the default, false to leave unchanged
- `$locale` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The target locale the date should be formatted for. By default the current systme locale will be used.

#### Returns

`mixed`, [string](http://php.net/language.types.string)



### `translateFilter()`





Translates the given message.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L288-L311)


#### Arguments

- `$message` (`mixed`) – The message to be translated.
- `$category` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The message category.
- `$params` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The parameters that will be used to replace the corresponding placeholders in the message.
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The language code (e.g. `en-US`, `en`). If this is null, the current
[application language](https://www.yiiframework.com/doc/api/2.0/yii-base-application#$language-detail) will be used.

#### Returns

[string](http://php.net/language.types.string) – The translated message.



### `ucfirstFilter()`





Uppercases the first character of a multibyte string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L319-L322)


#### Arguments

- `$string` (`mixed`) – The multibyte string.

#### Returns

[string](http://php.net/language.types.string) – The string with the first character converted to upercase.



### `withoutFilter()`





Returns an array without certain values.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L417-L430)


#### Arguments

- `$arr` (`mixed`)
- `$exclude` (`mixed`)

#### Returns

[array](http://php.net/language.types.array)



### `withoutKeyFilter()`



Since

:   3.2.0



Returns an array without a certain key.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Extension.php#L440-L445)


#### Arguments

- `$arr` (`mixed`)
- `$key` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)










