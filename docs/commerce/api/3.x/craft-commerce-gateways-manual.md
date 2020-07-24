---
title: craft\commerce\gateways\Manual
code:
  - php
  - twig
---

# Manual

Type

:   Class

Namespace

:   craft\commerce\gateways

Inherits

:   [craft\commerce\gateways\Manual](craft-commerce-gateways-manual.md) &raquo;
[craft\commerce\base\Gateway](craft-commerce-base-gateway.md) &raquo;
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

Since

:   2.0



Manual represents a manual gateway.





[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php)


## Public Properties

| Property                                                                                                                                          | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                  | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                              | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                        | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cpEditUrl](craft-commerce-base-gateway.md#cpediturl "Defined by craft\commerce\base\Gateway")                                                    | [string](http://php.net/language.types.string)
| [dateArchived](craft-commerce-base-gatewaytrait.md#datearchived "Defined by craft\commerce\base\GatewayTrait")                                    | [DateTime](http://php.net/class.datetime) – Archived Date
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#datecreated "Defined by craft\base\SavableComponentTrait")   | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#dateupdated "Defined by craft\base\SavableComponentTrait")   | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                      | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                            | [array](http://php.net/language.types.array) – The first errors.
| [handle](craft-commerce-base-gatewaytrait.md#handle "Defined by craft\commerce\base\GatewayTrait")                                                | [string](http://php.net/language.types.string) – Handle
| [id](https://docs.craftcms.com/api/v3/craft-base-savablecomponenttrait.html#id "Defined by craft\base\SavableComponentTrait")                     | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [isArchived](craft-commerce-base-gatewaytrait.md#isarchived "Defined by craft\commerce\base\GatewayTrait")                                        | [boolean](http://php.net/language.types.boolean) – Archived
| [isFrontendEnabled](craft-commerce-base-gatewaytrait.md#isfrontendenabled "Defined by craft\commerce\base\GatewayTrait")                          | [boolean](http://php.net/language.types.boolean) – Enabled on the frontend
| [isNew](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#isnew "Defined by craft\base\SavableComponentInterface")       | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                  | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [name](craft-commerce-base-gatewaytrait.md#name "Defined by craft\commerce\base\GatewayTrait")                                                    | [string](http://php.net/language.types.string) – Name
| [onlyAllowForZeroPriceOrders](craft-commerce-gateways-manual.md#onlyallowforzeropriceorders)                                                      | [boolean](http://php.net/language.types.boolean)
| [paymentFormModel](craft-commerce-gateways-manual.md#paymentformmodel)                                                                            | [craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)
| [paymentType](craft-commerce-base-gatewaytrait.md#paymenttype "Defined by craft\commerce\base\GatewayTrait")                                      | [string](http://php.net/language.types.string) – Payment Type
| [paymentTypeOptions](craft-commerce-gateways-manual.md#paymenttypeoptions)                                                                        | [array](http://php.net/language.types.array)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                  | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#settings "Defined by craft\base\SavableComponentInterface") | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-commerce-gateways-manual.md#settingshtml)                                                                                    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOrder](craft-commerce-base-gatewaytrait.md#sortorder "Defined by craft\commerce\base\GatewayTrait")                                          | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Sort order
| [transactionHashFromWebhook](craft-commerce-base-gateway.md#transactionhashfromwebhook "Defined by craft\commerce\base\Gateway")                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [uid](craft-commerce-base-gatewaytrait.md#uid "Defined by craft\commerce\base\GatewayTrait")                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – UID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                              | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [webhookUrl](craft-commerce-base-gateway.md#webhookurl "Defined by craft\commerce\base\Gateway")                                                  | [string](http://php.net/language.types.string)

### `onlyAllowForZeroPriceOrders`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L34)



### `paymentFormModel`



Type

:   [craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php)



### `paymentTypeOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php)



### `settingsHtml`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php)







## Public Methods

| Method                                                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                                                        | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                               |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                            | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                                                          | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                                                      | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                                                          | Sets the value of a component property.
| [__toString()](craft-commerce-base-gateway.md#method-tostring "Defined by craft\commerce\base\Gateway")                                                                        | Returns the name of this payment method.
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
| [authorize()](craft-commerce-gateways-manual.md#method-authorize)                                                                                                              | Makes an authorize request.
| [availableForUseWithOrder()](craft-commerce-gateways-manual.md#method-availableforusewithorder)                                                                                | Returns true if gateway supports payments for the supplied order.
| [beforeApplyDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                                | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                        | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                        | Returns a value indicating whether a property can be set.
| [capture()](craft-commerce-gateways-manual.md#method-capture)                                                                                                                  | Makes a capture request.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                      | Removes errors for all attributes or a single attribute.
| [completeAuthorize()](craft-commerce-gateways-manual.md#method-completeauthorize)                                                                                              | Complete the authorization for offsite payments.
| [completePurchase()](craft-commerce-gateways-manual.md#method-completepurchase)                                                                                                | Complete the purchase for offsite payments.
| [cpPaymentsEnabled()](craft-commerce-base-gateway.md#method-cppaymentsenabled "Defined by craft\commerce\base\Gateway")                                                        | Returns whether this gateway allows payments in control panel.
| [createPaymentSource()](craft-commerce-gateways-manual.md#method-createpaymentsource)                                                                                          | Creates a payment source from source data and user id.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                            | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                         | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [deletePaymentSource()](craft-commerce-gateways-manual.md#method-deletepaymentsource)                                                                                          | Deletes a payment source on the gateway by its token.
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
| [getCpEditUrl()](craft-commerce-base-gateway.md#method-getcpediturl "Defined by craft\commerce\base\Gateway")                                                                  |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                             | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                              | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                          | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                  | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                                | Returns the first error of every attribute in the model.
| [getIsNew()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                      | Returns an iterator for traversing the attributes in the model.
| [getPaymentConfirmationFormHtml()](craft-commerce-base-gateway.md#method-getpaymentconfirmationformhtml "Defined by craft\commerce\base\Gateway")                              | Returns the html to use when paying with a stored payment source.
| [getPaymentFormHtml()](craft-commerce-gateways-manual.md#method-getpaymentformhtml)                                                                                            | Returns payment Form HTML
| [getPaymentFormModel()](craft-commerce-gateways-manual.md#method-getpaymentformmodel)                                                                                          | Returns payment form model to use in payment forms.
| [getPaymentTypeOptions()](craft-commerce-gateways-manual.md#method-getpaymenttypeoptions)                                                                                      | Returns the payment type options.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                      | Returns the scenario that this model is used in.
| [getSettings()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-commerce-gateways-manual.md#method-getsettingshtml)                                                                                                  | Returns the component’s settings HTML.
| [getTransactionHashFromWebhook()](craft-commerce-base-gateway.md#method-gettransactionhashfromwebhook "Defined by craft\commerce\base\Gateway")                                | Returns the transaction hash based on a webhook request
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                  | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getWebhookUrl()](craft-commerce-base-gateway.md#method-getwebhookurl "Defined by craft\commerce\base\Gateway")                                                                | Returns the webhook url for this gateway.
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
| [processWebHook()](craft-commerce-gateways-manual.md#method-processwebhook)                                                                                                    | Processes a webhook and return a response
| [purchase()](craft-commerce-gateways-manual.md#method-purchase)                                                                                                                | Makes a purchase request.
| [refund()](craft-commerce-gateways-manual.md#method-refund)                                                                                                                    | Makes an refund request.
| [rules()](craft-commerce-base-gateway.md#method-rules "Defined by craft\commerce\base\Gateway")                                                                                | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                                | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                          | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                  | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                      | Sets the scenario for the model.
| [settingsAttributes()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [supportsAuthorize()](craft-commerce-gateways-manual.md#method-supportsauthorize)                                                                                              | Returns true if gateway supports authorize requests.
| [supportsCapture()](craft-commerce-gateways-manual.md#method-supportscapture)                                                                                                  | Returns true if gateway supports capture requests.
| [supportsCompleteAuthorize()](craft-commerce-gateways-manual.md#method-supportscompleteauthorize)                                                                              | Returns true if gateway supports completing authorize requests
| [supportsCompletePurchase()](craft-commerce-gateways-manual.md#method-supportscompletepurchase)                                                                                | Returns true if gateway supports completing purchase requests
| [supportsPartialRefund()](craft-commerce-gateways-manual.md#method-supportspartialrefund)                                                                                      | Returns true if gateway supports partial refund requests.
| [supportsPaymentSources()](craft-commerce-gateways-manual.md#method-supportspaymentsources)                                                                                    | Returns true if gateway supports storing payment sources
| [supportsPurchase()](craft-commerce-gateways-manual.md#method-supportspurchase)                                                                                                | Returns true if gateway supports purchase requests.
| [supportsRefund()](craft-commerce-gateways-manual.md#method-supportsrefund)                                                                                                    | Returns true if gateway supports refund requests.
| [supportsWebhooks()](craft-commerce-gateways-manual.md#method-supportswebhooks)                                                                                                | Returns true if gateway supports webhooks.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                            | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                      | Triggers an event.
| [validate()](https://docs.craftcms.com/api/v3/craft-base-savablecomponentinterface.html#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                            | Validates multiple models.

### `authorize()`





Makes an authorize request.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L63-L66)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The authorize transaction
- `$form` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – A form filled with payment info

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



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




[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L217-L224)


#### Arguments

- `$order` – Order The order this gateway can or can not be available for payment with.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `capture()`





Makes a capture request.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L71-L74)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The capture transaction
- `$reference` ([string](http://php.net/language.types.string)) – Reference for the transaction being captured.

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `completeAuthorize()`





Complete the authorization for offsite payments.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L79-L82)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `completePurchase()`





Complete the purchase for offsite payments.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L87-L90)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `createPaymentSource()`





Creates a payment source from source data and user id.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L95-L98)


#### Arguments

- `$sourceData` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md))
- `$userId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md)



### `deletePaymentSource()`





Deletes a payment source on the gateway by its token.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L103-L106)


#### Arguments

- `$token` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPaymentFormHtml()`





Returns payment Form HTML








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L39-L42)


#### Arguments

- `$params` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getPaymentFormModel()`





Returns payment form model to use in payment forms.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L47-L50)



#### Returns

[craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)



### `getPaymentTypeOptions()`





Returns the payment type options.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L111-L116)



#### Returns

[array](http://php.net/language.types.array)



### `getSettingsHtml()`





Returns the component’s settings HTML.



An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="foo">'.$this->foo.'</textarea>';
```

For more complex settings, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-rendertemplate). For example, the following code would render a template located at
`src/templates/_settings.html`, passing the settings to it:

```php
return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
    'widget' => $this
]);
```

If you need to tie any JavaScript code to your settings, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputs),
however your JavaScript code will be left untouched.
For example, if getSettingsHtml() returns the following HTML:

```html
<textarea id="foo" name="foo"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

…then it might actually look like this before getting output to the browser:

```html
<textarea id="namespace-foo" name="namespace[foo]"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

As you can see, that JavaScript code will not be able to find the textarea, because the textarea’s `id=`
attribute was changed from `foo` to `namespace-foo`.
Before you start adding `namespace-` to the beginning of your element ID selectors, keep in mind that the actual
namespace is going to change depending on the context. Often they are randomly generated. So it’s not quite
that simple.

Thankfully, [craft\web\View](https://docs.craftcms.com/api/v3/craft-web-view.html) service provides a couple handy methods that can help you deal
with this:

- [craft\web\View::namespaceInputId()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-formatinputid) will format an input name to look more like an ID attribute value.

So here’s what a getSettingsHtml() method that includes field-targeting JavaScript code might look like:

```php
public function getSettingsHtml()
{
    // Come up with an ID value for 'foo'
    $id = Craft::$app->getView()->formatInputId('foo');
    // Figure out what that ID is going to be namespaced into
    $namespacedId = Craft::$app->view->namespaceInputId($id);
    // Render and return the input template
    return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
        'id'           => $id,
        'namespacedId' => $namespacedId,
        'widget'       => $this
    ]);
}
```

And the _widget-settings.twig template might look like this:

```twig
<textarea id="{{ id }}" name="foo">{{ widget.foo }}</textarea>
<script type="text/javascript">
    var textarea = document.getElementById('{{ namespacedId }}');
</script>
```

The same principles also apply if you’re including your JavaScript code with
[craft\web\View::registerJs()](https://docs.craftcms.com/api/v3/craft-web-view.html#method-registerjs).




[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L55-L58)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `processWebHook()`





Processes a webhook and return a response








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L129-L132)



#### Returns

[craft\web\Response](https://docs.craftcms.com/api/v3/craft-web-response.html)

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if something goes wrong


### `purchase()`





Makes a purchase request.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L121-L124)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The purchase transaction
- `$form` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – A form filled with payment info

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `refund()`





Makes an refund request.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L137-L140)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The refund transaction

#### Returns

[craft\commerce\base\RequestResponseInterface](craft-commerce-base-requestresponseinterface.md)



### `supportsAuthorize()`





Returns true if gateway supports authorize requests.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L145-L148)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCapture()`





Returns true if gateway supports capture requests.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L153-L156)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCompleteAuthorize()`





Returns true if gateway supports completing authorize requests








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L161-L164)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsCompletePurchase()`





Returns true if gateway supports completing purchase requests








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L169-L172)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPartialRefund()`





Returns true if gateway supports partial refund requests.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L201-L204)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPaymentSources()`





Returns true if gateway supports storing payment sources








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L177-L180)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsPurchase()`





Returns true if gateway supports purchase requests.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L185-L188)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsRefund()`





Returns true if gateway supports refund requests.








[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L193-L196)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `supportsWebhooks()`





Returns true if gateway supports webhooks.



If `true` is returned, this show the webhook url
to the person setting up your gateway (after the gateway is saved).
This also affects whether the webhook controller should route webhook requests to your
`processWebHook()` method in this class.




[View source](https://github.com/craftcms/commerce/blob/master/src/gateways/Manual.php#L209-L212)



#### Returns

[boolean](http://php.net/language.types.boolean)





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



