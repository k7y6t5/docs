---
title: craft\image\Svg
code:
  - php
  - twig
---

# Svg

Type

:   Class

Namespace

:   craft\image

Inherits

:   [craft\image\Svg](craft-image-svg.md) &raquo;
[craft\base\Image](craft-base-image.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Svg class is used for SVG file manipulations.





[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)


## Public Properties

| Property                                          | Description
| ------------------------------------------------- | ------------------------------------------------
| [extension](craft-image-svg.md#extension)         | [string](http://php.net/language.types.string)
| [height](craft-image-svg.md#height)               | [integer](http://php.net/language.types.integer)
| [isTransparent](craft-image-svg.md#istransparent) | [boolean](http://php.net/language.types.boolean)
| [svgString](craft-image-svg.md#svgstring)         | [string](http://php.net/language.types.string)
| [width](craft-image-svg.md#width)                 | [integer](http://php.net/language.types.integer)

### `extension`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)



### `height`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)



### `isTransparent`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)



### `svgString`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)



### `width`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [crop()](craft-image-svg.md#method-crop)                                                                                                  | Crops the image to the specified coordinates.
| [getExtension()](craft-image-svg.md#method-getextension)                                                                                  | Returns the file extension.
| [getHeight()](craft-image-svg.md#method-getheight)                                                                                        | Returns the height of the image.
| [getIsTransparent()](craft-image-svg.md#method-getistransparent)                                                                          | Returns whether the image is transparent.
| [getSvgString()](craft-image-svg.md#method-getsvgstring)                                                                                  | Returns the SVG string.
| [getWidth()](craft-image-svg.md#method-getwidth)                                                                                          | Returns the width of the image.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [loadImage()](craft-image-svg.md#method-loadimage)                                                                                        | Loads an image from a file system path.
| [resize()](craft-image-svg.md#method-resize)                                                                                              | Resizes the image.
| [saveAs()](craft-image-svg.md#method-saveas)                                                                                              | Saves the image to the target path.
| [scaleAndCrop()](craft-image-svg.md#method-scaleandcrop)                                                                                  | Scale and crop image to exactly fit the specified size.
| [scaleToFit()](craft-image-svg.md#method-scaletofit)                                                                                      | Scale the image to fit within the specified size.

### `crop()`





Crops the image to the specified coordinates.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L107-L142)


#### Arguments

- `$x1` ([integer](http://php.net/language.types.integer))
- `$x2` ([integer](http://php.net/language.types.integer))
- `$y1` ([integer](http://php.net/language.types.integer))
- `$y2` ([integer](http://php.net/language.types.integer))

#### Returns

`static` – Self reference



### `getExtension()`





Returns the file extension.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L66-L69)



#### Returns

[string](http://php.net/language.types.string)



### `getHeight()`





Returns the height of the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L58-L61)



#### Returns

[integer](http://php.net/language.types.integer)



### `getIsTransparent()`





Returns whether the image is transparent.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L261-L264)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSvgString()`





Returns the SVG string.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L253-L256)



#### Returns

[string](http://php.net/language.types.string)



### `getWidth()`





Returns the width of the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L50-L53)



#### Returns

[integer](http://php.net/language.types.integer)



### `loadImage()`





Loads an image from a file system path.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L74-L102)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))

#### Returns

`static`, [craft\image\Svg](craft-image-svg.md) – Self reference

#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if the file cannot be loaded


### `resize()`





Resizes the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L205-L231)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The target width
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The target height. Defaults to $targetWidth if omitted, creating a square.

#### Returns

`static` – Self reference



### `saveAs()`





Saves the image to the target path.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L236-L246)


#### Arguments

- `$targetPath` ([string](http://php.net/language.types.string))
- `$autoQuality` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if the image cannot be saved.


### `scaleAndCrop()`





Scale and crop image to exactly fit the specified size.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L163-L200)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$scaleIfSmaller` ([boolean](http://php.net/language.types.boolean))
- `$cropPosition` (`mixed`)

#### Returns

`static` – Self reference



### `scaleToFit()`





Scale the image to fit within the specified size.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Svg.php#L147-L158)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$scaleIfSmaller` ([boolean](http://php.net/language.types.boolean))

#### Returns

`static` – Self reference





## Protected Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------
| [normalizeDimensions()](craft-base-image.md#method-normalizedimensions "Defined by craft\base\Image") | Normalizes the given dimensions. If width or height is set to 'AUTO', we calculate the missing dimension.



## Constants

| Constant                | Description
| ----------------------- | -----------
| `SVG_ASPECT_RE`         |
| `SVG_CLEANUP_HEIGHT_RE` |
| `SVG_CLEANUP_WIDTH_RE`  |
| `SVG_HEIGHT_RE`         |
| `SVG_TAG_RE`            |
| `SVG_VIEWBOX_RE`        |
| `SVG_WIDTH_RE`          |



