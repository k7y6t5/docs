---
title: craft\web\twig\variables\Sections
code:
  - php
  - twig
---

# Sections

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Sections](craft-web-twig-variables-sections.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Class Sections variable.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php)






## Public Methods

| Method                                                                                             | Description
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------
| [getAllSections()](craft-web-twig-variables-sections.md#method-getallsections)                     | Returns all sections.
| [getEditableSections()](craft-web-twig-variables-sections.md#method-geteditablesections)           | Returns all editable sections.
| [getSectionByHandle()](craft-web-twig-variables-sections.md#method-getsectionbyhandle)             | Returns a section by its handle.
| [getSectionById()](craft-web-twig-variables-sections.md#method-getsectionbyid)                     | Returns a section by its ID.
| [getTotalEditableSections()](craft-web-twig-variables-sections.md#method-gettotaleditablesections) | Gets the total number of sections that are editable by the current user.
| [getTotalSections()](craft-web-twig-variables-sections.md#method-gettotalsections)                 | Gets the total number of sections.

### `getAllSections()`





Returns all sections.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L29-L36)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getEditableSections()`





Returns all editable sections.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L44-L51)


#### Arguments

- `$indexBy` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array)



### `getSectionByHandle()`





Returns a section by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L96-L101)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)



### `getSectionById()`





Returns a section by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L83-L88)


#### Arguments

- `$sectionId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\Section](craft-models-section.md), [null](http://php.net/language.types.null)



### `getTotalEditableSections()`





Gets the total number of sections that are editable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L70-L75)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalSections()`





Gets the total number of sections.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Sections.php#L58-L63)



#### Returns

[integer](http://php.net/language.types.integer)










