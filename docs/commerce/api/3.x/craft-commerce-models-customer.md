---
title: craft\commerce\models\Customer
code:
  - php
  - twig
---

# Customer

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Customer](craft-commerce-models-customer.md) &raquo;
[craft\commerce\base\Model](craft-commerce-base-model.md) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Customer model





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeCarts](craft-commerce-models-customer.md#activecarts)                                                                     | [array](http://php.net/language.types.array)
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [addressById](craft-commerce-models-customer.md#addressbyid)                                                                     | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [addresses](craft-commerce-models-customer.md#addresses)                                                                         | [craft\commerce\models\Address](craft-commerce-models-address.md)[]
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cpEditUrl](craft-commerce-models-customer.md#cpediturl)                                                                         | [string](http://php.net/language.types.string)
| [email](craft-commerce-models-customer.md#email)                                                                                 | [string](http://php.net/language.types.string)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [id](craft-commerce-models-customer.md#id)                                                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Customer ID
| [inactiveCarts](craft-commerce-models-customer.md#inactivecarts)                                                                 | [array](http://php.net/language.types.array)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [orders](craft-commerce-models-customer.md#orders)                                                                               | [craft\commerce\elements\Order](craft-commerce-elements-order.md)[]
| [primaryBillingAddress](craft-commerce-models-customer.md#primarybillingaddress)                                                 | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [primaryBillingAddressId](craft-commerce-models-customer.md#primarybillingaddressid)                                             | [integer](http://php.net/language.types.integer) – The primary billing address id
| [primaryShippingAddress](craft-commerce-models-customer.md#primaryshippingaddress)                                               | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [primaryShippingAddressId](craft-commerce-models-customer.md#primaryshippingaddressid)                                           | [integer](http://php.net/language.types.integer) – The primary shipping address id
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [subscriptions](craft-commerce-models-customer.md#subscriptions)                                                                 | [craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)[]
| [user](craft-commerce-models-customer.md#user)                                                                                   | [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)
| [userId](craft-commerce-models-customer.md#userid)                                                                               | [integer](http://php.net/language.types.integer) – The user ID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `activeCarts`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `addressById`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `addresses`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `email`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `id`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Customer ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L35)



### `inactiveCarts`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `orders`



Type

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `primaryBillingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `primaryBillingAddressId`



Type

:   [integer](http://php.net/language.types.integer)



The primary billing address id



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L45)



### `primaryShippingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `primaryShippingAddressId`



Type

:   [integer](http://php.net/language.types.integer)



The primary shipping address id



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L50)



### `subscriptions`



Type

:   [craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `user`



Type

:   [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php)



### `userId`



Type

:   [integer](http://php.net/language.types.integer)



The user ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L40)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                           | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                           | Sets the value of a component property.
| [__toString()](craft-commerce-models-customer.md#method-tostring)                                                                               | Returns the email address of the customer as the string output.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                       | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                  | Adds errors from another model, with a given attribute name prefix.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")               | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                            | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](craft-commerce-models-customer.md#method-extrafields)                                                                           | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveCarts()](craft-commerce-models-customer.md#method-getactivecarts)                                                                     |
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAddressById()](craft-commerce-models-customer.md#method-getaddressbyid)                                                                     | Returns an address for the customer.
| [getAddresses()](craft-commerce-models-customer.md#method-getaddresses)                                                                         | Returns the addresses associated with this customer.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getCpEditUrl()](craft-commerce-models-customer.md#method-getcpediturl)                                                                         |
| [getEmail()](craft-commerce-models-customer.md#method-getemail)                                                                                 | Returns the customers email address if it is related to a user.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getInactiveCarts()](craft-commerce-models-customer.md#method-getinactivecarts)                                                                 |
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getOrders()](craft-commerce-models-customer.md#method-getorders)                                                                               | Returns the order elements associated with this customer.
| [getPrimaryBillingAddress()](craft-commerce-models-customer.md#method-getprimarybillingaddress)                                                 | Returns the customer's primary billing address if it exists.
| [getPrimaryShippingAddress()](craft-commerce-models-customer.md#method-getprimaryshippingaddress)                                               | Returns the customer's primary shipping address if it exists.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSubscriptions()](craft-commerce-models-customer.md#method-getsubscriptions)                                                                 | Returns the subscription elements associated with this customer.
| [getUser()](craft-commerce-models-customer.md#method-getuser)                                                                                   | Returns the user element associated with this customer.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-init "Defined by craft\base\Model")                                      | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                    | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setUser()](craft-commerce-models-customer.md#method-setuser)                                                                                   | Sets the user this customer is related to.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `__toString()`





Returns the email address of the customer as the string output.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L63-L66)



#### Returns

[string](http://php.net/language.types.string)



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L71-L82)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `getActiveCarts()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L188-L192)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [Exception](http://php.net/class.exception)


### `getAddressById()`





Returns an address for the customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L151-L161)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The ID of the address to return, if known

#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getAddresses()`





Returns the addresses associated with this customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L136-L143)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md)[]



### `getCpEditUrl()`



Since

:   3.0








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L167-L171)



#### Returns

[string](http://php.net/language.types.string)



### `getEmail()`





Returns the customers email address if it is related to a user.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L120-L129)



#### Returns

[string](http://php.net/language.types.string)



### `getInactiveCarts()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L199-L203)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [Exception](http://php.net/class.exception)


### `getOrders()`





Returns the order elements associated with this customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L178-L181)



#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md)[]



### `getPrimaryBillingAddress()`





Returns the  customer's primary billing address if it exists.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L226-L236)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getPrimaryShippingAddress()`





Returns the customer's primary shipping address if it exists.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L243-L253)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getSubscriptions()`





Returns the subscription elements associated with this customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L210-L219)



#### Returns

[craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md)[]



### `getUser()`





Returns the user element associated with this customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L89-L102)



#### Returns

[craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)



### `setUser()`





Sets the user this customer is related to.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Customer.php#L109-L113)


#### Arguments

- `$user` ([craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html))






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



