---
title: craft\services\Elements
code:
  - php
  - twig
---

# Elements

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Elements](craft-services-elements.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Elements service provides APIs for managing elements.

An instance of the Elements service is globally accessible in Craft via [`Craft::$app->elements`](craft-base-applicationtrait.md#method-getelements).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allElementTypes](craft-services-elements.md#allelementtypes)                                                              | [string](http://php.net/language.types.string)[] – The available element classes.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [duplicatedElementIds](craft-services-elements.md#duplicatedelementids)                                                    | [integer](http://php.net/language.types.integer)[] – Stores a mapping of source element IDs to their duplicated element IDs.
| [duplicatedElementSourceIds](craft-services-elements.md#duplicatedelementsourceids)                                        | [integer](http://php.net/language.types.integer)[] – Stores a mapping of duplicated element IDs to their source element IDs.
| [placeholderElement](craft-services-elements.md#placeholderelement)                                                        | [craft\base\ElementInterface](craft-base-elementinterface.md) – The element currently being edited by Live Preview.
| [placeholderElements](craft-services-elements.md#placeholderelements)                                                      | [craft\base\ElementInterface](craft-base-elementinterface.md)[]

### `allElementTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only



The available element classes.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php)



### `duplicatedElementIds`



Type

:   [integer](http://php.net/language.types.integer)[]



Stores a mapping of source element IDs to their duplicated element IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L228)



### `duplicatedElementSourceIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Since

:   3.4.0



Stores a mapping of duplicated element IDs to their source element IDs.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L234)



### `placeholderElement`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)

Access

:   Write-only



The element currently being edited by Live Preview.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php)



### `placeholderElements`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md)[]

Access

:   Read-only

Since

:   3.2.5







[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php)







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
| [createAction()](craft-services-elements.md#method-createaction)                                                                            | Creates an element action with a given config.
| [createElement()](craft-services-elements.md#method-createelement)                                                                          | Creates an element with a given config.
| [createExporter()](craft-services-elements.md#method-createexporter)                                                                        | Creates an element exporter with a given config.
| [deleteElement()](craft-services-elements.md#method-deleteelement)                                                                          | Deletes an element.
| [deleteElementById()](craft-services-elements.md#method-deleteelementbyid)                                                                  | Deletes an element by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [duplicateElement()](craft-services-elements.md#method-duplicateelement)                                                                    | Duplicates an element.
| [eagerLoadElements()](craft-services-elements.md#method-eagerloadelements)                                                                  | Eager-loads additional elements onto a given set of elements.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllElementTypes()](craft-services-elements.md#method-getallelementtypes)                                                                | Returns all available element classes.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getElementById()](craft-services-elements.md#method-getelementbyid)                                                                        | Returns an element by its ID.
| [getElementByUri()](craft-services-elements.md#method-getelementbyuri)                                                                      | Returns an element by its URI.
| [getElementTypeById()](craft-services-elements.md#method-getelementtypebyid)                                                                | Returns the class of an element with a given ID.
| [getElementTypeByRefHandle()](craft-services-elements.md#method-getelementtypebyrefhandle)                                                  | Returns an element class by its handle.
| [getElementTypesByIds()](craft-services-elements.md#method-getelementtypesbyids)                                                            | Returns the classes of elements with the given IDs.
| [getElementUriForSite()](craft-services-elements.md#method-getelementuriforsite)                                                            | Returns an element’s URI for a given site.
| [getEnabledSiteIdsForElement()](craft-services-elements.md#method-getenabledsiteidsforelement)                                              | Returns the site IDs that a given element is enabled in.
| [getPlaceholderElement()](craft-services-elements.md#method-getplaceholderelement)                                                          | Returns a placeholder element by its ID and site ID.
| [getPlaceholderElements()](craft-services-elements.md#method-getplaceholderelements)                                                        | Returns all placeholder elements.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [mergeElements()](craft-services-elements.md#method-mergeelements)                                                                          | Merges two elements together.
| [mergeElementsByIds()](craft-services-elements.md#method-mergeelementsbyids)                                                                | Merges two elements together by their IDs.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [parseRefs()](craft-services-elements.md#method-parserefs)                                                                                  | Parses a string for element [reference tags](http://craftcms.com/docs/reference-tags).
| [propagateElement()](craft-services-elements.md#method-propagateelement)                                                                    | Propagates an element to a different site.
| [propagateElements()](craft-services-elements.md#method-propagateelements)                                                                  | Propagates all elements that match a given element query to another site(s).
| [resaveElements()](craft-services-elements.md#method-resaveelements)                                                                        | Resaves all elements that match a given element query.
| [restoreElement()](craft-services-elements.md#method-restoreelement)                                                                        | Restores an element.
| [restoreElements()](craft-services-elements.md#method-restoreelements)                                                                      | Restores multiple elements.
| [saveElement()](craft-services-elements.md#method-saveelement)                                                                              | Handles all of the routine tasks that go along with saving elements.
| [setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement)                                                          | Stores a placeholder element that element queries should use instead of populating a new element with a matching ID and site ID.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [updateDescendantSlugsAndUris()](craft-services-elements.md#method-updatedescendantslugsanduris)                                            | Updates an element’s descendants’ slugs and URIs.
| [updateElementSlugAndUri()](craft-services-elements.md#method-updateelementsluganduri)                                                      | Updates an element’s slug and URI, along with any descendants.
| [updateElementSlugAndUriInOtherSites()](craft-services-elements.md#method-updateelementsluganduriinothersites)                              | Updates an element’s slug and URI, for any sites besides the given one.

### `createAction()`





Creates an element action with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1486-L1492)


#### Arguments

- `$config` (`mixed`) – The element action’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\base\ElementActionInterface](craft-base-elementactioninterface.md) – The element action



### `createElement()`





Creates an element with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L265-L273)


#### Arguments

- `$config` (`mixed`) – The field’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The element



### `createExporter()`





Creates an element exporter with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1500-L1503)


#### Arguments

- `$config` (`mixed`) – The element exporter’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\base\ElementExporterInterface](craft-base-elementexporterinterface.md) – The element exporter



### `deleteElement()`





Deletes an element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1249-L1317)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to be deleted
- `$hardDelete`

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)


### `deleteElementById()`





Deletes an element by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1207-L1239)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element’s ID
- `$elementType` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The element class.
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site to fetch the element in.
Defaults to the current site.
- `$hardDelete`

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)


### `duplicateElement()`





Duplicates an element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L729-L911)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to duplicate
- `$newAttributes` ([array](http://php.net/language.types.array)) – Any attributes to apply to the duplicate

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md) – The duplicated element

#### Throws

- [craft\errors\InvalidElementException](craft-errors-invalidelementexception.md)\
  if saveElement() returns false for any of the sites
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `eagerLoadElements()`





Eager-loads additional elements onto a given set of elements.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1702-L1915)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The root element type class
- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The root element models that should be updated with the eager-loaded elements
- `$with` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array)) – Dot-delimited paths of the elements that should be eager-loaded into the root elements




### `getAllElementTypes()`





Returns all available element classes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1457-L1475)



#### Returns

[string](http://php.net/language.types.string)[] – The available element classes.



### `getElementById()`





Returns an element by its ID.

If no element type is provided, the method will first have to run a DB query to determine what type of element
the $id is, so you should definitely pass it if it’s known.
The element’s status will not be a factor when using this method.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L292-L337)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element’s ID.
- `$elementType` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The element class.
- `$siteId` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site(s) to fetch the element in.
Defaults to the current site.
- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The matching element, or `null`.



### `getElementByUri()`





Returns an element by its URI.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L348-L405)


#### Arguments

- `$uri` ([string](http://php.net/language.types.string)) – The element’s URI.
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The site to look for the URI in, and to return the element in.
Defaults to the current site.
- `$enabledOnly` ([boolean](http://php.net/language.types.boolean)) – Whether to only look for an enabled element. Defaults to `false`.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The matching element, or `null`.



### `getElementTypeById()`





Returns the class of an element with a given ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L413-L422)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element’s ID

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element’s class, or null if it could not be found



### `getElementTypeByRefHandle()`





Returns an element class by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1514-L1531)


#### Arguments

- `$refHandle` ([string](http://php.net/language.types.string)) – The element class handle

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The element class, or null if it could not be found



### `getElementTypesByIds()`





Returns the classes of elements with the given IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L430-L438)


#### Arguments

- `$elementIds` ([integer](http://php.net/language.types.integer)[]) – The elements’ IDs

#### Returns

[string](http://php.net/language.types.string)[]



### `getElementUriForSite()`





Returns an element’s URI for a given site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L447-L454)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element’s ID.
- `$siteId` ([integer](http://php.net/language.types.integer)) – The site to search for the element’s URI in.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean) – The element’s URI or `null`, or `false` if the element doesn’t exist.



### `getEnabledSiteIdsForElement()`





Returns the site IDs that a given element is enabled in.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L463-L470)


#### Arguments

- `$elementId` ([integer](http://php.net/language.types.integer)) – The element’s ID.

#### Returns

[integer](http://php.net/language.types.integer)[] – The site IDs that the element is enabled in. If the element could not be found, an empty array
will be returned.



### `getPlaceholderElement()`





Returns a placeholder element by its ID and site ID.



See also [setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1690-L1693)


#### Arguments

- `$sourceId` ([integer](http://php.net/language.types.integer)) – The element’s ID
- `$siteId` ([integer](http://php.net/language.types.integer)) – The element’s site ID

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null) – The placeholder element if one exists, or null.



### `getPlaceholderElements()`



Since

:   3.2.5



Returns all placeholder elements.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1673-L1680)



#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[]



### `mergeElements()`



Since

:   3.1.31



Merges two elements together.

This method will update the following:
- Any relations involving the merged element
- Any structures that contain the merged element
- Any reference tags in textual custom fields referencing the merged element


[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1085-L1194)


#### Arguments

- `$mergedElement` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is going away.
- `$prevailingElement` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is sticking around.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the elements were merged successfully.

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `mergeElementsByIds()`





Merges two elements together by their IDs.

This method will update the following:
- Any relations involving the merged element
- Any structures that contain the merged element
- Any reference tags in textual custom fields referencing the merged element


[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1055-L1069)


#### Arguments

- `$mergedElementId` ([integer](http://php.net/language.types.integer)) – The ID of the element that is going away.
- `$prevailingElementId` ([integer](http://php.net/language.types.integer)) – The ID of the element that is sticking around.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the elements were merged successfully.

#### Throws

- [craft\errors\ElementNotFoundException](craft-errors-elementnotfoundexception.md)\
  if one of the element IDs don’t exist.
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `parseRefs()`





Parses a string for element [reference tags](http://craftcms.com/docs/reference-tags).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1540-L1640)


#### Arguments

- `$str` ([string](http://php.net/language.types.string)) – The string to parse
- `$defaultSiteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The default site ID to query the elements in

#### Returns

[string](http://php.net/language.types.string) – The parsed string



### `propagateElement()`



Since

:   3.0.13



Propagates an element to a different site.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1927-L1942)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to propagate
- `$siteId` ([integer](http://php.net/language.types.integer)) – The site ID that the element should be propagated to
- `$siteElement` ([craft\base\ElementInterface](craft-base-elementinterface.md), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – The element loaded for the propagated site (only pass this if you
already had a reason to load it). Set to `false` if it is known to not exist yet.


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the element couldn't be propagated


### `propagateElements()`



Since

:   3.2.0



Propagates all elements that match a given element query to another site(s).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L638-L718)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query to fetch elements with
- `$siteIds` ([integer](http://php.net/language.types.integer), [integer](http://php.net/language.types.integer)[], [null](http://php.net/language.types.null)) – The site ID(s) that the elements should be propagated to. If null, elements will be
- `$continueOnError` ([boolean](http://php.net/language.types.boolean)) – Whether to continue going if an error occurs


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons
propagated to all supported sites, except the one they were queried in.


### `resaveElements()`



Since

:   3.2.0



Resaves all elements that match a given element query.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L545-L626)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query to fetch elements with
- `$continueOnError` ([boolean](http://php.net/language.types.boolean)) – Whether to continue going if an error occurs
- `$skipRevisions` ([boolean](http://php.net/language.types.boolean)) – Whether elements that are (or belong to) a revision should be skipped
- `$updateSearchIndex` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether to update the element search index for the element
(this will happen via a background job if this is a web request)


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `restoreElement()`



Since

:   3.1.0



Restores an element.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1328-L1331)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element was restored successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the $element doesn’t have any supported sites
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `restoreElements()`





Restores multiple elements.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1341-L1447)


#### Arguments

- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[])

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether at least one element was restored successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if an $element doesn’t have any supported sites
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveElement()`





Handles all of the routine tasks that go along with saving elements.

Those tasks include:

- Validating its content (if $validateContent is `true`, or it’s left as `null` and the element is enabled)
- Ensuring the element has a title if its type [has titles](craft-base-element.md#method-hastitles), and giving it a
  default title in the event that $validateContent is set to `false`
- Saving a row in the `elements` table
- Assigning the element’s ID on the element model, if it’s a new element
- Assigning the element’s ID on the element’s content model, if there is one and it’s a new set of content
- Updating the search index with new keywords from the element’s content
- Setting a unique URI on the element, if it’s supposed to have one.
- Saving the element’s row(s) in the `elements_sites` and `content` tables
- Deleting any rows in the `elements_sites` and `content` tables that no longer need to be there
- Cleaning any template caches that the element was involved in

The function will fire `beforeElementSave` and `afterElementSave` events, and will call `beforeSave()`
 and `afterSave()` methods on the passed-in element, giving the element opportunities to hook into the
save process.

Example usage - creating a new entry:

```php
$entry = new Entry();
$entry->sectionId = 10;
$entry->typeId = 1;
$entry->authorId = 5;
$entry->enabled = true;
$entry->title = "Hello World!";
$entry->setFieldValues([
    'body' => "<p>I can’t believe I literally just called this “Hello World!”.</p>",
]);
$success = Craft::$app->elements->saveElement($entry);
if (!$success) {
    Craft::error('Couldn’t save the entry "'.$entry->title.'"', __METHOD__);
}
```


[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L525-L532)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is being saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the element should be validated
- `$propagate` ([boolean](http://php.net/language.types.boolean)) – Whether the element should be saved across all of its supported sites
(this can only be disabled when updating an existing element)
- `$updateSearchIndex` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether to update the element search index for the element
(this will happen via a background job if this is a web request)

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\ElementNotFoundException](craft-errors-elementnotfoundexception.md)\
  if $element has an invalid $id
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the $element doesn’t have any supported sites
- [Throwable](http://php.net/class.throwable)\
  if reasons


### `setPlaceholderElement()`





Stores a placeholder element that element queries should use instead of populating a new element with a
matching ID and site ID.

This is used by Live Preview and Sharing features.

See also [getPlaceholderElement()](craft-services-elements.md#method-getplaceholderelement)
[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1652-L1665)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element currently being edited by Live Preview.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the element is missing an ID


### `updateDescendantSlugsAndUris()`





Updates an element’s descendants’ slugs and URIs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L1010-L1039)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element whose descendants should be updated.
- `$updateOtherSites` ([boolean](http://php.net/language.types.boolean)) – Whether the element’s other sites should also be updated.
- `$queue` ([boolean](http://php.net/language.types.boolean)) – Whether the descendants’ slugs and URIs should be updated via a job in the queue.




### `updateElementSlugAndUri()`





Updates an element’s slug and URI, along with any descendants.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L921-L977)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to update.
- `$updateOtherSites` ([boolean](http://php.net/language.types.boolean)) – Whether the element’s other sites should also be updated.
- `$updateDescendants` ([boolean](http://php.net/language.types.boolean)) – Whether the element’s descendants should also be updated.
- `$queue` ([boolean](http://php.net/language.types.boolean)) – Whether the element’s slug and URI should be updated via a job in the queue.




### `updateElementSlugAndUriInOtherSites()`





Updates an element’s slug and URI, for any sites besides the given one.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Elements.php#L984-L1001)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element to update.










## Events

### EVENT_AFTER_DELETE_ELEMENT



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)



The event that is triggered after an element is deleted.



---



### EVENT_AFTER_MERGE_ELEMENTS



Type

:   [craft\events\MergeElementsEvent](craft-events-mergeelementsevent.md)



The event that is triggered after two elements are merged together.



---



### EVENT_AFTER_PERFORM_ACTION



Type

:   [craft\events\ElementActionEvent](craft-events-elementactionevent.md)



The event that is triggered after an element action is performed.



---



### EVENT_AFTER_PROPAGATE_ELEMENT



Type

:   [craft\events\BatchElementActionEvent](craft-events-batchelementactionevent.md)



The event that is triggered after an element is propagated.



---



### EVENT_AFTER_PROPAGATE_ELEMENTS



Type

:   [craft\events\ElementQueryEvent](craft-events-elementqueryevent.md)



The event that is triggered after propagating a batch of elements.



---



### EVENT_AFTER_RESAVE_ELEMENT



Type

:   [craft\events\BatchElementActionEvent](craft-events-batchelementactionevent.md)



The event that is triggered after an element is resaved.



---



### EVENT_AFTER_RESAVE_ELEMENTS



Type

:   [craft\events\ElementQueryEvent](craft-events-elementqueryevent.md)



The event that is triggered after resaving a batch of elements.



---



### EVENT_AFTER_RESTORE_ELEMENT



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)

Since

:   3.1.0



The event that is triggered after an element is restored.



---



### EVENT_AFTER_SAVE_ELEMENT



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)



The event that is triggered after an element is saved.

If you want to ignore events for drafts or revisions, call [craft\helpers\ElementHelper::isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)
from your event handler:

```php
use craft\events\ElementEvent;
use craft\helpers\ElementHelper;
use craft\services\Elements;

Craft::$app->elements->on(Elements::EVENT_AFTER_SAVE_ELEMENT, function(ElementEvent $e) {
    if (ElementHelper::isDraftOrRevision($e->element)) {
        return;
    }

    // ...
});
```



---



### EVENT_AFTER_UPDATE_SLUG_AND_URI



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)



The event that is triggered after an element’s slug and URI are updated, usually following a Structure move.



---



### EVENT_BEFORE_DELETE_ELEMENT



Type

:   [craft\events\DeleteElementEvent](craft-events-deleteelementevent.md)



The event that is triggered before an element is deleted.



---



### EVENT_BEFORE_PERFORM_ACTION



Type

:   [craft\events\ElementActionEvent](craft-events-elementactionevent.md)



The event that is triggered before an element action is performed.

You may set [craft\events\ElementActionEvent::$isValid](craft-events-cancelableevent.md#isvalid) to `false` to prevent the action from being performed.



---



### EVENT_BEFORE_PROPAGATE_ELEMENT



Type

:   [craft\events\BatchElementActionEvent](craft-events-batchelementactionevent.md)



The event that is triggered before an element is propagated.



---



### EVENT_BEFORE_PROPAGATE_ELEMENTS



Type

:   [craft\events\ElementQueryEvent](craft-events-elementqueryevent.md)



The event that is triggered before propagating a batch of elements.



---



### EVENT_BEFORE_RESAVE_ELEMENT



Type

:   [craft\events\BatchElementActionEvent](craft-events-batchelementactionevent.md)



The event that is triggered before an element is resaved.



---



### EVENT_BEFORE_RESAVE_ELEMENTS



Type

:   [craft\events\ElementQueryEvent](craft-events-elementqueryevent.md)



The event that is triggered before resaving a batch of elements.



---



### EVENT_BEFORE_RESTORE_ELEMENT



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)

Since

:   3.1.0



The event that is triggered before an element is restored.



---



### EVENT_BEFORE_SAVE_ELEMENT



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)



The event that is triggered before an element is saved.

If you want to ignore events for drafts or revisions, call [craft\helpers\ElementHelper::isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)
from your event handler:

```php
use craft\events\ElementEvent;
use craft\helpers\ElementHelper;
use craft\services\Elements;

Craft::$app->elements->on(Elements::EVENT_BEFORE_SAVE_ELEMENT, function(ElementEvent $e) {
    if (ElementHelper::isDraftOrRevision($e->element)) {
        return;
    }

    // ...
});
```



---



### EVENT_BEFORE_UPDATE_SLUG_AND_URI



Type

:   [craft\events\ElementEvent](craft-events-elementevent.md)



The event that is triggered before an element’s slug and URI are updated, usually following a Structure move.



---



### EVENT_REGISTER_ELEMENT_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering element types.

Element types must implement [craft\base\ElementInterface](craft-base-elementinterface.md). [craft\base\Element](craft-base-element.md) provides a base implementation.

See [Element Types](https://docs.craftcms.com/v3/element-types.html) for documentation on creating element types.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\services\Elements;
use yii\base\Event;

Event::on(Elements::class,
    Elements::EVENT_REGISTER_ELEMENT_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyElementType::class;
    }
);
```
:::



