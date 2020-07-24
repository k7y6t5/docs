---
title: craft\elements\db\EntryQuery
code:
  - php
  - twig
---

# EntryQuery

Type

:   Class

Namespace

:   craft\elements\db

Inherits

:   [craft\elements\db\EntryQuery](craft-elements-db-entryquery.md) &raquo;
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



EntryQuery represents a SELECT SQL statement for entries in a way that is independent of DBMS.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [after](craft-elements-db-entryquery.md#after)                                                                                         | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [DateTime](http://php.net/class.datetime) – The minimum Post Date that resulting entries can have.
| [ancestorDist](craft-elements-db-elementquery.md#ancestordist "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf](craft-elements-db-elementquery.md#ancestorof "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be an ancestor of.
| [archived](craft-elements-db-elementquery.md#archived "Defined by craft\elements\db\ElementQuery")                                     | [boolean](http://php.net/language.types.boolean) – Whether to return only archived elements.
| [asArray](craft-elements-db-elementquery.md#asarray "Defined by craft\elements\db\ElementQuery")                                       | [boolean](http://php.net/language.types.boolean) – Whether to return each element as an array.
| [authorGroupId](craft-elements-db-entryquery.md#authorgroupid)                                                                         | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The user group ID(s) that the resulting entries’ authors must be in.
| [authorId](craft-elements-db-entryquery.md#authorid)                                                                                   | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The user ID(s) that the resulting entries’ authors must have.
| [before](craft-elements-db-entryquery.md#before)                                                                                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [DateTime](http://php.net/class.datetime) – The maximum Post Date that resulting entries can have.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedResult](craft-elements-db-elementquery.md#cachedresult "Defined by craft\elements\db\ElementQuery")                             | [craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed
| [contentTable](craft-elements-db-elementquery.md#contenttable "Defined by craft\elements\db\ElementQuery")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The content table that will be joined by this query.
| [criteria](craft-elements-db-elementquery.md#criteria "Defined by craft\elements\db\ElementQuery")                                     | [array](http://php.net/language.types.array)
| [customFields](craft-elements-db-elementquery.md#customfields "Defined by craft\elements\db\ElementQuery")                             | [craft\base\FieldInterface](craft-base-fieldinterface.md)[], [null](http://php.net/language.types.null) – The fields that may be involved in this query.
| [dateCreated](craft-elements-db-elementquery.md#datecreated "Defined by craft\elements\db\ElementQuery")                               | `mixed` – When the resulting elements must have been created.
| [dateUpdated](craft-elements-db-elementquery.md#dateupdated "Defined by craft\elements\db\ElementQuery")                               | `mixed` – When the resulting elements must have been last updated.
| [descendantDist](craft-elements-db-elementquery.md#descendantdist "Defined by craft\elements\db\ElementQuery")                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [descendantOf()](craft-elements-db-elementquery.md#method-descendantof).
| [descendantOf](craft-elements-db-elementquery.md#descendantof "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be a descendant of.
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                           | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [draftCreator](craft-elements-db-elementquery.md#draftcreator "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The drafts’ creator ID
| [draftId](craft-elements-db-elementquery.md#draftid "Defined by craft\elements\db\ElementQuery")                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft to return (from the `drafts` table)
| [draftOf](craft-elements-db-elementquery.md#draftof "Defined by craft\elements\db\ElementQuery")                                       | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The source element ID that drafts should be returned for.
| [drafts](craft-elements-db-elementquery.md#drafts "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether draft elements should be returned.
| [editable](craft-elements-db-entryquery.md#editable)                                                                                   | [boolean](http://php.net/language.types.boolean) – Whether to only return entries that the user has permission to edit.
| [elementType](craft-elements-db-elementquery.md#elementtype "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the [craft\base\ElementInterface](craft-base-elementinterface.md) class.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait") | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [enabledForSite](craft-elements-db-elementquery.md#enabledforsite "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be enabled for the chosen site.
| [expiryDate](craft-elements-db-entryquery.md#expirydate)                                                                               | `mixed` – The Expiry Date that the resulting entries must have.
| [fixedOrder](craft-elements-db-elementquery.md#fixedorder "Defined by craft\elements\db\ElementQuery")                                 | [boolean](http://php.net/language.types.boolean) – Whether results should be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                             | [array](http://php.net/language.types.array) – How to group the query results.
| [hasDescendants](craft-elements-db-elementquery.md#hasdescendants "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the resulting elements must have descendants.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                               | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [id](craft-elements-db-elementquery.md#id "Defined by craft\elements\db\ElementQuery")                                                 | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The element ID(s).
| [ignorePlaceholders](craft-elements-db-elementquery.md#ignoreplaceholders "Defined by craft\elements\db\ElementQuery")                 | [boolean](http://php.net/language.types.boolean) – Whether to ignore placeholder elements when populating the results.
| [inReverse](craft-elements-db-elementquery.md#inreverse "Defined by craft\elements\db\ElementQuery")                                   | [boolean](http://php.net/language.types.boolean) – Whether the results should be queried in reverse.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                   | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [iterator](craft-elements-db-elementquery.md#iterator "Defined by craft\elements\db\ElementQuery")                                     | [ArrayIterator](http://php.net/class.arrayiterator)
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – How to join with other tables.
| [leaves](craft-elements-db-elementquery.md#leaves "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be “leaves” in the structure.
| [level](craft-elements-db-elementquery.md#level "Defined by craft\elements\db\ElementQuery")                                           | `mixed` – The element’s level within the structure
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                       | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [nextSiblingOf](craft-elements-db-elementquery.md#nextsiblingof "Defined by craft\elements\db\ElementQuery")                           | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the next sibling of.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                     | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [orderBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$orderBy-detail "Defined by yii\db\QueryTrait")                   | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [positionedAfter](craft-elements-db-elementquery.md#positionedafter "Defined by craft\elements\db\ElementQuery")                       | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned after.
| [positionedBefore](craft-elements-db-elementquery.md#positionedbefore "Defined by craft\elements\db\ElementQuery")                     | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned before.
| [postDate](craft-elements-db-entryquery.md#postdate)                                                                                   | `mixed` – The Post Date that the resulting entries must have.
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
| [sectionId](craft-elements-db-entryquery.md#sectionid)                                                                                 | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The section ID(s) that the resulting entries must be in.
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                               | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                   | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [siblingOf](craft-elements-db-elementquery.md#siblingof "Defined by craft\elements\db\ElementQuery")                                   | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be a sibling of.
| [siteId](craft-elements-db-elementquery.md#siteid "Defined by craft\elements\db\ElementQuery")                                         | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The site ID(s) that the elements should be returned in, or `'*'` if elements should be returned in all supported sites.
| [slug](craft-elements-db-elementquery.md#slug "Defined by craft\elements\db\ElementQuery")                                             | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The slug that resulting elements must have.
| [status](craft-elements-db-elementquery.md#status "Defined by craft\elements\db\ElementQuery")                                         | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The status(es) that the resulting elements must have.
| [structureId](craft-elements-db-elementquery.md#structureid "Defined by craft\elements\db\ElementQuery")                               | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The structure ID that should be used to join in the structureelements table.
| [subQuery](craft-elements-db-elementquery.md#subquery "Defined by craft\elements\db\ElementQuery")                                     | [craft\db\Query](craft-db-query.md), [null](http://php.net/language.types.null) – The subselect’s query object created by [prepare()](craft-elements-db-elementquery.md#method-prepare)
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$tablesUsedInFrom-detail "Defined by yii\db\Query")           | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [title](craft-elements-db-elementquery.md#title "Defined by craft\elements\db\ElementQuery")                                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The title that resulting elements must have.
| [trashed](craft-elements-db-elementquery.md#trashed "Defined by craft\elements\db\ElementQuery")                                       | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to return trashed (soft-deleted) elements.
| [typeId](craft-elements-db-entryquery.md#typeid)                                                                                       | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The entry type ID(s) that the resulting entries must have.
| [uid](craft-elements-db-elementquery.md#uid "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The element UID(s).
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                 | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [unique](craft-elements-db-elementquery.md#unique "Defined by craft\elements\db\ElementQuery")                                         | [boolean](http://php.net/language.types.boolean) – Whether only elements with unique IDs should be returned by the query.
| [uri](craft-elements-db-elementquery.md#uri "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The URI that the resulting element must have.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [with](craft-elements-db-elementquery.md#with "Defined by craft\elements\db\ElementQuery")                                             | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The eager-loading declaration.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                     | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.
| [withStructure](craft-elements-db-elementquery.md#withstructure "Defined by craft\elements\db\ElementQuery")                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether element structure data should automatically be left-joined into the query.

### `after`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [DateTime](http://php.net/class.datetime)



The minimum Post Date that resulting entries can have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L182)


---

#### Example

::: code
```php
// fetch entries written in the last 7 days
$entries = \craft\elements\Entry::find()
    ->after((new \DateTime())->modify('-7 days'))
    ->all();
```
```twig
{# fetch entries written in the last 7 days #}
{% set entries = craft.entries()
    .after(now|date_modify('-7 days'))
    .all() %}
```
:::


### `authorGroupId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The user group ID(s) that the resulting entries’ authors must be in.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L125)


---

#### Example

::: code
```php
// fetch entries authored by people in the Authors group
$entries = \craft\elements\Entry::find()
    ->authorGroup('authors')
    ->all();
```
```twig
{# fetch entries authored by people in the Authors group #}
{% set entries = craft.entries()
    .authorGroup('authors')
    .all() %}
```
:::


### `authorId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The user ID(s) that the resulting entries’ authors must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L105)



### `before`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [DateTime](http://php.net/class.datetime)



The maximum Post Date that resulting entries can have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L163)


---

#### Example

::: code
```php
// fetch entries written before 4/4/2018
$entries = \craft\elements\Entry::find()
    ->before('2018-04-04')
    ->all();
```
```twig
{# fetch entries written before 4/4/2018 #}
{% set entries = craft.entries()
    .before('2018-04-04')
    .all() %}
```
:::


### `editable`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to only return entries that the user has permission to edit.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L57)



### `expiryDate`



Type

:   `mixed`



The Expiry Date that the resulting entries must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L188)



### `postDate`



Type

:   `mixed`



The Post Date that the resulting entries must have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L144)


---

#### Example

::: code
```php
// fetch entries written in 2018
$entries = \craft\elements\Entry::find()
    ->postDate(['and', '>= 2018-01-01', '< 2019-01-01'])
    ->all();
```
```twig
{# fetch entries written in 2018 #}
{% set entries = craft.entries()
    .postDate(['and', '>= 2018-01-01', '< 2019-01-01'])
    .all() %}
```
:::


### `sectionId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The section ID(s) that the resulting entries must be in.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L77)


---

#### Example

::: code
```php
// fetch entries in the News section
$entries = \craft\elements\Entry::find()
    ->section('news')
    ->all();
```
```twig
{# fetch entries in the News section #}
{% set entries = craft.entries()
    .section('news')
    .all() %}
```
:::


### `typeId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The entry type ID(s) that the resulting entries must have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L99)


---

#### Example

::: code
```php{4}
// fetch Article entries in the News section
$entries = \craft\elements\Entry::find()
    ->section('news')
    ->type('article')
    ->all();
```
```twig{4}
{# fetch entries in the News section #}
{% set entries = craft.entries()
    .section('news')
    .type('article')
    .all() %}
```
:::




## Protected Properties

| Property                                                         | Description
| ---------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultOrderBy](craft-elements-db-entryquery.md#defaultorderby) | [array](http://php.net/language.types.array) – The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.

### `defaultOrderBy`



Type

:   [array](http://php.net/language.types.array)





The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L193)





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-elements-db-elementquery.md#method-call "Defined by craft\elements\db\ElementQuery")                                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                 |
| [__construct()](craft-elements-db-entryquery.md#method-construct)                                                                           | Constructor
| [__get()](craft-elements-db-elementquery.md#method-get "Defined by craft\elements\db\ElementQuery")                                         | Returns the value of a component property.
| [__isset()](craft-elements-db-elementquery.md#method-isset "Defined by craft\elements\db\ElementQuery")                                     | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-elements-db-entryquery.md#method-set)                                                                                       | Sets the value of a component property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")               | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                           | Add more columns to the SELECT part of the query.
| [after()](craft-elements-db-entryquery.md#method-after)                                                                                     | Narrows the query results to only entries that were posted on or after a certain date.
| [all()](craft-elements-db-elementquery.md#method-all "Defined by craft\elements\db\ElementQuery")                                           | Executes the query and returns all results as an array.
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
| [authorGroup()](craft-elements-db-entryquery.md#method-authorgroup)                                                                         | Narrows the query results based on the user group the entries’ authors belong to.
| [authorGroupId()](craft-elements-db-entryquery.md#method-authorgroupid)                                                                     | Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs.
| [authorId()](craft-elements-db-entryquery.md#method-authorid)                                                                               | Narrows the query results based on the entries’ authors.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                   | Starts a batch query.
| [before()](craft-elements-db-entryquery.md#method-before)                                                                                   | Narrows the query results to only entries that were posted before a certain date.
| [behaviors()](craft-elements-db-elementquery.md#method-behaviors "Defined by craft\elements\db\ElementQuery")                               | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                   | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [clearCachedResult()](craft-elements-db-elementquery.md#method-clearcachedresult "Defined by craft\elements\db\ElementQuery")               | Clears the cached result.
| [column()](craft-elements-db-elementquery.md#method-column "Defined by craft\elements\db\ElementQuery")                                     | Executes the query and returns the first column of the result.
| [count()](craft-elements-db-elementquery.md#method-count "Defined by craft\elements\db\ElementQuery")                                       | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                 | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail "Defined by yii\db\Query")                   | Creates a DB command that can be used to execute this query.
| [criteriaAttributes()](craft-elements-db-elementquery.md#method-criteriaattributes "Defined by craft\elements\db\ElementQuery")             | Returns the query's criteria attributes.
| [dateCreated()](craft-elements-db-elementquery.md#method-datecreated "Defined by craft\elements\db\ElementQuery")                           | Narrows the query results based on the {elements}’ creation dates.
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
| [editable()](craft-elements-db-entryquery.md#method-editable)                                                                               | Sets the [editable](craft-elements-db-entryquery.md#editable) property.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite "Defined by craft\elements\db\ElementQuery")                     | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementquery.md#method-site) parameter.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](craft-elements-db-elementquery.md#method-exists "Defined by craft\elements\db\ElementQuery")                                     | Returns a value indicating whether the query result contains any row of data.
| [expiryDate()](craft-elements-db-entryquery.md#method-expirydate)                                                                           | Narrows the query results based on the entries’ expiry dates.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait") | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")           | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [find()](craft-elements-db-elementquery.md#method-find "Defined by craft\elements\db\ElementQuery")                                         | Returns all elements that match the criteria.
| [first()](craft-elements-db-elementquery.md#method-first "Defined by craft\elements\db\ElementQuery")                                       | Returns the first element that matches the criteria.
| [fixedOrder()](craft-elements-db-elementquery.md#method-fixedorder "Defined by craft\elements\db\ElementQuery")                             | Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
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
| [id()](craft-elements-db-elementquery.md#method-id "Defined by craft\elements\db\ElementQuery")                                             | Narrows the query results based on the {elements}’ IDs.
| [ids()](craft-elements-db-elementquery.md#method-ids "Defined by craft\elements\db\ElementQuery")                                           | Executes the query and returns the IDs of the resulting elements.
| [ignorePlaceholders()](craft-elements-db-elementquery.md#method-ignoreplaceholders "Defined by craft\elements\db\ElementQuery")             | Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder elements that were set by [craft\services\Elements::setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement).
| [inReverse()](craft-elements-db-elementquery.md#method-inreverse "Defined by craft\elements\db\ElementQuery")                               | Causes the query results to be returned in reverse order.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                     | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](craft-elements-db-entryquery.md#method-init)                                                                                       | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                           | Appends an INNER JOIN part to the query.
| [isJoined()](craft-db-query.md#method-isjoined "Defined by craft\db\Query")                                                                 | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                     | Appends a JOIN part to the query.
| [last()](craft-elements-db-elementquery.md#method-last "Defined by craft\elements\db\ElementQuery")                                         | Returns the last element that matches the criteria.
| [leaves()](craft-elements-db-elementquery.md#method-leaves "Defined by craft\elements\db\ElementQuery")                                     | Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                             | Appends a LEFT OUTER JOIN part to the query.
| [level()](craft-elements-db-elementquery.md#method-level "Defined by craft\elements\db\ElementQuery")                                       | Narrows the query results based on the {elements}’ level within the structure.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                         | Determines the number of {elements} that should be returned.
| [locale()](craft-elements-db-elementquery.md#method-locale "Defined by craft\elements\db\ElementQuery")                                     | Sets the `\craft\elements\db\$site` property.
| [localeEnabled()](craft-elements-db-elementquery.md#method-localeenabled "Defined by craft\elements\db\ElementQuery")                       | Sets the [enabledForSite](craft-elements-db-elementquery.md#enabledforsite) property.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                       | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                       | Returns the minimum of the specified column values.
| [nextSiblingOf()](craft-elements-db-elementquery.md#method-nextsiblingof "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results to only the {element} that comes immediately after another {element}.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                               | Disables query cache for this Query.
| [nth()](craft-elements-db-elementquery.md#method-nth "Defined by craft\elements\db\ElementQuery")                                           | Executes the query and returns a single row of result at a given offset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                       | Determines how many {elements} should be skipped in the results.
| [offsetExists()](craft-elements-db-elementquery.md#method-offsetexists "Defined by craft\elements\db\ElementQuery")                         | Required by the ArrayAccess interface.
| [offsetGet()](craft-elements-db-elementquery.md#method-offsetget "Defined by craft\elements\db\ElementQuery")                               | Required by the ArrayAccess interface.
| [offsetSet()](craft-elements-db-elementquery.md#method-offsetset "Defined by craft\elements\db\ElementQuery")                               | Required by the ArrayAccess interface.
| [offsetUnset()](craft-elements-db-elementquery.md#method-offsetunset "Defined by craft\elements\db\ElementQuery")                           | Required by the ArrayAccess interface.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [one()](craft-elements-db-elementquery.md#method-one "Defined by craft\elements\db\ElementQuery")                                           | Executes the query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                 | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")         | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                             | Adds an additional HAVING condition to the existing one.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orWhere()-detail "Defined by yii\db\QueryTrait")                     | Adds an additional WHERE condition to the existing one.
| [order()](craft-elements-db-elementquery.md#method-order "Defined by craft\elements\db\ElementQuery")                                       | Sets the [orderBy](craft-elements-db-elementquery.md#orderby) property.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail "Defined by yii\db\QueryTrait")                     | Determines the order that the {elements} should be returned in. (If empty, defaults to `{default-order-by}`.)
| [pairs()](craft-db-query.md#method-pairs "Defined by craft\db\Query")                                                                       | Executes the query and returns the first two columns in the results as key/value pairs.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                 | Sets the parameters to be bound to the query.
| [populate()](craft-elements-db-elementquery.md#method-populate "Defined by craft\elements\db\ElementQuery")                                 | Converts the raw query results into the format as specified by this query.
| [positionedAfter()](craft-elements-db-elementquery.md#method-positionedafter "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only {elements} that are positioned after another {element}.
| [positionedBefore()](craft-elements-db-elementquery.md#method-positionedbefore "Defined by craft\elements\db\ElementQuery")                 | Narrows the query results to only {elements} that are positioned before another {element}.
| [postDate()](craft-elements-db-entryquery.md#method-postdate)                                                                               | Narrows the query results based on the entries’ post dates.
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
| [section()](craft-elements-db-entryquery.md#method-section)                                                                                 | Narrows the query results based on the sections the entries belong to.
| [sectionId()](craft-elements-db-entryquery.md#method-sectionid)                                                                             | Narrows the query results based on the sections the entries belong to, per the sections’ IDs.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                 | Sets the SELECT part of the query.
| [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult "Defined by craft\elements\db\ElementQuery")                   | Sets the resulting elements.
| [siblingOf()](craft-elements-db-elementquery.md#method-siblingof "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results to only {elements} that are siblings of another {element}.
| [site()](craft-elements-db-elementquery.md#method-site "Defined by craft\elements\db\ElementQuery")                                         | Determines which site(s) the {elements} should be queried in.
| [siteId()](craft-elements-db-elementquery.md#method-siteid "Defined by craft\elements\db\ElementQuery")                                     | Determines which site(s) the {elements} should be queried in, per the site’s ID.
| [slug()](craft-elements-db-elementquery.md#method-slug "Defined by craft\elements\db\ElementQuery")                                         | Narrows the query results based on the {elements}’ slugs.
| [status()](craft-elements-db-entryquery.md#method-status)                                                                                   | Narrows the query results based on the entries’ statuses.
| [structureId()](craft-elements-db-elementquery.md#method-structureid "Defined by craft\elements\db\ElementQuery")                           | Determines which structure data should be joined into the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                       | Returns the sum of the specified column values.
| [title()](craft-elements-db-elementquery.md#method-title "Defined by craft\elements\db\ElementQuery")                                       | Narrows the query results based on the {elements}’ titles.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")         | Converts the model into an array.
| [total()](craft-elements-db-elementquery.md#method-total "Defined by craft\elements\db\ElementQuery")                                       | Returns the total elements that match the criteria.
| [trashed()](craft-elements-db-elementquery.md#method-trashed "Defined by craft\elements\db\ElementQuery")                                   | Narrows the query results to only {elements} that have been soft-deleted.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [type()](craft-elements-db-entryquery.md#method-type)                                                                                       | Narrows the query results based on the entries’ entry types.
| [typeId()](craft-elements-db-entryquery.md#method-typeid)                                                                                   | Narrows the query results based on the entries’ entry types, per the types’ IDs.
| [uid()](craft-elements-db-elementquery.md#method-uid "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on the {elements}’ UIDs.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                   | Appends a SQL statement using UNION operator.
| [unique()](craft-elements-db-elementquery.md#method-unique "Defined by craft\elements\db\ElementQuery")                                     | Determines whether only elements with unique IDs should be returned by the query.
| [uri()](craft-elements-db-elementquery.md#method-uri "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on the {elements}’ URIs.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                         | Sets the WHERE part of the query.
| [with()](craft-elements-db-elementquery.md#method-with "Defined by craft\elements\db\ElementQuery")                                         | Causes the query to return matching {elements} eager-loaded with related elements.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                           | Prepends a SQL statement using WITH syntax.
| [withStructure()](craft-elements-db-elementquery.md#method-withstructure "Defined by craft\elements\db\ElementQuery")                       | Explicitly determines whether the query should join in the structure data.

### `__construct()`





Constructor








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L198-L206)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class associated with this query
- `$config` ([array](http://php.net/language.types.array)) – Configurations to be applied to the newly created query object




### `__set()`





Sets the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a setter: set the property value
 - an event in the format of "on xyz": attach the handler to the event "xyz"
 - a behavior in the format of "as xyz": attach the behavior named as "xyz"
 - a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$component->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L211-L226)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `after()`





Narrows the query results to only entries that were posted on or after a certain date.

Possible values include:

| Value | Fetches entries…
| - | -
| `'2018-04-01'` | that were posted after 2018-04-01.
| a [DateTime](http://php.net/class.datetime) object | that were posted after the date represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L684-L688)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries posted this month #}
{% set firstDayOfMonth = date('first day of this month') %}

{% set {elements-var} = {twig-method}
    .after(firstDayOfMonth)
    .all() %}
```

```php
// Fetch entries posted this month
$firstDayOfMonth = new \DateTime('first day of this month');

${elements-var} = {php-method}
    ->after($firstDayOfMonth)
    ->all();
```
:::


### `authorGroup()`





Narrows the query results based on the user group the entries’ authors belong to.

Possible values include:

| Value | Fetches entries…
| - | -
| `'foo'` | with an author in a group with a handle of `foo`.
| `'not foo'` | not with an author in a group with a handle of `foo`.
| `['foo', 'bar']` | with an author in a group with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not with an author in a group with a handle of `foo` or `bar`.
| a [UserGroup](craft-models-usergroup.md) object | with an author in a group represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L512-L527)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries with an author in the Foo user group #}
{% set {elements-var} = {twig-method}
    .authorGroup('foo')
    .all() %}
```

```php
// Fetch entries with an author in the Foo user group
${elements-var} = {php-method}
    ->authorGroup('foo')
    ->all();
```
:::


### `authorGroupId()`





Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs.

Possible values include:

| Value | Fetches entries…
| - | -
| `1` | with an author in a group with an ID of 1.
| `'not 1'` | not with an author in a group with an ID of 1.
| `[1, 2]` | with an author in a group with an ID of 1 or 2.
| `['not', 1, 2]` | not with an author in a group with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L561-L565)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries with an author in a group with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .authorGroupId(1)
    .all() %}
```

```php
// Fetch entries with an author in a group with an ID of 1
${elements-var} = {php-method}
    ->authorGroupId(1)
    ->all();
```
:::


### `authorId()`





Narrows the query results based on the entries’ authors.

Possible values include:

| Value | Fetches entries…
| - | -
| `1` | with an author with an ID of 1.
| `'not 1'` | not with an author with an ID of 1.
| `[1, 2]` | with an author with an ID of 1 or 2.
| `['not', 1, 2]` | not with an author with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L473-L477)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries with an author with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .authorId(1)
    .all() %}
```

```php
// Fetch entries with an author with an ID of 1
${elements-var} = {php-method}
    ->authorId(1)
    ->all();
```
:::


### `before()`





Narrows the query results to only entries that were posted before a certain date.

Possible values include:

| Value | Fetches entries…
| - | -
| `'2018-04-01'` | that were posted before 2018-04-01.
| a [DateTime](http://php.net/class.datetime) object | that were posted before the date represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L644-L648)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries posted before this month #}
{% set firstDayOfMonth = date('first day of this month') %}

{% set {elements-var} = {twig-method}
    .before(firstDayOfMonth)
    .all() %}
```

```php
// Fetch entries posted before this month
$firstDayOfMonth = new \DateTime('first day of this month');

${elements-var} = {php-method}
    ->before($firstDayOfMonth)
    ->all();
```
:::


### `editable()`





Sets the [editable](craft-elements-db-entryquery.md#editable) property.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L247-L251)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `expiryDate()`





Narrows the query results based on the entries’ expiry dates.

Possible values include:

| Value | Fetches entries…
| - | -
| `':empty:'` | that don’t have an expiry date.
| `':notempty:'` | that have an expiry date.
| `'>= 2020-04-01'` | that will expire on or after 2020-04-01.
| `'< 2020-05-01'` | that will expire before 2020-05-01
| `['and', '>= 2020-04-04', '< 2020-05-01']` | that will expire between 2020-04-01 and 2020-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L727-L731)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries expiring this month #}
{% set nextMonth = date('first day of next month')|atom %}

{% set {elements-var} = {twig-method}
    .expiryDate("< #{nextMonth}")
    .all() %}
```

```php
// Fetch entries expiring this month
$nextMonth = (new \DateTime('first day of next month'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->expiryDate("< {$nextMonth}")
    ->all();
```
:::


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L231-L238)






### `postDate()`





Narrows the query results based on the entries’ post dates.

Possible values include:

| Value | Fetches entries…
| - | -
| `'>= 2018-04-01'` | that were posted on or after 2018-04-01.
| `'< 2018-05-01'` | that were posted before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were posted between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L604-L608)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries posted last month #}
{% set start = date('first day of last month')|atom %}
{% set end = date('first day of this month')|atom %}

{% set {elements-var} = {twig-method}
    .postDate(['and', ">= #{start}", "< #{end}"])
    .all() %}
```

```php
// Fetch entries posted last month
$start = (new \DateTime('first day of last month'))->format(\DateTime::ATOM);
$end = (new \DateTime('first day of this month'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->postDate(['and', ">= {$start}", "< {$end}"])
    ->all();
```
:::


### `section()`





Narrows the query results based on the sections the entries belong to.

Possible values include:

| Value | Fetches entries…
| - | -
| `'foo'` | in a section with a handle of `foo`.
| `'not foo'` | not in a section with a handle of `foo`.
| `['foo', 'bar']` | in a section with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not in a section with a handle of `foo` or `bar`.
| a [Section](craft-models-section.md) object | in a section represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L286-L311)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries in the Foo section #}
{% set {elements-var} = {twig-method}
    .section('foo')
    .all() %}
```

```php
// Fetch entries in the Foo section
${elements-var} = {php-method}
    ->section('foo')
    ->all();
```
:::


### `sectionId()`





Narrows the query results based on the sections the entries belong to, per the sections’ IDs.

Possible values include:

| Value | Fetches entries…
| - | -
| `1` | in a section with an ID of 1.
| `'not 1'` | not in a section with an ID of 1.
| `[1, 2]` | in a section with an ID of 1 or 2.
| `['not', 1, 2]` | not in a section with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L345-L349)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries in the section with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .sectionId(1)
    .all() %}
```

```php
// Fetch entries in the section with an ID of 1
${elements-var} = {php-method}
    ->sectionId(1)
    ->all();
```
:::


### `status()`





Narrows the query results based on the entries’ statuses.

Possible values include:

| Value | Fetches entries…
| - | -
| `'live'` _(default)_ | that are live.
| `'pending'` | that are pending (enabled with a Post Date in the future).
| `'expired'` | that are expired (enabled with an Expiry Date in the past).
| `'disabled'` | that are disabled.
| `['live', 'pending']` | that are live or pending.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L762-L765)


#### Arguments

- `$value`



---

#### Example

::: code
```twig
{# Fetch disabled entries #}
{% set {elements-var} = {twig-method}
    .status('disabled')
    .all() %}
```

```php
// Fetch disabled entries
${elements-var} = {element-class}::find()
    ->status('disabled')
    ->all();
```
:::


### `type()`





Narrows the query results based on the entries’ entry types.

Possible values include:

| Value | Fetches entries…
| - | -
| `'foo'` | of a type with a handle of `foo`.
| `'not foo'` | not of a type with a handle of `foo`.
| `['foo', 'bar']` | of a type with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not of a type with a handle of `foo` or `bar`.
| an [EntryType](craft-models-entrytype.md) object | of a type represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L386-L401)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\EntryType](craft-models-entrytype.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries in the Foo section with a Bar entry type #}
{% set {elements-var} = {twig-method}
    .section('foo')
    .type('bar')
    .all() %}
```

```php
// Fetch entries in the Foo section with a Bar entry type
${elements-var} = {php-method}
    ->section('foo')
    ->type('bar')
    ->all();
```
:::


### `typeId()`





Narrows the query results based on the entries’ entry types, per the types’ IDs.

Possible values include:

| Value | Fetches entries…
| - | -
| `1` | of a type with an ID of 1.
| `'not 1'` | not of a type with an ID of 1.
| `[1, 2]` | of a type with an ID of 1 or 2.
| `['not', 1, 2]` | not of a type with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L435-L439)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch entries of the entry type with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .typeId(1)
    .all() %}
```

```php
// Fetch entries of the entry type with an ID of 1
${elements-var} = {php-method}
    ->typeId(1)
    ->all();
```
:::




## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterPrepare()](craft-elements-db-elementquery.md#method-afterprepare "Defined by craft\elements\db\ElementQuery")                                       | This method is called at the end of preparing an element query for the query builder.
| [beforePrepare()](craft-elements-db-entryquery.md#method-beforeprepare)                                                                                   | This method is called at the beginning of preparing an element query for the query builder.
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
| [statusCondition()](craft-elements-db-entryquery.md#method-statuscondition)                                                                               | Returns the condition that should be applied to the element query for a given status.

### `beforePrepare()`





This method is called at the beginning of preparing an element query for the query builder.



The main Query object being prepared for the query builder is available via [query](craft-elements-db-elementquery.md#query).
The subselect’s Query object being prepared is available via [subQuery](craft-elements-db-elementquery.md#subquery).
The role of the subselect query is to apply conditions to the query and narrow the result set down to
just the elements that should actually be returned.
The role of the main query is to join in any tables that should be included in the results, and select
all of the columns that should be included in the results.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L770-L823)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the query should be prepared and returned to the query builder.
If false, the query will be cancelled and no results will be returned.



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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/EntryQuery.php#L828-L869)


#### Arguments

- `$status` ([string](http://php.net/language.types.string)) – The status

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The status condition, or false if $status is an unsupported status








