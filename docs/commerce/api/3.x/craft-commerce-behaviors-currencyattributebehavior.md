---
title: craft\commerce\behaviors\CurrencyAttributeBehavior
code:
  - php
  - twig
---

# CurrencyAttributeBehavior

Type

:   Class

Namespace

:   craft\commerce\behaviors

Inherits

:   [craft\commerce\behaviors\CurrencyAttributeBehavior](craft-commerce-behaviors-currencyattributebehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)



CurrencyAttributeBehavior provides an ability of automatic add *AsCurrency() methods to your models for currency attributes.

You should specify exact attribute types via [currencyAttributes](craft-commerce-behaviors-currencyattributebehavior.md#currencyattributes).

For example:

```php
use craft\commerce\behaviors\CurrencyAttributeBehavior;

class LineItem extends Model
{
    public function behaviors()
    {
        return [
            'asCurrency' => [
                'class' => CurrencyAttributeBehavior::className(),
                'currencyAttributes' => [
                    'salePrice'
                    'subtotal'
                ],
                'defaultCurrency' => 'usd'
            ],
        ];
    }

    // ...
}
```



[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php)


## Public Properties

| Property                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributeCurrencyMap](craft-commerce-behaviors-currencyattributebehavior.md#attributecurrencymap)               | [array](http://php.net/language.types.array) – Mapping of attribute => currency if the default is not desired
| [currencyAttributes](craft-commerce-behaviors-currencyattributebehavior.md#currencyattributes)                   | [array](http://php.net/language.types.array) – Currency attributes For example: ```php [ 'salePrice' 'subtotal' ] ```
| [defaultCurrency](craft-commerce-behaviors-currencyattributebehavior.md#defaultcurrency)                         | [string](http://php.net/language.types.string) – Default currency
| [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail "Defined by yii\base\Behavior") | [yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component), [null](http://php.net/language.types.null) – The owner of this behavior

### `attributeCurrencyMap`



Type

:   [array](http://php.net/language.types.array)



Mapping of attribute => currency if the default is not desired



[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L69)



### `currencyAttributes`



Type

:   [array](http://php.net/language.types.array)



Currency attributes
For example:

```php
[
 'salePrice'
 'subtotal'
]
```



[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L59)



### `defaultCurrency`



Type

:   [string](http://php.net/language.types.string)



Default currency



[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L64)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-commerce-behaviors-currencyattributebehavior.md#method-call)                                                             | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](craft-commerce-behaviors-currencyattributebehavior.md#method-get)                                                               | Returns the value of an object property.
| [__isset()](craft-commerce-behaviors-currencyattributebehavior.md#method-isset)                                                           | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#attach()-detail "Defined by yii\base\Behavior")                     | Attaches the behavior object to the component.
| [canGetProperty()](craft-commerce-behaviors-currencyattributebehavior.md#method-cangetproperty)                                           | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [currencyFields()](craft-commerce-behaviors-currencyattributebehavior.md#method-currencyfields)                                           |
| [detach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#detach()-detail "Defined by yii\base\Behavior")                     | Detaches the behavior object from the component.
| [events()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#events()-detail "Defined by yii\base\Behavior")                     | Declares event handlers for the [owner](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#$owner-detail)'s events.
| [hasMethod()](craft-commerce-behaviors-currencyattributebehavior.md#method-hasmethod)                                                     | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `__call()`





Calls the named method which is not a class method.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when an unknown method is being invoked.




[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L74-L91)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The method name
- `$params` ([array](http://php.net/language.types.array)) – Method parameters

#### Returns

`mixed` – The method return value

#### Throws

- [yii\base\UnknownMethodException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownmethodexception)\
  when calling unknown method


### `__get()`





Returns the value of an object property.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$value = $object->property;`.




[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L125-L136)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

`mixed` – The property value

#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is write-only


### `__isset()`





Checks if a property is set, i.e. defined and not null.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `isset($object->property)`.

Note that if the property is not defined, false will be returned.




[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L110-L120)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the named property is set (not null).



### `canGetProperty()`





Returns a value indicating whether a property can be read.



A property is readable if:

- the class has a getter method associated with the specified name
  (in this case, property name is case-insensitive);
- the class has a member variable with the specified name (when `$checkVars` is true);




[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L141-L151)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name
- `$checkVars` ([boolean](http://php.net/language.types.boolean)) – Whether to treat member variables as properties

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the property can be read



### `currencyFields()`










[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L156-L170)



#### Returns

`mixed`



### `hasMethod()`





Returns a value indicating whether a method is defined.



The default implementation is a call to php function `method_exists()`.
You may override this method when you implemented the php magic method `__call()`.




[View source](https://github.com/craftcms/commerce/blob/master/src/behaviors/CurrencyAttributeBehavior.php#L96-L105)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The method name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the method is defined










