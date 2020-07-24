---
title: craft\commerce\services\Countries
code:
  - php
  - twig
---

# Countries

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Countries](craft-commerce-services-countries.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Country service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allCountries](craft-commerce-services-countries.md#allcountries)                                                          | [craft\commerce\models\Country](craft-commerce-models-country.md)[] – An array of all countries.
| [allCountriesAsList](craft-commerce-services-countries.md#allcountriesaslist)                                              | [array](http://php.net/language.types.array)
| [allEnabledCountries](craft-commerce-services-countries.md#allenabledcountries)                                            | [array](http://php.net/language.types.array)
| [allEnabledCountriesAsList](craft-commerce-services-countries.md#allenabledcountriesaslist)                                | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allCountries`



Type

:   [craft\commerce\models\Country](craft-commerce-models-country.md)[]

Access

:   Read-only



An array of all countries.



[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php)



### `allCountriesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php)



### `allEnabledCountries`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php)



### `allEnabledCountriesAsList`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteCountryById()](craft-commerce-services-countries.md#method-deletecountrybyid)                                                        | Deletes a country by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllCountries()](craft-commerce-services-countries.md#method-getallcountries)                                                            | Returns an array of all countries.
| [getAllCountriesAsList()](craft-commerce-services-countries.md#method-getallcountriesaslist)                                                | Returns all country names, indexed by ID.
| [getAllEnabledCountries()](craft-commerce-services-countries.md#method-getallenabledcountries)                                              | Returns an array of all enabled countries
| [getAllEnabledCountriesAsList()](craft-commerce-services-countries.md#method-getallenabledcountriesaslist)                                  | Returns all country names, indexed by ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCountriesByShippingZoneId()](craft-commerce-services-countries.md#method-getcountriesbyshippingzoneid)                                  | Returns all countries in a shipping zone, per the shipping zone's ID.
| [getCountriesByTaxZoneId()](craft-commerce-services-countries.md#method-getcountriesbytaxzoneid)                                            | Returns all countries in a tax zone, per the tax zone's ID.
| [getCountryById()](craft-commerce-services-countries.md#method-getcountrybyid)                                                              | Returns a country by its ID.
| [getCountryByIso()](craft-commerce-services-countries.md#method-getcountrybyiso)                                                            | Returns a country by its ISO code.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderCountries()](craft-commerce-services-countries.md#method-reordercountries)                                                          |
| [saveCountry()](craft-commerce-services-countries.md#method-savecountry)                                                                    | Saves a country.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteCountryById()`





Deletes a country by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L258-L268)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The country's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the country was deleted successfully



### `getAllCountries()`





Returns an array of all countries.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L129-L146)



#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md)[] – An array of all countries.



### `getAllCountriesAsList()`





Returns all country names, indexed by ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L104-L109)



#### Returns

[array](http://php.net/language.types.array)



### `getAllEnabledCountries()`



Since

:   3.0



Returns an array of all enabled countries




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L154-L158)



#### Returns

[array](http://php.net/language.types.array)



### `getAllEnabledCountriesAsList()`



Since

:   3.0



Returns all country names, indexed by ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L117-L122)



#### Returns

[array](http://php.net/language.types.array)



### `getCountriesByShippingZoneId()`





Returns all countries in a shipping zone, per the shipping zone's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L191-L208)


#### Arguments

- `$shippingZoneId` ([integer](http://php.net/language.types.integer)) – The shipping zone's ID

#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md)[] – An array of countries in the matched shipping zone.



### `getCountriesByTaxZoneId()`





Returns all countries in a tax zone, per the tax zone's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L166-L183)


#### Arguments

- `$taxZoneId` ([integer](http://php.net/language.types.integer)) – The tax zone's ID

#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md)[] – An array of countries in the matched tax zone



### `getCountryById()`





Returns a country by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L63-L82)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The country's ID

#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md), [null](http://php.net/language.types.null)



### `getCountryByIso()`





Returns a country by its ISO code.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L90-L97)


#### Arguments

- `$iso` ([string](http://php.net/language.types.string)) – The country's ISO code

#### Returns

[craft\commerce\models\Country](craft-commerce-models-country.md), [null](http://php.net/language.types.null)



### `reorderCountries()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L276-L287)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `saveCountry()`





Saves a country.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Countries.php#L218-L250)


#### Arguments

- `$country` ([craft\commerce\models\Country](craft-commerce-models-country.md)) – The country to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this country before saving.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the country was saved successfully.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the country does not exist.









