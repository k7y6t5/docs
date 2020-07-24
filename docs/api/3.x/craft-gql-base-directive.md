---
title: craft\gql\base\Directive
code:
  - php
  - twig
---

# Directive

Type

:   Abstract Class

Namespace

:   craft\gql\base

Inherits

:   [craft\gql\base\Directive](craft-gql-base-directive.md) &raquo;
`GraphQL\Type\Definition\Directive`

Extended by

:   [craft\gql\directives\FormatDateTime](craft-gql-directives-formatdatetime.md), [craft\gql\directives\Markdown](craft-gql-directives-markdown.md), [craft\gql\directives\Transform](craft-gql-directives-transform.md), [craft\test\mockclasses\gql\MockDirective](craft-test-mockclasses-gql-mockdirective.md)

Since

:   3.3.0



Class Directive





[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Directive.php)






## Public Methods

| Method                                                | Description
| ----------------------------------------------------- | -----------------------------------------------
| [apply()](craft-gql-base-directive.md#method-apply)   | Apply the directive to the value with arguments
| [create()](craft-gql-base-directive.md#method-create) | Return an instance of the directive
| [name()](craft-gql-base-directive.md#method-name)     | Return the directive's name

### `apply()`





Apply the directive to the value with arguments




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Directive.php#L43)


#### Arguments

- `$source` (`mixed`) – The original source from which the value was resolved
- `$value` (`mixed`) – The value that was resolved
- `$arguments` ([array](http://php.net/language.types.array)) – For the directive
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – Resolve info object




### `create()`





Return an instance of the directive




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Directive.php#L26)



#### Returns

`\GraphQL\Type\Definition\Directive` – $directive



### `name()`





Return the directive's name




[View source](https://github.com/craftcms/cms/blob/master/src/gql/base/Directive.php#L33)



#### Returns

[string](http://php.net/language.types.string) – $name










