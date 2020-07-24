---
title: craft\helpers\MigrationHelper
code:
  - php
  - twig
---

# MigrationHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\MigrationHelper](craft-helpers-migrationhelper.md)

Since

:   3.0.0



Migration utility methods.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php)






## Public Methods

| Method                                                                                               | Description
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------
| [doesForeignKeyExist()](craft-helpers-migrationhelper.md#method-doesforeignkeyexist)                 | Returns whether a foreign key exists.
| [doesIndexExist()](craft-helpers-migrationhelper.md#method-doesindexexist)                           | Returns whether an index exists.
| [dropAllForeignKeysOnTable()](craft-helpers-migrationhelper.md#method-dropallforeignkeysontable)     | Drops all the foreign keys on a table.
| [dropAllForeignKeysToTable()](craft-helpers-migrationhelper.md#method-dropallforeignkeystotable)     | Drops all the foreign keys that reference a table.
| [dropAllIndexesOnTable()](craft-helpers-migrationhelper.md#method-dropallindexesontable)             | Drops all the indexes on a table.
| [dropAllUniqueIndexesOnTable()](craft-helpers-migrationhelper.md#method-dropalluniqueindexesontable) | Drops all the unique indexes on a table.
| [dropForeignKey()](craft-helpers-migrationhelper.md#method-dropforeignkey)                           | Drops a foreign key.
| [dropForeignKeyIfExists()](craft-helpers-migrationhelper.md#method-dropforeignkeyifexists)           | Drops a foreign key if it exists.
| [dropIndex()](craft-helpers-migrationhelper.md#method-dropindex)                                     | Drops an index.
| [dropIndexIfExists()](craft-helpers-migrationhelper.md#method-dropindexifexists)                     | Drops an index if it exists.
| [dropTable()](craft-helpers-migrationhelper.md#method-droptable)                                     | Drops a table, its own foreign keys, and any foreign keys referencing it.
| [findForeignKey()](craft-helpers-migrationhelper.md#method-findforeignkey)                           | Returns whether a foreign key exists.
| [findForeignKeysTo()](craft-helpers-migrationhelper.md#method-findforeignkeysto)                     | Returns a list of all the foreign keys that point to a given table/column.
| [renameColumn()](craft-helpers-migrationhelper.md#method-renamecolumn)                               | Renames a column, while also updating any index and FK names that use the column.
| [renameTable()](craft-helpers-migrationhelper.md#method-renametable)                                 | Renames a table, while also updating its sequence, index, and FK names, as well as any other FK names pointing to the table.
| [restoreForeignKey()](craft-helpers-migrationhelper.md#method-restoreforeignkey)                     | Restores a foreign key.
| [restoreIndex()](craft-helpers-migrationhelper.md#method-restoreindex)                               | Restores an index.

### `doesForeignKeyExist()`





Returns whether a foreign key exists.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L67-L70)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])

#### Returns

[boolean](http://php.net/language.types.boolean)



### `doesIndexExist()`





Returns whether an index exists.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L95-L98)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$unique` ([boolean](http://php.net/language.types.boolean))
- `$db` ([craft\db\Connection](craft-db-connection.md), [null](http://php.net/language.types.null))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `dropAllForeignKeysOnTable()`





Drops all the foreign keys on a table.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L488-L512)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array) – An array of the foreign keys that were just dropped.



### `dropAllForeignKeysToTable()`





Drops all the foreign keys that reference a table.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L520-L537)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropAllIndexesOnTable()`





Drops all the indexes on a table.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L570-L584)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))

#### Returns

[array](http://php.net/language.types.array) – An array of the indexes that were just dropped.



### `dropAllUniqueIndexesOnTable()`

::: danger DEPRECATED
Deprecated in 3.1.0
:::




Drops all the unique indexes on a table.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L593-L603)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropForeignKey()`





Drops a foreign key.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L546-L560)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropForeignKeyIfExists()`





Drops a foreign key if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L79-L84)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropIndex()`

::: danger DEPRECATED
Deprecated in 3.1.0. Use [dropIndexIfExists()](craft-helpers-migrationhelper.md#method-dropindexifexists) instead.
:::




Drops an index.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L614-L617)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$unique` ([boolean](http://php.net/language.types.boolean))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropIndexIfExists()`





Drops an index if it exists.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L108-L124)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$unique` ([boolean](http://php.net/language.types.boolean))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `dropTable()`





Drops a table, its own foreign keys, and any foreign keys referencing it.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L460-L479)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `findForeignKey()`



Since

:   3.0.27



Returns whether a foreign key exists.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L31-L58)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])

#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The foreign key name, or null if it doesn't exist



### `findForeignKeysTo()`





Returns a list of all the foreign keys that point to a given table/column.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L429-L452)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string)) – The table the foreign keys should point to.
- `$column` ([string](http://php.net/language.types.string)) – The column the foreign keys should point to. Defaults to 'id'.

#### Returns

[array](http://php.net/language.types.array) – A list of the foreign keys pointing to that table/column.



### `renameColumn()`





Renames a column, while also updating any index and FK names that use the column.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L281-L420)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$oldName` ([string](http://php.net/language.types.string))
- `$newName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `renameTable()`





Renames a table, while also updating its sequence, index, and FK names, as well as any other FK names pointing to the table.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L133-L271)


#### Arguments

- `$oldName` ([string](http://php.net/language.types.string))
- `$newName` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `restoreForeignKey()`

::: danger DEPRECATED
Deprecated in 3.1.0
:::




Restores a foreign key.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L645-L648)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$refTable` ([string](http://php.net/language.types.string))
- `$refColumns` ([array](http://php.net/language.types.array))
- `$onUpdate` ([string](http://php.net/language.types.string))
- `$onDelete` ([string](http://php.net/language.types.string))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))




### `restoreIndex()`

::: danger DEPRECATED
Deprecated in 3.1.0
:::




Restores an index.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MigrationHelper.php#L628-L631)


#### Arguments

- `$tableName` ([string](http://php.net/language.types.string))
- `$columns` ([string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[])
- `$unique` ([boolean](http://php.net/language.types.boolean))
- `$migration` ([craft\db\Migration](craft-db-migration.md), [null](http://php.net/language.types.null))











