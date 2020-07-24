---
title: craft\web\twig\variables\UserSession
code:
  - php
  - twig
---

# UserSession

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\UserSession](craft-web-twig-variables-usersession.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



User session functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php)






## Public Methods

| Method                                                                                              | Description
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------
| [getFlash()](craft-web-twig-variables-usersession.md#method-getflash)                               | Returns a flash message by a given key.
| [getFlashes()](craft-web-twig-variables-usersession.md#method-getflashes)                           | Returns all flash data for the user.
| [getRemainingSessionTime()](craft-web-twig-variables-usersession.md#method-getremainingsessiontime) | Returns the number of seconds the user will be logged in for.
| [getRememberedUsername()](craft-web-twig-variables-usersession.md#method-getrememberedusername)     | Returns the remembered username from cookie.
| [getReturnUrl()](craft-web-twig-variables-usersession.md#method-getreturnurl)                       | Returns the URL the user was trying to access before getting sent to the login page.
| [getUser()](craft-web-twig-variables-usersession.md#method-getuser)                                 | Returns the currently logged in user.
| [hasFlash()](craft-web-twig-variables-usersession.md#method-hasflash)                               | Returns whether a flash message exists by a given key.
| [isLoggedIn()](craft-web-twig-variables-usersession.md#method-isloggedin)                           | Returns whether the user is logged in.

### `getFlash()`





Returns a flash message by a given key.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L108-L113)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))
- `$defaultValue` (`mixed`)
- `$delete` ([boolean](http://php.net/language.types.boolean))

#### Returns

`mixed`



### `getFlashes()`





Returns all flash data for the user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L93-L98)


#### Arguments

- `$delete` ([boolean](http://php.net/language.types.boolean))

#### Returns

[array](http://php.net/language.types.array)



### `getRemainingSessionTime()`





Returns the number of seconds the user will be logged in for.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L51-L60)



#### Returns

[integer](http://php.net/language.types.integer)



### `getRememberedUsername()`





Returns the remembered username from cookie.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L67-L72)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



### `getReturnUrl()`





Returns the URL the user was trying to access before getting sent to the login page.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L80-L85)


#### Arguments

- `$defaultUrl` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The default URL that should be returned if no return URL was stored.

#### Returns

[string](http://php.net/language.types.string) – The return URL, or|null $defaultUrl.



### `getUser()`





Returns the currently logged in user.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L39-L44)



#### Returns

[craft\elements\User](craft-elements-user.md), [null](http://php.net/language.types.null)



### `hasFlash()`





Returns whether a flash message exists by a given key.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L121-L126)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))

#### Returns

`mixed`



### `isLoggedIn()`





Returns whether the user is logged in.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/UserSession.php#L27-L32)



#### Returns

[boolean](http://php.net/language.types.boolean)










