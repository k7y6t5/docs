---
title: craft\commerce\models\Sale
code:
  - php
  - twig
---

# Sale

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Sale](craft-commerce-models-sale.md) &raquo;
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



Sale model.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allCategories](craft-commerce-models-sale.md#allcategories)                                                                     | [boolean](http://php.net/language.types.boolean) – Match all categories
| [allGroups](craft-commerce-models-sale.md#allgroups)                                                                             | [boolean](http://php.net/language.types.boolean) – Match all groups
| [allPurchasables](craft-commerce-models-sale.md#allpurchasables)                                                                 | [boolean](http://php.net/language.types.boolean) – Match all purchasables
| [apply](craft-commerce-models-sale.md#apply)                                                                                     | [string](http://php.net/language.types.string) – How the sale should be applied
| [applyAmount](craft-commerce-models-sale.md#applyamount)                                                                         | [float](http://php.net/language.types.float) – The amount field used by the apply option
| [applyAmountAsFlat](craft-commerce-models-sale.md#applyamountasflat)                                                             | [string](http://php.net/language.types.string)
| [applyAmountAsPercent](craft-commerce-models-sale.md#applyamountaspercent)                                                       | [string](http://php.net/language.types.string)
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [categoryIds](craft-commerce-models-sale.md#categoryids)                                                                         | [array](http://php.net/language.types.array)
| [categoryRelationshipType](craft-commerce-models-sale.md#categoryrelationshiptype)                                               | [string](http://php.net/language.types.string) – Type of relationship between Categories and Products
| [cpEditUrl](craft-commerce-models-sale.md#cpediturl)                                                                             | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)
| [dateFrom](craft-commerce-models-sale.md#datefrom)                                                                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Date From
| [dateTo](craft-commerce-models-sale.md#dateto)                                                                                   | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Date To
| [description](craft-commerce-models-sale.md#description)                                                                         | [string](http://php.net/language.types.string) – Description
| [enabled](craft-commerce-models-sale.md#enabled)                                                                                 | [boolean](http://php.net/language.types.boolean) – Enabled
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [id](craft-commerce-models-sale.md#id)                                                                                           | [integer](http://php.net/language.types.integer) – ID
| [ignorePrevious](craft-commerce-models-sale.md#ignoreprevious)                                                                   | [boolean](http://php.net/language.types.boolean) – Ignore the previous sales that affect the purchasable
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [name](craft-commerce-models-sale.md#name)                                                                                       | [string](http://php.net/language.types.string) – Name
| [purchasableIds](craft-commerce-models-sale.md#purchasableids)                                                                   | [array](http://php.net/language.types.array)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [sortOrder](craft-commerce-models-sale.md#sortorder)                                                                             | [integer](http://php.net/language.types.integer) – The order index of the application of the sale
| [stopProcessing](craft-commerce-models-sale.md#stopprocessing)                                                                   | [boolean](http://php.net/language.types.boolean) – Should the sales system stop processing other sales after this one
| [userGroupIds](craft-commerce-models-sale.md#usergroupids)                                                                       | [array](http://php.net/language.types.array)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `allCategories`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all categories



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L89)



### `allGroups`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all groups



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L79)



### `allPurchasables`



Type

:   [boolean](http://php.net/language.types.boolean)



Match all purchasables



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L84)



### `apply`



Type

:   [string](http://php.net/language.types.string)



How the sale should be applied



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L59)



### `applyAmount`



Type

:   [float](http://php.net/language.types.float)



The amount field used by the apply option



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L64)



### `applyAmountAsFlat`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)



### `applyAmountAsPercent`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)



### `categoryIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)



### `categoryRelationshipType`



Type

:   [string](http://php.net/language.types.string)



Type of relationship between Categories and Products



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L94)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)



### `dateFrom`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



Date From



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L49)



### `dateTo`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



Date To



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L54)



### `description`



Type

:   [string](http://php.net/language.types.string)



Description



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L44)



### `enabled`



Type

:   [boolean](http://php.net/language.types.boolean)



Enabled



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L99)



### `id`



Type

:   [integer](http://php.net/language.types.integer)



ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L34)



### `ignorePrevious`



Type

:   [boolean](http://php.net/language.types.boolean)



Ignore the previous sales that affect the purchasable



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L69)



### `name`



Type

:   [string](http://php.net/language.types.string)



Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L39)



### `purchasableIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)



### `sortOrder`



Type

:   [integer](http://php.net/language.types.integer)



The order index of the application of the sale



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L104)



### `stopProcessing`



Type

:   [boolean](http://php.net/language.types.boolean)



Should the sales system stop processing other sales after this one



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L74)



### `userGroupIds`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php)







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
| [datetimeAttributes()](craft-commerce-models-sale.md#method-datetimeattributes)                                                                 | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-sale.md#method-definerules)                                                                               | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getApplyAmountAsFlat()](craft-commerce-models-sale.md#method-getapplyamountasflat)                                                             |
| [getApplyAmountAsPercent()](craft-commerce-models-sale.md#method-getapplyamountaspercent)                                                       |
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getCategoryIds()](craft-commerce-models-sale.md#method-getcategoryids)                                                                         |
| [getCpEditUrl()](craft-commerce-models-sale.md#method-getcpediturl)                                                                             |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getPurchasableIds()](craft-commerce-models-sale.md#method-getpurchasableids)                                                                   |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getUserGroupIds()](craft-commerce-models-sale.md#method-getusergroupids)                                                                       |
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-models-sale.md#method-init)                                                                                             | Initializes the object.
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
| [setCategoryIds()](craft-commerce-models-sale.md#method-setcategoryids)                                                                         | Sets the related category ids
| [setPurchasableIds()](craft-commerce-models-sale.md#method-setpurchasableids)                                                                   | Sets the related purchasable ids
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setUserGroupIds()](craft-commerce-models-sale.md#method-setusergroupids)                                                                       | Sets the related user group ids
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L167-L173)



#### Returns

[string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L137-L162)



#### Returns

[array](http://php.net/language.types.array)



### `getApplyAmountAsFlat()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L201-L204)



#### Returns

[string](http://php.net/language.types.string)



### `getApplyAmountAsPercent()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L186-L196)



#### Returns

[string](http://php.net/language.types.string)



### `getCategoryIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L209-L216)



#### Returns

[array](http://php.net/language.types.array)



### `getCpEditUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L178-L181)



#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)



### `getPurchasableIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L221-L228)



#### Returns

[array](http://php.net/language.types.array)



### `getUserGroupIds()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L233-L240)



#### Returns

[array](http://php.net/language.types.array)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L125-L132)






### `setCategoryIds()`





Sets the related category ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L247-L250)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))




### `setPurchasableIds()`





Sets the related purchasable ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L257-L260)


#### Arguments

- `$purchasableIds` ([array](http://php.net/language.types.array))




### `setUserGroupIds()`





Sets the related user group ids




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Sale.php#L267-L270)


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



