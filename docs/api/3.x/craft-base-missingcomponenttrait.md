---
title: craft\base\MissingComponentTrait
code:
  - php
  - twig
---

# MissingComponentTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\fields\MissingField](craft-fields-missingfield.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md)

Since

:   3.0.0



MissingComponentTrait implements the common methods and properties for classes implementing [craft\base\MissingComponentInterface](craft-base-missingcomponentinterface.md).





[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php)


## Public Properties

| Property                                                         | Description
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [errorMessage](craft-base-missingcomponenttrait.md#errormessage) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The exception message that explains why the component class was invalid
| [expectedType](craft-base-missingcomponenttrait.md#expectedtype) | [string](http://php.net/language.types.string), [craft\base\Component](craft-base-component.md), [null](http://php.net/language.types.null) – The expected component class name.
| [settings](craft-base-missingcomponenttrait.md#settings)         | `mixed` – The custom settings associated with the component, if it is savable

### `errorMessage`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The exception message that explains why the component class was invalid



[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php#L31)



### `expectedType`



Type

:   [string](http://php.net/language.types.string), [craft\base\Component](craft-base-component.md), [null](http://php.net/language.types.null)



The expected component class name.



[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php#L26)



### `settings`



Type

:   `mixed`



The custom settings associated with the component, if it is savable



[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php#L36)







## Public Methods

| Method                                                                                | Description
| ------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------
| [createFallback()](craft-base-missingcomponenttrait.md#method-createfallback)         | Creates a new component of a given type based on this one’s properties.
| [getPlaceholderHtml()](craft-base-missingcomponenttrait.md#method-getplaceholderhtml) | Displays an error message (and possibly a plugin install button) in place of the normal component UI.

### `createFallback()`





Creates a new component of a given type based on this one’s properties.




[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php#L44-L52)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The component class that should be used as the fallback

#### Returns

[craft\base\ComponentInterface](craft-base-componentinterface.md)



### `getPlaceholderHtml()`



Since

:   3.0.6



Displays an error message (and possibly a plugin install button) in place of the normal component UI.




[View source](https://github.com/craftcms/cms/blob/master/src/base/MissingComponentTrait.php#L60-L139)



#### Returns

[string](http://php.net/language.types.string)









