---
title: craft\web\twig\variables\Request
code:
  - php
  - twig
---

# Request

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Request](craft-web-twig-variables-request.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Request functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php)






## Public Methods

| Method                                                                                              | Description
| --------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [getClientOs()](craft-web-twig-variables-request.md#method-getclientos)                             | Returns whether the client is running "Windows", "Mac", "Linux" or "Other", based on the browser's UserAgent string.
| [getCookie()](craft-web-twig-variables-request.md#method-getcookie)                                 | Returns a [yii\web\Cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie) if it exists, otherwise, null.
| [getCsrfToken()](craft-web-twig-variables-request.md#method-getcsrftoken)                           | Returns the random token used to perform CSRF validation.
| [getFirstSegment()](craft-web-twig-variables-request.md#method-getfirstsegment)                     | Returns the first URI segment.
| [getHostInfo()](craft-web-twig-variables-request.md#method-gethostinfo)                             | Returns the schema and host part of the application URL. The returned URL does not have an ending slash. By default this is determined based on the user request information.
| [getIpAddress()](craft-web-twig-variables-request.md#method-getipaddress)                           | Retrieves the best guess of the client’s actual IP address taking into account numerous HTTP proxy headers due to variations in how different ISPs handle IP addresses in headers between hops.
| [getLastSegment()](craft-web-twig-variables-request.md#method-getlastsegment)                       | Returns the last URL segment.
| [getPageNum()](craft-web-twig-variables-request.md#method-getpagenum)                               | Returns the page number if this is a paginated request.
| [getParam()](craft-web-twig-variables-request.md#method-getparam)                                   | Returns a variable from either the query string or the post data.
| [getPath()](craft-web-twig-variables-request.md#method-getpath)                                     | Returns the request's URI.
| [getPathInfo()](craft-web-twig-variables-request.md#method-getpathinfo)                             | Returns the path info of the currently requested URL. This refers to the part that is after the entry script and before the question mark. The starting and ending slashes are stripped off.
| [getPort()](craft-web-twig-variables-request.md#method-getport)                                     | Returns the port to use for insecure requests. Defaults to 80, or the port specified by the server if the current request is insecure.
| [getPost()](craft-web-twig-variables-request.md#method-getpost)                                     | Returns a value from post data.
| [getQuery()](craft-web-twig-variables-request.md#method-getquery)                                   | Returns a variable from the query string.
| [getQueryString()](craft-web-twig-variables-request.md#method-getquerystring)                       | Returns part of the request URL that is after the question mark.
| [getQueryStringWithoutPath()](craft-web-twig-variables-request.md#method-getquerystringwithoutpath) | Returns the request’s query string, without the p= parameter.
| [getRequestUri()](craft-web-twig-variables-request.md#method-getrequesturi)                         | Returns the request URI portion for the currently requested URL. This refers to the portion that is after the host info part. It includes the query string part if any.
| [getScriptName()](craft-web-twig-variables-request.md#method-getscriptname)                         | Returns the script name used to access Craft.
| [getScriptUrl()](craft-web-twig-variables-request.md#method-getscripturl)                           | Returns the relative URL of the entry script.
| [getSegment()](craft-web-twig-variables-request.md#method-getsegment)                               | Returns a specific URI segment, or null if the segment doesn't exist.
| [getSegments()](craft-web-twig-variables-request.md#method-getsegments)                             | Returns all URI segments.
| [getServerName()](craft-web-twig-variables-request.md#method-getservername)                         | Returns the server name.
| [getServerPort()](craft-web-twig-variables-request.md#method-getserverport)                         | Returns the server port number.
| [getUrl()](craft-web-twig-variables-request.md#method-geturl)                                       | Returns the request's full URL.
| [getUrlFormat()](craft-web-twig-variables-request.md#method-geturlformat)                           | Returns which URL format we're using (PATH_INFO or the query string)
| [getUrlReferrer()](craft-web-twig-variables-request.md#method-geturlreferrer)                       | Returns the URL referrer or null if not present.
| [getUserAgent()](craft-web-twig-variables-request.md#method-getuseragent)                           | Returns the user agent or null if not present.
| [getUserHost()](craft-web-twig-variables-request.md#method-getuserhost)                             | Returns the user host name or null if it cannot be determined.
| [getUserHostAddress()](craft-web-twig-variables-request.md#method-getuserhostaddress)               | Returns the user IP address.
| [isAjax()](craft-web-twig-variables-request.md#method-isajax)                                       | Returns whether this is an Ajax request.
| [isDelete()](craft-web-twig-variables-request.md#method-isdelete)                                   | Returns whether this is a DELETE request.
| [isGet()](craft-web-twig-variables-request.md#method-isget)                                         | Returns whether this is a GET request.
| [isLivePreview()](craft-web-twig-variables-request.md#method-islivepreview)                         | Returns whether this is a Live Preview request.
| [isMobileBrowser()](craft-web-twig-variables-request.md#method-ismobilebrowser)                     | Returns whether the request is coming from a mobile browser.
| [isPost()](craft-web-twig-variables-request.md#method-ispost)                                       | Returns whether this is a POST request.
| [isPut()](craft-web-twig-variables-request.md#method-isput)                                         | Returns whether this is a PUT request.
| [isSecure()](craft-web-twig-variables-request.md#method-issecure)                                   | Returns whether this is a secure connection.

### `getClientOs()`





Returns whether the client is running "Windows", "Mac", "Linux" or "Other", based on the
browser's UserAgent string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L479-L484)



#### Returns

[string](http://php.net/language.types.string) – The OS the client is running.



### `getCookie()`





Returns a [yii\web\Cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie) if it exists, otherwise, null.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L212-L217)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))

#### Returns

[yii\web\Cookie](https://www.yiiframework.com/doc/api/2.0/yii-web-cookie), [null](http://php.net/language.types.null)



### `getCsrfToken()`





Returns the random token used to perform CSRF validation.

The token will be read from cookie first. If not found, a new token will be generated.


[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L387-L392)



#### Returns

[string](http://php.net/language.types.string) – The random token for CSRF validation.



### `getFirstSegment()`





Returns the first URI segment.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L173-L178)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getHostInfo()`





Returns the schema and host part of the application URL. The returned URL does not have an ending slash. By
default this is determined based on the user request information.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L274-L279)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getIpAddress()`





Retrieves the best guess of the client’s actual IP address taking into account numerous HTTP proxy headers due to
variations in how different ISPs handle IP addresses in headers between hops.

Considering any of these server vars besides REMOTE_ADDR can be spoofed, this method should not be used when you
need a trusted source for the IP address. Use `$_SERVER['REMOTE_ADDR']` instead.


[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L466-L471)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The IP address.



### `getLastSegment()`





Returns the last URL segment.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L185-L190)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getPageNum()`





Returns the page number if this is a paginated request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L261-L266)



#### Returns

[integer](http://php.net/language.types.integer)



### `getParam()`





Returns a variable from either the query string or the post data.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L199-L204)


#### Arguments

- `$name` ([string](http://php.net/language.types.string))
- `$default` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

`mixed`



### `getPath()`





Returns the request's URI.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L124-L129)



#### Returns

[string](http://php.net/language.types.string)



### `getPathInfo()`





Returns the path info of the currently requested URL. This refers to the part that is after the entry script and
before the question mark. The starting and ending slashes are stripped off.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L299-L304)



#### Returns

[string](http://php.net/language.types.string)



### `getPort()`





Returns the port to use for insecure requests. Defaults to 80, or the port specified by the server if the current
request is insecure.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L373-L378)



#### Returns

[integer](http://php.net/language.types.integer)



### `getPost()`





Returns a value from post data.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L439-L444)


#### Arguments

- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$default` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

`mixed`



### `getQuery()`





Returns a variable from the query string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L425-L430)


#### Arguments

- `$name` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))
- `$default` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

`mixed`



### `getQueryString()`





Returns part of the request URL that is after the question mark.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L399-L404)



#### Returns

[string](http://php.net/language.types.string) – The part of the request URL that is after the question mark.



### `getQueryStringWithoutPath()`





Returns the request’s query string, without the p= parameter.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L411-L416)



#### Returns

[string](http://php.net/language.types.string) – The query string.



### `getRequestUri()`





Returns the request URI portion for the currently requested URL. This refers to the portion that is after the
host info part. It includes the query string part if any.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L312-L317)



#### Returns

[string](http://php.net/language.types.string)



### `getScriptName()`





Returns the script name used to access Craft.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L112-L117)



#### Returns

[string](http://php.net/language.types.string)



### `getScriptUrl()`





Returns the relative URL of the entry script.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L286-L291)



#### Returns

[string](http://php.net/language.types.string)



### `getSegment()`





Returns a specific URI segment, or null if the segment doesn't exist.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L161-L166)


#### Arguments

- `$num` ([integer](http://php.net/language.types.integer))

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getSegments()`





Returns all URI segments.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L148-L153)



#### Returns

[array](http://php.net/language.types.array)



### `getServerName()`





Returns the server name.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L224-L229)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getServerPort()`





Returns the server port number.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L324-L329)



#### Returns

[integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



### `getUrl()`





Returns the request's full URL.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L136-L141)



#### Returns

[string](http://php.net/language.types.string)



### `getUrlFormat()`





Returns which URL format we're using (PATH_INFO or the query string)




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L236-L241)



#### Returns

[string](http://php.net/language.types.string)



### `getUrlReferrer()`





Returns the URL referrer or null if not present.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L336-L341)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getUserAgent()`





Returns the user agent or null if not present.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L348-L353)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getUserHost()`





Returns the user host name or null if it cannot be determined.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L360-L365)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getUserHostAddress()`





Returns the user IP address.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L451-L456)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `isAjax()`





Returns whether this is an Ajax request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L76-L81)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isDelete()`





Returns whether this is a DELETE request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L52-L57)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a DELETE request



### `isGet()`





Returns whether this is a GET request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L28-L33)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a GET request



### `isLivePreview()`





Returns whether this is a Live Preview request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L100-L105)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isMobileBrowser()`





Returns whether the request is coming from a mobile browser.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L249-L254)


#### Arguments

- `$detectTablets` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isPost()`





Returns whether this is a POST request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L40-L45)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a POST request



### `isPut()`





Returns whether this is a PUT request.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L64-L69)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether this is a PUT request



### `isSecure()`





Returns whether this is a secure connection.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Request.php#L88-L93)



#### Returns

[boolean](http://php.net/language.types.boolean)










