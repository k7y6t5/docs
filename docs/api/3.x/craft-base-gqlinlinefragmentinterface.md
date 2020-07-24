---
title: craft\base\GqlInlineFragmentInterface
code:
  - php
  - twig
---

# GqlInlineFragmentInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\models\MatrixBlockType](craft-models-matrixblocktype.md)

Since

:   3.3.0



GqlInlineFragmentInterface defines the common interface to be implemented by GraphQL inline fragments contained by fields.





[View source](https://github.com/craftcms/cms/blob/master/src/base/GqlInlineFragmentInterface.php)






## Public Methods

| Method                                                                                           | Description
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------
| [getEagerLoadingPrefix()](craft-base-gqlinlinefragmentinterface.md#method-geteagerloadingprefix) | Get the eager loading prefix for all subfields in this fragment.
| [getFieldContext()](craft-base-gqlinlinefragmentinterface.md#method-getfieldcontext)             | Get the field context for all subfields in this fragment.

### `getEagerLoadingPrefix()`





Get the eager loading prefix for all subfields in this fragment.




[View source](https://github.com/craftcms/cms/blob/master/src/base/GqlInlineFragmentInterface.php#L30)



#### Returns

[string](http://php.net/language.types.string)



### `getFieldContext()`





Get the field context for all subfields in this fragment.




[View source](https://github.com/craftcms/cms/blob/master/src/base/GqlInlineFragmentInterface.php#L23)



#### Returns

[string](http://php.net/language.types.string)









