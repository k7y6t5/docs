---
title: craft\web\twig\nodevisitors\EventTagFinder
code:
  - php
  - twig
---

# EventTagFinder

Type

:   Class

Namespace

:   craft\web\twig\nodevisitors

Inherits

:   [craft\web\twig\nodevisitors\EventTagFinder](craft-web-twig-nodevisitors-eventtagfinder.md) &raquo;
[craft\web\twig\nodevisitors\BaseEventTagVisitor](craft-web-twig-nodevisitors-baseeventtagvisitor.md)

Implements

:   `Twig\NodeVisitor\NodeVisitorInterface`

Since

:   3.0.0



EventTagFinder looks for `head()`, `beginBody()`, and `endBody()` event tags in templates as they’re being compiled.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagFinder.php)




## Protected Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------
| [foundBeginBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundbeginbody "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor") | [boolean](http://php.net/language.types.boolean) – Whether the beginBody() tag has been found/added
| [foundEndBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundendbody "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor")     | [boolean](http://php.net/language.types.boolean) – Whether the endBody() tag has been found/added
| [foundHead](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundhead "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor")           | [boolean](http://php.net/language.types.boolean) – Whether the head() tag has been found/added



## Public Methods

| Method                                                                            | Description
| --------------------------------------------------------------------------------- | -----------
| [enterNode()](craft-web-twig-nodevisitors-eventtagfinder.md#method-enternode)     |
| [getPriority()](craft-web-twig-nodevisitors-eventtagfinder.md#method-getpriority) |
| [leaveNode()](craft-web-twig-nodevisitors-eventtagfinder.md#method-leavenode)     |

### `enterNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagFinder.php#L29-L74)


#### Arguments

- `$node`
- `$env`




### `getPriority()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagFinder.php#L87-L91)






### `leaveNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagFinder.php#L79-L82)


#### Arguments

- `$node`
- `$env`






## Protected Methods

| Method                                                                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [foundAllEventTags()](craft-web-twig-nodevisitors-baseeventtagvisitor.md#method-foundalleventtags "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor") | Returns whether all event tags have been found/added.






