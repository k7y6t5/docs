---
title: craft\base\SavableComponentInterface
code:
  - php
  - twig
---

# SavableComponentInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\ComponentInterface](craft-base-componentinterface.md)

Implemented by

:   [craft\base\ElementAction](craft-base-elementaction.md), [craft\base\ElementActionInterface](craft-base-elementactioninterface.md), [craft\base\Field](craft-base-field.md), [craft\base\FieldInterface](craft-base-fieldinterface.md), [craft\base\FlysystemVolume](craft-base-flysystemvolume.md), [craft\base\SavableComponent](craft-base-savablecomponent.md), [craft\base\Volume](craft-base-volume.md), [craft\base\VolumeInterface](craft-base-volumeinterface.md), [craft\base\Widget](craft-base-widget.md), [craft\base\WidgetInterface](craft-base-widgetinterface.md), [craft\elements\actions\CopyReferenceTag](craft-elements-actions-copyreferencetag.md), [craft\elements\actions\DeepDuplicate](craft-elements-actions-deepduplicate.md), [craft\elements\actions\Delete](craft-elements-actions-delete.md), [craft\elements\actions\DeleteAssets](craft-elements-actions-deleteassets.md), [craft\elements\actions\DeleteUsers](craft-elements-actions-deleteusers.md), [craft\elements\actions\DownloadAssetFile](craft-elements-actions-downloadassetfile.md), [craft\elements\actions\Duplicate](craft-elements-actions-duplicate.md), [craft\elements\actions\Edit](craft-elements-actions-edit.md), [craft\elements\actions\EditImage](craft-elements-actions-editimage.md), [craft\elements\actions\NewChild](craft-elements-actions-newchild.md), [craft\elements\actions\PreviewAsset](craft-elements-actions-previewasset.md), [craft\elements\actions\RenameFile](craft-elements-actions-renamefile.md), [craft\elements\actions\ReplaceFile](craft-elements-actions-replacefile.md), [craft\elements\actions\Restore](craft-elements-actions-restore.md), [craft\elements\actions\SetStatus](craft-elements-actions-setstatus.md), [craft\elements\actions\SuspendUsers](craft-elements-actions-suspendusers.md), [craft\elements\actions\UnsuspendUsers](craft-elements-actions-unsuspendusers.md), [craft\elements\actions\View](craft-elements-actions-view.md), [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\MissingField](craft-fields-missingfield.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Table](craft-fields-table.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md), [craft\mail\transportadapters\BaseTransportAdapter](craft-mail-transportadapters-basetransportadapter.md), [craft\mail\transportadapters\Gmail](craft-mail-transportadapters-gmail.md), [craft\mail\transportadapters\Sendmail](craft-mail-transportadapters-sendmail.md), [craft\mail\transportadapters\Smtp](craft-mail-transportadapters-smtp.md), [craft\mail\transportadapters\TransportAdapterInterface](craft-mail-transportadapters-transportadapterinterface.md), [craft\volumes\Local](craft-volumes-local.md), [craft\volumes\MissingVolume](craft-volumes-missingvolume.md), [craft\volumes\Temp](craft-volumes-temp.md), [craft\widgets\CraftSupport](craft-widgets-craftsupport.md), [craft\widgets\Feed](craft-widgets-feed.md), [craft\widgets\MissingWidget](craft-widgets-missingwidget.md), [craft\widgets\NewUsers](craft-widgets-newusers.md), [craft\widgets\QuickPost](craft-widgets-quickpost.md), [craft\widgets\RecentEntries](craft-widgets-recententries.md), [craft\widgets\Updates](craft-widgets-updates.md)

Since

:   3.0.0



SavableComponentInterface defines the common interface to be implemented by savable Craft component classes.

A class implementing this interface should also use [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete)                                     | Performs actions after a component is deleted.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave)                                         | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete)                         | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete)                                   | Performs actions before a component is deleted.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave)                                       | Performs actions before a component is saved.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface") | Returns the display name of this class.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew)                                           | Returns whether the component is new (unsaved).
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings)                                     | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml)                             | Returns the component’s settings HTML.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable)                                   | Returns whether the component should be selectable in component Type selects.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes)                       | Returns the list of settings attribute names.
| [validate()](craft-base-savablecomponentinterface.md#method-validate)                                           | Validates the component.

### `afterDelete()`





Performs actions after a component is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L185)






### `afterSave()`





Performs actions after a component is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L166)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the component is brand new




### `beforeApplyDelete()`



Since

:   3.1.0



Performs actions before a component delete is applied to the database.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L180)






### `beforeDelete()`





Performs actions before a component is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L173)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component should be deleted



### `beforeSave()`





Performs actions before a component is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L159)


#### Arguments

- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the component is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component should be saved



### `getIsNew()`





Returns whether the component is new (unsaved).




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L31)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component is new



### `getSettings()`





Returns an array of the component’s settings.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L61)



#### Returns

[array](http://php.net/language.types.array) – The component’s settings.



### `getSettingsHtml()`





Returns the component’s settings HTML.

An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="foo">'.$this->foo.'</textarea>';
```

For more complex settings, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](craft-web-view.md#method-rendertemplate). For example, the following code would render a template located at
`src/templates/_settings.html`, passing the settings to it:

```php
return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
    'widget' => $this
]);
```

If you need to tie any JavaScript code to your settings, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](craft-web-view.md#method-namespaceinputs),
however your JavaScript code will be left untouched.
For example, if getSettingsHtml() returns the following HTML:

```html
<textarea id="foo" name="foo"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

…then it might actually look like this before getting output to the browser:

```html
<textarea id="namespace-foo" name="namespace[foo]"></textarea>
<script type="text/javascript">
    var textarea = document.getElementById('foo');
</script>
```

As you can see, that JavaScript code will not be able to find the textarea, because the textarea’s `id=`
attribute was changed from `foo` to `namespace-foo`.
Before you start adding `namespace-` to the beginning of your element ID selectors, keep in mind that the actual
namespace is going to change depending on the context. Often they are randomly generated. So it’s not quite
that simple.

Thankfully, [craft\web\View](craft-web-view.md) service provides a couple handy methods that can help you deal
with this:

- [craft\web\View::namespaceInputId()](craft-web-view.md#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](craft-web-view.md#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](craft-web-view.md#method-formatinputid) will format an input name to look more like an ID attribute value.

So here’s what a getSettingsHtml() method that includes field-targeting JavaScript code might look like:

```php
public function getSettingsHtml()
{
    // Come up with an ID value for 'foo'
    $id = Craft::$app->getView()->formatInputId('foo');
    // Figure out what that ID is going to be namespaced into
    $namespacedId = Craft::$app->view->namespaceInputId($id);
    // Render and return the input template
    return Craft::$app->view->renderTemplate('plugin-handle/_widget-settings', [
        'id'           => $id,
        'namespacedId' => $namespacedId,
        'widget'       => $this
    ]);
}
```

And the _widget-settings.twig template might look like this:

```twig
<textarea id="{{ id }}" name="foo">{{ widget.foo }}</textarea>
<script type="text/javascript">
    var textarea = document.getElementById('{{ namespacedId }}');
</script>
```

The same principles also apply if you’re including your JavaScript code with
[craft\web\View::registerJs()](craft-web-view.md#method-registerjs).


[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L148)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `isSelectable()`





Returns whether the component should be selectable in component Type selects.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L24)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the component should be selectable in component Type selects.



### `settingsAttributes()`





Returns the list of settings attribute names.

By default, this method returns all public non-static properties that were defined on the called class.
You may override this method to change the default behavior.

See also [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings)
[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L54)



#### Returns

[array](http://php.net/language.types.array) – The list of settings attribute names



### `validate()`





Validates the component.




[View source](https://github.com/craftcms/cms/blob/master/src/base/SavableComponentInterface.php#L43)


#### Arguments

- `$attributeNames` ([string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)) – List of attribute names that should
be validated. If this parameter is empty, it means any attribute listed
in the applicable validation rules should be validated.
- `$clearErrors` ([boolean](http://php.net/language.types.boolean)) – Whether existing errors should be cleared before
performing validation

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the validation is successful without any error.









