---
split: true
code:
  - bash
  - php
---

# Composer Packages

## Get a Composer package

To retrieve information about a Composer package, create a GET request to `/v1/package/<package-name>`.

#### Parameters

The following optional query string parameters are supported:

Parameter | Description
--------- | -----------
`include` | Set to `releases` to include all known release information in the response.
`minStability` | The minimum stability to allow when determining which releases’ information should be included in the response. Can be set to `dev`, `alpha`, `beta`, `RC`, or `stable`. (Default is `stable`.)
`constraint` | The version constraint to use when determining which releases’ information should be included in the response (e.g. `^2.0.0`).

---

#### Definition

```
GET https://api.craftcms.com/v1/package/<package-name>
```

#### Example Request

::: code

```bash
$ curl https://api.craftcms.com/v1/package/craftcms/cms
```

```php
$client = new GuzzleHttp\Client();
$response = $client->request(
  'GET',
  'https://api.craftcms.com/v1/package/craftcms/cms'
);
```

:::

#### Example Response Body

```json
{
  "name": "craftcms/cms",
  "type": "library",
  "repository": "https://github.com/craftcms/cms",
  "managed": true,
  "abandoned": false,
  "replacementPackage": null,
  "latestRelease": {
    "sha": "2fc56f0bcd70a1ae67e9338512e053b896f4a47e",
    "version": "3.4.15",
    "time": "2020-04-09 17:45:41"
  }
}
```
