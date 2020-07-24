---
title: craft\commerce\elements\Product
code:
  - php
  - twig
---

# Product

Type

:   Class

Namespace

:   craft\commerce\elements

Inherits

:   [craft\commerce\elements\Product](craft-commerce-elements-product.md) &raquo;
[craft\base\Element](https://docs.craftcms.com/api/v3/craft-base-element.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\ElementTrait](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Product model.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)


## Public Properties

| Property                                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")              | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [ancestors](https://docs.craftcms.com/api/v3/craft-base-element.html#ancestors "Defined by craft\base\Element")                               | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [archived](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#archived "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                          | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [availableForPurchase](craft-commerce-elements-product.md#availableforpurchase)                                                               | [boolean](http://php.net/language.types.boolean) – Is this product available to be purchased
| [awaitingFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#awaitingfieldvalues "Defined by craft\base\ElementTrait") | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                    | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cheapestVariant](craft-commerce-elements-product.md#cheapestvariant)                                                                         | [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)
| [children](https://docs.craftcms.com/api/v3/craft-base-element.html#children "Defined by craft\base\Element")                                 | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [contentId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#contentid "Defined by craft\base\ElementTrait")                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](https://docs.craftcms.com/api/v3/craft-base-element.html#contenttable "Defined by craft\base\Element")                         | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-commerce-elements-product.md#cpediturl)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#currentrevision "Defined by craft\base\Element")                   | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datecreated "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datedeleted "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#dateupdated "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [defaultHeight](craft-commerce-elements-product.md#defaultheight)                                                                             | [float](http://php.net/language.types.float) – Default height
| [defaultLength](craft-commerce-elements-product.md#defaultlength)                                                                             | [float](http://php.net/language.types.float) – Default length
| [defaultPrice](craft-commerce-elements-product.md#defaultprice)                                                                               | [float](http://php.net/language.types.float) – Default price
| [defaultSku](craft-commerce-elements-product.md#defaultsku)                                                                                   | [string](http://php.net/language.types.string) – Default SKU
| [defaultVariant](craft-commerce-elements-product.md#defaultvariant)                                                                           | [null](http://php.net/language.types.null), [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)
| [defaultVariantId](craft-commerce-elements-product.md#defaultvariantid)                                                                       | [integer](http://php.net/language.types.integer) – DefaultVariantId
| [defaultWeight](craft-commerce-elements-product.md#defaultweight)                                                                             | [float](http://php.net/language.types.float) – Default weight
| [defaultWidth](craft-commerce-elements-product.md#defaultwidth)                                                                               | [float](http://php.net/language.types.float) – Default width
| [descendants](https://docs.craftcms.com/api/v3/craft-base-element.html#descendants "Defined by craft\base\Element")                           | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [dirtyAttributes](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyattributes "Defined by craft\base\Element")                   | [string](http://php.net/language.types.string)[]
| [dirtyFields](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyfields "Defined by craft\base\Element")                           | [string](http://php.net/language.types.string)[]
| [draftId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#draftid "Defined by craft\base\ElementTrait")                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#duplicateof "Defined by craft\base\ElementTrait")                 | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](craft-commerce-elements-product.md#editorhtml)                                                                                   | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](craft-commerce-elements-product.md#enabled)                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](https://docs.craftcms.com/api/v3/craft-base-element.html#enabledforsite "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                  | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [expiryDate](craft-commerce-elements-product.md#expirydate)                                                                                   | [DateTime](http://php.net/class.datetime) – Expiry date
| [fieldColumnPrefix](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcolumnprefix "Defined by craft\base\Element")               | [string](http://php.net/language.types.string)
| [fieldContext](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcontext "Defined by craft\base\Element")                         | [string](http://php.net/language.types.string)
| [fieldLayout](craft-commerce-elements-product.md#fieldlayout)                                                                                 | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)
| [fieldLayoutId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#fieldlayoutid "Defined by craft\base\ElementTrait")             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldparamnamespace "Defined by craft\base\Element")           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldvalues "Defined by craft\base\Element")                           | [array](http://php.net/language.types.array) – The field values (handle => value)
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                        | [array](http://php.net/language.types.array) – The first errors.
| [freeShipping](craft-commerce-elements-product.md#freeshipping)                                                                               | [boolean](http://php.net/language.types.boolean) – Whether the product has free shipping
| [gqlTypeName](craft-commerce-elements-product.md#gqltypename)                                                                                 | [string](http://php.net/language.types.string)
| [hardDelete](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#harddelete "Defined by craft\base\ElementTrait")                   | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#hasdescendants "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](https://docs.craftcms.com/api/v3/craft-base-element.html#hasfreshcontent "Defined by craft\base\Element")                   | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [hasUnlimitedStock](craft-commerce-elements-product.md#hasunlimitedstock)                                                                     | [boolean](http://php.net/language.types.boolean)
| [id](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#id "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isdraft "Defined by craft\base\Element")                                   | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-commerce-elements-product.md#iseditable)                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isHomepage](https://docs.craftcms.com/api/v3/craft-base-element.html#ishomepage "Defined by craft\base\Element")                             | [boolean](http://php.net/language.types.boolean)
| [isRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#isrevision "Defined by craft\base\Element")                             | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isunsaveddraft "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                              | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [level](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#level "Defined by craft\base\ElementTrait")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#lft "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](https://docs.craftcms.com/api/v3/craft-base-element.html#link "Defined by craft\base\Element")                                         | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [name](craft-commerce-elements-product.md#name)                                                                                               | [string](http://php.net/language.types.string) – Name
| [newSiteIds](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#newsiteids "Defined by craft\base\ElementTrait")                   | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](https://docs.craftcms.com/api/v3/craft-base-element.html#next "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [nextSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#nextsibling "Defined by craft\base\Element")                           | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [parent](https://docs.craftcms.com/api/v3/craft-base-element.html#parent "Defined by craft\base\Element")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [postDate](craft-commerce-elements-product.md#postdate)                                                                                       | [DateTime](http://php.net/class.datetime) – Post date
| [prev](https://docs.craftcms.com/api/v3/craft-base-element.html#prev "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prevSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#prevsibling "Defined by craft\base\Element")                           | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [previewTargets](https://docs.craftcms.com/api/v3/craft-base-element.html#previewtargets "Defined by craft\base\Element")                     | [array](http://php.net/language.types.array)
| [previewing](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#previewing "Defined by craft\base\ElementTrait")                   | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [promotable](craft-commerce-elements-product.md#promotable)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the product is promotable
| [propagateAll](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagateall "Defined by craft\base\ElementTrait")               | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagating "Defined by craft\base\ElementTrait")                 | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](https://docs.craftcms.com/api/v3/craft-base-element.html#ref "Defined by craft\base\Element")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [resaving](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#resaving "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#revisionid "Defined by craft\base\ElementTrait")                   | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#rgt "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#root "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](https://docs.craftcms.com/api/v3/craft-base-element.html#route "Defined by craft\base\Element")                                       | `mixed` – The route that the request should use, or null if no special action should be taken
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                              | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#searchscore "Defined by craft\base\ElementTrait")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search) parameter was used when querying for the element
| [serializedFieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#serializedfieldvalues "Defined by craft\base\Element")       | [array](http://php.net/language.types.array)
| [shippingCategory](craft-commerce-elements-product.md#shippingcategory)                                                                       | [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)
| [shippingCategoryId](craft-commerce-elements-product.md#shippingcategoryid)                                                                   | [integer](http://php.net/language.types.integer) – Shipping category ID
| [siblings](https://docs.craftcms.com/api/v3/craft-base-element.html#siblings "Defined by craft\base\Element")                                 | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [site](https://docs.craftcms.com/api/v3/craft-base-element.html#site "Defined by craft\base\Element")                                         | [craft\models\Site](https://docs.craftcms.com/api/v3/craft-models-site.html)
| [siteId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#siteid "Defined by craft\base\ElementTrait")                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#slug "Defined by craft\base\ElementTrait")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceid "Defined by craft\base\Element")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceuid "Defined by craft\base\Element")                               | [string](http://php.net/language.types.string)
| [status](craft-commerce-elements-product.md#status)                                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [structureId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#structureid "Defined by craft\base\ElementTrait")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](https://docs.craftcms.com/api/v3/craft-base-element.html#supportedsites "Defined by craft\base\Element")                     | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [taxCategory](craft-commerce-elements-product.md#taxcategory)                                                                                 | [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md) – Tax category
| [taxCategoryId](craft-commerce-elements-product.md#taxcategoryid)                                                                             | [integer](http://php.net/language.types.integer) – Tax category ID
| [tempId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#tempid "Defined by craft\base\ElementTrait")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#title "Defined by craft\base\ElementTrait")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#totaldescendants "Defined by craft\base\Element")                 | [integer](http://php.net/language.types.integer)
| [totalStock](craft-commerce-elements-product.md#totalstock)                                                                                   | [integer](http://php.net/language.types.integer)
| [trashed](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#trashed "Defined by craft\base\ElementTrait")                         | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [type](craft-commerce-elements-product.md#type)                                                                                               | [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)
| [typeId](craft-commerce-elements-product.md#typeid)                                                                                           | [integer](http://php.net/language.types.integer) – Product type ID
| [uiLabel](https://docs.craftcms.com/api/v3/craft-base-element.html#uilabel "Defined by craft\base\Element")                                   | [string](http://php.net/language.types.string)
| [uid](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uid "Defined by craft\base\ElementTrait")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uri "Defined by craft\base\ElementTrait")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](craft-commerce-elements-product.md#uriformat)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](https://docs.craftcms.com/api/v3/craft-base-element.html#url "Defined by craft\base\Element")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                          | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [variants](craft-commerce-elements-product.md#variants)                                                                                       | [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)[]

### `availableForPurchase`



Type

:   [boolean](http://php.net/language.types.boolean)



Is this product available to be purchased



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L108)



### `cheapestVariant`



Type

:   [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `defaultHeight`



Type

:   [float](http://php.net/language.types.float)



Default height



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L128)



### `defaultLength`



Type

:   [float](http://php.net/language.types.float)



Default length



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L133)



### `defaultPrice`



Type

:   [float](http://php.net/language.types.float)



Default price



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L123)



### `defaultSku`



Type

:   [string](http://php.net/language.types.string)



Default SKU



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L118)



### `defaultVariant`



Type

:   [null](http://php.net/language.types.null), [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `defaultVariantId`



Type

:   [integer](http://php.net/language.types.integer)



DefaultVariantId



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L113)



### `defaultWeight`



Type

:   [float](http://php.net/language.types.float)



Default weight



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L143)



### `defaultWidth`



Type

:   [float](http://php.net/language.types.float)



Default width



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L138)



### `editorHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The HTML for the editor HUD



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `enabled`



Type

:   [boolean](http://php.net/language.types.boolean)





Whether the element is enabled





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L103)



### `expiryDate`



Type

:   [DateTime](http://php.net/class.datetime)



Expiry date



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L73)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `freeShipping`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the product has free shipping



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L98)



### `gqlTypeName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `hasUnlimitedStock`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `isEditable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `name`



Type

:   [string](http://php.net/language.types.string)



Name



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L153)



### `postDate`



Type

:   [DateTime](http://php.net/class.datetime)



Post date



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L68)



### `promotable`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the product is promotable



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L93)



### `shippingCategory`



Type

:   [craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `shippingCategoryId`



Type

:   [integer](http://php.net/language.types.integer)



Shipping category ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L88)



### `status`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `taxCategory`



Type

:   [craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md)



Tax category



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L148)



### `taxCategoryId`



Type

:   [integer](http://php.net/language.types.integer)



Tax category ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L83)



### `totalStock`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `type`



Type

:   [craft\commerce\models\ProductType](craft-commerce-models-producttype.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `typeId`



Type

:   [integer](http://php.net/language.types.integer)



Product type ID



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L78)



### `uriFormat`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)



### `variants`



Type

:   [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)[]







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php)





## Protected Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](https://docs.craftcms.com/api/v3/craft-base-element.html#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](https://docs.craftcms.com/api/v3/craft-base-element.html#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__call "Defined by craft\base\Element")                                                 | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                   |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                | Constructor.
| [__get()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__get "Defined by craft\base\Element")                                                   | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__isset "Defined by craft\base\Element")                                               | Checks if a property is set.
| [__set()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__set "Defined by craft\base\Element")                                                   | Sets the value of a component property.
| [__toString()](craft-commerce-elements-product.md#method-tostring)                                                                                                 | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                          | Sets a component property to be null.
| [actions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-actions "Defined by craft\base\Element")                                               | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-adderror "Defined by craft\base\Element")                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                              | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-commerce-elements-product.md#method-afterdelete)                                                                                             | Performs actions after an element is deleted.
| [afterMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-aftermoveinstructure "Defined by craft\base\Element")                     | Performs actions after an element is moved within a structure.
| [afterPropagate()](craft-commerce-elements-product.md#method-afterpropagate)                                                                                       | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](craft-commerce-elements-product.md#method-afterrestore)                                                                                           | Performs actions after an element is restored.
| [afterSave()](craft-commerce-elements-product.md#method-aftersave)                                                                                                 | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                      | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                            | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                          | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                    | Returns the attribute hints.
| [attributeLabels()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributelabels "Defined by craft\base\Element")                               | Returns the attribute labels.
| [attributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributes "Defined by craft\base\Element")                                         | Returns the list of attribute names.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforedelete "Defined by craft\base\Element")                                     | Performs actions before an element is deleted.
| [beforeMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforemoveinstructure "Defined by craft\base\Element")                   | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-commerce-elements-product.md#method-beforerestore)                                                                                         | Performs actions before an element is restored.
| [beforeSave()](craft-commerce-elements-product.md#method-beforesave)                                                                                               | Performs actions before an element is saved.
| [beforeValidate()](craft-commerce-elements-product.md#method-beforevalidate)                                                                                       | This method is invoked before validation starts.
| [behaviors()](craft-commerce-elements-product.md#method-behaviors)                                                                                                 |
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                    | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                          | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [currencyAttributes()](craft-commerce-elements-product.md#method-currencyattributes)                                                                               |
| [datetimeAttributes()](craft-commerce-elements-product.md#method-datetimeattributes)                                                                               | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defaulttableattributes "Defined by craft\base\Element")                 | Returns the list of table attribute keys that should be shown by default.
| [defineRules()](craft-commerce-elements-product.md#method-definerules)                                                                                             | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                            | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                          | Detaches all behaviors from the component.
| [displayName()](craft-commerce-elements-product.md#method-displayname)                                                                                             | Returns the display name of this class.
| [eagerLoadingMap()](craft-commerce-elements-product.md#method-eagerloadingmap)                                                                                     | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                          | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-exporters "Defined by craft\base\Element")                                           | Returns the available export options for a given source.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                        | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-commerce-elements-product.md#method-fields)                                                                                                       |
| [find()](craft-commerce-elements-product.md#method-find)                                                                                                           | Creates an [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance for query purpose.
| [findAll()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findall "Defined by craft\base\Element")                                               | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findone "Defined by craft\base\Element")                                               | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                    | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                          | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAncestors()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getancestors "Defined by craft\base\Element")                                     | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributelabel "Defined by craft\base\Element")                           | Returns the text label for the specified attribute.
| [getAttributeStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributestatus "Defined by craft\base\Element")                         | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                      | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                  | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                | Returns all behaviors attached to this component.
| [getCheapestVariant()](craft-commerce-elements-product.md#method-getcheapestvariant)                                                                               | Return the cheapest variant.
| [getChildren()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getchildren "Defined by craft\base\Element")                                       | Returns the element’s children.
| [getContentTable()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcontenttable "Defined by craft\base\Element")                               | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-commerce-elements-product.md#method-getcpediturl)                                                                                           | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcurrentrevision "Defined by craft\base\Element")                         | Returns the element’s current revision, if one exists.
| [getDefaultVariant()](craft-commerce-elements-product.md#method-getdefaultvariant)                                                                                 | Returns the default variant.
| [getDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdescendants "Defined by craft\base\Element")                                 | Returns the element’s descendants.
| [getDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyattributes "Defined by craft\base\Element")                         | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyfields "Defined by craft\base\Element")                                 | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelementcount "Defined by craft\base\Element")         | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelements "Defined by craft\base\Element")                 | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](craft-commerce-elements-product.md#method-geteditorhtml)                                                                                         | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getenabledforsite "Defined by craft\base\Element")                           | Returns whether the element is enabled for the current site.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                  | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                              | Returns the errors for all attributes or a single attribute.
| [getFieldColumnPrefix()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcolumnprefix "Defined by craft\base\Element")                     | Returns the field column prefix this element’s content uses.
| [getFieldContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcontext "Defined by craft\base\Element")                               | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-commerce-elements-product.md#method-getfieldlayout)                                                                                       | Returns the field layout used by this element.
| [getFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldparamnamespace "Defined by craft\base\Element")                 | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldstatus "Defined by craft\base\Element")                                 | Returns the status of a given field.
| [getFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalue "Defined by craft\base\Element")                                   | Returns the value for a given field.
| [getFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalues "Defined by craft\base\Element")                                 | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                      | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                    | Returns the first error of every attribute in the model.
| [getGqlTypeName()](craft-commerce-elements-product.md#method-getgqltypename)                                                                                       | Returns the GraphQL type name for this element type.
| [getHasDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasdescendants "Defined by craft\base\Element")                           | Returns whether the element has descendants.
| [getHasFreshContent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasfreshcontent "Defined by craft\base\Element")                         | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHasUnlimitedStock()](craft-commerce-elements-product.md#method-gethasunlimitedstock)                                                                           | Returns whether at least one variant has unlimited stock.
| [getHtmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethtmlattributes "Defined by craft\base\Element")                           | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getid "Defined by craft\base\Element")                                                   | Returns the element’s ID.
| [getIsDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisdraft "Defined by craft\base\Element")                                         | Returns whether this is a draft.
| [getIsEditable()](craft-commerce-elements-product.md#method-getiseditable)                                                                                         | Returns whether the current user can edit the element.
| [getIsHomepage()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getishomepage "Defined by craft\base\Element")                                   | Returns whether this element represents the site homepage.
| [getIsRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisrevision "Defined by craft\base\Element")                                   | Returns whether this is a revision.
| [getIsUnsavedDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisunsaveddraft "Defined by craft\base\Element")                           | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                          | Returns an iterator for traversing the attributes in the model.
| [getLink()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getlink "Defined by craft\base\Element")                                               | Returns an anchor pre-filled with this element’s URL and title.
| [getName()](craft-commerce-elements-product.md#method-getname)                                                                                                     |
| [getNext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnext "Defined by craft\base\Element")                                               | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnextsibling "Defined by craft\base\Element")                                 | Returns the element’s next sibling.
| [getParent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getparent "Defined by craft\base\Element")                                           | Returns the element’s parent.
| [getPrev()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprev "Defined by craft\base\Element")                                               | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprevsibling "Defined by craft\base\Element")                                 | Returns the element’s previous sibling.
| [getPreviewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getpreviewtargets "Defined by craft\base\Element")                           | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [getRef()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getref "Defined by craft\base\Element")                                                 | Returns the reference string to this element.
| [getRoute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getroute "Defined by craft\base\Element")                                             | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                          | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-commerce-elements-product.md#method-getsearchkeywords)                                                                                 | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getserializedfieldvalues "Defined by craft\base\Element")             | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getShippingCategory()](craft-commerce-elements-product.md#method-getshippingcategory)                                                                             | Returns the shipping category.
| [getSiblings()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsiblings "Defined by craft\base\Element")                                       | Returns all of the element’s siblings.
| [getSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsite "Defined by craft\base\Element")                                               | Returns the site the element is associated with.
| [getSourceId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceid "Defined by craft\base\Element")                                       | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceuid "Defined by craft\base\Element")                                     | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-commerce-elements-product.md#method-getstatus)                                                                                                 | Returns the element’s status.
| [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsupportedsites "Defined by craft\base\Element")                           | Returns the sites this element is associated with.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettableattributehtml "Defined by craft\base\Element")                   | Returns the HTML that should be shown for a given attribute in Table View.
| [getTaxCategory()](craft-commerce-elements-product.md#method-gettaxcategory)                                                                                       | Returns the tax category.
| [getThumbUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getthumburl "Defined by craft\base\Element")                                       | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettotaldescendants "Defined by craft\base\Element")                       | Returns the total number of descendants that the element has.
| [getTotalStock()](craft-commerce-elements-product.md#method-gettotalstock)                                                                                         |
| [getType()](craft-commerce-elements-product.md#method-gettype)                                                                                                     | Returns the product's product type.
| [getUiLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getuilabel "Defined by craft\base\Element")                                         | Returns what the element should be called within the control panel.
| [getUriFormat()](craft-commerce-elements-product.md#method-geturiformat)                                                                                           | Returns the URI format used to generate this element’s URI.
| [getUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl "Defined by craft\base\Element")                                                 | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                      | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getVariants()](craft-commerce-elements-product.md#method-getvariants)                                                                                             | Returns an array of the product's variants.
| [gqlScopesByContext()](craft-commerce-elements-product.md#method-gqlscopesbycontext)                                                                               | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](craft-commerce-elements-product.md#method-gqltypenamebycontext)                                                                           | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-commerce-elements-product.md#method-hascontent)                                                                                               | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-haseagerloadedelements "Defined by craft\base\Element")                 | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                        | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether a property is defined for this component.
| [hasStatuses()](craft-commerce-elements-product.md#method-hasstatuses)                                                                                             | Returns whether elements of this type have statuses.
| [hasTitles()](craft-commerce-elements-product.md#method-hastitles)                                                                                                 | Returns whether elements of this type have traditional titles.
| [hasUris()](craft-commerce-elements-product.md#method-hasuris)                                                                                                     | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-indexhtml "Defined by craft\base\Element")                                           | Returns the element index HTML.
| [init()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-init "Defined by craft\base\Element")                                                     | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                    | Returns static class instance, which can be used to obtain meta information.
| [isAncestorOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isancestorof "Defined by craft\base\Element")                                     | Returns whether this element is an ancestor of another one.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                              | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                          | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                  | Returns a value indicating whether the attribute is safe for massive assignments.
| [isChildOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-ischildof "Defined by craft\base\Element")                                           | Returns whether this element is a direct child of another one.
| [isDescendantOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isdescendantof "Defined by craft\base\Element")                                 | Returns whether this element is a descendant of another one.
| [isFieldDirty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isfielddirty "Defined by craft\base\Element")                                     | Returns whether a custom field value has changed since the element was first loaded.
| [isFieldEmpty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isfieldempty "Defined by craft\base\Element")                                     | Returns whether a field is empty.
| [isLocalized()](craft-commerce-elements-product.md#method-islocalized)                                                                                             | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isnextsiblingof "Defined by craft\base\Element")                               | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isparentof "Defined by craft\base\Element")                                         | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isprevsiblingof "Defined by craft\base\Element")                               | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-issiblingof "Defined by craft\base\Element")                                       | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                        | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                        | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-commerce-elements-product.md#method-lowerdisplayname)                                                                                   | Returns the lowercase version of [displayName()](craft-commerce-elements-product.md#method-displayname).
| [markAsClean()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasclean "Defined by craft\base\Element")                                       | Resets the record of dirty attributes and fields.
| [markAsDirty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasdirty "Defined by craft\base\Element")                                       | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                  | Detaches an existing event handler from this component.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-offsetexists "Defined by craft\base\Element")                                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                              | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                              | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                          | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                    | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                              | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-commerce-elements-product.md#method-pluraldisplayname)                                                                                 | Returns the plural version of [displayName()](craft-commerce-elements-product.md#method-displayname).
| [pluralLowerDisplayName()](craft-commerce-elements-product.md#method-plurallowerdisplayname)                                                                       | Returns the plural, lowercase version of [displayName()](craft-commerce-elements-product.md#method-displayname).
| [prepElementQueryForTableAttribute()](craft-commerce-elements-product.md#method-prepelementqueryfortableattribute)                                                 | Preps the element criteria for a given table attribute
| [refHandle()](craft-commerce-elements-product.md#method-refhandle)                                                                                                 | Returns the handle that should be used to refer to this element type from reference tags.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                    | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                              | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-searchableattributes "Defined by craft\base\Element")                     | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                      | Sets the attribute values in a massive way.
| [setDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setdirtyattributes "Defined by craft\base\Element")                         | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-seteagerloadedelementcount "Defined by craft\base\Element")         | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-commerce-elements-product.md#method-seteagerloadedelements)                                                                       | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setenabledforsite "Defined by craft\base\Element")                           | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldparamnamespace "Defined by craft\base\Element")                 | Sets the namespace used by custom field params on the request.
| [setFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvalue "Defined by craft\base\Element")                                   | Sets the value for a given field.
| [setFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvalues "Defined by craft\base\Element")                                 | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setfieldvaluesfromrequest "Defined by craft\base\Element")           | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setnext "Defined by craft\base\Element")                                               | Sets the default next element.
| [setParent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setparent "Defined by craft\base\Element")                                           | Sets the element’s parent.
| [setPrev()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setprev "Defined by craft\base\Element")                                               | Sets the default previous element.
| [setRevisionCreatorId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setrevisioncreatorid "Defined by craft\base\Element")                     | Sets the revision creator ID to be saved.
| [setRevisionNotes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setrevisionnotes "Defined by craft\base\Element")                             | Sets the revision notes to be saved.
| [setScenario()](craft-commerce-elements-product.md#method-setscenario)                                                                                             | Sets the scenario for the model.
| [setVariants()](craft-commerce-elements-product.md#method-setvariants)                                                                                             | Sets the variants on the product. Accepts an array of variant data keyed by variant ID or the string 'new'.
| [sortOptions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sortoptions "Defined by craft\base\Element")                                       | Returns the sort options for the element type.
| [sources()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sources "Defined by craft\base\Element")                                               | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-commerce-elements-product.md#method-statuses)                                                                                                   | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-tableattributes "Defined by craft\base\Element")                               | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                | Converts the model into an array.
| [trackChanges()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-trackchanges "Defined by craft\base\Element")                                     | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                          | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                                | Performs the data validation.
| [validateCustomFieldAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldattribute "Defined by craft\base\Element")     | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldcontentsize "Defined by craft\base\Element") | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                | Validates multiple models.

### `__toString()`





Returns the string representation of the element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L297-L300)



#### Returns

[string](http://php.net/language.types.string)



### `afterDelete()`





Performs actions after an element is deleted.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L821-L844)






### `afterPropagate()`





Performs actions after an element is fully saved and propagated to other sites.



::: tip
This will get called regardless of whether `$propagate` is `true` or `false` for [craft\services\Elements::saveElement()](https://docs.craftcms.com/api/v3/craft-services-elements.html#method-saveelement).
:::




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1297-L1311)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `afterRestore()`





Performs actions after an element is restored.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L849-L864)






### `afterSave()`





Performs actions after an element is saved.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L712-L782)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `beforeRestore()`





Performs actions before an element is restored.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L787-L794)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeSave()`





Performs actions before an element is saved.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L941-L964)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be saved



### `beforeValidate()`





This method is invoked before validation starts.



The default implementation raises a `beforeValidate` event.
You may override this method to do preliminary checks before validation.
Make sure the parent implementation is invoked so that the event can be raised.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L799-L816)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the validation should be executed. Defaults to true.
If false is returned, the validation will stop and the model is considered invalid.



### `behaviors()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L168-L186)



#### Returns

[array](http://php.net/language.types.array)



### `currencyAttributes()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L191-L196)



#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string)[]



### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L922-L928)



#### Returns

[string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L869-L917)



#### Returns

[array](http://php.net/language.types.array)



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L216-L219)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `eagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on the given sub-property handle.



This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L610-L629)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – An array of the source elements
- `$handle` ([string](http://php.net/language.types.string)) – The property handle used to identify which target elements should be included in the map

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored



### `fields()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L201-L211)



#### Returns

[array](http://php.net/language.types.array)



### `find()`





Creates an [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance for query purpose.



The returned [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance can be further customized by calling
methods defined in [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) before `one()` or `all()` is called to return
populated `\craft\commerce\elements\ElementInterface` instances. For example,

```php
// Find the entry whose ID is 5
$entry = Entry::find()->id(5)->one();
// Find all assets and order them by their filename:
$assets = Asset::find()
    ->orderBy('filename')
    ->all();
```

If you want to define custom criteria parameters for your elements, you can do so by overriding
this method and returning a custom query class. For example,

```php
class Product extends Element
{
    public static function find()
    {
        // use ProductQuery instead of the default ElementQuery
        return new ProductQuery(get_called_class());
    }
}
```

You can also set default criteria parameters on the ElementQuery if you don’t have a need for
a custom query class. For example,

```php
class Customer extends ActiveRecord
{
    public static function find()
    {
        return parent::find()->limit(50);
    }
}
```




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L289-L292)



#### Returns

[craft\commerce\elements\db\ProductQuery](craft-commerce-elements-db-productquery.md) – The newly created [craft\commerce\elements\db\ProductQuery](craft-commerce-elements-db-productquery.md) instance.



### `getCheapestVariant()`





Return the cheapest variant.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L423-L439)



#### Returns

[craft\commerce\elements\Variant](craft-commerce-elements-variant.md)



### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L390-L402)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getDefaultVariant()`





Returns the default variant.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L409-L416)



#### Returns

[null](http://php.net/language.types.null), [craft\commerce\elements\Variant](craft-commerce-elements-variant.md)



### `getEditorHtml()`





Returns the HTML for the element’s editor HUD.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L662-L695)



#### Returns

[string](http://php.net/language.types.string) – The HTML for the editor HUD



### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L933-L936)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)



### `getGqlTypeName()`



Since

:   3.0



Returns the GraphQL type name for this element type.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L570-L573)



#### Returns

[string](http://php.net/language.types.string)



### `getHasUnlimitedStock()`





Returns whether at least one variant has unlimited stock.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L555-L564)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsEditable()`





Returns whether the current user can edit the element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L305-L314)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getName()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L340-L343)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSearchKeywords()`





Returns the search keywords for a given search attribute.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L700-L707)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getShippingCategory()`





Returns the shipping category.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L378-L385)



#### Returns

[craft\commerce\models\ShippingCategory](craft-commerce-models-shippingcategory.md), [null](http://php.net/language.types.null)



### `getStatus()`





Returns the element’s status.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L512-L533)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTaxCategory()`





Returns the tax category.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L364-L371)



#### Returns

[craft\commerce\models\TaxCategory](craft-commerce-models-taxcategory.md), [null](http://php.net/language.types.null)



### `getTotalStock()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L538-L548)



#### Returns

[integer](http://php.net/language.types.integer)



### `getType()`





Returns the product's product type.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L322-L335)



#### Returns

[craft\commerce\models\ProductType](craft-commerce-models-producttype.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getUriFormat()`





Returns the URI format used to generate this element’s URI.



Note that element types that can have URIs must return `true` from [hasUris()](craft-commerce-elements-product.md#method-hasuris).




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L348-L357)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getVariants()`





Returns an array of the product's variants.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L447-L478)



#### Returns

[craft\commerce\elements\Variant](craft-commerce-elements-variant.md)[]

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `gqlScopesByContext()`



Since

:   3.0



Returns the GraphQL scopes required by element's context.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L589-L593)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[array](http://php.net/language.types.array)



### `gqlTypeNameByContext()`



Since

:   3.0



Returns the GraphQL type name by an element's context.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L579-L583)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L256-L259)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasStatuses()`





Returns whether elements of this type have statuses.



If this returns `true`, the element index template will show a Status menu by default, and your elements will
get status indicator icons next to them.
Use [statuses()](craft-commerce-elements-product.md#method-statuses) to customize which statuses the elements might have.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L504-L507)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have statuses.



### `hasTitles()`





Returns whether elements of this type have traditional titles.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L264-L267)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have traditional titles.



### `hasUris()`





Returns whether elements of this type can have their own slugs and URIs.



Note that individual elements must also return a URI format from [getUriFormat()](craft-commerce-elements-product.md#method-geturiformat) if they are to actually get a URI.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L272-L275)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type can have their own slugs and URIs.



### `isLocalized()`





Returns whether elements of this type store content on a per-site basis.



If this returns `true`, the element’s [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsupportedsites) method will
be responsible for defining which sites its content should be stored in.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L280-L283)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type store data on a per-site basis.



### `lowerDisplayName()`





Returns the lowercase version of [displayName()](craft-commerce-elements-product.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L224-L227)



#### Returns

[string](http://php.net/language.types.string)



### `pluralDisplayName()`





Returns the plural version of [displayName()](craft-commerce-elements-product.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L232-L235)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`





Returns the plural, lowercase version of [displayName()](craft-commerce-elements-product.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L240-L243)



#### Returns

[string](http://php.net/language.types.string)



### `prepElementQueryForTableAttribute()`





Preps the element criteria for a given table attribute








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L634-L644)


#### Arguments

- `$elementQuery` ([craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html))
- `$attribute` ([string](http://php.net/language.types.string))




### `refHandle()`





Returns the handle that should be used to refer to this element type from reference tags.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L248-L251)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The reference handle, or null if the element type doesn’t support reference tags



### `setEagerLoadedElements()`





Sets some eager-loaded elements on a given handle.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L598-L605)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – The eager-loaded elements




### `setScenario()`





Sets the scenario for the model.



Note that this method does not check if the scenario exists or not.
The method [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail) will perform this check.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1285-L1292)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The scenario that this model is in.




### `setVariants()`





Sets the variants on the product. Accepts an array of variant data keyed by variant ID or the string 'new'.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L485-L499)


#### Arguments

- `$variants` ([craft\commerce\elements\Variant](craft-commerce-elements-variant.md)[], [array](http://php.net/language.types.array))




### `statuses()`





Returns all of the possible statuses that elements of this type may have.



This method will be called when populating the Status menu on element indexes, for element types whose
[hasStatuses()](craft-commerce-elements-product.md#method-hasstatuses) method returns `true`. It will also be called when [craft\elements\db\ElementQuery](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html) is querying for
elements, to ensure that its “status” parameter is set to a valid status.
It should return an array whose keys are the status values, and values are the human-facing status labels, or an array
with the following keys:
- **`label`** – The human-facing status label.
- **`color`** – The status color (green, orange, red, yellow, pink, purple, blue, turquoise, light, grey, black, or white)
You can customize the database query condition that should be applied for your custom statuses from
[craft\elements\db\ElementQuery::statusCondition()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-statuscondition).




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L649-L657)



#### Returns

[array](http://php.net/language.types.array)





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](craft-commerce-elements-product.md#method-defineactions)                                                                              | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-commerce-elements-product.md#method-definedefaulttableattributes)                                                | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineexporters "Defined by craft\base\Element")                    | Defines the available element exporters for a given source.
| [defineSearchableAttributes()](craft-commerce-elements-product.md#method-definesearchableattributes)                                                    | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-commerce-elements-product.md#method-definesortoptions)                                                                      | Returns the sort options for the element type.
| [defineSources()](craft-commerce-elements-product.md#method-definesources)                                                                              | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-commerce-elements-product.md#method-definetableattributes)                                                              | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [fieldByHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldbyhandle "Defined by craft\base\Element")                        | Returns the field with a given handle.
| [fieldLayoutFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldlayoutfields "Defined by craft\base\Element")                | Returns each of this element’s fields.
| [findByCondition()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findbycondition "Defined by craft\base\Element")                    | Finds Element instance(s) by the given condition.
| [htmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-htmlattributes "Defined by craft\base\Element")                      | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-normalizefieldvalue "Defined by craft\base\Element")            | Normalizes a field’s value.
| [previewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-previewtargets "Defined by craft\base\Element")                      | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](craft-commerce-elements-product.md#method-route)                                                                                              | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-commerce-elements-product.md#method-tableattributehtml)                                                                    | Returns the HTML that should be shown for a given attribute in Table View.

### `defineActions()`





Defines the available element actions for a given source.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1021-L1092)


#### Arguments

- `$source` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The selected source’s key, if any.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1127-L1142)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1147-L1153)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1158-L1182)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineSources()`





Defines the sources that elements of this type may belong to.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L970-L1016)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1097-L1122)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `route()`





Returns the route that should be used when the element’s URI is requested.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1187-L1205)



#### Returns

`mixed` – The route that the request should use, or null if no special action should be taken



### `tableAttributeHtml()`





Returns the HTML that should be shown for a given attribute in Table View.



This method can be used to completely customize what actually shows up within the table’s body for a given
attribute, rather than simply showing the attribute’s raw value.

For example, if your elements have an `email` attribute that you want to wrap in a `mailto:` link, your
getTableAttributesHtml() method could do this:

```php
switch ($attribute) {
    case 'email':
        return $this->email ? Html::mailto(Html::encode($this->email)) : '';
    // ...
}
return parent::tableAttributeHtml($attribute);
```

::: warning
All untrusted text should be passed through [craft\helpers\Html::encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail) to prevent XSS attacks.
:::

By default the following will be returned:

- If the attribute name is `link` or `uri`, it will be linked to the front-end URL.
- If the attribute is a custom field handle, it will pass the responsibility off to the field type.
- If the attribute value is a [DateTime](http://php.net/class.datetime) object, the date will be formatted with a localized date format.
- For anything else, it will output the attribute value as a string.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Product.php#L1210-L1280)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for a given attribute in Table View.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)




## Constants

| Constant                 | Description
| ------------------------ | ---------------------------------
| `ATTR_STATUS_CONFLICTED` |
| `ATTR_STATUS_MODIFIED`   |
| `ATTR_STATUS_OUTDATED`   |
| `HOMEPAGE_URI`           |
| `SCENARIO_DEFAULT`       | The name of the default scenario.
| `SCENARIO_ESSENTIALS`    |
| `SCENARIO_LIVE`          |
| `STATUS_ARCHIVED`        |
| `STATUS_DISABLED`        |
| `STATUS_ENABLED`         |
| `STATUS_EXPIRED`         |
| `STATUS_LIVE`            |
| `STATUS_PENDING`         |



