---
title: craft\services\Globals
code:
  - php
  - twig
---

# Globals

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Globals](craft-services-globals.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Globals service.

An instance of the Globals service is globally accessible in Craft via [`Craft::$app->globals`](craft-base-applicationtrait.md#method-getglobals).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allSetIds](craft-services-globals.md#allsetids)                                                                           | [array](http://php.net/language.types.array)
| [allSets](craft-services-globals.md#allsets)                                                                               | [craft\elements\GlobalSet](craft-elements-globalset.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [editableSetIds](craft-services-globals.md#editablesetids)                                                                 | [array](http://php.net/language.types.array)
| [editableSets](craft-services-globals.md#editablesets)                                                                     | [craft\elements\GlobalSet](craft-elements-globalset.md)[]
| [totalEditableSets](craft-services-globals.md#totaleditablesets)                                                           | [integer](http://php.net/language.types.integer)
| [totalSets](craft-services-globals.md#totalsets)                                                                           | [integer](http://php.net/language.types.integer)

### `allSetIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)



### `allSets`



Type

:   [craft\elements\GlobalSet](craft-elements-globalset.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)



### `editableSetIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)



### `editableSets`



Type

:   [craft\elements\GlobalSet](craft-elements-globalset.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)



### `totalEditableSets`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)



### `totalSets`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php)







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
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteGlobalSetById()](craft-services-globals.md#method-deleteglobalsetbyid)                                                               | Deletes a global set by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllSetIds()](craft-services-globals.md#method-getallsetids)                                                                             | Returns all of the global set IDs.
| [getAllSets()](craft-services-globals.md#method-getallsets)                                                                                 | Returns all global sets.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEditableSetIds()](craft-services-globals.md#method-geteditablesetids)                                                                   | Returns all of the global set IDs that are editable by the current user.
| [getEditableSets()](craft-services-globals.md#method-geteditablesets)                                                                       | Returns all global sets that are editable by the current user.
| [getSetByHandle()](craft-services-globals.md#method-getsetbyhandle)                                                                         | Returns a global set by its handle.
| [getSetById()](craft-services-globals.md#method-getsetbyid)                                                                                 | Returns a global set by its ID.
| [getTotalEditableSets()](craft-services-globals.md#method-gettotaleditablesets)                                                             | Returns the total number of global sets that are editable by the current user.
| [getTotalSets()](craft-services-globals.md#method-gettotalsets)                                                                             | Returns the total number of global sets.
| [handleChangedGlobalSet()](craft-services-globals.md#method-handlechangedglobalset)                                                         | Handle global set change
| [handleDeletedGlobalSet()](craft-services-globals.md#method-handledeletedglobalset)                                                         | Handle global set getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-globals.md#method-prunedeletedfield)                                                                   | Prune a deleted field from global set.
| [saveSet()](craft-services-globals.md#method-saveset)                                                                                       | Saves a global set.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteGlobalSetById()`





Deletes a global set by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L470-L484)


#### Arguments

- `$globalSetId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the global set was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `getAllSetIds()`





Returns all of the global set IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L83-L93)



#### Returns

[array](http://php.net/language.types.array)


---

#### Example

::: code
```php
$globalSetIds = Craft::$app->globals->allSetIds;
```
```twig
{% set globalSetIds = craft.app.globals.allSetIds %}
```
:::


### `getAllSets()`





Returns all global sets.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L141-L151)



#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md)[]


---

#### Example

::: code
```php
$globalSets = Craft::$app->globals->allSets;
```
```twig
{% set globalSets = craft.app.globals.allSets %}
```
:::


### `getEditableSetIds()`





Returns all of the global set IDs that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L109-L125)



#### Returns

[array](http://php.net/language.types.array)


---

#### Example

::: code
```php
$globalSetIds = Craft::$app->globals->editableSetIds;
```
```twig
{% set globalSetIds = craft.app.globals.editableSetIds %}
```
:::


### `getEditableSets()`





Returns all global sets that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L167-L180)



#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md)[]


---

#### Example

::: code
```php
$globalSets = Craft::$app->globals->editableSets;
```
```twig
{% set globalSets = craft.app.globals.editableSets %}
```
:::


### `getSetByHandle()`





Returns a global set by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L276-L301)


#### Arguments

- `$globalSetHandle` ([string](http://php.net/language.types.string))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$globalSet = Craft::$app->globals->getSetByHandle('footerInfo');
```
```twig
{% set globalSet = craft.app.globals.getSetByHandle('footerInfo') %}
```
:::


### `getSetById()`





Returns a global set by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L236-L258)


#### Arguments

- `$globalSetId` ([integer](http://php.net/language.types.integer))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$globalSet = Craft::$app->globals->getSetById(1);
```
```twig
{% set globalSet = craft.app.globals.getSetById(1) %}
```
:::


### `getTotalEditableSets()`





Returns the total number of global sets that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L215-L218)



#### Returns

[integer](http://php.net/language.types.integer)


---

#### Example

::: code
```php
$total = Craft::$app->globals->totalEditableSets;
```
```twig
{% set total = craft.app.globals.totalEditableSets %}
```
:::


### `getTotalSets()`





Returns the total number of global sets.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L196-L199)



#### Returns

[integer](http://php.net/language.types.integer)


---

#### Example

::: code
```php
$total = Craft::$app->globals->totalSets;
```
```twig
{% set total = craft.app.globals.totalSets %}
```
:::


### `handleChangedGlobalSet()`





Handle global set change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L373-L461)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedGlobalSet()`





Handle global set getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L491-L521)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `pruneDeletedField()`





Prune a deleted field from global set.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L528-L560)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `saveSet()`





Saves a global set.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Globals.php#L312-L366)


#### Arguments

- `$globalSet` ([craft\elements\GlobalSet](craft-elements-globalset.md)) – The global set to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the global set should be validated

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\GlobalSetNotFoundException](craft-errors-globalsetnotfoundexception.md)\
  if $globalSet->id is invalid
- [Throwable](http://php.net/class.throwable)\
  if reasons






## Constants

| Constant                | Description
| ----------------------- | -----------
| `CONFIG_GLOBALSETS_KEY` |


## Events

### EVENT_AFTER_SAVE_GLOBAL_SET



Type

:   [craft\events\GlobalSetEvent](craft-events-globalsetevent.md)



The event that is triggered after a global set is saved.



---



### EVENT_BEFORE_SAVE_GLOBAL_SET



Type

:   [craft\events\GlobalSetEvent](craft-events-globalsetevent.md)



The event that is triggered before a global set is saved.



---




