---
title: craft\elements\Asset
code:
  - php
  - twig
---

# Asset

Type

:   Class

Namespace

:   craft\elements

Inherits

:   [craft\elements\Asset](craft-elements-asset.md) &raquo;
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



Asset represents an asset element.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [ancestors](craft-base-element.md#ancestors "Defined by craft\base\Element")                                                     | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [archived](craft-base-elementtrait.md#archived "Defined by craft\base\ElementTrait")                                             | [boolean](http://php.net/language.types.boolean) – Whether the element is archived
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [avoidFilenameConflicts](craft-elements-asset.md#avoidfilenameconflicts)                                                         | [boolean](http://php.net/language.types.boolean) – Whether Asset should avoid filename conflicts when saved.
| [awaitingFieldValues](craft-base-elementtrait.md#awaitingfieldvalues "Defined by craft\base\ElementTrait")                       | [boolean](http://php.net/language.types.boolean) – Whether the element is still awaiting its custom field values
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [children](craft-base-element.md#children "Defined by craft\base\Element")                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [conflictingFilename](craft-elements-asset.md#conflictingfilename)                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The filename that was used that caused a conflict.
| [contentId](craft-base-elementtrait.md#contentid "Defined by craft\base\ElementTrait")                                           | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s content row ID
| [contentTable](craft-base-element.md#contenttable "Defined by craft\base\Element")                                               | [string](http://php.net/language.types.string)
| [contents](craft-elements-asset.md#contents)                                                                                     | [string](http://php.net/language.types.string)
| [copyOfFile](craft-elements-asset.md#copyoffile)                                                                                 | [string](http://php.net/language.types.string)
| [cpEditUrl](craft-elements-asset.md#cpediturl)                                                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [currentRevision](craft-base-element.md#currentrevision "Defined by craft\base\Element")                                         | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [dateCreated](craft-base-elementtrait.md#datecreated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was created
| [dateDeleted](craft-base-elementtrait.md#datedeleted "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was trashed
| [dateModified](craft-elements-asset.md#datemodified)                                                                             | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – Date modified
| [dateUpdated](craft-base-elementtrait.md#dateupdated "Defined by craft\base\ElementTrait")                                       | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the element was last updated
| [deletedWithVolume](craft-elements-asset.md#deletedwithvolume)                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the asset was deleted along with its volume
| [descendants](craft-base-element.md#descendants "Defined by craft\base\Element")                                                 | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [dimensions](craft-elements-asset.md#dimensions)                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [dirtyAttributes](craft-base-element.md#dirtyattributes "Defined by craft\base\Element")                                         | [string](http://php.net/language.types.string)[]
| [dirtyFields](craft-base-element.md#dirtyfields "Defined by craft\base\Element")                                                 | [string](http://php.net/language.types.string)[]
| [draftId](craft-base-elementtrait.md#draftid "Defined by craft\base\ElementTrait")                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft’s row in the `drafts` table
| [duplicateOf](craft-base-elementtrait.md#duplicateof "Defined by craft\base\ElementTrait")                                       | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element that this element is being duplicated by.
| [editorHtml](craft-elements-asset.md#editorhtml)                                                                                 | [string](http://php.net/language.types.string) – The HTML for the editor HUD
| [enabled](craft-base-elementtrait.md#enabled "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element is enabled
| [enabledForSite](craft-base-element.md#enabledforsite "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site.
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [extension](craft-elements-asset.md#extension)                                                                                   | [string](http://php.net/language.types.string)
| [fieldColumnPrefix](craft-base-element.md#fieldcolumnprefix "Defined by craft\base\Element")                                     | [string](http://php.net/language.types.string)
| [fieldContext](craft-base-element.md#fieldcontext "Defined by craft\base\Element")                                               | [string](http://php.net/language.types.string)
| [fieldLayout](craft-elements-asset.md#fieldlayout)                                                                               | [craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)
| [fieldLayoutId](craft-base-elementtrait.md#fieldlayoutid "Defined by craft\base\ElementTrait")                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s field layout ID
| [fieldParamNamespace](craft-base-element.md#fieldparamnamespace "Defined by craft\base\Element")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace
| [fieldValues](craft-base-element.md#fieldvalues "Defined by craft\base\Element")                                                 | [array](http://php.net/language.types.array) – The field values (handle => value)
| [filename](craft-elements-asset.md#filename)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Filename
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [focalPoint](craft-elements-asset.md#focalpoint)                                                                                 | [array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [folder](craft-elements-asset.md#folder)                                                                                         | [craft\models\VolumeFolder](craft-models-volumefolder.md)
| [folderId](craft-elements-asset.md#folderid)                                                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Folder ID
| [folderPath](craft-elements-asset.md#folderpath)                                                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Folder path
| [formattedSize](craft-elements-asset.md#formattedsize)                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [formattedSizeInBytes](craft-elements-asset.md#formattedsizeinbytes)                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [gqlTypeName](craft-elements-asset.md#gqltypename)                                                                               | [string](http://php.net/language.types.string)
| [hardDelete](craft-base-elementtrait.md#harddelete "Defined by craft\base\ElementTrait")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element is being hard-deleted.
| [hasDescendants](craft-base-element.md#hasdescendants "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean)
| [hasFocalPoint](craft-elements-asset.md#hasfocalpoint)                                                                           | [boolean](http://php.net/language.types.boolean)
| [hasFreshContent](craft-base-element.md#hasfreshcontent "Defined by craft\base\Element")                                         | [boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh
| [hasUrls](craft-elements-asset.md#hasurls)                                                                                       | [boolean](http://php.net/language.types.boolean)
| [height](craft-elements-asset.md#height)                                                                                         | [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)
| [id](craft-base-elementtrait.md#id "Defined by craft\base\ElementTrait")                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s ID
| [imageTransformSourcePath](craft-elements-asset.md#imagetransformsourcepath)                                                     | [string](http://php.net/language.types.string)
| [img](craft-elements-asset.md#img)                                                                                               | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [isDraft](craft-base-element.md#isdraft "Defined by craft\base\Element")                                                         | [boolean](http://php.net/language.types.boolean)
| [isEditable](craft-elements-asset.md#iseditable)                                                                                 | [boolean](http://php.net/language.types.boolean)
| [isHomepage](craft-base-element.md#ishomepage "Defined by craft\base\Element")                                                   | [boolean](http://php.net/language.types.boolean)
| [isRevision](craft-base-element.md#isrevision "Defined by craft\base\Element")                                                   | [boolean](http://php.net/language.types.boolean)
| [isUnsavedDraft](craft-base-element.md#isunsaveddraft "Defined by craft\base\Element")                                           | [boolean](http://php.net/language.types.boolean)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [keepFileOnDelete](craft-elements-asset.md#keepfileondelete)                                                                     | [boolean](http://php.net/language.types.boolean) – Whether the associated file should be preserved if the asset record is deleted.
| [keptFile](craft-elements-asset.md#keptfile)                                                                                     | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the file was kept around when the asset was deleted
| [kind](craft-elements-asset.md#kind)                                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Kind
| [level](craft-base-elementtrait.md#level "Defined by craft\base\ElementTrait")                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s level within its structure
| [lft](craft-base-elementtrait.md#lft "Defined by craft\base\ElementTrait")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s left position within its structure
| [link](craft-base-element.md#link "Defined by craft\base\Element")                                                               | `\Twig\Markup`, [null](http://php.net/language.types.null)
| [locationError](craft-elements-asset.md#locationerror)                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Location error code
| [mimeType](craft-elements-asset.md#mimetype)                                                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [newFilename](craft-elements-asset.md#newfilename)                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – New filename
| [newFolderId](craft-elements-asset.md#newfolderid)                                                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – New folder id
| [newLocation](craft-elements-asset.md#newlocation)                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – New file location
| [newSiteIds](craft-base-elementtrait.md#newsiteids "Defined by craft\base\ElementTrait")                                         | [integer](http://php.net/language.types.integer)[] – The site IDs that the element was just propagated to for the first time.
| [next](craft-base-element.md#next "Defined by craft\base\Element")                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [nextSibling](craft-base-element.md#nextsibling "Defined by craft\base\Element")                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [parent](craft-base-element.md#parent "Defined by craft\base\Element")                                                           | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [path](craft-elements-asset.md#path)                                                                                             | [string](http://php.net/language.types.string)
| [prev](craft-base-element.md#prev "Defined by craft\base\Element")                                                               | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [prevSibling](craft-base-element.md#prevsibling "Defined by craft\base\Element")                                                 | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [previewTargets](craft-elements-asset.md#previewtargets)                                                                         | [array](http://php.net/language.types.array)
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
| [serializedFieldValues](craft-base-element.md#serializedfieldvalues "Defined by craft\base\Element")                             | [array](http://php.net/language.types.array)
| [siblings](craft-base-element.md#siblings "Defined by craft\base\Element")                                                       | [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]
| [site](craft-base-element.md#site "Defined by craft\base\Element")                                                               | [craft\models\Site](craft-models-site.md)
| [siteId](craft-base-elementtrait.md#siteid "Defined by craft\base\ElementTrait")                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The site ID the element is associated with
| [size](craft-elements-asset.md#size)                                                                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Size
| [slug](craft-base-elementtrait.md#slug "Defined by craft\base\ElementTrait")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s slug
| [sourceId](craft-base-element.md#sourceid "Defined by craft\base\Element")                                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)
| [sourceUid](craft-base-element.md#sourceuid "Defined by craft\base\Element")                                                     | [string](http://php.net/language.types.string)
| [status](craft-base-element.md#status "Defined by craft\base\Element")                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [stream](craft-elements-asset.md#stream)                                                                                         | [resource](http://php.net/language.types.resource)
| [structureId](craft-base-elementtrait.md#structureid "Defined by craft\base\ElementTrait")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The element’s structure ID
| [suggestedFilename](craft-elements-asset.md#suggestedfilename)                                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The suggested filename in case of a conflict.
| [supportedSites](craft-base-element.md#supportedsites "Defined by craft\base\Element")                                           | [integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)
| [supportsImageEditor](craft-elements-asset.md#supportsimageeditor)                                                               | [boolean](http://php.net/language.types.boolean)
| [supportsPreview](craft-elements-asset.md#supportspreview)                                                                       | [boolean](http://php.net/language.types.boolean)
| [tempFilePath](craft-elements-asset.md#tempfilepath)                                                                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The temp file path
| [tempId](craft-base-elementtrait.md#tempid "Defined by craft\base\ElementTrait")                                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s temporary ID (only used if the element's URI format contains {id})
| [title](craft-base-elementtrait.md#title "Defined by craft\base\ElementTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s title
| [totalDescendants](craft-base-element.md#totaldescendants "Defined by craft\base\Element")                                       | [integer](http://php.net/language.types.integer)
| [transform](craft-elements-asset.md#transform)                                                                                   | [craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The transform that should be applied, if any.
| [transformSource](craft-elements-asset.md#transformsource)                                                                       | [string](http://php.net/language.types.string)
| [trashed](craft-base-elementtrait.md#trashed "Defined by craft\base\ElementTrait")                                               | [boolean](http://php.net/language.types.boolean) – Whether the element has been soft-deleted.
| [uiLabel](craft-base-element.md#uilabel "Defined by craft\base\Element")                                                         | [string](http://php.net/language.types.string)
| [uid](craft-base-elementtrait.md#uid "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s UID
| [uploader](craft-elements-asset.md#uploader)                                                                                     | [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)
| [uploaderId](craft-elements-asset.md#uploaderid)                                                                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the user who first added this asset (if known)
| [uri](craft-base-elementtrait.md#uri "Defined by craft\base\ElementTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s URI
| [uriFormat](craft-base-element.md#uriformat "Defined by craft\base\Element")                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [url](craft-elements-asset.md#url)                                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.
| [volume](craft-elements-asset.md#volume)                                                                                         | [craft\base\VolumeInterface](craft-base-volumeinterface.md)
| [volumeId](craft-elements-asset.md#volumeid)                                                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Volume ID
| [width](craft-elements-asset.md#width)                                                                                           | [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)

### `avoidFilenameConflicts`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Asset should avoid filename conflicts when saved.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L587)



### `conflictingFilename`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The filename that was used that caused a conflict.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L597)



### `contents`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.0.6







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `copyOfFile`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `cpEditUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `dateModified`



Type

:   [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null)



Date modified



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L556)



### `deletedWithVolume`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the asset was deleted along with its volume

See also [beforeDelete()](craft-elements-asset.md#method-beforedelete)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L603)



### `dimensions`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `editorHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The HTML for the editor HUD



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `extension`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `fieldLayout`



Type

:   [craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `filename`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Filename



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L536)



### `focalPoint`



Type

:   [array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `folder`



Type

:   [craft\models\VolumeFolder](craft-models-volumefolder.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `folderId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Folder ID



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L520)



### `folderPath`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Folder path



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L530)



### `formattedSize`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `formattedSizeInBytes`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `gqlTypeName`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only

Since

:   3.3.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `hasFocalPoint`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `hasUrls`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `height`



Type

:   [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `imageTransformSourcePath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `img`



Type

:   `\Twig\Markup`, [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `isEditable`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `keepFileOnDelete`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the associated file should be preserved if the asset record is deleted.

See also:

- [beforeDelete()](craft-elements-asset.md#method-beforedelete)
- [afterDelete()](craft-elements-asset.md#method-afterdelete)


[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L610)



### `keptFile`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether the file was kept around when the asset was deleted



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L551)



### `kind`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Kind



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L541)



### `locationError`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



Location error code

See also [craft\validators\AssetLocationValidator::validateAttribute()](craft-validators-assetlocationvalidator.md#method-validateattribute)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L567)



### `mimeType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `newFilename`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



New filename



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L572)



### `newFolderId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



New folder id



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L577)



### `newLocation`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



New file location



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L561)



### `path`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `previewTargets`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `size`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Size



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L546)



### `stream`



Type

:   [resource](http://php.net/language.types.resource)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `suggestedFilename`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The suggested filename in case of a conflict.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L592)



### `supportsImageEditor`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `supportsPreview`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `tempFilePath`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The temp file path



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L582)



### `transform`



Type

:   [craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Access

:   Write-only



The transform that should be applied, if any. Can either be the handle of a named transform, or an array that defines the transform settings.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `transformSource`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `uploader`



Type

:   [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `uploaderId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The ID of the user who first added this asset (if known)



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L525)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `volume`



Type

:   [craft\base\VolumeInterface](craft-base-volumeinterface.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)



### `volumeId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



Volume ID



[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L515)



### `width`



Type

:   [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php)





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
| [__get()](craft-elements-asset.md#method-get)                                                                                                   | Returns a property value.
| [__isset()](craft-elements-asset.md#method-isset)                                                                                               | Checks if a property is set.
| [__set()](craft-base-element.md#method-set "Defined by craft\base\Element")                                                                     | Sets the value of a component property.
| [__toString()](craft-elements-asset.md#method-tostring)                                                                                         | Returns the string representation of the element.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [actions()](craft-base-element.md#method-actions "Defined by craft\base\Element")                                                               | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](craft-base-element.md#method-adderror "Defined by craft\base\Element")                                                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-elements-asset.md#method-afterdelete)                                                                                     | Performs actions after an element is deleted.
| [afterMoveInStructure()](craft-base-element.md#method-aftermoveinstructure "Defined by craft\base\Element")                                     | Performs actions after an element is moved within a structure.
| [afterPropagate()](craft-base-element.md#method-afterpropagate "Defined by craft\base\Element")                                                 | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](craft-base-element.md#method-afterrestore "Defined by craft\base\Element")                                                     | Performs actions after an element is restored.
| [afterSave()](craft-elements-asset.md#method-aftersave)                                                                                         | Performs actions after an element is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](craft-base-element.md#method-attributelabels "Defined by craft\base\Element")                                               | Returns the attribute labels.
| [attributes()](craft-elements-asset.md#method-attributes)                                                                                       | Returns the list of attribute names.
| [beforeDelete()](craft-elements-asset.md#method-beforedelete)                                                                                   | Performs actions before an element is deleted.
| [beforeMoveInStructure()](craft-base-element.md#method-beforemoveinstructure "Defined by craft\base\Element")                                   | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-elements-asset.md#method-beforerestore)                                                                                 | Performs actions before an element is restored.
| [beforeSave()](craft-elements-asset.md#method-beforesave)                                                                                       | Performs actions before an element is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-base-element.md#method-behaviors "Defined by craft\base\Element")                                                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [copyWithTransform()](craft-elements-asset.md#method-copywithtransform)                                                                         | Returns a copy of the asset with the given transform applied to it.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-elements-asset.md#method-datetimeattributes)                                                                       | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [defaultTableAttributes()](craft-base-element.md#method-defaulttableattributes "Defined by craft\base\Element")                                 | Returns the list of table attribute keys that should be shown by default.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [displayName()](craft-elements-asset.md#method-displayname)                                                                                     | Returns the display name of this class.
| [eagerLoadingMap()](craft-elements-asset.md#method-eagerloadingmap)                                                                             | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exporters()](craft-base-element.md#method-exporters "Defined by craft\base\Element")                                                           | Returns the available export options for a given source.
| [extraFields()](craft-elements-asset.md#method-extrafields)                                                                                     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [find()](craft-elements-asset.md#method-find)                                                                                                   | Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.
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
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getChildren()](craft-base-element.md#method-getchildren "Defined by craft\base\Element")                                                       | Returns the element’s children.
| [getContentTable()](craft-base-element.md#method-getcontenttable "Defined by craft\base\Element")                                               | Returns the name of the table this element’s content is stored in.
| [getContents()](craft-elements-asset.md#method-getcontents)                                                                                     | Returns the file’s contents.
| [getCopyOfFile()](craft-elements-asset.md#method-getcopyoffile)                                                                                 | Get a temporary copy of the actual file.
| [getCpEditUrl()](craft-elements-asset.md#method-getcpediturl)                                                                                   | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](craft-base-element.md#method-getcurrentrevision "Defined by craft\base\Element")                                         | Returns the element’s current revision, if one exists.
| [getDescendants()](craft-base-element.md#method-getdescendants "Defined by craft\base\Element")                                                 | Returns the element’s descendants.
| [getDimensions()](craft-elements-asset.md#method-getdimensions)                                                                                 | Returns the image dimensions.
| [getDirtyAttributes()](craft-base-element.md#method-getdirtyattributes "Defined by craft\base\Element")                                         | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](craft-base-element.md#method-getdirtyfields "Defined by craft\base\Element")                                                 | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](craft-base-element.md#method-geteagerloadedelementcount "Defined by craft\base\Element")                         | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](craft-base-element.md#method-geteagerloadedelements "Defined by craft\base\Element")                                 | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](craft-elements-asset.md#method-geteditorhtml)                                                                                 | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](craft-base-element.md#method-getenabledforsite "Defined by craft\base\Element")                                           | Returns whether the element is enabled for the current site.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getExtension()](craft-elements-asset.md#method-getextension)                                                                                   | Returns the file extension.
| [getFieldColumnPrefix()](craft-base-element.md#method-getfieldcolumnprefix "Defined by craft\base\Element")                                     | Returns the field column prefix this element’s content uses.
| [getFieldContext()](craft-base-element.md#method-getfieldcontext "Defined by craft\base\Element")                                               | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-elements-asset.md#method-getfieldlayout)                                                                               | Returns the field layout used by this element.
| [getFieldParamNamespace()](craft-base-element.md#method-getfieldparamnamespace "Defined by craft\base\Element")                                 | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](craft-base-element.md#method-getfieldstatus "Defined by craft\base\Element")                                                 | Returns the status of a given field.
| [getFieldValue()](craft-base-element.md#method-getfieldvalue "Defined by craft\base\Element")                                                   | Returns the value for a given field.
| [getFieldValues()](craft-base-element.md#method-getfieldvalues "Defined by craft\base\Element")                                                 | Returns the element’s normalized custom field values, indexed by their handles.
| [getFilename()](craft-elements-asset.md#method-getfilename)                                                                                     | Returns the file name, with or without the extension.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getFocalPoint()](craft-elements-asset.md#method-getfocalpoint)                                                                                 | Returns the focal point represented as an array with `x` and `y` keys, or null if it's not an image.
| [getFolder()](craft-elements-asset.md#method-getfolder)                                                                                         | Returns the asset’s volume folder.
| [getFormattedSize()](craft-elements-asset.md#method-getformattedsize)                                                                           | Returns the formatted file size, if known.
| [getFormattedSizeInBytes()](craft-elements-asset.md#method-getformattedsizeinbytes)                                                             | Returns the formatted file size in bytes, if known.
| [getGqlTypeName()](craft-elements-asset.md#method-getgqltypename)                                                                               | Returns the GraphQL type name for this element type.
| [getHasDescendants()](craft-base-element.md#method-gethasdescendants "Defined by craft\base\Element")                                           | Returns whether the element has descendants.
| [getHasFocalPoint()](craft-elements-asset.md#method-gethasfocalpoint)                                                                           | Returns whether a user-defined focal point is set on the asset.
| [getHasFreshContent()](craft-base-element.md#method-gethasfreshcontent "Defined by craft\base\Element")                                         | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHasUrls()](craft-elements-asset.md#method-gethasurls)                                                                                       | Return whether the Asset has a URL.
| [getHeight()](craft-elements-asset.md#method-getheight)                                                                                         | Returns the image height.
| [getHtmlAttributes()](craft-base-element.md#method-gethtmlattributes "Defined by craft\base\Element")                                           | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getId()](craft-base-element.md#method-getid "Defined by craft\base\Element")                                                                   | Returns the element’s ID.
| [getImageTransformSourcePath()](craft-elements-asset.md#method-getimagetransformsourcepath)                                                     | Return the path where the source for this Asset's transforms should be.
| [getImg()](craft-elements-asset.md#method-getimg)                                                                                               | Returns an `<img>` tag based on this asset.
| [getIsDraft()](craft-base-element.md#method-getisdraft "Defined by craft\base\Element")                                                         | Returns whether this is a draft.
| [getIsEditable()](craft-elements-asset.md#method-getiseditable)                                                                                 | Returns whether the current user can edit the element.
| [getIsHomepage()](craft-base-element.md#method-getishomepage "Defined by craft\base\Element")                                                   | Returns whether this element represents the site homepage.
| [getIsRevision()](craft-base-element.md#method-getisrevision "Defined by craft\base\Element")                                                   | Returns whether this is a revision.
| [getIsUnsavedDraft()](craft-base-element.md#method-getisunsaveddraft "Defined by craft\base\Element")                                           | Returns whether the element is an unsaved draft.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getLink()](craft-base-element.md#method-getlink "Defined by craft\base\Element")                                                               | Returns an anchor pre-filled with this element’s URL and title.
| [getMimeType()](craft-elements-asset.md#method-getmimetype)                                                                                     | Returns the file’s MIME type, if it can be determined.
| [getNext()](craft-base-element.md#method-getnext "Defined by craft\base\Element")                                                               | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](craft-base-element.md#method-getnextsibling "Defined by craft\base\Element")                                                 | Returns the element’s next sibling.
| [getParent()](craft-base-element.md#method-getparent "Defined by craft\base\Element")                                                           | Returns the element’s parent.
| [getPath()](craft-elements-asset.md#method-getpath)                                                                                             | Returns the asset's path in the volume.
| [getPrev()](craft-base-element.md#method-getprev "Defined by craft\base\Element")                                                               | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](craft-base-element.md#method-getprevsibling "Defined by craft\base\Element")                                                 | Returns the element’s previous sibling.
| [getPreviewTargets()](craft-elements-asset.md#method-getpreviewtargets)                                                                         | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-elements-asset.md#method-geturl).
| [getPreviewThumbImg()](craft-elements-asset.md#method-getpreviewthumbimg)                                                                       | Returns preview thumb image HTML.
| [getRef()](craft-base-element.md#method-getref "Defined by craft\base\Element")                                                                 | Returns the reference string to this element.
| [getRoute()](craft-base-element.md#method-getroute "Defined by craft\base\Element")                                                             | Returns the route that should be used when the element’s URI is requested.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSearchKeywords()](craft-base-element.md#method-getsearchkeywords "Defined by craft\base\Element")                                           | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](craft-base-element.md#method-getserializedfieldvalues "Defined by craft\base\Element")                             | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getSiblings()](craft-base-element.md#method-getsiblings "Defined by craft\base\Element")                                                       | Returns all of the element’s siblings.
| [getSite()](craft-base-element.md#method-getsite "Defined by craft\base\Element")                                                               | Returns the site the element is associated with.
| [getSourceId()](craft-base-element.md#method-getsourceid "Defined by craft\base\Element")                                                       | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](craft-base-element.md#method-getsourceuid "Defined by craft\base\Element")                                                     | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-base-element.md#method-getstatus "Defined by craft\base\Element")                                                           | Returns the element’s status.
| [getStream()](craft-elements-asset.md#method-getstream)                                                                                         | Returns a stream of the actual file.
| [getSupportedSites()](craft-base-element.md#method-getsupportedsites "Defined by craft\base\Element")                                           | Returns the sites this element is associated with.
| [getSupportsImageEditor()](craft-elements-asset.md#method-getsupportsimageeditor)                                                               | Returns whether this asset can be edited by the image editor.
| [getSupportsPreview()](craft-elements-asset.md#method-getsupportspreview)                                                                       | Returns whether this asset can be previewed.
| [getTableAttributeHtml()](craft-base-element.md#method-gettableattributehtml "Defined by craft\base\Element")                                   | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](craft-elements-asset.md#method-getthumburl)                                                                                     | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](craft-base-element.md#method-gettotaldescendants "Defined by craft\base\Element")                                       | Returns the total number of descendants that the element has.
| [getTransformSource()](craft-elements-asset.md#method-gettransformsource)                                                                       |
| [getUiLabel()](craft-base-element.md#method-getuilabel "Defined by craft\base\Element")                                                         | Returns what the element should be called within the control panel.
| [getUploader()](craft-elements-asset.md#method-getuploader)                                                                                     | Returns the user that uploaded the asset, if known.
| [getUri()](craft-elements-asset.md#method-geturi)                                                                                               | Returns the asset's path in the volume.
| [getUriFormat()](craft-base-element.md#method-geturiformat "Defined by craft\base\Element")                                                     | Returns the URI format used to generate this element’s URI.
| [getUrl()](craft-elements-asset.md#method-geturl)                                                                                               | Returns the element’s full URL.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [getVolume()](craft-elements-asset.md#method-getvolume)                                                                                         | Returns the asset’s volume.
| [getWidth()](craft-elements-asset.md#method-getwidth)                                                                                           | Returns the image width.
| [gqlScopesByContext()](craft-elements-asset.md#method-gqlscopesbycontext)                                                                       | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](craft-elements-asset.md#method-gqltypenamebycontext)                                                                   | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-elements-asset.md#method-hascontent)                                                                                       | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](craft-base-element.md#method-haseagerloadedelements "Defined by craft\base\Element")                                 | Returns whether elements have been eager-loaded with a given handle.
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [hasStatuses()](craft-base-element.md#method-hasstatuses "Defined by craft\base\Element")                                                       | Returns whether elements of this type have statuses.
| [hasTitles()](craft-elements-asset.md#method-hastitles)                                                                                         | Returns whether elements of this type have traditional titles.
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
| [isLocalized()](craft-elements-asset.md#method-islocalized)                                                                                     | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](craft-base-element.md#method-isnextsiblingof "Defined by craft\base\Element")                                               | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](craft-base-element.md#method-isparentof "Defined by craft\base\Element")                                                         | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](craft-base-element.md#method-isprevsiblingof "Defined by craft\base\Element")                                               | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](craft-base-element.md#method-issiblingof "Defined by craft\base\Element")                                                       | Returns whether this element is a sibling of another one.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [lowerDisplayName()](craft-elements-asset.md#method-lowerdisplayname)                                                                           | Returns the lowercase version of [displayName()](craft-elements-asset.md#method-displayname).
| [markAsClean()](craft-base-element.md#method-markasclean "Defined by craft\base\Element")                                                       | Resets the record of dirty attributes and fields.
| [markAsDirty()](craft-base-element.md#method-markasdirty "Defined by craft\base\Element")                                                       | Marks all fields and attributes as dirty.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](craft-base-element.md#method-offsetexists "Defined by craft\base\Element")                                                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [pluralDisplayName()](craft-elements-asset.md#method-pluraldisplayname)                                                                         | Returns the plural version of [displayName()](craft-elements-asset.md#method-displayname).
| [pluralLowerDisplayName()](craft-elements-asset.md#method-plurallowerdisplayname)                                                               | Returns the plural, lowercase version of [displayName()](craft-elements-asset.md#method-displayname).
| [refHandle()](craft-elements-asset.md#method-refhandle)                                                                                         | Returns the handle that should be used to refer to this element type from reference tags.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](craft-elements-asset.md#method-scenarios)                                                                                         | Returns a list of scenarios and the corresponding active attributes.
| [searchableAttributes()](craft-base-element.md#method-searchableattributes "Defined by craft\base\Element")                                     | Defines which element attributes should be searchable.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setDirtyAttributes()](craft-base-element.md#method-setdirtyattributes "Defined by craft\base\Element")                                         | Sets the list of dirty attribute names.
| [setEagerLoadedElementCount()](craft-base-element.md#method-seteagerloadedelementcount "Defined by craft\base\Element")                         | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-elements-asset.md#method-seteagerloadedelements)                                                               | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](craft-base-element.md#method-setenabledforsite "Defined by craft\base\Element")                                           | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](craft-base-element.md#method-setfieldparamnamespace "Defined by craft\base\Element")                                 | Sets the namespace used by custom field params on the request.
| [setFieldValue()](craft-base-element.md#method-setfieldvalue "Defined by craft\base\Element")                                                   | Sets the value for a given field.
| [setFieldValues()](craft-base-element.md#method-setfieldvalues "Defined by craft\base\Element")                                                 | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](craft-base-element.md#method-setfieldvaluesfromrequest "Defined by craft\base\Element")                           | Sets the element’s custom field values, when the values have come from post data.
| [setFocalPoint()](craft-elements-asset.md#method-setfocalpoint)                                                                                 | Sets the asset's focal point.
| [setHeight()](craft-elements-asset.md#method-setheight)                                                                                         | Sets the image height.
| [setNext()](craft-base-element.md#method-setnext "Defined by craft\base\Element")                                                               | Sets the default next element.
| [setParent()](craft-base-element.md#method-setparent "Defined by craft\base\Element")                                                           | Sets the element’s parent.
| [setPrev()](craft-base-element.md#method-setprev "Defined by craft\base\Element")                                                               | Sets the default previous element.
| [setRevisionCreatorId()](craft-base-element.md#method-setrevisioncreatorid "Defined by craft\base\Element")                                     | Sets the revision creator ID to be saved.
| [setRevisionNotes()](craft-base-element.md#method-setrevisionnotes "Defined by craft\base\Element")                                             | Sets the revision notes to be saved.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [setTransform()](craft-elements-asset.md#method-settransform)                                                                                   | Sets the transform.
| [setTransformSource()](craft-elements-asset.md#method-settransformsource)                                                                       | Set a source to use for transforms for this Assets File.
| [setUploader()](craft-elements-asset.md#method-setuploader)                                                                                     | Sets the asset's uploader.
| [setWidth()](craft-elements-asset.md#method-setwidth)                                                                                           | Sets the image width.
| [sortOptions()](craft-base-element.md#method-sortoptions "Defined by craft\base\Element")                                                       | Returns the sort options for the element type.
| [sources()](craft-base-element.md#method-sources "Defined by craft\base\Element")                                                               | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-base-element.md#method-statuses "Defined by craft\base\Element")                                                             | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](craft-base-element.md#method-tableattributes "Defined by craft\base\Element")                                               | Defines all of the available columns that can be shown in table views.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trackChanges()](craft-base-element.md#method-trackchanges "Defined by craft\base\Element")                                                     | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateCustomFieldAttribute()](craft-base-element.md#method-validatecustomfieldattribute "Defined by craft\base\Element")                     | Calls a custom validation function on a custom field.
| [validateCustomFieldContentSize()](craft-base-element.md#method-validatecustomfieldcontentsize "Defined by craft\base\Element")                 | Validates that the content size is going to fit within the field’s database column.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `__get()`





Returns a property value.

This method will check if $name is one of the following:
- a magic property supported by [craft\base\Element::__get()](craft-base-element.md#method-get)
- an image transform handle


[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L693-L709)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

`mixed` – The property value

#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is write-only.


### `__isset()`





Checks if a property is set.

This method will check if $name is one of the following:
- a magic property supported by [craft\base\Element::__isset()](craft-base-element.md#method-isset)
- an image transform handle


[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L672-L679)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the property is set



### `__toString()`





Returns the string representation of the element.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L650-L660)



#### Returns

[string](http://php.net/language.types.string)



### `afterDelete()`





Performs actions after an element is deleted.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1660-L1668)






### `afterSave()`





Performs actions after an element is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1587-L1635)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the asset isn't new but doesn't have a row in the `assets` table for some reason


### `attributes()`





Returns the list of attribute names.



By default, this method returns all public non-static properties of the class.
You may override this method to change the default behavior.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1487-L1499)



#### Returns

[array](http://php.net/language.types.array) – List of attribute names.



### `beforeDelete()`





Performs actions before an element is deleted.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1640-L1655)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be deleted



### `beforeRestore()`



Since

:   3.1.0



Performs actions before an element is restored.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1673-L1677)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeSave()`





Performs actions before an element is saved.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1534-L1581)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be saved



### `copyWithTransform()`





Returns a copy of the asset with the given transform applied to it.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1519-L1526)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\Asset](craft-elements-asset.md)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  if $transform is an invalid transform handle


### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L714-L719)



#### Returns

[string](http://php.net/language.types.string)[]



### `displayName()`





Returns the display name of this class.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L123-L126)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.



### `eagerLoadingMap()`



Since

:   3.4.0



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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L197-L216)


#### Arguments

- `$sourceElements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – An array of the source elements
- `$handle` ([string](http://php.net/language.types.string)) – The property handle used to identify which target elements should be included in the map

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The eager-loading element ID mappings, false if no mappings exist, or null if the result
should be ignored



### `extraFields()`





Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).



This method is similar to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) except that the list of fields returned
by this method are not returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail). Only when field names
to be expanded are explicitly specified when calling [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail), will their values
be exported.

The default implementation returns an empty array.

You may override this method to return a list of expandable fields based on some context information
(e.g. the current application user).




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1504-L1510)



#### Returns

[array](http://php.net/language.types.array) – The list of expandable field names or field definitions. Please refer
to [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail) on the format of the return value.



### `find()`





Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.



The returned [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance can be further customized by calling
methods defined in [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) before `one()` or `all()` is called to return
populated `\craft\elements\ElementInterface` instances. For example,

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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L188-L191)



#### Returns

[craft\elements\db\AssetQuery](craft-elements-db-assetquery.md) – The newly created [craft\elements\db\AssetQuery](craft-elements-db-assetquery.md) instance.



### `getContents()`



Since

:   3.0.6



Returns the file’s contents.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1258-L1261)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [volumeId](craft-elements-asset.md#volumeid) is missing or invalid
- [craft\errors\AssetException](craft-errors-assetexception.md)\
  if a stream could not be created


### `getCopyOfFile()`





Get a temporary copy of the actual file.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1229-L1236)



#### Returns

[string](http://php.net/language.types.string)



### `getCpEditUrl()`



Since

:   3.4.0



Returns the element’s edit URL in the control panel.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L778-L795)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)


---

#### Example

::: code
```php
$url = $asset->cpEditUrl;
```
```twig{2}
{% if asset.isEditable %}
    <a href="{{ asset.cpEditUrl }}">Edit</a>
{% endif %}
```
:::


### `getDimensions()`



Since

:   3.4.0



Returns the image dimensions.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1151-L1159)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getEditorHtml()`





Returns the HTML for the element’s editor HUD.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1407-L1473)



#### Returns

[string](http://php.net/language.types.string) – The HTML for the editor HUD



### `getExtension()`





Returns the file extension.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1047-L1050)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L827-L836)



#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)



### `getFilename()`





Returns the file name, with or without the extension.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1034-L1040)


#### Arguments

- `$withExtension` ([boolean](http://php.net/language.types.boolean))

#### Returns

[string](http://php.net/language.types.string)



### `getFocalPoint()`





Returns the focal point represented as an array with `x` and `y` keys, or null if it's not an image.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1318-L1331)


#### Arguments

- `$asCss` ([boolean](http://php.net/language.types.boolean)) – Whether the value should be returned in CSS syntax ("50% 25%") instead

#### Returns

[array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getFolder()`





Returns the asset’s volume folder.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L844-L855)



#### Returns

[craft\models\VolumeFolder](craft-models-volumefolder.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [folderId](craft-elements-asset.md#folderid) is missing or invalid


### `getFormattedSize()`



Since

:   3.4.0



Returns the formatted file size, if known.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1115-L1124)


#### Arguments

- `$decimals` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The number of digits after the decimal point
- `$short` ([boolean](http://php.net/language.types.boolean)) – Whether the size should be returned in short form (“kB” instead of “kilobytes”)

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getFormattedSizeInBytes()`



Since

:   3.4.0



Returns the formatted file size in bytes, if known.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1133-L1143)


#### Arguments

- `$short` ([boolean](http://php.net/language.types.boolean)) – Whether the size should be returned in short form (“B” instead of “bytes”)

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getGqlTypeName()`



Since

:   3.3.0



Returns the GraphQL type name for this element type.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1479-L1482)



#### Returns

[string](http://php.net/language.types.string)



### `getHasFocalPoint()`





Returns whether a user-defined focal point is set on the asset.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1307-L1310)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHasUrls()`

::: danger DEPRECATED
Deprecated in 3.0.0-RC12. Use getVolume()->hasUrls instead.
:::




Return whether the Asset has a URL.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1269-L1276)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHeight()`





Returns the image height.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1071-L1074)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The transform that should be applied, if any. Can either be the handle of a named transform, or an array that defines the transform settings.

#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)



### `getImageTransformSourcePath()`





Return the path where the source for this Asset's transforms should be.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1213-L1222)



#### Returns

[string](http://php.net/language.types.string)



### `getImg()`





Returns an `<img>` tag based on this asset.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L803-L822)


#### Arguments

- `$transform` (`mixed`) – The transform to use when generating the html.

#### Returns

`\Twig\Markup`, [null](http://php.net/language.types.null)



### `getIsEditable()`





Returns whether the current user can edit the element.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L754-L763)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getMimeType()`





Returns the file’s MIME type, if it can be determined.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1057-L1062)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getPath()`





Returns the asset's path in the volume.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1203-L1206)


#### Arguments

- `$filename` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Filename to use. If not specified, the asset's filename will be used.

#### Returns

[string](http://php.net/language.types.string)



### `getPreviewTargets()`



Since

:   3.2.0



Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-elements-asset.md#method-geturl).



Each target should be represented by a sub-array with the following keys:

- `label` – What the preview target will be called in the control panel.
- `url` – The URL that the preview target should open.
- `refresh` – Whether preview frames should be automatically refreshed when content changes (`true` by default).

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::previewTargets()](craft-base-element.md#method-previewtargets)
instead of this method.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1023-L1026)



#### Returns

[array](http://php.net/language.types.array)



### `getPreviewThumbImg()`



Since

:   3.4.0



Returns preview thumb image HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L999-L1018)


#### Arguments

- `$width` ([integer](http://php.net/language.types.integer))
- `$height` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if the asset can't have a thumbnail, and $fallbackToIcon is `false`


### `getStream()`





Returns a stream of the actual file.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1245-L1248)



#### Returns

[resource](http://php.net/language.types.resource)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [volumeId](craft-elements-asset.md#volumeid) is missing or invalid
- [craft\errors\AssetException](craft-errors-assetexception.md)\
  if a stream could not be created


### `getSupportsImageEditor()`





Returns whether this asset can be edited by the image editor.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1283-L1287)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSupportsPreview()`

::: danger DEPRECATED
Deprecated in 3.4.0. Use [craft\services\Assets::getAssetPreviewHandler()](craft-services-assets.md#method-getassetpreviewhandler) instead.
:::




Returns whether this asset can be previewed.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1295-L1300)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getThumbUrl()`





Returns the URL to the element’s thumbnail, if there is one.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L979-L988)


#### Arguments

- `$size` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTransformSource()`










[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1164-L1171)



#### Returns

[string](http://php.net/language.types.string)



### `getUploader()`



Since

:   3.4.0



Returns the user that uploaded the asset, if known.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L886-L902)



#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)



### `getUri()`

::: danger DEPRECATED
Deprecated in 3.0.0-RC12
:::




Returns the asset's path in the volume.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1190-L1195)


#### Arguments

- `$filename` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Filename to use. If not specified, the asset's filename will be used.

#### Returns

[string](http://php.net/language.types.string)



### `getUrl()`





Returns the element’s full URL.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L938-L974)


#### Arguments

- `$transform` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The transform that should be applied, if any. Can either be the handle of a named transform, or an array
that defines the transform settings.
- `$generateNow` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the transformed image should be generated immediately if it doesn’t exist. If `null`, it will be left
up to the `generateTransformsBeforePageLoad` config setting.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getVolume()`





Returns the asset’s volume.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L863-L878)



#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [volumeId](craft-elements-asset.md#volumeid) is missing or invalid


### `getWidth()`





Returns the image width.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1092-L1095)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The optional transform handle for which to get thumbnail.

#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)



### `gqlScopesByContext()`



Since

:   3.3.0



Returns the GraphQL scopes required by element's context.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L246-L250)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[array](http://php.net/language.types.array)



### `gqlTypeNameByContext()`



Since

:   3.3.0



Returns the GraphQL type name by an element's context.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L236-L240)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L163-L166)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasTitles()`





Returns whether elements of this type have traditional titles.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L171-L174)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have traditional titles.



### `isLocalized()`





Returns whether elements of this type store content on a per-site basis.



If this returns `true`, the element’s [getSupportedSites()](craft-base-element.md#method-getsupportedsites) method will
be responsible for defining which sites its content should be stored in.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L179-L182)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type store data on a per-site basis.



### `lowerDisplayName()`



Since

:   3.3.17



Returns the lowercase version of [displayName()](craft-elements-asset.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L131-L134)



#### Returns

[string](http://php.net/language.types.string)



### `pluralDisplayName()`



Since

:   3.2.0



Returns the plural version of [displayName()](craft-elements-asset.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L139-L142)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`



Since

:   3.3.17



Returns the plural, lowercase version of [displayName()](craft-elements-asset.md#method-displayname).








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L147-L150)



#### Returns

[string](http://php.net/language.types.string)



### `refHandle()`





Returns the handle that should be used to refer to this element type from reference tags.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L155-L158)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The reference handle, or null if the element type doesn’t support reference tags



### `scenarios()`





Returns a list of scenarios and the corresponding active attributes.



An active attribute is one that is subject to validation in the current scenario.
The returned array should be in the following format:

```php
[
    'scenario1' => ['attribute11', 'attribute12', ...],
    'scenario2' => ['attribute21', 'attribute22', ...],
    ...
]
```

By default, an active attribute is considered safe and can be massively assigned.
If an attribute should NOT be massively assigned (thus considered unsafe),
please prefix the attribute with an exclamation character (e.g. `'!rank'`).

The default implementation of this method will return all scenarios found in the [rules()](craft-base-model.md#method-rules)
declaration. A special scenario named [SCENARIO_DEFAULT](https://www.yiiframework.com/doc/api/2.0/yii-base-model#SCENARIO_DEFAULT-detail) will contain all attributes
found in the [rules()](craft-base-model.md#method-rules). Each scenario will be associated with the attributes that
are being validated by the validation rules that apply to the scenario.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L743-L749)



#### Returns

[array](http://php.net/language.types.array) – A list of scenarios and the corresponding active attributes.



### `setEagerLoadedElements()`



Since

:   3.4.0



Sets some eager-loaded elements on a given handle.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L222-L230)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The eager-loaded elements




### `setFocalPoint()`





Sets the asset's focal point.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1339-L1361)


#### Arguments

- `$value` – String|array|null


#### Throws

- [InvalidArgumentException](http://php.net/class.invalidargumentexception)\
  if $value is invalid


### `setHeight()`





Sets the image height.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1081-L1084)


#### Arguments

- `$height` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)) – The image height




### `setTransform()`





Sets the transform.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L922-L927)


#### Arguments

- `$transform` ([craft\models\AssetTransform](craft-models-assettransform.md), [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The transform that should be applied, if any. Can either be the handle of a named transform, or an array that defines the transform settings.

#### Returns

[craft\elements\Asset](craft-elements-asset.md)

#### Throws

- [craft\errors\AssetTransformException](craft-errors-assettransformexception.md)\
  if $transform is an invalid transform handle


### `setTransformSource()`





Set a source to use for transforms for this Assets File.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1178-L1181)


#### Arguments

- `$uri` ([string](http://php.net/language.types.string))




### `setUploader()`



Since

:   3.4.0



Sets the asset's uploader.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L910-L913)


#### Arguments

- `$uploader` ([craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null))




### `setWidth()`





Sets the image width.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1102-L1105)


#### Arguments

- `$width` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null)) – The image width






## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineActions()](craft-elements-asset.md#method-defineactions)                                                                                         | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-elements-asset.md#method-definedefaulttableattributes)                                                           | Returns the list of table attribute keys that should be shown by default.
| [defineExporters()](craft-base-element.md#method-defineexporters "Defined by craft\base\Element")                                                       | Defines the available element exporters for a given source.
| [defineRules()](craft-elements-asset.md#method-definerules)                                                                                             | Returns the validation rules for attributes.
| [defineSearchableAttributes()](craft-elements-asset.md#method-definesearchableattributes)                                                               | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-elements-asset.md#method-definesortoptions)                                                                                 | Returns the sort options for the element type.
| [defineSources()](craft-elements-asset.md#method-definesources)                                                                                         | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-elements-asset.md#method-definetableattributes)                                                                         | Defines all of the available columns that can be shown in table views.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [fieldByHandle()](craft-base-element.md#method-fieldbyhandle "Defined by craft\base\Element")                                                           | Returns the field with a given handle.
| [fieldLayoutFields()](craft-base-element.md#method-fieldlayoutfields "Defined by craft\base\Element")                                                   | Returns each of this element’s fields.
| [findByCondition()](craft-base-element.md#method-findbycondition "Defined by craft\base\Element")                                                       | Finds Element instance(s) by the given condition.
| [htmlAttributes()](craft-elements-asset.md#method-htmlattributes)                                                                                       | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [normalizeFieldValue()](craft-base-element.md#method-normalizefieldvalue "Defined by craft\base\Element")                                               | Normalizes a field’s value.
| [prepElementQueryForTableAttribute()](craft-elements-asset.md#method-prepelementqueryfortableattribute)                                                 | Preps the element criteria for a given table attribute
| [previewTargets()](craft-base-element.md#method-previewtargets "Defined by craft\base\Element")                                                         | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-element.md#method-geturl).
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [route()](craft-base-element.md#method-route "Defined by craft\base\Element")                                                                           | Returns the route that should be used when the element’s URI is requested.
| [tableAttributeHtml()](craft-elements-asset.md#method-tableattributehtml)                                                                               | Returns the HTML that should be shown for a given attribute in Table View.

### `defineActions()`





Defines the available element actions for a given source.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L288-L341)


#### Arguments

- `$source` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The selected source’s key, if any.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L412-L421)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineRules()`



Since

:   3.4.0



Returns the validation rules for attributes.



See [rules()](craft-base-model.md#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](craft-base-model.md#method-rules) so [EVENT_DEFINE_RULES](craft-base-model.md#event-define-rules) handlers can modify the
class-defined rules.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L724-L738)



#### Returns

[array](http://php.net/language.types.array)



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L346-L349)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L354-L377)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineSources()`





Defines the sources that elements of this type may belong to.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L255-L283)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L382-L407)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `htmlAttributes()`





Returns any attributes that should be included in the element’s DOM representation in the control panel.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1682-L1725)


#### Arguments

- `$context` ([string](http://php.net/language.types.string)) – The context that the element is being rendered in ('index', 'field', etc.)

#### Returns

[array](http://php.net/language.types.array)



### `prepElementQueryForTableAttribute()`





Preps the element criteria for a given table attribute








[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L426-L433)


#### Arguments

- `$elementQuery` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md))
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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/Asset.php#L1369-L1402)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for a given attribute in Table View.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)




## Constants

| Constant                     | Description
| ---------------------------- | ---------------------------------
| `ATTR_STATUS_CONFLICTED`     |
| `ATTR_STATUS_MODIFIED`       |
| `ATTR_STATUS_OUTDATED`       |
| `ERROR_DISALLOWED_EXTENSION` |
| `ERROR_FILENAME_CONFLICT`    |
| `HOMEPAGE_URI`               |
| `KIND_ACCESS`                |
| `KIND_AUDIO`                 |
| `KIND_COMPRESSED`            |
| `KIND_EXCEL`                 |
| `KIND_FLASH`                 |
| `KIND_HTML`                  |
| `KIND_ILLUSTRATOR`           |
| `KIND_IMAGE`                 |
| `KIND_JAVASCRIPT`            |
| `KIND_JSON`                  |
| `KIND_PDF`                   |
| `KIND_PHOTOSHOP`             |
| `KIND_PHP`                   |
| `KIND_POWERPOINT`            |
| `KIND_TEXT`                  |
| `KIND_UNKNOWN`               |
| `KIND_VIDEO`                 |
| `KIND_WORD`                  |
| `KIND_XML`                   |
| `SCENARIO_CREATE`            |
| `SCENARIO_DEFAULT`           | The name of the default scenario.
| `SCENARIO_ESSENTIALS`        |
| `SCENARIO_FILEOPS`           |
| `SCENARIO_INDEX`             |
| `SCENARIO_LIVE`              |
| `SCENARIO_REPLACE`           |
| `STATUS_ARCHIVED`            |
| `STATUS_DISABLED`            |
| `STATUS_ENABLED`             |


## Events

### EVENT_BEFORE_HANDLE_FILE



Type

:   [craft\events\AssetEvent](craft-events-assetevent.md)



The event that is triggered before an asset is uploaded to volume.



---




