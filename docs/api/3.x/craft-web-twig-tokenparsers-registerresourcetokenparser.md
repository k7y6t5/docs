---
title: craft\web\twig\tokenparsers\RegisterResourceTokenParser
code:
  - php
  - twig
---

# RegisterResourceTokenParser

Type

:   Class

Namespace

:   craft\web\twig\tokenparsers

Inherits

:   [craft\web\twig\tokenparsers\RegisterResourceTokenParser](craft-web-twig-tokenparsers-registerresourcetokenparser.md) &raquo;
`Twig\TokenParser\AbstractTokenParser`

Since

:   3.0.0



Class RegisterResourceTokenParser





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php)


## Public Properties

| Property                                                                                                | Description
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowOptions](craft-web-twig-tokenparsers-registerresourcetokenparser.md#allowoptions)                 | [boolean](http://php.net/language.types.boolean) – Whether the tag can specify additional options
| [allowPosition](craft-web-twig-tokenparsers-registerresourcetokenparser.md#allowposition)               | [boolean](http://php.net/language.types.boolean) – Whether the tag can specify the position of the resource
| [allowRuntimePosition](craft-web-twig-tokenparsers-registerresourcetokenparser.md#allowruntimeposition) | [boolean](http://php.net/language.types.boolean) – Whether the tag can specify a runtime-based position (load/ready)
| [allowTagPair](craft-web-twig-tokenparsers-registerresourcetokenparser.md#allowtagpair)                 | [boolean](http://php.net/language.types.boolean) – Whether the tag supports a tag pair mode for capturing the JS/CSS
| [method](craft-web-twig-tokenparsers-registerresourcetokenparser.md#method)                             | [string](http://php.net/language.types.string) – The View method the tag represents
| [newCode](craft-web-twig-tokenparsers-registerresourcetokenparser.md#newcode)                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The new template code that should be used if this tag is deprecated
| [tag](craft-web-twig-tokenparsers-registerresourcetokenparser.md#tag)                                   | [string](http://php.net/language.types.string) – The tag name

### `allowOptions`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the tag can specify additional options



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L53)



### `allowPosition`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the tag can specify the position of the resource



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L43)



### `allowRuntimePosition`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the tag can specify a runtime-based position (load/ready)



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L48)



### `allowTagPair`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the tag supports a tag pair mode for capturing the JS/CSS



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L38)



### `method`



Type

:   [string](http://php.net/language.types.string)



The View method the tag represents



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L33)



### `newCode`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The new template code that should be used if this tag is deprecated



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L59)



### `tag`



Type

:   [string](http://php.net/language.types.string)



The tag name



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L28)







## Public Methods

| Method                                                                                               | Description
| ---------------------------------------------------------------------------------------------------- | -----------
| [__construct()](craft-web-twig-tokenparsers-registerresourcetokenparser.md#method-construct)         |
| [decideBlockEnd()](craft-web-twig-tokenparsers-registerresourcetokenparser.md#method-decideblockend) |
| [getTag()](craft-web-twig-tokenparsers-registerresourcetokenparser.md#method-gettag)                 |
| [parse()](craft-web-twig-tokenparsers-registerresourcetokenparser.md#method-parse)                   |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L66-L74)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The tag name
- `$method` ([string](http://php.net/language.types.string)) – The View method the tag represents
- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `decideBlockEnd()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L177-L180)


#### Arguments

- `$token` (`\Twig\Token`)

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getTag()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L168-L171)






### `parse()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/RegisterResourceTokenParser.php#L79-L163)


#### Arguments

- `$token`











