---
title: craft\base\RequestTrait
code:
  - php
  - twig
---

# RequestTrait

Type

:   Trait

Namespace

:   craft\base

Implemented by

:   [craft\console\Request](craft-console-request.md), [craft\web\Request](craft-web-request.md)

Since

:   3.0.0



Request trait.

This provides request methods that are common between craft\web\Request and craft\console\Request.



[View source](https://github.com/craftcms/cms/blob/master/src/base/RequestTrait.php)


## Public Properties

| Property                                                                                | Description
| --------------------------------------------------------------------------------------- | ------------------------------------------------
| [isWebAliasSetDynamically](craft-base-requesttrait.md#iswebaliassetdynamically)         | [boolean](http://php.net/language.types.boolean)
| [isWebrootAliasSetDynamically](craft-base-requesttrait.md#iswebrootaliassetdynamically) | [boolean](http://php.net/language.types.boolean)

### `isWebAliasSetDynamically`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/base/RequestTrait.php#L30)



### `isWebrootAliasSetDynamically`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/base/RequestTrait.php#L25)







## Public Methods

| Method                                                                     | Description
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------
| [getScriptFilename()](craft-base-requesttrait.md#method-getscriptfilename) | Returns the requested script name being used to access Craft (e.g. “index.php”).

### `getScriptFilename()`





Returns the requested script name being used to access Craft (e.g. “index.php”).




[View source](https://github.com/craftcms/cms/blob/master/src/base/RequestTrait.php#L38-L42)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)








