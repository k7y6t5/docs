---
title: craft\behaviors\EnvAttributeParserBehavior
code:
  - php
  - twig
---

# EnvAttributeParserBehavior

Type

:   Class

Namespace

:   craft\behaviors

Inherits

:   [craft\behaviors\EnvAttributeParserBehavior](craft-behaviors-envattributeparserbehavior.md) &raquo;
[yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.1.0



EnvAttributeParserBehavior can be applied to models with attributes that can be
set to either environment variables (`$VARIABLE_NAME`) or aliases (`@aliasName`).

---

```php
public function behaviors()
{
    return [
        'parser' => [
            'class' => EnvAttributeParserBehavior::class,
            'attributes' => ['attr1', 'attr2', '...'],
        ],
    ];
}
```



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php)


## Public Properties

| Property                                                               | Description
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributes](craft-behaviors-envattributeparserbehavior.md#attributes) | [string](http://php.net/language.types.string)[] – The attributes names that can be set to environment variables (`$VARIABLE_NAME`) and/or aliases (`@aliasName`).
| [owner](craft-behaviors-envattributeparserbehavior.md#owner)           | [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)

### `attributes`



Type

:   [string](http://php.net/language.types.string)[]



The attributes names that can be set to environment
variables (`$VARIABLE_NAME`) and/or aliases (`@aliasName`).



[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php#L48)



### `owner`



Type

:   [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)







[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php#L42)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [afterValidate()](craft-behaviors-envattributeparserbehavior.md#method-aftervalidate)                                                     | Restores the original attribute values after validation occurs.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#attach()-detail "Defined by yii\base\Behavior")                     | Attaches the behavior object to the component.
| [beforeValidate()](craft-behaviors-envattributeparserbehavior.md#method-beforevalidate)                                                   | Replaces attribute values before validation occurs.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [detach()](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior#detach()-detail "Defined by yii\base\Behavior")                     | Detaches the behavior object from the component.
| [events()](craft-behaviors-envattributeparserbehavior.md#method-events)                                                                   | Declares event handlers for the [owner](craft-behaviors-envattributeparserbehavior.md#owner)'s events.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.

### `afterValidate()`





Restores the original attribute values after validation occurs.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php#L95-L100)






### `beforeValidate()`





Replaces attribute values before validation occurs.




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php#L69-L90)






### `events()`





Declares event handlers for the [owner](craft-behaviors-envattributeparserbehavior.md#owner)'s events.



Child classes may override this method to declare what PHP callbacks should
be attached to the events of the [owner](craft-behaviors-envattributeparserbehavior.md#owner) component.

The callbacks will be attached to the [owner](craft-behaviors-envattributeparserbehavior.md#owner)'s events when the behavior is
attached to the owner; and they will be detached from the events when
the behavior is detached from the component.

The callbacks can be any of the following:

- method in this behavior: `'handleClick'`, equivalent to `[$this, 'handleClick']`
- object method: `[$object, 'handleClick']`
- static method: `['Page', 'handleClick']`
- anonymous function: `function ($event) { ... }`

The following is an example:

```php
[
    Model::EVENT_BEFORE_VALIDATE => 'myBeforeValidate',
    Model::EVENT_AFTER_VALIDATE => 'myAfterValidate',
]
```




[View source](https://github.com/craftcms/cms/blob/master/src/behaviors/EnvAttributeParserBehavior.php#L58-L64)



#### Returns

[array](http://php.net/language.types.array) – Events (array keys) and the corresponding event handler methods (array values).










