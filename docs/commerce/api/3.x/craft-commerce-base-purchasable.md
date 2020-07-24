---
title: craft\commerce\base\Purchasable
code:
  - php
  - twig
---

# Purchasable

Type

:   Abstract Class

Namespace

:   craft\commerce\base

Inherits

:   [craft\commerce\base\Purchasable](craft-commerce-base-purchasable.md) &raquo;
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

Extended by

:   [craft\commerce\elements\Donation](craft-commerce-elements-donation.md), [craft\commerce\elements\Variant](craft-commerce-elements-variant.md), [craft\commerce\test\mockclasses\Purchasable](craft-commerce-test-mockclasses-purchasable.md)

Since

:   2.0



Base Purchasable





[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)


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
| [cpEditUrl](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#cpediturl "Defined by craft\base\ElementInterface")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#currentrevision "Defined by craft\base\ElementInterface")               | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datecreated "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datedeleted "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#dateupdated "Defined by craft\base\ElementTrait")                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [descendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#descendants "Defined by craft\base\ElementInterface")                       | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [description](craft-commerce-base-purchasable.md#description)                                                                                               | [string](http://php.net/language.types.string)
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
| [fieldLayout](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldlayout "Defined by craft\base\ElementInterface")                       | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)
| [fieldLayoutId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#fieldlayoutid "Defined by craft\base\ElementTrait")                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldparamnamespace "Defined by craft\base\ElementInterface")       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldvalues "Defined by craft\base\ElementInterface")                       | [array](http://php.net/language.types.array) – The field values (handle => value)
| [fieldValuesFromRequest](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#fieldvaluesfromrequest "Defined by craft\base\ElementInterface") | [string](http://php.net/language.types.string) – The field param namespace
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                                      | [array](http://php.net/language.types.array) – The first errors.
| [gqlTypeName](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#gqltypename "Defined by craft\base\ElementInterface")                       | [string](http://php.net/language.types.string)
| [hardDelete](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#harddelete "Defined by craft\base\ElementTrait")                                 | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#hasdescendants "Defined by craft\base\ElementInterface")                 | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#hasfreshcontent "Defined by craft\base\ElementInterface")               | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [id](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#id "Defined by craft\base\ElementTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isAvailable](craft-commerce-base-purchasable.md#isavailable)                                                                                               | [boolean](http://php.net/language.types.boolean)
| [isDraft](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isdraft "Defined by craft\base\ElementInterface")                               | [boolean](http://php.net/language.types.boolean)
| [isEditable](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#iseditable "Defined by craft\base\ElementInterface")                         | [boolean](http://php.net/language.types.boolean)
| [isHomepage](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#ishomepage "Defined by craft\base\ElementInterface")                         | [boolean](http://php.net/language.types.boolean)
| [isPromotable](craft-commerce-base-purchasable.md#ispromotable)                                                                                             | [boolean](http://php.net/language.types.boolean)
| [isRevision](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isrevision "Defined by craft\base\ElementInterface")                         | [boolean](http://php.net/language.types.boolean)
| [isShippable](craft-commerce-base-purchasable.md#isshippable)                                                                                               | [boolean](http://php.net/language.types.boolean)
| [isTaxable](craft-commerce-base-purchasable.md#istaxable)                                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#isunsaveddraft "Defined by craft\base\ElementInterface")                 | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                                            | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [level](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#level "Defined by craft\base\ElementTrait")                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#lft "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#link "Defined by craft\base\ElementInterface")                                     | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [newSiteIds](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#newsiteids "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#next "Defined by craft\base\ElementInterface")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [nextSibling](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#nextsibling "Defined by craft\base\ElementInterface")                       | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [onSale](craft-commerce-base-purchasable.md#onsale)                                                                                                         | [boolean](http://php.net/language.types.boolean)
| [parent](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#parent "Defined by craft\base\ElementInterface")                                 | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prev](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#prev "Defined by craft\base\ElementInterface")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prevSibling](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#prevsibling "Defined by craft\base\ElementInterface")                       | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [previewTargets](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#previewtargets "Defined by craft\base\ElementInterface")                 | [array](http://php.net/language.types.array)
| [previewing](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#previewing "Defined by craft\base\ElementTrait")                                 | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [price](craft-commerce-base-purchasableinterface.md#price "Defined by craft\commerce\base\PurchasableInterface")                                            | [float](http://php.net/language.types.float) – Decimal(14,4)
| [promotionRelationSource](craft-commerce-base-purchasable.md#promotionrelationsource)                                                                       | `mixed`
| [propagateAll](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagateall "Defined by craft\base\ElementTrait")                             | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagating "Defined by craft\base\ElementTrait")                               | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#ref "Defined by craft\base\ElementInterface")                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [resaving](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#resaving "Defined by craft\base\ElementTrait")                                     | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#revisionid "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#rgt "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#root "Defined by craft\base\ElementTrait")                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#route "Defined by craft\base\ElementInterface")                                   | `mixed` – The route that the request should use, or null if no special action should be taken
| [salePrice](craft-commerce-base-purchasable.md#saleprice)                                                                                                   | [float](http://php.net/language.types.float) – Decimal(14,4)
| [sales](craft-commerce-base-purchasable.md#sales)                                                                                                           | [craft\commerce\models\Sale](craft-commerce-models-sale.md)[], [null](http://php.net/language.types.null)
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                                            | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#searchscore "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search) parameter was used when querying for the element
| [serializedFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#serializedfieldvalues "Defined by craft\base\ElementInterface")   | [array](http://php.net/language.types.array)
| [shippingCategoryId](craft-commerce-base-purchasable.md#shippingcategoryid)                                                                                 | [integer](http://php.net/language.types.integer)
| [siblings](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#siblings "Defined by craft\base\ElementInterface")                             | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [site](https://docs.craftcms.com/api/v3/craft-base-element.html#site "Defined by craft\base\Element")                                                       | [craft\models\Site](https://docs.craftcms.com/api/v3/craft-models-site.html)
| [siteId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#siteid "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [sku](craft-commerce-base-purchasableinterface.md#sku "Defined by craft\commerce\base\PurchasableInterface")                                                | [string](http://php.net/language.types.string)
| [slug](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#slug "Defined by craft\base\ElementTrait")                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [snapshot](craft-commerce-base-purchasable.md#snapshot)                                                                                                     | [array](http://php.net/language.types.array)
| [sourceId](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#sourceid "Defined by craft\base\ElementInterface")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#sourceuid "Defined by craft\base\ElementInterface")                           | [string](http://php.net/language.types.string)
| [status](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#status "Defined by craft\base\ElementInterface")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [structureId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#structureid "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#supportedsites "Defined by craft\base\ElementInterface")                 | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [taxCategoryId](craft-commerce-base-purchasable.md#taxcategoryid)                                                                                           | [integer](http://php.net/language.types.integer)
| [tempId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#tempid "Defined by craft\base\ElementTrait")                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#title "Defined by craft\base\ElementTrait")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#totaldescendants "Defined by craft\base\ElementInterface")             | [integer](http://php.net/language.types.integer)
| [trashed](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#trashed "Defined by craft\base\ElementTrait")                                       | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uiLabel](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#uilabel "Defined by craft\base\ElementInterface")                               | [string](http://php.net/language.types.string)
| [uid](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uid "Defined by craft\base\ElementTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uri "Defined by craft\base\ElementTrait")                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#uriformat "Defined by craft\base\ElementInterface")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#url "Defined by craft\base\ElementInterface")                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                                        | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `description`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `isAvailable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `isPromotable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `isShippable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `isTaxable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `onSale`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `promotionRelationSource`



Type

:   `mixed`

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `salePrice`



Type

:   [float](http://php.net/language.types.float)

Access

:   Read-only



Decimal(14,4)



[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `sales`



Type

:   [craft\commerce\models\Sale](craft-commerce-models-sale.md)[], [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `shippingCategoryId`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `snapshot`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)



### `taxCategoryId`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php)





## Protected Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](https://docs.craftcms.com/api/v3/craft-base-element.html#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](https://docs.craftcms.com/api/v3/craft-base-element.html#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__call "Defined by craft\base\Element")                                                           | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                             |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                          | Constructor.
| [__get()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__get "Defined by craft\base\Element")                                                             | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__isset "Defined by craft\base\Element")                                                         | Checks if a property is set.
| [__set()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__set "Defined by craft\base\Element")                                                             | Sets the value of a component property.
| [__toString()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__tostring "Defined by craft\base\Element")                                                   | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                                    | Sets a component property to be null.
| [actions()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-actions "Defined by craft\base\ElementInterface")                                       | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                          | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-adderror "Defined by craft\base\Element")                                                       | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                                        | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                               | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-commerce-base-purchasable.md#method-afterdelete)                                                                                                       | Clean up purchasable table
| [afterMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-aftermoveinstructure "Defined by craft\base\ElementInterface")             | Performs actions after an element is moved within a structure.
| [afterOrderComplete()](craft-commerce-base-purchasable.md#method-afterordercomplete)                                                                                         | Runs any logic needed for this purchasable after it was on an order that was just completed (not when an order was paid, although paying an order will complete it).
| [afterPropagate()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-afterpropagate "Defined by craft\base\ElementInterface")                         | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-afterrestore "Defined by craft\base\ElementInterface")                             | Performs actions after an element is restored.
| [afterSave()](craft-commerce-base-purchasable.md#method-aftersave)                                                                                                           | Update purchasable table
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                                | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                      | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                    | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                              | Returns the attribute hints.
| [attributeLabels()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributelabels "Defined by craft\base\Element")                                         | Returns the attribute labels.
| [attributes()](craft-commerce-base-purchasable.md#method-attributes)                                                                                                         | Returns the list of attribute names.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-beforedelete "Defined by craft\base\ElementInterface")                             | Performs actions before an element is deleted.
| [beforeMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-beforemoveinstructure "Defined by craft\base\ElementInterface")           | Performs actions before an element is moved within a structure.
| [beforeRestore()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-beforerestore "Defined by craft\base\ElementInterface")                           | Performs actions before an element is restored.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-beforesave "Defined by craft\base\ElementInterface")                                 | Performs actions before an element is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                              | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-behaviors "Defined by craft\base\Element")                                                     | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                              | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                                    | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                          | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-datetimeattributes "Defined by craft\base\Model")                                       | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-defaulttableattributes "Defined by craft\base\ElementInterface")         | Returns the list of table attribute keys that should be shown by default.
| [defineRules()](craft-commerce-base-purchasable.md#method-definerules)                                                                                                       | Returns the validation rules for attributes.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                      | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                    | Detaches all behaviors from the component.
| [displayName()](craft-commerce-base-purchasable.md#method-displayname)                                                                                                       | Returns the display name of this class.
| [eagerLoadingMap()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-eagerloadingmap "Defined by craft\base\ElementInterface")                       | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                    | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-exporters "Defined by craft\base\ElementInterface")                                   | Returns the available export options for a given source.
| [extraFields()](craft-commerce-base-purchasable.md#method-extrafields)                                                                                                       | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                            | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-find "Defined by craft\base\ElementInterface")                                             | Creates an [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance for query purpose.
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
| [getCpEditUrl()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getcpediturl "Defined by craft\base\ElementInterface")                             | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getcurrentrevision "Defined by craft\base\ElementInterface")                 | Returns the element’s current revision, if one exists.
| [getDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getdescendants "Defined by craft\base\ElementInterface")                         | Returns the element’s descendants.
| [getDescription()](craft-commerce-base-purchasable.md#method-getdescription)                                                                                                 | Returns your element's title or any additional descriptive information.
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
| [getFieldLayout()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldlayout "Defined by craft\base\ElementInterface")                         | Returns the field layout used by this element.
| [getFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldparamnamespace "Defined by craft\base\ElementInterface")         | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldstatus "Defined by craft\base\ElementInterface")                         | Returns the status of a given field.
| [getFieldValue()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldvalue "Defined by craft\base\ElementInterface")                           | Returns the value for a given field.
| [getFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getfieldvalues "Defined by craft\base\ElementInterface")                         | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                                | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                              | Returns the first error of every attribute in the model.
| [getGqlTypeName()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getgqltypename "Defined by craft\base\ElementInterface")                         | Returns the GraphQL type name for this element type.
| [getHasDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethasdescendants "Defined by craft\base\ElementInterface")                   | Returns whether the element has descendants.
| [getHasFreshContent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethasfreshcontent "Defined by craft\base\ElementInterface")                 | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gethtmlattributes "Defined by craft\base\ElementInterface")                   | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](craft-commerce-base-purchasableinterface.md#method-getid "Defined by craft\commerce\base\PurchasableInterface")                                                    | Returns the element’s ID.
| [getIsAvailable()](craft-commerce-base-purchasable.md#method-getisavailable)                                                                                                 | Returns whether the purchasable is currently available for purchase.
| [getIsDraft()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisdraft "Defined by craft\base\ElementInterface")                                 | Returns whether this is a draft.
| [getIsEditable()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getiseditable "Defined by craft\base\ElementInterface")                           | Returns whether the current user can edit the element.
| [getIsHomepage()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getishomepage "Defined by craft\base\ElementInterface")                           | Returns whether this element represents the site homepage.
| [getIsPromotable()](craft-commerce-base-purchasable.md#method-getispromotable)                                                                                               | Returns whether this purchasable can be subject to discounts or sales.
| [getIsRevision()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisrevision "Defined by craft\base\ElementInterface")                           | Returns whether this is a revision.
| [getIsShippable()](craft-commerce-base-purchasable.md#method-getisshippable)                                                                                                 |
| [getIsTaxable()](craft-commerce-base-purchasable.md#method-getistaxable)                                                                                                     | Returns whether this purchasable is exempt from taxes.
| [getIsUnsavedDraft()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getisunsaveddraft "Defined by craft\base\ElementInterface")                   | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                                    | Returns an iterator for traversing the attributes in the model.
| [getLineItemRules()](craft-commerce-base-purchasable.md#method-getlineitemrules)                                                                                             | Returns any validation rules this purchasable required the line item to have.
| [getLink()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getlink "Defined by craft\base\ElementInterface")                                       | Returns an anchor pre-filled with this element’s URL and title.
| [getNext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getnext "Defined by craft\base\ElementInterface")                                       | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getnextsibling "Defined by craft\base\ElementInterface")                         | Returns the element’s next sibling.
| [getOnSale()](craft-commerce-base-purchasable.md#method-getonsale)                                                                                                           |
| [getParent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getparent "Defined by craft\base\ElementInterface")                                   | Returns the element’s parent.
| [getPrev()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getprev "Defined by craft\base\ElementInterface")                                       | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getprevsibling "Defined by craft\base\ElementInterface")                         | Returns the element’s previous sibling.
| [getPreviewTargets()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getpreviewtargets "Defined by craft\base\ElementInterface")                   | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geturl).
| [getPrice()](craft-commerce-base-purchasableinterface.md#method-getprice "Defined by craft\commerce\base\PurchasableInterface")                                              | Returns the base price the item will be added to the line item with.
| [getPromotionRelationSource()](craft-commerce-base-purchasable.md#method-getpromotionrelationsource)                                                                         | Returns the source param used for knowing if a promotion category is related to this purchasable.
| [getRef()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getref "Defined by craft\base\ElementInterface")                                         | Returns the reference string to this element.
| [getRoute()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getroute "Defined by craft\base\ElementInterface")                                     | Returns the route that should be used when the element’s URI is requested.
| [getSalePrice()](craft-commerce-base-purchasable.md#method-getsaleprice)                                                                                                     | Returns the base price the item will be added to the line item with.
| [getSales()](craft-commerce-base-purchasable.md#method-getsales)                                                                                                             | Returns an array of sales models which are currently affecting the salePrice of this purchasable.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                                    | Returns the scenario that this model is used in.
| [getSearchKeywords()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsearchkeywords "Defined by craft\base\ElementInterface")                   | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getserializedfieldvalues "Defined by craft\base\ElementInterface")     | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getShippingCategoryId()](craft-commerce-base-purchasable.md#method-getshippingcategoryid)                                                                                   | Returns the purchasable's shipping category ID.
| [getSiblings()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsiblings "Defined by craft\base\ElementInterface")                               | Returns all of the element’s siblings.
| [getSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsite "Defined by craft\base\Element")                                                         | Returns the site the element is associated with.
| [getSku()](craft-commerce-base-purchasableinterface.md#method-getsku "Defined by craft\commerce\base\PurchasableInterface")                                                  | Returns a unique code. Unique as per the commerce_purchasables table.
| [getSnapshot()](craft-commerce-base-purchasable.md#method-getsnapshot)                                                                                                       | Returns an array of data that is serializable to json for storing a line item at time of adding to the cart or order.
| [getSourceId()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsourceid "Defined by craft\base\ElementInterface")                               | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsourceuid "Defined by craft\base\ElementInterface")                             | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getstatus "Defined by craft\base\ElementInterface")                                   | Returns the element’s status.
| [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getsupportedsites "Defined by craft\base\ElementInterface")                   | Returns the sites this element is associated with.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gettableattributehtml "Defined by craft\base\ElementInterface")           | Returns the HTML that should be shown for a given attribute in Table View.
| [getTaxCategoryId()](craft-commerce-base-purchasable.md#method-gettaxcategoryid)                                                                                             | Returns the purchasable's tax category ID.
| [getThumbUrl()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getthumburl "Defined by craft\base\ElementInterface")                               | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gettotaldescendants "Defined by craft\base\ElementInterface")               | Returns the total number of descendants that the element has.
| [getUiLabel()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-getuilabel "Defined by craft\base\ElementInterface")                                 | Returns what the element should be called within the control panel.
| [getUriFormat()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geturiformat "Defined by craft\base\ElementInterface")                             | Returns the URI format used to generate this element’s URI.
| [getUrl()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-geturl "Defined by craft\base\ElementInterface")                                         | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                                | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gqlscopesbycontext "Defined by craft\base\ElementInterface")                 | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-gqltypenamebycontext "Defined by craft\base\ElementInterface")             | Returns the GraphQL type name by an element's context.
| [hasContent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-hascontent "Defined by craft\base\ElementInterface")                                 | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-haseagerloadedelements "Defined by craft\base\ElementInterface")         | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                                         | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether there is any handler attached to the named event.
| [hasFreeShipping()](craft-commerce-base-purchasable.md#method-hasfreeshipping)                                                                                               | Returns whether this purchasable has free shipping.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                                | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                            | Returns a value indicating whether a property is defined for this component.
| [hasStatuses()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-hasstatuses "Defined by craft\base\ElementInterface")                               | Returns whether elements of this type have statuses.
| [hasTitles()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-hastitles "Defined by craft\base\ElementInterface")                                   | Returns whether elements of this type have traditional titles.
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
| [isLocalized()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-islocalized "Defined by craft\base\ElementInterface")                               | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isnextsiblingof "Defined by craft\base\ElementInterface")                       | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isparentof "Defined by craft\base\ElementInterface")                                 | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-isprevsiblingof "Defined by craft\base\ElementInterface")                       | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-issiblingof "Defined by craft\base\ElementInterface")                               | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                                  | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                                  | Populates a set of models with the data from end user.
| [lowerDisplayName()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-lowerdisplayname "Defined by craft\base\ElementInterface")                     | Returns the lowercase version of [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname).
| [markAsClean()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-markasclean "Defined by craft\base\ElementInterface")                               | Resets the record of dirty attributes and fields.
| [markAsDirty()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-markasdirty "Defined by craft\base\ElementInterface")                               | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                            | Detaches an existing event handler from this component.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-offsetexists "Defined by craft\base\ElementInterface")                             | Treats custom fields as array offsets.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                                        | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                                        | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                                    | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                              | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                                        | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-pluraldisplayname "Defined by craft\base\ElementInterface")                   | Returns the plural version of [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname).
| [pluralLowerDisplayName()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-plurallowerdisplayname "Defined by craft\base\ElementInterface")         | Returns the plural, lowercase version of [displayName()](https://docs.craftcms.com/api/v3/craft-base-componentinterface.html#method-displayname).
| [populateLineItem()](craft-commerce-base-purchasable.md#method-populatelineitem)                                                                                             | Populates the line item when this purchasable is found on it. Called when Purchasable is added to the cart and when the cart recalculates.
| [refHandle()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-refhandle "Defined by craft\base\ElementInterface")                                   | Returns the handle that should be used to refer to this element type from reference tags.
| [relatedSales()](craft-commerce-base-purchasable.md#method-relatedsales)                                                                                                     |
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                                 | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                              | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                                        | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-searchableattributes "Defined by craft\base\ElementInterface")             | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                                | Sets the attribute values in a massive way.
| [setDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setdirtyattributes "Defined by craft\base\Element")                                   | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-seteagerloadedelementcount "Defined by craft\base\ElementInterface") | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-seteagerloadedelements "Defined by craft\base\ElementInterface")         | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setenabledforsite "Defined by craft\base\ElementInterface")                   | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldparamnamespace "Defined by craft\base\ElementInterface")         | Sets the namespace used by custom field params on the request.
| [setFieldValue()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvalue "Defined by craft\base\ElementInterface")                           | Sets the value for a given field.
| [setFieldValues()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvalues "Defined by craft\base\ElementInterface")                         | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setfieldvaluesfromrequest "Defined by craft\base\ElementInterface")   | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setnext "Defined by craft\base\ElementInterface")                                       | Sets the default next element.
| [setParent()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setparent "Defined by craft\base\ElementInterface")                                   | Sets the element’s parent.
| [setPrev()](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html#method-setprev "Defined by craft\base\ElementInterface")                                       | Sets the default previous element.
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
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                                          | Performs the data validation.
| [validateCustomFieldAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldattribute "Defined by craft\base\Element")               | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldcontentsize "Defined by craft\base\Element")           | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                          | Validates multiple models.

### `afterDelete()`





Clean up purchasable table




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L261-L270)






### `afterOrderComplete()`





Runs any logic needed for this purchasable after it was on an order that was just completed (not when an order was paid, although paying an order will complete it).



This is called for each line item the purchasable was contained within.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L191-L193)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

`void`



### `afterSave()`





Update purchasable table




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L240-L256)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean))




### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L56-L67)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L173-L186)



#### Returns

[array](http://php.net/language.types.array)



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L86-L91)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L72-L81)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `getDescription()`





Returns your element's title or any additional descriptive information.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L142-L145)



#### Returns

[string](http://php.net/language.types.string)



### `getIsAvailable()`





Returns whether the purchasable is currently available for purchase.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L165-L168)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPromotable()`





Returns whether this purchasable can be subject to discounts or sales.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L222-L225)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsShippable()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L206-L209)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsTaxable()`





Returns whether this purchasable is exempt from taxes.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L214-L217)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLineItemRules()`





Returns any validation rules this purchasable required the line item to have.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L157-L160)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))

#### Returns

[array](http://php.net/language.types.array)



### `getOnSale()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L283-L286)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getPromotionRelationSource()`





Returns the source param used for knowing if a promotion category is related to this purchasable.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L230-L233)



#### Returns

`mixed`



### `getSalePrice()`





Returns the base price the item will be added to the line item with.



It provides opportunity to populate the salePrice if sales have not already been applied.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L104-L109)



#### Returns

[float](http://php.net/language.types.float) – Decimal(14,4)



### `getSales()`





Returns an array of sales models which are currently affecting the salePrice of this purchasable.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L116-L121)



#### Returns

[craft\commerce\models\Sale](craft-commerce-models-sale.md)[], [null](http://php.net/language.types.null)



### `getShippingCategoryId()`





Returns the purchasable's shipping category ID.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L134-L137)



#### Returns

[integer](http://php.net/language.types.integer)



### `getSnapshot()`





Returns an array of data that is serializable to json for storing a line
item at time of adding to the cart or order.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L96-L99)



#### Returns

[array](http://php.net/language.types.array)



### `getTaxCategoryId()`





Returns the purchasable's tax category ID.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L126-L129)



#### Returns

[integer](http://php.net/language.types.integer)



### `hasFreeShipping()`





Returns whether this purchasable has free shipping.








[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L198-L201)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `populateLineItem()`





Populates the line item when this purchasable is found on it. Called when
Purchasable is added to the cart and when the cart recalculates.



This is your chance to modify the weight, height, width, length, price
and saleAmount. This is called before any LineItems::EVENT_POPULATE_LINE_ITEM event listeners.




[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L150-L152)


#### Arguments

- `$lineItem` ([craft\commerce\models\LineItem](craft-commerce-models-lineitem.md))




### `relatedSales()`










[View source](https://github.com/craftcms/commerce/blob/master/src/base/Purchasable.php#L275-L278)



#### Returns

[craft\commerce\models\Sale](craft-commerce-models-sale.md)[] – The sales that relate directly to this purchasable





## Protected Methods

| Method                                                                                                                                                                   | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineactions "Defined by craft\base\Element")                                         | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-definedefaulttableattributes "Defined by craft\base\Element")           | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineexporters "Defined by craft\base\Element")                                     | Defines the available element exporters for a given source.
| [defineSearchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-definesearchableattributes "Defined by craft\base\Element")               | Defines which element attributes should be searchable.
| [defineSortOptions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-definesortoptions "Defined by craft\base\Element")                                 | Returns the sort options for the element type.
| [defineSources()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-definesources "Defined by craft\base\Element")                                         | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-definetableattributes "Defined by craft\base\Element")                         | Defines all of the available columns that can be shown in table views.
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
| [tableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-tableattributehtml "Defined by craft\base\Element")                               | Returns the HTML that should be shown for a given attribute in Table View.



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



