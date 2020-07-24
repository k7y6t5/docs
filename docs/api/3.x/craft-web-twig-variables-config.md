---
title: craft\web\twig\variables\Config
code:
  - php
  - twig
---

# Config

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Config](craft-web-twig-variables-config.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Class Config variable.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php)






## Public Methods

| Method                                                                                   | Description
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------
| [__get()](craft-web-twig-variables-config.md#method-get)                                 | Returns a config item.
| [__isset()](craft-web-twig-variables-config.md#method-isset)                             | Returns whether a config item exists.
| [get()](craft-web-twig-variables-config.md#method-get)                                   | Returns a config item from the specified config file.
| [omitScriptNameInUrls()](craft-web-twig-variables-config.md#method-omitscriptnameinurls) | Returns whether generated URLs should omit 'index.php'.
| [usePathInfo()](craft-web-twig-variables-config.md#method-usepathinfo)                   | Returns whether generated URLs should be formatted using PATH_INFO.

### `__get()`





Returns a config item.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php#L42-L47)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

`mixed`



### `__isset()`





Returns whether a config item exists.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php#L30-L33)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `get()`





Returns a config item from the specified config file.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php#L56-L65)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))
- `$category` ([string](http://php.net/language.types.string))

#### Returns

`mixed`



### `omitScriptNameInUrls()`





Returns whether generated URLs should omit 'index.php'.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php#L84-L89)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `usePathInfo()`





Returns whether generated URLs should be formatted using PATH_INFO.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Config.php#L72-L77)



#### Returns

[boolean](http://php.net/language.types.boolean)










