---
title: craft\web\twig\variables\CraftVariable
code:
  - php
  - twig
---

# CraftVariable

Type

:   Class

Namespace

:   craft\web\twig\variables

Inherits

:   [craft\web\twig\variables\CraftVariable](craft-web-twig-variables-craftvariable.md) &raquo;
[yii\di\ServiceLocator](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Craft defines the `craft` global template variable.





[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php)


## Public Properties

| Property                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [app](craft-web-twig-variables-craftvariable.md#app)                                                                               | [craft\web\Application](craft-web-application.md), [craft\console\Application](craft-console-application.md), [null](http://php.net/language.types.null) – The Craft application class
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")         | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [components](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#$components-detail "Defined by yii\di\ServiceLocator") | [array](http://php.net/language.types.array) – The list of the component definitions or the loaded component instances (ID => definition or instance).

### `app`



Type

:   [craft\web\Application](craft-web-application.md), [craft\console\Application](craft-console-application.md), [null](http://php.net/language.types.null)



The Craft application class



[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L78)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](craft-web-twig-variables-craftvariable.md#method-call)                                                                           | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](craft-web-twig-variables-craftvariable.md#method-construct)                                                                 | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [assets()](craft-web-twig-variables-craftvariable.md#method-assets)                                                                         | Returns a new [asset query](https://docs.craftcms.com/v3/dev/element-queries/asset-queries.html).
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](craft-web-twig-variables-craftvariable.md#method-behaviors)                                                                   | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](craft-web-twig-variables-craftvariable.md#method-cangetproperty)                                                         | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [categories()](craft-web-twig-variables-craftvariable.md#method-categories)                                                                 | Returns a new [category query](https://docs.craftcms.com/v3/dev/element-queries/category-queries.html).
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#clear()-detail "Defined by yii\di\ServiceLocator")                 | Removes the component from the locator.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [entries()](craft-web-twig-variables-craftvariable.md#method-entries)                                                                       | Returns a new [entry query](https://docs.craftcms.com/v3/dev/element-queries/entry-queries.html).
| [get()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#get()-detail "Defined by yii\di\ServiceLocator")                     | Returns the component instance with the specified ID.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#getComponents()-detail "Defined by yii\di\ServiceLocator") | Returns the list of the component definitions or the loaded component instances.
| [globalSets()](craft-web-twig-variables-craftvariable.md#method-globalsets)                                                                 | Returns a new [global set query](https://docs.craftcms.com/v3/dev/element-queries/global-set-queries.html).
| [has()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#has()-detail "Defined by yii\di\ServiceLocator")                     | Returns a value indicating whether the locator has the specified component definition or has instantiated the component.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](craft-web-twig-variables-craftvariable.md#method-init)                                                                             | Initializes the object.
| [isLocalized()](craft-web-twig-variables-craftvariable.md#method-islocalized)                                                               | Returns whether this site has multiple locales.
| [locale()](craft-web-twig-variables-craftvariable.md#method-locale)                                                                         | Gets the current language in use.
| [matrixBlocks()](craft-web-twig-variables-craftvariable.md#method-matrixblocks)                                                             | Returns a new [Matrix block query](https://docs.craftcms.com/v3/dev/element-queries/matrix-block-queries.html).
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [query()](craft-web-twig-variables-craftvariable.md#method-query)                                                                           | Returns a new generic query.
| [set()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#set()-detail "Defined by yii\di\ServiceLocator")                     | Registers a component definition with this locator.
| [setComponents()](https://www.yiiframework.com/doc/api/2.0/yii-di-servicelocator#setComponents()-detail "Defined by yii\di\ServiceLocator") | Registers a set of component definitions in this locator.
| [tags()](craft-web-twig-variables-craftvariable.md#method-tags)                                                                             | Returns a new [tag query](https://docs.craftcms.com/v3/dev/element-queries/tag-queries.html).
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.
| [users()](craft-web-twig-variables-craftvariable.md#method-users)                                                                           | Returns a new [user query](https://docs.craftcms.com/v3/dev/element-queries/user-queries.html).

### `__call()`





Calls the named method which is not a class method.



This method will check if any attached behavior has
the named method and will execute it if available.

Do not call this method directly as it is a PHP magic method that
will be implicitly called when an unknown method is being invoked.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L143-L152)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The method name
- `$params` ([array](http://php.net/language.types.array)) – Method parameters

#### Returns

`mixed` – The method return value

#### Throws

- [yii\base\UnknownMethodException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownmethodexception)\
  when calling unknown method


### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](craft-web-twig-variables-craftvariable.md#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L83-L124)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `assets()`





Returns a new [asset query](https://docs.craftcms.com/v3/dev/element-queries/asset-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L214-L219)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\AssetQuery](craft-elements-db-assetquery.md)



### `behaviors()`





Returns a list of behaviors that this component should behave as.



Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations
indexed by behavior names. A behavior configuration can be either a string specifying
the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from `\craft\web\twig\variables\Behavior`. Behaviors can be attached using a name or anonymously.
When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail)
or be detached using [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L157-L163)



#### Returns

[array](http://php.net/language.types.array) – The behavior configurations.



### `canGetProperty()`





Returns a value indicating whether a property can be read.



A property can be read if:

- the class has a getter method associated with the specified name
  (in this case, property name is case-insensitive);
- the class has a member variable with the specified name (when `$checkVars` is true);
- an attached behavior has a readable property of the given name (when `$checkBehaviors` is true).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L171-L179)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name
- `$checkVars` ([boolean](http://php.net/language.types.boolean)) – Whether to treat member variables as properties
- `$checkBehaviors` ([boolean](http://php.net/language.types.boolean)) – Whether to treat behaviors' properties as properties of this component

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the property can be read



### `categories()`





Returns a new [category query](https://docs.craftcms.com/v3/dev/element-queries/category-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L227-L232)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\CategoryQuery](craft-elements-db-categoryquery.md)



### `entries()`





Returns a new [entry query](https://docs.craftcms.com/v3/dev/element-queries/entry-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L240-L245)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\EntryQuery](craft-elements-db-entryquery.md)



### `globalSets()`



Since

:   3.0.4



Returns a new [global set query](https://docs.craftcms.com/v3/dev/element-queries/global-set-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L254-L259)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\GlobalSetQuery](craft-elements-db-globalsetquery.md)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L129-L138)






### `isLocalized()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use craft.app.isMultiSite instead
:::




Returns whether this site has multiple locales.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L199-L203)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `locale()`

::: danger DEPRECATED
Deprecated in 3.0.0
:::




Gets the current language in use.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L187-L191)



#### Returns

[string](http://php.net/language.types.string)



### `matrixBlocks()`





Returns a new [Matrix block query](https://docs.craftcms.com/v3/dev/element-queries/matrix-block-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L267-L272)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\MatrixBlockQuery](craft-elements-db-matrixblockquery.md)



### `query()`



Since

:   3.0.19



Returns a new generic query.




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L280-L283)



#### Returns

[craft\db\Query](craft-db-query.md)



### `tags()`





Returns a new [tag query](https://docs.craftcms.com/v3/dev/element-queries/tag-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L291-L296)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\TagQuery](craft-elements-db-tagquery.md)



### `users()`





Returns a new [user query](https://docs.craftcms.com/v3/dev/element-queries/user-queries.html).




[View source](https://github.com/craftcms/cms/blob/master/src/web/twig/variables/CraftVariable.php#L304-L309)


#### Arguments

- `$criteria` ([array](http://php.net/language.types.array))

#### Returns

[craft\elements\db\UserQuery](craft-elements-db-userquery.md)









## Events

### EVENT_DEFINE_BEHAVIORS



Type

:   [craft\events\DefineBehaviorsEvent](craft-events-definebehaviorsevent.md)



The event that is triggered when defining the class behaviors

See also [behaviors()](craft-web-twig-variables-craftvariable.md#method-behaviors)

---



### EVENT_DEFINE_COMPONENTS

::: danger DEPRECATED
Deprecated in 3.0.0-beta.23
:::


Type

:   `\craft\web\twig\variables\DefineComponentsEvent`



The event that is triggered when defining the Service Locator components.

See also [__construct()](craft-web-twig-variables-craftvariable.md#method-construct)

---



### EVENT_INIT



Type

:   [yii\base\Event](https://www.yiiframework.com/doc/api/2.0/yii-base-event)



The event that is triggered after the component's init cycle

See also [init()](craft-web-twig-variables-craftvariable.md#method-init)

---




