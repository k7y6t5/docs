---
title: craft\gql\directives\FormatDateTime
code:
  - php
  - twig
---

# FormatDateTime

Type

:   Class

Namespace

:   craft\gql\directives

Inherits

:   [craft\gql\directives\FormatDateTime](craft-gql-directives-formatdatetime.md) &raquo;
[craft\gql\base\Directive](craft-gql-base-directive.md) &raquo;
`GraphQL\Type\Definition\Directive`

Since

:   3.3.0



Class FormatDateTime





[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/FormatDateTime.php)






## Public Methods

| Method                                                           | Description
| ---------------------------------------------------------------- | -----------------------------------------------
| [apply()](craft-gql-directives-formatdatetime.md#method-apply)   | Apply the directive to the value with arguments
| [create()](craft-gql-directives-formatdatetime.md#method-create) | Return an instance of the directive
| [name()](craft-gql-directives-formatdatetime.md#method-name)     | Return the directive's name

### `apply()`





Apply the directive to the value with arguments








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/FormatDateTime.php#L74-L85)


#### Arguments

- `$source` (`mixed`) – The original source from which the value was resolved
- `$value` (`mixed`) – The value that was resolved
- `$arguments` ([array](http://php.net/language.types.array)) – For the directive
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – Resolve info object




### `create()`





Return an instance of the directive








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/FormatDateTime.php#L32-L61)



#### Returns

`\GraphQL\Type\Definition\Directive` – $directive



### `name()`





Return the directive's name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/FormatDateTime.php#L66-L69)



#### Returns

[string](http://php.net/language.types.string) – $name







## Constants

| Constant           | Description
| ------------------ | -----------
| `DEFAULT_FORMAT`   |
| `DEFAULT_TIMEZONE` |



