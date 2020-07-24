---
title: craft\helpers\ElementHelper
code:
  - php
  - twig
---

# ElementHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\ElementHelper](craft-helpers-elementhelper.md)

Since

:   3.0.0



Class ElementHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php)






## Public Methods

| Method                                                                                         | Description
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------
| [createSlug()](craft-helpers-elementhelper.md#method-createslug)                               | Creates a slug based on a given string.
| [doesUriFormatHaveSlugTag()](craft-helpers-elementhelper.md#method-doesuriformathaveslugtag)   | Returns whether a given URL format has a proper {slug} tag.
| [editableSiteIdsForElement()](craft-helpers-elementhelper.md#method-editablesiteidsforelement) | Returns the editable site IDs for a given element, taking user permissions into account.
| [findSource()](craft-helpers-elementhelper.md#method-findsource)                               | Returns an element type's source definition based on a given source key/path and context.
| [isDraftOrRevision()](craft-helpers-elementhelper.md#method-isdraftorrevision)                 | Returns whether the given element (or its root element if a block element) is a draft or revision.
| [isElementEditable()](craft-helpers-elementhelper.md#method-iselementeditable)                 | Returns whether the given element is editable by the current user, taking user permissions into account.
| [isTempSlug()](craft-helpers-elementhelper.md#method-istempslug)                               | Returns whether the given slug is temporary.
| [rootElement()](craft-helpers-elementhelper.md#method-rootelement)                             | Returns the root element of a given element.
| [setNextPrevOnElements()](craft-helpers-elementhelper.md#method-setnextprevonelements)         | Given an array of elements, will go through and set the appropriate "next" and "prev" elements on them.
| [setUniqueUri()](craft-helpers-elementhelper.md#method-setuniqueuri)                           | Sets the URI on an element using a given URL format, tweaking its slug if necessary to ensure it's unique.
| [sourceElement()](craft-helpers-elementhelper.md#method-sourceelement)                         | Returns the element, or if it’s a draft/revision, the source element.
| [supportedSitesForElement()](craft-helpers-elementhelper.md#method-supportedsitesforelement)   | Returns a list of sites that a given element supports.
| [tempSlug()](craft-helpers-elementhelper.md#method-tempslug)                                   | Generates a new temporary slug.

### `createSlug()`





Creates a slug based on a given string.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L55-L79)


#### Arguments

- `$str` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `doesUriFormatHaveSlugTag()`





Returns whether a given URL format has a proper {slug} tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L243-L246)


#### Arguments

- `$uriFormat` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `editableSiteIdsForElement()`





Returns the editable site IDs for a given element, taking user permissions into account.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L310-L327)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[array](http://php.net/language.types.array)



### `findSource()`





Returns an element type's source definition based on a given source key/path and context.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L417-L453)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string)) – The element type class
- `$sourceKey` ([string](http://php.net/language.types.string)) – The source key/path
- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – The source definition, or null if it cannot be found



### `isDraftOrRevision()`



Since

:   3.2.0



Returns whether the given element (or its root element if a block element) is a draft or revision.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L351-L356)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isElementEditable()`





Returns whether the given element is editable by the current user, taking user permissions into account.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L287-L302)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isTempSlug()`



Since

:   3.2.2



Returns whether the given slug is temporary.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L44-L47)


#### Arguments

- `$slug` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `rootElement()`



Since

:   3.2.0



Returns the root element of a given element.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L336-L342)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)



### `setNextPrevOnElements()`





Given an array of elements, will go through and set the appropriate "next"
and "prev" elements on them.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L388-L407)


#### Arguments

- `$elements` ([craft\base\ElementInterface](craft-base-elementinterface.md)[]) – The array of elements.




### `setUniqueUri()`





Sets the URI on an element using a given URL format, tweaking its slug if necessary to ensure it's unique.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L87-L162)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))


#### Throws

- [craft\errors\OperationAbortedException](craft-errors-operationabortedexception.md)\
  if a unique URI could not be found


### `sourceElement()`



Since

:   3.3.0



Returns the element, or if it’s a draft/revision, the source element.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L365-L380)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[craft\base\ElementInterface](craft-base-elementinterface.md)



### `supportedSitesForElement()`





Returns a list of sites that a given element supports.

Each site is represented as an array with 'siteId' and 'enabledByDefault' keys.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L257-L279)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md))

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if any of the element's supported sites are invalid


### `tempSlug()`



Since

:   3.2.2



Generates a new temporary slug.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ElementHelper.php#L32-L35)



#### Returns

[string](http://php.net/language.types.string)










