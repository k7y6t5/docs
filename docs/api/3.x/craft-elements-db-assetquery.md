---
title: craft\elements\db\AssetQuery
code:
  - php
  - twig
---

# AssetQuery

Type

:   Class

Namespace

:   craft\elements\db

Inherits

:   [craft\elements\db\AssetQuery](craft-elements-db-assetquery.md) &raquo;
[craft\elements\db\ElementQuery](craft-elements-db-elementquery.md) &raquo;
[craft\db\Query](craft-db-query.md) &raquo;
[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\db\QueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait)

Since

:   3.0.0



AssetQuery represents a SELECT SQL statement for assets in a way that is independent of DBMS.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [ancestorDist](craft-elements-db-elementquery.md#ancestordist "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf](craft-elements-db-elementquery.md#ancestorof "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be an ancestor of.
| [archived](craft-elements-db-elementquery.md#archived "Defined by craft\elements\db\ElementQuery")                                     | [boolean](http://php.net/language.types.boolean) – Whether to return only archived elements.
| [asArray](craft-elements-db-elementquery.md#asarray "Defined by craft\elements\db\ElementQuery")                                       | [boolean](http://php.net/language.types.boolean) – Whether to return each element as an array.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedResult](craft-elements-db-elementquery.md#cachedresult "Defined by craft\elements\db\ElementQuery")                             | [craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed
| [contentTable](craft-elements-db-elementquery.md#contenttable "Defined by craft\elements\db\ElementQuery")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The content table that will be joined by this query.
| [criteria](craft-elements-db-elementquery.md#criteria "Defined by craft\elements\db\ElementQuery")                                     | [array](http://php.net/language.types.array)
| [customFields](craft-elements-db-elementquery.md#customfields "Defined by craft\elements\db\ElementQuery")                             | [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null) – The fields that may be involved in this query.
| [dateCreated](craft-elements-db-elementquery.md#datecreated "Defined by craft\elements\db\ElementQuery")                               | `mixed` – When the resulting elements must have been created.
| [dateModified](craft-elements-db-assetquery.md#datemodified)                                                                           | `mixed` – The Date Modified that the resulting assets must have.
| [dateUpdated](craft-elements-db-elementquery.md#dateupdated "Defined by craft\elements\db\ElementQuery")                               | `mixed` – When the resulting elements must have been last updated.
| [descendantDist](craft-elements-db-elementquery.md#descendantdist "Defined by craft\elements\db\ElementQuery")                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).
| [descendantOf](craft-elements-db-elementquery.md#descendantof "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be a descendant of.
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                           | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [draftCreator](craft-elements-db-elementquery.md#draftcreator "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The drafts’ creator ID
| [draftId](craft-elements-db-elementquery.md#draftid "Defined by craft\elements\db\ElementQuery")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft to return (from the `drafts` table)
| [draftOf](craft-elements-db-elementquery.md#draftof "Defined by craft\elements\db\ElementQuery")                                       | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The source element ID that drafts should be returned for.
| [drafts](craft-elements-db-elementquery.md#drafts "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether draft elements should be returned.
| [elementType](craft-elements-db-elementquery.md#elementtype "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the [craft\base\ElementInterface](craft-base-elementinterface.md) class.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait") | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [enabledForSite](craft-elements-db-elementquery.md#enabledforsite "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be enabled for the chosen site.
| [filename](craft-elements-db-assetquery.md#filename)                                                                                   | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The filename(s) that the resulting assets must have.
| [fixedOrder](craft-elements-db-elementquery.md#fixedorder "Defined by craft\elements\db\ElementQuery")                                 | [boolean](http://php.net/language.types.boolean) – Whether results should be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [folderId](craft-elements-db-assetquery.md#folderid)                                                                                   | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The asset folder ID(s) that the resulting assets must be in.
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                             | [array](http://php.net/language.types.array) – How to group the query results.
| [hasDescendants](craft-elements-db-elementquery.md#hasdescendants "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the resulting elements must have descendants.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                               | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [height](craft-elements-db-assetquery.md#height)                                                                                       | `mixed` – The height (in pixels) that the resulting assets must have.
| [id](craft-elements-db-elementquery.md#id "Defined by craft\elements\db\ElementQuery")                                                 | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The element ID(s).
| [ignorePlaceholders](craft-elements-db-elementquery.md#ignoreplaceholders "Defined by craft\elements\db\ElementQuery")                 | [boolean](http://php.net/language.types.boolean) – Whether to ignore placeholder elements when populating the results.
| [inReverse](craft-elements-db-elementquery.md#inreverse "Defined by craft\elements\db\ElementQuery")                                   | [boolean](http://php.net/language.types.boolean) – Whether the results should be queried in reverse.
| [includeSubfolders](craft-elements-db-assetquery.md#includesubfolders)                                                                 | [boolean](http://php.net/language.types.boolean) – Whether the query should search the subfolders of [folderId()](craft-elements-db-assetquery.md#method-folderid).
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                   | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [iterator](craft-elements-db-elementquery.md#iterator "Defined by craft\elements\db\ElementQuery")                                     | [ArrayIterator](http://php.net/class.arrayiterator)
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – How to join with other tables.
| [kind](craft-elements-db-assetquery.md#kind)                                                                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The file kind(s) that the resulting assets must be.
| [leaves](craft-elements-db-elementquery.md#leaves "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be “leaves” in the structure.
| [level](craft-elements-db-elementquery.md#level "Defined by craft\elements\db\ElementQuery")                                           | `mixed` – The element’s level within the structure
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                       | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [nextSiblingOf](craft-elements-db-elementquery.md#nextsiblingof "Defined by craft\elements\db\ElementQuery")                           | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the next sibling of.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                     | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [orderBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$orderBy-detail "Defined by yii\db\QueryTrait")                   | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [positionedAfter](craft-elements-db-elementquery.md#positionedafter "Defined by craft\elements\db\ElementQuery")                       | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned after.
| [positionedBefore](craft-elements-db-elementquery.md#positionedbefore "Defined by craft\elements\db\ElementQuery")                     | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned before.
| [preferSites](craft-elements-db-elementquery.md#prefersites "Defined by craft\elements\db\ElementQuery")                               | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Determines which site should be selected when querying multi-site elements.
| [prevSiblingOf](craft-elements-db-elementquery.md#prevsiblingof "Defined by craft\elements\db\ElementQuery")                           | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the previous sibling of.
| [query](craft-elements-db-elementquery.md#query "Defined by craft\elements\db\ElementQuery")                                           | [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null) – The query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDependency-detail "Defined by yii\db\Query")   | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this query
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDuration-detail "Defined by yii\db\Query")       | [integer](http://php.net/language.types.integer), [true](http://php.net/language.types.boolean) – The default number of seconds that query results can remain valid in cache.
| [rawSql](craft-db-query.md#rawsql "Defined by craft\db\Query")                                                                         | [string](http://php.net/language.types.string)
| [ref](craft-elements-db-elementquery.md#ref "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The reference code(s) used to identify the element(s).
| [relatedTo](craft-elements-db-elementquery.md#relatedto "Defined by craft\elements\db\ElementQuery")                                   | [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element relation criteria.
| [revisionCreator](craft-elements-db-elementquery.md#revisioncreator "Defined by craft\elements\db\ElementQuery")                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The revisions’ creator ID
| [revisionId](craft-elements-db-elementquery.md#revisionid "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the revision to return (from the `revisions` table)
| [revisionOf](craft-elements-db-elementquery.md#revisionof "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The source element ID that revisions should be returned for
| [revisions](craft-elements-db-elementquery.md#revisions "Defined by craft\elements\db\ElementQuery")                                   | [boolean](http://php.net/language.types.boolean) – Whether revision elements should be returned.
| [search](craft-elements-db-elementquery.md#search "Defined by craft\elements\db\ElementQuery")                                         | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](craft-search-searchquery.md), [null](http://php.net/language.types.null) – The search term to filter the resulting elements by.
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                   | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [siblingOf](craft-elements-db-elementquery.md#siblingof "Defined by craft\elements\db\ElementQuery")                                   | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be a sibling of.
| [siteId](craft-elements-db-elementquery.md#siteid "Defined by craft\elements\db\ElementQuery")                                         | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The site ID(s) that the elements should be returned in, or `'*'` if elements should be returned in all supported sites.
| [size](craft-elements-db-assetquery.md#size)                                                                                           | `mixed` – The size (in bytes) that the resulting assets must have.
| [slug](craft-elements-db-elementquery.md#slug "Defined by craft\elements\db\ElementQuery")                                             | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The slug that resulting elements must have.
| [status](craft-elements-db-elementquery.md#status "Defined by craft\elements\db\ElementQuery")                                         | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The status(es) that the resulting elements must have.
| [structureId](craft-elements-db-elementquery.md#structureid "Defined by craft\elements\db\ElementQuery")                               | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The structure ID that should be used to join in the structureelements table.
| [subQuery](craft-elements-db-elementquery.md#subquery "Defined by craft\elements\db\ElementQuery")                                     | [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null) – The subselect’s query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$tablesUsedInFrom-detail "Defined by yii\db\Query")           | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [title](craft-elements-db-elementquery.md#title "Defined by craft\elements\db\ElementQuery")                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The title that resulting elements must have.
| [trashed](craft-elements-db-elementquery.md#trashed "Defined by craft\elements\db\ElementQuery")                                       | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to return trashed (soft-deleted) elements.
| [uid](craft-elements-db-elementquery.md#uid "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The element UID(s).
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                 | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [unique](craft-elements-db-elementquery.md#unique "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether only elements with unique IDs should be returned by the query.
| [uploaderId](craft-elements-db-assetquery.md#uploaderid)                                                                               | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The user ID that the resulting assets must have been uploaded by.
| [uri](craft-elements-db-elementquery.md#uri "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The URI that the resulting element must have.
| [volumeId](craft-elements-db-assetquery.md#volumeid)                                                                                   | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The volume ID(s) that the resulting assets must be in.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [width](craft-elements-db-assetquery.md#width)                                                                                         | `mixed` – The width (in pixels) that the resulting assets must have.
| [with](craft-elements-db-elementquery.md#with "Defined by craft\elements\db\ElementQuery")                                             | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The eager-loading declaration.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                     | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.
| [withStructure](craft-elements-db-elementquery.md#withstructure "Defined by craft\elements\db\ElementQuery")                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether element structure data should automatically be left-joined into the query.
| [withTransforms](craft-elements-db-assetquery.md#withtransforms)                                                                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The asset transform indexes that should be eager-loaded, if they exist

### `dateModified`



Type

:   `mixed`



The Date Modified that the resulting assets must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L199)



### `filename`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The filename(s) that the resulting assets must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L103)



### `folderId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The asset folder ID(s) that the resulting assets must be in.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L90)



### `height`



Type

:   `mixed`



The height (in pixels) that the resulting assets must have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L187)


---

#### Example

::: code
```php{4}
// fetch images that are at least 500 pixels high
$images = \craft\elements\Asset::find()
    ->kind('image')
    ->height('>= 500')
    ->all();
```
```twig{4}
{# fetch images that are at least 500 pixes high #}
{% set logos = craft.assets()
    .kind('image')
    .height('>= 500')
    .all() %}
```
:::


### `includeSubfolders`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the query should search the subfolders of [folderId()](craft-elements-db-assetquery.md#method-folderid).



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L205)



### `kind`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The file kind(s) that the resulting assets must be.

Supported file kinds:
- access
- audio
- compressed
- excel
- flash
- html
- illustrator
- image
- javascript
- json
- pdf
- photoshop
- php
- powerpoint
- text
- video
- word
- xml
- unknown





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L145)


---

#### Example

::: code
```php
// fetch only images
$logos = \craft\elements\Asset::find()
    ->kind('image')
    ->all();
```
```twig
{# fetch only images #}
{% set logos = craft.assets()
    .kind('image')
    .all() %}
```
:::


### `size`



Type

:   `mixed`



The size (in bytes) that the resulting assets must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L193)



### `uploaderId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.4.0



The user ID that the resulting assets must have been uploaded by.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L97)



### `volumeId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The volume ID(s) that the resulting assets must be in.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L84)


---

#### Example

::: code
```php
// fetch assets in the Logos volume
$logos = \craft\elements\Asset::find()
    ->volume('logos')
    ->all();
```
```twig
{# fetch assets in the Logos volume #}
{% set logos = craft.assets()
    .volume('logos')
    .all() %}
```
:::


### `width`



Type

:   `mixed`



The width (in pixels) that the resulting assets must have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L166)


---

#### Example

::: code
```php{4}
// fetch images that are at least 500 pixels wide
$images = \craft\elements\Asset::find()
    ->kind('image')
    ->width('>= 500')
    ->all();
```
```twig{4}
{# fetch images that are at least 500 pixes wide #}
{% set logos = craft.assets()
    .kind('image')
    .width('>= 500')
    .all() %}
```
:::


### `withTransforms`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The asset transform indexes that should be eager-loaded, if they exist




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L226)


---

#### Example

::: code
```php{4}
// fetch images with their 'thumb' transforms preloaded
$images = \craft\elements\Asset::find()
    ->kind('image')
    ->withTransforms(['thumb'])
    ->all();
```
```twig{4}
{# fetch images with their 'thumb' transforms preloaded #}
{% set logos = craft.assets()
    .kind('image')
    .withTransforms(['thumb'])
    .all() %}
```
:::




## Protected Properties

| Property                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultOrderBy](craft-elements-db-elementquery.md#defaultorderby "Defined by craft\elements\db\ElementQuery") | [array](http://php.net/language.types.array) – The default [orderBy()](craft-elements-db-elementquery.md#method-orderby) value to use if [orderBy()](craft-elements-db-elementquery.md#method-orderby) is empty but not null.



## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-elements-db-elementquery.md#method-call "Defined by craft\elements\db\ElementQuery")                                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                 |
| [__construct()](craft-elements-db-elementquery.md#method-construct "Defined by craft\elements\db\ElementQuery")                             | Constructor
| [__get()](craft-elements-db-elementquery.md#method-get "Defined by craft\elements\db\ElementQuery")                                         | Returns the value of a component property.
| [__isset()](craft-elements-db-elementquery.md#method-isset "Defined by craft\elements\db\ElementQuery")                                     | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-elements-db-assetquery.md#method-set)                                                                                       | Sets the value of a component property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")               | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                           | Add more columns to the SELECT part of the query.
| [all()](craft-db-query.md#method-all "Defined by craft\db\Query")                                                                           | Executes the query and returns all results as an array.
| [ancestorDist()](craft-elements-db-elementquery.md#method-ancestordist "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof "Defined by craft\elements\db\ElementQuery")                             | Narrows the query results to only {elements} that are ancestors of another {element}.
| [andFilterCompare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterCompare()-detail "Defined by yii\db\Query")             | Adds a filtering condition for a specific column and allow the user to choose a filter operator.
| [andFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterHaving()-detail "Defined by yii\db\Query")               | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andFilterWhere()-detail "Defined by yii\db\QueryTrait")       | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andHaving()-detail "Defined by yii\db\Query")                           | Adds an additional HAVING condition to the existing one.
| [andWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andWhere()-detail "Defined by yii\db\QueryTrait")                   | Adds an additional WHERE condition to the existing one.
| [andWith()](craft-elements-db-elementquery.md#method-andwith "Defined by craft\elements\db\ElementQuery")                                   | Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](craft-elements-db-elementquery.md#method-with).
| [anyStatus()](craft-elements-db-elementquery.md#method-anystatus "Defined by craft\elements\db\ElementQuery")                               | Clears out the [status()](craft-elements-db-elementquery.md#method-status) and [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite) parameters.
| [archived()](craft-elements-db-elementquery.md#method-archived "Defined by craft\elements\db\ElementQuery")                                 | Sets the [archived](craft-elements-db-elementquery.md#archived) property.
| [asArray()](craft-elements-db-elementquery.md#method-asarray "Defined by craft\elements\db\ElementQuery")                                   | Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                   | Starts a batch query.
| [behaviors()](craft-db-query.md#method-behaviors "Defined by craft\db\Query")                                                               | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                   | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [clearCachedResult()](craft-elements-db-elementquery.md#method-clearcachedresult "Defined by craft\elements\db\ElementQuery")               | Clears the cached result.
| [column()](craft-db-query.md#method-column "Defined by craft\db\Query")                                                                     | Executes the query and returns the first column of the result.
| [count()](craft-elements-db-elementquery.md#method-count "Defined by craft\elements\db\ElementQuery")                                       | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                 | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail "Defined by yii\db\Query")                   | Creates a DB command that can be used to execute this query.
| [criteriaAttributes()](craft-elements-db-elementquery.md#method-criteriaattributes "Defined by craft\elements\db\ElementQuery")             | Returns the query's criteria attributes.
| [dateCreated()](craft-elements-db-elementquery.md#method-datecreated "Defined by craft\elements\db\ElementQuery")                           | Narrows the query results based on the {elements}’ creation dates.
| [dateModified()](craft-elements-db-assetquery.md#method-datemodified)                                                                       | Narrows the query results based on the assets’ files’ last-modified dates.
| [dateUpdated()](craft-elements-db-elementquery.md#method-dateupdated "Defined by craft\elements\db\ElementQuery")                           | Narrows the query results based on the {elements}’ last-updated dates.
| [descendantDist()](craft-elements-db-elementquery.md#method-descendantdist "Defined by craft\elements\db\ElementQuery")                     | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).
| [descendantOf()](craft-elements-db-elementquery.md#method-descendantof "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results to only {elements} that are descendants of another {element}.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [distinct()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#distinct()-detail "Defined by yii\db\Query")                             | Sets the value indicating whether to SELECT DISTINCT or not.
| [draftCreator()](craft-elements-db-elementquery.md#method-draftcreator "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results to only drafts created by a given user.
| [draftId()](craft-elements-db-elementquery.md#method-draftid "Defined by craft\elements\db\ElementQuery")                                   | Narrows the query results based on the {elements}’ draft’s ID (from the `drafts` table).
| [draftOf()](craft-elements-db-elementquery.md#method-draftof "Defined by craft\elements\db\ElementQuery")                                   | Narrows the query results to only drafts of a given {element}.
| [drafts()](craft-elements-db-elementquery.md#method-drafts "Defined by craft\elements\db\ElementQuery")                                     | Narrows the query results to only drafts {elements}.
| [each()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#each()-detail "Defined by yii\db\Query")                                     | Starts a batch query and retrieves data row by row.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite "Defined by craft\elements\db\ElementQuery")                     | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementquery.md#method-site) parameter.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](craft-db-query.md#method-exists "Defined by craft\db\Query")                                                                     | Returns a value indicating whether the query result contains any row of data.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait") | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")           | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [filename()](craft-elements-db-assetquery.md#method-filename)                                                                               | Narrows the query results based on the assets’ filenames.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [find()](craft-elements-db-elementquery.md#method-find "Defined by craft\elements\db\ElementQuery")                                         | Returns all elements that match the criteria.
| [first()](craft-elements-db-elementquery.md#method-first "Defined by craft\elements\db\ElementQuery")                                       | Returns the first element that matches the criteria.
| [fixedOrder()](craft-elements-db-elementquery.md#method-fixedorder "Defined by craft\elements\db\ElementQuery")                             | Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [folderId()](craft-elements-db-assetquery.md#method-folderid)                                                                               | Narrows the query results based on the folders the assets belong to, per the folders’ IDs.
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                     | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachedResult()](craft-elements-db-elementquery.md#method-getcachedresult "Defined by craft\elements\db\ElementQuery")                   | Returns the resulting elements set by [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult), if the criteria params haven’t changed since then.
| [getCriteria()](craft-elements-db-elementquery.md#method-getcriteria "Defined by craft\elements\db\ElementQuery")                           | Returns an array of the current criteria attribute values.
| [getIterator()](craft-elements-db-elementquery.md#method-getiterator "Defined by craft\elements\db\ElementQuery")                           | Required by the IteratorAggregate interface.
| [getRawSql()](craft-db-query.md#method-getrawsql "Defined by craft\db\Query")                                                               | Shortcut for `createCommand()->getRawSql()`.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getTablesUsedInFrom()-detail "Defined by yii\db\Query")       | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                               | Sets the GROUP BY part of the query.
| [hasDescendants()](craft-elements-db-elementquery.md#method-hasdescendants "Defined by craft\elements\db\ElementQuery")                     | Narrows the query results based on whether the {elements} have any descendants.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [having()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#having()-detail "Defined by yii\db\Query")                                 | Sets the HAVING part of the query.
| [height()](craft-elements-db-assetquery.md#method-height)                                                                                   | Narrows the query results based on the assets’ image heights.
| [id()](craft-elements-db-elementquery.md#method-id "Defined by craft\elements\db\ElementQuery")                                             | Narrows the query results based on the {elements}’ IDs.
| [ids()](craft-elements-db-elementquery.md#method-ids "Defined by craft\elements\db\ElementQuery")                                           | Executes the query and returns the IDs of the resulting elements.
| [ignorePlaceholders()](craft-elements-db-elementquery.md#method-ignoreplaceholders "Defined by craft\elements\db\ElementQuery")             | Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder elements that were set by [craft\services\Elements::setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement).
| [inReverse()](craft-elements-db-elementquery.md#method-inreverse "Defined by craft\elements\db\ElementQuery")                               | Causes the query results to be returned in reverse order.
| [includeSubfolders()](craft-elements-db-assetquery.md#method-includesubfolders)                                                             | Broadens the query results to include assets from any of the subfolders of the folder specified by [folderId()](craft-elements-db-assetquery.md#method-folderid).
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](craft-db-query.md#method-init "Defined by craft\db\Query")                                                                         | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                           | Appends an INNER JOIN part to the query.
| [isJoined()](craft-db-query.md#method-isjoined "Defined by craft\db\Query")                                                                 | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                     | Appends a JOIN part to the query.
| [kind()](craft-elements-db-assetquery.md#method-kind)                                                                                       | Narrows the query results based on the assets’ file kinds.
| [last()](craft-elements-db-elementquery.md#method-last "Defined by craft\elements\db\ElementQuery")                                         | Returns the last element that matches the criteria.
| [leaves()](craft-elements-db-elementquery.md#method-leaves "Defined by craft\elements\db\ElementQuery")                                     | Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                             | Appends a LEFT OUTER JOIN part to the query.
| [level()](craft-elements-db-elementquery.md#method-level "Defined by craft\elements\db\ElementQuery")                                       | Narrows the query results based on the {elements}’ level within the structure.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                         | Sets the LIMIT part of the query.
| [locale()](craft-elements-db-elementquery.md#method-locale "Defined by craft\elements\db\ElementQuery")                                     | Sets the `\craft\elements\db\$site` property.
| [localeEnabled()](craft-elements-db-elementquery.md#method-localeenabled "Defined by craft\elements\db\ElementQuery")                       | Sets the [enabledForSite](craft-elements-db-elementquery.md#enabledforsite) property.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                       | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                       | Returns the minimum of the specified column values.
| [nextSiblingOf()](craft-elements-db-elementquery.md#method-nextsiblingof "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results to only the {element} that comes immediately after another {element}.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                               | Disables query cache for this Query.
| [nth()](craft-db-query.md#method-nth "Defined by craft\db\Query")                                                                           | Executes the query and returns a single row of result at a given offset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                       | Sets the OFFSET part of the query.
| [offsetExists()](craft-elements-db-elementquery.md#method-offsetexists "Defined by craft\elements\db\ElementQuery")                         | Required by the ArrayAccess interface.
| [offsetGet()](craft-elements-db-elementquery.md#method-offsetget "Defined by craft\elements\db\ElementQuery")                               | Required by the ArrayAccess interface.
| [offsetSet()](craft-elements-db-elementquery.md#method-offsetset "Defined by craft\elements\db\ElementQuery")                               | Required by the ArrayAccess interface.
| [offsetUnset()](craft-elements-db-elementquery.md#method-offsetunset "Defined by craft\elements\db\ElementQuery")                           | Required by the ArrayAccess interface.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [one()](craft-db-query.md#method-one "Defined by craft\db\Query")                                                                           | Executes the query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                 | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")         | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                             | Adds an additional HAVING condition to the existing one.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orWhere()-detail "Defined by yii\db\QueryTrait")                     | Adds an additional WHERE condition to the existing one.
| [order()](craft-elements-db-elementquery.md#method-order "Defined by craft\elements\db\ElementQuery")                                       | Sets the [orderBy](craft-elements-db-elementquery.md#orderby) property.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the ORDER BY part of the query.
| [pairs()](craft-db-query.md#method-pairs "Defined by craft\db\Query")                                                                       | Executes the query and returns the first two columns in the results as key/value pairs.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                 | Sets the parameters to be bound to the query.
| [populate()](craft-elements-db-assetquery.md#method-populate)                                                                               | Converts the raw query results into the format as specified by this query.
| [positionedAfter()](craft-elements-db-elementquery.md#method-positionedafter "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only {elements} that are positioned after another {element}.
| [positionedBefore()](craft-elements-db-elementquery.md#method-positionedbefore "Defined by craft\elements\db\ElementQuery")                 | Narrows the query results to only {elements} that are positioned before another {element}.
| [preferSites()](craft-elements-db-elementquery.md#method-prefersites "Defined by craft\elements\db\ElementQuery")                           | If [unique()](craft-elements-db-elementquery.md#method-unique) is set, this determines which site should be selected when querying multi-site elements.
| [prepare()](craft-elements-db-elementquery.md#method-prepare "Defined by craft\elements\db\ElementQuery")                                   | Prepares for building SQL.
| [prevSiblingOf()](craft-elements-db-elementquery.md#method-prevsiblingof "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results to only the {element} that comes immediately before another {element}.
| [ref()](craft-elements-db-elementquery.md#method-ref "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on a reference string.
| [relatedTo()](craft-elements-db-elementquery.md#method-relatedto "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results to only {elements} that are related to certain other elements.
| [revisionCreator()](craft-elements-db-elementquery.md#method-revisioncreator "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only revisions created by a given user.
| [revisionId()](craft-elements-db-elementquery.md#method-revisionid "Defined by craft\elements\db\ElementQuery")                             | Narrows the query results based on the {elements}’ revision’s ID (from the `revisions` table).
| [revisionOf()](craft-elements-db-elementquery.md#method-revisionof "Defined by craft\elements\db\ElementQuery")                             | Narrows the query results to only revisions of a given {element}.
| [revisions()](craft-elements-db-elementquery.md#method-revisions "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results to only revision {elements}.
| [rightJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#rightJoin()-detail "Defined by yii\db\Query")                           | Appends a RIGHT OUTER JOIN part to the query.
| [scalar()](craft-db-query.md#method-scalar "Defined by craft\db\Query")                                                                     | Returns the query result as a scalar value.
| [search()](craft-elements-db-elementquery.md#method-search "Defined by craft\elements\db\ElementQuery")                                     | Narrows the query results to only {elements} that match a search query.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                 | Sets the SELECT part of the query.
| [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult "Defined by craft\elements\db\ElementQuery")                   | Sets the resulting elements.
| [siblingOf()](craft-elements-db-elementquery.md#method-siblingof "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results to only {elements} that are siblings of another {element}.
| [site()](craft-elements-db-elementquery.md#method-site "Defined by craft\elements\db\ElementQuery")                                         | Determines which site(s) the {elements} should be queried in.
| [siteId()](craft-elements-db-elementquery.md#method-siteid "Defined by craft\elements\db\ElementQuery")                                     | Determines which site(s) the {elements} should be queried in, per the site’s ID.
| [size()](craft-elements-db-assetquery.md#method-size)                                                                                       | Narrows the query results based on the assets’ file sizes (in bytes).
| [slug()](craft-elements-db-elementquery.md#method-slug "Defined by craft\elements\db\ElementQuery")                                         | Narrows the query results based on the {elements}’ slugs.
| [source()](craft-elements-db-assetquery.md#method-source)                                                                                   | Narrows the query results based on the volume the assets belong to.
| [sourceId()](craft-elements-db-assetquery.md#method-sourceid)                                                                               | Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs.
| [status()](craft-elements-db-elementquery.md#method-status "Defined by craft\elements\db\ElementQuery")                                     | Narrows the query results based on the {elements}’ statuses.
| [structureId()](craft-elements-db-elementquery.md#method-structureid "Defined by craft\elements\db\ElementQuery")                           | Determines which structure data should be joined into the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                       | Returns the sum of the specified column values.
| [title()](craft-elements-db-elementquery.md#method-title "Defined by craft\elements\db\ElementQuery")                                       | Narrows the query results based on the {elements}’ titles.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")         | Converts the model into an array.
| [total()](craft-elements-db-elementquery.md#method-total "Defined by craft\elements\db\ElementQuery")                                       | Returns the total elements that match the criteria.
| [trashed()](craft-elements-db-elementquery.md#method-trashed "Defined by craft\elements\db\ElementQuery")                                   | Narrows the query results to only {elements} that have been soft-deleted.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [uid()](craft-elements-db-elementquery.md#method-uid "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on the {elements}’ UIDs.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                   | Appends a SQL statement using UNION operator.
| [unique()](craft-elements-db-elementquery.md#method-unique "Defined by craft\elements\db\ElementQuery")                                     | Determines whether only elements with unique IDs should be returned by the query.
| [uploader()](craft-elements-db-assetquery.md#method-uploader)                                                                               | Narrows the query results based on the user the assets were uploaded by, per the user’s IDs.
| [uri()](craft-elements-db-elementquery.md#method-uri "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on the {elements}’ URIs.
| [volume()](craft-elements-db-assetquery.md#method-volume)                                                                                   | Narrows the query results based on the volume the assets belong to.
| [volumeId()](craft-elements-db-assetquery.md#method-volumeid)                                                                               | Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                         | Sets the WHERE part of the query.
| [width()](craft-elements-db-assetquery.md#method-width)                                                                                     | Narrows the query results based on the assets’ image widths.
| [with()](craft-elements-db-elementquery.md#method-with "Defined by craft\elements\db\ElementQuery")                                         | Causes the query to return matching {elements} eager-loaded with related elements.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                           | Prepends a SQL statement using WITH syntax.
| [withStructure()](craft-elements-db-elementquery.md#method-withstructure "Defined by craft\elements\db\ElementQuery")                       | Explicitly determines whether the query should join in the structure data.
| [withTransforms()](craft-elements-db-assetquery.md#method-withtransforms)                                                                   | Causes the query to return matching assets eager-loaded with image transform indexes.

### `__set()`





Sets the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a setter: set the property value
 - an event in the format of "on xyz": attach the handler to the event "xyz"
 - a behavior in the format of "as xyz": attach the behavior named as "xyz"
 - a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$component->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L231-L238)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `dateModified()`





Narrows the query results based on the assets’ files’ last-modified dates.

Possible values include:

| Value | Fetches assets…
| - | -
| `'>= 2018-04-01'` | that were modified on or after 2018-04-01.
| `'< 2018-05-01'` | that were modified before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were modified between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L694-L698)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets modified in the last month #}
{% set start = date('30 days ago')|atom %}

{% set {elements-var} = {twig-method}
    .dateModified(">= #{start}")
    .all() %}
```

```php
// Fetch assets modified in the last month
$start = (new \DateTime('30 days ago'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->dateModified(">= {$start}")
    ->all();
```
:::


### `filename()`





Narrows the query results based on the assets’ filenames.

Possible values include:

| Value | Fetches assets…
| - | -
| `'foo.jpg'` | with a filename of `foo.jpg`.
| `'foo*'` | with a filename that begins with `foo`.
| `'*.jpg'` | with a filename that ends with `.jpg`.
| `'*foo*'` | with a filename that contains `foo`.
| `'not *foo*'` | with a filename that doesn’t contain `foo`.
| `['*foo*', '*bar*']` | with a filename that contains `foo` or `bar`.
| `['not', '*foo*', '*bar*']` | with a filename that doesn’t contain `foo` or `bar`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L479-L483)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all the hi-res images #}
{% set {elements-var} = {twig-method}
    .filename('*@2x*')
    .all() %}
```

```php
// Fetch all the hi-res images
${elements-var} = {php-method}
    ->filename('*@2x*')
    ->all();
```
:::


### `folderId()`





Narrows the query results based on the folders the assets belong to, per the folders’ IDs.

Possible values include:

| Value | Fetches assets…
| - | -
| `1` | in a folder with an ID of 1.
| `'not 1'` | not in a folder with an ID of 1.
| `[1, 2]` | in a folder with an ID of 1 or 2.
| `['not', 1, 2]` | not in a folder with an ID of 1 or 2.





::: tip
This can be combined with [includeSubfolders()](craft-elements-db-assetquery.md#method-includesubfolders) if you want to include assets in all the subfolders of a certain folder.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L395-L399)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets in the folder with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .folderId(1)
    .all() %}
```

```php
// Fetch assets in the folder with an ID of 1
${elements-var} = {php-method}
    ->folderId(1)
    ->all();
```
:::


### `height()`





Narrows the query results based on the assets’ image heights.

Possible values include:

| Value | Fetches assets…
| - | -
| `100` | with a height of 100.
| `'>= 100'` | with a height of at least 100.
| `['>= 100', '<= 1000']` | with a height between 100 and 1,000.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L616-L620)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch XL images #}
{% set {elements-var} = {twig-method}
    .kind('image')
    .height('>= 1000')
    .all() %}
```

```php
// Fetch XL images
${elements-var} = {php-method}
    ->kind('image')
    ->height('>= 1000')
    ->all();
```
:::


### `includeSubfolders()`





Broadens the query results to include assets from any of the subfolders of the folder specified by [folderId()](craft-elements-db-assetquery.md#method-folderid).





::: warning
This will only work if [folderId()](craft-elements-db-assetquery.md#method-folderid) was set to a single folder ID.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L731-L735)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets in the folder with an ID of 1 (including its subfolders) #}
{% set {elements-var} = {twig-method}
    .folderId(1)
    .includeSubfolders()
    .all() %}
```

```php
// Fetch assets in the folder with an ID of 1 (including its subfolders)
${elements-var} = {php-method}
    ->folderId(1)
    ->includeSubfolders()
    ->all();
```
:::


### `kind()`





Narrows the query results based on the assets’ file kinds.

Supported file kinds:
- `access`
- `audio`
- `compressed`
- `excel`
- `flash`
- `html`
- `illustrator`
- `image`
- `javascript`
- `json`
- `pdf`
- `photoshop`
- `php`
- `powerpoint`
- `text`
- `video`
- `word`
- `xml`
- `unknown`

Possible values include:

| Value | Fetches assets…
| - | -
| `'image'` | with a file kind of `image`.
| `'not image'` | not with a file kind of `image`..
| `['image', 'pdf']` | with a file kind of `image` or `pdf`.
| `['not', 'image', 'pdf']` | not with a file kind of `image` or `pdf`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L538-L542)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all the images #}
{% set {elements-var} = {twig-method}
    .kind('image')
    .all() %}
```

```php
// Fetch all the images
${elements-var} = {php-method}
    ->kind('image')
    ->all();
```
:::


### `populate()`





Converts the raw query results into the format as specified by this query.



This method is internally used to convert the data fetched from database
into the format as required by this query.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L774-L789)


#### Arguments

- `$rows` ([array](http://php.net/language.types.array)) – The raw query result from database

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[], [array](http://php.net/language.types.array) – The resulting elements.



### `size()`





Narrows the query results based on the assets’ file sizes (in bytes).

Possible values include:

| Value | Fetches assets…
| - | -
| `1000` | with a size of 1,000 bytes (1KB).
| `'< 1000000'` | with a size of less than 1,000,000 bytes (1MB).
| `['>= 1000', '< 1000000']` | with a size between 1KB and 1MB.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L653-L657)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets that are smaller than 1KB #}
{% set {elements-var} = {twig-method}
    .size('< 1000')
    .all() %}
```

```php
// Fetch assets that are smaller than 1KB
${elements-var} = {php-method}
    ->size('< 1000')
    ->all();
```
:::


### `source()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [volume()](craft-elements-db-assetquery.md#method-volume) instead.
:::




Narrows the query results based on the volume the assets belong to.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L298-L303)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\base\Volume](craft-base-volume.md)) – The property value

#### Returns

`static` – Self reference



### `sourceId()`

::: danger DEPRECATED
Deprecated in Craft 3.0.0. Use [volumeId()](craft-elements-db-assetquery.md#method-volumeid) instead.
:::




Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L350-L355)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[]) – The property value

#### Returns

`static` – Self reference



### `uploader()`



Since

:   3.4.0



Narrows the query results based on the user the assets were uploaded by, per the user’s IDs.

Possible values include:

| Value | Fetches assets…
| - | -
| `1` | uploaded by the user with an ID of 1.
| a [craft\elements\User](craft-elements-user.md) object | uploaded by the user represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L432-L442)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets uploaded by the user with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .uploader(1)
    .all() %}
```

```php
// Fetch assets uploaded by the user with an ID of 1
${elements-var} = {php-method}
    ->uploader(1)
    ->all();
```
:::


### `volume()`





Narrows the query results based on the volume the assets belong to.

Possible values include:

| Value | Fetches assets…
| - | -
| `'foo'` | in a volume with a handle of `foo`.
| `'not foo'` | not in a volume with a handle of `foo`.
| `['foo', 'bar']` | in a volume with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not in a volume with a handle of `foo` or `bar`.
| a [Volume](craft-base-volume.md) object | in a volume represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L273-L289)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\base\Volume](craft-base-volume.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets in the Foo volume #}
{% set {elements-var} = {twig-method}
    .volume('foo')
    .all() %}
```

```php
// Fetch assets in the Foo group
${elements-var} = {php-method}
    ->volume('foo')
    ->all();
```
:::


### `volumeId()`





Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs.

Possible values include:

| Value | Fetches assets…
| - | -
| `1` | in a volume with an ID of 1.
| `'not 1'` | not in a volume with an ID of 1.
| `[1, 2]` | in a volume with an ID of 1 or 2.
| `['not', 1, 2]` | not in a volume with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L337-L341)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch assets in the volume with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .volumeId(1)
    .all() %}
```

```php
// Fetch assets in the volume with an ID of 1
${elements-var} = {php-method}
    ->volumeId(1)
    ->all();
```
:::


### `width()`





Narrows the query results based on the assets’ image widths.

Possible values include:

| Value | Fetches assets…
| - | -
| `100` | with a width of 100.
| `'>= 100'` | with a width of at least 100.
| `['>= 100', '<= 1000']` | with a width between 100 and 1,000.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L577-L581)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch XL images #}
{% set {elements-var} = {twig-method}
    .kind('image')
    .width('>= 1000')
    .all() %}
```

```php
// Fetch XL images
${elements-var} = {php-method}
    ->kind('image')
    ->width('>= 1000')
    ->all();
```
:::


### `withTransforms()`





Causes the query to return matching assets eager-loaded with image transform indexes.

This can improve performance when displaying several image transforms at once, if the transforms
have already been generated.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L765-L769)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The transforms to include.

#### Returns

`self` – The query object itself


---

#### Example

::: code
```twig
{# Fetch assets with the 'thumbnail' and 'hiResThumbnail' transform data preloaded #}
{% set {elements-var} = {twig-method}
    .kind('image')
    .withTransforms(['thumbnail', 'hiResThumbnail'])
    .all() %}
```

```php
// Fetch assets with the 'thumbnail' and 'hiResThumbnail' transform data preloaded
${elements-var} = {php-method}
    ->kind('image')
    ->withTransforms(['thumbnail', 'hiResThumbnail'])
    ->all();
```
:::




## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterPrepare()](craft-elements-db-elementquery.md#method-afterprepare "Defined by craft\elements\db\ElementQuery")                                       | This method is called at the end of preparing an element query for the query builder.
| [beforePrepare()](craft-elements-db-assetquery.md#method-beforeprepare)                                                                                   | This method is called at the beginning of preparing an element query for the query builder.
| [cleanUpTableNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cleanUpTableNames()-detail "Defined by yii\db\Query")                         | Clean up table names and aliases Both aliases and names are enclosed into {{ and }}.
| [customFields()](craft-elements-db-elementquery.md#method-customfields "Defined by craft\elements\db\ElementQuery")                                       | Returns the fields that should take part in an upcoming elements query.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")     | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")   | Extracts the root field names from nested fields.
| [filterCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterCondition()-detail "Defined by yii\db\QueryTrait")                   | Removes [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail) from the given query condition.
| [getUnaliasedColumnsFromSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUnaliasedColumnsFromSelect()-detail "Defined by yii\db\Query") |
| [getUniqueColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUniqueColumns()-detail "Defined by yii\db\Query")                           | Returns unique column names excluding duplicates.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail "Defined by yii\db\QueryTrait")                                   | Returns a value indicating whether the give value is "empty".
| [joinElementTable()](craft-elements-db-elementquery.md#method-joinelementtable "Defined by craft\elements\db\ElementQuery")                               | Joins in a table with an `id` column that has a foreign key pointing to `craft_elements`.`id`.
| [normalizeOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#normalizeOrderBy()-detail "Defined by yii\db\QueryTrait")                 | Normalizes format of ORDER BY data.
| [normalizeSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#normalizeSelect()-detail "Defined by yii\db\Query")                             | Normalizes the SELECT columns passed to [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) or [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail).
| [queryScalar()](craft-db-query.md#method-queryscalar "Defined by craft\db\Query")                                                                         | Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")           | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [setCommandCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#setCommandCache()-detail "Defined by yii\db\Query")                             | Sets $command cache, if this query has enabled caching.
| [statusCondition()](craft-elements-db-elementquery.md#method-statuscondition "Defined by craft\elements\db\ElementQuery")                                 | Returns the condition that should be applied to the element query for a given status.

### `beforePrepare()`





This method is called at the beginning of preparing an element query for the query builder.



The main Query object being prepared for the query builder is available via [query](craft-elements-db-elementquery.md#query).
The subselect’s Query object being prepared is available via [subQuery](craft-elements-db-elementquery.md#subquery).
The role of the subselect query is to apply conditions to the query and narrow the result set down to
just the elements that should actually be returned.
The role of the main query is to join in any tables that should be included in the results, and select
all of the columns that should be included in the results.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/AssetQuery.php#L794-L874)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query should be prepared and returned to the query builder.
If false, the query will be cancelled and no results will be returned.








