---
title: craft\web\twig\nodes\NavNode
code:
  - php
  - twig
---

# NavNode

Type

:   Class

Namespace

:   craft\web\twig\nodes

Inherits

:   [craft\web\twig\nodes\NavNode](craft-web-twig-nodes-navnode.md) &raquo;
`Twig\Node\ForNode`

Since

:   3.0.0



Represents a nav node.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/NavNode.php)




## Protected Properties

| Property                                                   | Description
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------
| [navItemNode](craft-web-twig-nodes-navnode.md#navitemnode) | [craft\web\twig\nodes\NavItem_Node](craft-web-twig-nodes-navitem_node.md), [null](http://php.net/language.types.null)

### `navItemNode`



Type

:   [craft\web\twig\nodes\NavItem_Node](craft-web-twig-nodes-navitem_node.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/NavNode.php#L27)





## Public Methods

| Method                                                            | Description
| ----------------------------------------------------------------- | --------------------
| [__construct()](craft-web-twig-nodes-navnode.md#method-construct) | NavNode constructor.
| [compile()](craft-web-twig-nodes-navnode.md#method-compile)       |

### `__construct()`





NavNode constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/NavNode.php#L42-L48)


#### Arguments

- `$keyTarget` (`\Twig\Node\Expression\AssignNameExpression`)
- `$valueTarget` (`\Twig\Node\Expression\AssignNameExpression`)
- `$seq` (`\Twig\Node\Expression\AbstractExpression`)
- `$upperBody` (`\Twig\Node\Node`)
- `$lowerBody` (`\Twig\Node\Node`, [null](http://php.net/language.types.null))
- `$indent` (`\Twig\Node\Node`, [null](http://php.net/language.types.null))
- `$outdent` (`\Twig\Node\Node`, [null](http://php.net/language.types.null))
- `$lineno`
- `$tag`




### `compile()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodes/NavNode.php#L53-L105)


#### Arguments

- `$compiler`











