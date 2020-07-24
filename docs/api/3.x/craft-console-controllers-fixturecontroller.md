---
title: craft\console\controllers\FixtureController
code:
  - php
  - twig
---

# FixtureController

Type

:   Class

Namespace

:   craft\console\controllers

Inherits

:   [craft\console\controllers\FixtureController](craft-console-controllers-fixturecontroller.md) &raquo;
[yii\console\controllers\FixtureController](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller) &raquo;
[yii\console\Controller](https://www.yiiframework.com/doc/api/2.0/yii-console-controller) &raquo;
[yii\base\Controller](https://www.yiiframework.com/doc/api/2.0/yii-base-controller) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface)

Uses traits

:   [yii\test\FixtureTrait](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait)

Since

:   3.2.0



Allows you to manage test fixtures.





[View source](https://github.com/craftcms/cms/blob/master/src/console/controllers/FixtureController.php)


## Public Properties

| Property                                                                                                                                                                           | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [action](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$action-detail "Defined by yii\base\Controller")                                                             | [yii\base\Action](https://www.yiiframework.com/doc/api/2.0/yii-base-action) – The action that is currently being executed.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                         | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [color](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$color-detail "Defined by yii\console\Controller")                                                         | [boolean](http://php.net/language.types.boolean) – Whether to enable ANSI color in the output.
| [defaultAction](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$defaultAction-detail "Defined by yii\base\Controller")                                               | [string](http://php.net/language.types.string) – The ID of the action that is used when the action ID is not specified in the request.
| [fixtures](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#$fixtures-detail "Defined by yii\test\FixtureTrait")                                                     | [yii\test\Fixture](https://www.yiiframework.com/doc/api/2.0/yii-test-fixture) – The loaded fixtures for the current test case
| [globalFixtures](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#$globalFixtures-detail "Defined by yii\console\controllers\FixtureController") | [array](http://php.net/language.types.array) – Global fixtures that should be applied when loading and unloading.
| [help](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$help-detail "Defined by yii\console\Controller")                                                           | [boolean](http://php.net/language.types.boolean) – Whether to display help information about current command.
| [helpSummary](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$helpSummary-detail "Defined by yii\console\Controller")                                             | [string](http://php.net/language.types.string)
| [id](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$id-detail "Defined by yii\base\Controller")                                                                     | [string](http://php.net/language.types.string) – The ID of this controller.
| [interactive](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$interactive-detail "Defined by yii\console\Controller")                                             | [boolean](http://php.net/language.types.boolean) – Whether to run the command interactively.
| [layout](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$layout-detail "Defined by yii\base\Controller")                                                             | [null](http://php.net/language.types.null), [string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The name of the layout to be applied to this controller's views.
| [module](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$module-detail "Defined by yii\base\Controller")                                                             | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – The module that this controller belongs to.
| [modules](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$modules-detail "Defined by yii\base\Controller")                                                           | [yii\base\Module](https://www.yiiframework.com/doc/api/2.0/yii-base-module) – All ancestor modules that this controller is located within.
| [namespace](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#$namespace-detail "Defined by yii\console\controllers\FixtureController")           | [string](http://php.net/language.types.string) – Default namespace to search fixtures in
| [passedOptionValues](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptionValues-detail "Defined by yii\console\Controller")                               | [array](http://php.net/language.types.array) – The properties corresponding to the passed options
| [passedOptions](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#$passedOptions-detail "Defined by yii\console\Controller")                                         | [array](http://php.net/language.types.array) – The names of the options passed during execution
| [route](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$route-detail "Defined by yii\base\Controller")                                                               | [string](http://php.net/language.types.string) – The route (module ID, controller ID and action ID) of the current request.
| [uniqueId](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$uniqueId-detail "Defined by yii\base\Controller")                                                         | [string](http://php.net/language.types.string) – The controller ID that is prefixed with the module ID (if any).
| [view](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$view-detail "Defined by yii\base\Controller")                                                                 | [yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view), [yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) – The view object that can be used to render views or view files.
| [viewPath](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#$viewPath-detail "Defined by yii\base\Controller")                                                         | [string](http://php.net/language.types.string) – The directory containing the view files for this controller.





## Public Methods

| Method                                                                                                                                                                                              | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                                           | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                                                           | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                                 | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                                             | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                                         | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                                             | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                                         | Sets an object property to null.
| [actionLoad()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#actionLoad()-detail "Defined by yii\console\controllers\FixtureController")                       | Loads the specified fixture data.
| [actionUnload()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#actionUnload()-detail "Defined by yii\console\controllers\FixtureController")                   | Unloads the specified fixtures.
| [actions()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#actions()-detail "Defined by yii\base\Controller")                                                                         | Declares external actions for the controller.
| [afterAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#afterAction()-detail "Defined by yii\base\Controller")                                                                 | This method is invoked right after an action is executed.
| [ansiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#ansiFormat()-detail "Defined by yii\console\Controller")                                                             | Formats a string with ANSI codes.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                                             | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                                           | Attaches a list of behaviors to the component.
| [beforeAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#beforeAction()-detail "Defined by yii\base\Controller")                                                               | This method is invoked right before an action is executed.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                                                       | Returns a list of behaviors that this component should behave as.
| [bindActionParams()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#bindActionParams()-detail "Defined by yii\base\Controller")                                                       | Binds the parameters to the action.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                                           | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                                           | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                                     | Returns the fully qualified name of this class.
| [confirm()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#confirm()-detail "Defined by yii\console\Controller")                                                                   | Asks user to confirm by typing y or n.
| [createAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#createAction()-detail "Defined by yii\base\Controller")                                                               | Creates an action based on the given action ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                                             | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                                           | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                                           | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [findLayoutFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#findLayoutFile()-detail "Defined by yii\base\Controller")                                                           | Finds the applicable layout file.
| [fixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#fixtures()-detail "Defined by yii\test\FixtureTrait")                                                                   | Declares the fixtures that are needed by the current test case.
| [getActionArgsHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionArgsHelp()-detail "Defined by yii\console\Controller")                                               | Returns the help information for the anonymous arguments for the action.
| [getActionHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionHelp()-detail "Defined by yii\console\Controller")                                                       | Returns the detailed help information for the specified action.
| [getActionHelpSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionHelpSummary()-detail "Defined by yii\console\Controller")                                         | Returns a one-line short summary describing the specified action.
| [getActionOptionsHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionOptionsHelp()-detail "Defined by yii\console\Controller")                                         | Returns the help information for the options for the action.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                                   | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                                 | Returns all behaviors attached to this component.
| [getFixture()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#getFixture()-detail "Defined by yii\test\FixtureTrait")                                                               | Returns the named fixture.
| [getFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#getFixtures()-detail "Defined by yii\test\FixtureTrait")                                                             | Returns the fixture objects as specified in [globalFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#globalFixtures()-detail) and [fixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#fixtures()-detail).
| [getHelp()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelp()-detail "Defined by yii\console\Controller")                                                                   | Returns help information for this controller.
| [getHelpSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getHelpSummary()-detail "Defined by yii\console\Controller")                                                     | Returns one-line short summary describing this controller.
| [getModules()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getModules()-detail "Defined by yii\base\Controller")                                                                   | Returns all ancestor modules of this controller.
| [getOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getOptionValues()-detail "Defined by yii\console\Controller")                                                   | Returns properties corresponding to the options for the action id Child classes may override this method to specify possible properties.
| [getPassedOptionValues()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptionValues()-detail "Defined by yii\console\Controller")                                       | Returns the properties corresponding to the passed options.
| [getPassedOptions()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getPassedOptions()-detail "Defined by yii\console\Controller")                                                 | Returns the names of valid options passed during execution.
| [getRoute()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getRoute()-detail "Defined by yii\base\Controller")                                                                       | Returns the route of the current request.
| [getUniqueId()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getUniqueId()-detail "Defined by yii\base\Controller")                                                                 | Returns the unique ID of the controller.
| [getView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getView()-detail "Defined by yii\base\Controller")                                                                         | Returns the view object that can be used to render views or view files.
| [getViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#getViewPath()-detail "Defined by yii\base\Controller")                                                                 | Returns the directory containing view files for this controller.
| [globalFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#globalFixtures()-detail "Defined by yii\test\FixtureTrait")                                                       | Declares the fixtures shared required by different test cases.
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                                         | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                                     | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                                                 | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                                               | Initializes the object.
| [initFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#initFixtures()-detail "Defined by yii\test\FixtureTrait")                                                           | Initialize the fixtures.
| [isColorEnabled()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#isColorEnabled()-detail "Defined by yii\console\Controller")                                                     | Returns a value indicating whether ANSI color is enabled.
| [loadFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#loadFixtures()-detail "Defined by yii\test\FixtureTrait")                                                           | Loads the specified fixtures.
| [needToApplyAll()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#needToApplyAll()-detail "Defined by yii\console\controllers\FixtureController")               | Checks if needed to apply all fixtures.
| [notifyNothingToLoad()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#notifyNothingToLoad()-detail "Defined by yii\console\controllers\FixtureController")     | Notifies user that there are no fixtures to load according input conditions.
| [notifyNothingToUnload()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#notifyNothingToUnload()-detail "Defined by yii\console\controllers\FixtureController") | Notifies user that there are no fixtures to unload according input conditions.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                                   | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                                     | Attaches an event handler to an event.
| [optionAliases()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#optionAliases()-detail "Defined by yii\console\controllers\FixtureController")                 | Returns option alias names.
| [options()](https://www.yiiframework.com/doc/api/2.0/yii-console-controllers-fixturecontroller#options()-detail "Defined by yii\console\controllers\FixtureController")                             | Returns the names of valid options for the action (id) An option requires the existence of a public member variable whose name is the option name.
| [prompt()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#prompt()-detail "Defined by yii\console\Controller")                                                                     | Prompts the user for input and validates it.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#render()-detail "Defined by yii\base\Controller")                                                                           | Renders a view and applies layout if available.
| [renderContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderContent()-detail "Defined by yii\base\Controller")                                                             | Renders a static string by applying a layout.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderFile()-detail "Defined by yii\base\Controller")                                                                   | Renders a view file.
| [renderPartial()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#renderPartial()-detail "Defined by yii\base\Controller")                                                             | Renders a view without applying layout.
| [run()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#run()-detail "Defined by yii\base\Controller")                                                                                 | Runs a request specified in terms of a route.
| [runAction()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#runAction()-detail "Defined by yii\base\Controller")                                                                     | Runs an action within this controller with the specified action ID and parameters.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#select()-detail "Defined by yii\console\Controller")                                                                     | Gives the user an option to choose from. Giving '?' as an input will show a list of options to choose from and their explanations.
| [setView()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setView()-detail "Defined by yii\base\Controller")                                                                         | Sets the view object to be used by this controller.
| [setViewPath()](https://www.yiiframework.com/doc/api/2.0/yii-base-controller#setViewPath()-detail "Defined by yii\base\Controller")                                                                 | Sets the directory that contains the view files.
| [stderr()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stderr()-detail "Defined by yii\console\Controller")                                                                     | Prints a string to STDERR.
| [stdout()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#stdout()-detail "Defined by yii\console\Controller")                                                                     | Prints a string to STDOUT.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                                           | Triggers an event.
| [unloadFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#unloadFixtures()-detail "Defined by yii\test\FixtureTrait")                                                       | Unloads the specified fixtures.



## Protected Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------
| [createFixtures()](https://www.yiiframework.com/doc/api/2.0/yii-test-fixturetrait#createFixtures()-detail "Defined by yii\test\FixtureTrait")                         | Creates the specified fixture instances.
| [getActionMethodReflection()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#getActionMethodReflection()-detail "Defined by yii\console\Controller") |
| [parseDocCommentDetail()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentDetail()-detail "Defined by yii\console\Controller")         | Returns full description from the docblock.
| [parseDocCommentSummary()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentSummary()-detail "Defined by yii\console\Controller")       | Returns the first line of docblock.
| [parseDocCommentTags()](https://www.yiiframework.com/doc/api/2.0/yii-console-controller#parseDocCommentTags()-detail "Defined by yii\console\Controller")             | Parses the comment block into tags.



## Constants

| Constant           | Description
| ------------------ | -----------
| `EXIT_CODE_ERROR`  |
| `EXIT_CODE_NORMAL` |



