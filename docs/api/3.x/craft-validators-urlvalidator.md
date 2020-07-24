---
title: craft\validators\UrlValidator
code:
  - php
  - twig
---

# UrlValidator

Type

:   Class

Namespace

:   craft\validators

Inherits

:   [craft\validators\UrlValidator](craft-validators-urlvalidator.md) &raquo;
[yii\validators\UrlValidator](https://www.yiiframework.com/doc/api/2.0/yii-validators-urlvalidator) &raquo;
[yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class UrlValidator.





[View source](https://github.com/craftcms/cms/blob/master/src/validators/UrlValidator.php)


## Public Properties

| Property                                                                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allowAlias](craft-validators-urlvalidator.md#allowalias)                                                                                                        | [boolean](http://php.net/language.types.boolean) – Whether the value can begin with an alias
| [attributeNames](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributeNames-detail "Defined by yii\validators\Validator")                 | [array](http://php.net/language.types.array) – Attribute names.
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$attributes-detail "Defined by yii\validators\Validator")                         | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Attributes to be validated by this validator.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [builtInValidators](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$builtInValidators-detail "Defined by yii\validators\Validator")           | [array](http://php.net/language.types.array) – List of built-in validators (name => class or configuration)
| [defaultScheme](https://www.yiiframework.com/doc/api/2.0/yii-validators-urlvalidator#$defaultScheme-detail "Defined by yii\validators\UrlValidator")             | [string](http://php.net/language.types.string) – The default URI scheme.
| [enableClientValidation](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$enableClientValidation-detail "Defined by yii\validators\Validator") | [boolean](http://php.net/language.types.boolean) – Whether to enable client-side validation for this validator.
| [enableIDN](https://www.yiiframework.com/doc/api/2.0/yii-validators-urlvalidator#$enableIDN-detail "Defined by yii\validators\UrlValidator")                     | [boolean](http://php.net/language.types.boolean) – Whether validation process should take into account IDN (internationalized domain names).
| [except](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$except-detail "Defined by yii\validators\Validator")                                 | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator should not be applied to.
| [isEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$isEmpty-detail "Defined by yii\validators\Validator")                               | [callable](http://php.net/language.types.callable) – A PHP callable that replaces the default implementation of [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isEmpty()-detail).
| [message](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$message-detail "Defined by yii\validators\Validator")                               | [string](http://php.net/language.types.string) – The user-defined error message.
| [on](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$on-detail "Defined by yii\validators\Validator")                                         | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – Scenarios that the validator can be applied to.
| [pattern](https://www.yiiframework.com/doc/api/2.0/yii-validators-urlvalidator#$pattern-detail "Defined by yii\validators\UrlValidator")                         | [string](http://php.net/language.types.string) – The regular expression used to validate the attribute value.
| [skipOnEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnEmpty-detail "Defined by yii\validators\Validator")                       | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute value is null or an empty string.
| [skipOnError](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$skipOnError-detail "Defined by yii\validators\Validator")                       | [boolean](http://php.net/language.types.boolean) – Whether this validation rule should be skipped if the attribute being validated already has some validation error according to some previous rules.
| [validSchemes](https://www.yiiframework.com/doc/api/2.0/yii-validators-urlvalidator#$validSchemes-detail "Defined by yii\validators\UrlValidator")               | [array](http://php.net/language.types.array) – List of URI schemes which should be considered valid.
| [validationAttributes](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$validationAttributes-detail "Defined by yii\validators\Validator")     | [array](http://php.net/language.types.array) – List of attribute names.
| [when](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$when-detail "Defined by yii\validators\Validator")                                     | [callable](http://php.net/language.types.callable) – A PHP callable whose return value determines whether this validator should be applied.
| [whenClient](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$whenClient-detail "Defined by yii\validators\Validator")                         | [string](http://php.net/language.types.string) – A JavaScript function name whose return value determines whether this validator should be applied on the client-side.

### `allowAlias`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the value can begin with an alias



[View source](https://github.com/craftcms/cms/blob/master/src/validators/UrlValidator.php#L26)







## Public Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                             | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                             | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-validators-urlvalidator.md#method-construct)                                                                                                    | Constructor.
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
| [init()](craft-validators-urlvalidator.md#method-init)                                                                                                                | Initializes the object.
| [isActive()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isActive()-detail "Defined by yii\validators\Validator")                               | Returns a value indicating whether the validator is active for the given scenario and attribute.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#isEmpty()-detail "Defined by yii\validators\Validator")                                 | Checks if the given value is empty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                     | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                       | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                             | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validate()-detail "Defined by yii\validators\Validator")                               | Validates a given value.
| [validateAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateAttribute()-detail "Defined by yii\validators\Validator")             | Validates a single attribute.
| [validateAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#validateAttributes()-detail "Defined by yii\validators\Validator")           | Validates the specified object.
| [validateValue()](craft-validators-urlvalidator.md#method-validatevalue)                                                                                              | Validates a value.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](craft-validators-urlvalidator.md#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UrlValidator.php#L31-L44)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UrlValidator.php#L49-L56)






### `validateValue()`





Validates a value.



A validator class can implement this method to support data validation out of the context of a data model.




[View source](https://github.com/craftcms/cms/blob/master/src/validators/UrlValidator.php#L61-L76)


#### Arguments

- `$value` (`mixed`) – The data value to be validated.

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The error message and the array of parameters to be inserted into the error message.
```php
if (!$valid) {
    return [$this->message, [
        'param1' => $this->param1,
        'formattedLimit' => Yii::$app->formatter->asShortSize($this->getSizeLimit()),
        'mimeTypes' => implode(', ', $this->mimeTypes),
        'param4' => 'etc...',
    ]];
}

return null;
```
for this example `message` template can contain `{param1}`, `{formattedLimit}`, `{mimeTypes}`, `{param4}`

Null should be returned if the data is valid.

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the validator does not supporting data validation without a model




## Protected Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------
| [formatMessage()](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#formatMessage()-detail "Defined by yii\validators\Validator") | Formats a mesage using the I18N, or simple strtr if `\Yii::$app` is not available.






