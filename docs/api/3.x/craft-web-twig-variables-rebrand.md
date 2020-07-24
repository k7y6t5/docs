---
title: craft\web\twig\variables\Rebrand
code:
  - php
  - twig
---

# Rebrand

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\Rebrand](craft-web-twig-variables-rebrand.md)

Since

:   3.0.0



Rebranding functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php)






## Public Methods

| Method                                                                            | Description
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------
| [getIcon()](craft-web-twig-variables-rebrand.md#method-geticon)                   | Returns the icons variable, or null if a site icon hasn't been uploaded.
| [getImageVariable()](craft-web-twig-variables-rebrand.md#method-getimagevariable) | Get the ImageVariable for type.
| [getLogo()](craft-web-twig-variables-rebrand.md#method-getlogo)                   | Returns the logo'sw Image variable, or null if a logo hasn't been uploaded.
| [isIconUploaded()](craft-web-twig-variables-rebrand.md#method-isiconuploaded)     | Returns whether a custom site icon has been uploaded.
| [isImageUploaded()](craft-web-twig-variables-rebrand.md#method-isimageuploaded)   | Return whether the specified type of image has been uploaded for the site.
| [isLogoUploaded()](craft-web-twig-variables-rebrand.md#method-islogouploaded)     | Returns whether a custom logo has been uploaded.

### `getIcon()`





Returns the icons variable, or null if a site icon hasn't been uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L80-L83)



#### Returns

[craft\web\twig\variables\Image](craft-web-twig-variables-image.md), [null](http://php.net/language.types.null)



### `getImageVariable()`





Get the ImageVariable for type.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L91-L109)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))

#### Returns

[craft\web\twig\variables\Image](craft-web-twig-variables-image.md), [null](http://php.net/language.types.null)



### `getLogo()`





Returns the logo'sw Image variable, or null if a logo hasn't been uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L70-L73)



#### Returns

[craft\web\twig\variables\Image](craft-web-twig-variables-image.md), [null](http://php.net/language.types.null)



### `isIconUploaded()`





Returns whether a custom site icon has been uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L49-L52)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isImageUploaded()`





Return whether the specified type of image has been uploaded for the site.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L60-L63)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – 'logo' or 'icon'.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isLogoUploaded()`





Returns whether a custom logo has been uploaded.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/Rebrand.php#L39-L42)



#### Returns

[boolean](http://php.net/language.types.boolean)










