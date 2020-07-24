---
title: craft\web\Response
code:
  - php
  - twig
---

# Response

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\Response](craft-web-response.md) &raquo;
[yii\web\Response](https://www.yiiframework.com/doc/api/2.0/yii-web-response) &raquo;
[yii\base\Response](https://www.yiiframework.com/doc/api/2.0/yii-base-response) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [acceptMimeType](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$acceptMimeType-detail "Defined by yii\web\Response")               | [string](http://php.net/language.types.string) – The MIME type (e.g. `application/json`) from the request ACCEPT header chosen for this response.
| [acceptParams](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$acceptParams-detail "Defined by yii\web\Response")                   | [array](http://php.net/language.types.array) – The parameters (e.g. `['q' => 1, 'version' => '1.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [charset](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$charset-detail "Defined by yii\web\Response")                             | [string](http://php.net/language.types.string) – The charset of the text response.
| [content](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$content-detail "Defined by yii\web\Response")                             | [string](http://php.net/language.types.string) – The response content.
| [contentType](craft-web-response.md#contenttype)                                                                                               | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [cookies](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$cookies-detail "Defined by yii\web\Response")                             | [yii\web\CookieCollection](https://www.yiiframework.com/doc/api/2.0/yii-web-cookiecollection) – The cookie collection.
| [data](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$data-detail "Defined by yii\web\Response")                                   | `mixed` – The original response data.
| [downloadHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$downloadHeaders-detail "Defined by yii\web\Response")             | [string](http://php.net/language.types.string) – The attachment file name
| [exitStatus](https://www.yiiframework.com/doc/api/2.0/yii-base-response#$exitStatus-detail "Defined by yii\base\Response")                     | [integer](http://php.net/language.types.integer) – The exit status.
| [format](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$format-detail "Defined by yii\web\Response")                               | [string](http://php.net/language.types.string) – The response format.
| [formatters](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$formatters-detail "Defined by yii\web\Response")                       | [array](http://php.net/language.types.array) – The formatters for converting data into the response content of the specified [format](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$format-detail).
| [headers](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$headers-detail "Defined by yii\web\Response")                             | [yii\web\HeaderCollection](https://www.yiiframework.com/doc/api/2.0/yii-web-headercollection) – The header collection
| [httpStatuses](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$httpStatuses-detail "Defined by yii\web\Response")                   | [array](http://php.net/language.types.array) – List of HTTP status codes and the corresponding texts
| [isClientError](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isClientError-detail "Defined by yii\web\Response")                 | [boolean](http://php.net/language.types.boolean) – Whether this response indicates a client error
| [isEmpty](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isEmpty-detail "Defined by yii\web\Response")                             | [boolean](http://php.net/language.types.boolean) – Whether this response is empty
| [isForbidden](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isForbidden-detail "Defined by yii\web\Response")                     | [boolean](http://php.net/language.types.boolean) – Whether this response indicates the current request is forbidden
| [isInformational](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isInformational-detail "Defined by yii\web\Response")             | [boolean](http://php.net/language.types.boolean) – Whether this response is informational
| [isInvalid](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isInvalid-detail "Defined by yii\web\Response")                         | [boolean](http://php.net/language.types.boolean) – Whether this response has a valid [statusCode](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$statusCode-detail).
| [isNotFound](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isNotFound-detail "Defined by yii\web\Response")                       | [boolean](http://php.net/language.types.boolean) – Whether this response indicates the currently requested resource is not found
| [isOk](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isOk-detail "Defined by yii\web\Response")                                   | [boolean](http://php.net/language.types.boolean) – Whether this response is OK
| [isRedirection](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isRedirection-detail "Defined by yii\web\Response")                 | [boolean](http://php.net/language.types.boolean) – Whether this response is a redirection
| [isSent](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isSent-detail "Defined by yii\web\Response")                               | [boolean](http://php.net/language.types.boolean) – Whether the response has been sent.
| [isServerError](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isServerError-detail "Defined by yii\web\Response")                 | [boolean](http://php.net/language.types.boolean) – Whether this response indicates a server error
| [isSuccessful](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$isSuccessful-detail "Defined by yii\web\Response")                   | [boolean](http://php.net/language.types.boolean) – Whether this response is successful
| [lastModifiedHeader](craft-web-response.md#lastmodifiedheader)                                                                                 | [string](http://php.net/language.types.string) – The file to read the last modified date from.
| [statusCode](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$statusCode-detail "Defined by yii\web\Response")                       | [integer](http://php.net/language.types.integer) – The HTTP status code to send with the response.
| [statusCodeByException](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$statusCodeByException-detail "Defined by yii\web\Response") | [Exception](http://php.net/class.exception), [Error](http://php.net/class.error) – The exception object.
| [statusText](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$statusText-detail "Defined by yii\web\Response")                       | [string](http://php.net/language.types.string) – The HTTP status description that comes together with the status code.
| [stream](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$stream-detail "Defined by yii\web\Response")                               | [resource](http://php.net/language.types.resource), [array](http://php.net/language.types.array) – The stream to be sent.
| [version](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$version-detail "Defined by yii\web\Response")                             | [string](http://php.net/language.types.string) – The version of the HTTP protocol to use.

### `contentType`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php)



### `lastModifiedHeader`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only



The file to read the last modified date from.



[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php)







## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                               | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                               | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                     | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                 | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                             | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                 | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                             | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                 | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")               | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                           | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                         | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#clear()-detail "Defined by yii\web\Response")                                       | Clears the headers, cookies, content, status code of the response.
| [clearOutputBuffers()](https://www.yiiframework.com/doc/api/2.0/yii-base-response#clearOutputBuffers()-detail "Defined by yii\base\Response")           | Removes all existing output buffers.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                 | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")               | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")               | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                       | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                     | Returns all behaviors attached to this component.
| [getContentType()](craft-web-response.md#method-getcontenttype)                                                                                         | Returns the Content-Type header (sans `charset=X`) that the response will most likely include.
| [getCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getCookies()-detail "Defined by yii\web\Response")                             | Returns the cookie collection.
| [getHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getHeaders()-detail "Defined by yii\web\Response")                             | Returns the header collection.
| [getIsClientError()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsClientError()-detail "Defined by yii\web\Response")                 |
| [getIsEmpty()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsEmpty()-detail "Defined by yii\web\Response")                             |
| [getIsForbidden()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsForbidden()-detail "Defined by yii\web\Response")                     |
| [getIsInformational()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsInformational()-detail "Defined by yii\web\Response")             |
| [getIsInvalid()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsInvalid()-detail "Defined by yii\web\Response")                         |
| [getIsNotFound()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsNotFound()-detail "Defined by yii\web\Response")                       |
| [getIsOk()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsOk()-detail "Defined by yii\web\Response")                                   |
| [getIsRedirection()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsRedirection()-detail "Defined by yii\web\Response")                 |
| [getIsServerError()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsServerError()-detail "Defined by yii\web\Response")                 |
| [getIsSuccessful()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getIsSuccessful()-detail "Defined by yii\web\Response")                   |
| [getStatusCode()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getStatusCode()-detail "Defined by yii\web\Response")                       |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")             | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                         | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                   | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                       | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                         | Attaches an event handler to an event.
| [redirect()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#redirect()-detail "Defined by yii\web\Response")                                 | Redirects the browser to the specified URL.
| [refresh()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#refresh()-detail "Defined by yii\web\Response")                                   | Refreshes the current page.
| [send()](https://www.yiiframework.com/doc/api/2.0/yii-base-response#send()-detail "Defined by yii\base\Response")                                       | Sends the response to client.
| [sendAndClose()](craft-web-response.md#method-sendandclose)                                                                                             | Attempts to closes the connection with the HTTP client, without ending PHP script execution.
| [sendContentAsFile()](craft-web-response.md#method-sendcontentasfile)                                                                                   | Sends the specified content as a file to the browser.
| [sendFile()](craft-web-response.md#method-sendfile)                                                                                                     | Sends a file to the browser.
| [sendStreamAsFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#sendStreamAsFile()-detail "Defined by yii\web\Response")                 | Sends the specified stream as a file to the browser.
| [setCacheHeaders()](craft-web-response.md#method-setcacheheaders)                                                                                       | Sets headers that will instruct the client to cache this response.
| [setDownloadHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#setDownloadHeaders()-detail "Defined by yii\web\Response")             | Sets a default set of HTTP headers for file downloading purpose.
| [setLastModifiedHeader()](craft-web-response.md#method-setlastmodifiedheader)                                                                           | Sets a Last-Modified header based on a given file path.
| [setStatusCode()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#setStatusCode()-detail "Defined by yii\web\Response")                       | Sets the response status code.
| [setStatusCodeByException()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#setStatusCodeByException()-detail "Defined by yii\web\Response") | Sets the response status code based on the exception.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                               | Triggers an event.
| [xSendFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#xSendFile()-detail "Defined by yii\web\Response")                               | Sends existing file to a browser as a download using x-sendfile.

### `getContentType()`





Returns the Content-Type header (sans `charset=X`) that the response will most likely include.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L35-L63)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `sendAndClose()`





Attempts to closes the connection with the HTTP client, without ending PHP script execution.

This method relies on [flush()](http://php.net/manual/en/function.flush.php), which may not actually work if
mod_deflate or mod_gzip is installed, or if this is a Win32 server.

See also http://stackoverflow.com/a/141026
[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L138-L179)




#### Throws

- [Throwable](http://php.net/class.throwable)\
  An exception will be thrown if content has already been output.


### `sendContentAsFile()`





Sends the specified content as a file to the browser.



Note that this method only prepares the response for file sending. The file is not sent
until [send()](https://www.yiiframework.com/doc/api/2.0/yii-base-response#send()-detail) is called explicitly or implicitly. The latter is done after you return from a controller action.

\yii\web\Response::sendContentAsFile()


[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L121-L127)


#### Arguments

- `$content` ([string](http://php.net/language.types.string)) – The content to be sent. The existing [content](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$content-detail) will be discarded.
- `$attachmentName` ([string](http://php.net/language.types.string)) – The file name shown to the user.
- `$options` ([array](http://php.net/language.types.array)) – Additional options for sending the file. The following options are supported:

 - `mimeType`: the MIME type of the content. Defaults to 'application/octet-stream'.
 - `inline`: boolean, whether the browser should open the file within the browser window. Defaults to false,
   meaning a download dialog will pop up.

#### Returns

`static` – Self reference

#### Throws

- [yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception)


### `sendFile()`





Sends a file to the browser.



Note that this method only prepares the response for file sending. The file is not sent
until [send()](https://www.yiiframework.com/doc/api/2.0/yii-base-response#send()-detail) is called explicitly or implicitly. The latter is done after you return from a controller action.

The following is an example implementation of a controller action that allows requesting files from a directory
that is not accessible from web:

```php
public function actionFile($filename)
{
    $storagePath = Yii::getAlias('@app/files');

    // check filename for allowed chars (do not allow ../ to avoid security issue: downloading arbitrary files)
    if (!preg_match('/^[a-z0-9]+\.[a-z0-9]+$/i', $filename) || !is_file("$storagePath/$filename")) {
        throw new \yii\web\NotFoundHttpException('The file does not exists.');
    }
    return Yii::$app->response->sendFile("$storagePath/$filename", $filename);
}
```

\yii\web\Response::sendFile()


[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L105-L111)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The path of the file to be sent.
- `$attachmentName` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The file name shown to the user. If null, it will be determined from `$filePath`.
- `$options` ([array](http://php.net/language.types.array)) – Additional options for sending the file. The following options are supported:

 - `mimeType`: the MIME type of the content. If not set, it will be guessed based on `$filePath`
 - `inline`: boolean, whether the browser should open the file within the browser window. Defaults to false,
   meaning a download dialog will pop up.

#### Returns

`static` – Self reference



### `setCacheHeaders()`





Sets headers that will instruct the client to cache this response.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L70-L79)



#### Returns

`static` – Self reference



### `setLastModifiedHeader()`





Sets a Last-Modified header based on a given file path.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L87-L96)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The file to read the last modified date from.

#### Returns

`static` – Self reference





## Protected Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------
| [defaultFormatters()](craft-web-response.md#method-defaultformatters)                                                                                     |
| [getDispositionHeaderValue()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getDispositionHeaderValue()-detail "Defined by yii\web\Response") | Returns Content-Disposition header value that is safe to use with both old and new browsers.
| [getHttpRange()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#getHttpRange()-detail "Defined by yii\web\Response")                           | Determines the HTTP range given in the request.
| [prepare()](craft-web-response.md#method-prepare)                                                                                                         | Prepares for sending the response.
| [sendContent()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#sendContent()-detail "Defined by yii\web\Response")                             | Sends the response content to the client.
| [sendCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#sendCookies()-detail "Defined by yii\web\Response")                             | Sends the cookies to the client.
| [sendHeaders()](https://www.yiiframework.com/doc/api/2.0/yii-web-response#sendHeaders()-detail "Defined by yii\web\Response")                             | Sends the response headers to the client.

### `defaultFormatters()`



Since

:   3.4.0












[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L185-L192)



#### Returns

[array](http://php.net/language.types.array) – The formatters that are supported by default



### `prepare()`





Prepares for sending the response.



The default implementation will convert [data](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$data-detail) into [content](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$content-detail) and set headers accordingly.




[View source](https://github.com/craftcms/cms/blob/master/src/web/Response.php#L197-L203)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the formatter for the specified format is invalid or [format](https://www.yiiframework.com/doc/api/2.0/yii-web-response#$format-detail) is not supported




## Constants

| Constant       | Description
| -------------- | -----------
| `FORMAT_CSV`   |
| `FORMAT_HTML`  |
| `FORMAT_JSON`  |
| `FORMAT_JSONP` |
| `FORMAT_RAW`   |
| `FORMAT_XML`   |



