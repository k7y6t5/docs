---
title: craft\base\FieldInterface
code:
  - php
  - twig
---

# FieldInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\SavableComponentInterface](craft-base-savablecomponentinterface.md)

Implemented by

:   [craft\base\Field](craft-base-field.md), [craft\fields\Assets](craft-fields-assets.md), [craft\fields\BaseOptionsField](craft-fields-baseoptionsfield.md), [craft\fields\BaseRelationField](craft-fields-baserelationfield.md), [craft\fields\Categories](craft-fields-categories.md), [craft\fields\Checkboxes](craft-fields-checkboxes.md), [craft\fields\Color](craft-fields-color.md), [craft\fields\Date](craft-fields-date.md), [craft\fields\Dropdown](craft-fields-dropdown.md), [craft\fields\Email](craft-fields-email.md), [craft\fields\Entries](craft-fields-entries.md), [craft\fields\Lightswitch](craft-fields-lightswitch.md), [craft\fields\Matrix](craft-fields-matrix.md), [craft\fields\MissingField](craft-fields-missingfield.md), [craft\fields\MultiSelect](craft-fields-multiselect.md), [craft\fields\Number](craft-fields-number.md), [craft\fields\PlainText](craft-fields-plaintext.md), [craft\fields\RadioButtons](craft-fields-radiobuttons.md), [craft\fields\Table](craft-fields-table.md), [craft\fields\Tags](craft-fields-tags.md), [craft\fields\Url](craft-fields-url.md), [craft\fields\Users](craft-fields-users.md)

Since

:   3.0.0



FieldInterface defines the common interface to be implemented by field classes.

A class implementing this interface should also use [craft\base\SavableComponentTrait](craft-base-savablecomponenttrait.md) and [craft\base\FieldTrait](craft-base-fieldtrait.md).



[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php)






## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------
| [afterDelete()](craft-base-savablecomponentinterface.md#method-afterdelete "Defined by craft\base\SavableComponentInterface")               | Performs actions after a component is deleted.
| [afterElementDelete()](craft-base-fieldinterface.md#method-afterelementdelete)                                                              | Performs actions after the element has been deleted.
| [afterElementPropagate()](craft-base-fieldinterface.md#method-afterelementpropagate)                                                        | Performs actions after the element has been fully saved and propagated to other sites.
| [afterElementRestore()](craft-base-fieldinterface.md#method-afterelementrestore)                                                            | Performs actions after the element has been restored.
| [afterElementSave()](craft-base-fieldinterface.md#method-afterelementsave)                                                                  | Performs actions after the element has been saved.
| [afterSave()](craft-base-savablecomponentinterface.md#method-aftersave "Defined by craft\base\SavableComponentInterface")                   | Performs actions after a component is saved.
| [beforeApplyDelete()](craft-base-savablecomponentinterface.md#method-beforeapplydelete "Defined by craft\base\SavableComponentInterface")   | Performs actions before a component delete is applied to the database.
| [beforeDelete()](craft-base-savablecomponentinterface.md#method-beforedelete "Defined by craft\base\SavableComponentInterface")             | Performs actions before a component is deleted.
| [beforeElementDelete()](craft-base-fieldinterface.md#method-beforeelementdelete)                                                            | Performs actions before an element is deleted.
| [beforeElementRestore()](craft-base-fieldinterface.md#method-beforeelementrestore)                                                          | Performs actions before an element is restored.
| [beforeElementSave()](craft-base-fieldinterface.md#method-beforeelementsave)                                                                | Performs actions before an element is saved.
| [beforeSave()](craft-base-savablecomponentinterface.md#method-beforesave "Defined by craft\base\SavableComponentInterface")                 | Performs actions before a component is saved.
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface")                             | Returns the display name of this class.
| [getContentColumnType()](craft-base-fieldinterface.md#method-getcontentcolumntype)                                                          | Returns the column type that this field should get within the content table.
| [getContentGqlType()](craft-base-fieldinterface.md#method-getcontentgqltype)                                                                | Returns the GraphQL type to be used for this field type.
| [getElementValidationRules()](craft-base-fieldinterface.md#method-getelementvalidationrules)                                                | Returns the validation rules for an element with this field.
| [getGroup()](craft-base-fieldinterface.md#method-getgroup)                                                                                  | Returns the field’s group.
| [getInputHtml()](craft-base-fieldinterface.md#method-getinputhtml)                                                                          | Returns the field’s input HTML.
| [getIsNew()](craft-base-savablecomponentinterface.md#method-getisnew "Defined by craft\base\SavableComponentInterface")                     | Returns whether the component is new (unsaved).
| [getIsTranslatable()](craft-base-fieldinterface.md#method-getistranslatable)                                                                | Returns whether the field should be shown as translatable in the UI.
| [getSearchKeywords()](craft-base-fieldinterface.md#method-getsearchkeywords)                                                                | Returns the search keywords that should be associated with this field.
| [getSettings()](craft-base-savablecomponentinterface.md#method-getsettings "Defined by craft\base\SavableComponentInterface")               | Returns an array of the component’s settings.
| [getSettingsHtml()](craft-base-savablecomponentinterface.md#method-getsettingshtml "Defined by craft\base\SavableComponentInterface")       | Returns the component’s settings HTML.
| [getStaticHtml()](craft-base-fieldinterface.md#method-getstatichtml)                                                                        | Returns a static (non-editable) version of the field’s input HTML.
| [getTranslationDescription()](craft-base-fieldinterface.md#method-gettranslationdescription)                                                | Returns the description of this field’s translation support.
| [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey)                                                                | Returns the field’s translation key, based on a given element.
| [hasContentColumn()](craft-base-fieldinterface.md#method-hascontentcolumn)                                                                  | Returns whether this field has a column in the content table.
| [isSelectable()](craft-base-savablecomponentinterface.md#method-isselectable "Defined by craft\base\SavableComponentInterface")             | Returns whether the component should be selectable in component Type selects.
| [isValueEmpty()](craft-base-fieldinterface.md#method-isvalueempty)                                                                          | Returns whether the given value should be considered “empty” to a validator.
| [modifyElementIndexQuery()](craft-base-fieldinterface.md#method-modifyelementindexquery)                                                    | Modifies an element index query.
| [modifyElementsQuery()](craft-base-fieldinterface.md#method-modifyelementsquery)                                                            | Modifies an element query.
| [normalizeValue()](craft-base-fieldinterface.md#method-normalizevalue)                                                                      | Normalizes the field’s value for use.
| [serializeValue()](craft-base-fieldinterface.md#method-serializevalue)                                                                      | Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.
| [setIsFresh()](craft-base-fieldinterface.md#method-setisfresh)                                                                              | Sets whether the field is fresh.
| [settingsAttributes()](craft-base-savablecomponentinterface.md#method-settingsattributes "Defined by craft\base\SavableComponentInterface") | Returns the list of settings attribute names.
| [supportedTranslationMethods()](craft-base-fieldinterface.md#method-supportedtranslationmethods)                                            | Returns which translation methods the field supports.
| [validate()](craft-base-savablecomponentinterface.md#method-validate "Defined by craft\base\SavableComponentInterface")                     | Validates the component.
| [valueType()](craft-base-fieldinterface.md#method-valuetype)                                                                                | Returns the PHPDoc type this field’s values will have.

### `afterElementDelete()`





Performs actions after the element has been deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L394)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that was just deleted




### `afterElementPropagate()`



Since

:   3.2.0



Performs actions after the element has been fully saved and propagated to other sites.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L379)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that was just saved and propagated
- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `afterElementRestore()`



Since

:   3.1.0



Performs actions after the element has been restored.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L411)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that was just restored




### `afterElementSave()`





Performs actions after the element has been saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L370)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that was just saved
- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new




### `beforeElementDelete()`





Performs actions before an element is deleted.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L387)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is about to be deleted

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be deleted



### `beforeElementRestore()`



Since

:   3.1.0



Performs actions before an element is restored.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L403)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is about to be restored

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be restored



### `beforeElementSave()`





Performs actions before an element is saved.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L362)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element that is about to be saved
- `$isNew` ([boolean](http://php.net/language.types.boolean)) – Whether the element is brand new

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the element should be saved



### `getContentColumnType()`





Returns the column type that this field should get within the content table.

This method will only be called if [hasContentColumn()](craft-base-fieldinterface.md#method-hascontentcolumn) returns true.

See also [yii\db\QueryBuilder::getColumnType()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#getColumnType()-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L79)



#### Returns

[string](http://php.net/language.types.string) – The column type. [yii\db\QueryBuilder::getColumnType()](https://www.yiiframework.com/doc/api/2.0/yii-db-querybuilder#getColumnType()-detail) will be called
to convert the give column type to the physical one. For example, `string` will be converted
as `varchar(255)` and `string(100)` becomes `varchar(100)`. `not null` will automatically be
appended as well.



### `getContentGqlType()`



Since

:   3.3.0



Returns the GraphQL type to be used for this field type.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L350)



#### Returns

`\GraphQL\Type\Definition\Type`, [array](http://php.net/language.types.array)



### `getElementValidationRules()`





Returns the validation rules for an element with this field.

Rules should be defined in the array syntax required by [yii\base\Model::rules()](https://www.yiiframework.com/doc/api/2.0/yii-base-model#rules()-detail),
with one difference: you can skip the first argument (the attribute list).

```php
[
    // explicitly specify the field attribute
    [$this->handle, 'string', 'min' => 3, 'max' => 12],
    // skip the field attribute
    ['string', 'min' => 3, 'max' => 12],
    // you can only pass the validator class name/handle if not setting any params
    'bool',
]
```

To register validation rules that should only be enforced for _live_ elements,
set the rule [scenario](https://www.yiiframework.com/doc/guide/2.0/en/structure-models#scenarios)
to `live`:

```php
[
    ['string', 'min' => 3, 'max' => 12, 'on' => \craft\base\Element::SCENARIO_LIVE],
]
```


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L245)



#### Returns

[array](http://php.net/language.types.array)



### `getGroup()`





Returns the field’s group.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L342)



#### Returns

[craft\records\FieldGroup](craft-records-fieldgroup.md), [null](http://php.net/language.types.null)



### `getInputHtml()`





Returns the field’s input HTML.

An extremely simple implementation would be to directly return some HTML:

```php
return '<textarea name="'.$name.'">'.$value.'</textarea>';
```

For more complex inputs, you might prefer to create a template, and render it via
[craft\web\View::renderTemplate()](craft-web-view.md#method-rendertemplate). For example, the following code would render a template located at
`path/to/myplugin/templates/_fieldinput.html`, passing the `$name` and `$value` variables to it:

```php
return Craft::$app->view->renderTemplate('myplugin/_fieldinput', [
    'name'  => $name,
    'value' => $value
]);
```

If you need to tie any JavaScript code to your input, it’s important to know that any `name=` and `id=`
attributes within the returned HTML will probably get [namespaced](craft-web-view.md#method-namespaceinputs),
however your JavaScript code will be left untouched.
For example, if getInputHtml() returns the following HTML:

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

Thankfully, [craft\web\View](craft-web-view.md) provides a couple handy methods that can help you deal with this:

- [craft\web\View::namespaceInputId()](craft-web-view.md#method-namespaceinputid) will give you the namespaced version of a given ID.
- [craft\web\View::namespaceInputName()](craft-web-view.md#method-namespaceinputname) will give you the namespaced version of a given input name.
- [craft\web\View::formatInputId()](craft-web-view.md#method-formatinputid) will format an input name to look more like an ID attribute value.

So here’s what a getInputHtml() method that includes field-targeting JavaScript code might look like:

```php
public function getInputHtml($value, $element)
{
    // Come up with an ID value based on $name
    $id = Craft::$app->view->formatInputId($name);
    // Figure out what that ID is going to be namespaced into
    $namespacedId = Craft::$app->view->namespaceInputId($id);
    // Render and return the input template
    return Craft::$app->view->renderTemplate('myplugin/_fieldinput', [
        'name'         => $name,
        'id'           => $id,
        'namespacedId' => $namespacedId,
        'value'        => $value
    ]);
}
```

And the _fieldinput.html template might look like this:

```twig
<textarea id="{{ id }}" name="{{ name }}">{{ value }}</textarea>
<script type="text/javascript">
    var textarea = document.getElementById('{{ namespacedId }}');
</script>
```

The same principles also apply if you’re including your JavaScript code with
[craft\web\View::registerJs()](craft-web-view.md#method-registerjs).


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L203)


#### Arguments

- `$value` (`mixed`) – The field’s value. This will either be the [normalized value](craft-base-fieldinterface.md#method-normalizevalue),
raw POST data (i.e. if there was a validation error), or null
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

[string](http://php.net/language.types.string) – The input HTML.



### `getIsTranslatable()`





Returns whether the field should be shown as translatable in the UI.

Note this method has no effect on whether the field’s value will get copied over to other
sites when the entry is actually getting saved. That is determined by [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey).


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L90)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element being edited

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getSearchKeywords()`





Returns the search keywords that should be associated with this field.

The keywords can be separated by commas and/or whitespace; it doesn’t really matter. [craft\services\Search](craft-services-search.md)
will be able to find the individual keywords in whatever string is returned, and normalize them for you.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L267)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with, if there is one

#### Returns

[string](http://php.net/language.types.string) – A string of search keywords.



### `getStaticHtml()`





Returns a static (non-editable) version of the field’s input HTML.

This function is called to output field values when viewing entry drafts.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L214)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with

#### Returns

[string](http://php.net/language.types.string) – The static version of the field’s input HTML



### `getTranslationDescription()`



Since

:   3.4.0



Returns the description of this field’s translation support.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L99)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element being edited

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getTranslationKey()`





Returns the field’s translation key, based on a given element.

When saving an element on a multi-site Craft install, if `$propagate` is `true` for [craft\services\Elements::saveElement()](craft-services-elements.md#method-saveelement),
then `getTranslationKey()` will be called for each custom field and for each site the element should be propagated to.
If the method returns the same value as it did for the initial site, then the initial site’s value will be copied over
to the target site.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L112)


#### Arguments

- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element being saved

#### Returns

[string](http://php.net/language.types.string) – The translation key



### `hasContentColumn()`





Returns whether this field has a column in the content table.

::: warning
If you set this to `false`, you will be on your own in terms of saving and retrieving your field values.
:::


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L33)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `isValueEmpty()`





Returns whether the given value should be considered “empty” to a validator.



See also [yii\validators\Validator::$isEmpty](https://www.yiiframework.com/doc/api/2.0/yii-validators-validator#$isEmpty-detail)
[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L255)


#### Arguments

- `$value` (`mixed`) – The field’s value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md)) – The element the field is associated with, if there is one

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the value should be considered “empty”



### `modifyElementIndexQuery()`



Since

:   3.0.9



Modifies an element index query.

This method will be called whenever an element index is being loaded,
which contains a column for this field.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L328)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query




### `modifyElementsQuery()`





Modifies an element query.

This method will be called whenever elements are being searched for that
may have this field assigned to them. If the method returns `false`, the
query will be stopped before it ever gets a chance to execute.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L317)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query
- `$value` (`mixed`) – The value that was set on this field’s corresponding
element query param, if any.

#### Returns

[null](http://php.net/language.types.null), [false](http://php.net/language.types.boolean) – `false` in the event that the method is sure that no
elements are going to be found.



### `normalizeValue()`





Normalizes the field’s value for use.

This method is called when the field’s value is first accessed from the element. For example, the first time
`entry.myFieldHandle` is called from a template, or right before [getInputHtml()](craft-base-fieldinterface.md#method-getinputhtml) is called. Whatever
this method returns is what `entry.myFieldHandle` will likewise return, and what [getInputHtml()](craft-base-fieldinterface.md#method-getinputhtml)’s and
[serializeValue()](craft-base-fieldinterface.md#method-serializevalue)’s $value arguments will be set to.

The value passed into this method will vary depending on the context.

- If a new, unsaved element is being edited for the first time (such as an entry within a Quick Post widget
  on the Dashboard), the value will be `null`.
- If an element is currently being saved, the value will be the field’s POST data.
- If an existing element was retrieved from the database, the value will be whatever is stored in the field’s
  `content` table column. (Or if the field doesn’t have a `content` table column per [hasContentColumn()](craft-base-fieldinterface.md#method-hascontentcolumn),
  the value will be `null`.)


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L290)


#### Arguments

- `$value` (`mixed`) – The raw field value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

`mixed` – The prepared field value



### `serializeValue()`





Prepares the field’s value to be stored somewhere, like the content table or JSON-encoded in an entry revision table.

Data types that are JSON-encodable are safe (arrays, integers, strings, booleans, etc).
Whatever this returns should be something [normalizeValue()](craft-base-fieldinterface.md#method-normalizevalue) can handle.


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L302)


#### Arguments

- `$value` (`mixed`) – The raw field value
- `$element` ([craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)) – The element the field is associated with, if there is one

#### Returns

`mixed` – The serialized field value



### `setIsFresh()`





Sets whether the field is fresh.




[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L335)


#### Arguments

- `$isFresh` ([boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)) – Whether the field is fresh.




### `supportedTranslationMethods()`





Returns which translation methods the field supports.

This method should return an array with at least one of the following values:
- 'none' (values will always be copied to other sites)
- 'language' (values will be copied to other sites with the same language)
- 'site' (values will never be copied to other sites)
- 'custom' (values will be copied/not copied depending on a custom translation key)

See also [getTranslationKey()](craft-base-fieldinterface.md#method-gettranslationkey)
[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L47)



#### Returns

[string](http://php.net/language.types.string)[]



### `valueType()`



Since

:   3.2.0



Returns the PHPDoc type this field’s values will have.

It will be used by the generated `CustomFieldBehavior` class.

If the values can be of more than one type, return multiple types separated by `|`s.

```php
public static function phpDocType()
{
     return 'int|mixed|\\craft\\elements\\db\\ElementQuery';
}
```


[View source](https://github.com/craftcms/cms/blob/master/src/base/FieldInterface.php#L66)



#### Returns

[string](http://php.net/language.types.string)









