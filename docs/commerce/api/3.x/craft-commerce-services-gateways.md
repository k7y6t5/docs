---
title: craft\commerce\services\Gateways
code:
  - php
  - twig
---

# Gateways

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Gateways](craft-commerce-services-gateways.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Gateway service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allCustomerEnabledGateways](craft-commerce-services-gateways.md#allcustomerenabledgateways)                               | [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[] – All gateways that are enabled for frontend
| [allGatewayTypes](craft-commerce-services-gateways.md#allgatewaytypes)                                                     | [string](http://php.net/language.types.string)[]
| [allGateways](craft-commerce-services-gateways.md#allgateways)                                                             | [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[] – All gateways
| [allSubscriptionGateways](craft-commerce-services-gateways.md#allsubscriptiongateways)                                     | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allCustomerEnabledGateways`



Type

:   [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[]

Access

:   Read-only



All gateways that are enabled for frontend



[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php)



### `allGatewayTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php)



### `allGateways`



Type

:   [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[]

Access

:   Read-only



All gateways



[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php)



### `allSubscriptionGateways`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php)







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
| [archiveGatewayById()](craft-commerce-services-gateways.md#method-archivegatewaybyid)                                                       | Archives a gateway by its ID.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createGateway()](craft-commerce-services-gateways.md#method-creategateway)                                                                 | Creates a gateway with a given config
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllCustomerEnabledGateways()](craft-commerce-services-gateways.md#method-getallcustomerenabledgateways)                                 | Returns all customer enabled gateways.
| [getAllGatewayTypes()](craft-commerce-services-gateways.md#method-getallgatewaytypes)                                                       | Returns all registered gateway types.
| [getAllGateways()](craft-commerce-services-gateways.md#method-getallgateways)                                                               | Returns all gateways
| [getAllSubscriptionGateways()](craft-commerce-services-gateways.md#method-getallsubscriptiongateways)                                       | Returns all subscription gateways.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getGatewayByHandle()](craft-commerce-services-gateways.md#method-getgatewaybyhandle)                                                       | Returns a gateway by its handle.
| [getGatewayById()](craft-commerce-services-gateways.md#method-getgatewaybyid)                                                               | Returns a gateway by its ID.
| [getGatewayOverrides()](craft-commerce-services-gateways.md#method-getgatewayoverrides)                                                     | Returns any custom gateway settings form config file.
| [handleArchivedGateway()](craft-commerce-services-gateways.md#method-handlearchivedgateway)                                                 | Handle gateway being archived
| [handleChangedGateway()](craft-commerce-services-gateways.md#method-handlechangedgateway)                                                   | Handle gateway change
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderGateways()](craft-commerce-services-gateways.md#method-reordergateways)                                                             | Reorders gateways by ids.
| [saveGateway()](craft-commerce-services-gateways.md#method-savegateway)                                                                     | Saves a gateway.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `archiveGatewayById()`





Archives a gateway by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L168-L175)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – Gateway ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the archiving was successful or not



### `createGateway()`





Creates a gateway with a given config




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L357-L390)


#### Arguments

- `$config` (`mixed`) – The gateway’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md) – The gateway



### `getAllCustomerEnabledGateways()`





Returns all customer enabled gateways.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L102-L120)



#### Returns

[craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[] – All gateways that are enabled for frontend



### `getAllGatewayTypes()`





Returns all registered gateway types.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L82-L95)



#### Returns

[string](http://php.net/language.types.string)[]



### `getAllGateways()`





Returns  all gateways




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L146-L160)



#### Returns

[craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md)[] – All gateways



### `getAllSubscriptionGateways()`





Returns all subscription gateways.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L127-L139)



#### Returns

[array](http://php.net/language.types.array)



### `getGatewayByHandle()`





Returns a gateway by its handle.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L198-L206)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\commerce\base\Gateway](craft-commerce-base-gateway.md), [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [null](http://php.net/language.types.null) – The gateway or null if not found.



### `getGatewayById()`





Returns a gateway by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L183-L190)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [null](http://php.net/language.types.null) – The gateway or null if not found.



### `getGatewayOverrides()`





Returns any custom gateway settings form config file.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L398-L405)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The gateway handle

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `handleArchivedGateway()`





Handle gateway being archived




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L308-L327)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `handleChangedGateway()`





Handle gateway change




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L271-L299)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `reorderGateways()`





Reorders gateways by ids.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L335-L349)


#### Arguments

- `$ids` ([array](http://php.net/language.types.array)) – Array of gateways.

#### Returns

[boolean](http://php.net/language.types.boolean) – Always true.



### `saveGateway()`





Saves a gateway.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Gateways.php#L216-L262)


#### Arguments

- `$gateway` ([craft\commerce\base\Gateway](craft-commerce-base-gateway.md)) – The gateway to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the gateway should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the gateway was saved successfully or not.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)






## Constants

| Constant             | Description
| -------------------- | -----------
| `CONFIG_GATEWAY_KEY` |


## Events

### EVENT_REGISTER_GATEWAY_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](https://docs.craftcms.com/api/v3/craft-events-registercomponenttypesevent.html)



The event that is triggered for the registration of additional gateways.

This example registers a custom gateway instance of the `MyGateway` class:

```php
use craft\events\RegisterComponentTypesEvent;
use craft\commerce\services\Purchasables;
use yii\base\Event;

Event::on(
    Gateways::class,
    Gateways::EVENT_REGISTER_GATEWAY_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyGateway::class;
    }
);
```



---




