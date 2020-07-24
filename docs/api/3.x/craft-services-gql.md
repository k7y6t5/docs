---
title: craft\services\Gql
code:
  - php
  - twig
---

# Gql

Type

:   Class

Namespace

:   craft\services

Inherits

:   [craft\services\Gql](craft-services-gql.md) &raquo;
[yii\base\Component](https://www.yiiframework.com/doc/api/2.0/yii-base-component) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.3.0



The Gql service provides GraphQL functionality.





[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)


## Public Properties

| Property                                                                                                                   | Description
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------
| [activeSchema](craft-services-gql.md#activeschema)                                                                         | [craft\models\GqlSchema](craft-models-gqlschema.md)
| [allPermissions](craft-services-gql.md#allpermissions)                                                                     | [array](http://php.net/language.types.array)
| [behaviors](https://www.yiiframework.com/doc/api/2.0/yii-base-component#$behaviors-detail "Defined by yii\base\Component") | [yii\base\Behavior](https://www.yiiframework.com/doc/api/2.0/yii-base-behavior) – List of behaviors attached to this component
| [publicSchema](craft-services-gql.md#publicschema)                                                                         | [craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)
| [schemaDef](craft-services-gql.md#schemadef)                                                                               | `\GraphQL\Type\Schema`
| [schemas](craft-services-gql.md#schemas)                                                                                   | [craft\models\GqlSchema](craft-models-gqlschema.md)[]
| [tokens](craft-services-gql.md#tokens)                                                                                     | [craft\models\GqlToken](craft-models-gqltoken.md)[]
| [validationRules](craft-services-gql.md#validationrules)                                                                   | [array](http://php.net/language.types.array)

### `activeSchema`



Type

:   [craft\models\GqlSchema](craft-models-gqlschema.md)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `allPermissions`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `publicSchema`



Type

:   [craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `schemaDef`



Type

:   `\GraphQL\Type\Schema`

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `schemas`



Type

:   [craft\models\GqlSchema](craft-models-gqlschema.md)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `tokens`



Type

:   [craft\models\GqlToken](craft-models-gqltoken.md)[]

Access

:   Read-only

Since

:   3.4.0







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)



### `validationRules`



Type

:   [array](http://php.net/language.types.array)

Access

:   Read-only







[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php)







## Public Methods

| Method                                                                                                                                      | Description
| ------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                   | Calls the named method which is not a class method.
| [__clone()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#__clone()-detail "Defined by yii\base\Component")                   | This method is called after the object is created by cloning an existing one.
| [__construct()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__construct()-detail "Defined by yii\base\BaseObject")         | Constructor.
| [__get()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__get()-detail "Defined by yii\base\BaseObject")                     | Returns the value of an object property.
| [__isset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__isset()-detail "Defined by yii\base\BaseObject")                 | Checks if a property is set, i.e. defined and not null.
| [__set()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__set()-detail "Defined by yii\base\BaseObject")                     | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")                 | Sets an object property to null.
| [attachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehavior()-detail "Defined by yii\base\Component")     | Attaches a behavior to this component.
| [attachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#attachBehaviors()-detail "Defined by yii\base\Component")   | Attaches a list of behaviors to the component.
| [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail "Defined by yii\base\Component")               | Returns a list of behaviors that this component should behave as.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject")   | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")             | Returns the fully qualified name of this class.
| [deleteSchema()](craft-services-gql.md#method-deleteschema)                                                                                 | Deletes a GraphQL schema.
| [deleteSchemaById()](craft-services-gql.md#method-deleteschemabyid)                                                                         | Deletes a GraphQL schema by its ID.
| [deleteTokenById()](craft-services-gql.md#method-deletetokenbyid)                                                                           | Deletes a GraphQL token by its ID.
| [detachBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehavior()-detail "Defined by yii\base\Component")     | Detaches a behavior from the component.
| [detachBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#detachBehaviors()-detail "Defined by yii\base\Component")   | Detaches all behaviors from the component.
| [ensureBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#ensureBehaviors()-detail "Defined by yii\base\Component")   | Makes sure that the behaviors declared in [behaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#behaviors()-detail) are attached to this component.
| [executeQuery()](craft-services-gql.md#method-executequery)                                                                                 | Execute a GraphQL query for a given schema.
| [flushCaches()](craft-services-gql.md#method-flushcaches)                                                                                   | Flush all GraphQL caches, registries and loaders.
| [getActiveSchema()](craft-services-gql.md#method-getactiveschema)                                                                           | Returns the active GraphQL schema.
| [getAllPermissions()](craft-services-gql.md#method-getallpermissions)                                                                       | Returns all of the known GraphQL permissions, sorted by category.
| [getBehavior()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehavior()-detail "Defined by yii\base\Component")           | Returns the named behavior object.
| [getBehaviors()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#getBehaviors()-detail "Defined by yii\base\Component")         | Returns all behaviors attached to this component.
| [getCachedResult()](craft-services-gql.md#method-getcachedresult)                                                                           | Get the cached result for a key.
| [getContentArguments()](craft-services-gql.md#method-getcontentarguments)                                                                   | Return the content arguments based on an element class and contexts for it.
| [getPublicSchema()](craft-services-gql.md#method-getpublicschema)                                                                           | Returns the public schema. If it does not exist and admin changes are allowed, it will be created.
| [getSchemaById()](craft-services-gql.md#method-getschemabyid)                                                                               | Get a schema by its ID.
| [getSchemaByUid()](craft-services-gql.md#method-getschemabyuid)                                                                             | Get a schema by its UID.
| [getSchemaDef()](craft-services-gql.md#method-getschemadef)                                                                                 | Returns the GraphQL schema.
| [getSchemas()](craft-services-gql.md#method-getschemas)                                                                                     | Get all schemas.
| [getTokenByAccessToken()](craft-services-gql.md#method-gettokenbyaccesstoken)                                                               | Returns a GraphQL token by its access token.
| [getTokenById()](craft-services-gql.md#method-gettokenbyid)                                                                                 | Returns a GraphQL token by its id.
| [getTokenByName()](craft-services-gql.md#method-gettokenbyname)                                                                             | Returns a GraphQL token by its name.
| [getTokenByUid()](craft-services-gql.md#method-gettokenbyuid)                                                                               | Returns a GraphQL token by its UID.
| [getTokens()](craft-services-gql.md#method-gettokens)                                                                                       | Returns all GraphQL tokens.
| [getValidationRules()](craft-services-gql.md#method-getvalidationrules)                                                                     | Return a set of validation rules to use.
| [handleChangedSchema()](craft-services-gql.md#method-handlechangedschema)                                                                   | Handle schema change
| [handleDeletedSchema()](craft-services-gql.md#method-handledeletedschema)                                                                   | Handle schema getting deleted
| [hasEventHandlers()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#hasEventHandlers()-detail "Defined by yii\base\Component") | Returns a value indicating whether there is any handler attached to the named event.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")             | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")         | Returns a value indicating whether a property is defined.
| [init()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#init()-detail "Defined by yii\base\BaseObject")                       | Initializes the object.
| [invalidateCaches()](craft-services-gql.md#method-invalidatecaches)                                                                         | Invalidate all GraphQL result caches.
| [off()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#off()-detail "Defined by yii\base\Component")                           | Detaches an existing event handler from this component.
| [on()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#on()-detail "Defined by yii\base\Component")                             | Attaches an event handler to an event.
| [saveSchema()](craft-services-gql.md#method-saveschema)                                                                                     | Saves a GraphQL scope.
| [saveToken()](craft-services-gql.md#method-savetoken)                                                                                       | Saves a GraphQL token.
| [setActiveSchema()](craft-services-gql.md#method-setactiveschema)                                                                           | Sets the active GraphQL schema.
| [setCachedResult()](craft-services-gql.md#method-setcachedresult)                                                                           | Cache a result for the key and tag it.
| [trigger()](https://www.yiiframework.com/doc/api/2.0/yii-base-component#trigger()-detail "Defined by yii\base\Component")                   | Triggers an event.

### `deleteSchema()`



Since

:   3.4.0



Deletes a GraphQL schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L803-L807)


#### Arguments

- `$scope`

#### Returns

[boolean](http://php.net/language.types.boolean)



### `deleteSchemaById()`



Since

:   3.4.0



Deletes a GraphQL schema by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L785-L794)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The schema's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the schema was deleted.



### `deleteTokenById()`



Since

:   3.4.0



Deletes a GraphQL token by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L678-L687)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The schemas's ID

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the schema was deleted.



### `executeQuery()`



Since

:   3.3.11



Execute a GraphQL query for a given schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L348-L377)


#### Arguments

- `$schema` ([craft\models\GqlSchema](craft-models-gqlschema.md)) – The schema definition to use.
- `$query` ([string](http://php.net/language.types.string)) – The query string to execute.
- `$variables` ([array](http://php.net/language.types.array), [null](http://php.net/language.types.null)) – The variables to use.
- `$operationName` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The operation name.
- `$debugMode` ([boolean](http://php.net/language.types.boolean)) – Whether debug mode validations rules should be used for GraphQL.

#### Returns

[array](http://php.net/language.types.array)



### `flushCaches()`





Flush all GraphQL caches, registries and loaders.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L541-L550)



#### Returns

`void`



### `getActiveSchema()`





Returns the active GraphQL schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L419-L426)



#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md)

#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)\
  if no schema is currently active.


### `getAllPermissions()`





Returns all of the known GraphQL permissions, sorted by category.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L497-L534)



#### Returns

[array](http://php.net/language.types.array)



### `getCachedResult()`



Since

:   3.3.12



Get the cached result for a key.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L396-L399)


#### Arguments

- `$cacheKey`

#### Returns

`mixed`



### `getContentArguments()`





Return the content arguments based on an element class and contexts for it.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L902-L926)


#### Arguments

- `$contexts` ([craft\behaviors\FieldLayoutBehavior](craft-behaviors-fieldlayoutbehavior.md)[])
- `$elementClass` ([string](http://php.net/language.types.string))

#### Returns

[array](http://php.net/language.types.array)



### `getPublicSchema()`





Returns the public schema. If it does not exist and admin changes are allowed, it will be created.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L474-L490)



#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `getSchemaById()`





Get a schema by its ID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L849-L856)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer)) – The schema's ID

#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)



### `getSchemaByUid()`



Since

:   3.4.0



Get a schema by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L865-L872)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string)) – The schema's UID

#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)



### `getSchemaDef()`





Returns the GraphQL schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L261-L307)


#### Arguments

- `$schema` ([craft\models\GqlSchema](craft-models-gqlschema.md))
- `$prebuildSchema` ([boolean](http://php.net/language.types.boolean)) – Should the schema be deep-scanned and pre-built instead of lazy-loaded

#### Returns

`\GraphQL\Type\Schema`

#### Throws

- [craft\errors\GqlException](craft-errors-gqlexception.md)\
  in case of invalid schema


### `getSchemas()`



Since

:   3.4.0



Get all schemas.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L880-L892)



#### Returns

[craft\models\GqlSchema](craft-models-gqlschema.md)[]



### `getTokenByAccessToken()`



Since

:   3.4.0



Returns a GraphQL token by its access token.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L613-L624)


#### Arguments

- `$token` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\GqlToken](craft-models-gqltoken.md)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $token is invalid


### `getTokenById()`



Since

:   3.4.0



Returns a GraphQL token by its id.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L559-L566)


#### Arguments

- `$id` ([integer](http://php.net/language.types.integer))

#### Returns

[craft\models\GqlToken](craft-models-gqltoken.md), [null](http://php.net/language.types.null)



### `getTokenByName()`



Since

:   3.4.0



Returns a GraphQL token by its name.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L575-L582)


#### Arguments

- `$tokenName` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\GqlToken](craft-models-gqltoken.md), [null](http://php.net/language.types.null)



### `getTokenByUid()`



Since

:   3.4.0



Returns a GraphQL token by its UID.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L592-L603)


#### Arguments

- `$uid` ([string](http://php.net/language.types.string))

#### Returns

[craft\models\GqlToken](craft-models-gqltoken.md)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $uid is invalid


### `getTokens()`



Since

:   3.4.0



Returns all GraphQL tokens.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L445-L466)



#### Returns

[craft\models\GqlToken](craft-models-gqltoken.md)[]



### `getValidationRules()`





Return a set of validation rules to use.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L315-L335)


#### Arguments

- `$debug` ([boolean](http://php.net/language.types.boolean)) – Whether debugging validation rules should be allowed.

#### Returns

[array](http://php.net/language.types.array)



### `handleChangedSchema()`



Since

:   3.4.0



Handle schema change




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L732-L776)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `handleDeletedSchema()`



Since

:   3.4.0



Handle schema getting deleted




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L816-L841)


#### Arguments

- `$event` ([craft\events\ConfigEvent](craft-events-configevent.md))




### `invalidateCaches()`



Since

:   3.3.12



Invalidate all GraphQL result caches.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L384-L387)






### `saveSchema()`



Since

:   3.4.0



Saves a GraphQL scope.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L698-L724)


#### Arguments

- `$schema` ([craft\models\GqlSchema](craft-models-gqlschema.md)) – The schema to save
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the scope should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the scope was saved successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `saveToken()`



Since

:   3.4.0



Saves a GraphQL token.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L635-L669)


#### Arguments

- `$token` ([craft\models\GqlToken](craft-models-gqltoken.md)) – The schema to save
- `$runValidation` ([boolean](http://php.net/language.types.boolean)) – Whether the schema should be validated

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the schema was saved successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `setActiveSchema()`





Sets the active GraphQL schema.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L434-L437)


#### Arguments

- `$schema` ([craft\models\GqlSchema](craft-models-gqlschema.md), [null](http://php.net/language.types.null)) – The schema, or `null` to unset the active schema


#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)


### `setCachedResult()`



Since

:   3.3.12



Cache a result for the key and tag it.




[View source](https://github.com/craftcms/cms/blob/master/src/services/Gql.php#L408-L411)


#### Arguments

- `$cacheKey`
- `$result`








## Constants

| Constant                 | Description
| ------------------------ | -------------------------------------------------------------
| `CACHE_TAG`              |
| `CONFIG_GQL_SCHEMAS_KEY` |
| `GRAPHQL_COUNT_FIELD`    | The field name to use when fetching count of related elements


## Events

### EVENT_AFTER_EXECUTE_GQL_QUERY



Type

:   [craft\events\ExecuteGqlQueryEvent](craft-events-executegqlqueryevent.md)

Since

:   3.3.11



The event that is triggered after executing the GraphQL query.

Plugins get a chance to do something after a performed GraphQL query.





---

#### Example

::: code
```php
use craft\events\ExecuteGqlQueryEvent;
use craft\services\GraphQl;
use yii\base\Event;

Event::on(Gql::class,
    Gql::EVENT_AFTER_EXECUTE_GQL_QUERY,
    function(ExecuteGqlQueryEvent $event) {
        // Cache the results from $event->result or just tweak them
    }
);
```
:::


### EVENT_BEFORE_EXECUTE_GQL_QUERY



Type

:   [craft\events\ExecuteGqlQueryEvent](craft-events-executegqlqueryevent.md)

Since

:   3.3.11



The event that is triggered before executing the GraphQL query.

Plugins get a chance to modify the query or return a cached response.





---

#### Example

::: code
```php
use craft\events\ExecuteGqlQueryEvent;
use craft\services\GraphQl;
use yii\base\Event;

Event::on(Gql::class,
    Gql::EVENT_BEFORE_EXECUTE_GQL_QUERY,
    function(ExecuteGqlQueryEvent $event) {
        // Set the result from cache
        $event->result = ...;
    }
);
```
:::


### EVENT_DEFINE_GQL_VALIDATION_RULES



Type

:   [craft\events\DefineGqlValidationRulesEvent](craft-events-definegqlvalidationrulesevent.md)



The event that is triggered when defining validation rules to be used.

Plugins get a chance to alter the GraphQL validation rule list.





---

#### Example

::: code
```php
use craft\events\DefineGqlValidationRulesEvent;
use craft\services\GraphQl;
use yii\base\Event;
use GraphQL\Type\Definition\Type;
use GraphQL\Validator\Rules\DisableIntrospection;

Event::on(Gql::class, Gql::::EVENT_DEFINE_GQL_VALIDATION_RULES, function (DefineGqlValidationRulesEvent $event) {
    // Disable introspection permanently.
    $event->validationRules[DisableIntrospection::class] = new DisableIntrospection();
});
```
:::


### EVENT_REGISTER_GQL_DIRECTIVES



Type

:   [craft\events\RegisterGqlDirectivesEvent](craft-events-registergqldirectivesevent.md)



The event that is triggered when registering GraphQL directives.

Plugins get a chance to add their own GraphQL directives.
See [GraphQL](https://docs.craftcms.com/v3/graphql.html) for documentation on adding GraphQL support.





---

#### Example

::: code
```php
use craft\events\RegisterGqlDirectivesEvent;
use craft\services\GraphQl;
use yii\base\Event;

Event::on(Gql::class,
    Gql::EVENT_REGISTER_GQL_DIRECTIVES,
    function(RegisterGqlDirectivesEvent $event) {
        $event->directives[] = MyDirective::class;
    }
);
```
:::


### EVENT_REGISTER_GQL_PERMISSIONS



Type

:   [craft\events\RegisterGqlPermissionsEvent](craft-events-registergqlpermissionsevent.md)

Since

:   3.4.0



The event that is triggered when registering user permissions.



---



### EVENT_REGISTER_GQL_QUERIES



Type

:   [craft\events\RegisterGqlQueriesEvent](craft-events-registergqlqueriesevent.md)



The event that is triggered when registering GraphQL queries.

Plugins get a chance to add their own GraphQL queries.
See [GraphQL](https://docs.craftcms.com/v3/graphql.html) for documentation on adding GraphQL support.





---

#### Example

::: code
```php
use craft\events\RegisterGqlQueriesEvent;
use craft\services\GraphQl;
use yii\base\Event;
use GraphQL\Type\Definition\Type;

Event::on(Gql::class, Gql::EVENT_REGISTER_GQL_QUERIES, function(RegisterGqlQueriesEvent $event) {
    // Add my GraphQL queries
    $event->queries['queryPluginData'] =
    [
        'type' => Type::listOf(MyType::getType())),
        'args' => MyArguments::getArguments(),
        'resolve' => MyResolver::class . '::resolve'
    ];
});
```
:::


### EVENT_REGISTER_GQL_TYPES



Type

:   [craft\events\RegisterGqlTypesEvent](craft-events-registergqltypesevent.md)



The event that is triggered when registering GraphQL types.

Plugins get a chance to add their own GraphQL types.
See [GraphQL](https://docs.craftcms.com/v3/graphql.html) for documentation on adding GraphQL support.





---

#### Example

::: code
```php
use craft\events\RegisterGqlTypeEvent;
use craft\services\GraphQl;
use yii\base\Event;

Event::on(Gql::class, Gql::EVENT_REGISTER_GQL_TYPES, function(RegisterGqlTypeEvent $event) {
    // Add my GraphQL types
    $event->types[] = MyType::class;
});
```
:::



