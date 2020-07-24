---
title: craft\helpers\MailerHelper
code:
  - php
  - twig
---

# MailerHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\MailerHelper](craft-helpers-mailerhelper.md)

Since

:   3.0.0



Class MailerHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MailerHelper.php)






## Public Methods

| Method                                                                                    | Description
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------
| [allMailerTransportTypes()](craft-helpers-mailerhelper.md#method-allmailertransporttypes) | Returns all available mailer transport adapter classes.
| [createMailer()](craft-helpers-mailerhelper.md#method-createmailer)                       | Creates a mailer component based on the given mail settings.
| [createTransportAdapter()](craft-helpers-mailerhelper.md#method-createtransportadapter)   | Creates a transport adapter based on the given mail settings.

### `allMailerTransportTypes()`





Returns all available mailer transport adapter classes.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MailerHelper.php#L55-L69)



#### Returns

[string](http://php.net/language.types.string)[]



### `createMailer()`

::: danger DEPRECATED
Deprecated in 3.0.18. Use [craft\helpers\App::mailerConfig()](craft-helpers-app.md#method-mailerconfig) instead.
:::




Creates a mailer component based on the given mail settings.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MailerHelper.php#L97-L101)


#### Arguments

- `$settings` ([craft\models\MailSettings](craft-models-mailsettings.md))

#### Returns

[craft\mail\Mailer](craft-mail-mailer.md)



### `createTransportAdapter()`





Creates a transport adapter based on the given mail settings.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/MailerHelper.php#L79-L88)


#### Arguments

- `$type` ([string](http://php.net/language.types.string))
- `$settings` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null))

#### Returns

[craft\mail\transportadapters\TransportAdapterInterface](craft-mail-transportadapters-transportadapterinterface.md)

#### Throws

- [craft\errors\MissingComponentException](craft-errors-missingcomponentexception.md)\
  if $type is missing








## Events

### EVENT_REGISTER_MAILER_TRANSPORT_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering mailer transport adapter types.

Mailer transports must implement [craft\mail\transportadapters\TransportAdapterInterface](craft-mail-transportadapters-transportadapterinterface.md). [craft\mail\transportadapters\BaseTransportAdapter](craft-mail-transportadapters-basetransportadapter.md) provides a base implementation.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\helpers\MailerHelper;
use yii\base\Event;

Event::on(MailerHelper::class,
    MailerHelper::EVENT_REGISTER_MAILER_TRANSPORT_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyTransportType::class;
    }
);
```
:::



