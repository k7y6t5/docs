---
title: craft\commerce\elements\Order
code:
  - php
  - twig
---

# Order

Type

:   Class

Namespace

:   craft\commerce\elements

Inherits

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md) &raquo;
[craft\base\Element](https://docs.craftcms.com/api/v3/craft-base-element.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\ElementTrait](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html), [craft\commerce\elements\traits\OrderDeprecatedTrait](craft-commerce-elements-traits-orderdeprecatedtrait.md), [craft\commerce\elements\traits\OrderElementTrait](craft-commerce-elements-traits-orderelementtrait.md), [craft\commerce\elements\traits\OrderValidatorsTrait](craft-commerce-elements-traits-ordervalidatorstrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Order or Cart model.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)


## Public Properties

| Property                                                                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                                                     | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [adjustmentSubtotal](craft-commerce-elements-order.md#adjustmentsubtotal)                                                                                                            | [float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)
| [adjustments](craft-commerce-elements-order.md#adjustments)                                                                                                                          | [craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]
| [adjustmentsTotal](craft-commerce-elements-order.md#adjustmentstotal)                                                                                                                | [float](http://php.net/language.types.float)
| [ancestors](https://docs.craftcms.com/api/v3/craft-base-element.html#ancestors "Defined by craft\base\Element")                                                                      | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [archived](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#archived "Defined by craft\base\ElementTrait")                                                              | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                                                 | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [availableShippingMethodOptions](craft-commerce-elements-order.md#availableshippingmethodoptions)                                                                                    | [craft\commerce\models\ShippingMethodOption](craft-commerce-models-shippingmethodoption.md)[]
| [availableShippingMethods](craft-commerce-elements-traits-orderdeprecatedtrait.md#availableshippingmethods "Defined by craft\commerce\elements\traits\OrderDeprecatedTrait")         | [craft\commerce\base\ShippingMethodInterface](craft-commerce-base-shippingmethodinterface.md)[]
| [awaitingFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#awaitingfieldvalues "Defined by craft\base\ElementTrait")                                        | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [billingAddress](craft-commerce-elements-order.md#billingaddress)                                                                                                                    | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [billingAddressId](craft-commerce-elements-order.md#billingaddressid)                                                                                                                | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Billing address ID
| [billingSameAsShipping](craft-commerce-elements-order.md#billingsameasshipping)                                                                                                      | [boolean](http://php.net/language.types.boolean) – Make this the shipping address the same as the billing address
| [cancelUrl](craft-commerce-elements-order.md#cancelurl)                                                                                                                              | [string](http://php.net/language.types.string) – Cancel URL
| [children](https://docs.craftcms.com/api/v3/craft-base-element.html#children "Defined by craft\base\Element")                                                                        | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [contentId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#contentid "Defined by craft\base\ElementTrait")                                                            | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](https://docs.craftcms.com/api/v3/craft-base-element.html#contenttable "Defined by craft\base\Element")                                                                | [string](http://php.net/language.types.string)
| [couponCode](craft-commerce-elements-order.md#couponcode)                                                                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Coupon Code
| [cpEditUrl](craft-commerce-elements-order.md#cpediturl)                                                                                                                              | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currency](craft-commerce-elements-order.md#currency)                                                                                                                                | [string](http://php.net/language.types.string) – Currency
| [currentRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#currentrevision "Defined by craft\base\Element")                                                          | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [customer](craft-commerce-elements-order.md#customer)                                                                                                                                | [craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)
| [customerId](craft-commerce-elements-order.md#customerid)                                                                                                                            | [integer](http://php.net/language.types.integer) – Customer ID
| [customerLinkHtml](craft-commerce-elements-order.md#customerlinkhtml)                                                                                                                | [string](http://php.net/language.types.string)
| [dateAuthorized](craft-commerce-elements-order.md#dateauthorized)                                                                                                                    | [DateTime](http://php.net/class.datetime) – Date authorized
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datecreated "Defined by craft\base\ElementTrait")                                                        | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datedeleted "Defined by craft\base\ElementTrait")                                                        | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateOrdered](craft-commerce-elements-order.md#dateordered)                                                                                                                          | [DateTime](http://php.net/class.datetime) – Date ordered
| [datePaid](craft-commerce-elements-order.md#datepaid)                                                                                                                                | [DateTime](http://php.net/class.datetime) – Date paid
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#dateupdated "Defined by craft\base\ElementTrait")                                                        | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [descendants](https://docs.craftcms.com/api/v3/craft-base-element.html#descendants "Defined by craft\base\Element")                                                                  | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [dirtyAttributes](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyattributes "Defined by craft\base\Element")                                                          | [string](http://php.net/language.types.string)[]
| [dirtyFields](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyfields "Defined by craft\base\Element")                                                                  | [string](http://php.net/language.types.string)[]
| [draftId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#draftid "Defined by craft\base\ElementTrait")                                                                | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#duplicateof "Defined by craft\base\ElementTrait")                                                        | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](https://docs.craftcms.com/api/v3/craft-base-element.html#editorhtml "Defined by craft\base\Element")                                                                    | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [email](craft-commerce-elements-order.md#email)                                                                                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [enabled](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#enabled "Defined by craft\base\ElementTrait")                                                                | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](https://docs.craftcms.com/api/v3/craft-base-element.html#enabledforsite "Defined by craft\base\Element")                                                            | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                                                         | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [estimatedBillingAddress](craft-commerce-elements-order.md#estimatedbillingaddress)                                                                                                  | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [estimatedBillingAddressId](craft-commerce-elements-order.md#estimatedbillingaddressid)                                                                                              | [integer](http://php.net/language.types.integer) – Estimated Billing address ID
| [estimatedBillingSameAsShipping](craft-commerce-elements-order.md#estimatedbillingsameasshipping)                                                                                    | [boolean](http://php.net/language.types.boolean) – Whether estimated billing address should be set to the same address as estimated shipping
| [estimatedShippingAddress](craft-commerce-elements-order.md#estimatedshippingaddress)                                                                                                | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [estimatedShippingAddressId](craft-commerce-elements-order.md#estimatedshippingaddressid)                                                                                            | [integer](http://php.net/language.types.integer) – Estimated Shipping address ID
| [fieldColumnPrefix](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcolumnprefix "Defined by craft\base\Element")                                                      | [string](http://php.net/language.types.string)
| [fieldContext](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcontext "Defined by craft\base\Element")                                                                | [string](http://php.net/language.types.string)
| [fieldLayout](craft-commerce-elements-traits-orderelementtrait.md#fieldlayout "Defined by craft\commerce\elements\traits\OrderElementTrait")                                         | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)
| [fieldLayoutId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#fieldlayoutid "Defined by craft\base\ElementTrait")                                                    | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldparamnamespace "Defined by craft\base\Element")                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldvalues "Defined by craft\base\Element")                                                                  | [array](http://php.net/language.types.array) – The field values (handle => value)
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                                               | [array](http://php.net/language.types.array) – The first errors.
| [gateway](craft-commerce-elements-order.md#gateway)                                                                                                                                  | [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [null](http://php.net/language.types.null)
| [gatewayId](craft-commerce-elements-order.md#gatewayid)                                                                                                                              | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Gateway ID
| [gqlTypeName](https://docs.craftcms.com/api/v3/craft-base-element.html#gqltypename "Defined by craft\base\Element")                                                                  | [string](http://php.net/language.types.string)
| [hardDelete](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#harddelete "Defined by craft\base\ElementTrait")                                                          | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#hasdescendants "Defined by craft\base\Element")                                                            | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](https://docs.craftcms.com/api/v3/craft-base-element.html#hasfreshcontent "Defined by craft\base\Element")                                                          | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [histories](craft-commerce-elements-order.md#histories)                                                                                                                              | [craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md)[]
| [id](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#id "Defined by craft\base\ElementTrait")                                                                          | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isActiveCart](craft-commerce-elements-order.md#isactivecart)                                                                                                                        | [boolean](http://php.net/language.types.boolean)
| [isCompleted](craft-commerce-elements-order.md#iscompleted)                                                                                                                          | [boolean](http://php.net/language.types.boolean) – Is completed
| [isDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isdraft "Defined by craft\base\Element")                                                                          | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-commerce-elements-order.md#iseditable)                                                                                                                            | [boolean](http://php.net/language.types.boolean)
| [isEmpty](craft-commerce-elements-order.md#isempty)                                                                                                                                  | [boolean](http://php.net/language.types.boolean)
| [isHomepage](https://docs.craftcms.com/api/v3/craft-base-element.html#ishomepage "Defined by craft\base\Element")                                                                    | [boolean](http://php.net/language.types.boolean)
| [isPaid](craft-commerce-elements-order.md#ispaid)                                                                                                                                    | [boolean](http://php.net/language.types.boolean)
| [isRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#isrevision "Defined by craft\base\Element")                                                                    | [boolean](http://php.net/language.types.boolean)
| [isUnpaid](craft-commerce-elements-order.md#isunpaid)                                                                                                                                | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isunsaveddraft "Defined by craft\base\Element")                                                            | [boolean](http://php.net/language.types.boolean)
| [itemSubtotal](craft-commerce-elements-order.md#itemsubtotal)                                                                                                                        | [float](http://php.net/language.types.float)
| [itemTotal](craft-commerce-elements-order.md#itemtotal)                                                                                                                              | [float](http://php.net/language.types.float)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                                                     | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [lastIp](craft-commerce-elements-order.md#lastip)                                                                                                                                    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Last IP address
| [lastTransaction](craft-commerce-elements-order.md#lasttransaction)                                                                                                                  | [craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)
| [level](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#level "Defined by craft\base\ElementTrait")                                                                    | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#lft "Defined by craft\base\ElementTrait")                                                                        | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [lineItems](craft-commerce-elements-order.md#lineitems)                                                                                                                              | [craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)[]
| [link](craft-commerce-elements-order.md#link)                                                                                                                                        | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [makePrimaryBillingAddress](craft-commerce-elements-order.md#makeprimarybillingaddress)                                                                                              | [boolean](http://php.net/language.types.boolean) – Make this the customer‘s primary billing address
| [makePrimaryShippingAddress](craft-commerce-elements-order.md#makeprimaryshippingaddress)                                                                                            | [boolean](http://php.net/language.types.boolean) – Make this the customer‘s primary shipping address
| [message](craft-commerce-elements-order.md#message)                                                                                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Message
| [nestedTransactions](craft-commerce-elements-order.md#nestedtransactions)                                                                                                            | [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]
| [newSiteIds](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#newsiteids "Defined by craft\base\ElementTrait")                                                          | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](https://docs.craftcms.com/api/v3/craft-base-element.html#next "Defined by craft\base\Element")                                                                                | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [nextSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#nextsibling "Defined by craft\base\Element")                                                                  | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [number](craft-commerce-elements-order.md#number)                                                                                                                                    | [string](http://php.net/language.types.string) – Number
| [orderAdjustments](craft-commerce-elements-order.md#orderadjustments)                                                                                                                | [array](http://php.net/language.types.array)
| [orderLanguage](craft-commerce-elements-order.md#orderlanguage)                                                                                                                      | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Order status ID
| [orderStatus](craft-commerce-elements-order.md#orderstatus)                                                                                                                          | [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)
| [orderStatusHtml](craft-commerce-elements-order.md#orderstatushtml)                                                                                                                  | [string](http://php.net/language.types.string)
| [orderStatusId](craft-commerce-elements-order.md#orderstatusid)                                                                                                                      | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Order status ID
| [origin](craft-commerce-elements-order.md#origin)                                                                                                                                    | [string](http://php.net/language.types.string) – Order origin
| [outstandingBalance](craft-commerce-elements-order.md#outstandingbalance)                                                                                                            | [float](http://php.net/language.types.float)
| [paidStatus](craft-commerce-elements-order.md#paidstatus)                                                                                                                            | [string](http://php.net/language.types.string)
| [paidStatusHtml](craft-commerce-elements-order.md#paidstatushtml)                                                                                                                    | [string](http://php.net/language.types.string)
| [parent](https://docs.craftcms.com/api/v3/craft-base-element.html#parent "Defined by craft\base\Element")                                                                            | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [paymentCurrency](craft-commerce-elements-order.md#paymentcurrency)                                                                                                                  | [string](http://php.net/language.types.string)
| [paymentSource](craft-commerce-elements-order.md#paymentsource)                                                                                                                      | [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null)
| [paymentSourceId](craft-commerce-elements-order.md#paymentsourceid)                                                                                                                  | [boolean](http://php.net/language.types.boolean) – Payment source ID
| [pdfUrl](craft-commerce-elements-order.md#pdfurl)                                                                                                                                    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The URL to the order’s PDF invoice, or null if the PDF template doesn’t exist
| [prev](https://docs.craftcms.com/api/v3/craft-base-element.html#prev "Defined by craft\base\Element")                                                                                | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prevSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#prevsibling "Defined by craft\base\Element")                                                                  | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [previewTargets](https://docs.craftcms.com/api/v3/craft-base-element.html#previewtargets "Defined by craft\base\Element")                                                            | [array](http://php.net/language.types.array)
| [previewing](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#previewing "Defined by craft\base\ElementTrait")                                                          | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [propagateAll](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagateall "Defined by craft\base\ElementTrait")                                                      | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagating "Defined by craft\base\ElementTrait")                                                        | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [recalculationMode](craft-commerce-elements-order.md#recalculationmode)                                                                                                              | [string](http://php.net/language.types.string)
| [ref](https://docs.craftcms.com/api/v3/craft-base-element.html#ref "Defined by craft\base\Element")                                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [reference](craft-commerce-elements-order.md#reference)                                                                                                                              | [string](http://php.net/language.types.string) – Reference
| [registerUserOnOrderComplete](craft-commerce-elements-order.md#registeruseronordercomplete)                                                                                          | [boolean](http://php.net/language.types.boolean) – Register user on order complete
| [resaving](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#resaving "Defined by craft\base\ElementTrait")                                                              | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [returnUrl](craft-commerce-elements-order.md#returnurl)                                                                                                                              | [string](http://php.net/language.types.string) – Return URL
| [revisionId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#revisionid "Defined by craft\base\ElementTrait")                                                          | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#rgt "Defined by craft\base\ElementTrait")                                                                        | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#root "Defined by craft\base\ElementTrait")                                                                      | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](https://docs.craftcms.com/api/v3/craft-base-element.html#route "Defined by craft\base\Element")                                                                              | `mixed` – The route that the request should use, or null if no special action should be taken
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                                                     | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#searchscore "Defined by craft\base\ElementTrait")                                                        | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search) parameter was used when querying for the element
| [serializedFieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#serializedfieldvalues "Defined by craft\base\Element")                                              | [array](http://php.net/language.types.array)
| [shippingAddress](craft-commerce-elements-order.md#shippingaddress)                                                                                                                  | [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)
| [shippingAddressId](craft-commerce-elements-order.md#shippingaddressid)                                                                                                              | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Shipping address ID
| [shippingMethod](craft-commerce-elements-order.md#shippingmethod)                                                                                                                    | [craft\commerce\models\ShippingMethod](craft-commerce-models-shippingmethod.md), [null](http://php.net/language.types.null)
| [shippingMethodHandle](craft-commerce-elements-order.md#shippingmethodhandle)                                                                                                        | [string](http://php.net/language.types.string) – Shipping Method Handle
| [shippingMethodId](craft-commerce-elements-order.md#shippingmethodid)                                                                                                                | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [shippingSameAsBilling](craft-commerce-elements-order.md#shippingsameasbilling)                                                                                                      | [boolean](http://php.net/language.types.boolean) – Make this the shipping address the same as the billing address
| [shortNumber](craft-commerce-elements-order.md#shortnumber)                                                                                                                          | [string](http://php.net/language.types.string)
| [shouldRecalculateAdjustments](craft-commerce-elements-traits-orderdeprecatedtrait.md#shouldrecalculateadjustments "Defined by craft\commerce\elements\traits\OrderDeprecatedTrait") | [boolean](http://php.net/language.types.boolean)
| [siblings](https://docs.craftcms.com/api/v3/craft-base-element.html#siblings "Defined by craft\base\Element")                                                                        | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [site](https://docs.craftcms.com/api/v3/craft-base-element.html#site "Defined by craft\base\Element")                                                                                | [craft\models\Site](https://docs.craftcms.com/api/v3/craft-models-site.html)
| [siteId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#siteid "Defined by craft\base\ElementTrait")                                                                  | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#slug "Defined by craft\base\ElementTrait")                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceid "Defined by craft\base\Element")                                                                        | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceuid "Defined by craft\base\Element")                                                                      | [string](http://php.net/language.types.string)
| [status](https://docs.craftcms.com/api/v3/craft-base-element.html#status "Defined by craft\base\Element")                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [storedItemTotal](craft-commerce-elements-order.md#storeditemtotal)                                                                                                                  | [float](http://php.net/language.types.float) – The item total as stored in the database from last retrieval
| [storedTotalDiscount](craft-commerce-elements-order.md#storedtotaldiscount)                                                                                                          | [float](http://php.net/language.types.float) – The total of discount adjustments as stored in the database from last retrieval
| [storedTotalPaid](craft-commerce-elements-order.md#storedtotalpaid)                                                                                                                  | [float](http://php.net/language.types.float) – The total paid as stored in the database from last retrieval
| [storedTotalPrice](craft-commerce-elements-order.md#storedtotalprice)                                                                                                                | [float](http://php.net/language.types.float) – The total price as stored in the database from last retrieval
| [storedTotalShippingCost](craft-commerce-elements-order.md#storedtotalshippingcost)                                                                                                  | [float](http://php.net/language.types.float) – The total shipping cost adjustments as stored in the database from last retrieval
| [storedTotalTax](craft-commerce-elements-order.md#storedtotaltax)                                                                                                                    | [float](http://php.net/language.types.float) – The total tax adjustments as stored in the database from last retrieval
| [storedTotalTaxIncluded](craft-commerce-elements-order.md#storedtotaltaxincluded)                                                                                                    | [float](http://php.net/language.types.float) – The total tax included adjustments as stored in the database from last retrieval
| [structureId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#structureid "Defined by craft\base\ElementTrait")                                                        | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](https://docs.craftcms.com/api/v3/craft-base-element.html#supportedsites "Defined by craft\base\Element")                                                            | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [tempId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#tempid "Defined by craft\base\ElementTrait")                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#title "Defined by craft\base\ElementTrait")                                                                    | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [total](craft-commerce-elements-order.md#total)                                                                                                                                      | [float](http://php.net/language.types.float)
| [totalAuthorized](craft-commerce-elements-order.md#totalauthorized)                                                                                                                  | [float](http://php.net/language.types.float)
| [totalDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#totaldescendants "Defined by craft\base\Element")                                                        | [integer](http://php.net/language.types.integer)
| [totalDiscount](craft-commerce-elements-order.md#totaldiscount)                                                                                                                      | [float](http://php.net/language.types.float)
| [totalPaid](craft-commerce-elements-order.md#totalpaid)                                                                                                                              | [float](http://php.net/language.types.float)
| [totalPrice](craft-commerce-elements-order.md#totalprice)                                                                                                                            | [float](http://php.net/language.types.float)
| [totalQty](craft-commerce-elements-order.md#totalqty)                                                                                                                                | [integer](http://php.net/language.types.integer)
| [totalSaleAmount](craft-commerce-elements-order.md#totalsaleamount)                                                                                                                  | [float](http://php.net/language.types.float)
| [totalShippingCost](craft-commerce-elements-order.md#totalshippingcost)                                                                                                              | [float](http://php.net/language.types.float)
| [totalTax](craft-commerce-elements-order.md#totaltax)                                                                                                                                | [float](http://php.net/language.types.float)
| [totalTaxIncluded](craft-commerce-elements-order.md#totaltaxincluded)                                                                                                                | [float](http://php.net/language.types.float)
| [totalTaxablePrice](craft-commerce-elements-order.md#totaltaxableprice)                                                                                                              | [float](http://php.net/language.types.float)
| [totalWeight](craft-commerce-elements-order.md#totalweight)                                                                                                                          | [float](http://php.net/language.types.float)
| [transactions](craft-commerce-elements-order.md#transactions)                                                                                                                        | [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]
| [trashed](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#trashed "Defined by craft\base\ElementTrait")                                                                | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uiLabel](https://docs.craftcms.com/api/v3/craft-base-element.html#uilabel "Defined by craft\base\Element")                                                                          | [string](http://php.net/language.types.string)
| [uid](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uid "Defined by craft\base\ElementTrait")                                                                        | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uri "Defined by craft\base\ElementTrait")                                                                        | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](https://docs.craftcms.com/api/v3/craft-base-element.html#uriformat "Defined by craft\base\Element")                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](https://docs.craftcms.com/api/v3/craft-base-element.html#url "Defined by craft\base\Element")                                                                                  | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [user](craft-commerce-elements-order.md#user)                                                                                                                                        | [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                                                 | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `adjustmentSubtotal`



Type

:   [float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `adjustments`



Type

:   [craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `adjustmentsTotal`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `availableShippingMethodOptions`



Type

:   [craft\commerce\models\ShippingMethodOption](craft-commerce-models-shippingmethodoption.md)[]

Access

:   Read-only

Since

:   3.1







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `billingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `billingAddressId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Billing address ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L595)


---

#### Example

::: code
```php
echo $order->billingAddressId;
```
```twig
{{ order.billingAddressId }}
```
:::


### `billingSameAsShipping`



Type

:   [boolean](http://php.net/language.types.boolean)



Make this the shipping address the same as the billing address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L676)


---

#### Example

::: code
```php
echo $order->billingSameAsShipping;
```
```twig
{{ order.billingSameAsShipping }}
```
:::


### `cancelUrl`



Type

:   [string](http://php.net/language.types.string)



Cancel URL




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L535)


---

#### Example

::: code
```php
echo $order->cancelUrl;
```
```twig
{{ order.cancelUrl }}
```
:::


### `couponCode`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Coupon Code




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L390)


---

#### Example

::: code
```php
echo $order->couponCode;
```
```twig
{{ order.couponCode }}
```
:::


### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `currency`



Type

:   [string](http://php.net/language.types.string)



Currency




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L461)


---

#### Example

::: code
```php
echo $order->currency;
```
```twig
{{ order.currency }}
```
:::


### `customer`



Type

:   [craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `customerId`



Type

:   [integer](http://php.net/language.types.integer)



Customer ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L704)



### `customerLinkHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `dateAuthorized`



Type

:   [DateTime](http://php.net/class.datetime)



Date authorized




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L447)


---

#### Example

::: code
```php
echo $order->dateAuthorized;
```
```twig
{{ order.dateAuthorized }}
```
:::


### `dateOrdered`



Type

:   [DateTime](http://php.net/class.datetime)



Date ordered




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L418)


---

#### Example

::: code
```php
echo $order->dateOrdered;
```
```twig
{{ order.dateOrdered }}
```
:::


### `datePaid`



Type

:   [DateTime](http://php.net/class.datetime)



Date paid




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L432)


---

#### Example

::: code
```php
echo $order->datePaid;
```
```twig
{{ order.datePaid }}
```
:::


### `email`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `estimatedBillingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `estimatedBillingAddressId`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   2.2



Estimated Billing address ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L682)



### `estimatedBillingSameAsShipping`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   2.2



Whether estimated billing address should be set to the same address as estimated shipping



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L694)



### `estimatedShippingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `estimatedShippingAddressId`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   2.2



Estimated Shipping address ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L688)



### `gateway`



Type

:   [craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `gatewayId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Gateway ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L477)


---

#### Example

::: code
```php
echo $order->gatewayId;
```
```twig
{{ order.gatewayId }}
```
:::


### `histories`



Type

:   [craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `isActiveCart`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `isCompleted`



Type

:   [boolean](http://php.net/language.types.boolean)



Is completed




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L404)


---

#### Example

::: code
```php
echo $order->isCompleted;
```
```twig
{{ order.isCompleted }}
```
:::


### `isEditable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `isEmpty`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `isPaid`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `isUnpaid`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `itemSubtotal`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `itemTotal`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `lastIp`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Last IP address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L491)


---

#### Example

::: code
```php
echo $order->lastIp;
```
```twig
{{ order.lastIp }}
```
:::


### `lastTransaction`



Type

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `lineItems`



Type

:   [craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `link`



Type

:   `\Twig\Markup`, [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `makePrimaryBillingAddress`



Type

:   [boolean](http://php.net/language.types.boolean)



Make this the customer‘s primary billing address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L642)


---

#### Example

::: code
```php
echo $order->makePrimaryBillingAddress;
```
```twig
{{ order.makePrimaryBillingAddress }}
```
:::


### `makePrimaryShippingAddress`



Type

:   [boolean](http://php.net/language.types.boolean)



Make this the customer‘s primary shipping address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L626)


---

#### Example

::: code
```php
echo $order->makePrimaryShippingAddress;
```
```twig
{{ order.makePrimaryShippingAddress }}
```
:::


### `message`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Message




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L505)


---

#### Example

::: code
```php
echo $order->message;
```
```twig
{{ order.message }}
```
:::


### `nestedTransactions`



Type

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `number`



Type

:   [string](http://php.net/language.types.string)



Number




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L361)


---

#### Example

::: code
```php
echo $order->number;
```
```twig
{{ order.number }}
```
:::


### `orderAdjustments`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `orderLanguage`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Order status ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L565)


---

#### Example

::: code
```php
echo $order->orderStatusId;
```
```twig
{{ order.orderStatusId }}
```
:::


### `orderStatus`



Type

:   [craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `orderStatusHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `orderStatusId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Order status ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L550)


---

#### Example

::: code
```php
echo $order->orderStatusId;
```
```twig
{{ order.orderStatusId }}
```
:::


### `origin`



Type

:   [string](http://php.net/language.types.string)



Order origin




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L581)


---

#### Example

::: code
```php
echo $order->origin;
```
```twig
{{ order.origin }}
```
:::


### `outstandingBalance`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `paidStatus`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `paidStatusHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `paymentCurrency`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `paymentSource`



Type

:   [craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `paymentSourceId`



Type

:   [boolean](http://php.net/language.types.boolean)



Payment source ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L735)


---

#### Example

::: code
```php
echo $order->paymentSourceId;
```
```twig
{{ order.paymentSourceId }}
```
:::


### `pdfUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



The URL to the order’s PDF invoice, or null if the PDF template doesn’t exist



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `recalculationMode`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `reference`



Type

:   [string](http://php.net/language.types.string)



Reference




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L376)


---

#### Example

::: code
```php
echo $order->reference;
```
```twig
{{ order.reference }}
```
:::


### `registerUserOnOrderComplete`



Type

:   [boolean](http://php.net/language.types.boolean)



Register user on order complete




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L719)


---

#### Example

::: code
```php
echo $order->registerUserOnOrderComplete;
```
```twig
{{ order.registerUserOnOrderComplete }}
```
:::


### `returnUrl`



Type

:   [string](http://php.net/language.types.string)



Return URL




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L520)


---

#### Example

::: code
```php
echo $order->returnUrl;
```
```twig
{{ order.returnUrl }}
```
:::


### `shippingAddress`



Type

:   [craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `shippingAddressId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Shipping address ID




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L609)


---

#### Example

::: code
```php
echo $order->shippingAddressId;
```
```twig
{{ order.shippingAddressId }}
```
:::


### `shippingMethod`



Type

:   [craft\commerce\models\ShippingMethod](craft-commerce-models-shippingmethod.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `shippingMethodHandle`



Type

:   [string](http://php.net/language.types.string)



Shipping Method Handle



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L699)



### `shippingMethodId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `shippingSameAsBilling`



Type

:   [boolean](http://php.net/language.types.boolean)



Make this the shipping address the same as the billing address




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L659)


---

#### Example

::: code
```php
echo $order->shippingSameAsBilling;
```
```twig
{{ order.shippingSameAsBilling }}
```
:::


### `shortNumber`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `storedItemTotal`



Type

:   [float](http://php.net/language.types.float)



The item total as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L772)


---

#### Example

::: code
```php
echo $order->storedItemTotal;
```
```twig
{{ order.storedItemTotal }}
```
:::


### `storedTotalDiscount`



Type

:   [float](http://php.net/language.types.float)



The total of discount adjustments as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L796)


---

#### Example

::: code
```php
echo $order->storedTotalDiscount;
```
```twig
{{ order.storedTotalDiscount }}
```
:::


### `storedTotalPaid`



Type

:   [float](http://php.net/language.types.float)



The total paid as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L760)


---

#### Example

::: code
```php
echo $order->storedTotalPaid;
```
```twig
{{ order.storedTotalPaid }}
```
:::


### `storedTotalPrice`



Type

:   [float](http://php.net/language.types.float)



The total price as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L748)


---

#### Example

::: code
```php
echo $order->storedTotalPrice;
```
```twig
{{ order.storedTotalPrice }}
```
:::


### `storedTotalShippingCost`



Type

:   [float](http://php.net/language.types.float)



The total shipping cost adjustments as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L784)


---

#### Example

::: code
```php
echo $order->storedTotalShippingCost;
```
```twig
{{ order.storedTotalShippingCost }}
```
:::


### `storedTotalTax`



Type

:   [float](http://php.net/language.types.float)



The total tax adjustments as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L808)


---

#### Example

::: code
```php
echo $order->storedTotalTax;
```
```twig
{{ order.storedTotalTax }}
```
:::


### `storedTotalTaxIncluded`



Type

:   [float](http://php.net/language.types.float)



The total tax included  adjustments as stored in the database from last retrieval




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L820)


---

#### Example

::: code
```php
echo $order->storedTotalTaxIncluded;
```
```twig
{{ order.storedTotalTaxIncluded }}
```
:::


### `total`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalAuthorized`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalDiscount`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalPaid`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalPrice`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalQty`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalSaleAmount`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalShippingCost`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalTax`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalTaxIncluded`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalTaxablePrice`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `totalWeight`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `transactions`



Type

:   [craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)



### `user`



Type

:   [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php)





## Protected Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](https://docs.craftcms.com/api/v3/craft-base-element.html#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](https://docs.craftcms.com/api/v3/craft-base-element.html#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__call "Defined by craft\base\Element")                                                                                  | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                                                    |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                                 | Constructor.
| [__get()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__get "Defined by craft\base\Element")                                                                                    | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__isset "Defined by craft\base\Element")                                                                                | Checks if a property is set.
| [__set()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__set "Defined by craft\base\Element")                                                                                    | Sets the value of a component property.
| [__toString()](craft-commerce-elements-order.md#method-tostring)                                                                                                                                    | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                                           | Sets a component property to be null.
| [_getAdjustmentsTotalByType()](craft-commerce-elements-order.md#method-getadjustmentstotalbytype)                                                                                                   |
| [actions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-actions "Defined by craft\base\Element")                                                                                | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                                                 | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-adderror "Defined by craft\base\Element")                                                                              | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                                               | Adds a list of errors.
| [addLineItem()](craft-commerce-elements-order.md#method-addlineitem)                                                                                                                                | Adds a line item to the order. Updates the line item if the ID of that line item is already in the cart.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                                                      | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterdelete "Defined by craft\base\Element")                                                                        | Performs actions after an element is deleted.
| [afterMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-aftermoveinstructure "Defined by craft\base\Element")                                                      | Performs actions after an element is moved within a structure.
| [afterOrderComplete()](craft-commerce-elements-order.md#method-afterordercomplete)                                                                                                                  | Called after the order successfully completes
| [afterPropagate()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterpropagate "Defined by craft\base\Element")                                                                  | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterrestore "Defined by craft\base\Element")                                                                      | Performs actions after an element is restored.
| [afterSave()](craft-commerce-elements-order.md#method-aftersave)                                                                                                                                    | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                                       | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                                             | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                                           | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                                                     | Returns the attribute hints.
| [attributeLabels()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributelabels "Defined by craft\base\Element")                                                                | Returns the attribute labels.
| [attributes()](craft-commerce-elements-order.md#method-attributes)                                                                                                                                  | Returns the list of attribute names.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforedelete "Defined by craft\base\Element")                                                                      | Performs actions before an element is deleted.
| [beforeMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforemoveinstructure "Defined by craft\base\Element")                                                    | Performs actions before an element is moved within a structure.
| [beforeRestore()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforerestore "Defined by craft\base\Element")                                                                    | Performs actions before an element is restored.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforesave "Defined by craft\base\Element")                                                                          | Performs actions before an element is saved.
| [beforeValidate()](craft-commerce-elements-order.md#method-beforevalidate)                                                                                                                          | This method is invoked before validation starts.
| [behaviors()](craft-commerce-elements-order.md#method-behaviors)                                                                                                                                    |
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                                             | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                                             | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                                     | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                                           | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                                                 | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [currencyAttributes()](craft-commerce-elements-order.md#method-currencyattributes)                                                                                                                  | The attributes on the order that should be made available as formatted currency.
| [datetimeAttributes()](craft-commerce-elements-order.md#method-datetimeattributes)                                                                                                                  | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defaulttableattributes "Defined by craft\base\Element")                                                  | Returns the list of table attribute keys that should be shown by default.
| [defineRules()](craft-commerce-elements-order.md#method-definerules)                                                                                                                                | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                                             | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                                           | Detaches all behaviors from the component.
| [displayName()](craft-commerce-elements-order.md#method-displayname)                                                                                                                                |
| [eagerLoadingMap()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-eagerloadingmap "Defined by craft\base\Element")                                                                | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                                           | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-exporters "Defined by craft\base\Element")                                                                            | Returns the available export options for a given source.
| [extraFields()](craft-commerce-elements-order.md#method-extrafields)                                                                                                                                | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-commerce-elements-order.md#method-fields)                                                                                                                                          |
| [find()](craft-commerce-elements-traits-orderelementtrait.md#method-find "Defined by craft\commerce\elements\traits\OrderElementTrait")                                                             | Creates an `\ElementQueryInterface` instance for query purpose.
| [findAll()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findall "Defined by craft\base\Element")                                                                                | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findone "Defined by craft\base\Element")                                                                                | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                                                 | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                                                     | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                                                           | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAdjustmentSubtotal()](craft-commerce-elements-order.md#method-getadjustmentsubtotal)                                                                                                            | Returns the total of adjustments made to order.
| [getAdjustments()](craft-commerce-elements-order.md#method-getadjustments)                                                                                                                          |
| [getAdjustmentsByType()](craft-commerce-elements-order.md#method-getadjustmentsbytype)                                                                                                              |
| [getAdjustmentsTotal()](craft-commerce-elements-order.md#method-getadjustmentstotal)                                                                                                                |
| [getAdjustmentsTotalByType()](craft-commerce-elements-order.md#method-getadjustmentstotalbytype)                                                                                                    |
| [getAncestors()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getancestors "Defined by craft\base\Element")                                                                      | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                                                 | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributelabel "Defined by craft\base\Element")                                                            | Returns the text label for the specified attribute.
| [getAttributeStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributestatus "Defined by craft\base\Element")                                                          | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                                                       | Returns attribute values.
| [getAvailableShippingMethodOptions()](craft-commerce-elements-order.md#method-getavailableshippingmethodoptions)                                                                                    |
| [getAvailableShippingMethods()](craft-commerce-elements-traits-orderdeprecatedtrait.md#method-getavailableshippingmethods "Defined by craft\commerce\elements\traits\OrderDeprecatedTrait")         |
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                                   | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                                 | Returns all behaviors attached to this component.
| [getBillingAddress()](craft-commerce-elements-order.md#method-getbillingaddress)                                                                                                                    | Get the billing address on the order.
| [getChildren()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getchildren "Defined by craft\base\Element")                                                                        | Returns the element’s children.
| [getContentTable()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcontenttable "Defined by craft\base\Element")                                                                | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-commerce-elements-order.md#method-getcpediturl)                                                                                                                              | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcurrentrevision "Defined by craft\base\Element")                                                          | Returns the element’s current revision, if one exists.
| [getCustomer()](craft-commerce-elements-order.md#method-getcustomer)                                                                                                                                |
| [getCustomerLinkHtml()](craft-commerce-elements-order.md#method-getcustomerlinkhtml)                                                                                                                | Customer represented as HTML
| [getDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdescendants "Defined by craft\base\Element")                                                                  | Returns the element’s descendants.
| [getDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyattributes "Defined by craft\base\Element")                                                          | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyfields "Defined by craft\base\Element")                                                                  | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelementcount "Defined by craft\base\Element")                                          | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelements "Defined by craft\base\Element")                                                  | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteditorhtml "Defined by craft\base\Element")                                                                    | Returns the HTML for the element’s editor HUD.
| [getEmail()](craft-commerce-elements-order.md#method-getemail)                                                                                                                                      | Returns the email for this order. Will always be the registered users email if the order's customer is related to a user.
| [getEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getenabledforsite "Defined by craft\base\Element")                                                            | Returns whether the element is enabled for the current site.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                                                  | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                                                   | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                                               | Returns the errors for all attributes or a single attribute.
| [getEstimatedBillingAddress()](craft-commerce-elements-order.md#method-getestimatedbillingaddress)                                                                                                  |
| [getEstimatedShippingAddress()](craft-commerce-elements-order.md#method-getestimatedshippingaddress)                                                                                                |
| [getFieldColumnPrefix()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcolumnprefix "Defined by craft\base\Element")                                                      | Returns the field column prefix this element’s content uses.
| [getFieldContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcontext "Defined by craft\base\Element")                                                                | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-commerce-elements-traits-orderelementtrait.md#method-getfieldlayout "Defined by craft\commerce\elements\traits\OrderElementTrait")                                         | Returns the field layout used by this element.
| [getFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldparamnamespace "Defined by craft\base\Element")                                                  | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldstatus "Defined by craft\base\Element")                                                                  | Returns the status of a given field.
| [getFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalue "Defined by craft\base\Element")                                                                    | Returns the value for a given field.
| [getFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalues "Defined by craft\base\Element")                                                                  | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                                       | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                                                     | Returns the first error of every attribute in the model.
| [getGateway()](craft-commerce-elements-order.md#method-getgateway)                                                                                                                                  |
| [getGqlTypeName()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getgqltypename "Defined by craft\base\Element")                                                                  | Returns the GraphQL type name for this element type.
| [getHasDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasdescendants "Defined by craft\base\Element")                                                            | Returns whether the element has descendants.
| [getHasFreshContent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasfreshcontent "Defined by craft\base\Element")                                                          | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHistories()](craft-commerce-elements-order.md#method-gethistories)                                                                                                                              |
| [getHtmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethtmlattributes "Defined by craft\base\Element")                                                            | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getid "Defined by craft\base\Element")                                                                                    | Returns the element’s ID.
| [getIsActiveCart()](craft-commerce-elements-order.md#method-getisactivecart)                                                                                                                        | Returns whether this order is the user's current active cart.
| [getIsDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisdraft "Defined by craft\base\Element")                                                                          | Returns whether this is a draft.
| [getIsEditable()](craft-commerce-elements-order.md#method-getiseditable)                                                                                                                            | Returns whether the current user can edit the element.
| [getIsEmpty()](craft-commerce-elements-order.md#method-getisempty)                                                                                                                                  | Returns whether the order has any items in it.
| [getIsHomepage()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getishomepage "Defined by craft\base\Element")                                                                    | Returns whether this element represents the site homepage.
| [getIsPaid()](craft-commerce-elements-order.md#method-getispaid)                                                                                                                                    |
| [getIsRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisrevision "Defined by craft\base\Element")                                                                    | Returns whether this is a revision.
| [getIsUnpaid()](craft-commerce-elements-order.md#method-getisunpaid)                                                                                                                                |
| [getIsUnsavedDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisunsaveddraft "Defined by craft\base\Element")                                                            | Returns whether the element is an unsaved draft.
| [getItemSubtotal()](craft-commerce-elements-order.md#method-getitemsubtotal)                                                                                                                        | Returns the total of all line item's subtotals.
| [getItemTotal()](craft-commerce-elements-order.md#method-getitemtotal)                                                                                                                              |
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                                           | Returns an iterator for traversing the attributes in the model.
| [getLastTransaction()](craft-commerce-elements-order.md#method-getlasttransaction)                                                                                                                  |
| [getLineItems()](craft-commerce-elements-order.md#method-getlineitems)                                                                                                                              |
| [getLink()](craft-commerce-elements-order.md#method-getlink)                                                                                                                                        | Returns an anchor pre-filled with this element’s URL and title.
| [getNestedTransactions()](craft-commerce-elements-order.md#method-getnestedtransactions)                                                                                                            | Returns an array of transactions for the order that have child transactions set on them.
| [getNext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnext "Defined by craft\base\Element")                                                                                | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnextsibling "Defined by craft\base\Element")                                                                  | Returns the element’s next sibling.
| [getOrderAdjustments()](craft-commerce-elements-order.md#method-getorderadjustments)                                                                                                                |
| [getOrderStatus()](craft-commerce-elements-order.md#method-getorderstatus)                                                                                                                          |
| [getOrderStatusHtml()](craft-commerce-elements-order.md#method-getorderstatushtml)                                                                                                                  |
| [getOutstandingBalance()](craft-commerce-elements-order.md#method-getoutstandingbalance)                                                                                                            | Returns the difference between the order amount and amount paid.
| [getPaidStatus()](craft-commerce-elements-order.md#method-getpaidstatus)                                                                                                                            | What is the status of the orders payment
| [getPaidStatusHtml()](craft-commerce-elements-order.md#method-getpaidstatushtml)                                                                                                                    | Paid status represented as HTML
| [getParent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getparent "Defined by craft\base\Element")                                                                            | Returns the element’s parent.
| [getPaymentCurrency()](craft-commerce-elements-order.md#method-getpaymentcurrency)                                                                                                                  | Returns the current payment currency, and defaults to the primary currency if not set.
| [getPaymentSource()](craft-commerce-elements-order.md#method-getpaymentsource)                                                                                                                      | Returns the order's selected payment source if any.
| [getPdfUrl()](craft-commerce-elements-order.md#method-getpdfurl)                                                                                                                                    | Returns the URL to the order’s PDF invoice.
| [getPrev()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprev "Defined by craft\base\Element")                                                                                | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprevsibling "Defined by craft\base\Element")                                                                  | Returns the element’s previous sibling.
| [getPreviewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getpreviewtargets "Defined by craft\base\Element")                                                            | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [getRecalculationMode()](craft-commerce-elements-order.md#method-getrecalculationmode)                                                                                                              | Gets the recalculation mode of the order
| [getRef()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getref "Defined by craft\base\Element")                                                                                  | Returns the reference string to this element.
| [getRoute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getroute "Defined by craft\base\Element")                                                                              | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                                           | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-commerce-elements-traits-orderelementtrait.md#method-getsearchkeywords "Defined by craft\commerce\elements\traits\OrderElementTrait")                                   | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getserializedfieldvalues "Defined by craft\base\Element")                                              | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getShippingAddress()](craft-commerce-elements-order.md#method-getshippingaddress)                                                                                                                  | * Get the shipping address on the order.
| [getShippingMethod()](craft-commerce-elements-order.md#method-getshippingmethod)                                                                                                                    |
| [getShippingMethodId()](craft-commerce-elements-order.md#method-getshippingmethodid)                                                                                                                |
| [getShortNumber()](craft-commerce-elements-order.md#method-getshortnumber)                                                                                                                          |
| [getShouldRecalculateAdjustments()](craft-commerce-elements-traits-orderdeprecatedtrait.md#method-getshouldrecalculateadjustments "Defined by craft\commerce\elements\traits\OrderDeprecatedTrait") |
| [getSiblings()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsiblings "Defined by craft\base\Element")                                                                        | Returns all of the element’s siblings.
| [getSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsite "Defined by craft\base\Element")                                                                                | Returns the site the element is associated with.
| [getSourceId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceid "Defined by craft\base\Element")                                                                        | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceuid "Defined by craft\base\Element")                                                                      | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getstatus "Defined by craft\base\Element")                                                                            | Returns the element’s status.
| [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsupportedsites "Defined by craft\base\Element")                                                            | Returns the sites this element is associated with.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettableattributehtml "Defined by craft\base\Element")                                                    | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getthumburl "Defined by craft\base\Element")                                                                        | Returns the URL to the element’s thumbnail, if there is one.
| [getTotal()](craft-commerce-elements-order.md#method-gettotal)                                                                                                                                      | Returns the raw total of the order, which is the total of all line items and adjustments. This number can be negative, so it is not the price of the order.
| [getTotalAuthorized()](craft-commerce-elements-order.md#method-gettotalauthorized)                                                                                                                  |
| [getTotalDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettotaldescendants "Defined by craft\base\Element")                                                        | Returns the total number of descendants that the element has.
| [getTotalDiscount()](craft-commerce-elements-order.md#method-gettotaldiscount)                                                                                                                      |
| [getTotalPaid()](craft-commerce-elements-order.md#method-gettotalpaid)                                                                                                                              | Returns the total `purchase` and `captured` transactions belonging to this order.
| [getTotalPrice()](craft-commerce-elements-order.md#method-gettotalprice)                                                                                                                            | Get the total price of the order, whose minimum value is enforced by the configured {@link Settings::minimumTotalPriceStrategy strategy set for minimum total price}.
| [getTotalQty()](craft-commerce-elements-order.md#method-gettotalqty)                                                                                                                                | Returns total number of items.
| [getTotalSaleAmount()](craft-commerce-elements-order.md#method-gettotalsaleamount)                                                                                                                  | Returns the total sale amount.
| [getTotalShippingCost()](craft-commerce-elements-order.md#method-gettotalshippingcost)                                                                                                              |
| [getTotalTax()](craft-commerce-elements-order.md#method-gettotaltax)                                                                                                                                |
| [getTotalTaxIncluded()](craft-commerce-elements-order.md#method-gettotaltaxincluded)                                                                                                                |
| [getTotalTaxablePrice()](craft-commerce-elements-order.md#method-gettotaltaxableprice)                                                                                                              | Returns the total price of the order, minus any tax adjustments.
| [getTotalWeight()](craft-commerce-elements-order.md#method-gettotalweight)                                                                                                                          |
| [getTransactions()](craft-commerce-elements-order.md#method-gettransactions)                                                                                                                        |
| [getUiLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getuilabel "Defined by craft\base\Element")                                                                          | Returns what the element should be called within the control panel.
| [getUriFormat()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturiformat "Defined by craft\base\Element")                                                                      | Returns the URI format used to generate this element’s URI.
| [getUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl "Defined by craft\base\Element")                                                                                  | Returns the element’s full URL.
| [getUser()](craft-commerce-elements-order.md#method-getuser)                                                                                                                                        |
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                                       | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gqlscopesbycontext "Defined by craft\base\Element")                                                          | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gqltypenamebycontext "Defined by craft\base\Element")                                                      | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-commerce-elements-traits-orderelementtrait.md#method-hascontent "Defined by craft\commerce\elements\traits\OrderElementTrait")                                                 | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-haseagerloadedelements "Defined by craft\base\Element")                                                  | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                                                | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                                         | Returns a value indicating whether there is any handler attached to the named event.
| [hasLineItems()](craft-commerce-elements-order.md#method-haslineitems)                                                                                                                              |
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                                       | Returns a value indicating whether a method is defined.
| [hasOutstandingBalance()](craft-commerce-elements-order.md#method-hasoutstandingbalance)                                                                                                            |
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                                                   | Returns a value indicating whether a property is defined for this component.
| [hasStatuses()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-hasstatuses "Defined by craft\base\Element")                                                                        | Returns whether elements of this type have statuses.
| [hasTitles()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-hastitles "Defined by craft\base\Element")                                                                            | Returns whether elements of this type have traditional titles.
| [hasUris()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-hasuris "Defined by craft\base\Element")                                                                                | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-indexhtml "Defined by craft\base\Element")                                                                            | Returns the element index HTML.
| [init()](craft-commerce-elements-order.md#method-init)                                                                                                                                              | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                                                     | Returns static class instance, which can be used to obtain meta information.
| [isAncestorOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isancestorof "Defined by craft\base\Element")                                                                      | Returns whether this element is an ancestor of another one.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                                                               | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                                                           | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                                                   | Returns a value indicating whether the attribute is safe for massive assignments.
| [isChildOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-ischildof "Defined by craft\base\Element")                                                                            | Returns whether this element is a direct child of another one.
| [isDescendantOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isdescendantof "Defined by craft\base\Element")                                                                  | Returns whether this element is a descendant of another one.
| [isFieldDirty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isfielddirty "Defined by craft\base\Element")                                                                      | Returns whether a custom field value has changed since the element was first loaded.
| [isFieldEmpty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isfieldempty "Defined by craft\base\Element")                                                                      | Returns whether a field is empty.
| [isLocalized()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-islocalized "Defined by craft\base\Element")                                                                        | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isnextsiblingof "Defined by craft\base\Element")                                                                | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isparentof "Defined by craft\base\Element")                                                                          | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isprevsiblingof "Defined by craft\base\Element")                                                                | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-issiblingof "Defined by craft\base\Element")                                                                        | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                                         | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                                         | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-commerce-elements-order.md#method-lowerdisplayname)                                                                                                                      | Returns the lowercase version of [displayName()](craft-commerce-elements-order.md#method-displayname).
| [markAsClean()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasclean "Defined by craft\base\Element")                                                                        | Resets the record of dirty attributes and fields.
| [markAsComplete()](craft-commerce-elements-order.md#method-markascomplete)                                                                                                                          | Marks the order as complete and sets the default order status, then saves the order.
| [markAsDirty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasdirty "Defined by craft\base\Element")                                                                        | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                                   | Detaches an existing event handler from this component.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-offsetexists "Defined by craft\base\Element")                                                                      | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                                               | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                                               | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                                           | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                                     | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                                               | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-commerce-elements-order.md#method-pluraldisplayname)                                                                                                                    | Returns the plural version of [displayName()](craft-commerce-elements-order.md#method-displayname).
| [pluralLowerDisplayName()](craft-commerce-elements-order.md#method-plurallowerdisplayname)                                                                                                          | Returns the plural, lowercase version of [displayName()](craft-commerce-elements-order.md#method-displayname).
| [recalculate()](craft-commerce-elements-order.md#method-recalculate)                                                                                                                                | Regenerates all adjusters and updates line items, depending on the current recalculationMode
| [refHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-refhandle "Defined by craft\base\Element")                                                                            | Returns the handle that should be used to refer to this element type from reference tags.
| [removeBillingAddress()](craft-commerce-elements-order.md#method-removebillingaddress)                                                                                                              |
| [removeEstimatedBillingAddress()](craft-commerce-elements-order.md#method-removeestimatedbillingaddress)                                                                                            |
| [removeEstimatedShippingAddress()](craft-commerce-elements-order.md#method-removeestimatedshippingaddress)                                                                                          |
| [removeLineItem()](craft-commerce-elements-order.md#method-removelineitem)                                                                                                                          | Removes a specific line item from the order.
| [removeShippingAddress()](craft-commerce-elements-order.md#method-removeshippingaddress)                                                                                                            |
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                                                        | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                                                     | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                                               | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-searchableattributes "Defined by craft\base\Element")                                                      | Defines which element attributes should be searchable.
| [setAdjustments()](craft-commerce-elements-order.md#method-setadjustments)                                                                                                                          |
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                                       | Sets the attribute values in a massive way.
| [setBillingAddress()](craft-commerce-elements-order.md#method-setbillingaddress)                                                                                                                    | Set the billing address on the order.
| [setCustomer()](craft-commerce-elements-order.md#method-setcustomer)                                                                                                                                |
| [setDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setdirtyattributes "Defined by craft\base\Element")                                                          | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-seteagerloadedelementcount "Defined by craft\base\Element")                                          | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-seteagerloadedelements "Defined by craft\base\Element")                                                  | Sets some eager-loaded elements on a given handle.
| [setEmail()](craft-commerce-elements-order.md#method-setemail)                                                                                                                                      | Sets the orders email address. Will have no affect if the order's customer is a registered user.
| [setEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setenabledforsite "Defined by craft\base\Element")                                                            | Sets whether the element is enabled for the current site.
| [setEstimatedBillingAddress()](craft-commerce-elements-order.md#method-setestimatedbillingaddress)                                                                                                  |
| [setEstimatedShippingAddress()](craft-commerce-elements-order.md#method-setestimatedshippingaddress)                                                                                                |
| [setFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldparamnamespace "Defined by craft\base\Element")                                                  | Sets the namespace used by custom field params on the request.
| [setFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvalue "Defined by craft\base\Element")                                                                    | Sets the value for a given field.
| [setFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvalues "Defined by craft\base\Element")                                                                  | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvaluesfromrequest "Defined by craft\base\Element")                                            | Sets the element’s custom field values, when the values have come from post data.
| [setGatewayId()](craft-commerce-elements-order.md#method-setgatewayid)                                                                                                                              | Sets the order's selected gateway id.
| [setLineItems()](craft-commerce-elements-order.md#method-setlineitems)                                                                                                                              |
| [setNext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setnext "Defined by craft\base\Element")                                                                                | Sets the default next element.
| [setParent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setparent "Defined by craft\base\Element")                                                                            | Sets the element’s parent.
| [setPaymentCurrency()](craft-commerce-elements-order.md#method-setpaymentcurrency)                                                                                                                  |
| [setPaymentSource()](craft-commerce-elements-order.md#method-setpaymentsource)                                                                                                                      | Sets the order's selected payment source
| [setPrev()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setprev "Defined by craft\base\Element")                                                                                | Sets the default previous element.
| [setRecalculationMode()](craft-commerce-elements-order.md#method-setrecalculationmode)                                                                                                              | Sets the recalculation mode of the order
| [setRevisionCreatorId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setrevisioncreatorid "Defined by craft\base\Element")                                                      | Sets the revision creator ID to be saved.
| [setRevisionNotes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setrevisionnotes "Defined by craft\base\Element")                                                              | Sets the revision notes to be saved.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                                           | Sets the scenario for the model.
| [setShippingAddress()](craft-commerce-elements-order.md#method-setshippingaddress)                                                                                                                  | Set the shipping address on the order.
| [setShouldRecalculateAdjustments()](craft-commerce-elements-traits-orderdeprecatedtrait.md#method-setshouldrecalculateadjustments "Defined by craft\commerce\elements\traits\OrderDeprecatedTrait") |
| [sortOptions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sortoptions "Defined by craft\base\Element")                                                                        | Returns the sort options for the element type.
| [sources()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sources "Defined by craft\base\Element")                                                                                | Returns the source definitions that elements of this type may belong to.
| [statuses()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-statuses "Defined by craft\base\Element")                                                                              | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-tableattributes "Defined by craft\base\Element")                                                                | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                                                 | Converts the model into an array.
| [trackChanges()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-trackchanges "Defined by craft\base\Element")                                                                      | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                                           | Triggers an event.
| [updateOrderPaidInformation()](craft-commerce-elements-order.md#method-updateorderpaidinformation)                                                                                                  | Updates the paid status and paid date of the order, and marks as complete if the order is paid or authorized.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                                                                 | Performs the data validation.
| [validateAddress()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddress "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                                 | Validates addresses, and also adds prefixed validation errors to order
| [validateAddressCanBeUsed()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddresscanbeused "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")               | Validates that an address belongs to the order‘s customer.
| [validateAddressReuse()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validateaddressreuse "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                       | Validates that shipping address isn't being set to be the same as billing address, when billing address is set to be shipping address
| [validateCouponCode()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatecouponcode "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                           |
| [validateCustomFieldAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldattribute "Defined by craft\base\Element")                                      | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldcontentsize "Defined by craft\base\Element")                                  | Validates that the content size is going to fit within the field’s database column.
| [validateGatewayId()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validategatewayid "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                             |
| [validateLineItems()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatelineitems "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                             | Validates line items, and also adds prefixed validation errors to order
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                                                 | Validates multiple models.
| [validatePaymentCurrency()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatepaymentcurrency "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                 |
| [validatePaymentSourceId()](craft-commerce-elements-traits-ordervalidatorstrait.md#method-validatepaymentsourceid "Defined by craft\commerce\elements\traits\OrderValidatorsTrait")                 |

### `__toString()`





Returns the string representation of the element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1107-L1110)



#### Returns

[string](http://php.net/language.types.string)



### `_getAdjustmentsTotalByType()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2348-L2363)


#### Arguments

- `$types` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))
- `$included` ([boolean](http://php.net/language.types.boolean))

#### Returns

[float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)



### `addLineItem()`





Adds a line item to the order. Updates the line item if the ID of that line item is already in the cart.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1547-L1582)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))




### `afterOrderComplete()`





Called after the order successfully completes




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1501-L1517)






### `afterSave()`





Performs actions after an element is saved.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1699-L1870)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1161-L1185)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `beforeValidate()`





This method is invoked before validation starts.



The default implementation raises a `beforeValidate` event.
You may override this method to do preliminary checks before validation.
Make sure the parent implementation is invoked so that the event can be raised.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1115-L1136)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the validation should be executed. Defaults to true.
If false is returned, the validation will stop and the model is considered invalid.



### `behaviors()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1024-L1070)



#### Returns

[array](http://php.net/language.types.array)



### `currencyAttributes()`





The attributes on the order that should be made available as formatted currency.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1192-L1218)



#### Returns

[array](http://php.net/language.types.array)



### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1141-L1156)



#### Returns

[string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1283-L1323)



#### Returns

[array](http://php.net/language.types.array)



### `displayName()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1075-L1078)



#### Returns

[null](http://php.net/language.types.null), [string](http://php.net/language.types.string)



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](craft-commerce-elements-order.md#method-fields) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1261-L1278)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](craft-commerce-elements-order.md#method-fields) on the format of the return value.



### `fields()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1223-L1256)



#### Returns

[array](http://php.net/language.types.array)



### `getAdjustmentSubtotal()`





Returns the total of adjustments made to order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2445-L2455)



#### Returns

[float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)



### `getAdjustments()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2460-L2467)



#### Returns

[craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[]



### `getAdjustmentsByType()`



Since

:   3.0








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2474-L2485)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)



### `getAdjustmentsTotal()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2515-L2526)



#### Returns

[float](http://php.net/language.types.float)



### `getAdjustmentsTotalByType()`

::: danger DEPRECATED
Deprecated in 2.2
:::









[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2336-L2341)


#### Arguments

- `$types` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))
- `$included` ([boolean](http://php.net/language.types.boolean))

#### Returns

[float](http://php.net/language.types.float), [integer](http://php.net/language.types.integer)



### `getAvailableShippingMethodOptions()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1674-L1694)



#### Returns

[craft\commerce\models\ShippingMethodOption](craft-commerce-models-shippingmethodoption.md)[]



### `getBillingAddress()`





Get the billing address on the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2610-L2617)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1899-L1902)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getCustomer()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1934-L1949)



#### Returns

[craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null)



### `getCustomerLinkHtml()`



Since

:   3.0



Customer represented as HTML




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2048-L2065)



#### Returns

[string](http://php.net/language.types.string)



### `getEmail()`





Returns the email for this order. Will always be the registered users email if the order's customer is related to a user.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1985-L1992)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getEstimatedBillingAddress()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2649-L2656)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getEstimatedShippingAddress()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2572-L2579)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getGateway()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2732-L2754)



#### Returns

[craft\commerce\base\GatewayInterface](craft-commerce-base-gatewayinterface.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getHistories()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2829-L2832)



#### Returns

[craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md)[]



### `getIsActiveCart()`





Returns whether this order is the user's current active cart.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2251-L2256)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)


### `getIsEditable()`





Returns whether the current user can edit the element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1875-L1878)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsEmpty()`





Returns whether the order has any items in it.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2263-L2266)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPaid()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2007-L2010)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsUnpaid()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2015-L2018)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getItemSubtotal()`





Returns the total of all line item's subtotals.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2430-L2438)



#### Returns

[float](http://php.net/language.types.float)



### `getItemTotal()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2144-L2153)



#### Returns

[float](http://php.net/language.types.float)



### `getLastTransaction()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2853-L2857)



#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md), [null](http://php.net/language.types.null)



### `getLineItems()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2294-L2305)



#### Returns

[craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)[]



### `getLink()`





Returns an anchor pre-filled with this element’s URL and title.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1891-L1894)



#### Returns

`\Twig\Markup`, [null](http://php.net/language.types.null)



### `getNestedTransactions()`





Returns an array of transactions for the order that have child transactions set on them.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2864-L2889)



#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]



### `getOrderAdjustments()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2490-L2502)



#### Returns

[array](http://php.net/language.types.array)



### `getOrderStatus()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2894-L2897)



#### Returns

[craft\commerce\models\OrderStatus](craft-commerce-models-orderstatus.md), [null](http://php.net/language.types.null)



### `getOrderStatusHtml()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2070-L2077)



#### Returns

[string](http://php.net/language.types.string)



### `getOutstandingBalance()`





Returns the difference between the order amount and amount paid.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2160-L2166)



#### Returns

[float](http://php.net/language.types.float)



### `getPaidStatus()`





What is the status of the orders payment




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2025-L2040)



#### Returns

[string](http://php.net/language.types.string)



### `getPaidStatusHtml()`





Paid status represented as HTML




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2084-L2106)



#### Returns

[string](http://php.net/language.types.string)



### `getPaymentCurrency()`





Returns the current payment currency, and defaults to the primary currency if not set.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2763-L2770)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [craft\commerce\errors\CurrencyException](craft-commerce-errors-currencyexception.md)


### `getPaymentSource()`





Returns the order's selected payment source if any.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2787-L2802)



#### Returns

[craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the payment source is being set by a guest customer.
- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the order is set to an invalid payment source.


### `getPdfUrl()`





Returns the URL to the order’s PDF invoice.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1911-L1929)


#### Arguments

- `$option` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The option that should be available to the PDF template (e.g. “receipt”)

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The URL to the order’s PDF invoice, or null if the PDF template doesn’t exist

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getRecalculationMode()`





Gets the recalculation mode of the order




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1589-L1592)



#### Returns

[string](http://php.net/language.types.string)



### `getShippingAddress()`





* Get the shipping address on the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2533-L2540)



#### Returns

[craft\commerce\models\Address](craft-commerce-models-address.md), [null](http://php.net/language.types.null)



### `getShippingMethod()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2698-L2725)



#### Returns

[craft\commerce\models\ShippingMethod](craft-commerce-models-shippingmethod.md), [null](http://php.net/language.types.null)



### `getShippingMethodId()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2686-L2693)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getShortNumber()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1883-L1886)



#### Returns

[string](http://php.net/language.types.string)



### `getTotal()`





Returns the raw total of the order, which is the total of all line items and adjustments. This number can be negative, so it is not the price of the order.



See also [craft\commerce\elements\Order::getTotalPrice()](craft-commerce-elements-order.md#method-gettotalprice) – The actual total price of the order
[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2115-L2118)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalAuthorized()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2208-L2241)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalDiscount()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2384-L2387)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalPaid()`





Returns the total `purchase` and `captured` transactions belonging to this order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2181-L2203)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalPrice()`





Get the total price of the order, whose minimum value is enforced by the configured {@link Settings::minimumTotalPriceStrategy strategy set for minimum total price}.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2125-L2139)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalQty()`





Returns total number of items.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2281-L2289)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalSaleAmount()`





Returns the total sale amount.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2415-L2423)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalShippingCost()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2392-L2395)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalTax()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2368-L2371)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalTaxIncluded()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2376-L2379)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalTaxablePrice()`

::: danger DEPRECATED
Deprecated in 2.2.9. Use `craft\commerce\adjusters\Tax::_getOrderTotalTaxablePrice()` instead.
:::




Returns the total price of the order, minus any tax adjustments.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1396-L1405)



#### Returns

[float](http://php.net/language.types.float)



### `getTotalWeight()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2400-L2408)



#### Returns

[float](http://php.net/language.types.float)



### `getTransactions()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2837-L2848)



#### Returns

[craft\commerce\models\Transaction](craft-commerce-models-transaction.md)[]



### `getUser()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1974-L1977)



#### Returns

[craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `hasLineItems()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2271-L2274)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `hasOutstandingBalance()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2171-L2174)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L979-L1019)






### `lowerDisplayName()`





Returns the lowercase version of [displayName()](craft-commerce-elements-order.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1083-L1086)



#### Returns

[string](http://php.net/language.types.string)



### `markAsComplete()`





Marks the order as complete and sets the default order status, then saves the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1416-L1496)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\commerce\errors\OrderStatusException](craft-commerce-errors-orderstatusexception.md)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)
- [craft\errors\ElementNotFoundException](https://docs.craftcms.com/api/v3/craft-errors-elementnotfoundexception.html)


### `pluralDisplayName()`





Returns the plural version of [displayName()](craft-commerce-elements-order.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1091-L1094)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`





Returns the plural, lowercase version of [displayName()](craft-commerce-elements-order.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1099-L1102)



#### Returns

[string](http://php.net/language.types.string)



### `recalculate()`





Regenerates all adjusters and updates line items, depending on the current recalculationMode




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1609-L1668)




#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `removeBillingAddress()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2639-L2643)






### `removeEstimatedBillingAddress()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2676-L2680)






### `removeEstimatedShippingAddress()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2599-L2603)






### `removeLineItem()`





Removes a specific line item from the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1524-L1540)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))




### `removeShippingAddress()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2562-L2566)






### `setAdjustments()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2507-L2510)


#### Arguments

- `$adjustments` ([craft\commerce\models\OrderAdjustment](craft-commerce-models-orderadjustment.md)[])




### `setBillingAddress()`





Set the billing address on the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2624-L2634)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md), [array](http://php.net/language.types.array))




### `setCustomer()`



Since

:   3.1.11








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1955-L1968)


#### Arguments

- `$customer` ([craft\commerce\models\Customer](craft-commerce-models-customer.md), [null](http://php.net/language.types.null))




### `setEmail()`





Sets the orders email address. Will have no affect if the order's customer is a registered user.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1999-L2002)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))




### `setEstimatedBillingAddress()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2662-L2671)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md), [array](http://php.net/language.types.array))




### `setEstimatedShippingAddress()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2585-L2594)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md), [array](http://php.net/language.types.array))




### `setGatewayId()`





Sets the order's selected gateway id.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2820-L2824)


#### Arguments

- `$gatewayId` ([integer](http://php.net/language.types.integer))




### `setLineItems()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2310-L2328)


#### Arguments

- `$lineItems` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md)[])




### `setPaymentCurrency()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2775-L2778)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The payment currency code




### `setPaymentSource()`





Sets the order's selected payment source




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2809-L2813)


#### Arguments

- `$paymentSource` ([craft\commerce\models\PaymentSource](craft-commerce-models-paymentsource.md), [null](http://php.net/language.types.null))




### `setRecalculationMode()`





Sets the recalculation mode of the order




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1599-L1602)


#### Arguments

- `$value`




### `setShippingAddress()`





Set the shipping address on the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L2547-L2557)


#### Arguments

- `$address` ([craft\commerce\models\Address](craft-commerce-models-address.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))




### `updateOrderPaidInformation()`





Updates the paid status and paid date of the order, and marks as complete if the order is paid or authorized.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Order.php#L1328-L1388)








## Protected Methods

| Method                                                                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](craft-commerce-elements-traits-orderelementtrait.md#method-defineactions "Defined by craft\commerce\elements\traits\OrderElementTrait")                               | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definedefaulttableattributes "Defined by craft\commerce\elements\traits\OrderElementTrait") | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineexporters "Defined by craft\base\Element")                                                    | Defines the available element exporters for a given source.
| [defineSearchableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definesearchableattributes "Defined by craft\commerce\elements\traits\OrderElementTrait")     | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-commerce-elements-traits-orderelementtrait.md#method-definesortoptions "Defined by craft\commerce\elements\traits\OrderElementTrait")                       | Returns the sort options for the element type.
| [defineSources()](craft-commerce-elements-traits-orderelementtrait.md#method-definesources "Defined by craft\commerce\elements\traits\OrderElementTrait")                               | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definetableattributes "Defined by craft\commerce\elements\traits\OrderElementTrait")               | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")                                   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")                                 | Extracts the root field names from nested fields.
| [fieldByHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldbyhandle "Defined by craft\base\Element")                                                        | Returns the field with a given handle.
| [fieldLayoutFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldlayoutfields "Defined by craft\base\Element")                                                | Returns each of this element’s fields.
| [findByCondition()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findbycondition "Defined by craft\base\Element")                                                    | Finds Element instance(s) by the given condition.
| [htmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-htmlattributes "Defined by craft\base\Element")                                                      | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-normalizefieldvalue "Defined by craft\base\Element")                                            | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-prepelementqueryfortableattribute "Defined by craft\base\Element")                | Preps the element criteria for a given table attribute
| [previewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-previewtargets "Defined by craft\base\Element")                                                      | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")                                         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-route "Defined by craft\base\Element")                                                                        | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-commerce-elements-traits-orderelementtrait.md#method-tableattributehtml "Defined by craft\commerce\elements\traits\OrderElementTrait")                     | Returns the HTML that should be shown for a given attribute in Table View.



## Constants

| Constant                              | Description
| ------------------------------------- | ---------------------------------------------------------------------------------------------
| `ATTR_STATUS_CONFLICTED`              |
| `ATTR_STATUS_MODIFIED`                |
| `ATTR_STATUS_OUTDATED`                |
| `HOMEPAGE_URI`                        |
| `ORIGIN_CP`                           | Order created from the control panel.
| `ORIGIN_REMOTE`                       | Order created by a remote source.
| `ORIGIN_WEB`                          | Order created from the front end.
| `PAID_STATUS_OVERPAID`                | Payments exceed order total.
| `PAID_STATUS_PAID`                    | Payments equal order total.
| `PAID_STATUS_PARTIAL`                 | Payments less than order total.
| `PAID_STATUS_UNPAID`                  | Payments total zero on non-free order.
| `RECALCULATION_MODE_ADJUSTMENTS_ONLY` | Recalculates adjustments only; does not recalculate line items or populate from purchasables.
| `RECALCULATION_MODE_ALL`              | Recalculates line items, populates from purchasables, and regenerates adjustments.
| `RECALCULATION_MODE_NONE`             | Does not recalculate anything on the order.
| `SCENARIO_DEFAULT`                    | The name of the default scenario.
| `SCENARIO_ESSENTIALS`                 |
| `SCENARIO_LIVE`                       |
| `STATUS_ARCHIVED`                     |
| `STATUS_DISABLED`                     |
| `STATUS_ENABLED`                      |


## Events

### EVENT_AFTER_ADD_LINE_ITEM



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after a line item has been added to an order.

```php
use craft\commerce\elements\Order;
use craft\commerce\events\LineItemEvent;
use craft\commerce\models\LineItem;
use yii\base\Event;

Event::on(
    Order::class,
    Order::EVENT_AFTER_ADD_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;
        // ...
    }
);
```



---



### EVENT_AFTER_COMPLETE_ORDER



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after an order is completed.

```php
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    Order::class,
    Order::EVENT_AFTER_COMPLETE_ORDER,
    function(Event $event) {
        // @var Order $order
        $order = $event->sender;
        // ...
    }
);
```



---



### EVENT_AFTER_ORDER_AUTHORIZED



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



This event is raised after an order is authorized in full and completed

Plugins can get notified after an order is authorized in full and completed

```php
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(Order::class, Order::EVENT_AFTER_ORDER_AUTHORIZED, function(Event $e) {
    // @var Order $order
    $order = $e->sender;
    // ...
});
```



---



### EVENT_AFTER_ORDER_PAID



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after an order is paid and completed.

```php
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    Order::class,
    Order::EVENT_AFTER_ORDER_PAID,
    function(Event $event) {
        // @var Order $order
        $order = $event->sender;
        // ...
    }
);
```



---



### EVENT_AFTER_REMOVE_LINE_ITEM



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after a line item has been removed from an order.



---



### EVENT_BEFORE_ADD_LINE_ITEM



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered before a new line item has been added to the order.

```php
use craft\commerce\elements\Order;
use craft\commerce\models\LineItem;
use craft\commerce\events\LineItemEvent;
use yii\base\Event;

Event::on(
    Order::class,
    Order::EVENT_BEFORE_ADD_LINE_ITEM,
    function(LineItemEvent $event) {
        // @var LineItem $lineItem
        $lineItem = $event->lineItem;
        // @var bool $isNew
        $isNew = $event->isNew;
        // @var bool $isValid
        $isValid = $event->isValid;
        // ...
    }
);
```



---



### EVENT_BEFORE_COMPLETE_ORDER



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered before an order is completed.

```php
use craft\commerce\elements\Order;
use yii\base\Event;

Event::on(
    Order::class,
    Order::EVENT_BEFORE_COMPLETE_ORDER,
    function(Event $event) {
        // @var Order $order
        $order = $event->sender;
        // ...
    }
);
```



---




