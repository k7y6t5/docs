---
title: craft\base\ElementTrait
code:
  - php
  - twig
---

# ElementTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\base\Element](craft-base-element.md), [craft\elements\Asset](craft-elements-asset.md), [craft\elements\Category](craft-elements-category.md), [craft\elements\Entry](craft-elements-entry.md), [craft\elements\GlobalSet](craft-elements-globalset.md), [craft\elements\MatrixBlock](craft-elements-matrixblock.md), [craft\elements\Tag](craft-elements-tag.md), [craft\elements\User](craft-elements-user.md), [craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md), [craft\models\EntryDraft](craft-models-entrydraft.md), [craft\models\EntryVersion](craft-models-entryversion.md), [craft\test\mockclasses\elements\ExampleElement](craft-test-mockclasses-elements-exampleelement.md)

Since

:   3.0.0



ElementTrait implements the common methods and properties for element classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php)


## Public Properties

| Property                                                              | Description
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [archived](craft-base-elementtrait.md#archived)                       | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [awaitingFieldValues](craft-base-elementtrait.md#awaitingfieldvalues) | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [contentId](craft-base-elementtrait.md#contentid)                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [dateCreated](craft-base-elementtrait.md#datecreated)                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](craft-base-elementtrait.md#datedeleted)                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](craft-base-elementtrait.md#dateupdated)                 | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [draftId](craft-base-elementtrait.md#draftid)                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](craft-base-elementtrait.md#duplicateof)                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [enabled](craft-base-elementtrait.md#enabled)                         | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [fieldLayoutId](craft-base-elementtrait.md#fieldlayoutid)             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [hardDelete](craft-base-elementtrait.md#harddelete)                   | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [id](craft-base-elementtrait.md#id)                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [level](craft-base-elementtrait.md#level)                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](craft-base-elementtrait.md#lft)                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [newSiteIds](craft-base-elementtrait.md#newsiteids)                   | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [previewing](craft-base-elementtrait.md#previewing)                   | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [propagateAll](craft-base-elementtrait.md#propagateall)               | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](craft-base-elementtrait.md#propagating)                 | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [resaving](craft-base-elementtrait.md#resaving)                       | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](craft-base-elementtrait.md#revisionid)                   | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](craft-base-elementtrait.md#rgt)                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](craft-base-elementtrait.md#root)                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [searchScore](craft-base-elementtrait.md#searchscore)                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](craft-elements-db-elementquery.md#method-search) parameter was used when querying for the element
| [siteId](craft-base-elementtrait.md#siteid)                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](craft-base-elementtrait.md#slug)                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [structureId](craft-base-elementtrait.md#structureid)                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [tempId](craft-base-elementtrait.md#tempid)                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](craft-base-elementtrait.md#title)                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [trashed](craft-base-elementtrait.md#trashed)                         | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uid](craft-base-elementtrait.md#uid)                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](craft-base-elementtrait.md#uri)                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI

### `archived`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the element is archived



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L70)



### `awaitingFieldValues`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the element is still awaiting its custom field values



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L141)



### `contentId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s content row ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L60)



### `dateCreated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



The date that the element was created



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L95)



### `dateDeleted`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)

Since

:   3.2.0



The date that the element was trashed



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L106)



### `dateUpdated`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



The date that the element was last updated



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L100)



### `draftId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The ID of the draft’s row in the `drafts` table



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L34)



### `duplicateOf`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element that this element is being duplicated by.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L169)



### `enabled`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the element is enabled



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L65)



### `fieldLayoutId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s field layout ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L50)



### `hardDelete`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether the element is being hard-deleted.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L181)



### `id`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L23)



### `level`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s level within its structure



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L126)



### `lft`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s left position within its structure



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L116)



### `newSiteIds`



Type

:   [integer](http://php.net/language.types.integer)[]



The site IDs that the element was just propagated to for the first time.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L158)



### `previewing`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether the element is currently being previewed.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L175)



### `propagateAll`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether all element attributes should be propagated across all its supported sites, even if that means
overwriting existing site-specific values.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L153)



### `propagating`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the element is being saved in the context of propagating another site's version of the element.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L146)



### `resaving`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.22



Whether the element is being resaved by a ResaveElement job or a `resave` console command.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L164)



### `revisionId`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.2.0



The ID of the revision’s row in the `revisions` table



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L40)



### `rgt`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s right position within its structure



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L121)



### `root`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s structure’s root ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L111)



### `searchScore`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s search score, if the [craft\elements\db\ElementQuery::search()](craft-elements-db-elementquery.md#method-search) parameter was used when querying for the element



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L131)



### `siteId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The site ID the element is associated with



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L75)



### `slug`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element’s slug



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L85)



### `structureId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The element’s structure ID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L55)



### `tempId`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element’s temporary ID (only used if the element's URI format contains {id})



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L28)



### `title`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element’s title



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L80)



### `trashed`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the element has been soft-deleted.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L136)



### `uid`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element’s UID



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L45)



### `uri`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The element’s URI



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementTrait.php#L90)













