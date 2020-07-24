---
title: craft\helpers\Image
code:
  - php
  - twig
---

# Image

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Image](craft-helpers-image.md)

Since

:   3.0.0



Class Image





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php)






## Public Methods

| Method                                                                                         | Description
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------
| [calculateMissingDimension()](craft-helpers-image.md#method-calculatemissingdimension)         | Calculates a missing target dimension for an image.
| [canHaveExifData()](craft-helpers-image.md#method-canhaveexifdata)                             | Returns whether an image can have EXIF information embedded.
| [canManipulateAsImage()](craft-helpers-image.md#method-canmanipulateasimage)                   | Returns whether an image extension is considered manipulatable.
| [cleanExifDataFromImagickImage()](craft-helpers-image.md#method-cleanexifdatafromimagickimage) | Clean EXIF data from an image loaded inside an Imagick instance, taking care not to wipe the ICC profile.
| [cleanImageByPath()](craft-helpers-image.md#method-cleanimagebypath)                           | Clean an image provided by path from all malicious code and the like.
| [imageSize()](craft-helpers-image.md#method-imagesize)                                         | Returns the size of an image based on its file path.
| [imageSizeByStream()](craft-helpers-image.md#method-imagesizebystream)                         | Determines image dimensions by a stream pointing to the start of the image.
| [parseSvgSize()](craft-helpers-image.md#method-parsesvgsize)                                   | Parses SVG data and determines its size (normalized to pixels).
| [pngImageInfo()](craft-helpers-image.md#method-pngimageinfo)                                   | Returns any info that’s embedded in a given PNG file.
| [webSafeFormats()](craft-helpers-image.md#method-websafeformats)                               | Returns a list of web safe image formats.

### `calculateMissingDimension()`





Calculates a missing target dimension for an image.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L36-L58)


#### Arguments

- `$targetWidth` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null))
- `$targetHeight` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float), [null](http://php.net/language.types.null))
- `$sourceWidth` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float))
- `$sourceHeight` ([integer](http://php.net/language.types.integer), [float](http://php.net/language.types.float))

#### Returns

[integer](http://php.net/language.types.integer)[] – Array of the width and height.



### `canHaveExifData()`





Returns whether an image can have EXIF information embedded.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L161-L166)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The file path to check.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `canManipulateAsImage()`





Returns whether an image extension is considered manipulatable.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L66-L77)


#### Arguments

- `$extension` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `cleanExifDataFromImagickImage()`





Clean EXIF data from an image loaded inside an Imagick instance, taking
care not to wipe the ICC profile.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L343-L361)


#### Arguments

- `$imagick` (`\Imagick`)




### `cleanImageByPath()`





Clean an image provided by path from all malicious code and the like.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L173-L180)


#### Arguments

- `$imagePath` ([string](http://php.net/language.types.string))




### `imageSize()`





Returns the size of an image based on its file path.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L188-L201)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The path to the image

#### Returns

[array](http://php.net/language.types.array) – [width, height]



### `imageSizeByStream()`





Determines image dimensions by a stream pointing to the start of the image.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L210-L303)


#### Arguments

- `$stream` ([resource](http://php.net/language.types.resource))

#### Returns

[array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean)

#### Throws

- [TypeError](http://php.net/class.typeerror)


### `parseSvgSize()`





Parses SVG data and determines its size (normalized to pixels).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L311-L335)


#### Arguments

- `$svg` ([string](http://php.net/language.types.string)) – The SVG data

#### Returns

[array](http://php.net/language.types.array) – [width, height]



### `pngImageInfo()`





Returns any info that’s embedded in a given PNG file.

Adapted from https://github.com/ktomk/Miscellaneous/tree/master/get_png_imageinfo.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L101-L153)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The path to the PNG file.

#### Returns

[array](http://php.net/language.types.array), [boolean](http://php.net/language.types.boolean) – Info embedded in the PNG file, or `false` if it wasn’t found.



### `webSafeFormats()`





Returns a list of web safe image formats.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Image.php#L84-L87)



#### Returns

[string](http://php.net/language.types.string)[]







## Constants

| Constant               | Description
| ---------------------- | -----------
| `EXIF_IFD0_ROTATE_180` |
| `EXIF_IFD0_ROTATE_270` |
| `EXIF_IFD0_ROTATE_90`  |



