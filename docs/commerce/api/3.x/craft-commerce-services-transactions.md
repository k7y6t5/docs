---
title: craft\commerce\services\Transactions
code:
  - php
  - twig
---

# Transactions

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Transactions](craft-commerce-services-transactions.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Transaction service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php)


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
| [canCaptureTransaction()](craft-commerce-services-transactions.md#method-cancapturetransaction)                                             | Returns true if a specific transaction can be refunded.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canRefundTransaction()](craft-commerce-services-transactions.md#method-canrefundtransaction)                                               | Returns true if a specific transaction can be refunded.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createTransaction()](craft-commerce-services-transactions.md#method-createtransaction)                                                     | Create a transaction either from an order or a parent transaction. At least one must be present.
| [deleteTransaction()](craft-commerce-services-transactions.md#method-deletetransaction)                                                     | Delete a transaction.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllTopLevelTransactionsByOrderId()](craft-commerce-services-transactions.md#method-getalltopleveltransactionsbyorderid)                 |
| [getAllTransactionsByOrderId()](craft-commerce-services-transactions.md#method-getalltransactionsbyorderid)                                 | Returns all transactions for an order, per the order's ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getChildrenByTransactionId()](craft-commerce-services-transactions.md#method-getchildrenbytransactionid)                                   | Get all children transactions, per a parent transaction's ID.
| [getTransactionByHash()](craft-commerce-services-transactions.md#method-gettransactionbyhash)                                               | Get a transaction by its hash.
| [getTransactionById()](craft-commerce-services-transactions.md#method-gettransactionbyid)                                                   | Get a transaction by its ID.
| [getTransactionByReferenceAndStatus()](craft-commerce-services-transactions.md#method-gettransactionbyreferenceandstatus)                   | Get a transaction by its reference and status.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [isTransactionSuccessful()](craft-commerce-services-transactions.md#method-istransactionsuccessful)                                         | Returns true if a transaction or a direct child of the transaction is successful.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [refundableAmountForTransaction()](craft-commerce-services-transactions.md#method-refundableamountfortransaction)                           | Return the refundable amount for a transaction.
| [saveTransaction()](craft-commerce-services-transactions.md#method-savetransaction)                                                         | Save a transaction.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `canCaptureTransaction()`





Returns true if a specific transaction can be refunded.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L86-L112)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[boolean](http://php.net/language.types.boolean)



### `canRefundTransaction()`





Returns true if a specific transaction can be refunded.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L120-L142)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction

#### Returns

[boolean](http://php.net/language.types.boolean)



### `createTransaction()`





Create a transaction either from an order or a parent transaction. At least one must be present.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L174-L230)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md)) – Order that the transaction is a part of. Ignored, if `$parentTransaction` is specified.
- `$parentTransaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – Parent transaction, if this transaction is a child. Required, if `$order` is not specified.
- `$typeOverride` ([string](http://php.net/language.types.string)) – The type of transaction. If set, this overrides the type of the parent transaction, or sets the type when no parentTransaction is passed.

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)

#### Throws

- [craft\commerce\errors\TransactionException](craft-commerce-errors-transactionexception.md)\
  if neither `$order` or `$parentTransaction` is specified.


### `deleteTransaction()`





Delete a transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L240-L249)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction to delete

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)
- [yii\db\StaleObjectException](https://www.yiiframework.com/doc/api/2.0/yii-db-staleobjectexception)


### `getAllTopLevelTransactionsByOrderId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L255-L267)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer)) – The order's ID

#### Returns

[array](http://php.net/language.types.array), [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]



### `getAllTransactionsByOrderId()`





Returns all transactions for an order, per the order's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L275-L288)


#### Arguments

- `$orderId` ([integer](http://php.net/language.types.integer)) – The order's ID

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]



### `getChildrenByTransactionId()`





Get all children transactions, per a parent transaction's ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L296-L309)


#### Arguments

- `$transactionId` ([integer](http://php.net/language.types.integer)) – The parent transaction's ID

#### Returns

[array](http://php.net/language.types.array)



### `getTransactionByHash()`





Get a transaction by its hash.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L317-L324)


#### Arguments

- `$hash` ([string](http://php.net/language.types.string)) – The hash of transaction

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)



### `getTransactionById()`





Get a transaction by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L348-L355)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The ID of transaction

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)



### `getTransactionByReferenceAndStatus()`





Get a transaction by its reference and status.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L333-L340)


#### Arguments

- `$reference` ([string](http://php.net/language.types.string)) – The transaction reference
- `$status` ([string](http://php.net/language.types.string)) – The transaction status

#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)



### `isTransactionSuccessful()`





Returns true if a transaction or a direct child of the transaction is successful.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L363-L376)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `refundableAmountForTransaction()`





Return the refundable amount for a transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L150-L163)


#### Arguments

- `$transaction` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md))

#### Returns

[float](http://php.net/language.types.float)



### `saveTransaction()`





Save a transaction.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Transactions.php#L386-L443)


#### Arguments

- `$model` ([craft\commerce\models\Transaction](craft-commerce-models-transaction.md)) – The transaction model
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this transaction before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\commerce\errors\TransactionException](craft-commerce-errors-transactionexception.md)\
  if an attempt is made to modify an existing transaction








## Events

### EVENT_AFTER_CREATE_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered after a transaction has been created.

```php
use craft\commerce\events\TransactionEvent;
use craft\commerce\services\Transactions;
use craft\commerce\models\Transaction;
use yii\base\Event;

Event::on(
    Transactions::class,
    Transactions::EVENT_AFTER_CREATE_TRANSACTION,
    function(TransactionEvent $event) {
        // @var Transaction $transaction
        $transaction = $event->transaction;

        // Run custom logic depending on the transaction type
        // ...
    }
);
```



---



### EVENT_AFTER_SAVE_TRANSACTION



Type

:   [craft\commerce\events\TransactionEvent](craft-commerce-events-transactionevent.md)



The event that is triggered after a transaction has been saved.

```php
use craft\commerce\events\TransactionEvent;
use craft\commerce\services\Transactions;
use craft\commerce\models\Transaction;
use yii\base\Event;

Event::on(
    Transactions::class,
    Transactions::EVENT_AFTER_SAVE_TRANSACTION,
    function(TransactionEvent $event) {
        // @var Transaction $transaction
        $transaction = $event->transaction;
        
        // Run custom logic for failed transactions
        // ...
    }
);
```



---




