---
title: craft\web\ServiceUnavailableHttpException
code:
  - php
  - twig
---

# ServiceUnavailableHttpException

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\ServiceUnavailableHttpException](craft-web-serviceunavailablehttpexception.md) &raquo;
[yii\web\HttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception) &raquo;
[yii\base\UserException](https://www.yiiframework.com/doc/api/2.0/yii-base-userexception) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)



UnavailableHttpException represents a "Service Unavailable" HTTP exception with status code 503.





[View source](https://github.com/craftcms/cms/blob/master/src/web/ServiceUnavailableHttpException.php)


## Public Properties

| Property                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------
| [statusCode](https://www.yiiframework.com/doc/api/2.0/yii-web-httpexception#$statusCode-detail "Defined by yii\web\HttpException") | [integer](http://php.net/language.types.integer) – HTTP status code, such as 403, 404, 500, etc.





## Public Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | ------------
| [__construct()](craft-web-serviceunavailablehttpexception.md#method-construct)                                            | Constructor.
| [getName()](https://www.yiiframework.com/doc/api/2.0/yii-base-exception#getName()-detail "Defined by yii\base\Exception") |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/web/ServiceUnavailableHttpException.php#L24-L27)


#### Arguments

- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message.
- `$code` ([integer](http://php.net/language.types.integer)) – The error code.
- `$previous` ([Exception](http://php.net/class.exception), [null](http://php.net/language.types.null)) – The previous exception used for the exception chaining.











