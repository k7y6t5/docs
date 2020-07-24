---
title: craft\commerce\models\ProductType
code:
  - php
  - twig
---

# ProductType

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\ProductType](craft-commerce-models-producttype.md) &raquo;
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



Product type model.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cpEditUrl](craft-commerce-models-producttype.md#cpediturl)                                                                      | [string](http://php.net/language.types.string)
| [cpEditVariantUrl](craft-commerce-models-producttype.md#cpeditvarianturl)                                                        | [string](http://php.net/language.types.string)
| [descriptionFormat](craft-commerce-models-producttype.md#descriptionformat)                                                      | [string](http://php.net/language.types.string) – Description format
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [fieldLayoutId](craft-commerce-models-producttype.md#fieldlayoutid)                                                              | [integer](http://php.net/language.types.integer) – Field layout ID
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [handle](craft-commerce-models-producttype.md#handle)                                                                            | [string](http://php.net/language.types.string) – Handle
| [hasDimensions](craft-commerce-models-producttype.md#hasdimensions)                                                              | [boolean](http://php.net/language.types.boolean) – Has dimension
| [hasVariantTitleField](craft-commerce-models-producttype.md#hasvarianttitlefield)                                                | [boolean](http://php.net/language.types.boolean) – Has variant title field
| [hasVariants](craft-commerce-models-producttype.md#hasvariants)                                                                  | [boolean](http://php.net/language.types.boolean) – Has variants
| [id](craft-commerce-models-producttype.md#id)                                                                                    | [integer](http://php.net/language.types.integer) – ID
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [lineItemFormat](craft-commerce-models-producttype.md#lineitemformat)                                                            | [string](http://php.net/language.types.string) – Line item format
| [name](craft-commerce-models-producttype.md#name)                                                                                | [string](http://php.net/language.types.string) – Name
| [productFieldLayout](craft-commerce-models-producttype.md#productfieldlayout)                                                    | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [shippingCategories](craft-commerce-models-producttype.md#shippingcategories)                                                    | [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]
| [siteSettings](craft-commerce-models-producttype.md#sitesettings)                                                                | [craft\commerce\models\ProductTypeSite](craft-commerce-models-producttypesite.md)[]
| [skuFormat](craft-commerce-models-producttype.md#skuformat)                                                                      | [string](http://php.net/language.types.string) – SKU format
| [taxCategories](craft-commerce-models-producttype.md#taxcategories)                                                              | [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]
| [template](craft-commerce-models-producttype.md#template)                                                                        | [string](http://php.net/language.types.string) – Template
| [titleFormat](craft-commerce-models-producttype.md#titleformat)                                                                  | [string](http://php.net/language.types.string) – Title format
| [titleLabel](craft-commerce-models-producttype.md#titlelabel)                                                                    | [string](http://php.net/language.types.string) – Title label
| [uid](craft-commerce-models-producttype.md#uid)                                                                                  | [string](http://php.net/language.types.string) – UID
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [variantFieldLayout](craft-commerce-models-producttype.md#variantfieldlayout)                                                    | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)
| [variantFieldLayoutId](craft-commerce-models-producttype.md#variantfieldlayoutid)                                                | [integer](http://php.net/language.types.integer) – Variant layout ID
| [variantTitleLabel](craft-commerce-models-producttype.md#varianttitlelabel)                                                      | [string](http://php.net/language.types.string) – Title label

### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `cpEditVariantUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `descriptionFormat`



Type

:   [string](http://php.net/language.types.string)



Description format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L94)



### `fieldLayoutId`



Type

:   [integer](http://php.net/language.types.integer)



Field layout ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L109)



### `handle`



Type

:   [string](http://php.net/language.types.string)



Handle



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L54)



### `hasDimensions`



Type

:   [boolean](http://php.net/language.types.boolean)



Has dimension



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L59)



### `hasVariantTitleField`



Type

:   [boolean](http://php.net/language.types.boolean)



Has variant title field



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L74)



### `hasVariants`



Type

:   [boolean](http://php.net/language.types.boolean)



Has variants



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L64)



### `id`



Type

:   [integer](http://php.net/language.types.integer)



ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L44)



### `lineItemFormat`



Type

:   [string](http://php.net/language.types.string)



Line item format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L99)



### `name`



Type

:   [string](http://php.net/language.types.string)



Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L49)



### `productFieldLayout`



Type

:   [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `shippingCategories`



Type

:   [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `siteSettings`



Type

:   [craft\commerce\models\ProductTypeSite](craft-commerce-models-producttypesite.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `skuFormat`



Type

:   [string](http://php.net/language.types.string)



SKU format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L89)



### `taxCategories`



Type

:   [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `template`



Type

:   [string](http://php.net/language.types.string)



Template



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L104)



### `titleFormat`



Type

:   [string](http://php.net/language.types.string)



Title format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L79)



### `titleLabel`



Type

:   [string](http://php.net/language.types.string)



Title label



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L84)



### `uid`



Type

:   [string](http://php.net/language.types.string)



UID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L119)



### `variantFieldLayout`



Type

:   [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php)



### `variantFieldLayoutId`



Type

:   [integer](http://php.net/language.types.integer)



Variant layout ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L114)



### `variantTitleLabel`



Type

:   [string](http://php.net/language.types.string)



Title label



[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L69)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                           | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                           | Sets the value of a component property.
| [__toString()](craft-commerce-models-producttype.md#method-tostring)                                                                            |
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
| [behaviors()](craft-commerce-models-producttype.md#method-behaviors)                                                                            | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-producttype.md#method-definerules)                                                                        | Returns the validation rules for attributes.
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
| [getCpEditUrl()](craft-commerce-models-producttype.md#method-getcpediturl)                                                                      |
| [getCpEditVariantUrl()](craft-commerce-models-producttype.md#method-getcpeditvarianturl)                                                        |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getProductFieldLayout()](craft-commerce-models-producttype.md#method-getproductfieldlayout)                                                    |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getShippingCategories()](craft-commerce-models-producttype.md#method-getshippingcategories)                                                    |
| [getSiteSettings()](craft-commerce-models-producttype.md#method-getsitesettings)                                                                | Returns the product types's site-specific settings.
| [getTaxCategories()](craft-commerce-models-producttype.md#method-gettaxcategories)                                                              |
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getVariantFieldLayout()](craft-commerce-models-producttype.md#method-getvariantfieldlayout)                                                    |
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
| [setShippingCategories()](craft-commerce-models-producttype.md#method-setshippingcategories)                                                    |
| [setSiteSettings()](craft-commerce-models-producttype.md#method-setsitesettings)                                                                | Sets the product type's site-specific settings.
| [setTaxCategories()](craft-commerce-models-producttype.md#method-settaxcategories)                                                              |
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `__toString()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L140-L143)



#### Returns

[null](http://php.net/language.types.null), [string](http://php.net/language.types.string)



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




[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L304-L318)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L148-L159)



#### Returns

[array](http://php.net/language.types.array)



### `getCpEditUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L164-L167)



#### Returns

[string](http://php.net/language.types.string)



### `getCpEditVariantUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L172-L175)



#### Returns

[string](http://php.net/language.types.string)



### `getProductFieldLayout()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L284-L289)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)



### `getShippingCategories()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L214-L221)



#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[]



### `getSiteSettings()`





Returns the product types's site-specific settings.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L182-L195)



#### Returns

[craft\commerce\models\ProductTypeSite](craft-commerce-models-producttypesite.md)[]



### `getTaxCategories()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L248-L255)



#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[]



### `getVariantFieldLayout()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L294-L299)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html)



### `setShippingCategories()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L226-L243)


#### Arguments

- `$shippingCategories` ([integer](http://php.net/language.types.integer)[], [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md)[])




### `setSiteSettings()`





Sets the product type's site-specific settings.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L202-L209)


#### Arguments

- `$siteSettings` ([craft\commerce\models\ProductTypeSite](craft-commerce-models-producttypesite.md)[])




### `setTaxCategories()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/ProductType.php#L260-L279)


#### Arguments

- `$taxCategories` ([integer](http://php.net/language.types.integer)[], [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)[])






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



