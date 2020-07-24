---
title: craft\test\TestMailer
code:
  - php
  - twig
---

# TestMailer

Type

:   Class

Namespace

:   craft\test

Inherits

:   [craft\test\TestMailer](craft-test-testmailer.md) &raquo;
[craft\mail\Mailer](craft-mail-mailer.md) &raquo;
[yii\swiftmailer\Mailer](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer) &raquo;
[yii\mail\BaseMailer](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface), [yii\mail\MailerInterface](https://www.yiiframework.com/doc/api/2.0/yii-mail-mailerinterface)

Since

:   3.2.0



Exactly the same as Codeception\Lib\Connector\Yii2\TestMailer except that we override based on Crafts own mailer class.





[View source](https://github.com/craftcms/cms/blob/master/src/test/TestMailer.php)


## Public Properties

| Property                                                                                                                                                                                            | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                                          | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [callback](craft-test-testmailer.md#callback)                                                                                                                                                       | [Closure](http://php.net/class.closure)
| [enableSwiftMailerLogging](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#$enableSwiftMailerLogging-detail "Defined by yii\swiftmailer\Mailer") | [boolean](http://php.net/language.types.boolean) – Whether to enable writing of the SwiftMailer internal logs using Yii log mechanism.
| [fileTransportCallback](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$fileTransportCallback-detail "Defined by yii\mail\BaseMailer")                                                | [callable](http://php.net/language.types.callable) – A PHP callback that will be called by [send()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#send()-detail) when [useFileTransport](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$useFileTransport-detail) is true.
| [fileTransportPath](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$fileTransportPath-detail "Defined by yii\mail\BaseMailer")                                                        | [string](http://php.net/language.types.string) – The directory where the email messages are saved when [useFileTransport](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$useFileTransport-detail) is true.
| [from](craft-mail-mailer.md#from "Defined by craft\mail\Mailer")                                                                                                                                    | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[], [null](http://php.net/language.types.null) – The default sender’s email address, or their user model(s).
| [htmlLayout](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$htmlLayout-detail "Defined by yii\mail\BaseMailer")                                                                      | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – HTML layout view name.
| [messageClass](craft-test-testmailer.md#messageclass)                                                                                                                                               | [string](http://php.net/language.types.string)
| [messageConfig](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$messageConfig-detail "Defined by yii\mail\BaseMailer")                                                                | [array](http://php.net/language.types.array) – The configuration that should be applied to any newly created email message instance by [createMessage()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#createMessage()-detail) or [compose()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#compose()-detail).
| [replyTo](craft-mail-mailer.md#replyto "Defined by craft\mail\Mailer")                                                                                                                              | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[], [null](http://php.net/language.types.null) – The default Reply-To email address, or their user model(s).
| [swiftMailer](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#$swiftMailer-detail "Defined by yii\swiftmailer\Mailer")                           | [array](http://php.net/language.types.array), `\Swift_Mailer` – Swift mailer instance or array configuration.
| [template](craft-mail-mailer.md#template "Defined by craft\mail\Mailer")                                                                                                                            | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The email template that should be used
| [textLayout](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$textLayout-detail "Defined by yii\mail\BaseMailer")                                                                      | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – Text layout view name.
| [transport](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#$transport-detail "Defined by yii\swiftmailer\Mailer")                               | [array](http://php.net/language.types.array), `\Swift_Transport`
| [useFileTransport](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$useFileTransport-detail "Defined by yii\mail\BaseMailer")                                                          | [boolean](http://php.net/language.types.boolean) – Whether to save email messages as files under [fileTransportPath](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$fileTransportPath-detail) instead of sending them to the actual recipients.
| [view](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$view-detail "Defined by yii\mail\BaseMailer")                                                                                  | [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – View instance.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#$viewPath-detail "Defined by yii\mail\BaseMailer")                                                                          | [string](http://php.net/language.types.string) – The directory that contains the view files for composing mail messages Defaults to '@app/mail'.

### `callback`



Type

:   [Closure](http://php.net/class.closure)







[View source](https://github.com/craftcms/cms/blob/master/src/test/TestMailer.php#L32)



### `messageClass`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/test/TestMailer.php#L27)







## Public Methods

| Method                                                                                                                                                                             | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                          | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                                          | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                            | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                        | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                            | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                        | Sets an object property to null.
| [afterSend()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#afterSend()-detail "Defined by yii\mail\BaseMailer")                                                    | This method is invoked right after mail was send.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                            | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                          | Attaches a list of behaviors to the component.
| [beforeSend()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#beforeSend()-detail "Defined by yii\mail\BaseMailer")                                                  | This method is invoked right before mail send.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                                      | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                          | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                          | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                    | Returns the fully qualified name of this class.
| [compose()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#compose()-detail "Defined by yii\mail\BaseMailer")                                                        | Creates a new message instance and optionally composes its body content via view rendering.
| [composeFromKey()](craft-mail-mailer.md#method-composefromkey "Defined by craft\mail\Mailer")                                                                                      | Composes a new email based on a given key.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                            | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                          | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                          | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [generateMessageFileName()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#generateMessageFileName()-detail "Defined by yii\mail\BaseMailer")                        |
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                  | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                | Returns all behaviors attached to this component.
| [getSwiftMailer()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#getSwiftMailer()-detail "Defined by yii\swiftmailer\Mailer") |
| [getTransport()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#getTransport()-detail "Defined by yii\swiftmailer\Mailer")     |
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#getView()-detail "Defined by yii\mail\BaseMailer")                                                        |
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#getViewPath()-detail "Defined by yii\mail\BaseMailer")                                                |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                        | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                    | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                                | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                              | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                  | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                    | Attaches an event handler to an event.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#render()-detail "Defined by yii\mail\BaseMailer")                                                          | Renders the specified view with optional parameters and layout.
| [send()](craft-mail-mailer.md#method-send "Defined by craft\mail\Mailer")                                                                                                          | Sends the given email message.
| [sendMultiple()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#sendMultiple()-detail "Defined by yii\mail\BaseMailer")                                              | Sends multiple messages at once.
| [setTransport()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#setTransport()-detail "Defined by yii\swiftmailer\Mailer")     |
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#setView()-detail "Defined by yii\mail\BaseMailer")                                                        |
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#setViewPath()-detail "Defined by yii\mail\BaseMailer")                                                |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                          | Triggers an event.



## Protected Methods

| Method                                                                                                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------
| [createMessage()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#createMessage()-detail "Defined by yii\mail\BaseMailer")                                                  | Creates a new message instance.
| [createSwiftMailer()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#createSwiftMailer()-detail "Defined by yii\swiftmailer\Mailer") | Creates Swift mailer instance.
| [createSwiftObject()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#createSwiftObject()-detail "Defined by yii\swiftmailer\Mailer") | Creates Swift library object, from given array configuration.
| [createTransport()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-mailer#createTransport()-detail "Defined by yii\swiftmailer\Mailer")     | Creates email transport instance by its array configuration.
| [createView()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemailer#createView()-detail "Defined by yii\mail\BaseMailer")                                                        | Creates view instance from given configuration.
| [saveMessage()](craft-test-testmailer.md#method-savemessage)                                                                                                                             |
| [sendMessage()](craft-test-testmailer.md#method-sendmessage)                                                                                                                             |

### `saveMessage()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestMailer.php#L48-L52)


#### Arguments

- `$message` ([yii\mail\MessageInterface](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `sendMessage()`










[View source](https://github.com/craftcms/cms/blob/master/src/test/TestMailer.php#L38-L42)


#### Arguments

- `$message`

#### Returns

[boolean](http://php.net/language.types.boolean)








