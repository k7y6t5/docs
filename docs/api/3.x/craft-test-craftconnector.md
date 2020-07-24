---
title: craft\test\CraftConnector
code:
  - php
  - twig
---

# CraftConnector

Type

:   Class

Namespace

:   craft\test

Inherits

:   [craft\test\CraftConnector](craft-test-craftconnector.md) &raquo;
`Codeception\Lib\Connector\Yii2`

Since

:   3.2.0



Class CraftConnector





[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php)




## Protected Properties

| Property                                      | Description
| --------------------------------------------- | --------------------------------------------
| [emails](craft-test-craftconnector.md#emails) | [array](http://php.net/language.types.array)

### `emails`



Type

:   [array](http://php.net/language.types.array)







[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php#L32)





## Public Methods

| Method                                                                     | Description
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------
| [findAndLoginUser()](craft-test-craftconnector.md#method-findandloginuser) | We override to prevent a bug with the matching of user agent and session.
| [getEmails()](craft-test-craftconnector.md#method-getemails)               |
| [resetRequest()](craft-test-craftconnector.md#method-resetrequest)         |

### `findAndLoginUser()`





We override to prevent a bug with the matching of user agent and session.




[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php#L49-L61)


#### Arguments

- `$user`
- `$disableRequiredUserAgent` ([boolean](http://php.net/language.types.boolean))


#### Throws

- `\Codeception\Exception\ConfigurationException`


### `getEmails()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php#L37-L40)






### `resetRequest()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php#L82-L113)


#### Arguments

- `$app` ([yii\web\Application](https://www.yiiframework.com/doc/api/2.0/yii-web-application))


#### Throws

- [craft\errors\InvalidPluginException](craft-errors-invalidpluginexception.md)




## Protected Methods

| Method                                                         | Description
| -------------------------------------------------------------- | -----------
| [mockMailer()](craft-test-craftconnector.md#method-mockmailer) |

### `mockMailer()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/CraftConnector.php#L66-L76)


#### Arguments

- `$config`









