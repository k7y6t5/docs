---
title: craft\base\ComponentInterface
code:
  - php
  - twig
---

# ComponentInterface

Type

:   Interface

Namespace

:   craft\base

Implemented by

:   [craft\assetpreviews\Image](craft-assetpreviews-image.md), [craft\assetpreviews\Pdf](craft-assetpreviews-pdf.md), [craft\assetpreviews\Text](craft-assetpreviews-text.md), [craft\assetpreviews\Video](craft-assetpreviews-video.md), [craft\base\AssetPreviewHandler](craft-base-assetpreviewhandler.md), [craft\base\Component](craft-base-component.md), [craft\base\Element](craft-base-element.md), [craft\base\ElementAction](craft-base-elementaction.md), [craft\base\ElementExporter](craft-base-elementexporter.md), [craft\base\ElementExporterInterface](craft-base-elementexporterinterface.md), [craft\base\ElementInterface](craft-base-elementinterface.md), [craft\base\Field](craft-base-field.md), [craft\base\FlysystemVolume](craft-base-flysystemvolume.md), [craft\base\SavableComponent](craft-base-savablecomponent.md), [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md), [craft\base\Utility](craft-base-utility.md), [craft\base\UtilityInterface](craft-base-utilityinterface.md), [craft\base\Volume](craft-base-volume.md), [craft\base\Widget](craft-base-widget.md), [craft\elements\Asset](craft-elements-asset.md), [craft\elements\Category](craft-elements-category.md), [craft\elements\Entry](craft-elements-entry.md), [craft\elements\GlobalSet](craft-elements-globalset.md), [craft\elements\MatrixBlock](craft-elements-matrixblock.md), [craft\elements\Tag](craft-elements-tag.md), [craft\elements\User](craft-elements-user.md), [craft\elements\actions\CopyReferenceTag](craft-elements-actions-copyreferencetag.md), [craft\elements\actions\DeepDuplicate](craft-elements-actions-deepduplicate.md), [craft\elements\actions\Delete](craft-elements-actions-delete.md), [craft\elements\actions\DeleteAssets](craft-elements-actions-deleteassets.md), [craft\elements\actions\DeleteUsers](craft-elements-actions-deleteusers.md), [craft\elements\actions\DownloadAssetFile](craft-elements-actions-downloadassetfile.md), [craft\elements\actions\Duplicate](craft-elements-actions-duplicate.md), [craft\elements\actions\Edit](craft-elements-actions-edit.md), [craft\elements\actions\EditImage](craft-elements-actions-editimage.md), [craft\elements\actions\NewChild](craft-elements-actions-newchild.md), [craft\elements\actions\PreviewAsset](craft-elements-actions-previewasset.md), [craft\elements\actions\RenameFile](craft-elements-actions-renamefile.md), [craft\elements\actions\ReplaceFile](craft-elements-actions-replacefile.md), [craft\elements\actions\Restore](craft-elements-actions-restore.md), [craft\elements\actions\SetStatus](craft-elements-actions-setstatus.md), [craft\elements\actions\SuspendUsers](craft-elements-actions-suspendusers.md), [craft\elements\actions\UnsuspendUsers](craft-elements-actions-unsuspendusers.md), [craft\elements\actions\View](craft-elements-actions-view.md), [craft\elements\exporters\Expanded](craft-elements-exporters-expanded.md), [craft\elements\exporters\Raw](craft-elements-exporters-raw.md), [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\MissingField](craft-fields-missingfield.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Table](craft-fields-table.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md), [craft\gql\TypeManager](craft-gql-typemanager.md), [craft\mail\transportadapters\BaseTransportAdapter](craft-mail-transportadapters-basetransportadapter.md), [craft\mail\transportadapters\Gmail](craft-mail-transportadapters-gmail.md), [craft\mail\transportadapters\Sendmail](craft-mail-transportadapters-sendmail.md), [craft\mail\transportadapters\Smtp](craft-mail-transportadapters-smtp.md), [craft\models\BaseEntryRevisionModel](craft-models-baseentryrevisionmodel.md), [craft\models\EntryDraft](craft-models-entrydraft.md), [craft\models\EntryVersion](craft-models-entryversion.md), [craft\test\mockclasses\components\ComponentExample](craft-test-mockclasses-components-componentexample.md), [craft\test\mockclasses\components\DependencyHeavyComponentExample](craft-test-mockclasses-components-dependencyheavycomponentexample.md), [craft\test\mockclasses\components\EventTriggeringComponent](craft-test-mockclasses-components-eventtriggeringcomponent.md), [craft\test\mockclasses\components\ExtendedComponentExample](craft-test-mockclasses-components-extendedcomponentexample.md), [craft\test\mockclasses\elements\ExampleElement](craft-test-mockclasses-elements-exampleelement.md), [craft\utilities\AssetIndexes](craft-utilities-assetindexes.md), [craft\utilities\ClearCaches](craft-utilities-clearcaches.md), [craft\utilities\DbBackup](craft-utilities-dbbackup.md), [craft\utilities\DeprecationErrors](craft-utilities-deprecationerrors.md), [craft\utilities\FindAndReplace](craft-utilities-findandreplace.md), [craft\utilities\Migrations](craft-utilities-migrations.md), [craft\utilities\PhpInfo](craft-utilities-phpinfo.md), [craft\utilities\QueueManager](craft-utilities-queuemanager.md), [craft\utilities\SystemMessages](craft-utilities-systemmessages.md), [craft\utilities\SystemReport](craft-utilities-systemreport.md), [craft\utilities\Updates](craft-utilities-updates.md), [craft\volumes\Local](craft-volumes-local.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\volumes\Temp](craft-volumes-temp.md), [craft\widgets\CraftSupport](craft-widgets-craftsupport.md), [craft\widgets\Feed](craft-widgets-feed.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md), [craft\widgets\NewUsers](craft-widgets-newusers.md), [craft\widgets\QuickPost](craft-widgets-quickpost.md), [craft\widgets\RecentEntries](craft-widgets-recententries.md), [craft\widgets\Updates](craft-widgets-updates.md)

Since

:   3.0.0



ComponentInterface defines the common interface to be implemented by Craft component classes.

A class implementing this interface should also implement [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable).



[View source](https://github.com/craftcms/cms/blob/master/src/base/ComponentInterface.php)






## Public Methods

| Method                                                               | Description
| -------------------------------------------------------------------- | ---------------------------------------
| [displayName()](craft-base-componentinterface.md#method-displayname) | Returns the display name of this class.

### `displayName()`





Returns the display name of this class.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ComponentInterface.php#L24)



#### Returns

[string](http://php.net/language.types.string) – The display name of this class.









