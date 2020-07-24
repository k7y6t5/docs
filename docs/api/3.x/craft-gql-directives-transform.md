---
title: craft\gql\directives\Transform
code:
  - php
  - twig
---

# Transform

Type

:   Class

Namespace

:   craft\gql\directives

Inherits

:   [craft\gql\directives\Transform](craft-gql-directives-transform.md) &raquo;
[craft\gql\base\Directive](craft-gql-base-directive.md) &raquo;
`GraphQL\Type\Definition\Directive`

Since

:   3.3.0



Class Transform





[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Transform.php)






## Public Methods

| Method                                                              | Description
| ------------------------------------------------------------------- | -----------------------------------------------
| [__construct()](craft-gql-directives-transform.md#method-construct) |
| [apply()](craft-gql-directives-transform.md#method-apply)           | Apply the directive to the value with arguments
| [create()](craft-gql-directives-transform.md#method-create)         | Return an instance of the directive
| [name()](craft-gql-directives-transform.md#method-name)             | Return the directive's name

### `__construct()`










[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Transform.php#L28-L37)


#### Arguments

- `$config`




### `apply()`





Apply the directive to the value with arguments








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Transform.php#L71-L119)


#### Arguments

- `$source` (`mixed`) – The original source from which the value was resolved
- `$value` (`mixed`) – The value that was resolved
- `$arguments` ([array](http://php.net/language.types.array)) – For the directive
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – Resolve info object




### `create()`





Return an instance of the directive








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Transform.php#L42-L58)



#### Returns

`\GraphQL\Type\Definition\Directive` – $directive



### `name()`





Return the directive's name








[View source](https://github.com/craftcms/cms/blob/master/src/gql/directives/Transform.php#L63-L66)



#### Returns

[string](http://php.net/language.types.string) – $name










