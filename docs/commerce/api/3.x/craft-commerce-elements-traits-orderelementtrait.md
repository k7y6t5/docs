---
title: craft\commerce\elements\traits\OrderElementTrait
code:
  - php
  - twig
---

# OrderElementTrait

Type

:   Trait

Namespace

:   craft\commerce\elements\traits

Implemented by

:   [craft\commerce\elements\Order](craft-commerce-elements-order.md)









[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php)






## Public Methods

| Method                                                                                              | Description
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------
| [find()](craft-commerce-elements-traits-orderelementtrait.md#method-find)                           | Creates an `\ElementQueryInterface` instance for query purpose.
| [getFieldLayout()](craft-commerce-elements-traits-orderelementtrait.md#method-getfieldlayout)       | Returns the field layout used by this element.
| [getSearchKeywords()](craft-commerce-elements-traits-orderelementtrait.md#method-getsearchkeywords) | Returns the search keywords for a given search attribute.
| [hasContent()](craft-commerce-elements-traits-orderelementtrait.md#method-hascontent)               | Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).

### `find()`





Creates an `\ElementQueryInterface` instance for query purpose.



The returned `\ElementQueryInterface` instance can be further customized by calling
methods defined in `\ElementQueryInterface` before `one()` or `all()` is called to return
populated `\ElementInterface` instances. For example,

```php
// Find the entry whose ID is 5
$entry = Entry::find()->id(5)->one();
// Find all assets and order them by their filename:
$assets = Asset::find()
    ->orderBy('filename')
    ->all();
```

If you want to define custom criteria parameters for your elements, you can do so by overriding
this method and returning a custom query class. For example,

```php
class Product extends Element
{
    public static function find()
    {
        // use ProductQuery instead of the default ElementQuery
        return new ProductQuery(get_called_class());
    }
}
```

You can also set default criteria parameters on the ElementQuery if you don’t have a need for
a custom query class. For example,

```php
class Customer extends ActiveRecord
{
    public static function find()
    {
        return parent::find()->limit(50);
    }
}
```




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L33-L36)



#### Returns

[craft\commerce\elements\db\OrderQuery](craft-commerce-elements-db-orderquery.md) – The newly created `\OrderQuery` instance.



### `getFieldLayout()`





Returns the field layout used by this element.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L41-L44)



#### Returns

[craft\models\FieldLayout](https://docs.craftcms.com/api/v3/craft-models-fieldlayout.html), [null](http://php.net/language.types.null)



### `getSearchKeywords()`





Returns the search keywords for a given search attribute.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L182-L210)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `hasContent()`





Returns whether elements of this type will be storing any data in the `content` table (titles or custom fields).








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L24-L27)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether elements of this type will be storing any data in the `content` table.





## Protected Methods

| Method                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------
| [defineActions()](craft-commerce-elements-traits-orderelementtrait.md#method-defineactions)                               | Defines the available element actions for a given source.
| [defineDefaultTableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definedefaulttableattributes) | Returns the list of table attribute keys that should be shown by default.
| [defineSearchableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definesearchableattributes)     | Defines which element attributes should be searchable.
| [defineSortOptions()](craft-commerce-elements-traits-orderelementtrait.md#method-definesortoptions)                       | Returns the sort options for the element type.
| [defineSources()](craft-commerce-elements-traits-orderelementtrait.md#method-definesources)                               | Defines the sources that elements of this type may belong to.
| [defineTableAttributes()](craft-commerce-elements-traits-orderelementtrait.md#method-definetableattributes)               | Defines all of the available columns that can be shown in table views.
| [tableAttributeHtml()](craft-commerce-elements-traits-orderelementtrait.md#method-tableattributehtml)                     | Returns the HTML that should be shown for a given attribute in Table View.

### `defineActions()`





Defines the available element actions for a given source.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L302-L344)


#### Arguments

- `$source` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The selected source’s key, if any.

#### Returns

[array](http://php.net/language.types.array) – The available element actions.



### `defineDefaultTableAttributes()`





Returns the list of table attribute keys that should be shown by default.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L390-L409)


#### Arguments

- `$source` ([string](http://php.net/language.types.string)) – The selected source’s key

#### Returns

[string](http://php.net/language.types.string)[] – The table attributes.



### `defineSearchableAttributes()`





Defines which element attributes should be searchable.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L158-L177)



#### Returns

[string](http://php.net/language.types.string)[] – The element attributes that should be searchable



### `defineSortOptions()`





Returns the sort options for the element type.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L414-L466)



#### Returns

[array](http://php.net/language.types.array) – The attributes that elements can be sorted by



### `defineSources()`





Defines the sources that elements of this type may belong to.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L216-L297)


#### Arguments

- `$context` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The context ('index' or 'modal').

#### Returns

[array](http://php.net/language.types.array) – The sources.



### `defineTableAttributes()`





Defines all of the available columns that can be shown in table views.








[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L349-L385)



#### Returns

[array](http://php.net/language.types.array) – The table attributes.



### `tableAttributeHtml()`





Returns the HTML that should be shown for a given attribute in Table View.



This method can be used to completely customize what actually shows up within the table’s body for a given
attribute, rather than simply showing the attribute’s raw value.

For example, if your elements have an `email` attribute that you want to wrap in a `mailto:` link, your
getTableAttributesHtml() method could do this:

```php
switch ($attribute) {
    case 'email':
        return $this->email ? Html::mailto(Html::encode($this->email)) : '';
    // ...
}
return parent::tableAttributeHtml($attribute);
```

::: warning
All untrusted text should be passed through `Html::encode()` to prevent XSS attacks.
:::

By default the following will be returned:

- If the attribute name is `link` or `uri`, it will be linked to the front-end URL.
- If the attribute is a custom field handle, it will pass the responsibility off to the field type.
- If the attribute value is a [DateTime](http://php.net/class.datetime) object, the date will be formatted with a localized date format.
- For anything else, it will output the attribute value as a string.




[View source](https://github.com/craftcms/commerce/blob/master/src/elements/traits/OrderElementTrait.php#L49-L153)


#### Arguments

- `$attribute` ([string](http://php.net/language.types.string)) – The attribute name.

#### Returns

[string](http://php.net/language.types.string) – The HTML that should be shown for a given attribute in Table View.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)






