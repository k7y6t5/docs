---
title: craft\commerce\services\Pdf
code:
  - php
  - twig
---

# Pdf

Type

:   Class

Namespace

:   craft\commerce\services

Inherits

:   [craft\commerce\services\Pdf](craft-commerce-services-pdf.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   2.0



Pdf service.





[View source](https://github.com/craftcms/commerce/blob/master/src/services/Pdf.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component





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
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasMethod()-detail "Defined by yii\base\Component")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasProperty()-detail "Defined by yii\base\Component")           | Returns a value indicating whether a property is defined for this component.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [renderPdfForOrder()](craft-commerce-services-pdf.md#method-renderpdffororder)                                                              | Returns a rendered PDF object for the order.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `renderPdfForOrder()`





Returns a rendered PDF object for the order.




[View source](https://github.com/craftcms/commerce/blob/master/src/services/Pdf.php#L92-L180)


#### Arguments

- `$order` ([craft\commerce\elements\Order](craft-commerce-elements-order.md))
- `$option` ([string](http://php.net/language.types.string))
- `$templatePath` ([string](http://php.net/language.types.string))
- `$variables` ([array](http://php.net/language.types.array)) – Variables available to the pdf html template. Available to template by the array keys.

#### Returns

[string](http://php.net/language.types.string)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if no template or order found.








## Events

### EVENT_AFTER_RENDER_PDF



Type

:   [craft\commerce\events\PdfEvent](craft-commerce-events-pdfevent.md)



The event that is triggered after an order’s PDF has been rendered.

Event handlers can override Commerce’s PDF generation by setting the `pdf` property on the event to a custom-rendered PDF string. The event properties will be the same as those from `beforeRenderPdf`, but `pdf` will contain a rendered PDF string and is the only one for which setting a value will make any difference for the resulting PDF output.

```php
use craft\commerce\events\PdfEvent;
use craft\commerce\services\Pdf;
use yii\base\Event;

Event::on(
    Pdf::class,
    Pdf::EVENT_AFTER_RENDER_PDF,
    function(PdfEvent $event) {
        // Add a watermark to the PDF or forward it to the accounting department
        // ...
    }
);
```



---



### EVENT_BEFORE_RENDER_PDF



Type

:   [craft\commerce\events\PdfEvent](craft-commerce-events-pdfevent.md)



The event that is triggered before an order’s PDF is rendered.

Event handlers can customize PDF rendering by modifying several properties on the event object:

| Property    | Value                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `order`     | populated [Order](api:craft\commerce\elements\Order) model                                                                |
| `template`  | optional Twig template path (string) to be used for rendering                                                             |
| `variables` | populated with the variables availble to the template used for rendering                                                  |
| `option`    | optional string for the template that can be used to show different details based on context (example: `receipt`, `ajax`) |

```php
use craft\commerce\events\PdfEvent;
use craft\commerce\services\Pdf;
use yii\base\Event;

Event::on(
    Pdf::class,
    Pdf::EVENT_BEFORE_RENDER_PDF,
    function(PdfEvent $event) {
        // Modify `$event->order`, `$event->option`, `$event->template`,
        // and `$event->variables` to customize what gets rendered into a PDF
        // ...
    }
);
```



---




