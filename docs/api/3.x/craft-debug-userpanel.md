---
title: craft\debug\UserPanel
code:
  - php
  - twig
---

# UserPanel

Type

:   Class

Namespace

:   craft\debug

Inherits

:   [craft\debug\UserPanel](craft-debug-userpanel.md) &raquo;
[yii\debug\panels\UserPanel](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel) &raquo;
[yii\debug\Panel](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



Debugger panel that collects and displays user info.

.



[View source](https://github.com/craftcms/cms/blob/master/src/debug/UserPanel.php)


## Public Properties

| Property                                                                                                                                                                              | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [actions](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$actions-detail "Defined by yii\debug\Panel")                                         | [array](http://php.net/language.types.array) – Array of actions to add to the debug modules default controller.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")                                                            | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [data](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$data-detail "Defined by yii\debug\Panel")                                               | `mixed` – Data associated with panel
| [detail](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$detail-detail "Defined by yii\debug\Panel")                                           | [string](http://php.net/language.types.string) – Content that is displayed in debugger detail view
| [displayName](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$displayName-detail "Defined by yii\debug\panels\UserPanel")           | [string](http://php.net/language.types.string) – Display Name of the debug panel.
| [filterColumns](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$filterColumns-detail "Defined by yii\debug\panels\UserPanel")       | [array](http://php.net/language.types.array) – Allowed columns for GridView.
| [filterModel](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$filterModel-detail "Defined by yii\debug\panels\UserPanel")           | [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model), [yii\debug\models\search\UserSearchInterface](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-models-search-usersearchinterface) – Implements of User model with search method.
| [id](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$id-detail "Defined by yii\debug\Panel")                                                   | [string](http://php.net/language.types.string) – Panel unique identifier.
| [module](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$module-detail "Defined by yii\debug\Panel")                                           | [yii\debug\Module](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-module)
| [name](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$name-detail "Defined by yii\debug\Panel")                                               | [string](http://php.net/language.types.string) – Name of the panel
| [ruleUserSwitch](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$ruleUserSwitch-detail "Defined by yii\debug\panels\UserPanel")     | [array](http://php.net/language.types.array) – The rule which defines who allowed to switch user identity.
| [summary](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$summary-detail "Defined by yii\debug\Panel")                                         | [string](http://php.net/language.types.string) – Content that is displayed at debug toolbar
| [tag](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$tag-detail "Defined by yii\debug\Panel")                                                 | [string](http://php.net/language.types.string) – Request data set identifier.
| [url](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$url-detail "Defined by yii\debug\Panel")                                                 | [string](http://php.net/language.types.string) – URL pointing to panel detail view
| [user](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$user-detail "Defined by yii\debug\panels\UserPanel")                         | [yii\web\User](https://www.yiiframework.com/doc/api/2.0/yii-web-user), [null](http://php.net/language.types.null)
| [userComponent](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$userComponent-detail "Defined by yii\debug\panels\UserPanel")       | [string](http://php.net/language.types.string), [yii\web\User](https://www.yiiframework.com/doc/api/2.0/yii-web-user) – ID of the user component or a user object
| [userDataProvider](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$userDataProvider-detail "Defined by yii\debug\panels\UserPanel") | [yii\data\DataProviderInterface](https://www.yiiframework.com/doc/api/2.0/yii-data-dataproviderinterface)
| [userSwitch](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$userSwitch-detail "Defined by yii\debug\panels\UserPanel")             | [yii\debug\models\UserSwitch](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-models-userswitch) – Object of switching users
| [usersFilterModel](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#$usersFilterModel-detail "Defined by yii\debug\panels\UserPanel") | [yii\base\Model](https://www.yiiframework.com/doc/api/2.0/yii-base-model), [yii\debug\models\search\UserSearchInterface](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-models-search-usersearchinterface)



## Protected Properties

| Property                                                                                                                                  | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [error](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#$error-detail "Defined by yii\debug\Panel") | [yii\debug\FlattenException](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-flattenexception), [null](http://php.net/language.types.null) – Error while saving the panel



## Public Methods

| Method                                                                                                                                                                                         | Description
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                                                                      | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                                                                      | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")                                                            | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                                                                        | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                                                                    | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                                                                        | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                                                                    | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")                                                        | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")                                                      | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                                                                  | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")                                                      | Returns a value indicating whether a property can be read.
| [canSearchUsers()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#canSearchUsers()-detail "Defined by yii\debug\panels\UserPanel")           | Check is available search of users
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")                                                      | Returns a value indicating whether a property can be set.
| [canSwitchUser()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#canSwitchUser()-detail "Defined by yii\debug\panels\UserPanel")             | Check can main user switch identity.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")                                                                | Returns the fully qualified name of this class.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")                                                        | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")                                                      | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")                                                      | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")                                                              | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")                                                            | Returns all behaviors attached to this component.
| [getDetail()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getDetail()-detail "Defined by yii\debug\Panel")                                           |
| [getError()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getError()-detail "Defined by yii\debug\Panel")                                             |
| [getName()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getName()-detail "Defined by yii\debug\Panel")                                               |
| [getSummary()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getSummary()-detail "Defined by yii\debug\Panel")                                         |
| [getTraceLine()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getTraceLine()-detail "Defined by yii\debug\Panel")                                     | Returns a trace line
| [getUrl()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getUrl()-detail "Defined by yii\debug\Panel")                                                 |
| [getUser()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#getUser()-detail "Defined by yii\debug\panels\UserPanel")                         |
| [getUserDataProvider()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#getUserDataProvider()-detail "Defined by yii\debug\panels\UserPanel") | Get model for GridView -> DataProvider
| [getUsersFilterModel()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#getUsersFilterModel()-detail "Defined by yii\debug\panels\UserPanel") | Get model for GridView -> FilterModel
| [hasError()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#hasError()-detail "Defined by yii\debug\Panel")                                             |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")                                                    | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")                                                                | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")                                                            | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                                                                          | Initializes the object.
| [isEnabled()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#isEnabled()-detail "Defined by yii\debug\Panel")                                           | Checks whether this panel is enabled.
| [load()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#load()-detail "Defined by yii\debug\Panel")                                                     | Loads data into the panel
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                                                                              | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                                                                                | Attaches an event handler to an event.
| [save()](craft-debug-userpanel.md#method-save)                                                                                                                                                 |
| [setError()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#setError()-detail "Defined by yii\debug\Panel")                                             |
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                                                                      | Triggers an event.

### `save()`










[View source](https://github.com/craftcms/cms/blob/master/src/debug/UserPanel.php#L23-L35)








## Protected Methods

| Method                                                                                                                                                                           | Description
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------
| [dataToString()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#dataToString()-detail "Defined by yii\debug\panels\UserPanel") | Converts mixed data to string
| [getLogMessages()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panel#getLogMessages()-detail "Defined by yii\debug\Panel")                   | Gets messages from log target and filters according to their categories and levels.
| [identityData()](https://www.yiiframework.com/extension/yiisoft/yii2-debug/doc/api/2.2/yii-debug-panels-userpanel#identityData()-detail "Defined by yii\debug\panels\UserPanel") | Returns the array that should be set on [yii\widgets\DetailView::$model](https://www.yiiframework.com/doc/api/2.0/yii-widgets-detailview#$model-detail)






