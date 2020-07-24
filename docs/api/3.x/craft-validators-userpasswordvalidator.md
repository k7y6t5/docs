---
title: craft\validators\UserPasswordValidator
code:
  - php
  - twig
---

# UserPasswordValidator

Type

:   Class

Namespace

:   craft\validators

Inherits

:   [craft\validators\UserPasswordValidator](craft-validators-userpasswordvalidator.md) &raquo;
[yii\validators\StringValidator](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator) &raquo;
[yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class UserPasswordValidator.





[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php)


## Public Properties

| Property                                                                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributeNames](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributeNames-detail "Defined by yii\validators\Validator")                 | [array](http://php.net/language.types.array) – Attribute names.
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributes-detail "Defined by yii\validators\Validator")                         | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Attributes to be validated by this validator.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [builtInValidators](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$builtInValidators-detail "Defined by yii\validators\Validator")           | [array](http://php.net/language.types.array) – List of built-in validators (name => class or configuration)
| [currentPassword](craft-validators-userpasswordvalidator.md#currentpassword)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The user's current (hashed) password.
| [enableClientValidation](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$enableClientValidation-detail "Defined by yii\validators\Validator") | [boolean](http://php.net/language.types.boolean) – Whether to enable client-side validation for this validator.
| [encoding](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$encoding-detail "Defined by yii\validators\StringValidator")                 | [string](http://php.net/language.types.string) – The encoding of the string value to be validated (e.g. 'UTF-8').
| [except](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$except-detail "Defined by yii\validators\Validator")                                 | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator should not be applied to.
| [forceDifferent](craft-validators-userpasswordvalidator.md#forcedifferent)                                                                                       | [boolean](http://php.net/language.types.boolean) – Whether the password must be different from the existing password.
| [isEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$isEmpty-detail "Defined by yii\validators\Validator")                               | [callable](http://php.net/language.types.callable) – A PHP callable that replaces the default implementation of [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isEmpty()-detail).
| [length](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$length-detail "Defined by yii\validators\StringValidator")                     | [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array) – Specifies the length limit of the value to be validated.
| [max](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$max-detail "Defined by yii\validators\StringValidator")                           | [integer](http://php.net/language.types.integer) – Maximum length.
| [message](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$message-detail "Defined by yii\validators\Validator")                               | [string](http://php.net/language.types.string) – The user-defined error message.
| [min](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$min-detail "Defined by yii\validators\StringValidator")                           | [integer](http://php.net/language.types.integer) – Minimum length.
| [notEqual](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$notEqual-detail "Defined by yii\validators\StringValidator")                 | [string](http://php.net/language.types.string) – User-defined error message used when the length of the value is not equal to [length](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$length-detail).
| [on](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$on-detail "Defined by yii\validators\Validator")                                         | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator can be applied to.
| [sameAsCurrent](craft-validators-userpasswordvalidator.md#sameascurrent)                                                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – User-defined error message used when the new password is the same as [currentPassword](craft-validators-userpasswordvalidator.md#currentpassword).
| [skipOnEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnEmpty-detail "Defined by yii\validators\Validator")                       | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute value is null or an empty string.
| [skipOnError](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnError-detail "Defined by yii\validators\Validator")                       | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute being validated already has some validation error according to some previous rules.
| [strict](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$strict-detail "Defined by yii\validators\StringValidator")                     | [boolean](http://php.net/language.types.boolean) – Whether to require the value to be a string data type.
| [tooLong](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$tooLong-detail "Defined by yii\validators\StringValidator")                   | [string](http://php.net/language.types.string) – User-defined error message used when the length of the value is greater than [max](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$max-detail).
| [tooShort](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$tooShort-detail "Defined by yii\validators\StringValidator")                 | [string](http://php.net/language.types.string) – User-defined error message used when the length of the value is smaller than [min](https://www.yiiframework.com/doc/api/2.0/yii-validators-stringvalidator#$min-detail).
| [validationAttributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$validationAttributes-detail "Defined by yii\validators\Validator")     | [array](http://php.net/language.types.array) – List of attribute names.
| [when](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$when-detail "Defined by yii\validators\Validator")                                     | [callable](http://php.net/language.types.callable) – A PHP callable whose return value determines whether this validator should be applied.
| [whenClient](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$whenClient-detail "Defined by yii\validators\Validator")                         | [string](http://php.net/language.types.string) – A JavaScript function name whose return value determines whether this validator should be applied on the client-side.

### `currentPassword`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The user's current (hashed) password.



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L30)



### `forceDifferent`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the password must be different from the existing password.



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L25)



### `sameAsCurrent`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



User-defined error message used when the new password is the same as [currentPassword](craft-validators-userpasswordvalidator.md#currentpassword).



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L35)







## Public Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                             | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                             | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-validators-userpasswordvalidator.md#method-construct)                                                                                           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                               | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                           | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                               | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                           | Sets an object property to null.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#addError()-detail "Defined by yii\validators\Validator")                               | Adds an error about the specified attribute to the model object.
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
| [init()](craft-validators-userpasswordvalidator.md#method-init)                                                                                                       | Initializes the object.
| [isActive()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isActive()-detail "Defined by yii\validators\Validator")                               | Returns a value indicating whether the validator is active for the given scenario and attribute.
| [isEmpty()](craft-validators-userpasswordvalidator.md#method-isempty)                                                                                                 | Checks if the given value is empty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                     | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                       | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                             | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validate()-detail "Defined by yii\validators\Validator")                               | Validates a given value.
| [validateAttribute()](craft-validators-userpasswordvalidator.md#method-validateattribute)                                                                             | Validates a single attribute.
| [validateAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateAttributes()-detail "Defined by yii\validators\Validator")           | Validates the specified object.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](craft-validators-userpasswordvalidator.md#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L40-L53)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L58-L65)






### `isEmpty()`





Checks if the given value is empty.



A value is considered empty if it is null, an empty array, or an empty string.
Note that this method is different from PHP empty(). It will return false when the value is 0.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L91-L99)


#### Arguments

- `$value` (`mixed`) – The value to be checked

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the value is empty



### `validateAttribute()`





Validates a single attribute.



Child classes must implement this method to provide the actual validation logic.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UserPasswordValidator.php#L70-L85)


#### Arguments

- `$model` ([yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)) – The data model to be validated
- `$attribute` ([string](http://php.net/language.types.string)) – The name of the attribute to be validated.






## Protected Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------
| [formatMessage()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#formatMessage()-detail "Defined by yii\validators\Validator") | Formats a mesage using the I18N, or simple strtr if `\Yii::$app` is not available.
| [validateValue()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateValue()-detail "Defined by yii\validators\Validator") | Validates a value.






