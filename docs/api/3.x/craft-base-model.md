---
title: craft\base\Model
code:
  - php
  - twig
---

# Model

Type

:   Abstract Class

Namespace

:   craft\base

Inherits

:   [craft\base\Model](craft-base-model.md) &raquo;
[yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\StaticInstanceInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstanceinterface)

Uses traits

:   [craft\base\ClonefixTrait](craft-base-clonefixtrait.md), [yii\base\ArrayableTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait), [yii\base\StaticInstanceTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait)

Extended by

:   [craft\assetpreviews\Image](craft-assetpreviews-image.md), [craft\assetpreviews\Pdf](craft-assetpreviews-pdf.md), [craft\assetpreviews\Text](craft-assetpreviews-text.md), [craft\assetpreviews\Video](craft-assetpreviews-video.md), [craft\base\AssetPreviewHandler](craft-base-assetpreviewhandler.md), [craft\base\Component](craft-base-component.md), [craft\base\Element](craft-base-element.md), [craft\base\ElementAction](craft-base-elementaction.md), [craft\base\ElementExporter](craft-base-elementexporter.md), [craft\base\Field](craft-base-field.md), [craft\base\FlysystemVolume](craft-base-flysystemvolume.md), [craft\base\SavableComponent](craft-base-savablecomponent.md), [craft\base\Utility](craft-base-utility.md), [craft\base\Volume](craft-base-volume.md), [craft\base\Widget](craft-base-widget.md), [craft\elements\Asset](craft-elements-asset.md), [craft\elements\Category](craft-elements-category.md), [craft\elements\Entry](craft-elements-entry.md), [craft\elements\GlobalSet](craft-elements-globalset.md), [craft\elements\MatrixBlock](craft-elements-matrixblock.md), [craft\elements\Tag](craft-elements-tag.md), [craft\elements\User](craft-elements-user.md), [craft\elements\actions\CopyReferenceTag](craft-elements-actions-copyreferencetag.md), [craft\elements\actions\DeepDuplicate](craft-elements-actions-deepduplicate.md), [craft\elements\actions\Delete](craft-elements-actions-delete.md), [craft\elements\actions\DeleteAssets](craft-elements-actions-deleteassets.md), [craft\elements\actions\DeleteUsers](craft-elements-actions-deleteusers.md), [craft\elements\actions\DownloadAssetFile](craft-elements-actions-downloadassetfile.md), [craft\elements\actions\Duplicate](craft-elements-actions-duplicate.md), [craft\elements\actions\Edit](craft-elements-actions-edit.md), [craft\elements\actions\EditImage](craft-elements-actions-editimage.md), [craft\elements\actions\NewChild](craft-elements-actions-newchild.md), [craft\elements\actions\PreviewAsset](craft-elements-actions-previewasset.md), [craft\elements\actions\RenameFile](craft-elements-actions-renamefile.md), [craft\elements\actions\ReplaceFile](craft-elements-actions-replacefile.md), [craft\elements\actions\Restore](craft-elements-actions-restore.md), [craft\elements\actions\SetStatus](craft-elements-actions-setstatus.md), [craft\elements\actions\SuspendUsers](craft-elements-actions-suspendusers.md), [craft\elements\actions\UnsuspendUsers](craft-elements-actions-unsuspendusers.md), [craft\elements\actions\View](craft-elements-actions-view.md), [craft\elements\exporters\Expanded](craft-elements-exporters-expanded.md), [craft\elements\exporters\Raw](craft-elements-exporters-raw.md), [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\MissingField](craft-fields-missingfield.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Table](craft-fields-table.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md), [craft\gql\TypeManager](craft-gql-typemanager.md), [craft\mail\transportadapters\BaseTransportAdapter](craft-mail-transportadapters-basetransportadapter.md), [craft\mail\transportadapters\Gmail](craft-mail-transportadapters-gmail.md), [craft\mail\transportadapters\Sendmail](craft-mail-transportadapters-sendmail.md), [craft\mail\transportadapters\Smtp](craft-mail-transportadapters-smtp.md), [craft\models\AssetIndexData](craft-models-assetindexdata.md), [craft\models\AssetTransform](craft-models-assettransform.md), [craft\models\AssetTransformIndex](craft-models-assettransformindex.md), [craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md), [craft\models\CategoryGroup](craft-models-categorygroup.md), [craft\models\CategoryGroup_SiteSettings](craft-models-categorygroup_sitesettings.md), [craft\models\CraftIdToken](craft-models-craftidtoken.md), [craft\models\CraftSupport](craft-models-craftsupport.md), [craft\models\DeprecationError](craft-models-deprecationerror.md), [craft\models\EntryDraft](craft-models-entrydraft.md), [craft\models\EntryType](craft-models-entrytype.md), [craft\models\EntryVersion](craft-models-entryversion.md), [craft\models\FieldGroup](craft-models-fieldgroup.md), [craft\models\FieldLayout](craft-models-fieldlayout.md), [craft\models\FieldLayoutTab](craft-models-fieldlayouttab.md), [craft\models\FolderCriteria](craft-models-foldercriteria.md), [craft\models\GqlSchema](craft-models-gqlschema.md), [craft\models\GqlToken](craft-models-gqltoken.md), [craft\models\Info](craft-models-info.md), [craft\models\MailSettings](craft-models-mailsettings.md), [craft\models\MatrixBlockType](craft-models-matrixblocktype.md), [craft\models\Section](craft-models-section.md), [craft\models\Section_SiteSettings](craft-models-section_sitesettings.md), [craft\models\Site](craft-models-site.md), [craft\models\SiteGroup](craft-models-sitegroup.md), [craft\models\Structure](craft-models-structure.md), [craft\models\SystemMessage](craft-models-systemmessage.md), [craft\models\TagGroup](craft-models-taggroup.md), [craft\models\Update](craft-models-update.md), [craft\models\UpdateRelease](craft-models-updaterelease.md), [craft\models\Updates](craft-models-updates.md), [craft\models\Url](craft-models-url.md), [craft\models\UserGroup](craft-models-usergroup.md), [craft\models\VolumeFolder](craft-models-volumefolder.md), [craft\test\EventItem](craft-test-eventitem.md), [craft\test\console\CommandTestItem](craft-test-console-commandtestitem.md), [craft\test\mockclasses\components\EventTriggeringComponent](craft-test-mockclasses-components-eventtriggeringcomponent.md), [craft\test\mockclasses\elements\ExampleElement](craft-test-mockclasses-elements-exampleelement.md), [craft\test\mockclasses\models\ExampleModel](craft-test-mockclasses-models-examplemodel.md), [craft\utilities\AssetIndexes](craft-utilities-assetindexes.md), [craft\utilities\ClearCaches](craft-utilities-clearcaches.md), [craft\utilities\DbBackup](craft-utilities-dbbackup.md), [craft\utilities\DeprecationErrors](craft-utilities-deprecationerrors.md), [craft\utilities\FindAndReplace](craft-utilities-findandreplace.md), [craft\utilities\Migrations](craft-utilities-migrations.md), [craft\utilities\PhpInfo](craft-utilities-phpinfo.md), [craft\utilities\QueueManager](craft-utilities-queuemanager.md), [craft\utilities\SystemMessages](craft-utilities-systemmessages.md), [craft\utilities\SystemReport](craft-utilities-systemreport.md), [craft\utilities\Updates](craft-utilities-updates.md), [craft\volumes\Local](craft-volumes-local.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\volumes\Temp](craft-volumes-temp.md), [craft\widgets\CraftSupport](craft-widgets-craftsupport.md), [craft\widgets\Feed](craft-widgets-feed.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md), [craft\widgets\NewUsers](craft-widgets-newusers.md), [craft\widgets\QuickPost](craft-widgets-quickpost.md), [craft\widgets\RecentEntries](craft-widgets-recententries.md), [craft\widgets\Updates](craft-widgets-updates.md)

Since

:   3.0.0



Model base class.





[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php)


## Public Properties

| Property                                                                                                                         | Description
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeValidators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$activeValidators-detail "Defined by yii\base\Model") | [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – The validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [attributes](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$attributes-detail "Defined by yii\base\Model")             | [array](http://php.net/language.types.array) – Attribute values (name => value).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [errors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$errors-detail "Defined by yii\base\Model")                     | [array](http://php.net/language.types.array) – Errors for all attributes or the specified attribute.
| [firstErrors](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$firstErrors-detail "Defined by yii\base\Model")           | [array](http://php.net/language.types.array) – The first errors.
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$iterator-detail "Defined by yii\base\Model")                 | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the items in the list.
| [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail "Defined by yii\base\Model")                 | [string](http://php.net/language.types.string) – The scenario that this model is in.
| [validators](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$validators-detail "Defined by yii\base\Model")             | [ArrayObject](http://php.net/class.arrayobject), [yii\validators\Validator](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator) – All the validators declared in the model.





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
| [addModelErrors()](craft-base-model.md#method-addmodelerrors)                                                                                   | Adds errors from another model, with a given attribute name prefix.
| [afterValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#afterValidate()-detail "Defined by yii\base\Model")                   | This method is invoked after validation ends.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")         | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")       | Attaches a list of behaviors to the component.
| [attributeHints()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeHints()-detail "Defined by yii\base\Model")                 | Returns the attribute hints.
| [attributeLabels()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributeLabels()-detail "Defined by yii\base\Model")               | Returns the attribute labels.
| [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail "Defined by yii\base\Model")                         | Returns the list of attribute names.
| [beforeValidate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#beforeValidate()-detail "Defined by yii\base\Model")                 | This method is invoked before validation starts.
| [behaviors()](craft-base-model.md#method-behaviors)                                                                                             | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                 | Returns the fully qualified name of this class.
| [clearErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#clearErrors()-detail "Defined by yii\base\Model")                       | Removes errors for all attributes or a single attribute.
| [createValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#createValidators()-detail "Defined by yii\base\Model")             | Creates validator objects based on the validation rules specified in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [datetimeAttributes()](craft-base-model.md#method-datetimeattributes)                                                                           | Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")         | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")       | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")       | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extraFields()-detail "Defined by yii\base\ArrayableTrait")     | Returns the list of fields that can be expanded further and returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).
| [fields()](craft-base-model.md#method-fields)                                                                                                   | Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.
| [formName()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#formName()-detail "Defined by yii\base\Model")                             | Returns the form name that this model class should use.
| [generateAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#generateAttributeLabel()-detail "Defined by yii\base\Model") | Generates a user friendly attribute label based on the give attribute name.
| [getActiveValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getActiveValidators()-detail "Defined by yii\base\Model")       | Returns the validators applicable to the current [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail).
| [getAttributeHint()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeHint()-detail "Defined by yii\base\Model")             | Returns the text hint for the specified attribute.
| [getAttributeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributeLabel()-detail "Defined by yii\base\Model")           | Returns the text label for the specified attribute.
| [getAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getAttributes()-detail "Defined by yii\base\Model")                   | Returns attribute values.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")               | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")             | Returns all behaviors attached to this component.
| [getError()](craft-base-model.md#method-geterror)                                                                                               | Returns the first error of the specified attribute.
| [getErrorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrorSummary()-detail "Defined by yii\base\Model")               | Returns the errors for all attributes as a one-dimensional array.
| [getErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getErrors()-detail "Defined by yii\base\Model")                           | Returns the errors for all attributes or a single attribute.
| [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail "Defined by yii\base\Model")                   | Returns the first error of the specified attribute.
| [getFirstErrors()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstErrors()-detail "Defined by yii\base\Model")                 | Returns the first error of every attribute in the model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getIterator()-detail "Defined by yii\base\Model")                       | Returns an iterator for traversing the attributes in the model.
| [getScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getScenario()-detail "Defined by yii\base\Model")                       | Returns the scenario that this model is used in.
| [getValidators()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getValidators()-detail "Defined by yii\base\Model")                   | Returns all the validators declared in [rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail).
| [hasErrors()](craft-base-model.md#method-haserrors)                                                                                             | Returns a value indicating whether there is any validation error.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")     | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a property is defined.
| [init()](craft-base-model.md#method-init)                                                                                                       | Initializes the object.
| [instance()](https://www.yiiframework.com/doc/api/2.0/yii-base-staticinstancetrait#instance()-detail "Defined by yii\base\StaticInstanceTrait") | Returns static class instance, which can be used to obtain meta information.
| [isAttributeActive()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeActive()-detail "Defined by yii\base\Model")           | Returns a value indicating whether the attribute is active in the current scenario.
| [isAttributeRequired()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeRequired()-detail "Defined by yii\base\Model")       | Returns a value indicating whether the attribute is required.
| [isAttributeSafe()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#isAttributeSafe()-detail "Defined by yii\base\Model")               | Returns a value indicating whether the attribute is safe for massive assignments.
| [load()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#load()-detail "Defined by yii\base\Model")                                     | Populates the model with input data.
| [loadMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#loadMultiple()-detail "Defined by yii\base\Model")                     | Populates a set of models with the data from end user.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                               | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetExists()-detail "Defined by yii\base\Model")                     | Returns whether there is an element at the specified offset.
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetGet()-detail "Defined by yii\base\Model")                           | Returns the element at the specified offset.
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetSet()-detail "Defined by yii\base\Model")                           | Sets the element at the specified offset.
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#offsetUnset()-detail "Defined by yii\base\Model")                       | Sets the element value at the specified offset to null.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                 | Attaches an event handler to an event.
| [onUnsafeAttribute()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#onUnsafeAttribute()-detail "Defined by yii\base\Model")           | This method is invoked when an unsafe attribute is being massively assigned.
| [rules()](craft-base-model.md#method-rules)                                                                                                     | Returns the validation rules for attributes.
| [safeAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#safeAttributes()-detail "Defined by yii\base\Model")                 | Returns the attribute names that are safe to be massively assigned in the current scenario.
| [scenarios()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#scenarios()-detail "Defined by yii\base\Model")                           | Returns a list of scenarios and the corresponding active attributes.
| [setAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setAttributes()-detail "Defined by yii\base\Model")                   | Sets the attribute values in a massive way.
| [setScenario()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#setScenario()-detail "Defined by yii\base\Model")                       | Sets the scenario for the model.
| [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail "Defined by yii\base\ArrayableTrait")             | Converts the model into an array.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                       | Triggers an event.
| [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail "Defined by yii\base\Model")                             | Performs the data validation.
| [validateMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validateMultiple()-detail "Defined by yii\base\Model")             | Validates multiple models.

### `addModelErrors()`





Adds errors from another model, with a given attribute name prefix.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L160-L171)


#### Arguments

- `$model` ([yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model)) – The other model
- `$attrPrefix` ([string](http://php.net/language.types.string)) – The prefix that should be added to error attributes when adding them to this model




### `behaviors()`





Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\base\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L67-L73)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `datetimeAttributes()`





Returns the names of any attributes that should hold [DateTime](http://php.net/class.datetime) values.



See also:

- [init()](craft-base-model.md#method-init)
- [fields()](craft-base-model.md#method-fields)

[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L114-L131)



#### Returns

[string](http://php.net/language.types.string)[]



### `fields()`





Returns the list of fields that should be returned by default by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail) when no specific fields are specified.



A field is a named element in the returned array by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).

This method should return an array of field names or field definitions.
If the former, the field name will be treated as an object property name whose value will be used
as the field value. If the latter, the array key should be the field name while the array value should be
the corresponding field definition which can be either an object property name or a PHP callable
returning the corresponding field value. The signature of the callable should be:

```php
function ($model, $field) {
    // return field value
}
```

For example, the following code declares four fields:

- `email`: the field name is the same as the property name `email`;
- `firstName` and `lastName`: the field names are `firstName` and `lastName`, and their
  values are obtained from the `first_name` and `last_name` properties;
- `fullName`: the field name is `fullName`. Its value is obtained by concatenating `first_name`
  and `last_name`.

```php
return [
    'email',
    'firstName' => 'first_name',
    'lastName' => 'last_name',
    'fullName' => function ($model) {
        return $model->first_name . ' ' . $model->last_name;
    },
];
```

In this method, you may also want to return different lists of fields based on some context
information. For example, depending on [scenario](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail) or the privilege of the current application user,
you may return different sets of visible fields or filter out some fields.

The default implementation of this method returns [attributes()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#attributes()-detail) indexed by the same attribute names.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L136-L152)



#### Returns

[array](http://php.net/language.types.array) – The list of field names or field definitions.



### `getError()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [getFirstError()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#getFirstError()-detail) instead.
:::




Returns the first error of the specified attribute.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L212-L217)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The error message, or null if there are no errors.



### `hasErrors()`





Returns a value indicating whether there is any validation error.








[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L176-L200)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – Attribute name. Use null to check all attributes.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether there is any error.



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L48-L62)






### `rules()`





Returns the validation rules for attributes.



Validation rules are used by [validate()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#validate()-detail) to check if attribute values are valid.
Child classes may override this method to declare different validation rules.

Each rule is an array with the following structure:

```php
[
    ['attribute1', 'attribute2'],
    'validator type',
    'on' => ['scenario1', 'scenario2'],
    //...other parameters...
]
```

where

 - attribute list: required, specifies the attributes array to be validated, for single attribute you can pass a string;
 - validator type: required, specifies the validator to be used. It can be a built-in validator name,
   a method name of the model class, an anonymous function, or a validator class name.
 - on: optional, specifies the [scenarios](https://www.yiiframework.com/doc/api/2.0/yii-base-model#$scenario-detail) array in which the validation
   rule can be applied. If this option is not set, the rule will apply to all scenarios.
 - additional name-value pairs can be specified to initialize the corresponding validator properties.
   Please refer to individual validator class API for possible properties.

A validator can be either an object of a class extending `\craft\base\Validator`, or a model class method
(called *inline validator*) that has the following signature:

```php
// $params refers to validation parameters given in the rule
function validatorName($attribute, $params)
```

In the above `$attribute` refers to the attribute currently being validated while `$params` contains an array of
validator configuration options such as `max` in case of `string` validator. The value of the attribute currently being validated
can be accessed as `$this->$attribute`. Note the `$` before `attribute`; this is taking the value of the variable
`$attribute` and using it as the name of the property to access.

Yii also provides a set of [built-in validators](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$builtInValidators-detail).
Each one has an alias name which can be used when specifying a validation rule.

Below are some examples:

```php
[
    // built-in "required" validator
    [['username', 'password'], 'required'],
    // built-in "string" validator customized with "min" and "max" properties
    ['username', 'string', 'min' => 3, 'max' => 12],
    // built-in "compare" validator that is used in "register" scenario only
    ['password', 'compare', 'compareAttribute' => 'password2', 'on' => 'register'],
    // an inline validator defined via the "authenticate()" method in the model class
    ['password', 'authenticate', 'on' => 'login'],
    // a validator of class "DateRangeValidator"
    ['dateRange', 'DateRangeValidator'],
];
```

Note, in order to inherit rules defined in the parent class, a child class needs to
merge the parent rules with child rules using functions such as `array_merge()`.




[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L78-L89)



#### Returns

[array](http://php.net/language.types.array) – Validation rules





## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [defineRules()](craft-base-model.md#method-definerules)                                                                                                 | Returns the validation rules for attributes.
| [extractFieldsFor()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractFieldsFor()-detail "Defined by yii\base\ArrayableTrait")   | Extract nested fields from a fields collection for a given root field Nested fields are separated with dots (.). e.g: "item.id" The previous example would extract "id".
| [extractRootFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#extractRootFields()-detail "Defined by yii\base\ArrayableTrait") | Extracts the root field names from nested fields.
| [resolveFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#resolveFields()-detail "Defined by yii\base\ArrayableTrait")         | Determines which fields can be returned by [toArray()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayabletrait#toArray()-detail).

### `defineRules()`



Since

:   3.4.0



Returns the validation rules for attributes.

See [rules()](craft-base-model.md#method-rules) for details about what should be returned.

Models should override this method instead of [rules()](craft-base-model.md#method-rules) so [EVENT_DEFINE_RULES](craft-base-model.md#event-define-rules) handlers can modify the
class-defined rules.


[View source](https://github.com/craftcms/cms/blob/master/src/base/Model.php#L102-L105)



#### Returns

[array](http://php.net/language.types.array)





## Constants

| Constant           | Description
| ------------------ | ---------------------------------
| `SCENARIO_DEFAULT` | The name of the default scenario.


## Events

### EVENT_DEFINE_BEHAVIORS



Type

:   [craft\events\DefineBehaviorsEvent](craft-events-definebehaviorsevent.md)



The event that is triggered when defining the class behaviors

See also [behaviors()](craft-base-model.md#method-behaviors)

---



### EVENT_DEFINE_RULES



Type

:   [craft\events\DefineRulesEvent](craft-events-definerulesevent.md)

Since

:   3.1.0



The event that is triggered when defining the model rules

See also [rules()](craft-base-model.md#method-rules)

---



### EVENT_INIT



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after the model's init cycle

See also [init()](craft-base-model.md#method-init)

---




