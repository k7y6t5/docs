---
title: craft\commerce\services\Customers
code:
  - php
  - twig
---

# Customers

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Customers](craft-commerce-services-customers.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Customer service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allCustomers](craft-commerce-services-customers.md#allcustomers)                                                          | [craft\commerce\models\Customer](craft-commerce-models-customer.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [customer](craft-commerce-services-customers.md#customer)                                                                  | [craft\commerce\models\Customer](craft-commerce-models-customer.md)
| [customerId](craft-commerce-services-customers.md#customerid)                                                              | [integer](http://php.net/language.types.integer)
| [customersQuery](craft-commerce-services-customers.md#customersquery)                                                      | [craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html)
| [userGroupIdsForUser](craft-commerce-services-customers.md#usergroupidsforuser)                                            | [array](http://php.net/language.types.array)

### `allCustomers`



Type

:   [craft\commerce\models\Customer](craft-commerce-models-customer.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)



### `customer`



Type

:   [craft\commerce\models\Customer](craft-commerce-models-customer.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)



### `customerId`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)



### `customersQuery`



Type

:   [craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html)

Access

:   Read-only

Since

:   3.1







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)



### `userGroupIdsForUser`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php)







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
| [_createUserFromOrder()](craft-commerce-services-customers.md#method-createuserfromorder)                                                   |
| [addEditUserCustomerInfoTab()](craft-commerce-services-customers.md#method-addeditusercustomerinfotab)                                      |
| [addEditUserCustomerInfoTabContent()](craft-commerce-services-customers.md#method-addeditusercustomerinfotabcontent)                        | Add customer info to the Edit User page in the CP
| [afterSaveUserHandler()](craft-commerce-services-customers.md#method-aftersaveuserhandler)                                                  |
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [consolidateGuestOrdersByEmail()](craft-commerce-services-customers.md#method-consolidateguestordersbyemail)                                | Consolidate all guest orders for this email address to use one customer record.
| [consolidateOrdersToUser()](craft-commerce-services-customers.md#method-consolidateorderstouser)                                            | Assigns guest orders to a user.
| [deleteCustomer()](craft-commerce-services-customers.md#method-deletecustomer)                                                              | Delete a customer.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [forgetCustomer()](craft-commerce-services-customers.md#method-forgetcustomer)                                                              | Forgets a Customer by deleting the customer from session and request.
| [getAddressIds()](craft-commerce-services-customers.md#method-getaddressids)                                                                | Get all address IDs for a customer by its ID.
| [getAllCustomers()](craft-commerce-services-customers.md#method-getallcustomers)                                                            | Get all customers.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCustomer()](craft-commerce-services-customers.md#method-getcustomer)                                                                    | Get the current customer by the current customer in session, or creates one if none exists.
| [getCustomerById()](craft-commerce-services-customers.md#method-getcustomerbyid)                                                            | Get a customer by its ID.
| [getCustomerByUserId()](craft-commerce-services-customers.md#method-getcustomerbyuserid)                                                    | Get a customer by user ID. Returns null, if it doesn't exist.
| [getCustomerId()](craft-commerce-services-customers.md#method-getcustomerid)                                                                | Id of current customer record. Guaranteed not null
| [getCustomersQuery()](craft-commerce-services-customers.md#method-getcustomersquery)                                                        | Retrieve customer query with the option to specify a search term
| [getUserGroupIdsForUser()](craft-commerce-services-customers.md#method-getusergroupidsforuser)                                              | Returns the user groups of the user param but defaults to the current user
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [loginHandler()](craft-commerce-services-customers.md#method-loginhandler)                                                                  | When a user logs in, consolidate all his/her orders.
| [logoutHandler()](craft-commerce-services-customers.md#method-logouthandler)                                                                | Handle the user logout.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [orderCompleteHandler()](craft-commerce-services-customers.md#method-ordercompletehandler)                                                  | Sets the last used addresses on the customer on order completion.
| [purgeOrphanedCustomers()](craft-commerce-services-customers.md#method-purgeorphanedcustomers)                                              | Deletes any customer record not related to a user or a cart.
| [saveAddress()](craft-commerce-services-customers.md#method-saveaddress)                                                                    | Associates an address with the saved customer, and saves the address.
| [saveCustomer()](craft-commerce-services-customers.md#method-savecustomer)                                                                  | Save a customer by its model.
| [saveUserHandler()](craft-commerce-services-customers.md#method-saveuserhandler)                                                            | Handle a saved user.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `_createUserFromOrder()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L738-L811)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))

#### Returns

`void`

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)


### `addEditUserCustomerInfoTab()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L817-L826)


#### Arguments

- `$context` ([array](http://php.net/language.types.array))




### `addEditUserCustomerInfoTabContent()`



Since

:   2.2



Add customer info to the Edit User page in the CP




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L839-L855)


#### Arguments

- `$context` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- `\Twig\Error\LoaderError`
- `\Twig\Error\RuntimeError`
- `\Twig\Error\SyntaxError`
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `afterSaveUserHandler()`










[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L861-L893)


#### Arguments

- `$event` ([craft\events\ModelEvent](https://docs.craftcms.com/api/v3/craft-events-modelevent.html))


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `consolidateGuestOrdersByEmail()`



Since

:   3.1.4



Consolidate all guest orders for this email address to use one customer record.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L569-L619)


#### Arguments

- `$email` ([string](http://php.net/language.types.string))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md), [null](http://php.net/language.types.null))


#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `consolidateOrdersToUser()`





Assigns guest orders to a user.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L321-L372)


#### Arguments

- `$user` ([craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html))
- `$orders`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCustomer()`





Delete a customer.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L249-L258)


#### Arguments

- `$customer` ([craft\commerce\models\Customer](craft-commerce-models-customer.md))

#### Returns

`mixed`



### `forgetCustomer()`





Forgets a Customer by deleting the customer from session and request.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L304-L312)






### `getAddressIds()`





Get all address IDs for a customer by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L228-L241)


#### Arguments

- `$customerId`

#### Returns

[array](http://php.net/language.types.array)



### `getAllCustomers()`





Get all customers.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L61-L73)



#### Returns

[craft\commerce\models\Customer](craft-commerce-models-customer.md)[]



### `getCustomer()`





Get the current customer by the current customer in session, or creates one if none exists.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L95-L138)



#### Returns

[craft\commerce\models\Customer](craft-commerce-models-customer.md)



### `getCustomerById()`





Get a customer by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L81-L88)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)



### `getCustomerByUserId()`





Get a customer by user ID. Returns null, if it doesn't exist.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L380-L387)


#### Arguments

- `$id`

#### Returns

[craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)



### `getCustomerId()`

::: danger DEPRECATED
Deprecated since version 3.x: 
:::




Id of current customer record. Guaranteed not null




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L450-L455)



#### Returns

[integer](http://php.net/language.types.integer)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getCustomersQuery()`



Since

:   3.1



Retrieve customer query with the option to specify a search term




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L480-L559)


#### Arguments

- `$search` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html)



### `getUserGroupIdsForUser()`





Returns the user groups of the user param but defaults to the current user




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L395-L407)


#### Arguments

- `$user` ([craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `loginHandler()`





When a user logs in, consolidate all his/her orders.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L287-L299)


#### Arguments

- `$event` ([yii\web\UserEvent](https://www.yiiframework.com/doc/api/2.0/yii-web-userevent))




### `logoutHandler()`





Handle the user logout.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L414-L419)


#### Arguments

- `$event` ([yii\web\UserEvent](https://www.yiiframework.com/doc/api/2.0/yii-web-userevent))




### `orderCompleteHandler()`





Sets the last used addresses on the customer on order completion.

Duplicates the address records used for the order so they are independent to the
customers address book.


[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L428-L441)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))




### `purgeOrphanedCustomers()`



Since

:   2.2



Deletes any customer record not related to a user or a cart.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L265-L280)






### `saveAddress()`





Associates an address with the saved customer, and saves the address.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L149-L175)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md))
- `$customer` ([craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)) – Defaults to the current customer in session if none is passing in.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this address before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `saveCustomer()`





Save a customer by its model.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L185-L220)


#### Arguments

- `$customer` ([craft\commerce\models\Customer](craft-commerce-models-customer.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Should we validate this customer before saving.

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `saveUserHandler()`

::: danger DEPRECATED
Deprecated since version 3.x: 
:::




Handle a saved user.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Customers.php#L464-L471)


#### Arguments

- `$event` ([yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event))


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)






## Constants

| Constant           | Description
| ------------------ | -----------
| `SESSION_CUSTOMER` |



