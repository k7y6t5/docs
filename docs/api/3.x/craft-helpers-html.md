---
title: craft\helpers\Html
code:
  - php
  - twig
---

# Html

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Html](craft-helpers-html.md) &raquo;
[yii\helpers\Html](https://www.yiiframework.com/doc/api/2.0/yii-helpers-html) &raquo;
[yii\helpers\BaseHtml](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml)

Since

:   3.0.0



Class Html





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php)


## Public Properties

| Property                                                                                                                                 | Description
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------
| [attributeOrder](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#$attributeOrder-detail "Defined by yii\helpers\BaseHtml") | [array](http://php.net/language.types.array) – The preferred order of attributes in a tag.
| [attributeRegex](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#$attributeRegex-detail "Defined by yii\helpers\BaseHtml") | [string](http://php.net/language.types.string) – Regular expression used for attribute name validation.
| [dataAttributes](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#$dataAttributes-detail "Defined by yii\helpers\BaseHtml") | [array](http://php.net/language.types.array) – List of tag attributes that should be specially handled when their values are of array type.
| [voidElements](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#$voidElements-detail "Defined by yii\helpers\BaseHtml")     | [array](http://php.net/language.types.array) – List of void elements (element name => 1)





## Public Methods

| Method                                                                                                                                                            | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [a()](craft-helpers-html.md#method-a)                                                                                                                             | Generates a hyperlink tag.
| [actionInput()](craft-helpers-html.md#method-actioninput)                                                                                                         | Generates a hidden `action` input tag.
| [activeCheckbox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeCheckbox()-detail "Defined by yii\helpers\BaseHtml")                       | Generates a checkbox tag together with a label for the given model attribute.
| [activeCheckboxList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeCheckboxList()-detail "Defined by yii\helpers\BaseHtml")               | Generates a list of checkboxes.
| [activeDropDownList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeDropDownList()-detail "Defined by yii\helpers\BaseHtml")               | Generates a drop-down list for the given model attribute.
| [activeFileInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeFileInput()-detail "Defined by yii\helpers\BaseHtml")                     | Generates a file input tag for the given model attribute.
| [activeHiddenInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeHiddenInput()-detail "Defined by yii\helpers\BaseHtml")                 | Generates a hidden input tag for the given model attribute.
| [activeHint()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeHint()-detail "Defined by yii\helpers\BaseHtml")                               | Generates a hint tag for the given model attribute.
| [activeInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeInput()-detail "Defined by yii\helpers\BaseHtml")                             | Generates an input tag for the given model attribute.
| [activeLabel()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeLabel()-detail "Defined by yii\helpers\BaseHtml")                             | Generates a label tag for the given model attribute.
| [activeListBox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeListBox()-detail "Defined by yii\helpers\BaseHtml")                         | Generates a list box.
| [activePasswordInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activePasswordInput()-detail "Defined by yii\helpers\BaseHtml")             | Generates a password input tag for the given model attribute.
| [activeRadio()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeRadio()-detail "Defined by yii\helpers\BaseHtml")                             | Generates a radio button tag together with a label for the given model attribute.
| [activeRadioList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeRadioList()-detail "Defined by yii\helpers\BaseHtml")                     | Generates a list of radio buttons.
| [activeTextInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeTextInput()-detail "Defined by yii\helpers\BaseHtml")                     | Generates a text input tag for the given model attribute.
| [activeTextarea()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeTextarea()-detail "Defined by yii\helpers\BaseHtml")                       | Generates a textarea tag for the given model attribute.
| [addCssClass()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#addCssClass()-detail "Defined by yii\helpers\BaseHtml")                             | Adds a CSS class (or several classes) to the specified options.
| [addCssStyle()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#addCssStyle()-detail "Defined by yii\helpers\BaseHtml")                             | Adds the specified CSS style to the HTML options.
| [appendToTag()](craft-helpers-html.md#method-appendtotag)                                                                                                         | Appends HTML to the end of the given tag.
| [beginForm()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#beginForm()-detail "Defined by yii\helpers\BaseHtml")                                 | Generates a form start tag.
| [beginTag()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#beginTag()-detail "Defined by yii\helpers\BaseHtml")                                   | Generates a start tag.
| [button()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#button()-detail "Defined by yii\helpers\BaseHtml")                                       | Generates a button tag.
| [buttonInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#buttonInput()-detail "Defined by yii\helpers\BaseHtml")                             | Generates an input button.
| [checkbox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#checkbox()-detail "Defined by yii\helpers\BaseHtml")                                   | Generates a checkbox input.
| [checkboxList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#checkboxList()-detail "Defined by yii\helpers\BaseHtml")                           | Generates a list of checkboxes.
| [csrfInput()](craft-helpers-html.md#method-csrfinput)                                                                                                             | Generates a hidden CSRF input tag.
| [csrfMetaTags()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#csrfMetaTags()-detail "Defined by yii\helpers\BaseHtml")                           | Generates the meta tags containing CSRF token information.
| [cssFile()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#cssFile()-detail "Defined by yii\helpers\BaseHtml")                                     | Generates a link tag that refers to an external CSS file.
| [cssStyleFromArray()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#cssStyleFromArray()-detail "Defined by yii\helpers\BaseHtml")                 | Converts a CSS style array into a string representation.
| [cssStyleToArray()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#cssStyleToArray()-detail "Defined by yii\helpers\BaseHtml")                     | Converts a CSS style string into an array representation.
| [decode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#decode()-detail "Defined by yii\helpers\BaseHtml")                                       | Decodes special HTML entities back to the corresponding characters.
| [dropDownList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#dropDownList()-detail "Defined by yii\helpers\BaseHtml")                           | Generates a drop-down list.
| [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail "Defined by yii\helpers\BaseHtml")                                       | Encodes special characters into HTML entities.
| [encodeParams()](craft-helpers-html.md#method-encodeparams)                                                                                                       | Will take an HTML string and an associative array of key=>value pairs, HTML encode the values and swap them back into the original string using the keys as tokens.
| [endForm()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#endForm()-detail "Defined by yii\helpers\BaseHtml")                                     | Generates a form end tag.
| [endTag()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#endTag()-detail "Defined by yii\helpers\BaseHtml")                                       | Generates an end tag.
| [error()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#error()-detail "Defined by yii\helpers\BaseHtml")                                         | Generates a tag that contains the first validation error of the specified model attribute.
| [errorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#errorSummary()-detail "Defined by yii\helpers\BaseHtml")                           | Generates a summary of the validation errors.
| [escapeJsRegularExpression()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#escapeJsRegularExpression()-detail "Defined by yii\helpers\BaseHtml") | Escapes regular expression to use in JavaScript.
| [fileInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#fileInput()-detail "Defined by yii\helpers\BaseHtml")                                 | Generates a file input field.
| [getAttributeName()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#getAttributeName()-detail "Defined by yii\helpers\BaseHtml")                   | Returns the real attribute name from the given attribute expression.
| [getAttributeValue()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#getAttributeValue()-detail "Defined by yii\helpers\BaseHtml")                 | Returns the value of the specified attribute name or expression.
| [getInputId()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#getInputId()-detail "Defined by yii\helpers\BaseHtml")                               | Generates an appropriate input ID for the specified attribute name or expression.
| [getInputName()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#getInputName()-detail "Defined by yii\helpers\BaseHtml")                           | Generates an appropriate input name for the specified attribute name or expression.
| [hiddenInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#hiddenInput()-detail "Defined by yii\helpers\BaseHtml")                             | Generates a hidden input field.
| [img()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#img()-detail "Defined by yii\helpers\BaseHtml")                                             | Generates an image tag.
| [input()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#input()-detail "Defined by yii\helpers\BaseHtml")                                         | Generates an input type of the given type.
| [jsFile()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#jsFile()-detail "Defined by yii\helpers\BaseHtml")                                       | Generates a script tag that refers to an external JavaScript file.
| [label()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#label()-detail "Defined by yii\helpers\BaseHtml")                                         | Generates a label tag.
| [listBox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#listBox()-detail "Defined by yii\helpers\BaseHtml")                                     | Generates a list box.
| [mailto()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#mailto()-detail "Defined by yii\helpers\BaseHtml")                                       | Generates a mailto hyperlink.
| [modifyTagAttributes()](craft-helpers-html.md#method-modifytagattributes)                                                                                         | Modifies a HTML tag’s attributes, supporting the same attribute definitions as [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail).
| [normalizeTagAttributes()](craft-helpers-html.md#method-normalizetagattributes)                                                                                   | Normalizes attributes.
| [ol()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#ol()-detail "Defined by yii\helpers\BaseHtml")                                               | Generates an ordered list.
| [parseTag()](craft-helpers-html.md#method-parsetag)                                                                                                               | Parses an HTML tag and returns info about it and its children.
| [parseTagAttributes()](craft-helpers-html.md#method-parsetagattributes)                                                                                           | Parses an HTML tag to find its attributes.
| [passwordInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#passwordInput()-detail "Defined by yii\helpers\BaseHtml")                         | Generates a password input field.
| [prependToTag()](craft-helpers-html.md#method-prependtotag)                                                                                                       | Prepends HTML to the beginning of given tag.
| [radio()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#radio()-detail "Defined by yii\helpers\BaseHtml")                                         | Generates a radio button input.
| [radioList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#radioList()-detail "Defined by yii\helpers\BaseHtml")                                 | Generates a list of radio buttons.
| [redirectInput()](craft-helpers-html.md#method-redirectinput)                                                                                                     | Generates a hidden `redirect` input tag.
| [removeCssClass()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#removeCssClass()-detail "Defined by yii\helpers\BaseHtml")                       | Removes a CSS class from the specified options.
| [removeCssStyle()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#removeCssStyle()-detail "Defined by yii\helpers\BaseHtml")                       | Removes the specified CSS style from the HTML options.
| [renderSelectOptions()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderSelectOptions()-detail "Defined by yii\helpers\BaseHtml")             | Renders the option tags that can be used by [dropDownList()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#dropDownList()-detail) and [listBox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#listBox()-detail).
| [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail "Defined by yii\helpers\BaseHtml")             | Renders the HTML tag attributes.
| [resetButton()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#resetButton()-detail "Defined by yii\helpers\BaseHtml")                             | Generates a reset button tag.
| [resetInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#resetInput()-detail "Defined by yii\helpers\BaseHtml")                               | Generates a reset input button.
| [script()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#script()-detail "Defined by yii\helpers\BaseHtml")                                       | Generates a script tag.
| [style()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#style()-detail "Defined by yii\helpers\BaseHtml")                                         | Generates a style tag.
| [submitButton()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#submitButton()-detail "Defined by yii\helpers\BaseHtml")                           | Generates a submit button tag.
| [submitInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#submitInput()-detail "Defined by yii\helpers\BaseHtml")                             | Generates a submit input button.
| [tag()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#tag()-detail "Defined by yii\helpers\BaseHtml")                                             | Generates a complete HTML tag.
| [textInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#textInput()-detail "Defined by yii\helpers\BaseHtml")                                 | Generates a text input field.
| [textarea()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#textarea()-detail "Defined by yii\helpers\BaseHtml")                                   | Generates a text area input.
| [ul()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#ul()-detail "Defined by yii\helpers\BaseHtml")                                               | Generates an unordered list.

### `a()`



Since

:   3.3.0



Generates a hyperlink tag.








[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L108-L116)


#### Arguments

- `$text` ([string](http://php.net/language.types.string)) – Link body. It will NOT be HTML-encoded. Therefore you can pass in HTML code
such as an image tag. If this is coming from end users, you should consider [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail)
it to prevent XSS attacks.
- `$url` ([array](http://php.net/language.types.array), [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The URL for the hyperlink tag. This parameter will be processed by [yii\helpers\Url::to()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseurl#to()-detail)
and will be used for the "href" attribute of the tag. If this parameter is null, the "href" attribute
will not be generated.

If you want to use an absolute url you can call [yii\helpers\Url::to()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseurl#to()-detail) yourself, before passing the URL to this method,
like this:

```php
Html::a('link text', Url::to($url, true))
```
- `$options` ([array](http://php.net/language.types.array)) – The tag options in terms of name-value pairs. These will be rendered as
the attributes of the resulting tag. The values will be HTML-encoded using [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail).
If a value is null, the corresponding attribute will not be rendered.
See [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail) for details on how attributes are being rendered.

#### Returns

[string](http://php.net/language.types.string) – The generated hyperlink



### `actionInput()`



Since

:   3.3.0



Generates a hidden `action` input tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L81-L84)


#### Arguments

- `$route` ([string](http://php.net/language.types.string)) – The action route
- `$options` ([array](http://php.net/language.types.array)) – The tag options in terms of name-value pairs. These will be rendered as
the attributes of the resulting tag. The values will be HTML-encoded using [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail).
If a value is null, the corresponding attribute will not be rendered.
See [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail) for details on how attributes are being rendered.

#### Returns

[string](http://php.net/language.types.string) – The generated hidden input tag



### `appendToTag()`



Since

:   3.3.0



Appends HTML to the end of the given tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L129-L132)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag that `$html` should be appended to
- `$html` ([string](http://php.net/language.types.string)) – The HTML to append to `$tag`.
- `$ifExists` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – What to do if `$tag` already contains a child of the same type as the element
defined by `$html`. Set to `'keep'` if no action should be taken, or `'replace'` if it should be replaced
by `$tag`.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML



### `csrfInput()`



Since

:   3.3.0



Generates a hidden CSRF input tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L64-L68)


#### Arguments

- `$options` ([array](http://php.net/language.types.array)) – The tag options in terms of name-value pairs. These will be rendered as
the attributes of the resulting tag. The values will be HTML-encoded using [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail).
If a value is null, the corresponding attribute will not be rendered.
See [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail) for details on how attributes are being rendered.

#### Returns

[string](http://php.net/language.types.string) – The generated hidden input tag



### `encodeParams()`





Will take an HTML string and an associative array of key=>value pairs, HTML encode the values and swap them back
into the original string using the keys as tokens.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L37-L52)


#### Arguments

- `$html` ([string](http://php.net/language.types.string)) – The HTML string.
- `$variables` ([array](http://php.net/language.types.array)) – An associative array of key => value pairs to be applied to the HTML string using `strtr`.

#### Returns

[string](http://php.net/language.types.string) – The HTML string with the encoded variable values swapped in.



### `modifyTagAttributes()`



Since

:   3.3.0



Modifies a HTML tag’s attributes, supporting the same attribute definitions as [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail).




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L221-L236)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag whose attributes should be modified.
- `$attributes` ([array](http://php.net/language.types.array)) – The attributes to be added to the tag.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML tag.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if `$tag` doesn't contain a valid HTML tag


### `normalizeTagAttributes()`



Since

:   3.3.0



Normalizes attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L302-L336)


#### Arguments

- `$attributes` ([array](http://php.net/language.types.array))

#### Returns

[array](http://php.net/language.types.array)



### `parseTag()`



Since

:   3.3.0



Parses an HTML tag and returns info about it and its children.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L161-L210)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag
- `$offset` ([integer](http://php.net/language.types.integer)) – The offset to start looking for a tag

#### Returns

[array](http://php.net/language.types.array) – An array containing `type`, `attributes`, `children`, `start`, `end`, `htmlStart`, and `htmlEnd`
properties. Nested text nodes will be represented as arrays within `children` with `type` set to `'text'`, and a
`value` key containing the text value.

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if `$tag` doesn't contain a valid HTML tag


### `parseTagAttributes()`



Since

:   3.3.0



Parses an HTML tag to find its attributes.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L250-L293)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag to parse
- `$offset` ([integer](http://php.net/language.types.integer)) – The offset to start looking for a tag
- `$start` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The start position of the first attribute in the given tag
- `$end` ([integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)) – The end position of the last attribute in the given tag
- `$decode` ([boolean](http://php.net/language.types.boolean)) – Whether the attributes should be HTML decoded in the process

#### Returns

[array](http://php.net/language.types.array) – The parsed HTML tag attributes

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if `$tag` doesn't contain a valid HTML tag


### `prependToTag()`



Since

:   3.3.0



Prepends HTML to the beginning of given tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L145-L148)


#### Arguments

- `$tag` ([string](http://php.net/language.types.string)) – The HTML tag that `$html` should be prepended to
- `$html` ([string](http://php.net/language.types.string)) – The HTML to prepend to `$tag`.
- `$ifExists` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – What to do if `$tag` already contains a child of the same type as the element
defined by `$html`. Set to `'keep'` if no action should be taken, or `'replace'` if it should be replaced
by `$tag`.

#### Returns

[string](http://php.net/language.types.string) – The modified HTML



### `redirectInput()`



Since

:   3.3.0



Generates a hidden `redirect` input tag.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Html.php#L99-L102)


#### Arguments

- `$url` ([string](http://php.net/language.types.string)) – The URL to redirect to
- `$options` ([array](http://php.net/language.types.array)) – The tag options in terms of name-value pairs. These will be rendered as
the attributes of the resulting tag. The values will be HTML-encoded using [encode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#encode()-detail).
If a value is null, the corresponding attribute will not be rendered.
See [renderTagAttributes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes()-detail) for details on how attributes are being rendered.

#### Returns

[string](http://php.net/language.types.string) – The generated hidden input tag

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the validation key could not be written
- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  when HMAC generation fails




## Protected Methods

| Method                                                                                                                                                  | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [activeBooleanInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeBooleanInput()-detail "Defined by yii\helpers\BaseHtml")     | Generates a boolean input This method is mainly called by [activeCheckbox()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeCheckbox()-detail) and [activeRadio()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeRadio()-detail).
| [activeListInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#activeListInput()-detail "Defined by yii\helpers\BaseHtml")           | Generates a list of input fields.
| [booleanInput()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#booleanInput()-detail "Defined by yii\helpers\BaseHtml")                 | Generates a boolean input.
| [setActivePlaceholder()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basehtml#setActivePlaceholder()-detail "Defined by yii\helpers\BaseHtml") | Generate placeholder from model attribute label.






