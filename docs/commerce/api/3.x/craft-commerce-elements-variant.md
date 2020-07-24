---
title: craft\commerce\elements\Variant
code:
  - php
  - twig
---

# Variant

Type

:   Class

Namespace

:   craft\commerce\elements

Inherits

:   [craft\commerce\elements\Variant](craft-commerce-elements-variant.md) &raquo;
[craft\commerce\base\Purchasable](craft-commerce-base-purchasable.md) &raquo;
[craft\base\Element](https://docs.craftcms.com/api/v3/craft-base-element.html) &raquo;
[craft\base\Component](https://docs.craftcms.com/api/v3/craft-base-component.html) &raquo;
[craft\base\Model](https://docs.craftcms.com/api/v3/craft-base-model.html) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [craft\commerce\base\PurchasableInterface](craft-commerce-base-purchasableinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [craft\base\ElementTrait](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   2.0



Variant model.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)


## Public Properties

| Property                                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")                            | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [ancestors](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#ancestors "Defined by craft\base\ElementInterface")                           | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [archived](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#archived "Defined by craft\base\ElementTrait")                                     | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                                        | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [awaitingFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#awaitingfieldvalues "Defined by craft\base\ElementTrait")               | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                  | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [children](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#children "Defined by craft\base\ElementInterface")                             | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [contentId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#contentid "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#contenttable "Defined by craft\base\ElementInterface")                     | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-commerce-elements-variant.md#cpediturl)                                                                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#currentrevision "Defined by craft\base\ElementInterface")               | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datecreated "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datedeleted "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#dateupdated "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [deletedWithProduct](craft-commerce-elements-variant.md#deletedwithproduct)                                                                                 | [boolean](http://php.net/language.types.boolean) – Whether the variant was deleted along with its product
| [descendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#descendants "Defined by craft\base\ElementInterface")                       | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [description](craft-commerce-elements-variant.md#description)                                                                                               | [string](http://php.net/language.types.string)
| [dirtyAttributes](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#dirtyattributes "Defined by craft\base\ElementInterface")               | [string](http://php.net/language.types.string)[]
| [dirtyFields](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#dirtyfields "Defined by craft\base\ElementInterface")                       | [string](http://php.net/language.types.string)[]
| [draftId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#draftid "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#duplicateof "Defined by craft\base\ElementTrait")                               | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#editorhtml "Defined by craft\base\ElementInterface")                         | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#enabled "Defined by craft\base\ElementTrait")                                       | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#enabledforsite "Defined by craft\base\ElementInterface")                 | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                                | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [fieldColumnPrefix](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldcolumnprefix "Defined by craft\base\ElementInterface")           | [string](http://php.net/language.types.string)
| [fieldContext](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldcontext "Defined by craft\base\ElementInterface")                     | [string](http://php.net/language.types.string)
| [fieldLayout](craft-commerce-elements-variant.md#fieldlayout)                                                                                               | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)
| [fieldLayoutId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#fieldlayoutid "Defined by craft\base\ElementTrait")                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldparamnamespace "Defined by craft\base\ElementInterface")       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldvalues "Defined by craft\base\ElementInterface")                       | [array](http://php.net/language.types.array) – The field values (handle => value)
| [fieldValuesFromRequest](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldvaluesfromrequest "Defined by craft\base\ElementInterface") | [string](http://php.net/language.types.string) – The field param namespace
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                      | [array](http://php.net/language.types.array) – The first errors.
| [gqlTypeName](craft-commerce-elements-variant.md#gqltypename)                                                                                               | [string](http://php.net/language.types.string)
| [hardDelete](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#harddelete "Defined by craft\base\ElementTrait")                                 | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#hasdescendants "Defined by craft\base\ElementInterface")                 | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#hasfreshcontent "Defined by craft\base\ElementInterface")               | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [hasUnlimitedStock](craft-commerce-elements-variant.md#hasunlimitedstock)                                                                                   | [boolean](http://php.net/language.types.boolean)
| [height](craft-commerce-elements-variant.md#height)                                                                                                         | [integer](http://php.net/language.types.integer)
| [id](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#id "Defined by craft\base\ElementTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isAvailable](craft-commerce-elements-variant.md#isavailable)                                                                                               | [boolean](http://php.net/language.types.boolean)
| [isDefault](craft-commerce-elements-variant.md#isdefault)                                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isDraft](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isdraft "Defined by craft\base\ElementInterface")                               | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-commerce-elements-variant.md#iseditable)                                                                                                 | [boolean](http://php.net/language.types.boolean)
| [isHomepage](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#ishomepage "Defined by craft\base\ElementInterface")                         | [boolean](http://php.net/language.types.boolean)
| [isPromotable](craft-commerce-elements-variant.md#ispromotable)                                                                                             | [boolean](http://php.net/language.types.boolean)
| [isRevision](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isrevision "Defined by craft\base\ElementInterface")                         | [boolean](http://php.net/language.types.boolean)
| [isShippable](craft-commerce-base-purchasable.md#isshippable "Defined by craft\commerce\base\Purchasable")                                                  | [boolean](http://php.net/language.types.boolean)
| [isTaxable](craft-commerce-base-purchasable.md#istaxable "Defined by craft\commerce\base\Purchasable")                                                      | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isunsaveddraft "Defined by craft\base\ElementInterface")                 | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                            | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [length](craft-commerce-elements-variant.md#length)                                                                                                         | [integer](http://php.net/language.types.integer)
| [level](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#level "Defined by craft\base\ElementTrait")                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#lft "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#link "Defined by craft\base\ElementInterface")                                     | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [maxQty](craft-commerce-elements-variant.md#maxqty)                                                                                                         | [integer](http://php.net/language.types.integer)
| [minQty](craft-commerce-elements-variant.md#minqty)                                                                                                         | [integer](http://php.net/language.types.integer)
| [newSiteIds](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#newsiteids "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#next "Defined by craft\base\ElementInterface")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [nextSibling](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#nextsibling "Defined by craft\base\ElementInterface")                       | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [onSale](craft-commerce-base-purchasable.md#onsale "Defined by craft\commerce\base\Purchasable")                                                            | [boolean](http://php.net/language.types.boolean)
| [parent](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#parent "Defined by craft\base\ElementInterface")                                 | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prev](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#prev "Defined by craft\base\ElementInterface")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prevSibling](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#prevsibling "Defined by craft\base\ElementInterface")                       | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [previewTargets](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#previewtargets "Defined by craft\base\ElementInterface")                 | [array](http://php.net/language.types.array)
| [previewing](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#previewing "Defined by craft\base\ElementTrait")                                 | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [price](craft-commerce-elements-variant.md#price)                                                                                                           |
| [product](craft-commerce-elements-variant.md#product)                                                                                                       | [craft\commerce\elements\Product](craft-commerce-elements-product.md), [null](http://php.net/language.types.null) – The product associated with this variant, or null if it isn’t known
| [productId](craft-commerce-elements-variant.md#productid)                                                                                                   | [integer](http://php.net/language.types.integer)
| [promotionRelationSource](craft-commerce-elements-variant.md#promotionrelationsource)                                                                       | [array](http://php.net/language.types.array)
| [propagateAll](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagateall "Defined by craft\base\ElementTrait")                             | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagating "Defined by craft\base\ElementTrait")                               | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#ref "Defined by craft\base\ElementInterface")                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [resaving](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#resaving "Defined by craft\base\ElementTrait")                                     | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#revisionid "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#rgt "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#root "Defined by craft\base\ElementTrait")                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#route "Defined by craft\base\ElementInterface")                                   | `mixed` – The route that the request should use, or null if no special action should be taken
| [salePrice](craft-commerce-base-purchasable.md#saleprice "Defined by craft\commerce\base\Purchasable")                                                      | [float](http://php.net/language.types.float) – Decimal(14,4)
| [sales](craft-commerce-base-purchasable.md#sales "Defined by craft\commerce\base\Purchasable")                                                              | [craft\commerce\models\Sale](craft-commerce-models-sale.md)[], [null](http://php.net/language.types.null)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                            | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#searchscore "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search) parameter was used when querying for the element
| [serializedFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#serializedfieldvalues "Defined by craft\base\ElementInterface")   | [array](http://php.net/language.types.array)
| [shippingCategoryId](craft-commerce-elements-variant.md#shippingcategoryid)                                                                                 | [integer](http://php.net/language.types.integer)
| [siblings](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#siblings "Defined by craft\base\ElementInterface")                             | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [site](https://docs.craftcms.com/api/v3/craft-base-element.html#site "Defined by craft\base\Element")                                                       | [craft\models\Site](https://docs.craftcms.com/api/v3/craft-models-site.html)
| [siteId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#siteid "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [sku](craft-commerce-elements-variant.md#sku)                                                                                                               |
| [slug](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#slug "Defined by craft\base\ElementTrait")                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [snapshot](craft-commerce-elements-variant.md#snapshot)                                                                                                     | [array](http://php.net/language.types.array)
| [sortOrder](craft-commerce-elements-variant.md#sortorder)                                                                                                   | [integer](http://php.net/language.types.integer)
| [sourceId](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#sourceid "Defined by craft\base\ElementInterface")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#sourceuid "Defined by craft\base\ElementInterface")                           | [string](http://php.net/language.types.string)
| [status](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#status "Defined by craft\base\ElementInterface")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [stock](craft-commerce-elements-variant.md#stock)                                                                                                           | [integer](http://php.net/language.types.integer)
| [structureId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#structureid "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#supportedsites "Defined by craft\base\ElementInterface")                 | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [taxCategoryId](craft-commerce-elements-variant.md#taxcategoryid)                                                                                           | [integer](http://php.net/language.types.integer)
| [tempId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#tempid "Defined by craft\base\ElementTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#title "Defined by craft\base\ElementTrait")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#totaldescendants "Defined by craft\base\ElementInterface")             | [integer](http://php.net/language.types.integer)
| [trashed](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#trashed "Defined by craft\base\ElementTrait")                                       | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uiLabel](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#uilabel "Defined by craft\base\ElementInterface")                               | [string](http://php.net/language.types.string)
| [uid](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uid "Defined by craft\base\ElementTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uri "Defined by craft\base\ElementTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#uriformat "Defined by craft\base\ElementInterface")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](craft-commerce-elements-variant.md#url)                                                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                        | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [weight](craft-commerce-elements-variant.md#weight)                                                                                                         | [integer](http://php.net/language.types.integer)
| [width](craft-commerce-elements-variant.md#width)                                                                                                           | [integer](http://php.net/language.types.integer)

### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `deletedWithProduct`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the variant was deleted along with its product

See also [beforeDelete()](craft-commerce-elements-variant.md#method-beforedelete)

[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L242)



### `description`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `gqlTypeName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.1







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `hasUnlimitedStock`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L226)



### `height`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L206)



### `isAvailable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `isDefault`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L181)



### `isEditable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `isPromotable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `length`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L211)



### `maxQty`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L236)



### `minQty`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L231)



### `price`









[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L191)



### `product`



Type

:   [craft\commerce\elements\Product](craft-commerce-elements-product.md), [null](http://php.net/language.types.null)



The product associated with this variant, or null if it isn’t known



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `productId`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L176)



### `promotionRelationSource`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `shippingCategoryId`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `sku`









[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L186)



### `snapshot`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `sortOrder`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L196)



### `stock`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L221)



### `taxCategoryId`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php)



### `weight`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L216)



### `width`



Type

:   [integer](http://php.net/language.types.integer)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L201)





## Protected Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](https://docs.craftcms.com/api/v3/craft-base-element.html#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](https://docs.craftcms.com/api/v3/craft-base-element.html#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__call "Defined by craft\base\Element")                                                           | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                             |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                          | Constructor.
| [__get()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__get "Defined by craft\base\Element")                                                             | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__isset "Defined by craft\base\Element")                                                         | Checks if a property is set.
| [__set()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__set "Defined by craft\base\Element")                                                             | Sets the value of a component property.
| [__toString()](craft-commerce-elements-variant.md#method-tostring)                                                                                                           | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                    | Sets a component property to be null.
| [actions()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-actions "Defined by craft\base\ElementInterface")                                       | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                          | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-adderror "Defined by craft\base\Element")                                                       | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                        | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                               | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-commerce-base-purchasable.md#method-afterdelete "Defined by craft\commerce\base\Purchasable")                                                          | Clean up purchasable table
| [afterMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-aftermoveinstructure "Defined by craft\base\ElementInterface")             | Performs actions after an element is moved within a structure.
| [afterOrderComplete()](craft-commerce-elements-variant.md#method-afterordercomplete)                                                                                         | Updates Stock count from completed order.
| [afterPropagate()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-afterpropagate "Defined by craft\base\ElementInterface")                         | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-afterrestore "Defined by craft\base\ElementInterface")                             | Performs actions after an element is restored.
| [afterSave()](craft-commerce-elements-variant.md#method-aftersave)                                                                                                           | Update purchasable table
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                      | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                    | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                              | Returns the attribute hints.
| [attributeLabels()](craft-commerce-elements-variant.md#method-attributelabels)                                                                                               | Returns the attribute labels.
| [attributes()](craft-commerce-elements-variant.md#method-attributes)                                                                                                         | Returns the list of attribute names.
| [beforeDelete()](craft-commerce-elements-variant.md#method-beforedelete)                                                                                                     | Performs actions before an element is deleted.
| [beforeMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-beforemoveinstructure "Defined by craft\base\ElementInterface")           | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-commerce-elements-variant.md#method-beforerestore)                                                                                                   | Performs actions before an element is restored.
| [beforeSave()](craft-commerce-elements-variant.md#method-beforesave)                                                                                                         |
| [beforeValidate()](craft-commerce-elements-variant.md#method-beforevalidate)                                                                                                 | This method is invoked before validation starts.
| [behaviors()](craft-commerce-elements-variant.md#method-behaviors)                                                                                                           |
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                              | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                    | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                          | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [currencyAttributes()](craft-commerce-elements-variant.md#method-currencyattributes)                                                                                         |
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                       | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-defaulttableattributes "Defined by craft\base\ElementInterface")         | Returns the list of table attribute keys that should be shown by default.
| [defineRules()](craft-commerce-elements-variant.md#method-definerules)                                                                                                       | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                      | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                    | Detaches all behaviors from the component.
| [displayName()](craft-commerce-elements-variant.md#method-displayname)                                                                                                       | Returns the display name of this class.
| [eagerLoadingMap()](craft-commerce-elements-variant.md#method-eagerloadingmap)                                                                                               | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                    | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-exporters "Defined by craft\base\ElementInterface")                                   | Returns the available export options for a given source.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                                  | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-commerce-elements-variant.md#method-fields)                                                                                                                 |
| [find()](craft-commerce-elements-variant.md#method-find)                                                                                                                     | Creates an [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance for query purpose.
| [findAll()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-findall "Defined by craft\base\ElementInterface")                                       | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-findone "Defined by craft\base\ElementInterface")                                       | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                          | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                              | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                                    | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAncestors()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getancestors "Defined by craft\base\ElementInterface")                             | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                          | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributelabel "Defined by craft\base\Element")                                     | Returns the text label for the specified attribute.
| [getAttributeStatus()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getattributestatus "Defined by craft\base\ElementInterface")                 | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                                | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                            | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                          | Returns all behaviors attached to this component.
| [getChildren()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getchildren "Defined by craft\base\ElementInterface")                               | Returns the element’s children.
| [getContentTable()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getcontenttable "Defined by craft\base\ElementInterface")                       | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-commerce-elements-variant.md#method-getcpediturl)                                                                                                     | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getcurrentrevision "Defined by craft\base\ElementInterface")                 | Returns the element’s current revision, if one exists.
| [getDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getdescendants "Defined by craft\base\ElementInterface")                         | Returns the element’s descendants.
| [getDescription()](craft-commerce-elements-variant.md#method-getdescription)                                                                                                 | Returns the product title and variants title together for variable products.
| [getDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getdirtyattributes "Defined by craft\base\ElementInterface")                 | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getdirtyfields "Defined by craft\base\ElementInterface")                         | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geteagerloadedelementcount "Defined by craft\base\ElementInterface") | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geteagerloadedelements "Defined by craft\base\ElementInterface")         | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geteditorhtml "Defined by craft\base\ElementInterface")                           | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getenabledforsite "Defined by craft\base\ElementInterface")                   | Returns whether the element is enabled for the current site.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                           | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                            | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                                        | Returns the errors for all attributes or a single attribute.
| [getFieldColumnPrefix()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldcolumnprefix "Defined by craft\base\ElementInterface")             | Returns the field column prefix this element’s content uses.
| [getFieldContext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldcontext "Defined by craft\base\ElementInterface")                       | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-commerce-elements-variant.md#method-getfieldlayout)                                                                                                 | Returns the field layout used by this element.
| [getFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldparamnamespace "Defined by craft\base\ElementInterface")         | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldstatus "Defined by craft\base\ElementInterface")                         | Returns the status of a given field.
| [getFieldValue()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldvalue "Defined by craft\base\ElementInterface")                           | Returns the value for a given field.
| [getFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldvalues "Defined by craft\base\ElementInterface")                         | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                              | Returns the first error of every attribute in the model.
| [getGqlTypeName()](craft-commerce-elements-variant.md#method-getgqltypename)                                                                                                 |
| [getHasDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethasdescendants "Defined by craft\base\ElementInterface")                   | Returns whether the element has descendants.
| [getHasFreshContent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethasfreshcontent "Defined by craft\base\ElementInterface")                 | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethtmlattributes "Defined by craft\base\ElementInterface")                   | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](craft-commerce-base-purchasableinterface.md#method-getid "Defined by craft\commerce\base\PurchasableInterface")                                                    | Returns the element’s ID.
| [getIsAvailable()](craft-commerce-elements-variant.md#method-getisavailable)                                                                                                 | Returns whether the purchasable is currently available for purchase.
| [getIsDraft()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisdraft "Defined by craft\base\ElementInterface")                                 | Returns whether this is a draft.
| [getIsEditable()](craft-commerce-elements-variant.md#method-getiseditable)                                                                                                   |
| [getIsHomepage()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getishomepage "Defined by craft\base\ElementInterface")                           | Returns whether this element represents the site homepage.
| [getIsPromotable()](craft-commerce-elements-variant.md#method-getispromotable)                                                                                               | Returns whether this purchasable can be subject to discounts or sales.
| [getIsRevision()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisrevision "Defined by craft\base\ElementInterface")                           | Returns whether this is a revision.
| [getIsShippable()](craft-commerce-base-purchasable.md#method-getisshippable "Defined by craft\commerce\base\Purchasable")                                                    |
| [getIsTaxable()](craft-commerce-base-purchasable.md#method-getistaxable "Defined by craft\commerce\base\Purchasable")                                                        | Returns whether this purchasable is exempt from taxes.
| [getIsUnsavedDraft()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisunsaveddraft "Defined by craft\base\ElementInterface")                   | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                    | Returns an iterator for traversing the attributes in the model.
| [getLineItemRules()](craft-commerce-elements-variant.md#method-getlineitemrules)                                                                                             | Returns any validation rules this purchasable required the line item to have.
| [getLink()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getlink "Defined by craft\base\ElementInterface")                                       | Returns an anchor pre-filled with this element’s URL and title.
| [getNext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getnext "Defined by craft\base\ElementInterface")                                       | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getnextsibling "Defined by craft\base\ElementInterface")                         | Returns the element’s next sibling.
| [getOnSale()](craft-commerce-base-purchasable.md#method-getonsale "Defined by craft\commerce\base\Purchasable")                                                              |
| [getParent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getparent "Defined by craft\base\ElementInterface")                                   | Returns the element’s parent.
| [getPrev()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getprev "Defined by craft\base\ElementInterface")                                       | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getprevsibling "Defined by craft\base\ElementInterface")                         | Returns the element’s previous sibling.
| [getPreviewTargets()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getpreviewtargets "Defined by craft\base\ElementInterface")                   | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geturl).
| [getPrice()](craft-commerce-elements-variant.md#method-getprice)                                                                                                             | Cache on the purchasable table.
| [getProduct()](craft-commerce-elements-variant.md#method-getproduct)                                                                                                         | Returns the product associated with this variant.
| [getPromotionRelationSource()](craft-commerce-elements-variant.md#method-getpromotionrelationsource)                                                                         | Returns a promotion category related to this element if the category is related to the product OR the variant.
| [getRef()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getref "Defined by craft\base\ElementInterface")                                         | Returns the reference string to this element.
| [getRoute()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getroute "Defined by craft\base\ElementInterface")                                     | Returns the route that should be used when the element’s URI is requested.
| [getSalePrice()](craft-commerce-base-purchasable.md#method-getsaleprice "Defined by craft\commerce\base\Purchasable")                                                        | Returns the base price the item will be added to the line item with.
| [getSales()](craft-commerce-base-purchasable.md#method-getsales "Defined by craft\commerce\base\Purchasable")                                                                | Returns an array of sales models which are currently affecting the salePrice of this purchasable.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                    | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-commerce-elements-variant.md#method-getsearchkeywords)                                                                                           |
| [getSerializedFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getserializedfieldvalues "Defined by craft\base\ElementInterface")     | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getShippingCategoryId()](craft-commerce-elements-variant.md#method-getshippingcategoryid)                                                                                   | Returns the purchasable's shipping category ID.
| [getSiblings()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsiblings "Defined by craft\base\ElementInterface")                               | Returns all of the element’s siblings.
| [getSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsite "Defined by craft\base\Element")                                                         | Returns the site the element is associated with.
| [getSku()](craft-commerce-elements-variant.md#method-getsku)                                                                                                                 | Returns a unique code. Unique as per the commerce_purchasables table.
| [getSnapshot()](craft-commerce-elements-variant.md#method-getsnapshot)                                                                                                       |
| [getSourceId()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsourceid "Defined by craft\base\ElementInterface")                               | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsourceuid "Defined by craft\base\ElementInterface")                             | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getstatus "Defined by craft\base\ElementInterface")                                   | Returns the element’s status.
| [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsupportedsites "Defined by craft\base\ElementInterface")                   | Returns the sites this element is associated with.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gettableattributehtml "Defined by craft\base\ElementInterface")           | Returns the HTML that should be shown for a given attribute in Table View.
| [getTaxCategoryId()](craft-commerce-elements-variant.md#method-gettaxcategoryid)                                                                                             | Returns the purchasable's tax category ID.
| [getThumbUrl()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getthumburl "Defined by craft\base\ElementInterface")                               | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gettotaldescendants "Defined by craft\base\ElementInterface")               | Returns the total number of descendants that the element has.
| [getUiLabel()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getuilabel "Defined by craft\base\ElementInterface")                                 | Returns what the element should be called within the control panel.
| [getUriFormat()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geturiformat "Defined by craft\base\ElementInterface")                             | Returns the URI format used to generate this element’s URI.
| [getUrl()](craft-commerce-elements-variant.md#method-geturl)                                                                                                                 | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](craft-commerce-elements-variant.md#method-gqlscopesbycontext)                                                                                         |
| [gqlTypeNameByContext()](craft-commerce-elements-variant.md#method-gqltypenamebycontext)                                                                                     |
| [hasContent()](craft-commerce-elements-variant.md#method-hascontent)                                                                                                         | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-haseagerloadedelements "Defined by craft\base\ElementInterface")         | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                         | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether there is any handler attached to the named event.
| [hasFreeShipping()](craft-commerce-elements-variant.md#method-hasfreeshipping)                                                                                               | Returns whether this purchasable has free shipping.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                            | Returns a value indicating whether a property is defined for this component.
| [hasStatuses()](craft-commerce-elements-variant.md#method-hasstatuses)                                                                                                       | Returns whether elements of this type have statuses.
| [hasStock()](craft-commerce-elements-variant.md#method-hasstock)                                                                                                             | Returns whether this variant has stock.
| [hasTitles()](craft-commerce-elements-variant.md#method-hastitles)                                                                                                           | Returns whether elements of this type have traditional titles.
| [hasUris()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-hasuris "Defined by craft\base\ElementInterface")                                       | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-indexhtml "Defined by craft\base\ElementInterface")                                   | Returns the element index HTML.
| [init()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-init "Defined by craft\base\Element")                                                               | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait")                              | Returns static class instance, which can be used to obtain meta information.
| [isAncestorOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isancestorof "Defined by craft\base\ElementInterface")                             | Returns whether this element is an ancestor of another one.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")                                        | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")                                    | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")                                            | Returns a value indicating whether the attribute is safe for massive assignments.
| [isChildOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-ischildof "Defined by craft\base\ElementInterface")                                   | Returns whether this element is a direct child of another one.
| [isDescendantOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isdescendantof "Defined by craft\base\ElementInterface")                         | Returns whether this element is a descendant of another one.
| [isFieldDirty()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isfielddirty "Defined by craft\base\ElementInterface")                             | Returns whether a custom field value has changed since the element was first loaded.
| [isFieldEmpty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isfieldempty "Defined by craft\base\Element")                                               | Returns whether a field is empty.
| [isLocalized()](craft-commerce-elements-variant.md#method-islocalized)                                                                                                       | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isnextsiblingof "Defined by craft\base\ElementInterface")                       | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isparentof "Defined by craft\base\ElementInterface")                                 | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isprevsiblingof "Defined by craft\base\ElementInterface")                       | Returns whether this element is the direct previous sibling of another one.
| [isSelectable()](craft-commerce-elements-variant.md#method-isselectable)                                                                                                     |
| [isSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-issiblingof "Defined by craft\base\ElementInterface")                               | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                  | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                  | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-commerce-elements-variant.md#method-lowerdisplayname)                                                                                             | Returns the lowercase version of [displayName()](craft-commerce-elements-variant.md#method-displayname).
| [markAsClean()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-markasclean "Defined by craft\base\ElementInterface")                               | Resets the record of dirty attributes and fields.
| [markAsDirty()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-markasdirty "Defined by craft\base\ElementInterface")                               | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                            | Detaches an existing event handler from this component.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-offsetexists "Defined by craft\base\ElementInterface")                             | Treats custom fields as array offsets.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                        | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                        | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                    | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                              | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                        | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-commerce-elements-variant.md#method-pluraldisplayname)                                                                                           | Returns the plural version of [displayName()](craft-commerce-elements-variant.md#method-displayname).
| [pluralLowerDisplayName()](craft-commerce-elements-variant.md#method-plurallowerdisplayname)                                                                                 | Returns the plural, lowercase version of [displayName()](craft-commerce-elements-variant.md#method-displayname).
| [populateLineItem()](craft-commerce-elements-variant.md#method-populatelineitem)                                                                                             | Populates the line item when this purchasable is found on it. Called when Purchasable is added to the cart and when the cart recalculates.
| [refHandle()](craft-commerce-elements-variant.md#method-refhandle)                                                                                                           | Returns the handle that should be used to refer to this element type from reference tags.
| [relatedSales()](craft-commerce-base-purchasable.md#method-relatedsales "Defined by craft\commerce\base\Purchasable")                                                        |
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                                 | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                              | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                        | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-searchableattributes "Defined by craft\base\ElementInterface")             | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                | Sets the attribute values in a massive way.
| [setDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setdirtyattributes "Defined by craft\base\Element")                                   | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-seteagerloadedelementcount "Defined by craft\base\ElementInterface") | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-commerce-elements-variant.md#method-seteagerloadedelements)                                                                                 | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setenabledforsite "Defined by craft\base\ElementInterface")                   | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldparamnamespace "Defined by craft\base\ElementInterface")         | Sets the namespace used by custom field params on the request.
| [setFieldValue()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvalue "Defined by craft\base\ElementInterface")                           | Sets the value for a given field.
| [setFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvalues "Defined by craft\base\ElementInterface")                         | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvaluesfromrequest "Defined by craft\base\ElementInterface")   | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setnext "Defined by craft\base\ElementInterface")                                       | Sets the default next element.
| [setParent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setparent "Defined by craft\base\ElementInterface")                                   | Sets the element’s parent.
| [setPrev()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setprev "Defined by craft\base\ElementInterface")                                       | Sets the default previous element.
| [setProduct()](craft-commerce-elements-variant.md#method-setproduct)                                                                                                         | Sets the product associated with this variant.
| [setRevisionCreatorId()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setrevisioncreatorid "Defined by craft\base\ElementInterface")             | Sets the revision creator ID to be saved.
| [setRevisionNotes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setrevisionnotes "Defined by craft\base\ElementInterface")                     | Sets the revision notes to be saved.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                                    | Sets the scenario for the model.
| [sortOptions()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-sortoptions "Defined by craft\base\ElementInterface")                               | Returns the sort options for the element type.
| [sources()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-sources "Defined by craft\base\ElementInterface")                                       | Returns the source definitions that elements of this type may belong to.
| [statuses()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-statuses "Defined by craft\base\ElementInterface")                                     | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-tableattributes "Defined by craft\base\ElementInterface")                       | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                          | Converts the model into an array.
| [trackChanges()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-trackchanges "Defined by craft\base\ElementInterface")                             | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                    | Triggers an event.
| [updateSku()](craft-commerce-elements-variant.md#method-updatesku)                                                                                                           |
| [updateTitle()](craft-commerce-elements-variant.md#method-updatetitle)                                                                                                       | Updates the title based on titleFormat, or sets it to the same title as the product.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                                          | Performs the data validation.
| [validateCustomFieldAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldattribute "Defined by craft\base\Element")               | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldcontentsize "Defined by craft\base\Element")           | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                          | Validates multiple models.

### `__toString()`





Returns the string representation of the element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L304-L314)



#### Returns

[string](http://php.net/language.types.string)



### `afterOrderComplete()`





Updates Stock count from completed order.



This is called for each line item the purchasable was contained within.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L950-L968)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

`void`



### `afterSave()`





Update purchasable table








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L900-L943)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean))




### `attributeLabels()`





Returns the attribute labels.



Attribute labels are mainly used for display purpose. For example, given an attribute
`firstName`, we can declare a label `First Name` which is more user-friendly and can
be displayed to end users.

By default an attribute label is generated using [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail).
This method allows you to explicitly specify attribute labels.

Note, in order to inherit labels defined in the parent class, a child class needs to
merge the parent labels with child labels using functions such as `array_merge()`.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L519-L524)



#### Returns

[array](http://php.net/language.types.array) – Attribute labels (name => label)



### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L383-L388)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `beforeDelete()`





Performs actions before an element is deleted.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1088-L1101)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be deleted



### `beforeRestore()`





Performs actions before an element is restored.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1106-L1145)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeSave()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1075-L1083)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `beforeValidate()`





This method is invoked before validation starts.



The default implementation raises a `beforeValidate` event.
You may override this method to do preliminary checks before validation.
Make sure the parent implementation is invoked so that the event can be raised.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1053-L1068)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the validation should be executed. Defaults to true.
If false is returned, the validation will stop and the model is considered invalid.



### `behaviors()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L254-L273)



#### Returns

[array](http://php.net/language.types.array)



### `currencyAttributes()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L278-L284)



#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L359-L378)



#### Returns

[array](http://php.net/language.types.array)



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L319-L322)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `eagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on the given sub-property handle.



This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L794-L821)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – An array of the source elements
- `$handle` ([string](http://php.net/language.types.string)) – The property handle used to identify which target elements should be included in the map

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored



### `fields()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L289-L299)



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




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L778-L781)



#### Returns

[craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md) – The newly created [craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md) instance.



### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L544-L547)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getDescription()`





Returns the product title and variants title together for variable products.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L455-L467)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [Throwable](http://php.net/class.throwable)


### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L393-L397)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)



### `getGqlTypeName()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L865-L874)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getIsAvailable()`





Returns whether the purchasable is currently available for purchase.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L973-L1001)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsEditable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L530-L539)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getIsPromotable()`





Returns whether this purchasable can be subject to discounts or sales.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L855-L858)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLineItemRules()`





Returns any validation rules this purchasable required the line item to have.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L713-L772)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

[array](http://php.net/language.types.array)



### `getPrice()`





Cache on the purchasable table.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L562-L565)



#### Returns

[float](http://php.net/language.types.float) – Decimal(14,4)



### `getProduct()`





Returns the product associated with this variant.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L405-L427)



#### Returns

[craft\commerce\elements\Product](craft-commerce-elements-product.md), [null](http://php.net/language.types.null) – The product associated with this variant, or null if it isn’t known

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the product ID is missing from the variant


### `getPromotionRelationSource()`





Returns a promotion category related to this element if the category is related to the product OR the variant.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L847-L850)



#### Returns

[array](http://php.net/language.types.array)



### `getSearchKeywords()`



Since

:   2.2








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1153-L1160)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getShippingCategoryId()`





Returns the purchasable's shipping category ID.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L686-L689)



#### Returns

[integer](http://php.net/language.types.integer)



### `getSku()`





Returns a unique code. Unique as per the commerce_purchasables table.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L670-L673)



#### Returns

[string](http://php.net/language.types.string)



### `getSnapshot()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L572-L665)



#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getTaxCategoryId()`





Returns the purchasable's tax category ID.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L678-L681)



#### Returns

[integer](http://php.net/language.types.integer)



### `getUrl()`





Returns the element’s full URL.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L552-L555)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `gqlScopesByContext()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L891-L895)


#### Arguments

- `$context` (`mixed`)

#### Returns

[array](http://php.net/language.types.array)



### `gqlTypeNameByContext()`



Since

:   3.1








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L881-L884)


#### Arguments

- `$context` (`mixed`)

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1021-L1024)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasFreeShipping()`





Returns whether this purchasable has free shipping.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L704-L708)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `hasStatuses()`





Returns whether elements of this type have statuses.



If this returns `true`, the element index template will show a Status menu by default, and your elements will
get status indicator icons next to them.
Use [statuses()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-statuses) to customize which statuses the elements might have.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L786-L789)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have statuses.



### `hasStock()`





Returns whether this variant has stock.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L696-L699)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `hasTitles()`





Returns whether elements of this type have traditional titles.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1029-L1032)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have traditional titles.



### `isLocalized()`





Returns whether elements of this type store content on a per-site basis.



If this returns `true`, the element’s [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsupportedsites) method will
be responsible for defining which sites its content should be stored in.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1045-L1048)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type store data on a per-site basis.



### `isSelectable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1037-L1040)






### `lowerDisplayName()`





Returns the lowercase version of [displayName()](craft-commerce-elements-variant.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L327-L330)



#### Returns

[string](http://php.net/language.types.string)



### `pluralDisplayName()`





Returns the plural version of [displayName()](craft-commerce-elements-variant.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L335-L338)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`





Returns the plural, lowercase version of [displayName()](craft-commerce-elements-variant.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L343-L346)



#### Returns

[string](http://php.net/language.types.string)



### `populateLineItem()`





Populates the line item when this purchasable is found on it. Called when
Purchasable is added to the cart and when the cart recalculates.



This is your chance to modify the weight, height, width, length, price
and saleAmount. This is called before any LineItems::EVENT_POPULATE_LINE_ITEM event listeners.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L826-L840)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))




### `refHandle()`





Returns the handle that should be used to refer to this element type from reference tags.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L351-L354)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The reference handle, or null if the element type doesn’t support reference tags



### `setEagerLoadedElements()`





Sets some eager-loaded elements on a given handle.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1006-L1016)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – The eager-loaded elements




### `setProduct()`





Sets the product associated with this variant.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L434-L445)


#### Arguments

- `$product` ([craft\commerce\elements\Product](craft-commerce-elements-product.md)) – The product associated with this variant




### `updateSku()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L501-L514)


#### Arguments

- `$product` ([craft\commerce\elements\Product](craft-commerce-elements-product.md))


#### Throws

- [Throwable](http://php.net/class.throwable)


### `updateTitle()`





Updates the title based on titleFormat, or sets it to the same title as the product.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L477-L494)


#### Arguments

- `$product` ([craft\commerce\elements\Product](craft-commerce-elements-product.md))


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [Throwable](http://php.net/class.throwable)




## Protected Methods

| Method                                                                                                                                                                   | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineactions "Defined by craft\base\Element")                                         | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-commerce-elements-variant.md#method-definedefaulttableattributes)                                                                 | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineexporters "Defined by craft\base\Element")                                     | Defines the available element exporters for a given source.
| [defineSearchableAttributes()](craft-commerce-elements-variant.md#method-definesearchableattributes)                                                                     | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-commerce-elements-variant.md#method-definesortoptions)                                                                                       | Returns the sort options for the element type.
| [defineSources()](craft-commerce-elements-variant.md#method-definesources)                                                                                               | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-commerce-elements-variant.md#method-definetableattributes)                                                                               | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")                    | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")                  | Extracts the root field names from nested fields.
| [fieldByHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldbyhandle "Defined by craft\base\Element")                                         | Returns the field with a given handle.
| [fieldLayoutFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldlayoutfields "Defined by craft\base\Element")                                 | Returns each of this element’s fields.
| [findByCondition()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findbycondition "Defined by craft\base\Element")                                     | Finds Element instance(s) by the given condition.
| [htmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-htmlattributes "Defined by craft\base\Element")                                       | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-normalizefieldvalue "Defined by craft\base\Element")                             | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-prepelementqueryfortableattribute "Defined by craft\base\Element") | Preps the element criteria for a given table attribute
| [previewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-previewtargets "Defined by craft\base\Element")                                       | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")                          | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-route "Defined by craft\base\Element")                                                         | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-commerce-elements-variant.md#method-tableattributehtml)                                                                                     | Returns the HTML that should be shown for a given attribute in Table View.

### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1193-L1203)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1208-L1223)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1228-L1233)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineSources()`





Defines the sources that elements of this type may belong to.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1166-L1169)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1174-L1188)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



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
- If the attribute value is a `\craft\commerce\elements\DateTime` object, the date will be formatted with a localized date format.
- For anything else, it will output the attribute value as a string.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Variant.php#L1238-L1279)


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


## Events

### EVENT_AFTER_CAPTURE_PRODUCT_SNAPSHOT



Type

:   `\craft\commerce\elements\craft\commerce\events\CustomizeProductSnapshotDataEvent`



The event that is triggered after a product’s field data is captured, which can be used to customize, extend, or redact the data to be persisted on the product instance.

```php
use craft\commerce\elements\Variant;
use craft\commerce\elements\Product;
use craft\commerce\events\CustomizeProductSnapshotDataEvent;
use yii\base\Event;

Event::on(
    Variant::class,
    Variant::EVENT_AFTER_CAPTURE_PRODUCT_SNAPSHOT,
    function(CustomizeProductSnapshotDataEvent $event) {
        // @var Product $product
        $product = $event->product;
        // @var array $data
        $data = $event->fieldData;

        // Modify or redact captured `$data`
        // ...
    }
);
```



---



### EVENT_AFTER_CAPTURE_VARIANT_SNAPSHOT



Type

:   `\craft\commerce\elements\craft\commerce\events\CustomizeVariantSnapshotDataEvent`



The event that is triggered after a variant’s field data is captured. This makes it possible to customize, extend, or redact the data to be persisted on the variant instance.

```php
use craft\commerce\elements\Variant;
use craft\commerce\events\CustomizeVariantSnapshotDataEvent;
use yii\base\Event;

Event::on(
    Variant::class,
    Variant::EVENT_AFTER_CAPTURE_VARIANT_SNAPSHOT,
    function(CustomizeVariantSnapshotDataEvent $event) {
        // @var Variant $variant
        $variant = $event->variant;
        // @var array|null $fields
        $fields = $event->fields;

        // Modify or redact captured `$data`
        // ...
    }
);
```



---



### EVENT_BEFORE_CAPTURE_PRODUCT_SNAPSHOT



Type

:   `\craft\commerce\elements\craft\commerce\events\CustomizeProductSnapshotFieldsEvent`



The event that is triggered before a product’s field data is captured. This makes it possible to customize which fields are included in the snapshot. Custom fields are not included by default.

This example adds every custom field to the product snapshot:

```php
use craft\commerce\elements\Variant;
use craft\commerce\elements\Product;
use craft\commerce\events\CustomizeProductSnapshotFieldsEvent;
use yii\base\Event;

Event::on(
    Variant::class,
    Variant::EVENT_BEFORE_CAPTURE_PRODUCT_SNAPSHOT,
    function(CustomizeProductSnapshotFieldsEvent $event) {
        // @var Product $product
        $product = $event->product;
        // @var array|null $fields
        $fields = $event->fields;

        // Add every custom field to the snapshot
        if (($fieldLayout = $product->getFieldLayout()) !== null) {
            foreach ($fieldLayout->getFields() as $field) {
                $fields[] = $field->handle;
            }
        }

        $event->fields = $fields;
    }
);
```

::: warning
Add with care! A huge amount of custom fields/data will increase your database size.
:::



---



### EVENT_BEFORE_CAPTURE_VARIANT_SNAPSHOT



Type

:   `\craft\commerce\elements\craft\commerce\events\CustomizeVariantSnapshotFieldsEvent`



The event that is triggered before a variant’s field data is captured, which makes it possible to customize which fields are included in the snapshot. Custom fields are not included by default.

This example adds every custom field to the variant snapshot:

```php
use craft\commerce\elements\Variant;
use craft\commerce\events\CustomizeVariantSnapshotFieldsEvent;
use yii\base\Event;

Event::on(
    Variant::class,
    Variant::EVENT_BEFORE_CAPTURE_VARIANT_SNAPSHOT,
    function(CustomizeVariantSnapshotFieldsEvent $event) {
        // @var Variant $variant
        $variant = $event->variant;
        // @var array|null $fields
        $fields = $event->fields;

        // Add every custom field to the snapshot
        if (($fieldLayout = $variant->getFieldLayout()) !== null) {
            foreach ($fieldLayout->getFields() as $field) {
                $fields[] = $field->handle;
            }
        }

        $event->fields = $fields;
    }
);
```



---




