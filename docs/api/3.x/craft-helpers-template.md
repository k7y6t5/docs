---
title: craft\helpers\Template
code:
  - php
  - twig
---

# Template

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Template](craft-helpers-template.md)

Since

:   3.0.0



Class Template





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Template.php)






## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | -------------------------------------------------
| [beginProfile()](craft-helpers-template.md#method-beginprofile)         | Begins profiling a template element.
| [endProfile()](craft-helpers-template.md#method-endprofile)             | Finishes profiling a template element.
| [paginateCriteria()](craft-helpers-template.md#method-paginatecriteria) | Paginates a query's results
| [raw()](craft-helpers-template.md#method-raw)                           | Returns a string wrapped in a \Twig\Markup object

### `beginProfile()`



Since

:   3.3.0



Begins profiling a template element.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Template.php#L145-L158)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The type of template element being profiled ('template', 'block', or 'macro')
- `$name` ([string](http://php.net/language.types.string)) – The name of the template element




### `endProfile()`



Since

:   3.3.0



Finishes profiling a template element.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Template.php#L167-L175)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The type of template element being profiled ('template', 'block', or 'macro')
- `$name` ([string](http://php.net/language.types.string)) – The name of the template element




### `paginateCriteria()`





Paginates a query's results




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Template.php#L112-L125)


#### Arguments

- `$query` ([yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface))

#### Returns

[array](http://php.net/language.types.array)



### `raw()`





Returns a string wrapped in a \Twig\Markup object




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Template.php#L133-L136)


#### Arguments

- `$value` ([string](http://php.net/language.types.string))

#### Returns

`\Twig\Markup`







## Constants

| Constant                | Description
| ----------------------- | -----------
| `PROFILE_STAGE_BEGIN`   |
| `PROFILE_STAGE_END`     |
| `PROFILE_TYPE_BLOCK`    |
| `PROFILE_TYPE_MACRO`    |
| `PROFILE_TYPE_TEMPLATE` |



