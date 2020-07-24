---
title: craft\commerce\base\Gateway
code:
  - php
  - twig
---

# Gateway

Type

:   Abstract Class

Namespace

:   craft\commerce\base

Inherits

:   [craft\commerce\base\Gateway](craft-commerce-base-gateway.md) &raquo;
[craft\base\SavableComponent](https://docs.craftcms.com/api/v3/craft-base-savablecomponent.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\SavableComponentInterface](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html), [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\SavableComponentTrait](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html), [craft\commerce\base\GatewayTrait](craft-commerce-base-gatewaytrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\commerce\base\SubscriptionGateway](craft-commerce-base-subscriptiongateway.md), [craft\commerce\gateways\Dummy](craft-commerce-gateways-dummy.md), [craft\commerce\gateways\Manual](craft-commerce-gateways-manual.md), [craft\commerce\gateways\MissingGateway](craft-commerce-gateways-missinggateway.md)

Since

:   2.0



Class Gateway





[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php)


## Public Properties

| Property                                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                          | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                      | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cpEditUrl](craft-commerce-base-gateway.md#cpediturl)                                                                                                     | [string](http://php.net/language.types.string)
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
| [paymentTypeOptions](craft-commerce-base-gateway.md#paymenttypeoptions)                                                                                   | [array](http://php.net/language.types.array)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                          | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#settings "Defined by craft\base\SavableComponentInterface")         | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#settingshtml "Defined by craft\base\SavableComponentInterface") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOrder](craft-commerce-base-gatewaytrait.md#sortorder "Defined by craft\commerce\base\GatewayTrait")                                                  | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Sort order
| [transactionHashFromWebhook](craft-commerce-base-gateway.md#transactionhashfromwebhook)                                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [uid](craft-commerce-base-gatewaytrait.md#uid "Defined by craft\commerce\base\GatewayTrait")                                                              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – UID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                      | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [webhookUrl](craft-commerce-base-gateway.md#webhookurl)                                                                                                   | [string](http://php.net/language.types.string)

### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php)



### `paymentTypeOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php)



### `transactionHashFromWebhook`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.1.9







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php)



### `webhookUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php)







## Public Methods

| Method                                                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                                        | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                               |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                            | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                                          | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                                                      | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                                          | Sets the value of a component property.
| [__toString()](craft-commerce-base-gateway.md#method-tostring)                                                                                                                 | Returns the name of this payment method.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                      | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                            | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                                                            | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                          | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                                 | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                  | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                        | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                      | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                                | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")                                              | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                                                        | Returns the list of attribute names.
| [authorize()](craft-commerce-base-gatewayinterface.md#method-authorize "Defined by craft\commerce\base\GatewayInterface")                                                      | Makes an authorize request.
| [availableForUseWithOrder()](craft-commerce-base-gateway.md#method-availableforusewithorder)                                                                                   | Returns true if gateway supports payments for the supplied order.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                                | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                        | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                        | Returns a value indicating whether a property can be set.
| [capture()](craft-commerce-base-gatewayinterface.md#method-capture "Defined by craft\commerce\base\GatewayInterface")                                                          | Makes a capture request.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                      | Removes errors for all attributes or a single attribute.
| [completeAuthorize()](craft-commerce-base-gatewayinterface.md#method-completeauthorize "Defined by craft\commerce\base\GatewayInterface")                                      | Complete the authorization for offsite payments.
| [completePurchase()](craft-commerce-base-gatewayinterface.md#method-completepurchase "Defined by craft\commerce\base\GatewayInterface")                                        | Complete the purchase for offsite payments.
| [cpPaymentsEnabled()](craft-commerce-base-gateway.md#method-cppaymentsenabled)                                                                                                 | Returns whether this gateway allows payments in control panel.
| [createPaymentSource()](craft-commerce-base-gatewayinterface.md#method-createpaymentsource "Defined by craft\commerce\base\GatewayInterface")                                  | Creates a payment source from source data and user id.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                            | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                         | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [deletePaymentSource()](craft-commerce-base-gatewayinterface.md#method-deletepaymentsource "Defined by craft\commerce\base\GatewayInterface")                                  | Deletes a payment source on the gateway by its token.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                        | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                      | Detaches all behaviors from the component.
| [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                      | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                                    | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                              | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                            | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                                | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                                      | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                            | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")                                          | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                                  | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                              | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                            | Returns all behaviors attached to this component.
| [getCpEditUrl()](craft-commerce-base-gateway.md#method-getcpediturl)                                                                                                           |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                             | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                              | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                          | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                  | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                                | Returns the first error of every attribute in the model.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                      | Returns an iterator for traversing the attributes in the model.
| [getPaymentConfirmationFormHtml()](craft-commerce-base-gateway.md#method-getpaymentconfirmationformhtml)                                                                       | Returns the html to use when paying with a stored payment source.
| [getPaymentFormHtml()](craft-commerce-base-gateway.md#method-getpaymentformhtml)                                                                                               | Returns payment Form HTML
| [getPaymentFormModel()](craft-commerce-base-gatewayinterface.md#method-getpaymentformmodel "Defined by craft\commerce\base\GatewayInterface")                                  | Returns payment form model to use in payment forms.
| [getPaymentTypeOptions()](craft-commerce-base-gateway.md#method-getpaymenttypeoptions)                                                                                         | Returns the payment type options.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                      | Returns the scenario that this model is used in.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getTransactionHashFromWebhook()](craft-commerce-base-gateway.md#method-gettransactionhashfromwebhook)                                                                         | Returns the transaction hash based on a webhook request
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                  | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getWebhookUrl()](craft-commerce-base-gateway.md#method-getwebhookurl)                                                                                                         | Returns the webhook url for this gateway.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                           | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                    | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                  | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                              | Returns a value indicating whether a property is defined for this component.
| [init()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-init "Defined by craft\base\Model")                                                                     | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                                | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                                          | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                                      | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                              | Returns a value indicating whether the attribute is safe for massive assignments.
| [isSelectable()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                    | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                    | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                              | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                                                    | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                          | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                          | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                      | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                          | This method is invoked when an unsafe attribute is being massively assigned.
| [processWebHook()](craft-commerce-base-gatewayinterface.md#method-processwebhook "Defined by craft\commerce\base\GatewayInterface")                                            | Processes a webhook and return a response
| [purchase()](craft-commerce-base-gatewayinterface.md#method-purchase "Defined by craft\commerce\base\GatewayInterface")                                                        | Makes a purchase request.
| [refund()](craft-commerce-base-gatewayinterface.md#method-refund "Defined by craft\commerce\base\GatewayInterface")                                                            | Makes an refund request.
| [rules()](craft-commerce-base-gateway.md#method-rules)                                                                                                                         | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                                | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                          | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                  | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                      | Sets the scenario for the model.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [supportsAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportsauthorize "Defined by craft\commerce\base\GatewayInterface")                                      | Returns true if gateway supports authorize requests.
| [supportsCapture()](craft-commerce-base-gatewayinterface.md#method-supportscapture "Defined by craft\commerce\base\GatewayInterface")                                          | Returns true if gateway supports capture requests.
| [supportsCompleteAuthorize()](craft-commerce-base-gatewayinterface.md#method-supportscompleteauthorize "Defined by craft\commerce\base\GatewayInterface")                      | Returns true if gateway supports completing authorize requests
| [supportsCompletePurchase()](craft-commerce-base-gatewayinterface.md#method-supportscompletepurchase "Defined by craft\commerce\base\GatewayInterface")                        | Returns true if gateway supports completing purchase requests
| [supportsPartialRefund()](craft-commerce-base-gatewayinterface.md#method-supportspartialrefund "Defined by craft\commerce\base\GatewayInterface")                              | Returns true if gateway supports partial refund requests.
| [supportsPaymentSources()](craft-commerce-base-gatewayinterface.md#method-supportspaymentsources "Defined by craft\commerce\base\GatewayInterface")                            | Returns true if gateway supports storing payment sources
| [supportsPurchase()](craft-commerce-base-gatewayinterface.md#method-supportspurchase "Defined by craft\commerce\base\GatewayInterface")                                        | Returns true if gateway supports purchase requests.
| [supportsRefund()](craft-commerce-base-gatewayinterface.md#method-supportsrefund "Defined by craft\commerce\base\GatewayInterface")                                            | Returns true if gateway supports refund requests.
| [supportsWebhooks()](craft-commerce-base-gatewayinterface.md#method-supportswebhooks "Defined by craft\commerce\base\GatewayInterface")                                        | Returns true if gateway supports webhooks.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                            | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                      | Triggers an event.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                            | Validates multiple models.

### `__toString()`





Returns the name of this payment method.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L41-L44)



#### Returns

[string](http://php.net/language.types.string)



### `availableForUseWithOrder()`





Returns true if gateway supports payments for the supplied order.



This method is called before a payment is made for the supplied order. It can be
used by developers building a checkout and deciding if this gateway should be shown as
and option to the customer.

It also can prevent a gateway from being used with a particular order.

An example of this can be found in the manual payment gateway: It has a setting that can limit it's use
to only be used with orders that are of a zero value amount. See below for an example of how it uses this
method to reject the gateway's use on orders that are not $0.00 if the setting is turned on

```php
public function availableForUseWithOrder($order): bool
 if ($this->onlyAllowForZeroPriceOrders && $order->getTotalPrice() != 0) {
   return false;
 }
return true;
}
```




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L116-L119)


#### Arguments

- `$order` – Order The order this gateway can or can not be available for payment with.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `cpPaymentsEnabled()`





Returns whether this gateway allows payments in control panel.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L66-L69)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getCpEditUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L74-L77)



#### Returns

[string](http://php.net/language.types.string)



### `getPaymentConfirmationFormHtml()`





Returns the html to use when paying with a stored payment source.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L108-L111)


#### Arguments

- `$params` ([array](http://php.net/language.types.array))

#### Returns

`mixed`



### `getPaymentFormHtml()`





Returns payment Form HTML




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L127)


#### Arguments

- `$params` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getPaymentTypeOptions()`





Returns the payment type options.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L84-L90)



#### Returns

[array](http://php.net/language.types.array)



### `getTransactionHashFromWebhook()`



Since

:   3.1.9



Returns the transaction hash based on a webhook request




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L135-L138)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getWebhookUrl()`





Returns the webhook url for this gateway.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L52-L59)


#### Arguments

- `$params` ([array](http://php.net/language.types.array)) – Parameters for the url.

#### Returns

[string](http://php.net/language.types.string)



### `rules()`





Returns the validation rules for attributes.



Validation rules are used by [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate) to check if attribute values are valid.
Child classes may override this method to declare different validation rules.

Each rule is an array with the following structure:

```php
[
    ['attribute1', 'attribute2'],
    'validator type',
    'on' => ['scenario1', 'scenario2'],
    //...other parameters...
]
```

where

 - attribute list: required, specifies the attributes array to be validated, for single attribute you can pass a string;
 - validator type: required, specifies the validator to be used. It can be a built-in validator name,
   a method name of the model class, an anonymous function, or a validator class name.
 - on: optional, specifies the [scenarios](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail) array in which the validation
   rule can be applied. If this option is not set, the rule will apply to all scenarios.
 - additional name-value pairs can be specified to initialize the corresponding validator properties.
   Please refer to individual validator class API for possible properties.

A validator can be either an object of a class extending `\craft\commerce\base\Validator`, or a model class method
(called *inline validator*) that has the following signature:

```php
// $params refers to validation parameters given in the rule
function validatorName($attribute, $params)
```

In the above `$attribute` refers to the attribute currently being validated while `$params` contains an array of
validator configuration options such as `max` in case of `string` validator. The value of the attribute currently being validated
can be accessed as `$this->$attribute`. Note the `$` before `attribute`; this is taking the value of the variable
`$attribute` and using it as the name of the property to access.

Yii also provides a set of [built-in validators](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$builtInValidators-detail).
Each one has an alias name which can be used when specifying a validation rule.

Below are some examples:

```php
[
    // built-in "required" validator
    [['username', 'password'], 'required'],
    // built-in "string" validator customized with "min" and "max" properties
    ['username', 'string', 'min' => 3, 'max' => 12],
    // built-in "compare" validator that is used in "register" scenario only
    ['password', 'compare', 'compareAttribute' => 'password2', 'on' => 'register'],
    // an inline validator defined via the "authenticate()" method in the model class
    ['password', 'authenticate', 'on' => 'login'],
    // a validator of class "DateRangeValidator"
    ['dateRange', 'DateRangeValidator'],
];
```

Note, in order to inherit rules defined in the parent class, a child class needs to
merge the parent rules with child rules using functions such as `array_merge()`.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Gateway.php#L95-L100)



#### Returns

[array](http://php.net/language.types.array) – Validation rules





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



