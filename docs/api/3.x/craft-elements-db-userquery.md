---
title: craft\elements\db\UserQuery
code:
  - php
  - twig
---

# UserQuery

Type

:   Class

Namespace

:   craft\elements\db

Inherits

:   [craft\elements\db\UserQuery](craft-elements-db-userquery.md) &raquo;
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



UserQuery represents a SELECT SQL statement for users in a way that is independent of DBMS.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php)


## Public Properties

| Property                                                                                                                               | Description
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [admin](craft-elements-db-userquery.md#admin)                                                                                          | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to only return users that are admins.
| [ancestorDist](craft-elements-db-elementquery.md#ancestordist "Defined by craft\elements\db\ElementQuery")                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [ancestorOf()](craft-elements-db-elementquery.md#method-ancestorof).
| [ancestorOf](craft-elements-db-elementquery.md#ancestorof "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The element (or its ID) that results must be an ancestor of.
| [archived](craft-elements-db-elementquery.md#archived "Defined by craft\elements\db\ElementQuery")                                     | [boolean](http://php.net/language.types.boolean) – Whether to return only archived elements.
| [asArray](craft-elements-db-elementquery.md#asarray "Defined by craft\elements\db\ElementQuery")                                       | [boolean](http://php.net/language.types.boolean) – Whether to return each element as an array.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")             | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedResult](craft-elements-db-elementquery.md#cachedresult "Defined by craft\elements\db\ElementQuery")                             | [craft\base\ElementInterface](craft-base-elementinterface.md)[], [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed
| [can](craft-elements-db-userquery.md#can)                                                                                              | [string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The permission that the resulting users must have.
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
| [elementType](craft-elements-db-elementquery.md#elementtype "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the [craft\base\ElementInterface](craft-base-elementinterface.md) class.
| [email](craft-elements-db-userquery.md#email)                                                                                          | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The email address that the resulting users must have.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait") | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [enabledForSite](craft-elements-db-elementquery.md#enabledforsite "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be enabled for the chosen site.
| [firstName](craft-elements-db-userquery.md#firstname)                                                                                  | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The first name that the resulting users must have.
| [fixedOrder](craft-elements-db-elementquery.md#fixedorder "Defined by craft\elements\db\ElementQuery")                                 | [boolean](http://php.net/language.types.boolean) – Whether results should be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                             | [array](http://php.net/language.types.array) – How to group the query results.
| [groupId](craft-elements-db-userquery.md#groupid)                                                                                      | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The user group ID(s) that the resulting users must belong to.
| [hasDescendants](craft-elements-db-elementquery.md#hasdescendants "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the resulting elements must have descendants.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                               | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [id](craft-elements-db-elementquery.md#id "Defined by craft\elements\db\ElementQuery")                                                 | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The element ID(s).
| [ignorePlaceholders](craft-elements-db-elementquery.md#ignoreplaceholders "Defined by craft\elements\db\ElementQuery")                 | [boolean](http://php.net/language.types.boolean) – Whether to ignore placeholder elements when populating the results.
| [inReverse](craft-elements-db-elementquery.md#inreverse "Defined by craft\elements\db\ElementQuery")                                   | [boolean](http://php.net/language.types.boolean) – Whether the results should be queried in reverse.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                   | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [iterator](craft-elements-db-elementquery.md#iterator "Defined by craft\elements\db\ElementQuery")                                     | [ArrayIterator](http://php.net/class.arrayiterator)
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                   | [array](http://php.net/language.types.array) – How to join with other tables.
| [lastLoginDate](craft-elements-db-userquery.md#lastlogindate)                                                                          | `mixed` – The date that the resulting users must have last logged in.
| [lastName](craft-elements-db-userquery.md#lastname)                                                                                    | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The last name that the resulting users must have.
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
| [uri](craft-elements-db-elementquery.md#uri "Defined by craft\elements\db\ElementQuery")                                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The URI that the resulting element must have.
| [username](craft-elements-db-userquery.md#username)                                                                                    | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The username that the resulting users must have.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                       | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [with](craft-elements-db-elementquery.md#with "Defined by craft\elements\db\ElementQuery")                                             | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The eager-loading declaration.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                     | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.
| [withStructure](craft-elements-db-elementquery.md#withstructure "Defined by craft\elements\db\ElementQuery")                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether element structure data should automatically be left-joined into the query.

### `admin`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether to only return users that are admins.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L72)


---

#### Example

::: code
```php
// fetch all the admins
$admins = \craft\elements\User::find()
    ->admin(true)
    ->all();

// fetch all the non-admins
$nonAdmins = \craft\elements\User::find()
    ->admin(false)
    ->all();
```
```twig
{# fetch all the admins #}
{% set admins = craft.users()
    .admin()
    .all()%}

{# fetch all the non-admins #}
{% set nonAdmins = craft.users()
    .admin(false)
    .all() %}
```
:::


### `can`



Type

:   [string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



The permission that the resulting users must have.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L91)


---

#### Example

::: code
```php
// fetch users with CP access
$admins = \craft\elements\User::find()
    ->can('accessCp')
    ->all();
```
```twig
{# fetch users with control panel access #}
{% set admins = craft.users()
    .can('accessCp')
    .all() %}
```
:::


### `email`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The email address that the resulting users must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L117)



### `firstName`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The first name that the resulting users must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L129)



### `groupId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The user group ID(s) that the resulting users must belong to.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L111)


---

#### Example

::: code
```php
// fetch the authors
$admins = \craft\elements\User::find()
    ->group('authors')
    ->all();
```
```twig
{# fetch the authors #}
{% set admins = craft.users()
    .group('authors')
    .all() %}
```
:::


### `lastLoginDate`



Type

:   `mixed`



The date that the resulting users must have last logged in.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L141)



### `lastName`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The last name that the resulting users must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L135)



### `username`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



The username that the resulting users must have.



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L123)





## Protected Properties

| Property                                                        | Description
| --------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultOrderBy](craft-elements-db-userquery.md#defaultorderby) | [array](http://php.net/language.types.array) – The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.

### `defaultOrderBy`



Type

:   [array](http://php.net/language.types.array)





The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.





[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L40)





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-elements-db-elementquery.md#method-call "Defined by craft\elements\db\ElementQuery")                                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                 |
| [__construct()](craft-elements-db-userquery.md#method-construct)                                                                            | Constructor
| [__get()](craft-elements-db-elementquery.md#method-get "Defined by craft\elements\db\ElementQuery")                                         | Returns the value of a component property.
| [__isset()](craft-elements-db-elementquery.md#method-isset "Defined by craft\elements\db\ElementQuery")                                     | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-elements-db-userquery.md#method-set)                                                                                        | Sets the value of a component property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                         | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                         | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")               | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                           | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                           | Add more columns to the SELECT part of the query.
| [admin()](craft-elements-db-userquery.md#method-admin)                                                                                      | Narrows the query results to only users that have admin accounts.
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
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                               | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                   | Starts a batch query.
| [behaviors()](craft-elements-db-elementquery.md#method-behaviors "Defined by craft\elements\db\ElementQuery")                               | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                   | Enables query cache for this Query.
| [can()](craft-elements-db-userquery.md#method-can)                                                                                          | Narrows the query results to only users that have a certain user permission, either directly on the user account or through one of their user groups.
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
| [email()](craft-elements-db-userquery.md#method-email)                                                                                      | Narrows the query results based on the users’ email addresses.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")   | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](craft-elements-db-elementquery.md#method-enabledforsite "Defined by craft\elements\db\ElementQuery")                     | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementquery.md#method-site) parameter.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](craft-elements-db-elementquery.md#method-exists "Defined by craft\elements\db\ElementQuery")                                     | Returns a value indicating whether the query result contains any row of data.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait") | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")           | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                     | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")             | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [find()](craft-elements-db-elementquery.md#method-find "Defined by craft\elements\db\ElementQuery")                                         | Returns all elements that match the criteria.
| [first()](craft-elements-db-elementquery.md#method-first "Defined by craft\elements\db\ElementQuery")                                       | Returns the first element that matches the criteria.
| [firstName()](craft-elements-db-userquery.md#method-firstname)                                                                              | Narrows the query results based on the users’ first names.
| [fixedOrder()](craft-elements-db-elementquery.md#method-fixedorder "Defined by craft\elements\db\ElementQuery")                             | Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementquery.md#method-id).
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                     | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachedResult()](craft-elements-db-elementquery.md#method-getcachedresult "Defined by craft\elements\db\ElementQuery")                   | Returns the resulting elements set by [setCachedResult()](craft-elements-db-elementquery.md#method-setcachedresult), if the criteria params haven’t changed since then.
| [getCriteria()](craft-elements-db-elementquery.md#method-getcriteria "Defined by craft\elements\db\ElementQuery")                           | Returns an array of the current criteria attribute values.
| [getIterator()](craft-elements-db-elementquery.md#method-getiterator "Defined by craft\elements\db\ElementQuery")                           | Required by the IteratorAggregate interface.
| [getRawSql()](craft-db-query.md#method-getrawsql "Defined by craft\db\Query")                                                               | Shortcut for `createCommand()->getRawSql()`.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getTablesUsedInFrom()-detail "Defined by yii\db\Query")       | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [group()](craft-elements-db-userquery.md#method-group)                                                                                      | Narrows the query results based on the user group the users belong to.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                               | Sets the GROUP BY part of the query.
| [groupId()](craft-elements-db-userquery.md#method-groupid)                                                                                  | Narrows the query results based on the user group the users belong to, per the groups’ IDs.
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
| [init()](craft-db-query.md#method-init "Defined by craft\db\Query")                                                                         | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                           | Appends an INNER JOIN part to the query.
| [isJoined()](craft-db-query.md#method-isjoined "Defined by craft\db\Query")                                                                 | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                     | Appends a JOIN part to the query.
| [last()](craft-elements-db-elementquery.md#method-last "Defined by craft\elements\db\ElementQuery")                                         | Returns the last element that matches the criteria.
| [lastLoginDate()](craft-elements-db-userquery.md#method-lastlogindate)                                                                      | Narrows the query results based on the users’ last login dates.
| [lastName()](craft-elements-db-userquery.md#method-lastname)                                                                                | Narrows the query results based on the users’ last names.
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
| [slug()](craft-elements-db-elementquery.md#method-slug "Defined by craft\elements\db\ElementQuery")                                         | Narrows the query results based on the {elements}’ slugs.
| [status()](craft-elements-db-userquery.md#method-status)                                                                                    | Narrows the query results based on the users’ statuses.
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
| [uri()](craft-elements-db-elementquery.md#method-uri "Defined by craft\elements\db\ElementQuery")                                           | Narrows the query results based on the {elements}’ URIs.
| [username()](craft-elements-db-userquery.md#method-username)                                                                                | Narrows the query results based on the users’ usernames.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                         | Sets the WHERE part of the query.
| [with()](craft-elements-db-elementquery.md#method-with "Defined by craft\elements\db\ElementQuery")                                         | Causes the query to return matching {elements} eager-loaded with related elements.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                           | Prepends a SQL statement using WITH syntax.
| [withStructure()](craft-elements-db-elementquery.md#method-withstructure "Defined by craft\elements\db\ElementQuery")                       | Explicitly determines whether the query should join in the structure data.

### `__construct()`





Constructor








[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L146-L154)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L159-L166)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `admin()`





Narrows the query results to only users that have admin accounts.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L191-L195)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch admins #}
{% set {elements-var} = {twig-method}
    .admin()
    .all() %}
```

```php
// Fetch admins
${elements-var} = {element-class}::find()
    ->admin()
    ->all();
```
:::


### `can()`





Narrows the query results to only users that have a certain user permission, either directly on the user account or through one of their user groups.

See [Users](https://docs.craftcms.com/v3/users.html) for a full list of available user permissions defined by Craft.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L222-L226)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch users that can access the control panel #}
{% set {elements-var} = {twig-method}
    .can('accessCp')
    .all() %}
```

```php
// Fetch users that can access the control panel
${elements-var} = {element-class}::find()
    ->can('accessCp')
    ->all();
```
:::


### `email()`





Narrows the query results based on the users’ email addresses.

Possible values include:

| Value | Fetches users…
| - | -
| `'foo@bar.baz'` | with an email of `foo@bar.baz`.
| `'not foo@bar.baz'` | not with an email of `foo@bar.baz`.
| `'*@bar.baz'` | with an email that ends with `@bar.baz`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L347-L351)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch users with a .co.uk domain on their email address #}
{% set {elements-var} = {twig-method}
    .email('*.co.uk')
    .all() %}
```

```php
// Fetch users with a .co.uk domain on their email address
${elements-var} = {php-method}
    ->email('*.co.uk')
    ->all();
```
:::


### `firstName()`





Narrows the query results based on the users’ first names.

Possible values include:

| Value | Fetches users…
| - | -
| `'Jane'` | with a first name of `Jane`.
| `'not Jane'` | not with a first name of `Jane`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L425-L429)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all the Jane's #}
{% set {elements-var} = {twig-method}
    .firstName('Jane')
    .all() %}
```

```php
// Fetch all the Jane's
${elements-var} = {php-method}
    ->firstName('Jane')
    ->one();
```
:::


### `group()`





Narrows the query results based on the user group the users belong to.

Possible values include:

| Value | Fetches users…
| - | -
| `'foo'` | in a group with a handle of `foo`.
| `'not foo'` | not in a group with a handle of `foo`.
| `['foo', 'bar']` | in a group with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not in a group with a handle of `foo` or `bar`.
| a [UserGroup](craft-models-usergroup.md) object | in a group represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L261-L276)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\UserGroup](craft-models-usergroup.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch users in the Foo user group #}
{% set {elements-var} = {twig-method}
    .group('foo')
    .all() %}
```

```php
// Fetch users in the Foo user group
${elements-var} = {php-method}
    ->group('foo')
    ->all();
```
:::


### `groupId()`





Narrows the query results based on the user group the users belong to, per the groups’ IDs.

Possible values include:

| Value | Fetches users…
| - | -
| `1` | in a group with an ID of 1.
| `'not 1'` | not in a group with an ID of 1.
| `[1, 2]` | in a group with an ID of 1 or 2.
| `['not', 1, 2]` | not in a group with an ID of 1 or 2.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L310-L314)


#### Arguments

- `$value` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch users in a group with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .groupId(1)
    .all() %}
```

```php
// Fetch users in a group with an ID of 1
${elements-var} = {php-method}
    ->groupId(1)
    ->all();
```
:::


### `lastLoginDate()`





Narrows the query results based on the users’ last login dates.

Possible values include:

| Value | Fetches users…
| - | -
| `'>= 2018-04-01'` | that last logged-in on or after 2018-04-01.
| `'< 2018-05-01'` | that last logged-in before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that last logged-in between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L502-L506)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch users that logged in recently #}
{% set aWeekAgo = date('7 days ago')|atom %}

{% set {elements-var} = {twig-method}
    .lastLoginDate(">= #{aWeekAgo}")
    .all() %}
```

```php
// Fetch users that logged in recently
$aWeekAgo = (new \DateTime('7 days ago'))->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->lastLoginDate(">= {$aWeekAgo}")
    ->all();
```
:::


### `lastName()`





Narrows the query results based on the users’ last names.

Possible values include:

| Value | Fetches users…
| - | -
| `'Doe'` | with a last name of `Doe`.
| `'not Doe'` | not with a last name of `Doe`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L461-L465)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch all the Doe's #}
{% set {elements-var} = {twig-method}
    .lastName('Doe')
    .all() %}
```

```php
// Fetch all the Doe's
${elements-var} = {php-method}
    ->lastName('Doe')
    ->one();
```
:::


### `status()`





Narrows the query results based on the users’ statuses.

Possible values include:

| Value | Fetches users…
| - | -
| `'active'` _(default)_ | with active accounts.
| `'suspended'` | with suspended accounts.
| `'pending'` | with accounts that are still pending activation.
| `'locked'` | with locked accounts (regardless of whether they’re active or suspended).
| `['active', 'suspended']` | with active or suspended accounts.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L537-L540)


#### Arguments

- `$value`



---

#### Example

::: code
```twig
{# Fetch active and locked users #}
{% set {elements-var} = {twig-method}
    .status(['active', 'locked'])
    .all() %}
```

```php
// Fetch active and locked users
${elements-var} = {element-class}::find()
    ->status(['active', 'locked'])
    ->all();
```
:::


### `username()`





Narrows the query results based on the users’ usernames.

Possible values include:

| Value | Fetches users…
| - | -
| `'foo'` | with a username of `foo`.
| `'not foo'` | not with a username of `foo`.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L389-L393)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Get the requested username #}
{% set requestedUsername = craft.app.request.getSegment(2) %}

{# Fetch that user #}
{% set {element-var} = {twig-method}
    .username(requestedUsername|literal)
    .one() %}
```

```php
// Get the requested username
$requestedUsername = \Craft::$app->request->getSegment(2);

// Fetch that user
${element-var} = {php-method}
    ->username(\craft\helpers\Db::escapeParam($requestedUsername))
    ->one();
```
:::




## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterPrepare()](craft-elements-db-elementquery.md#method-afterprepare "Defined by craft\elements\db\ElementQuery")                                       | This method is called at the end of preparing an element query for the query builder.
| [beforePrepare()](craft-elements-db-userquery.md#method-beforeprepare)                                                                                    | This method is called at the beginning of preparing an element query for the query builder.
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
| [statusCondition()](craft-elements-db-userquery.md#method-statuscondition)                                                                                | Returns the condition that should be applied to the element query for a given status.

### `beforePrepare()`





This method is called at the beginning of preparing an element query for the query builder.



The main Query object being prepared for the query builder is available via [query](craft-elements-db-elementquery.md#query).
The subselect’s Query object being prepared is available via [subQuery](craft-elements-db-elementquery.md#subquery).
The role of the subselect query is to apply conditions to the query and narrow the result set down to
just the elements that should actually be returned.
The role of the main query is to join in any tables that should be included in the results, and select
all of the columns that should be included in the results.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L545-L619)



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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/UserQuery.php#L624-L649)


#### Arguments

- `$status` ([string](http://php.net/language.types.string)) – The status

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The status condition, or false if $status is an unsupported status








