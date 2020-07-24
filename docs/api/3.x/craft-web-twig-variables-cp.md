---
title: craft\web\twig\variables\Cp
code:
  - php
  - twig
---

# Cp

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Cp](craft-web-twig-variables-cp.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Control panel functions





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [alerts](craft-web-twig-variables-cp.md#alerts)                                                                            | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [envSuggestions](craft-web-twig-variables-cp.md#envsuggestions)                                                            | [string](http://php.net/language.types.string)[]
| [templateSuggestions](craft-web-twig-variables-cp.md#templatesuggestions)                                                  | [string](http://php.net/language.types.string)[]

### `alerts`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php)



### `envSuggestions`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.1.0







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php)



### `templateSuggestions`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.1.0







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [areAlertsCached()](craft-web-twig-variables-cp.md#method-arealertscached)                                                                  | Returns whether the control panel alerts are cached.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [craftIdAccountUrl()](craft-web-twig-variables-cp.md#method-craftidaccounturl)                                                              | Returns the Craft ID account URL.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAlerts()](craft-web-twig-variables-cp.md#method-getalerts)                                                                              | Returns an array of alerts to display in the control panel.
| [getAsciiCharMap()](craft-web-twig-variables-cp.md#method-getasciicharmap)                                                                  | Returns ASCII character mappings for the given language, if it differs from the application language.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEnvSuggestions()](craft-web-twig-variables-cp.md#method-getenvsuggestions)                                                              | Returns the available environment variable and alias suggestions for inputs that support them.
| [getTemplateSuggestions()](craft-web-twig-variables-cp.md#method-gettemplatesuggestions)                                                    | Returns the available template path suggestions for template inputs.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [nav()](craft-web-twig-variables-cp.md#method-nav)                                                                                          | Returns the control panel nav items.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [settings()](craft-web-twig-variables-cp.md#method-settings)                                                                                | Returns the list of settings.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `areAlertsCached()`





Returns whether the control panel alerts are cached.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L357-L361)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `craftIdAccountUrl()`





Returns the Craft ID account URL.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L47-L50)



#### Returns

[string](http://php.net/language.types.string)



### `getAlerts()`





Returns an array of alerts to display in the control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L368-L371)



#### Returns

[array](http://php.net/language.types.array)



### `getAsciiCharMap()`



Since

:   3.1.9



Returns ASCII character mappings for the given language, if it differs from the application language.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L436-L443)


#### Arguments

- `$language` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getEnvSuggestions()`



Since

:   3.1.0



Returns the available environment variable and alias suggestions for
inputs that support them.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L382-L427)


#### Arguments

- `$includeAliases` ([boolean](http://php.net/language.types.boolean)) – Whether aliases should be included in the list
(only enable this if the setting defines a URL or file path)

#### Returns

[string](http://php.net/language.types.string)[]



### `getTemplateSuggestions()`



Since

:   3.1.0



Returns the available template path suggestions for template inputs.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L451-L536)



#### Returns

[string](http://php.net/language.types.string)[]



### `nav()`





Returns the control panel nav items.

Each control panel nav item should be defined by an array with the following keys:

- `label` – The human-facing nav item label
- `url` – The URL the nav item should link to
- `id` – The HTML `id` attribute the nav item should have (optional)
- `icon` – The path to an SVG file that should be used as the nav item icon (optional)
- `fontIcon` – A character/ligature from Craft’s font icon set (optional)
- `badgeCount` – A number that should be displayed beside the nav item when unselected
- `subnav` – A sub-array of subnav items

Subnav arrays should be associative, with identifiable keys set to sub-arrays with the following keys:

- `label` – The human-facing subnav item label
- `url` – The URL the subnav item should link to

For example:

```php
[
    'label' => 'Commerce',
    'url' => 'commerce',
    'subnav' => [
        'orders' => ['label' => 'Orders', 'url' => 'commerce/orders',
        'discounts' => ['label' => 'Discounts', 'url' => 'commerce/discounts',
    ],
]
```

Control panel templates can specify which subnav item is selected by defining a `selectedSubnavItem` variable.

```twig
{% set selectedSubnavItem = 'orders' %}
```


[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L92-L259)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `settings()`





Returns the list of settings.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Cp.php#L266-L350)



#### Returns

[array](http://php.net/language.types.array)









## Events

### EVENT_REGISTER_CP_NAV_ITEMS



Type

:   [craft\events\RegisterCpNavItemsEvent](craft-events-registercpnavitemsevent.md)



The event that is triggered when registering control panel nav items.



---



### EVENT_REGISTER_CP_SETTINGS



Type

:   [craft\events\RegisterCpSettingsEvent](craft-events-registercpsettingsevent.md)

Since

:   3.1.0



The event that is triggered when registering control panel nav items.



---




