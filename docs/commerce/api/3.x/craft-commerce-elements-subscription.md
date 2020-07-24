---
title: craft\commerce\elements\Subscription
code:
  - php
  - twig
---

# Subscription

Type

:   Class

Namespace

:   craft\commerce\elements

Inherits

:   [craft\commerce\elements\Subscription](craft-commerce-elements-subscription.md) &raquo;
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



Subscription model.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)


## Public Properties

| Property                                                                                                                                      | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [_subscriptionData](craft-commerce-elements-subscription.md#subscriptiondata)                                                                 | [array](http://php.net/language.types.array) – The subscription data from gateway
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model")              | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [allPayments](craft-commerce-elements-subscription.md#allpayments)                                                                            | [craft\commerce\models\subscriptions\SubscriptionPayment](craft-commerce-models-subscriptions-subscriptionpayment.md)[]
| [alternativePlans](craft-commerce-elements-subscription.md#alternativeplans)                                                                  | [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]
| [ancestors](https://docs.craftcms.com/api/v3/craft-base-element.html#ancestors "Defined by craft\base\Element")                               | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [archived](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#archived "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")                          | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [awaitingFieldValues](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#awaitingfieldvalues "Defined by craft\base\ElementTrait") | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                    | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [billingIssueDescription](craft-commerce-elements-subscription.md#billingissuedescription)                                                    | `mixed`
| [billingIssueResolveFormHtml](craft-commerce-elements-subscription.md#billingissueresolveformhtml)                                            | `mixed`
| [children](https://docs.craftcms.com/api/v3/craft-base-element.html#children "Defined by craft\base\Element")                                 | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [contentId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#contentid "Defined by craft\base\ElementTrait")                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](https://docs.craftcms.com/api/v3/craft-base-element.html#contenttable "Defined by craft\base\Element")                         | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-commerce-elements-subscription.md#cpediturl)                                                                                | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#currentrevision "Defined by craft\base\Element")                   | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [dateCanceled](craft-commerce-elements-subscription.md#datecanceled)                                                                          | [DateTime](http://php.net/class.datetime) – Time when subscription was canceled
| [dateCreated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datecreated "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#datedeleted "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateExpired](craft-commerce-elements-subscription.md#dateexpired)                                                                            | [DateTime](http://php.net/class.datetime) – Time when subscription expired
| [dateSuspended](craft-commerce-elements-subscription.md#datesuspended)                                                                        | [DateTime](http://php.net/class.datetime) – Time when subscription was put on hold
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#dateupdated "Defined by craft\base\ElementTrait")                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [descendants](https://docs.craftcms.com/api/v3/craft-base-element.html#descendants "Defined by craft\base\Element")                           | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [dirtyAttributes](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyattributes "Defined by craft\base\Element")                   | [string](http://php.net/language.types.string)[]
| [dirtyFields](https://docs.craftcms.com/api/v3/craft-base-element.html#dirtyfields "Defined by craft\base\Element")                           | [string](http://php.net/language.types.string)[]
| [draftId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#draftid "Defined by craft\base\ElementTrait")                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#duplicateof "Defined by craft\base\ElementTrait")                 | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](https://docs.craftcms.com/api/v3/craft-base-element.html#editorhtml "Defined by craft\base\Element")                             | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#enabled "Defined by craft\base\ElementTrait")                         | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](https://docs.craftcms.com/api/v3/craft-base-element.html#enabledforsite "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                                  | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [fieldColumnPrefix](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcolumnprefix "Defined by craft\base\Element")               | [string](http://php.net/language.types.string)
| [fieldContext](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldcontext "Defined by craft\base\Element")                         | [string](http://php.net/language.types.string)
| [fieldLayout](craft-commerce-elements-subscription.md#fieldlayout)                                                                            | [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)
| [fieldLayoutId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#fieldlayoutid "Defined by craft\base\ElementTrait")             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldparamnamespace "Defined by craft\base\Element")           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#fieldvalues "Defined by craft\base\Element")                           | [array](http://php.net/language.types.array) – The field values (handle => value)
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")                        | [array](http://php.net/language.types.array) – The first errors.
| [gateway](craft-commerce-elements-subscription.md#gateway)                                                                                    | [craft\commerce\base\SubscriptionGatewayInterface](craft-commerce-base-subscriptiongatewayinterface.md)
| [gatewayId](craft-commerce-elements-subscription.md#gatewayid)                                                                                | [integer](http://php.net/language.types.integer) – Gateway id
| [gqlTypeName](https://docs.craftcms.com/api/v3/craft-base-element.html#gqltypename "Defined by craft\base\Element")                           | [string](http://php.net/language.types.string)
| [hardDelete](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#harddelete "Defined by craft\base\ElementTrait")                   | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasBillingIssues](craft-commerce-elements-subscription.md#hasbillingissues)                                                                  | `mixed`
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#hasdescendants "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](https://docs.craftcms.com/api/v3/craft-base-element.html#hasfreshcontent "Defined by craft\base\Element")                   | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [hasStarted](craft-commerce-elements-subscription.md#hasstarted)                                                                              | [boolean](http://php.net/language.types.boolean) – Whether the subscription has started
| [id](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#id "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isCanceled](craft-commerce-elements-subscription.md#iscanceled)                                                                              | [boolean](http://php.net/language.types.boolean) – Whether the subscription is canceled
| [isDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isdraft "Defined by craft\base\Element")                                   | [boolean](http://php.net/language.types.boolean)
| [isEditable](https://docs.craftcms.com/api/v3/craft-base-element.html#iseditable "Defined by craft\base\Element")                             | [boolean](http://php.net/language.types.boolean)
| [isExpired](craft-commerce-elements-subscription.md#isexpired)                                                                                | [boolean](http://php.net/language.types.boolean) – Whether the subscription has expired
| [isHomepage](https://docs.craftcms.com/api/v3/craft-base-element.html#ishomepage "Defined by craft\base\Element")                             | [boolean](http://php.net/language.types.boolean)
| [isOnTrial](craft-commerce-elements-subscription.md#isontrial)                                                                                | [boolean](http://php.net/language.types.boolean)
| [isRevision](https://docs.craftcms.com/api/v3/craft-base-element.html#isrevision "Defined by craft\base\Element")                             | [boolean](http://php.net/language.types.boolean)
| [isSuspended](craft-commerce-elements-subscription.md#issuspended)                                                                            | [boolean](http://php.net/language.types.boolean) – Whether the subscription is on hold due to payment issues
| [isUnsavedDraft](https://docs.craftcms.com/api/v3/craft-base-element.html#isunsaveddraft "Defined by craft\base\Element")                     | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                              | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [level](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#level "Defined by craft\base\ElementTrait")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#lft "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](https://docs.craftcms.com/api/v3/craft-base-element.html#link "Defined by craft\base\Element")                                         | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [name](craft-commerce-elements-subscription.md#name)                                                                                          | [null](http://php.net/language.types.null), [string](http://php.net/language.types.string)
| [newSiteIds](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#newsiteids "Defined by craft\base\ElementTrait")                   | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](https://docs.craftcms.com/api/v3/craft-base-element.html#next "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [nextPaymentAmount](craft-commerce-elements-subscription.md#nextpaymentamount)                                                                | [string](http://php.net/language.types.string)
| [nextPaymentDate](craft-commerce-elements-subscription.md#nextpaymentdate)                                                                    | [DateTime](http://php.net/class.datetime) – Date of next payment
| [nextSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#nextsibling "Defined by craft\base\Element")                           | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [order](craft-commerce-elements-subscription.md#order)                                                                                        | [null](http://php.net/language.types.null), [craft\commerce\elements\Order](craft-commerce-elements-order.md)
| [orderEditUrl](craft-commerce-elements-subscription.md#orderediturl)                                                                          | [string](http://php.net/language.types.string)
| [orderId](craft-commerce-elements-subscription.md#orderid)                                                                                    | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Order id
| [parent](https://docs.craftcms.com/api/v3/craft-base-element.html#parent "Defined by craft\base\Element")                                     | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [plan](craft-commerce-elements-subscription.md#plan)                                                                                          | [craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md)
| [planId](craft-commerce-elements-subscription.md#planid)                                                                                      | [integer](http://php.net/language.types.integer) – Plan id
| [planName](craft-commerce-elements-subscription.md#planname)                                                                                  | [string](http://php.net/language.types.string)
| [prev](https://docs.craftcms.com/api/v3/craft-base-element.html#prev "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [prevSibling](https://docs.craftcms.com/api/v3/craft-base-element.html#prevsibling "Defined by craft\base\Element")                           | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null)
| [previewTargets](https://docs.craftcms.com/api/v3/craft-base-element.html#previewtargets "Defined by craft\base\Element")                     | [array](http://php.net/language.types.array)
| [previewing](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#previewing "Defined by craft\base\ElementTrait")                   | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [propagateAll](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagateall "Defined by craft\base\ElementTrait")               | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#propagating "Defined by craft\base\ElementTrait")                 | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](https://docs.craftcms.com/api/v3/craft-base-element.html#ref "Defined by craft\base\Element")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [reference](craft-commerce-elements-subscription.md#reference)                                                                                | [string](http://php.net/language.types.string) – Subscription reference on the gateway
| [resaving](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#resaving "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#revisionid "Defined by craft\base\ElementTrait")                   | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#rgt "Defined by craft\base\ElementTrait")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#root "Defined by craft\base\ElementTrait")                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](https://docs.craftcms.com/api/v3/craft-base-element.html#route "Defined by craft\base\Element")                                       | `mixed` – The route that the request should use, or null if no special action should be taken
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                              | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#searchscore "Defined by craft\base\ElementTrait")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search) parameter was used when querying for the element
| [serializedFieldValues](https://docs.craftcms.com/api/v3/craft-base-element.html#serializedfieldvalues "Defined by craft\base\Element")       | [array](http://php.net/language.types.array)
| [siblings](https://docs.craftcms.com/api/v3/craft-base-element.html#siblings "Defined by craft\base\Element")                                 | [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)
| [site](https://docs.craftcms.com/api/v3/craft-base-element.html#site "Defined by craft\base\Element")                                         | [craft\models\Site](https://docs.craftcms.com/api/v3/craft-models-site.html)
| [siteId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#siteid "Defined by craft\base\ElementTrait")                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#slug "Defined by craft\base\ElementTrait")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceid "Defined by craft\base\Element")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](https://docs.craftcms.com/api/v3/craft-base-element.html#sourceuid "Defined by craft\base\Element")                               | [string](http://php.net/language.types.string)
| [status](craft-commerce-elements-subscription.md#status)                                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [structureId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#structureid "Defined by craft\base\ElementTrait")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [subscriber](craft-commerce-elements-subscription.md#subscriber)                                                                              | [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html)
| [subscriptionData](craft-commerce-elements-subscription.md#subscriptiondata)                                                                  | [array](http://php.net/language.types.array)
| [supportedSites](https://docs.craftcms.com/api/v3/craft-base-element.html#supportedsites "Defined by craft\base\Element")                     | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [tempId](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#tempid "Defined by craft\base\ElementTrait")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#title "Defined by craft\base\ElementTrait")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](https://docs.craftcms.com/api/v3/craft-base-element.html#totaldescendants "Defined by craft\base\Element")                 | [integer](http://php.net/language.types.integer)
| [trashed](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#trashed "Defined by craft\base\ElementTrait")                         | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [trialDays](craft-commerce-elements-subscription.md#trialdays)                                                                                | [integer](http://php.net/language.types.integer) – Trial days granted
| [trialExpires](craft-commerce-elements-subscription.md#trialexpires)                                                                          | [DateTime](http://php.net/class.datetime)
| [uiLabel](https://docs.craftcms.com/api/v3/craft-base-element.html#uilabel "Defined by craft\base\Element")                                   | [string](http://php.net/language.types.string)
| [uid](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uid "Defined by craft\base\ElementTrait")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](https://docs.craftcms.com/api/v3/craft-base-elementtrait.html#uri "Defined by craft\base\ElementTrait")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](https://docs.craftcms.com/api/v3/craft-base-element.html#uriformat "Defined by craft\base\Element")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](https://docs.craftcms.com/api/v3/craft-base-element.html#url "Defined by craft\base\Element")                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [userId](craft-commerce-elements-subscription.md#userid)                                                                                      | [integer](http://php.net/language.types.integer) – User id
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")                          | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `_subscriptionData`



Type

:   [array](http://php.net/language.types.array)



The subscription data from gateway



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L162)



### `allPayments`



Type

:   [craft\commerce\models\subscriptions\SubscriptionPayment](craft-commerce-models-subscriptions-subscriptionpayment.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `alternativePlans`



Type

:   [craft\commerce\base\Plan](craft-commerce-base-plan.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `billingIssueDescription`



Type

:   `mixed`

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `billingIssueResolveFormHtml`



Type

:   `mixed`

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `dateCanceled`



Type

:   [DateTime](http://php.net/class.datetime)



Time when subscription was canceled



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L112)



### `dateExpired`



Type

:   [DateTime](http://php.net/class.datetime)



Time when subscription expired



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L122)



### `dateSuspended`



Type

:   [DateTime](http://php.net/class.datetime)



Time when subscription was put on hold



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L137)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `gateway`



Type

:   [craft\commerce\base\SubscriptionGatewayInterface](craft-commerce-base-subscriptiongatewayinterface.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `gatewayId`



Type

:   [integer](http://php.net/language.types.integer)



Gateway id



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L82)



### `hasBillingIssues`



Type

:   `mixed`

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `hasStarted`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the subscription has started



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L127)



### `isCanceled`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the subscription is canceled



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L107)



### `isExpired`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the subscription has expired



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L117)



### `isOnTrial`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `isSuspended`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the subscription is on hold due to payment issues



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L132)



### `name`



Type

:   [null](http://php.net/language.types.null), [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `nextPaymentAmount`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `nextPaymentDate`



Type

:   [DateTime](http://php.net/class.datetime)



Date of next payment



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L102)



### `order`



Type

:   [null](http://php.net/language.types.null), [craft\commerce\elements\Order](craft-commerce-elements-order.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `orderEditUrl`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `orderId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Order id



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L87)



### `plan`



Type

:   [craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `planId`



Type

:   [integer](http://php.net/language.types.integer)



Plan id



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L77)



### `planName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `reference`



Type

:   [string](http://php.net/language.types.string)



Subscription reference on the gateway



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L92)



### `status`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `subscriber`



Type

:   [craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `subscriptionData`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `trialDays`



Type

:   [integer](http://php.net/language.types.integer)



Trial days granted



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L97)



### `trialExpires`



Type

:   [DateTime](http://php.net/class.datetime)

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php)



### `userId`



Type

:   [integer](http://php.net/language.types.integer)



User id



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L72)





## Protected Properties

| Property                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](https://docs.craftcms.com/api/v3/craft-base-element.html#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](https://docs.craftcms.com/api/v3/craft-base-element.html#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__call "Defined by craft\base\Element")                                                 | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                   |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                | Constructor.
| [__get()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__get "Defined by craft\base\Element")                                                   | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__isset "Defined by craft\base\Element")                                               | Checks if a property is set.
| [__set()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-__set "Defined by craft\base\Element")                                                   | Sets the value of a component property.
| [__toString()](craft-commerce-elements-subscription.md#method-tostring)                                                                                            |
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                          | Sets a component property to be null.
| [actions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-actions "Defined by craft\base\Element")                                               | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")                                | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-adderror "Defined by craft\base\Element")                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                                              | Adds a list of errors.
| [addModelErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-addmodelerrors "Defined by craft\base\Model")                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterdelete "Defined by craft\base\Element")                                       | Performs actions after an element is deleted.
| [afterMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-aftermoveinstructure "Defined by craft\base\Element")                     | Performs actions after an element is moved within a structure.
| [afterPropagate()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterpropagate "Defined by craft\base\Element")                                 | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-afterrestore "Defined by craft\base\Element")                                     | Performs actions after an element is restored.
| [afterSave()](craft-commerce-elements-subscription.md#method-aftersave)                                                                                            | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                                      | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                            | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                          | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                                    | Returns the attribute hints.
| [attributeLabels()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributelabels "Defined by craft\base\Element")                               | Returns the attribute labels.
| [attributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-attributes "Defined by craft\base\Element")                                         | Returns the list of attribute names.
| [beforeDelete()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforedelete "Defined by craft\base\Element")                                     | Performs actions before an element is deleted.
| [beforeMoveInStructure()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforemoveinstructure "Defined by craft\base\Element")                   | Performs actions before an element is moved within a structure.
| [beforeRestore()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforerestore "Defined by craft\base\Element")                                   | Performs actions before an element is restored.
| [beforeSave()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-beforesave "Defined by craft\base\Element")                                         | Performs actions before an element is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                                    | This method is invoked before validation starts.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-behaviors "Defined by craft\base\Element")                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be read.
| [canReactivate()](craft-commerce-elements-subscription.md#method-canreactivate)                                                                                    | Returns whether this subscription can be reactivated.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                    | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                                          | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")                                | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-commerce-elements-subscription.md#method-datetimeattributes)                                                                          | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defaulttableattributes "Defined by craft\base\Element")                 | Returns the list of table attribute keys that should be shown by default.
| [defineRules()](craft-commerce-elements-subscription.md#method-definerules)                                                                                        | Returns the validation rules for attributes.
| [defineSources()](craft-commerce-elements-subscription.md#method-definesources)                                                                                    | Defines the sources that elements of this type may belong to.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                            | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                          | Detaches all behaviors from the component.
| [displayName()](craft-commerce-elements-subscription.md#method-displayname)                                                                                        | Returns the display name of this class.
| [eagerLoadingMap()](craft-commerce-elements-subscription.md#method-eagerloadingmap)                                                                                | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                          | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-exporters "Defined by craft\base\Element")                                           | Returns the available export options for a given source.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                        | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                  | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](craft-commerce-elements-subscription.md#method-find)                                                                                                      | Creates an [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html) instance for query purpose.
| [findAll()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findall "Defined by craft\base\Element")                                               | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findone "Defined by craft\base\Element")                                               | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                                                | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model")                    | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")                          | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAllPayments()](craft-commerce-elements-subscription.md#method-getallpayments)                                                                                  | Returns an array of all payments for this subscription.
| [getAlternativePlans()](craft-commerce-elements-subscription.md#method-getalternativeplans)                                                                        | Returns possible alternative plans for this subscription
| [getAncestors()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getancestors "Defined by craft\base\Element")                                     | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")                                | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributelabel "Defined by craft\base\Element")                           | Returns the text label for the specified attribute.
| [getAttributeStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getattributestatus "Defined by craft\base\Element")                         | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                                      | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                  | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                | Returns all behaviors attached to this component.
| [getBillingIssueDescription()](craft-commerce-elements-subscription.md#method-getbillingissuedescription)                                                          | Return a description of the billing issue (if any) with this subscription.
| [getBillingIssueResolveFormHtml()](craft-commerce-elements-subscription.md#method-getbillingissueresolveformhtml)                                                  | Return the form HTML for resolving the billing issue (if any) with this subscription.
| [getChildren()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getchildren "Defined by craft\base\Element")                                       | Returns the element’s children.
| [getContentTable()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcontenttable "Defined by craft\base\Element")                               | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-commerce-elements-subscription.md#method-getcpediturl)                                                                                      | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getcurrentrevision "Defined by craft\base\Element")                         | Returns the element’s current revision, if one exists.
| [getDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdescendants "Defined by craft\base\Element")                                 | Returns the element’s descendants.
| [getDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyattributes "Defined by craft\base\Element")                         | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getdirtyfields "Defined by craft\base\Element")                                 | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelementcount "Defined by craft\base\Element")         | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteagerloadedelements "Defined by craft\base\Element")                 | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geteditorhtml "Defined by craft\base\Element")                                   | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getenabledforsite "Defined by craft\base\Element")                           | Returns whether the element is enabled for the current site.
| [getError()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-geterror "Defined by craft\base\Model")                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")                                  | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                                              | Returns the errors for all attributes or a single attribute.
| [getFieldColumnPrefix()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcolumnprefix "Defined by craft\base\Element")                     | Returns the field column prefix this element’s content uses.
| [getFieldContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldcontext "Defined by craft\base\Element")                               | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-commerce-elements-subscription.md#method-getfieldlayout)                                                                                  | Returns the field layout used by this element.
| [getFieldParamNamespace()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldparamnamespace "Defined by craft\base\Element")                 | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldstatus "Defined by craft\base\Element")                                 | Returns the status of a given field.
| [getFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalue "Defined by craft\base\Element")                                   | Returns the value for a given field.
| [getFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getfieldvalues "Defined by craft\base\Element")                                 | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                                      | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                                    | Returns the first error of every attribute in the model.
| [getGateway()](craft-commerce-elements-subscription.md#method-getgateway)                                                                                          | Returns the product type for the product tied to the license.
| [getGqlTypeName()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getgqltypename "Defined by craft\base\Element")                                 | Returns the GraphQL type name for this element type.
| [getHasBillingIssues()](craft-commerce-elements-subscription.md#method-gethasbillingissues)                                                                        | Return whether this subscription has billing issues.
| [getHasDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasdescendants "Defined by craft\base\Element")                           | Returns whether the element has descendants.
| [getHasFreshContent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethasfreshcontent "Defined by craft\base\Element")                         | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gethtmlattributes "Defined by craft\base\Element")                           | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getid "Defined by craft\base\Element")                                                   | Returns the element’s ID.
| [getIsDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisdraft "Defined by craft\base\Element")                                         | Returns whether this is a draft.
| [getIsEditable()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getiseditable "Defined by craft\base\Element")                                   | Returns whether the current user can edit the element.
| [getIsHomepage()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getishomepage "Defined by craft\base\Element")                                   | Returns whether this element represents the site homepage.
| [getIsOnTrial()](craft-commerce-elements-subscription.md#method-getisontrial)                                                                                      | Returns whether this subscription is on trial.
| [getIsRevision()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisrevision "Defined by craft\base\Element")                                   | Returns whether this is a revision.
| [getIsUnsavedDraft()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getisunsaveddraft "Defined by craft\base\Element")                           | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                                          | Returns an iterator for traversing the attributes in the model.
| [getLink()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getlink "Defined by craft\base\Element")                                               | Returns an anchor pre-filled with this element’s URL and title.
| [getName()](craft-commerce-elements-subscription.md#method-getname)                                                                                                |
| [getNext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnext "Defined by craft\base\Element")                                               | Returns the next element relative to this one, from a given set of criteria.
| [getNextPaymentAmount()](craft-commerce-elements-subscription.md#method-getnextpaymentamount)                                                                      | Returns the next payment amount with currency code as a string.
| [getNextSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getnextsibling "Defined by craft\base\Element")                                 | Returns the element’s next sibling.
| [getOrder()](craft-commerce-elements-subscription.md#method-getorder)                                                                                              | Returns the order that included this subscription, if any.
| [getOrderEditUrl()](craft-commerce-elements-subscription.md#method-getorderediturl)                                                                                | Returns the link for editing the order that purchased this license.
| [getParent()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getparent "Defined by craft\base\Element")                                           | Returns the element’s parent.
| [getPlan()](craft-commerce-elements-subscription.md#method-getplan)                                                                                                | Returns the subscription plan for this subscription
| [getPlanName()](craft-commerce-elements-subscription.md#method-getplanname)                                                                                        |
| [getPrev()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprev "Defined by craft\base\Element")                                               | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getprevsibling "Defined by craft\base\Element")                                 | Returns the element’s previous sibling.
| [getPreviewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getpreviewtargets "Defined by craft\base\Element")                           | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [getRef()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getref "Defined by craft\base\Element")                                                 | Returns the reference string to this element.
| [getRoute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getroute "Defined by craft\base\Element")                                             | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                                          | Returns the scenario that this model is used in.
| [getSearchKeywords()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsearchkeywords "Defined by craft\base\Element")                           | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getserializedfieldvalues "Defined by craft\base\Element")             | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getSiblings()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsiblings "Defined by craft\base\Element")                                       | Returns all of the element’s siblings.
| [getSite()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsite "Defined by craft\base\Element")                                               | Returns the site the element is associated with.
| [getSourceId()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceid "Defined by craft\base\Element")                                       | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsourceuid "Defined by craft\base\Element")                                     | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-commerce-elements-subscription.md#method-getstatus)                                                                                            | Returns the element’s status.
| [getSubscriber()](craft-commerce-elements-subscription.md#method-getsubscriber)                                                                                    | Returns the User that is subscribed.
| [getSubscriptionData()](craft-commerce-elements-subscription.md#method-getsubscriptiondata)                                                                        |
| [getSupportedSites()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getsupportedsites "Defined by craft\base\Element")                           | Returns the sites this element is associated with.
| [getTableAttributeHtml()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettableattributehtml "Defined by craft\base\Element")                   | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getthumburl "Defined by craft\base\Element")                                       | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gettotaldescendants "Defined by craft\base\Element")                       | Returns the total number of descendants that the element has.
| [getTrialExpires()](craft-commerce-elements-subscription.md#method-gettrialexpires)                                                                                | Returns the datetime of trial expiry.
| [getUiLabel()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-getuilabel "Defined by craft\base\Element")                                         | Returns what the element should be called within the control panel.
| [getUriFormat()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturiformat "Defined by craft\base\Element")                                     | Returns the URI format used to generate this element’s URI.
| [getUrl()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl "Defined by craft\base\Element")                                                 | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                                      | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gqlscopesbycontext "Defined by craft\base\Element")                         | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-gqltypenamebycontext "Defined by craft\base\Element")                     | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-commerce-elements-subscription.md#method-hascontent)                                                                                          | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-haseagerloadedelements "Defined by craft\base\Element")                 | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-haserrors "Defined by craft\base\Model")                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                        | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether a property is defined for this component.
| [hasStatuses()](craft-commerce-elements-subscription.md#method-hasstatuses)                                                                                        | Returns whether elements of this type have statuses.
| [hasTitles()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-hastitles "Defined by craft\base\Element")                                           | Returns whether elements of this type have traditional titles.
| [hasUris()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-hasuris "Defined by craft\base\Element")                                               | Returns whether elements of this type can have their own slugs and URIs.
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
| [isLocalized()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-islocalized "Defined by craft\base\Element")                                       | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isnextsiblingof "Defined by craft\base\Element")                               | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isparentof "Defined by craft\base\Element")                                         | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-isprevsiblingof "Defined by craft\base\Element")                               | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-issiblingof "Defined by craft\base\Element")                                       | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                                        | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                                        | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-commerce-elements-subscription.md#method-lowerdisplayname)                                                                              | Returns the lowercase version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).
| [markAsClean()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasclean "Defined by craft\base\Element")                                       | Resets the record of dirty attributes and fields.
| [markAsDirty()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-markasdirty "Defined by craft\base\Element")                                       | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                  | Detaches an existing event handler from this component.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-offsetexists "Defined by craft\base\Element")                                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                                              | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                                              | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                                          | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                    | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")                              | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-commerce-elements-subscription.md#method-pluraldisplayname)                                                                            | Returns the plural version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).
| [pluralLowerDisplayName()](craft-commerce-elements-subscription.md#method-plurallowerdisplayname)                                                                  | Returns the plural, lowercase version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).
| [refHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-refhandle "Defined by craft\base\Element")                                           | Returns the handle that should be used to refer to this element type from reference tags.
| [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules "Defined by craft\base\Model")                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                                    | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                                              | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-searchableattributes "Defined by craft\base\Element")                     | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                                      | Sets the attribute values in a massive way.
| [setDirtyAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-setdirtyattributes "Defined by craft\base\Element")                         | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-seteagerloadedelementcount "Defined by craft\base\Element")         | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-commerce-elements-subscription.md#method-seteagerloadedelements)                                                                  | Sets some eager-loaded elements on a given handle.
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
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                                          | Sets the scenario for the model.
| [setSubscriptionData()](craft-commerce-elements-subscription.md#method-setsubscriptiondata)                                                                        |
| [sortOptions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sortoptions "Defined by craft\base\Element")                                       | Returns the sort options for the element type.
| [sources()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-sources "Defined by craft\base\Element")                                               | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-commerce-elements-subscription.md#method-statuses)                                                                                              |
| [tableAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-tableattributes "Defined by craft\base\Element")                               | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                | Converts the model into an array.
| [trackChanges()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-trackchanges "Defined by craft\base\Element")                                     | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                          | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                                                | Performs the data validation.
| [validateCustomFieldAttribute()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldattribute "Defined by craft\base\Element")     | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-validatecustomfieldcontentsize "Defined by craft\base\Element") | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")                                | Validates multiple models.

### `__toString()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L200-L203)



#### Returns

[null](http://php.net/language.types.null), [string](http://php.net/language.types.string)



### `afterSave()`





Performs actions after an element is saved.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L597-L637)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `canReactivate()`





Returns whether this subscription can be reactivated.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L211-L214)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if gateway misconfigured


### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L575-L583)



#### Returns

[string](http://php.net/language.types.string)[]



### `defineRules()`





Returns the validation rules for attributes.



See [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](https://docs.craftcms.com/api/v3/craft-base-model.html#method-rules) so [EVENT_DEFINE_RULES](https://docs.craftcms.com/api/v3/craft-base-model.html#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L552-L559)



#### Returns

[array](http://php.net/language.types.array)



### `defineSources()`





Defines the sources that elements of this type may belong to.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L442-L496)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L168-L171)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `eagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on the given sub-property handle.



This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L509-L527)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – An array of the source elements
- `$handle` ([string](http://php.net/language.types.string)) – The property handle used to identify which target elements should be included in the map

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored



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




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L589-L592)



#### Returns

[craft\commerce\elements\db\SubscriptionQuery](craft-commerce-elements-db-subscriptionquery.md) – The newly created [craft\commerce\elements\db\SubscriptionQuery](craft-commerce-elements-db-subscriptionquery.md) instance.



### `getAllPayments()`





Returns an array of all payments for this subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L405-L408)



#### Returns

[craft\commerce\models\subscriptions\SubscriptionPayment](craft-commerce-models-subscriptions-subscriptionpayment.md)[]

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getAlternativePlans()`





Returns possible alternative plans for this subscription




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L358-L375)



#### Returns

[craft\commerce\base\Plan](craft-commerce-base-plan.md)[]



### `getBillingIssueDescription()`





Return a description of the billing issue (if any) with this subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L645-L647)



#### Returns

`mixed`

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if not a subscription gateway anymore


### `getBillingIssueResolveFormHtml()`





Return the form HTML for resolving the billing issue (if any) with this subscription.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L655-L657)



#### Returns

`mixed`

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if not a subscription gateway anymore


### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L380-L383)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L219-L222)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)



### `getGateway()`





Returns the product type for the product tied to the license.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L333-L343)



#### Returns

[craft\commerce\base\SubscriptionGatewayInterface](craft-commerce-base-subscriptiongatewayinterface.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if gateway misconfigured


### `getHasBillingIssues()`





Return whether this subscription has billing issues.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L665-L667)



#### Returns

`mixed`

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if not a subscription gateway anymore


### `getIsOnTrial()`





Returns whether this subscription is on trial.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L229-L237)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getName()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L413-L416)



#### Returns

[null](http://php.net/language.types.null), [string](http://php.net/language.types.string)



### `getNextPaymentAmount()`





Returns the next payment amount with currency code as a string.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L304-L307)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `getOrder()`





Returns the order that included this subscription, if any.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L314-L325)



#### Returns

[null](http://php.net/language.types.null), [craft\commerce\elements\Order](craft-commerce-elements-order.md)



### `getOrderEditUrl()`





Returns the link for editing the order that purchased this license.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L390-L397)



#### Returns

[string](http://php.net/language.types.string)



### `getPlan()`





Returns the subscription plan for this subscription




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L244-L251)



#### Returns

[craft\commerce\base\PlanInterface](craft-commerce-base-planinterface.md)



### `getPlanName()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L348-L351)



#### Returns

[string](http://php.net/language.types.string)



### `getStatus()`





Returns the element’s status.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L429-L436)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSubscriber()`





Returns the User that is subscribed.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L258-L265)



#### Returns

[craft\elements\User](https://docs.craftcms.com/api/v3/craft-elements-user.html)



### `getSubscriptionData()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L270-L273)



#### Returns

[array](http://php.net/language.types.array)



### `getTrialExpires()`





Returns the datetime of trial expiry.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L292-L296)



#### Returns

[DateTime](http://php.net/class.datetime)

#### Throws

- [Exception](http://php.net/class.exception)


### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L501-L504)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasStatuses()`





Returns whether elements of this type have statuses.



If this returns `true`, the element index template will show a Status menu by default, and your elements will
get status indicator icons next to them.
Use [statuses()](craft-commerce-elements-subscription.md#method-statuses) to customize which statuses the elements might have.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L421-L424)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have statuses.



### `lowerDisplayName()`





Returns the lowercase version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L176-L179)



#### Returns

[string](http://php.net/language.types.string)



### `pluralDisplayName()`





Returns the plural version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L184-L187)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`





Returns the plural, lowercase version of [displayName()](craft-commerce-elements-subscription.md#method-displayname).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L192-L195)



#### Returns

[string](http://php.net/language.types.string)



### `setEagerLoadedElements()`





Sets some eager-loaded elements on a given handle.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L532-L547)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html)) – The eager-loaded elements




### `setSubscriptionData()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L279-L284)


#### Arguments

- `$data` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array))




### `statuses()`










[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L564-L570)








## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineactions "Defined by craft\base\Element")                        | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-commerce-elements-subscription.md#method-definedefaulttableattributes)                                           | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-defineexporters "Defined by craft\base\Element")                    | Defines the available element exporters for a given source.
| [defineSearchableAttributes()](craft-commerce-elements-subscription.md#method-definesearchableattributes)                                               | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-commerce-elements-subscription.md#method-definesortoptions)                                                                 | Returns the sort options for the element type.
| [defineTableAttributes()](craft-commerce-elements-subscription.md#method-definetableattributes)                                                         | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [fieldByHandle()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldbyhandle "Defined by craft\base\Element")                        | Returns the field with a given handle.
| [fieldLayoutFields()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-fieldlayoutfields "Defined by craft\base\Element")                | Returns each of this element’s fields.
| [findByCondition()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-findbycondition "Defined by craft\base\Element")                    | Finds Element instance(s) by the given condition.
| [htmlAttributes()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-htmlattributes "Defined by craft\base\Element")                      | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-normalizefieldvalue "Defined by craft\base\Element")            | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](craft-commerce-elements-subscription.md#method-prepelementqueryfortableattribute)                                 | Preps the element criteria for a given table attribute
| [previewTargets()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-previewtargets "Defined by craft\base\Element")                      | Returns the additional locations that should be available for previewing the element, besides its primary [URL](https://docs.craftcms.com/api/v3/craft-base-element.html#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](https://docs.craftcms.com/api/v3/craft-base-element.html#method-route "Defined by craft\base\Element")                                        | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-commerce-elements-subscription.md#method-tableattributehtml)                                                               | Returns the HTML that should be shown for a given attribute in Table View.

### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L688-L697)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L702-L708)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L740-L754)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L672-L683)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `prepElementQueryForTableAttribute()`





Preps the element criteria for a given table attribute








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L761-L779)


#### Arguments

- `$elementQuery` ([craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html))
- `$attribute` ([string](http://php.net/language.types.string))




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




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/Subscription.php#L713-L735)


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
| `STATUS_ACTIVE`          |
| `STATUS_ARCHIVED`        |
| `STATUS_DISABLED`        |
| `STATUS_ENABLED`         |
| `STATUS_EXPIRED`         |
| `STATUS_SUSPENDED`       |



