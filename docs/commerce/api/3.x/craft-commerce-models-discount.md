---
title: craft\commerce\models\Discount
code:
  - php
  - twig
---

# Discount

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Discount](craft-commerce-models-discount.md) &raquo;
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



Discount model





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allCategories](craft-commerce-models-discount.md#allcategories)                                                                 | [boolean](http://php.net/language.types.boolean) – Match all product types
| [allGroups](craft-commerce-models-discount.md#allgroups)                                                                         | [boolean](http://php.net/language.types.boolean) – Match all user groups.
| [allPurchasables](craft-commerce-models-discount.md#allpurchasables)                                                             | [boolean](http://php.net/language.types.boolean) – Match all products
| [appliedTo](craft-commerce-models-discount.md#appliedto)                                                                         | [boolean](http://php.net/language.types.boolean) – What the per item amount and per item percentage off amounts can apply to
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [baseDiscount](craft-commerce-models-discount.md#basediscount)                                                                   | [float](http://php.net/language.types.float) – Base amount of discount
| [baseDiscountType](craft-commerce-models-discount.md#basediscounttype)                                                           | [string](http://php.net/language.types.string) – Type of discount for the base discount e.g. currency value or percentage
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [categoryIds](craft-commerce-models-discount.md#categoryids)                                                                     | [array](http://php.net/language.types.array)
| [categoryRelationshipType](craft-commerce-models-discount.md#categoryrelationshiptype)                                           | [string](http://php.net/language.types.string) – Type of relationship between Categories and Products
| [code](craft-commerce-models-discount.md#code)                                                                                   | [string](http://php.net/language.types.string) – Coupon Code
| [cpEditUrl](craft-commerce-models-discount.md#cpediturl)                                                                         | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)
| [dateCreated](craft-commerce-models-discount.md#datecreated)                                                                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)
| [dateFrom](craft-commerce-models-discount.md#datefrom)                                                                           | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Date the discount is valid from
| [dateTo](craft-commerce-models-discount.md#dateto)                                                                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Date the discount is valid to
| [dateUpdated](craft-commerce-models-discount.md#dateupdated)                                                                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)
| [description](craft-commerce-models-discount.md#description)                                                                     | [string](http://php.net/language.types.string) – The description of this discount
| [enabled](craft-commerce-models-discount.md#enabled)                                                                             | [boolean](http://php.net/language.types.boolean) – Discount enabled?
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [excludeOnSale](craft-commerce-models-discount.md#excludeonsale)                                                                 | [boolean](http://php.net/language.types.boolean) – Exclude on sale purchasables
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [hasFreeShippingForMatchingItems](craft-commerce-models-discount.md#hasfreeshippingformatchingitems)                             | [boolean](http://php.net/language.types.boolean) – Matching products have free shipping.
| [hasFreeShippingForOrder](craft-commerce-models-discount.md#hasfreeshippingfororder)                                             | [boolean](http://php.net/language.types.boolean) – The whole order has free shipping.
| [id](craft-commerce-models-discount.md#id)                                                                                       | [integer](http://php.net/language.types.integer) – ID
| [ignoreSales](craft-commerce-models-discount.md#ignoresales)                                                                     | [boolean](http://php.net/language.types.boolean) – Discount ignores sales
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [maxPurchaseQty](craft-commerce-models-discount.md#maxpurchaseqty)                                                               | [integer](http://php.net/language.types.integer) – Total maximum spend on matching items
| [name](craft-commerce-models-discount.md#name)                                                                                   | [string](http://php.net/language.types.string) – Name of the discount
| [orderConditionFormula](craft-commerce-models-discount.md#orderconditionformula)                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Condition that must match to match the order, null or empty string means match all
| [perEmailLimit](craft-commerce-models-discount.md#peremaillimit)                                                                 | [integer](http://php.net/language.types.integer) – Per email coupon use limit
| [perItemDiscount](craft-commerce-models-discount.md#peritemdiscount)                                                             | [float](http://php.net/language.types.float) – Amount of discount per item
| [perUserLimit](craft-commerce-models-discount.md#peruserlimit)                                                                   | [integer](http://php.net/language.types.integer) – Per user coupon use limit
| [percentDiscount](craft-commerce-models-discount.md#percentdiscount)                                                             | [float](http://php.net/language.types.float) – Percentage of amount discount per item
| [percentDiscountAsPercent](craft-commerce-models-discount.md#percentdiscountaspercent)                                           | [string](http://php.net/language.types.string)
| [percentageOffSubject](craft-commerce-models-discount.md#percentageoffsubject)                                                   | [string](http://php.net/language.types.string) – Whether the discount is off the original price, or the already discount price.
| [purchasableIds](craft-commerce-models-discount.md#purchasableids)                                                               | [array](http://php.net/language.types.array)
| [purchaseQty](craft-commerce-models-discount.md#purchaseqty)                                                                     | [integer](http://php.net/language.types.integer) – Total minimum qty of matching items
| [purchaseTotal](craft-commerce-models-discount.md#purchasetotal)                                                                 | [float](http://php.net/language.types.float) – Total minimum spend on matching items
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [sortOrder](craft-commerce-models-discount.md#sortorder)                                                                         | [integer](http://php.net/language.types.integer) – SortOrder
| [stopProcessing](craft-commerce-models-discount.md#stopprocessing)                                                               | [boolean](http://php.net/language.types.boolean) – StopProcessing
| [totalDiscountUseLimit](craft-commerce-models-discount.md#totaldiscountuselimit)                                                 | [integer](http://php.net/language.types.integer) – Total use limit by guests or users
| [totalDiscountUses](craft-commerce-models-discount.md#totaldiscountuses)                                                         | [integer](http://php.net/language.types.integer) – Total use counter;
| [userGroupIds](craft-commerce-models-discount.md#usergroupids)                                                                   | [array](http://php.net/language.types.array)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `allCategories`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all product types



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L156)



### `allGroups`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all user groups.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L146)



### `allPurchasables`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all products



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L151)



### `appliedTo`



Type

:   [boolean](http://php.net/language.types.boolean)



What the per item amount and per item percentage off amounts can apply to



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L196)



### `baseDiscount`



Type

:   [float](http://php.net/language.types.float)



Base amount of discount



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L106)



### `baseDiscountType`



Type

:   [string](http://php.net/language.types.string)



Type of discount for the base discount e.g. currency value or percentage



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L111)



### `categoryIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)



### `categoryRelationshipType`



Type

:   [string](http://php.net/language.types.string)



Type of relationship between Categories and Products



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L161)



### `code`



Type

:   [string](http://php.net/language.types.string)



Coupon Code



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L49)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)



### `dateCreated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L181)



### `dateFrom`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



Date the discount is valid from



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L76)



### `dateTo`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



Date the discount is valid to



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L81)



### `dateUpdated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L186)



### `description`



Type

:   [string](http://php.net/language.types.string)



The description of this discount



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L44)



### `enabled`



Type

:   [boolean](http://php.net/language.types.boolean)



Discount enabled?



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L166)



### `excludeOnSale`



Type

:   [boolean](http://php.net/language.types.boolean)



Exclude on sale purchasables



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L131)



### `hasFreeShippingForMatchingItems`



Type

:   [boolean](http://php.net/language.types.boolean)



Matching products have free shipping.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L136)



### `hasFreeShippingForOrder`



Type

:   [boolean](http://php.net/language.types.boolean)



The whole order has free shipping.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L141)



### `id`



Type

:   [integer](http://php.net/language.types.integer)



ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L34)



### `ignoreSales`



Type

:   [boolean](http://php.net/language.types.boolean)



Discount ignores sales



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L191)



### `maxPurchaseQty`



Type

:   [integer](http://php.net/language.types.integer)



Total maximum spend on matching items



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L101)



### `name`



Type

:   [string](http://php.net/language.types.string)



Name of the discount



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L39)



### `orderConditionFormula`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Condition that must match to match the order, null or empty string means match all



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L91)



### `perEmailLimit`



Type

:   [integer](http://php.net/language.types.integer)



Per email coupon use limit



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L59)



### `perItemDiscount`



Type

:   [float](http://php.net/language.types.float)



Amount of discount per item



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L116)



### `perUserLimit`



Type

:   [integer](http://php.net/language.types.integer)



Per user coupon use limit



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L54)



### `percentDiscount`



Type

:   [float](http://php.net/language.types.float)



Percentage of amount discount per item



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L121)



### `percentDiscountAsPercent`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)



### `percentageOffSubject`



Type

:   [string](http://php.net/language.types.string)



Whether the discount is off the original price, or the already discount price.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L126)



### `purchasableIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)



### `purchaseQty`



Type

:   [integer](http://php.net/language.types.integer)



Total minimum qty of matching items



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L96)



### `purchaseTotal`



Type

:   [float](http://php.net/language.types.float)



Total minimum spend on matching items



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L86)



### `sortOrder`



Type

:   [integer](http://php.net/language.types.integer)



SortOrder



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L176)



### `stopProcessing`



Type

:   [boolean](http://php.net/language.types.boolean)



StopProcessing



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L171)



### `totalDiscountUseLimit`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.0



Total use limit by guests or users



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L65)



### `totalDiscountUses`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.0



Total use counter;



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L71)



### `userGroupIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php)







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
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                            | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-commerce-models-discount.md#method-datetimeattributes)                                                             | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-discount.md#method-definerules)                                                                           | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getCategoryIds()](craft-commerce-models-discount.md#method-getcategoryids)                                                                     |
| [getCpEditUrl()](craft-commerce-models-discount.md#method-getcpediturl)                                                                         |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getHasFreeShippingForMatchingItems()](craft-commerce-models-discount.md#method-gethasfreeshippingformatchingitems)                             |
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getPercentDiscountAsPercent()](craft-commerce-models-discount.md#method-getpercentdiscountaspercent)                                           |
| [getPurchasableIds()](craft-commerce-models-discount.md#method-getpurchasableids)                                                               |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getUserGroupIds()](craft-commerce-models-discount.md#method-getusergroupids)                                                                   |
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-models-discount.md#method-init)                                                                                         | Initializes the object.
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
| [setCategoryIds()](craft-commerce-models-discount.md#method-setcategoryids)                                                                     | Sets the related product type ids
| [setHasFreeShippingForMatchingItems()](craft-commerce-models-discount.md#method-sethasfreeshippingformatchingitems)                             |
| [setPurchasableIds()](craft-commerce-models-discount.md#method-setpurchasableids)                                                               | Sets the related product ids
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setUserGroupIds()](craft-commerce-models-discount.md#method-setusergroupids)                                                                   | Sets the related user group ids
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L228-L235)



#### Returns

[string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L345-L390)



#### Returns

[array](http://php.net/language.types.array)



### `getCategoryIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L248-L255)



#### Returns

[array](http://php.net/language.types.array)



### `getCpEditUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L240-L243)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)



### `getHasFreeShippingForMatchingItems()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L322-L325)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPercentDiscountAsPercent()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L330-L340)



#### Returns

[string](http://php.net/language.types.string)



### `getPurchasableIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L260-L267)



#### Returns

[array](http://php.net/language.types.array)



### `getUserGroupIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L272-L279)



#### Returns

[array](http://php.net/language.types.array)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L216-L223)






### `setCategoryIds()`





Sets the related product type ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L286-L289)


#### Arguments

- `$categoryIds` ([array](http://php.net/language.types.array))




### `setHasFreeShippingForMatchingItems()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L314-L317)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean))




### `setPurchasableIds()`





Sets the related product ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L296-L299)


#### Arguments

- `$purchasableIds` ([array](http://php.net/language.types.array))




### `setUserGroupIds()`





Sets the related user group ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Discount.php#L306-L309)


#### Arguments

- `$userGroupIds` ([array](http://php.net/language.types.array))






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



