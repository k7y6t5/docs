---
title: craft\models\EntryDraft
code:
  - php
  - twig
---

# EntryDraft

Type

:   Class

Namespace

:   craft\models

Inherits

:   [craft\models\EntryDraft](craft-models-entrydraft.md) &raquo;
[craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md) &raquo;
[craft\elements\Entry](craft-elements-entry.md) &raquo;
[craft\base\Element](craft-base-element.md) &raquo;
[craft\base\Component](craft-base-component.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](craft-base-componentinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [craft\base\ElementTrait](craft-base-elementtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Since

:   3.0.0

Deprecated in

:    in 3.2.0



Class EntryDraft model.





[View source](https://github.com/craftcms/cms/blob/master/src/models/EntryDraft.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [ancestors](craft-base-element.md#ancestors "Defined by craft\base\Element")                                                     | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [archived](craft-base-elementtrait.md#archived "Defined by craft\base\ElementTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [author](craft-elements-entry.md#author "Defined by craft\elements\Entry")                                                       | [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)
| [authorId](craft-elements-entry.md#authorid "Defined by craft\elements\Entry")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Author ID
| [awaitingFieldValues](craft-base-elementtrait.md#awaitingfieldvalues "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [children](craft-base-element.md#children "Defined by craft\base\Element")                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [contentId](craft-base-elementtrait.md#contentid "Defined by craft\base\ElementTrait")                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](craft-base-element.md#contenttable "Defined by craft\base\Element")                                               | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-base-element.md#cpediturl "Defined by craft\base\Element")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](craft-base-element.md#currentrevision "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [dateCreated](craft-base-elementtrait.md#datecreated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](craft-base-elementtrait.md#datedeleted "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateUpdated](craft-base-elementtrait.md#dateupdated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [descendants](craft-base-element.md#descendants "Defined by craft\base\Element")                                                 | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [dirtyAttributes](craft-base-element.md#dirtyattributes "Defined by craft\base\Element")                                         | [string](http://php.net/language.types.string)[]
| [dirtyFields](craft-base-element.md#dirtyfields "Defined by craft\base\Element")                                                 | [string](http://php.net/language.types.string)[]
| [draftId](craft-base-elementtrait.md#draftid "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](craft-base-elementtrait.md#duplicateof "Defined by craft\base\ElementTrait")                                       | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](craft-base-element.md#editorhtml "Defined by craft\base\Element")                                                   | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](craft-base-elementtrait.md#enabled "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](craft-base-element.md#enabledforsite "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [expiryDate](craft-elements-entry.md#expirydate "Defined by craft\elements\Entry")                                               | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Expiry date
| [fieldColumnPrefix](craft-base-element.md#fieldcolumnprefix "Defined by craft\base\Element")                                     | [string](http://php.net/language.types.string)
| [fieldContext](craft-base-element.md#fieldcontext "Defined by craft\base\Element")                                               | [string](http://php.net/language.types.string)
| [fieldLayout](craft-base-element.md#fieldlayout "Defined by craft\base\Element")                                                 | [craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)
| [fieldLayoutId](craft-base-elementtrait.md#fieldlayoutid "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](craft-base-element.md#fieldparamnamespace "Defined by craft\base\Element")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](craft-base-element.md#fieldvalues "Defined by craft\base\Element")                                                 | [array](http://php.net/language.types.array) – The field values (handle => value)
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [gqlTypeName](craft-base-element.md#gqltypename "Defined by craft\base\Element")                                                 | [string](http://php.net/language.types.string)
| [hardDelete](craft-base-elementtrait.md#harddelete "Defined by craft\base\ElementTrait")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](craft-base-element.md#hasdescendants "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](craft-base-element.md#hasfreshcontent "Defined by craft\base\Element")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [id](craft-base-elementtrait.md#id "Defined by craft\base\ElementTrait")                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [isDraft](craft-base-element.md#isdraft "Defined by craft\base\Element")                                                         | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-base-element.md#iseditable "Defined by craft\base\Element")                                                   | [boolean](http://php.net/language.types.boolean)
| [isHomepage](craft-base-element.md#ishomepage "Defined by craft\base\Element")                                                   | [boolean](http://php.net/language.types.boolean)
| [isRevision](craft-base-element.md#isrevision "Defined by craft\base\Element")                                                   | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](craft-base-element.md#isunsaveddraft "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [level](craft-base-elementtrait.md#level "Defined by craft\base\ElementTrait")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](craft-base-elementtrait.md#lft "Defined by craft\base\ElementTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](craft-base-element.md#link "Defined by craft\base\Element")                                                               | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [newSiteIds](craft-base-elementtrait.md#newsiteids "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](craft-base-element.md#next "Defined by craft\base\Element")                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [nextSibling](craft-base-element.md#nextsibling "Defined by craft\base\Element")                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [parent](craft-base-element.md#parent "Defined by craft\base\Element")                                                           | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [postDate](craft-elements-entry.md#postdate "Defined by craft\elements\Entry")                                                   | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Post date
| [prev](craft-base-element.md#prev "Defined by craft\base\Element")                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [prevSibling](craft-base-element.md#prevsibling "Defined by craft\base\Element")                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [previewTargets](craft-base-element.md#previewtargets "Defined by craft\base\Element")                                           | [array](http://php.net/language.types.array)
| [previewing](craft-base-elementtrait.md#previewing "Defined by craft\base\ElementTrait")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is currently being previewed.
| [propagateAll](craft-base-elementtrait.md#propagateall "Defined by craft\base\ElementTrait")                                     | [boolean](http://php.net/language.types.boolean) – Whether all element attributes should be propagated across all its supported sites, even if that means overwriting existing site-specific values.
| [propagating](craft-base-elementtrait.md#propagating "Defined by craft\base\ElementTrait")                                       | [boolean](http://php.net/language.types.boolean) – Whether the element is being saved in the context of propagating another site's version of the element.
| [ref](craft-base-element.md#ref "Defined by craft\base\Element")                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [resaving](craft-base-elementtrait.md#resaving "Defined by craft\base\ElementTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the element is being resaved by a ResaveElement job or a `resave` console command.
| [revisionId](craft-base-elementtrait.md#revisionid "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer) – The ID of the revision’s row in the `revisions` table
| [rgt](craft-base-elementtrait.md#rgt "Defined by craft\base\ElementTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s right position within its structure
| [root](craft-base-elementtrait.md#root "Defined by craft\base\ElementTrait")                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure’s root ID
| [route](craft-base-element.md#route "Defined by craft\base\Element")                                                             | `mixed` – The route that the request should use, or null if no special action should be taken
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [searchScore](craft-base-elementtrait.md#searchscore "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s search score, if the [craft\elements\db\ElementQuery::search()](craft-elements-db-elementquery.md#method-search) parameter was used when querying for the element
| [section](craft-elements-entry.md#section "Defined by craft\elements\Entry")                                                     | [craft\models\Section](craft-models-section.md)
| [sectionId](craft-elements-entry.md#sectionid "Defined by craft\elements\Entry")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Section ID
| [serializedFieldValues](craft-base-element.md#serializedfieldvalues "Defined by craft\base\Element")                             | [array](http://php.net/language.types.array)
| [siblings](craft-base-element.md#siblings "Defined by craft\base\Element")                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [site](craft-base-element.md#site "Defined by craft\base\Element")                                                               | [craft\models\Site](craft-models-site.md)
| [siteId](craft-base-elementtrait.md#siteid "Defined by craft\base\ElementTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [slug](craft-base-elementtrait.md#slug "Defined by craft\base\ElementTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](craft-base-element.md#sourceid "Defined by craft\base\Element")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](craft-base-element.md#sourceuid "Defined by craft\base\Element")                                                     | [string](http://php.net/language.types.string)
| [status](craft-base-element.md#status "Defined by craft\base\Element")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [structureId](craft-base-elementtrait.md#structureid "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [supportedSites](craft-base-element.md#supportedsites "Defined by craft\base\Element")                                           | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [tempId](craft-base-elementtrait.md#tempid "Defined by craft\base\ElementTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](craft-base-elementtrait.md#title "Defined by craft\base\ElementTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](craft-base-element.md#totaldescendants "Defined by craft\base\Element")                                       | [integer](http://php.net/language.types.integer)
| [trashed](craft-base-elementtrait.md#trashed "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [type](craft-elements-entry.md#type "Defined by craft\elements\Entry")                                                           | [craft\models\EntryType](craft-models-entrytype.md)
| [typeId](craft-elements-entry.md#typeid "Defined by craft\elements\Entry")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Type ID
| [uiLabel](craft-base-element.md#uilabel "Defined by craft\base\Element")                                                         | [string](http://php.net/language.types.string)
| [uid](craft-base-elementtrait.md#uid "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uri](craft-base-elementtrait.md#uri "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](craft-base-element.md#uriformat "Defined by craft\base\Element")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](craft-base-element.md#url "Defined by craft\base\Element")                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.



## Protected Properties

| Property                                                                                     | Description
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [revisionCreatorId](craft-base-element.md#revisioncreatorid "Defined by craft\base\Element") | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision creator ID to be saved
| [revisionNotes](craft-base-element.md#revisionnotes "Defined by craft\base\Element")         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Revision notes to be saved



## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-base-element.md#method-call "Defined by craft\base\Element")                                                                   | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                     |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](craft-base-element.md#method-get "Defined by craft\base\Element")                                                                     | Returns the value of a component property.
| [__isset()](craft-base-element.md#method-isset "Defined by craft\base\Element")                                                                 | Checks if a property is set.
| [__set()](craft-base-element.md#method-set "Defined by craft\base\Element")                                                                     | Sets the value of a component property.
| [__toString()](craft-base-element.md#method-tostring "Defined by craft\base\Element")                                                           | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [actions()](craft-base-element.md#method-actions "Defined by craft\base\Element")                                                               | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](craft-base-element.md#method-adderror "Defined by craft\base\Element")                                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-element.md#method-afterdelete "Defined by craft\base\Element")                                                       | Performs actions after an element is deleted.
| [afterMoveInStructure()](craft-base-element.md#method-aftermoveinstructure "Defined by craft\base\Element")                                     | Performs actions after an element is moved within a structure.
| [afterPropagate()](craft-base-element.md#method-afterpropagate "Defined by craft\base\Element")                                                 | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](craft-base-element.md#method-afterrestore "Defined by craft\base\Element")                                                     | Performs actions after an element is restored.
| [afterSave()](craft-base-element.md#method-aftersave "Defined by craft\base\Element")                                                           | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](craft-base-element.md#method-attributelabels "Defined by craft\base\Element")                                               | Returns the attribute labels.
| [attributes()](craft-base-element.md#method-attributes "Defined by craft\base\Element")                                                         | Returns the list of attribute names.
| [beforeDelete()](craft-base-element.md#method-beforedelete "Defined by craft\base\Element")                                                     | Performs actions before an element is deleted.
| [beforeMoveInStructure()](craft-base-element.md#method-beforemoveinstructure "Defined by craft\base\Element")                                   | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-base-element.md#method-beforerestore "Defined by craft\base\Element")                                                   | Performs actions before an element is restored.
| [beforeSave()](craft-base-element.md#method-beforesave "Defined by craft\base\Element")                                                         | Performs actions before an element is saved.
| [beforeValidate()](craft-elements-entry.md#method-beforevalidate "Defined by craft\elements\Entry")                                             | This method is invoked before validation starts.
| [behaviors()](craft-base-element.md#method-behaviors "Defined by craft\base\Element")                                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-elements-entry.md#method-datetimeattributes "Defined by craft\elements\Entry")                                     | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](craft-base-element.md#method-defaulttableattributes "Defined by craft\base\Element")                                 | Returns the list of table attribute keys that should be shown by default.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [displayName()](craft-base-element.md#method-displayname "Defined by craft\base\Element")                                                       | Returns the display name of this class.
| [eagerLoadingMap()](craft-base-element.md#method-eagerloadingmap "Defined by craft\base\Element")                                               | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](craft-base-element.md#method-exporters "Defined by craft\base\Element")                                                           | Returns the available export options for a given source.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](craft-base-element.md#method-find "Defined by craft\base\Element")                                                                     | Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.
| [findAll()](craft-base-element.md#method-findall "Defined by craft\base\Element")                                                               | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](craft-base-element.md#method-findone "Defined by craft\base\Element")                                                               | Returns a single element instance by a primary key or a set of element criteria parameters.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAncestors()](craft-base-element.md#method-getancestors "Defined by craft\base\Element")                                                     | Returns the element’s ancestors.
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](craft-base-element.md#method-getattributelabel "Defined by craft\base\Element")                                           | Returns the text label for the specified attribute.
| [getAttributeStatus()](craft-base-element.md#method-getattributestatus "Defined by craft\base\Element")                                         | Returns the status of a given attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getAuthor()](craft-elements-entry.md#method-getauthor "Defined by craft\elements\Entry")                                                       | Returns the entry's author.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getChildren()](craft-base-element.md#method-getchildren "Defined by craft\base\Element")                                                       | Returns the element’s children.
| [getContentTable()](craft-base-element.md#method-getcontenttable "Defined by craft\base\Element")                                               | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-base-element.md#method-getcpediturl "Defined by craft\base\Element")                                                     | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](craft-base-element.md#method-getcurrentrevision "Defined by craft\base\Element")                                         | Returns the element’s current revision, if one exists.
| [getDescendants()](craft-base-element.md#method-getdescendants "Defined by craft\base\Element")                                                 | Returns the element’s descendants.
| [getDirtyAttributes()](craft-base-element.md#method-getdirtyattributes "Defined by craft\base\Element")                                         | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](craft-base-element.md#method-getdirtyfields "Defined by craft\base\Element")                                                 | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](craft-base-element.md#method-geteagerloadedelementcount "Defined by craft\base\Element")                         | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](craft-base-element.md#method-geteagerloadedelements "Defined by craft\base\Element")                                 | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](craft-base-element.md#method-geteditorhtml "Defined by craft\base\Element")                                                   | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](craft-base-element.md#method-getenabledforsite "Defined by craft\base\Element")                                           | Returns whether the element is enabled for the current site.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFieldColumnPrefix()](craft-base-element.md#method-getfieldcolumnprefix "Defined by craft\base\Element")                                     | Returns the field column prefix this element’s content uses.
| [getFieldContext()](craft-base-element.md#method-getfieldcontext "Defined by craft\base\Element")                                               | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-base-element.md#method-getfieldlayout "Defined by craft\base\Element")                                                 | Returns the field layout used by this element.
| [getFieldParamNamespace()](craft-base-element.md#method-getfieldparamnamespace "Defined by craft\base\Element")                                 | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](craft-base-element.md#method-getfieldstatus "Defined by craft\base\Element")                                                 | Returns the status of a given field.
| [getFieldValue()](craft-base-element.md#method-getfieldvalue "Defined by craft\base\Element")                                                   | Returns the value for a given field.
| [getFieldValues()](craft-base-element.md#method-getfieldvalues "Defined by craft\base\Element")                                                 | Returns the element’s normalized custom field values, indexed by their handles.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getGqlTypeName()](craft-base-element.md#method-getgqltypename "Defined by craft\base\Element")                                                 | Returns the GraphQL type name for this element type.
| [getHasDescendants()](craft-base-element.md#method-gethasdescendants "Defined by craft\base\Element")                                           | Returns whether the element has descendants.
| [getHasFreshContent()](craft-base-element.md#method-gethasfreshcontent "Defined by craft\base\Element")                                         | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](craft-base-element.md#method-gethtmlattributes "Defined by craft\base\Element")                                           | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](craft-base-element.md#method-getid "Defined by craft\base\Element")                                                                   | Returns the element’s ID.
| [getIsDraft()](craft-base-element.md#method-getisdraft "Defined by craft\base\Element")                                                         | Returns whether this is a draft.
| [getIsEditable()](craft-base-element.md#method-getiseditable "Defined by craft\base\Element")                                                   | Returns whether the current user can edit the element.
| [getIsHomepage()](craft-base-element.md#method-getishomepage "Defined by craft\base\Element")                                                   | Returns whether this element represents the site homepage.
| [getIsRevision()](craft-base-element.md#method-getisrevision "Defined by craft\base\Element")                                                   | Returns whether this is a revision.
| [getIsUnsavedDraft()](craft-base-element.md#method-getisunsaveddraft "Defined by craft\base\Element")                                           | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getLink()](craft-base-element.md#method-getlink "Defined by craft\base\Element")                                                               | Returns an anchor pre-filled with this element’s URL and title.
| [getNext()](craft-base-element.md#method-getnext "Defined by craft\base\Element")                                                               | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](craft-base-element.md#method-getnextsibling "Defined by craft\base\Element")                                                 | Returns the element’s next sibling.
| [getParent()](craft-base-element.md#method-getparent "Defined by craft\base\Element")                                                           | Returns the element’s parent.
| [getPrev()](craft-base-element.md#method-getprev "Defined by craft\base\Element")                                                               | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](craft-base-element.md#method-getprevsibling "Defined by craft\base\Element")                                                 | Returns the element’s previous sibling.
| [getPreviewTargets()](craft-base-element.md#method-getpreviewtargets "Defined by craft\base\Element")                                           | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).
| [getRef()](craft-base-element.md#method-getref "Defined by craft\base\Element")                                                                 | Returns the reference string to this element.
| [getRoute()](craft-base-element.md#method-getroute "Defined by craft\base\Element")                                                             | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-base-element.md#method-getsearchkeywords "Defined by craft\base\Element")                                           | Returns the search keywords for a given search attribute.
| [getSection()](craft-elements-entry.md#method-getsection "Defined by craft\elements\Entry")                                                     | Returns the entry's section.
| [getSerializedFieldValues()](craft-base-element.md#method-getserializedfieldvalues "Defined by craft\base\Element")                             | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getSiblings()](craft-base-element.md#method-getsiblings "Defined by craft\base\Element")                                                       | Returns all of the element’s siblings.
| [getSite()](craft-base-element.md#method-getsite "Defined by craft\base\Element")                                                               | Returns the site the element is associated with.
| [getSourceId()](craft-base-element.md#method-getsourceid "Defined by craft\base\Element")                                                       | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](craft-base-element.md#method-getsourceuid "Defined by craft\base\Element")                                                     | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-base-element.md#method-getstatus "Defined by craft\base\Element")                                                           | Returns the element’s status.
| [getSupportedSites()](craft-base-element.md#method-getsupportedsites "Defined by craft\base\Element")                                           | Returns the sites this element is associated with.
| [getTableAttributeHtml()](craft-base-element.md#method-gettableattributehtml "Defined by craft\base\Element")                                   | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](craft-base-element.md#method-getthumburl "Defined by craft\base\Element")                                                       | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](craft-base-element.md#method-gettotaldescendants "Defined by craft\base\Element")                                       | Returns the total number of descendants that the element has.
| [getType()](craft-elements-entry.md#method-gettype "Defined by craft\elements\Entry")                                                           | Returns the entry type.
| [getUiLabel()](craft-base-element.md#method-getuilabel "Defined by craft\base\Element")                                                         | Returns what the element should be called within the control panel.
| [getUriFormat()](craft-base-element.md#method-geturiformat "Defined by craft\base\Element")                                                     | Returns the URI format used to generate this element’s URI.
| [getUrl()](craft-base-element.md#method-geturl "Defined by craft\base\Element")                                                                 | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [gqlScopesByContext()](craft-base-element.md#method-gqlscopesbycontext "Defined by craft\base\Element")                                         | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](craft-base-element.md#method-gqltypenamebycontext "Defined by craft\base\Element")                                     | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-base-element.md#method-hascontent "Defined by craft\base\Element")                                                         | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](craft-base-element.md#method-haseagerloadedelements "Defined by craft\base\Element")                                 | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [hasStatuses()](craft-base-element.md#method-hasstatuses "Defined by craft\base\Element")                                                       | Returns whether elements of this type have statuses.
| [hasTitles()](craft-base-element.md#method-hastitles "Defined by craft\base\Element")                                                           | Returns whether elements of this type have traditional titles.
| [hasUris()](craft-base-element.md#method-hasuris "Defined by craft\base\Element")                                                               | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](craft-base-element.md#method-indexhtml "Defined by craft\base\Element")                                                           | Returns the element index HTML.
| [init()](craft-base-element.md#method-init "Defined by craft\base\Element")                                                                     | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAncestorOf()](craft-base-element.md#method-isancestorof "Defined by craft\base\Element")                                                     | Returns whether this element is an ancestor of another one.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [isChildOf()](craft-base-element.md#method-ischildof "Defined by craft\base\Element")                                                           | Returns whether this element is a direct child of another one.
| [isDescendantOf()](craft-base-element.md#method-isdescendantof "Defined by craft\base\Element")                                                 | Returns whether this element is a descendant of another one.
| [isFieldDirty()](craft-base-element.md#method-isfielddirty "Defined by craft\base\Element")                                                     | Returns whether a custom field value has changed since the element was first loaded.
| [isFieldEmpty()](craft-base-element.md#method-isfieldempty "Defined by craft\base\Element")                                                     | Returns whether a field is empty.
| [isLocalized()](craft-base-element.md#method-islocalized "Defined by craft\base\Element")                                                       | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](craft-base-element.md#method-isnextsiblingof "Defined by craft\base\Element")                                               | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](craft-base-element.md#method-isparentof "Defined by craft\base\Element")                                                         | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](craft-base-element.md#method-isprevsiblingof "Defined by craft\base\Element")                                               | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](craft-base-element.md#method-issiblingof "Defined by craft\base\Element")                                                       | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-base-element.md#method-lowerdisplayname "Defined by craft\base\Element")                                             | Returns the lowercase version of [displayName()](craft-base-element.md#method-displayname).
| [markAsClean()](craft-base-element.md#method-markasclean "Defined by craft\base\Element")                                                       | Resets the record of dirty attributes and fields.
| [markAsDirty()](craft-base-element.md#method-markasdirty "Defined by craft\base\Element")                                                       | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](craft-base-element.md#method-offsetexists "Defined by craft\base\Element")                                                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-base-element.md#method-pluraldisplayname "Defined by craft\base\Element")                                           | Returns the plural version of [displayName()](craft-base-element.md#method-displayname).
| [pluralLowerDisplayName()](craft-base-element.md#method-plurallowerdisplayname "Defined by craft\base\Element")                                 | Returns the plural, lowercase version of [displayName()](craft-base-element.md#method-displayname).
| [refHandle()](craft-base-element.md#method-refhandle "Defined by craft\base\Element")                                                           | Returns the handle that should be used to refer to this element type from reference tags.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](craft-base-element.md#method-searchableattributes "Defined by craft\base\Element")                                     | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setAuthor()](craft-elements-entry.md#method-setauthor "Defined by craft\elements\Entry")                                                       | Sets the entry's author.
| [setDirtyAttributes()](craft-base-element.md#method-setdirtyattributes "Defined by craft\base\Element")                                         | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](craft-base-element.md#method-seteagerloadedelementcount "Defined by craft\base\Element")                         | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-base-element.md#method-seteagerloadedelements "Defined by craft\base\Element")                                 | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](craft-base-element.md#method-setenabledforsite "Defined by craft\base\Element")                                           | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](craft-base-element.md#method-setfieldparamnamespace "Defined by craft\base\Element")                                 | Sets the namespace used by custom field params on the request.
| [setFieldValue()](craft-base-element.md#method-setfieldvalue "Defined by craft\base\Element")                                                   | Sets the value for a given field.
| [setFieldValues()](craft-base-element.md#method-setfieldvalues "Defined by craft\base\Element")                                                 | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](craft-base-element.md#method-setfieldvaluesfromrequest "Defined by craft\base\Element")                           | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](craft-base-element.md#method-setnext "Defined by craft\base\Element")                                                               | Sets the default next element.
| [setParent()](craft-base-element.md#method-setparent "Defined by craft\base\Element")                                                           | Sets the element’s parent.
| [setPrev()](craft-base-element.md#method-setprev "Defined by craft\base\Element")                                                               | Sets the default previous element.
| [setRevisionCreatorId()](craft-base-element.md#method-setrevisioncreatorid "Defined by craft\base\Element")                                     | Sets the revision creator ID to be saved.
| [setRevisionNotes()](craft-base-element.md#method-setrevisionnotes "Defined by craft\base\Element")                                             | Sets the revision notes to be saved.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [sortOptions()](craft-base-element.md#method-sortoptions "Defined by craft\base\Element")                                                       | Returns the sort options for the element type.
| [sources()](craft-base-element.md#method-sources "Defined by craft\base\Element")                                                               | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-base-element.md#method-statuses "Defined by craft\base\Element")                                                             | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](craft-base-element.md#method-tableattributes "Defined by craft\base\Element")                                               | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trackChanges()](craft-base-element.md#method-trackchanges "Defined by craft\base\Element")                                                     | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [updateTitle()](craft-elements-entry.md#method-updatetitle "Defined by craft\elements\Entry")                                                   | Updates the entry's title, if its entry type has a dynamic title format.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateCustomFieldAttribute()](craft-base-element.md#method-validatecustomfieldattribute "Defined by craft\base\Element")                     | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](craft-base-element.md#method-validatecustomfieldcontentsize "Defined by craft\base\Element")                 | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.



## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](craft-base-element.md#method-defineactions "Defined by craft\base\Element")                                                           | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-base-element.md#method-definedefaulttableattributes "Defined by craft\base\Element")                             | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](craft-base-element.md#method-defineexporters "Defined by craft\base\Element")                                                       | Defines the available element exporters for a given source.
| [defineRules()](craft-base-element.md#method-definerules "Defined by craft\base\Element")                                                               | Returns the validation rules for attributes.
| [defineSearchableAttributes()](craft-base-element.md#method-definesearchableattributes "Defined by craft\base\Element")                                 | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-base-element.md#method-definesortoptions "Defined by craft\base\Element")                                                   | Returns the sort options for the element type.
| [defineSources()](craft-base-element.md#method-definesources "Defined by craft\base\Element")                                                           | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-base-element.md#method-definetableattributes "Defined by craft\base\Element")                                           | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [fieldByHandle()](craft-base-element.md#method-fieldbyhandle "Defined by craft\base\Element")                                                           | Returns the field with a given handle.
| [fieldLayoutFields()](craft-base-element.md#method-fieldlayoutfields "Defined by craft\base\Element")                                                   | Returns each of this element’s fields.
| [findByCondition()](craft-base-element.md#method-findbycondition "Defined by craft\base\Element")                                                       | Finds Element instance(s) by the given condition.
| [htmlAttributes()](craft-base-element.md#method-htmlattributes "Defined by craft\base\Element")                                                         | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](craft-base-element.md#method-normalizefieldvalue "Defined by craft\base\Element")                                               | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](craft-base-element.md#method-prepelementqueryfortableattribute "Defined by craft\base\Element")                   | Preps the element criteria for a given table attribute
| [previewTargets()](craft-base-element.md#method-previewtargets "Defined by craft\base\Element")                                                         | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](craft-base-element.md#method-route "Defined by craft\base\Element")                                                                           | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-base-element.md#method-tableattributehtml "Defined by craft\base\Element")                                                 | Returns the HTML that should be shown for a given attribute in Table View.



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



