---
title: craft\commerce\base\SubscriptionGatewayInterface
code:
  - php
  - twig
---

# SubscriptionGatewayInterface

Type

:   Interface

Namespace

:   craft\commerce\base

Extends

:   [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html)

Implemented by

:   [craft\commerce\base\SubscriptionGateway](craft-commerce-base-subscriptiongateway.md), [craft\commerce\gateways\Dummy](craft-commerce-gateways-dummy.md)

Since

:   2.0



SubscriptionGatewayInterface defines the common interface to be implemented by gateway classes that support subscriptions.





[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php)






## Public Methods

| Method                                                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [cancelSubscription()](craft-commerce-base-subscriptiongatewayinterface.md#method-cancelsubscription)                                                                          | Cancels a subscription.
| [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getBillingIssueDescription()](craft-commerce-base-subscriptiongatewayinterface.md#method-getbillingissuedescription)                                                          | Return a description of the billing issue (if any) with this subscription.
| [getBillingIssueResolveFormHtml()](craft-commerce-base-subscriptiongatewayinterface.md#method-getbillingissueresolveformhtml)                                                  | Return the form HTML for resolving the billing issue (if any) with this subscription.
| [getHasBillingIssues()](craft-commerce-base-subscriptiongatewayinterface.md#method-gethasbillingissues)                                                                        | Returns whether this subscription has billing issues.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getNextPaymentAmount()](craft-commerce-base-subscriptiongatewayinterface.md#method-getnextpaymentamount)                                                                      | Returns the next payment amount for a subscription, taking into account all discounts.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getSubscriptionPayments()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionpayments)                                                                | Returns a list of subscription payments for a given subscription.
| [getSubscriptionPlanByReference()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionplanbyreference)                                                  | Returns a subscription plan by its reference
| [getSubscriptionPlans()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionplans)                                                                      | Returns all subscription plans as array containing hashes with `reference` and `name` as keys.
| [isSelectable()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [reactivateSubscription()](craft-commerce-base-subscriptiongatewayinterface.md#method-reactivatesubscription)                                                                  | Reactivates a subscription.
| [refreshPaymentHistory()](craft-commerce-base-subscriptiongatewayinterface.md#method-refreshpaymenthistory)                                                                    | Refresh the subscription payment history for a given subscription.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [subscribe()](craft-commerce-base-subscriptiongatewayinterface.md#method-subscribe)                                                                                            | Subscribe user to a plan.
| [supportsPlanSwitch()](craft-commerce-base-subscriptiongatewayinterface.md#method-supportsplanswitch)                                                                          | Returns whether this gateway supports switching plans.
| [supportsReactivation()](craft-commerce-base-subscriptiongatewayinterface.md#method-supportsreactivation)                                                                      | Returns whether this gateway supports reactivating subscriptions.
| [switchSubscriptionPlan()](craft-commerce-base-subscriptiongatewayinterface.md#method-switchsubscriptionplan)                                                                  | Switch a subscription to a different subscription plan.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.

### `cancelSubscription()`





Cancels a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L36)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The subscription to cancel
- `$parameters` ([craft\commerce\models\subscriptions\CancelSubscriptionForm](craft-commerce-models-subscriptions-cancelsubscriptionform.md)) – Additional parameters to use

#### Returns

[craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)

#### Throws

- [craft\commerce\errors\SubscriptionException](craft-commerce-errors-subscriptionexception.md)\
  for all subscription-related errors.


### `getBillingIssueDescription()`





Return a description of the billing issue (if any) with this subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L134)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[string](http://php.net/language.types.string)



### `getBillingIssueResolveFormHtml()`





Return the form HTML for resolving the billing issue (if any) with this subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L142)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[string](http://php.net/language.types.string)



### `getHasBillingIssues()`





Returns whether this subscription has billing issues.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L126)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getNextPaymentAmount()`





Returns the next payment amount for a subscription, taking into account all discounts.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L44)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[string](http://php.net/language.types.string) – Next payment amount with currency code



### `getSubscriptionPayments()`





Returns a list of subscription payments for a given subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L52)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))

#### Returns

[craft\commerce\models\subscriptions\SubscriptionPayment](craft-commerce-models-subscriptions-subscriptionpayment.md)[]



### `getSubscriptionPlanByReference()`





Returns a subscription plan by its reference




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L67)


#### Arguments

- `$reference` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getSubscriptionPlans()`





Returns all subscription plans as array containing hashes with `reference` and `name` as keys.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L74)



#### Returns

[array](http://php.net/language.types.array)



### `reactivateSubscription()`





Reactivates a subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L83)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The canceled subscription to reactivate

#### Returns

[craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)

#### Throws

- [craft\commerce\errors\NotImplementedException](craft-commerce-errors-notimplementedexception.md)


### `refreshPaymentHistory()`





Refresh the subscription payment history for a given subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L59)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))




### `subscribe()`





Subscribe user to a plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L94)


#### Arguments

- `$user` ([craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html)) – The Craft user to subscribe
- `$plan` ([craft\commerce\base\Plan](craft-commerce-base-plan.md)) – The plan to subscribe to
- `$parameters` ([craft\commerce\models\subscriptions\SubscriptionForm](craft-commerce-models-subscriptions-subscriptionform.md)) – Additional parameters to use

#### Returns

[craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)

#### Throws

- [craft\commerce\errors\SubscriptionException](craft-commerce-errors-subscriptionexception.md)\
  for all subscription-related errors.


### `supportsPlanSwitch()`





Returns whether this gateway supports switching plans.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L118)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsReactivation()`





Returns whether this gateway supports reactivating subscriptions.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L111)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `switchSubscriptionPlan()`





Switch a subscription to a different subscription plan.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGatewayInterface.php#L104)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The subscription to modify
- `$plan` ([craft\commerce\base\Plan](craft-commerce-base-plan.md)) – The plan to change the subscription to
- `$parameters` ([craft\commerce\models\subscriptions\SwitchPlansForm](craft-commerce-models-subscriptions-switchplansform.md)) – Additional parameters to use

#### Returns

[craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)









