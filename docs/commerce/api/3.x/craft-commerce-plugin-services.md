---
title: craft\commerce\plugin\Services
code:
  - php
  - twig
---

# Services

Type

:   Trait

Namespace

:   craft\commerce\plugin

Implemented by

:   [craft\commerce\Plugin](craft-commerce-plugin.md)

Since

:   2.0



Trait Services





[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php)






## Public Methods

| Method                                                                                            | Description
| ------------------------------------------------------------------------------------------------- | --------------------------------------
| [getAddresses()](craft-commerce-plugin-services.md#method-getaddresses)                           | Returns the address service
| [getCarts()](craft-commerce-plugin-services.md#method-getcarts)                                   | Returns the cart service
| [getCountries()](craft-commerce-plugin-services.md#method-getcountries)                           | Returns the countries service
| [getCurrencies()](craft-commerce-plugin-services.md#method-getcurrencies)                         | Returns the currencies service
| [getCustomers()](craft-commerce-plugin-services.md#method-getcustomers)                           | Returns the customers service
| [getDiscounts()](craft-commerce-plugin-services.md#method-getdiscounts)                           | Returns the discounts service
| [getEmails()](craft-commerce-plugin-services.md#method-getemails)                                 | Returns the emails service
| [getFormulas()](craft-commerce-plugin-services.md#method-getformulas)                             | Returns the formulas service
| [getGateways()](craft-commerce-plugin-services.md#method-getgateways)                             | Returns the gateways service
| [getLineItemStatuses()](craft-commerce-plugin-services.md#method-getlineitemstatuses)             | Returns the lineItems statuses service
| [getLineItems()](craft-commerce-plugin-services.md#method-getlineitems)                           | Returns the lineItems service
| [getOrderAdjustments()](craft-commerce-plugin-services.md#method-getorderadjustments)             | Returns the orderAdjustments service
| [getOrderHistories()](craft-commerce-plugin-services.md#method-getorderhistories)                 | Returns the orderHistories service
| [getOrderStatuses()](craft-commerce-plugin-services.md#method-getorderstatuses)                   | Returns the orderStatuses service
| [getOrders()](craft-commerce-plugin-services.md#method-getorders)                                 | Returns the orders service
| [getPaymentCurrencies()](craft-commerce-plugin-services.md#method-getpaymentcurrencies)           | Returns the paymentCurrencies service
| [getPaymentSources()](craft-commerce-plugin-services.md#method-getpaymentsources)                 | Returns the payment sources service
| [getPayments()](craft-commerce-plugin-services.md#method-getpayments)                             | Returns the payments service
| [getPdf()](craft-commerce-plugin-services.md#method-getpdf)                                       | Returns the PDF service
| [getPlans()](craft-commerce-plugin-services.md#method-getplans)                                   | Returns the payment sources service
| [getProductTypes()](craft-commerce-plugin-services.md#method-getproducttypes)                     | Returns the productTypes service
| [getProducts()](craft-commerce-plugin-services.md#method-getproducts)                             | Returns the products service
| [getPurchasables()](craft-commerce-plugin-services.md#method-getpurchasables)                     | Returns the purchasables service
| [getSales()](craft-commerce-plugin-services.md#method-getsales)                                   | Returns the sales service
| [getShippingCategories()](craft-commerce-plugin-services.md#method-getshippingcategories)         | Returns the shippingCategories service
| [getShippingMethods()](craft-commerce-plugin-services.md#method-getshippingmethods)               | Returns the shippingMethods service
| [getShippingRuleCategories()](craft-commerce-plugin-services.md#method-getshippingrulecategories) | Returns the shippingRules service
| [getShippingRules()](craft-commerce-plugin-services.md#method-getshippingrules)                   | Returns the shippingRules service
| [getShippingZones()](craft-commerce-plugin-services.md#method-getshippingzones)                   | Returns the shippingZones service
| [getStates()](craft-commerce-plugin-services.md#method-getstates)                                 | Returns the states service
| [getSubscriptions()](craft-commerce-plugin-services.md#method-getsubscriptions)                   | Returns the subscriptions service
| [getTaxCategories()](craft-commerce-plugin-services.md#method-gettaxcategories)                   | Returns the taxCategories service
| [getTaxRates()](craft-commerce-plugin-services.md#method-gettaxrates)                             | Returns the taxRates service
| [getTaxZones()](craft-commerce-plugin-services.md#method-gettaxzones)                             | Returns the taxZones service
| [getTaxes()](craft-commerce-plugin-services.md#method-gettaxes)                                   | Returns the taxes service
| [getTransactions()](craft-commerce-plugin-services.md#method-gettransactions)                     | Returns the transactions service
| [getVariants()](craft-commerce-plugin-services.md#method-getvariants)                             | Returns the variants service
| [getWebhooks()](craft-commerce-plugin-services.md#method-getwebhooks)                             | Returns the webhooks service

### `getAddresses()`





Returns the address service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L97-L100)



#### Returns

[craft\commerce\services\Addresses](craft-commerce-services-addresses.md) – The address service



### `getCarts()`





Returns the cart service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L107-L110)



#### Returns

[craft\commerce\services\Carts](craft-commerce-services-carts.md) – The cart service



### `getCountries()`





Returns the countries service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L117-L120)



#### Returns

[craft\commerce\services\Countries](craft-commerce-services-countries.md) – The countries service



### `getCurrencies()`





Returns the currencies service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L127-L130)



#### Returns

[craft\commerce\services\Currencies](craft-commerce-services-currencies.md) – The currencies service



### `getCustomers()`





Returns the customers service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L137-L140)



#### Returns

[craft\commerce\services\Customers](craft-commerce-services-customers.md) – The customers service



### `getDiscounts()`





Returns the discounts service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L147-L150)



#### Returns

[craft\commerce\services\Discounts](craft-commerce-services-discounts.md) – The discounts service



### `getEmails()`





Returns the emails service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L157-L160)



#### Returns

[craft\commerce\services\Emails](craft-commerce-services-emails.md) – The emails service



### `getFormulas()`



Since

:   2.2



Returns the formulas service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L168-L171)



#### Returns

[craft\commerce\services\Formulas](craft-commerce-services-formulas.md) – The formulas service



### `getGateways()`





Returns the gateways service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L178-L181)



#### Returns

[craft\commerce\services\Gateways](craft-commerce-services-gateways.md) – The gateways service



### `getLineItemStatuses()`





Returns the lineItems statuses service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L198-L201)



#### Returns

[craft\commerce\services\LineItemStatuses](craft-commerce-services-lineitemstatuses.md) – The lineItems service



### `getLineItems()`





Returns the lineItems service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L188-L191)



#### Returns

[craft\commerce\services\LineItems](craft-commerce-services-lineitems.md) – The lineItems service



### `getOrderAdjustments()`





Returns the orderAdjustments service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L208-L211)



#### Returns

[craft\commerce\services\OrderAdjustments](craft-commerce-services-orderadjustments.md) – The orderAdjustments service



### `getOrderHistories()`





Returns the orderHistories service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L218-L221)



#### Returns

[craft\commerce\services\OrderHistories](craft-commerce-services-orderhistories.md) – The orderHistories service



### `getOrderStatuses()`





Returns the orderStatuses service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L238-L241)



#### Returns

[craft\commerce\services\OrderStatuses](craft-commerce-services-orderstatuses.md) – The orderStatuses service



### `getOrders()`





Returns the orders service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L228-L231)



#### Returns

[craft\commerce\services\Orders](craft-commerce-services-orders.md) – The orders service



### `getPaymentCurrencies()`





Returns the paymentCurrencies service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L248-L251)



#### Returns

[craft\commerce\services\PaymentCurrencies](craft-commerce-services-paymentcurrencies.md) – The paymentCurrencies service



### `getPaymentSources()`





Returns the payment sources service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L268-L271)



#### Returns

[craft\commerce\services\PaymentSources](craft-commerce-services-paymentsources.md) – The payment sources service



### `getPayments()`





Returns the payments service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L258-L261)



#### Returns

[craft\commerce\services\Payments](craft-commerce-services-payments.md) – The payments service



### `getPdf()`





Returns the PDF service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L278-L281)



#### Returns

[craft\commerce\services\Pdf](craft-commerce-services-pdf.md) – The PDF service



### `getPlans()`





Returns the payment sources service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L288-L291)



#### Returns

[craft\commerce\services\Plans](craft-commerce-services-plans.md) – The subscription plans service



### `getProductTypes()`





Returns the productTypes service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L308-L311)



#### Returns

[craft\commerce\services\ProductTypes](craft-commerce-services-producttypes.md) – The productTypes service



### `getProducts()`





Returns the products service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L298-L301)



#### Returns

[craft\commerce\services\Products](craft-commerce-services-products.md) – The products service



### `getPurchasables()`





Returns the purchasables service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L318-L321)



#### Returns

[craft\commerce\services\Purchasables](craft-commerce-services-purchasables.md) – The purchasables service



### `getSales()`





Returns the sales service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L328-L331)



#### Returns

[craft\commerce\services\Sales](craft-commerce-services-sales.md) – The sales service



### `getShippingCategories()`





Returns the shippingCategories service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L368-L371)



#### Returns

[craft\commerce\services\ShippingCategories](craft-commerce-services-shippingcategories.md) – The shippingCategories service



### `getShippingMethods()`





Returns the shippingMethods service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L338-L341)



#### Returns

[craft\commerce\services\ShippingMethods](craft-commerce-services-shippingmethods.md) – The shippingMethods service



### `getShippingRuleCategories()`





Returns the shippingRules service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L358-L361)



#### Returns

[craft\commerce\services\ShippingRuleCategories](craft-commerce-services-shippingrulecategories.md) – The shippingRuleCategories service



### `getShippingRules()`





Returns the shippingRules service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L348-L351)



#### Returns

[craft\commerce\services\ShippingRules](craft-commerce-services-shippingrules.md) – The shippingRules service



### `getShippingZones()`





Returns the shippingZones service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L378-L381)



#### Returns

[craft\commerce\services\ShippingZones](craft-commerce-services-shippingzones.md) – The shippingZones service



### `getStates()`





Returns the states service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L388-L391)



#### Returns

[craft\commerce\services\States](craft-commerce-services-states.md) – The states service



### `getSubscriptions()`





Returns the subscriptions service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L398-L401)



#### Returns

[craft\commerce\services\Subscriptions](craft-commerce-services-subscriptions.md) – The subscriptions service



### `getTaxCategories()`





Returns the taxCategories service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L418-L421)



#### Returns

[craft\commerce\services\TaxCategories](craft-commerce-services-taxcategories.md) – The taxCategories service



### `getTaxRates()`





Returns the taxRates service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L428-L431)



#### Returns

[craft\commerce\services\TaxRates](craft-commerce-services-taxrates.md) – The taxRates service



### `getTaxZones()`





Returns the taxZones service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L438-L441)



#### Returns

[craft\commerce\services\TaxZones](craft-commerce-services-taxzones.md) – The taxZones service



### `getTaxes()`





Returns the taxes service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L408-L411)



#### Returns

[craft\commerce\services\Taxes](craft-commerce-services-taxes.md) – The taxes service



### `getTransactions()`





Returns the transactions service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L448-L451)



#### Returns

[craft\commerce\services\Transactions](craft-commerce-services-transactions.md) – The transactions service



### `getVariants()`





Returns the variants service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L458-L461)



#### Returns

[craft\commerce\services\Variants](craft-commerce-services-variants.md) – The variants service



### `getWebhooks()`



Since

:   3.1.9



Returns the webhooks service




[View source](https://github.com/craftcms/commerce/blob/master/src/plugin/Services.php#L469-L472)



#### Returns

[craft\commerce\services\Webhooks](craft-commerce-services-webhooks.md) – The variants service









