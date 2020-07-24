---
title: craft\commerce\base\SubscriptionGateway
code:
  - php
  - twig
---

# SubscriptionGateway

Type

:   Abstract Class

Namespace

:   craft\commerce\base

Inherits

:   [craft\commerce\base\SubscriptionGateway](craft-commerce-base-subscriptiongateway.md) &raquo;
[craft\commerce\base\Gateway](craft-commerce-base-gateway.md) &raquo;
[craft\base\SavableComponent](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html), [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [craft\commerce\base\SubscriptionGatewayInterface](craft-commerce-base-subscriptiongatewayinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\SavableComponentTrait](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html), [craft\commerce\base\GatewayTrait](craft-commerce-base-gatewaytrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\commerce\gateways\Dummy](craft-commerce-gateways-dummy.md)

Since

:   2.0



Class Subscription Gateway





[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)


## Public Properties

| Property                                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                          | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                      | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cancelSubscriptionFormModel](craft-commerce-base-subscriptiongateway.md#cancelsubscriptionformmodel)                                                     | [craft\commerce\models\subscriptions\CancelSubscriptionForm](craft-commerce-models-subscriptions-cancelsubscriptionform.md)
| [cpEditUrl](craft-commerce-base-gateway.md#cpediturl "Defined by craft\commerce\base\Gateway")                                                            | [string](http://php.net/language.types.string)
| [dateArchived](craft-commerce-base-gatewaytrait.md#datearchived "Defined by craft\commerce\base\GatewayTrait")                                            | [DateTime](http://php.net/class.datetime) – Archived Date
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#datecreated "Defined by craft\base\SavableComponentTrait")           | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#dateupdated "Defined by craft\base\SavableComponentTrait")           | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                              | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                    | [array](http://php.net/language.types.array) – The first errors.
| [handle](craft-commerce-base-gatewaytrait.md#handle "Defined by craft\commerce\base\GatewayTrait")                                                        | [string](http://php.net/language.types.string) – Handle
| [id](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#id "Defined by craft\base\SavableComponentTrait")                             | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [isArchived](craft-commerce-base-gatewaytrait.md#isarchived "Defined by craft\commerce\base\GatewayTrait")                                                | [boolean](http://php.net/language.types.boolean) – Archived
| [isFrontendEnabled](craft-commerce-base-gatewaytrait.md#isfrontendenabled "Defined by craft\commerce\base\GatewayTrait")                                  | [boolean](http://php.net/language.types.boolean) – Enabled on the frontend
| [isNew](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#isnew "Defined by craft\base\SavableComponentInterface")               | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                          | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [name](craft-commerce-base-gatewaytrait.md#name "Defined by craft\commerce\base\GatewayTrait")                                                            | [string](http://php.net/language.types.string) – Name
| [paymentFormModel](craft-commerce-base-gatewayinterface.md#paymentformmodel "Defined by craft\commerce\base\GatewayInterface")                            | [craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)
| [paymentType](craft-commerce-base-gatewaytrait.md#paymenttype "Defined by craft\commerce\base\GatewayTrait")                                              | [string](http://php.net/language.types.string) – Payment Type
| [paymentTypeOptions](craft-commerce-base-gateway.md#paymenttypeoptions "Defined by craft\commerce\base\Gateway")                                          | [array](http://php.net/language.types.array)
| [planModel](craft-commerce-base-subscriptiongateway.md#planmodel)                                                                                         | [craft\commerce\base\Plan](craft-commerce-base-plan.md)
| [planSettingsHtml](craft-commerce-base-subscriptiongateway.md#plansettingshtml)                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                          | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#settings "Defined by craft\base\SavableComponentInterface")         | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#settingshtml "Defined by craft\base\SavableComponentInterface") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOrder](craft-commerce-base-gatewaytrait.md#sortorder "Defined by craft\commerce\base\GatewayTrait")                                                  | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Sort order
| [subscriptionFormModel](craft-commerce-base-subscriptiongateway.md#subscriptionformmodel)                                                                 | [craft\commerce\models\subscriptions\SubscriptionForm](craft-commerce-models-subscriptions-subscriptionform.md)
| [subscriptionPlans](craft-commerce-base-subscriptiongatewayinterface.md#subscriptionplans "Defined by craft\commerce\base\SubscriptionGatewayInterface")  | [array](http://php.net/language.types.array)
| [switchPlansFormModel](craft-commerce-base-subscriptiongateway.md#switchplansformmodel)                                                                   | [craft\commerce\models\subscriptions\SwitchPlansForm](craft-commerce-models-subscriptions-switchplansform.md)
| [transactionHashFromWebhook](craft-commerce-base-gatewayinterface.md#transactionhashfromwebhook "Defined by craft\commerce\base\GatewayInterface")        | `mixed`
| [uid](craft-commerce-base-gatewaytrait.md#uid "Defined by craft\commerce\base\GatewayTrait")                                                              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – UID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                      | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [webhookUrl](craft-commerce-base-gateway.md#webhookurl "Defined by craft\commerce\base\Gateway")                                                          | [string](http://php.net/language.types.string)

### `cancelSubscriptionFormModel`



Type

:   [craft\commerce\models\subscriptions\CancelSubscriptionForm](craft-commerce-models-subscriptions-cancelsubscriptionform.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)



### `planModel`



Type

:   [craft\commerce\base\Plan](craft-commerce-base-plan.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)



### `planSettingsHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)



### `subscriptionFormModel`



Type

:   [craft\commerce\models\subscriptions\SubscriptionForm](craft-commerce-models-subscriptions-subscriptionform.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)



### `switchPlansFormModel`



Type

:   [craft\commerce\models\subscriptions\SwitchPlansForm](craft-commerce-models-subscriptions-switchplansform.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php)







## Public Methods

| Method                                                                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                                                     | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                                            |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                                                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                                                                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                                                       | Sets the value of a component property.
| [__toString()](craft-commerce-base-gateway.md#method-tostring "Defined by craft\commerce\base\Gateway")                                                                                     | Returns the name of this payment method.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                                   | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                                         | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                                                         | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                                       | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                                              | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-afterdelete "Defined by craft\base\SavableComponentInterface")                            | Performs actions after a component is deleted.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-aftersave "Defined by craft\base\SavableComponentInterface")                                | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                               | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                                     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                                   | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                                             | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                                                           | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                                                                     | Returns the list of attribute names.
| [authorize()](craft-commerce-base-gatewayinterface.md#method-authorize "Defined by craft\commerce\base\GatewayInterface")                                                                   | Makes an authorize request.
| [availableForUseWithOrder()](craft-commerce-base-gatewayinterface.md#method-availableforusewithorder "Defined by craft\commerce\base\GatewayInterface")                                     | Returns true if gateway supports payments for the supplied order.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")                | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforedelete "Defined by craft\base\SavableComponentInterface")                          | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforesave "Defined by craft\base\SavableComponentInterface")                              | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                                             | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                                                                        | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                                     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                                     | Returns a value indicating whether a property can be set.
| [cancelSubscription()](craft-commerce-base-subscriptiongatewayinterface.md#method-cancelsubscription "Defined by craft\commerce\base\SubscriptionGatewayInterface")                         | Cancels a subscription.
| [capture()](craft-commerce-base-gatewayinterface.md#method-capture "Defined by craft\commerce\base\GatewayInterface")                                                                       | Makes a capture request.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                             | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                                   | Removes errors for all attributes or a single attribute.
| [completeAuthorize()](craft-commerce-base-gatewayinterface.md#method-completeauthorize "Defined by craft\commerce\base\GatewayInterface")                                                   | Complete the authorization for offsite payments.
| [completePurchase()](craft-commerce-base-gatewayinterface.md#method-completepurchase "Defined by craft\commerce\base\GatewayInterface")                                                     | Complete the purchase for offsite payments.
| [cpPaymentsEnabled()](craft-commerce-base-gateway.md#method-cppaymentsenabled "Defined by craft\commerce\base\Gateway")                                                                     | Returns whether this gateway allows payments in control panel.
| [createPaymentSource()](craft-commerce-base-gatewayinterface.md#method-createpaymentsource "Defined by craft\commerce\base\GatewayInterface")                                               | Creates a payment source from source data and user id.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                                         | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                                      | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [deletePaymentSource()](craft-commerce-base-gatewayinterface.md#method-deletepaymentsource "Defined by craft\commerce\base\GatewayInterface")                                               | Deletes a payment source on the gateway by its token.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                                     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                                   | Detaches all behaviors from the component.
| [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname "Defined by craft\base\ComponentInterface")                                          | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                                   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                                                 | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                                           | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                                         | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                                             | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                                                   | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                                         | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")                                                       | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                                               | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                         | Returns all behaviors attached to this component.
| [getBillingIssueDescription()](craft-commerce-base-subscriptiongatewayinterface.md#method-getbillingissuedescription "Defined by craft\commerce\base\SubscriptionGatewayInterface")         | Return a description of the billing issue (if any) with this subscription.
| [getBillingIssueResolveFormHtml()](craft-commerce-base-subscriptiongatewayinterface.md#method-getbillingissueresolveformhtml "Defined by craft\commerce\base\SubscriptionGatewayInterface") | Return the form HTML for resolving the billing issue (if any) with this subscription.
| [getCancelSubscriptionFormHtml()](craft-commerce-base-subscriptiongateway.md#method-getcancelsubscriptionformhtml)                                                                          | Returns the cancel subscription form HTML
| [getCancelSubscriptionFormModel()](craft-commerce-base-subscriptiongateway.md#method-getcancelsubscriptionformmodel)                                                                        | Returns the cancel subscription form model
| [getCpEditUrl()](craft-commerce-base-gateway.md#method-getcpediturl "Defined by craft\commerce\base\Gateway")                                                                               |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                                          | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                                           | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                                       | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                               | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                                             | Returns the first error of every attribute in the model.
| [getHasBillingIssues()](craft-commerce-base-subscriptiongatewayinterface.md#method-gethasbillingissues "Defined by craft\commerce\base\SubscriptionGatewayInterface")                       | Returns whether this subscription has billing issues.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getisnew "Defined by craft\base\SavableComponentInterface")                                  | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                                   | Returns an iterator for traversing the attributes in the model.
| [getNextPaymentAmount()](craft-commerce-base-subscriptiongatewayinterface.md#method-getnextpaymentamount "Defined by craft\commerce\base\SubscriptionGatewayInterface")                     | Returns the next payment amount for a subscription, taking into account all discounts.
| [getPaymentConfirmationFormHtml()](craft-commerce-base-gateway.md#method-getpaymentconfirmationformhtml "Defined by craft\commerce\base\Gateway")                                           | Returns the html to use when paying with a stored payment source.
| [getPaymentFormHtml()](craft-commerce-base-gateway.md#method-getpaymentformhtml "Defined by craft\commerce\base\Gateway")                                                                   | Returns payment Form HTML
| [getPaymentFormModel()](craft-commerce-base-gatewayinterface.md#method-getpaymentformmodel "Defined by craft\commerce\base\GatewayInterface")                                               | Returns payment form model to use in payment forms.
| [getPaymentTypeOptions()](craft-commerce-base-gateway.md#method-getpaymenttypeoptions "Defined by craft\commerce\base\Gateway")                                                             | Returns the payment type options.
| [getPlanModel()](craft-commerce-base-subscriptiongateway.md#method-getplanmodel)                                                                                                            | Returns the subscription plan model.
| [getPlanSettingsHtml()](craft-commerce-base-subscriptiongateway.md#method-getplansettingshtml)                                                                                              | Returns the subscription plan settings HTML
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                                   | Returns the scenario that this model is used in.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettings "Defined by craft\base\SavableComponentInterface")                            | Returns an array of the component’s settings.
| [getSettingsHtml()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")                    | Returns the component’s settings HTML.
| [getSubscriptionFormModel()](craft-commerce-base-subscriptiongateway.md#method-getsubscriptionformmodel)                                                                                    | Returns the subscription form model
| [getSubscriptionPayments()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionpayments "Defined by craft\commerce\base\SubscriptionGatewayInterface")               | Returns a list of subscription payments for a given subscription.
| [getSubscriptionPlanByReference()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionplanbyreference "Defined by craft\commerce\base\SubscriptionGatewayInterface") | Returns a subscription plan by its reference
| [getSubscriptionPlans()](craft-commerce-base-subscriptiongatewayinterface.md#method-getsubscriptionplans "Defined by craft\commerce\base\SubscriptionGatewayInterface")                     | Returns all subscription plans as array containing hashes with `reference` and `name` as keys.
| [getSwitchPlansFormHtml()](craft-commerce-base-subscriptiongateway.md#method-getswitchplansformhtml)                                                                                        | Returns the html form to use when switching between two plans
| [getSwitchPlansFormModel()](craft-commerce-base-subscriptiongateway.md#method-getswitchplansformmodel)                                                                                      | Returns the form model used for switching plans.
| [getTransactionHashFromWebhook()](craft-commerce-base-gatewayinterface.md#method-gettransactionhashfromwebhook "Defined by craft\commerce\base\GatewayInterface")                           | Retrieves the transaction hash from the webhook data. This could be a query string param or part of the response data.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                               | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getWebhookUrl()](craft-commerce-base-gateway.md#method-getwebhookurl "Defined by craft\commerce\base\Gateway")                                                                             | Returns the webhook url for this gateway.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                                        | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                                 | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                                           | Returns a value indicating whether a property is defined for this component.
| [init()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-init "Defined by craft\base\Model")                                                                                  | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                                             | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                                                       | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                                                   | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                                           | Returns a value indicating whether the attribute is safe for massive assignments.
| [isSelectable()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-isselectable "Defined by craft\base\SavableComponentInterface")                          | Returns whether the component should be selectable in component Type selects.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                                 | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                                 | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                           | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                                                                 | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                                       | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                                       | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                                   | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                             | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                                       | This method is invoked when an unsafe attribute is being massively assigned.
| [processWebHook()](craft-commerce-base-gatewayinterface.md#method-processwebhook "Defined by craft\commerce\base\GatewayInterface")                                                         | Processes a webhook and return a response
| [purchase()](craft-commerce-base-gatewayinterface.md#method-purchase "Defined by craft\commerce\base\GatewayInterface")                                                                     | Makes a purchase request.
| [reactivateSubscription()](craft-commerce-base-subscriptiongateway.md#method-reactivatesubscription)                                                                                        | Reactivates a subscription.
| [refreshPaymentHistory()](craft-commerce-base-subscriptiongateway.md#method-refreshpaymenthistory)                                                                                          | Refresh the subscription payment history for a given subscription.
| [refund()](craft-commerce-base-gatewayinterface.md#method-refund "Defined by craft\commerce\base\GatewayInterface")                                                                         | Makes an refund request.
| [rules()](craft-commerce-base-gateway.md#method-rules "Defined by craft\commerce\base\Gateway")                                                                                             | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                                             | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                                       | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                               | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                                   | Sets the scenario for the model.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-settingsattributes "Defined by craft\base\SavableComponentInterface")              | Returns the list of settings attribute names.
| [subscribe()](craft-commerce-base-subscriptiongatewayinterface.md#method-subscribe "Defined by craft\commerce\base\SubscriptionGatewayInterface")                                           | Subscribe user to a plan.
| [supportsAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportsauthorize "Defined by craft\commerce\base\GatewayInterface")                                                   | Returns true if gateway supports authorize requests.
| [supportsCapture()](craft-commerce-base-gatewayinterface.md#method-supportscapture "Defined by craft\commerce\base\GatewayInterface")                                                       | Returns true if gateway supports capture requests.
| [supportsCompleteAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportscompleteauthorize "Defined by craft\commerce\base\GatewayInterface")                                   | Returns true if gateway supports completing authorize requests
| [supportsCompletePurchase()](craft-commerce-base-gatewayinterface.md#method-supportscompletepurchase "Defined by craft\commerce\base\GatewayInterface")                                     | Returns true if gateway supports completing purchase requests
| [supportsPartialRefund()](craft-commerce-base-gatewayinterface.md#method-supportspartialrefund "Defined by craft\commerce\base\GatewayInterface")                                           | Returns true if gateway supports partial refund requests.
| [supportsPaymentSources()](craft-commerce-base-gatewayinterface.md#method-supportspaymentsources "Defined by craft\commerce\base\GatewayInterface")                                         | Returns true if gateway supports storing payment sources
| [supportsPlanSwitch()](craft-commerce-base-subscriptiongatewayinterface.md#method-supportsplanswitch "Defined by craft\commerce\base\SubscriptionGatewayInterface")                         | Returns whether this gateway supports switching plans.
| [supportsPurchase()](craft-commerce-base-gatewayinterface.md#method-supportspurchase "Defined by craft\commerce\base\GatewayInterface")                                                     | Returns true if gateway supports purchase requests.
| [supportsReactivation()](craft-commerce-base-subscriptiongatewayinterface.md#method-supportsreactivation "Defined by craft\commerce\base\SubscriptionGatewayInterface")                     | Returns whether this gateway supports reactivating subscriptions.
| [supportsRefund()](craft-commerce-base-gatewayinterface.md#method-supportsrefund "Defined by craft\commerce\base\GatewayInterface")                                                         | Returns true if gateway supports refund requests.
| [supportsWebhooks()](craft-commerce-base-gatewayinterface.md#method-supportswebhooks "Defined by craft\commerce\base\GatewayInterface")                                                     | Returns true if gateway supports webhooks.
| [switchSubscriptionPlan()](craft-commerce-base-subscriptiongatewayinterface.md#method-switchsubscriptionplan "Defined by craft\commerce\base\SubscriptionGatewayInterface")                 | Switch a subscription to a different subscription plan.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                                         | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                                   | Triggers an event.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                                  | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                                         | Validates multiple models.

### `getCancelSubscriptionFormHtml()`





Returns the cancel subscription form HTML




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L31)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The subscription to cancel

#### Returns

[string](http://php.net/language.types.string)



### `getCancelSubscriptionFormModel()`





Returns the cancel subscription form model




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L38)



#### Returns

[craft\commerce\models\subscriptions\CancelSubscriptionForm](craft-commerce-models-subscriptions-cancelsubscriptionform.md)



### `getPlanModel()`





Returns the subscription plan model.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L53)



#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)



### `getPlanSettingsHtml()`





Returns the subscription plan settings HTML




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L46)


#### Arguments

- `$params` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSubscriptionFormModel()`





Returns the subscription form model




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L60)



#### Returns

[craft\commerce\models\subscriptions\SubscriptionForm](craft-commerce-models-subscriptions-subscriptionform.md)



### `getSwitchPlansFormHtml()`





Returns the html form to use when switching between two plans




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L69-L72)


#### Arguments

- `$originalPlan` ([craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md))
- `$targetPlan` ([craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md))

#### Returns

[string](http://php.net/language.types.string)



### `getSwitchPlansFormModel()`





Returns the form model used for switching plans.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L79)



#### Returns

[craft\commerce\models\subscriptions\SwitchPlansForm](craft-commerce-models-subscriptions-switchplansform.md)



### `reactivateSubscription()`





Reactivates a subscription.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L84-L87)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)) – The canceled subscription to reactivate

#### Returns

[craft\commerce\base\SubscriptionResponseInterface](craft-commerce-base-subscriptionresponseinterface.md)

#### Throws

- [craft\commerce\errors\NotImplementedException](craft-commerce-errors-notimplementedexception.md)


### `refreshPaymentHistory()`





Refresh the subscription payment history for a given subscription.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/SubscriptionGateway.php#L92-L94)


#### Arguments

- `$subscription` ([craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md))






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineRules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-definerules "Defined by craft\base\Model")                                | Returns the validation rules for attributes.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.



