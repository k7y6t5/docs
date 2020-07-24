---
title: craft\commerce\services\Sales
code:
  - php
  - twig
---

# Sales

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Sales](craft-commerce-services-sales.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Sale service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allSales](craft-commerce-services-sales.md#allsales)                                                                      | [craft\commerce\models\Sale](craft-commerce-models-sale.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allSales`



Type

:   [craft\commerce\models\Sale](craft-commerce-models-sale.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php)







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
| [deleteSaleById()](craft-commerce-services-sales.md#method-deletesalebyid)                                                                  | Delete a sale by its id.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllSales()](craft-commerce-services-sales.md#method-getallsales)                                                                        | Get all sales.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getSaleById()](craft-commerce-services-sales.md#method-getsalebyid)                                                                        | Get a sale by its ID.
| [getSalePriceForPurchasable()](craft-commerce-services-sales.md#method-getsalepriceforpurchasable)                                          | Returns the salePrice of the purchasable based on all the sales.
| [getSalesForPurchasable()](craft-commerce-services-sales.md#method-getsalesforpurchasable)                                                  | Returns the sales that match the purchasable.
| [getSalesRelatedToPurchasable()](craft-commerce-services-sales.md#method-getsalesrelatedtopurchasable)                                      |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [matchPurchasableAndSale()](craft-commerce-services-sales.md#method-matchpurchasableandsale)                                                | Match a product and a sale and return the result.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [populateSaleRelations()](craft-commerce-services-sales.md#method-populatesalerelations)                                                    | Populates a sale's relations.
| [reorderSales()](craft-commerce-services-sales.md#method-reordersales)                                                                      | Reorder Sales based on a list of ids.
| [saveSale()](craft-commerce-services-sales.md#method-savesale)                                                                              | Save a Sale.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteSaleById()`





Delete a sale by its id.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L653-L676)


#### Arguments

- `$id`

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Exception](http://php.net/class.exception)
- [Throwable](http://php.net/class.throwable)
- [yii\db\StaleObjectException](https://www.yiiframework.com/doc/api/2.0/yii-db-staleobjectexception)


### `getAllSales()`





Get all sales.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L188-L252)



#### Returns

[craft\commerce\models\Sale](craft-commerce-models-sale.md)[]



### `getSaleById()`





Get a sale by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L172-L181)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\Sale](craft-commerce-models-sale.md), [null](http://php.net/language.types.null)



### `getSalePriceForPurchasable()`





Returns the salePrice of the purchasable based on all the sales.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L355-L410)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null))

#### Returns

[float](http://php.net/language.types.float)



### `getSalesForPurchasable()`





Returns the sales that match the purchasable.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L302-L317)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null))

#### Returns

[craft\commerce\services\Sales](craft-commerce-services-sales.md)[]



### `getSalesRelatedToPurchasable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L324-L346)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))

#### Returns

[array](http://php.net/language.types.array)



### `matchPurchasableAndSale()`





Match a product and a sale and return the result.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L420-L512)


#### Arguments

- `$purchasable` ([craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md))
- `$sale` ([craft\commerce\models\Sale](craft-commerce-models-sale.md))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `populateSaleRelations()`





Populates a sale's relations.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L259-L293)


#### Arguments

- `$sale` ([craft\commerce\models\Sale](craft-commerce-models-sale.md))




### `reorderSales()`





Reorder Sales based on a list of ids.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L631-L642)


#### Arguments

- `$ids`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `saveSale()`





Save a Sale.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Sales.php#L523-L623)


#### Arguments

- `$model` ([craft\commerce\models\Sale](craft-commerce-models-sale.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Exception](http://php.net/class.exception)








## Events

### EVENT_AFTER_DELETE_SALE



Type

:   [craft\commerce\events\SaleEvent](craft-commerce-events-saleevent.md)



The event that is triggered after a sale is deleted.

```php
use craft\commerce\events\SaleEvent;
use craft\commerce\services\Sales;
use craft\commerce\models\Sale;
use yii\base\Event;

Event::on(
    Sales::class,
    Sales::EVENT_AFTER_DELETE_SALE,
    function(SaleEvent $event) {
        // @var Sale $sale
        $sale = $event->sale;

        // do something
        // ...
    }
);
```



---



### EVENT_AFTER_SAVE_SALE



Type

:   [craft\commerce\events\SaleEvent](craft-commerce-events-saleevent.md)

Since

:   2.2



The event that is triggered after a sale is saved.



---



### EVENT_BEFORE_MATCH_PURCHASABLE_SALE



Type

:   [craft\commerce\events\SaleMatchEvent](craft-commerce-events-salematchevent.md)



The event that is triggered before Commerce attempts to match a sale to a purchasable.

The `isValid` event property can be set to `false` to prevent the application of the matched sale.

```php
use craft\commerce\events\SaleMatchEvent;
use craft\commerce\services\Sales;
use craft\commerce\base\PurchasableInterface;
use craft\commerce\models\Sale;
use yii\base\Event;

Event::on(
    Sales::class,
    Sales::EVENT_BEFORE_MATCH_PURCHASABLE_SALE,
    function(SaleMatchEvent $event) {
        // @var Sale $sale
        $sale = $event->sale;
        // @var PurchasableInterface $purchasable
        $purchasable = $event->purchasable;
        // @var bool $isNew
        $isNew = $event->isNew;

        // Use custom business logic to exclude purchasable from sale
        // with `$event->isValid = false`
        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_SALE



Type

:   [craft\commerce\events\SaleEvent](craft-commerce-events-saleevent.md)

Since

:   2.2



The event that is triggered before a sale is saved.



---




