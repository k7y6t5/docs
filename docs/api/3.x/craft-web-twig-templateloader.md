---
title: craft\web\twig\TemplateLoader
code:
  - php
  - twig
---

# TemplateLoader

Type

:   Class

Namespace

:   craft\web\twig

Inherits

:   [craft\web\twig\TemplateLoader](craft-web-twig-templateloader.md)

Implements

:   `Twig\Loader\ExistsLoaderInterface`, `Twig\Loader\LoaderInterface`









[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php)




## Protected Properties

| Property                                      | Description
| --------------------------------------------- | -------------------------------------------------------------------------------
| [view](craft-web-twig-templateloader.md#view) | [craft\web\View](craft-web-view.md), [null](http://php.net/language.types.null)

### `view`



Type

:   [craft\web\View](craft-web-view.md), [null](http://php.net/language.types.null)







[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L29)





## Public Methods

| Method                                                                         | Description
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------
| [__construct()](craft-web-twig-templateloader.md#method-construct)             | Constructor
| [exists()](craft-web-twig-templateloader.md#method-exists)                     |
| [getCacheKey()](craft-web-twig-templateloader.md#method-getcachekey)           | Gets the cache key to use for the cache for a given template.
| [getSourceContext()](craft-web-twig-templateloader.md#method-getsourcecontext) |
| [isFresh()](craft-web-twig-templateloader.md#method-isfresh)                   | Returns whether the cached template is still up-to-date with the latest template.

### `__construct()`





Constructor




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L36-L39)


#### Arguments

- `$view` ([craft\web\View](craft-web-view.md))




### `exists()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L44-L47)


#### Arguments

- `$name`




### `getCacheKey()`





Gets the cache key to use for the cache for a given template.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L70-L73)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the template to load

#### Returns

[string](http://php.net/language.types.string) – The cache key (the path to the template)

#### Throws

- [craft\web\twig\TemplateLoaderException](craft-web-twig-templateloaderexception.md)\
  if the template doesn’t exist


### `getSourceContext()`










[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L52-L61)


#### Arguments

- `$name`




### `isFresh()`





Returns whether the cached template is still up-to-date with the latest template.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/TemplateLoader.php#L83-L99)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The template name
- `$time` ([integer](http://php.net/language.types.integer)) – The last modification time of the cached template

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\web\twig\TemplateLoaderException](craft-web-twig-templateloaderexception.md)\
  if the template doesn’t exist









