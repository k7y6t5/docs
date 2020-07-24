---
title: craft\services\Dashboard
code:
  - php
  - twig
---

# Dashboard

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Dashboard](craft-services-dashboard.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Dashboard service.

An instance of the Dashboard service is globally accessible in Craft via [`Craft::$app->dashboard`](craft-base-applicationtrait.md#method-getdashboard).



[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [allWidgetTypes](craft-services-dashboard.md#allwidgettypes)                                                               | [string](http://php.net/language.types.string)[]
| [allWidgets](craft-services-dashboard.md#allwidgets)                                                                       | [craft\base\WidgetInterface](craft-base-widgetinterface.md)[] – The widgets
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component

### `allWidgetTypes`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php)



### `allWidgets`



Type

:   [craft\base\WidgetInterface](craft-base-widgetinterface.md)[]

Access

:   Read-only



The widgets



[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php)







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
| [changeWidgetColspan()](craft-services-dashboard.md#method-changewidgetcolspan)                                                             | Changes the colspan of a widget.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [createWidget()](craft-services-dashboard.md#method-createwidget)                                                                           | Creates a widget with a given config.
| [deleteWidget()](craft-services-dashboard.md#method-deletewidget)                                                                           | Soft-deletes a widget.
| [deleteWidgetById()](craft-services-dashboard.md#method-deletewidgetbyid)                                                                   | Soft-deletes a widget by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [doesUserHaveWidget()](craft-services-dashboard.md#method-doesuserhavewidget)                                                               | Returns whether the current user has a widget of the given type.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getAllWidgetTypes()](craft-services-dashboard.md#method-getallwidgettypes)                                                                 | Returns all available widget type classes.
| [getAllWidgets()](craft-services-dashboard.md#method-getallwidgets)                                                                         | Returns the dashboard widgets for the current user.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getWidgetById()](craft-services-dashboard.md#method-getwidgetbyid)                                                                         | Returns a widget by its ID.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [reorderWidgets()](craft-services-dashboard.md#method-reorderwidgets)                                                                       | Reorders widgets.
| [saveWidget()](craft-services-dashboard.md#method-savewidget)                                                                               | Saves a widget for the current user.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `changeWidgetColspan()`





Changes the colspan of a widget.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L349-L356)


#### Arguments

- `$widgetId` ([integer](http://php.net/language.types.integer))
- `$colspan` ([integer](http://php.net/language.types.integer))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `createWidget()`





Creates a widget with a given config.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L112-L130)


#### Arguments

- `$config` (`mixed`) – The widget’s class name, or its config, with a `type` value and optionally a `settings` value.

#### Returns

[craft\base\WidgetInterface](craft-base-widgetinterface.md)



### `deleteWidget()`





Soft-deletes a widget.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L278-L312)


#### Arguments

- `$widget` ([craft\base\WidgetInterface](craft-base-widgetinterface.md)) – The widget to be deleted

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the widget was deleted successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `deleteWidgetById()`





Soft-deletes a widget by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L260-L269)


#### Arguments

- `$widgetId` ([integer](http://php.net/language.types.integer)) – The widget’s ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the widget was deleted successfully



### `doesUserHaveWidget()`





Returns whether the current user has a widget of the given type.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L157-L165)


#### Arguments

- `$type` ([string](http://php.net/language.types.string)) – The widget type

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the current user has a widget of the given type



### `getAllWidgetTypes()`





Returns all available widget type classes.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L87-L104)



#### Returns

[string](http://php.net/language.types.string)[]



### `getAllWidgets()`





Returns the dashboard widgets for the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L137-L149)



#### Returns

[craft\base\WidgetInterface](craft-base-widgetinterface.md)[] – The widgets



### `getWidgetById()`





Returns a widget by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L173-L180)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The widget’s ID

#### Returns

[craft\base\WidgetInterface](craft-base-widgetinterface.md), [null](http://php.net/language.types.null) – The widget, or null if it doesn’t exist



### `reorderWidgets()`





Reorders widgets.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L321-L340)


#### Arguments

- `$widgetIds` ([integer](http://php.net/language.types.integer)[]) – The widget IDs

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the widgets were reordered successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons


### `saveWidget()`





Saves a widget for the current user.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Dashboard.php#L190-L252)


#### Arguments

- `$widget` ([craft\base\WidgetInterface](craft-base-widgetinterface.md)) – The widget to be saved
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the widget should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the widget was saved successfully

#### Throws

- [Throwable](http://php.net/class.throwable)\
  if reasons








## Events

### EVENT_AFTER_DELETE_WIDGET



Type

:   [craft\events\WidgetEvent](craft-events-widgetevent.md)



The event that is triggered after a widget is deleted.



---



### EVENT_AFTER_SAVE_WIDGET



Type

:   [craft\events\WidgetEvent](craft-events-widgetevent.md)



The event that is triggered after a widget is saved.



---



### EVENT_BEFORE_DELETE_WIDGET



Type

:   [craft\events\WidgetEvent](craft-events-widgetevent.md)



The event that is triggered before a widget is deleted.



---



### EVENT_BEFORE_SAVE_WIDGET



Type

:   [craft\events\WidgetEvent](craft-events-widgetevent.md)



The event that is triggered before a widget is saved.



---



### EVENT_REGISTER_WIDGET_TYPES



Type

:   [craft\events\RegisterComponentTypesEvent](craft-events-registercomponenttypesevent.md)



The event that is triggered when registering Dashboard widget types.

Dashboard widgets must implement [craft\base\WidgetInterface](craft-base-widgetinterface.md). [craft\base\Widget](craft-base-widget.md) provides a base implementation.

See [Widget Types](https://docs.craftcms.com/v3/widget-types.html) for documentation on creating Dashboard widgets.




---

#### Example

::: code
```php
use craft\events\RegisterComponentTypesEvent;
use craft\services\Dashboard;
use yii\base\Event;

Event::on(Dashboard::class,
    Dashboard::EVENT_REGISTER_WIDGET_TYPES,
    function(RegisterComponentTypesEvent $event) {
        $event->types[] = MyWidgetType::class;
    }
);
```
:::



