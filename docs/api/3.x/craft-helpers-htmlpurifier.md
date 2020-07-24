---
title: craft\helpers\HtmlPurifier
code:
  - php
  - twig
---

# HtmlPurifier

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\HtmlPurifier](craft-helpers-htmlpurifier.md) &raquo;
[yii\helpers\HtmlPurifier](https://www.yiiframework.com/doc/api/2.0/yii-helpers-htmlpurifier) &raquo;
[yii\helpers\BaseHtmlPurifier](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtmlpurifier)

Since

:   3.0.0



HtmlPurifier provides an ability to clean up HTML from any harmful code.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/HtmlPurifier.php)






## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------
| [cleanUtf8()](craft-helpers-htmlpurifier.md#method-cleanutf8)                                                                                 |
| [configure()](craft-helpers-htmlpurifier.md#method-configure)                                                                                 | Allow the extended HtmlPurifier class to set some default config options.
| [convertToUtf8()](craft-helpers-htmlpurifier.md#method-converttoutf8)                                                                         |
| [process()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtmlpurifier#process()-detail "Defined by yii\helpers\BaseHtmlPurifier") | Passes markup through HTMLPurifier making it safe to output to end user.

### `cleanUtf8()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/HtmlPurifier.php#L24-L27)


#### Arguments

- `$string` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `configure()`





Allow the extended HtmlPurifier class to set some default config options.








[View source](https://github.com/craftcms/cms/blob/master/src/helpers/HtmlPurifier.php#L42-L75)


#### Arguments

- `$config` (`\HTMLPurifier_Config`)




### `convertToUtf8()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/HtmlPurifier.php#L34-L37)


#### Arguments

- `$string` ([string](http://php.net/language.types.string))
- `$config` (`\HTMLPurifier_Config`)

#### Returns

[string](http://php.net/language.types.string)










