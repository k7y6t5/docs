---
title: craft\services\TemplateCaches
code:
  - php
  - twig
---

# TemplateCaches

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\TemplateCaches](craft-services-templatecaches.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Template Caches service.

An instance of the Template Caches service is globally accessible in Craft via [`Craft::$app->templateCaches`](craft-base-applicationtrait.md#method-gettemplatecaches).



[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [deleteAllCaches()](craft-services-templatecaches.md#method-deleteallcaches)                                                                | Deletes all the template caches.
| [deleteCacheById()](craft-services-templatecaches.md#method-deletecachebyid)                                                                | Deletes a cache by its ID(s).
| [deleteCachesByElement()](craft-services-templatecaches.md#method-deletecachesbyelement)                                                    | Deletes caches that include a given element(s).
| [deleteCachesByElementId()](craft-services-templatecaches.md#method-deletecachesbyelementid)                                                | Deletes caches that include an a given element ID(s).
| [deleteCachesByElementQuery()](craft-services-templatecaches.md#method-deletecachesbyelementquery)                                          | Deletes caches that include elements that match a given element query's parameters.
| [deleteCachesByElementType()](craft-services-templatecaches.md#method-deletecachesbyelementtype)                                            | Deletes caches by a given element class.
| [deleteCachesByKey()](craft-services-templatecaches.md#method-deletecachesbykey)                                                            | Deletes a cache by its key(s).
| [deleteExpiredCaches()](craft-services-templatecaches.md#method-deleteexpiredcaches)                                                        | Deletes any expired caches.
| [deleteExpiredCachesIfOverdue()](craft-services-templatecaches.md#method-deleteexpiredcachesifoverdue)                                      | Deletes any expired caches.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [endTemplateCache()](craft-services-templatecaches.md#method-endtemplatecache)                                                              | Ends a template cache.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getTemplateCache()](craft-services-templatecaches.md#method-gettemplatecache)                                                              | Returns a cached template by its key.
| [handleResponse()](craft-services-templatecaches.md#method-handleresponse)                                                                  | Queues up a Delete Stale Template Caches job
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [includeElementInTemplateCaches()](craft-services-templatecaches.md#method-includeelementintemplatecaches)                                  | Includes an element in any active caches.
| [includeElementQueryInTemplateCaches()](craft-services-templatecaches.md#method-includeelementqueryintemplatecaches)                        | Includes an element criteria in any active caches.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [startTemplateCache()](craft-services-templatecaches.md#method-starttemplatecache)                                                          | Starts a new template cache.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteAllCaches()`





Deletes all the template caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L570-L584)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCacheById()`





Deletes a cache by its ID(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L348-L377)


#### Arguments

- `$cacheId` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[]) – The cache ID(s)

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCachesByElement()`





Deletes caches that include a given element(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L408-L431)


#### Arguments

- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The element(s) whose caches should be deleted.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCachesByElementId()`





Deletes caches that include an a given element ID(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L442-L475)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[]) – The ID of the element(s) whose caches should be cleared.
- `$deleteQueryCaches` ([boolean](http://php.net/language.types.boolean)) – Whether a DeleteStaleTemplateCaches job
should be added to the queue, deleting any query caches that may now
involve this element, but hadn't previously. (Defaults to `true`.)

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCachesByElementQuery()`





Deletes caches that include elements that match a given element query's parameters.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L499-L511)


#### Arguments

- `$query` ([craft\elements\db\ElementQuery](craft-elements-db-elementquery.md)) – The element query that should be used to find elements whose caches
should be deleted.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCachesByElementType()`





Deletes caches by a given element class.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L385-L400)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element class.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteCachesByKey()`





Deletes a cache by its key(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L519-L532)


#### Arguments

- `$key` ([integer](http://php.net/language.types.integer), [array](http://php.net/language.types.array)) – The cache key(s) to delete.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteExpiredCaches()`





Deletes any expired caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L539-L552)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteExpiredCachesIfOverdue()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use [deleteExpiredCaches()](craft-services-templatecaches.md#method-deleteexpiredcaches) instead.
:::




Deletes any expired caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L560-L563)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `endTemplateCache()`





Ends a template cache.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L225-L340)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The template cache key.
- `$global` ([boolean](http://php.net/language.types.boolean)) – Whether the cache should be stored globally.
- `$duration` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – How long the cache should be stored for. Should be a [relative time format](http://php.net/manual/en/datetime.formats.relative.php).
- `$expiration` (`mixed`, [null](http://php.net/language.types.null)) – When the cache should expire.
- `$body` ([string](http://php.net/language.types.string)) – The contents of the cache.


#### Throws

- [Throwable](http://php.net/class.throwable)


### `getTemplateCache()`





Returns a cached template by its key.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L83-L126)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The template cache key
- `$global` ([boolean](http://php.net/language.types.boolean)) – Whether the cache would have been stored globally.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `handleResponse()`





Queues up a Delete Stale Template Caches job




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L480-L490)






### `includeElementInTemplateCaches()`





Includes an element in any active caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L198-L213)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element ID.




### `includeElementQueryInTemplateCaches()`





Includes an element criteria in any active caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L160-L191)


#### Arguments

- `$event` ([yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)) – The 'afterPrepare' element query event




### `startTemplateCache()`





Starts a new template cache.




[View source](https://github.com/craftcms/cms/blob/master/src/services/TemplateCaches.php#L133-L153)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The template cache key.










## Events

### EVENT_AFTER_DELETE_CACHES



Type

:   `\craft\services\SectionEvent`

Since

:   3.0.2



The event that is triggered after template caches are deleted.



---



### EVENT_BEFORE_DELETE_CACHES



Type

:   `\craft\services\SectionEvent`

Since

:   3.0.2



The event that is triggered before template caches are deleted.



---




