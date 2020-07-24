---
title: craft\commerce\models\LineItem
code:
  - php
  - twig
---

# LineItem

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\LineItem](craft-commerce-models-lineitem.md) &raquo;
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



Line Item model representing a line item on an order.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [adjustments](craft-commerce-models-lineitem.md#adjustments)                                                                     | [craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]
| [adjustmentsTotal](craft-commerce-models-lineitem.md#adjustmentstotal)                                                           | [float](http://php.net/language.types.float)
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [dateCreated](craft-commerce-models-lineitem.md#datecreated)                                                                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)
| [description](craft-commerce-models-lineitem.md#description)                                                                     | [string](http://php.net/language.types.string)
| [discount](craft-commerce-models-lineitem.md#discount)                                                                           | [float](http://php.net/language.types.float)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [height](craft-commerce-models-lineitem.md#height)                                                                               | [float](http://php.net/language.types.float) – Height
| [id](craft-commerce-models-lineitem.md#id)                                                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – ID
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [length](craft-commerce-models-lineitem.md#length)                                                                               | [float](http://php.net/language.types.float) – Length
| [lineItemStatus](craft-commerce-models-lineitem.md#lineitemstatus)                                                               | [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)
| [lineItemStatusId](craft-commerce-models-lineitem.md#lineitemstatusid)                                                           | [integer](http://php.net/language.types.integer) – Line Item Status ID
| [note](craft-commerce-models-lineitem.md#note)                                                                                   | [string](http://php.net/language.types.string) – Note
| [onSale](craft-commerce-models-lineitem.md#onsale)                                                                               | [boolean](http://php.net/language.types.boolean)
| [options](craft-commerce-models-lineitem.md#options)                                                                             | [array](http://php.net/language.types.array)
| [optionsSignature](craft-commerce-models-lineitem.md#optionssignature)                                                           |
| [order](craft-commerce-models-lineitem.md#order)                                                                                 | [craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)
| [orderId](craft-commerce-models-lineitem.md#orderid)                                                                             | [integer](http://php.net/language.types.integer) – Order ID
| [price](craft-commerce-models-lineitem.md#price)                                                                                 | [float](http://php.net/language.types.float)
| [privateNote](craft-commerce-models-lineitem.md#privatenote)                                                                     | [string](http://php.net/language.types.string) – Private Note
| [purchasable](craft-commerce-models-lineitem.md#purchasable)                                                                     | [craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md), [null](http://php.net/language.types.null)
| [purchasableId](craft-commerce-models-lineitem.md#purchasableid)                                                                 | [integer](http://php.net/language.types.integer) – Purchasable ID
| [qty](craft-commerce-models-lineitem.md#qty)                                                                                     | [integer](http://php.net/language.types.integer) – Quantity
| [saleAmount](craft-commerce-models-lineitem.md#saleamount)                                                                       | [float](http://php.net/language.types.float)
| [salePrice](craft-commerce-models-lineitem.md#saleprice)                                                                         | [float](http://php.net/language.types.float) – Sale Price
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [shippingCategory](craft-commerce-models-lineitem.md#shippingcategory)                                                           | [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)
| [shippingCategoryId](craft-commerce-models-lineitem.md#shippingcategoryid)                                                       | [integer](http://php.net/language.types.integer) – Shipping category ID
| [shippingCost](craft-commerce-models-lineitem.md#shippingcost)                                                                   | [float](http://php.net/language.types.float)
| [sku](craft-commerce-models-lineitem.md#sku)                                                                                     | [string](http://php.net/language.types.string)
| [snapshot](craft-commerce-models-lineitem.md#snapshot)                                                                           | `mixed` – Snapshot
| [subtotal](craft-commerce-models-lineitem.md#subtotal)                                                                           | [float](http://php.net/language.types.float)
| [tax](craft-commerce-models-lineitem.md#tax)                                                                                     | [float](http://php.net/language.types.float)
| [taxCategory](craft-commerce-models-lineitem.md#taxcategory)                                                                     | [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)
| [taxCategoryId](craft-commerce-models-lineitem.md#taxcategoryid)                                                                 | [integer](http://php.net/language.types.integer) – Tax category ID
| [taxIncluded](craft-commerce-models-lineitem.md#taxincluded)                                                                     | [float](http://php.net/language.types.float)
| [total](craft-commerce-models-lineitem.md#total)                                                                                 | [float](http://php.net/language.types.float)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [weight](craft-commerce-models-lineitem.md#weight)                                                                               | [float](http://php.net/language.types.float) – Weight
| [width](craft-commerce-models-lineitem.md#width)                                                                                 | [float](http://php.net/language.types.float) – Width

### `adjustments`



Type

:   [craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `adjustmentsTotal`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `dateCreated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L160)



### `description`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `discount`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `height`



Type

:   [float](http://php.net/language.types.float)



Height



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L99)



### `id`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L69)



### `length`



Type

:   [float](http://php.net/language.types.float)



Length



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L94)



### `lineItemStatus`



Type

:   [craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `lineItemStatusId`



Type

:   [integer](http://php.net/language.types.integer)



Line Item Status ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L144)



### `note`



Type

:   [string](http://php.net/language.types.string)



Note



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L124)



### `onSale`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `options`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `optionsSignature`



Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `order`



Type

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `orderId`



Type

:   [integer](http://php.net/language.types.integer)



Order ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L139)



### `price`



Type

:   [float](http://php.net/language.types.float)

Since

:   3.1.1







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `privateNote`



Type

:   [string](http://php.net/language.types.string)



Private Note



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L129)



### `purchasable`



Type

:   [craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `purchasableId`



Type

:   [integer](http://php.net/language.types.integer)



Purchasable ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L134)



### `qty`



Type

:   [integer](http://php.net/language.types.integer)



Quantity



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L109)



### `saleAmount`



Type

:   [float](http://php.net/language.types.float)

Since

:   3.1.1







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `salePrice`



Type

:   [float](http://php.net/language.types.float)



Sale Price



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `shippingCategory`



Type

:   [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `shippingCategoryId`



Type

:   [integer](http://php.net/language.types.integer)



Shipping category ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L154)



### `shippingCost`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `sku`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `snapshot`



Type

:   `mixed`



Snapshot



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L114)



### `subtotal`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `tax`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `taxCategory`



Type

:   [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `taxCategoryId`



Type

:   [integer](http://php.net/language.types.integer)



Tax category ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L149)



### `taxIncluded`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `total`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php)



### `weight`



Type

:   [float](http://php.net/language.types.float)



Weight



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L89)



### `width`



Type

:   [float](http://php.net/language.types.float)



Width



[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L104)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                           | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                           | Sets the value of a component property.
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
| [attributes()](craft-commerce-models-lineitem.md#method-attributes)                                                                             | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-commerce-models-lineitem.md#method-behaviors)                                                                               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [currencyAttributes()](craft-commerce-models-lineitem.md#method-currencyattributes)                                                             | The attributes on the order that should be made available as formatted currency.
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-lineitem.md#method-definerules)                                                                           |
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](craft-commerce-models-lineitem.md#method-extrafields)                                                                           | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-commerce-models-lineitem.md#method-fields)                                                                                     | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAdjustments()](craft-commerce-models-lineitem.md#method-getadjustments)                                                                     |
| [getAdjustmentsTotal()](craft-commerce-models-lineitem.md#method-getadjustmentstotal)                                                           |
| [getAdjustmentsTotalByType()](craft-commerce-models-lineitem.md#method-getadjustmentstotalbytype)                                               |
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getDescription()](craft-commerce-models-lineitem.md#method-getdescription)                                                                     |
| [getDiscount()](craft-commerce-models-lineitem.md#method-getdiscount)                                                                           |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getLineItemStatus()](craft-commerce-models-lineitem.md#method-getlineitemstatus)                                                               |
| [getOnSale()](craft-commerce-models-lineitem.md#method-getonsale)                                                                               |
| [getOptions()](craft-commerce-models-lineitem.md#method-getoptions)                                                                             | Returns the options for the line item.
| [getOptionsSignature()](craft-commerce-models-lineitem.md#method-getoptionssignature)                                                           | Returns a unique hash of the line item options
| [getOrder()](craft-commerce-models-lineitem.md#method-getorder)                                                                                 |
| [getPrice()](craft-commerce-models-lineitem.md#method-getprice)                                                                                 |
| [getPurchasable()](craft-commerce-models-lineitem.md#method-getpurchasable)                                                                     |
| [getSaleAmount()](craft-commerce-models-lineitem.md#method-getsaleamount)                                                                       |
| [getSalePrice()](craft-commerce-models-lineitem.md#method-getsaleprice)                                                                         |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getShippingCategory()](craft-commerce-models-lineitem.md#method-getshippingcategory)                                                           |
| [getShippingCost()](craft-commerce-models-lineitem.md#method-getshippingcost)                                                                   |
| [getSku()](craft-commerce-models-lineitem.md#method-getsku)                                                                                     |
| [getSubtotal()](craft-commerce-models-lineitem.md#method-getsubtotal)                                                                           |
| [getTax()](craft-commerce-models-lineitem.md#method-gettax)                                                                                     |
| [getTaxCategory()](craft-commerce-models-lineitem.md#method-gettaxcategory)                                                                     |
| [getTaxIncluded()](craft-commerce-models-lineitem.md#method-gettaxincluded)                                                                     |
| [getTaxableSubtotal()](craft-commerce-models-lineitem.md#method-gettaxablesubtotal)                                                             |
| [getTotal()](craft-commerce-models-lineitem.md#method-gettotal)                                                                                 | Returns the Purchasable’s sale price multiplied by the quantity of the line item, plus any adjustment belonging to this lineitem.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-models-lineitem.md#method-init)                                                                                         | Initializes the object.
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
| [populateFromPurchasable()](craft-commerce-models-lineitem.md#method-populatefrompurchasable)                                                   |
| [refreshFromPurchasable()](craft-commerce-models-lineitem.md#method-refreshfrompurchasable)                                                     |
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                    | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setDescription()](craft-commerce-models-lineitem.md#method-setdescription)                                                                     |
| [setOptions()](craft-commerce-models-lineitem.md#method-setoptions)                                                                             | Set the options array on the line item.
| [setOrder()](craft-commerce-models-lineitem.md#method-setorder)                                                                                 |
| [setPrice()](craft-commerce-models-lineitem.md#method-setprice)                                                                                 |
| [setPurchasable()](craft-commerce-models-lineitem.md#method-setpurchasable)                                                                     |
| [setSaleAmount()](craft-commerce-models-lineitem.md#method-setsaleamount)                                                                       |
| [setSalePrice()](craft-commerce-models-lineitem.md#method-setsaleprice)                                                                         |
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setSku()](craft-commerce-models-lineitem.md#method-setsku)                                                                                     |
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L457-L474)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `behaviors()`





Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\commerce\models\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L196-L227)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `currencyAttributes()`





The attributes on the order that should be made available as formatted currency.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L511-L526)



#### Returns

[array](http://php.net/language.types.array)



### `defineRules()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L419-L452)



#### Returns

[array](http://php.net/language.types.array)



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](craft-commerce-models-lineitem.md#method-fields) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L494-L504)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](craft-commerce-models-lineitem.md#method-fields) on the format of the return value.



### `fields()`





Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.



A field is a named element in the returned array by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).

This method should return an array of field names or field definitions.
If the former, the field name will be treated as an object property name whose value will be used
as the field value. If the latter, the array key should be the field name while the array value should be
the corresponding field definition which can be either an object property name or a PHP callable
returning the corresponding field value. The signature of the callable should be:

```php
function ($model, $field) {
    // return field value
}
```

For example, the following code declares four fields:

- `email`: the field name is the same as the property name `email`;
- `firstName` and `lastName`: the field names are `firstName` and `lastName`, and their
  values are obtained from the `first_name` and `last_name` properties;
- `fullName`: the field name is `fullName`. Its value is obtained by concatenating `first_name`
  and `last_name`.

```php
return [
    'email',
    'firstName' => 'first_name',
    'lastName' => 'last_name',
    'fullName' => function ($model) {
        return $model->first_name . ' ' . $model->last_name;
    },
];
```

In this method, you may also want to return different lists of fields based on some context
information. For example, depending on [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail) or the privilege of the current application user,
you may return different sets of visible fields or filter out some fields.

The default implementation of this method returns [attributes()](craft-commerce-models-lineitem.md#method-attributes) indexed by the same attribute names.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L479-L489)



#### Returns

[array](http://php.net/language.types.array) – The list of field names or field definitions.



### `getAdjustments()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L710-L727)



#### Returns

[craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]



### `getAdjustmentsTotal()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L733-L743)


#### Arguments

- `$included` ([boolean](http://php.net/language.types.boolean))

#### Returns

[float](http://php.net/language.types.float)



### `getAdjustmentsTotalByType()`

::: danger DEPRECATED
Deprecated in 2.2
:::









[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L751-L756)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))
- `$included` ([boolean](http://php.net/language.types.boolean))

#### Returns

[float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)



### `getDescription()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L314-L322)



#### Returns

[string](http://php.net/language.types.string)



### `getDiscount()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L803-L806)



#### Returns

[float](http://php.net/language.types.float)



### `getLineItemStatus()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L255-L264)



#### Returns

[craft\commerce\models\LineItemStatus](craft-commerce-models-lineitemstatus.md), [null](http://php.net/language.types.null)



### `getOnSale()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L676-L679)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getOptions()`





Returns the options for the line item.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L271-L274)



#### Returns

[array](http://php.net/language.types.array)



### `getOptionsSignature()`





Returns a unique hash of the line item options




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L356-L359)






### `getOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L232-L241)



#### Returns

[craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null)



### `getPrice()`



Since

:   3.1.1








[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L365-L368)



#### Returns

[float](http://php.net/language.types.float)



### `getPurchasable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L600-L607)



#### Returns

[craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md), [null](http://php.net/language.types.null)



### `getSaleAmount()`



Since

:   3.1.1








[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L411-L414)



#### Returns

[float](http://php.net/language.types.float)



### `getSalePrice()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L382-L385)



#### Returns

[float](http://php.net/language.types.float) – Sale Price



### `getShippingCategory()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L698-L705)



#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getShippingCost()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L795-L798)



#### Returns

[float](http://php.net/language.types.float)



### `getSku()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L335-L343)



#### Returns

[string](http://php.net/language.types.string)



### `getSubtotal()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L531-L542)



#### Returns

[float](http://php.net/language.types.float)



### `getTax()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L779-L782)



#### Returns

[float](http://php.net/language.types.float)



### `getTaxCategory()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L685-L692)



#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getTaxIncluded()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L787-L790)



#### Returns

[float](http://php.net/language.types.float)



### `getTaxableSubtotal()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L558-L575)


#### Arguments

- `$taxable`

#### Returns

[float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)



### `getTotal()`





Returns the Purchasable’s sale price multiplied by the quantity of the line item, plus any adjustment belonging to this lineitem.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L549-L552)



#### Returns

[float](http://php.net/language.types.float)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L185-L191)






### `populateFromPurchasable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L622-L671)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))




### `refreshFromPurchasable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L580-L595)



#### Returns

[boolean](http://php.net/language.types.boolean) – False when no related purchasable exists



### `setDescription()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L327-L330)


#### Arguments

- `$description`




### `setOptions()`





Set the options array on the line item.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L281-L309)


#### Arguments

- `$options` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string))




### `setOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L246-L250)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))




### `setPrice()`



Since

:   3.1.1








[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L374-L377)


#### Arguments

- `$price`




### `setPurchasable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L612-L616)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))




### `setSaleAmount()`

::: danger DEPRECATED
Deprecated in 3.1.1
:::


Since

:   3.1.1








[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L402-L405)


#### Arguments

- `$saleAmount`


#### Throws

- [craft\errors\DeprecationException](https://docs.craftcms.com/api/v3/craft-errors-deprecationexception.html)


### `setSalePrice()`



Since

:   3.1.1








[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L391-L394)


#### Arguments

- `$salePrice`




### `setSku()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/LineItem.php#L348-L351)


#### Arguments

- `$sku`






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



