---
title: craft\db\Paginator
code:
  - php
  - twig
---

# Paginator

Type

:   Class

Namespace

:   craft\db

Inherits

:   [craft\db\Paginator](craft-db-paginator.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.1.19



Query Paginator

---
```php
use craft\db\Paginator;

$paginator = new Paginator($query, [
    'pageSize' => 10,
    'currentPage' => \Craft::$app->request->pageNum,
]);

$pageResults = $paginator->getPageResults();
```
```twig
{% set paginator = create('craft\\db\\Paginator', [query, {
    pageSize: 10,
    currentPage: craft.app.request.pageNum,
}]) %}

{% set pageResults = paginator.getPageResults() %}
```



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php)


## Public Properties

| Property                                         | Description
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [db](craft-db-paginator.md#db)                   | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null) – The DB connection to be used with the query.
| [pageOffset](craft-db-paginator.md#pageoffset)   | [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)
| [pageResults](craft-db-paginator.md#pageresults) | [array](http://php.net/language.types.array)
| [pageSize](craft-db-paginator.md#pagesize)       | [integer](http://php.net/language.types.integer) – The number of results to include for each page

### `db`



Type

:   [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)



The DB connection to be used with the query.
If null, the query will choose the connection to use.



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L52)



### `pageOffset`



Type

:   [integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php)



### `pageResults`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php)



### `pageSize`



Type

:   [integer](http://php.net/language.types.integer)



The number of results to include for each page



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L57)





## Protected Properties

| Property                                           | Description
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [currentPage](craft-db-paginator.md#currentpage)   | [integer](http://php.net/language.types.integer) – The current page
| [query](craft-db-paginator.md#query)               | [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface), [yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query) – The query being paginated
| [totalPages](craft-db-paginator.md#totalpages)     | [integer](http://php.net/language.types.integer) – The total number of pages
| [totalResults](craft-db-paginator.md#totalresults) | [integer](http://php.net/language.types.integer) – The total query count

### `currentPage`



Type

:   [integer](http://php.net/language.types.integer)



The current page



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L77)



### `query`



Type

:   [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface), [yii\db\Query](https://www.yiiframework.com/doc/api/2.0/yii-db-query)



The query being paginated



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L62)



### `totalPages`



Type

:   [integer](http://php.net/language.types.integer)



The total number of pages



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L72)



### `totalResults`



Type

:   [integer](http://php.net/language.types.integer)



The total query count



[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L67)





## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-db-paginator.md#method-construct)                                                                                   | Constructor
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [getCurrentPage()](craft-db-paginator.md#method-getcurrentpage)                                                                           | Returns the current page
| [getPageOffset()](craft-db-paginator.md#method-getpageoffset)                                                                             | Returns the offset of the first result returned by [getPageResults()](craft-db-paginator.md#method-getpageresults)
| [getPageResults()](craft-db-paginator.md#method-getpageresults)                                                                           | Returns the results for the current page
| [getTotalPages()](craft-db-paginator.md#method-gettotalpages)                                                                             | Returns the total number of pages
| [getTotalResults()](craft-db-paginator.md#method-gettotalresults)                                                                         | Returns the total number of query results
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-db-paginator.md#method-init)                                                                                               | Initializes the object.
| [setCurrentPage()](craft-db-paginator.md#method-setcurrentpage)                                                                           | Sets the current page
| [setPageResults()](craft-db-paginator.md#method-setpageresults)                                                                           | Sets the results for the current page.

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L90-L102)


#### Arguments

- `$query` ([yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)) – The query that should be paginated
- `$config` ([array](http://php.net/language.types.array))




### `getCurrentPage()`





Returns the current page




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L161-L164)



#### Returns

[integer](http://php.net/language.types.integer)



### `getPageOffset()`





Returns the offset of the first result returned by [getPageResults()](craft-db-paginator.md#method-getpageresults)




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L236-L239)



#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `getPageResults()`





Returns the results for the current page




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L187-L218)



#### Returns

[array](http://php.net/language.types.array)



### `getTotalPages()`





Returns the total number of pages




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L147-L154)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalResults()`





Returns the total number of query results




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L123-L140)



#### Returns

[integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L108-L116)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `setCurrentPage()`





Sets the current page




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L171-L180)


#### Arguments

- `$currentPage` ([integer](http://php.net/language.types.integer))




### `setPageResults()`



Since

:   3.1.22



Sets the results for the current page.




[View source](https://github.com/craftcms/cms/blob/master/src/db/Paginator.php#L226-L229)


#### Arguments

- `$pageResults`











