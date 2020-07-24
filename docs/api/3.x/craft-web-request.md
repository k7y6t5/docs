---
title: craft\web\Request
code:
  - php
  - twig
---

# Request

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\Request](craft-web-request.md) &raquo;
[yii\web\Request](https://www.yiiframework.com/doc/api/2.0/yii-web-request) &raquo;
[yii\base\Request](https://www.yiiframework.com/doc/api/2.0/yii-base-request) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [craft\base\RequestTrait](craft-base-requesttrait.md)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [_token](craft-web-request.md#token)                                                                                                           | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)
| [absoluteUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$absoluteUrl-detail "Defined by yii\web\Request")                       | [string](http://php.net/language.types.string) – The currently requested absolute URL.
| [acceptableContentTypes](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$acceptableContentTypes-detail "Defined by yii\web\Request") | [array](http://php.net/language.types.array) – The content types ordered by the quality score.
| [acceptableLanguages](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$acceptableLanguages-detail "Defined by yii\web\Request")       | [array](http://php.net/language.types.array) – The languages ordered by the preference level.
| [acceptsJson](craft-web-request.md#acceptsjson)                                                                                                | [boolean](http://php.net/language.types.boolean)
| [actionSegments](craft-web-request.md#actionsegments)                                                                                          | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The action path segments, or `null` if this isn’t an action request.
| [authCredentials](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$authCredentials-detail "Defined by yii\web\Request")               | [array](http://php.net/language.types.array) – That contains exactly two elements: - 0: the username sent via HTTP authentication, `null` if the username is not given - 1: the password sent via HTTP authentication, `null` if the password is not given
| [authPassword](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$authPassword-detail "Defined by yii\web\Request")                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The password sent via HTTP authentication, `null` if the password is not given
| [authUser](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$authUser-detail "Defined by yii\web\Request")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The username sent via HTTP authentication, `null` if the username is not given
| [baseUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$baseUrl-detail "Defined by yii\web\Request")                               | [string](http://php.net/language.types.string) – The relative URL for the application
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [bodyParams](craft-web-request.md#bodyparams)                                                                                                  | [array](http://php.net/language.types.array) – The request parameters given in the request body.
| [clientOs](craft-web-request.md#clientos)                                                                                                      | [string](http://php.net/language.types.string) – The OS the client is running.
| [contentType](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$contentType-detail "Defined by yii\web\Request")                       | [string](http://php.net/language.types.string) – Request content-type.
| [cookieValidationKey](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$cookieValidationKey-detail "Defined by yii\web\Request")       | [string](http://php.net/language.types.string) – A secret key used for cookie validation.
| [cookies](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$cookies-detail "Defined by yii\web\Request")                               | [yii\web\CookieCollection](https://www.yiiframework.com/doc/api/2.0/yii-web-cookiecollection) – The cookie collection.
| [csrfCookie](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$csrfCookie-detail "Defined by yii\web\Request")                         | [array](http://php.net/language.types.array) – The configuration for creating the CSRF [cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie).
| [csrfParam](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$csrfParam-detail "Defined by yii\web\Request")                           | [string](http://php.net/language.types.string) – The name of the token used to prevent CSRF.
| [csrfToken](craft-web-request.md#csrftoken)                                                                                                    | [string](http://php.net/language.types.string) – The token used to perform CSRF validation.
| [csrfTokenFromHeader](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$csrfTokenFromHeader-detail "Defined by yii\web\Request")       | [string](http://php.net/language.types.string) – The CSRF token sent via [CSRF_HEADER](https://www.yiiframework.com/doc/api/2.0/yii-web-request#CSRF_HEADER-detail) by browser.
| [eTags](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$eTags-detail "Defined by yii\web\Request")                                   | [array](http://php.net/language.types.array) – The entity tags
| [enableCookieValidation](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$enableCookieValidation-detail "Defined by yii\web\Request") | [boolean](http://php.net/language.types.boolean) – Whether cookies should be validated to ensure they are not tampered.
| [enableCsrfCookie](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$enableCsrfCookie-detail "Defined by yii\web\Request")             | [boolean](http://php.net/language.types.boolean) – Whether to use cookie to persist CSRF token.
| [enableCsrfValidation](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$enableCsrfValidation-detail "Defined by yii\web\Request")     | [boolean](http://php.net/language.types.boolean) – Whether to enable CSRF (Cross-Site Request Forgery) validation.
| [fullPath](craft-web-request.md#fullpath)                                                                                                      | [string](http://php.net/language.types.string)
| [headers](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$headers-detail "Defined by yii\web\Request")                               | [yii\web\HeaderCollection](https://www.yiiframework.com/doc/api/2.0/yii-web-headercollection) – The header collection
| [hostInfo](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$hostInfo-detail "Defined by yii\web\Request")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Schema and hostname part (with port number if needed) of the request URL (e.g. `http://www.
| [hostName](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$hostName-detail "Defined by yii\web\Request")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Hostname part of the request URL (e.g. `www.
| [ipHeaders](craft-web-request.md#ipheaders)                                                                                                    | [string](http://php.net/language.types.string)[] – List of headers where proxies store the real client IP.
| [isActionRequest](craft-web-request.md#isactionrequest)                                                                                        | [boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to a controller action.
| [isAjax](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isAjax-detail "Defined by yii\web\Request")                                 | [boolean](http://php.net/language.types.boolean) – Whether this is an AJAX (XMLHttpRequest) request.
| [isConsoleRequest](https://www.yiiframework.com/doc/api/2.0/yii-base-request#$isConsoleRequest-detail "Defined by yii\base\Request")           | [boolean](http://php.net/language.types.boolean) – The value indicating whether the current request is made via console
| [isCpRequest](craft-web-request.md#iscprequest)                                                                                                | [boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to the control panel.
| [isDelete](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isDelete-detail "Defined by yii\web\Request")                             | [boolean](http://php.net/language.types.boolean) – Whether this is a DELETE request.
| [isFlash](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isFlash-detail "Defined by yii\web\Request")                               | [boolean](http://php.net/language.types.boolean) – Whether this is an Adobe Flash or Adobe Flex request.
| [isGet](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isGet-detail "Defined by yii\web\Request")                                   | [boolean](http://php.net/language.types.boolean) – Whether this is a GET request.
| [isHead](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isHead-detail "Defined by yii\web\Request")                                 | [boolean](http://php.net/language.types.boolean) – Whether this is a HEAD request.
| [isLivePreview](craft-web-request.md#islivepreview)                                                                                            | [boolean](http://php.net/language.types.boolean) – Whether this is a Live Preview request.
| [isLoginRequest](craft-web-request.md#isloginrequest)                                                                                          | [boolean](http://php.net/language.types.boolean)
| [isOptions](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isOptions-detail "Defined by yii\web\Request")                           | [boolean](http://php.net/language.types.boolean) – Whether this is a OPTIONS request.
| [isPatch](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isPatch-detail "Defined by yii\web\Request")                               | [boolean](http://php.net/language.types.boolean) – Whether this is a PATCH request.
| [isPjax](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isPjax-detail "Defined by yii\web\Request")                                 | [boolean](http://php.net/language.types.boolean) – Whether this is a PJAX request
| [isPost](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isPost-detail "Defined by yii\web\Request")                                 | [boolean](http://php.net/language.types.boolean) – Whether this is a POST request.
| [isPreview](craft-web-request.md#ispreview)                                                                                                    | [boolean](http://php.net/language.types.boolean)
| [isPut](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isPut-detail "Defined by yii\web\Request")                                   | [boolean](http://php.net/language.types.boolean) – Whether this is a PUT request.
| [isSecureConnection](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$isSecureConnection-detail "Defined by yii\web\Request")         | [boolean](http://php.net/language.types.boolean) – If the request is sent via secure channel (https)
| [isSingleActionRequest](craft-web-request.md#issingleactionrequest)                                                                            | [boolean](http://php.net/language.types.boolean)
| [isSiteRequest](craft-web-request.md#issiterequest)                                                                                            | [boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to the front-end site.
| [isWebAliasSetDynamically](craft-base-requesttrait.md#iswebaliassetdynamically "Defined by craft\base\RequestTrait")                           | [boolean](http://php.net/language.types.boolean)
| [isWebrootAliasSetDynamically](craft-base-requesttrait.md#iswebrootaliassetdynamically "Defined by craft\base\RequestTrait")                   | [boolean](http://php.net/language.types.boolean)
| [maxPageNum](craft-web-request.md#maxpagenum)                                                                                                  | [integer](http://php.net/language.types.integer) – The highest page number that Craft should accept.
| [method](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$method-detail "Defined by yii\web\Request")                                 | [string](http://php.net/language.types.string) – Request method, such as GET, POST, HEAD, PUT, PATCH, DELETE.
| [methodParam](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$methodParam-detail "Defined by yii\web\Request")                       | [string](http://php.net/language.types.string) – The name of the POST parameter that is used to indicate if a request is a PUT, PATCH or DELETE request tunneled through POST.
| [normalizedContentType](craft-web-request.md#normalizedcontenttype)                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [origin](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$origin-detail "Defined by yii\web\Request")                                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – URL origin of a CORS request, `null` if not available.
| [pageNum](craft-web-request.md#pagenum)                                                                                                        | [integer](http://php.net/language.types.integer) – The requested page number.
| [parsers](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$parsers-detail "Defined by yii\web\Request")                               | [array](http://php.net/language.types.array) – The parsers for converting the raw HTTP request body into [bodyParams](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$bodyParams-detail).
| [pathInfo](craft-web-request.md#pathinfo)                                                                                                      | [string](http://php.net/language.types.string) – The requested path, or the path info.
| [port](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$port-detail "Defined by yii\web\Request")                                     | [integer](http://php.net/language.types.integer) – Port number for insecure requests.
| [preferredLanguage](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$preferredLanguage-detail "Defined by yii\web\Request")           | [string](http://php.net/language.types.string) – The language that the application should use.
| [queryParams](craft-web-request.md#queryparams)                                                                                                | [array](http://php.net/language.types.array) – The request GET parameter values.
| [queryString](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$queryString-detail "Defined by yii\web\Request")                       | [string](http://php.net/language.types.string) – Part of the request URL that is after the question mark
| [queryStringWithoutPath](craft-web-request.md#querystringwithoutpath)                                                                          | [string](http://php.net/language.types.string) – The query string.
| [rawBody](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$rawBody-detail "Defined by yii\web\Request")                               | [string](http://php.net/language.types.string) – The request body
| [referrer](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$referrer-detail "Defined by yii\web\Request")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – URL referrer, null if not available
| [remoteHost](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$remoteHost-detail "Defined by yii\web\Request")                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Remote host name, `null` if not available
| [remoteIP](craft-web-request.md#remoteip)                                                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Remote IP address, `null` if not available.
| [scriptFile](https://www.yiiframework.com/doc/api/2.0/yii-base-request#$scriptFile-detail "Defined by yii\base\Request")                       | [string](http://php.net/language.types.string) – Entry script file path (processed w/ realpath())
| [scriptFilename](craft-base-requesttrait.md#scriptfilename "Defined by craft\base\RequestTrait")                                               | [string](http://php.net/language.types.string)
| [scriptUrl](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$scriptUrl-detail "Defined by yii\web\Request")                           | [string](http://php.net/language.types.string) – The relative URL of the entry script.
| [secureHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureHeaders-detail "Defined by yii\web\Request")                   | [array](http://php.net/language.types.array) – Lists of headers that are, by default, subject to the trusted host configuration.
| [securePort](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$securePort-detail "Defined by yii\web\Request")                         | [integer](http://php.net/language.types.integer) – Port number for secure requests.
| [secureProtocolHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureProtocolHeaders-detail "Defined by yii\web\Request")   | [array](http://php.net/language.types.array) – List of headers to check for determining whether the connection is made via HTTPS.
| [segments](craft-web-request.md#segments)                                                                                                      | [array](http://php.net/language.types.array) – The Craft path’s segments.
| [serverName](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$serverName-detail "Defined by yii\web\Request")                         | [string](http://php.net/language.types.string) – Server name, null if not available
| [serverPort](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$serverPort-detail "Defined by yii\web\Request")                         | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Server port number, null if not available
| [token](craft-web-request.md#token)                                                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The token, or `null` if there isn’t one.
| [trustedHosts](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail "Defined by yii\web\Request")                     | [array](http://php.net/language.types.array) – The configuration for trusted security related headers.
| [url](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$url-detail "Defined by yii\web\Request")                                       | [string](http://php.net/language.types.string) – The currently requested relative URL.
| [userAgent](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$userAgent-detail "Defined by yii\web\Request")                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – User agent, null if not available
| [userHost](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$userHost-detail "Defined by yii\web\Request")                             | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – User host name, null if not available
| [userIP](craft-web-request.md#userip)                                                                                                          | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – User IP address, null if not available

### `_token`



Type

:   [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean)





See also [getToken()](craft-web-request.md#method-gettoken)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L158)



### `acceptsJson`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `actionSegments`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)

Access

:   Read-only



The action path segments, or `null` if this isn’t an action request.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `bodyParams`



Type

:   [array](http://php.net/language.types.array)



The request parameters given in the request body.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `clientOs`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The OS the client is running.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `csrfToken`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The token used to perform CSRF validation.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `fullPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `ipHeaders`



Type

:   [string](http://php.net/language.types.string)[]





List of headers where proxies store the real client IP.
It's not advisable to put insecure headers here.
To use the `Forwarded` header according to RFC 7239, the header must be added to [secureHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureHeaders-detail) list.
The match of header names is case-insensitive.





[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L54-L61)



### `isActionRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current request should be routed to a controller action.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isCpRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current request should be routed to the control panel.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isLivePreview`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether this is a Live Preview request.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isLoginRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.0







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isPreview`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only

Since

:   3.2.1







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isSingleActionRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `isSiteRequest`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether the current request should be routed to the front-end site.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `maxPageNum`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.1.14



The highest page number that Craft should accept.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L67)



### `normalizedContentType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only

Since

:   3.3.8







[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `pageNum`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only



The requested page number.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `pathInfo`



Type

:   [string](http://php.net/language.types.string)



The requested path, or the path info.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `queryParams`



Type

:   [array](http://php.net/language.types.array)



The request GET parameter values.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `queryStringWithoutPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The query string.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `remoteIP`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



Remote IP address, `null` if not available.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `segments`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



The Craft path’s segments.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `token`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



The token, or `null` if there isn’t one.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)



### `userIP`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



User IP address, null if not available



[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php)







## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                               | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                               | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                 | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                             | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                 | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                             | Sets an object property to null.
| [accepts()](craft-web-request.md#method-accepts)                                                                                                        | Returns whether the request will accept a given content type3
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                         | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                 | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")               | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")               | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#get()-detail "Defined by yii\web\Request")                                             | Returns GET parameter with a given name. If name isn't specified, returns an array of all GET parameters.
| [getAbsoluteUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAbsoluteUrl()-detail "Defined by yii\web\Request")                       | Returns the currently requested absolute URL.
| [getAcceptableContentTypes()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAcceptableContentTypes()-detail "Defined by yii\web\Request") | Returns the content types acceptable by the end user.
| [getAcceptableLanguages()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAcceptableLanguages()-detail "Defined by yii\web\Request")       | Returns the languages acceptable by the end user.
| [getAcceptsJson()](craft-web-request.md#method-getacceptsjson)                                                                                          | Returns whether the request will accept a JSON response.
| [getActionSegments()](craft-web-request.md#method-getactionsegments)                                                                                    | Returns the segments of the requested controller action path, if this is an [action request](craft-web-request.md#method-getisactionrequest).
| [getAuthCredentials()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAuthCredentials()-detail "Defined by yii\web\Request")               |
| [getAuthPassword()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAuthPassword()-detail "Defined by yii\web\Request")                     |
| [getAuthUser()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getAuthUser()-detail "Defined by yii\web\Request")                             |
| [getBaseUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getBaseUrl()-detail "Defined by yii\web\Request")                               | Returns the relative URL for the application.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                       | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                     | Returns all behaviors attached to this component.
| [getBodyParam()](craft-web-request.md#method-getbodyparam)                                                                                              | Returns the named request body parameter value.
| [getBodyParams()](craft-web-request.md#method-getbodyparams)                                                                                            | Returns the request parameters given in the request body.
| [getClientOs()](craft-web-request.md#method-getclientos)                                                                                                | Returns whether the client is running "Windows", "Mac", "Linux" or "Other", based on the browser's UserAgent string.
| [getContentType()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getContentType()-detail "Defined by yii\web\Request")                       | Returns request content-type The Content-Type header field indicates the MIME type of the data contained in [getRawBody()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getRawBody()-detail) or, in the case of the HEAD method, the media type that would have been sent had the request been a GET.
| [getCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getCookies()-detail "Defined by yii\web\Request")                               | Returns the cookie collection.
| [getCsrfToken()](craft-web-request.md#method-getcsrftoken)                                                                                              | Returns the token used to perform CSRF validation.
| [getCsrfTokenFromHeader()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getCsrfTokenFromHeader()-detail "Defined by yii\web\Request")       |
| [getETags()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getETags()-detail "Defined by yii\web\Request")                                   | Gets the Etags.
| [getFullPath()](craft-web-request.md#method-getfullpath)                                                                                                | Returns the full request path, whether that came from the path info or the path query parameter.
| [getHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getHeaders()-detail "Defined by yii\web\Request")                               | Returns the header collection.
| [getHostInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getHostInfo()-detail "Defined by yii\web\Request")                             | Returns the schema and host part of the current request URL.
| [getHostName()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getHostName()-detail "Defined by yii\web\Request")                             | Returns the host part of the current request URL.
| [getIsActionRequest()](craft-web-request.md#method-getisactionrequest)                                                                                  | Returns whether a specific controller action was requested.
| [getIsAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsAjax()-detail "Defined by yii\web\Request")                                 | Returns whether this is an AJAX (XMLHttpRequest) request.
| [getIsConsoleRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#getIsConsoleRequest()-detail "Defined by yii\base\Request")           | Returns a value indicating whether the current request is made via command line.
| [getIsCpRequest()](craft-web-request.md#method-getiscprequest)                                                                                          | Returns whether the control panel was requested.
| [getIsDelete()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsDelete()-detail "Defined by yii\web\Request")                             | Returns whether this is a DELETE request.
| [getIsFlash()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsFlash()-detail "Defined by yii\web\Request")                               | Returns whether this is an Adobe Flash or Flex request.
| [getIsGet()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsGet()-detail "Defined by yii\web\Request")                                   | Returns whether this is a GET request.
| [getIsHead()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsHead()-detail "Defined by yii\web\Request")                                 | Returns whether this is a HEAD request.
| [getIsLivePreview()](craft-web-request.md#method-getislivepreview)                                                                                      | Returns whether this is a Live Preview request.
| [getIsLoginRequest()](craft-web-request.md#method-getisloginrequest)                                                                                    | Returns whether this was a Login request.
| [getIsOptions()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsOptions()-detail "Defined by yii\web\Request")                           | Returns whether this is an OPTIONS request.
| [getIsPatch()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsPatch()-detail "Defined by yii\web\Request")                               | Returns whether this is a PATCH request.
| [getIsPjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsPjax()-detail "Defined by yii\web\Request")                                 | Returns whether this is a PJAX request.
| [getIsPost()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsPost()-detail "Defined by yii\web\Request")                                 | Returns whether this is a POST request.
| [getIsPreview()](craft-web-request.md#method-getispreview)                                                                                              | Returns whether this is an element preview request.
| [getIsPut()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsPut()-detail "Defined by yii\web\Request")                                   | Returns whether this is a PUT request.
| [getIsSecureConnection()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIsSecureConnection()-detail "Defined by yii\web\Request")         | Return if the request is sent via secure channel (https).
| [getIsSingleActionRequest()](craft-web-request.md#method-getissingleactionrequest)                                                                      | Returns whether the current request is solely an action request.
| [getIsSiteRequest()](craft-web-request.md#method-getissiterequest)                                                                                      | Returns whether the front end site was requested.
| [getMethod()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getMethod()-detail "Defined by yii\web\Request")                                 | Returns the method of the current request (e.g. GET, POST, HEAD, PUT, PATCH, DELETE).
| [getNormalizedContentType()](craft-web-request.md#method-getnormalizedcontenttype)                                                                      | Returns the normalized content type.
| [getOrigin()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getOrigin()-detail "Defined by yii\web\Request")                                 | Returns the URL origin of a CORS request.
| [getPageNum()](craft-web-request.md#method-getpagenum)                                                                                                  | Returns the requested page number.
| [getParam()](craft-web-request.md#method-getparam)                                                                                                      | Returns the named parameter value from either GET or the request body.
| [getPathInfo()](craft-web-request.md#method-getpathinfo)                                                                                                | Returns the requested path, sans control panel trigger and pagination info.
| [getPort()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getPort()-detail "Defined by yii\web\Request")                                     | Returns the port to use for insecure requests.
| [getPreferredLanguage()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getPreferredLanguage()-detail "Defined by yii\web\Request")           | Returns the user-preferred language that should be used by this application.
| [getQueryParam()](craft-web-request.md#method-getqueryparam)                                                                                            | Returns the named GET parameter value.
| [getQueryParams()](craft-web-request.md#method-getqueryparams)                                                                                          | Returns the request parameters given in the [queryString](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$queryString-detail).
| [getQueryString()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getQueryString()-detail "Defined by yii\web\Request")                       | Returns part of the request URL that is after the question mark.
| [getQueryStringWithoutPath()](craft-web-request.md#method-getquerystringwithoutpath)                                                                    | Returns the request’s query string, without the path parameter.
| [getRawBody()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getRawBody()-detail "Defined by yii\web\Request")                               | Returns the raw HTTP request body.
| [getReferrer()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getReferrer()-detail "Defined by yii\web\Request")                             | Returns the URL referrer.
| [getRemoteHost()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getRemoteHost()-detail "Defined by yii\web\Request")                         | Returns the host name of the other end of this connection.
| [getRemoteIP()](craft-web-request.md#method-getremoteip)                                                                                                | Returns the IP on the other end of this connection.
| [getRequiredBodyParam()](craft-web-request.md#method-getrequiredbodyparam)                                                                              | Returns the named request body parameter value, or bails on the request with a 400 error if that parameter doesn’t exist.
| [getRequiredParam()](craft-web-request.md#method-getrequiredparam)                                                                                      | Returns the named parameter value from either GET or the request body, or bails on the request with a 400 error if that parameter doesn’t exist anywhere.
| [getRequiredQueryParam()](craft-web-request.md#method-getrequiredqueryparam)                                                                            | Returns the named GET parameter value, or bails on the request with a 400 error if that parameter doesn’t exist.
| [getScriptFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#getScriptFile()-detail "Defined by yii\base\Request")                       | Returns entry script file path.
| [getScriptFilename()](craft-base-requesttrait.md#method-getscriptfilename "Defined by craft\base\RequestTrait")                                         | Returns the requested script name being used to access Craft (e.g. “index.php”).
| [getScriptUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getScriptUrl()-detail "Defined by yii\web\Request")                           | Returns the relative URL of the entry script.
| [getSecurePort()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getSecurePort()-detail "Defined by yii\web\Request")                         | Returns the port to use for secure requests.
| [getSegment()](craft-web-request.md#method-getsegment)                                                                                                  | Returns a specific segment from the Craft path.
| [getSegments()](craft-web-request.md#method-getsegments)                                                                                                | Returns the segments of the requested path.
| [getServerName()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getServerName()-detail "Defined by yii\web\Request")                         | Returns the server name.
| [getServerPort()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getServerPort()-detail "Defined by yii\web\Request")                         | Returns the server port number.
| [getToken()](craft-web-request.md#method-gettoken)                                                                                                      | Returns the token submitted with the request, if there is one.
| [getUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getUrl()-detail "Defined by yii\web\Request")                                       | Returns the currently requested relative URL.
| [getUserAgent()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getUserAgent()-detail "Defined by yii\web\Request")                           | Returns the user agent.
| [getUserHost()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getUserHost()-detail "Defined by yii\web\Request")                             | Returns the user host name.
| [getUserIP()](craft-web-request.md#method-getuserip)                                                                                                    | Returns the user IP address.
| [getValidatedBodyParam()](craft-web-request.md#method-getvalidatedbodyparam)                                                                            | Validates and returns the named request body parameter value, or bails on the request with a 400 error if that parameter doesn’t pass validation.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")             | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property is defined.
| [init()](craft-web-request.md#method-init)                                                                                                              | Initializes the object.
| [isMobileBrowser()](craft-web-request.md#method-ismobilebrowser)                                                                                        | Returns whether the request is coming from a mobile browser.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [parseAcceptHeader()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#parseAcceptHeader()-detail "Defined by yii\web\Request")                 | Parses the given `Accept` (or `Accept-Language`) header.
| [post()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#post()-detail "Defined by yii\web\Request")                                           | Returns POST parameter with a given name. If name isn't specified, returns an array of all POST parameters.
| [regenCsrfToken()](craft-web-request.md#method-regencsrftoken)                                                                                          | Regenerates a CSRF token.
| [setAcceptableContentTypes()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setAcceptableContentTypes()-detail "Defined by yii\web\Request") | Sets the acceptable content types.
| [setAcceptableLanguages()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setAcceptableLanguages()-detail "Defined by yii\web\Request")       |
| [setBaseUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setBaseUrl()-detail "Defined by yii\web\Request")                               | Sets the relative URL for the application.
| [setBodyParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setBodyParams()-detail "Defined by yii\web\Request")                         | Sets the request body parameters.
| [setHostInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setHostInfo()-detail "Defined by yii\web\Request")                             | Sets the schema and host part of the application URL.
| [setIsConsoleRequest()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#setIsConsoleRequest()-detail "Defined by yii\base\Request")           | Sets the value indicating whether the current request is made via command line.
| [setIsLivePreview()](craft-web-request.md#method-setislivepreview)                                                                                      | Sets whether this is a Live Preview request.
| [setPathInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setPathInfo()-detail "Defined by yii\web\Request")                             | Sets the path info of the current request.
| [setPort()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setPort()-detail "Defined by yii\web\Request")                                     | Sets the port to use for insecure requests.
| [setQueryParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setQueryParams()-detail "Defined by yii\web\Request")                       | Sets the request [queryString](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$queryString-detail) parameters.
| [setRawBody()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setRawBody()-detail "Defined by yii\web\Request")                               | Sets the raw HTTP request body, this method is mainly used by test scripts to simulate raw HTTP requests.
| [setScriptFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-request#setScriptFile()-detail "Defined by yii\base\Request")                       | Sets the entry script file path.
| [setScriptUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setScriptUrl()-detail "Defined by yii\web\Request")                           | Sets the relative URL for the application entry script.
| [setSecurePort()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setSecurePort()-detail "Defined by yii\web\Request")                         | Sets the port to use for secure requests.
| [setUrl()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setUrl()-detail "Defined by yii\web\Request")                                       | Sets the currently requested relative URL.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.
| [validateCsrfToken()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#validateCsrfToken()-detail "Defined by yii\web\Request")                 | Performs the CSRF validation.

### `accepts()`





Returns whether the request will accept a given content type3




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L995-L998)


#### Arguments

- `$contentType` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAcceptsJson()`





Returns whether the request will accept a JSON response.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L1005-L1008)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getActionSegments()`





Returns the segments of the requested controller action path, if this is an [action request](craft-web-request.md#method-getisactionrequest).




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L491-L496)



#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The action path segments, or `null` if this isn’t an action request.



### `getBodyParam()`





Returns the named request body parameter value.

If the parameter does not exist, the second argument passed to this method will be returned.



See also:

- [getBodyParams()](craft-web-request.md#method-getbodyparams)
- [setBodyParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#setBodyParams()-detail)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L642-L645)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The parameter name.
- `$defaultValue` (`mixed`) – The default parameter value if the parameter does not exist.

#### Returns

`mixed` – The parameter value


---

#### Example

::: code
```php
// get $_POST['foo'], if it exists
$foo = Craft::$app->request->getBodyParam('foo');

// get $_POST['foo']['bar'], if it exists
$bar = Craft::$app->request->getBodyParam('foo.bar');
```
```twig
{# get $_POST['foo'], if it exists #}
{% set foo = craft.app.request.getBodyParam('foo') %}

{# get $_POST['foo']['bar'], if it exists #}
{% set bar = craft.app.request.getBodyParam('foo.bar') %}
```
:::


### `getBodyParams()`





Returns the request parameters given in the request body.



Request parameters are determined using the parsers configured in [parsers](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$parsers-detail) property.
If no parsers are configured for the current [contentType](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$contentType-detail) it uses the PHP function `mb_parse_str()`
to parse the [request body](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$rawBody-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L604-L612)



#### Returns

[array](http://php.net/language.types.array) – The request parameters given in the request body.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if a registered parser does not implement the `\craft\web\RequestParserInterface`.


### `getClientOs()`





Returns whether the client is running "Windows", "Mac", "Linux" or "Other", based on the
browser's UserAgent string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L936-L953)



#### Returns

[string](http://php.net/language.types.string) – The OS the client is running.


---

#### Example

::: code
```php
$clientOs = Craft::$app->request->clientOs;
```
```twig
{% set clientOs = craft.app.request.clientOs %}
```
:::


### `getCsrfToken()`





Returns the token used to perform CSRF validation.

This token is a masked version of `\craft\web\rawCsrfToken` to prevent [BREACH attacks](http://breachattack.com/).
This token may be passed along via a hidden field of an HTML form or an HTTP header value
to support CSRF validation.


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L966-L979)


#### Arguments

- `$regenerate` ([boolean](http://php.net/language.types.boolean)) – Whether to regenerate CSRF token. When this parameter is true, each time
this method is called, a new CSRF token will be generated and persisted (in session or cookie).

#### Returns

[string](http://php.net/language.types.string) – The token used to perform CSRF validation.



### `getFullPath()`





Returns the full request path, whether that came from the path info or the path query parameter.

Leading and trailing slashes will be removed.


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L272-L297)



#### Returns

[string](http://php.net/language.types.string)



### `getIsActionRequest()`





Returns whether a specific controller action was requested.

There are several ways that this method could return `true`:

- If the first segment in the Craft path matches the [action trigger](config:actionTrigger)
- If there is an `action` param in either the POST data or query string
- If the Craft path matches the Login path, the Logout path, or the Set Password path


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L456-L460)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to a controller action.



### `getIsCpRequest()`





Returns whether the control panel was requested.

The result depends on whether the first segment in the URI matches the
[control panel trigger](config:cpTrigger).


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L428-L431)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to the control panel.



### `getIsLivePreview()`





Returns whether this is a Live Preview request.

::: tip
As of Craft 3.2, entries use a new previewing system, so this won’t return `true` for them. Check
[getIsPreview()](craft-web-request.md#method-getispreview) instead for entries.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L540-L543)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a Live Preview request.


---

#### Example

::: code
```php
$isLivePreview = Craft::$app->request->isLivePreview;
```
```twig
{% set isLivePreview = craft.app.request.isLivePreview %}
```
:::


### `getIsLoginRequest()`



Since

:   3.2.0



Returns whether this was a Login request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L468-L472)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsPreview()`



Since

:   3.2.1



Returns whether this is an element preview request.

::: tip
This will only return `true` when previewing entries at the moment. For all other element types, check
[getIsLivePreview()](craft-web-request.md#method-getislivepreview).
:::




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L517-L520)



#### Returns

[boolean](http://php.net/language.types.boolean)


---

#### Example

::: code
```php
$isPreviewRequest = Craft::$app->request->isPreview;
```
```twig
{% set isPreviewRequest = craft.app.request.isPreview %}
```
:::


### `getIsSingleActionRequest()`

::: danger DEPRECATED
Deprecated in 3.2.0
:::




Returns whether the current request is solely an action request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L480-L484)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsSiteRequest()`





Returns whether the front end site was requested.

The result will always just be the opposite of whatever [getIsCpRequest()](craft-web-request.md#method-getiscprequest) returns.


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L440-L443)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current request should be routed to the front-end site.



### `getNormalizedContentType()`



Since

:   3.3.8



Returns the normalized content type.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L1016-L1024)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getPageNum()`





Returns the requested page number.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L388-L391)



#### Returns

[integer](http://php.net/language.types.integer) – The requested page number.


---

#### Example

::: code
```php
$page = Craft::$app->request->pageNum;
```
```twig
{% set page = craft.app.request.pageNum %}
```
:::


### `getParam()`





Returns the named parameter value from either GET or the request body.

If the parameter does not exist, the second parameter to this method will be returned.

See also:

- [getQueryParam()](craft-web-request.md#method-getqueryparam)
- [getBodyParam()](craft-web-request.md#method-getbodyparam)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L817-L828)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The parameter name.
- `$defaultValue` (`mixed`) – The default parameter value if the parameter does not exist.

#### Returns

`mixed` – The parameter value.



### `getPathInfo()`





Returns the requested path, sans control panel trigger and pagination info.

If $returnRealPathInfo is returned, then [yii\web\Request::getPathInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getPathInfo()-detail) will be returned.


[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L308-L315)


#### Arguments

- `$returnRealPathInfo` ([boolean](http://php.net/language.types.boolean)) – Whether the real path info should be returned instead.

#### Returns

[string](http://php.net/language.types.string) – The requested path, or the path info.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the path info cannot be determined due to unexpected server configuration


### `getQueryParam()`





Returns the named GET parameter value.

If the GET parameter does not exist, the second argument passed to this method will be returned.



See also [getBodyParam()](craft-web-request.md#method-getbodyparam)
[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L765-L768)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The GET parameter name.
- `$defaultValue` (`mixed`, [null](http://php.net/language.types.null)) – The default parameter value if the GET parameter does not exist.

#### Returns

`mixed` – The GET parameter value.


---

#### Example

::: code
```php
// get $_GET['foo'], if it exists
$foo = Craft::$app->request->getQueryParam('foo');

// get $_GET['foo']['bar'], if it exists
$bar = Craft::$app->request->getQueryParam('foo.bar');
```
```twig
{# get $_GET['foo'], if it exists #}
{% set foo = craft.app.request.getQueryParam('foo') %}

{# get $_GET['foo']['bar'], if it exists #}
{% set bar = craft.app.request.getQueryParam('foo.bar') %}
```
:::


### `getQueryParams()`





Returns the request parameters given in the [queryString](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$queryString-detail).



This method will return the contents of `$_GET` if params where not explicitly set.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L728-L736)



#### Returns

[array](http://php.net/language.types.array) – The request GET parameter values.



### `getQueryStringWithoutPath()`





Returns the request’s query string, without the path parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L865-L880)



#### Returns

[string](http://php.net/language.types.string) – The query string.


---

#### Example

::: code
```php
$queryString = Craft::$app->request->queryStringWithoutPath;
```
```twig
{% set queryString = craft.app.request.queryStringWithoutPath %}
```
:::


### `getRemoteIP()`





Returns the IP on the other end of this connection.



This is always the next hop, any headers are ignored.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L915-L919)


#### Arguments

- `$filterOptions` ([integer](http://php.net/language.types.integer)) – Bitwise disjunction of flags that should be
passed to [filter_var()](http://php.net/manual/en/function.filter-var.php)
when validating the IP address. Options include `FILTER_FLAG_IPV4`,
`FILTER_FLAG_IPV6`, `FILTER_FLAG_NO_PRIV_RANGE`, and `FILTER_FLAG_NO_RES_RANGE`.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Remote IP address, `null` if not available.



### `getRequiredBodyParam()`





Returns the named request body parameter value, or bails on the request with a 400 error if that parameter doesn’t exist.



See also [getBodyParam()](craft-web-request.md#method-getbodyparam)
[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L672-L681)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The parameter name.

#### Returns

`mixed` – The parameter value

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request does not have the body param

---

#### Example

::: code
```php
// get required $_POST['foo']
$foo = Craft::$app->request->getRequiredBodyParam('foo');

// get required $_POST['foo']['bar']
$bar = Craft::$app->request->getRequiredBodyParam('foo.bar');
```
```twig
{# get required $_POST['foo'] #}
{% set foo = craft.app.request.getRequiredBodyParam('foo') %}

{# get required $_POST['foo']['bar'] #}
{% set bar = craft.app.request.getRequiredBodyParam('foo.bar') %}
```
:::


### `getRequiredParam()`





Returns the named parameter value from either GET or the request body, or bails on the request with a 400 error
if that parameter doesn’t exist anywhere.



See also:

- [getQueryParam()](craft-web-request.md#method-getqueryparam)
- [getBodyParam()](craft-web-request.md#method-getbodyparam)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L840-L849)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The parameter name.

#### Returns

`mixed` – The parameter value.

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request does not have the param


### `getRequiredQueryParam()`





Returns the named GET parameter value, or bails on the request with a 400 error if that parameter doesn’t exist.



See also [getQueryParam()](craft-web-request.md#method-getqueryparam)
[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L795-L804)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The GET parameter name.

#### Returns

`mixed` – The GET parameter value.

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the request does not have the query param

---

#### Example

::: code
```php
// get required $_GET['foo']
$foo = Craft::$app->request->getRequiredQueryParam('foo');

// get required $_GET['foo']['bar']
$bar = Craft::$app->request->getRequiredQueryParam('foo.bar');
```
```twig
{# get required$_GET['foo'] #}
{% set foo = craft.app.request.getRequiredQueryParam('foo') %}

{# get required $_GET['foo']['bar'] #}
{% set bar = craft.app.request.getRequiredQueryParam('foo.bar') %}
```
:::


### `getSegment()`





Returns a specific segment from the Craft path.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L357-L372)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer)) – Which segment to return (1-indexed).

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The matching segment, or `null` if there wasn’t one.


---

#### Example

::: code
```php
$firstSegment = Craft::$app->request->getSegment(1);
```
```twig
{% set firstSegment = craft.app.request.getSegment(1) %}
```
:::


### `getSegments()`





Returns the segments of the requested path.

::: tip
Note that the segments will not include the [control panel trigger](config:cpTrigger)
if it’s a control panel request, or the [page trigger](config:pageTrigger)
or page number if it’s a paginated request.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L337-L340)



#### Returns

[array](http://php.net/language.types.array) – The Craft path’s segments.


---

#### Example

::: code
```php
$segments = Craft::$app->request->segments;
```
```twig
{% set segments = craft.app.request.segments %}
```
:::


### `getToken()`





Returns the token submitted with the request, if there is one.

Tokens must be sent either as a query string param named after the <config:tokenParam> config setting (`token` by
default), or an `X-Craft-Token` HTTP header on the request.

See also:

- [craft\services\Tokens::createToken()](craft-services-tokens.md#method-createtoken)
- [craft\web\Controller::requireToken()](craft-web-controller.md#method-requiretoken)

[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L404-L418)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The token, or `null` if there isn’t one.

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if an invalid token is supplied


### `getUserIP()`





Returns the user IP address.



The IP is determined using headers and / or `$_SERVER` variables.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L889-L906)


#### Arguments

- `$filterOptions` ([integer](http://php.net/language.types.integer)) – Bitwise disjunction of flags that should be
passed to [filter_var()](http://php.net/manual/en/function.filter-var.php)
when validating the IP address. Options include `FILTER_FLAG_IPV4`,
`FILTER_FLAG_IPV6`, `FILTER_FLAG_NO_PRIV_RANGE`, and `FILTER_FLAG_NO_RES_RANGE`.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – User IP address, null if not available



### `getValidatedBodyParam()`





Validates and returns the named request body parameter value, or bails on the request with a 400 error if that parameter doesn’t pass validation.



See also [getBodyParam()](craft-web-request.md#method-getbodyparam)
[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L708-L723)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The parameter name.

#### Returns

`mixed`, [null](http://php.net/language.types.null) – The parameter value

#### Throws

- [yii\web\BadRequestHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-badrequesthttpexception)\
  if the param value doesn’t pass validation

---

#### Example

::: code
```php
// get validated $_POST['foo']
$foo = Craft::$app->request->getValidatedBodyParam('foo');

// get validated $_POST['foo']['bar']
$bar = Craft::$app->request->getValidatedBodyParam('foo.bar');
```
```twig
{# get validated $_POST['foo'] #}
{% set foo = craft.app.request.getValidatedBodyParam('foo') %}

{# get validated $_POST['foo']['bar'] #}
{% set bar = craft.app.request.getValidatedBodyParam('foo.bar') %}
```
:::


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L163-L263)






### `isMobileBrowser()`





Returns whether the request is coming from a mobile browser.

The detection script is provided by http://detectmobilebrowsers.com. It was last updated on 2014-11-24.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L572-L599)


#### Arguments

- `$detectTablets` ([boolean](http://php.net/language.types.boolean)) – Whether tablets should be considered “mobile”.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the request is coming from a mobile browser.


---

#### Example

::: code
```php
$isMobileBrowser = Craft::$app->request->isMobileBrowser();
```
```twig
{% set isMobileBrowser = craft.app.request.isMobileBrowser() %}
```
:::


### `regenCsrfToken()`





Regenerates a CSRF token.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L984-L987)






### `setIsLivePreview()`





Sets whether this is a Live Preview request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L550-L553)


#### Arguments

- `$isLivePreview` ([boolean](http://php.net/language.types.boolean))






## Protected Methods

| Method                                                                                                                                                                        | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------
| [createCsrfCookie()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#createCsrfCookie()-detail "Defined by yii\web\Request")                                         | Creates a cookie with a randomly generated CSRF token.
| [csrfTokenValidForCurrentUser()](craft-web-request.md#method-csrftokenvalidforcurrentuser)                                                                                    | Gets whether the CSRF token is valid for the current user or not
| [filterHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#filterHeaders()-detail "Defined by yii\web\Request")                                               | Filters headers according to the [trustedHosts](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail).
| [generateCsrfToken()](craft-web-request.md#method-generatecsrftoken)                                                                                                          | Generates an unmasked random token used to perform CSRF validation.
| [getIpValidator()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getIpValidator()-detail "Defined by yii\web\Request")                                             | Creates instance of [yii\validators\IpValidator](https://www.yiiframework.com/doc/api/2.0/yii-validators-ipvalidator).
| [getSecureForwardedHeaderParts()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getSecureForwardedHeaderParts()-detail "Defined by yii\web\Request")               | Returns decoded forwarded header
| [getSecureForwardedHeaderTrustedPart()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getSecureForwardedHeaderTrustedPart()-detail "Defined by yii\web\Request")   | Gets first `Forwarded` header value for token
| [getSecureForwardedHeaderTrustedParts()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getSecureForwardedHeaderTrustedParts()-detail "Defined by yii\web\Request") | Gets only trusted `Forwarded` header parts
| [getTrustedHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getTrustedHeaders()-detail "Defined by yii\web\Request")                                       | Trusted headers according to the [trustedHosts](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail).
| [getUserIpFromIpHeader()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getUserIpFromIpHeader()-detail "Defined by yii\web\Request")                               | Return user IP's from IP header.
| [getUserIpFromIpHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#getUserIpFromIpHeaders()-detail "Defined by yii\web\Request")                             | Returns the user IP address from [ipHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$ipHeaders-detail).
| [loadCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#loadCookies()-detail "Defined by yii\web\Request")                                                   | Converts `$_COOKIE` into an array of [yii\web\Cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie).
| [loadCsrfToken()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#loadCsrfToken()-detail "Defined by yii\web\Request")                                               | Loads the CSRF token from cookie or session.
| [resolvePathInfo()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#resolvePathInfo()-detail "Defined by yii\web\Request")                                           | Resolves the path info part of the currently requested URL.
| [resolveRequestUri()](https://www.yiiframework.com/doc/api/2.0/yii-web-request#resolveRequestUri()-detail "Defined by yii\web\Request")                                       | Resolves the request URI portion for the currently requested URL.

### `csrfTokenValidForCurrentUser()`





Gets whether the CSRF token is valid for the current user or not




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L1097-L1128)


#### Arguments

- `$token` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `generateCsrfToken()`





Generates an unmasked random token used to perform CSRF validation.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Request.php#L1047-L1089)



#### Returns

[string](http://php.net/language.types.string) – The random token for CSRF validation.





## Constants

| Constant               | Description
| ---------------------- | ---------------------------------------------------
| `CP_PATH_LOGIN`        |
| `CP_PATH_LOGOUT`       |
| `CP_PATH_SET_PASSWORD` |
| `CP_PATH_UPDATE`       |
| `CP_PATH_VERIFY_EMAIL` |
| `CSRF_HEADER`          | The name of the HTTP header for sending CSRF token.
| `CSRF_MASK_LENGTH`     | The length of the CSRF token mask.



