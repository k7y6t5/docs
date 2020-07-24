---
title: craft\services\Structures
code:
  - php
  - twig
---

# Structures

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Structures](craft-services-structures.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Structures service.

An instance of the Structures service is globally accessible in Craft via [`Craft::$app->structures`](craft-base-applicationtrait.md#method-getstructures).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [mutexTimeout](craft-services-structures.md#mutextimeout)                                                                  | [integer](http://php.net/language.types.integer) – The timeout to pass to [yii\mutex\Mutex::acquire()](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex#acquire()-detail) when acquiring a lock on the structure.

### `mutexTimeout`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.0.19



The timeout to pass to [yii\mutex\Mutex::acquire()](https://www.yiiframework.com/doc/api/2.0/yii-mutex-mutex#acquire()-detail) when acquiring a lock on the structure.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L59)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [append()](craft-services-structures.md#method-append)                                                                                      | Appends an element to another within a given structure.
| [appendToRoot()](craft-services-structures.md#method-appendtoroot)                                                                          | Appends an element to the root of a given structure.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteStructureById()](craft-services-structures.md#method-deletestructurebyid)                                                            | Deletes a structure by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getElementLevelDelta()](craft-services-structures.md#method-getelementleveldelta)                                                          | Returns the descendant level delta for a given element.
| [getStructureById()](craft-services-structures.md#method-getstructurebyid)                                                                  | Returns a structure by its ID.
| [getStructureByUid()](craft-services-structures.md#method-getstructurebyuid)                                                                | Returns a structure by its UID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [moveAfter()](craft-services-structures.md#method-moveafter)                                                                                | Moves an element after another within a given structure.
| [moveBefore()](craft-services-structures.md#method-movebefore)                                                                              | Moves an element before another within a given structure.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [prepend()](craft-services-structures.md#method-prepend)                                                                                    | Prepends an element to another within a given structure.
| [prependToRoot()](craft-services-structures.md#method-prependtoroot)                                                                        | Prepends an element to the root of a given structure.
| [saveStructure()](craft-services-structures.md#method-savestructure)                                                                        | Saves a structure
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `append()`





Appends an element to another within a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L238-L247)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$parentElement` ([craft\base\ElementInterface](craft-base-elementinterface.md), [integer](http://php.net/language.types.integer))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `appendToRoot()`





Appends an element to the root of a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L278-L287)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `deleteStructureById()`





Deletes a structure by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L166-L179)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getElementLevelDelta()`





Returns the descendant level delta for a given element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L188-L202)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[integer](http://php.net/language.types.integer)



### `getStructureById()`





Returns a structure by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L76-L93)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$withTrashed` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\models\Structure](craft-models-structure.md), [null](http://php.net/language.types.null)



### `getStructureByUid()`





Returns a structure by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L102-L119)


#### Arguments

- `$structureUid` ([string](http://php.net/language.types.string))
- `$withTrashed` ([boolean](http://php.net/language.types.boolean))

#### Returns

[craft\models\Structure](craft-models-structure.md), [null](http://php.net/language.types.null)



### `moveAfter()`





Moves an element after another within a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L320-L329)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$prevElement` ([craft\base\ElementInterface](craft-base-elementinterface.md), [integer](http://php.net/language.types.integer))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `moveBefore()`





Moves an element before another within a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L299-L308)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$nextElement` ([craft\base\ElementInterface](craft-base-elementinterface.md), [integer](http://php.net/language.types.integer))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `prepend()`





Prepends an element to another within a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L217-L226)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$parentElement` ([craft\base\ElementInterface](craft-base-elementinterface.md), [integer](http://php.net/language.types.integer))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `prependToRoot()`





Prepends an element to the root of a given structure.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L258-L267)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer))
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$mode` ([string](http://php.net/language.types.string)) – Whether this is an "insert", "update", or "auto".

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `saveStructure()`





Saves a structure




[View source](https://github.com/craftcms/cms/blob/master/src/services/Structures.php#L128-L158)


#### Arguments

- `$structure` ([craft\models\Structure](craft-models-structure.md))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the structure was saved successfully

#### Throws

- [craft\errors\StructureNotFoundException](craft-errors-structurenotfoundexception.md)\
  if $structure->id is invalid






## Constants

| Constant      | Description
| ------------- | -----------
| `MODE_AUTO`   |
| `MODE_INSERT` |
| `MODE_UPDATE` |


## Events

### EVENT_AFTER_MOVE_ELEMENT



Type

:   [craft\events\MoveElementEvent](craft-events-moveelementevent.md)



The event that is triggered after an element is moved.



---



### EVENT_BEFORE_MOVE_ELEMENT



Type

:   [craft\events\MoveElementEvent](craft-events-moveelementevent.md)



The event that is triggered before an element is moved.



---




