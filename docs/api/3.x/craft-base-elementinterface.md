---
title: craft\base\ElementInterface
code:
  - php
  - twig
---

# ElementInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\ComponentInterface](craft-base-componentinterface.md)

Implemented by

:   [craft\base\Element](craft-base-element.md), [craft\elements\Asset](craft-elements-asset.md), [craft\elements\Category](craft-elements-category.md), [craft\elements\Entry](craft-elements-entry.md), [craft\elements\GlobalSet](craft-elements-globalset.md), [craft\elements\MatrixBlock](craft-elements-matrixblock.md), [craft\elements\Tag](craft-elements-tag.md), [craft\elements\User](craft-elements-user.md), [craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md), [craft\models\EntryDraft](craft-models-entrydraft.md), [craft\models\EntryVersion](craft-models-entryversion.md), [craft\test\mockclasses\elements\ExampleElement](craft-test-mockclasses-elements-exampleelement.md)

Since

:   3.0.0



ElementInterface defines the common interface to be implemented by element classes.

A class implementing this interface should also use [craft\base\ElementTrait](craft-base-elementtrait.md) and `\craft\base\ContentTrait`.



[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [actions()](craft-base-elementinterface.md#method-actions)                                                      | Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a given source.
| [afterDelete()](craft-base-elementinterface.md#method-afterdelete)                                              | Performs actions after an element is deleted.
| [afterMoveInStructure()](craft-base-elementinterface.md#method-aftermoveinstructure)                            | Performs actions after an element is moved within a structure.
| [afterPropagate()](craft-base-elementinterface.md#method-afterpropagate)                                        | Performs actions after an element is fully saved and propagated to other sites.
| [afterRestore()](craft-base-elementinterface.md#method-afterrestore)                                            | Performs actions after an element is restored.
| [afterSave()](craft-base-elementinterface.md#method-aftersave)                                                  | Performs actions after an element is saved.
| [beforeDelete()](craft-base-elementinterface.md#method-beforedelete)                                            | Performs actions before an element is deleted.
| [beforeMoveInStructure()](craft-base-elementinterface.md#method-beforemoveinstructure)                          | Performs actions before an element is moved within a structure.
| [beforeRestore()](craft-base-elementinterface.md#method-beforerestore)                                          | Performs actions before an element is restored.
| [beforeSave()](craft-base-elementinterface.md#method-beforesave)                                                | Performs actions before an element is saved.
| [defaultTableAttributes()](craft-base-elementinterface.md#method-defaulttableattributes)                        | Returns the list of table attribute keys that should be shown by default.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface") | Returns the display name of this class.
| [eagerLoadingMap()](craft-base-elementinterface.md#method-eagerloadingmap)                                      | Returns an array that maps source-to-target element IDs based on the given sub-property handle.
| [exporters()](craft-base-elementinterface.md#method-exporters)                                                  | Returns the available export options for a given source.
| [find()](craft-base-elementinterface.md#method-find)                                                            | Creates an [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md) instance for query purpose.
| [findAll()](craft-base-elementinterface.md#method-findall)                                                      | Returns a list of elements that match the specified ID(s) or a set of element criteria parameters.
| [findOne()](craft-base-elementinterface.md#method-findone)                                                      | Returns a single element instance by a primary key or a set of element criteria parameters.
| [getAncestors()](craft-base-elementinterface.md#method-getancestors)                                            | Returns the element’s ancestors.
| [getAttributeStatus()](craft-base-elementinterface.md#method-getattributestatus)                                | Returns the status of a given attribute.
| [getChildren()](craft-base-elementinterface.md#method-getchildren)                                              | Returns the element’s children.
| [getContentTable()](craft-base-elementinterface.md#method-getcontenttable)                                      | Returns the name of the table this element’s content is stored in.
| [getCpEditUrl()](craft-base-elementinterface.md#method-getcpediturl)                                            | Returns the element’s edit URL in the control panel.
| [getCurrentRevision()](craft-base-elementinterface.md#method-getcurrentrevision)                                | Returns the element’s current revision, if one exists.
| [getDescendants()](craft-base-elementinterface.md#method-getdescendants)                                        | Returns the element’s descendants.
| [getDirtyAttributes()](craft-base-elementinterface.md#method-getdirtyattributes)                                | Returns a list of attribute names that have changed since the element was first loaded.
| [getDirtyFields()](craft-base-elementinterface.md#method-getdirtyfields)                                        | Returns a list of custom field handles that have changed since the element was first loaded.
| [getEagerLoadedElementCount()](craft-base-elementinterface.md#method-geteagerloadedelementcount)                | Returns the count of eager-loaded elements for a given handle.
| [getEagerLoadedElements()](craft-base-elementinterface.md#method-geteagerloadedelements)                        | Returns the eager-loaded elements for a given handle.
| [getEditorHtml()](craft-base-elementinterface.md#method-geteditorhtml)                                          | Returns the HTML for the element’s editor HUD.
| [getEnabledForSite()](craft-base-elementinterface.md#method-getenabledforsite)                                  | Returns whether the element is enabled for the current site.
| [getFieldColumnPrefix()](craft-base-elementinterface.md#method-getfieldcolumnprefix)                            | Returns the field column prefix this element’s content uses.
| [getFieldContext()](craft-base-elementinterface.md#method-getfieldcontext)                                      | Returns the field context this element’s content uses.
| [getFieldLayout()](craft-base-elementinterface.md#method-getfieldlayout)                                        | Returns the field layout used by this element.
| [getFieldParamNamespace()](craft-base-elementinterface.md#method-getfieldparamnamespace)                        | Returns the namespace used by custom field params on the request.
| [getFieldStatus()](craft-base-elementinterface.md#method-getfieldstatus)                                        | Returns the status of a given field.
| [getFieldValue()](craft-base-elementinterface.md#method-getfieldvalue)                                          | Returns the value for a given field.
| [getFieldValues()](craft-base-elementinterface.md#method-getfieldvalues)                                        | Returns the element’s normalized custom field values, indexed by their handles.
| [getGqlTypeName()](craft-base-elementinterface.md#method-getgqltypename)                                        | Returns the GraphQL type name for this element type.
| [getHasDescendants()](craft-base-elementinterface.md#method-gethasdescendants)                                  | Returns whether the element has descendants.
| [getHasFreshContent()](craft-base-elementinterface.md#method-gethasfreshcontent)                                | Returns whether the element’s content is "fresh" (unsaved and without validation errors).
| [getHtmlAttributes()](craft-base-elementinterface.md#method-gethtmlattributes)                                  | Returns any attributes that should be included in the element’s DOM representation in the control panel.
| [getIsDraft()](craft-base-elementinterface.md#method-getisdraft)                                                | Returns whether this is a draft.
| [getIsEditable()](craft-base-elementinterface.md#method-getiseditable)                                          | Returns whether the current user can edit the element.
| [getIsHomepage()](craft-base-elementinterface.md#method-getishomepage)                                          | Returns whether this element represents the site homepage.
| [getIsRevision()](craft-base-elementinterface.md#method-getisrevision)                                          | Returns whether this is a revision.
| [getIsUnsavedDraft()](craft-base-elementinterface.md#method-getisunsaveddraft)                                  | Returns whether the element is an unsaved draft.
| [getLink()](craft-base-elementinterface.md#method-getlink)                                                      | Returns an anchor pre-filled with this element’s URL and title.
| [getNext()](craft-base-elementinterface.md#method-getnext)                                                      | Returns the next element relative to this one, from a given set of criteria.
| [getNextSibling()](craft-base-elementinterface.md#method-getnextsibling)                                        | Returns the element’s next sibling.
| [getParent()](craft-base-elementinterface.md#method-getparent)                                                  | Returns the element’s parent.
| [getPrev()](craft-base-elementinterface.md#method-getprev)                                                      | Returns the previous element relative to this one, from a given set of criteria.
| [getPrevSibling()](craft-base-elementinterface.md#method-getprevsibling)                                        | Returns the element’s previous sibling.
| [getPreviewTargets()](craft-base-elementinterface.md#method-getpreviewtargets)                                  | Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-elementinterface.md#method-geturl).
| [getRef()](craft-base-elementinterface.md#method-getref)                                                        | Returns the reference string to this element.
| [getRoute()](craft-base-elementinterface.md#method-getroute)                                                    | Returns the route that should be used when the element’s URI is requested.
| [getSearchKeywords()](craft-base-elementinterface.md#method-getsearchkeywords)                                  | Returns the search keywords for a given search attribute.
| [getSerializedFieldValues()](craft-base-elementinterface.md#method-getserializedfieldvalues)                    | Returns an array of the element’s serialized custom field values, indexed by their handles.
| [getSiblings()](craft-base-elementinterface.md#method-getsiblings)                                              | Returns all of the element’s siblings.
| [getSourceId()](craft-base-elementinterface.md#method-getsourceid)                                              | Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.
| [getSourceUid()](craft-base-elementinterface.md#method-getsourceuid)                                            | Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.
| [getStatus()](craft-base-elementinterface.md#method-getstatus)                                                  | Returns the element’s status.
| [getSupportedSites()](craft-base-elementinterface.md#method-getsupportedsites)                                  | Returns the sites this element is associated with.
| [getTableAttributeHtml()](craft-base-elementinterface.md#method-gettableattributehtml)                          | Returns the HTML that should be shown for a given attribute in Table View.
| [getThumbUrl()](craft-base-elementinterface.md#method-getthumburl)                                              | Returns the URL to the element’s thumbnail, if there is one.
| [getTotalDescendants()](craft-base-elementinterface.md#method-gettotaldescendants)                              | Returns the total number of descendants that the element has.
| [getUiLabel()](craft-base-elementinterface.md#method-getuilabel)                                                | Returns what the element should be called within the control panel.
| [getUriFormat()](craft-base-elementinterface.md#method-geturiformat)                                            | Returns the URI format used to generate this element’s URI.
| [getUrl()](craft-base-elementinterface.md#method-geturl)                                                        | Returns the element’s full URL.
| [gqlScopesByContext()](craft-base-elementinterface.md#method-gqlscopesbycontext)                                | Returns the GraphQL scopes required by element's context.
| [gqlTypeNameByContext()](craft-base-elementinterface.md#method-gqltypenamebycontext)                            | Returns the GraphQL type name by an element's context.
| [hasContent()](craft-base-elementinterface.md#method-hascontent)                                                | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).
| [hasEagerLoadedElements()](craft-base-elementinterface.md#method-haseagerloadedelements)                        | Returns whether elements have been eager-loaded with a given handle.
| [hasStatuses()](craft-base-elementinterface.md#method-hasstatuses)                                              | Returns whether elements of this type have statuses.
| [hasTitles()](craft-base-elementinterface.md#method-hastitles)                                                  | Returns whether elements of this type have traditional titles.
| [hasUris()](craft-base-elementinterface.md#method-hasuris)                                                      | Returns whether elements of this type can have their own slugs and URIs.
| [indexHtml()](craft-base-elementinterface.md#method-indexhtml)                                                  | Returns the element index HTML.
| [isAncestorOf()](craft-base-elementinterface.md#method-isancestorof)                                            | Returns whether this element is an ancestor of another one.
| [isChildOf()](craft-base-elementinterface.md#method-ischildof)                                                  | Returns whether this element is a direct child of another one.
| [isDescendantOf()](craft-base-elementinterface.md#method-isdescendantof)                                        | Returns whether this element is a descendant of another one.
| [isFieldDirty()](craft-base-elementinterface.md#method-isfielddirty)                                            | Returns whether a custom field value has changed since the element was first loaded.
| [isLocalized()](craft-base-elementinterface.md#method-islocalized)                                              | Returns whether elements of this type store content on a per-site basis.
| [isNextSiblingOf()](craft-base-elementinterface.md#method-isnextsiblingof)                                      | Returns whether this element is the direct next sibling of another one.
| [isParentOf()](craft-base-elementinterface.md#method-isparentof)                                                | Returns whether this element is a direct parent of another one.
| [isPrevSiblingOf()](craft-base-elementinterface.md#method-isprevsiblingof)                                      | Returns whether this element is the direct previous sibling of another one.
| [isSiblingOf()](craft-base-elementinterface.md#method-issiblingof)                                              | Returns whether this element is a sibling of another one.
| [lowerDisplayName()](craft-base-elementinterface.md#method-lowerdisplayname)                                    | Returns the lowercase version of [displayName()](craft-base-componentinterface.md#method-displayname).
| [markAsClean()](craft-base-elementinterface.md#method-markasclean)                                              | Resets the record of dirty attributes and fields.
| [markAsDirty()](craft-base-elementinterface.md#method-markasdirty)                                              | Marks all fields and attributes as dirty.
| [offsetExists()](craft-base-elementinterface.md#method-offsetexists)                                            | Treats custom fields as array offsets.
| [pluralDisplayName()](craft-base-elementinterface.md#method-pluraldisplayname)                                  | Returns the plural version of [displayName()](craft-base-componentinterface.md#method-displayname).
| [pluralLowerDisplayName()](craft-base-elementinterface.md#method-plurallowerdisplayname)                        | Returns the plural, lowercase version of [displayName()](craft-base-componentinterface.md#method-displayname).
| [refHandle()](craft-base-elementinterface.md#method-refhandle)                                                  | Returns the handle that should be used to refer to this element type from reference tags.
| [searchableAttributes()](craft-base-elementinterface.md#method-searchableattributes)                            | Defines which element attributes should be searchable.
| [setEagerLoadedElementCount()](craft-base-elementinterface.md#method-seteagerloadedelementcount)                | Sets the count of eager-loaded elements for a given handle.
| [setEagerLoadedElements()](craft-base-elementinterface.md#method-seteagerloadedelements)                        | Sets some eager-loaded elements on a given handle.
| [setEnabledForSite()](craft-base-elementinterface.md#method-setenabledforsite)                                  | Sets whether the element is enabled for the current site.
| [setFieldParamNamespace()](craft-base-elementinterface.md#method-setfieldparamnamespace)                        | Sets the namespace used by custom field params on the request.
| [setFieldValue()](craft-base-elementinterface.md#method-setfieldvalue)                                          | Sets the value for a given field.
| [setFieldValues()](craft-base-elementinterface.md#method-setfieldvalues)                                        | Sets the element’s custom field values.
| [setFieldValuesFromRequest()](craft-base-elementinterface.md#method-setfieldvaluesfromrequest)                  | Sets the element’s custom field values, when the values have come from post data.
| [setNext()](craft-base-elementinterface.md#method-setnext)                                                      | Sets the default next element.
| [setParent()](craft-base-elementinterface.md#method-setparent)                                                  | Sets the element’s parent.
| [setPrev()](craft-base-elementinterface.md#method-setprev)                                                      | Sets the default previous element.
| [setRevisionCreatorId()](craft-base-elementinterface.md#method-setrevisioncreatorid)                            | Sets the revision creator ID to be saved.
| [setRevisionNotes()](craft-base-elementinterface.md#method-setrevisionnotes)                                    | Sets the revision notes to be saved.
| [sortOptions()](craft-base-elementinterface.md#method-sortoptions)                                              | Returns the sort options for the element type.
| [sources()](craft-base-elementinterface.md#method-sources)                                                      | Returns the source definitions that elements of this type may belong to.
| [statuses()](craft-base-elementinterface.md#method-statuses)                                                    | Returns all of the possible statuses that elements of this type may have.
| [tableAttributes()](craft-base-elementinterface.md#method-tableattributes)                                      | Defines all of the available columns that can be shown in table views.
| [trackChanges()](craft-base-elementinterface.md#method-trackchanges)                                            | Returns whether Craft should keep track of attribute and custom field changes made to this element type, including when the last time they were changed, and who was logged-in at the time.

### `actions()`





Returns the available [element actions](https://docs.craftcms.com/v3/extend/element-action-types.html) for a
given source.

The actions can be represented by their fully qualified class name, a config array with the class name
set to a `type` key, or by an instantiated element action object.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::defineActions()](craft-base-element.md#method-defineactions)
instead of this method.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L295)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `afterDelete()`





Performs actions after an element is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1156)






### `afterMoveInStructure()`





Performs actions after an element is moved within a structure.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1186)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer)) – The structure ID




### `afterPropagate()`



Since

:   3.2.0



Performs actions after an element is fully saved and propagated to other sites.

::: tip
This will get called regardless of whether `$propagate` is `true` or `false` for [craft\services\Elements::saveElement()](craft-services-elements.md#method-saveelement).
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1144)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `afterRestore()`



Since

:   3.1.0



Performs actions after an element is restored.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1171)






### `afterSave()`





Performs actions after an element is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1132)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `beforeDelete()`





Performs actions before an element is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1151)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be deleted



### `beforeMoveInStructure()`





Performs actions before an element is moved within a structure.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1179)


#### Arguments

- `$structureId` ([integer](http://php.net/language.types.integer)) – The structure ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be moved within the structure



### `beforeRestore()`



Since

:   3.1.0



Performs actions before an element is restored.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1164)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeSave()`





Performs actions before an element is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1125)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be saved



### `defaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.

This method should return an array where each element in the array maps to one of the keys of the array returned
by [tableAttributes()](craft-base-elementinterface.md#method-tableattributes).


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L416)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attribute keys



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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L466)


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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L312)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key.

#### Returns

[array](http://php.net/language.types.array) – The available element exporters.



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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L157)



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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L222)


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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L185)


#### Arguments

- `$criteria` (`mixed`) – The element ID or a set of element criteria parameters

#### Returns

`static`, [null](http://php.net/language.types.null) – Element instance matching the condition, or null if nothing matches.



### `getAncestors()`





Returns the element’s ancestors.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L741)


#### Arguments

- `$dist` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getAttributeStatus()`



Since

:   3.4.0



Returns the status of a given attribute.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L864)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getChildren()`





Returns the element’s children.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L756)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getContentTable()`





Returns the name of the table this element’s content is stored in.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L983)



#### Returns

[string](http://php.net/language.types.string)



### `getCpEditUrl()`





Returns the element’s edit URL in the control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L632)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getCurrentRevision()`



Since

:   3.2.0



Returns the element’s current revision, if one exists.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1070)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getDescendants()`





Returns the element’s descendants.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L749)


#### Arguments

- `$dist` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getDirtyAttributes()`



Since

:   3.4.0



Returns a list of attribute names that have changed since the element was first loaded.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L872)



#### Returns

[string](http://php.net/language.types.string)[]



### `getDirtyFields()`



Since

:   3.4.0



Returns a list of custom field handles that have changed since the element was first loaded.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L941)



#### Returns

[string](http://php.net/language.types.string)[]



### `getEagerLoadedElementCount()`



Since

:   3.4.0



Returns the count of eager-loaded elements for a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1030)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[integer](http://php.net/language.types.integer) – The eager-loaded element count



### `getEagerLoadedElements()`





Returns the eager-loaded elements for a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1013)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – The eager-loaded elements, or null if they hadn't been eager-loaded



### `getEditorHtml()`





Returns the HTML for the element’s editor HUD.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1106)



#### Returns

[string](http://php.net/language.types.string) – The HTML for the editor HUD



### `getEnabledForSite()`



Since

:   3.4.0



Returns whether the element is enabled for the current site.

This can also be set to an array of site ID/site-enabled mappings.


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L671)


#### Arguments

- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The ID of the site to return for. If `null`, the current site status will be returned.

#### Returns

[boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the element is enabled for the given site. `null` will be returned if a `$siteId` was
passed, but that site’s status wasn’t provided via [setEnabledForSite()](craft-base-elementinterface.md#method-setenabledforsite).



### `getFieldColumnPrefix()`





Returns the field column prefix this element’s content uses.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L990)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldContext()`





Returns the field context this element’s content uses.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L997)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldLayout()`





Returns the field layout used by this element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L540)



#### Returns

[craft\models\FieldLayout](craft-models-fieldlayout.md), [null](http://php.net/language.types.null)



### `getFieldParamNamespace()`





Returns the namespace used by custom field params on the request.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L969)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The field param namespace



### `getFieldStatus()`



Since

:   3.4.0



Returns the status of a given field.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L924)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getFieldValue()`





Returns the value for a given field.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L907)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string)) – The field handle whose value needs to be returned

#### Returns

`mixed` – The field value



### `getFieldValues()`





Returns the element’s normalized custom field values, indexed by their handles.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L882)


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




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1114)



#### Returns

[string](http://php.net/language.types.string)



### `getHasDescendants()`





Returns whether the element has descendants.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L784)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getHasFreshContent()`





Returns whether the element’s content is "fresh" (unsaved and without validation errors).




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1046)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element’s content is fresh



### `getHtmlAttributes()`





Returns any attributes that should be included in the element’s DOM representation in the control panel.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::htmlAttributes()](craft-base-element.md#method-htmlattributes)
instead of this method.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1086)


#### Arguments

- `$context` ([string](http://php.net/language.types.string)) – The context that the element is being rendered in ('index', 'field', etc.)

#### Returns

[array](http://php.net/language.types.array)



### `getIsDraft()`



Since

:   3.2.0



Returns whether this is a draft.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L501)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsEditable()`





Returns whether the current user can edit the element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L625)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsHomepage()`



Since

:   3.3.6



Returns whether this element represents the site homepage.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L589)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsRevision()`



Since

:   3.2.0



Returns whether this is a revision.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L509)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsUnsavedDraft()`



Since

:   3.2.0



Returns whether the element is an unsaved draft.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L533)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getLink()`





Returns an anchor pre-filled with this element’s URL and title.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L603)



#### Returns

`\Twig\Markup`, [null](http://php.net/language.types.null)



### `getNext()`





Returns the next element relative to this one, from a given set of criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L696)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getNextSibling()`





Returns the element’s next sibling.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L777)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getParent()`





Returns the element’s parent.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L726)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPrev()`





Returns the previous element relative to this one, from a given set of criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L704)


#### Arguments

- `$criteria` (`mixed`)

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPrevSibling()`





Returns the element’s previous sibling.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L770)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `getPreviewTargets()`



Since

:   3.2.0



Returns the additional locations that should be available for previewing the element, besides its primary [URL](craft-base-elementinterface.md#method-geturl).

Each target should be represented by a sub-array with the following keys:

- `label` – What the preview target will be called in the control panel.
- `url` – The URL that the preview target should open.
- `refresh` – Whether preview frames should be automatically refreshed when content changes (`true` by default).

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::previewTargets()](craft-base-element.md#method-previewtargets)
instead of this method.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L651)



#### Returns

[array](http://php.net/language.types.array)



### `getRef()`





Returns the reference string to this element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L618)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getRoute()`





Returns the route that should be used when the element’s URI is requested.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::route()](craft-base-element.md#method-route)
instead of this method.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L581)



#### Returns

`mixed` – The route that the request should use, or null if no special action should be taken



### `getSearchKeywords()`





Returns the search keywords for a given search attribute.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L569)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `getSerializedFieldValues()`





Returns an array of the element’s serialized custom field values, indexed by their handles.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L892)


#### Arguments

- `$fieldHandles` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The list of field handles whose values
need to be returned. Defaults to null, meaning all fields’ values will be
returned. If it is an array, only the fields in the array will be returned.

#### Returns

[array](http://php.net/language.types.array)



### `getSiblings()`





Returns all of the element’s siblings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L763)



#### Returns

[craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `getSourceId()`



Since

:   3.2.0



Returns the element’s ID, or if it’s a draft/revision, its source element’s ID.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L517)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getSourceUid()`



Since

:   3.2.0



Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L525)



#### Returns

[string](http://php.net/language.types.string)



### `getStatus()`





Returns the element’s status.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L688)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSupportedSites()`





Returns the sites this element is associated with.

The function can either return an array of site IDs, or an array of sub-arrays,
each with the keys `siteId` (int) and `enabledByDefault` (boolean).


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L550)



#### Returns

[integer](http://php.net/language.types.integer)[], [array](http://php.net/language.types.array)



### `getTableAttributeHtml()`





Returns the HTML that should be shown for a given attribute in Table View.

::: tip
Element types that extend [craft\base\Element](craft-base-element.md) should override [craft\base\Element::tableAttributeHtml()](craft-base-element.md#method-tableattributehtml)
instead of this method.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1099)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for a given attribute in Table View.



### `getThumbUrl()`





Returns the URL to the element’s thumbnail, if there is one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L659)


#### Arguments

- `$size` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTotalDescendants()`





Returns the total number of descendants that the element has.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L791)



#### Returns

[integer](http://php.net/language.types.integer)



### `getUiLabel()`



Since

:   3.2.0



Returns what the element should be called within the control panel.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L611)



#### Returns

[string](http://php.net/language.types.string)



### `getUriFormat()`





Returns the URI format used to generate this element’s URI.

Note that element types that can have URIs must return `true` from [hasUris()](craft-base-elementinterface.md#method-hasuris).

See also:

- [hasUris()](craft-base-elementinterface.md#method-hasuris)
- [getRoute()](craft-base-elementinterface.md#method-getroute)

[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L561)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getUrl()`





Returns the element’s full URL.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L596)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `gqlScopesByContext()`



Since

:   3.3.0



Returns the GraphQL scopes required by element's context.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L484)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[array](http://php.net/language.types.array)



### `gqlTypeNameByContext()`



Since

:   3.3.0



Returns the GraphQL type name by an element's context.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L475)


#### Arguments

- `$context` (`mixed`) – The element's context, such as a Volume, Entry Type or Matrix Block Type.

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L71)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.



### `hasEagerLoadedElements()`





Returns whether elements have been eager-loaded with a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1005)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle of the eager-loaded elements

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements have been eager-loaded with the given handle



### `hasStatuses()`





Returns whether elements of this type have statuses.

If this returns `true`, the element index template will show a Status menu by default, and your elements will
get status indicator icons next to them.
Use [statuses()](craft-base-elementinterface.md#method-statuses) to customize which statuses the elements might have.

See also [statuses()](craft-base-elementinterface.md#method-statuses)
[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L110)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have statuses.



### `hasTitles()`





Returns whether elements of this type have traditional titles.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L78)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type have traditional titles.



### `hasUris()`





Returns whether elements of this type can have their own slugs and URIs.

Note that individual elements must also return a URI format from [getUriFormat()](craft-base-elementinterface.md#method-geturiformat) if they are to actually get a URI.

See also [getUriFormat()](craft-base-elementinterface.md#method-geturiformat)
[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L88)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type can have their own slugs and URIs.



### `indexHtml()`





Returns the element index HTML.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L355)


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



### `isAncestorOf()`





Returns whether this element is an ancestor of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L799)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isChildOf()`





Returns whether this element is a direct child of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L823)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isDescendantOf()`





Returns whether this element is a descendant of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L807)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFieldDirty()`



Since

:   3.4.0



Returns whether a custom field value has changed since the element was first loaded.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L933)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isLocalized()`





Returns whether elements of this type store content on a per-site basis.

If this returns `true`, the element’s [getSupportedSites()](craft-base-elementinterface.md#method-getsupportedsites) method will
be responsible for defining which sites its content should be stored in.


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L98)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type store data on a per-site basis.



### `isNextSiblingOf()`





Returns whether this element is the direct next sibling of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L847)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isParentOf()`





Returns whether this element is a direct parent of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L815)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isPrevSiblingOf()`





Returns whether this element is the direct previous sibling of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L839)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSiblingOf()`





Returns whether this element is a sibling of another one.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L831)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `lowerDisplayName()`



Since

:   3.3.17



Returns the lowercase version of [displayName()](craft-base-componentinterface.md#method-displayname).




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L30)



#### Returns

[string](http://php.net/language.types.string)



### `markAsClean()`



Since

:   3.4.0



Resets the record of dirty attributes and fields.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L955)






### `markAsDirty()`



Since

:   3.4.10



Marks all fields and attributes as dirty.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L948)






### `offsetExists()`





Treats custom fields as array offsets.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L855)


#### Arguments

- `$offset` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `pluralDisplayName()`



Since

:   3.2.0



Returns the plural version of [displayName()](craft-base-componentinterface.md#method-displayname).




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L38)



#### Returns

[string](http://php.net/language.types.string)



### `pluralLowerDisplayName()`



Since

:   3.3.17



Returns the plural, lowercase version of [displayName()](craft-base-componentinterface.md#method-displayname).




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L46)



#### Returns

[string](http://php.net/language.types.string)



### `refHandle()`





Returns the handle that should be used to refer to this element type from reference tags.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L53)



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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L341)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `setEagerLoadedElementCount()`



Since

:   3.4.0



Sets the count of eager-loaded elements for a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1039)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$count` ([integer](http://php.net/language.types.integer)) – The eager-loaded element count




### `setEagerLoadedElements()`





Sets some eager-loaded elements on a given handle.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1021)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The handle to load the elements with in the future
- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The eager-loaded elements




### `setEnabledForSite()`



Since

:   3.4.0



Sets whether the element is enabled for the current site.

This can also be set to an array of site ID/site-enabled mappings.


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L681)


#### Arguments

- `$enabledForSite` ([boolean](http://php.net/language.types.boolean), [boolean](http://php.net/language.types.boolean)[])




### `setFieldParamNamespace()`





Sets the namespace used by custom field params on the request.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L976)


#### Arguments

- `$namespace` ([string](http://php.net/language.types.string)) – The field param namespace




### `setFieldValue()`





Sets the value for a given field.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L915)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string)) – The field handle whose value needs to be set
- `$value` (`mixed`) – The value to set on the field




### `setFieldValues()`





Sets the element’s custom field values.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L899)


#### Arguments

- `$values` ([array](http://php.net/language.types.array)) – The custom field values (handle => value)




### `setFieldValuesFromRequest()`





Sets the element’s custom field values, when the values have come from post data.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L962)


#### Arguments

- `$paramNamespace` ([string](http://php.net/language.types.string)) – The field param namespace




### `setNext()`





Sets the default next element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L711)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean))




### `setParent()`





Sets the element’s parent.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L733)


#### Arguments

- `$parent` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null))




### `setPrev()`





Sets the default previous element.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L719)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean)) – Return void




### `setRevisionCreatorId()`



Since

:   3.2.0



Sets the revision creator ID to be saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1054)


#### Arguments

- `$creatorId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))




### `setRevisionNotes()`



Since

:   3.2.0



Sets the revision notes to be saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L1062)


#### Arguments

- `$notes` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))




### `sortOptions()`





Returns the sort options for the element type.

This method should return an array, where each item is a sub-array with the following keys:

- `label` – The sort option label
- `orderBy` – A comma-delimited string of columns to order the query by
- `attribute` _(optional)_ – The [table attribute](craft-base-elementinterface.md#method-tableattributes) name that this option is associated with

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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L390)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `sources()`





Returns the source definitions that elements of this type may belong to.

This defines what will show up in the source list on element indexes and element selector modals.

Each item in the array should be set to an array that has the following keys:
- **`key`** – The source’s key. This is the string that will be passed into the $source argument of [actions()](craft-base-elementinterface.md#method-actions),
  [indexHtml()](craft-base-elementinterface.md#method-indexhtml), and [defaultTableAttributes()](craft-base-elementinterface.md#method-defaulttableattributes).
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
  [getThumbUrl()](craft-base-elementinterface.md#method-getthumburl) method to define your elements’ thumb URL.) (Optional)
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


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L278)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `statuses()`





Returns all of the possible statuses that elements of this type may have.

This method will be called when populating the Status menu on element indexes, for element types whose
[hasStatuses()](craft-base-elementinterface.md#method-hasstatuses) method returns `true`. It will also be called when [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md) is querying for
elements, to ensure that its “status” parameter is set to a valid status.
It should return an array whose keys are the status values, and values are the human-facing status labels, or an array
with the following keys:
- **`label`** – The human-facing status label.
- **`color`** – The status color (green, orange, red, yellow, pink, purple, blue, turquoise, light, grey, black, or white)
You can customize the database query condition that should be applied for your custom statuses from
[craft\elements\db\ElementQuery::statusCondition()](craft-elements-db-elementquery.md#method-statuscondition).

See also [hasStatuses()](craft-base-elementinterface.md#method-hasstatuses)
[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L240)



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
cells. (The actual HTML to be shown can be customized with [getTableAttributeHtml()](craft-base-elementinterface.md#method-gettableattributehtml).)


[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L405)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `trackChanges()`



Since

:   3.4.0



Returns whether Craft should keep track of attribute and custom field changes made to this element type,
including when the last time they were changed, and who was logged-in at the time.



See also:

- [getDirtyAttributes()](craft-base-elementinterface.md#method-getdirtyattributes)
- [getDirtyFields()](craft-base-elementinterface.md#method-getdirtyfields)

[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementInterface.php#L64)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether to track changes made to elements of this type.









