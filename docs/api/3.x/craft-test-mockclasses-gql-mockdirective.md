---
title: craft\test\mockclasses\gql\MockDirective
code:
  - php
  - twig
---

# MockDirective

Type

:   Class

Namespace

:   craft\test\mockclasses\gql

Inherits

:   [craft\test\mockclasses\gql\MockDirective](craft-test-mockclasses-gql-mockdirective.md) &raquo;
[craft\gql\base\Directive](craft-gql-base-directive.md) &raquo;
`GraphQL\Type\Definition\Directive`



Class MockDirective





[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockDirective.php)






## Public Methods

| Method                                                                | Description
| --------------------------------------------------------------------- | -----------------------------------------------
| [apply()](craft-test-mockclasses-gql-mockdirective.md#method-apply)   | Apply the directive to the value with arguments
| [create()](craft-test-mockclasses-gql-mockdirective.md#method-create) | Return an instance of the directive
| [name()](craft-test-mockclasses-gql-mockdirective.md#method-name)     | Return the directive's name

### `apply()`





Apply the directive to the value with arguments








[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockDirective.php#L39-L43)


#### Arguments

- `$source` (`mixed`) – The original source from which the value was resolved
- `$value` (`mixed`) – The value that was resolved
- `$arguments` ([array](http://php.net/language.types.array)) – For the directive
- `$resolveInfo` (`\GraphQL\Type\Definition\ResolveInfo`) – Resolve info object




### `create()`





Return an instance of the directive








[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockDirective.php#L18-L26)



#### Returns

`\GraphQL\Type\Definition\Directive` – $directive



### `name()`





Return the directive's name








[View source](https://github.com/craftcms/cms/blob/master/src/test/mockclasses/gql/MockDirective.php#L31-L34)



#### Returns

[string](http://php.net/language.types.string) – $name










