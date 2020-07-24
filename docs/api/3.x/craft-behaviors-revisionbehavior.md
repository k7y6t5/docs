---
title: craft\behaviors\RevisionBehavior
code:
  - php
  - twig
---

# RevisionBehavior

Type

:   Class

Namespace

:   craft\behaviors

Inherits

:   [craft\behaviors\RevisionBehavior](craft-behaviors-revisionbehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



RevisionBehavior is applied to element revisions.





[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------
| [creator](craft-behaviors-revisionbehavior.md#creator)                                                           | [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)
| [creatorId](craft-behaviors-revisionbehavior.md#creatorid)                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The revision creator’s ID
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior
| [revisionLabel](craft-behaviors-revisionbehavior.md#revisionlabel)                                               | [string](http://php.net/language.types.string)
| [revisionNotes](craft-behaviors-revisionbehavior.md#revisionnotes)                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The revision notes
| [revisionNum](craft-behaviors-revisionbehavior.md#revisionnum)                                                   | [integer](http://php.net/language.types.integer) – The revision number
| [source](craft-behaviors-revisionbehavior.md#source)                                                             | [craft\base\ElementInterface](craft-base-elementinterface.md)
| [sourceId](craft-behaviors-revisionbehavior.md#sourceid)                                                         | [integer](http://php.net/language.types.integer) – The source element’s ID

### `creator`



Type

:   [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php)



### `creatorId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The revision creator’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L37)



### `revisionLabel`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php)



### `revisionNotes`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The revision notes



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L47)



### `revisionNum`



Type

:   [integer](http://php.net/language.types.integer)



The revision number



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L42)



### `source`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php)



### `sourceId`



Type

:   [integer](http://php.net/language.types.integer)



The source element’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L32)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#attach()-detail "Defined by yii\base\Behavior")                     | Attaches the behavior object to the component.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [detach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#detach()-detail "Defined by yii\base\Behavior")                     | Detaches the behavior object from the component.
| [events()](craft-behaviors-revisionbehavior.md#method-events)                                                                             | Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.
| [getCreator()](craft-behaviors-revisionbehavior.md#method-getcreator)                                                                     | Returns the revision’s creator.
| [getRevisionLabel()](craft-behaviors-revisionbehavior.md#method-getrevisionlabel)                                                         | Returns the revision label.
| [getSource()](craft-behaviors-revisionbehavior.md#method-getsource)                                                                       | Returns the revision’s source element.
| [handleDelete()](craft-behaviors-revisionbehavior.md#method-handledelete)                                                                 | Deletes the row in the `drafts` table after the draft element is deleted.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `events()`





Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.



Child classes may override this method to declare what PHP callbacks should
be attached to the events of the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail) component.

The callbacks will be attached to the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events when the behavior is
attached to the owner; and they will be detached from the events when
the behavior is detached from the component.

The callbacks can be any of the following:

- method in this behavior: `'handleClick'`, equivalent to `[$this, 'handleClick']`
- object method: `[$object, 'handleClick']`
- static method: `['Page', 'handleClick']`
- anonymous function: `function ($event) { ... }`

The following is an example:

```php
[
    Model::EVENT_BEFORE_VALIDATE => 'myBeforeValidate',
    Model::EVENT_AFTER_VALIDATE => 'myAfterValidate',
]
```




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L52-L57)



#### Returns

[array](http://php.net/language.types.array) – Events (array keys) and the corresponding event handler methods (array values).



### `getCreator()`





Returns the revision’s creator.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L90-L100)



#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)



### `getRevisionLabel()`





Returns the revision label.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L107-L112)



#### Returns

[string](http://php.net/language.types.string)



### `getSource()`

::: danger DEPRECATED
Deprecated in 3.2.9. Use [craft\helpers\ElementHelper::sourceElement()](craft-helpers-elementhelper.md#method-sourceelement) instead.
:::




Returns the revision’s source element.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L75-L83)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)



### `handleDelete()`





Deletes the row in the `drafts` table after the draft element is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/RevisionBehavior.php#L62-L67)













