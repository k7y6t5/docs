---
title: craft\commerce\models\Transaction
code:
  - php
  - twig
---

# Transaction

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md) &raquo;
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



Class Transaction





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [amount](craft-commerce-models-transaction.md#amount)                                                                            | [float](http://php.net/language.types.float) – Amount
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [childTransactions](craft-commerce-models-transaction.md#childtransactions)                                                      | [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]
| [code](craft-commerce-models-transaction.md#code)                                                                                | [string](http://php.net/language.types.string) – Code
| [currency](craft-commerce-models-transaction.md#currency)                                                                        | [string](http://php.net/language.types.string) – Currency
| [dateCreated](craft-commerce-models-transaction.md#datecreated)                                                                  | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the transaction was created
| [dateUpdated](craft-commerce-models-transaction.md#dateupdated)                                                                  | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the transaction was last updated
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [gateway](craft-commerce-models-transaction.md#gateway)                                                                          | [craft\commerce\base\Gateway](craft-commerce-base-gateway.md), [null](http://php.net/language.types.null)
| [gatewayId](craft-commerce-models-transaction.md#gatewayid)                                                                      | [integer](http://php.net/language.types.integer) – Gateway ID
| [hash](craft-commerce-models-transaction.md#hash)                                                                                | [string](http://php.net/language.types.string) – Hash
| [id](craft-commerce-models-transaction.md#id)                                                                                    | [integer](http://php.net/language.types.integer) – ID
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [message](craft-commerce-models-transaction.md#message)                                                                          | [string](http://php.net/language.types.string) – Message
| [note](craft-commerce-models-transaction.md#note)                                                                                | [string](http://php.net/language.types.string) – Note
| [order](craft-commerce-models-transaction.md#order)                                                                              | [craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)
| [orderId](craft-commerce-models-transaction.md#orderid)                                                                          | [integer](http://php.net/language.types.integer) – Order ID
| [parent](craft-commerce-models-transaction.md#parent)                                                                            | [craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)
| [parentId](craft-commerce-models-transaction.md#parentid)                                                                        | [integer](http://php.net/language.types.integer) – Parent transaction ID
| [paymentAmount](craft-commerce-models-transaction.md#paymentamount)                                                              | [float](http://php.net/language.types.float) – Payment Amount
| [paymentCurrency](craft-commerce-models-transaction.md#paymentcurrency)                                                          | [string](http://php.net/language.types.string) – Payment currency
| [paymentRate](craft-commerce-models-transaction.md#paymentrate)                                                                  | [float](http://php.net/language.types.float) – Payment Rate
| [reference](craft-commerce-models-transaction.md#reference)                                                                      | [string](http://php.net/language.types.string) – Reference
| [refundableAmount](craft-commerce-models-transaction.md#refundableamount)                                                        | [float](http://php.net/language.types.float)
| [response](craft-commerce-models-transaction.md#response)                                                                        | `Mixed` – Response
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [status](craft-commerce-models-transaction.md#status)                                                                            | [string](http://php.net/language.types.string) – Status
| [type](craft-commerce-models-transaction.md#type)                                                                                | [string](http://php.net/language.types.string) – Transaction Type
| [userId](craft-commerce-models-transaction.md#userid)                                                                            | [integer](http://php.net/language.types.integer) – User ID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `amount`



Type

:   [float](http://php.net/language.types.float)



Amount



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L93)



### `childTransactions`



Type

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)



### `code`



Type

:   [string](http://php.net/language.types.string)



Code



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L108)



### `currency`



Type

:   [string](http://php.net/language.types.string)



Currency



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L68)



### `dateCreated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



The date that the transaction was created



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L128)



### `dateUpdated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



The date that the transaction was last updated



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L133)



### `gateway`



Type

:   [craft\commerce\base\Gateway](craft-commerce-base-gateway.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)



### `gatewayId`



Type

:   [integer](http://php.net/language.types.integer)



Gateway ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L63)



### `hash`



Type

:   [string](http://php.net/language.types.string)



Hash



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L58)



### `id`



Type

:   [integer](http://php.net/language.types.integer)



ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L38)



### `message`



Type

:   [string](http://php.net/language.types.string)



Message



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L113)



### `note`



Type

:   [string](http://php.net/language.types.string)



Note



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L118)



### `order`



Type

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)



### `orderId`



Type

:   [integer](http://php.net/language.types.integer)



Order ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L43)



### `parent`



Type

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)



### `parentId`



Type

:   [integer](http://php.net/language.types.integer)



Parent transaction ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L48)



### `paymentAmount`



Type

:   [float](http://php.net/language.types.float)



Payment Amount



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L73)



### `paymentCurrency`



Type

:   [string](http://php.net/language.types.string)



Payment currency



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L78)



### `paymentRate`



Type

:   [float](http://php.net/language.types.float)



Payment Rate



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L83)



### `reference`



Type

:   [string](http://php.net/language.types.string)



Reference



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L103)



### `refundableAmount`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php)



### `response`



Type

:   `Mixed`



Response



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L123)



### `status`



Type

:   [string](http://php.net/language.types.string)



Status



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L98)



### `type`



Type

:   [string](http://php.net/language.types.string)



Transaction Type



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L88)



### `userId`



Type

:   [integer](http://php.net/language.types.integer)



User ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L53)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                |
| [__construct()](craft-commerce-models-transaction.md#method-construct)                                                                          | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                           | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                           | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                       | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addChildTransaction()](craft-commerce-models-transaction.md#method-addchildtransaction)                                                        | Adds a child transaction.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                  | Adds errors from another model, with a given attribute name prefix.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")               | Returns the attribute labels.
| [attributes()](craft-commerce-models-transaction.md#method-attributes)                                                                          | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-commerce-models-transaction.md#method-behaviors)                                                                            |
| [canCapture()](craft-commerce-models-transaction.md#method-cancapture)                                                                          |
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canRefund()](craft-commerce-models-transaction.md#method-canrefund)                                                                            |
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [currencyAttributes()](craft-commerce-models-transaction.md#method-currencyattributes)                                                          |
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-transaction.md#method-definerules)                                                                        | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](craft-commerce-models-transaction.md#method-extrafields)                                                                        | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getChildTransactions()](craft-commerce-models-transaction.md#method-getchildtransactions)                                                      | Returns child transactions.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getGateway()](craft-commerce-models-transaction.md#method-getgateway)                                                                          |
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getOrder()](craft-commerce-models-transaction.md#method-getorder)                                                                              |
| [getParent()](craft-commerce-models-transaction.md#method-getparent)                                                                            |
| [getRefundableAmount()](craft-commerce-models-transaction.md#method-getrefundableamount)                                                        |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
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
| [setChildTransactions()](craft-commerce-models-transaction.md#method-setchildtransactions)                                                      | Sets child transactions.
| [setGateway()](craft-commerce-models-transaction.md#method-setgateway)                                                                          |
| [setOrder()](craft-commerce-models-transaction.md#method-setorder)                                                                              |
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L159-L165)


#### Arguments

- `$attributes`




### `addChildTransaction()`





Adds a child transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L319-L326)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md))




### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L206-L211)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `behaviors()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L167-L189)






### `canCapture()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L226-L229)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `canRefund()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L234-L237)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `currencyAttributes()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L194-L201)



#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L341-L348)



#### Returns

[array](http://php.net/language.types.array)



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L216-L221)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `getChildTransactions()`





Returns child transactions.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L305-L312)



#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]



### `getGateway()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L283-L290)



#### Returns

[craft\commerce\base\Gateway](craft-commerce-base-gateway.md), [null](http://php.net/language.types.null)



### `getOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L262-L269)



#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)



### `getParent()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L250-L257)



#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)



### `getRefundableAmount()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L242-L245)



#### Returns

[float](http://php.net/language.types.float)



### `setChildTransactions()`





Sets child transactions.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L333-L336)


#### Arguments

- `$transactions` ([array](http://php.net/language.types.array))




### `setGateway()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L295-L298)


#### Arguments

- `$gateway` ([craft\commerce\base\Gateway](craft-commerce-base-gateway.md))




### `setOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Transaction.php#L274-L278)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.



