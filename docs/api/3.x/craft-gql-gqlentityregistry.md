---
title: craft\gql\GqlEntityRegistry
code:
  - php
  - twig
---

# GqlEntityRegistry

Type

:   Class

Namespace

:   craft\gql

Inherits

:   [craft\gql\GqlEntityRegistry](craft-gql-gqlentityregistry.md)

Since

:   3.3.0



Class GqlEntityRegistry





[View source](https://github.com/craftcms/cms/blob/master/src/gql/GqlEntityRegistry.php)






## Public Methods

| Method                                                               | Description
| -------------------------------------------------------------------- | --------------------------------
| [createEntity()](craft-gql-gqlentityregistry.md#method-createentity) | Create an entity registry entry.
| [flush()](craft-gql-gqlentityregistry.md#method-flush)               | Flush all registered entities.
| [getEntity()](craft-gql-gqlentityregistry.md#method-getentity)       | Get a registered entity.

### `createEntity()`





Create an entity registry entry.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/GqlEntityRegistry.php#L41-L50)


#### Arguments

- `$entityName` ([string](http://php.net/language.types.string))
- `$entity` (`mixed`)

#### Returns

`mixed`



### `flush()`





Flush all registered entities.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/GqlEntityRegistry.php#L55-L58)






### `getEntity()`





Get a registered entity.




[View source](https://github.com/craftcms/cms/blob/master/src/gql/GqlEntityRegistry.php#L29-L32)


#### Arguments

- `$entityName` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean), `mixed`










