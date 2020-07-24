---
title: craft\commerce\services\Plans
code:
  - php
  - twig
---

# Plans

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Plans](craft-commerce-services-plans.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Plans service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allEnabledPlans](craft-commerce-services-plans.md#allenabledplans)                                                        | [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]
| [allPlans](craft-commerce-services-plans.md#allplans)                                                                      | [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allEnabledPlans`



Type

:   [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php)



### `allPlans`



Type

:   [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php)







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
| [archivePlanById()](craft-commerce-services-plans.md#method-archiveplanbyid)                                                                | Archive a subscription plan by its id.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllEnabledPlans()](craft-commerce-services-plans.md#method-getallenabledplans)                                                          | Returns all enabled subscription plans
| [getAllGatewayPlans()](craft-commerce-services-plans.md#method-getallgatewayplans)                                                          | Return all subscription plans for a gateway.
| [getAllPlans()](craft-commerce-services-plans.md#method-getallplans)                                                                        | Returns all subscription plans
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getPlanByHandle()](craft-commerce-services-plans.md#method-getplanbyhandle)                                                                | Returns a subscription plan by its handle.
| [getPlanById()](craft-commerce-services-plans.md#method-getplanbyid)                                                                        | Returns a subscription plan by its id.
| [getPlanByReference()](craft-commerce-services-plans.md#method-getplanbyreference)                                                          | Returns a subscription plan by its reference.
| [getPlanByUid()](craft-commerce-services-plans.md#method-getplanbyuid)                                                                      | Returns a subscription plan by its uid.
| [getPlansByInformationEntryId()](craft-commerce-services-plans.md#method-getplansbyinformationentryid)                                      | Returns plans which use the provided Entry for its "information"
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderPlans()](craft-commerce-services-plans.md#method-reorderplans)                                                                      | Reorders subscription plans by ids.
| [savePlan()](craft-commerce-services-plans.md#method-saveplan)                                                                              | Save a subscription plan
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `archivePlanById()`





Archive a subscription plan by its id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L275-L294)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The id

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getAllEnabledPlans()`





Returns all enabled subscription plans




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L105-L112)



#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)[]



### `getAllGatewayPlans()`





Return all subscription plans for a gateway.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L120-L127)


#### Arguments

- `$gatewayId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)[]



### `getAllPlans()`





Returns all subscription plans




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L92-L98)



#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)[]



### `getPlanByHandle()`





Returns a subscription plan by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L168-L175)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The plan handle

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the plan configuration is not correct


### `getPlanById()`





Returns a subscription plan by its id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L136-L143)


#### Arguments

- `$planId` ([integer](http://php.net/language.types.integer)) – The plan id.

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the plan configuration is not correct


### `getPlanByReference()`





Returns a subscription plan by its reference.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L184-L191)


#### Arguments

- `$reference` ([string](http://php.net/language.types.string)) – The plan reference

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the plan configuration is not correct


### `getPlanByUid()`





Returns a subscription plan by its uid.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L152-L159)


#### Arguments

- `$planUid` ([string](http://php.net/language.types.string)) – The plan uid.

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the plan configuration is not correct


### `getPlansByInformationEntryId()`





Returns plans which use the provided Entry for its "information"




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L199-L206)


#### Arguments

- `$entryId` ([integer](http://php.net/language.types.integer)) – The Entry ID to search by

#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)[]



### `reorderPlans()`





Reorders subscription plans by ids.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L302-L311)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array)) – Array of plans.

#### Returns

[boolean](http://php.net/language.types.boolean) – Always true.



### `savePlan()`





Save a subscription plan




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Plans.php#L216-L266)


#### Arguments

- `$plan` ([craft\commerce\base\Plan](craft-commerce-base-plan.md)) – The payment source being saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this plan before saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the plan was saved successfully

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if subscription plan not found by id.








## Events

### EVENT_AFTER_SAVE_PLAN



Type

:   [craft\commerce\events\PlanEvent](craft-commerce-events-planevent.md)



The event that is triggered after a plan is saved.

Plugins can get notified after a subscription plan is being saved.

```php
use craft\commerce\events\PlanEvent;
use craft\commerce\services\Plans;
use yii\base\Event;

Event::on(Plans::class, Plans::EVENT_AFTER_SAVE_PLAN, function(PlanEvent $e) {
    // Do something
});
```



---



### EVENT_ARCHIVE_PLAN



Type

:   [craft\commerce\events\PlanEvent](craft-commerce-events-planevent.md)



The event that is triggered when a plan is archived.

Plugins can get notified whenever a subscription plan is being archived.
This is useful as sometimes this can be triggered by an action on the gateway.

```php
use craft\commerce\events\PlanEvent;
use craft\commerce\services\Plans;
use yii\base\Event;

Event::on(Plans::class, Plans::EVENT_ARCHIVE_PLAN, function(PlanEvent $e) {
    // Do something as the plan is being retired.
});
```



---



### EVENT_BEFORE_SAVE_PLAN



Type

:   [craft\commerce\events\PlanEvent](craft-commerce-events-planevent.md)



The event that is triggered before a plan is saved.

Plugins can get notified before a subscription plan is being saved.

```php
use craft\commerce\events\PlanEvent;
use craft\commerce\services\Plans;
use yii\base\Event;

Event::on(Plans::class, Plans::EVENT_BEFORE_SAVE_PLAN, function(PlanEvent $e) {
    // Do something
});
```



---




