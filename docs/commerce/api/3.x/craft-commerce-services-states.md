---
title: craft\commerce\services\States
code:
  - php
  - twig
---

# States

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\States](craft-commerce-services-states.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



State service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allEnabledStates](craft-commerce-services-states.md#allenabledstates)                                                     | [craft\commerce\models\State](craft-commerce-models-state.md)[] – An array of all enabled states.
| [allEnabledStatesAsList](craft-commerce-services-states.md#allenabledstatesaslist)                                         | [array](http://php.net/language.types.array)
| [allEnabledStatesAsListGroupedByCountryId](craft-commerce-services-states.md#allenabledstatesaslistgroupedbycountryid)     | [array](http://php.net/language.types.array) – 2D array of states indexed by their ids grouped by country ids.
| [allStates](craft-commerce-services-states.md#allstates)                                                                   | [craft\commerce\models\State](craft-commerce-models-state.md)[] – An array of all states.
| [allStatesAsList](craft-commerce-services-states.md#allstatesaslist)                                                       | [array](http://php.net/language.types.array)
| [allStatesAsListGroupedByCountryId](craft-commerce-services-states.md#allstatesaslistgroupedbycountryid)                   | [array](http://php.net/language.types.array) – 2D array of states indexed by their ids grouped by country ids.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allEnabledStates`



Type

:   [craft\commerce\models\State](craft-commerce-models-state.md)[]

Access

:   Read-only

Since

:   3.0



An array of all enabled states.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)



### `allEnabledStatesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)



### `allEnabledStatesAsListGroupedByCountryId`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0



2D array of states indexed by their ids grouped by country ids.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)



### `allStates`



Type

:   [craft\commerce\models\State](craft-commerce-models-state.md)[]

Access

:   Read-only



An array of all states.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)



### `allStatesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)



### `allStatesAsListGroupedByCountryId`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0



2D array of states indexed by their ids grouped by country ids.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteStateById()](craft-commerce-services-states.md#method-deletestatebyid)                                                               | Deletes a state by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllEnabledStates()](craft-commerce-services-states.md#method-getallenabledstates)                                                       | Returns an array of all enabled states.
| [getAllEnabledStatesAsList()](craft-commerce-services-states.md#method-getallenabledstatesaslist)                                           | Returns all enabled states as array indexed by ID
| [getAllEnabledStatesAsListGroupedByCountryId()](craft-commerce-services-states.md#method-getallenabledstatesaslistgroupedbycountryid)       | Returns all enabled states grouped by countries.
| [getAllStates()](craft-commerce-services-states.md#method-getallstates)                                                                     | Returns an array of all states.
| [getAllStatesAsList()](craft-commerce-services-states.md#method-getallstatesaslist)                                                         | Returns all states indexed by ID
| [getAllStatesAsListGroupedByCountryId()](craft-commerce-services-states.md#method-getallstatesaslistgroupedbycountryid)                     | Returns all states grouped by countries.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getStateByAbbreviation()](craft-commerce-services-states.md#method-getstatebyabbreviation)                                                 | Returns a state by its abbreviation.
| [getStateById()](craft-commerce-services-states.md#method-getstatebyid)                                                                     | Returns a state by its ID.
| [getStatesByCountryId()](craft-commerce-services-states.md#method-getstatesbycountryid)                                                     |
| [getStatesByShippingZoneId()](craft-commerce-services-states.md#method-getstatesbyshippingzoneid)                                           | Returns all states in a shipping zone.
| [getStatesByTaxZoneId()](craft-commerce-services-states.md#method-getstatesbytaxzoneid)                                                     | Returns all states in a tax zone.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderStates()](craft-commerce-services-states.md#method-reorderstates)                                                                   |
| [saveState()](craft-commerce-services-states.md#method-savestate)                                                                           | Saves a state.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteStateById()`





Deletes a state by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L326-L335)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The state's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the state was deleted successfully



### `getAllEnabledStates()`



Since

:   3.0



Returns an array of all enabled states.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L220-L225)



#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md)[] – An array of all enabled states.



### `getAllEnabledStatesAsList()`



Since

:   3.0



Returns all enabled states as array indexed by ID




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L146-L150)



#### Returns

[array](http://php.net/language.types.array)



### `getAllEnabledStatesAsListGroupedByCountryId()`



Since

:   3.0



Returns all enabled states grouped by countries.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L158-L169)



#### Returns

[array](http://php.net/language.types.array) – 2D array of states indexed by their ids grouped by country ids.



### `getAllStates()`





Returns an array of all states.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L176-L203)



#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md)[] – An array of all states.



### `getAllStatesAsList()`





Returns all states indexed by ID




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L115-L119)



#### Returns

[array](http://php.net/language.types.array)



### `getAllStatesAsListGroupedByCountryId()`



Since

:   3.0



Returns all states grouped by countries.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L127-L138)



#### Returns

[array](http://php.net/language.types.array) – 2D array of states indexed by their ids grouped by country ids.



### `getStateByAbbreviation()`





Returns a state by its abbreviation.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L101-L108)


#### Arguments

- `$countryId` ([integer](http://php.net/language.types.integer)) – The state's country ID
- `$abbreviation` ([string](http://php.net/language.types.string)) – The state's abbreviation

#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md), [null](http://php.net/language.types.null)



### `getStateById()`





Returns a state by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L73-L92)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The state's ID

#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md), [null](http://php.net/language.types.null)



### `getStatesByCountryId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L209-L212)


#### Arguments

- `$countryId` ([integer](http://php.net/language.types.integer))

#### Returns

[array](http://php.net/language.types.array)



### `getStatesByShippingZoneId()`





Returns all states in a shipping zone.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L259-L277)


#### Arguments

- `$shippingZoneId` ([integer](http://php.net/language.types.integer)) – The shipping zone's ID

#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md)[] – Array of states in the matched shipping zone.



### `getStatesByTaxZoneId()`





Returns all states in a tax zone.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L233-L251)


#### Arguments

- `$taxZoneId` ([integer](http://php.net/language.types.integer)) – The tax zone's ID

#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md)[] – Array of states in the matched tax zone.



### `reorderStates()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L343-L352)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `saveState()`





Saves a state.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/States.php#L287-L318)


#### Arguments

- `$model` ([craft\commerce\models\State](craft-commerce-models-state.md)) – The state to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this state before saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the state was saved successfully.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the sate does not exist.









