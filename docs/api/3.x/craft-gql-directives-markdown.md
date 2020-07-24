---
title: craft\gql\directives\Markdown
code:
  - php
  - twig
---

# Markdown

Type

:   Class

Namespace

:   craft\gql\directives

Inherits

:   [craft\gql\directives\Markdown](craft-gql-directives-markdown.md) &raquo;
[craft\gql\base\Directive](craft-gql-base-directive.md) &raquo;
`GraphQL\Type\Definition\Directive`

Since

:   3.3.1



Markdown GraphQL Directive





[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Markdown.php)






## Public Methods

| Method                                                     | Description
| ---------------------------------------------------------- | -----------------------------------------------
| [apply()](craft-gql-directives-markdown.md#method-apply)   | Apply the directive to the value with arguments
| [create()](craft-gql-directives-markdown.md#method-create) | Return an instance of the directive
| [name()](craft-gql-directives-markdown.md#method-name)     | Return the directive's name

### `apply()`





Apply the directive to the value with arguments








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Markdown.php#L75-L84)


#### Arguments

- `$source` (`mixed`) – The original source from which the value was resolved
- `$value` (`mixed`) – The value that was resolved
- `$arguments` ([array](http://php.net/language.types.array)) – For the directive
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – Resolve info object




### `create()`





Return an instance of the directive








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Markdown.php#L33-L62)



#### Returns

`\GraphQL\Type\Definition\Directive` – $directive



### `name()`





Return the directive's name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Markdown.php#L67-L70)



#### Returns

[string](http://php.net/language.types.string) – $name







## Constants

| Constant              | Description
| --------------------- | -----------
| `DEFAULT_FLAVOR`      |
| `DEFAULT_INLINE_ONLY` |



