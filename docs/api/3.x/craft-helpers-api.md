---
title: craft\helpers\Api
code:
  - php
  - twig
---

# Api

Type

:   Abstract Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Api](craft-helpers-api.md)

Since

:   3.3.16



Craftnet API helper.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Api.php)






## Public Methods

| Method                                                                         | Description
| ------------------------------------------------------------------------------ | ----------------------------------------------------------
| [headers()](craft-helpers-api.md#method-headers)                               | Returns the headers that should be sent with API requests.
| [platformVersions()](craft-helpers-api.md#method-platformversions)             | Returns platform info.
| [processResponseHeaders()](craft-helpers-api.md#method-processresponseheaders) | Processes an API response’s headers.

### `headers()`





Returns the headers that should be sent with API requests.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Api.php#L31-L85)



#### Returns

[array](http://php.net/language.types.array)



### `platformVersions()`





Returns platform info.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Api.php#L93-L118)


#### Arguments

- `$useComposerOverrides` ([boolean](http://php.net/language.types.boolean)) – Whether to factor in any `config.platform` overrides

#### Returns

[array](http://php.net/language.types.array)



### `processResponseHeaders()`





Processes an API response’s headers.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Api.php#L125-L212)


#### Arguments

- `$headers`











