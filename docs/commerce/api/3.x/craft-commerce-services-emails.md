---
title: craft\commerce\services\Emails
code:
  - php
  - twig
---

# Emails

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Emails](craft-commerce-services-emails.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Email service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allEmails](craft-commerce-services-emails.md#allemails)                                                                   | [craft\commerce\models\Email](craft-commerce-models-email.md)[]
| [allEnabledEmails](craft-commerce-services-emails.md#allenabledemails)                                                     | [craft\commerce\models\Email](craft-commerce-models-email.md)[]
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allEmails`



Type

:   [craft\commerce\models\Email](craft-commerce-models-email.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php)



### `allEnabledEmails`



Type

:   [craft\commerce\models\Email](craft-commerce-models-email.md)[]

Access

:   Read-only







[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__call()-detail "Defined by yii\base\Component")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__get()-detail "Defined by yii\base\Component")                       | Returns the value of a component property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__isset()-detail "Defined by yii\base\Component")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__set()-detail "Defined by yii\base\Component")                       | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__unset()-detail "Defined by yii\base\Component")                   | Sets a component property to be null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canGetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#canSetProperty()-detail "Defined by yii\base\Component")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteEmailById()](craft-commerce-services-emails.md#method-deleteemailbyid)                                                               | Delete an email by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllEmails()](craft-commerce-services-emails.md#method-getallemails)                                                                     | Get all emails.
| [getAllEmailsByOrderStatusId()](craft-commerce-services-emails.md#method-getallemailsbyorderstatusid)                                       | Get all emails by an order status ID.
| [getAllEnabledEmails()](craft-commerce-services-emails.md#method-getallenabledemails)                                                       | Get all emails that are enabled.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getEmailById()](craft-commerce-services-emails.md#method-getemailbyid)                                                                     | Get an email by its ID.
| [handleChangedEmail()](craft-commerce-services-emails.md#method-handlechangedemail)                                                         | Handle gateway status change.
| [handleDeletedEmail()](craft-commerce-services-emails.md#method-handledeletedemail)                                                         | Handle email getting deleted.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveEmail()](craft-commerce-services-emails.md#method-saveemail)                                                                           | Save an email.
| [sendEmail()](craft-commerce-services-emails.md#method-sendemail)                                                                           | Send a commerce email.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteEmailById()`





Delete an email by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L374-L390)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `getAllEmails()`





Get all emails.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L231-L241)



#### Returns

[craft\commerce\models\Email](craft-commerce-models-email.md)[]



### `getAllEmailsByOrderStatusId()`





Get all emails by an order status ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L857-L872)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\Email](craft-commerce-models-email.md)[]



### `getAllEnabledEmails()`





Get all emails that are enabled.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L248-L258)



#### Returns

[craft\commerce\models\Email](craft-commerce-models-email.md)[]



### `getEmailById()`





Get an email by its ID.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L217-L224)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\commerce\models\Email](craft-commerce-models-email.md), [null](http://php.net/language.types.null)



### `handleChangedEmail()`





Handle gateway status change.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L328-L366)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `handleDeletedEmail()`





Handle email getting deleted.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L398-L416)


#### Arguments

- `$event` ([craft\events\ConfigEvent](https://docs.craftcms.com/api/v3/craft-events-configevent.html))

#### Returns

`void`



### `saveEmail()`





Save an email.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L271-L318)


#### Arguments

- `$email` ([craft\commerce\models\Email](craft-commerce-models-email.md))
- `$runValidation` ([boolean](http://php.net/language.types.boolean))

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)
- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)
- [yii\web\ServerErrorHttpException](https://www.yiiframework.com/doc/api/2.0/yii-web-servererrorhttpexception)


### `sendEmail()`





Send a commerce email.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Emails.php#L430-L849)


#### Arguments

- `$email` ([craft\commerce\models\Email](craft-commerce-models-email.md))
- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$orderHistory` ([craft\commerce\models\OrderHistory](craft-commerce-models-orderhistory.md))
- `$orderData` ([array](http://php.net/language.types.array)) – Since the order may have changed by the time the email sends.

#### Returns

[boolean](http://php.net/language.types.boolean) – $result

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)
- [Throwable](http://php.net/class.throwable)
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)






## Constants

| Constant            | Description
| ------------------- | -----------
| `CONFIG_EMAILS_KEY` |


## Events

### EVENT_AFTER_DELETE_EMAIL



Type

:   [craft\commerce\events\EmailEvent](craft-commerce-events-emailevent.md)



The event that is triggered after an email is deleted.
```php
use craft\commerce\events\EmailEvent;
use craft\commerce\services\Emails;
use craft\commerce\models\Email;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_AFTER_DELETE_EMAIL,
    function(EmailEvent $event) {
        // @var Email $email
        $email = $event->email;

        // ...
    }
);
```



---



### EVENT_AFTER_SAVE_EMAIL



Type

:   [craft\commerce\events\EmailEvent](craft-commerce-events-emailevent.md)



The event that is triggered after an email is saved.

```php
use craft\commerce\events\EmailEvent;
use craft\commerce\services\Emails;
use craft\commerce\models\Email;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_AFTER_SAVE_EMAIL,
    function(EmailEvent $event) {
        // @var Email $email
        $email = $event->email;
        // @var bool $isNew
        $isNew = $event->isNew;

        // ...
    }
);
```



---



### EVENT_AFTER_SEND_MAIL



Type

:   [craft\commerce\events\MailEvent](craft-commerce-events-mailevent.md)



The event that is triggered after an email has been sent out.

```php
use craft\commerce\events\MailEvent;
use craft\commerce\services\Emails;
use craft\commerce\elements\Order;
use craft\commerce\models\Email;
use craft\commerce\models\OrderHistory;
use craft\mail\Message;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_AFTER_SEND_MAIL,
    function(MailEvent $event) {
        // @var Message $message
        $message = $event->craftEmail;
        // @var Email $email
        $email = $event->commerceEmail;
        // @var Order $order
        $order = $event->order;
        // @var OrderHistory $history
        $history = $event->orderHistory;

        // Add the email address to an external CRM
        // ...
    }
);
```



---



### EVENT_BEFORE_DELETE_EMAIL



Type

:   [craft\commerce\events\EmailEvent](craft-commerce-events-emailevent.md)



The event that is triggered before an email is deleted.

```php
use craft\commerce\events\EmailEvent;
use craft\commerce\services\Emails;
use craft\commerce\models\Email;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_BEFORE_DELETE_EMAIL,
    function(EmailEvent $event) {
        // @var Email $email
        $email = $event->email;

        // ...
    }
);
```



---



### EVENT_BEFORE_SAVE_EMAIL



Type

:   [craft\commerce\events\EmailEvent](craft-commerce-events-emailevent.md)



The event that is triggered before an email is saved.

```php
use craft\commerce\events\EmailEvent;
use craft\commerce\services\Emails;
use craft\commerce\models\Email;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_BEFORE_SAVE_EMAIL,
    function(EmailEvent $event) {
        // @var Email $email
        $email = $event->email;
        // @var bool $isNew
        $isNew = $event->isNew;

        // ...
    }
);
```



---



### EVENT_BEFORE_SEND_MAIL



Type

:   [craft\commerce\events\MailEvent](craft-commerce-events-mailevent.md)



The event that is triggered before an email is sent out.

You may set the `isValid` property to `false` on the event to prevent the email from being sent.

```php
use craft\commerce\events\MailEvent;
use craft\commerce\services\Emails;
use craft\commerce\elements\Order;
use craft\commerce\models\Email;
use craft\commerce\models\OrderHistory;
use craft\mail\Message;
use yii\base\Event;

Event::on(
    Emails::class,
    Emails::EVENT_BEFORE_SEND_MAIL,
    function(MailEvent $event) {
        // @var Message $message
        $message = $event->craftEmail;
        // @var Email $email
        $email = $event->commerceEmail;
        // @var Order $order
        $order = $event->order;
        // @var OrderHistory $history
        $history = $event->orderHistory;

        // Use `$event->isValid = false` to prevent sending
        // based on some business rules or client preferences
        // ...
    }
);
```



---




