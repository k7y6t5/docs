---
title: craft\helpers\Json
code:
  - php
  - twig
---

# Json

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Json](craft-helpers-json.md) &raquo;
[yii\helpers\Json](https://www.yiiframework.com/doc/api/2.0/yii-helpers-json) &raquo;
[yii\helpers\BaseJson](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson)

Since

:   3.0.0



Class Json





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Json.php)


## Public Properties

| Property                                                                                                                                       | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------
| [jsonErrorMessages](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#$jsonErrorMessages-detail "Defined by yii\helpers\BaseJson") | [array](http://php.net/language.types.array)





## Public Methods

| Method                                                                                                                                  | Description
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------
| [decode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#decode()-detail "Defined by yii\helpers\BaseJson")             | Decodes the given JSON string into a PHP data structure.
| [decodeIfJson()](craft-helpers-json.md#method-decodeifjson)                                                                             | Decodes the given JSON string into a PHP data structure, only if the string is valid JSON.
| [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#encode()-detail "Defined by yii\helpers\BaseJson")             | Encodes the given value into a JSON string.
| [errorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#errorSummary()-detail "Defined by yii\helpers\BaseJson") | Generates a summary of the validation errors.
| [htmlEncode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#htmlEncode()-detail "Defined by yii\helpers\BaseJson")     | Encodes the given value into a JSON string HTML-escaping entities so it is safe to be embedded in HTML code.

### `decodeIfJson()`





Decodes the given JSON string into a PHP data structure, only if the string is valid JSON.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Json.php#L27-L35)


#### Arguments

- `$str` (`mixed`) – The string to be decoded, if it's valid JSON.
- `$asArray` ([boolean](http://php.net/language.types.boolean)) – Whether to return objects in terms of associative arrays.

#### Returns

`mixed` – The PHP data, or the given string if it wasn’t valid JSON.





## Protected Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [handleJsonError()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#handleJsonError()-detail "Defined by yii\helpers\BaseJson") | Handles [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#encode()-detail) and [decode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#decode()-detail) errors by throwing exceptions with the respective error message.
| [processData()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basejson#processData()-detail "Defined by yii\helpers\BaseJson")         | Pre-processes the data before sending it to `json_encode()`.






