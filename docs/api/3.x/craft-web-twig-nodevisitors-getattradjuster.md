---
title: craft\web\twig\nodevisitors\GetAttrAdjuster
code:
  - php
  - twig
---

# GetAttrAdjuster

Type

:   Class

Namespace

:   craft\web\twig\nodevisitors

Inherits

:   [craft\web\twig\nodevisitors\GetAttrAdjuster](craft-web-twig-nodevisitors-getattradjuster.md)

Implements

:   `Twig\NodeVisitor\NodeVisitorInterface`

Since

:   3.0.0



GetAttrAdjuster swaps `\Twig\Node\Expression\GetAttrExpression` nodes with [craft\web\twig\nodes\GetAttrNode](craft-web-twig-nodes-getattrnode.md) nodes.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/GetAttrAdjuster.php)






## Public Methods

| Method                                                                             | Description
| ---------------------------------------------------------------------------------- | -----------
| [enterNode()](craft-web-twig-nodevisitors-getattradjuster.md#method-enternode)     |
| [getPriority()](craft-web-twig-nodevisitors-getattradjuster.md#method-getpriority) |
| [leaveNode()](craft-web-twig-nodevisitors-getattradjuster.md#method-leavenode)     |

### `enterNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/GetAttrAdjuster.php#L27-L52)


#### Arguments

- `$node`
- `$env`




### `getPriority()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/GetAttrAdjuster.php#L65-L68)






### `leaveNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/GetAttrAdjuster.php#L57-L60)


#### Arguments

- `$node`
- `$env`











