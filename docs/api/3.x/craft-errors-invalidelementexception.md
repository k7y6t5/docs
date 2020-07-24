---
title: craft\errors\InvalidElementException
code:
  - php
  - twig
---

# InvalidElementException

Type

:   Class

Namespace

:   craft\errors

Inherits

:   [craft\errors\InvalidElementException](craft-errors-invalidelementexception.md) &raquo;
[yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception) &raquo;
[Exception](http://php.net/class.exception)

Since

:   3.0.0



InvalidElementException represents an exception caused by setting an invalid element.





[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidElementException.php)


## Public Properties

| Property                                                   | Description
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------
| [element](craft-errors-invalidelementexception.md#element) | [craft\base\ElementInterface](craft-base-elementinterface.md), [craft\base\Element](craft-base-element.md) – The element

### `element`



Type

:   [craft\base\ElementInterface](craft-base-elementinterface.md), [craft\base\Element](craft-base-element.md)



The element



[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidElementException.php#L25)







## Public Methods

| Method                                                                    | Description
| ------------------------------------------------------------------------- | ------------
| [__construct()](craft-errors-invalidelementexception.md#method-construct) | Constructor.
| [getName()](craft-errors-invalidelementexception.md#method-getname)       |

### `__construct()`





Constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidElementException.php#L34-L43)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element
- `$message` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The error message
- `$code` ([integer](http://php.net/language.types.integer)) – The error code




### `getName()`










[View source](https://github.com/craftcms/cms/blob/master/src/errors/InvalidElementException.php#L48-L51)



#### Returns

[string](http://php.net/language.types.string) – The user-friendly name of this exception










