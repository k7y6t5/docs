---
title: craft\db\PrimaryReplicaTrait
code:
  - php
  - twig
---

# PrimaryReplicaTrait

Type

:   Trait

Namespace

:   craft\db

Implemented by

:   [craft\db\Connection](craft-db-connection.md)

Since

:   3.4.25









[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php)






## Public Methods

| Method                                                                  | Description
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------
| [getPrimary()](craft-db-primaryreplicatrait.md#method-getprimary)       | Returns the currently active primary connection.
| [getPrimaryPdo()](craft-db-primaryreplicatrait.md#method-getprimarypdo) | Returns the PDO instance for the currently active primary connection.
| [getReplica()](craft-db-primaryreplicatrait.md#method-getreplica)       | Returns the currently active replica connection.
| [getReplicaPdo()](craft-db-primaryreplicatrait.md#method-getreplicapdo) | Returns the PDO instance for the currently active replica connection.
| [usePrimary()](craft-db-primaryreplicatrait.md#method-useprimary)       | Executes the provided callback by using the primary connection.

### `getPrimary()`





Returns the currently active primary connection.

If this method is called for the first time, it will try to open a primary connection.


[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php#L242-L245)



#### Returns

[craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null) – The currently active primary connection. `null` is returned if no primary connection
is available.



### `getPrimaryPdo()`





Returns the PDO instance for the currently active primary connection.

This method will open the primary DB connection and then return `\craft\db\pdo`.


[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php#L215-L218)



#### Returns

[PDO](http://php.net/class.pdo) – The PDO instance for the currently active primary connection.



### `getReplica()`





Returns the currently active replica connection.

If this method is called for the first time, it will try to open a replica connection when `\craft\db\enableReplicas`
is true.


[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php#L230-L233)


#### Arguments

- `$fallbackToPrimary` ([boolean](http://php.net/language.types.boolean)) – Whether to return the primary connection if no replica connections are
available.

#### Returns

[craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null) – The currently active replica connection. `null` is returned if no replica connections
are available and `$fallbackToPrimary` is false.



### `getReplicaPdo()`





Returns the PDO instance for the currently active replica connection.

When `\craft\db\enableReplicas` is true, one of the replicas will be used for read queries, and its PDO instance
will be returned by this method.


[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php#L204-L207)


#### Arguments

- `$fallbackToPrimary` ([boolean](http://php.net/language.types.boolean)) – Whether to return the primary PDO if no replica connections are available.

#### Returns

[PDO](http://php.net/class.pdo), [null](http://php.net/language.types.null) – The PDO instance for the currently active replica connection. `null` is returned if no
replica connections are available and `$fallbackToPrimary` is false.



### `usePrimary()`





Executes the provided callback by using the primary connection.

This method is provided so that you can temporarily force using the primary connection to perform
DB operations even if they are read queries. For example,

```php
$result = $db->usePrimary(function ($db) {
    return $db->createCommand('SELECT * FROM user LIMIT 1')->queryOne();
});
```


[View source](https://github.com/craftcms/cms/blob/master/src/db/PrimaryReplicaTrait.php#L264-L267)


#### Arguments

- `$callback` ([callable](http://php.net/language.types.callable)) – A PHP callable to be executed by this method. Its signature is
`function (Connection $db)`. Its return value will be returned by this method.

#### Returns

`mixed` – The return value of the callback

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if there is any exception thrown from the callback








