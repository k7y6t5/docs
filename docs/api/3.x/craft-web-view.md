---
title: craft\web\View
code:
  - php
  - twig
---

# View

Type

:   Class

Namespace

:   craft\web

Inherits

:   [craft\web\View](craft-web-view.md) &raquo;
[yii\web\View](https://www.yiiframework.com/doc/api/2.0/yii-web-view) &raquo;
[yii\base\View](https://www.yiiframework.com/doc/api/2.0/yii-base-view) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable), [yii\base\DynamicContentAwareInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-dynamiccontentawareinterface)

Since

:   3.0.0









[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)


## Public Properties

| Property                                                                                                                       | Description
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [assetBundles](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$assetBundles-detail "Defined by yii\web\View")           | [yii\web\AssetBundle](https://www.yiiframework.com/doc/api/2.0/yii-web-assetbundle) – List of the registered asset bundles.
| [assetManager](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$assetManager-detail "Defined by yii\web\View")           | [yii\web\AssetManager](https://www.yiiframework.com/doc/api/2.0/yii-web-assetmanager) – The asset manager.
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component")     | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [blocks](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$blocks-detail "Defined by yii\base\View")                     | [array](http://php.net/language.types.array) – A list of named output blocks.
| [bodyHtml](craft-web-view.md#bodyhtml)                                                                                         | [string](http://php.net/language.types.string) – The rendered content
| [context](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$context-detail "Defined by yii\base\View")                   | [yii\base\ViewContextInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-viewcontextinterface) – The context under which the [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderFile()-detail) method is being invoked.
| [cpTemplateRoots](craft-web-view.md#cptemplateroots)                                                                           | [array](http://php.net/language.types.array)
| [css](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$css-detail "Defined by yii\web\View")                             | [array](http://php.net/language.types.array) – The registered CSS code blocks.
| [cssFiles](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$cssFiles-detail "Defined by yii\web\View")                   | [array](http://php.net/language.types.array) – The registered CSS files.
| [defaultExtension](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$defaultExtension-detail "Defined by yii\base\View") | [string](http://php.net/language.types.string) – The default view file extension.
| [deltaNames](craft-web-view.md#deltanames)                                                                                     | [string](http://php.net/language.types.string)[]
| [dynamicContents](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$dynamicContents-detail "Defined by yii\base\View")   | [yii\base\DynamicContentAwareInterface](https://www.yiiframework.com/doc/api/2.0/yii-base-dynamiccontentawareinterface) – Class instances supporting dynamic contents.
| [headHtml](craft-web-view.md#headhtml)                                                                                         | [string](http://php.net/language.types.string) – The rendered content
| [initialDeltaValue](craft-web-view.md#initialdeltavalue)                                                                       | `mixed[]`
| [isDeltaRegistrationActive](craft-web-view.md#isdeltaregistrationactive)                                                       | [boolean](http://php.net/language.types.boolean)
| [isRenderingPageTemplate](craft-web-view.md#isrenderingpagetemplate)                                                           | [boolean](http://php.net/language.types.boolean) – Whether a page template is currently being rendered.
| [isRenderingTemplate](craft-web-view.md#isrenderingtemplate)                                                                   | [boolean](http://php.net/language.types.boolean) – Whether a template is currently being rendered.
| [js](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$js-detail "Defined by yii\web\View")                               | [array](http://php.net/language.types.array) – The registered JS code blocks
| [jsFiles](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$jsFiles-detail "Defined by yii\web\View")                     | [array](http://php.net/language.types.array) – The registered JS files.
| [linkTags](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$linkTags-detail "Defined by yii\web\View")                   | [array](http://php.net/language.types.array) – The registered link tags.
| [metaTags](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$metaTags-detail "Defined by yii\web\View")                   | [array](http://php.net/language.types.array) – The registered meta tags.
| [minifyCss](craft-web-view.md#minifycss)                                                                                       | [boolean](http://php.net/language.types.boolean) – Whether to minify CSS registered with [registerCss()](craft-web-view.md#method-registercss)
| [minifyJs](craft-web-view.md#minifyjs)                                                                                         | [boolean](http://php.net/language.types.boolean) – Whether to minify JS registered with [registerJs()](craft-web-view.md#method-registerjs)
| [namespace](craft-web-view.md#namespace)                                                                                       | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The namespace.
| [params](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$params-detail "Defined by yii\base\View")                     | `mixed` – Custom parameters that are shared among view templates.
| [registeredAssetBundles](craft-web-view.md#registeredassetbundles)                                                             | [string](http://php.net/language.types.string)[] – Asset bundle names
| [registeredJsFiles](craft-web-view.md#registeredjsfiles)                                                                       | [string](http://php.net/language.types.string)[]
| [renderers](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$renderers-detail "Defined by yii\base\View")               | [array](http://php.net/language.types.array) – A list of available renderers indexed by their corresponding supported file extensions.
| [siteTemplateRoots](craft-web-view.md#sitetemplateroots)                                                                       | [array](http://php.net/language.types.array)
| [templateMode](craft-web-view.md#templatemode)                                                                                 | [string](http://php.net/language.types.string) – Either `site` or `cp`.
| [templatesPath](craft-web-view.md#templatespath)                                                                               | [string](http://php.net/language.types.string)
| [theme](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$theme-detail "Defined by yii\base\View")                       | [yii\base\Theme](https://www.yiiframework.com/doc/api/2.0/yii-base-theme), [array](http://php.net/language.types.array), [string](http://php.net/language.types.string) – The theme object or the configuration for creating the theme object.
| [title](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$title-detail "Defined by yii\web\View")                         | [string](http://php.net/language.types.string) – The page title
| [twig](craft-web-view.md#twig)                                                                                                 | [craft\web\twig\Environment](craft-web-twig-environment.md)
| [viewFile](https://www.yiiframework.com/doc/api/2.0/yii-base-view#$viewFile-detail "Defined by yii\base\View")                 | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The view file currently being rendered.

### `bodyHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The rendered content



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `cpTemplateRoots`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `deltaNames`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `headHtml`



Type

:   [string](http://php.net/language.types.string)

Access

:   Read-only



The rendered content



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `initialDeltaValue`



Type

:   `mixed[]`

Access

:   Read-only

Since

:   3.4.6







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `isDeltaRegistrationActive`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `isRenderingPageTemplate`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether a page template is currently being rendered.



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `isRenderingTemplate`



Type

:   [boolean](http://php.net/language.types.boolean)

Access

:   Read-only



Whether a template is currently being rendered.



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `minifyCss`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.0



Whether to minify CSS registered with [registerCss()](craft-web-view.md#method-registercss)



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L105)



### `minifyJs`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.0



Whether to minify JS registered with [registerJs()](craft-web-view.md#method-registerjs)



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L111)



### `namespace`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)

Access

:   Read-only



The namespace.



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `registeredAssetBundles`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Write-only

Since

:   3.0.10



Asset bundle names



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `registeredJsFiles`



Type

:   [string](http://php.net/language.types.string)[]

Access

:   Write-only

Since

:   3.0.10







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `siteTemplateRoots`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `templateMode`



Type

:   [string](http://php.net/language.types.string)



Either `site` or `cp`.



[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `templatesPath`



Type

:   [string](http://php.net/language.types.string)







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)



### `twig`



Type

:   [craft\web\twig\Environment](craft-web-twig-environment.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php)







## Public Methods

| Method                                                                                                                                        | Description
| --------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                     | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                     | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")           | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                       | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                   | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                   | Sets an object property to null.
| [addDynamicPlaceholder()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#addDynamicPlaceholder()-detail "Defined by yii\base\View")   | Adds a placeholder for dynamic content.
| [afterRender()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#afterRender()-detail "Defined by yii\base\View")                       | This method is invoked right after [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderFile()-detail) renders a view file.
| [afterRenderPageTemplate()](craft-web-view.md#method-afterrenderpagetemplate)                                                                 | Performs actions after a page template is rendered.
| [afterRenderTemplate()](craft-web-view.md#method-afterrendertemplate)                                                                         | Performs actions after a template is rendered.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")       | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")     | Attaches a list of behaviors to the component.
| [beforeRender()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#beforeRender()-detail "Defined by yii\base\View")                     | This method is invoked right before [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderFile()-detail) renders a view file.
| [beforeRenderPageTemplate()](craft-web-view.md#method-beforerenderpagetemplate)                                                               | Performs actions before a page template is rendered.
| [beforeRenderTemplate()](craft-web-view.md#method-beforerendertemplate)                                                                       | Performs actions before a template is rendered.
| [beginBlock()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#beginBlock()-detail "Defined by yii\base\View")                         | Begins recording a block.
| [beginBody()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#beginBody()-detail "Defined by yii\web\View")                             | Marks the beginning of an HTML body section.
| [beginCache()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#beginCache()-detail "Defined by yii\base\View")                         | Begins fragment caching.
| [beginContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#beginContent()-detail "Defined by yii\base\View")                     | Begins the rendering of content that is to be decorated by the specified view.
| [beginPage()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#beginPage()-detail "Defined by yii\base\View")                           | Marks the beginning of a page.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")                 | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")     | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")               | Returns the fully qualified name of this class.
| [clear()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#clear()-detail "Defined by yii\web\View")                                     | Clears up the registered meta tags, link tags, css/js scripts and files.
| [clearJsBuffer()](craft-web-view.md#method-clearjsbuffer)                                                                                     | Clears and ends a JavaScript buffer, returning whatever JavaScript code was included while the buffer was active.
| [createTwig()](craft-web-view.md#method-createtwig)                                                                                           | Creates a new Twig environment.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")       | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")     | Detaches all behaviors from the component.
| [doesTemplateExist()](craft-web-view.md#method-doestemplateexist)                                                                             | Returns whether a template exists.
| [endBlock()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#endBlock()-detail "Defined by yii\base\View")                             | Ends recording a block.
| [endBody()](craft-web-view.md#method-endbody)                                                                                                 | Marks the ending of an HTML body section.
| [endCache()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#endCache()-detail "Defined by yii\base\View")                             | Ends fragment caching.
| [endContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#endContent()-detail "Defined by yii\base\View")                         | Ends the rendering of content.
| [endPage()](craft-web-view.md#method-endpage)                                                                                                 | Marks the ending of an HTML page.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")     | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [evaluateDynamicContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#evaluateDynamicContent()-detail "Defined by yii\base\View") | Evaluates the given PHP statements.
| [formatInputId()](craft-web-view.md#method-formatinputid)                                                                                     | Formats an ID out of an input name.
| [getAssetManager()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#getAssetManager()-detail "Defined by yii\web\View")                 | Registers the asset manager being used by this view object.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")             | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")           | Returns all behaviors attached to this component.
| [getBodyHtml()](craft-web-view.md#method-getbodyhtml)                                                                                         | Returns the content to be inserted at the end of the body section.
| [getCpTemplateRoots()](craft-web-view.md#method-getcptemplateroots)                                                                           | Returns any registered control panel template roots.
| [getDeltaNames()](craft-web-view.md#method-getdeltanames)                                                                                     | Returns all of the registered delta input names.
| [getDynamicContents()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#getDynamicContents()-detail "Defined by yii\base\View")         | Returns a list of currently active dynamic content class instances.
| [getDynamicPlaceholders()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#getDynamicPlaceholders()-detail "Defined by yii\base\View") | Returns a list of placeholders for dynamic content. This method is used internally to implement the content caching feature.
| [getHeadHtml()](craft-web-view.md#method-getheadhtml)                                                                                         | Returns the content to be inserted in the head section.
| [getInitialDeltaValue()](craft-web-view.md#method-getinitialdeltavalue)                                                                       | Returns the initial values of delta inputs.
| [getIsDeltaRegistrationActive()](craft-web-view.md#method-getisdeltaregistrationactive)                                                       | Returns whether delta input name registration is currently active
| [getIsRenderingPageTemplate()](craft-web-view.md#method-getisrenderingpagetemplate)                                                           | Returns whether a page template is currently being rendered.
| [getIsRenderingTemplate()](craft-web-view.md#method-getisrenderingtemplate)                                                                   | Returns whether a template is currently being rendered.
| [getNamespace()](craft-web-view.md#method-getnamespace)                                                                                       | Returns the active namespace.
| [getSiteTemplateRoots()](craft-web-view.md#method-getsitetemplateroots)                                                                       | Returns any registered site template roots.
| [getTemplateMode()](craft-web-view.md#method-gettemplatemode)                                                                                 | Returns the current template mode (either `site` or `cp`).
| [getTemplatesPath()](craft-web-view.md#method-gettemplatespath)                                                                               | Returns the base path that templates should be found in.
| [getTwig()](craft-web-view.md#method-gettwig)                                                                                                 | Returns the Twig environment.
| [getViewFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#getViewFile()-detail "Defined by yii\base\View")                       |
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component")   | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")               | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a property is defined.
| [head()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#head()-detail "Defined by yii\web\View")                                       | Marks the position of an HTML head section.
| [hook()](craft-web-view.md#method-hook)                                                                                                       | Queues up a method to be called by a given template hook.
| [init()](craft-web-view.md#method-init)                                                                                                       | Initializes the view component.
| [invokeHook()](craft-web-view.md#method-invokehook)                                                                                           | Invokes a template hook.
| [namespaceInputId()](craft-web-view.md#method-namespaceinputid)                                                                               | Namespaces an input ID.
| [namespaceInputName()](craft-web-view.md#method-namespaceinputname)                                                                           | Namespaces an input name.
| [namespaceInputs()](craft-web-view.md#method-namespaceinputs)                                                                                 | Renames HTML input names so they belong to a namespace.
| [normalizeObjectTemplate()](craft-web-view.md#method-normalizeobjecttemplate)                                                                 | Normalizes an object template for [renderObjectTemplate()](craft-web-view.md#method-renderobjecttemplate).
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                             | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                               | Attaches an event handler to an event.
| [popDynamicContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#popDynamicContent()-detail "Defined by yii\base\View")           | Removes a last class instance supporting dynamic contents from a list of currently active dynamic content class instances.
| [pushDynamicContent()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#pushDynamicContent()-detail "Defined by yii\base\View")         | Adds a class instance supporting dynamic contents to the end of a list of currently active dynamic content class instances.
| [registerAssetBundle()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerAssetBundle()-detail "Defined by yii\web\View")         | Registers the named asset bundle.
| [registerCsrfMetaTags()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCsrfMetaTags()-detail "Defined by yii\web\View")       | Registers CSRF meta tags.
| [registerCss()](craft-web-view.md#method-registercss)                                                                                         | Registers a CSS code block.
| [registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail "Defined by yii\web\View")                 | Registers a CSS file.
| [registerDeltaName()](craft-web-view.md#method-registerdeltaname)                                                                             | Registers a delta input name.
| [registerHiResCss()](craft-web-view.md#method-registerhirescss)                                                                               | Registers a hi-res CSS code block.
| [registerJs()](craft-web-view.md#method-registerjs)                                                                                           | Registers a JS code block.
| [registerJsFile()](craft-web-view.md#method-registerjsfile)                                                                                   | Registers a JS file.
| [registerJsVar()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerJsVar()-detail "Defined by yii\web\View")                     | Registers a JS code block defining a variable. The name of variable will be used as key, preventing duplicated variable names.
| [registerLinkTag()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerLinkTag()-detail "Defined by yii\web\View")                 | Registers a link tag.
| [registerMetaTag()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerMetaTag()-detail "Defined by yii\web\View")                 | Registers a meta tag.
| [registerScript()](craft-web-view.md#method-registerscript)                                                                                   | Registers a generic `<script>` code block.
| [registerTranslations()](craft-web-view.md#method-registertranslations)                                                                       | Translates messages for a given translation category, so they will be available for `Craft.t()` calls in the control panel.
| [registerTwigExtension()](craft-web-view.md#method-registertwigextension)                                                                     | Registers a new Twig extension, which will be added on existing environments and queued up for future environments.
| [render()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#render()-detail "Defined by yii\base\View")                                 | Renders a view.
| [renderAjax()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#renderAjax()-detail "Defined by yii\web\View")                           | Renders a view in response to an AJAX request.
| [renderDynamic()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderDynamic()-detail "Defined by yii\base\View")                   | Renders dynamic content returned by the given PHP statements.
| [renderFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderFile()-detail "Defined by yii\base\View")                         | Renders a view file.
| [renderObjectTemplate()](craft-web-view.md#method-renderobjecttemplate)                                                                       | Renders an object template.
| [renderPageTemplate()](craft-web-view.md#method-renderpagetemplate)                                                                           | Renders a Twig template that represents an entire web page.
| [renderPhpFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#renderPhpFile()-detail "Defined by yii\base\View")                   | Renders a view file as a PHP script.
| [renderString()](craft-web-view.md#method-renderstring)                                                                                       | Renders a template defined in a string.
| [renderTemplate()](craft-web-view.md#method-rendertemplate)                                                                                   | Renders a Twig template.
| [renderTemplateMacro()](craft-web-view.md#method-rendertemplatemacro)                                                                         | Renders a macro within a given Twig template.
| [resolveTemplate()](craft-web-view.md#method-resolvetemplate)                                                                                 | Finds a template on the file system and returns its path.
| [setAssetManager()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#setAssetManager()-detail "Defined by yii\web\View")                 | Sets the asset manager.
| [setDynamicPlaceholders()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#setDynamicPlaceholders()-detail "Defined by yii\base\View") | Sets a list of placeholders for dynamic content. This method is used internally to implement the content caching feature.
| [setInitialDeltaValue()](craft-web-view.md#method-setinitialdeltavalue)                                                                       | Sets the initial value of a delta input name.
| [setIsDeltaRegistrationActive()](craft-web-view.md#method-setisdeltaregistrationactive)                                                       | Sets whether delta input name registration is active.
| [setNamespace()](craft-web-view.md#method-setnamespace)                                                                                       | Sets the active namespace.
| [setRegisteredAssetBundles()](craft-web-view.md#method-setregisteredassetbundles)                                                             | Sets the asset bundle names that should be marked as already registered.
| [setRegisteredJsFiles()](craft-web-view.md#method-setregisteredjsfiles)                                                                       | Sets the JS files that should be marked as already registered.
| [setTemplateMode()](craft-web-view.md#method-settemplatemode)                                                                                 | Sets the current template mode.
| [setTemplatesPath()](craft-web-view.md#method-settemplatespath)                                                                               | Sets the base path that templates should be found in.
| [startJsBuffer()](craft-web-view.md#method-startjsbuffer)                                                                                     | Starts a JavaScript buffer.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                     | Triggers an event.

### `afterRenderPageTemplate()`





Performs actions after a page template is rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1663-L1677)


#### Arguments

- `$template` (`mixed`) – The name of the template that was rendered
- `$variables` ([array](http://php.net/language.types.array)) – The variables that were available to the template
- `$templateMode` ([string](http://php.net/language.types.string)) – The template mode that was used when rendering the template
- `$output` ([string](http://php.net/language.types.string)) – The template’s rendering result




### `afterRenderTemplate()`





Performs actions after a template is rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1615-L1629)


#### Arguments

- `$template` (`mixed`) – The name of the template that was rendered
- `$variables` ([array](http://php.net/language.types.array)) – The variables that were available to the template
- `$templateMode` ([string](http://php.net/language.types.string)) – The template mode that was used when rendering the template
- `$output` ([string](http://php.net/language.types.string)) – The template’s rendering result




### `beforeRenderPageTemplate()`





Performs actions before a page template is rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1639-L1653)


#### Arguments

- `$template` (`mixed`) – The name of the template to render
- `$variables`
- `$templateMode`

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the template should be rendered



### `beforeRenderTemplate()`





Performs actions before a template is rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1591-L1605)


#### Arguments

- `$template` (`mixed`) – The name of the template to render
- `$variables`
- `$templateMode`

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the template should be rendered



### `clearJsBuffer()`





Clears and ends a JavaScript buffer, returning whatever JavaScript code was included while the buffer was active.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L996-L1019)


#### Arguments

- `$scriptTag` ([boolean](http://php.net/language.types.boolean)) – Whether the JavaScript code should be wrapped in a `<script>` tag. Defaults to `true`.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The JS code that was included in the active JS buffer, or `false` if there isn’t one



### `createTwig()`





Creates a new Twig environment.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L284-L306)



#### Returns

[craft\web\twig\Environment](craft-web-twig-environment.md)



### `doesTemplateExist()`





Returns whether a template exists.

Internally, this will just call [resolveTemplate()](craft-web-view.md#method-resolvetemplate) with the given template name, and return whether that
method found anything.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L710-L729)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the template.
- `$templateMode` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The template mode to use.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the template exists.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `endBody()`





Marks the ending of an HTML body section.








[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1062-L1066)






### `endPage()`





Marks the ending of an HTML page.








[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1570-L1578)


#### Arguments

- `$ajaxMode` ([boolean](http://php.net/language.types.boolean)) – Whether the view is rendering in AJAX mode.
If true, the JS scripts registered at [POS_READY](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_READY-detail) and [POS_LOAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_LOAD-detail) positions
will be rendered at the end of the view like normal scripts.




### `formatInputId()`





Formats an ID out of an input name.

This method takes a given input name and returns a valid ID based on it.
For example, if given the following input name:
    foo[bar][title]
the following ID would be returned:
    foo-bar-title


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1487-L1490)


#### Arguments

- `$inputName` ([string](http://php.net/language.types.string)) – The input name.

#### Returns

[string](http://php.net/language.types.string) – The input ID.



### `getBodyHtml()`





Returns the content to be inserted at the end of the body section.

This includes:
- JS code registered with [registerJs()](craft-web-view.md#method-registerjs) with the position set to [POS_BEGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_BEGIN-detail), [POS_END](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_END-detail), [POS_READY](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_READY-detail), or [POS_LOAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_LOAD-detail)
- JS files registered with [registerJsFile()](craft-web-view.md#method-registerjsfile) with the position set to [POS_BEGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_BEGIN-detail) or [POS_END](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_END-detail)


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1110-L1132)


#### Arguments

- `$clear` ([boolean](http://php.net/language.types.boolean)) – Whether the content should be cleared from the queue (default is true)

#### Returns

[string](http://php.net/language.types.string) – The rendered content



### `getCpTemplateRoots()`





Returns any registered control panel template roots.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L902-L905)



#### Returns

[array](http://php.net/language.types.array)



### `getDeltaNames()`



Since

:   3.4.0



Returns all of the registered delta input names.



See also [registerDeltaName()](craft-web-view.md#method-registerdeltaname)
[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1279-L1282)



#### Returns

[string](http://php.net/language.types.string)[]



### `getHeadHtml()`





Returns the content to be inserted in the head section.

This includes:
- Meta tags registered using [registerMetaTag()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerMetaTag()-detail)
- Link tags registered with [registerLinkTag()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerLinkTag()-detail)
- CSS code registered with [registerCss()](craft-web-view.md#method-registercss)
- CSS files registered with [registerCssFile()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerCssFile()-detail)
- JS code registered with [registerJs()](craft-web-view.md#method-registerjs) with the position set to [POS_HEAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_HEAD-detail)
- JS files registered with [registerJsFile()](craft-web-view.md#method-registerjsfile) with the position set to [POS_HEAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_HEAD-detail)


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1082-L1098)


#### Arguments

- `$clear` ([boolean](http://php.net/language.types.boolean)) – Whether the content should be cleared from the queue (default is true)

#### Returns

[string](http://php.net/language.types.string) – The rendered content



### `getInitialDeltaValue()`



Since

:   3.4.6



Returns the initial values of delta inputs.



See also [setInitialDeltaValue()](craft-web-view.md#method-setinitialdeltavalue)
[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1228-L1231)



#### Returns

`mixed[]`



### `getIsDeltaRegistrationActive()`



Since

:   3.4.0



Returns whether delta input name registration is currently active



See also [registerDeltaName()](craft-web-view.md#method-registerdeltaname)
[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1255-L1258)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getIsRenderingPageTemplate()`





Returns whether a page template is currently being rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L397-L400)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether a page template is currently being rendered.



### `getIsRenderingTemplate()`





Returns whether a template is currently being rendered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L337-L340)



#### Returns

[boolean](http://php.net/language.types.boolean) – Whether a template is currently being rendered.



### `getNamespace()`





Returns the active namespace.

This is the default namespaces that will be used when [namespaceInputs()](craft-web-view.md#method-namespaceinputs), [namespaceInputName()](craft-web-view.md#method-namespaceinputname),
and [namespaceInputId()](craft-web-view.md#method-namespaceinputid) are called, if their $namespace arguments are null.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1180-L1183)



#### Returns

[string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The namespace.



### `getSiteTemplateRoots()`





Returns any registered site template roots.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L912-L915)



#### Returns

[array](http://php.net/language.types.array)



### `getTemplateMode()`





Returns the current template mode (either `site` or `cp`).




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1289-L1292)



#### Returns

[string](http://php.net/language.types.string) – Either `site` or `cp`.



### `getTemplatesPath()`





Returns the base path that templates should be found in.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1342-L1345)



#### Returns

[string](http://php.net/language.types.string)



### `getTwig()`





Returns the Twig environment.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L272-L277)



#### Returns

[craft\web\twig\Environment](craft-web-twig-environment.md)



### `hook()`





Queues up a method to be called by a given template hook.

For example, if you place this in your plugin’s [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail) method:

```php
Craft::$app->view->hook('myAwesomeHook', function(&$context) {
    $context['foo'] = 'bar';
    return 'Hey!';
});
```

you would then be able to add this to any template:

```twig
{% hook "myAwesomeHook" %}
```

When the hook tag gets invoked, your template hook function will get called. The $context argument will be the
current Twig context array, which you’re free to manipulate. Any changes you make to it will be available to the
template following the tag. Whatever your template hook function returns will be output in place of the tag in
the template as well.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1518-L1521)


#### Arguments

- `$hook` ([string](http://php.net/language.types.string)) – The hook name.
- `$method` (`callback`) – The callback function.




### `init()`





Initializes the view component.








[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L251-L265)






### `invokeHook()`





Invokes a template hook.

This is called by `\craft\web\HookNode`.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1532-L1543)


#### Arguments

- `$hook` ([string](http://php.net/language.types.string)) – The hook name.
- `$context`

#### Returns

[string](http://php.net/language.types.string) – Whatever the hooks returned.



### `namespaceInputId()`





Namespaces an input ID.

This method applies the same namespacing treatment that [namespaceInputs()](craft-web-view.md#method-namespaceinputs) does to `id=` attributes,
but only to a single value, which is passed directly into this method.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1462-L1473)


#### Arguments

- `$inputId` ([string](http://php.net/language.types.string)) – The input ID that should be namespaced.
- `$namespace` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The namespace. Defaults to the [active namespace](craft-web-view.md#method-getnamespace).

#### Returns

[string](http://php.net/language.types.string) – The namespaced input ID.



### `namespaceInputName()`





Namespaces an input name.

This method applies the same namespacing treatment that [namespaceInputs()](craft-web-view.md#method-namespaceinputs) does to `name=` attributes,
but only to a single value, which is passed directly into this method.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1439-L1450)


#### Arguments

- `$inputName` ([string](http://php.net/language.types.string)) – The input name that should be namespaced.
- `$namespace` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The namespace. Defaults to the [active namespace](craft-web-view.md#method-getnamespace).

#### Returns

[string](http://php.net/language.types.string) – The namespaced input name.



### `namespaceInputs()`





Renames HTML input names so they belong to a namespace.

This method will go through the passed-in $html looking for `name=` attributes, and renaming their values such
that they will live within the passed-in $namespace (or the [active namespace](craft-web-view.md#method-getnamespace)).
By default, any `id=`, `for=`, `list=`, `data-target=`, `data-reverse-target=`, and `data-target-prefix=`
attributes will get namespaced as well, by prepending the namespace and a dash to their values.
For example, the following HTML:

```html
<label for="title">Title</label>
<input type="text" name="title" id="title">
```

would become this, if it were namespaced with “foo”:

```html
<label for="foo-title">Title</label>
<input type="text" name="foo[title]" id="foo-title">
```

Attributes that are already namespaced will get double-namespaced. For example, the following HTML:

```html
<label for="bar-title">Title</label>
<input type="text" name="bar[title]" id="title">
```

would become:

```html
<label for="foo-bar-title">Title</label>
<input type="text" name="foo[bar][title]" id="foo-bar-title">
```


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1397-L1427)


#### Arguments

- `$html` ([string](http://php.net/language.types.string)) – The template with the inputs.
- `$namespace` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The namespace. Defaults to the [active namespace](craft-web-view.md#method-getnamespace).
- `$otherAttributes` ([boolean](http://php.net/language.types.boolean)) – Whether id=, for=, etc., should also be namespaced. Defaults to `true`.

#### Returns

[string](http://php.net/language.types.string) – The HTML with namespaced input names.



### `normalizeObjectTemplate()`





Normalizes an object template for [renderObjectTemplate()](craft-web-view.md#method-renderobjecttemplate).




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L650-L697)


#### Arguments

- `$template` ([string](http://php.net/language.types.string))

#### Returns

[string](http://php.net/language.types.string)



### `registerCss()`



Since

:   3.4.0



Registers a CSS code block.








[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L921-L933)


#### Arguments

- `$css` ([string](http://php.net/language.types.string)) – The content of the CSS code block to be registered
- `$options` ([array](http://php.net/language.types.array)) – The HTML attributes for the `<style>`-tag.
- `$key` ([string](http://php.net/language.types.string)) – The key that identifies the CSS code block. If null, it will use
$css as the key. If two CSS code blocks are registered with the same key, the latter
will overwrite the former.




### `registerDeltaName()`



Since

:   3.4.0



Registers a delta input name.

This can be either the name of a single form input, or a prefix used by multiple input names.

The input name will be namespaced with the currently active [namespace](craft-web-view.md#method-getnamespace), if any.

When a form that supports delta updates is submitted, any delta inputs (or groups of inputs) that didn’t change
over the lifespan of the page will be omitted from the POST request.

Note that delta input names will only be registered if delta registration is active
(see [getIsDeltaRegistrationActive()](craft-web-view.md#method-getisdeltaregistrationactive)).


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1214-L1219)


#### Arguments

- `$inputName` ([string](http://php.net/language.types.string))




### `registerHiResCss()`

::: danger DEPRECATED
Deprecated in 3.0.0. Use [registerCss()](craft-web-view.md#method-registercss) and type your own media selector.
:::




Registers a hi-res CSS code block.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L945-L958)


#### Arguments

- `$css` ([string](http://php.net/language.types.string)) – The CSS code block to be registered
- `$options` ([array](http://php.net/language.types.array)) – The HTML attributes for the style tag.
- `$key` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The key that identifies the CSS code block. If null, it will use
$css as the key. If two CSS code blocks are registered with the same key, the latter
will overwrite the former.




### `registerJs()`





Registers a JS code block.








[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L963-L973)


#### Arguments

- `$js` ([string](http://php.net/language.types.string)) – The JS code block to be registered
- `$position` ([integer](http://php.net/language.types.integer)) – The position at which the JS script tag should be inserted
in a page. The possible values are:

- [POS_HEAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_HEAD-detail): in the head section
- [POS_BEGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_BEGIN-detail): at the beginning of the body section
- [POS_END](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_END-detail): at the end of the body section
- [POS_LOAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_LOAD-detail): enclosed within jQuery(window).load().
  Note that by using this position, the method will automatically register the jQuery js file.
- [POS_READY](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_READY-detail): enclosed within jQuery(document).ready(). This is the default value.
  Note that by using this position, the method will automatically register the jQuery js file.
- `$key` ([string](http://php.net/language.types.string)) – The key that identifies the JS code block. If null, it will use
$js as the key. If two JS code blocks are registered with the same key, the latter
will overwrite the former.




### `registerJsFile()`





Registers a JS file.



This method should be used for simple registration of JS files. If you want to use features of
[craft\web\AssetManager](craft-web-assetmanager.md) like appending timestamps to the URL and file publishing options, use [craft\web\AssetBundle](craft-web-assetbundle.md)
and [registerAssetBundle()](https://www.yiiframework.com/doc/api/2.0/yii-web-view#registerAssetBundle()-detail) instead.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1024-L1037)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The JS file to be registered.
- `$options` ([array](http://php.net/language.types.array)) – The HTML attributes for the script tag. The following options are specially handled
and are not treated as HTML attributes:

- `depends`: array, specifies the names of the asset bundles that this JS file depends on.
- `position`: specifies where the JS script tag should be inserted in a page. The possible values are:
    * [POS_HEAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_HEAD-detail): in the head section
    * [POS_BEGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_BEGIN-detail): at the beginning of the body section
    * [POS_END](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_END-detail): at the end of the body section. This is the default value.
- `appendTimestamp`: bool whether to append a timestamp to the URL.

Please refer to [craft\helpers\Html::jsFile()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#jsFile()-detail) for other supported options.
- `$key` ([string](http://php.net/language.types.string)) – The key that identifies the JS script file. If null, it will use
$url as the key. If two JS files are registered with the same key at the same position, the latter
will overwrite the former. Note that position option takes precedence, thus files registered with the same key,
but different position option will not override each other.


#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)


### `registerScript()`





Registers a generic `<script>` code block.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1053-L1057)


#### Arguments

- `$script` ([string](http://php.net/language.types.string)) – The generic `<script>` code block to be registered
- `$position` ([integer](http://php.net/language.types.integer)) – The position at which the generic `<script>` code block should be inserted
in a page. The possible values are:
- [POS_HEAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_HEAD-detail): in the head section
- [POS_BEGIN](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_BEGIN-detail): at the beginning of the body section
- [POS_END](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_END-detail): at the end of the body section
- `$options` ([array](http://php.net/language.types.array)) – The HTML attributes for the `<script>` tag.
- `$key` ([string](http://php.net/language.types.string)) – The key that identifies the generic `<script>` code block. If null, it will use
$script as the key. If two generic `<script>` code blocks are registered with the same key, the latter
will overwrite the former.




### `registerTranslations()`





Translates messages for a given translation category, so they will be
available for `Craft.t()` calls in the control panel.

Note this should always be called *before* any JavaScript is registered
that will need to use the translations, unless the JavaScript is
registered at [yii\web\View::POS_READY](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_READY-detail).


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1144-L1170)


#### Arguments

- `$category` ([string](http://php.net/language.types.string)) – The category the messages are in
- `$messages` ([string](http://php.net/language.types.string)[]) – The messages to be translated




### `registerTwigExtension()`





Registers a new Twig extension, which will be added on existing environments and queued up for future environments.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L313-L330)


#### Arguments

- `$extension` (`\Twig\Extension\ExtensionInterface`)




### `renderObjectTemplate()`





Renders an object template.

The passed-in `$object` will be available to the template as an `object` variable.

The template will be parsed for “property tags” (e.g. `{foo}`), which will get replaced with
full Twig output tags (e.g. `{{ object.foo|raw }}`.

If `$object` is an instance of [yii\base\Arrayable](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable), any attributes returned by its [fields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#fields()-detail) or
[extraFields()](https://www.yiiframework.com/doc/api/2.0/yii-base-arrayable#extraFields()-detail) methods will also be available as variables to the template.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L562-L642)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The source template string
- `$object` (`mixed`) – The object that should be passed into the template
- `$variables` ([array](http://php.net/language.types.array)) – Any additional variables that should be available to the template
- `$templateMode` ([string](http://php.net/language.types.string)) – The template mode to use.

#### Returns

[string](http://php.net/language.types.string) – The rendered template.

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  in case of failure
- [Throwable](http://php.net/class.throwable)\
  in case of failure


### `renderPageTemplate()`





Renders a Twig template that represents an entire web page.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L414-L453)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The name of the template to load
- `$variables` ([array](http://php.net/language.types.array)) – The variables that should be available to the template
- `$templateMode` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The template mode to use

#### Returns

[string](http://php.net/language.types.string) – The rendering result

#### Throws

- `\Twig\Error\LoaderError`
- `\Twig\Error\RuntimeError`
- `\Twig\Error\SyntaxError`
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $templateMode is invalid


### `renderString()`





Renders a template defined in a string.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L510-L541)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The source template string.
- `$variables` ([array](http://php.net/language.types.array)) – Any variables that should be available to the template.
- `$templateMode` ([string](http://php.net/language.types.string)) – The template mode to use.

#### Returns

[string](http://php.net/language.types.string) – The rendered template.

#### Throws

- `\Twig\Error\LoaderError`
- `\Twig\Error\SyntaxError`


### `renderTemplate()`





Renders a Twig template.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L354-L390)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The name of the template to load
- `$variables` ([array](http://php.net/language.types.array)) – The variables that should be available to the template
- `$templateMode` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The template mode to use

#### Returns

[string](http://php.net/language.types.string) – The rendering result

#### Throws

- `\Twig\Error\LoaderError`
- `\Twig\Error\RuntimeError`
- `\Twig\Error\SyntaxError`
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $templateMode is invalid


### `renderTemplateMacro()`





Renders a macro within a given Twig template.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L468-L498)


#### Arguments

- `$template` ([string](http://php.net/language.types.string)) – The name of the template the macro lives in.
- `$macro` ([string](http://php.net/language.types.string)) – The name of the macro.
- `$args` ([array](http://php.net/language.types.array)) – Any arguments that should be passed to the macro.
- `$templateMode` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The template mode to use.

#### Returns

[string](http://php.net/language.types.string) – The rendered macro output.

#### Throws

- `\Twig\Error\LoaderError`
- `\Twig\Error\RuntimeError`
- `\Twig\Error\SyntaxError`
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $templateMode is invalid


### `resolveTemplate()`





Finds a template on the file system and returns its path.

All of the following files will be searched for, in this order:

- TemplateName
- TemplateName.html
- TemplateName.twig
- TemplateName/index.html
- TemplateName/index.twig

If this is a front-end request, the actual list of file extensions and
index filenames are configurable via the <config:defaultTemplateExtensions>
and <config:indexTemplateFilenames> config settings.

For example if you set the following in config/general.php:

```php
'defaultTemplateExtensions' => ['htm'],
'indexTemplateFilenames' => ['default'],
```

then the following files would be searched for instead:

- TemplateName
- TemplateName.htm
- TemplateName/default.htm

The actual directory that those files will depend on the current [template mode](craft-web-view.md#method-settemplatemode)
(probably `templates/` if it’s a front-end site request, and `vendor/craftcms/cms/src/templates/` if it’s a Control
Panel request).

If this is a front-end site request, a folder named after the current site handle will be checked first.

- templates/SiteHandle/...
- templates/...

And finally, if this is a control panel request _and_ the template name includes multiple segments _and_ the first
segment of the template name matches a plugin’s handle, then Craft will look for a template named with the
remaining segments within that plugin’s templates/ subfolder.

To put it all together, here’s where Craft would look for a template named “foo/bar”, depending on the type of
request it is:

- Front-end site requests:
    - templates/SiteHandle/foo/bar
    - templates/SiteHandle/foo/bar.html
    - templates/SiteHandle/foo/bar.twig
    - templates/SiteHandle/foo/bar/index.html
    - templates/SiteHandle/foo/bar/index.twig
    - templates/foo/bar
    - templates/foo/bar.html
    - templates/foo/bar.twig
    - templates/foo/bar/index.html
    - templates/foo/bar/index.twig
- Control panel requests:
    - vendor/craftcms/cms/src/templates/foo/bar
    - vendor/craftcms/cms/src/templates/foo/bar.html
    - vendor/craftcms/cms/src/templates/foo/bar.twig
    - vendor/craftcms/cms/src/templates/foo/bar/index.html
    - vendor/craftcms/cms/src/templates/foo/bar/index.twig
    - path/to/fooplugin/templates/bar
    - path/to/fooplugin/templates/bar.html
    - path/to/fooplugin/templates/bar.twig
    - path/to/fooplugin/templates/bar/index.html
    - path/to/fooplugin/templates/bar/index.twig


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L803-L826)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The name of the template.
- `$templateMode` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The template mode to use.

#### Returns

[string](http://php.net/language.types.string), [false](http://php.net/language.types.boolean) – The path to the template if it exists, or `false`.

#### Throws

- `\Twig\Error\LoaderError`


### `setInitialDeltaValue()`



Since

:   3.4.6



Sets the initial value of a delta input name.



See also [getInitialDeltaValue()](craft-web-view.md#method-getinitialdeltavalue)
[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1241-L1246)


#### Arguments

- `$inputName` ([string](http://php.net/language.types.string))
- `$value` (`mixed`)




### `setIsDeltaRegistrationActive()`



Since

:   3.4.0



Sets whether delta input name registration is active.



See also [registerDeltaName()](craft-web-view.md#method-registerdeltaname)
[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1267-L1270)


#### Arguments

- `$active` ([boolean](http://php.net/language.types.boolean))




### `setNamespace()`





Sets the active namespace.

This is the default namespaces that will be used when [namespaceInputs()](craft-web-view.md#method-namespaceinputs), [namespaceInputName()](craft-web-view.md#method-namespaceinputname),
and [namespaceInputId()](craft-web-view.md#method-namespaceinputid) are called, if their|null $namespace arguments are null.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1193-L1196)


#### Arguments

- `$namespace` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The new namespace. Set to null to remove the namespace.




### `setRegisteredAssetBundles()`



Since

:   3.0.10



Sets the asset bundle names that should be marked as already registered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1562-L1565)


#### Arguments

- `$names` ([string](http://php.net/language.types.string)[]) – Asset bundle names




### `setRegisteredJsFiles()`



Since

:   3.0.10



Sets the JS files that should be marked as already registered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1551-L1554)


#### Arguments

- `$keys` ([string](http://php.net/language.types.string)[])




### `setTemplateMode()`





Sets the current template mode.

The template mode defines:
- the base path that templates should be looked for in
- the default template file extensions that should be automatically added when looking for templates
- the "index" template filenames that should be checked when looking for templates


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1305-L1335)


#### Arguments

- `$templateMode` ([string](http://php.net/language.types.string)) – Either 'site' or 'cp'


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if $templateMode is invalid


### `setTemplatesPath()`





Sets the base path that templates should be found in.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1352-L1355)


#### Arguments

- `$templatesPath` ([string](http://php.net/language.types.string))




### `startJsBuffer()`





Starts a JavaScript buffer.

JavaScript buffers work similarly to [output buffers](http://php.net/manual/en/intro.outcontrol.php) in PHP.
Once you’ve started a JavaScript buffer, any JavaScript code included with [registerJs()](craft-web-view.md#method-registerjs) will be included
in a buffer, and you will have the opportunity to fetch all of that code via [clearJsBuffer()](craft-web-view.md#method-clearjsbuffer) without
having it actually get output to the page.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L983-L988)








## Protected Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------
| [findViewFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#findViewFile()-detail "Defined by yii\base\View")                 | Finds the view file based on the given view name.
| [getRequestedViewFile()](https://www.yiiframework.com/doc/api/2.0/yii-base-view#getRequestedViewFile()-detail "Defined by yii\base\View") |
| [registerAllAssetFiles()](craft-web-view.md#method-registerallassetfiles)                                                                 | Registers all files provided by all registered asset bundles, including depending bundles files.
| [registerAssetFiles()](craft-web-view.md#method-registerassetfiles)                                                                       | Registers all files provided by an asset bundle including depending bundles files.
| [registerAssetFlashes()](craft-web-view.md#method-registerassetflashes)                                                                   | Registers any asset bundles and JS code that were queued-up in the session flash data.
| [renderBodyBeginHtml()](craft-web-view.md#method-renderbodybeginhtml)                                                                     | Renders the content to be inserted at the beginning of the body section.
| [renderBodyEndHtml()](craft-web-view.md#method-renderbodyendhtml)                                                                         | Renders the content to be inserted at the end of the body section.
| [renderHeadHtml()](craft-web-view.md#method-renderheadhtml)                                                                               | Renders the content to be inserted in the head section.

### `registerAllAssetFiles()`





Registers all files provided by all registered asset bundles, including depending bundles files.

Removes a bundle from [assetBundles](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$assetBundles-detail) once files are registered.


[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1760-L1765)






### `registerAssetFiles()`





Registers all files provided by an asset bundle including depending bundles files.



Removes a bundle from [assetBundles](https://www.yiiframework.com/doc/api/2.0/yii-web-view#$assetBundles-detail) once files are registered.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1770-L1778)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – Name of the bundle to register




### `registerAssetFlashes()`





Registers any asset bundles and JS code that were queued-up in the session flash data.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1732-L1753)




#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if any of the registered asset bundles are not actually asset bundles


### `renderBodyBeginHtml()`





Renders the content to be inserted at the beginning of the body section.



The content is rendered using the registered JS code blocks and files.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1700-L1710)



#### Returns

[string](http://php.net/language.types.string) – The rendered content



### `renderBodyEndHtml()`





Renders the content to be inserted at the end of the body section.



The content is rendered using the registered JS code blocks and files.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1715-L1725)


#### Arguments

- `$ajaxMode` ([boolean](http://php.net/language.types.boolean)) – Whether the view is rendering in AJAX mode.
If true, the JS scripts registered at [POS_READY](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_READY-detail) and [POS_LOAD](https://www.yiiframework.com/doc/api/2.0/yii-web-view#POS_LOAD-detail) positions
will be rendered at the end of the view like normal scripts.

#### Returns

[string](http://php.net/language.types.string) – The rendered content



### `renderHeadHtml()`





Renders the content to be inserted in the head section.



The content is rendered using the registered meta tags, link tags, CSS/JS code blocks and files.




[View source](https://github.com/craftcms/cms/blob/master/src/web/View.php#L1682-L1695)



#### Returns

[string](http://php.net/language.types.string) – The rendered content





## Constants

| Constant             | Description
| -------------------- | ----------------------------------------------------------------------------------------------------------------------
| `PH_BODY_BEGIN`      | This is internally used as the placeholder for receiving the content registered for the beginning of the body section.
| `PH_BODY_END`        | This is internally used as the placeholder for receiving the content registered for the end of the body section.
| `PH_HEAD`            | This is internally used as the placeholder for receiving the content registered for the head section.
| `POS_BEGIN`          | The location of registered JavaScript code block or files.
| `POS_END`            | The location of registered JavaScript code block or files.
| `POS_HEAD`           | The location of registered JavaScript code block or files.
| `POS_LOAD`           | The location of registered JavaScript code block.
| `POS_READY`          | The location of registered JavaScript code block.
| `TEMPLATE_MODE_CP`   |
| `TEMPLATE_MODE_SITE` |


## Events

### EVENT_AFTER_RENDER_PAGE_TEMPLATE



Type

:   [craft\events\TemplateEvent](craft-events-templateevent.md)



The event that is triggered after a page template gets rendered



---



### EVENT_AFTER_RENDER_TEMPLATE



Type

:   [craft\events\TemplateEvent](craft-events-templateevent.md)



The event that is triggered after a template gets rendered



---



### EVENT_BEFORE_RENDER_PAGE_TEMPLATE



Type

:   [craft\events\TemplateEvent](craft-events-templateevent.md)



The event that is triggered before a page template gets rendered



---



### EVENT_BEFORE_RENDER_TEMPLATE



Type

:   [craft\events\TemplateEvent](craft-events-templateevent.md)



The event that is triggered before a template gets rendered



---



### EVENT_REGISTER_CP_TEMPLATE_ROOTS



Type

:   [craft\events\RegisterTemplateRootsEvent](craft-events-registertemplaterootsevent.md)



The event that is triggered when registering control panel template roots



---



### EVENT_REGISTER_SITE_TEMPLATE_ROOTS



Type

:   [craft\events\RegisterTemplateRootsEvent](craft-events-registertemplaterootsevent.md)



The event that is triggered when registering site template roots



---




