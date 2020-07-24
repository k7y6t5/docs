---
title: craft\web\twig\tokenparsers\SwitchTokenParser
code:
  - php
  - twig
---

# SwitchTokenParser

Type

:   Class

Namespace

:   craft\web\twig\tokenparsers

Inherits

:   [craft\web\twig\tokenparsers\SwitchTokenParser](craft-web-twig-tokenparsers-switchtokenparser.md) &raquo;
`Twig\TokenParser\AbstractTokenParser`

Since

:   3.0.0



Class SwitchTokenParser that parses {% switch %} tags.

Based on the rejected Twig pull request: https://github.com/fabpot/Twig/pull/185



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/SwitchTokenParser.php)






## Public Methods

| Method                                                                                 | Description
| -------------------------------------------------------------------------------------- | -----------
| [decideIfEnd()](craft-web-twig-tokenparsers-switchtokenparser.md#method-decideifend)   |
| [decideIfFork()](craft-web-twig-tokenparsers-switchtokenparser.md#method-decideiffork) |
| [getTag()](craft-web-twig-tokenparsers-switchtokenparser.md#method-gettag)             |
| [parse()](craft-web-twig-tokenparsers-switchtokenparser.md#method-parse)               |

### `decideIfEnd()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/SwitchTokenParser.php#L115-L118)


#### Arguments

- `$token` (`\Twig\Token`)

#### Returns

[boolean](http://php.net/language.types.boolean)



### `decideIfFork()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/SwitchTokenParser.php#L106-L109)


#### Arguments

- `$token` (`\Twig\Token`)

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getTag()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/SwitchTokenParser.php#L29-L32)






### `parse()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/tokenparsers/SwitchTokenParser.php#L37-L100)


#### Arguments

- `$token`











