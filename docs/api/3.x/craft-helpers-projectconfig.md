---
title: craft\helpers\ProjectConfig
code:
  - php
  - twig
---

# ProjectConfig

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\ProjectConfig](craft-helpers-projectconfig.md)

Since

:   3.1.0



Class ProjectConfig





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php)






## Public Methods

| Method                                                                                               | Description
| ---------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [cleanupConfig()](craft-helpers-projectconfig.md#method-cleanupconfig)                               | Traverse and clean a config array, removing empty values and sorting keys.
| [ensureAllFieldsProcessed()](craft-helpers-projectconfig.md#method-ensureallfieldsprocessed)         | Ensures all field config changes are processed immediately in a safe manner.
| [ensureAllSitesProcessed()](craft-helpers-projectconfig.md#method-ensureallsitesprocessed)           | Ensure all site config changes are processed immediately in a safe manner.
| [ensureAllUserGroupsProcessed()](craft-helpers-projectconfig.md#method-ensureallusergroupsprocessed) | Ensure all user group config changes are processed immediately in a safe manner.
| [flattenConfigArray()](craft-helpers-projectconfig.md#method-flattenconfigarray)                     | Flatten a config array to a dot.based.key array.
| [packAssociativeArray()](craft-helpers-projectconfig.md#method-packassociativearray)                 | Prepares an associative array for storage in project config, so that the order of its items will be remembered.
| [packAssociativeArrays()](craft-helpers-projectconfig.md#method-packassociativearrays)               | Loops through an array, and prepares any nested associative arrays for storage in project config, so that the order of its items will be remembered.
| [reset()](craft-helpers-projectconfig.md#method-reset)                                               | Resets the static memoization variables.
| [unpackAssociativeArray()](craft-helpers-projectconfig.md#method-unpackassociativearray)             | Restores an array that was prepared via [packAssociativeArray()](craft-helpers-projectconfig.md#method-packassociativearray) to its original form.
| [unpackAssociativeArrays()](craft-helpers-projectconfig.md#method-unpackassociativearrays)           | Loops through an array, and restores any arrays that were prepared via [packAssociativeArray()](craft-helpers-projectconfig.md#method-packassociativearray) to their original form.

### `cleanupConfig()`



Since

:   3.1.14



Traverse and clean a config array, removing empty values and sorting keys.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L135-L170)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Config array to clean

#### Returns

[array](http://php.net/language.types.array)

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if config contains unexpected data.


### `ensureAllFieldsProcessed()`





Ensures all field config changes are processed immediately in a safe manner.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L46-L66)






### `ensureAllSitesProcessed()`





Ensure all site config changes are processed immediately in a safe manner.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L71-L91)






### `ensureAllUserGroupsProcessed()`





Ensure all user group config changes are processed immediately in a safe manner.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L96-L113)






### `flattenConfigArray()`



Since

:   3.4.0



Flatten a config array to a dot.based.key array.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L307-L318)


#### Arguments

- `$array`
- `$path`
- `$result`




### `packAssociativeArray()`



Since

:   3.4.0



Prepares an associative array for storage in project config, so that the order of its items will be remembered.

::: tip
Use [unpackAssociativeArray()](craft-helpers-projectconfig.md#method-unpackassociativearray) to restore the array to its original form when fetching the value from
the Project Config.
:::




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L219-L247)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to process nested associative arrays as well

#### Returns

[array](http://php.net/language.types.array)


---

#### Example

::: code
```php
$myArray = [
    'foo' => 1,
    'bar' => 2,
];

// "Pack" the array so it doesn't get reordered to [bar=>2,foo=>1]
$packedArray = \craft\helpers\ProjectConfig::packAssociativeArray($myArray);

Craft::$app->projectConfig->set($configKey, $packedArray);
```
:::


### `packAssociativeArrays()`



Since

:   3.4.0



Loops through an array, and prepares any nested associative arrays for storage in project config,
so that the order of its items will be remembered.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L181-L190)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to process nested associative arrays as well

#### Returns

[array](http://php.net/language.types.array)



### `reset()`





Resets the static memoization variables.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L120-L125)



#### Returns

`void`



### `unpackAssociativeArray()`



Since

:   3.4.0



Restores an array that was prepared via [packAssociativeArray()](craft-helpers-projectconfig.md#method-packassociativearray) to its original form.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L276-L297)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to process nested associative arrays as well

#### Returns

[array](http://php.net/language.types.array)



### `unpackAssociativeArrays()`



Since

:   3.4.0



Loops through an array, and restores any arrays that were prepared via [packAssociativeArray()](craft-helpers-projectconfig.md#method-packassociativearray)
to their original form.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/ProjectConfig.php#L257-L266)


#### Arguments

- `$array` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)










