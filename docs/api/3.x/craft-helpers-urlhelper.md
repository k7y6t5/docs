---
title: craft\helpers\UrlHelper
code:
  - php
  - twig
---

# UrlHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\UrlHelper](craft-helpers-urlhelper.md)

Since

:   3.0.0



Class Url





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php)






## Public Methods

| Method                                                                                       | Description
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [actionUrl()](craft-helpers-urlhelper.md#method-actionurl)                                   |
| [baseCpUrl()](craft-helpers-urlhelper.md#method-basecpurl)                                   | Returns the control panel’s base URL (with a trailing slash) (sans control panel trigger).
| [baseRequestUrl()](craft-helpers-urlhelper.md#method-baserequesturl)                         | Returns the base URL (with a trailing slash) for the current request.
| [baseSiteUrl()](craft-helpers-urlhelper.md#method-basesiteurl)                               | Returns the current site’s base URL (with a trailing slash).
| [baseUrl()](craft-helpers-urlhelper.md#method-baseurl)                                       | Returns either the current site’s base URL or the control panel’s base URL, depending on the type of request this is.
| [buildQuery()](craft-helpers-urlhelper.md#method-buildquery)                                 | Returns a query string based on the given params.
| [cpHost()](craft-helpers-urlhelper.md#method-cphost)                                         | Returns the control panel's host.
| [cpUrl()](craft-helpers-urlhelper.md#method-cpurl)                                           | Returns a control panel URL.
| [getProtocolForTokenizedUrl()](craft-helpers-urlhelper.md#method-getprotocolfortokenizedurl) | Returns what the scheme part of the URL should be (http/https) for any tokenized URLs in Craft (email verification links, password reset urls, share entry URLs, etc.
| [getSchemeForTokenizedUrl()](craft-helpers-urlhelper.md#method-getschemefortokenizedurl)     | Returns what the scheme part of the URL should be (http/https) for any tokenized URLs in Craft (email verification links, password reset urls, share entry URLs, etc.
| [host()](craft-helpers-urlhelper.md#method-host)                                             | Returns the host info for the control panel or the current site, depending on the request type.
| [hostInfo()](craft-helpers-urlhelper.md#method-hostinfo)                                     | Parses a URL for the host info.
| [isAbsoluteUrl()](craft-helpers-urlhelper.md#method-isabsoluteurl)                           | Returns whether a given string appears to be an absolute URL.
| [isFullUrl()](craft-helpers-urlhelper.md#method-isfullurl)                                   | Returns whether a given string appears to be a "full" URL (absolute, root-relative or protocol-relative).
| [isProtocolRelativeUrl()](craft-helpers-urlhelper.md#method-isprotocolrelativeurl)           | Returns whether a given string appears to be a protocol-relative URL.
| [isRootRelativeUrl()](craft-helpers-urlhelper.md#method-isrootrelativeurl)                   | Returns whether a given string appears to be a root-relative URL.
| [removeParam()](craft-helpers-urlhelper.md#method-removeparam)                               | Removes a query string param from a URL.
| [rootRelativeUrl()](craft-helpers-urlhelper.md#method-rootrelativeurl)                       | Returns a root-relative URL based on the given URL.
| [siteHost()](craft-helpers-urlhelper.md#method-sitehost)                                     | Returns the current site’s host.
| [siteUrl()](craft-helpers-urlhelper.md#method-siteurl)                                       | Returns a site URL.
| [stripQueryString()](craft-helpers-urlhelper.md#method-stripquerystring)                     | Removes the query string from a given URL.
| [url()](craft-helpers-urlhelper.md#method-url)                                               | Returns either a control panel or a site URL, depending on the request type.
| [urlWithParams()](craft-helpers-urlhelper.md#method-urlwithparams)                           | Returns a URL with additional query string parameters.
| [urlWithProtocol()](craft-helpers-urlhelper.md#method-urlwithprotocol)                       | Returns a URL with a specific scheme.
| [urlWithScheme()](craft-helpers-urlhelper.md#method-urlwithscheme)                           | Returns a URL with a specific scheme.
| [urlWithToken()](craft-helpers-urlhelper.md#method-urlwithtoken)                             | Returns a URL with a 'token' query string param set to a given token.

### `actionUrl()`










[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L338-L357)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$scheme` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The scheme to use ('http' or 'https'). If empty, the scheme used for the current
request will be used.

#### Returns

[string](http://php.net/language.types.string)



### `baseCpUrl()`





Returns the control panel’s base URL (with a trailing slash) (sans control panel trigger).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L457-L467)



#### Returns

[string](http://php.net/language.types.string)



### `baseRequestUrl()`





Returns the base URL (with a trailing slash) for the current request.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L474-L482)



#### Returns

[string](http://php.net/language.types.string)



### `baseSiteUrl()`





Returns the current site’s base URL (with a trailing slash).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L434-L450)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if there's no current site for some reason


### `baseUrl()`





Returns either the current site’s base URL or the control panel’s base URL, depending on the type of request this is.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L420-L426)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)\
  if this is a site request and yet there's no current site for some reason


### `buildQuery()`



Since

:   3.3.0



Returns a query string based on the given params.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L73-L92)


#### Arguments

- `$params` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string)



### `cpHost()`





Returns the control panel's host.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L511-L514)



#### Returns

[string](http://php.net/language.types.string)



### `cpUrl()`





Returns a control panel URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L265-L276)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$scheme` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)



### `getProtocolForTokenizedUrl()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [getSchemeForTokenizedUrl()](craft-helpers-urlhelper.md#method-getschemefortokenizedurl) instead.
:::




Returns what the scheme part of the URL should be (http/https)
for any tokenized URLs in Craft (email verification links, password reset
urls, share entry URLs, etc.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L569-L573)



#### Returns

[string](http://php.net/language.types.string)



### `getSchemeForTokenizedUrl()`





Returns what the scheme part of the URL should be (http/https)
for any tokenized URLs in Craft (email verification links, password reset
urls, share entry URLs, etc.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L386-L412)



#### Returns

[string](http://php.net/language.types.string)



### `host()`





Returns the host info for the control panel or the current site, depending on the request type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L490-L493)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)


### `hostInfo()`





Parses a URL for the host info.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L522-L542)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `isAbsoluteUrl()`





Returns whether a given string appears to be an absolute URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L28-L31)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isFullUrl()`





Returns whether a given string appears to be a "full" URL (absolute, root-relative or protocol-relative).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L61-L64)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isProtocolRelativeUrl()`





Returns whether a given string appears to be a protocol-relative URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L39-L42)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isRootRelativeUrl()`





Returns whether a given string appears to be a root-relative URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L50-L53)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `removeParam()`



Since

:   3.2.2



Removes a query string param from a URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L131-L147)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))
- `$param` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `rootRelativeUrl()`



Since

:   3.1.11



Returns a root-relative URL based on the given URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L199-L211)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `siteHost()`





Returns the current site’s host.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L501-L504)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)


### `siteUrl()`





Returns a site URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L288-L329)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$scheme` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$siteId` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if|null $siteId is invalid


### `stripQueryString()`





Removes the query string from a given URL.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L365-L377)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The URL to check.

#### Returns

[string](http://php.net/language.types.string) – The URL without a query string.



### `url()`





Returns either a control panel or a site URL, depending on the request type.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L223-L255)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$scheme` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$showScriptName` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the script name (index.php) should be included in the URL.
By default (null) it will defer to the `omitScriptNameInUrls` config setting.

#### Returns

[string](http://php.net/language.types.string)



### `urlWithParams()`





Returns a URL with additional query string parameters.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L101-L121)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))
- `$params` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `urlWithProtocol()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [urlWithScheme()](craft-helpers-urlhelper.md#method-urlwithscheme) instead.
:::




Returns a URL with a specific scheme.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L555-L559)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The URL
- `$scheme` ([string](http://php.net/language.types.string)) – The scheme ('http' or 'https')

#### Returns

[string](http://php.net/language.types.string)



### `urlWithScheme()`





Returns a URL with a specific scheme.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L174-L190)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The URL
- `$scheme` ([string](http://php.net/language.types.string)) – The scheme ('http' or 'https')

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [craft\errors\SiteNotFoundException](craft-errors-sitenotfoundexception.md)


### `urlWithToken()`





Returns a URL with a 'token' query string param set to a given token.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/UrlHelper.php#L156-L164)


#### Arguments

- `$url` ([string](http://php.net/language.types.string))
- `$token` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)










