---
title: craft\commerce\models\Settings
code:
  - php
  - twig
---

# Settings

Type

:   Class

Namespace

:   craft\commerce\models

Inherits

:   [craft\commerce\models\Settings](craft-commerce-models-settings.md) &raquo;
[craft\commerce\base\Model](craft-commerce-base-model.md) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Settings model.





[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeCartDuration](craft-commerce-models-settings.md#activecartduration)                                                       | [integer](http://php.net/language.types.integer) – The default length of time a cart is considered active since its last update See [craft\helpers\ConfigHelper::durationInSeconds()](https://docs.craftcms.com/api/v3/craft-helpers-confighelper.html#method-durationinseconds) for a list of supported value types.
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allowEmptyCartOnCheckout](craft-commerce-models-settings.md#allowemptycartoncheckout)                                           | [boolean](http://php.net/language.types.boolean) – Allow the cart to be empty on checkout
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [autoSetNewCartAddresses](craft-commerce-models-settings.md#autosetnewcartaddresses)                                             | [boolean](http://php.net/language.types.boolean)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cartVariable](craft-commerce-models-settings.md#cartvariable)                                                                   | [string](http://php.net/language.types.string)
| [defaultView](craft-commerce-models-settings.md#defaultview)                                                                     | [string](http://php.net/language.types.string) – Default view for Commerce in the CP
| [defaultViewOptions](craft-commerce-models-settings.md#defaultviewoptions)                                                       | [array](http://php.net/language.types.array)
| [dimensionUnits](craft-commerce-models-settings.md#dimensionunits)                                                               | [string](http://php.net/language.types.string) – Dimension Units
| [emailSenderAddress](craft-commerce-models-settings.md#emailsenderaddress)                                                       | [string](http://php.net/language.types.string) – Sender's email address
| [emailSenderAddressPlaceholder](craft-commerce-models-settings.md#emailsenderaddressplaceholder)                                 | [string](http://php.net/language.types.string)
| [emailSenderName](craft-commerce-models-settings.md#emailsendername)                                                             | [string](http://php.net/language.types.string) – Sender's name
| [emailSenderNamePlaceholder](craft-commerce-models-settings.md#emailsendernameplaceholder)                                       | [string](http://php.net/language.types.string)
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [gatewayPostRedirectTemplate](craft-commerce-models-settings.md#gatewaypostredirecttemplate)                                     | [string](http://php.net/language.types.string)
| [gatewaySettings](craft-commerce-models-settings.md#gatewaysettings)                                                             | [array](http://php.net/language.types.array)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [loadCartRedirectUrl](craft-commerce-models-settings.md#loadcartredirecturl)                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The uri to redirect to after using the load cart url
| [minimumTotalPriceStrategy](craft-commerce-models-settings.md#minimumtotalpricestrategy)                                         | [string](http://php.net/language.types.string)
| [minimumTotalPriceStrategyOptions](craft-commerce-models-settings.md#minimumtotalpricestrategyoptions)                           | [array](http://php.net/language.types.array)
| [orderPdfFilenameFormat](craft-commerce-models-settings.md#orderpdffilenameformat)                                               | [string](http://php.net/language.types.string) – Order PDF file name format
| [orderPdfPath](craft-commerce-models-settings.md#orderpdfpath)                                                                   | [string](http://php.net/language.types.string) – Order PDF Path
| [orderReferenceFormat](craft-commerce-models-settings.md#orderreferenceformat)                                                   | [string](http://php.net/language.types.string) – The order reference format
| [paymentCurrency](craft-commerce-models-settings.md#paymentcurrency)                                                             | [array](http://php.net/language.types.array)
| [paymentMethodSettings](craft-commerce-models-settings.md#paymentmethodsettings)                                                 | [array](http://php.net/language.types.array)
| [pdfAllowRemoteImages](craft-commerce-models-settings.md#pdfallowremoteimages)                                                   | [boolean](http://php.net/language.types.boolean)
| [pdfPaperOrientation](craft-commerce-models-settings.md#pdfpaperorientation)                                                     | [string](http://php.net/language.types.string) – Order PDF Orientation
| [pdfPaperSize](craft-commerce-models-settings.md#pdfpapersize)                                                                   | [string](http://php.net/language.types.string) – Order PDF Size
| [purgeInactiveCarts](craft-commerce-models-settings.md#purgeinactivecarts)                                                       | [boolean](http://php.net/language.types.boolean)
| [purgeInactiveCartsDuration](craft-commerce-models-settings.md#purgeinactivecartsduration)                                       | [integer](http://php.net/language.types.integer) – The default length of time before inactive carts are purged.
| [requireBillingAddressAtCheckout](craft-commerce-models-settings.md#requirebillingaddressatcheckout)                             | [boolean](http://php.net/language.types.boolean)
| [requireShippingAddressAtCheckout](craft-commerce-models-settings.md#requireshippingaddressatcheckout)                           | [boolean](http://php.net/language.types.boolean)
| [requireShippingMethodSelectionAtCheckout](craft-commerce-models-settings.md#requireshippingmethodselectionatcheckout)           | [boolean](http://php.net/language.types.boolean)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [showCustomerInfoTab](craft-commerce-models-settings.md#showcustomerinfotab)                                                     | [boolean](http://php.net/language.types.boolean)
| [updateBillingDetailsUrl](craft-commerce-models-settings.md#updatebillingdetailsurl)                                             | [string](http://php.net/language.types.string)
| [updateCartSearchIndexes](craft-commerce-models-settings.md#updatecartsearchindexes)                                             | [boolean](http://php.net/language.types.boolean) – Should the search index for a cart be updated when saving the cart on the front-end.
| [useBillingAddressForTax](craft-commerce-models-settings.md#usebillingaddressfortax)                                             | [boolean](http://php.net/language.types.boolean)
| [validateBusinessTaxIdAsVatId](craft-commerce-models-settings.md#validatebusinesstaxidasvatid)                                   | [boolean](http://php.net/language.types.boolean)
| [validateCartCustomFieldsOnSubmission](craft-commerce-models-settings.md#validatecartcustomfieldsonsubmission)                   | [boolean](http://php.net/language.types.boolean)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [weightUnits](craft-commerce-models-settings.md#weightunits)                                                                     | [string](http://php.net/language.types.string) – Weight Units
| [weightUnitsOptions](craft-commerce-models-settings.md#weightunitsoptions)                                                       | [array](http://php.net/language.types.array)

### `activeCartDuration`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   2.2



The default length of time a cart is considered active since its last update

See [craft\helpers\ConfigHelper::durationInSeconds()](https://docs.craftcms.com/api/v3/craft-helpers-confighelper.html#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L123)



### `allowEmptyCartOnCheckout`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   2.2



Allow the cart to be empty on checkout



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L164)



### `autoSetNewCartAddresses`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L158)



### `cartVariable`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L185)



### `defaultView`



Type

:   [string](http://php.net/language.types.string)

Since

:   2.2



Default view for Commerce in the CP



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L180)



### `defaultViewOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   2.2







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php)



### `dimensionUnits`



Type

:   [string](http://php.net/language.types.string)



Dimension Units



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L48)



### `emailSenderAddress`



Type

:   [string](http://php.net/language.types.string)



Sender's email address



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L53)



### `emailSenderAddressPlaceholder`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L83)



### `emailSenderName`



Type

:   [string](http://php.net/language.types.string)



Sender's name



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L58)



### `emailSenderNamePlaceholder`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L88)



### `gatewayPostRedirectTemplate`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L128)



### `gatewaySettings`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L190)



### `loadCartRedirectUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Since

:   3.1



The uri to redirect to after using the load cart url



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L213)



### `minimumTotalPriceStrategy`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L93)



### `minimumTotalPriceStrategyOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php)



### `orderPdfFilenameFormat`



Type

:   [string](http://php.net/language.types.string)



Order PDF file name format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L78)



### `orderPdfPath`



Type

:   [string](http://php.net/language.types.string)



Order PDF Path



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L63)



### `orderReferenceFormat`



Type

:   [string](http://php.net/language.types.string)



The order reference format



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L174)



### `paymentCurrency`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L98)



### `paymentMethodSettings`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L103)



### `pdfAllowRemoteImages`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L169)



### `pdfPaperOrientation`



Type

:   [string](http://php.net/language.types.string)



Order PDF Orientation



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L73)



### `pdfPaperSize`



Type

:   [string](http://php.net/language.types.string)



Order PDF Size



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L68)



### `purgeInactiveCarts`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L108)



### `purgeInactiveCartsDuration`



Type

:   [integer](http://php.net/language.types.integer)



The default length of time before inactive carts are purged. Default: 90 days

See [craft\helpers\ConfigHelper::durationInSeconds()](https://docs.craftcms.com/api/v3/craft-helpers-confighelper.html#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L115)



### `requireBillingAddressAtCheckout`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L148)



### `requireShippingAddressAtCheckout`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L143)



### `requireShippingMethodSelectionAtCheckout`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L153)



### `showCustomerInfoTab`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L201)



### `updateBillingDetailsUrl`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L195)



### `updateCartSearchIndexes`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.5



Should the search index for a cart be updated when saving the cart on the front-end.



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L219)



### `useBillingAddressForTax`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L133)



### `validateBusinessTaxIdAsVatId`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L138)



### `validateCartCustomFieldsOnSubmission`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.0.12







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L207)



### `weightUnits`



Type

:   [string](http://php.net/language.types.string)



Weight Units



[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L43)



### `weightUnitsOptions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php)







## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                           | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                           | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                       | Sets a component property to be null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                  | Adds errors from another model, with a given attribute name prefix.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")               | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-behaviors "Defined by craft\base\Model")                            | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defineRules()](craft-commerce-models-settings.md#method-definerules)                                                                           | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getDefaultViewOptions()](craft-commerce-models-settings.md#method-getdefaultviewoptions)                                                       |
| [getDimensionUnits()](craft-commerce-models-settings.md#method-getdimensionunits)                                                               |
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                              | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getMinimumTotalPriceStrategyOptions()](craft-commerce-models-settings.md#method-getminimumtotalpricestrategyoptions)                           |
| [getPaymentCurrency()](craft-commerce-models-settings.md#method-getpaymentcurrency)                                                             |
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getWeightUnitsOptions()](craft-commerce-models-settings.md#method-getweightunitsoptions)                                                       |
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                            | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a property is defined for this component.
| [init()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-init "Defined by craft\base\Model")                                      | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                    | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L298-L305)



#### Returns

[array](http://php.net/language.types.array)



### `getDefaultViewOptions()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L282-L293)



#### Returns

[array](http://php.net/language.types.array)



### `getDimensionUnits()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L236-L245)



#### Returns

[array](http://php.net/language.types.array)



### `getMinimumTotalPriceStrategyOptions()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L250-L257)



#### Returns

[array](http://php.net/language.types.array)



### `getPaymentCurrency()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L265-L276)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the currency in the config file is not set up
- [craft\commerce\errors\CurrencyException](craft-commerce-errors-currencyexception.md)


### `getWeightUnitsOptions()`










[View source](https://github.com/craftcms/commerce/blob/master/src/models/Settings.php#L224-L231)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



## Constants

| Constant                                | Description
| --------------------------------------- | ---------------------------------
| `MINIMUM_TOTAL_PRICE_STRATEGY_DEFAULT`  |
| `MINIMUM_TOTAL_PRICE_STRATEGY_SHIPPING` |
| `MINIMUM_TOTAL_PRICE_STRATEGY_ZERO`     |
| `SCENARIO_DEFAULT`                      | The name of the default scenario.
| `VIEW_URI_CUSTOMERS`                    |
| `VIEW_URI_ORDERS`                       |
| `VIEW_URI_PRODUCTS`                     |
| `VIEW_URI_PROMOTIONS`                   |
| `VIEW_URI_SHIPPING`                     |
| `VIEW_URI_SUBSCRIPTIONS`                |
| `VIEW_URI_TAX`                          |



