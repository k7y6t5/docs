---
title: craft\web\twig\nodevisitors\BaseEventTagVisitor
code:
  - php
  - twig
---

# BaseEventTagVisitor

Type

:   Abstract Class

Namespace

:   craft\web\twig\nodevisitors

Inherits

:   [craft\web\twig\nodevisitors\BaseEventTagVisitor](craft-web-twig-nodevisitors-baseeventtagvisitor.md)

Implements

:   `Twig\NodeVisitor\NodeVisitorInterface`

Extended by

:   [craft\web\twig\nodevisitors\EventTagAdder](craft-web-twig-nodevisitors-eventtagadder.md), [craft\web\twig\nodevisitors\EventTagFinder](craft-web-twig-nodevisitors-eventtagfinder.md)

Since

:   3.0.0



EventTagFinder adds “head”, “beginBody”, and “endBody” events to the template as it’s being compiled.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/BaseEventTagVisitor.php)




## Protected Properties

| Property                                                                            | Description
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------
| [foundBeginBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundbeginbody) | [boolean](http://php.net/language.types.boolean) – Whether the beginBody() tag has been found/added
| [foundEndBody](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundendbody)     | [boolean](http://php.net/language.types.boolean) – Whether the endBody() tag has been found/added
| [foundHead](craft-web-twig-nodevisitors-baseeventtagvisitor.md#foundhead)           | [boolean](http://php.net/language.types.boolean) – Whether the head() tag has been found/added

### `foundBeginBody`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the beginBody() tag has been found/added



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/BaseEventTagVisitor.php#L28)



### `foundEndBody`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the endBody() tag has been found/added



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/BaseEventTagVisitor.php#L33)



### `foundHead`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the head() tag has been found/added



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/BaseEventTagVisitor.php#L23)







## Protected Methods

| Method                                                                                             | Description
| -------------------------------------------------------------------------------------------------- | -----------------------------------------------------
| [foundAllEventTags()](craft-web-twig-nodevisitors-baseeventtagvisitor.md#method-foundalleventtags) | Returns whether all event tags have been found/added.

### `foundAllEventTags()`





Returns whether all event tags have been found/added.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/nodevisitors/BaseEventTagVisitor.php#L40-L47)



#### Returns

[boolean](http://php.net/language.types.boolean)








