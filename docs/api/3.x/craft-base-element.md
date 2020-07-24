---
title: craft\base\Element
code:
  - php
  - twig
---

# Element

Type

:   Abstract Class

Namespace

:   craft\base

Inherits

:   [craft\base\Element](craft-base-element.md) &raquo;
[craft\base\Component](craft-base-component.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](craft-base-componentinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [craft\base\ElementTrait](craft-base-elementtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\elements\Asset](craft-elements-asset.md), [craft\elements\Category](craft-elements-category.md), [craft\elements\Entry](craft-elements-entry.md), [craft\elements\GlobalSet](craft-elements-globalset.md), [craft\elements\MatrixBlock](craft-elements-matrixblock.md), [craft\elements\Tag](craft-elements-tag.md), [craft\elements\User](craft-elements-user.md), [craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md), [craft\models\EntryDraft](craft-models-entrydraft.md), [craft\models\EntryVersion](craft-models-entryversion.md), [craft\test\mockclasses\elements\ExampleElement](craft-test-mockclasses-elements-exampleelement.md)

Since

:   3.0.0



Element is the base class for classes representing elements in terms of objects.





[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [ancestors](craft-base-element.md#ancestors)                                                                                     | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [archived](craft-base-elementtrait.md#archived "Defined by craft\base\ElementTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [awaitingFieldValues](craft-base-elementtrait.md#awaitingfieldvalues "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [children](craft-base-element.md#children)                                                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [contentId](craft-base-elementtrait.md#contentid "Defined by craft\base\ElementTrait")                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](craft-base-element.md#contenttable)                                                                               | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-base-element.md#cpediturl)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](craft-base-element.md#currentrevision)                                                                         | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [dateCreated](craft-base-elementtrait.md#datecreated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](craft-base-elementtrait.md#datedeleted "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](craft-base-elementtrait.md#dateupdated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [descendants](craft-base-element.md#descendants)                                                                                 | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [dirtyAttributes](craft-base-element.md#dirtyattributes)                                                                         | [string](http://php.net/language.types.string)[]
| [dirtyFields](craft-base-element.md#dirtyfields)                                                                                 | [string](http://php.net/language.types.string)[]
| [draftId](craft-base-elementtrait.md#draftid "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](craft-base-elementtrait.md#duplicateof "Defined by craft\base\ElementTrait")                                       | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](craft-base-element.md#editorhtml)                                                                                   | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](craft-base-elementtrait.md#enabled "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](craft-base-element.md#enabledforsite)                                                                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [fieldColumnPrefix](craft-base-element.md#fieldcolumnprefix)                                                                     | [string](http://php.net/language.types.string)
| [fieldContext](craft-base-element.md#fieldcontext)                                                                               | [string](http://php.net/language.types.string)
| [fieldLayout](craft-base-element.md#fieldlayout)                                                                                 | [craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)
| [fieldLayoutId](craft-base-elementtrait.md#fieldlayoutid "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](craft-base-element.md#fieldparamnamespace)                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](craft-base-element.md#fieldvalues)                                                                                 | [array](http://php.net/language.types.array) – The field values (handle => value)
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [gqlTypeName](craft-base-element.md#gqltypename)                                                                                 | [string](http://php.net/language.types.string)
| [hardDelete](craft-base-elementtrait.md#harddelete "Defined by craft\base\ElementTrait")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](craft-base-element.md#hasdescendants)                                                                           | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](craft-base-element.md#hasfreshcontent)                                                                         | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [id](craft-base-elementtrait.md#id "Defined by craft\base\ElementTrait")                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isDraft](craft-base-element.md#isdraft)                                                                                         | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-base-element.md#iseditable)                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isHomepage](craft-base-element.md#ishomepage)                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isRevision](craft-base-element.md#isrevision)                                                                                   | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](craft-base-element.md#isunsaveddraft)                                                                           | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [level](craft-base-elementtrait.md#level "Defined by craft\base\ElementTrait")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](craft-base-elementtrait.md#lft "Defined by craft\base\ElementTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](craft-base-element.md#link)                                                                                               | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [newSiteIds](craft-base-elementtrait.md#newsiteids "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](craft-base-element.md#next)                                                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [nextSibling](craft-base-element.md#nextsibling)                                                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [parent](craft-base-element.md#parent)                                                                                           | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [prev](craft-base-element.md#prev)                                                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [prevSibling](craft-base-element.md#prevsibling)                                                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [previewTargets](craft-base-element.md#previewtargets)                                                                           | [array](http://php.net/language.types.array)
| [previewing](craft-base-elementtrait.md#previewing "Defined by craft\base\ElementTrait")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [propagateAll](craft-base-elementtrait.md#propagateall "Defined by craft\base\ElementTrait")                                     | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](craft-base-elementtrait.md#propagating "Defined by craft\base\ElementTrait")                                       | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](craft-base-element.md#ref)                                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [resaving](craft-base-elementtrait.md#resaving "Defined by craft\base\ElementTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](craft-base-elementtrait.md#revisionid "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](craft-base-elementtrait.md#rgt "Defined by craft\base\ElementTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](craft-base-elementtrait.md#root "Defined by craft\base\ElementTrait")                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](craft-base-element.md#route)                                                                                             | `mixed` – The route that the request should use, or null if no special action should be taken
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](craft-base-elementtrait.md#searchscore "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](craft-elements-db-elementquery.md#method-search) parameter was used when querying for the element
| [serializedFieldValues](craft-base-element.md#serializedfieldvalues)                                                             | [array](http://php.net/language.types.array)
| [siblings](craft-base-element.md#siblings)                                                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [site](craft-base-element.md#site)                                                                                               | [craft\models\Site](craft-models-site.md)
| [siteId](craft-base-elementtrait.md#siteid "Defined by craft\base\ElementTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](craft-base-elementtrait.md#slug "Defined by craft\base\ElementTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](craft-base-element.md#sourceid)                                                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](craft-base-element.md#sourceuid)                                                                                     | [string](http://php.net/language.types.string)
| [status](craft-base-element.md#status)                                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [structureId](craft-base-elementtrait.md#structureid "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](craft-base-element.md#supportedsites)                                                                           | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [tempId](craft-base-elementtrait.md#tempid "Defined by craft\base\ElementTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](craft-base-elementtrait.md#title "Defined by craft\base\ElementTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](craft-base-element.md#totaldescendants)                                                                       | [integer](http://php.net/language.types.integer)
| [trashed](craft-base-elementtrait.md#trashed "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uiLabel](craft-base-element.md#uilabel)                                                                                         | [string](http://php.net/language.types.string)
| [uid](craft-base-elementtrait.md#uid "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](craft-base-elementtrait.md#uri "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](craft-base-element.md#uriformat)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](craft-base-element.md#url)                                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.

### `ancestors`



Type

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `children`



Type

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `contentTable`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `currentRevision`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `descendants`



Type

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `dirtyAttributes`



Type

:   [string](http://php.net/language.types.string)[]

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `dirtyFields`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `editorHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The HTML for the editor HUD



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `enabledForSite`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Since

:   3.4.0



Whether the element is enabled for the given site. `null` will be returned if a `$siteId` was
passed, but that site’s status wasn’t provided via [setEnabledForSite()](craft-base-element.md#method-setenabledforsite).



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `fieldColumnPrefix`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `fieldContext`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `fieldParamNamespace`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The field param namespace



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `fieldValues`



Type

:   [array](http://php.net/language.types.array)



The field values (handle => value)



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `gqlTypeName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.3.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `hasDescendants`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `hasFreshContent`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the element’s content is fresh



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `isDraft`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `isEditable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `isHomepage`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.3.6







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `isRevision`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `isUnsavedDraft`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `link`



Type

:   `\Twig\Markup`, [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `next`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `nextSibling`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `parent`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `prev`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `prevSibling`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `previewTargets`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `ref`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `route`



Type

:   `mixed`

Access

:   Read-only



The route that the request should use, or null if no special action should be taken



[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `serializedFieldValues`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `siblings`



Type

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `site`



Type

:   [craft\models\Site](craft-models-site.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `sourceId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `sourceUid`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `status`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `supportedSites`



Type

:   [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `totalDescendants`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `uiLabel`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `uriFormat`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php)





## Protected Properties

| Property                                                     | Description
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](craft-base-element.md#revisioncreatorid) | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](craft-base-element.md#revisionnotes)         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved

### `revisionCreatorId`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Revision creator ID to be saved

See also [setRevisionCreatorId()](craft-base-element.md#method-setrevisioncreatorid)

[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L954)



### `revisionNotes`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Revision notes to be saved

See also [setRevisionNotes()](craft-base-element.md#method-setrevisionnotes)

[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L960)





## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-base-element.md#method-call)                                                                                                   | Calls the named method which is not a class method.
| [__clone()](craft-base-element.md#method-clone)                                                                                                 |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](craft-base-element.md#method-get)                                                                                                     | Returns the value of a component property.
| [__isset()](craft-base-element.md#method-isset)                                                                                                 | Checks if a property is set.
| [__set()](craft-base-element.md#method-set)                                                                                                     | Sets the value of a component property.
| [__toString()](craft-base-element.md#method-tostring)                                                                                           | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [actions()](craft-base-element.md#method-actions)                                                                                               | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](craft-base-element.md#method-adderror)                                                                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-element.md#method-afterdelete)                                                                                       | Performs actions after an element is deleted.
| [afterMoveInStructure()](craft-base-element.md#method-aftermoveinstructure)                                                                     | Performs actions after an element is moved within a structure.
| [afterPropagate()](craft-base-element.md#method-afterpropagate)                                                                                 | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](craft-base-element.md#method-afterrestore)                                                                                     | Performs actions after an element is restored.
| [afterSave()](craft-base-element.md#method-aftersave)                                                                                           | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](craft-base-element.md#method-attributelabels)                                                                               | Returns the attribute labels.
| [attributes()](craft-base-element.md#method-attributes)                                                                                         | Returns the list of attribute names.
| [beforeDelete()](craft-base-element.md#method-beforedelete)                                                                                     | Performs actions before an element is deleted.
| [beforeMoveInStructure()](craft-base-element.md#method-beforemoveinstructure)                                                                   | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-base-element.md#method-beforerestore)                                                                                   | Performs actions before an element is restored.
| [beforeSave()](craft-base-element.md#method-beforesave)                                                                                         | Performs actions before an element is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-base-element.md#method-behaviors)                                                                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes "Defined by craft\base\Model")                                             | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](craft-base-element.md#method-defaulttableattributes)                                                                 | Returns the list of table attribute keys that should be shown by default.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [displayName()](craft-base-element.md#method-displayname)                                                                                       | Returns the display name of this class.
| [eagerLoadingMap()](craft-base-element.md#method-eagerloadingmap)                                                                               | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](craft-base-element.md#method-exporters)                                                                                           | Returns the available export options for a given source.
| [extraFields()](craft-base-element.md#method-extrafields)                                                                                       | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](craft-base-element.md#method-find)                                                                                                     | Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.
| [findAll()](craft-base-element.md#method-findall)                                                                                               | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](craft-base-element.md#method-findone)                                                                                               | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAncestors()](craft-base-element.md#method-getancestors)                                                                                     | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](craft-base-element.md#method-getattributelabel)                                                                           | Returns the text label for the specified attribute.
| [getAttributeStatus()](craft-base-element.md#method-getattributestatus)                                                                         | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getChildren()](craft-base-element.md#method-getchildren)                                                                                       | Returns the element’s children.
| [getContentTable()](craft-base-element.md#method-getcontenttable)                                                                               | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-base-element.md#method-getcpediturl)                                                                                     | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](craft-base-element.md#method-getcurrentrevision)                                                                         | Returns the element’s current revision, if one exists.
| [getDescendants()](craft-base-element.md#method-getdescendants)                                                                                 | Returns the element’s descendants.
| [getDirtyAttributes()](craft-base-element.md#method-getdirtyattributes)                                                                         | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](craft-base-element.md#method-getdirtyfields)                                                                                 | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](craft-base-element.md#method-geteagerloadedelementcount)                                                         | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](craft-base-element.md#method-geteagerloadedelements)                                                                 | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](craft-base-element.md#method-geteditorhtml)                                                                                   | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](craft-base-element.md#method-getenabledforsite)                                                                           | Returns whether the element is enabled for the current site.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFieldColumnPrefix()](craft-base-element.md#method-getfieldcolumnprefix)                                                                     | Returns the field column prefix this element’s content uses.
| [getFieldContext()](craft-base-element.md#method-getfieldcontext)                                                                               | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-base-element.md#method-getfieldlayout)                                                                                 | Returns the field layout used by this element.
| [getFieldParamNamespace()](craft-base-element.md#method-getfieldparamnamespace)                                                                 | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](craft-base-element.md#method-getfieldstatus)                                                                                 | Returns the status of a given field.
| [getFieldValue()](craft-base-element.md#method-getfieldvalue)                                                                                   | Returns the value for a given field.
| [getFieldValues()](craft-base-element.md#method-getfieldvalues)                                                                                 | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getGqlTypeName()](craft-base-element.md#method-getgqltypename)                                                                                 | Returns the GraphQL type name for this element type.
| [getHasDescendants()](craft-base-element.md#method-gethasdescendants)                                                                           | Returns whether the element has descendants.
| [getHasFreshContent()](craft-base-element.md#method-gethasfreshcontent)                                                                         | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](craft-base-element.md#method-gethtmlattributes)                                                                           | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](craft-base-element.md#method-getid)                                                                                                   | Returns the element’s ID.
| [getIsDraft()](craft-base-element.md#method-getisdraft)                                                                                         | Returns whether this is a draft.
| [getIsEditable()](craft-base-element.md#method-getiseditable)                                                                                   | Returns whether the current user can edit the element.
| [getIsHomepage()](craft-base-element.md#method-getishomepage)                                                                                   | Returns whether this element represents the site homepage.
| [getIsRevision()](craft-base-element.md#method-getisrevision)                                                                                   | Returns whether this is a revision.
| [getIsUnsavedDraft()](craft-base-element.md#method-getisunsaveddraft)                                                                           | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getLink()](craft-base-element.md#method-getlink)                                                                                               | Returns an anchor pre-filled with this element’s URL and title.
| [getNext()](craft-base-element.md#method-getnext)                                                                                               | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](craft-base-element.md#method-getnextsibling)                                                                                 | Returns the element’s next sibling.
| [getParent()](craft-base-element.md#method-getparent)                                                                                           | Returns the element’s parent.
| [getPrev()](craft-base-element.md#method-getprev)                                                                                               | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](craft-base-element.md#method-getprevsibling)                                                                                 | Returns the element’s previous sibling.
| [getPreviewTargets()](craft-base-element.md#method-getpreviewtargets)                                                                           | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).
| [getRef()](craft-base-element.md#method-getref)                                                                                                 | Returns the reference string to this element.
| [getRoute()](craft-base-element.md#method-getroute)                                                                                             | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-base-element.md#method-getsearchkeywords)                                                                           | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](craft-base-element.md#method-getserializedfieldvalues)                                                             | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getSiblings()](craft-base-element.md#method-getsiblings)                                                                                       | Returns all of the element’s siblings.
| [getSite()](craft-base-element.md#method-getsite)                                                                                               | Returns the site the element is associated with.
| [getSourceId()](craft-base-element.md#method-getsourceid)                                                                                       | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](craft-base-element.md#method-getsourceuid)                                                                                     | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-base-element.md#method-getstatus)                                                                                           | Returns the element’s status.
| [getSupportedSites()](craft-base-element.md#method-getsupportedsites)                                                                           | Returns the sites this element is associated with.
| [getTableAttributeHtml()](craft-base-element.md#method-gettableattributehtml)                                                                   | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](craft-base-element.md#method-getthumburl)                                                                                       | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](craft-base-element.md#method-gettotaldescendants)                                                                       | Returns the total number of descendants that the element has.
| [getUiLabel()](craft-base-element.md#method-getuilabel)                                                                                         | Returns what the element should be called within the control panel.
| [getUriFormat()](craft-base-element.md#method-geturiformat)                                                                                     | Returns the URI format used to generate this element’s URI.
| [getUrl()](craft-base-element.md#method-geturl)                                                                                                 | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](craft-base-element.md#method-gqlscopesbycontext)                                                                         | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](craft-base-element.md#method-gqltypenamebycontext)                                                                     | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-base-element.md#method-hascontent)                                                                                         | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](craft-base-element.md#method-haseagerloadedelements)                                                                 | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [hasStatuses()](craft-base-element.md#method-hasstatuses)                                                                                       | Returns whether elements of this type have statuses.
| [hasTitles()](craft-base-element.md#method-hastitles)                                                                                           | Returns whether elements of this type have traditional titles.
| [hasUris()](craft-base-element.md#method-hasuris)                                                                                               | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](craft-base-element.md#method-indexhtml)                                                                                           | Returns the element index HTML.
| [init()](craft-base-element.md#method-init)                                                                                                     | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAncestorOf()](craft-base-element.md#method-isancestorof)                                                                                     | Returns whether this element is an ancestor of another one.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [isChildOf()](craft-base-element.md#method-ischildof)                                                                                           | Returns whether this element is a direct child of another one.
| [isDescendantOf()](craft-base-element.md#method-isdescendantof)                                                                                 | Returns whether this element is a descendant of another one.
| [isFieldDirty()](craft-base-element.md#method-isfielddirty)                                                                                     | Returns whether a custom field value has changed since the element was first loaded.
| [isFieldEmpty()](craft-base-element.md#method-isfieldempty)                                                                                     | Returns whether a field is empty.
| [isLocalized()](craft-base-element.md#method-islocalized)                                                                                       | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](craft-base-element.md#method-isnextsiblingof)                                                                               | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](craft-base-element.md#method-isparentof)                                                                                         | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](craft-base-element.md#method-isprevsiblingof)                                                                               | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](craft-base-element.md#method-issiblingof)                                                                                       | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-base-element.md#method-lowerdisplayname)                                                                             | Returns the lowercase version of [displayName()](craft-base-element.md#method-displayname).
| [markAsClean()](craft-base-element.md#method-markasclean)                                                                                       | Resets the record of dirty attributes and fields.
| [markAsDirty()](craft-base-element.md#method-markasdirty)                                                                                       | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](craft-base-element.md#method-offsetexists)                                                                                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-base-element.md#method-pluraldisplayname)                                                                           | Returns the plural version of [displayName()](craft-base-element.md#method-displayname).
| [pluralLowerDisplayName()](craft-base-element.md#method-plurallowerdisplayname)                                                                 | Returns the plural, lowercase version of [displayName()](craft-base-element.md#method-displayname).
| [refHandle()](craft-base-element.md#method-refhandle)                                                                                           | Returns the handle that should be used to refer to this element type from reference tags.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](craft-base-element.md#method-searchableattributes)                                                                     | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setDirtyAttributes()](craft-base-element.md#method-setdirtyattributes)                                                                         | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](craft-base-element.md#method-seteagerloadedelementcount)                                                         | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-base-element.md#method-seteagerloadedelements)                                                                 | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](craft-base-element.md#method-setenabledforsite)                                                                           | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](craft-base-element.md#method-setfieldparamnamespace)                                                                 | Sets the namespace used by custom field params on the request.
| [setFieldValue()](craft-base-element.md#method-setfieldvalue)                                                                                   | Sets the value for a given field.
| [setFieldValues()](craft-base-element.md#method-setfieldvalues)                                                                                 | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](craft-base-element.md#method-setfieldvaluesfromrequest)                                                           | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](craft-base-element.md#method-setnext)                                                                                               | Sets the default next element.
| [setParent()](craft-base-element.md#method-setparent)                                                                                           | Sets the element’s parent.
| [setPrev()](craft-base-element.md#method-setprev)                                                                                               | Sets the default previous element.
| [setRevisionCreatorId()](craft-base-element.md#method-setrevisioncreatorid)                                                                     | Sets the revision creator ID to be saved.
| [setRevisionNotes()](craft-base-element.md#method-setrevisionnotes)                                                                             | Sets the revision notes to be saved.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [sortOptions()](craft-base-element.md#method-sortoptions)                                                                                       | Returns the sort options for the element type.
| [sources()](craft-base-element.md#method-sources)                                                                                               | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-base-element.md#method-statuses)                                                                                             | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](craft-base-element.md#method-tableattributes)                                                                               | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trackChanges()](craft-base-element.md#method-trackchanges)                                                                                     | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateCustomFieldAttribute()](craft-base-element.md#method-validatecustomfieldattribute)                                                     | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](craft-base-element.md#method-validatecustomfieldcontentsize)                                                 | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `__call()`





Calls the named method which is not a class method.



This method will check if any attached behavior has
the named method and will execute it if available.

Do not call this method directly as it is a PHP magic method that
will be implicitly called when an unknown method is being invoked.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1147-L1154)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The method name
- `$params` ([array](http://php.net/language.types.array)) – Method parameters

#### Returns

`mixed` – The method return value

#### Throws

- [yii\base\UnknownMethodException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownmethodexception)\
  when calling unknown method


### `__clone()`














[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1060-L1065)






### `__get()`





Returns the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a getter: return the getter result
 - a property of a behavior: return the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$value = $component->property;`.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1104-L1128)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

`mixed` – The property value or the value of a behavior's property

#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is write-only.


### `__isset()`





Checks if a property is set.

This method will check if $name is one of the following:
- "title"
- a magic property supported by [yii\base\Component::__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail)
- a custom field handle


[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1091-L1099)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the property is set



### `__set()`





Sets the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a setter: set the property value
 - an event in the format of "on xyz": attach the handler to the event "xyz"
 - a behavior in the format of "as xyz": attach the behavior named as "xyz"
 - a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$component->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1133-L1142)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `__toString()`





Returns the string representation of the element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1072-L1078)



#### Returns

[string](http://php.net/language.types.string)



### `actions()`





Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a
given source.



The actions can be represented by their fully qualified class name, a config array with the class name
set to a `type` key, or by an instantiated element action object.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::defineActions()](craft-base-element.md#method-defineactions)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L498-L510)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `addError()`





Adds a new error to the specified attribute.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1474-L1481)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – Attribute name
- `$error` ([string](http://php.net/language.types.string)) – New error message




### `afterDelete()`





Performs actions after an element is deleted.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2610-L2621)






### `afterMoveInStructure()`





Performs actions after an element is moved within a structure.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2675-L2683)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer)) – The structure ID




### `afterPropagate()`



Since

:   3.2.0



Performs actions after an element is fully saved and propagated to other sites.



::: tip
This will get called regardless of whether `$propagate` is `true` or `false` for [craft\services\Elements::saveElement()](craft-services-elements.md#method-saveelement).
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2573-L2586)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `afterRestore()`



Since

:   3.1.0



Performs actions after an element is restored.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2645-L2656)






### `afterSave()`





Performs actions after an element is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2555-L2568)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `attributeLabels()`





Returns the attribute labels.



Attribute labels are mainly used for display purpose. For example, given an attribute
`firstName`, we can declare a label `First Name` which is more user-friendly and can
be displayed to end users.

By default an attribute label is generated using [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail).
This method allows you to explicitly specify attribute labels.

Note, in order to inherit labels defined in the parent class, a child class needs to
merge the parent labels with child labels using functions such as `array_merge()`.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1257-L1281)



#### Returns

[array](http://php.net/language.types.array) – Attribute labels (name => label)



### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1187-L1218)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `beforeDelete()`





Performs actions before an element is deleted.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2591-L2605)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be deleted



### `beforeMoveInStructure()`





Performs actions before an element is moved within a structure.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2661-L2670)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer)) – The structure ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be moved within the structure



### `beforeRestore()`



Since

:   3.1.0



Performs actions before an element is restored.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2626-L2640)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeSave()`





Performs actions before an element is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2534-L2550)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be saved



### `behaviors()`





Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\base\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1159-L1164)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `defaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.



This method should return an array where each element in the array maps to one of the keys of the array returned
by [tableAttributes()](craft-base-element.md#method-tableattributes).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L698-L710)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attribute keys



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L357-L360)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `eagerLoadingMap()`





Returns an array that maps source-to-target element IDs based on the given sub-property handle.



This method aids in the eager-loading of elements when performing an element query. The returned array should
contain the following keys:
- `elementType` – the fully qualified class name of the element type that should be eager-loaded
- `map` – an array of element ID mappings, where each element is a sub-array with `source` and `target` keys.
- `criteria` *(optional)* – Any criteria parameters that should be applied to the element query when fetching the eager-loaded elements.

```php
use craft\db\Query;
use craft\helpers\ArrayHelper;

public static function eagerLoadingMap(array $sourceElements, string $handle) {
    switch ($handle) {
        case 'author':
            $bookIds = ArrayHelper::getColumn($sourceElements, 'id');
            $map = (new Query)
                ->select(['source' => 'id', 'target' => 'authorId'])
                ->from('{{%books}}')
                ->where(['id' => $bookIds)
                ->all();
            return [
                'elementType' => \my\plugin\Author::class,
                'map' => $map,
            ];
        case 'bookClubs':
            $bookIds = ArrayHelper::getColumn($sourceElements, 'id');
            $map = (new Query)
                ->select(['source' => 'bookId', 'target' => 'clubId'])
                ->from('{{%bookclub_books}}')
                ->where(['bookId' => $bookIds)
                ->all();
            return [
                'elementType' => \my\plugin\BookClub::class,
                'map' => $map,
            ];
        default:
            return parent::eagerLoadMap($sourceElements, $handle);
    }
}
```




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L764-L859)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – An array of the source elements
- `$handle` ([string](http://php.net/language.types.string)) – The property handle used to identify which target elements should be included in the map

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored



### `exporters()`



Since

:   3.4.0



Returns the available export options for a given source.



The exporters can be represented by their fully qualified class name, a config array with the class name
set to a `type` key, or by an instantiated element exporter object.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::defineExporters()](craft-base-element.md#method-defineexporters)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L515-L527)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key.

#### Returns

[array](http://php.net/language.types.array) – The available element exporters.



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1223-L1239)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `find()`





Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.



The returned [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance can be further customized by calling
methods defined in [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) before `one()` or `all()` is called to return
populated [craft\base\ElementInterface](craft-base-elementinterface.md) instances. For example,

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




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L457-L460)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) – The newly created [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance.



### `findAll()`





Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.



The method accepts:

 - an int: query by a single ID value and return an array containing the corresponding element
   (or an empty array if not found).
 - an array of integers: query by a list of ID values and return the corresponding elements (or an
   empty array if none was found).
   Note that an empty array will result in an empty result as it will be interpreted as a search for
   primary keys and not an empty set of element criteria parameters.
 - an array of name-value pairs: query by a set of parameter values and return an array of elements
   matching all of them (or an empty array if none was found).

Note that this method will automatically call the `all()` method and return an array of
[\craft\base\Element](craft-base-elementinterface.md) instances. For example,

```php
// find the entries whose ID is 10
$entries = Entry::findAll(10);
// the above code is equivalent to:
$entries = Entry::find()->id(10)->all();
// find the entries whose ID is 10, 11 or 12.
$entries = Entry::findAll([10, 11, 12]);
// the above code is equivalent to:
$entries = Entry::find()->id([10, 11, 12]])->all();
// find users whose email ends in "example.com"
$users = User::findAll(['email' => '*example.com']);
// the above code is equivalent to:
$users = User::find()->email('*example.com')->all();
```




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L473-L476)


#### Arguments

- `$criteria` (`mixed`) – The element ID, an array of IDs, or a set of element criteria parameters

#### Returns

`static[]` – An array of Element instances, or an empty array if nothing matches.



### `findOne()`





Returns a single element instance by a primary key or a set of element criteria parameters.



The method accepts:

 - an int: query by a single ID value and return the corresponding element (or null if not found).
 - an array of name-value pairs: query by a set of parameter values and return the first element
   matching all of them (or null if not found).

Note that this method will automatically call the `one()` method and return an
[\craft\base\Element](craft-base-elementinterface.md) instance. For example,

```php
// find a single entry whose ID is 10
$entry = Entry::findOne(10);
// the above code is equivalent to:
$entry = Entry::find->id(10)->one();
// find the first user whose email ends in "example.com"
$user = User::findOne(['email' => '*example.com']);
// the above code is equivalent to:
$user = User::find()->email('*example.com')->one();
```




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L465-L468)


#### Arguments

- `$criteria` (`mixed`) – The element ID or a set of element criteria parameters

#### Returns

`static`, [null](http://php.net/language.types.null) – Element instance matching the condition, or null if nothing matches.



### `getAncestors()`





Returns the element’s ancestors.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1862-L1869)


#### Arguments

- `$dist` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getAttributeLabel()`





Returns the text label for the specified attribute.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1244-L1252)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name

#### Returns

[string](http://php.net/language.types.string) – The attribute label



### `getAttributeStatus()`



Since

:   3.4.0



Returns the status of a given attribute.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2075-L2103)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getChildren()`





Returns the element’s children.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1896-L1904)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getContentTable()`





Returns the name of the table this element’s content is stored in.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2330-L2333)



#### Returns

[string](http://php.net/language.types.string)



### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1663-L1666)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getCurrentRevision()`



Since

:   3.2.0



Returns the element’s current revision, if one exists.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2425-L2443)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getDescendants()`





Returns the element’s descendants.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1874-L1891)


#### Arguments

- `$dist` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getDirtyAttributes()`



Since

:   3.4.0



Returns a list of attribute names that have changed since the element was first loaded.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2108-L2115)



#### Returns

[string](http://php.net/language.types.string)[]



### `getDirtyFields()`



Since

:   3.4.0



Returns a list of custom field handles that have changed since the element was first loaded.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2243-L2252)



#### Returns

[string](http://php.net/language.types.string)[]



### `getEagerLoadedElementCount()`



Since

:   3.4.0



Returns the count of eager-loaded elements for a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2385-L2388)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[integer](http://php.net/language.types.integer) – The eager-loaded element count



### `getEagerLoadedElements()`





Returns the eager-loaded elements for a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2362-L2372)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – The eager-loaded elements, or null if they hadn't been eager-loaded



### `getEditorHtml()`





Returns the HTML for the element’s editor HUD.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2485-L2516)



#### Returns

[string](http://php.net/language.types.string) – The HTML for the editor HUD



### `getEnabledForSite()`



Since

:   3.4.0



Returns whether the element is enabled for the current site.



This can also be set to an array of site ID/site-enabled mappings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1733-L1745)


#### Arguments

- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The ID of the site to return for. If `null`, the current site status will be returned.

#### Returns

[boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site. `null` will be returned if a `$siteId` was
passed, but that site’s status wasn’t provided via [setEnabledForSite()](craft-base-element.md#method-setenabledforsite).



### `getFieldColumnPrefix()`





Returns the field column prefix this element’s content uses.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2338-L2341)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldContext()`





Returns the field context this element’s content uses.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2346-L2349)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1549-L1556)



#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)



### `getFieldParamNamespace()`





Returns the namespace used by custom field params on the request.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2314-L2317)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace



### `getFieldStatus()`



Since

:   3.4.0



Returns the status of a given field.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2202-L2230)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getFieldValue()`





Returns the value for a given field.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2174-L2180)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string)) – The field handle whose value needs to be returned

#### Returns

`mixed` – The field value



### `getFieldValues()`





Returns the element’s normalized custom field values, indexed by their handles.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2131-L2142)


#### Arguments

- `$fieldHandles` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The list of field handles whose values
need to be returned. Defaults to null, meaning all fields’ values will be
returned. If it is an array, only the fields in the array will be returned.

#### Returns

[array](http://php.net/language.types.array) – The field values (handle => value)



### `getGqlTypeName()`



Since

:   3.3.0



Returns the GraphQL type name for this element type.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2522-L2526)



#### Returns

[string](http://php.net/language.types.string)



### `getHasDescendants()`





Returns whether the element has descendants.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1964-L1971)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHasFreshContent()`





Returns whether the element’s content is "fresh" (unsaved and without validation errors).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2401-L2404)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh



### `getHtmlAttributes()`





Returns any attributes that should be included in the element’s DOM representation in the control panel.



::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::htmlAttributes()](craft-base-element.md#method-htmlattributes)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2451-L2462)


#### Arguments

- `$context` ([string](http://php.net/language.types.string)) – The context that the element is being rendered in ('index', 'field', etc.)

#### Returns

[array](http://php.net/language.types.array)



### `getId()`





Returns the element’s ID.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1486-L1489)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getIsDraft()`



Since

:   3.2.0



Returns whether this is a draft.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1494-L1497)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsEditable()`





Returns whether the current user can edit the element.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1655-L1658)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsHomepage()`



Since

:   3.3.6



Returns whether this element represents the site homepage.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1605-L1608)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsRevision()`



Since

:   3.2.0



Returns whether this is a revision.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1502-L1505)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsUnsavedDraft()`



Since

:   3.2.0



Returns whether the element is an unsaved draft.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1537-L1544)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLink()`





Returns an anchor pre-filled with this element’s URL and title.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1626-L1634)



#### Returns

`\Twig\Markup`, [null](http://php.net/language.types.null)



### `getNext()`





Returns the next element relative to this one, from a given set of criteria.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1781-L1792)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getNextSibling()`





Returns the element’s next sibling.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1942-L1959)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getParent()`





Returns the element’s parent.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1829-L1842)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPrev()`





Returns the previous element relative to this one, from a given set of criteria.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1797-L1808)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPrevSibling()`





Returns the element’s previous sibling.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1920-L1937)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPreviewTargets()`



Since

:   3.2.0



Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).



Each target should be represented by a sub-array with the following keys:

- `label` – What the preview target will be called in the control panel.
- `url` – The URL that the preview target should open.
- `refresh` – Whether preview frames should be automatically refreshed when content changes (`true` by default).

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::previewTargets()](craft-base-element.md#method-previewtargets)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1671-L1720)



#### Returns

[array](http://php.net/language.types.array)



### `getRef()`





Returns the reference string to this element.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1647-L1650)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getRoute()`





Returns the route that should be used when the element’s URI is requested.



::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::route()](craft-base-element.md#method-route)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1589-L1600)



#### Returns

`mixed` – The route that the request should use, or null if no special action should be taken



### `getSearchKeywords()`





Returns the search keywords for a given search attribute.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1581-L1584)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getSerializedFieldValues()`





Returns an array of the element’s serialized custom field values, indexed by their handles.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2147-L2159)


#### Arguments

- `$fieldHandles` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The list of field handles whose values
need to be returned. Defaults to null, meaning all fields’ values will be
returned. If it is an array, only the fields in the array will be returned.

#### Returns

[array](http://php.net/language.types.array)



### `getSiblings()`





Returns all of the element’s siblings.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1909-L1915)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getSite()`





Returns the site the element is associated with.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2785-L2796)



#### Returns

[craft\models\Site](craft-models-site.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [siteId](craft-base-elementtrait.md#siteid) is invalid


### `getSourceId()`



Since

:   3.2.0



Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1510-L1515)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getSourceUid()`



Since

:   3.2.0



Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1520-L1532)



#### Returns

[string](http://php.net/language.types.string)



### `getStatus()`





Returns the element’s status.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1765-L1776)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSupportedSites()`





Returns the sites this element is associated with.



The function can either return an array of site IDs, or an array of sub-arrays,
each with the keys `siteId` (int) and `enabledByDefault` (boolean).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1561-L1568)



#### Returns

[integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)



### `getTableAttributeHtml()`





Returns the HTML that should be shown for a given attribute in Table View.



::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::tableAttributeHtml()](craft-base-element.md#method-tableattributehtml)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2467-L2480)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for a given attribute in Table View.



### `getThumbUrl()`





Returns the URL to the element’s thumbnail, if there is one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1725-L1728)


#### Arguments

- `$size` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTotalDescendants()`





Returns the total number of descendants that the element has.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1976-L1983)



#### Returns

[integer](http://php.net/language.types.integer)



### `getUiLabel()`



Since

:   3.2.0



Returns what the element should be called within the control panel.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1639-L1642)



#### Returns

[string](http://php.net/language.types.string)



### `getUriFormat()`





Returns the URI format used to generate this element’s URI.



Note that element types that can have URIs must return `true` from [hasUris()](craft-base-element.md#method-hasuris).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1573-L1576)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getUrl()`





Returns the element’s full URL.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1613-L1621)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `gqlScopesByContext()`



Since

:   3.3.0



Returns the GraphQL scopes required by element's context.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L875-L879)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[array](http://php.net/language.types.array)



### `gqlTypeNameByContext()`



Since

:   3.3.0



Returns the GraphQL type name by an element's context.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L865-L869)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L405-L408)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasEagerLoadedElements()`





Returns whether elements have been eager-loaded with a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2354-L2357)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements have been eager-loaded with the given handle



### `hasStatuses()`





Returns whether elements of this type have statuses.



If this returns `true`, the element index template will show a Status menu by default, and your elements will
get status indicator icons next to them.
Use [statuses()](craft-base-element.md#method-statuses) to customize which statuses the elements might have.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L437-L440)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have statuses.



### `hasTitles()`





Returns whether elements of this type have traditional titles.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L413-L416)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have traditional titles.



### `hasUris()`





Returns whether elements of this type can have their own slugs and URIs.



Note that individual elements must also return a URI format from [getUriFormat()](craft-base-element.md#method-geturiformat) if they are to actually get a URI.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L421-L424)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type can have their own slugs and URIs.



### `indexHtml()`





Returns the element index HTML.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L603-L653)


#### Arguments

- `$elementQuery` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md))
- `$disabledElementIds` ([integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null))
- `$viewState` ([array](http://php.net/language.types.array))
- `$sourceKey` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$includeContainer` ([boolean](http://php.net/language.types.boolean))
- `$showCheckboxes` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string) – The element index HTML



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1169-L1182)






### `isAncestorOf()`





Returns whether this element is an ancestor of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1988-L1994)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isChildOf()`





Returns whether this element is a direct child of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2019-L2023)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isDescendantOf()`





Returns whether this element is a descendant of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1999-L2003)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFieldDirty()`



Since

:   3.4.0



Returns whether a custom field value has changed since the element was first loaded.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2235-L2238)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFieldEmpty()`





Returns whether a field is empty.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1417-L1427)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isLocalized()`





Returns whether elements of this type store content on a per-site basis.



If this returns `true`, the element’s [getSupportedSites()](craft-base-element.md#method-getsupportedsites) method will
be responsible for defining which sites its content should be stored in.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L429-L432)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type store data on a per-site basis.



### `isNextSiblingOf()`





Returns whether this element is the direct next sibling of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2058-L2062)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isParentOf()`





Returns whether this element is a direct parent of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2008-L2014)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isPrevSiblingOf()`





Returns whether this element is the direct previous sibling of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2049-L2053)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSiblingOf()`





Returns whether this element is a sibling of another one.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2028-L2044)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `lowerDisplayName()`



Since

:   3.3.17



Returns the lowercase version of [displayName()](craft-base-element.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L365-L368)



#### Returns

[string](http://php.net/language.types.string)



### `markAsClean()`



Since

:   3.4.0



Resets the record of dirty attributes and fields.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2275-L2283)






### `markAsDirty()`



Since

:   3.4.10



Marks all fields and attributes as dirty.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2267-L2270)






### `offsetExists()`





Returns whether there is an element at the specified offset.



This method is required by the SPL interface [ArrayAccess](http://php.net/class.arrayaccess).
It is implicitly called when you use something like `isset($model[$offset])`.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2067-L2070)


#### Arguments

- `$offset` (`mixed`) – The offset to check on.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether or not an offset exists.



### `pluralDisplayName()`



Since

:   3.2.0



Returns the plural version of [displayName()](craft-base-element.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L373-L376)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`



Since

:   3.3.17



Returns the plural, lowercase version of [displayName()](craft-base-element.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L381-L384)



#### Returns

[string](http://php.net/language.types.string)



### `refHandle()`





Returns the handle that should be used to refer to this element type from reference tags.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L389-L392)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The reference handle, or null if the element type doesn’t support reference tags



### `searchableAttributes()`





Defines which element attributes should be searchable.



This method should return an array of attribute names that can be accessed on your elements.
[craft\services\Search](craft-services-search.md) will call this method when it is indexing keywords for one of your elements,
and for each attribute it returns, it will fetch the corresponding property’s value on the element.
For example, if your elements have a “color” attribute which you want to be indexed, this method could return:

```php
return ['color'];
```

Not only will the “color” attribute’s values start getting indexed, but users will also be able to search
directly against that attribute’s values using this search syntax:

    color:blue

There is no need for this method to worry about the ‘title’ or ‘slug’ attributes, or custom field handles;
those are indexed automatically.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override
[craft\base\Element::defineSearchableAttributes()](craft-base-element.md#method-definesearchableattributes) instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L532-L543)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `setDirtyAttributes()`





Sets the list of dirty attribute names.



See also [getDirtyAttributes()](craft-base-element.md#method-getdirtyattributes)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2123-L2126)


#### Arguments

- `$names` ([string](http://php.net/language.types.string)[])




### `setEagerLoadedElementCount()`



Since

:   3.4.0



Sets the count of eager-loaded elements for a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2393-L2396)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$count` ([integer](http://php.net/language.types.integer)) – The eager-loaded element count




### `setEagerLoadedElements()`





Sets some eager-loaded elements on a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2377-L2380)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The eager-loaded elements




### `setEnabledForSite()`



Since

:   3.4.0



Sets whether the element is enabled for the current site.



This can also be set to an array of site ID/site-enabled mappings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1750-L1760)


#### Arguments

- `$enabledForSite` ([boolean](http://php.net/language.types.boolean), [boolean](http://php.net/language.types.boolean)[])




### `setFieldParamNamespace()`





Sets the namespace used by custom field params on the request.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2322-L2325)


#### Arguments

- `$namespace` ([string](http://php.net/language.types.string)) – The field param namespace




### `setFieldValue()`





Sets the value for a given field.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2185-L2197)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string)) – The field handle whose value needs to be set
- `$value` (`mixed`) – The value to set on the field




### `setFieldValues()`





Sets the element’s custom field values.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2164-L2169)


#### Arguments

- `$values` ([array](http://php.net/language.types.array)) – The custom field values (handle => value)




### `setFieldValuesFromRequest()`





Sets the element’s custom field values, when the values have come from post data.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2288-L2309)


#### Arguments

- `$paramNamespace` ([string](http://php.net/language.types.string)) – The field param namespace




### `setNext()`





Sets the default next element.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1813-L1816)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean))




### `setParent()`





Sets the element’s parent.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1847-L1857)


#### Arguments

- `$parent` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))




### `setPrev()`





Sets the default previous element.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1821-L1824)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean)) – Return void




### `setRevisionCreatorId()`



Since

:   3.2.0



Sets the revision creator ID to be saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2409-L2412)


#### Arguments

- `$creatorId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))




### `setRevisionNotes()`



Since

:   3.2.0



Sets the revision notes to be saved.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2417-L2420)


#### Arguments

- `$notes` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))




### `sortOptions()`





Returns the sort options for the element type.



This method should return an array, where each item is a sub-array with the following keys:

- `label` – The sort option label
- `orderBy` – A comma-delimited string of columns to order the query by
- `attribute` _(optional)_ – The [table attribute](craft-base-element.md#method-tableattributes) name that this option is associated with

```php
return [
    [
        'label' => Craft::t('app', 'Attribute Label'),
        'orderBy' => 'columnName',
        'attribute' => 'attributeName'
    ],
];
```

A shorthand syntax is also supported, if there is no corresponding table attribute, or the table attribute
has the exact same name as the column.

```php
return [
    'columnName' => Craft::t('app', 'Attribute Label'),
];
```

Note that this method will only get called once for the entire index; not each time that a new source is
selected.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L658-L677)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `sources()`





Returns the source definitions that elements of this type may belong to.



This defines what will show up in the source list on element indexes and element selector modals.

Each item in the array should be set to an array that has the following keys:
- **`key`** – The source’s key. This is the string that will be passed into the $source argument of [actions()](craft-base-element.md#method-actions),
  [indexHtml()](craft-base-element.md#method-indexhtml), and [defaultTableAttributes()](craft-base-element.md#method-defaulttableattributes).
- **`label`** – The human-facing label of the source.
- **`badgeCount`** – The badge count that should be displayed alongside the label. (Optional)
- **`sites`** – An array of site IDs that the source should be shown for, on multi-site element indexes. (Optional;
  by default the source will be shown for all sites.)
- **`criteria`** – An array of element criteria parameters that the source should use when the source is selected.
  (Optional)
- **`data`** – An array of `data-X` attributes that should be set on the source’s `<a>` tag in the source list’s,
  HTML, where each key is the name of the attribute (without the “data-” prefix), and each value is the value of
  the attribute. (Optional)
- **`defaultSort`** – A string identifying the sort attribute that should be selected by default, or an array where
  the first value identifies the sort attribute, and the second determines which direction to sort by. (Optional)
- **`hasThumbs`** – A bool that defines whether this source supports Thumbs View. (Use your element’s
  [getThumbUrl()](craft-base-element.md#method-getthumburl) method to define your elements’ thumb URL.) (Optional)
- **`structureId`** – The ID of the Structure that contains the elements in this source. If set, Structure View
  will be available to this source. (Optional)
- **`newChildUrl`** – The URL that should be loaded when a user selects the “New child” menu option on an
  element in this source while it is in Structure View. (Optional)
- **`nested`** – An array of sources that are nested within this one. Each nested source can have the same keys
  as top-level sources.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::defineSources()](craft-base-element.md#method-definesources)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L481-L493)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `statuses()`





Returns all of the possible statuses that elements of this type may have.



This method will be called when populating the Status menu on element indexes, for element types whose
[hasStatuses()](craft-base-element.md#method-hasstatuses) method returns `true`. It will also be called when [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md) is querying for
elements, to ensure that its “status” parameter is set to a valid status.
It should return an array whose keys are the status values, and values are the human-facing status labels, or an array
with the following keys:
- **`label`** – The human-facing status label.
- **`color`** – The status color (green, orange, red, yellow, pink, purple, blue, turquoise, light, grey, black, or white)
You can customize the database query condition that should be applied for your custom statuses from
[craft\elements\db\ElementQuery::statusCondition()](craft-elements-db-elementquery.md#method-statuscondition).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L445-L451)



#### Returns

[array](http://php.net/language.types.array)



### `tableAttributes()`





Defines all of the available columns that can be shown in table views.



This method should return an array whose keys map to attribute names and database columns that can be sorted
against when querying for elements, and whose values make up the table’s column headers.
The *first* item that this array returns will just identify the database column name, and the table column’s
header, but will **not** have any effect on what shows up in the table’s body. That’s because the first column is
reserved for displaying whatever your element’s __toString() method returns.
All other items besides the first one will also define which element attribute should be shown within the data
cells. (The actual HTML to be shown can be customized with [getTableAttributeHtml()](craft-base-element.md#method-gettableattributehtml).)




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L682-L693)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `trackChanges()`



Since

:   3.4.0



Returns whether Craft should keep track of attribute and custom field changes made to this element type,
including when the last time they were changed, and who was logged-in at the time.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L397-L400)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether to track changes made to elements of this type.



### `validateCustomFieldAttribute()`





Calls a custom validation function on a custom field.

This will be called by [yii\validators\InlineValidator](https://www.yiiframework.com/doc/api/2.0/yii-validators-inlinevalidator) if a custom field specified
a closure or the name of a class-level method as the validation type.


[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1398-L1409)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The field handle
- `$params` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null))




### `validateCustomFieldContentSize()`





Validates that the content size is going to fit within the field’s database column.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1434-L1469)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](craft-base-element.md#method-defineactions)                                                                                           | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-base-element.md#method-definedefaulttableattributes)                                                             | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](craft-base-element.md#method-defineexporters)                                                                                       | Defines the available element exporters for a given source.
| [defineRules()](craft-base-element.md#method-definerules)                                                                                               | Returns the validation rules for attributes.
| [defineSearchableAttributes()](craft-base-element.md#method-definesearchableattributes)                                                                 | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-base-element.md#method-definesortoptions)                                                                                   | Returns the sort options for the element type.
| [defineSources()](craft-base-element.md#method-definesources)                                                                                           | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-base-element.md#method-definetableattributes)                                                                           | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [fieldByHandle()](craft-base-element.md#method-fieldbyhandle)                                                                                           | Returns the field with a given handle.
| [fieldLayoutFields()](craft-base-element.md#method-fieldlayoutfields)                                                                                   | Returns each of this element’s fields.
| [findByCondition()](craft-base-element.md#method-findbycondition)                                                                                       | Finds Element instance(s) by the given condition.
| [htmlAttributes()](craft-base-element.md#method-htmlattributes)                                                                                         | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](craft-base-element.md#method-normalizefieldvalue)                                                                               | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](craft-base-element.md#method-prepelementqueryfortableattribute)                                                   | Preps the element criteria for a given table attribute
| [previewTargets()](craft-base-element.md#method-previewtargets)                                                                                         | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](craft-base-element.md#method-route)                                                                                                           | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-base-element.md#method-tableattributehtml)                                                                                 | Returns the HTML that should be shown for a given attribute in Table View.

### `defineActions()`





Defines the available element actions for a given source.



See also [actions()](craft-base-element.md#method-actions)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L565-L568)


#### Arguments

- `$source` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The selected source’s key, if any.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.



See also:

- [defaultTableAttributes()](craft-base-element.md#method-defaulttableattributes)
- [tableAttributes()](craft-base-element.md#method-tableattributes)

[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L750-L756)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineExporters()`



Since

:   3.4.0



Defines the available element exporters for a given source.



See also [exporters()](craft-base-element.md#method-exporters)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L578-L584)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[array](http://php.net/language.types.array) – The available element exporters



### `defineRules()`



Since

:   3.4.0



Returns the validation rules for attributes.



See [rules()](craft-base-model.md#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](craft-base-model.md#method-rules) so [EVENT_DEFINE_RULES](craft-base-model.md#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L1286-L1387)



#### Returns

[array](http://php.net/language.types.array)



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.



See also [searchableAttributes()](craft-base-element.md#method-searchableattributes)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L592-L595)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.



See also [sortOptions()](craft-base-element.md#method-sortoptions)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L718-L729)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineSources()`





Defines the sources that elements of this type may belong to.



See also [sources()](craft-base-element.md#method-sources)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L552-L555)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.



See also [tableAttributes()](craft-base-element.md#method-tableattributes)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L737-L740)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `fieldByHandle()`





Returns the field with a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2747-L2761)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\base\Field](craft-base-field.md), [null](http://php.net/language.types.null)



### `fieldLayoutFields()`





Returns each of this element’s fields.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2768-L2777)



#### Returns

[craft\base\Field](craft-base-field.md)[] – This element’s fields



### `findByCondition()`





Finds Element instance(s) by the given condition.

This method is internally called by [findOne()](craft-base-element.md#method-findone) and [findAll()](craft-base-element.md#method-findall).


[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2718-L2739)


#### Arguments

- `$criteria` (`mixed`) – Refer to [findOne()](craft-base-element.md#method-findone) and [findAll()](craft-base-element.md#method-findall) for the explanation of this parameter
- `$one` ([boolean](http://php.net/language.types.boolean)) – Whether this method is called by [findOne()](craft-base-element.md#method-findone) or [findAll()](craft-base-element.md#method-findall)

#### Returns

`static`, `static[]`, [null](http://php.net/language.types.null)



### `htmlAttributes()`





Returns any attributes that should be included in the element’s DOM representation in the control panel.



See also [getHtmlAttributes()](craft-base-element.md#method-gethtmlattributes)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2957-L2960)


#### Arguments

- `$context` ([string](http://php.net/language.types.string)) – The context that the element is being rendered in ('index', 'field', etc.)

#### Returns

[array](http://php.net/language.types.array)



### `normalizeFieldValue()`





Normalizes a field’s value.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2691-L2707)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string)) – The field handle


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if there is no field with the handle $fieldValue


### `prepElementQueryForTableAttribute()`





Preps the element criteria for a given table attribute




[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L887-L899)


#### Arguments

- `$elementQuery` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md))
- `$attribute` ([string](http://php.net/language.types.string))




### `previewTargets()`



Since

:   3.2.0



Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).

Each target should be represented by a sub-array with `'label'` and `'url'` keys.

See also [getPreviewTargets()](craft-base-element.md#method-getpreviewtargets)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2945-L2948)



#### Returns

[array](http://php.net/language.types.array)



### `route()`





Returns the route that should be used when the element’s URI is requested.



See also [getRoute()](craft-base-element.md#method-getroute)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2931-L2934)



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

See also [getTableAttributeHtml()](craft-base-element.md#method-gettableattributehtml)
[View source](https://github.com/craftcms/cms/blob/master/src/base/Element.php#L2832-L2923)


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

### EVENT_AFTER_DELETE



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after the element is deleted



---



### EVENT_AFTER_MOVE_IN_STRUCTURE



Type

:   [craft\events\ElementStructureEvent](craft-events-elementstructureevent.md)



The event that is triggered after the element is moved in a structure.



---



### EVENT_AFTER_PROPAGATE



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)

Since

:   3.2.0



The event that is triggered after the element is fully saved and propagated to other sites

If you want to ignore events for drafts or revisions, call [craft\helpers\ElementHelper::isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)
from your event handler:

```php
use craft\base\Element;
use craft\elements\Entry;
use craft\events\ModelEvent;
use craft\helpers\ElementHelper;
use yii\base\Event;

Event::on(Entry::class, Element::EVENT_AFTER_PROPAGATE, function(ModelEvent $e) {
    // @var Entry $entry
    $entry = $e->sender;

    if (ElementHelper::isDraftOrRevision($entry) {
        return;
    }

    // ...
});
```



---



### EVENT_AFTER_RESTORE



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)

Since

:   3.1.0



The event that is triggered after the element is restored



---



### EVENT_AFTER_SAVE



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)



The event that is triggered after the element is saved

If you want to ignore events for drafts or revisions, call [craft\helpers\ElementHelper::isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)
from your event handler:

```php
use craft\base\Element;
use craft\elements\Entry;
use craft\events\ModelEvent;
use craft\helpers\ElementHelper;
use yii\base\Event;

Event::on(Entry::class, Element::EVENT_AFTER_SAVE, function(ModelEvent $e) {
    // @var Entry $entry
    $entry = $e->sender;

    if (ElementHelper::isDraftOrRevision($entry)) {
        return;
    }

    // ...
});
```



---



### EVENT_BEFORE_DELETE



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)



The event that is triggered before the element is deleted
You may set [craft\events\ModelEvent::$isValid](https://www.yiiframework.com/doc/api/2.0/yii-base-modelevent#$isValid-detail) to `false` to prevent the element from getting deleted.



---



### EVENT_BEFORE_MOVE_IN_STRUCTURE



Type

:   [craft\events\ElementStructureEvent](craft-events-elementstructureevent.md)



The event that is triggered before the element is moved in a structure.

You may set [craft\events\ElementStructureEvent::$isValid](https://www.yiiframework.com/doc/api/2.0/yii-base-modelevent#$isValid-detail) to `false` to prevent the element from getting moved.



---



### EVENT_BEFORE_RESTORE



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)

Since

:   3.1.0



The event that is triggered before the element is restored
You may set [craft\events\ModelEvent::$isValid](https://www.yiiframework.com/doc/api/2.0/yii-base-modelevent#$isValid-detail) to `false` to prevent the element from getting restored.



---



### EVENT_BEFORE_SAVE



Type

:   [craft\events\ModelEvent](craft-events-modelevent.md)



The event that is triggered before the element is saved
You may set [craft\events\ModelEvent::$isValid](https://www.yiiframework.com/doc/api/2.0/yii-base-modelevent#$isValid-detail) to `false` to prevent the element from getting saved.

If you want to ignore events for drafts or revisions, call [craft\helpers\ElementHelper::isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)
from your event handler:

```php
use craft\base\Element;
use craft\elements\Entry;
use craft\events\ModelEvent;
use craft\helpers\ElementHelper;
use yii\base\Event;

Event::on(Entry::class, Element::EVENT_BEFORE_SAVE, function(ModelEvent $e) {
    // @var Entry $entry
    $entry = $e->sender;

    if (ElementHelper::isDraftOrRevision($entry)) {
        return;
    }

    // ...
});
```



---



### EVENT_DEFINE_EAGER_LOADING_MAP



Type

:   [craft\events\DefineEagerLoadingMapEvent](craft-events-defineeagerloadingmapevent.md)

Since

:   3.1.0



The event that is triggered when defining an eager-loading map.

```php
use craft\base\Element;
use craft\db\Query;
use craft\elements\Entry;
use craft\events\DefineEagerLoadingMapEvent;
use craft\helpers\ArrayHelper;
use yii\base\Event;

// Add support for `with(['bookClub'])` to entries
Event::on(
    Entry::class,
    Element::EVENT_DEFINE_EAGER_LOADING_MAP,
    function(DefineEagerLoadingMapEvent $e) {
        if ($e->handle === 'bookClub') {
            $bookEntryIds = ArrayHelper::getColumn($e->sourceElements, 'id');
            $e->elementType = \my\plugin\BookClub::class,
            $e->map = (new Query)
                ->select(['source' => 'bookId', 'target' => 'clubId'])
                ->from('{{%bookclub_books}}')
                ->where(['bookId' => $bookEntryIds])
                ->all();
            $e->handled = true;
        }
    }
);
```



---



### EVENT_REGISTER_ACTIONS



Type

:   [craft\events\RegisterElementActionsEvent](craft-events-registerelementactionsevent.md)



The event that is triggered when registering the available actions for the element type.



---



### EVENT_REGISTER_DEFAULT_TABLE_ATTRIBUTES



Type

:   [craft\events\RegisterElementTableAttributesEvent](craft-events-registerelementtableattributesevent.md)



The event that is triggered when registering the table attributes for the element type.



---



### EVENT_REGISTER_EXPORTERS



Type

:   [craft\events\RegisterElementExportersEvent](craft-events-registerelementexportersevent.md)

Since

:   3.4.0



The event that is triggered when registering the available exporters for the element type.



---



### EVENT_REGISTER_HTML_ATTRIBUTES



Type

:   [craft\events\RegisterElementHtmlAttributesEvent](craft-events-registerelementhtmlattributesevent.md)



The event that is triggered when registering the HTML attributes that should be included in the element’s DOM representation in the control panel.



---



### EVENT_REGISTER_PREVIEW_TARGETS



Type

:   [craft\events\RegisterPreviewTargetsEvent](craft-events-registerpreviewtargetsevent.md)

Since

:   3.2.0



The event that is triggered when registering the element’s preview targets.



---



### EVENT_REGISTER_SEARCHABLE_ATTRIBUTES



Type

:   [craft\events\RegisterElementSearchableAttributesEvent](craft-events-registerelementsearchableattributesevent.md)



The event that is triggered when registering the searchable attributes for the element type.



---



### EVENT_REGISTER_SORT_OPTIONS



Type

:   [craft\events\RegisterElementSortOptionsEvent](craft-events-registerelementsortoptionsevent.md)



The event that is triggered when registering the sort options for the element type.



---



### EVENT_REGISTER_SOURCES



Type

:   [craft\events\RegisterElementSourcesEvent](craft-events-registerelementsourcesevent.md)



The event that is triggered when registering the available sources for the element type.



---



### EVENT_REGISTER_TABLE_ATTRIBUTES



Type

:   [craft\events\RegisterElementTableAttributesEvent](craft-events-registerelementtableattributesevent.md)



The event that is triggered when registering the table attributes for the element type.



---



### EVENT_SET_ROUTE



Type

:   [craft\events\SetElementRouteEvent](craft-events-setelementrouteevent.md)



The event that is triggered when defining the route that should be used when this element’s URL is requested

```php
Event::on(craft\elements\Entry::class, craft\base\Element::EVENT_SET_ROUTE, function(craft\events\SetElementRouteEvent $e) {
    // @var craft\elements\Entry $entry
    $entry = $e->sender;

    if ($entry->uri === 'pricing') {
        $e->route = 'module/pricing/index';
    }
});
```



---



### EVENT_SET_TABLE_ATTRIBUTE_HTML



Type

:   [craft\events\SetElementTableAttributeHtmlEvent](craft-events-setelementtableattributehtmlevent.md)



The event that is triggered when defining the HTML to represent a table attribute.



---




