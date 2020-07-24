---
title: craft\behaviors\DraftBehavior
code:
  - php
  - twig
---

# DraftBehavior

Type

:   Class

Namespace

:   craft\behaviors

Inherits

:   [craft\behaviors\DraftBehavior](craft-behaviors-draftbehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.2.0



DraftBehavior is applied to element drafts.





[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [creator](craft-behaviors-draftbehavior.md#creator)                                                              | [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)
| [creatorId](craft-behaviors-draftbehavior.md#creatorid)                                                          | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The draft creator’s ID
| [dateLastMerged](craft-behaviors-draftbehavior.md#datelastmerged)                                                | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The last date that this draft was merged with changes from the source element
| [draftName](craft-behaviors-draftbehavior.md#draftname)                                                          | [string](http://php.net/language.types.string) – The draft name
| [draftNotes](craft-behaviors-draftbehavior.md#draftnotes)                                                        | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The draft notes
| [isOutdated](craft-behaviors-draftbehavior.md#isoutdated)                                                        | [boolean](http://php.net/language.types.boolean)
| [mergingChanges](craft-behaviors-draftbehavior.md#mergingchanges)                                                | [boolean](http://php.net/language.types.boolean) – Whether the source element’s changes are currently being merged into the draft.
| [outdatedAttributes](craft-behaviors-draftbehavior.md#outdatedattributes)                                        | [string](http://php.net/language.types.string)[]
| [outdatedFields](craft-behaviors-draftbehavior.md#outdatedfields)                                                | [string](http://php.net/language.types.string)[]
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior
| [source](craft-behaviors-draftbehavior.md#source)                                                                | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [sourceId](craft-behaviors-draftbehavior.md#sourceid)                                                            | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The source element’s ID
| [trackChanges](craft-behaviors-draftbehavior.md#trackchanges)                                                    | [boolean](http://php.net/language.types.boolean) – Whether to track changes in this draft

### `creator`



Type

:   [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)



### `creatorId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The draft creator’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L40)



### `dateLastMerged`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



The last date that this draft was merged with changes from the source element



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L60)



### `draftName`



Type

:   [string](http://php.net/language.types.string)



The draft name



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L45)



### `draftNotes`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The draft notes



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L50)



### `isOutdated`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)



### `mergingChanges`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.0



Whether the source element’s changes are currently being merged into the draft.



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L66)



### `outdatedAttributes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)



### `outdatedFields`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)



### `source`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php)



### `sourceId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The source element’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L35)



### `trackChanges`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to track changes in this draft



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L55)







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
| [events()](craft-behaviors-draftbehavior.md#method-events)                                                                                | Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.
| [getCreator()](craft-behaviors-draftbehavior.md#method-getcreator)                                                                        | Returns the draft’s creator.
| [getDraftName()](craft-behaviors-draftbehavior.md#method-getdraftname)                                                                    | Returns the draft’s name.
| [getIsOutdated()](craft-behaviors-draftbehavior.md#method-getisoutdated)                                                                  | Returns whether the source element has been saved since the time this draft was created or last merged.
| [getOutdatedAttributes()](craft-behaviors-draftbehavior.md#method-getoutdatedattributes)                                                  | Returns the outdated attributes.
| [getOutdatedFields()](craft-behaviors-draftbehavior.md#method-getoutdatedfields)                                                          | Returns the outdated field handles.
| [getSource()](craft-behaviors-draftbehavior.md#method-getsource)                                                                          | Returns the draft’s source element.
| [handleDelete()](craft-behaviors-draftbehavior.md#method-handledelete)                                                                    | Deletes the row in the `drafts` table after the draft element is deleted.
| [handleSave()](craft-behaviors-draftbehavior.md#method-handlesave)                                                                        | Updates the row in the `drafts` table after the draft element is saved.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-behaviors-draftbehavior.md#method-init)                                                                                    | Initializes the object.
| [isAttributeModified()](craft-behaviors-draftbehavior.md#method-isattributemodified)                                                      | Returns whether an attribute has changed on the draft.
| [isAttributeOutdated()](craft-behaviors-draftbehavior.md#method-isattributeoutdated)                                                      | Returns whether an attribute on the draft has fallen behind the source element’s value.
| [isFieldModified()](craft-behaviors-draftbehavior.md#method-isfieldmodified)                                                              | Returns whether a field value has changed on the draft.
| [isFieldOutdated()](craft-behaviors-draftbehavior.md#method-isfieldoutdated)                                                              | Returns whether a field value on the draft has fallen behind the source element’s value.

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




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L113-L119)



#### Returns

[array](http://php.net/language.types.array) – Events (array keys) and the corresponding event handler methods (array values).



### `getCreator()`





Returns the draft’s creator.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L181-L191)



#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)



### `getDraftName()`



Since

:   3.3.17



Returns the draft’s name.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L151-L154)



#### Returns

[string](http://php.net/language.types.string)



### `getIsOutdated()`



Since

:   3.4.0



Returns whether the source element has been saved since the time this draft was
created or last merged.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L200-L215)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getOutdatedAttributes()`



Since

:   3.4.0



Returns the outdated attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L223-L226)



#### Returns

[string](http://php.net/language.types.string)[]



### `getOutdatedFields()`



Since

:   3.4.0



Returns the outdated field handles.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L258-L261)



#### Returns

[string](http://php.net/language.types.string)[]



### `getSource()`

::: danger DEPRECATED
Deprecated in 3.2.9. Use [craft\helpers\ElementHelper::sourceElement()](craft-helpers-elementhelper.md#method-sourceelement) instead.
:::




Returns the draft’s source element.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L162-L174)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `handleDelete()`





Deletes the row in the `drafts` table after the draft element is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L138-L143)






### `handleSave()`





Updates the row in the `drafts` table after the draft element is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L124-L133)






### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L101-L108)






### `isAttributeModified()`



Since

:   3.4.0



Returns whether an attribute has changed on the draft.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L247-L250)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isAttributeOutdated()`



Since

:   3.4.0



Returns whether an attribute on the draft has fallen behind the source element’s value.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L235-L238)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFieldModified()`



Since

:   3.4.0



Returns whether a field value has changed on the draft.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L282-L285)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFieldOutdated()`



Since

:   3.4.0



Returns whether a field value on the draft has fallen behind the source element’s value.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/DraftBehavior.php#L270-L273)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)










