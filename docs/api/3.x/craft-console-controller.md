---
title: craft\console\Controller
code:
  - php
  - twig
---

# Controller

Type

:   Class

Namespace

:   craft\console

Inherits

:   [craft\console\Controller](craft-console-controller.md) &raquo;
[yii\console\Controller](https://www.yiiframework.com/doc/api/2.0/yii-console-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Uses traits

:   [craft\console\ControllerTrait](craft-console-controllertrait.md)

Extended by

:   [craft\console\controllers\BackupController](craft-console-controllers-backupcontroller.md), [craft\console\controllers\ClearCachesController](craft-console-controllers-clearcachescontroller.md), [craft\console\controllers\GcController](craft-console-controllers-gccontroller.md), [craft\console\controllers\GraphqlController](craft-console-controllers-graphqlcontroller.md), [craft\console\controllers\IndexAssetsController](craft-console-controllers-indexassetscontroller.md), [craft\console\controllers\InstallController](craft-console-controllers-installcontroller.md), [craft\console\controllers\MailerController](craft-console-controllers-mailercontroller.md), [craft\console\controllers\ProjectConfigController](craft-console-controllers-projectconfigcontroller.md), [craft\console\controllers\ResaveController](craft-console-controllers-resavecontroller.md), [craft\console\controllers\RestoreController](craft-console-controllers-restorecontroller.md), [craft\console\controllers\SetupController](craft-console-controllers-setupcontroller.md), [craft\console\controllers\TestsController](craft-console-controllers-testscontroller.md), [craft\console\controllers\UpdateController](craft-console-controllers-updatecontroller.md), [craft\console\controllers\utils\AsciiFilenamesController](craft-console-controllers-utils-asciifilenamescontroller.md), [craft\console\controllers\utils\FixElementUidsController](craft-console-controllers-utils-fixelementuidscontroller.md), [craft\console\controllers\utils\PruneRevisionsController](craft-console-controllers-utils-prunerevisionscontroller.md), [craft\console\controllers\utils\RepairController](craft-console-controllers-utils-repaircontroller.md)

Since

:   3.2.0



Base console controller





[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php)


## Public Properties

| Property                                                                                                                                             | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [action](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$action-detail "Defined by yii\base\Controller")                               | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The action that is currently being executed.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [color](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$color-detail "Defined by yii\console\Controller")                           | [boolean](http://php.net/language.types.boolean) – Whether to enable ANSI color in the output.
| [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail "Defined by yii\base\Controller")                 | [string](http://php.net/language.types.string) – The ID of the action that is used when the action ID is not specified in the request.
| [help](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$help-detail "Defined by yii\console\Controller")                             | [boolean](http://php.net/language.types.boolean) – Whether to display help information about current command.
| [helpSummary](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$helpSummary-detail "Defined by yii\console\Controller")               | [string](http://php.net/language.types.string)
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$id-detail "Defined by yii\base\Controller")                                       | [string](http://php.net/language.types.string) – The ID of this controller.
| [interactive](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$interactive-detail "Defined by yii\console\Controller")               | [boolean](http://php.net/language.types.boolean) – Whether to run the command interactively.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$layout-detail "Defined by yii\base\Controller")                               | [null](http://php.net/language.types.null), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The name of the layout to be applied to this controller's views.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$module-detail "Defined by yii\base\Controller")                               | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The module that this controller belongs to.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$modules-detail "Defined by yii\base\Controller")                             | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – All ancestor modules that this controller is located within.
| [passedOptionValues](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptionValues-detail "Defined by yii\console\Controller") | [array](http://php.net/language.types.array) – The properties corresponding to the passed options
| [passedOptions](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptions-detail "Defined by yii\console\Controller")           | [array](http://php.net/language.types.array) – The names of the options passed during execution
| [route](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$route-detail "Defined by yii\base\Controller")                                 | [string](http://php.net/language.types.string) – The route (module ID, controller ID and action ID) of the current request.
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$uniqueId-detail "Defined by yii\base\Controller")                           | [string](http://php.net/language.types.string) – The controller ID that is prefixed with the module ID (if any).
| [view](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$view-detail "Defined by yii\base\Controller")                                   | [yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view), [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – The view object that can be used to render views or view files.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$viewPath-detail "Defined by yii\base\Controller")                           | [string](http://php.net/language.types.string) – The directory containing the view files for this controller.





## Public Methods

| Method                                                                                                                                                        | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                           | Constructor.
| [__get()](craft-console-controller.md#method-get)                                                                                                             | Returns the value of a component property.
| [__isset()](craft-console-controller.md#method-isset)                                                                                                         | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-console-controller.md#method-set)                                                                                                             | Sets the value of a component property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                   | Sets an object property to null.
| [actions()](craft-console-controller.md#method-actions)                                                                                                       | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                           | This method is invoked right after an action is executed.
| [ansiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#ansiFormat()-detail "Defined by yii\console\Controller")                       | Formats a string with ANSI codes.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                     | Attaches a list of behaviors to the component.
| [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#beforeAction()-detail "Defined by yii\base\Controller")                         | This method is invoked right before an action is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                 | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#bindActionParams()-detail "Defined by yii\base\Controller")                 | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                               | Returns the fully qualified name of this class.
| [confirm()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#confirm()-detail "Defined by yii\console\Controller")                             | Asks user to confirm by typing y or n.
| [createAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#createAction()-detail "Defined by yii\base\Controller")                         | Creates an action based on the given action ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                     | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [findLayoutFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#findLayoutFile()-detail "Defined by yii\base\Controller")                     | Finds the applicable layout file.
| [getActionArgsHelp()](craft-console-controller.md#method-getactionargshelp)                                                                                   | Returns the help information for the anonymous arguments for the action.
| [getActionHelp()](craft-console-controller.md#method-getactionhelp)                                                                                           | Returns the detailed help information for the specified action.
| [getActionHelpSummary()](craft-console-controller.md#method-getactionhelpsummary)                                                                             | Returns a one-line short summary describing the specified action.
| [getActionOptionsHelp()](craft-console-controller.md#method-getactionoptionshelp)                                                                             | Returns the help information for the options for the action.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                           | Returns all behaviors attached to this component.
| [getHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelp()-detail "Defined by yii\console\Controller")                             | Returns help information for this controller.
| [getHelpSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelpSummary()-detail "Defined by yii\console\Controller")               | Returns one-line short summary describing this controller.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getModules()-detail "Defined by yii\base\Controller")                             | Returns all ancestor modules of this controller.
| [getOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getOptionValues()-detail "Defined by yii\console\Controller")             | Returns properties corresponding to the options for the action id Child classes may override this method to specify possible properties.
| [getPassedOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptionValues()-detail "Defined by yii\console\Controller") | Returns the properties corresponding to the passed options.
| [getPassedOptions()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptions()-detail "Defined by yii\console\Controller")           | Returns the names of valid options passed during execution.
| [getRoute()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getRoute()-detail "Defined by yii\base\Controller")                                 | Returns the route of the current request.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getUniqueId()-detail "Defined by yii\base\Controller")                           | Returns the unique ID of the controller.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getView()-detail "Defined by yii\base\Controller")                                   | Returns the view object that can be used to render views or view files.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getViewPath()-detail "Defined by yii\base\Controller")                           | Returns the directory containing view files for this controller.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                           | Returns a value indicating whether a property is defined.
| [init()](craft-console-controller.md#method-init)                                                                                                             | Initializes the object.
| [isColorEnabled()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#isColorEnabled()-detail "Defined by yii\console\Controller")               | Returns a value indicating whether ANSI color is enabled.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                               | Attaches an event handler to an event.
| [optionAliases()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#optionAliases()-detail "Defined by yii\console\Controller")                 | Returns option alias names.
| [options()](craft-console-controller.md#method-options)                                                                                                       | Returns the names of valid options for the action (id) An option requires the existence of a public member variable whose name is the option name.
| [prompt()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#prompt()-detail "Defined by yii\console\Controller")                               | Prompts the user for input and validates it.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                                     | Renders a view and applies layout if available.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                       | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                             | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                       | Renders a view without applying layout.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                           | Runs a request specified in terms of a route.
| [runAction()](craft-console-controller.md#method-runaction)                                                                                                   | Runs an action with the specified action ID and parameters.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#select()-detail "Defined by yii\console\Controller")                               | Gives the user an option to choose from. Giving '?' as an input will show a list of options to choose from and their explanations.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                                   | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                           | Sets the directory that contains the view files.
| [stderr()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stderr()-detail "Defined by yii\console\Controller")                               | Prints a string to STDERR.
| [stdout()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stdout()-detail "Defined by yii\console\Controller")                               | Prints a string to STDOUT.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                     | Triggers an event.

### `__get()`





Returns the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a getter: return the getter result
 - a property of a behavior: return the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$value = $component->property;`.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L95-L102)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

`mixed` – The property value or the value of a behavior's property

#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is write-only.


### `__isset()`





Checks if a property is set, i.e. defined and not null.



This method will check in the following order and act accordingly:

 - a property defined by a setter: return whether the property is set
 - a property of a behavior: return whether the property is set
 - return `false` for non existing properties

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `isset($component->property)`.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L83-L90)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the named property is set



### `__set()`





Sets the value of a component property.



This method will check in the following order and act accordingly:

 - a property defined by a setter: set the property value
 - an event in the format of "on xyz": attach the handler to the event "xyz"
 - a behavior in the format of "as xyz": attach the behavior named as "xyz"
 - a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$component->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L107-L115)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only.


### `actions()`





Declares external actions for the controller.



This method is meant to be overwritten to declare external actions for the controller.
It should return an array, with array keys being action IDs, and array values the corresponding
action class names or action configuration arrays. For example,

```php
return [
    'action1' => 'app\components\Action1',
    'action2' => [
        'class' => 'app\components\Action2',
        'property1' => 'value1',
        'property2' => 'value2',
    ],
];
```

`\Yii::createObject()` will be used later to create the requested action
using the configuration provided here.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L162-L165)






### `getActionArgsHelp()`





Returns the help information for the anonymous arguments for the action.



The returned value should be an array. The keys are the argument names, and the values are
the corresponding help information. Each value must be an array of the following structure:

- required: boolean, whether this argument is required.
- type: string, the PHP type of this argument.
- default: string, the default value of this argument
- comment: string, the comment of this argument

The default implementation will return the help information extracted from the doc-comment of
the parameters corresponding to the action method.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L220-L233)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action))

#### Returns

[array](http://php.net/language.types.array) – The help information of the action arguments



### `getActionHelp()`





Returns the detailed help information for the specified action.








[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L208-L215)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action)) – Action to get help for

#### Returns

[string](http://php.net/language.types.string) – The detailed help information for the specified action.



### `getActionHelpSummary()`





Returns a one-line short summary describing the specified action.








[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L195-L203)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action)) – Action to get summary for

#### Returns

[string](http://php.net/language.types.string) – A one-line short summary describing the specified action.



### `getActionOptionsHelp()`





Returns the help information for the options for the action.



The returned value should be an array. The keys are the option names, and the values are
the corresponding help information. Each value must be an array of the following structure:

- type: string, the PHP type of this argument.
- default: string, the default value of this argument
- comment: string, the comment of this argument

The default implementation will return the help information extracted from the doc-comment of
the properties corresponding to the action options.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L238-L253)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action))

#### Returns

[array](http://php.net/language.types.array) – The help information of the action options



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L121-L157)




#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `options()`





Returns the names of valid options for the action (id)
An option requires the existence of a public member variable whose
name is the option name.



Child classes may override this method to specify possible options.

Note that the values setting via options are not available
until [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#beforeAction()-detail) is being called.




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L170-L179)


#### Arguments

- `$actionID` ([string](http://php.net/language.types.string)) – The action id of the current request

#### Returns

[string](http://php.net/language.types.string)[] – The names of the options valid for the action



### `runAction()`





Runs an action with the specified action ID and parameters.



If the action ID is empty, the method will use [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L184-L190)


#### Arguments

- `$id` ([string](http://php.net/language.types.string)) – The ID of the action to be executed.
- `$params` ([array](http://php.net/language.types.array)) – The parameters (name-value pairs) to be passed to the action.

#### Returns

[integer](http://php.net/language.types.integer) – The status of the action execution. 0 means normal, other values mean abnormal.

#### Throws

- [yii\base\InvalidRouteException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidrouteexception)\
  if the requested action ID cannot be resolved into an action successfully.
- [yii\console\Exception](https://www.yiiframework.com/doc/api/2.0/yii-console-exception)\
  if there are unknown options or missing arguments




## Protected Methods

| Method                                                                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------
| [defineActions()](craft-console-controller.md#method-defineactions)                                                                                             | Returns an array of custom actions that should be available on the controller.
| [getActionMethodReflection()](craft-console-controller.md#method-getactionmethodreflection)                                                                     |
| [outputCommand()](craft-console-controllertrait.md#method-outputcommand "Defined by craft\console\ControllerTrait")                                             |
| [parseDocCommentDetail()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentDetail()-detail "Defined by yii\console\Controller")   | Returns full description from the docblock.
| [parseDocCommentSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentSummary()-detail "Defined by yii\console\Controller") | Returns the first line of docblock.
| [parseDocCommentTags()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentTags()-detail "Defined by yii\console\Controller")       | Parses the comment block into tags.

### `defineActions()`





Returns an array of custom actions that should be available on the controller.

The keys of this array should be the action IDs, and the values can be callables or
sub-arrays with the following keys:

- `action` – A callable that is responsible for running the action
- `options` – An array of options that should be available to the command. Options can either be defined as
  strings (`['option1', 'option2']`) or key/value pairs (`['option1' => 'defaultValue']`).
- `helpSummary` – Help summary text for the action (shown when running `craft help controller-id`)
- `help` – Help text for the action (shown when running `craft help controller-id/action-id`)
- `argsHelp` – Sub-array that defines help text for the arguments, indexed by argument names
  (shown when running `craft help controller-id/action-id`)
- `optionsHelp` – Sub-array that defines help text for the options, indexed by option names
  (shown when running `craft help controller-id/action-id`)


[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L273-L278)



#### Returns

[array](http://php.net/language.types.array)



### `getActionMethodReflection()`










[View source](https://github.com/craftcms/cms/blob/master/src/console/Controller.php#L284-L298)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action))

#### Returns

[ReflectionMethod](http://php.net/class.reflectionmethod)





## Constants

| Constant           | Description
| ------------------ | -----------
| `EXIT_CODE_ERROR`  |
| `EXIT_CODE_NORMAL` |


## Events

### EVENT_DEFINE_ACTIONS



Type

:   [craft\events\DefineConsoleActionsEvent](craft-events-defineconsoleactionsevent.md)



The event that is triggered when defining custom actions for this controller.

See [defineActions()](craft-console-controller.md#method-defineactions) for details on what to set on `$event->actions`.




---

#### Example

::: code
```php
use craft\events\DefineConsoleActionsEvent;
use craft\console\Controller;
use craft\console\controllers\ResaveController;
use yii\base\Event;

Event::on(ResaveController::class,
    Controller::EVENT_DEFINE_ACTIONS,
    function(DefineConsoleActionsEvent $event) {
        $event->actions['products'] = [
            'options' => ['type'],
            'helpSummary' => 'Re-saves products.',
            'action' => function($params): int {
                // @var ResaveController $controller
                $controller = Craft::$app->controller;
                $query = Product::find();
                if ($controller->type) {
                    $query->type(explode(',', $controller->type));
                }
                return $controller->saveElements($query);
            }
        ];
    }
);
```
:::



