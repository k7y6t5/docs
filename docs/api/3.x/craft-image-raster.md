---
title: craft\image\Raster
code:
  - php
  - twig
---

# Raster

Type

:   Class

Namespace

:   craft\image

Inherits

:   [craft\image\Raster](craft-image-raster.md) &raquo;
[craft\base\Image](craft-base-image.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Raster class is used for raster image manipulations.





[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)


## Public Properties

| Property                                             | Description
| ---------------------------------------------------- | --------------------------------------------------------------------------
| [extension](craft-image-raster.md#extension)         | [string](http://php.net/language.types.string)
| [height](craft-image-raster.md#height)               | [integer](http://php.net/language.types.integer)
| [imagineImage](craft-image-raster.md#imagineimage)   | `\Imagine\Image\AbstractImage`, [null](http://php.net/language.types.null)
| [interlace](craft-image-raster.md#interlace)         | [string](http://php.net/language.types.string)
| [isTransparent](craft-image-raster.md#istransparent) | [boolean](http://php.net/language.types.boolean)
| [quality](craft-image-raster.md#quality)             | [integer](http://php.net/language.types.integer)
| [width](craft-image-raster.md#width)                 | [integer](http://php.net/language.types.integer)

### `extension`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `height`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `imagineImage`



Type

:   `\Imagine\Image\AbstractImage`, [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `interlace`



Type

:   [string](http://php.net/language.types.string)

Access

:   Write-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `isTransparent`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `quality`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Write-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)



### `width`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-image-raster.md#method-construct)                                                                                   | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [crop()](craft-image-raster.md#method-crop)                                                                                               | Crops the image to the specified coordinates.
| [disableAnimation()](craft-image-raster.md#method-disableanimation)                                                                       | Disable animation if this is an animated image.
| [flipHorizontally()](craft-image-raster.md#method-fliphorizontally)                                                                       | Flips the image horizontally.
| [flipVertically()](craft-image-raster.md#method-flipvertically)                                                                           | Flips the image vertically.
| [getExifMetadata()](craft-image-raster.md#method-getexifmetadata)                                                                         | Returns EXIF metadata for a file by its path.
| [getExtension()](craft-image-raster.md#method-getextension)                                                                               | Returns the file extension.
| [getHeight()](craft-image-raster.md#method-getheight)                                                                                     | Returns the height of the image.
| [getImagineImage()](craft-image-raster.md#method-getimagineimage)                                                                         | Return the Imagine Image instance
| [getIsTransparent()](craft-image-raster.md#method-getistransparent)                                                                       | Returns whether the image is transparent.
| [getTextBox()](craft-image-raster.md#method-gettextbox)                                                                                   | Returns the bounding text box for a text string and an angle
| [getWidth()](craft-image-raster.md#method-getwidth)                                                                                       | Returns the width of the image.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                     | Initializes the object.
| [loadFromSVG()](craft-image-raster.md#method-loadfromsvg)                                                                                 | Loads an image from an SVG string.
| [loadImage()](craft-image-raster.md#method-loadimage)                                                                                     | Loads an image from a file system path.
| [resize()](craft-image-raster.md#method-resize)                                                                                           | Resizes the image.
| [rotate()](craft-image-raster.md#method-rotate)                                                                                           | Rotates the image by the given degrees.
| [saveAs()](craft-image-raster.md#method-saveas)                                                                                           | Saves the image to the target path.
| [scaleAndCrop()](craft-image-raster.md#method-scaleandcrop)                                                                               | Scale and crop image to exactly fit the specified size.
| [scaleToFit()](craft-image-raster.md#method-scaletofit)                                                                                   | Scale the image to fit within the specified size.
| [setFontProperties()](craft-image-raster.md#method-setfontproperties)                                                                     | Sets properties for text drawing on the image.
| [setInterlace()](craft-image-raster.md#method-setinterlace)                                                                               | Sets the interlace setting.
| [setQuality()](craft-image-raster.md#method-setquality)                                                                                   | Sets the image quality.
| [writeText()](craft-image-raster.md#method-writetext)                                                                                     | Writes text on an image.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L80-L105)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `crop()`





Crops the image to the specified coordinates.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L200-L228)


#### Arguments

- `$x1` ([integer](http://php.net/language.types.integer))
- `$x2` ([integer](http://php.net/language.types.integer))
- `$y1` ([integer](http://php.net/language.types.integer))
- `$y2` ([integer](http://php.net/language.types.integer))

#### Returns

`static` – Self reference



### `disableAnimation()`





Disable animation if this is an animated image.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L611-L623)



#### Returns

[$this](craft-image-raster.md)



### `flipHorizontally()`





Flips the image horizontally.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L414-L419)



#### Returns

`static` – Self reference



### `flipVertically()`





Flips the image vertically.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L426-L431)



#### Returns

`static` – Self reference



### `getExifMetadata()`





Returns EXIF metadata for a file by its path.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L539-L552)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)



### `getExtension()`





Returns the file extension.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L136-L139)



#### Returns

[string](http://php.net/language.types.string)



### `getHeight()`





Returns the height of the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L128-L131)



#### Returns

[integer](http://php.net/language.types.integer)



### `getImagineImage()`





Return the Imagine Image instance




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L112-L115)



#### Returns

`\Imagine\Image\AbstractImage`, [null](http://php.net/language.types.null)



### `getIsTransparent()`





Returns whether the image is transparent.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L524-L531)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getTextBox()`





Returns the bounding text box for a text string and an angle




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L578-L585)


#### Arguments

- `$text` ([string](http://php.net/language.types.string))
- `$angle` ([integer](http://php.net/language.types.integer))

#### Returns

`\Imagine\Image\BoxInterface`

#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if attempting to create text box with no font properties


### `getWidth()`





Returns the width of the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L120-L123)



#### Returns

[integer](http://php.net/language.types.integer)



### `loadFromSVG()`





Loads an image from an SVG string.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L501-L519)


#### Arguments

- `$svgContent` ([string](http://php.net/language.types.string))

#### Returns

`static` – Self reference

#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if the SVG string cannot be loaded.


### `loadImage()`





Loads an image from a file system path.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L144-L195)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))

#### Returns

`static`, [craft\image\Svg](craft-image-svg.md) – Self reference

#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  if the file cannot be loaded


### `resize()`





Resizes the image.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L354-L390)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The target width
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The target height. Defaults to $targetWidth if omitted, creating a square.

#### Returns

`static` – Self reference



### `rotate()`





Rotates the image by the given degrees.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L398-L407)


#### Arguments

- `$degrees` ([float](http://php.net/language.types.float))

#### Returns

`static` – Self reference



### `saveAs()`





Saves the image to the target path.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L462-L492)


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








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L250-L349)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$scaleIfSmaller` ([boolean](http://php.net/language.types.boolean))
- `$cropPosition` (`mixed`)

#### Returns

`static` – Self reference



### `scaleToFit()`





Scale the image to fit within the specified size.








[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L233-L245)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$targetHeight` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null))
- `$scaleIfSmaller` ([boolean](http://php.net/language.types.boolean))

#### Returns

`static` – Self reference



### `setFontProperties()`





Sets properties for text drawing on the image.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L561-L568)


#### Arguments

- `$fontFile` ([string](http://php.net/language.types.string)) – Path to the font file on server
- `$size` ([integer](http://php.net/language.types.integer)) – Font size to use
- `$color` ([string](http://php.net/language.types.string)) – Font color to use in hex format




### `setInterlace()`





Sets the interlace setting.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L452-L457)


#### Arguments

- `$interlace` ([string](http://php.net/language.types.string))

#### Returns

`static` – Self reference



### `setQuality()`





Sets the image quality.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L439-L444)


#### Arguments

- `$quality` ([integer](http://php.net/language.types.integer))

#### Returns

`static` – Self reference



### `writeText()`





Writes text on an image.




[View source](https://github.com/craftcms/cms/blob/master/src/image/Raster.php#L596-L604)


#### Arguments

- `$text` ([string](http://php.net/language.types.string))
- `$x` ([integer](http://php.net/language.types.integer))
- `$y` ([integer](http://php.net/language.types.integer))
- `$angle` ([integer](http://php.net/language.types.integer))


#### Throws

- [craft\errors\ImageException](craft-errors-imageexception.md)\
  If attempting to create text box with no font properties et.




## Protected Methods

| Method                                                                                                | Description
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------
| [normalizeDimensions()](craft-base-image.md#method-normalizedimensions "Defined by craft\base\Image") | Normalizes the given dimensions. If width or height is set to 'AUTO', we calculate the missing dimension.






