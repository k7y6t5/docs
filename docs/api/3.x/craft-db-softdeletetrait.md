---
title: craft\db\SoftDeleteTrait
code:
  - php
  - twig
---

# SoftDeleteTrait

Type

:   Trait

Namespace

:   craft\db

Implemented by

:   [craft\records\CategoryGroup](craft-records-categorygroup.md), [craft\records\EntryType](craft-records-entrytype.md), [craft\records\FieldLayout](craft-records-fieldlayout.md), [craft\records\Section](craft-records-section.md), [craft\records\Site](craft-records-site.md), [craft\records\SiteGroup](craft-records-sitegroup.md), [craft\records\Structure](craft-records-structure.md), [craft\records\TagGroup](craft-records-taggroup.md), [craft\records\Volume](craft-records-volume.md)

Since

:   3.1.0



Soft-delete trait.

This should be implemented by Active Record classes that wish to support soft deletes.
With it, Active Query objects returned by [yii\db\ActiveRecord::find()](https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord#find()-detail) will exclude
any soft-deleted rows.

The database table should be created with a `dateDeleted` column (type `datetime null`).

```php
'dateDeleted' => $this->dateTime()->null()
```

To fetch all rows, including soft-deleted ones, call [findWithTrashed()](craft-db-softdeletetrait.md#method-findwithtrashed) instead of `find()`.

```php
$records = MyActiveRecord::findWithTrashed()->all();
```

To fetch only soft-deleted rows, call [findTrashed()](craft-db-softdeletetrait.md#method-findtrashed) instead of `find()`.

```php
$records = MyActiveRecord::findTrashed()->all();
```

Active Record classes that use this trait and also have their own
[behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) should rename this trait’s
[behaviors()](craft-db-softdeletetrait.md#method-behaviors) method when using the trait, and then call it from the `behaviors()` method.

```php
use SoftDeleteTrait {
    behaviors as softDeleteBehaviors;
}

public function behaviors()
{
    $behaviors = $this->softDeleteBehaviors();
    $behaviors['myBehavior'] = MyBehavior::class;
    return $behaviors;
}
```

Active Record classes that implement a custom `find()` method will need to manually
add a condition to exclude soft-deleted rows.

```php
public static function find()
{
    // @var MyActiveQuery $query
    $query = Craft::createObject(MyActiveQuery::class, [static::class]);
    $query->where(['dateDeleted' => null]);
    return $query;
}
```



[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php)






## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | -----------------------------------------------------------------
| [beforeRestore()](craft-db-softdeletetrait.md#method-beforerestore)     | This method is called at the beginning of restoring a record.
| [behaviors()](craft-db-softdeletetrait.md#method-behaviors)             | Returns a list of behaviors that this component should behave as.
| [find()](craft-db-softdeletetrait.md#method-find)                       |
| [findTrashed()](craft-db-softdeletetrait.md#method-findtrashed)         |
| [findWithTrashed()](craft-db-softdeletetrait.md#method-findwithtrashed) |

### `beforeRestore()`





This method is called at the beginning of restoring a record.




[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php#L131-L135)






### `behaviors()`



Since

:   3.4.0



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

Note that a behavior class must extend from `\craft\db\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using `\craft\db\getBehavior()`
or be detached using `\craft\db\detachBehavior()`. Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php#L114-L126)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `find()`










[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php#L82-L93)



#### Returns

[yii\db\ActiveQuery](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery)



### `findTrashed()`










[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php#L106-L109)



#### Returns

[yii\db\ActiveQuery](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery)



### `findWithTrashed()`










[View source](https://github.com/craftcms/cms/blob/master/src/db/SoftDeleteTrait.php#L98-L101)



#### Returns

[yii\db\ActiveQuery](https://www.yiiframework.com/doc/api/2.0/yii-db-activequery)









