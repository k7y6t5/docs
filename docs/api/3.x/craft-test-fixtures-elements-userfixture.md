---
title: craft\test\fixtures\elements\UserFixture
code:
  - php
  - twig
---

# UserFixture

Type

:   Abstract Class

Namespace

:   craft\test\fixtures\elements

Inherits

:   [craft\test\fixtures\elements\UserFixture](craft-test-fixtures-elements-userfixture.md) &raquo;
[craft\test\fixtures\elements\ElementFixture](craft-test-fixtures-elements-elementfixture.md) &raquo;
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

:   3.2.0



Class UserFixture





[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/elements/UserFixture.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [data](https://www.yiiframework.com/doc/api/2.0/yii-test-baseactivefixture#$data-detail "Defined by yii\test\BaseActiveFixture")                 | [array](http://php.net/language.types.array) – The data rows.
| [dataDirectory](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#$dataDirectory-detail "Defined by yii\test\FileFixtureTrait") | [string](http://php.net/language.types.string) – The directory path or [path alias](guide:concept-aliases) that contains the fixture data
| [dataFile](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#$dataFile-detail "Defined by yii\test\FileFixtureTrait")           | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The file path or [path alias](guide:concept-aliases) of the data file that contains the fixture data to be returned by `\yii\test\getData()`.
| [db](https://www.yiiframework.com/doc/api/2.0/yii-test-dbfixture#$db-detail "Defined by yii\test\DbFixture")                                     | [yii\db\Connection](https://www.yiiframework.com/doc/api/2.0/yii-db-connection), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The DB connection object or the application component ID of the DB connection.
| [depends](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#$depends-detail "Defined by yii\test\Fixture")                               | [array](http://php.net/language.types.array) – The fixtures that this fixture depends on.
| [element](craft-test-fixtures-elements-elementfixture.md#element "Defined by craft\test\fixtures\elements\ElementFixture")                       | [craft\base\ElementInterface](craft-base-elementinterface.md), [null](http://php.net/language.types.null)
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#$iterator-detail "Defined by yii\base\ArrayAccessTrait")           | [ArrayIterator](http://php.net/class.arrayiterator) – An iterator for traversing the cookies in the collection.
| [modelClass](craft-test-fixtures-elements-userfixture.md#modelclass)                                                                             | [string](http://php.net/language.types.string) – The AR model class associated with this fixture.
| [tableName](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#$tableName-detail "Defined by yii\test\ActiveFixture")               | [string](http://php.net/language.types.string) – The name of the database table that this fixture is about.
| [tableSchema](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#$tableSchema-detail "Defined by yii\test\ActiveFixture")           | [yii\db\TableSchema](https://www.yiiframework.com/doc/api/2.0/yii-db-tableschema) – The schema information of the database table associated with this fixture.
| [unload](craft-test-fixtures-elements-elementfixture.md#unload "Defined by craft\test\fixtures\elements\ElementFixture")                         | [boolean](http://php.net/language.types.boolean) – Whether the fixture data should be unloaded

### `modelClass`



Type

:   [string](http://php.net/language.types.string)





The AR model class associated with this fixture.





[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/elements/UserFixture.php#L24)





## Protected Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------
| [siteIds](craft-test-fixtures-elements-elementfixture.md#siteids "Defined by craft\test\fixtures\elements\ElementFixture") | [array](http://php.net/language.types.array)



## Public Methods

| Method                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                   | Sets an object property to null.
| [afterLoad()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#afterLoad()-detail "Defined by yii\test\Fixture")                                     | This method is called AFTER all fixture data have been loaded for the current test.
| [afterUnload()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#afterUnload()-detail "Defined by yii\test\Fixture")                                 | This method is called AFTER all fixture data have been unloaded for the current test.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                     | Attaches a list of behaviors to the component.
| [beforeLoad()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#beforeLoad()-detail "Defined by yii\test\Fixture")                                   | This method is called BEFORE any fixture data is loaded for the current test.
| [beforeUnload()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture#beforeUnload()-detail "Defined by yii\test\Fixture")                               | This method is called BEFORE any fixture data is unloaded for the current test.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                               | Returns the fully qualified name of this class.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#count()-detail "Defined by yii\base\ArrayAccessTrait")                           | Returns the number of data items.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                     | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [generateElementQuery()](craft-test-fixtures-elements-elementfixture.md#method-generateelementquery "Defined by craft\test\fixtures\elements\ElementFixture") |
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                           | Returns all behaviors attached to this component.
| [getElement()](craft-test-fixtures-elements-elementfixture.md#method-getelement "Defined by craft\test\fixtures\elements\ElementFixture")                     | Get element model.
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#getIterator()-detail "Defined by yii\base\ArrayAccessTrait")               | Returns an iterator for traversing the data.
| [getModel()](craft-test-fixtures-elements-elementfixture.md#method-getmodel "Defined by craft\test\fixtures\elements\ElementFixture")                         | Returns the AR model by the specified model name.
| [getTableSchema()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#getTableSchema()-detail "Defined by yii\test\ActiveFixture")               |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a property is defined.
| [init()](craft-test-fixtures-elements-elementfixture.md#method-init "Defined by craft\test\fixtures\elements\ElementFixture")                                 | Initializes the object.
| [load()](craft-test-fixtures-elements-elementfixture.md#method-load "Defined by craft\test\fixtures\elements\ElementFixture")                                 | Loads the fixture.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                             | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetExists()-detail "Defined by yii\base\ArrayAccessTrait")             | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetGet()-detail "Defined by yii\base\ArrayAccessTrait")                   | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetSet()-detail "Defined by yii\base\ArrayAccessTrait")                   | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayaccesstrait#offsetUnset()-detail "Defined by yii\base\ArrayAccessTrait")               | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                               | Attaches an event handler to an event.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                     | Triggers an event.
| [unload()](craft-test-fixtures-elements-elementfixture.md#method-unload "Defined by craft\test\fixtures\elements\ElementFixture")                             | Unloads the fixture.



## Protected Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------
| [getData()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#getData()-detail "Defined by yii\test\ActiveFixture")         | Returns the fixture data.
| [isPrimaryKey()](craft-test-fixtures-elements-userfixture.md#method-isprimarykey)                                                         | See if an element's handle is a primary key.
| [loadData()](https://www.yiiframework.com/doc/api/2.0/yii-test-filefixturetrait#loadData()-detail "Defined by yii\test\FileFixtureTrait") | Returns the fixture data.
| [resetTable()](https://www.yiiframework.com/doc/api/2.0/yii-test-activefixture#resetTable()-detail "Defined by yii\test\ActiveFixture")   | Removes all existing data from the specified table and resets sequence number to 1 (if any).

### `isPrimaryKey()`





See if an element's handle is a primary key.








[View source](https://github.com/craftcms/cms/blob/master/src/test/fixtures/elements/UserFixture.php#L29-L32)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)








