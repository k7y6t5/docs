---
title: craft\elements\db\ElementQuery
code:
  - php
  - twig
---

# ElementQuery

Type

:   Class

Namespace

:   craft\elements\db

Inherits

:   [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md) &raquo;
[craft\db\Query](craft-db-query.md) &raquo;
[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\db\QueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait)

Extended by

:   [craft\elements\db\AssetQuery](craft-elements-db-assetquery.md), [craft\elements\db\CategoryQuery](craft-elements-db-categoryquery.md), [craft\elements\db\EntryQuery](craft-elements-db-entryquery.md), [craft\elements\db\GlobalSetQuery](craft-elements-db-globalsetquery.md), [craft\elements\db\MatrixBlockQuery](craft-elements-db-matrixblockquery.md), [craft\elements\db\TagQuery](craft-elements-db-tagquery.md), [craft\elements\db\UserQuery](craft-elements-db-userquery.md)

Since

:   3.0.0



ElementQuery represents a SELECT SQL statement for elements in a way that is independent of DBMS.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [ancestorDist](craft-elements-db-elementquery.md#ancestordist)                                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf](craft-elements-db-elementquery.md#ancestorof)                                                                             | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be an ancestor of.
| [archived](craft-elements-db-elementquery.md#archived)                                                                                 | [boolean](http://php.net/language.types.boolean) – Whether to return only archived elements.
| [asArray](craft-elements-db-elementquery.md#asarray)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether to return each element as an array.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedResult](craft-elements-db-elementquery.md#cachedresult)                                                                         | [craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed
| [contentTable](craft-elements-db-elementquery.md#contenttable)                                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The content table that will be joined by this query.
| [criteria](craft-elements-db-elementquery.md#criteria)                                                                                 | [array](http://php.net/language.types.array)
| [customFields](craft-elements-db-elementquery.md#customfields)                                                                         | [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null) – The fields that may be involved in this query.
| [dateCreated](craft-elements-db-elementquery.md#datecreated)                                                                           | `mixed` – When the resulting elements must have been created.
| [dateUpdated](craft-elements-db-elementquery.md#dateupdated)                                                                           | `mixed` – When the resulting elements must have been last updated.
| [descendantDist](craft-elements-db-elementquery.md#descendantdist)                                                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).
| [descendantOf](craft-elements-db-elementquery.md#descendantof)                                                                         | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be a descendant of.
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                           | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [draftCreator](craft-elements-db-elementquery.md#draftcreator)                                                                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The drafts’ creator ID
| [draftId](craft-elements-db-elementquery.md#draftid)                                                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft to return (from the `drafts` table)
| [draftOf](craft-elements-db-elementquery.md#draftof)                                                                                   | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The source element ID that drafts should be returned for.
| [drafts](craft-elements-db-elementquery.md#drafts)                                                                                     | [boolean](http://php.net/language.types.boolean) – Whether draft elements should be returned.
| [elementType](craft-elements-db-elementquery.md#elementtype)                                                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the [craft\base\ElementInterface](craft-base-elementinterface.md) class.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait") | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [enabledForSite](craft-elements-db-elementquery.md#enabledforsite)                                                                     | [boolean](http://php.net/language.types.boolean) – Whether the elements must be enabled for the chosen site.
| [fixedOrder](craft-elements-db-elementquery.md#fixedorder)                                                                             | [boolean](http://php.net/language.types.boolean) – Whether results should be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                             | [array](http://php.net/language.types.array) – How to group the query results.
| [hasDescendants](craft-elements-db-elementquery.md#hasdescendants)                                                                     | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the resulting elements must have descendants.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                               | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [id](craft-elements-db-elementquery.md#id)                                                                                             | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The element ID(s).
| [ignorePlaceholders](craft-elements-db-elementquery.md#ignoreplaceholders)                                                             | [boolean](http://php.net/language.types.boolean) – Whether to ignore placeholder elements when populating the results.
| [inReverse](craft-elements-db-elementquery.md#inreverse)                                                                               | [boolean](http://php.net/language.types.boolean) – Whether the results should be queried in reverse.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                   | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [iterator](craft-elements-db-elementquery.md#iterator)                                                                                 | [ArrayIterator](http://php.net/class.arrayiterator)
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – How to join with other tables.
| [leaves](craft-elements-db-elementquery.md#leaves)                                                                                     | [boolean](http://php.net/language.types.boolean) – Whether the elements must be “leaves” in the structure.
| [level](craft-elements-db-elementquery.md#level)                                                                                       | `mixed` – The element’s level within the structure
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                       | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [nextSiblingOf](craft-elements-db-elementquery.md#nextsiblingof)                                                                       | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the next sibling of.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                     | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [orderBy](craft-elements-db-elementquery.md#orderby)                                                                                   | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [positionedAfter](craft-elements-db-elementquery.md#positionedafter)                                                                   | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned after.
| [positionedBefore](craft-elements-db-elementquery.md#positionedbefore)                                                                 | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned before.
| [preferSites](craft-elements-db-elementquery.md#prefersites)                                                                           | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Determines which site should be selected when querying multi-site elements.
| [prevSiblingOf](craft-elements-db-elementquery.md#prevsiblingof)                                                                       | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the previous sibling of.
| [query](craft-elements-db-elementquery.md#query)                                                                                       | [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null) – The query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDependency-detail "Defined by yii\db\Query")   | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this query
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDuration-detail "Defined by yii\db\Query")       | [integer](http://php.net/language.types.integer), [true](http://php.net/language.types.boolean) – The default number of seconds that query results can remain valid in cache.
| [rawSql](craft-db-query.md#rawsql "Defined by craft\db\Query")                                                                         | [string](http://php.net/language.types.string)
| [ref](craft-elements-db-elementquery.md#ref)                                                                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The reference code(s) used to identify the element(s).
| [relatedTo](craft-elements-db-elementquery.md#relatedto)                                                                               | [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element relation criteria.
| [revisionCreator](craft-elements-db-elementquery.md#revisioncreator)                                                                   | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The revisions’ creator ID
| [revisionId](craft-elements-db-elementquery.md#revisionid)                                                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the revision to return (from the `revisions` table)
| [revisionOf](craft-elements-db-elementquery.md#revisionof)                                                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The source element ID that revisions should be returned for
| [revisions](craft-elements-db-elementquery.md#revisions)                                                                               | [boolean](http://php.net/language.types.boolean) – Whether revision elements should be returned.
| [search](craft-elements-db-elementquery.md#search)                                                                                     | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](craft-search-searchquery.md), [null](http://php.net/language.types.null) – The search term to filter the resulting elements by.
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                   | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [siblingOf](craft-elements-db-elementquery.md#siblingof)                                                                               | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be a sibling of.
| [siteId](craft-elements-db-elementquery.md#siteid)                                                                                     | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The site ID(s) that the elements should be returned in, or `'*'` if elements should be returned in all supported sites.
| [slug](craft-elements-db-elementquery.md#slug)                                                                                         | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The slug that resulting elements must have.
| [status](craft-elements-db-elementquery.md#status)                                                                                     | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The status(es) that the resulting elements must have.
| [structureId](craft-elements-db-elementquery.md#structureid)                                                                           | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The structure ID that should be used to join in the structureelements table.
| [subQuery](craft-elements-db-elementquery.md#subquery)                                                                                 | [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null) – The subselect’s query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$tablesUsedInFrom-detail "Defined by yii\db\Query")           | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [title](craft-elements-db-elementquery.md#title)                                                                                       | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The title that resulting elements must have.
| [trashed](craft-elements-db-elementquery.md#trashed)                                                                                   | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to return trashed (soft-deleted) elements.
| [uid](craft-elements-db-elementquery.md#uid)                                                                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The element UID(s).
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                 | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [unique](craft-elements-db-elementquery.md#unique)                                                                                     | [boolean](http://php.net/language.types.boolean) – Whether only elements with unique IDs should be returned by the query.
| [uri](craft-elements-db-elementquery.md#uri)                                                                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The URI that the resulting element must have.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [with](craft-elements-db-elementquery.md#with)                                                                                         | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The eager-loading declaration.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                     | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.
| [withStructure](craft-elements-db-elementquery.md#withstructure)                                                                       | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether element structure data should automatically be left-joined into the query.

### `ancestorDist`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The maximum number of levels that results may be separated from [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L368)



### `ancestorOf`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that results must be an ancestor of.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L362)



### `archived`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to return only archived elements.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L212)



### `asArray`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to return each element as an array. If false (default), an object
of [elementType](craft-elements-db-elementquery.md#elementtype) will be created to represent each element.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L120)



### `cachedResult`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null)



$elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php)



### `contentTable`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The content table that will be joined by this query.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L99)



### `criteria`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php)



### `customFields`



Type

:   [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null)



The fields that may be involved in this query.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L104)



### `dateCreated`



Type

:   `mixed`



When the resulting elements must have been created.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L226)



### `dateUpdated`



Type

:   `mixed`



When the resulting elements must have been last updated.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L232)



### `descendantDist`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The maximum number of levels that results may be separated from [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L380)



### `descendantOf`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that results must be a descendant of.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L374)



### `draftCreator`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The drafts’ creator ID



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L155)



### `draftId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The ID of the draft to return (from the `drafts` table)



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L142)



### `draftOf`



Type

:   [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Since

:   3.2.0



The source element ID that drafts should be returned for.
Set to `false` to fetch unsaved drafts.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L149)



### `drafts`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether draft elements should be returned.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L136)



### `elementType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The name of the [craft\base\ElementInterface](craft-base-elementinterface.md) class.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L82)



### `enabledForSite`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the elements must be enabled for the chosen site.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L260)



### `fixedOrder`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether results should be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L200)



### `hasDescendants`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Since

:   3.0.4



Whether the resulting elements must have descendants.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L356)



### `id`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



The element ID(s). Prefix IDs with `'not '` to exclude them.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L188)



### `ignorePlaceholders`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.9



Whether to ignore placeholder elements when populating the results.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L127)



### `inReverse`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the results should be queried in reverse.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L113)



### `iterator`



Type

:   [ArrayIterator](http://php.net/class.arrayiterator)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php)



### `leaves`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the elements must be “leaves” in the structure.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L266)



### `level`



Type

:   `mixed`



The element’s level within the structure



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L349)



### `nextSiblingOf`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that the result must be the next sibling of.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L398)



### `orderBy`



Type

:   [array](http://php.net/language.types.array)





How to sort the query results. This is used to construct the ORDER BY clause in a SQL statement.
The array keys are the columns to be sorted by, and the array values are the corresponding sort directions which
can be either [SORT_ASC](https://secure.php.net/manual/en/array.constants.php#constant.sort-asc)
or [SORT_DESC](https://secure.php.net/manual/en/array.constants.php#constant.sort-desc).
The array may also contain [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) objects. If that is the case, the expressions
will be converted into strings without any change.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L328)



### `positionedAfter`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that the results must be positioned after.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L410)



### `positionedBefore`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that the results must be positioned before.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L404)



### `preferSites`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Since

:   3.2.0



Determines which site should be selected when querying multi-site elements.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L254)



### `prevSiblingOf`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that the result must be the previous sibling of.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L392)



### `query`



Type

:   [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null)



The query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)

See also [prepare()](craft-elements-db-elementquery.md#method-prepare)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L88)



### `ref`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The reference code(s) used to identify the element(s).

This property is set when accessing elements via their reference tags, e.g. `{entry:section/slug}`.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L311)



### `relatedTo`



Type

:   [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element relation criteria.

See [Relations](https://docs.craftcms.com/v3/relations.html) for supported syntax options.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L275)



### `revisionCreator`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The revisions’ creator ID



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L179)



### `revisionId`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The ID of the revision to return (from the `revisions` table)



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L167)



### `revisionOf`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The source element ID that revisions should be returned for



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L173)



### `revisions`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether revision elements should be returned.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L161)



### `search`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](craft-search-searchquery.md), [null](http://php.net/language.types.null)



The search term to filter the resulting elements by.

See [Searching](https://docs.craftcms.com/v3/searching.html) for supported syntax options.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L302)



### `siblingOf`



Type

:   [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



The element (or its ID) that the results must be a sibling of.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L386)



### `siteId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The site ID(s) that the elements should be returned in, or `'*'` if elements
should be returned in all supported sites.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L240)



### `slug`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The slug that resulting elements must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L287)



### `status`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The status(es) that the resulting elements must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L206)



### `structureId`



Type

:   [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



The structure ID that should be used to join in the structureelements table.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L343)



### `subQuery`



Type

:   [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null)



The subselect’s query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)

See also [prepare()](craft-elements-db-elementquery.md#method-prepare)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L94)



### `title`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The title that resulting elements must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L281)



### `trashed`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Since

:   3.1.0



Whether to return trashed (soft-deleted) elements.
If this is set to `null`, then both trashed and non-trashed elements will be returned.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L220)



### `uid`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The element UID(s). Prefix UIDs with `'not '` to exclude them.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L194)



### `unique`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.2.0



Whether only elements with unique IDs should be returned by the query.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L247)



### `uri`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The URI that the resulting element must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L293)



### `with`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



The eager-loading declaration.

See [Eager-Loading Elements](https://docs.craftcms.com/v3/eager-loading-elements.html) for supported syntax options.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L321)



### `withStructure`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether element structure data should automatically be left-joined into the query.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L337)





## Protected Properties

| Property                                                           | Description
| ------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultOrderBy](craft-elements-db-elementquery.md#defaultorderby) | [array](http://php.net/language.types.array) – The default [orderBy()](craft-elements-db-elementquery.md#method-orderby) value to use if [orderBy()](craft-elements-db-elementquery.md#method-orderby) is empty but not null.

### `defaultOrderBy`



Type

:   [array](http://php.net/language.types.array)



The default [orderBy()](craft-elements-db-elementquery.md#method-orderby) value to use if [orderBy()](craft-elements-db-elementquery.md#method-orderby) is empty but not null.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L415)





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-elements-db-elementquery.md#method-call)                                                                                   | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                 |
| [__construct()](craft-elements-db-elementquery.md#method-construct)                                                                         | Constructor
| [__get()](craft-elements-db-elementquery.md#method-get)                                                                                     | Returns the value of a component property.
| [__isset()](craft-elements-db-elementquery.md#method-isset)                                                                                 | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-elements-db-elementquery.md#method-set)                                                                                     | Sets the value of a component property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](craft-elements-db-elementquery.md#method-addorderby)                                                                         | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                           | Add more columns to the SELECT part of the query.
| [all()](craft-elements-db-elementquery.md#method-all)                                                                                       | Executes the query and returns all results as an array.
| [ancestorDist()](craft-elements-db-elementquery.md#method-ancestordist)                                                                     | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof)                                                                         | Narrows the query results to only {elements} that are ancestors of another {element}.
| [andFilterCompare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterCompare()-detail "Defined by yii\db\Query")             | Adds a filtering condition for a specific column and allow the user to choose a filter operator.
| [andFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterHaving()-detail "Defined by yii\db\Query")               | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andFilterWhere()-detail "Defined by yii\db\QueryTrait")       | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andHaving()-detail "Defined by yii\db\Query")                           | Adds an additional HAVING condition to the existing one.
| [andWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andWhere()-detail "Defined by yii\db\QueryTrait")                   | Adds an additional WHERE condition to the existing one.
| [andWith()](craft-elements-db-elementquery.md#method-andwith)                                                                               | Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](craft-elements-db-elementquery.md#method-with).
| [anyStatus()](craft-elements-db-elementquery.md#method-anystatus)                                                                           | Clears out the [status()](craft-elements-db-elementquery.md#method-status) and [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite) parameters.
| [archived()](craft-elements-db-elementquery.md#method-archived)                                                                             | Sets the [archived](craft-elements-db-elementquery.md#archived) property.
| [asArray()](craft-elements-db-elementquery.md#method-asarray)                                                                               | Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                   | Starts a batch query.
| [behaviors()](craft-elements-db-elementquery.md#method-behaviors)                                                                           | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                   | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [clearCachedResult()](craft-elements-db-elementquery.md#method-clearcachedresult)                                                           | Clears the cached result.
| [column()](craft-elements-db-elementquery.md#method-column)                                                                                 | Executes the query and returns the first column of the result.
| [count()](craft-elements-db-elementquery.md#method-count)                                                                                   | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                 | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail "Defined by yii\db\Query")                   | Creates a DB command that can be used to execute this query.
| [criteriaAttributes()](craft-elements-db-elementquery.md#method-criteriaattributes)                                                         | Returns the query's criteria attributes.
| [dateCreated()](craft-elements-db-elementquery.md#method-datecreated)                                                                       | Narrows the query results based on the {elements}’ creation dates.
| [dateUpdated()](craft-elements-db-elementquery.md#method-dateupdated)                                                                       | Narrows the query results based on the {elements}’ last-updated dates.
| [descendantDist()](craft-elements-db-elementquery.md#method-descendantdist)                                                                 | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).
| [descendantOf()](craft-elements-db-elementquery.md#method-descendantof)                                                                     | Narrows the query results to only {elements} that are descendants of another {element}.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [distinct()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#distinct()-detail "Defined by yii\db\Query")                             | Sets the value indicating whether to SELECT DISTINCT or not.
| [draftCreator()](craft-elements-db-elementquery.md#method-draftcreator)                                                                     | Narrows the query results to only drafts created by a given user.
| [draftId()](craft-elements-db-elementquery.md#method-draftid)                                                                               | Narrows the query results based on the {elements}’ draft’s ID (from the `drafts` table).
| [draftOf()](craft-elements-db-elementquery.md#method-draftof)                                                                               | Narrows the query results to only drafts of a given {element}.
| [drafts()](craft-elements-db-elementquery.md#method-drafts)                                                                                 | Narrows the query results to only drafts {elements}.
| [each()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#each()-detail "Defined by yii\db\Query")                                     | Starts a batch query and retrieves data row by row.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite)                                                                 | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementquery.md#method-site) parameter.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](craft-elements-db-elementquery.md#method-exists)                                                                                 | Returns a value indicating whether the query result contains any row of data.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait") | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-elements-db-elementquery.md#method-fields)                                                                                 | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [find()](craft-elements-db-elementquery.md#method-find)                                                                                     | Returns all elements that match the criteria.
| [first()](craft-elements-db-elementquery.md#method-first)                                                                                   | Returns the first element that matches the criteria.
| [fixedOrder()](craft-elements-db-elementquery.md#method-fixedorder)                                                                         | Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                     | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachedResult()](craft-elements-db-elementquery.md#method-getcachedresult)                                                               | Returns the resulting elements set by [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult), if the criteria params haven’t changed since then.
| [getCriteria()](craft-elements-db-elementquery.md#method-getcriteria)                                                                       | Returns an array of the current criteria attribute values.
| [getIterator()](craft-elements-db-elementquery.md#method-getiterator)                                                                       | Required by the IteratorAggregate interface.
| [getRawSql()](craft-db-query.md#method-getrawsql "Defined by craft\db\Query")                                                               | Shortcut for `createCommand()->getRawSql()`.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getTablesUsedInFrom()-detail "Defined by yii\db\Query")       | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                               | Sets the GROUP BY part of the query.
| [hasDescendants()](craft-elements-db-elementquery.md#method-hasdescendants)                                                                 | Narrows the query results based on whether the {elements} have any descendants.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [having()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#having()-detail "Defined by yii\db\Query")                                 | Sets the HAVING part of the query.
| [id()](craft-elements-db-elementquery.md#method-id)                                                                                         | Narrows the query results based on the {elements}’ IDs.
| [ids()](craft-elements-db-elementquery.md#method-ids)                                                                                       | Executes the query and returns the IDs of the resulting elements.
| [ignorePlaceholders()](craft-elements-db-elementquery.md#method-ignoreplaceholders)                                                         | Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder elements that were set by [craft\services\Elements::setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement).
| [inReverse()](craft-elements-db-elementquery.md#method-inreverse)                                                                           | Causes the query results to be returned in reverse order.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](craft-db-query.md#method-init "Defined by craft\db\Query")                                                                         | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                           | Appends an INNER JOIN part to the query.
| [isJoined()](craft-db-query.md#method-isjoined "Defined by craft\db\Query")                                                                 | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                     | Appends a JOIN part to the query.
| [last()](craft-elements-db-elementquery.md#method-last)                                                                                     | Returns the last element that matches the criteria.
| [leaves()](craft-elements-db-elementquery.md#method-leaves)                                                                                 | Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                             | Appends a LEFT OUTER JOIN part to the query.
| [level()](craft-elements-db-elementquery.md#method-level)                                                                                   | Narrows the query results based on the {elements}’ level within the structure.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                         | Determines the number of {elements} that should be returned.
| [locale()](craft-elements-db-elementquery.md#method-locale)                                                                                 | Sets the `\craft\elements\db\$site` property.
| [localeEnabled()](craft-elements-db-elementquery.md#method-localeenabled)                                                                   | Sets the [enabledForSite](craft-elements-db-elementquery.md#enabledforsite) property.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                       | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                       | Returns the minimum of the specified column values.
| [nextSiblingOf()](craft-elements-db-elementquery.md#method-nextsiblingof)                                                                   | Narrows the query results to only the {element} that comes immediately after another {element}.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                               | Disables query cache for this Query.
| [nth()](craft-elements-db-elementquery.md#method-nth)                                                                                       | Executes the query and returns a single row of result at a given offset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                       | Determines how many {elements} should be skipped in the results.
| [offsetExists()](craft-elements-db-elementquery.md#method-offsetexists)                                                                     | Required by the ArrayAccess interface.
| [offsetGet()](craft-elements-db-elementquery.md#method-offsetget)                                                                           | Required by the ArrayAccess interface.
| [offsetSet()](craft-elements-db-elementquery.md#method-offsetset)                                                                           | Required by the ArrayAccess interface.
| [offsetUnset()](craft-elements-db-elementquery.md#method-offsetunset)                                                                       | Required by the ArrayAccess interface.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [one()](craft-elements-db-elementquery.md#method-one)                                                                                       | Executes the query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                 | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")         | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                             | Adds an additional HAVING condition to the existing one.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orWhere()-detail "Defined by yii\db\QueryTrait")                     | Adds an additional WHERE condition to the existing one.
| [order()](craft-elements-db-elementquery.md#method-order)                                                                                   | Sets the [orderBy](craft-elements-db-elementquery.md#orderby) property.
| [orderBy()](craft-elements-db-elementquery.md#method-orderby)                                                                               | Sets the ORDER BY part of the query.
| [pairs()](craft-db-query.md#method-pairs "Defined by craft\db\Query")                                                                       | Executes the query and returns the first two columns in the results as key/value pairs.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                 | Sets the parameters to be bound to the query.
| [populate()](craft-elements-db-elementquery.md#method-populate)                                                                             | Converts the raw query results into the format as specified by this query.
| [positionedAfter()](craft-elements-db-elementquery.md#method-positionedafter)                                                               | Narrows the query results to only {elements} that are positioned after another {element}.
| [positionedBefore()](craft-elements-db-elementquery.md#method-positionedbefore)                                                             | Narrows the query results to only {elements} that are positioned before another {element}.
| [preferSites()](craft-elements-db-elementquery.md#method-prefersites)                                                                       | If [unique()](craft-elements-db-elementquery.md#method-unique) is set, this determines which site should be selected when querying multi-site elements.
| [prepare()](craft-elements-db-elementquery.md#method-prepare)                                                                               | Prepares for building SQL.
| [prevSiblingOf()](craft-elements-db-elementquery.md#method-prevsiblingof)                                                                   | Narrows the query results to only the {element} that comes immediately before another {element}.
| [ref()](craft-elements-db-elementquery.md#method-ref)                                                                                       | Narrows the query results based on a reference string.
| [relatedTo()](craft-elements-db-elementquery.md#method-relatedto)                                                                           | Narrows the query results to only {elements} that are related to certain other elements.
| [revisionCreator()](craft-elements-db-elementquery.md#method-revisioncreator)                                                               | Narrows the query results to only revisions created by a given user.
| [revisionId()](craft-elements-db-elementquery.md#method-revisionid)                                                                         | Narrows the query results based on the {elements}’ revision’s ID (from the `revisions` table).
| [revisionOf()](craft-elements-db-elementquery.md#method-revisionof)                                                                         | Narrows the query results to only revisions of a given {element}.
| [revisions()](craft-elements-db-elementquery.md#method-revisions)                                                                           | Narrows the query results to only revision {elements}.
| [rightJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#rightJoin()-detail "Defined by yii\db\Query")                           | Appends a RIGHT OUTER JOIN part to the query.
| [scalar()](craft-db-query.md#method-scalar "Defined by craft\db\Query")                                                                     | Returns the query result as a scalar value.
| [search()](craft-elements-db-elementquery.md#method-search)                                                                                 | Narrows the query results to only {elements} that match a search query.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                 | Sets the SELECT part of the query.
| [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult)                                                               | Sets the resulting elements.
| [siblingOf()](craft-elements-db-elementquery.md#method-siblingof)                                                                           | Narrows the query results to only {elements} that are siblings of another {element}.
| [site()](craft-elements-db-elementquery.md#method-site)                                                                                     | Determines which site(s) the {elements} should be queried in.
| [siteId()](craft-elements-db-elementquery.md#method-siteid)                                                                                 | Determines which site(s) the {elements} should be queried in, per the site’s ID.
| [slug()](craft-elements-db-elementquery.md#method-slug)                                                                                     | Narrows the query results based on the {elements}’ slugs.
| [status()](craft-elements-db-elementquery.md#method-status)                                                                                 | Narrows the query results based on the {elements}’ statuses.
| [structureId()](craft-elements-db-elementquery.md#method-structureid)                                                                       | Determines which structure data should be joined into the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                       | Returns the sum of the specified column values.
| [title()](craft-elements-db-elementquery.md#method-title)                                                                                   | Narrows the query results based on the {elements}’ titles.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")         | Converts the model into an array.
| [total()](craft-elements-db-elementquery.md#method-total)                                                                                   | Returns the total elements that match the criteria.
| [trashed()](craft-elements-db-elementquery.md#method-trashed)                                                                               | Narrows the query results to only {elements} that have been soft-deleted.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [uid()](craft-elements-db-elementquery.md#method-uid)                                                                                       | Narrows the query results based on the {elements}’ UIDs.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                   | Appends a SQL statement using UNION operator.
| [unique()](craft-elements-db-elementquery.md#method-unique)                                                                                 | Determines whether only elements with unique IDs should be returned by the query.
| [uri()](craft-elements-db-elementquery.md#method-uri)                                                                                       | Narrows the query results based on the {elements}’ URIs.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                         | Sets the WHERE part of the query.
| [with()](craft-elements-db-elementquery.md#method-with)                                                                                     | Causes the query to return matching {elements} eager-loaded with related elements.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                           | Prepends a SQL statement using WITH syntax.
| [withStructure()](craft-elements-db-elementquery.md#method-withstructure)                                                                   | Explicitly determines whether the query should join in the structure data.

### `__call()`





Calls the named method which is not a class method.



This method will check if any attached behavior has
the named method and will execute it if available.

Do not call this method directly as it is a PHP magic method that
will be implicitly called when an unknown method is being invoked.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L534-L549)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The method name
- `$params` ([array](http://php.net/language.types.array)) – Method parameters

#### Returns

`mixed` – The method return value

#### Throws

- [yii\base\UnknownMethodException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownmethodexception)\
  when calling unknown method


### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L455-L463)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class associated with this query
- `$config` ([array](http://php.net/language.types.array)) – Configurations to be applied to the newly created query object




### `__get()`





Returns the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a getter: return the getter result
 - a property of a behavior: return the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$value = $component->property;`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L482-L503)


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





Checks if a property is set, i.e. defined and not null.



This method will check in the following order and act accordingly:

 - a property defined by a setter: return whether the property is set
 - a property of a behavior: return whether the property is set
 - return `false` for non existing properties

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `isset($component->property)`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L468-L477)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the named property is set



### `__set()`





Sets the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a setter: set the property value
 - an event in the format of "on xyz": attach the handler to the event "xyz"
 - a behavior in the format of "as xyz": attach the behavior named as "xyz"
 - a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$component->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L508-L529)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `addOrderBy()`





Adds additional ORDER BY columns to the query.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L858-L874)


#### Arguments

- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The columns (and the directions) to be ordered by.
Columns can be specified in either a string (e.g. "id ASC, name DESC") or an array
(e.g. `['id' => SORT_ASC, 'name' => SORT_DESC]`).

The method will automatically quote the column names unless a column contains some parenthesis
(which means the column contains a DB expression).

Note that if your order-by is an expression containing commas, you should always use an array
to represent the order-by information. Otherwise, the method will not be able to correctly determine
the order-by columns.

Since version 2.0.7, an [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) object can be passed to specify the ORDER BY part explicitly in plain SQL.

#### Returns

[$this](craft-elements-db-elementquery.md) – The query object itself



### `all()`





Executes the query and returns all results as an array.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1461-L1472)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array) – The query results. If the query results in nothing, an empty array will be returned.



### `ancestorDist()`





Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1182-L1186)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} above this one #}
{% set {elements-var} = {twig-method}
    .ancestorOf({myElement})
    .ancestorDist(3)
    .all() %}
```

```php
// Fetch {elements} above this one
${elements-var} = {php-method}
    ->ancestorOf(${myElement})
    ->ancestorDist(3)
    ->all();
```
:::


### `ancestorOf()`





Narrows the query results to only {elements} that are ancestors of another {element}.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | above the {element} with an ID of 1.
| a [[{element-class}]] object | above the {element} represented by the object.





::: tip
This can be combined with [ancestorDist()](craft-elements-db-elementquery.md#method-ancestordist) if you want to limit how far away the ancestor {elements} can be.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1172-L1176)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} above this one #}
{% set {elements-var} = {twig-method}
    .ancestorOf({myElement})
    .all() %}
```

```php
// Fetch {elements} above this one
${elements-var} = {php-method}
    ->ancestorOf(${myElement})
    ->all();
```
:::


### `andWith()`



Since

:   3.0.9



Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](craft-elements-db-elementquery.md#method-with).



.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1105-L1116)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The property value to append

#### Returns

`self` – The query object itself



### `anyStatus()`



Since

:   3.0.17



Clears out the [status()](craft-elements-db-elementquery.md#method-status) and [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite) parameters.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1261-L1266)



#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all {elements}, regardless of status #}
{% set {elements-var} = {twig-method}
    .anyStatus()
    .all() %}
```

```php
// Fetch all {elements}, regardless of status
${elements-var} = {php-method}
    ->anyStatus()
    ->all();
```
:::


### `archived()`





Sets the [archived](craft-elements-db-elementquery.md#archived) property.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L890-L894)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `asArray()`





Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L674-L678)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} as arrays #}
{% set {elements-var} = {twig-method}
    .asArray()
    .all() %}
```

```php
// Fetch {elements} as arrays
${elements-var} = {php-method}
    ->asArray()
    ->all();
```
:::


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

Note that a behavior class must extend from `\craft\elements\db\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L646-L655)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `clearCachedResult()`



Since

:   3.4.0



Clears the cached result.



See also:

- [getCachedResult()](craft-elements-db-elementquery.md#method-getcachedresult)
- [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1601-L1604)






### `column()`



Since

:   3.3.16.2



Executes the query and returns the first column of the result.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1498-L1513)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[array](http://php.net/language.types.array) – The first column of the query result. An empty array is returned if the query results in nothing.



### `count()`





Returns the number of records.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1448-L1456)


#### Arguments

- `$q` ([string](http://php.net/language.types.string)) – The COUNT expression. Defaults to '*'.
Make sure you properly [quote](guide:db-dao#quoting-table-and-column-names) column names in the expression.
- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given (or null), the `db` application component will be used.

#### Returns

[integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string) – Number of records. The result may be a string depending on the
underlying database engine and to support integer values higher than a 32bit PHP integer can handle.



### `criteriaAttributes()`





Returns the query's criteria attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1626-L1645)



#### Returns

[string](http://php.net/language.types.string)[]



### `dateCreated()`





Narrows the query results based on the {elements}’ creation dates.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'>= 2018-04-01'` | that were created on or after 2018-04-01.
| `'< 2018-05-01'` | that were created before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were created between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L910-L914)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} created last month #}
{% set start = date('first day of last month')|atom %}
{% set end = date('first day of this month')|atom %}

{% set {elements-var} = {twig-method}
    .dateCreated(['and', ">= #{start}", "< #{end}"])
    .all() %}
```

```php
// Fetch {elements} created last month
$start = (new \DateTime('first day of last month'))->format(\DateTime::ATOM);
$end = (new \DateTime('first day of this month'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->dateCreated(['and', ">= {$start}", "< {$end}"])
    ->all();
```
:::


### `dateUpdated()`





Narrows the query results based on the {elements}’ last-updated dates.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'>= 2018-04-01'` | that were updated on or after 2018-04-01.
| `'< 2018-05-01'` | that were updated before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were updated between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L920-L924)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} updated in the last week #}
{% set lastWeek = date('1 week ago')|atom %}

{% set {elements-var} = {twig-method}
    .dateUpdated(">= #{lastWeek}")
    .all() %}
```

```php
// Fetch {elements} updated in the last week
$lastWeek = (new \DateTime('1 week ago'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->dateUpdated(">= {$lastWeek}")
    ->all();
```
:::


### `descendantDist()`





Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1202-L1206)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} below this one #}
{% set {elements-var} = {twig-method}
    .descendantOf({myElement})
    .descendantDist(3)
    .all() %}
```

```php
// Fetch {elements} below this one
${elements-var} = {php-method}
    ->descendantOf(${myElement})
    ->descendantDist(3)
    ->all();
```
:::


### `descendantOf()`





Narrows the query results to only {elements} that are descendants of another {element}.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | below the {element} with an ID of 1.
| a [[{element-class}]] object | below the {element} represented by the object.





::: tip
This can be combined with [descendantDist()](craft-elements-db-elementquery.md#method-descendantdist) if you want to limit how far away the descendant {elements} can be.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1192-L1196)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} below this one #}
{% set {elements-var} = {twig-method}
    .descendantOf({myElement})
    .all() %}
```

```php
// Fetch {elements} below this one
${elements-var} = {php-method}
    ->descendantOf(${myElement})
    ->all();
```
:::


### `draftCreator()`



Since

:   3.2.0



Narrows the query results to only drafts created by a given user.



Possible values include:

| Value | Fetches drafts…
| - | -
| `1` | created by the user with an ID of 1.
| a [craft\elements\User](craft-elements-user.md) object | created by the user represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L736-L747)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch drafts by the current user #}
{% set {elements-var} = {twig-method}
    .draftCreator(currentUser)
    .all() %}
```

```php
// Fetch drafts by the current user
${elements-var} = {php-method}
    ->draftCreator(Craft::$app->user->identity)
    ->all();
```
:::


### `draftId()`



Since

:   3.2.0



Narrows the query results based on the {elements}’ draft’s ID (from the `drafts` table).



Possible values include:

| Value | Fetches drafts…
| - | -
| `1` | for the draft with an ID of 1.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L705-L710)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch a draft #}
{% set {elements-var} = {twig-method}
    .draftId(10)
    .all() %}
```

```php
// Fetch a draft
${elements-var} = {php-method}
    ->draftId(10)
    ->all();
```
:::


### `draftOf()`



Since

:   3.2.0



Narrows the query results to only drafts of a given {element}.



Possible values include:

| Value | Fetches drafts…
| - | -
| `1` | for the {element} with an ID of 1.
| a [[{element-class}]] object | for the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L717-L729)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch drafts of the {element} #}
{% set {elements-var} = {twig-method}
    .draftOf({myElement})
    .all() %}
```

```php
// Fetch drafts of the {element}
${elements-var} = {php-method}
    ->draftOf(${myElement})
    ->all();
```
:::


### `drafts()`



Since

:   3.2.0



Narrows the query results to only drafts {elements}.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L694-L698)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch a draft {element} #}
{% set {elements-var} = {twig-function}
    .drafts()
    .id(123)
    .one() %}
```

```php
// Fetch a draft {element}
${elements-var} = {element-class}::find()
    ->drafts()
    ->id(123)
    ->one();
```
:::


### `enabledForSite()`





Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementquery.md#method-site) parameter.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `true` _(default)_ | that are enabled in the site.
| `false` | whether they are enabled or not in the site.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1011-L1015)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all {elements}, including ones disabled for this site #}
{% set {elements-var} = {twig-method}
    .enabledForSite(false)
    .all() %}
```

```php
// Fetch all {elements}, including ones disabled for this site
${elements-var} = {php-method}
    ->enabledForSite(false)
    ->all();
```
:::


### `exists()`





Returns a value indicating whether the query result contains any row of data.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1518-L1521)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query result contains any row of data.



### `fields()`





Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.

A field is a named element in the returned array by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
This method should return an array of field names or field definitions.
If the former, the field name will be treated as an object property name whose value will be used
as the field value. If the latter, the array key should be the field name while the array value should be
the corresponding field definition which can be either an object property name or a PHP callable
returning the corresponding field value. The signature of the callable should be:

```php
function ($model, $field) {
    // return field value
}
```

For example, the following code declares four fields:

- `email`: the field name is the same as the property name `email`;
- `firstName` and `lastName`: the field names are `firstName` and `lastName`, and their
  values are obtained from the `first_name` and `last_name` properties;
- `fullName`: the field name is `fullName`. Its value is obtained by concatenating `first_name`
  and `last_name`.

```php
return [
    'email',
    'firstName' => 'first_name',
    'lastName' => 'last_name',
    'fullName' => function ($model) {
        return $model->first_name . ' ' . $model->last_name;
    },
];
```

See also [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1688-L1698)



#### Returns

[array](http://php.net/language.types.array) – The list of field names or field definitions.



### `find()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use all() instead.
:::




Returns all elements that match the criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1828-L1834)


#### Arguments

- `$attributes` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – Any last-minute parameters that should be added.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[] – The matched elements.



### `first()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use one() instead.
:::




Returns the first element that matches the criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1843-L1849)


#### Arguments

- `$attributes` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `fixedOrder()`





Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L832-L836)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} in a specific order #}
{% set {elements-var} = {twig-method}
    .id([1, 2, 3, 4, 5])
    .fixedOrder()
    .all() %}
```

```php
// Fetch {elements} in a specific order
${elements-var} = {php-method}
    ->id([1, 2, 3, 4, 5])
    ->fixedOrder()
    ->all();
```
:::


### `getCachedResult()`





Returns the resulting elements set by [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult), if the criteria params haven’t changed since then.



See also [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult)
[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1564-L1577)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed



### `getCriteria()`





Returns an array of the current criteria attribute values.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1611-L1619)



#### Returns

[array](http://php.net/language.types.array)



### `getIterator()`





Required by the IteratorAggregate interface.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L556-L560)



#### Returns

[ArrayIterator](http://php.net/class.arrayiterator)



### `hasDescendants()`



Since

:   3.0.4



Narrows the query results based on whether the {elements} have any descendants.



(This has the opposite effect of calling [leaves()](craft-elements-db-elementquery.md#method-leaves).)




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1152-L1156)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} that have descendants #}
{% set {elements-var} = {twig-method}
    .hasDescendants()
    .all() %}
```

```php
// Fetch {elements} that have descendants
${elements-var} = {php-method}
    ->hasDescendants()
    ->all();
```
:::


### `id()`





Narrows the query results based on the {elements}’ IDs.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | with an ID of 1.
| `'not 1'` | not with an ID of 1.
| `[1, 2]` | with an ID of 1 or 2.
| `['not', 1, 2]` | not with an ID of 1 or 2.





::: tip
This can be combined with [fixedOrder()](craft-elements-db-elementquery.md#method-fixedorder) if you want the results to be returned in a specific order.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L812-L816)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch the {element} by its ID #}
{% set {element-var} = {twig-method}
    .id(1)
    .one() %}
```

```php
// Fetch the {element} by its ID
${element-var} = {php-method}
    ->id(1)
    ->one();
```
:::


### `ids()`





Executes the query and returns the IDs of the resulting elements.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1541-L1556)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[integer](http://php.net/language.types.integer)[] – The resulting element IDs. An empty array is returned if no elements are found.



### `ignorePlaceholders()`



Since

:   3.2.9



Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder
elements that were set by [craft\services\Elements::setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement).








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L684-L688)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `inReverse()`





Causes the query results to be returned in reverse order.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L664-L668)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} in reverse #}
{% set {elements-var} = {twig-method}
    .inReverse()
    .all() %}
```

```php
// Fetch {elements} in reverse
${elements-var} = {php-method}
    ->inReverse()
    ->all();
```
:::


### `last()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use nth() instead.
:::




Returns the last element that matches the criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1858-L1869)


#### Arguments

- `$attributes` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)



### `leaves()`





Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).



(This has the opposite effect of calling [hasDescendants()](craft-elements-db-elementquery.md#method-hasdescendants).)




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1162-L1166)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} that have no descendants #}
{% set {elements-var} = {twig-method}
    .leaves()
    .all() %}
```

```php
// Fetch {elements} that have no descendants
${elements-var} = {php-method}
    ->leaves()
    ->all();
```
:::


### `level()`





Narrows the query results based on the {elements}’ level within the structure.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | with a level of 1.
| `'not 1'` | not with a level of 1.
| `'>= 3'` | with a level greater than or equal to 3.
| `[1, 2]` | with a level of 1 or 2
| `['not', 1, 2]` | not with level of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1142-L1146)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} positioned at level 3 or above #}
{% set {elements-var} = {twig-method}
    .level('>= 3')
    .all() %}
```

```php
// Fetch {elements} positioned at level 3 or above
${elements-var} = {php-method}
    ->level('>= 3')
    ->all();
```
:::


### `locale()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [site()](craft-elements-db-elementquery.md#method-site) or [siteId()](craft-elements-db-elementquery.md#method-siteid) instead.
:::




Sets the `\craft\elements\db\$site` property.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L978-L983)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The property value

#### Returns

`static` – Self reference



### `localeEnabled()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite) instead.
:::




Sets the [enabledForSite](craft-elements-db-elementquery.md#enabledforsite) property.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1024-L1029)


#### Arguments

- `$value` (`mixed`) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `nextSiblingOf()`





Narrows the query results to only the {element} that comes immediately after another {element}.



Possible values include:

| Value | Fetches the {element}…
| - | -
| `1` | after the {element} with an ID of 1.
| a [[{element-class}]] object | after the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1232-L1236)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch the next {element} #}
{% set {element-var} = {twig-method}
    .nextSiblingOf({myElement})
    .one() %}
```

```php
// Fetch the next {element}
${element-var} = {php-method}
    ->nextSiblingOf(${myElement})
    ->one();
```
:::


### `nth()`





Executes the query and returns a single row of result at a given offset.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1528-L1536)


#### Arguments

- `$n` ([integer](http://php.net/language.types.integer)) – The offset of the row to return. If [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail) is set, $offset will be added to it.
- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The element. Null is returned if the query
results in nothing.



### `offsetExists()`





Required by the ArrayAccess interface.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L568-L592)


#### Arguments

- `$name` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)) – The offset to check

#### Returns

[boolean](http://php.net/language.types.boolean)



### `offsetGet()`





Required by the ArrayAccess interface.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L600-L608)


#### Arguments

- `$name` ([integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)) – The offset to get

#### Returns

`mixed` – The element at the given offset



### `offsetSet()`





Required by the ArrayAccess interface.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L617-L625)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The offset to set
- `$value` (`mixed`) – The value


#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if $name is numeric


### `offsetUnset()`





Required by the ArrayAccess interface.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L633-L641)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The offset to unset


#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if $name is numeric


### `one()`





Executes the query and returns a single row of result.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1479-L1492)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The first element. Null is returned if the query
results in nothing.



### `order()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use [orderBy()](craft-elements-db-elementquery.md#method-orderby) instead.
:::




Sets the [orderBy](craft-elements-db-elementquery.md#orderby) property.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1814-L1819)


#### Arguments

- `$value` ([string](http://php.net/language.types.string)) – The property value

#### Returns

`static` – Self reference



### `orderBy()`





Sets the ORDER BY part of the query.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L842-L852)


#### Arguments

- `$columns` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The columns (and the directions) to be ordered by.
Columns can be specified in either a string (e.g. `"id ASC, name DESC"`) or an array
(e.g. `['id' => SORT_ASC, 'name' => SORT_DESC]`).

The method will automatically quote the column names unless a column contains some parenthesis
(which means the column contains a DB expression).

Note that if your order-by is an expression containing commas, you should always use an array
to represent the order-by information. Otherwise, the method will not be able to correctly determine
the order-by columns.

Since version 2.0.7, an [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) object can be passed to specify the ORDER BY part explicitly in plain SQL.

#### Returns

[$this](craft-elements-db-elementquery.md) – The query object itself



### `populate()`





Converts the raw query results into the format as specified by this query.



This method is internally used to convert the data fetched from database
into the format as required by this query.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1427-L1443)


#### Arguments

- `$rows` ([array](http://php.net/language.types.array)) – The raw query result from database

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[], [array](http://php.net/language.types.array) – The resulting elements.



### `positionedAfter()`





Narrows the query results to only {elements} that are positioned after another {element}.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | after the {element} with an ID of 1.
| a [[{element-class}]] object | after the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1252-L1256)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} after this one #}
{% set {elements-var} = {twig-method}
    .positionedAfter({myElement})
    .all() %}
```

```php
// Fetch {elements} after this one
${elements-var} = {php-method}
    ->positionedAfter(${myElement})
    ->all();
```
:::


### `positionedBefore()`





Narrows the query results to only {elements} that are positioned before another {element}.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | before the {element} with an ID of 1.
| a [[{element-class}]] object | before the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1242-L1246)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} before this one #}
{% set {elements-var} = {twig-method}
    .positionedBefore({myElement})
    .all() %}
```

```php
// Fetch {elements} before this one
${elements-var} = {php-method}
    ->positionedBefore(${myElement})
    ->all();
```
:::


### `preferSites()`



Since

:   3.2.0



If [unique()](craft-elements-db-elementquery.md#method-unique) is set, this determines which site should be selected when querying multi-site elements.



For example, if element “Foo” exists in Site A and Site B, and element “Bar” exists in Site B and Site C,
and this is set to `['c', 'b', 'a']`, then Foo will be returned for Site C, and Bar will be returned
for Site B.

If this isn’t set, then preference goes to the current site.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1001-L1005)


#### Arguments

- `$value` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch unique {elements} from Site A, or Site B if they don’t exist in Site A #}
{% set {elements-var} = {twig-method}
    .site('*')
    .unique()
    .preferSites(['a', 'b'])
    .all() %}
```

```php
// Fetch unique {elements} from Site A, or Site B if they don’t exist in Site A
${elements-var} = {php-method}
    ->site('*')
    ->unique()
    ->preferSites(['a', 'b'])
    ->all();
```
:::


### `prepare()`





Prepares for building SQL.



This method is called by `\craft\elements\db\QueryBuilder` when it starts to build SQL from a query object.
You may override this method to do some final preparation work when converting a query into a SQL statement.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1275-L1421)


#### Arguments

- `$builder` ([yii\db\QueryBuilder](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder))

#### Returns

[$this](craft-elements-db-elementquery.md) – A prepared query instance which will be used by `\craft\elements\db\QueryBuilder` to build the SQL

#### Throws

- [craft\db\QueryAbortedException](craft-db-queryabortedexception.md)\
  if it can be determined that there won’t be any results


### `prevSiblingOf()`





Narrows the query results to only the {element} that comes immediately before another {element}.



Possible values include:

| Value | Fetches the {element}…
| - | -
| `1` | before the {element} with an ID of 1.
| a [[{element-class}]] object | before the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1222-L1226)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch the previous {element} #}
{% set {element-var} = {twig-method}
    .prevSiblingOf({myElement})
    .one() %}
```

```php
// Fetch the previous {element}
${element-var} = {php-method}
    ->prevSiblingOf(${myElement})
    ->one();
```
:::


### `ref()`





Narrows the query results based on a reference string.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1085-L1089)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference



### `relatedTo()`





Narrows the query results to only {elements} that are related to certain other elements.



See [Relations](https://docs.craftcms.com/v3/relations.html) for a full explanation of how to work with this parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1035-L1039)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all {elements} that are related to myCategory #}
{% set {elements-var} = {twig-method}
    .relatedTo(myCategory)
    .all() %}
```

```php
// Fetch all {elements} that are related to $myCategory
${elements-var} = {php-method}
    ->relatedTo($myCategory)
    ->all();
```
:::


### `revisionCreator()`



Since

:   3.2.0



Narrows the query results to only revisions created by a given user.



Possible values include:

| Value | Fetches revisions…
| - | -
| `1` | created by the user with an ID of 1.
| a [craft\elements\User](craft-elements-user.md) object | created by the user represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L795-L806)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch revisions by the current user #}
{% set {elements-var} = {twig-method}
    .revisionCreator(currentUser)
    .all() %}
```

```php
// Fetch revisions by the current user
${elements-var} = {php-method}
    ->revisionCreator(Craft::$app->user->identity)
    ->all();
```
:::


### `revisionId()`



Since

:   3.2.0



Narrows the query results based on the {elements}’ revision’s ID (from the `revisions` table).



Possible values include:

| Value | Fetches revisions…
| - | -
| `1` | for the revision with an ID of 1.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L764-L769)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch a revision #}
{% set {elements-var} = {twig-method}
    .revisionId(10)
    .all() %}
```

```php
// Fetch a revision
${elements-var} = {php-method}
    ->revisionIf(10)
    ->all();
```
:::


### `revisionOf()`



Since

:   3.2.0



Narrows the query results to only revisions of a given {element}.



Possible values include:

| Value | Fetches revisions…
| - | -
| `1` | for the {element} with an ID of 1.
| a [[{element-class}]] object | for the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L776-L788)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch revisions of the {element} #}
{% set {elements-var} = {twig-method}
    .revisionOf({myElement})
    .all() %}
```

```php
// Fetch revisions of the {element}
${elements-var} = {php-method}
    ->revisionOf(${myElement})
    ->all();
```
:::


### `revisions()`



Since

:   3.2.0



Narrows the query results to only revision {elements}.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L753-L757)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch a revision {element} #}
{% set {elements-var} = {twig-function}
    .revisions()
    .id(123)
    .one() %}
```

```php
// Fetch a revision {element}
${elements-var} = {element-class}::find()
    ->revisions()
    ->id(123)
    ->one();
```
:::


### `search()`





Narrows the query results to only {elements} that match a search query.



See [Searching](https://docs.craftcms.com/v3/searching.html) for a full explanation of how to work with this parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1075-L1079)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](craft-search-searchquery.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Get the search query from the 'q' query string param #}
{% set searchQuery = craft.app.request.getQueryParam('q') %}

{# Fetch all {elements} that match the search query #}
{% set {elements-var} = {twig-method}
    .search(searchQuery)
    .all() %}
```

```php
// Get the search query from the 'q' query string param
$searchQuery = \Craft::$app->request->getQueryParam('q');

// Fetch all {elements} that match the search query
${elements-var} = {php-method}
    ->search($searchQuery)
    ->all();
```
:::


### `setCachedResult()`





Sets the resulting elements.

If this is called, [all()](craft-elements-db-elementquery.md#method-all) will return these elements rather than initiating a new SQL query,
as long as none of the parameters have changed since setCachedResult() was called.

See also [getCachedResult()](craft-elements-db-elementquery.md#method-getcachedresult)
[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1588-L1592)


#### Arguments

- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The resulting elements.




### `siblingOf()`





Narrows the query results to only {elements} that are siblings of another {element}.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | beside the {element} with an ID of 1.
| a [[{element-class}]] object | beside the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1212-L1216)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} beside this one #}
{% set {elements-var} = {twig-method}
    .siblingOf({myElement})
    .all() %}
```

```php
// Fetch {elements} beside this one
${elements-var} = {php-method}
    ->siblingOf(${myElement})
    ->all();
```
:::


### `site()`





Determines which site(s) the {elements} should be queried in.



The current site will be used by default.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'foo'` | from the site with a handle of `foo`.
| `['foo', 'bar']` | from a site with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not in a site with a handle of `foo` or `bar`.
| a [craft\models\Site](craft-models-site.md) object | from the site represented by the object.
| `'*'` | from any site.

::: tip
If multiple sites are specified, elements that belong to multiple sites will be returned multiple times. If you
only want unique elements to be returned, use [unique()](craft-elements-db-elementquery.md#method-unique) in conjunction with this.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L931-L959)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\Site](craft-models-site.md)) – The property value

#### Returns

`static` – Self reference

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $value is invalid

---

#### Example

::: code
```twig
{# Fetch {elements} from the Foo site #}
{% set {elements-var} = {twig-method}
    .site('foo')
    .all() %}
```

```php
// Fetch {elements} from the Foo site
${elements-var} = {php-method}
    ->site('foo')
    ->all();
```
:::


### `siteId()`





Determines which site(s) the {elements} should be queried in, per the site’s ID.



The current site will be used by default.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L965-L969)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} from the site with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .siteId(1)
    .all() %}
```

```php
// Fetch {elements} from the site with an ID of 1
${elements-var} = {php-method}
    ->siteId(1)
    ->all();
```
:::


### `slug()`





Narrows the query results based on the {elements}’ slugs.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'foo'` | with a slug of `foo`.
| `'foo*'` | with a slug that begins with `foo`.
| `'*foo'` | with a slug that ends with `foo`.
| `'*foo*'` | with a slug that contains `foo`.
| `'not *foo*'` | with a slug that doesn’t contain `foo`.
| `['*foo*', '*bar*']` | with a slug that contains `foo` or `bar`.
| `['not', '*foo*', '*bar*']` | with a slug that doesn’t contain `foo` or `bar`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1055-L1059)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Get the requested {element} slug from the URL #}
{% set requestedSlug = craft.app.request.getSegment(3) %}

{# Fetch the {element} with that slug #}
{% set {element-var} = {twig-method}
    .slug(requestedSlug|literal)
    .one() %}
```

```php
// Get the requested {element} slug from the URL
$requestedSlug = \Craft::$app->request->getSegment(3);

// Fetch the {element} with that slug
${element-var} = {php-method}
    ->slug(\craft\helpers\Db::escapeParam($requestedSlug))
    ->one();
```
:::


### `status()`





Narrows the query results based on the {elements}’ statuses.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'enabled'`  _(default)_ | that are enabled.
| `'disabled'` | that are disabled.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L880-L884)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch disabled {elements} #}
{% set {elements-var} = {twig-method}
    .status('disabled')
    .all() %}
```

```php
// Fetch disabled {elements}
${elements-var} = {php-method}
    ->status('disabled')
    ->all();
```
:::


### `structureId()`





Determines which structure data should be joined into the query.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1132-L1136)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference



### `title()`





Narrows the query results based on the {elements}’ titles.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'Foo'` | with a title of `Foo`.
| `'Foo*'` | with a title that begins with `Foo`.
| `'*Foo'` | with a title that ends with `Foo`.
| `'*Foo*'` | with a title that contains `Foo`.
| `'not *Foo*'` | with a title that doesn’t contain `Foo`.
| `['*Foo*', '*Bar*']` | with a title that contains `Foo` or `Bar`.
| `['not', '*Foo*', '*Bar*']` | with a title that doesn’t contain `Foo` or `Bar`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1045-L1049)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} with a title that contains "Foo" #}
{% set {elements-var} = {twig-method}
    .title('*Foo*')
    .all() %}
```

```php
// Fetch {elements} with a title that contains "Foo"
${elements-var} = {php-method}
    ->title('*Foo*')
    ->all();
```
:::


### `total()`

::: danger DEPRECATED
Deprecated in Craft 3.0. Use count() instead.
:::




Returns the total elements that match the criteria.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1878-L1884)


#### Arguments

- `$attributes` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[integer](http://php.net/language.types.integer)



### `trashed()`



Since

:   3.1.0



Narrows the query results to only {elements} that have been soft-deleted.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L900-L904)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch trashed {elements} #}
{% set {elements-var} = {twig-method}
    .trashed()
    .all() %}
```

```php
// Fetch trashed {elements}
${elements-var} = {element-class}::find()
    ->trashed()
    ->all();
```
:::


### `uid()`





Narrows the query results based on the {elements}’ UIDs.






[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L822-L826)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch the {element} by its UID #}
{% set {element-var} = {twig-method}
    .uid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
    .one() %}
```

```php
// Fetch the {element} by its UID
${element-var} = {php-method}
    ->uid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
    ->one();
```
:::


### `unique()`



Since

:   3.2.0



Determines whether only elements with unique IDs should be returned by the query.



This should be used when querying elements from multiple sites at the same time, if “duplicate” results is not
desired.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L990-L994)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch unique {elements} across all sites #}
{% set {elements-var} = {twig-method}
    .site('*')
    .unique()
    .all() %}
```

```php
// Fetch unique {elements} across all sites
${elements-var} = {php-method}
    ->site('*')
    ->unique()
    ->all();
```
:::


### `uri()`





Narrows the query results based on the {elements}’ URIs.



Possible values include:

| Value | Fetches {elements}…
| - | -
| `'foo'` | with a URI of `foo`.
| `'foo*'` | with a URI that begins with `foo`.
| `'*foo'` | with a URI that ends with `foo`.
| `'*foo*'` | with a URI that contains `foo`.
| `'not *foo*'` | with a URI that doesn’t contain `foo`.
| `['*foo*', '*bar*']` | with a URI that contains `foo` or `bar`.
| `['not', '*foo*', '*bar*']` | with a URI that doesn’t contain `foo` or `bar`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1065-L1069)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Get the requested URI #}
{% set requestedUri = craft.app.request.getPathInfo() %}

{# Fetch the {element} with that URI #}
{% set {element-var} = {twig-method}
    .uri(requestedUri|literal)
    .one() %}
```

```php
// Get the requested URI
$requestedUri = \Craft::$app->request->getPathInfo();

// Fetch the {element} with that URI
${element-var} = {php-method}
    ->uri(\craft\helpers\Db::escapeParam($requestedUri))
    ->one();
```
:::


### `with()`





Causes the query to return matching {elements} eager-loaded with related elements.



See [Eager-Loading Elements](https://docs.craftcms.com/v3/dev/eager-loading-elements.html) for a full explanation of how to work with this parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1095-L1099)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The property value

#### Returns

`self` – The query object itself


---

#### Example

::: code
```twig
{# Fetch {elements} eager-loaded with the "Related" field’s relations #}
{% set {elements-var} = {twig-method}
    .with(['related'])
    .all() %}
```

```php
// Fetch {elements} eager-loaded with the "Related" field’s relations
${elements-var} = {php-method}
    ->with(['related'])
    ->all();
```
:::


### `withStructure()`





Explicitly determines whether the query should join in the structure data.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1122-L1126)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference





## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterPrepare()](craft-elements-db-elementquery.md#method-afterprepare)                                                                                   | This method is called at the end of preparing an element query for the query builder.
| [beforePrepare()](craft-elements-db-elementquery.md#method-beforeprepare)                                                                                 | This method is called at the beginning of preparing an element query for the query builder.
| [cleanUpTableNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cleanUpTableNames()-detail "Defined by yii\db\Query")                         | Clean up table names and aliases Both aliases and names are enclosed into {{ and }}.
| [customFields()](craft-elements-db-elementquery.md#method-customfields)                                                                                   | Returns the fields that should take part in an upcoming elements query.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")     | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")   | Extracts the root field names from nested fields.
| [filterCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterCondition()-detail "Defined by yii\db\QueryTrait")                   | Removes [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail) from the given query condition.
| [getUnaliasedColumnsFromSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUnaliasedColumnsFromSelect()-detail "Defined by yii\db\Query") |
| [getUniqueColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUniqueColumns()-detail "Defined by yii\db\Query")                           | Returns unique column names excluding duplicates.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail "Defined by yii\db\QueryTrait")                                   | Returns a value indicating whether the give value is "empty".
| [joinElementTable()](craft-elements-db-elementquery.md#method-joinelementtable)                                                                           | Joins in a table with an `id` column that has a foreign key pointing to `craft_elements`.`id`.
| [normalizeOrderBy()](craft-elements-db-elementquery.md#method-normalizeorderby)                                                                           | Normalizes format of ORDER BY data.
| [normalizeSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#normalizeSelect()-detail "Defined by yii\db\Query")                             | Normalizes the SELECT columns passed to [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) or [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail).
| [queryScalar()](craft-db-query.md#method-queryscalar "Defined by craft\db\Query")                                                                         | Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")           | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [setCommandCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#setCommandCache()-detail "Defined by yii\db\Query")                             | Sets $command cache, if this query has enabled caching.
| [statusCondition()](craft-elements-db-elementquery.md#method-statuscondition)                                                                             | Returns the condition that should be applied to the element query for a given status.

### `afterPrepare()`





This method is called at the end of preparing an element query for the query builder.

It is called at the beginning of [prepare()](craft-elements-db-elementquery.md#method-prepare), right after [query](craft-elements-db-elementquery.md#query) and [subQuery](craft-elements-db-elementquery.md#subquery) have been created.

See also:

- [prepare()](craft-elements-db-elementquery.md#method-prepare)
- [beforePrepare()](craft-elements-db-elementquery.md#method-beforeprepare)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1919-L1925)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query should be prepared and returned to the query builder.
If false, the query will be cancelled and no results will be returned.



### `beforePrepare()`





This method is called at the beginning of preparing an element query for the query builder.

The main Query object being prepared for the query builder is available via [query](craft-elements-db-elementquery.md#query).
The subselect’s Query object being prepared is available via [subQuery](craft-elements-db-elementquery.md#subquery).
The role of the subselect query is to apply conditions to the query and narrow the result set down to
just the elements that should actually be returned.
The role of the main query is to join in any tables that should be included in the results, and select
all of the columns that should be included in the results.

See also:

- [prepare()](craft-elements-db-elementquery.md#method-prepare)
- [afterPrepare()](craft-elements-db-elementquery.md#method-afterprepare)

[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1901-L1907)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query should be prepared and returned to the query builder.
If false, the query will be cancelled and no results will be returned.



### `customFields()`





Returns the fields that should take part in an upcoming elements query.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1932-L1946)



#### Returns

[craft\base\FieldInterface](craft-base-fieldinterface.md)[] – The fields that should take part in the upcoming elements query



### `joinElementTable()`





Joins in a table with an `id` column that has a foreign key pointing to `craft_elements`.`id`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1991-L1996)


#### Arguments

- `$table` ([string](http://php.net/language.types.string)) – The unprefixed table name. This will also be used as the table’s alias within the query.




### `normalizeOrderBy()`





Normalizes format of ORDER BY data.








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L2001-L2009)


#### Arguments

- `$columns` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface)) – The columns value to normalize. See [orderBy()](craft-elements-db-elementquery.md#method-orderby) and [addOrderBy()](craft-elements-db-elementquery.md#method-addorderby).

#### Returns

[array](http://php.net/language.types.array)



### `statusCondition()`





Returns the condition that should be applied to the element query for a given status.

For example, if you support a status called “pending”, which maps back to a `pending` database column that will
either be 0 or 1, this method could do this:

```php
protected function statusCondition($status)
{
    switch ($status) {
        case 'pending':
            return ['mytable.pending' => 1];
        default:
            return parent::statusCondition($status);
    }
```


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQuery.php#L1968-L1984)


#### Arguments

- `$status` ([string](http://php.net/language.types.string)) – The status

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The status condition, or false if $status is an unsupported status







## Events

### EVENT_AFTER_POPULATE_ELEMENT



Type

:   [craft\events\PopulateElementEvent](craft-events-populateelementevent.md)



The event that is triggered after an element is populated.



---



### EVENT_AFTER_PREPARE



Type

:   `\craft\elements\db\Event`



An event that is triggered at the end of preparing an element query for the query builder.



---



### EVENT_BEFORE_PREPARE



Type

:   `\craft\elements\db\Event`



An event that is triggered at the beginning of preparing an element query for the query builder.



---




