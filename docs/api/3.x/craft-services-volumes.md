---
title: craft\services\Volumes
code:
  - php
  - twig
---

# Volumes

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Volumes](craft-services-volumes.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Class AssetVolumesService



See also http://craftcms.com

[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allVolumeIds](craft-services-volumes.md#allvolumeids)                                                                     | [integer](http://php.net/language.types.integer)[]
| [allVolumeTypes](craft-services-volumes.md#allvolumetypes)                                                                 | [string](http://php.net/language.types.string)[]
| [allVolumes](craft-services-volumes.md#allvolumes)                                                                         | [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [publicVolumeIds](craft-services-volumes.md#publicvolumeids)                                                               | [integer](http://php.net/language.types.integer)[]
| [publicVolumes](craft-services-volumes.md#publicvolumes)                                                                   | [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]
| [totalViewableVolumes](craft-services-volumes.md#totalviewablevolumes)                                                     | [integer](http://php.net/language.types.integer)
| [totalVolumes](craft-services-volumes.md#totalvolumes)                                                                     | [integer](http://php.net/language.types.integer)
| [viewableVolumeIds](craft-services-volumes.md#viewablevolumeids)                                                           | [array](http://php.net/language.types.array)
| [viewableVolumes](craft-services-volumes.md#viewablevolumes)                                                               | [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]

### `allVolumeIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `allVolumeTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `allVolumes`



Type

:   [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `publicVolumeIds`



Type

:   [integer](http://php.net/language.types.integer)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `publicVolumes`



Type

:   [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `totalViewableVolumes`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `totalVolumes`



Type

:   [integer](http://php.net/language.types.integer)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `viewableVolumeIds`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)



### `viewableVolumes`



Type

:   [craft\base\VolumeInterface](craft-base-volumeinterface.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php)







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
| [createVolume()](craft-services-volumes.md#method-createvolume)                                                                             | Creates an asset volume with a given config.
| [deleteVolume()](craft-services-volumes.md#method-deletevolume)                                                                             | Deletes an asset volume.
| [deleteVolumeById()](craft-services-volumes.md#method-deletevolumebyid)                                                                     | Deletes an asset volume by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [ensureTopFolder()](craft-services-volumes.md#method-ensuretopfolder)                                                                       | Ensures a top level folder exists that matches the model.
| [getAllVolumeIds()](craft-services-volumes.md#method-getallvolumeids)                                                                       | Returns all of the volume IDs.
| [getAllVolumeTypes()](craft-services-volumes.md#method-getallvolumetypes)                                                                   | Returns all registered volume types.
| [getAllVolumes()](craft-services-volumes.md#method-getallvolumes)                                                                           | Returns all volumes.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getPublicVolumeIds()](craft-services-volumes.md#method-getpublicvolumeids)                                                                 | Returns all volume IDs that have public URLs.
| [getPublicVolumes()](craft-services-volumes.md#method-getpublicvolumes)                                                                     | Returns all volumes that have public URLs.
| [getTotalViewableVolumes()](craft-services-volumes.md#method-gettotalviewablevolumes)                                                       | Returns the total number of volumes that are viewable by the current user.
| [getTotalVolumes()](craft-services-volumes.md#method-gettotalvolumes)                                                                       | Returns the total number of volumes.
| [getViewableVolumeIds()](craft-services-volumes.md#method-getviewablevolumeids)                                                             | Returns all volume IDs that are viewable by the current user.
| [getViewableVolumes()](craft-services-volumes.md#method-getviewablevolumes)                                                                 | Returns all volumes that are viewable by the current user.
| [getVolumeByHandle()](craft-services-volumes.md#method-getvolumebyhandle)                                                                   | Returns a volume by its handle.
| [getVolumeById()](craft-services-volumes.md#method-getvolumebyid)                                                                           | Returns a volume by its ID.
| [getVolumeByUid()](craft-services-volumes.md#method-getvolumebyuid)                                                                         | Returns a volume by its UID.
| [getVolumeOverrides()](craft-services-volumes.md#method-getvolumeoverrides)                                                                 | Returns any custom volume config values.
| [handleChangedVolume()](craft-services-volumes.md#method-handlechangedvolume)                                                               | Handle volume change
| [handleDeletedVolume()](craft-services-volumes.md#method-handledeletedvolume)                                                               | Handle volume getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [pruneDeletedField()](craft-services-volumes.md#method-prunedeletedfield)                                                                   | Prune a deleted field from volume layouts.
| [reorderVolumes()](craft-services-volumes.md#method-reordervolumes)                                                                         | Reorders asset volumes.
| [saveVolume()](craft-services-volumes.md#method-savevolume)                                                                                 | Creates or updates a volume.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `createVolume()`





Creates an asset volume with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L499-L546)


#### Arguments

- `$config` (`mixed`) – The asset volume’s class name, or its config, with a `type` value and optionally a `settings` value

#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md) – The asset volume



### `deleteVolume()`





Deletes an asset volume.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L601-L617)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md)) – The volume to delete

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `deleteVolumeById()`





Deletes an asset volume by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L583-L592)


#### Arguments

- `$volumeId` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `ensureTopFolder()`





Ensures a top level folder exists that matches the model.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L554-L574)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md))

#### Returns

[integer](http://php.net/language.types.integer)



### `getAllVolumeIds()`





Returns all of the volume IDs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L131-L134)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getAllVolumeTypes()`





Returns all registered volume types.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L111-L124)



#### Returns

[string](http://php.net/language.types.string)[]



### `getAllVolumes()`





Returns all volumes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L209-L224)



#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md)[]



### `getPublicVolumeIds()`





Returns all volume IDs that have public URLs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L169-L172)



#### Returns

[integer](http://php.net/language.types.integer)[]



### `getPublicVolumes()`





Returns all volumes that have public URLs.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L179-L182)



#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md)[]



### `getTotalViewableVolumes()`





Returns the total number of volumes that are viewable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L199-L202)



#### Returns

[integer](http://php.net/language.types.integer)



### `getTotalVolumes()`





Returns the total number of volumes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L189-L192)



#### Returns

[integer](http://php.net/language.types.integer)



### `getViewableVolumeIds()`





Returns all volume IDs that are viewable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L141-L144)



#### Returns

[array](http://php.net/language.types.array)



### `getViewableVolumes()`





Returns all volumes that are viewable by the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L151-L162)



#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md)[]



### `getVolumeByHandle()`





Returns a volume by its handle.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L254-L257)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string))

#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md), [null](http://php.net/language.types.null)



### `getVolumeById()`





Returns a volume by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L232-L235)


#### Arguments

- `$volumeId` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md), [null](http://php.net/language.types.null)



### `getVolumeByUid()`





Returns a volume by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L243-L246)


#### Arguments

- `$volumeUid` ([string](http://php.net/language.types.string))

#### Returns

[craft\base\VolumeInterface](craft-base-volumeinterface.md), [null](http://php.net/language.types.null)



### `getVolumeOverrides()`





Returns any custom volume config values.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L484-L491)


#### Arguments

- `$handle` ([string](http://php.net/language.types.string)) – The volume handle

#### Returns

[array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



### `handleChangedVolume()`





Handle volume change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L360-L453)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedVolume()`





Handle volume getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L624-L689)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `pruneDeletedField()`





Prune a deleted field from volume layouts.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L696-L728)


#### Arguments

- `$event` ([craft\events\FieldEvent](craft-events-fieldevent.md))




### `reorderVolumes()`





Reorders asset volumes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L462-L476)


#### Arguments

- `$volumeIds` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `saveVolume()`





Creates or updates a volume.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Volumes.php#L285-L353)


#### Arguments

- `$volume` ([craft\base\VolumeInterface](craft-base-volumeinterface.md)) – The volume to be saved.
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the volume should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the volume was saved successfully

#### Throws

- [Throwable](http://php.net/class.throwable)

---

#### Example

::: code
```php
use craft\volumes\Local;

$volume = new Local([
    'name' => 'Content Images',
    'handle' => 'contentImages',
    'hasUrls' => true,
    'url' => '$CONTENT_IMAGES_URL',
    'path' => '$CONTENT_IMAGES_PATH',
]);

if (!Craft::$app->volumes->saveVolume(($volume))) {
    throw new Exception('Couldn’t save volume.');
}
```
:::






## Constants

| Constant            | Description
| ------------------- | -----------
| `CONFIG_VOLUME_KEY` |


## Events

### EVENT_AFTER_DELETE_VOLUME



Type

:   [craft\events\VolumeEvent](craft-events-volumeevent.md)



The event that is triggered after a Asset volume is deleted.



---



### EVENT_AFTER_SAVE_VOLUME



Type

:   [craft\events\VolumeEvent](craft-events-volumeevent.md)



The event that is triggered after an Asset volume is saved.



---



### EVENT_BEFORE_APPLY_VOLUME_DELETE



Type

:   [craft\events\VolumeEvent](craft-events-volumeevent.md)

Since

:   3.1.0



The event that is triggered before a volume delete is applied to the database.



---



### EVENT_BEFORE_DELETE_VOLUME



Type

:   [craft\events\VolumeEvent](craft-events-volumeevent.md)



The event that is triggered before an Asset volume is deleted.



---



### EVENT_BEFORE_SAVE_VOLUME



Type

:   [craft\events\VolumeEvent](craft-events-volumeevent.md)



The event that is triggered before an Asset volume is saved.



---



### EVENT_REGISTER_VOLUME_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering volume types.

Volume types must implement [craft\base\VolumeInterface](craft-base-volumeinterface.md). [craft\base\Volume](craft-base-volume.md) provides a base implementation.

See [Volume Types](https://docs.craftcms.com/v3/volume-types.html) for documentation on creating volume types.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\services\Volumes;
use yii\base\Event;

Event::on(Volumes::class,
    Volumes::EVENT_REGISTER_VOLUME_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyVolumeType::class;
    }
);
```
:::



