---
title: craft\web\twig\variables\EmailMessages
code:
  - php
  - twig
---

# EmailMessages

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\EmailMessages](craft-web-twig-variables-emailmessages.md)

Since

:   3.0.0

Deprecated in

:    in 3.0.0



Email functions.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/EmailMessages.php)






## Public Methods

| Method                                                                              | Description
| ----------------------------------------------------------------------------------- | ------------------------------------------
| [getAllMessages()](craft-web-twig-variables-emailmessages.md#method-getallmessages) | Returns all of the system email messages.
| [getMessage()](craft-web-twig-variables-emailmessages.md#method-getmessage)         | Returns a system email message by its key.

### `getAllMessages()`





Returns all of the system email messages.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/EmailMessages.php#L29-L34)



#### Returns

[array](http://php.net/language.types.array)



### `getMessage()`





Returns a system email message by its key.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/EmailMessages.php#L43-L48)


#### Arguments

- `$key` ([string](http://php.net/language.types.string))
- `$language` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null))

#### Returns

[craft\models\SystemMessage](craft-models-systemmessage.md), [null](http://php.net/language.types.null)










