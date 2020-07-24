---
title: craft\helpers\ArrayHelper
code:
  - php
  - twig
---

# ArrayHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\ArrayHelper](craft-helpers-arrayhelper.md) &raquo;
[yii\helpers\ArrayHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-arrayhelper) &raquo;
[yii\helpers\BaseArrayHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper)

Since

:   3.0.0



Class ArrayHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php)






## Public Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------
| [append()](craft-helpers-arrayhelper.md#method-append)                                                                                                  | Appends values to an array.
| [contains()](craft-helpers-arrayhelper.md#method-contains)                                                                                              | Returns whether the given array contains any values where a given key (the name of a sub-array key or sub-object property) is set to a given value.
| [ensureNonAssociative()](craft-helpers-arrayhelper.md#method-ensurenonassociative)                                                                      | Ensures an array is non-associative.
| [filter()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#filter()-detail "Defined by yii\helpers\BaseArrayHelper")               | Filters array according to rules specified.
| [filterByValue()](craft-helpers-arrayhelper.md#method-filterbyvalue)                                                                                    | Filters an array to only the values where a given key (the name of a sub-array key or sub-object property) is set to a given value.
| [filterEmptyStringsFromArray()](craft-helpers-arrayhelper.md#method-filteremptystringsfromarray)                                                        | Filters empty strings from an array.
| [firstKey()](craft-helpers-arrayhelper.md#method-firstkey)                                                                                              | Returns the first key in a given array.
| [firstValue()](craft-helpers-arrayhelper.md#method-firstvalue)                                                                                          | Returns the first value in a given array.
| [firstWhere()](craft-helpers-arrayhelper.md#method-firstwhere)                                                                                          | Returns the first value in a given array where a given key (the name of a sub-array key or sub-object property) is set to a given value.
| [getColumn()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#getColumn()-detail "Defined by yii\helpers\BaseArrayHelper")         | Returns the values of a specified column in an array.
| [getValue()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#getValue()-detail "Defined by yii\helpers\BaseArrayHelper")           | Retrieves the value of an array element or object property with the given key or property name.
| [htmlDecode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#htmlDecode()-detail "Defined by yii\helpers\BaseArrayHelper")       | Decodes HTML entities into the corresponding characters in an array of strings.
| [htmlEncode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#htmlEncode()-detail "Defined by yii\helpers\BaseArrayHelper")       | Encodes special characters in an array of strings into HTML entities.
| [index()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#index()-detail "Defined by yii\helpers\BaseArrayHelper")                 | Indexes and/or groups the array according to a specified key.
| [isAssociative()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#isAssociative()-detail "Defined by yii\helpers\BaseArrayHelper") | Returns a value indicating whether the given array is an associative array.
| [isIn()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#isIn()-detail "Defined by yii\helpers\BaseArrayHelper")                   | Check whether an array or [Traversable](http://php.net/class.traversable) contains an element.
| [isIndexed()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#isIndexed()-detail "Defined by yii\helpers\BaseArrayHelper")         | Returns a value indicating whether the given array is an indexed array.
| [isOrdered()](craft-helpers-arrayhelper.md#method-isordered)                                                                                            | Checks whether a numerically-indexed array's keys are in ascending order.
| [isSubset()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#isSubset()-detail "Defined by yii\helpers\BaseArrayHelper")           | Checks whether an array or [Traversable](http://php.net/class.traversable) is a subset of another array or [Traversable](http://php.net/class.traversable).
| [isTraversable()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#isTraversable()-detail "Defined by yii\helpers\BaseArrayHelper") | Checks whether a variable is an array or [Traversable](http://php.net/class.traversable).
| [keyExists()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#keyExists()-detail "Defined by yii\helpers\BaseArrayHelper")         | Checks if the given array contains the specified key.
| [map()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#map()-detail "Defined by yii\helpers\BaseArrayHelper")                     | Builds a map (key-value pairs) from a multidimensional array or an array of objects.
| [merge()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#merge()-detail "Defined by yii\helpers\BaseArrayHelper")                 | Merges two or more arrays into one recursively.
| [multisort()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#multisort()-detail "Defined by yii\helpers\BaseArrayHelper")         | Sorts an array of objects or arrays (with the same structure) by one or several keys.
| [prepend()](craft-helpers-arrayhelper.md#method-prepend)                                                                                                | Prepends values to an array.
| [prependOrAppend()](craft-helpers-arrayhelper.md#method-prependorappend)                                                                                | Prepends or appends a value to an array.
| [remove()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#remove()-detail "Defined by yii\helpers\BaseArrayHelper")               | Removes an item from an array and returns the value. If the key does not exist in the array, the default value will be returned instead.
| [removeValue()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#removeValue()-detail "Defined by yii\helpers\BaseArrayHelper")     | Removes items with matching values from the array and returns the removed items.
| [rename()](craft-helpers-arrayhelper.md#method-rename)                                                                                                  | Renames an item in an array. If the new key already exists in the array and the old key doesn’t, the array will be left unchanged.
| [setValue()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basearrayhelper#setValue()-detail "Defined by yii\helpers\BaseArrayHelper")           | Writes a value into an associative array at the key path specified.
| [toArray()](craft-helpers-arrayhelper.md#method-toarray)                                                                                                | Converts an object or an array of objects into an array.
| [where()](craft-helpers-arrayhelper.md#method-where)                                                                                                    | Filters an array to only the values where a given key (the name of a sub-array key or sub-object property) is set to a given value.
| [whereMultiple()](craft-helpers-arrayhelper.md#method-wheremultiple)                                                                                    | Filters an array to only the values where a list of keys is set to given values.
| [without()](craft-helpers-arrayhelper.md#method-without)                                                                                                | Returns a copy of an array without a given key.
| [withoutValue()](craft-helpers-arrayhelper.md#method-withoutvalue)                                                                                      | Returns a copy of an array without items with matching the given value.

### `append()`



Since

:   3.4.0



Appends values to an array.

This should be used instead of `array_push($array, ...$values)` when `$values` could be an empty array,
as PHP < 7.3 would throw an error in that case.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L90-L95)


#### Arguments

- `$array`
- `$values` (`mixed`) – The values to append.



---

#### Example

::: code
```php
ArrayHelper::append($array, ...$values);
```
:::


### `contains()`



Since

:   3.4.0



Returns whether the given array contains any values where a given key (the name of a
sub-array key or sub-object property) is set to a given value.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L247-L258)


#### Arguments

- `$array` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – The array that the value will be searched for in
- `$key` ([string](http://php.net/language.types.string), [Closure](http://php.net/class.closure)) – The column name or anonymous function which must be set to $value
- `$value` (`mixed`) – The value that $key should be compared with
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Whether a strict type comparison should be used when checking array element values against $value

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the value exists in the array



### `ensureNonAssociative()`



Since

:   3.1.17.1



Ensures an array is non-associative.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L349-L354)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))




### `filterByValue()`

::: danger DEPRECATED
Deprecated in 3.2.0. Use [where()](craft-helpers-arrayhelper.md#method-where) instead.
:::




Filters an array to only the values where a given key (the name of a
sub-array key or sub-object property) is set to a given value.

Array keys are preserved.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L125-L128)


#### Arguments

- `$array` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – The array that needs to be indexed or grouped
- `$key` ([string](http://php.net/language.types.string), [Closure](http://php.net/class.closure)) – The column name or anonymous function which result will be used to index the array
- `$value` (`mixed`) – The value that $key should be compared with
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Whether a strict type comparison should be used when checking array element values against $value

#### Returns

[array](http://php.net/language.types.array) – The filtered array



### `filterEmptyStringsFromArray()`





Filters empty strings from an array.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L266-L271)


#### Arguments

- `$arr` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `firstKey()`





Returns the first key in a given array.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L279-L287)


#### Arguments

- `$arr` ([array](http://php.net/language.types.array))

#### Returns

[string](http://php.net/language.types.string), [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The first key, whether that is a number (if the array is numerically indexed) or a string, or null if $arr isn’t an array, or is empty.



### `firstValue()`





Returns the first value in a given array.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L295-L298)


#### Arguments

- `$arr` ([array](http://php.net/language.types.array))

#### Returns

`mixed` – The first value, or null if $arr isn’t an array, or is empty.



### `firstWhere()`



Since

:   3.1.0



Returns the first value in a given array where a given key (the name of a
sub-array key or sub-object property) is set to a given value.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L223-L234)


#### Arguments

- `$array` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – The array that the value will be searched for in
- `$key` ([string](http://php.net/language.types.string), [Closure](http://php.net/class.closure)) – The column name or anonymous function which must be set to $value
- `$value` (`mixed`) – The value that $key should be compared with
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Whether a strict type comparison should be used when checking array element values against $value

#### Returns

`mixed` – The value, or null if it can't be found



### `isOrdered()`



Since

:   3.4.0



Checks whether a numerically-indexed array's keys are in ascending order.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L363-L382)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `prepend()`



Since

:   3.4.0



Prepends values to an array.

This should be used instead of `array_unshift($array, ...$values)` when `$values` could be an empty array,
as PHP < 7.3 would throw an error in that case.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L68-L73)


#### Arguments

- `$array`
- `$values` (`mixed`) – The values to prepend.



---

#### Example

::: code
```php
ArrayHelper::prepend($array, ...$values);
```
:::


### `prependOrAppend()`





Prepends or appends a value to an array.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L104-L111)


#### Arguments

- `$array`
- `$value` (`mixed`) – The value to prepend/append to the array
- `$prepend` ([boolean](http://php.net/language.types.boolean)) – `true` will prepend the value; `false` will append it




### `rename()`





Renames an item in an array. If the new key already exists in the array and the old key doesn’t,
the array will be left unchanged.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L309-L314)


#### Arguments

- `$array` ([array](http://php.net/language.types.array)) – The array to extract value from
- `$oldKey` ([string](http://php.net/language.types.string)) – Old key name of the array element
- `$newKey` ([string](http://php.net/language.types.string)) – New key name of the array element
- `$default` (`mixed`) – The default value to be set if the specified old key does not exist




### `toArray()`





Converts an object or an array of objects into an array.








[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L23-L51)


#### Arguments

- `$object` ([object](http://php.net/language.types.object), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string)) – The object to be converted into an array
- `$properties` ([array](http://php.net/language.types.array)) – A mapping from object class names to the properties that need to put into the resulting arrays.
The properties specified for each class is an array of the following format:

```php
[
    'app\models\Post' => [
        'id',
        'title',
        // the key name in array result => property name
        'createTime' => 'created_at',
        // the key name in array result => anonymous function
        'length' => function ($post) {
            return strlen($post->content);
        },
    ],
]
```

The result of `ArrayHelper::toArray($post, $properties)` could be like the following:

```php
[
    'id' => 123,
    'title' => 'test',
    'createTime' => '2013-01-01 12:00AM',
    'length' => 301,
]
```
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to recursively converts properties which are objects into arrays.

#### Returns

[array](http://php.net/language.types.array) – The array representation of the object



### `where()`





Filters an array to only the values where a given key (the name of a
sub-array key or sub-object property) is set to a given value.

Array keys are preserved.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L141-L154)


#### Arguments

- `$array` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – The array that needs to be indexed or grouped
- `$key` ([string](http://php.net/language.types.string), [Closure](http://php.net/class.closure)) – The column name or anonymous function which result will be used to index the array
- `$value` (`mixed`) – The value that $key should be compared with
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Whether a strict type comparison should be used when checking array element values against $value

#### Returns

[array](http://php.net/language.types.array) – The filtered array



### `whereMultiple()`



Since

:   3.3.0



Filters an array to only the values where a list of keys is set to given values.

Array keys are preserved.

This method is most useful when, given an array of elements, it is needed to filter
them by multiple conditions.

Below are some usage examples,

```php
// Entries with certain entry types
$filtered = \craft\helpers\ArrayHelper::whereMultiple($entries, ['typeId' => [2, 4]]);

// Entries with multiple conditions
$filtered = \craft\helpers\ArrayHelper::whereMultiple($entries, ['typeId' => 2, 'authorId' => [1, 2]);

// Testing for an array value
$filtered = \craft\helpers\ArrayHelper::whereMultiple($asset, ['focalPoint' => [['x' => 0.5, 'y' => 0.5]]]);

```


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L183-L210)


#### Arguments

- `$array` ([array](http://php.net/language.types.array), [Traversable](http://php.net/class.traversable)) – The array that needs to be indexed or grouped
- `$conditions` ([array](http://php.net/language.types.array)) – An array of key/value pairs of allowed values. Values can be arrays to allow multiple values.
- `$strict` ([boolean](http://php.net/language.types.boolean)) – Whether a strict type comparison should be used when checking array element values against $value

#### Returns

[array](http://php.net/language.types.array) – The filtered array



### `without()`



Since

:   3.0.9



Returns a copy of an array without a given key.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L324-L328)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))
- `$key` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)



### `withoutValue()`





Returns a copy of an array without items with matching the given value.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ArrayHelper.php#L337-L341)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))
- `$value` (`mixed`)

#### Returns

[array](http://php.net/language.types.array)










