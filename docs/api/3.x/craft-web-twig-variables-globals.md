---
title: craft\web\twig\variables\Globals
code:
  - php
  - twig
---

# Globals

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Globals](craft-web-twig-variables-globals.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Globals functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php)






## Public Methods

| Method                                                                                    | Description
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [getAllSets()](craft-web-twig-variables-globals.md#method-getallsets)                     | Returns all global sets.
| [getEditableSets()](craft-web-twig-variables-globals.md#method-geteditablesets)           | Returns all global sets that are editable by the current user.
| [getSetByHandle()](craft-web-twig-variables-globals.md#method-getsetbyhandle)             | Returns a global set by its handle.
| [getSetById()](craft-web-twig-variables-globals.md#method-getsetbyid)                     | Returns a global set by its ID.
| [getTotalEditableSets()](craft-web-twig-variables-globals.md#method-gettotaleditablesets) | Returns the total number of global sets that are editable by the current user.
| [getTotalSets()](craft-web-twig-variables-globals.md#method-gettotalsets)                 | Returns the total number of global sets.

### `getAllSets()`





Returns all global sets.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L30-L37)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getEditableSets()`





Returns all global sets that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L45-L52)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getSetByHandle()`





Returns a global set by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L113-L130)


#### Arguments

- `$globalSetHandle` ([string](http://php.net/language.types.string))
- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if|null $siteHandle is invalid


### `getSetById()`





Returns a global set by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L86-L103)


#### Arguments

- `$globalSetId` ([integer](http://php.net/language.types.integer))
- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\elements\GlobalSet](craft-elements-globalset.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if|null $siteHandle is invlaid


### `getTotalEditableSets()`





Returns the total number of global sets that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L71-L76)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalSets()`





Returns the total number of global sets.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Globals.php#L59-L64)



#### Returns

[integer](http://php.net/language.types.integer)










