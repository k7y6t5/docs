---
title: craft\base\FlysystemVolume
code:
  - php
  - twig
---

# FlysystemVolume

Type

:   Abstract Class

Namespace

:   craft\base

Inherits

:   [craft\base\FlysystemVolume](craft-base-flysystemvolume.md) &raquo;
[craft\base\Volume](craft-base-volume.md) &raquo;
[craft\base\SavableComponent](craft-base-savablecomponent.md) &raquo;
[craft\base\Component](craft-base-component.md) &raquo;
[craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [craft\base\ComponentInterface](craft-base-componentinterface.md), [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md), [craft\base\VolumeInterface](craft-base-volumeinterface.md), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md), [craft\base\VolumeTrait](craft-base-volumetrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\volumes\Local](craft-volumes-local.md), [craft\volumes\Temp](craft-volumes-temp.md)



FlysystemVolume is the base class for Flysystem-based volume classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [dateCreated](craft-base-savablecomponenttrait.md#datecreated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was created
| [dateUpdated](craft-base-savablecomponenttrait.md#dateupdated "Defined by craft\base\SavableComponentTrait")                     | [DateTime](http://php.net/class.datetime), [null](http://php.net/language.types.null) – The date that the component was last updated
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [fieldLayoutId](craft-base-volumetrait.md#fieldlayoutid "Defined by craft\base\VolumeTrait")                                     | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Field layout ID
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [handle](craft-base-volumetrait.md#handle "Defined by craft\base\VolumeTrait")                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Handle
| [hasUrls](craft-base-volumetrait.md#hasurls "Defined by craft\base\VolumeTrait")                                                 | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the volume has a public URL
| [id](craft-base-savablecomponenttrait.md#id "Defined by craft\base\SavableComponentTrait")                                       | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The component’s ID (could be a temporary one: "new:X")
| [isNew](craft-base-savablecomponentinterface.md#isnew "Defined by craft\base\SavableComponentInterface")                         | [boolean](http://php.net/language.types.boolean) – Whether the component is new
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [name](craft-base-volumetrait.md#name "Defined by craft\base\VolumeTrait")                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – Name
| [rootUrl](craft-base-volumeinterface.md#rooturl "Defined by craft\base\VolumeInterface")                                         | [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The root URL, or `false` if there isn’t one
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [settings](craft-base-savablecomponentinterface.md#settings "Defined by craft\base\SavableComponentInterface")                   | [array](http://php.net/language.types.array) – The component’s settings.
| [settingsHtml](craft-base-savablecomponentinterface.md#settingshtml "Defined by craft\base\SavableComponentInterface")           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)
| [sortOrder](craft-base-volumetrait.md#sortorder "Defined by craft\base\VolumeTrait")                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – Sort order
| [uid](craft-base-volumetrait.md#uid "Defined by craft\base\VolumeTrait")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – UID
| [url](craft-base-volumetrait.md#url "Defined by craft\base\VolumeTrait")                                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The volume’s URL
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.



## Protected Properties

| Property                                                                               | Description
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [foldersHaveTrailingSlashes](craft-base-flysystemvolume.md#foldershavetrailingslashes) | [boolean](http://php.net/language.types.boolean) – Whether the Flysystem adapter expects folder names to have trailing slashes

### `foldersHaveTrailingSlashes`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the Flysystem adapter expects folder names to have trailing slashes



[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L30)





## Public Methods

| Method                                                                                                                                          | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                       | Calls the named method which is not a class method.
| [__clone()](craft-base-clonefixtrait.md#method-clone "Defined by craft\base\ClonefixTrait")                                                     |
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")             | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                         | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                     | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                         | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                     | Sets an object property to null.
| [activeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#activeAttributes()-detail "Defined by yii\base\Model")             | Returns the attribute names that are subject to validation in the current scenario.
| [addError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addError()-detail "Defined by yii\base\Model")                             | Adds a new error to the specified attribute.
| [addErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#addErrors()-detail "Defined by yii\base\Model")                           | Adds a list of errors.
| [addModelErrors()](craft-base-model.md#method-addmodelerrors "Defined by craft\base\Model")                                                     | Adds errors from another model, with a given attribute name prefix.
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                       | Performs actions after a component is saved.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](craft-base-volume.md#method-attributelabels "Defined by craft\base\Volume")                                                 | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")       | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                     | Performs actions before a component is saved.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-base-volume.md#method-behaviors "Defined by craft\base\Volume")                                                             | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [copyFile()](craft-base-flysystemvolume.md#method-copyfile)                                                                                     | Copies a file.
| [createDir()](craft-base-flysystemvolume.md#method-createdir)                                                                                   | Creates a directory.
| [createFileByStream()](craft-base-flysystemvolume.md#method-createfilebystream)                                                                 | Creates a file.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes "Defined by craft\base\Model")                                             | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [deleteDir()](craft-base-flysystemvolume.md#method-deletedir)                                                                                   | Deletes a directory.
| [deleteFile()](craft-base-flysystemvolume.md#method-deletefile)                                                                                 | Deletes a file.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                                 | Returns the display name of this class.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#fields()-detail "Defined by yii\base\ArrayableTrait")               | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [fileExists()](craft-base-flysystemvolume.md#method-fileexists)                                                                                 | Returns whether a file exists.
| [folderExists()](craft-base-flysystemvolume.md#method-folderexists)                                                                             | Returns whether a folder exists at the given path.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getError()](craft-base-model.md#method-geterror "Defined by craft\base\Model")                                                                 | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFileList()](craft-base-flysystemvolume.md#method-getfilelist)                                                                               | List files.
| [getFileMetadata()](craft-base-flysystemvolume.md#method-getfilemetadata)                                                                       | Return the metadata about a file.
| [getFileStream()](craft-base-flysystemvolume.md#method-getfilestream)                                                                           | Gets a stream ready for reading by a file's URI.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                         | Returns whether the component is new (unsaved).
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getRootUrl()](craft-base-volumeinterface.md#method-getrooturl "Defined by craft\base\VolumeInterface")                                         | Returns the URL to the source, if it’s accessible via HTTP traffic.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")                   | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")           | Returns the component’s settings HTML.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](craft-base-model.md#method-haserrors "Defined by craft\base\Model")                                                               | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [init()](craft-base-model.md#method-init "Defined by craft\base\Model")                                                                         | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")                 | Returns whether the component should be selectable in component Type selects.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [renameDir()](craft-base-flysystemvolume.md#method-renamedir)                                                                                   | Renames a directory.
| [renameFile()](craft-base-flysystemvolume.md#method-renamefile)                                                                                 | Renames a file.
| [rules()](craft-base-model.md#method-rules "Defined by craft\base\Model")                                                                       | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [saveFileLocally()](craft-base-flysystemvolume.md#method-savefilelocally)                                                                       | Save a file from the source's uriPath to a local target path.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface")     | Returns the list of settings attribute names.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [updateFileByStream()](craft-base-flysystemvolume.md#method-updatefilebystream)                                                                 | Updates a file.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                         | Validates the component.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `copyFile()`





Copies a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L147-L160)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$newPath` ([string](http://php.net/language.types.string)) – The path of the new file, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file with such a name exists already
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be renamed cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `createDir()`





Creates a directory.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L204-L213)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `createFileByStream()`





Creates a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L67-L79)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$stream` ([resource](http://php.net/language.types.resource)) – The stream to file
- `$config` ([array](http://php.net/language.types.array)) – Additional config options to pass to the adapter


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file already exists at the path on the Volume
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `deleteDir()`





Deletes a directory.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L218-L229)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something goes wrong


### `deleteFile()`





Deletes a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L109-L124)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root


#### Throws

- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something goes wrong


### `fileExists()`





Returns whether a file exists.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L101-L104)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root

#### Returns

[boolean](http://php.net/language.types.boolean)



### `folderExists()`





Returns whether a folder exists at the given path.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L195-L199)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The folder path to check

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getFileList()`





List files.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L40-L50)


#### Arguments

- `$directory` ([string](http://php.net/language.types.string)) – The path of the directory to list files of
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to fetch file list recursively

#### Returns

[array](http://php.net/language.types.array)



### `getFileMetadata()`





Return the metadata about a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L55-L62)


#### Arguments

- `$uri` ([string](http://php.net/language.types.string)) – URI to the file on the volume

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file cannot be found


### `getFileStream()`





Gets a stream ready for reading by a file's URI.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L165-L174)


#### Arguments

- `$uriPath` ([string](http://php.net/language.types.string))

#### Returns

[resource](http://php.net/language.types.resource)

#### Throws

- [craft\errors\AssetException](craft-errors-assetexception.md)\
  if a stream cannot be created


### `renameDir()`





Renames a directory.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L234-L276)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the directory, relative to the source’s root
- `$newName` ([string](http://php.net/language.types.string)) – The new path of the directory, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a directory with such name already exists
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `renameFile()`





Renames a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L129-L142)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The old path of the file, relative to the source’s root
- `$newPath` ([string](http://php.net/language.types.string)) – The new path of the file, relative to the source’s root


#### Throws

- [craft\errors\VolumeObjectExistsException](craft-errors-volumeobjectexistsexception.md)\
  if a file with such a name exists already
- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be renamed cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong


### `saveFileLocally()`





Save a file from the source's uriPath to a local target path.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L179-L190)


#### Arguments

- `$uriPath` ([string](http://php.net/language.types.string))
- `$targetPath` ([string](http://php.net/language.types.string))

#### Returns

[integer](http://php.net/language.types.integer) – Amount of bytes copied



### `updateFileByStream()`





Updates a file.








[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L84-L96)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path of the file, relative to the source’s root
- `$stream` ([resource](http://php.net/language.types.resource)) – The new contents of the file as a stream
- `$config` ([array](http://php.net/language.types.array)) – Additional config options to pass to the adapter


#### Throws

- [craft\errors\VolumeObjectNotFoundException](craft-errors-volumeobjectnotfoundexception.md)\
  if the file to be updated cannot be found
- [craft\errors\VolumeException](craft-errors-volumeexception.md)\
  if something else goes wrong




## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [adapter()](craft-base-flysystemvolume.md#method-adapter)                                                                                               | Returns the Flysystem adapter instance.
| [addFileMetadataToConfig()](craft-base-flysystemvolume.md#method-addfilemetadatatoconfig)                                                               | Adds file metadata to the config array.
| [createAdapter()](craft-base-flysystemvolume.md#method-createadapter)                                                                                   | Creates and returns a Flysystem adapter instance based on the stored settings.
| [defineRules()](craft-base-volume.md#method-definerules "Defined by craft\base\Volume")                                                                 | Returns the validation rules for attributes.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [filesystem()](craft-base-flysystemvolume.md#method-filesystem)                                                                                         | Returns Flysystem filesystem configured with the Flysystem adapter.
| [invalidateCdnPath()](craft-base-flysystemvolume.md#method-invalidatecdnpath)                                                                           | Invalidate a CDN path on the Volume.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [visibility()](craft-base-flysystemvolume.md#method-visibility)                                                                                         | Returns the visibility setting for the Volume.

### `adapter()`





Returns the Flysystem adapter instance.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L290-L297)



#### Returns

`\League\Flysystem\AdapterInterface` – The Flysystem adapter.



### `addFileMetadataToConfig()`





Adds file metadata to the config array.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L317-L324)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `createAdapter()`





Creates and returns a Flysystem adapter instance based on the stored settings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L283)



#### Returns

`\League\Flysystem\AdapterInterface` – The Flysystem adapter.



### `filesystem()`





Returns Flysystem filesystem configured with the Flysystem adapter.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L305-L309)


#### Arguments

- `$config` ([array](http://php.net/language.types.array))

#### Returns

`\League\Flysystem\Filesystem` – The Flysystem filesystem.



### `invalidateCdnPath()`





Invalidate a CDN path on the Volume.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L332-L335)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The path to invalidate

#### Returns

[boolean](http://php.net/language.types.boolean)



### `visibility()`





Returns the visibility setting for the Volume.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FlysystemVolume.php#L342-L345)



#### Returns

[string](http://php.net/language.types.string)





## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.



