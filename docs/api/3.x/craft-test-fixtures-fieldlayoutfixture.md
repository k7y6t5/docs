---
title: craft\test\fixtures\FieldLayoutFixture
code:
  - php
  - twig
---

# FieldLayoutFixture

Type

:   Abstract Class

Namespace

:   craft\test\fixtures

Inherits

:   [craft\test\fixtures\FieldLayoutFixture](craft-test-fixtures-fieldlayoutfixture.md) &raquo;
[craft\test\Fixture](craft-test-fixture.md) &raquo;
[yii\test\ActiveFixture](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture) &raquo;
[yii\test\BaseActiveFixture](https://www.yiiframework.com/doc/api/2.0/yii-test-baseactivefixture) &raquo;
[yii\test\DbFixture](https://www.yiiframework.com/doc/api/2.0/yii-test-dbfixture) &raquo;
[yii\test\Fixture](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [Countable](http://php.net/class.countable), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Uses traits

:   [yii\base\ArrayAccessTrait](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait), [yii\test\FileFixtureTrait](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait)

Since

:   3.2



Class FieldLayoutFixture.





[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [data](https://www.yiiframework.com/doc/api/2.0/yii-test-baseactivefixture#$data-detail "Defined by yii\test\BaseActiveFixture")                 | [array](http://php.net/language.types.array) – The data rows.
| [dataDirectory](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#$dataDirectory-detail "Defined by yii\test\FileFixtureTrait") | [string](http://php.net/language.types.string) – The directory path or [path alias](guide:concept-aliases) that contains the fixture data
| [dataFile](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#$dataFile-detail "Defined by yii\test\FileFixtureTrait")           | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The file path or [path alias](guide:concept-aliases) of the data file that contains the fixture data to be returned by `\yii\test\getData()`.
| [db](https://www.yiiframework.com/doc/api/2.0/yii-test-dbfixture#$db-detail "Defined by yii\test\DbFixture")                                     | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The DB connection object or the application component ID of the DB connection.
| [depends](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#$depends-detail "Defined by yii\test\Fixture")                               | [array](http://php.net/language.types.array) – The fixtures that this fixture depends on.
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#$iterator-detail "Defined by yii\base\ArrayAccessTrait")           | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the cookies in the collection.
| [modelClass](https://www.yiiframework.com/doc/api/2.0/yii-test-baseactivefixture#$modelClass-detail "Defined by yii\test\BaseActiveFixture")     | [string](http://php.net/language.types.string) – The AR model class associated with this fixture.
| [tableName](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#$tableName-detail "Defined by yii\test\ActiveFixture")               | [string](http://php.net/language.types.string) – The name of the database table that this fixture is about.
| [tableSchema](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#$tableSchema-detail "Defined by yii\test\ActiveFixture")           | [yii\db\TableSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema) – The schema information of the database table associated with this fixture.



## Protected Properties

| Property                                                         | Description
| ---------------------------------------------------------------- | --------------------------------------------
| [ids](craft-test-fixture.md#ids "Defined by craft\test\Fixture") | [array](http://php.net/language.types.array)



## Public Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                         | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                         | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")               | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                           | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                       | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                           | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                       | Sets an object property to null.
| [afterLoad()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#afterLoad()-detail "Defined by yii\test\Fixture")                         | This method is called AFTER all fixture data have been loaded for the current test.
| [afterUnload()](craft-test-fixtures-fieldlayoutfixture.md#method-afterunload)                                                                     | Unloading fixtures removes fields and possible tables - so we need to refresh the DB Schema before our parent calls.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")           | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")         | Attaches a list of behaviors to the component.
| [beforeLoad()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#beforeLoad()-detail "Defined by yii\test\Fixture")                       | This method is called BEFORE any fixture data is loaded for the current test.
| [beforeUnload()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#beforeUnload()-detail "Defined by yii\test\Fixture")                   | This method is called BEFORE any fixture data is unloaded for the current test.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                     | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                   | Returns the fully qualified name of this class.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#count()-detail "Defined by yii\base\ArrayAccessTrait")               | Returns the number of data items.
| [deleteAllByFieldHandle()](craft-test-fixtures-fieldlayoutfixture.md#method-deleteallbyfieldhandle)                                               | Attempt to delete all fields and field layout by a field handle.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")           | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")         | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")         | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [ensureColumnIntegrity()](craft-test-fixture.md#method-ensurecolumnintegrity "Defined by craft\test\Fixture")                                     |
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                 | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")               | Returns all behaviors attached to this component.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#getIterator()-detail "Defined by yii\base\ArrayAccessTrait")   | Returns an iterator for traversing the data.
| [getModel()](https://www.yiiframework.com/doc/api/2.0/yii-test-baseactivefixture#getModel()-detail "Defined by yii\test\BaseActiveFixture")       | Returns the AR model by the specified model name.
| [getTableSchema()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#getTableSchema()-detail "Defined by yii\test\ActiveFixture")   |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")       | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                   | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                             | Initializes the object.
| [load()](craft-test-fixtures-fieldlayoutfixture.md#method-load)                                                                                   |
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                 | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetExists()-detail "Defined by yii\base\ArrayAccessTrait") | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetGet()-detail "Defined by yii\base\ArrayAccessTrait")       | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetSet()-detail "Defined by yii\base\ArrayAccessTrait")       | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetUnset()-detail "Defined by yii\base\ArrayAccessTrait")   | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                   | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                         | Triggers an event.
| [unload()](craft-test-fixtures-fieldlayoutfixture.md#method-unload)                                                                               |

### `afterUnload()`





Unloading fixtures removes fields and possible tables - so we need to refresh the DB Schema before our parent calls.

Craft::$app->getDb()->createCommand()->checkIntegrity(true);


[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L133-L138)




#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)


### `deleteAllByFieldHandle()`





Attempt to delete all fields and field layout by a field handle.

1. Get a field by handle
2. Get its layout
3. Traverse down the data (getTabs() and then on each tab getFields()
4. Delete all fields.
5. Delete the field layout.


[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L154-L179)


#### Arguments

- `$fieldHandle` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)


### `load()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L40-L104)




#### Throws

- [Throwable](http://php.net/class.throwable)
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `unload()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L110-L125)



#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [Throwable](http://php.net/class.throwable)




## Protected Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------
| [extractTabsFromFieldLayout()](craft-test-fixtures-fieldlayoutfixture.md#method-extracttabsfromfieldlayout)                               |
| [getData()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#getData()-detail "Defined by yii\test\ActiveFixture")         | Returns the fixture data.
| [getTabsForFieldLayout()](craft-test-fixtures-fieldlayoutfixture.md#method-gettabsforfieldlayout)                                         |
| [linkFieldToLayout()](craft-test-fixtures-fieldlayoutfixture.md#method-linkfieldtolayout)                                                 |
| [loadData()](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#loadData()-detail "Defined by yii\test\FileFixtureTrait") | Returns the fixture data.
| [resetTable()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#resetTable()-detail "Defined by yii\test\ActiveFixture")   | Removes all existing data from the specified table and resets sequence number to 1 (if any).
| [throwModelError()](craft-test-fixtures-fieldlayoutfixture.md#method-throwmodelerror)                                                     |

### `extractTabsFromFieldLayout()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L208-L218)


#### Arguments

- `$fieldLayout` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `getTabsForFieldLayout()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L185-L202)


#### Arguments

- `$tabs` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `linkFieldToLayout()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L228-L244)


#### Arguments

- `$link` ([array](http://php.net/language.types.array))
- `$field` ([craft\base\Field](craft-base-field.md))
- `$fieldLayout` ([craft\models\FieldLayout](craft-models-fieldlayout.md))
- `$tab` ([craft\models\FieldLayoutTab](craft-models-fieldlayouttab.md))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\db\Exception](https://www.yiiframework.com/doc/api/2.0/yii-db-exception)


### `throwModelError()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/FieldLayoutFixture.php#L250-L258)


#### Arguments

- `$model` ([craft\base\Model](craft-base-model.md))


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)







