---
title: craft\services\Search
code:
  - php
  - twig
---

# Search

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Search](craft-services-search.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Handles search operations.

An instance of the Search service is globally accessible in Craft via [`Craft::$app->search`](craft-base-applicationtrait.md#method-getsearch).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [maxPostgresKeywordLength](craft-services-search.md#maxpostgreskeywordlength)                                              | [integer](http://php.net/language.types.integer) – Because the `keywords` column in the search index table is a B-TREE index on Postgres, you can get an "index row size exceeds maximum for index" error with a lot of data.
| [minFullTextWordLength](craft-services-search.md#minfulltextwordlength)                                                    | [integer](http://php.net/language.types.integer) – The minimum word length that keywords must be in order to use a full-text search.
| [useFullText](craft-services-search.md#usefulltext)                                                                        | [boolean](http://php.net/language.types.boolean) – Whether fulltext searches should be used ever.

### `maxPostgresKeywordLength`



Type

:   [integer](http://php.net/language.types.integer)



Because the `keywords` column in the search index table is a
B-TREE index on Postgres, you can get an "index row size exceeds maximum
for index" error with a lot of data. This value is a hard limit to
truncate search index data for a single row in Postgres.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L79)



### `minFullTextWordLength`



Type

:   [integer](http://php.net/language.types.integer)



The minimum word length that keywords must be in order to use a full-text search.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L56)



### `useFullText`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.10



Whether fulltext searches should be used ever. (MySQL only.)



[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L51)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteOrphanedIndexes()](craft-services-search.md#method-deleteorphanedindexes)                                                            | Deletes any search indexes that belong to elements that don’t exist anymore.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [filterElementIdsByQuery()](craft-services-search.md#method-filterelementidsbyquery)                                                        | Filters a list of element IDs by a given search query.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [indexElementAttributes()](craft-services-search.md#method-indexelementattributes)                                                          | Indexes the attributes of a given element defined by its element type.
| [indexElementFields()](craft-services-search.md#method-indexelementfields)                                                                  | Indexes the field values for a given element and site.
| [init()](craft-services-search.md#method-init)                                                                                              | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteOrphanedIndexes()`



Since

:   3.2.10



Deletes any search indexes that belong to elements that don’t exist anymore.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L337-L356)






### `filterElementIdsByQuery()`





Filters a list of element IDs by a given search query.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L206-L330)


#### Arguments

- `$elementIds` ([integer](http://php.net/language.types.integer)[]) – The list of element IDs to filter by the search query.
- `$query` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\search\SearchQuery](craft-search-searchquery.md)) – The search query (either a string or a SearchQuery instance)
- `$scoreResults` ([boolean](http://php.net/language.types.boolean)) – Whether to order the results based on how closely they match the query.
- `$siteId` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The site ID(s) to filter by.
- `$returnScores` ([boolean](http://php.net/language.types.boolean)) – Whether the search scores should be included in the results. If true, results will be returned as `element ID => score`.

#### Returns

[array](http://php.net/language.types.array) – The filtered list of element IDs.



### `indexElementAttributes()`





Indexes the attributes of a given element defined by its element type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L106-L175)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))
- `$fieldHandles` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The field handles that should be indexed,
or `null` if all fields should be indexed.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the indexing was a success.

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)


### `indexElementFields()`

::: danger DEPRECATED
Deprecated in 3.4.0. Use [indexElementAttributes()](craft-services-search.md#method-indexelementattributes) instead.
:::




Indexes the field values for a given element and site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L187-L194)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The ID of the element getting indexed.
- `$siteId` ([integer](http://php.net/language.types.integer)) – The site ID of the content getting indexed.
- `$fields` ([array](http://php.net/language.types.array)) – The field values, indexed by field ID.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the indexing was a success.

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Search.php#L84-L95)












## Events

### EVENT_AFTER_SEARCH



Type

:   [craft\events\SearchEvent](craft-events-searchevent.md)



The event that is triggered after a search is performed.



---



### EVENT_BEFORE_SEARCH



Type

:   [craft\events\SearchEvent](craft-events-searchevent.md)



The event that is triggered before a search is performed.



---




