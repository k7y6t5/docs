---
title: craft\commerce\services\Payments
code:
  - php
  - twig
---

# Payments

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Payments](craft-commerce-services-payments.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Payments service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [captureTransaction()](craft-commerce-services-payments.md#method-capturetransaction)                                                       | Capture a transaction.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [completePayment()](craft-commerce-services-payments.md#method-completepayment)                                                             | Process return from off-site payment.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getTotalAuthorizedForOrder()](craft-commerce-services-payments.md#method-gettotalauthorizedfororder)                                       |
| [getTotalAuthorizedOnlyForOrder()](craft-commerce-services-payments.md#method-gettotalauthorizedonlyfororder)                               | Gets the total transactions amount with authorized.
| [getTotalPaidForOrder()](craft-commerce-services-payments.md#method-gettotalpaidfororder)                                                   | Gets the total transactions amount really paid (not authorized).
| [getTotalRefundedForOrder()](craft-commerce-services-payments.md#method-gettotalrefundedfororder)                                           | Gets the total transactions amount refunded.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [processPayment()](craft-commerce-services-payments.md#method-processpayment)                                                               | Process a payment.
| [refundTransaction()](craft-commerce-services-payments.md#method-refundtransaction)                                                         | Refund a transaction.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `captureTransaction()`





Capture a transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L328-L347)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction to capture.

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)

#### Throws

- [craft\commerce\errors\TransactionException](craft-commerce-errors-transactionexception.md)\
  if something went wrong when saving the transaction


### `completePayment()`





Process return from off-site payment.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L382-L451)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md))
- `$customError`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getTotalAuthorizedForOrder()`

::: danger DEPRECATED
Deprecated since version 3.x: 
:::









[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L506-L519)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[float](http://php.net/language.types.float)



### `getTotalAuthorizedOnlyForOrder()`

::: danger DEPRECATED
Deprecated since version 3.x: 
:::




Gets the total transactions amount with authorized.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L493-L498)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[float](http://php.net/language.types.float)



### `getTotalPaidForOrder()`

::: danger DEPRECATED
Deprecated since version 3.x: Use
:::




Gets the total transactions amount really paid (not authorized).




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L460-L465)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[float](http://php.net/language.types.float)



### `getTotalRefundedForOrder()`

::: danger DEPRECATED
Deprecated since version 3.x: 
:::




Gets the total transactions amount refunded.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L474-L484)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

[float](http://php.net/language.types.float)



### `processPayment()`





Process a payment.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L238-L319)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md)) – The order for which the payment is.
- `$form` ([craft\commerce\models\payments\BasePaymentForm](craft-commerce-models-payments-basepaymentform.md)) – The payment form.
- `$redirect`
- `$transaction`

#### Returns

`void`, [null](http://php.net/language.types.null)

#### Throws

- [craft\commerce\errors\PaymentException](craft-commerce-errors-paymentexception.md)\
  if the payment was unsuccessful
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `refundTransaction()`





Refund a transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Payments.php#L358-L373)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction to refund.
- `$amount` ([float](http://php.net/language.types.float), [null](http://php.net/language.types.null)) – The amount to refund or null for full amount.
- `$note` ([string](http://php.net/language.types.string)) – The administrators note on the refund

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)

#### Throws

- [craft\commerce\errors\RefundException](craft-commerce-errors-refundexception.md)\
  if something went wrong during the refund.








## Events

### EVENT_AFTER_CAPTURE_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered after a payment transaction is captured.

```php
use craft\commerce\events\TransactionEvent;
use craft\commerce\services\Payments;
use craft\commerce\models\Transaction;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_AFTER_CAPTURE_TRANSACTION,
    function(TransactionEvent $event) {
        // @var Transaction $transaction
        $transaction = $event->transaction;

        // Notify the warehouse we're ready to ship
        // ...
    }
);
```



---



### EVENT_AFTER_PAYMENT_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered after a payment transaction is made.

```php
use craft\commerce\events\TransactionEvent;
use craft\commerce\services\Payments;
use craft\commerce\models\Transaction;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_AFTER_PAYMENT_TRANSACTION,
    function(TransactionEvent $event) {
        // @var Transaction $transaction
        $transaction = $event->transaction;

        // Check whether it was an authorize transaction
        // and make sure that warehouse team is on top of it
        // ...
    }
);
```



---



### EVENT_AFTER_PROCESS_PAYMENT



Type

:   [craft\commerce\events\ProcessPaymentEvent](craft-commerce-events-processpaymentevent.md)



The event that is triggered after a payment is processed.

```php
use craft\commerce\events\ProcessPaymentEvent;
use craft\commerce\services\Payments;
use craft\commerce\elements\Order;
use craft\commerce\models\payments\BasePaymentForm;
use craft\commerce\models\Transaction;
use craft\commerce\base\RequestResponseInterface;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_AFTER_PROCESS_PAYMENT,
    function(ProcessPaymentEvent $event) {
        // @var Order $order
        $order = $event->order;
        // @var BasePaymentForm $form
        $form = $event->form;
        // @var Transaction $transaction
        $transaction = $event->transaction;
        // @var RequestResponseInterface $response
        $response = $event->response;

        // Let the accounting department know an order transaction went through
        // ...
    }
);
```



---



### EVENT_AFTER_REFUND_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered after a transaction is refunded.

```php
use craft\commerce\events\RefundTransactionEvent;
use craft\commerce\services\Payments;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_AFTER_REFUND_TRANSACTION,
    function(RefundTransactionEvent $event) {
        // @var float $amount
        $amount = $event->amount;

        // Do something else if the refund amount’s >50% of the transaction
        // ...
    }
);
```



---



### EVENT_BEFORE_CAPTURE_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered before a payment transaction is captured.

```php
use craft\commerce\events\TransactionEvent;
use craft\commerce\services\Payments;
use craft\commerce\models\Transaction;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_BEFORE_CAPTURE_TRANSACTION,
    function(TransactionEvent $event) {
        // @var Transaction $transaction
        $transaction = $event->transaction;

        // Check that shipment’s ready before capturing
        // ...
    }
);
```



---



### EVENT_BEFORE_PROCESS_PAYMENT



Type

:   [craft\commerce\events\ProcessPaymentEvent](craft-commerce-events-processpaymentevent.md)



The event that is triggered before a payment is processed.

You may set the `isValid` property to `false` on the event to prevent the payment from being processed.

```php
use craft\commerce\events\ProcessPaymentEvent;
use craft\commerce\services\Payments;
use craft\commerce\elements\Order;
use craft\commerce\models\payments\BasePaymentForm;
use craft\commerce\models\Transaction;
use craft\commerce\base\RequestResponseInterface;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_BEFORE_PROCESS_PAYMENT,
    function(ProcessPaymentEvent $event) {
        // @var Order $order
        $order = $event->order;
        // @var BasePaymentForm $form
        $form = $event->form;
        // @var Transaction $transaction
        $transaction = $event->transaction;
        // @var RequestResponseInterface $response
        $response = $event->response;

        // Check some business rules to see whether the transaction is allowed
        // ...
    }
);
```



---



### EVENT_BEFORE_REFUND_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered before a transaction is refunded.

```php
use craft\commerce\events\RefundTransactionEvent;
use craft\commerce\services\Payments;
use yii\base\Event;

Event::on(
    Payments::class,
    Payments::EVENT_BEFORE_REFUND_TRANSACTION,
    function(RefundTransactionEvent $event) {
        // @var float $amount
        $amount = $event->amount;

        // Do something else if the refund amount’s >50% of the transaction
        // ...
    }
);
```



---




