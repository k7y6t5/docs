---
title: craft\web\twig\Environment
code:
  - php
  - twig
---

# Environment

Type

:   Class

Namespace

:   craft\web\twig

Inherits

:   [craft\web\twig\Environment](craft-web-twig-environment.md) &raquo;
`Twig\Environment`

Since

:   3.0.0



Base Twig template class.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php)






## Public Methods

| Method                                                                                        | Description
| --------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------
| [__construct()](craft-web-twig-environment.md#method-construct)                               |
| [compileSource()](craft-web-twig-environment.md#method-compilesource)                         |
| [getDefaultEscaperStrategy()](craft-web-twig-environment.md#method-getdefaultescaperstrategy) | Returns the default escaper strategy to use based on the template name.
| [loadTemplate()](craft-web-twig-environment.md#method-loadtemplate)                           |
| [setDefaultEscaperStrategy()](craft-web-twig-environment.md#method-setdefaultescaperstrategy) |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php#L28-L32)


#### Arguments

- `$loader`
- `$options`




### `compileSource()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php#L57-L64)


#### Arguments

- `$source`




### `getDefaultEscaperStrategy()`





Returns the default escaper strategy to use based on the template name.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php#L83-L87)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)



### `loadTemplate()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php#L37-L52)


#### Arguments

- `$name`
- `$index`




### `setDefaultEscaperStrategy()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/Environment.php#L69-L75)


#### Arguments

- `$strategy` (`mixed`, [null](http://php.net/language.types.null)) – The escaper strategy to set. If null, it will be determined based on the template name.











