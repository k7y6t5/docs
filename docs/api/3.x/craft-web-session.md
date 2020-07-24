---
title: craft\web\Session
code:
  - php
  - twig
---

# Session

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\Session](craft-web-session.md) &raquo;
[yii\web\Session](https://www.yiiframework.com/doc/api/2.0/yii-web-session) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [ArrayAccess](http://php.net/class.arrayaccess), [Countable](http://php.net/class.countable), [IteratorAggregate](http://php.net/class.iteratoraggregate), [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Extends [yii\web\Session](https://www.yiiframework.com/doc/api/2.0/yii-web-session) to add support for setting the session folder and creating it if it doesn’t exist.





[View source](https://github.com/craftcms/cms/blob/master/src/web/Session.php)


## Public Properties

| Property                                                                                                                                         | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [allFlashes](craft-web-session.md#allflashes)                                                                                                    | [array](http://php.net/language.types.array) – Flash messages (key => message or key => [message1, message2]).
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                       | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [cacheLimiter](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$cacheLimiter-detail "Defined by yii\web\Session")                       | [string](http://php.net/language.types.string) – Current cache limiter
| [cookieParams](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$cookieParams-detail "Defined by yii\web\Session")                       | [array](http://php.net/language.types.array) – The session cookie parameters.
| [count](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$count-detail "Defined by yii\web\Session")                                     | [integer](http://php.net/language.types.integer) – The number of session variables
| [flash](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$flash-detail "Defined by yii\web\Session")                                     | [string](http://php.net/language.types.string) – The key identifying the flash message.
| [flashParam](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$flashParam-detail "Defined by yii\web\Session")                           | [string](http://php.net/language.types.string) – The name of the session variable that stores the flash message data.
| [gCProbability](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$gCProbability-detail "Defined by yii\web\Session")                     | [float](http://php.net/language.types.float) – The probability (percentage) that the GC (garbage collection) process is started on every session initialization.
| [handler](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$handler-detail "Defined by yii\web\Session")                                 | [SessionHandlerInterface](http://php.net/class.sessionhandlerinterface), [array](http://php.net/language.types.array) – An object implementing the SessionHandlerInterface or a configuration array.
| [hasSessionId](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$hasSessionId-detail "Defined by yii\web\Session")                       | [boolean](http://php.net/language.types.boolean) – Whether the current request has sent the session ID.
| [id](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$id-detail "Defined by yii\web\Session")                                           | [string](http://php.net/language.types.string) – The current session ID
| [isActive](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$isActive-detail "Defined by yii\web\Session")                               | [boolean](http://php.net/language.types.boolean) – Whether the session has started
| [iterator](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$iterator-detail "Defined by yii\web\Session")                               | [yii\web\SessionIterator](https://www.yiiframework.com/doc/api/2.0/yii-web-sessioniterator) – An iterator for traversing the session variables.
| [name](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$name-detail "Defined by yii\web\Session")                                       | [string](http://php.net/language.types.string) – The current session name
| [savePath](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$savePath-detail "Defined by yii\web\Session")                               | [string](http://php.net/language.types.string) – The current session save path, defaults to '/tmp'.
| [timeout](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$timeout-detail "Defined by yii\web\Session")                                 | [integer](http://php.net/language.types.integer) – The number of seconds after which data will be seen as 'garbage' and cleaned up.
| [useCookies](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$useCookies-detail "Defined by yii\web\Session")                           | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – The value indicating whether cookies should be used to store session IDs.
| [useCustomStorage](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$useCustomStorage-detail "Defined by yii\web\Session")               | [boolean](http://php.net/language.types.boolean) – Whether to use custom storage.
| [useTransparentSessionID](https://www.yiiframework.com/doc/api/2.0/yii-web-session#$useTransparentSessionID-detail "Defined by yii\web\Session") | [boolean](http://php.net/language.types.boolean) – Whether transparent sid support is enabled or not, defaults to false.

### `allFlashes`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only



Flash messages (key => message or key => [message1, message2]).



[View source](https://github.com/craftcms/cms/blob/master/src/web/Session.php)







## Public Methods

| Method                                                                                                                                                    | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                 | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                 | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                       | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                   | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                               | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                   | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                               | Sets an object property to null.
| [addFlash()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#addFlash()-detail "Defined by yii\web\Session")                                     | Adds a flash message.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                   | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                 | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                             | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                 | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                           | Returns the fully qualified name of this class.
| [close()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#close()-detail "Defined by yii\web\Session")                                           | Ends the current session and store session data.
| [count()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#count()-detail "Defined by yii\web\Session")                                           | Returns the number of items in the session.
| [destroy()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#destroy()-detail "Defined by yii\web\Session")                                       | Frees all session variables and destroys all data registered to a session.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                   | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                 | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                 | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#get()-detail "Defined by yii\web\Session")                                               | Returns the session variable value with the session variable name.
| [getAllFlashes()](craft-web-session.md#method-getallflashes)                                                                                              | Returns all flash messages.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                         | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                       | Returns all behaviors attached to this component.
| [getCacheLimiter()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getCacheLimiter()-detail "Defined by yii\web\Session")                       | Returns current cache limiter
| [getCookieParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getCookieParams()-detail "Defined by yii\web\Session")                       |
| [getCount()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getCount()-detail "Defined by yii\web\Session")                                     | Returns the number of items in the session.
| [getFlash()](craft-web-session.md#method-getflash)                                                                                                        | Returns a flash message.
| [getGCProbability()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getGCProbability()-detail "Defined by yii\web\Session")                     |
| [getHasSessionId()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getHasSessionId()-detail "Defined by yii\web\Session")                       | Returns a value indicating whether the current request has sent the session ID.
| [getId()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getId()-detail "Defined by yii\web\Session")                                           | Gets the session ID.
| [getIsActive()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getIsActive()-detail "Defined by yii\web\Session")                               |
| [getIterator()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getIterator()-detail "Defined by yii\web\Session")                               | Returns an iterator for traversing the session variables.
| [getName()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getName()-detail "Defined by yii\web\Session")                                       | Gets the name of the current session.
| [getSavePath()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getSavePath()-detail "Defined by yii\web\Session")                               | Gets the current session save path.
| [getTimeout()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getTimeout()-detail "Defined by yii\web\Session")                                 |
| [getUseCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getUseCookies()-detail "Defined by yii\web\Session")                           | Returns the value indicating whether cookies should be used to store session IDs.
| [getUseCustomStorage()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getUseCustomStorage()-detail "Defined by yii\web\Session")               | Returns a value indicating whether to use custom session storage.
| [getUseTransparentSessionID()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#getUseTransparentSessionID()-detail "Defined by yii\web\Session") |
| [has()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#has()-detail "Defined by yii\web\Session")                                               |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")               | Returns a value indicating whether there is any handler attached to the named event.
| [hasFlash()](craft-web-session.md#method-hasflash)                                                                                                        | Returns a value indicating whether there are flash messages associated with the specified key.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                       | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                     | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                         | Detaches an existing event handler from this component.
| [offsetExists()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#offsetExists()-detail "Defined by yii\web\Session")                             | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetGet()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#offsetGet()-detail "Defined by yii\web\Session")                                   | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetSet()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#offsetSet()-detail "Defined by yii\web\Session")                                   | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [offsetUnset()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#offsetUnset()-detail "Defined by yii\web\Session")                               | This method is required by the interface [ArrayAccess](http://php.net/class.arrayaccess).
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                           | Attaches an event handler to an event.
| [open()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#open()-detail "Defined by yii\web\Session")                                             | Starts the session.
| [regenerateID()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#regenerateID()-detail "Defined by yii\web\Session")                             | Updates the current session ID with a newly generated one.
| [remove()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#remove()-detail "Defined by yii\web\Session")                                         | Removes a session variable.
| [removeAll()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#removeAll()-detail "Defined by yii\web\Session")                                   | Removes all session variables.
| [removeAllFlashes()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#removeAllFlashes()-detail "Defined by yii\web\Session")                     | Removes all flash messages.
| [removeFlash()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#removeFlash()-detail "Defined by yii\web\Session")                               | Removes a flash message.
| [set()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#set()-detail "Defined by yii\web\Session")                                               | Adds a session variable.
| [setCacheLimiter()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setCacheLimiter()-detail "Defined by yii\web\Session")                       | Set cache limiter
| [setCookieParams()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setCookieParams()-detail "Defined by yii\web\Session")                       | Sets the session cookie parameters.
| [setFlash()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setFlash()-detail "Defined by yii\web\Session")                                     | Sets a flash message.
| [setGCProbability()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setGCProbability()-detail "Defined by yii\web\Session")                     |
| [setHasSessionId()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setHasSessionId()-detail "Defined by yii\web\Session")                       | Sets the value indicating whether the current request has sent the session ID.
| [setId()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setId()-detail "Defined by yii\web\Session")                                           | Sets the session ID.
| [setName()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setName()-detail "Defined by yii\web\Session")                                       | Sets the name for the current session.
| [setSavePath()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setSavePath()-detail "Defined by yii\web\Session")                               | Sets the current session save path.
| [setTimeout()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setTimeout()-detail "Defined by yii\web\Session")                                 |
| [setUseCookies()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setUseCookies()-detail "Defined by yii\web\Session")                           | Sets the value indicating whether cookies should be used to store session IDs.
| [setUseTransparentSessionID()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#setUseTransparentSessionID()-detail "Defined by yii\web\Session") |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                 | Triggers an event.

### `getAllFlashes()`





Returns all flash messages.



You may use this method to display all the flash messages in a view file:

```php
<?php
foreach (Yii::$app->session->getAllFlashes() as $key => $message) {
    echo '<div class="alert alert-' . $key . '">' . $message . '</div>';
} ?>
```

With the above code you can use the [bootstrap alert][] classes such as `success`, `info`, `danger`
as the flash message key to influence the color of the div.

Note that if you use [addFlash()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#addFlash()-detail), `$message` will be an array, and you will have to adjust the above code.

[bootstrap alert]: http://getbootstrap.com/components/#alerts




[View source](https://github.com/craftcms/cms/blob/master/src/web/Session.php#L60-L63)


#### Arguments

- `$delete` ([boolean](http://php.net/language.types.boolean)) – Whether to delete the flash messages right after this method is called.
If false, the flash messages will be automatically deleted in the next request.

#### Returns

[array](http://php.net/language.types.array) – Flash messages (key => message or key => [message1, message2]).


---

#### Example

::: code
```php
$messages = Craft::$app->session->getAllFlashes(true);
```
```twig{1}
{% set messages = craft.app.session.getAllFLashes(true) %}
{% for key, message in messages %}
    <p class="{{ key }}">
        {{ message }}
    </p>
{% endfor %}
```
:::


### `getFlash()`





Returns a flash message.








[View source](https://github.com/craftcms/cms/blob/master/src/web/Session.php#L38-L41)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – The key identifying the flash message
- `$defaultValue` (`mixed`) – Value to be returned if the flash message does not exist.
- `$delete` ([boolean](http://php.net/language.types.boolean)) – Whether to delete this flash message right after this method is called.
If false, the flash message will be automatically deleted in the next request.

#### Returns

`mixed` – The flash message or an array of messages if addFlash was used


---

#### Example

::: code
```php
$message = Craft::$app->session->getFlash('notice', null, true);
```
```twig{1}
{% set message = craft.app.session.getFlash('notice', null, true) %}
{% if message %}
    <p class="notice">
        {{ message }}
    </p>
{% endif %}
```
:::


### `hasFlash()`





Returns a value indicating whether there are flash messages associated with the specified key.








[View source](https://github.com/craftcms/cms/blob/master/src/web/Session.php#L81-L84)


#### Arguments

- `$key` ([string](http://php.net/language.types.string)) – Key identifying the flash message type

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether any flash messages exist under specified key


---

#### Example

::: code
```php
$hasNotice = Craft::$app->session->hasFlash('notice');
```
```twig{1}
{% if craft.app.session.hasFlash('notice') %}
    <p class="notice">
        {{ craft.app.session.getFlash('notice', null, true) }}
    </p>
{% endif %}
```
:::




## Protected Methods

| Method                                                                                                                                            | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------
| [freeze()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#freeze()-detail "Defined by yii\web\Session")                                 | If session is started it's not possible to edit session ini settings. In PHP7.2+ it throws exception.
| [registerSessionHandler()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#registerSessionHandler()-detail "Defined by yii\web\Session") | Registers session handler.
| [unfreeze()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#unfreeze()-detail "Defined by yii\web\Session")                             | Starts session and restores data from temporary variable
| [updateFlashCounters()](https://www.yiiframework.com/doc/api/2.0/yii-web-session#updateFlashCounters()-detail "Defined by yii\web\Session")       | Updates the counters for flash messages and removes outdated flash messages.






