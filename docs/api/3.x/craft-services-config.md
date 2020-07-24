---
title: craft\services\Config
code:
  - php
  - twig
---

# Config

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Config](craft-services-config.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



The Config service provides APIs for retrieving the values of Craft’s [config settings](http://craftcms.com/docs/config-settings),
as well as the values of any plugins’ config settings.

An instance of the Config service is globally accessible in Craft via [`Craft::$app->config`](craft-base-applicationtrait.md#method-getconfig).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------
| [appDefaultsDir](craft-services-config.md#appdefaultsdir)                                                                  | [string](http://php.net/language.types.string) – The path to the directory containing the default application config settings
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [configDir](craft-services-config.md#configdir)                                                                            | [string](http://php.net/language.types.string) – The path to the config directory
| [db](craft-services-config.md#db)                                                                                          | [craft\config\DbConfig](craft-config-dbconfig.md)
| [dotEnvPath](craft-services-config.md#dotenvpath)                                                                          | [string](http://php.net/language.types.string)
| [env](craft-services-config.md#env)                                                                                        | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The environment ID Craft is currently running in.
| [general](craft-services-config.md#general)                                                                                | [craft\config\GeneralConfig](craft-config-generalconfig.md)

### `appDefaultsDir`



Type

:   [string](http://php.net/language.types.string)



The path to the directory containing the default application config settings



[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L61)



### `configDir`



Type

:   [string](http://php.net/language.types.string)



The path to the config directory



[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L56)



### `db`



Type

:   [craft\config\DbConfig](craft-config-dbconfig.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php)



### `dotEnvPath`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php)



### `env`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The environment ID Craft is currently running in.





[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L51)


---

#### Example

::: code
```php
$env = Craft::$app->config->env;
```
```twig
{% if craft.app.config.env == 'production' %}
    {% include "_includes/ga" %}
{% endif %}
```
:::


### `general`



Type

:   [craft\config\GeneralConfig](craft-config-generalconfig.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getConfigFilePath()](craft-services-config.md#method-getconfigfilepath)                                                                    | Returns the path to a config file.
| [getConfigFromFile()](craft-services-config.md#method-getconfigfromfile)                                                                    | Loads a config file from the config/ folder, checks if it's a multi-environment config, and returns the values.
| [getConfigSettings()](craft-services-config.md#method-getconfigsettings)                                                                    | Returns all of the config settings for a given category.
| [getDb()](craft-services-config.md#method-getdb)                                                                                            | Returns the DB config settings.
| [getDotEnvPath()](craft-services-config.md#method-getdotenvpath)                                                                            | Returns the path to the .env file (regardless of whether it exists).
| [getGeneral()](craft-services-config.md#method-getgeneral)                                                                                  | Returns the general config settings.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [setDotEnvVar()](craft-services-config.md#method-setdotenvvar)                                                                              | Sets an environment variable value in the project's .env file.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `getConfigFilePath()`





Returns the path to a config file.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L175-L178)


#### Arguments

- `$filename` ([string](http://php.net/language.types.string)) – The filename (sans .php extension)

#### Returns

[string](http://php.net/language.types.string)



### `getConfigFromFile()`





Loads a config file from the config/ folder, checks if it's a multi-environment
config, and returns the values.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L194-L224)


#### Arguments

- `$filename`

#### Returns

[array](http://php.net/language.types.array)


---

#### Example

::: code
```php
// get the values defined in config/foo.php
$settings = Craft::$app->config->getConfigFromFile('foo');
```
:::


### `getConfigSettings()`





Returns all of the config settings for a given category.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L81-L127)


#### Arguments

- `$category` ([string](http://php.net/language.types.string)) – The config category

#### Returns

[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject) – The config settings

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $category is invalid
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  if the securityKey general config setting is not set, and a auto-generated one could not be saved


### `getDb()`





Returns the DB config settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L143-L146)



#### Returns

[craft\config\DbConfig](craft-config-dbconfig.md)


---

#### Example

::: code
```php
$username = Craft::$app->config->db->username;
```
```twig
{% set username = craft.app.config.db.username %}
```
:::


### `getDotEnvPath()`





Returns the path to the .env file (regardless of whether it exists).




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L231-L234)



#### Returns

[string](http://php.net/language.types.string)



### `getGeneral()`





Returns the general config settings.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L164-L167)



#### Returns

[craft\config\GeneralConfig](craft-config-generalconfig.md)


---

#### Example

::: code
```php
$logoutPath = Craft::$app->config->general->logoutPath;
```
```twig
<a href="{{ url(craft.app.config.general.logoutPath) }}">
    Logout
</a>
```
:::


### `setDotEnvVar()`





Sets an environment variable value in the project's .env file.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Config.php#L243-L266)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The environment variable name
- `$value` ([string](http://php.net/language.types.string)) – The environment variable value


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the .env file doesn't exist






## Constants

| Constant           | Description
| ------------------ | -----------
| `CATEGORY_DB`      |
| `CATEGORY_GENERAL` |



