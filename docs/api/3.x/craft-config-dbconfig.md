---
title: craft\config\DbConfig
code:
  - php
  - twig
---

# DbConfig

Type

:   Class

Namespace

:   craft\config

Inherits

:   [craft\config\DbConfig](craft-config-dbconfig.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



DB config class





[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php)


## Public Properties

| Property                                            | Description
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [attributes](craft-config-dbconfig.md#attributes)   | [array](http://php.net/language.types.array) – An array of key => value pairs of PDO attributes to pass into the PDO constructor.
| [charset](craft-config-dbconfig.md#charset)         | [string](http://php.net/language.types.string) – The charset to use when creating tables.
| [database](craft-config-dbconfig.md#database)       | [string](http://php.net/language.types.string) – The name of the database to select.
| [driver](craft-config-dbconfig.md#driver)           | [string](http://php.net/language.types.string) – The database driver to use.
| [dsn](craft-config-dbconfig.md#dsn)                 | [string](http://php.net/language.types.string) – The Data Source Name (“DSN”) that tells Craft how to connect to the database.
| [password](craft-config-dbconfig.md#password)       | [string](http://php.net/language.types.string) – The database password to connect with.
| [port](craft-config-dbconfig.md#port)               | [integer](http://php.net/language.types.integer) – The database server port.
| [schema](craft-config-dbconfig.md#schema)           | [string](http://php.net/language.types.string) – The schema that Postgres is configured to use by default (PostgreSQL only).
| [server](craft-config-dbconfig.md#server)           | [string](http://php.net/language.types.string) – The database server name or IP address.
| [tablePrefix](craft-config-dbconfig.md#tableprefix) | [string](http://php.net/language.types.string) – If you're sharing Craft installs in a single database (MySQL) or a single database and using a shared schema (PostgreSQL), then you can set a table prefix here to avoid table naming conflicts per install.
| [unixSocket](craft-config-dbconfig.md#unixsocket)   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – MySQL only.
| [url](craft-config-dbconfig.md#url)                 | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The database connection URL, if one was provided by your hosting environment.
| [user](craft-config-dbconfig.md#user)               | [string](http://php.net/language.types.string) – The database username to connect with.

### `attributes`



Type

:   [array](http://php.net/language.types.array)



An array of key => value pairs of PDO attributes to pass into the PDO constructor.

For example, when using the MySQL PDO driver (http://php.net/manual/en/ref.pdo-mysql.php),
if you wanted to enable a SSL database connection (assuming SSL is enabled in MySQL
(https://dev.mysql.com/doc/refman/5.5/en/using-secure-connections.html) and `'user'`
can connect via SSL, you'd set these:

```php
[
    PDO::MYSQL_ATTR_SSL_KEY    => '/path/to/my/client-key.pem',
    PDO::MYSQL_ATTR_SSL_CERT   => '/path/to/my/client-cert.pem',
    PDO::MYSQL_ATTR_SSL_CA     => '/path/to/my/ca-cert.pem',
],
```



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L50)



### `charset`



Type

:   [string](http://php.net/language.types.string)



The charset to use when creating tables.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L54)



### `database`



Type

:   [string](http://php.net/language.types.string)



The name of the database to select.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L117)



### `driver`



Type

:   [string](http://php.net/language.types.string)



The database driver to use. Either 'mysql' for MySQL or 'pgsql' for PostgreSQL.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L99)



### `dsn`



Type

:   [string](http://php.net/language.types.string)



The Data Source Name (“DSN”) that tells Craft how to connect to the database.

DSNs should begin with a driver prefix (`mysql:` or `pgsql:`), followed by driver-specific parameters.
For example, `mysql:host=127.0.0.1;port=3306;dbname=acme_corp`.

- MySQL parameters: http://php.net/manual/en/ref.pdo-mysql.connection.php
- PostgreSQL parameters: http://php.net/manual/en/ref.pdo-pgsql.connection.php



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L64)



### `password`



Type

:   [string](http://php.net/language.types.string)



The database password to connect with.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L68)



### `port`



Type

:   [integer](http://php.net/language.types.integer)



The database server port. Defaults to 3306 for MySQL and 5432 for PostgreSQL.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L107)



### `schema`



Type

:   [string](http://php.net/language.types.string)



The schema that Postgres is configured to use by default (PostgreSQL only).

See also https://www.postgresql.org/docs/8.2/static/ddl-schemas.html

[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L73)



### `server`



Type

:   [string](http://php.net/language.types.string)



The database server name or IP address. Usually `localhost` or `127.0.0.1`.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L103)



### `tablePrefix`



Type

:   [string](http://php.net/language.types.string)



If you're sharing Craft installs in a single database (MySQL) or a single
database and using a shared schema (PostgreSQL), then you can set a table
prefix here to avoid table naming conflicts per install. This can be no more than 5
characters, and must be all lowercase.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L80)



### `unixSocket`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



MySQL only. If this is set, then the CLI connection string (used for yiic) will
connect to the Unix socket, instead of the server and port. If this is
specified, then 'server' and 'port' settings are ignored.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L113)



### `url`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The database connection URL, if one was provided by your hosting environment.

If this is set, the values for [driver](craft-config-dbconfig.md#driver), [user](craft-config-dbconfig.md#user), [database](craft-config-dbconfig.md#database), [server](craft-config-dbconfig.md#server), [port](craft-config-dbconfig.md#port), and [database](craft-config-dbconfig.md#database)
will be extracted from it.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L95)



### `user`



Type

:   [string](http://php.net/language.types.string)



The database username to connect with.



[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L84)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-config-dbconfig.md#method-init)                                                                                            | Initializes the object.
| [updateDsn()](craft-config-dbconfig.md#method-updatedsn)                                                                                  | Updates the DSN string based on the config setting values.

### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L123-L142)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `updateDsn()`

::: danger DEPRECATED
Deprecated in 3.4.0.
:::




Updates the DSN string based on the config setting values.




[View source](https://github.com/craftcms/cms/blob/master/src/config/DbConfig.php#L150-L153)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if [driver](craft-config-dbconfig.md#driver) isn’t set to `mysql` or `pgsql`.






## Constants

| Constant       | Description
| -------------- | -----------
| `DRIVER_MYSQL` |
| `DRIVER_PGSQL` |



