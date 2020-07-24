---
title: craft\feeds\GuzzleClient
code:
  - php
  - twig
---

# GuzzleClient

Type

:   Class

Namespace

:   craft\feeds

Inherits

:   [craft\feeds\GuzzleClient](craft-feeds-guzzleclient.md)

Implements

:   `Laminas\Feed\Reader\Http\ClientInterface`

Since

:   3.0.0



PSR-7 Guzzle client for the Feeds service.





[View source](https://github.com/craftcms/cms/blob/master/src/feeds/GuzzleClient.php)






## Public Methods

| Method                                                        | Description
| ------------------------------------------------------------- | ---------------------------------
| [__construct()](craft-feeds-guzzleclient.md#method-construct) |
| [get()](craft-feeds-guzzleclient.md#method-get)               | Make a GET request to a given URI

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/feeds/GuzzleClient.php#L32-L35)


#### Arguments

- `$client` (`\GuzzleHttp\ClientInterface`, [null](http://php.net/language.types.null))




### `get()`





Make a GET request to a given URI




[View source](https://github.com/craftcms/cms/blob/master/src/feeds/GuzzleClient.php#L43-L48)


#### Arguments

- `$uri` ([string](http://php.net/language.types.string))

#### Returns

`\Laminas\Feed\Reader\Http\ResponseInterface`










