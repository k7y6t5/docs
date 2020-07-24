---
title: craft\services\Images
code:
  - php
  - twig
---

# Images

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Images](craft-services-images.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Service for image operations.

An instance of the Images service is globally accessible in Craft via [`Craft::$app->images`](craft-base-applicationtrait.md#method-getimages).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [canUseImagick](craft-services-images.md#canuseimagick)                                                                    | [boolean](http://php.net/language.types.boolean)
| [imageMagickApiVersion](craft-services-images.md#imagemagickapiversion)                                                    | [string](http://php.net/language.types.string)
| [isGd](craft-services-images.md#isgd)                                                                                      | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)
| [isImagick](craft-services-images.md#isimagick)                                                                            | [boolean](http://php.net/language.types.boolean)
| [supportedImageFormats](craft-services-images.md#supportedimageformats)                                                    | [array](http://php.net/language.types.array) – Image formats that can be manipulated.
| [version](craft-services-images.md#version)                                                                                | [string](http://php.net/language.types.string)

### `canUseImagick`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)



### `imageMagickApiVersion`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)



### `isGd`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)



### `isImagick`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)



### `supportedImageFormats`



Type

:   [array](http://php.net/language.types.array)



Image formats that can be manipulated.



[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L42)



### `version`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [checkMemoryForImage()](craft-services-images.md#method-checkmemoryforimage)                                                                | Determines if there is enough memory to process this image.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [cleanImage()](craft-services-images.md#method-cleanimage)                                                                                  | Cleans an image by its path, clearing embedded potentially malicious embedded code.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCanUseImagick()](craft-services-images.md#method-getcanuseimagick)                                                                      | Returns whether Imagick is installed and meets version requirements
| [getExifData()](craft-services-images.md#method-getexifdata)                                                                                | Get EXIF metadata for a file by it's path.
| [getImageMagickApiVersion()](craft-services-images.md#method-getimagemagickapiversion)                                                      | Returns the installed ImageMagick API version.
| [getIsGd()](craft-services-images.md#method-getisgd)                                                                                        | Returns whether image manipulations will be performed using GD or not.
| [getIsImagick()](craft-services-images.md#method-getisimagick)                                                                              | Returns whether image manipulations will be performed using Imagick or not.
| [getSupportedImageFormats()](craft-services-images.md#method-getsupportedimageformats)                                                      | Returns a list of all supported image formats.
| [getVersion()](craft-services-images.md#method-getversion)                                                                                  | Returns the version of the image driver.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-services-images.md#method-init)                                                                                              | Decide on the image driver being used.
| [loadImage()](craft-services-images.md#method-loadimage)                                                                                    | Loads an image from a file system path.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [rotateImageByExifData()](craft-services-images.md#method-rotateimagebyexifdata)                                                            | Rotate image according to it's EXIF data.
| [stripOrientationFromExifData()](craft-services-images.md#method-striporientationfromexifdata)                                              | Strip orientation from EXIF data for an image at a path.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `checkMemoryForImage()`





Determines if there is enough memory to process this image.

The code was adapted from http://www.php.net/manual/en/function.imagecreatefromjpeg.php#64155.
It will first attempt to do it with available memory. If that fails,
Craft will bump the memory to amount defined by the
<config:phpMaxMemoryLimit> config setting, then try again.


[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L208-L249)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string)) – The path to the image file.
- `$toTheMax` ([boolean](http://php.net/language.types.boolean)) – If set to true, will set the PHP memory to the config setting phpMaxMemoryLimit.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `cleanImage()`





Cleans an image by its path, clearing embedded potentially malicious embedded code.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L257-L301)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string))


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $filePath is a malformed SVG image


### `getCanUseImagick()`





Returns whether Imagick is installed and meets version requirements




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L149-L166)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getExifData()`





Get EXIF metadata for a file by it's path.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L354-L363)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `getImageMagickApiVersion()`





Returns the installed ImageMagick API version.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L125-L142)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the Imagick extension isn’t installed


### `getIsGd()`





Returns whether image manipulations will be performed using GD or not.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L75-L78)



#### Returns

[boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



### `getIsImagick()`





Returns whether image manipulations will be performed using Imagick or not.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L85-L88)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSupportedImageFormats()`





Returns a list of all supported image formats.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L114-L117)



#### Returns

[array](http://php.net/language.types.array)



### `getVersion()`





Returns the version of the image driver.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L95-L107)



#### Returns

[string](http://php.net/language.types.string)



### `init()`





Decide on the image driver being used.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L57-L68)






### `loadImage()`





Loads an image from a file system path.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L176-L194)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$rasterize` ([boolean](http://php.net/language.types.boolean)) – Whether the image should be rasterized if it's an SVG
- `$svgSize` ([integer](http://php.net/language.types.integer)) – The size SVG should be scaled up to, if rasterized

#### Returns

[craft\base\Image](craft-base-image.md)



### `rotateImageByExifData()`





Rotate image according to it's EXIF data.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L309-L346)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `stripOrientationFromExifData()`





Strip orientation from EXIF data for an image at a path.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Images.php#L371-L388)


#### Arguments

- `$filePath` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)







## Constants

| Constant                  | Description
| ------------------------- | -----------
| `DRIVER_GD`               |
| `DRIVER_IMAGICK`          |
| `MINIMUM_IMAGICK_VERSION` |



