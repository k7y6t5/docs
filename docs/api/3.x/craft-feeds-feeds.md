---
title: craft\feeds\Feeds
code:
  - php
  - twig
---

# Feeds

Type

:   Class

Namespace

:   craft\feeds

Inherits

:   [craft\feeds\Feeds](craft-feeds-feeds.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0

Deprecated in

:    in 3.4.24



The Feeds service provides APIs for fetching remote RSS and Atom feeds.

An instance of the Feeds service is globally accessible in Craft via [`Craft::$app->feeds`](craft-base-applicationtrait.md#feeds).



[View source](https://github.com/craftcms/cms/blob/master/src/feeds/Feeds.php)


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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getFeed()](craft-feeds-feeds.md#method-getfeed)                                                                                            | Fetches and parses an RSS or Atom feed, and returns info about the feed and its items.
| [getFeedItems()](craft-feeds-feeds.md#method-getfeeditems)                                                                                  | Fetches and parses an RSS or Atom feed, and returns its items.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getFeed()`



Since

:   3.0.37



Fetches and parses an RSS or Atom feed, and returns info about the feed and its items.

The returned array will have the following keys:

- `authors` – An array of the feed’s authors, where each sub-element has the following keys:
    - `name` – The author’s name
    - `url` – The author’s URL
    - `email` – The author’s email
- `categories` – An array of the feed’s categories, where each sub-element has the following keys:
    - `term` – The category’s term
    - `scheme` – The category’s scheme
    - `label` – The category’s label
- `copyright` – The copyright info for the feed, or null uf not known.
- `dateCreated` – The feed’s creation date, or null if not known.
- `dateUpdated` – The feed’s last modification date, or null if not known.
- `description` – The feed’s description, or null if not known.
- `generator` – The feed’s generator, or null if not known.
- `id` – The feed’s ID, or null if not known.
- `items` – An array of the feed’s items. See [getFeedItems()](craft-feeds-feeds.md#method-getfeeditems) for a
  list of keys each element in this array will contain.
- `language` – The feed’s language, or null if not known.
- `link` – The link to the feed’s HTML source, or null if not known.
- `title` – The feed’s title, or null if not known.




[View source](https://github.com/craftcms/cms/blob/master/src/feeds/Feeds.php#L85-L136)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The feed’s URL.
- `$cacheDuration` (`mixed`, [null](http://php.net/language.types.null)) – How long to cache the results. See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for possible values.

#### Returns

[array](http://php.net/language.types.array) – The feed info

#### Throws

- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)

---

#### Example

::: code
```php
$feedUrl = 'https://craftcms.com/news.rss';
$feed = Craft::$app->feeds->getFeed($feedUrl, 10);
```
```twig
{% set feedUrl = "https://craftcms.com/news.rss" %}
{% set feed = craft.app.feeds.getFeed(feedUrl) %}

<h3>{{ feed.title }}</h3>

{% for item in feed.items[0:10] %}
    <article>
        <h3><a href="{{ item.permalink }}">{{ item.title }}</a></h3>
        <p class="author">{{ item.authors[0].name }}</p>
        <p class="date">{{ item.date|date('short') }}</p>
        {{ item.summary }}
    </article>
{% endfor %}
```
:::


### `getFeedItems()`





Fetches and parses an RSS or Atom feed, and returns its items.

Each element in the returned array will have the following keys:
- `authors` – An array of the item’s authors, where each sub-element has the following keys:
    - `name` – The author’s name
    - `url` – The author’s URL
    - `email` – The author’s email
- `categories` – An array of the item’s categories, where each sub-element has the following keys:
    - `term` – The category’s term
    - `scheme` – The category’s scheme
    - `label` – The category’s label
- `content` – The item’s main content.
- `contributors` – An array of the item’s contributors, where each sub-element has the following keys:
    - `name` – The contributor’s name
    - `url` – The contributor’s URL
    - `email` – The contributor’s email
- `date` – A `\craft\feeds\DateTime` object representing the item’s date.
- `dateUpdated` – A `\craft\feeds\DateTime` object representing the item’s last updated date.
- `permalink` – The item’s URL.
- `summary` – The item’s summary content.
- `title` – The item’s title.




[View source](https://github.com/craftcms/cms/blob/master/src/feeds/Feeds.php#L189-L200)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The feed’s URL.
- `$limit` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The maximum number of items to return. Default is 0 (no limit).
- `$offset` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The number of items to skip. Defaults to 0.
- `$cacheDuration` (`mixed`, [null](http://php.net/language.types.null)) – How long to cache the results. See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for possible values.

#### Returns

[array](http://php.net/language.types.array) – The list of feed items.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)
- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)

---

#### Example

::: code
```php
$feedUrl = 'https://craftcms.com/news.rss';
$items = Craft::$app->feeds->getFeedItems($feedUrl, 10);
```
```twig
{% set feedUrl = "https://craftcms.com/news.rss" %}
{% set items = craft.app.feeds.getFeedItems(feedUrl, 10) %}

{% for item in items %}
    <article>
        <h3><a href="{{ item.permalink }}">{{ item.title }}</a></h3>
        <p class="author">{{ item.authors[0].name }}</p>
        <p class="date">{{ item.date|date('short') }}</p>
        {{ item.summary }}
    </article>
{% endfor %}
```
:::









