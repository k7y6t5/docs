---
title: craft\services\Composer
code:
  - php
  - twig
---

# Composer

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Composer](craft-services-composer.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Composer service.

An instance of the Composer service is globally accessible in Craft via [`Craft::$app->composer`](craft-base-applicationtrait.md#method-getcomposer).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [composerRepoUrl](craft-services-composer.md#composerrepourl)                                                              | [string](http://php.net/language.types.string)
| [disablePackagist](craft-services-composer.md#disablepackagist)                                                            | [boolean](http://php.net/language.types.boolean)
| [jsonPath](craft-services-composer.md#jsonpath)                                                                            | [string](http://php.net/language.types.string)
| [lockPath](craft-services-composer.md#lockpath)                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [maxBackups](craft-services-composer.md#maxbackups)                                                                        | [integer](http://php.net/language.types.integer) – The maximum number of composer.
| [updateComposerClassMap](craft-services-composer.md#updatecomposerclassmap)                                                | [boolean](http://php.net/language.types.boolean) – Whether to generate a new Composer class map, rather than preloading all of the classes in the current class map

### `composerRepoUrl`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L41)



### `disablePackagist`



Type

:   [boolean](http://php.net/language.types.boolean)







[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L46)



### `jsonPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php)



### `lockPath`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php)



### `maxBackups`



Type

:   [integer](http://php.net/language.types.integer)

Since

:   3.0.38



The maximum number of composer.json and composer.lock backups to store in storage/composer-backups/



[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L57)



### `updateComposerClassMap`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to generate a new Composer class map, rather than preloading all of the classes in the current class map



[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L51)







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
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getJsonPath()](craft-services-composer.md#method-getjsonpath)                                                                              | Returns the path to composer.json.
| [getLockPath()](craft-services-composer.md#method-getlockpath)                                                                              | Returns the path to composer.lock, if it exists.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [install()](craft-services-composer.md#method-install)                                                                                      | Installs a given set of packages with Composer.
| [logComposerClass()](craft-services-composer.md#method-logcomposerclass)                                                                    | Adds an autoloading class to the Composer class map
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [optimize()](craft-services-composer.md#method-optimize)                                                                                    | Optimizes the Composer autoloader.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [uninstall()](craft-services-composer.md#method-uninstall)                                                                                  | Uninstalls a given set of packages with Composer.

### `getJsonPath()`





Returns the path to composer.json.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L70-L77)



#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if composer.json can't be located


### `getLockPath()`





Returns the path to composer.lock, if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L85-L93)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if composer.json can't be located


### `install()`





Installs a given set of packages with Composer.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L104-L197)


#### Arguments

- `$requirements` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – Package name/version pairs, or set to null to run the equivalent of `composer install`
- `$io` (`\Composer\IO\IOInterface`, [null](http://php.net/language.types.null)) – The IO object that Composer should be instantiated with
- `$allowlist` ([array](http://php.net/language.types.array), [boolean](http://php.net/language.types.boolean)) – List of package names to allow, `true` if that should be determined
dynamically, or `false` if no allowlist should be used.


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if something goes wrong


### `logComposerClass()`





Adds an autoloading class to the Composer class map




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L332-L335)


#### Arguments

- `$className` ([string](http://php.net/language.types.string))




### `optimize()`





Optimizes the Composer autoloader.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L288-L325)


#### Arguments

- `$io` (`\Composer\IO\IOInterface`, [null](http://php.net/language.types.null)) – The IO object that Composer should be instantiated with


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if something goes wrong


### `uninstall()`





Uninstalls a given set of packages with Composer.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L206-L279)


#### Arguments

- `$packages` ([string](http://php.net/language.types.string)[]) – Package names
- `$io` (`\Composer\IO\IOInterface`, [null](http://php.net/language.types.null)) – The IO object that Composer should be instantiated with


#### Throws

- [Throwable](http://php.net/class.throwable)\
  if something goes wrong




## Protected Methods

| Method                                                                               | Description
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------
| [_ensureHomeVar()](craft-services-composer.md#method-ensurehomevar)                  | Ensures that HOME/APPDATA or COMPOSER_HOME env vars have been set.
| [backupComposerFiles()](craft-services-composer.md#method-backupcomposerfiles)       | Backs up the composer.json and composer.lock files to `storage/composer-backups/`
| [composerConfig()](craft-services-composer.md#method-composerconfig)                 | Returns the decoded Composer config, modified to use composer.craftcms.com instead of packagist.org.
| [createComposer()](craft-services-composer.md#method-createcomposer)                 | Creates a new Composer instance.
| [findCraftRepo()](craft-services-composer.md#method-findcraftrepo)                   |
| [findDisablePackagist()](craft-services-composer.md#method-finddisablepackagist)     |
| [preloadComposerClasses()](craft-services-composer.md#method-preloadcomposerclasses) | Preloads Composer classes in case Composer needs to update itself
| [updateRequirements()](craft-services-composer.md#method-updaterequirements)         | Updates the composer.json file with new requirements

### `_ensureHomeVar()`





Ensures that HOME/APPDATA or COMPOSER_HOME env vars have been set.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L340-L355)






### `backupComposerFiles()`





Backs up the composer.json and composer.lock files to `storage/composer-backups/`




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L534-L554)






### `composerConfig()`





Returns the decoded Composer config, modified to use
composer.craftcms.com instead of packagist.org.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L421-L465)


#### Arguments

- `$io` (`\Composer\IO\IOInterface`)
- `$jsonPath` ([string](http://php.net/language.types.string))
- `$prepForUpdate` ([boolean](http://php.net/language.types.boolean))

#### Returns

[array](http://php.net/language.types.array)



### `createComposer()`





Creates a new Composer instance.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L505-L517)


#### Arguments

- `$io` (`\Composer\IO\IOInterface`)
- `$jsonPath` ([string](http://php.net/language.types.string))
- `$prepForUpdate` ([boolean](http://php.net/language.types.boolean))

#### Returns

`\Composer\Composer`



### `findCraftRepo()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L467-L480)


#### Arguments

- `$config`




### `findDisablePackagist()`










[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L482-L495)


#### Arguments

- `$config`




### `preloadComposerClasses()`





Preloads Composer classes in case Composer needs to update itself




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L522-L529)






### `updateRequirements()`





Updates the composer.json file with new requirements




[View source](https://github.com/craftcms/cms/blob/master/src/services/Composer.php#L364-L410)


#### Arguments

- `$io` (`\Composer\IO\IOInterface`)
- `$jsonPath` ([string](http://php.net/language.types.string))
- `$requirements` ([array](http://php.net/language.types.array))









