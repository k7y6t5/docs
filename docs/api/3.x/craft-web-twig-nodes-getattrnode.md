---
title: craft\web\twig\nodes\GetAttrNode
code:
  - php
  - twig
---

# GetAttrNode

Type

:   Class

Namespace

:   craft\web\twig\nodes

Inherits

:   [craft\web\twig\nodes\GetAttrNode](craft-web-twig-nodes-getattrnode.md) &raquo;
`Twig\Node\Expression\GetAttrExpression`

Since

:   3.0.0



GetAttrNode is an alternative to `\Twig\Node\Expression\GetAttrExpression`, which sends attribute calls to [craft\helpers\Template::attribute()](craft-helpers-template.md#method-attribute) rather than twig_get_attribute().





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/GetAttrNode.php)






## Public Methods

| Method                                                                | Description
| --------------------------------------------------------------------- | -----------
| [__construct()](craft-web-twig-nodes-getattrnode.md#method-construct) |
| [compile()](craft-web-twig-nodes-getattrnode.md#method-compile)       |

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/GetAttrNode.php#L31-L35)


#### Arguments

- `$nodes` ([array](http://php.net/language.types.array)) – An array of named nodes
- `$attributes` ([array](http://php.net/language.types.array)) – An array of attributes (should not be nodes)
- `$lineno` ([integer](http://php.net/language.types.integer)) – The line number
- `$tag` ([string](http://php.net/language.types.string)) – The tag name associated with the Node




### `compile()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/GetAttrNode.php#L40-L111)


#### Arguments

- `$compiler`











