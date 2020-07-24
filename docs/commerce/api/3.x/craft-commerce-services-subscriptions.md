---
title: craft\commerce\services\Subscriptions
code:
  - php
  - twig
---

# Subscriptions

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Subscriptions](craft-commerce-services-subscriptions.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Subscriptions service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [beforeDeleteUserHandler()](craft-commerce-services-subscriptions.md#method-beforedeleteuserhandler)                                        | Prevent deleting a user if they have any subscriptions - active or otherwise.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [cancelSubscription()](craft-commerce-services-subscriptions.md#method-cancelsubscription)                                                  | Cancel a subscription.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createSubscription()](craft-commerce-services-subscriptions.md#method-createsubscription)                                                  | Subscribe a user to a subscription plan.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [doesUserHaveAnySubscriptions()](craft-commerce-services-subscriptions.md#method-doesuserhaveanysubscriptions)                              | Return true if the user has any subscriptions at all, even expired ones.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [expireSubscription()](craft-commerce-services-subscriptions.md#method-expiresubscription)                                                  | Expire a subscription.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getSubscriptionCountForPlanById()](craft-commerce-services-subscriptions.md#method-getsubscriptioncountforplanbyid)                        | Returns subscription count for a plan.
| [handleChangedFieldLayout()](craft-commerce-services-subscriptions.md#method-handlechangedfieldlayout)                                      | Handle field layout change
| [handleDeletedFieldLayout()](craft-commerce-services-subscriptions.md#method-handledeletedfieldlayout)                                      | Handle field layout being deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-commerce-services-subscriptions.md#method-prunedeletedfield)                                                    | Prune a deleted field from subscription field layouts.
| [reactivateSubscription()](craft-commerce-services-subscriptions.md#method-reactivatesubscription)                                          | Reactivate a subscription.
| [receivePayment()](craft-commerce-services-subscriptions.md#method-receivepayment)                                                          | Receive a payment for a subscription
| [switchSubscriptionPlan()](craft-commerce-services-subscriptions.md#method-switchsubscriptionplan)                                          | Switch a subscription to a different subscription plan.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateSubscription()](craft-commerce-services-subscriptions.md#method-updatesubscription)                                                  | Update a subscription.

### `beforeDeleteUserHandler()`





Prevent deleting a user if they have any subscriptions - active or otherwise.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L424-L433)


#### Arguments

- `$event` ([craft\events\ModelEvent](https://docs.craftcms.com/api/v3/craft-events-modelevent.html)) – The event.




### `cancelSubscription()`





Cancel a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L684-L738)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))
- `$parameters` ([craft\commerce\models\subscriptions\CancelSubscriptionForm](craft-commerce-models-subscriptions-cancelsubscriptionform.md))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the gateway does not support subscriptions
- [craft\commerce\errors\SubscriptionException](craft-commerce-errors-subscriptionexception.md)\
  if something went wrong when canceling subscription


### `createSubscription()`





Subscribe a user to a subscription plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L497-L550)


#### Arguments

- `$user` ([craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html)) – The user subscribing to a plan
- `$plan` ([craft\commerce\base\Plan](craft-commerce-base-plan.md)) – The plan the user is being subscribed to
- `$parameters` ([craft\commerce\models\subscriptions\SubscriptionForm](craft-commerce-models-subscriptions-subscriptionform.md)) – Array of additional parameters to use
- `$fieldValues` ([array](http://php.net/language.types.array)) – Array of content field values to set

#### Returns

[craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md) – The subscription

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the gateway does not support subscriptions
- [craft\commerce\errors\SubscriptionException](craft-commerce-errors-subscriptionexception.md)\
  if something went wrong during subscription


### `doesUserHaveAnySubscriptions()`





Return true if the user has any subscriptions at all, even expired ones.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L481-L484)


#### Arguments

- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `expireSubscription()`





Expire a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L443-L462)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – Subscription to expire
- `$dateTime` ([DateTime](http://php.net/class.datetime)) – Expiry date time

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether successfully expired subscription

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if cannot expire subscription


### `getSubscriptionCountForPlanById()`





Returns subscription count for a plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L470-L473)


#### Arguments

- `$planId` ([integer](http://php.net/language.types.integer))

#### Returns

[integer](http://php.net/language.types.integer)



### `handleChangedFieldLayout()`





Handle field layout change




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L362-L381)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))




### `handleDeletedFieldLayout()`





Handle field layout being deleted




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L414-L417)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))




### `pruneDeletedField()`





Prune a deleted field from subscription field layouts.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L388-L407)


#### Arguments

- `$event` ([craft\events\FieldEvent](https://docs.craftcms.com/api/v3/craft-events-fieldevent.html))




### `reactivateSubscription()`





Reactivate a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L562-L606)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the gateway does not support subscriptions
- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `receivePayment()`





Receive a payment for a subscription




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L771-L780)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))
- `$payment` ([craft\commerce\models\subscriptions\SubscriptionPayment](craft-commerce-models-subscriptions-subscriptionpayment.md))
- `$paidUntil` ([DateTime](http://php.net/class.datetime))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `switchSubscriptionPlan()`





Switch a subscription to a different subscription plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L618-L673)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The subscription to modify
- `$plan` ([craft\commerce\base\Plan](craft-commerce-base-plan.md)) – The plan to change the subscription to
- `$parameters` ([craft\commerce\models\subscriptions\SwitchPlansForm](craft-commerce-models-subscriptions-switchplansform.md)) – Additional parameters to use

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [craft\commerce\errors\SubscriptionException](craft-commerce-errors-subscriptionexception.md)


### `updateSubscription()`





Update a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Subscriptions.php#L749-L758)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)






## Constants

| Constant                 | Description
| ------------------------ | -----------
| `CONFIG_FIELDLAYOUT_KEY` |


## Events

### EVENT_AFTER_CANCEL_SUBSCRIPTION



Type

:   [craft\commerce\events\CancelSubscriptionEvent](craft-commerce-events-cancelsubscriptionevent.md)



The event that is triggered after a subscription gets canceled.

```php
use craft\commerce\events\CancelSubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use craft\commerce\models\subscriptions\CancelSubscriptionForm;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_AFTER_CANCEL_SUBSCRIPTION,
    function(CancelSubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;
        // @var CancelSubscriptionForm $params
        $params = $event->parameters;

        // Refund the user for the remainder of the subscription
        // ...
    }
);
```



---



### EVENT_AFTER_CREATE_SUBSCRIPTION



Type

:   [craft\commerce\events\SubscriptionEvent](craft-commerce-events-subscriptionevent.md)



The event that is triggered after a subscription is created.

```php
use craft\commerce\events\SubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_AFTER_CREATE_SUBSCRIPTION,
    function(SubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;

        // Call a third party service to authorize a user
        // ...
    }
);
```



---



### EVENT_AFTER_EXPIRE_SUBSCRIPTION



Type

:   [craft\commerce\events\SubscriptionEvent](craft-commerce-events-subscriptionevent.md)



The event that is triggered after a subscription has expired.

```php
use craft\commerce\events\SubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_AFTER_EXPIRE_SUBSCRIPTION,
    function(SubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;

        // Make a call to third party service to de-authorize a user
        // ...
    }
);
```



---



### EVENT_AFTER_REACTIVATE_SUBSCRIPTION



Type

:   [craft\commerce\events\SubscriptionEvent](craft-commerce-events-subscriptionevent.md)



The event that is triggered after a subscription gets reactivated.

```php
use craft\commerce\events\SubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_AFTER_REACTIVATE_SUBSCRIPTION,
    function(SubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;

        // Re-authorize the user with a third-party service
        // ...
    }
);
```



---



### EVENT_AFTER_SWITCH_SUBSCRIPTION_PLAN



Type

:   [craft\commerce\events\SubscriptionSwitchPlansEvent](craft-commerce-events-subscriptionswitchplansevent.md)



The event that is triggered after a subscription gets switched to a different plan.

```php
use craft\commerce\events\SubscriptionSwitchPlansEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\base\Plan;
use craft\commerce\elements\Subscription;
use craft\commerce\models\subscriptions\SwitchPlansForm;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_AFTER_SWITCH_SUBSCRIPTION_PLAN,
    function(SubscriptionSwitchPlansEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;
        // @var Plan $oldPlan
        $oldPlan = $event->oldPlan;
        // @var Plan $newPlan
        $newPlan = $event->newPlan;
        // @var SwitchPlansForm $params
        $params = $event->parameters;

        // Adjust the user’s permissions on a third party service
        // ...
    }
);
```



---



### EVENT_BEFORE_CANCEL_SUBSCRIPTION



Type

:   [craft\commerce\events\CancelSubscriptionEvent](craft-commerce-events-cancelsubscriptionevent.md)



The event that is triggered before a subscription is canceled.

You may set the `isValid` property to `false` on the event to prevent the subscription from being canceled.

```php
use craft\commerce\events\CancelSubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use craft\commerce\models\subscriptions\CancelSubscriptionForm;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_BEFORE_CANCEL_SUBSCRIPTION,
    function(CancelSubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;
        // @var CancelSubscriptionForm $params
        $params = $event->parameters;

        // Check whether the user is permitted to cancel the subscription
        // ...
    }
);
```



---



### EVENT_BEFORE_CREATE_SUBSCRIPTION



Type

:   [craft\commerce\events\CreateSubscriptionEvent](craft-commerce-events-createsubscriptionevent.md)



The event that is triggered before a subscription is created.

You may set the `isValid` property to `false` on the event to prevent the user from being subscribed to the plan.

```php
use craft\commerce\events\CreateSubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\elements\User;
use craft\commerce\base\Plan;
use craft\commerce\models\subscriptions\SubscriptionForm;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_BEFORE_CREATE_SUBSCRIPTION,
    function(CreateSubscriptionEvent $event) {
        // @var User $user
        $user = $event->user;
        // @var Plan $plan
        $plan = $event->plan;
        // @var SubscriptionForm $params
        $params = $event->parameters;

        // Set the trial days based on some business logic
        // ...
    }
);
```



---



### EVENT_BEFORE_REACTIVATE_SUBSCRIPTION



Type

:   [craft\commerce\events\SubscriptionEvent](craft-commerce-events-subscriptionevent.md)



TThe event that is triggered before a subscription gets reactivated.

You may set the `isValid` property to `false` on the event to prevent the subscription from being reactivated.

```php
use craft\commerce\events\SubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_BEFORE_REACTIVATE_SUBSCRIPTION,
    function(SubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;

        // Use business logic to determine whether the user can reactivate
        // ...
    }
);
```



---



### EVENT_BEFORE_SWITCH_SUBSCRIPTION_PLAN



Type

:   [craft\commerce\events\SubscriptionSwitchPlansEvent](craft-commerce-events-subscriptionswitchplansevent.md)



The event that is triggered before a subscription is switched to a different plan.

You may set the `isValid` property to `false` on the event to prevent the switch from happening.

```php
use craft\commerce\events\SubscriptionSwitchPlansEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\base\Plan;
use craft\commerce\elements\Subscription;
use craft\commerce\models\subscriptions\SwitchPlansForm;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_BEFORE_SWITCH_SUBSCRIPTION_PLAN,
    function(SubscriptionSwitchPlansEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;
        // @var Plan $oldPlan
        $oldPlan = $event->oldPlan;
        // @var Plan $newPlan
        $newPlan = $event->newPlan;
        // @var SwitchPlansForm $params
        $params = $event->parameters;

        // Modify the switch parameters based on some business logic
        // ...
    }
);
```



---



### EVENT_BEFORE_UPDATE_SUBSCRIPTION



Type

:   [craft\commerce\events\SubscriptionEvent](craft-commerce-events-subscriptionevent.md)



The event that is triggered before a subscription gets updated. Typically this event is fired when subscription data is updated on the gateway.

```php
use craft\commerce\events\SubscriptionEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_BEFORE_UPDATE_SUBSCRIPTION,
    function(SubscriptionEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;

        // ...
    }
);
```



---



### EVENT_RECEIVE_SUBSCRIPTION_PAYMENT



Type

:   [craft\commerce\events\SubscriptionPaymentEvent](craft-commerce-events-subscriptionpaymentevent.md)



The event that is triggered when a subscription payment is received.

```php
use craft\commerce\events\SubscriptionPaymentEvent;
use craft\commerce\services\Subscriptions;
use craft\commerce\elements\Subscription;
use craft\commerce\models\subscriptions\SubscriptionPayment;
use DateTime;
use yii\base\Event;

Event::on(
    Subscriptions::class,
    Subscriptions::EVENT_RECEIVE_SUBSCRIPTION_PAYMENT,
    function(SubscriptionPaymentEvent $event) {
        // @var Subscription $subscription
        $subscription = $event->subscription;
        // @var SubscriptionPayment $payment
        $payment = $event->payment;
        // @var DateTime $until
        $until = $event->paidUntil;

        // Update loyalty reward data
        // ...
    }
);
```



---




