---
title: craft\elements\db\ElementQueryInterface
code:
  - php
  - twig
---

# ElementQueryInterface

Type

:   Interface

Namespace

:   craft\elements\db

Extends

:   [ArrayAccess](http://php.net/class.arrayaccess), [Countable](http://php.net/class.countable), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\db\QueryInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface)

Implemented by

:   [craft\elements\db\AssetQuery](craft-elements-db-assetquery.md), [craft\elements\db\CategoryQuery](craft-elements-db-categoryquery.md), [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md), [craft\elements\db\EntryQuery](craft-elements-db-entryquery.md), [craft\elements\db\GlobalSetQuery](craft-elements-db-globalsetquery.md), [craft\elements\db\MatrixBlockQuery](craft-elements-db-matrixblockquery.md), [craft\elements\db\TagQuery](craft-elements-db-tagquery.md), [craft\elements\db\UserQuery](craft-elements-db-userquery.md)

Since

:   3.0.0



ElementQueryInterface defines the common interface to be implemented by element query classes.

The default implementation of this interface is provided by [craft\elements\db\ElementQuery](craft-elements-db-elementquery.md).



[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php)






## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [addOrderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#addOrderBy()-detail "Defined by yii\db\QueryInterface")             | Adds additional ORDER BY columns to the query.
| [all()](craft-elements-db-elementqueryinterface.md#method-all)                                                                                    | Executes the query and returns all results as an array.
| [ancestorDist()](craft-elements-db-elementqueryinterface.md#method-ancestordist)                                                                  | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](craft-elements-db-elementqueryinterface.md#method-ancestorof).
| [ancestorOf()](craft-elements-db-elementqueryinterface.md#method-ancestorof)                                                                      | Narrows the query results to only {elements} that are ancestors of another {element}.
| [andFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#andFilterWhere()-detail "Defined by yii\db\QueryInterface")     | Adds an additional WHERE condition to the existing one ignoring empty parameters.
| [andWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#andWhere()-detail "Defined by yii\db\QueryInterface")                 | Adds an additional WHERE condition to the existing one.
| [andWith()](craft-elements-db-elementqueryinterface.md#method-andwith)                                                                            | Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](craft-elements-db-elementqueryinterface.md#method-with).
| [anyStatus()](craft-elements-db-elementqueryinterface.md#method-anystatus)                                                                        | Clears out the [status()](craft-elements-db-elementqueryinterface.md#method-status) and [enabledForSite()](craft-elements-db-elementqueryinterface.md#method-enabledforsite) parameters.
| [archived()](craft-elements-db-elementqueryinterface.md#method-archived)                                                                          | Sets the `\craft\elements\db\$archived` property.
| [asArray()](craft-elements-db-elementqueryinterface.md#method-asarray)                                                                            | Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#count()-detail "Defined by yii\db\QueryInterface")                       | Returns the number of records.
| [dateCreated()](craft-elements-db-elementqueryinterface.md#method-datecreated)                                                                    | Narrows the query results based on the {elements}’ creation dates.
| [dateUpdated()](craft-elements-db-elementqueryinterface.md#method-dateupdated)                                                                    | Narrows the query results based on the {elements}’ last-updated dates.
| [descendantDist()](craft-elements-db-elementqueryinterface.md#method-descendantdist)                                                              | Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](craft-elements-db-elementqueryinterface.md#method-descendantof).
| [descendantOf()](craft-elements-db-elementqueryinterface.md#method-descendantof)                                                                  | Narrows the query results to only {elements} that are descendants of another {element}.
| [draftCreator()](craft-elements-db-elementqueryinterface.md#method-draftcreator)                                                                  | Narrows the query results to only drafts created by a given user.
| [draftId()](craft-elements-db-elementqueryinterface.md#method-draftid)                                                                            | Narrows the query results based on the {elements}’ draft’s ID (from the `drafts` table).
| [draftOf()](craft-elements-db-elementqueryinterface.md#method-draftof)                                                                            | Narrows the query results to only drafts of a given {element}.
| [drafts()](craft-elements-db-elementqueryinterface.md#method-drafts)                                                                              | Narrows the query results to only drafts {elements}.
| [emulateExecution()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#emulateExecution()-detail "Defined by yii\db\QueryInterface") | Sets whether to emulate query execution, preventing any interaction with data storage.
| [enabledForSite()](craft-elements-db-elementqueryinterface.md#method-enabledforsite)                                                              | Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementqueryinterface.md#method-site) parameter.
| [exists()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#exists()-detail "Defined by yii\db\QueryInterface")                     | Returns a value indicating whether the query result contains any row of data.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#extraFields()-detail "Defined by yii\base\Arrayable")                 | Returns the list of additional fields that can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#toArray()-detail) in addition to those listed in [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#fields()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#fields()-detail "Defined by yii\base\Arrayable")                           | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#toArray()-detail) when no specific fields are specified.
| [filterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#filterWhere()-detail "Defined by yii\db\QueryInterface")           | Sets the WHERE part of the query ignoring empty parameters.
| [fixedOrder()](craft-elements-db-elementqueryinterface.md#method-fixedorder)                                                                      | Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementqueryinterface.md#method-id).
| [hasDescendants()](craft-elements-db-elementqueryinterface.md#method-hasdescendants)                                                              | Narrows the query results based on whether the {elements} have any descendants.
| [id()](craft-elements-db-elementqueryinterface.md#method-id)                                                                                      | Narrows the query results based on the {elements}’ IDs.
| [ids()](craft-elements-db-elementqueryinterface.md#method-ids)                                                                                    | Executes the query and returns the IDs of the resulting elements.
| [ignorePlaceholders()](craft-elements-db-elementqueryinterface.md#method-ignoreplaceholders)                                                      | Causes the query to return matching {elements} as they are stored in the database, ignoring matching placeholder elements that were set by [craft\services\Elements::setPlaceholderElement()](craft-services-elements.md#method-setplaceholderelement).
| [inReverse()](craft-elements-db-elementqueryinterface.md#method-inreverse)                                                                        | Causes the query results to be returned in reverse order.
| [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#indexBy()-detail "Defined by yii\db\QueryInterface")                   | Sets the [indexBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#indexBy()-detail) property.
| [leaves()](craft-elements-db-elementqueryinterface.md#method-leaves)                                                                              | Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).
| [level()](craft-elements-db-elementqueryinterface.md#method-level)                                                                                | Narrows the query results based on the {elements}’ level within the structure.
| [limit()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#limit()-detail "Defined by yii\db\QueryInterface")                       | Sets the LIMIT part of the query.
| [nextSiblingOf()](craft-elements-db-elementqueryinterface.md#method-nextsiblingof)                                                                | Narrows the query results to only the {element} that comes immediately after another {element}.
| [nth()](craft-elements-db-elementqueryinterface.md#method-nth)                                                                                    | Executes the query and returns a single row of result at a given offset.
| [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#offset()-detail "Defined by yii\db\QueryInterface")                     | Sets the OFFSET part of the query.
| [one()](craft-elements-db-elementqueryinterface.md#method-one)                                                                                    | Executes the query and returns a single row of result.
| [orFilterWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#orFilterWhere()-detail "Defined by yii\db\QueryInterface")       | Adds an additional WHERE condition to the existing one ignoring empty parameters.
| [orWhere()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#orWhere()-detail "Defined by yii\db\QueryInterface")                   | Adds an additional WHERE condition to the existing one.
| [orderBy()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#orderBy()-detail "Defined by yii\db\QueryInterface")                   | Sets the ORDER BY part of the query.
| [positionedAfter()](craft-elements-db-elementqueryinterface.md#method-positionedafter)                                                            | Narrows the query results to only {elements} that are positioned after another {element}.
| [positionedBefore()](craft-elements-db-elementqueryinterface.md#method-positionedbefore)                                                          | Narrows the query results to only {elements} that are positioned before another {element}.
| [preferSites()](craft-elements-db-elementqueryinterface.md#method-prefersites)                                                                    | If [unique()](craft-elements-db-elementqueryinterface.md#method-unique) is set, this determines which site should be selected when querying multi-site elements.
| [prevSiblingOf()](craft-elements-db-elementqueryinterface.md#method-prevsiblingof)                                                                | Narrows the query results to only the {element} that comes immediately before another {element}.
| [ref()](craft-elements-db-elementqueryinterface.md#method-ref)                                                                                    | Narrows the query results based on a reference string.
| [relatedTo()](craft-elements-db-elementqueryinterface.md#method-relatedto)                                                                        | Narrows the query results to only {elements} that are related to certain other elements.
| [revisionCreator()](craft-elements-db-elementqueryinterface.md#method-revisioncreator)                                                            | Narrows the query results to only revisions created by a given user.
| [revisionId()](craft-elements-db-elementqueryinterface.md#method-revisionid)                                                                      | Narrows the query results based on the {elements}’ revision’s ID (from the `revisions` table).
| [revisionOf()](craft-elements-db-elementqueryinterface.md#method-revisionof)                                                                      | Narrows the query results to only revisions of a given {element}.
| [revisions()](craft-elements-db-elementqueryinterface.md#method-revisions)                                                                        | Narrows the query results to only revision {elements}.
| [search()](craft-elements-db-elementqueryinterface.md#method-search)                                                                              | Narrows the query results to only {elements} that match a search query.
| [siblingOf()](craft-elements-db-elementqueryinterface.md#method-siblingof)                                                                        | Narrows the query results to only {elements} that are siblings of another {element}.
| [site()](craft-elements-db-elementqueryinterface.md#method-site)                                                                                  | Determines which site(s) the {elements} should be queried in.
| [siteId()](craft-elements-db-elementqueryinterface.md#method-siteid)                                                                              | Determines which site(s) the {elements} should be queried in, per the site’s ID.
| [slug()](craft-elements-db-elementqueryinterface.md#method-slug)                                                                                  | Narrows the query results based on the {elements}’ slugs.
| [status()](craft-elements-db-elementqueryinterface.md#method-status)                                                                              | Narrows the query results based on the {elements}’ statuses.
| [structureId()](craft-elements-db-elementqueryinterface.md#method-structureid)                                                                    | Determines which structure data should be joined into the query.
| [title()](craft-elements-db-elementqueryinterface.md#method-title)                                                                                | Narrows the query results based on the {elements}’ titles.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#toArray()-detail "Defined by yii\base\Arrayable")                         | Converts the object into an array.
| [trashed()](craft-elements-db-elementqueryinterface.md#method-trashed)                                                                            | Narrows the query results to only {elements} that have been soft-deleted.
| [uid()](craft-elements-db-elementqueryinterface.md#method-uid)                                                                                    | Narrows the query results based on the {elements}’ UIDs.
| [unique()](craft-elements-db-elementqueryinterface.md#method-unique)                                                                              | Determines whether only elements with unique IDs should be returned by the query.
| [uri()](craft-elements-db-elementqueryinterface.md#method-uri)                                                                                    | Narrows the query results based on the {elements}’ URIs.
| [where()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#where()-detail "Defined by yii\db\QueryInterface")                       | Sets the WHERE part of the query.
| [with()](craft-elements-db-elementqueryinterface.md#method-with)                                                                                  | Causes the query to return matching {elements} eager-loaded with related elements.
| [withStructure()](craft-elements-db-elementqueryinterface.md#method-withstructure)                                                                | Explicitly determines whether the query should join in the structure data.

### `all()`





Executes the query and returns all results as an array.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1360)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)[] – The resulting elements.



### `ancestorDist()`





Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [ancestorOf()](craft-elements-db-elementqueryinterface.md#method-ancestorof).




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1106)


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
This can be combined with [ancestorDist()](craft-elements-db-elementqueryinterface.md#method-ancestordist) if you want to limit how far away the ancestor {elements} can be.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1080)


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



Causes the query to return matching {elements} eager-loaded with related elements, in addition to the elements that were already specified by [with()](craft-elements-db-elementqueryinterface.md#method-with).

.


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L940)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The property value to append

#### Returns

`self` – The query object itself



### `anyStatus()`



Since

:   3.0.17



Clears out the [status()](craft-elements-db-elementqueryinterface.md#method-status) and [enabledForSite()](craft-elements-db-elementqueryinterface.md#method-enabledforsite) parameters.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1348)



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





Sets the `\craft\elements\db\$archived` property.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L457)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `asArray()`





Causes the query to return matching {elements} as arrays of data, rather than [[{element-class}]] objects.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L75)


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


### `dateCreated()`





Narrows the query results based on the {elements}’ creation dates.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `'>= 2018-04-01'` | that were created on or after 2018-04-01.
| `'< 2018-05-01'` | that were created before 2018-05-01
| `['and', '>= 2018-04-04', '< 2018-05-01']` | that were created between 2018-04-01 and 2018-05-01.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L520)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L556)


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





Narrows the query results to only {elements} that are up to a certain distance away from the {element} specified by [descendantOf()](craft-elements-db-elementqueryinterface.md#method-descendantof).




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1169)


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
This can be combined with [descendantDist()](craft-elements-db-elementqueryinterface.md#method-descendantdist) if you want to limit how far away the descendant {elements} can be.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1143)


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
| a `\craft\elements\db\User` object | created by the user represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L207)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L143)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L175)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L112)


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





Narrows the query results based on whether the {elements} are enabled in the site they’re being queried in, per the [site()](craft-elements-db-elementqueryinterface.md#method-site) parameter.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `true` _(default)_ | that are enabled in the site.
| `false` | whether they are enabled or not in the site.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L719)


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


### `fixedOrder()`





Causes the query results to be returned in the order specified by [id()](craft-elements-db-elementqueryinterface.md#method-id).




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L418)


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


### `hasDescendants()`



Since

:   3.0.4



Narrows the query results based on whether the {elements} have any descendants.

(This has the opposite effect of calling [leaves()](craft-elements-db-elementqueryinterface.md#method-leaves).)




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1017)


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
This can be combined with [fixedOrder()](craft-elements-db-elementqueryinterface.md#method-fixedorder) if you want the results to be returned in a specific order.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L368)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1390)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L85)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference



### `inReverse()`





Causes the query results to be returned in reverse order.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L51)


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


### `leaves()`





Narrows the query results based on whether the {elements} are “leaves” ({elements} with no descendants).

(This has the opposite effect of calling [hasDescendants()](craft-elements-db-elementqueryinterface.md#method-hasdescendants).)




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1043)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L990)


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


### `nextSiblingOf()`





Narrows the query results to only the {element} that comes immediately after another {element}.

Possible values include:

| Value | Fetches the {element}…
| - | -
| `1` | after the {element} with an ID of 1.
| a [[{element-class}]] object | after the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1262)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1381)


#### Arguments

- `$n` ([integer](http://php.net/language.types.integer)) – The offset of the row to return. If [offset()](https://www.yiiframework.com/doc/api/2.0/yii-db-queryinterface#offset()-detail) is set, $offset will be added to it.
- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [null](http://php.net/language.types.null)) – The database connection used to generate the SQL statement.
If this parameter is not given, the `db` application component will be used.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The element or row of the query result. Null is returned if the query
results in nothing.



### `one()`





Executes the query and returns a single row of result.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1370)


#### Arguments

- `$db` ([yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection)) – The database connection used to execute the query.
If this parameter is not given, the `db` application
component will be used.

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md), [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The resulting element. Null is returned if the query results in nothing.



### `positionedAfter()`





Narrows the query results to only {elements} that are positioned after another {element}.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | after the {element} with an ID of 1.
| a [[{element-class}]] object | after the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1324)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1293)


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



If [unique()](craft-elements-db-elementqueryinterface.md#method-unique) is set, this determines which site should be selected when querying multi-site elements.

For example, if element “Foo” exists in Site A and Site B, and element “Bar” exists in Site B and Site C,
and this is set to `['c', 'b', 'a']`, then Foo will be returned for Site C, and Bar will be returned
for Site B.

If this isn’t set, then preference goes to the current site.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L688)


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


### `prevSiblingOf()`





Narrows the query results to only the {element} that comes immediately before another {element}.

Possible values include:

| Value | Fetches the {element}…
| - | -
| `1` | before the {element} with an ID of 1.
| a [[{element-class}]] object | before the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1231)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L905)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – The property value

#### Returns

`static` – Self reference



### `relatedTo()`





Narrows the query results to only {elements} that are related to certain other elements.

See [Relations](https://docs.craftcms.com/v3/relations.html) for a full explanation of how to work with this parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L745)


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
| a `\craft\elements\db\User` object | created by the user represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L329)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L265)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L297)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L234)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L897)


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


### `siblingOf()`





Narrows the query results to only {elements} that are siblings of another {element}.

Possible values include:

| Value | Fetches {elements}…
| - | -
| `1` | beside the {element} with an ID of 1.
| a [[{element-class}]] object | beside the {element} represented by the object.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L1200)


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
only want unique elements to be returned, use [unique()](craft-elements-db-elementqueryinterface.md#method-unique) in conjunction with this.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L597)


#### Arguments

- `$value` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[], [craft\models\Site](craft-models-site.md)) – The property value

#### Returns

`static` – Self reference


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L623)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L823)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L449)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L956)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L781)


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


### `trashed()`



Since

:   3.1.0



Narrows the query results to only {elements} that have been soft-deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L482)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L392)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L653)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L865)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L931)


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




[View source](https://github.com/craftcms/cms/blob/master/src/elements/db/ElementQueryInterface.php#L948)


#### Arguments

- `$value` ([boolean](http://php.net/language.types.boolean)) – The property value (defaults to true)

#### Returns

`static` – Self reference









