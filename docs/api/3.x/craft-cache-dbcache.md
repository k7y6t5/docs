---
title: craft\cache\DbCache
code:
  - php
  - twig
---

# DbCache

Type

:   Class

Namespace

:   craft\cache

Inherits

:   [craft\cache\DbCache](craft-cache-dbcache.md) &raquo;
[yii\caching\DbCache](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache) &raquo;
[yii\caching\Cache](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\caching\CacheInterface](https://www.yiiframework.com/doc/api/2.0/yii-caching-cacheinterface)

Since

:   3.4.14









[View source](https://github.com/craftcms/cms/blob/master/src/cache/DbCache.php)


## Public Properties

| Property                                                                                                                             | Description
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cacheTable](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#$cacheTable-detail "Defined by yii\caching\DbCache")       | [string](http://php.net/language.types.string) – Name of the DB table to store cache content.
| [db](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#$db-detail "Defined by yii\caching\DbCache")                       | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The DB connection object or the application component ID of the DB connection.
| [defaultDuration](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#$defaultDuration-detail "Defined by yii\caching\Cache") | [integer](http://php.net/language.types.integer) – Default duration in seconds before a cache entry will expire.
| [gcProbability](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#$gcProbability-detail "Defined by yii\caching\DbCache") | [integer](http://php.net/language.types.integer) – The probability (parts per million) that garbage collection (GC) should be performed when storing a piece of data in the cache.
| [keyPrefix](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#$keyPrefix-detail "Defined by yii\caching\Cache")             | [string](http://php.net/language.types.string) – A string prefixed to every cache key so that it is unique globally in the whole cache storage.
| [serializer](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#$serializer-detail "Defined by yii\caching\Cache")           | [null](http://php.net/language.types.null), [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean) – The functions used to serialize and unserialize cached data.





## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [add()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#add()-detail "Defined by yii\caching\Cache")                             | Stores a value identified by a key into cache if the cache does not contain this key.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [buildKey()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#buildKey()-detail "Defined by yii\caching\Cache")                   | Builds a normalized cache key from a given key.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [delete()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#delete()-detail "Defined by yii\caching\Cache")                       | Deletes a value with the specified key from cache.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [exists()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#exists()-detail "Defined by yii\caching\DbCache")                   | Checks whether a specified key exists in the cache.
| [flush()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#flush()-detail "Defined by yii\caching\Cache")                         | Deletes all values from cache.
| [gc()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#gc()-detail "Defined by yii\caching\DbCache")                           | Removes the expired data values.
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#get()-detail "Defined by yii\caching\Cache")                             | Retrieves a value from cache with a specified key.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getOrSet()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#getOrSet()-detail "Defined by yii\caching\Cache")                   | Method combines both [set()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#set()-detail) and [get()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#get()-detail) methods to retrieve value identified by a $key, or to store the result of $callable execution if there is no cache available for the $key.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#init()-detail "Defined by yii\caching\DbCache")                       | Initializes the DbCache component.
| [madd()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#madd()-detail "Defined by yii\caching\Cache")                           | Stores multiple items in cache. Each item contains a value identified by a key.
| [mget()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#mget()-detail "Defined by yii\caching\Cache")                           | Retrieves multiple values from cache with the specified keys.
| [mset()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#mset()-detail "Defined by yii\caching\Cache")                           | Stores multiple items in cache. Each item contains a value identified by a key.
| [multiAdd()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#multiAdd()-detail "Defined by yii\caching\Cache")                   | Stores multiple items in cache. Each item contains a value identified by a key.
| [multiGet()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#multiGet()-detail "Defined by yii\caching\Cache")                   | Retrieves multiple values from cache with the specified keys.
| [multiSet()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#multiSet()-detail "Defined by yii\caching\Cache")                   | Stores multiple items in cache. Each item contains a value identified by a key.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#offsetExists()-detail "Defined by yii\caching\Cache")           | Returns whether there is a cache entry with a specified key.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#offsetGet()-detail "Defined by yii\caching\Cache")                 | Retrieves the value from cache with a specified key.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#offsetSet()-detail "Defined by yii\caching\Cache")                 | Stores the value identified by a key into cache.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#offsetUnset()-detail "Defined by yii\caching\Cache")             | Deletes the value with the specified key from cache This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [set()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#set()-detail "Defined by yii\caching\Cache")                             | Stores a value identified by a key into cache.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.



## Protected Methods

| Method                                                                                                                              | Description
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------
| [addValue()](craft-cache-dbcache.md#method-addvalue)                                                                                | Stores a value identified by a key into cache if the cache does not contain this key.
| [addValues()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#addValues()-detail "Defined by yii\caching\Cache")         | Adds multiple key-value pairs to cache.
| [deleteValue()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#deleteValue()-detail "Defined by yii\caching\DbCache") | Deletes a value with the specified key from cache This is the implementation of the method declared in the parent class.
| [flushValues()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#flushValues()-detail "Defined by yii\caching\DbCache") | Deletes all values from cache.
| [getValue()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#getValue()-detail "Defined by yii\caching\DbCache")       | Retrieves a value from cache with a specified key.
| [getValues()](https://www.yiiframework.com/doc/api/2.0/yii-caching-dbcache#getValues()-detail "Defined by yii\caching\DbCache")     | Retrieves multiple values from cache with the specified keys.
| [setValue()](craft-cache-dbcache.md#method-setvalue)                                                                                | Stores a value identified by a key in cache.
| [setValues()](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#setValues()-detail "Defined by yii\caching\Cache")         | Stores multiple key-value pairs in cache.

### `addValue()`





Stores a value identified by a key into cache if the cache does not contain this key.



This is the implementation of the method declared in the parent class.




[View source](https://github.com/craftcms/cms/blob/master/src/cache/DbCache.php#L50-L69)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The key identifying the value to be cached
- `$value` ([string](http://php.net/language.types.string)) – The value to be cached. Other types (if you have disabled [serializer](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#$serializer-detail)) cannot be saved.
- `$duration` ([integer](http://php.net/language.types.integer)) – The number of seconds in which the cached value will expire. 0 means never expire.

#### Returns

[boolean](http://php.net/language.types.boolean) – True if the value is successfully stored into cache, false otherwise



### `setValue()`





Stores a value identified by a key in cache.



This is the implementation of the method declared in the parent class.




[View source](https://github.com/craftcms/cms/blob/master/src/cache/DbCache.php#L26-L45)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The key identifying the value to be cached
- `$value` ([string](http://php.net/language.types.string)) – The value to be cached. Other types (if you have disabled [serializer](https://www.yiiframework.com/doc/api/2.0/yii-caching-cache#$serializer-detail)) cannot be saved.
- `$duration` ([integer](http://php.net/language.types.integer)) – The number of seconds in which the cached value will expire. 0 means never expire.

#### Returns

[boolean](http://php.net/language.types.boolean) – True if the value is successfully stored into cache, false otherwise








