---
title: craft\mail\Message
code:
  - php
  - twig
---

# Message

Type

:   Class

Namespace

:   craft\mail

Inherits

:   [craft\mail\Message](craft-mail-message.md) &raquo;
[yii\swiftmailer\Message](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message) &raquo;
[yii\mail\BaseMessage](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemessage) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\mail\MessageInterface](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface)

Since

:   3.0.0



Represents an email message.





[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php)


## Public Properties

| Property                                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [bcc](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$bcc-detail "Defined by yii\mail\MessageInterface")                                                    | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The Bcc (hidden copy receiver) addresses of this message.
| [cc](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$cc-detail "Defined by yii\mail\MessageInterface")                                                      | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The Cc (additional copy receiver) addresses of this message.
| [charset](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$charset-detail "Defined by yii\mail\MessageInterface")                                            | [string](http://php.net/language.types.string) – The character set of this message.
| [from](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$from-detail "Defined by yii\mail\MessageInterface")                                                  | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The sender
| [headers](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$headers-detail "Defined by yii\swiftmailer\Message")             | [array](http://php.net/language.types.array) – Headers in format: `[name => value]`.
| [htmlBody](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$htmlBody-detail "Defined by yii\mail\MessageInterface")                                          | [string](http://php.net/language.types.string) – Message HTML content.
| [key](craft-mail-message.md#key)                                                                                                                                                | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The key of the message that should be loaded
| [language](craft-mail-message.md#language)                                                                                                                                      | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The language that the email should be sent in, based on the first [craft\elements\User](craft-elements-user.md) model passed into [setTo()](craft-mail-message.md#method-setto) with a preferred language
| [mailer](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemessage#$mailer-detail "Defined by yii\mail\BaseMessage")                                                        | [yii\mail\MailerInterface](https://www.yiiframework.com/doc/api/2.0/yii-mail-mailerinterface) – The mailer instance that created this message.
| [priority](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$priority-detail "Defined by yii\swiftmailer\Message")           | [integer](http://php.net/language.types.integer) – Priority value as integer in range: `1.
| [readReceiptTo](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$readReceiptTo-detail "Defined by yii\swiftmailer\Message") | [string](http://php.net/language.types.string) – Receipt receive email addresses.
| [replyTo](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$replyTo-detail "Defined by yii\mail\MessageInterface")                                            | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The reply-to address of this message.
| [returnPath](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$returnPath-detail "Defined by yii\swiftmailer\Message")       | [string](http://php.net/language.types.string) – The bounce email address.
| [signature](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$signature-detail "Defined by yii\swiftmailer\Message")         | [array](http://php.net/language.types.array), [callable](http://php.net/language.types.callable), `\Swift_Signer` – Signature specification.
| [subject](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$subject-detail "Defined by yii\mail\MessageInterface")                                            | [string](http://php.net/language.types.string) – The message subject
| [swiftMessage](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#$swiftMessage-detail "Defined by yii\swiftmailer\Message")   | `\Swift_Message` – Swift message instance.
| [textBody](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$textBody-detail "Defined by yii\mail\MessageInterface")                                          | [string](http://php.net/language.types.string) – Message plain text content.
| [to](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#$to-detail "Defined by yii\mail\MessageInterface")                                                      | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The message recipients
| [variables](craft-mail-message.md#variables)                                                                                                                                    | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Any variables that should be applied to the template when it is rendered

### `key`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The key of the message that should be loaded



[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L23)



### `language`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The language that the email should be sent in, based on the first [craft\elements\User](craft-elements-user.md) model passed into [setTo()](craft-mail-message.md#method-setto) with a preferred language



[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L33)



### `variables`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



Any variables that should be applied to the template when it is rendered



[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L28)







## Public Methods

| Method                                                                                                                                                                                   | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                                | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#__clone()-detail "Defined by yii\swiftmailer\Message")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                      | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                                  | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                              | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                                  | Sets value of an object property.
| [__toString()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemessage#__toString()-detail "Defined by yii\mail\BaseMessage")                                                      | PHP magic method that returns the string representation of this object.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                              | Sets an object property to null.
| [addHeader()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#addHeader()-detail "Defined by yii\swiftmailer\Message")               | Adds custom header value to the message.
| [addSignature()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#addSignature()-detail "Defined by yii\swiftmailer\Message")         | Adds message signature.
| [attach()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#attach()-detail "Defined by yii\mail\MessageInterface")                                                    | Attaches existing file to the email message.
| [attachContent()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#attachContent()-detail "Defined by yii\mail\MessageInterface")                                      | Attach specified content as file for the email message.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                                | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                                | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                          | Returns the fully qualified name of this class.
| [embed()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#embed()-detail "Defined by yii\mail\MessageInterface")                                                      | Attach a file and return it's CID source.
| [embedContent()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#embedContent()-detail "Defined by yii\mail\MessageInterface")                                        | Attach a content as file and return it's CID source.
| [getBcc()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getBcc()-detail "Defined by yii\mail\MessageInterface")                                                    | Returns the Bcc (hidden copy receiver) addresses of this message.
| [getCc()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getCc()-detail "Defined by yii\mail\MessageInterface")                                                      | Returns the Cc (additional copy receiver) addresses of this message.
| [getCharset()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getCharset()-detail "Defined by yii\mail\MessageInterface")                                            | Returns the character set of this message.
| [getFrom()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getFrom()-detail "Defined by yii\mail\MessageInterface")                                                  | Returns the message sender.
| [getHeader()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#getHeader()-detail "Defined by yii\swiftmailer\Message")               | Returns all values for the specified header.
| [getPriority()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#getPriority()-detail "Defined by yii\swiftmailer\Message")           | Returns the priority of this message.
| [getReadReceiptTo()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#getReadReceiptTo()-detail "Defined by yii\swiftmailer\Message") | Get the addresses to which a read-receipt will be sent.
| [getReplyTo()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getReplyTo()-detail "Defined by yii\mail\MessageInterface")                                            | Returns the reply-to address of this message.
| [getReturnPath()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#getReturnPath()-detail "Defined by yii\swiftmailer\Message")       | Returns the return-path (the bounce address) of this message.
| [getSubject()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getSubject()-detail "Defined by yii\mail\MessageInterface")                                            | Returns the message subject.
| [getSwiftMessage()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#getSwiftMessage()-detail "Defined by yii\swiftmailer\Message")   |
| [getTo()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#getTo()-detail "Defined by yii\mail\MessageInterface")                                                      | Returns the message recipient(s).
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                          | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                                      | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                                    | Initializes the object.
| [send()](https://www.yiiframework.com/doc/api/2.0/yii-mail-basemessage#send()-detail "Defined by yii\mail\BaseMessage")                                                                  | Sends this email message.
| [setBcc()](craft-mail-message.md#method-setbcc)                                                                                                                                          | Sets the BCC (hidden copy receiver) addresses of this message.
| [setCc()](craft-mail-message.md#method-setcc)                                                                                                                                            | Sets the CC (additional copy receiver) addresses of this message.
| [setCharset()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#setCharset()-detail "Defined by yii\mail\MessageInterface")                                            | Sets the character set of this message.
| [setFrom()](craft-mail-message.md#method-setfrom)                                                                                                                                        | Sets the message sender.
| [setHeader()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setHeader()-detail "Defined by yii\swiftmailer\Message")               | Sets custom header value to the message.
| [setHeaders()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setHeaders()-detail "Defined by yii\swiftmailer\Message")             | Sets custom header values to the message.
| [setHtmlBody()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#setHtmlBody()-detail "Defined by yii\mail\MessageInterface")                                          | Sets message HTML content.
| [setPriority()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setPriority()-detail "Defined by yii\swiftmailer\Message")           | Set the priority of this message.
| [setReadReceiptTo()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setReadReceiptTo()-detail "Defined by yii\swiftmailer\Message") | Sets the ask for a delivery receipt from the recipient to be sent to $addresses.
| [setReplyTo()](craft-mail-message.md#method-setreplyto)                                                                                                                                  | Sets the Reply-To email.
| [setReturnPath()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setReturnPath()-detail "Defined by yii\swiftmailer\Message")       | Set the return-path (the bounce address) of this message.
| [setSignature()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setSignature()-detail "Defined by yii\swiftmailer\Message")         | Sets message signature
| [setSubject()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#setSubject()-detail "Defined by yii\mail\MessageInterface")                                            | Sets the message subject.
| [setTextBody()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#setTextBody()-detail "Defined by yii\mail\MessageInterface")                                          | Sets message plain text content.
| [setTo()](craft-mail-message.md#method-setto)                                                                                                                                            | Sets the message recipient(s).
| [toString()](https://www.yiiframework.com/doc/api/2.0/yii-mail-messageinterface#toString()-detail "Defined by yii\mail\MessageInterface")                                                | Returns string representation of this message.

### `setBcc()`





Sets the BCC (hidden copy receiver) addresses of this message.




[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L121-L127)


#### Arguments

- `$bcc` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[]) – The hidden copied receiver’s email address, or their user model(s).
You may pass an array of addresses if multiple recipients should receive this message.
You may also specify receiver name in addition to email address using format:
`[email => name]`.

#### Returns

`static` – Self reference



### `setCc()`





Sets the CC (additional copy receiver) addresses of this message.




[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L104-L110)


#### Arguments

- `$cc` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[]) – The copied receiver’s email address, or their user model(s).
You may pass an array of addresses if multiple recipients should receive this message.
You may also specify receiver name in addition to email address using format:
`[email => name]`.

#### Returns

`static` – Self reference



### `setFrom()`





Sets the message sender.




[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L44-L50)


#### Arguments

- `$from` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[]) – The sender’s email address, or their
user model(s). You may pass an array of addresses if this message is from
multiple people. You may also specify sender name in addition to email
address using format: `[email => name]`.

#### Returns

`static` – Self reference



### `setReplyTo()`



Since

:   3.4.0



Sets the Reply-To email.




[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L62-L68)


#### Arguments

- `$replyTo` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[]) – The Reply-To email address, or their
user model(s). You may pass an array of addresses if this message is from
multiple people. You may also specify Reply-To name in addition to email
address using format: `[email => name]`.

#### Returns

`static` – Self reference



### `setTo()`





Sets the message recipient(s).




[View source](https://github.com/craftcms/cms/blob/master/src/mail/Message.php#L79-L93)


#### Arguments

- `$to` ([string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [craft\elements\User](craft-elements-user.md), [craft\elements\User](craft-elements-user.md)[]) – The receiver’s email address, or their
user model(s). You may pass an array of addresses if multiple recipients
should receive this message. You may also specify receiver name in addition
to email address using format: `[email => name]`.

#### Returns

`static` – Self reference





## Protected Methods

| Method                                                                                                                                                                                       | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------
| [createSwiftMessage()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#createSwiftMessage()-detail "Defined by yii\swiftmailer\Message") | Creates the Swift email message instance.
| [createSwiftSigner()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#createSwiftSigner()-detail "Defined by yii\swiftmailer\Message")   | Creates signer from its configuration
| [setBody()](https://www.yiiframework.com/extension/yiisoft/yii2-swiftmailer/doc/api/2.2/yii-swiftmailer-message#setBody()-detail "Defined by yii\swiftmailer\Message")                       | Sets the message body.






