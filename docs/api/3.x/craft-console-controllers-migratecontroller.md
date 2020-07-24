---
title: craft\console\controllers\MigrateController
code:
  - php
  - twig
---

# MigrateController

Type

:   Class

Namespace

:   craft\console\controllers

Inherits

:   [craft\console\controllers\MigrateController](craft-console-controllers-migratecontroller.md) &raquo;
[yii\console\controllers\BaseMigrateController](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller) &raquo;
[yii\console\Controller](https://www.yiiframework.com/doc/api/2.0/yii-console-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Uses traits

:   [craft\console\ControllerTrait](craft-console-controllertrait.md)

Since

:   3.0.0



Manages Craft and plugin migrations.

A migration means a set of persistent changes to the application environment that is shared among different
developers. For example, in an application backed by a database, a migration may refer to a set of changes to
the database, such as creating a new table, adding a new table column.
This controller provides support for tracking the migration history, updating migrations, and creating new
migration skeleton files.
The migration history is stored in a database table named `migrations`. The table will be automatically
created the first time this controller is executed, if it does not exist.
Below are some common usages of this command:
~~~
# creates a new migration named 'create_user_table' for a plugin with the handle pluginHandle.
craft migrate/create create_user_table --plugin=pluginHandle
# applies ALL new migrations for a plugin with the handle pluginHandle
craft migrate up --plugin=pluginHandle
~~~



[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php)


## Public Properties

| Property                                                                                                                                                                                             | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [action](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$action-detail "Defined by yii\base\Controller")                                                                               | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The action that is currently being executed.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                                           | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [color](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$color-detail "Defined by yii\console\Controller")                                                                           | [boolean](http://php.net/language.types.boolean) – Whether to enable ANSI color in the output.
| [compact](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$compact-detail "Defined by yii\console\controllers\BaseMigrateController")                         | [boolean](http://php.net/language.types.boolean) – Indicates whether the console output should be compacted.
| [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail "Defined by yii\base\Controller")                                                                 | [string](http://php.net/language.types.string) – The ID of the action that is used when the action ID is not specified in the request.
| [help](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$help-detail "Defined by yii\console\Controller")                                                                             | [boolean](http://php.net/language.types.boolean) – Whether to display help information about current command.
| [helpSummary](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$helpSummary-detail "Defined by yii\console\Controller")                                                               | [string](http://php.net/language.types.string)
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$id-detail "Defined by yii\base\Controller")                                                                                       | [string](http://php.net/language.types.string) – The ID of this controller.
| [interactive](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$interactive-detail "Defined by yii\console\Controller")                                                               | [boolean](http://php.net/language.types.boolean) – Whether to run the command interactively.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$layout-detail "Defined by yii\base\Controller")                                                                               | [null](http://php.net/language.types.null), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The name of the layout to be applied to this controller's views.
| [migrationNamespaces](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$migrationNamespaces-detail "Defined by yii\console\controllers\BaseMigrateController") | [array](http://php.net/language.types.array) – List of namespaces containing the migration classes.
| [migrationPath](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$migrationPath-detail "Defined by yii\console\controllers\BaseMigrateController")             | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array) – The directory containing the migration classes.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$module-detail "Defined by yii\base\Controller")                                                                               | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The module that this controller belongs to.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$modules-detail "Defined by yii\base\Controller")                                                                             | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – All ancestor modules that this controller is located within.
| [noBackup](craft-console-controllers-migratecontroller.md#nobackup)                                                                                                                                  | [boolean](http://php.net/language.types.boolean) – Skip backing up the database.
| [noContent](craft-console-controllers-migratecontroller.md#nocontent)                                                                                                                                | [boolean](http://php.net/language.types.boolean) – Exclude pending content migrations.
| [passedOptionValues](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptionValues-detail "Defined by yii\console\Controller")                                                 | [array](http://php.net/language.types.array) – The properties corresponding to the passed options
| [passedOptions](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptions-detail "Defined by yii\console\Controller")                                                           | [array](http://php.net/language.types.array) – The names of the options passed during execution
| [plugin](craft-console-controllers-migratecontroller.md#plugin)                                                                                                                                      | [string](http://php.net/language.types.string), [craft\base\Plugin](craft-base-plugin.md), [null](http://php.net/language.types.null) – The handle of the plugin to use during migration operations, or the plugin itself
| [route](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$route-detail "Defined by yii\base\Controller")                                                                                 | [string](http://php.net/language.types.string) – The route (module ID, controller ID and action ID) of the current request.
| [templateFile](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$templateFile-detail "Defined by yii\console\controllers\BaseMigrateController")               | [string](http://php.net/language.types.string) – The template file for generating new migrations.
| [type](craft-console-controllers-migratecontroller.md#type)                                                                                                                                          | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The type of migrations we're dealing with here.
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$uniqueId-detail "Defined by yii\base\Controller")                                                                           | [string](http://php.net/language.types.string) – The controller ID that is prefixed with the module ID (if any).
| [view](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$view-detail "Defined by yii\base\Controller")                                                                                   | [yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view), [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – The view object that can be used to render views or view files.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$viewPath-detail "Defined by yii\base\Controller")                                                                           | [string](http://php.net/language.types.string) – The directory containing the view files for this controller.

### `noBackup`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.3



Skip backing up the database.



[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L72)



### `noContent`



Type

:   [boolean](http://php.net/language.types.boolean)



Exclude pending content migrations.



[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L66)



### `plugin`



Type

:   [string](http://php.net/language.types.string), [craft\base\Plugin](craft-base-plugin.md), [null](http://php.net/language.types.null)



The handle of the plugin to use during migration operations, or the plugin itself



[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L61)



### `type`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The type of migrations we're dealing with here. Can be 'app', 'plugin', or 'content'.

If --plugin is passed, this will automatically be set to 'plugin'. Otherwise defaults to 'content'.



[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L56)







## Public Methods

| Method                                                                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                                                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                                 | Sets an object property to null.
| [actionAll()](craft-console-controllers-migratecontroller.md#method-actionall)                                                                                                              | Runs all pending Craft, plugin, and content migrations.
| [actionCreate()](craft-console-controllers-migratecontroller.md#method-actioncreate)                                                                                                        | Creates a new migration.
| [actionDown()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionDown()-detail "Defined by yii\console\controllers\BaseMigrateController")       | Downgrades the application by reverting old migrations.
| [actionFresh()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionFresh()-detail "Defined by yii\console\controllers\BaseMigrateController")     | Drops all tables and related constraints. Starts the migration from the beginning.
| [actionHistory()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionHistory()-detail "Defined by yii\console\controllers\BaseMigrateController") | Displays the migration history.
| [actionMark()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionMark()-detail "Defined by yii\console\controllers\BaseMigrateController")       | Modifies the migration history to the specified version.
| [actionNew()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionNew()-detail "Defined by yii\console\controllers\BaseMigrateController")         | Displays the un-applied new migrations.
| [actionRedo()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionRedo()-detail "Defined by yii\console\controllers\BaseMigrateController")       | Redoes the last few migrations.
| [actionTo()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#actionTo()-detail "Defined by yii\console\controllers\BaseMigrateController")           | Upgrades or downgrades till the specified version.
| [actionUp()](craft-console-controllers-migratecontroller.md#method-actionup)                                                                                                                | Upgrades the application by applying new migrations.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                                                                 | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                                                         | This method is invoked right after an action is executed.
| [ansiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#ansiFormat()-detail "Defined by yii\console\Controller")                                                     | Formats a string with ANSI codes.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                                     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                                   | Attaches a list of behaviors to the component.
| [beforeAction()](craft-console-controllers-migratecontroller.md#method-beforeaction)                                                                                                        | This method is invoked right before an action is to be executed (after all possible filters.) It checks the existence of the [migrationPath](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$migrationPath-detail).
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                                               | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#bindActionParams()-detail "Defined by yii\base\Controller")                                               | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                                   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                                   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                             | Returns the fully qualified name of this class.
| [confirm()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#confirm()-detail "Defined by yii\console\Controller")                                                           | Asks user to confirm by typing y or n.
| [createAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#createAction()-detail "Defined by yii\base\Controller")                                                       | Creates an action based on the given action ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                                     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                                   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                                   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [findLayoutFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#findLayoutFile()-detail "Defined by yii\base\Controller")                                                   | Finds the applicable layout file.
| [getActionArgsHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionArgsHelp()-detail "Defined by yii\console\Controller")                                       | Returns the help information for the anonymous arguments for the action.
| [getActionHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionHelp()-detail "Defined by yii\console\Controller")                                               | Returns the detailed help information for the specified action.
| [getActionHelpSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionHelpSummary()-detail "Defined by yii\console\Controller")                                 | Returns a one-line short summary describing the specified action.
| [getActionOptionsHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionOptionsHelp()-detail "Defined by yii\console\Controller")                                 | Returns the help information for the options for the action.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                         | Returns all behaviors attached to this component.
| [getHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelp()-detail "Defined by yii\console\Controller")                                                           | Returns help information for this controller.
| [getHelpSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelpSummary()-detail "Defined by yii\console\Controller")                                             | Returns one-line short summary describing this controller.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getModules()-detail "Defined by yii\base\Controller")                                                           | Returns all ancestor modules of this controller.
| [getOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getOptionValues()-detail "Defined by yii\console\Controller")                                           | Returns properties corresponding to the options for the action id Child classes may override this method to specify possible properties.
| [getPassedOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptionValues()-detail "Defined by yii\console\Controller")                               | Returns the properties corresponding to the passed options.
| [getPassedOptions()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptions()-detail "Defined by yii\console\Controller")                                         | Returns the names of valid options passed during execution.
| [getRoute()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getRoute()-detail "Defined by yii\base\Controller")                                                               | Returns the route of the current request.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getUniqueId()-detail "Defined by yii\base\Controller")                                                         | Returns the unique ID of the controller.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getView()-detail "Defined by yii\base\Controller")                                                                 | Returns the view object that can be used to render views or view files.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getViewPath()-detail "Defined by yii\base\Controller")                                                         | Returns the directory containing view files for this controller.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                                 | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                                         | Returns a value indicating whether a property is defined.
| [init()](craft-console-controllers-migratecontroller.md#method-init)                                                                                                                        | Initializes the object.
| [isColorEnabled()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#isColorEnabled()-detail "Defined by yii\console\Controller")                                             | Returns a value indicating whether ANSI color is enabled.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                             | Attaches an event handler to an event.
| [optionAliases()](craft-console-controllers-migratecontroller.md#method-optionaliases)                                                                                                      | Returns option alias names.
| [options()](craft-console-controllers-migratecontroller.md#method-options)                                                                                                                  | Returns the names of valid options for the action (id) An option requires the existence of a public member variable whose name is the option name.
| [prompt()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#prompt()-detail "Defined by yii\console\Controller")                                                             | Prompts the user for input and validates it.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                                                                   | Renders a view and applies layout if available.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                                                     | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                                                           | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                                                     | Renders a view without applying layout.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                                                         | Runs a request specified in terms of a route.
| [runAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#runAction()-detail "Defined by yii\base\Controller")                                                             | Runs an action within this controller with the specified action ID and parameters.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#select()-detail "Defined by yii\console\Controller")                                                             | Gives the user an option to choose from. Giving '?' as an input will show a list of options to choose from and their explanations.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                                                                 | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                                                         | Sets the directory that contains the view files.
| [stderr()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stderr()-detail "Defined by yii\console\Controller")                                                             | Prints a string to STDERR.
| [stdout()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stdout()-detail "Defined by yii\console\Controller")                                                             | Prints a string to STDOUT.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                                   | Triggers an event.

### `actionAll()`





Runs all pending Craft, plugin, and content migrations.




[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L234-L296)



#### Returns

[integer](http://php.net/language.types.integer)

#### Throws

- [craft\errors\MigrateException](craft-errors-migrateexception.md)


### `actionCreate()`





Creates a new migration.

This command creates a new migration using the available migration template.
After using this command, developers should modify the created migration
skeleton by filling up the actual migration logic.

```
craft migrate/create create_news_section
```

By default the migration will be created within the project's migrations/
folder (as a "content migration").
Use `--plugin=<plugin-handle>` to create a new plugin migration.
Use `--type=app` to create a new Craft CMS app migration.


[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L196-L226)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the new migration. This should only contain
letters, digits, and underscores.


#### Throws

- [yii\console\Exception](https://www.yiiframework.com/doc/api/2.0/yii-console-exception)\
  if the name argument is invalid.


### `actionUp()`





Upgrades the application by applying new migrations.

For example,

```
craft migrate     # apply all new migrations
craft migrate 3   # apply the first 3 new migrations
```


[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L313-L340)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The number of new migrations to be applied. If 0, it means
applying all available new migrations.

#### Returns

[integer](http://php.net/language.types.integer) – The status of the action execution. 0 means normal, other values mean abnormal.



### `beforeAction()`





This method is invoked right before an action is to be executed (after all possible filters.)
It checks the existence of the [migrationPath](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#$migrationPath-detail).








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L137-L174)


#### Arguments

- `$action` ([yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action)) – The action to be executed.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the action should continue to be executed.

#### Throws

- [yii\console\Exception](https://www.yiiframework.com/doc/api/2.0/yii-console-exception)\
  if the 'plugin' option isn't valid


### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L82-L87)






### `optionAliases()`





Returns option alias names.



Child classes may override this method to specify alias options.




[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L124-L131)



#### Returns

[array](http://php.net/language.types.array) – The options alias names valid for the action
where the keys is alias name for option and value is option name.



### `options()`





Returns the names of valid options for the action (id)
An option requires the existence of a public member variable whose
name is the option name.

Child classes may override this method to specify possible options.

Note that the values setting via options are not available
until [beforeAction()](craft-console-controllers-migratecontroller.md#method-beforeaction) is being called.


[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L101-L119)


#### Arguments

- `$actionID` ([string](http://php.net/language.types.string)) – The action id of the current request

#### Returns

[string](http://php.net/language.types.string)[] – The names of the options valid for the action





## Protected Methods

| Method                                                                                                                                                                                                                  | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------
| [addMigrationHistory()](craft-console-controllers-migratecontroller.md#method-addmigrationhistory)                                                                                                                      | Adds new migration entry to the history.
| [createMigration()](craft-console-controllers-migratecontroller.md#method-createmigration)                                                                                                                              | Creates a new migration instance.
| [generateMigrationSourceCode()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#generateMigrationSourceCode()-detail "Defined by yii\console\controllers\BaseMigrateController") | Generates new migration source PHP code.
| [getActionMethodReflection()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionMethodReflection()-detail "Defined by yii\console\Controller")                                                   |
| [getMigrationHistory()](craft-console-controllers-migratecontroller.md#method-getmigrationhistory)                                                                                                                      | Returns the migration history.
| [getMigrationNameLimit()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#getMigrationNameLimit()-detail "Defined by yii\console\controllers\BaseMigrateController")             | Return the maximum name length for a migration.
| [getMigrator()](craft-console-controllers-migratecontroller.md#method-getmigrator)                                                                                                                                      | Returns the migration manager that should be used for this request
| [getNewMigrations()](craft-console-controllers-migratecontroller.md#method-getnewmigrations)                                                                                                                            | Returns the migrations that are not applied.
| [includeMigrationFile()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#includeMigrationFile()-detail "Defined by yii\console\controllers\BaseMigrateController")               | Includes the migration file for a given migration class name.
| [migrateDown()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#migrateDown()-detail "Defined by yii\console\controllers\BaseMigrateController")                                 | Downgrades with the specified migration class.
| [migrateToTime()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#migrateToTime()-detail "Defined by yii\console\controllers\BaseMigrateController")                             | Migrates to the specified apply time in the past.
| [migrateToVersion()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#migrateToVersion()-detail "Defined by yii\console\controllers\BaseMigrateController")                       | Migrates to the certain version.
| [migrateUp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-basemigratecontroller#migrateUp()-detail "Defined by yii\console\controllers\BaseMigrateController")                                     | Upgrades with the specified migration class.
| [outputCommand()](craft-console-controllertrait.md#method-outputcommand "Defined by craft\console\ControllerTrait")                                                                                                     |
| [parseDocCommentDetail()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentDetail()-detail "Defined by yii\console\Controller")                                                           | Returns full description from the docblock.
| [parseDocCommentSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentSummary()-detail "Defined by yii\console\Controller")                                                         | Returns the first line of docblock.
| [parseDocCommentTags()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentTags()-detail "Defined by yii\console\Controller")                                                               | Parses the comment block into tags.
| [removeMigrationHistory()](craft-console-controllers-migratecontroller.md#method-removemigrationhistory)                                                                                                                | Removes existing migration from the history.
| [truncateDatabase()](craft-console-controllers-migratecontroller.md#method-truncatedatabase)                                                                                                                            | Truncates the database.

### `addMigrationHistory()`





Adds new migration entry to the history.








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L398-L401)


#### Arguments

- `$version` ([string](http://php.net/language.types.string)) – Migration version name.




### `createMigration()`





Creates a new migration instance.








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L369-L372)


#### Arguments

- `$class` ([string](http://php.net/language.types.string)) – The migration class name

#### Returns

[yii\db\MigrationInterface](https://www.yiiframework.com/doc/api/2.0/yii-db-migrationinterface) – The migration instance



### `getMigrationHistory()`





Returns the migration history.








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L385-L393)


#### Arguments

- `$limit` ([integer](http://php.net/language.types.integer)) – The maximum number of records in the history to be returned. `null` for "no limit".

#### Returns

[array](http://php.net/language.types.array) – The migration history



### `getMigrator()`





Returns the migration manager that should be used for this request




[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L347-L364)



#### Returns

[craft\db\MigrationManager](craft-db-migrationmanager.md)



### `getNewMigrations()`





Returns the migrations that are not applied.








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L377-L380)



#### Returns

[array](http://php.net/language.types.array) – List of new migrations



### `removeMigrationHistory()`





Removes existing migration from the history.








[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L406-L409)


#### Arguments

- `$version` ([string](http://php.net/language.types.string)) – Migration version name.




### `truncateDatabase()`





Truncates the database.



This method should be overwritten in subclasses to implement the task of clearing the database.




[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/MigrateController.php#L414-L417)




#### Throws

- [yii\base\NotSupportedException](https://www.yiiframework.com/doc/api/2.0/yii-base-notsupportedexception)\
  if not overridden




## Constants

| Constant           | Description
| ------------------ | ----------------------------------------------------------------------------------------
| `BASE_MIGRATION`   | The name of the dummy migration that marks the beginning of the whole migration history.
| `EXIT_CODE_ERROR`  |
| `EXIT_CODE_NORMAL` |



