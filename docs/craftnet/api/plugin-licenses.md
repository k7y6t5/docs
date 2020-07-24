---
split: true
code:
  - bash
  - php
---

# Plugin Licenses

## List plugin licenses

To list plugin licenses created for your plugins, create an authenticated GET request to `/v1/plugin-licenses`.

Licenses will be paginated.

---

#### Definition

```
GET https://api.craftcms.com/v1/plugin-licenses
```

#### Example Request

::: code

```bash
$ curl https://api.craftcms.com/v1/plugin-licenses \
   -u pixelandtonic:uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7
```

```php
$client = new GuzzleHttp\Client();
$response = $client->request(
  'GET',
  'https://api.craftcms.com/v1/plugin-licenses',
  [
    'auth' => [
      'pixelandtonic',
      'uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7'
    ],
  ]
);
```

:::

#### Example Response Body

```json
{
  "total": 1,
  "totalPages": 1,
  "licenses": [
    {
      "id": 649,
      "pluginId": 1237,
      "editionId": 1415,
      "ownerId": 1,
      "cmsLicenseId": null,
      "plugin": "commerce",
      "edition": "standard",
      "expirable": false,
      "expired": false,
      "autoRenew": false,
      "email": "brandon@craftcms.com",
      "key": "P8GQRVQO5MK9Q673U0IJZ2I3",
      "notes": null,
      "lastVersion": null,
      "lastAllowedVersion": null,
      "lastActivityOn": null,
      "lastRenewedOn": null,
      "expiresOn": null,
      "dateCreated": "2018-04-04T10:01:00-08:00",
      "dateUpdated": "2018-04-04T10:01:00-08:00",
      "uid": "2a71e0a6-e47e-4da5-9699-c6c296367619"
  }
}
```

## Create a plugin license

To create a new plugin license, create an authenticated POST request to `/v1/plugin-licenses`.

The request must have a JSON body with the following keys:

Key | Type | Description
--- | ---- | -----------
`plugin` **(required)** | string | Plugin handle
`edition` **(required)** | string | Plugin edition
`email` **(required)** | string | Licencee’s email address
`expirable` | boolean | Whether the license should be expirable (`false` by default)
`expiresOn` | string, null | Expiration date, if expirable (a year from now by default)
`notes` | string, null | Customer notes
`privateNotes` | string, null | Private notes, never shared with the customer

---

#### Definition

```
POST https://api.craftcms.com/v1/plugin-licenses
```

#### Example Request

::: code

```bash
$ curl https://api.craftcms.com/v1/plugin-licenses \
   -u pixelandtonic:uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7 \
   -d $'{
          "edition": "standard",
          "plugin": "commerce",
          "email": "brandon@pixelandtonic.com"
        }'
```

```php
$client = new GuzzleHttp\Client();
$response = $client->request(
  'POST',
  'https://api.craftcms.com/v1/plugin-licenses',
  [
    'auth' => [
      'pixelandtonic',
      'uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7'
    ],
    'json' => [
      'edition' => 'standard',
      'plugin' => 'commerce',
      'email' => 'brandon@pixelandtonic.com',
    ],
  ]
);
```

:::

#### Example Response Body

```json
{
  "license": {
    "id": 649,
    "pluginId": 1237,
    "editionId": 1415,
    "ownerId": 1,
    "cmsLicenseId": null,
    "plugin": "commerce",
    "edition": "standard",
    "expirable": false,
    "expired": false,
    "autoRenew": false,
    "email": "brandon@craftcms.com",
    "key": "P8GQRVQO5MK9Q673U0IJZ2I3",
    "notes": null,
    "lastVersion": null,
    "lastAllowedVersion": null,
    "lastActivityOn": null,
    "lastRenewedOn": null,
    "expiresOn": null,
    "dateCreated": null,
    "dateUpdated": null,
    "uid": null
  }
}
```

## Get a plugin license

To retrieve a plugin license created for one of your plugins, create an authenticated GET request to `/v1/plugin-licenses/<license-key>`.

---

#### Definition

```
GET https://api.craftcms.com/v1/plugin-licenses/<license-key>
```

#### Example Request

::: code

```bash
$ curl https://api.craftcms.com/v1/plugin-licenses/P8GQRVQO5MK9Q673U0IJZ2I3 \
   -u pixelandtonic:uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7
```

```php
$client = new GuzzleHttp\Client();
$response = $client->request(
  'GET',
  'https://api.craftcms.com/v1/plugin-licenses/P8GQRVQO5MK9Q673U0IJZ2I3',
  [
    'auth' => [
      'pixelandtonic',
      'uurzawyghj3ebb7mp8r762h7dn8htstx8xsl7ou7'
    ],
  ]
);
```

:::

#### Example Response Body

```json
{
  "license": {
    "id": 649,
    "pluginId": 1237,
    "editionId": 1415,
    "ownerId": 1,
    "cmsLicenseId": null,
    "plugin": "commerce",
    "edition": "standard",
    "expirable": false,
    "expired": false,
    "autoRenew": false,
    "email": "brandon@craftcms.com",
    "key": "P8GQRVQO5MK9Q673U0IJZ2I3",
    "notes": null,
    "lastVersion": null,
    "lastAllowedVersion": null,
    "lastActivityOn": null,
    "lastRenewedOn": null,
    "expiresOn": null,
    "dateCreated": "2018-04-04T10:01:00-08:00",
    "dateUpdated": "2018-04-04T10:01:00-08:00",
    "uid": "2a71e0a6-e47e-4da5-9699-c6c296367619"
  }
}
```
