---
title: craft\commerce\elements\db\ProductQuery
code:
  - php
  - twig
---

# ProductQuery

Type

:   Class

Namespace

:   craft\commerce\elements\db

Inherits

:   [craft\commerce\elements\db\ProductQuery](craft-commerce-elements-db-productquery.md) &raquo;
[craft\elements\db\ElementQuery](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html) &raquo;
[craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html) &raquo;
[yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [craft\elements\db\ElementQueryInterface](https://docs.craftcms.com/api/v3/craft-elements-db-elementqueryinterface.html), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Uses traits

:   [craft\base\ClonefixTrait](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\db\QueryTrait](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait)

Since

:   2.0



ProductQuery represents a SELECT SQL statement for products in a way that is independent of DBMS.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php)


## Public Properties

| Property                                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [ancestorDist](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#ancestordist "Defined by craft\elements\db\ElementQuery")             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [ancestorOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ancestorof).
| [ancestorOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#ancestorof "Defined by craft\elements\db\ElementQuery")                 | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that results must be an ancestor of.
| [archived](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#archived "Defined by craft\elements\db\ElementQuery")                     | [boolean](http://php.net/language.types.boolean) – Whether to return only archived elements.
| [asArray](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#asarray "Defined by craft\elements\db\ElementQuery")                       | [boolean](http://php.net/language.types.boolean) – Whether to return each element as an array.
| [availableForPurchase](craft-commerce-elements-db-productquery.md#availableforpurchase)                                                                   | [boolean](http://php.net/language.types.boolean) – Whether the product is available for purchase
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cachedResult](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#cachedresult "Defined by craft\elements\db\ElementQuery")             | [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – $elements The resulting elements, or null if setCachedResult() was never called or the criteria has changed
| [contentTable](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#contenttable "Defined by craft\elements\db\ElementQuery")             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The content table that will be joined by this query.
| [criteria](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#criteria "Defined by craft\elements\db\ElementQuery")                     | [array](http://php.net/language.types.array)
| [customFields](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#customfields "Defined by craft\elements\db\ElementQuery")             | [craft\base\FieldInterface](https://docs.craftcms.com/api/v3/craft-base-fieldinterface.html), [null](http://php.net/language.types.null) – The fields that may be involved in this query.
| [dateCreated](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#datecreated "Defined by craft\elements\db\ElementQuery")               | `mixed` – When the resulting elements must have been created.
| [dateUpdated](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#dateupdated "Defined by craft\elements\db\ElementQuery")               | `mixed` – When the resulting elements must have been last updated.
| [defaultHeight](craft-commerce-elements-db-productquery.md#defaultheight)                                                                                 | [float](http://php.net/language.types.float) – The default height the resulting products must have.
| [defaultLength](craft-commerce-elements-db-productquery.md#defaultlength)                                                                                 | [float](http://php.net/language.types.float) – The default length the resulting products must have.
| [defaultPrice](craft-commerce-elements-db-productquery.md#defaultprice)                                                                                   | [float](http://php.net/language.types.float) – The default price the resulting products must have.
| [defaultSku](craft-commerce-elements-db-productquery.md#defaultsku)                                                                                       | `mixed` – The default sku the resulting products must have.
| [defaultWeight](craft-commerce-elements-db-productquery.md#defaultweight)                                                                                 | [float](http://php.net/language.types.float) – The default weight the resulting products must have.
| [defaultWidth](craft-commerce-elements-db-productquery.md#defaultwidth)                                                                                   | [float](http://php.net/language.types.float) – The default width the resulting products must have.
| [descendantDist](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#descendantdist "Defined by craft\elements\db\ElementQuery")         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of levels that results may be separated from [descendantOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-descendantof).
| [descendantOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#descendantof "Defined by craft\elements\db\ElementQuery")             | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that results must be a descendant of.
| [distinct](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$distinct-detail "Defined by yii\db\Query")                                              | [boolean](http://php.net/language.types.boolean) – Whether to select distinct rows of data only.
| [draftCreator](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#draftcreator "Defined by craft\elements\db\ElementQuery")             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The drafts’ creator ID
| [draftId](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#draftid "Defined by craft\elements\db\ElementQuery")                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the draft to return (from the `drafts` table)
| [draftOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#draftof "Defined by craft\elements\db\ElementQuery")                       | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The source element ID that drafts should be returned for.
| [drafts](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#drafts "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether draft elements should be returned.
| [editable](craft-commerce-elements-db-productquery.md#editable)                                                                                           | [boolean](http://php.net/language.types.boolean) – Whether to only return products that the user has permission to edit.
| [elementType](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#elementtype "Defined by craft\elements\db\ElementQuery")               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The name of the [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html) class.
| [emulateExecution](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$emulateExecution-detail "Defined by yii\db\QueryTrait")                    | [boolean](http://php.net/language.types.boolean) – Whether to emulate the actual query execution, returning empty or false results.
| [enabledForSite](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#enabledforsite "Defined by craft\elements\db\ElementQuery")         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be enabled for the chosen site.
| [expiryDate](craft-commerce-elements-db-productquery.md#expirydate)                                                                                       | `mixed` – The Post Date that the resulting products must have.
| [fixedOrder](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#fixedorder "Defined by craft\elements\db\ElementQuery")                 | [boolean](http://php.net/language.types.boolean) – Whether results should be returned in the order specified by [id()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-id).
| [from](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$from-detail "Defined by yii\db\Query")                                                      | [array](http://php.net/language.types.array) – The table(s) to be selected from.
| [groupBy](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$groupBy-detail "Defined by yii\db\Query")                                                | [array](http://php.net/language.types.array) – How to group the query results.
| [hasDescendants](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#hasdescendants "Defined by craft\elements\db\ElementQuery")         | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the resulting elements must have descendants.
| [hasVariant](craft-commerce-elements-db-productquery.md#hasvariant)                                                                                       | [craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md), [array](http://php.net/language.types.array) – Only return products that match the resulting variant query.
| [having](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$having-detail "Defined by yii\db\Query")                                                  | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – The condition to be applied in the GROUP BY clause.
| [id](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#id "Defined by craft\elements\db\ElementQuery")                                 | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The element ID(s).
| [ignorePlaceholders](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#ignoreplaceholders "Defined by craft\elements\db\ElementQuery") | [boolean](http://php.net/language.types.boolean) – Whether to ignore placeholder elements when populating the results.
| [inReverse](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#inreverse "Defined by craft\elements\db\ElementQuery")                   | [boolean](http://php.net/language.types.boolean) – Whether the results should be queried in reverse.
| [indexBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$indexBy-detail "Defined by yii\db\QueryTrait")                                      | [string](http://php.net/language.types.string), [callable](http://php.net/language.types.callable) – The name of the column by which the query results should be indexed by.
| [iterator](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#iterator "Defined by craft\elements\db\ElementQuery")                     | [ArrayIterator](http://php.net/class.arrayiterator)
| [join](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$join-detail "Defined by yii\db\Query")                                                      | [array](http://php.net/language.types.array) – How to join with other tables.
| [leaves](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#leaves "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether the elements must be “leaves” in the structure.
| [level](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#level "Defined by craft\elements\db\ElementQuery")                           | `mixed` – The element’s level within the structure
| [limit](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$limit-detail "Defined by yii\db\QueryTrait")                                          | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Maximum number of records to be returned.
| [nextSiblingOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#nextsiblingof "Defined by craft\elements\db\ElementQuery")           | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the next sibling of.
| [offset](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$offset-detail "Defined by yii\db\QueryTrait")                                        | [integer](http://php.net/language.types.integer), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Zero-based offset from where the records are to be returned.
| [orderBy](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$orderBy-detail "Defined by yii\db\QueryTrait")                                      | [array](http://php.net/language.types.array) – How to sort the query results.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$params-detail "Defined by yii\db\Query")                                                  | [array](http://php.net/language.types.array) – List of query parameter values indexed by parameter placeholders.
| [positionedAfter](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#positionedafter "Defined by craft\elements\db\ElementQuery")       | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned after.
| [positionedBefore](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#positionedbefore "Defined by craft\elements\db\ElementQuery")     | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be positioned before.
| [postDate](craft-commerce-elements-db-productquery.md#postdate)                                                                                           | `mixed` – The Post Date that the resulting products must have.
| [preferSites](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#prefersites "Defined by craft\elements\db\ElementQuery")               | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Determines which site should be selected when querying multi-site elements.
| [prevSiblingOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#prevsiblingof "Defined by craft\elements\db\ElementQuery")           | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that the result must be the previous sibling of.
| [query](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#query "Defined by craft\elements\db\ElementQuery")                           | [craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html), [null](http://php.net/language.types.null) – The query object created by [prepare()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-prepare)
| [queryCacheDependency](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDependency-detail "Defined by yii\db\Query")                      | [yii\caching\Dependency](https://www.yiiframework.com/doc/api/2.0/yii-caching-dependency) – The dependency to be associated with the cached query result for this query
| [queryCacheDuration](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$queryCacheDuration-detail "Defined by yii\db\Query")                          | [integer](http://php.net/language.types.integer), [true](http://php.net/language.types.boolean) – The default number of seconds that query results can remain valid in cache.
| [rawSql](https://docs.craftcms.com/api/v3/craft-db-query.html#rawsql "Defined by craft\db\Query")                                                         | [string](http://php.net/language.types.string)
| [ref](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#ref "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The reference code(s) used to identify the element(s).
| [relatedTo](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#relatedto "Defined by craft\elements\db\ElementQuery")                   | [integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element relation criteria.
| [revisionCreator](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#revisioncreator "Defined by craft\elements\db\ElementQuery")       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The revisions’ creator ID
| [revisionId](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#revisionid "Defined by craft\elements\db\ElementQuery")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The ID of the revision to return (from the `revisions` table)
| [revisionOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#revisionof "Defined by craft\elements\db\ElementQuery")                 | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The source element ID that revisions should be returned for
| [revisions](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#revisions "Defined by craft\elements\db\ElementQuery")                   | [boolean](http://php.net/language.types.boolean) – Whether revision elements should be returned.
| [search](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#search "Defined by craft\elements\db\ElementQuery")                         | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](https://docs.craftcms.com/api/v3/craft-search-searchquery.html), [null](http://php.net/language.types.null) – The search term to filter the resulting elements by.
| [select](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$select-detail "Defined by yii\db\Query")                                                  | [array](http://php.net/language.types.array) – The columns being selected.
| [selectOption](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$selectOption-detail "Defined by yii\db\Query")                                      | [string](http://php.net/language.types.string) – Additional option that should be appended to the 'SELECT' keyword.
| [siblingOf](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#siblingof "Defined by craft\elements\db\ElementQuery")                   | [integer](http://php.net/language.types.integer), [craft\base\ElementInterface](https://docs.craftcms.com/api/v3/craft-base-elementinterface.html), [null](http://php.net/language.types.null) – The element (or its ID) that the results must be a sibling of.
| [siteId](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#siteid "Defined by craft\elements\db\ElementQuery")                         | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The site ID(s) that the elements should be returned in, or `'*'` if elements should be returned in all supported sites.
| [slug](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#slug "Defined by craft\elements\db\ElementQuery")                             | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The slug that resulting elements must have.
| [status](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#status "Defined by craft\elements\db\ElementQuery")                         | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The status(es) that the resulting elements must have.
| [structureId](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#structureid "Defined by craft\elements\db\ElementQuery")               | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The structure ID that should be used to join in the structureelements table.
| [subQuery](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#subquery "Defined by craft\elements\db\ElementQuery")                     | [craft\db\Query](https://docs.craftcms.com/api/v3/craft-db-query.html), [null](http://php.net/language.types.null) – The subselect’s query object created by [prepare()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-prepare)
| [tablesUsedInFrom](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$tablesUsedInFrom-detail "Defined by yii\db\Query")                              | [string](http://php.net/language.types.string)[] – Table names indexed by aliases
| [title](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#title "Defined by craft\elements\db\ElementQuery")                           | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The title that resulting elements must have.
| [trashed](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#trashed "Defined by craft\elements\db\ElementQuery")                       | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to return trashed (soft-deleted) elements.
| [typeId](craft-commerce-elements-db-productquery.md#typeid)                                                                                               | [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null) – The product type ID(s) that the resulting products must have.
| [uid](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#uid "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The element UID(s).
| [union](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$union-detail "Defined by yii\db\Query")                                                    | [array](http://php.net/language.types.array) – This is used to construct the UNION clause(s) in a SQL statement.
| [unique](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#unique "Defined by craft\elements\db\ElementQuery")                         | [boolean](http://php.net/language.types.boolean) – Whether only elements with unique IDs should be returned by the query.
| [uri](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#uri "Defined by craft\elements\db\ElementQuery")                               | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – The URI that the resulting element must have.
| [where](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#$where-detail "Defined by yii\db\QueryTrait")                                          | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface) – Query condition.
| [with](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#with "Defined by craft\elements\db\ElementQuery")                             | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The eager-loading declaration.
| [withQueries](https://www.yiiframework.com/doc/api/2.0/yii-db-query#$withQueries-detail "Defined by yii\db\Query")                                        | [array](http://php.net/language.types.array) – This is used to construct the WITH section in a SQL query.
| [withStructure](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#withstructure "Defined by craft\elements\db\ElementQuery")           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether element structure data should automatically be left-joined into the query.

### `availableForPurchase`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the product is available for purchase



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L48)



### `defaultHeight`



Type

:   [float](http://php.net/language.types.float)



The default height the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L68)



### `defaultLength`



Type

:   [float](http://php.net/language.types.float)



The default length the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L73)



### `defaultPrice`



Type

:   [float](http://php.net/language.types.float)



The default price the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L63)



### `defaultSku`



Type

:   `mixed`



The default sku the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L88)



### `defaultWeight`



Type

:   [float](http://php.net/language.types.float)



The default weight the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L83)



### `defaultWidth`



Type

:   [float](http://php.net/language.types.float)



The default width the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L78)



### `editable`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to only return products that the user has permission to edit.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L53)



### `expiryDate`



Type

:   `mixed`



The Post Date that the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L58)



### `hasVariant`



Type

:   [craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md), [array](http://php.net/language.types.array)



Only return products that match the resulting variant query.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L93)



### `postDate`



Type

:   `mixed`



The Post Date that the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L98)



### `typeId`



Type

:   [integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)



The product type ID(s) that the resulting products must have.



[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L103)





## Protected Properties

| Property                                                                    | Description
| --------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defaultOrderBy](craft-commerce-elements-db-productquery.md#defaultorderby) | [array](http://php.net/language.types.array) – The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.

### `defaultOrderBy`



Type

:   [array](http://php.net/language.types.array)





The default [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) value to use if [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail) is empty but not null.





[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L108)





## Public Methods

| Method                                                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-__call "Defined by craft\elements\db\ElementQuery")                         | Calls the named method which is not a class method.
| [__clone()](https://docs.craftcms.com/api/v3/craft-base-clonefixtrait.html#method-__clone "Defined by craft\base\ClonefixTrait")                                   |
| [__construct()](craft-commerce-elements-db-productquery.md#method-construct)                                                                                       | Constructor
| [__get()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-__get "Defined by craft\elements\db\ElementQuery")                           | Returns the value of a component property.
| [__isset()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-__isset "Defined by craft\elements\db\ElementQuery")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-commerce-elements-db-productquery.md#method-set)                                                                                                   | Sets the value of a component property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#__toString()-detail "Defined by yii\db\Query")                                                | Returns the SQL representation of Query
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                                          | Sets a component property to be null.
| [addGroupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addGroupBy()-detail "Defined by yii\db\Query")                                                | Adds additional group-by columns to the existing ones.
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#addOrderBy()-detail "Defined by yii\db\QueryTrait")                                      | Adds additional ORDER BY columns to the query.
| [addParams()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addParams()-detail "Defined by yii\db\Query")                                                  | Adds additional parameters to be bound to the query.
| [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail "Defined by yii\db\Query")                                                  | Add more columns to the SELECT part of the query.
| [after()](craft-commerce-elements-db-productquery.md#method-after)                                                                                                 | Narrows the query results to only products that were posted on or after a certain date.
| [all()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-all "Defined by craft\elements\db\ElementQuery")                               | Executes the query and returns all results as an array.
| [ancestorDist()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ancestordist "Defined by craft\elements\db\ElementQuery")             | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ancestorof).
| [ancestorOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ancestorof "Defined by craft\elements\db\ElementQuery")                 | Narrows the query results to only {elements} that are ancestors of another {element}.
| [andFilterCompare()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterCompare()-detail "Defined by yii\db\Query")                                    | Adds a filtering condition for a specific column and allow the user to choose a filter operator.
| [andFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andFilterHaving()-detail "Defined by yii\db\Query")                                      | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andFilterWhere()-detail "Defined by yii\db\QueryTrait")                              | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [andHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#andHaving()-detail "Defined by yii\db\Query")                                                  | Adds an additional HAVING condition to the existing one.
| [andWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#andWhere()-detail "Defined by yii\db\QueryTrait")                                          | Adds an additional WHERE condition to the existing one.
| [andWith()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-andwith "Defined by craft\elements\db\ElementQuery")                       | Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-with).
| [anyStatus()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-anystatus "Defined by craft\elements\db\ElementQuery")                   | Clears out the [status()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-status) and [enabledForSite()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-enabledforsite) parameters.
| [archived()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-archived "Defined by craft\elements\db\ElementQuery")                     | Sets the [archived](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#archived) property.
| [asArray()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-asarray "Defined by craft\elements\db\ElementQuery")                       | Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                            | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                          | Attaches a list of behaviors to the component.
| [availableForPurchase()](craft-commerce-elements-db-productquery.md#method-availableforpurchase)                                                                   | Narrows the query results to only products that are available for purchase.
| [average()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#average()-detail "Defined by yii\db\Query")                                                      | Returns the average of the specified column values.
| [batch()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#batch()-detail "Defined by yii\db\Query")                                                          | Starts a batch query.
| [before()](craft-commerce-elements-db-productquery.md#method-before)                                                                                               | Narrows the query results to only products that were posted before a certain date.
| [behaviors()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-behaviors "Defined by craft\elements\db\ElementQuery")                   | Returns a list of behaviors that this component should behave as.
| [cache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cache()-detail "Defined by yii\db\Query")                                                          | Enables query cache for this Query.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")                            | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                    | Returns the fully qualified name of this class.
| [clearCachedResult()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-clearcachedresult "Defined by craft\elements\db\ElementQuery")   | Clears the cached result.
| [column()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-column "Defined by craft\elements\db\ElementQuery")                         | Executes the query and returns the first column of the result.
| [count()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-count "Defined by craft\elements\db\ElementQuery")                           | Returns the number of records.
| [create()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#create()-detail "Defined by yii\db\Query")                                                        | Creates a new Query object and copies its property values from an existing one.
| [createCommand()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#createCommand()-detail "Defined by yii\db\Query")                                          | Creates a DB command that can be used to execute this query.
| [criteriaAttributes()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-criteriaattributes "Defined by craft\elements\db\ElementQuery") | Returns the query's criteria attributes.
| [dateCreated()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-datecreated "Defined by craft\elements\db\ElementQuery")               | Narrows the query results based on the {elements}’ creation dates.
| [dateUpdated()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-dateupdated "Defined by craft\elements\db\ElementQuery")               | Narrows the query results based on the {elements}’ last-updated dates.
| [descendantDist()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-descendantdist "Defined by craft\elements\db\ElementQuery")         | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-descendantof).
| [descendantOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-descendantof "Defined by craft\elements\db\ElementQuery")             | Narrows the query results to only {elements} that are descendants of another {element}.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                            | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                          | Detaches all behaviors from the component.
| [distinct()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#distinct()-detail "Defined by yii\db\Query")                                                    | Sets the value indicating whether to SELECT DISTINCT or not.
| [draftCreator()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-draftcreator "Defined by craft\elements\db\ElementQuery")             | Narrows the query results to only drafts created by a given user.
| [draftId()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-draftid "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results based on the {elements}’ draft’s ID (from the `drafts` table).
| [draftOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-draftof "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results to only drafts of a given {element}.
| [drafts()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-drafts "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results to only drafts {elements}.
| [each()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#each()-detail "Defined by yii\db\Query")                                                            | Starts a batch query and retrieves data row by row.
| [editable()](craft-commerce-elements-db-productquery.md#method-editable)                                                                                           | Sets the [editable()](craft-commerce-elements-db-productquery.md#method-editable) property.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#emulateExecution()-detail "Defined by yii\db\QueryTrait")                          | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-enabledforsite "Defined by craft\elements\db\ElementQuery")         | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-site) parameter.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                          | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-exists "Defined by craft\elements\db\ElementQuery")                         | Returns a value indicating whether the query result contains any row of data.
| [expiryDate()](craft-commerce-elements-db-productquery.md#method-expirydate)                                                                                       | Narrows the query results based on the products’ expiry dates.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")                        | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")                                  | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [filterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#filterHaving()-detail "Defined by yii\db\Query")                                            | Sets the HAVING part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterWhere()-detail "Defined by yii\db\QueryTrait")                                    | Sets the WHERE part of the query but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [find()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-find "Defined by craft\elements\db\ElementQuery")                             | Returns all elements that match the criteria.
| [first()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-first "Defined by craft\elements\db\ElementQuery")                           | Returns the first element that matches the criteria.
| [fixedOrder()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-fixedorder "Defined by craft\elements\db\ElementQuery")                 | Causes the query results to be returned in the order specified by [id()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-id).
| [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail "Defined by yii\db\Query")                                                            | Sets the FROM part of the query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                  | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                | Returns all behaviors attached to this component.
| [getCachedResult()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-getcachedresult "Defined by craft\elements\db\ElementQuery")       | Returns the resulting elements set by [setCachedResult()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-setcachedresult), if the criteria params haven’t changed since then.
| [getCriteria()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-getcriteria "Defined by craft\elements\db\ElementQuery")               | Returns an array of the current criteria attribute values.
| [getIterator()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-getiterator "Defined by craft\elements\db\ElementQuery")               | Required by the IteratorAggregate interface.
| [getRawSql()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-getrawsql "Defined by craft\db\Query")                                                   | Shortcut for `createCommand()->getRawSql()`.
| [getTablesUsedInFrom()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getTablesUsedInFrom()-detail "Defined by yii\db\Query")                              | Returns table names used in [from()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#from()-detail) indexed by aliases.
| [groupBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#groupBy()-detail "Defined by yii\db\Query")                                                      | Sets the GROUP BY part of the query.
| [hasDescendants()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-hasdescendants "Defined by craft\elements\db\ElementQuery")         | Narrows the query results based on whether the {elements} have any descendants.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                        | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")                                      | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")                                  | Returns a value indicating whether a property is defined for this component.
| [hasVariant()](craft-commerce-elements-db-productquery.md#method-hasvariant)                                                                                       | Narrows the query results to only products that have certain variants.
| [having()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#having()-detail "Defined by yii\db\Query")                                                        | Sets the HAVING part of the query.
| [id()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-id "Defined by craft\elements\db\ElementQuery")                                 | Narrows the query results based on the {elements}’ IDs.
| [ids()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ids "Defined by craft\elements\db\ElementQuery")                               | Executes the query and returns the IDs of the resulting elements.
| [ignorePlaceholders()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ignoreplaceholders "Defined by craft\elements\db\ElementQuery") | Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder elements that were set by [craft\services\Elements::setPlaceholderElement()](https://docs.craftcms.com/api/v3/craft-services-elements.html#method-setplaceholderelement).
| [inReverse()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-inreverse "Defined by craft\elements\db\ElementQuery")                   | Causes the query results to be returned in reverse order.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail "Defined by yii\db\QueryTrait")                                            | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#indexBy()-detail) property.
| [init()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-init "Defined by craft\db\Query")                                                             | Initializes the object.
| [innerJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#innerJoin()-detail "Defined by yii\db\Query")                                                  | Appends an INNER JOIN part to the query.
| [isJoined()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-isjoined "Defined by craft\db\Query")                                                     | Returns whether a given table has been joined in this query.
| [join()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#join()-detail "Defined by yii\db\Query")                                                            | Appends a JOIN part to the query.
| [last()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-last "Defined by craft\elements\db\ElementQuery")                             | Returns the last element that matches the criteria.
| [leaves()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-leaves "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).
| [leftJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#leftJoin()-detail "Defined by yii\db\Query")                                                    | Appends a LEFT OUTER JOIN part to the query.
| [level()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-level "Defined by craft\elements\db\ElementQuery")                           | Narrows the query results based on the {elements}’ level within the structure.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#limit()-detail "Defined by yii\db\QueryTrait")                                                | Determines the number of {elements} that should be returned.
| [locale()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-locale "Defined by craft\elements\db\ElementQuery")                         | Sets the `\craft\elements\db\$site` property.
| [localeEnabled()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-localeenabled "Defined by craft\elements\db\ElementQuery")           | Sets the [enabledForSite](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#enabledforsite) property.
| [max()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#max()-detail "Defined by yii\db\Query")                                                              | Returns the maximum of the specified column values.
| [min()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#min()-detail "Defined by yii\db\Query")                                                              | Returns the minimum of the specified column values.
| [nextSiblingOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-nextsiblingof "Defined by craft\elements\db\ElementQuery")           | Narrows the query results to only the {element} that comes immediately after another {element}.
| [noCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#noCache()-detail "Defined by yii\db\Query")                                                      | Disables query cache for this Query.
| [nth()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-nth "Defined by craft\elements\db\ElementQuery")                               | Executes the query and returns a single row of result at a given offset.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                  | Detaches an existing event handler from this component.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#offset()-detail "Defined by yii\db\QueryTrait")                                              | Determines how many {elements} should be skipped in the results.
| [offsetExists()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-offsetexists "Defined by craft\elements\db\ElementQuery")             | Required by the ArrayAccess interface.
| [offsetGet()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-offsetget "Defined by craft\elements\db\ElementQuery")                   | Required by the ArrayAccess interface.
| [offsetSet()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-offsetset "Defined by craft\elements\db\ElementQuery")                   | Required by the ArrayAccess interface.
| [offsetUnset()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-offsetunset "Defined by craft\elements\db\ElementQuery")               | Required by the ArrayAccess interface.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                    | Attaches an event handler to an event.
| [one()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-one "Defined by craft\elements\db\ElementQuery")                               | Executes the query and returns a single row of result.
| [orFilterHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orFilterHaving()-detail "Defined by yii\db\Query")                                        | Adds an additional HAVING condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orFilterWhere()-detail "Defined by yii\db\QueryTrait")                                | Adds an additional WHERE condition to the existing one but ignores [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail).
| [orHaving()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#orHaving()-detail "Defined by yii\db\Query")                                                    | Adds an additional HAVING condition to the existing one.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orWhere()-detail "Defined by yii\db\QueryTrait")                                            | Adds an additional WHERE condition to the existing one.
| [order()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-order "Defined by craft\elements\db\ElementQuery")                           | Sets the [orderBy](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#orderby) property.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#orderBy()-detail "Defined by yii\db\QueryTrait")                                            | Determines the order that the {elements} should be returned in. (If empty, defaults to `{default-order-by}`.)
| [pairs()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-pairs "Defined by craft\db\Query")                                                           | Executes the query and returns the first two columns in the results as key/value pairs.
| [params()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#params()-detail "Defined by yii\db\Query")                                                        | Sets the parameters to be bound to the query.
| [populate()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-populate "Defined by craft\elements\db\ElementQuery")                     | Converts the raw query results into the format as specified by this query.
| [positionedAfter()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-positionedafter "Defined by craft\elements\db\ElementQuery")       | Narrows the query results to only {elements} that are positioned after another {element}.
| [positionedBefore()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-positionedbefore "Defined by craft\elements\db\ElementQuery")     | Narrows the query results to only {elements} that are positioned before another {element}.
| [postDate()](craft-commerce-elements-db-productquery.md#method-postdate)                                                                                           | Narrows the query results based on the products’ post dates.
| [preferSites()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-prefersites "Defined by craft\elements\db\ElementQuery")               | If [unique()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-unique) is set, this determines which site should be selected when querying multi-site elements.
| [prepare()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-prepare "Defined by craft\elements\db\ElementQuery")                       | Prepares for building SQL.
| [prevSiblingOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-prevsiblingof "Defined by craft\elements\db\ElementQuery")           | Narrows the query results to only the {element} that comes immediately before another {element}.
| [ref()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-ref "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results based on a reference string.
| [relatedTo()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-relatedto "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only {elements} that are related to certain other elements.
| [revisionCreator()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-revisioncreator "Defined by craft\elements\db\ElementQuery")       | Narrows the query results to only revisions created by a given user.
| [revisionId()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-revisionid "Defined by craft\elements\db\ElementQuery")                 | Narrows the query results based on the {elements}’ revision’s ID (from the `revisions` table).
| [revisionOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-revisionof "Defined by craft\elements\db\ElementQuery")                 | Narrows the query results to only revisions of a given {element}.
| [revisions()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-revisions "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only revision {elements}.
| [rightJoin()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#rightJoin()-detail "Defined by yii\db\Query")                                                  | Appends a RIGHT OUTER JOIN part to the query.
| [scalar()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-scalar "Defined by craft\db\Query")                                                         | Returns the query result as a scalar value.
| [search()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-search "Defined by craft\elements\db\ElementQuery")                         | Narrows the query results to only {elements} that match a search query.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail "Defined by yii\db\Query")                                                        | Sets the SELECT part of the query.
| [setCachedResult()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-setcachedresult "Defined by craft\elements\db\ElementQuery")       | Sets the resulting elements.
| [siblingOf()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-siblingof "Defined by craft\elements\db\ElementQuery")                   | Narrows the query results to only {elements} that are siblings of another {element}.
| [site()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-site "Defined by craft\elements\db\ElementQuery")                             | Determines which site(s) the {elements} should be queried in.
| [siteId()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-siteid "Defined by craft\elements\db\ElementQuery")                         | Determines which site(s) the {elements} should be queried in, per the site’s ID.
| [slug()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-slug "Defined by craft\elements\db\ElementQuery")                             | Narrows the query results based on the {elements}’ slugs.
| [status()](craft-commerce-elements-db-productquery.md#method-status)                                                                                               | Narrows the query results based on the {elements}’ statuses.
| [structureId()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-structureid "Defined by craft\elements\db\ElementQuery")               | Determines which structure data should be joined into the query.
| [sum()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#sum()-detail "Defined by yii\db\Query")                                                              | Returns the sum of the specified column values.
| [title()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-title "Defined by craft\elements\db\ElementQuery")                           | Narrows the query results based on the {elements}’ titles.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")                                | Converts the model into an array.
| [total()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-total "Defined by craft\elements\db\ElementQuery")                           | Returns the total elements that match the criteria.
| [trashed()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-trashed "Defined by craft\elements\db\ElementQuery")                       | Narrows the query results to only {elements} that have been soft-deleted.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                          | Triggers an event.
| [type()](craft-commerce-elements-db-productquery.md#method-type)                                                                                                   | Narrows the query results based on the products’ types.
| [typeId()](craft-commerce-elements-db-productquery.md#method-typeid)                                                                                               | Narrows the query results based on the products’ types, per the types’ IDs.
| [uid()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-uid "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results based on the {elements}’ UIDs.
| [union()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#union()-detail "Defined by yii\db\Query")                                                          | Appends a SQL statement using UNION operator.
| [unique()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-unique "Defined by craft\elements\db\ElementQuery")                         | Determines whether only elements with unique IDs should be returned by the query.
| [uri()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-uri "Defined by craft\elements\db\ElementQuery")                               | Narrows the query results based on the {elements}’ URIs.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#where()-detail "Defined by yii\db\QueryTrait")                                                | Sets the WHERE part of the query.
| [with()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-with "Defined by craft\elements\db\ElementQuery")                             | Causes the query to return matching {elements} eager-loaded with related elements.
| [withQuery()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#withQuery()-detail "Defined by yii\db\Query")                                                  | Prepends a SQL statement using WITH syntax.
| [withStructure()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-withstructure "Defined by craft\elements\db\ElementQuery")           | Explicitly determines whether the query should join in the structure data.

### `__construct()`





Constructor








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L114-L122)


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




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L127-L142)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `after()`





Narrows the query results to only products that were posted on or after a certain date.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'2018-04-01'` | that were posted after 2018-04-01.
| a [DateTime](http://php.net/class.datetime) object | that were posted after the date represented by the object.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L271-L281)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} posted this month #}
{% set firstDayOfMonth = date('first day of this month') %}

{% set {elements-var} = {twig-method}
    .after(firstDayOfMonth)
    .all() %}
```

```php
// Fetch {elements} posted this month
$firstDayOfMonth = new \DateTime('first day of this month');

${elements-var} = {php-method}
    ->after($firstDayOfMonth)
    ->all();
```
:::


### `availableForPurchase()`





Narrows the query results to only products that are available for purchase.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L454-L458)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch products that are available for purchase #}
{% set {elements-var} = {twig-function}
    .availableForPurchase()
    .all() %}
```

```php
// Fetch products that are available for purchase
${elements-var} = {element-class}::find()
    ->availableForPurchase()
    ->all();
```
:::


### `before()`





Narrows the query results to only products that were posted before a certain date.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'2018-04-01'` | that were posted before 2018-04-01.
| a [DateTime](http://php.net/class.datetime) object | that were posted before the date represented by the object.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L226-L236)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [DateTime](http://php.net/class.datetime)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} posted before this month #}
{% set firstDayOfMonth = date('first day of this month') %}

{% set {elements-var} = {twig-method}
    .before(firstDayOfMonth)
    .all() %}
```

```php
// Fetch {elements} posted before this month
$firstDayOfMonth = new \DateTime('first day of this month');

${elements-var} = {php-method}
    ->before($firstDayOfMonth)
    ->all();
```
:::


### `editable()`





Sets the [editable()](craft-commerce-elements-db-productquery.md#method-editable) property.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L289-L293)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `expiryDate()`





Narrows the query results based on the products’ expiry dates.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'>= 2020-04-01'` | that will expire on or after 2020-04-01.
| `'< 2020-05-01'` | that will expire before 2020-05-01
| `['and', '>= 2020-04-04', '< 2020-05-01']` | that will expire between 2020-04-01 and 2020-05-01.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L426-L430)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} expiring this month #}
{% set nextMonth = date('first day of next month')|atom %}

{% set {elements-var} = {twig-method}
    .expiryDate("< #{nextMonth}")
    .all() %}
```

```php
// Fetch {elements} expiring this month
$nextMonth = new \DateTime('first day of next month')->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->expiryDate("< {$nextMonth}")
    ->all();
```
:::


### `hasVariant()`





Narrows the query results to only products that have certain variants.

Possible values include:

| Value | Fetches {elements}…
| - | -
| a [VariantQuery](craft-commerce-elements-db-variantquery.md) object | with variants that match the query.


[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L344-L348)


#### Arguments

- `$value` ([craft\commerce\elements\db\VariantQuery](craft-commerce-elements-db-variantquery.md), [array](http://php.net/language.types.array)) – The property value

#### Returns

`static` – Self reference



### `postDate()`





Narrows the query results based on the products’ post dates.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'>= 2018-04-01'` | that were posted on or after 2018-04-01.
| `'< 2018-05-01'` | that were posted before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were posted between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L386-L390)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} posted last month #}
{% set start = date('first day of last month')|atom %}
{% set end = date('first day of this month')|atom %}

{% set {elements-var} = {twig-method}
    .postDate(['and', ">= #{start}", "< #{end}"])
    .all() %}
```

```php
// Fetch {elements} posted last month
$start = new \DateTime('first day of next month')->format(\DateTime::ATOM);
$end = new \DateTime('first day of this month')->format(\DateTime::ATOM);

${elements-var} = {php-method}
    ->postDate(['and', ">= {$start}", "< {$end}"])
    ->all();
```
:::


### `status()`





Narrows the query results based on the {elements}’ statuses.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'live'` _(default)_ | that are live.
| `'pending'` | that are pending (enabled with a Post Date in the future).
| `'expired'` | that are expired (enabled with an Expiry Date in the past).
| `'disabled'` | that are disabled.
| `['live', 'pending']` | that are live or pending.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L489-L492)


#### Arguments

- `$value`



---

#### Example

::: code
```twig
{# Fetch disabled {elements} #}
{% set {elements-var} = {twig-function}
    .status('disabled')
    .all() %}
```

```php
// Fetch disabled {elements}
${elements-var} = {element-class}::find()
    ->status('disabled')
    ->all();
```
:::


### `type()`





Narrows the query results based on the products’ types.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'foo'` | of a type with a handle of `foo`.
| `'not foo'` | not of a type with a handle of `foo`.
| `['foo', 'bar']` | of a type with a handle of `foo` or `bar`.
| `['not', 'foo', 'bar']` | not of a type with a handle of `foo` or `bar`.
| an [ProductType](craft-commerce-models-producttype.md) object | of a type represented by the object.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L176-L191)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\commerce\models\ProductType](craft-commerce-models-producttype.md), [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} with a Foo product type #}
{% set {elements-var} = {twig-method}
    .type('foo')
    .all() %}
```

```php
// Fetch {elements} with a Foo product type
${elements-var} = {php-method}
    ->type('foo')
    ->all();
```
:::


### `typeId()`





Narrows the query results based on the products’ types, per the types’ IDs.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | of a type with an ID of 1.
| `'not 1'` | not of a type with an ID of 1.
| `[1, 2]` | of a type with an ID of 1 or 2.
| `['not', 1, 2]` | not of a type with an ID of 1 or 2.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L326-L330)


#### Arguments

- `$value` (`mixed`) – The property value

#### Returns

`static` – Self reference


---

#### Example

::: code
```twig
{# Fetch {elements} of the product type with an ID of 1 #}
{% set {elements-var} = {twig-method}
    .typeId(1)
    .all() %}
```

```php
// Fetch {elements} of the product type with an ID of 1
${elements-var} = {php-method}
    ->typeId(1)
    ->all();
```
:::




## Protected Methods

| Method                                                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [afterPrepare()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-afterprepare "Defined by craft\elements\db\ElementQuery")         | This method is called at the end of preparing an element query for the query builder.
| [beforePrepare()](craft-commerce-elements-db-productquery.md#method-beforeprepare)                                                                             | This method is called at the beginning of preparing an element query for the query builder.
| [cleanUpTableNames()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#cleanUpTableNames()-detail "Defined by yii\db\Query")                              | Clean up table names and aliases Both aliases and names are enclosed into {{ and }}.
| [customFields()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-customfields "Defined by craft\elements\db\ElementQuery")         | Returns the fields that should take part in an upcoming elements query.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")          | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait")        | Extracts the root field names from nested fields.
| [filterCondition()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#filterCondition()-detail "Defined by yii\db\QueryTrait")                        | Removes [empty operands](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail) from the given query condition.
| [getUnaliasedColumnsFromSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUnaliasedColumnsFromSelect()-detail "Defined by yii\db\Query")      |
| [getUniqueColumns()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#getUniqueColumns()-detail "Defined by yii\db\Query")                                | Returns unique column names excluding duplicates.
| [isEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#isEmpty()-detail "Defined by yii\db\QueryTrait")                                        | Returns a value indicating whether the give value is "empty".
| [joinElementTable()](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#method-joinelementtable "Defined by craft\elements\db\ElementQuery") | Joins in a table with an `id` column that has a foreign key pointing to `craft_elements`.`id`.
| [normalizeOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-querytrait#normalizeOrderBy()-detail "Defined by yii\db\QueryTrait")                      | Normalizes format of ORDER BY data.
| [normalizeSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#normalizeSelect()-detail "Defined by yii\db\Query")                                  | Normalizes the SELECT columns passed to [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) or [addSelect()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#addSelect()-detail).
| [queryScalar()](https://docs.craftcms.com/api/v3/craft-db-query.html#method-queryscalar "Defined by craft\db\Query")                                           | Queries a scalar value by setting [select()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#select()-detail) first.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")                | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [setCommandCache()](https://www.yiiframework.com/doc/api/2.0/yii-db-query#setCommandCache()-detail "Defined by yii\db\Query")                                  | Sets $command cache, if this query has enabled caching.
| [statusCondition()](craft-commerce-elements-db-productquery.md#method-statuscondition)                                                                         | Returns the condition that should be applied to the element query for a given status.

### `beforePrepare()`





This method is called at the beginning of preparing an element query for the query builder.



The main Query object being prepared for the query builder is available via [query](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#query).
The subselect’s Query object being prepared is available via [subQuery](https://docs.craftcms.com/api/v3/craft-elements-db-elementquery.html#subquery).
The role of the subselect query is to apply conditions to the query and narrow the result set down to
just the elements that should actually be returned.
The role of the main query is to join in any tables that should be included in the results, and select
all of the columns that should be included in the results.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L498-L578)



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




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/db/ProductQuery.php#L583-L624)


#### Arguments

- `$status` ([string](http://php.net/language.types.string)) – The status

#### Returns

[string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [yii\db\ExpressionInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-expressioninterface), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The status condition, or false if $status is an unsupported status








