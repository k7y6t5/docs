---
title: craft\commerce\models\Address
code:
  - php
  - twig
---

# Address

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Address](craft-commerce-models-address.md) &raquo;
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



Address Model





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [abbreviationText](craft-commerce-models-address.md#abbreviationtext)                                                            | [string](http://php.net/language.types.string)
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [address1](craft-commerce-models-address.md#address1)                                                                            | [string](http://php.net/language.types.string) – Address Line 1
| [address2](craft-commerce-models-address.md#address2)                                                                            | [string](http://php.net/language.types.string) – Address Line 2
| [address3](craft-commerce-models-address.md#address3)                                                                            | [string](http://php.net/language.types.string) – Address Line 3
| [alternativePhone](craft-commerce-models-address.md#alternativephone)                                                            | [string](http://php.net/language.types.string) – Alternative Phone
| [attention](craft-commerce-models-address.md#attention)                                                                          | [string](http://php.net/language.types.string) – Attention
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [businessId](craft-commerce-models-address.md#businessid)                                                                        | [string](http://php.net/language.types.string) – Business ID
| [businessName](craft-commerce-models-address.md#businessname)                                                                    | [string](http://php.net/language.types.string) – Business Name
| [businessTaxId](craft-commerce-models-address.md#businesstaxid)                                                                  | [string](http://php.net/language.types.string) – Business Tax ID
| [city](craft-commerce-models-address.md#city)                                                                                    | [string](http://php.net/language.types.string) – City
| [country](craft-commerce-models-address.md#country)                                                                              | [craft\commerce\models\Country](craft-commerce-models-country.md), [null](http://php.net/language.types.null)
| [countryId](craft-commerce-models-address.md#countryid)                                                                          | [integer](http://php.net/language.types.integer) – Country ID
| [countryIso](craft-commerce-models-address.md#countryiso)                                                                        | [string](http://php.net/language.types.string)
| [countryText](craft-commerce-models-address.md#countrytext)                                                                      | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-commerce-models-address.md#cpediturl)                                                                          | [string](http://php.net/language.types.string)
| [custom1](craft-commerce-models-address.md#custom1)                                                                              | [string](http://php.net/language.types.string) – Custom Field 1
| [custom2](craft-commerce-models-address.md#custom2)                                                                              | [string](http://php.net/language.types.string) – Custom Field 2
| [custom3](craft-commerce-models-address.md#custom3)                                                                              | [string](http://php.net/language.types.string) – Custom Field 3
| [custom4](craft-commerce-models-address.md#custom4)                                                                              | [string](http://php.net/language.types.string) – Custom Field 4
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [firstName](craft-commerce-models-address.md#firstname)                                                                          | [string](http://php.net/language.types.string) – First Name
| [fullName](craft-commerce-models-address.md#fullname)                                                                            | [string](http://php.net/language.types.string) – Full Name
| [id](craft-commerce-models-address.md#id)                                                                                        | [integer](http://php.net/language.types.integer) – Address ID
| [isEstimated](craft-commerce-models-address.md#isestimated)                                                                      | [boolean](http://php.net/language.types.boolean) – If this address is used for estimated values
| [isStoreLocation](craft-commerce-models-address.md#isstorelocation)                                                              | [boolean](http://php.net/language.types.boolean) – True, if this address is the stock location.
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [label](craft-commerce-models-address.md#label)                                                                                  | [string](http://php.net/language.types.string) – Label
| [lastName](craft-commerce-models-address.md#lastname)                                                                            | [string](http://php.net/language.types.string) – Last Name
| [notes](craft-commerce-models-address.md#notes)                                                                                  | [string](http://php.net/language.types.string) – Notes
| [phone](craft-commerce-models-address.md#phone)                                                                                  | [string](http://php.net/language.types.string) – Phone
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [state](craft-commerce-models-address.md#state)                                                                                  | [craft\commerce\models\State](craft-commerce-models-state.md), [null](http://php.net/language.types.null)
| [stateId](craft-commerce-models-address.md#stateid)                                                                              | [integer](http://php.net/language.types.integer) – State ID
| [stateName](craft-commerce-models-address.md#statename)                                                                          | [string](http://php.net/language.types.string) – State Name
| [stateText](craft-commerce-models-address.md#statetext)                                                                          | [string](http://php.net/language.types.string)
| [stateValue](craft-commerce-models-address.md#statevalue)                                                                        | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)
| [title](craft-commerce-models-address.md#title)                                                                                  | [string](http://php.net/language.types.string) – Title
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [zipCode](craft-commerce-models-address.md#zipcode)                                                                              | [string](http://php.net/language.types.string) – Zip

### `abbreviationText`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `address1`



Type

:   [string](http://php.net/language.types.string)



Address Line 1



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L77)



### `address2`



Type

:   [string](http://php.net/language.types.string)



Address Line 2



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L82)



### `address3`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Address Line 3



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L88)



### `alternativePhone`



Type

:   [string](http://php.net/language.types.string)



Alternative Phone



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L108)



### `attention`



Type

:   [string](http://php.net/language.types.string)



Attention



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L51)



### `businessId`



Type

:   [string](http://php.net/language.types.string)



Business ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L129)



### `businessName`



Type

:   [string](http://php.net/language.types.string)



Business Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L119)



### `businessTaxId`



Type

:   [string](http://php.net/language.types.string)



Business Tax ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L124)



### `city`



Type

:   [string](http://php.net/language.types.string)



City



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L93)



### `country`



Type

:   [craft\commerce\models\Country](craft-commerce-models-country.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `countryId`



Type

:   [integer](http://php.net/language.types.integer)



Country ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L139)



### `countryIso`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.1.4







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `countryText`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `custom1`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Custom Field 1



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L156)



### `custom2`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Custom Field 2



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L162)



### `custom3`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Custom Field 3



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L168)



### `custom4`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Custom Field 4



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L174)



### `firstName`



Type

:   [string](http://php.net/language.types.string)



First Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L61)



### `fullName`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Full Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L72)



### `id`



Type

:   [integer](http://php.net/language.types.integer)



Address ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L41)



### `isEstimated`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   2.2



If this address is used for estimated values



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L180)



### `isStoreLocation`



Type

:   [boolean](http://php.net/language.types.boolean)



True, if this address is the stock location.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L46)



### `label`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Label



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L114)



### `lastName`



Type

:   [string](http://php.net/language.types.string)



Last Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L66)



### `notes`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Notes



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L150)



### `phone`



Type

:   [string](http://php.net/language.types.string)



Phone



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L103)



### `state`



Type

:   [craft\commerce\models\State](craft-commerce-models-state.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `stateId`



Type

:   [integer](http://php.net/language.types.integer)



State ID



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L144)



### `stateName`



Type

:   [string](http://php.net/language.types.string)



State Name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L134)



### `stateText`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `stateValue`



Type

:   [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php)



### `title`



Type

:   [string](http://php.net/language.types.string)



Title



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L56)



### `zipCode`



Type

:   [string](http://php.net/language.types.string)



Zip



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L98)







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
| [attributeLabels()](craft-commerce-models-address.md#method-attributelabels)                                                                    | Returns the attribute labels.
| [attributes()](craft-commerce-models-address.md#method-attributes)                                                                              | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                            | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-address.md#method-definerules)                                                                            | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](craft-commerce-models-address.md#method-extrafields)                                                                            | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getAbbreviationText()](craft-commerce-models-address.md#method-getabbreviationtext)                                                            |
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getCountry()](craft-commerce-models-address.md#method-getcountry)                                                                              |
| [getCountryIso()](craft-commerce-models-address.md#method-getcountryiso)                                                                        |
| [getCountryText()](craft-commerce-models-address.md#method-getcountrytext)                                                                      |
| [getCpEditUrl()](craft-commerce-models-address.md#method-getcpediturl)                                                                          |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getState()](craft-commerce-models-address.md#method-getstate)                                                                                  |
| [getStateText()](craft-commerce-models-address.md#method-getstatetext)                                                                          |
| [getStateValue()](craft-commerce-models-address.md#method-getstatevalue)                                                                        |
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](craft-commerce-models-address.md#method-init)                                                                                          | Initializes the object.
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
| [setStateValue()](craft-commerce-models-address.md#method-setstatevalue)                                                                        | Sets the stateId or stateName based on the stateValue set.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateBusinessTaxId()](craft-commerce-models-address.md#method-validatebusinesstaxid)                                                        |
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.
| [validateState()](craft-commerce-models-address.md#method-validatestate)                                                                        |

### `attributeLabels()`





Returns the attribute labels.



Attribute labels are mainly used for display purpose. For example, given an attribute
`firstName`, we can declare a label `First Name` which is more user-friendly and can
be displayed to end users.

By default an attribute label is generated using [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail).
This method allows you to explicitly specify attribute labels.

Note, in order to inherit labels defined in the parent class, a child class needs to
merge the parent labels with child labels using functions such as `array_merge()`.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L239-L268)



#### Returns

[array](http://php.net/language.types.array) – Attribute labels (name => label)



### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L213-L223)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L273-L323)



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




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L228-L234)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `getAbbreviationText()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L417-L421)



#### Returns

[string](http://php.net/language.types.string)



### `getCountry()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L382-L385)



#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md), [null](http://php.net/language.types.null)



### `getCountryIso()`



Since

:   3.1.4








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L391-L395)



#### Returns

[string](http://php.net/language.types.string)



### `getCountryText()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L373-L377)



#### Returns

[string](http://php.net/language.types.string)



### `getCpEditUrl()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L205-L208)



#### Returns

[string](http://php.net/language.types.string)



### `getState()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L426-L429)



#### Returns

[craft\commerce\models\State](craft-commerce-models-state.md), [null](http://php.net/language.types.null)



### `getStateText()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L400-L412)



#### Returns

[string](http://php.net/language.types.string)



### `getStateValue()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L434-L445)



#### Returns

[integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L195-L200)






### `setStateValue()`





Sets the stateId or stateName based on the stateValue set.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L452-L468)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer)) – A state ID or a state name.




### `validateBusinessTaxId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L344-L367)


#### Arguments

- `$attribute`
- `$params`
- `$validator`




### `validateState()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Address.php#L330-L337)


#### Arguments

- `$attribute`
- `$params`
- `$validator`






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



