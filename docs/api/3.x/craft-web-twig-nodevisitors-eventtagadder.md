---
title: craft\web\twig\nodevisitors\EventTagAdder
code:
  - php
  - twig
---

# EventTagAdder

Type

:   Class

Namespace

:   craft\web\twig\nodevisitors

Inherits

:   [craft\web\twig\nodevisitors\EventTagAdder](craft-web-twig-nodevisitors-eventtagadder.md) &raquo;
[craft\web\twig\nodevisitors\BaseEventTagVisitor](craft-web-twig-nodevisitors-baseeventtagvisitor.md)

Implements

:   `Twig\NodeVisitor\NodeVisitorInterface`

Since

:   3.0.0



EventTagAdder adds missing `head()`, `beginBody()`, and `endBody()` event tags to templates as they’re being compiled.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagAdder.php)




## Protected Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------
| [foundBeginBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundbeginbody "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor") | [boolean](http://php.net/language.types.boolean) – Whether the beginBody() tag has been found/added
| [foundEndBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundendbody "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor")     | [boolean](http://php.net/language.types.boolean) – Whether the endBody() tag has been found/added
| [foundHead](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundhead "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor")           | [boolean](http://php.net/language.types.boolean) – Whether the head() tag has been found/added



## Public Methods

| Method                                                                           | Description
| -------------------------------------------------------------------------------- | -----------
| [enterNode()](craft-web-twig-nodevisitors-eventtagadder.md#method-enternode)     |
| [getPriority()](craft-web-twig-nodevisitors-eventtagadder.md#method-getpriority) |
| [leaveNode()](craft-web-twig-nodevisitors-eventtagadder.md#method-leavenode)     |

### `enterNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagAdder.php#L33-L46)


#### Arguments

- `$node`
- `$env`




### `getPriority()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagAdder.php#L59-L63)






### `leaveNode()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/EventTagAdder.php#L51-L54)


#### Arguments

- `$node`
- `$env`






## Protected Methods

| Method                                                                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [foundAllEventTags()](craft-web-twig-nodevisitors-baseeventtagvisitor.md#method-foundalleventtags "Defined by craft\web\twig\nodevisitors\BaseEventTagVisitor") | Returns whether all event tags have been found/added.






