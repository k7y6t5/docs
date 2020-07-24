---
title: craft\validators\UniqueValidator
code:
  - php
  - twig
---

# UniqueValidator

Type

:   Class

Namespace

:   craft\validators

Inherits

:   [craft\validators\UniqueValidator](craft-validators-uniquevalidator.md) &raquo;
[yii\validators\UniqueValidator](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator) &raquo;
[yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class UniqueValidator.





[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php)


## Public Properties

| Property                                                                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributeNames](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributeNames-detail "Defined by yii\validators\Validator")                               | [array](http://php.net/language.types.array) – Attribute names.
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributes-detail "Defined by yii\validators\Validator")                                       | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Attributes to be validated by this validator.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [builtInValidators](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$builtInValidators-detail "Defined by yii\validators\Validator")                         | [array](http://php.net/language.types.array) – List of built-in validators (name => class or configuration)
| [caseInsensitive](craft-validators-uniquevalidator.md#caseinsensitive)                                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether a case-insensitive check should be performed.
| [comboNotUnique](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$comboNotUnique-detail "Defined by yii\validators\UniqueValidator")                   | [string](http://php.net/language.types.string)
| [enableClientValidation](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$enableClientValidation-detail "Defined by yii\validators\Validator")               | [boolean](http://php.net/language.types.boolean) – Whether to enable client-side validation for this validator.
| [except](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$except-detail "Defined by yii\validators\Validator")                                               | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator should not be applied to.
| [filter](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$filter-detail "Defined by yii\validators\UniqueValidator")                                   | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [Closure](http://php.net/class.closure) – Additional filter to be applied to the DB query used to check the uniqueness of the attribute value.
| [forceMasterDb](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$forceMasterDb-detail "Defined by yii\validators\UniqueValidator")                     | [boolean](http://php.net/language.types.boolean) – Whether this validator is forced to always use master DB
| [isEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$isEmpty-detail "Defined by yii\validators\Validator")                                             | [callable](http://php.net/language.types.callable) – A PHP callable that replaces the default implementation of [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isEmpty()-detail).
| [message](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$message-detail "Defined by yii\validators\Validator")                                             | [string](http://php.net/language.types.string) – The user-defined error message.
| [on](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$on-detail "Defined by yii\validators\Validator")                                                       | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator can be applied to.
| [pk](craft-validators-uniquevalidator.md#pk)                                                                                                                                   | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[] – If [targetClass](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$targetClass-detail) is set, this defines the model attributes that represent the record's primary key(s).
| [skipOnEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnEmpty-detail "Defined by yii\validators\Validator")                                     | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute value is null or an empty string.
| [skipOnError](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnError-detail "Defined by yii\validators\Validator")                                     | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute being validated already has some validation error according to some previous rules.
| [targetAttribute](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$targetAttribute-detail "Defined by yii\validators\UniqueValidator")                 | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The name of the [ActiveRecord](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord) attribute that should be used to validate the uniqueness of the current attribute value.
| [targetAttributeJunction](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$targetAttributeJunction-detail "Defined by yii\validators\UniqueValidator") | [string](http://php.net/language.types.string) – And|or define how target attributes are related
| [targetClass](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$targetClass-detail "Defined by yii\validators\UniqueValidator")                         | [string](http://php.net/language.types.string) – The name of the ActiveRecord class that should be used to validate the uniqueness of the current attribute value.
| [validationAttributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$validationAttributes-detail "Defined by yii\validators\Validator")                   | [array](http://php.net/language.types.array) – List of attribute names.
| [when](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$when-detail "Defined by yii\validators\Validator")                                                   | [callable](http://php.net/language.types.callable) – A PHP callable whose return value determines whether this validator should be applied.
| [whenClient](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$whenClient-detail "Defined by yii\validators\Validator")                                       | [string](http://php.net/language.types.string) – A JavaScript function name whose return value determines whether this validator should be applied on the client-side.

### `caseInsensitive`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether a case-insensitive check should be performed.



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php#L43)



### `pk`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[]



If [targetClass](https://www.yiiframework.com/doc/api/2.0/yii-validators-uniquevalidator#$targetClass-detail) is set, this defines the model
attributes that represent the record's primary key(s). Can be set to a
string or array of strings of model attributes in the same respective
order as the primary keys defined by the record's primaryKey() method, or
can be set to an array of attribute/PK pairs, which explicitly maps model
attributes to record primary keys. Defaults to whatever the record's
primaryKey() method returns.



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php#L33)





## Protected Properties

| Property                                                           | Description
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------
| [originalModel](craft-validators-uniquevalidator.md#originalmodel) | [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model), [null](http://php.net/language.types.null) – The model that is being validated

### `originalModel`



Type

:   [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model), [null](http://php.net/language.types.null)



The model that is being validated



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php#L38)





## Public Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                             | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                             | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                   | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                               | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                           | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                               | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                           | Sets an object property to null.
| [addError()](craft-validators-uniquevalidator.md#method-adderror)                                                                                                     | Adds an error about the specified attribute to the model object.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                               | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                             | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                         | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                             | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                             | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                       | Returns the fully qualified name of this class.
| [clientValidateAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#clientValidateAttribute()-detail "Defined by yii\validators\Validator") | Returns the JavaScript needed for performing client-side validation.
| [createValidator()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#createValidator()-detail "Defined by yii\validators\Validator")                 | Creates a validator object.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                               | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                             | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                             | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAttributeNames()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#getAttributeNames()-detail "Defined by yii\validators\Validator")             | Returns cleaned attribute names without the `!` character at the beginning.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                     | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                   | Returns all behaviors attached to this component.
| [getClientOptions()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#getClientOptions()-detail "Defined by yii\validators\Validator")               | Returns the client-side validation options.
| [getValidationAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#getValidationAttributes()-detail "Defined by yii\validators\Validator") | Returns a list of attributes this validator applies to.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                           | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                       | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                   | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                 | Initializes the object.
| [isActive()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isActive()-detail "Defined by yii\validators\Validator")                               | Returns a value indicating whether the validator is active for the given scenario and attribute.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isEmpty()-detail "Defined by yii\validators\Validator")                                 | Checks if the given value is empty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                     | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                       | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                             | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validate()-detail "Defined by yii\validators\Validator")                               | Validates a given value.
| [validateAttribute()](craft-validators-uniquevalidator.md#method-validateattribute)                                                                                   | Validates a single attribute.
| [validateAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateAttributes()-detail "Defined by yii\validators\Validator")           | Validates the specified object.

### `addError()`





Adds an error about the specified attribute to the model object.



This is a helper method that performs message selection and internationalization.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php#L112-L120)


#### Arguments

- `$model` ([yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)) – The data model being validated
- `$attribute` ([string](http://php.net/language.types.string)) – The attribute being validated
- `$message` ([string](http://php.net/language.types.string)) – The error message
- `$params` ([array](http://php.net/language.types.array)) – Values for the placeholders in the error message




### `validateAttribute()`





Validates a single attribute.



Child classes must implement this method to provide the actual validation logic.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UniqueValidator.php#L48-L107)


#### Arguments

- `$model` ([yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)) – The data model to be validated
- `$attribute` ([string](http://php.net/language.types.string)) – The name of the attribute to be validated.






## Protected Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------
| [formatMessage()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#formatMessage()-detail "Defined by yii\validators\Validator") | Formats a mesage using the I18N, or simple strtr if `\Yii::$app` is not available.
| [validateValue()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateValue()-detail "Defined by yii\validators\Validator") | Validates a value.






