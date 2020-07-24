---
title: craft\config\GeneralConfig
code:
  - php
  - twig
---

# GeneralConfig

Type

:   Class

Namespace

:   craft\config

Inherits

:   [craft\config\GeneralConfig](craft-config-generalconfig.md) &raquo;
[yii\base\BaseObject](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject)

Implements

:   [yii\base\Configurable](https://www.yiiframework.com/doc/api/2.0/yii-base-configurable)

Since

:   3.0.0



General config class





[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php)


## Public Properties

| Property                                                                                               | Description
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [actionTrigger](craft-config-generalconfig.md#actiontrigger)                                           | [string](http://php.net/language.types.string) – The URI segment Craft should look for when determining if the current request should be routed to a controller action.
| [activateAccountSuccessPath](craft-config-generalconfig.md#activateaccountsuccesspath)                 | `mixed` – The URI that users without access to the control panel should be redirected to after activating their account.
| [addTrailingSlashesToUrls](craft-config-generalconfig.md#addtrailingslashestourls)                     | [boolean](http://php.net/language.types.boolean) – Whether auto-generated URLs should have trailing slashes.
| [aliases](craft-config-generalconfig.md#aliases)                                                       | [array](http://php.net/language.types.array) – Any custom Yii [aliases](https://www.
| [allowAdminChanges](craft-config-generalconfig.md#allowadminchanges)                                   | [boolean](http://php.net/language.types.boolean) – Whether admins should be allowed to make administrative changes to the system.
| [allowSimilarTags](craft-config-generalconfig.md#allowsimilartags)                                     | [boolean](http://php.net/language.types.boolean) – Whether users should be allowed to create similarly-named tags.
| [allowUpdates](craft-config-generalconfig.md#allowupdates)                                             | [boolean](http://php.net/language.types.boolean) – Whether Craft should allow system and plugin updates in the control panel, and plugin installation from the Plugin Store.
| [allowUppercaseInSlug](craft-config-generalconfig.md#allowuppercaseinslug)                             | [boolean](http://php.net/language.types.boolean) – Whether uppercase letters should be allowed in slugs.
| [allowedFileExtensions](craft-config-generalconfig.md#allowedfileextensions)                           | [string](http://php.net/language.types.string)[] – The file extensions Craft should allow when a user is uploading files.
| [autoLoginAfterAccountActivation](craft-config-generalconfig.md#autologinafteraccountactivation)       | [boolean](http://php.net/language.types.boolean) – Whether users should automatically be logged in after activating their account or resetting their password.
| [backupCommand](craft-config-generalconfig.md#backupcommand)                                           | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The shell command that Craft should execute to create a database backup.
| [backupOnUpdate](craft-config-generalconfig.md#backuponupdate)                                         | [boolean](http://php.net/language.types.boolean) – Whether Craft should create a database backup before applying a new system update.
| [baseCpUrl](craft-config-generalconfig.md#basecpurl)                                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The base URL that Craft should use when generating control panel URLs.
| [blowfishHashCost](craft-config-generalconfig.md#blowfishhashcost)                                     | [integer](http://php.net/language.types.integer) – The higher the cost value, the longer it takes to generate a password hash and to verify against it.
| [cacheDuration](craft-config-generalconfig.md#cacheduration)                                           | `mixed` – The default length of time Craft will store data, RSS feed, and template caches.
| [cacheElementQueries](craft-config-generalconfig.md#cacheelementqueries)                               | [boolean](http://php.net/language.types.boolean) – Whether Craft should cache element queries that fall inside `{% cache %}` tags.
| [convertFilenamesToAscii](craft-config-generalconfig.md#convertfilenamestoascii)                       | [boolean](http://php.net/language.types.boolean) – Whether uploaded filenames with non-ASCII characters should be converted to ASCII (i.e. `ñ` → `n`).
| [cooldownDuration](craft-config-generalconfig.md#cooldownduration)                                     | `mixed` – The amount of time a user must wait before re-attempting to log in after their account is locked due to too many failed login attempts.
| [cpTrigger](craft-config-generalconfig.md#cptrigger)                                                   | [string](http://php.net/language.types.string) – The URI segment Craft should look for when determining if the current request should route to the control panel rather than the front-end website.
| [csrfTokenName](craft-config-generalconfig.md#csrftokenname)                                           | [string](http://php.net/language.types.string) – The name of CSRF token used for CSRF validation if <config:enableCsrfProtection> is set to `true`.
| [customAsciiCharMappings](craft-config-generalconfig.md#customasciicharmappings)                       | [array](http://php.net/language.types.array) – Any custom ASCII character mappings.
| [defaultCookieDomain](craft-config-generalconfig.md#defaultcookiedomain)                               | [string](http://php.net/language.types.string) – The domain that cookies generated by Craft should be created for.
| [defaultCpLanguage](craft-config-generalconfig.md#defaultcplanguage)                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The default language the control panel should use for users who haven’t set a preferred language yet.
| [defaultDirMode](craft-config-generalconfig.md#defaultdirmode)                                         | `mixed` – The default permission to be set for newly generated directories.
| [defaultFileMode](craft-config-generalconfig.md#defaultfilemode)                                       | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The default permission to be set for newly generated files.
| [defaultImageQuality](craft-config-generalconfig.md#defaultimagequality)                               | [integer](http://php.net/language.types.integer) – The quality level Craft will use when saving JPG and PNG files.
| [defaultSearchTermOptions](craft-config-generalconfig.md#defaultsearchtermoptions)                     | [array](http://php.net/language.types.array) – The default options that should be applied to each search term.
| [defaultTemplateExtensions](craft-config-generalconfig.md#defaulttemplateextensions)                   | [string](http://php.net/language.types.string)[] – The template file extensions Craft will look for when matching a template path to a file on the front end.
| [defaultTokenDuration](craft-config-generalconfig.md#defaulttokenduration)                             | `mixed` – The default amount of time tokens can be used before expiring.
| [defaultWeekStartDay](craft-config-generalconfig.md#defaultweekstartday)                               | [integer](http://php.net/language.types.integer) – The default day that new users should have set as their Week Start Day.
| [deferPublicRegistrationPassword](craft-config-generalconfig.md#deferpublicregistrationpassword)       | [boolean](http://php.net/language.types.boolean) – By default, Craft will require a 'password' field to be submitted on front-end, public user registrations.
| [devMode](craft-config-generalconfig.md#devmode)                                                       | [boolean](http://php.net/language.types.boolean) – Whether the system should run in [Dev Mode](https://craftcms.
| [disabledPlugins](craft-config-generalconfig.md#disabledplugins)                                       | [string](http://php.net/language.types.string)[] – Array of plugin handles that should be disabled, regardless of what the project config says.
| [elevatedSessionDuration](craft-config-generalconfig.md#elevatedsessionduration)                       | `mixed` – The amount of time a user’s elevated session will last, which is required for some sensitive actions (e.g. user group/permission assignment).
| [enableCsrfCookie](craft-config-generalconfig.md#enablecsrfcookie)                                     | [boolean](http://php.net/language.types.boolean) – Whether to use a cookie to persist the CSRF token if <config:enableCsrfProtection> is enabled.
| [enableCsrfProtection](craft-config-generalconfig.md#enablecsrfprotection)                             | [boolean](http://php.net/language.types.boolean) – Whether to enable CSRF protection via hidden form inputs for all forms submitted via Craft.
| [enableGql](craft-config-generalconfig.md#enablegql)                                                   | [boolean](http://php.net/language.types.boolean) – Whether the GraphQL API should be enabled.
| [enableGraphQlCaching](craft-config-generalconfig.md#enablegraphqlcaching)                             | [boolean](http://php.net/language.types.boolean) – Whether Craft should cache GraphQL queries.
| [enableTemplateCaching](craft-config-generalconfig.md#enabletemplatecaching)                           | [boolean](http://php.net/language.types.boolean) – Whether to enable Craft's template `{% cache %}` tag on a global basis.
| [errorTemplatePrefix](craft-config-generalconfig.md#errortemplateprefix)                               | [string](http://php.net/language.types.string) – The prefix that should be prepended to HTTP error status codes when determining the path to look for an error’s template.
| [extraAllowedFileExtensions](craft-config-generalconfig.md#extraallowedfileextensions)                 | [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – List of file extensions that will be merged into the <config:allowedFileExtensions> config setting.
| [extraAppLocales](craft-config-generalconfig.md#extraapplocales)                                       | [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – List of extra locale IDs that the application should support, and users should be able to select as their Preferred Language.
| [extraFileKinds](craft-config-generalconfig.md#extrafilekinds)                                         | [array](http://php.net/language.types.array) – List of additional file kinds Craft should support.
| [filenameWordSeparator](craft-config-generalconfig.md#filenamewordseparator)                           | [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean) – The string to use to separate words when uploading Assets.
| [generateTransformsBeforePageLoad](craft-config-generalconfig.md#generatetransformsbeforepageload)     | [boolean](http://php.net/language.types.boolean) – Whether images transforms should be generated before page load.
| [headlessMode](craft-config-generalconfig.md#headlessmode)                                             | [boolean](http://php.net/language.types.boolean) – Bool Whether the system should run in Headless Mode, which optimizes the system and control panel for headless CMS implementations.
| [imageDriver](craft-config-generalconfig.md#imagedriver)                                               | `mixed` – The image driver Craft should use to cleanse and transform images.
| [indexTemplateFilenames](craft-config-generalconfig.md#indextemplatefilenames)                         | [string](http://php.net/language.types.string)[] – The template filenames Craft will look for within a directory to represent the directory’s “index” template when matching a template path to a file on the front end.
| [invalidLoginWindowDuration](craft-config-generalconfig.md#invalidloginwindowduration)                 | `mixed` – The amount of time to track invalid login attempts for a user, for determining if Craft should lock an account.
| [invalidUserTokenPath](craft-config-generalconfig.md#invalidusertokenpath)                             | `mixed` – The URI Craft should redirect to when user token validation fails.
| [ipHeaders](craft-config-generalconfig.md#ipheaders)                                                   | [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null) – List of headers where proxies store the real client IP.
| [isSystemLive](craft-config-generalconfig.md#issystemlive)                                             | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether the site is currently live.
| [limitAutoSlugsToAscii](craft-config-generalconfig.md#limitautoslugstoascii)                           | [boolean](http://php.net/language.types.boolean) – Whether non-ASCII characters in auto-generated slugs should be converted to ASCII (i.e. ñ → n).
| [loginPath](craft-config-generalconfig.md#loginpath)                                                   | `mixed` – The URI Craft should use for user login on the front-end.
| [logoutPath](craft-config-generalconfig.md#logoutpath)                                                 | `mixed` – The URI Craft should use for user logout on the front-end.
| [maxBackups](craft-config-generalconfig.md#maxbackups)                                                 | [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean) – The number of backups that Craft should make before it starts deleting the oldest backups.
| [maxCachedCloudImageSize](craft-config-generalconfig.md#maxcachedcloudimagesize)                       | [integer](http://php.net/language.types.integer) – The maximum dimension size to use when caching images from external sources to use in transforms.
| [maxInvalidLogins](craft-config-generalconfig.md#maxinvalidlogins)                                     | [integer](http://php.net/language.types.integer) – The number of invalid login attempts Craft will allow within the specified duration before the account gets locked.
| [maxRevisions](craft-config-generalconfig.md#maxrevisions)                                             | [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null) – The maximum number of revisions that should be stored for each element.
| [maxSlugIncrement](craft-config-generalconfig.md#maxslugincrement)                                     | [integer](http://php.net/language.types.integer) – The highest number Craft will tack onto a slug in order to make it unique before giving up and throwing an error.
| [maxUploadFileSize](craft-config-generalconfig.md#maxuploadfilesize)                                   | [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string) – The maximum upload file size allowed.
| [omitScriptNameInUrls](craft-config-generalconfig.md#omitscriptnameinurls)                             | [boolean](http://php.net/language.types.boolean) – Whether generated URLs should omit `index.
| [optimizeImageFilesize](craft-config-generalconfig.md#optimizeimagefilesize)                           | [boolean](http://php.net/language.types.boolean) – Whether Craft should optimize images for reduced file sizes without noticeably reducing image quality.
| [pageTrigger](craft-config-generalconfig.md#pagetrigger)                                               | [string](http://php.net/language.types.string) – The string preceding a number which Craft will look for when determining if the current request is for a particular page in a paginated list of pages.
| [pathParam](craft-config-generalconfig.md#pathparam)                                                   | [string](http://php.net/language.types.string) – The query string param that Craft will check when determining the request's path.
| [phpMaxMemoryLimit](craft-config-generalconfig.md#phpmaxmemorylimit)                                   | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The maximum amount of memory Craft will try to reserve during memory intensive operations such as zipping, unzipping and updating.
| [phpSessionName](craft-config-generalconfig.md#phpsessionname)                                         | [string](http://php.net/language.types.string) – The name of the PHP session cookie.
| [postCpLoginRedirect](craft-config-generalconfig.md#postcploginredirect)                               | `mixed` – The path that users should be redirected to after logging in from the control panel.
| [postLoginRedirect](craft-config-generalconfig.md#postloginredirect)                                   | `mixed` – The path that users should be redirected to after logging in from the front-end site.
| [postLogoutRedirect](craft-config-generalconfig.md#postlogoutredirect)                                 | `mixed` – The path that users should be redirected to after logging out from the front-end site.
| [preserveCmykColorspace](craft-config-generalconfig.md#preservecmykcolorspace)                         | [boolean](http://php.net/language.types.boolean) – Whether CMYK should be preserved as the colorspace when manipulating images.
| [preserveExifData](craft-config-generalconfig.md#preserveexifdata)                                     | [boolean](http://php.net/language.types.boolean) – Whether the EXIF data should be preserved when manipulating and uploading images.
| [preserveImageColorProfiles](craft-config-generalconfig.md#preserveimagecolorprofiles)                 | [boolean](http://php.net/language.types.boolean) – Whether the embedded Image Color Profile (ICC) should be preserved when manipulating images.
| [preventUserEnumeration](craft-config-generalconfig.md#preventuserenumeration)                         | [boolean](http://php.net/language.types.boolean) – When set to `false` and you go through the "forgot password" workflow on the control panel login page, for example, you get distinct messages saying if the username/email didn't exist or the email was successfully sent and to check your email for further instructions.
| [privateTemplateTrigger](craft-config-generalconfig.md#privatetemplatetrigger)                         | [string](http://php.net/language.types.string) – The template path segment prefix that should be used to identify "private" templates (templates that aren't directly accessible via a matching URL).
| [purgePendingUsersDuration](craft-config-generalconfig.md#purgependingusersduration)                   | `mixed` – The amount of time to wait before Craft purges pending users from the system that have not activated.
| [purgeStaleUserSessionDuration](craft-config-generalconfig.md#purgestaleusersessionduration)           | `mixed` – The amount of time to wait before Craft purges stale user sessions from the sessions table in the database.
| [purgeUnsavedDraftsDuration](craft-config-generalconfig.md#purgeunsaveddraftsduration)                 | `mixed` – The amount of time to wait before Craft purges drafts of new elements that were never formally saved.
| [rememberUsernameDuration](craft-config-generalconfig.md#rememberusernameduration)                     | `mixed` – The amount of time Craft will remember a username and pre-populate it on the control panel’s Login page.
| [rememberedUserSessionDuration](craft-config-generalconfig.md#rememberedusersessionduration)           | `mixed` – The amount of time a user stays logged if “Remember Me” is checked on the login page.
| [requireMatchingUserAgentForSession](craft-config-generalconfig.md#requirematchinguseragentforsession) | [boolean](http://php.net/language.types.boolean) – Whether Craft should require a matching user agent string when restoring a user session from a cookie.
| [requireUserAgentAndIpForSession](craft-config-generalconfig.md#requireuseragentandipforsession)       | [boolean](http://php.net/language.types.boolean) – Whether Craft should require the existence of a user agent string and IP address when creating a new user session.
| [resourceBasePath](craft-config-generalconfig.md#resourcebasepath)                                     | [string](http://php.net/language.types.string) – The path to the root directory that should store published control panel resources.
| [resourceBaseUrl](craft-config-generalconfig.md#resourcebaseurl)                                       | [string](http://php.net/language.types.string) – The URL to the root directory that should store published control panel resources.
| [restoreCommand](craft-config-generalconfig.md#restorecommand)                                         | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The shell command that Craft should execute to restore a database backup.
| [rotateImagesOnUploadByExifData](craft-config-generalconfig.md#rotateimagesonuploadbyexifdata)         | [boolean](http://php.net/language.types.boolean) – Whether Craft should rotate images according to their EXIF data on upload.
| [runQueueAutomatically](craft-config-generalconfig.md#runqueueautomatically)                           | [boolean](http://php.net/language.types.boolean) – Whether Craft should run pending queue jobs automatically when someone visits the control panel.
| [sameSiteCookieValue](craft-config-generalconfig.md#samesitecookievalue)                               | [string](http://php.net/language.types.string) – The [SameSite](https://www.
| [sanitizeSvgUploads](craft-config-generalconfig.md#sanitizesvguploads)                                 | [boolean](http://php.net/language.types.boolean) – Whether Craft should sanitize uploaded SVG files and strip out potential malicious looking content.
| [secureHeaders](craft-config-generalconfig.md#secureheaders)                                           | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – Lists of headers that are, by default, subject to the trusted host configuration.
| [secureProtocolHeaders](craft-config-generalconfig.md#secureprotocolheaders)                           | [array](http://php.net/language.types.array), [null](http://php.net/language.types.null) – List of headers to check for determining whether the connection is made via HTTPS.
| [securityKey](craft-config-generalconfig.md#securitykey)                                               | [string](http://php.net/language.types.string) – A private, random, cryptographically-secure key that is used for hashing and encrypting data in [craft\services\Security](craft-services-security.md).
| [sendPoweredByHeader](craft-config-generalconfig.md#sendpoweredbyheader)                               | [boolean](http://php.net/language.types.boolean) – Whether an `X-Powered-By: Craft CMS` header should be sent, helping services like [BuiltWith](https://builtwith.
| [setPasswordPath](craft-config-generalconfig.md#setpasswordpath)                                       | `mixed` – The URI Craft should use for Set Password forms on the front-end.
| [setPasswordSuccessPath](craft-config-generalconfig.md#setpasswordsuccesspath)                         | `mixed` – The URI Craft should redirect users to after setting their password from the front-end.
| [siteName](craft-config-generalconfig.md#sitename)                                                     | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[] – The site name(s).
| [siteUrl](craft-config-generalconfig.md#siteurl)                                                       | [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[] – The base URL to the site(s).
| [slugWordSeparator](craft-config-generalconfig.md#slugwordseparator)                                   | [string](http://php.net/language.types.string) – The character(s) that should be used to separate words in slugs.
| [softDeleteDuration](craft-config-generalconfig.md#softdeleteduration)                                 | `mixed` – The amount of time before a soft-deleted item will be up for hard-deletion by garbage collection.
| [storeUserIps](craft-config-generalconfig.md#storeuserips)                                             | [boolean](http://php.net/language.types.boolean) – Whether user IP addresses should be stored/logged by the system.
| [suppressTemplateErrors](craft-config-generalconfig.md#suppresstemplateerrors)                         | [boolean](http://php.net/language.types.boolean) – Whether Twig runtime errors should be suppressed.
| [testToEmailAddress](craft-config-generalconfig.md#testtoemailaddress)                                 | [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Configures Craft to send all system emails to a single email address, or an array of email addresses for testing purposes.
| [timezone](craft-config-generalconfig.md#timezone)                                                     | [string](http://php.net/language.types.string), [null](http://php.net/language.types.null) – The timezone of the site.
| [tokenParam](craft-config-generalconfig.md#tokenparam)                                                 | [string](http://php.net/language.types.string) – The query string parameter name that Craft tokens should be set to.
| [transformGifs](craft-config-generalconfig.md#transformgifs)                                           | [boolean](http://php.net/language.types.boolean) – Whether GIF files should be cleansed/transformed.
| [translationDebugOutput](craft-config-generalconfig.md#translationdebugoutput)                         | [boolean](http://php.net/language.types.boolean) – Whether translated messages should be wrapped in special characters, to help find any strings that are not being run through `Craft::t()` or the `|translate` filter.
| [trustedHosts](craft-config-generalconfig.md#trustedhosts)                                             | [array](http://php.net/language.types.array) – The configuration for trusted security-related headers.
| [upscaleImages](craft-config-generalconfig.md#upscaleimages)                                           | [boolean](http://php.net/language.types.boolean) – Whether images should be upscaled if the provided transform size is larger than the image.
| [useCompressedJs](craft-config-generalconfig.md#usecompressedjs)                                       | [boolean](http://php.net/language.types.boolean) – Whether Craft should include minified JavaScript files whenever possible, and minify JavaScript code passed to `\craft\web\View::includeJs()` or `{% js %}` Twig tags.
| [useEmailAsUsername](craft-config-generalconfig.md#useemailasusername)                                 | [boolean](http://php.net/language.types.boolean) – Whether Craft should set users’ usernames to their email addresses, rather than let them set their username separately.
| [useFileLocks](craft-config-generalconfig.md#usefilelocks)                                             | [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null) – Whether to grab an exclusive lock on a file when writing to it by using the `LOCK_EX` flag.
| [usePathInfo](craft-config-generalconfig.md#usepathinfo)                                               | [boolean](http://php.net/language.types.boolean) – Whether Craft should specify the path using `PATH_INFO` or as a query string parameter when generating URLs.
| [useProjectConfigFile](craft-config-generalconfig.md#useprojectconfigfile)                             | [boolean](http://php.net/language.types.boolean) – Whether the project config should be saved out to `config/project.
| [useSecureCookies](craft-config-generalconfig.md#usesecurecookies)                                     | [boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string) – Whether Craft will set the "secure" flag when saving cookies when using `Craft::cookieConfig() to create a cookie`.
| [useSslOnTokenizedUrls](craft-config-generalconfig.md#usesslontokenizedurls)                           | [boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string) – Determines what protocol/schema Craft will use when generating tokenized URLs.
| [userSessionDuration](craft-config-generalconfig.md#usersessionduration)                               | `mixed` – The amount of time before a user will get logged out due to inactivity.
| [verificationCodeDuration](craft-config-generalconfig.md#verificationcodeduration)                     | `mixed` – The amount of time a user verification code can be used before expiring.
| [verifyEmailPath](craft-config-generalconfig.md#verifyemailpath)                                       | `mixed` – The URI Craft should use for email verification links on the front-end.
| [verifyEmailSuccessPath](craft-config-generalconfig.md#verifyemailsuccesspath)                         | `mixed` – The URI that users without access to the control panel should be redirected to after verifying a new email address.

### `actionTrigger`



Type

:   [string](http://php.net/language.types.string)



The URI segment Craft should look for when determining if the current request should be routed to a
controller action.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L36)



### `activateAccountSuccessPath`



Type

:   `mixed`



The URI that users without access to the control panel should be redirected to after activating their account.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getActivateAccountSuccessPath()](craft-config-generalconfig.md#method-getactivateaccountsuccesspath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L43)



### `addTrailingSlashesToUrls`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether auto-generated URLs should have trailing slashes.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L47)



### `aliases`



Type

:   [array](http://php.net/language.types.array)



Any custom Yii [aliases](https://www.yiiframework.com/doc/guide/2.0/en/concept-aliases) that should be defined for every request.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L51)



### `allowAdminChanges`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.0



Whether admins should be allowed to make administrative changes to the system.

If this is disabled, the Settings and Plugin Store sections will be hidden,
the Craft edition and Craft/plugin versions will be locked, and the project config will become read-only.

Therefore you should only disable this in production environments when <config:useProjectConfigFile> is enabled,
and you have a deployment workflow that runs `composer install` automatically on deploy.

::: warning
Don’t disable this setting until **all** environments have been updated to Craft 3.1.0 or later.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L67)



### `allowSimilarTags`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether users should be allowed to create similarly-named tags.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L82)



### `allowUpdates`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should allow system and plugin updates in the control panel, and plugin installation from the Plugin Store.

This setting will automatically be disabled if <config:allowAdminChanges> is disabled.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L73)



### `allowUppercaseInSlug`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether uppercase letters should be allowed in slugs.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L86)



### `allowedFileExtensions`



Type

:   [string](http://php.net/language.types.string)[]



The file extensions Craft should allow when a user is uploading files.

See also [extraAllowedFileExtensions](craft-config-generalconfig.md#extraallowedfileextensions)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L78)



### `autoLoginAfterAccountActivation`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether users should automatically be logged in after activating their account or resetting
their password.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L91)



### `backupCommand`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The shell command that Craft should execute to create a database backup.

By default Craft will run `mysqldump` or `pg_dump`, provided that those libraries are in the `$PATH`
variable for the user the web server  is running as.

There are several tokens you can use that Craft will swap out at runtime:

- `{path}` - the target backup file path
- `{port}` - the current database port
- `{server}` - the current database host name
- `{user}` - the user to connect to the database
- `{database}` - the current database name
- `{schema}` - the current database schema (if any)

This can also be set to `false` to disable database backups completely.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L114)



### `backupOnUpdate`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should create a database backup before applying a new system update.

See also [backupCommand](craft-config-generalconfig.md#backupcommand)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L96)



### `baseCpUrl`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The base URL that Craft should use when generating control panel URLs.

It will be determined automatically if left blank.

::: tip
The base control panel URL should **not** include the [control panel trigger word](config:cpTrigger) (e.g. `/admin`).
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L124)



### `blowfishHashCost`



Type

:   [integer](http://php.net/language.types.integer)



The higher the cost value, the longer it takes to generate a password hash and to verify against it. Therefore,
higher cost slows down a brute-force attack.

For best protection against brute force attacks, set it to the highest value that is tolerable on production
servers.

The time taken to compute the hash doubles for every increment by one for this value.
For example, if the hash takes 1 second to compute when the value is 14 then the compute time varies as
2^(value - 14) seconds.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L136)



### `cacheDuration`



Type

:   `mixed`



The default length of time Craft will store data, RSS feed, and template caches.

If set to `0`, data and RSS feed caches will be stored indefinitely; template caches will be stored for one year.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L148)



### `cacheElementQueries`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should cache element queries that fall inside `{% cache %}` tags.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L140)



### `convertFilenamesToAscii`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether uploaded filenames with non-ASCII characters should be converted to ASCII (i.e. `ñ` → `n`).

::: tip
You can run `./craft utils/ascii-filenames` in your terminal to apply ASCII filenames to all existing assets.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L156)



### `cooldownDuration`



Type

:   `mixed`



The amount of time a user must wait before re-attempting to log in after their account is locked due to too many
failed login attempts.

Set to `0` to keep the account locked indefinitely, requiring an admin to manually unlock the account.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L165)



### `cpTrigger`



Type

:   [string](http://php.net/language.types.string)



The URI segment Craft should look for when determining if the current request should route to the control panel rather than
the front-end website.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L170)



### `csrfTokenName`



Type

:   [string](http://php.net/language.types.string)



The name of CSRF token used for CSRF validation if <config:enableCsrfProtection> is set to `true`.

See also [enableCsrfProtection](craft-config-generalconfig.md#enablecsrfprotection)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L175)



### `customAsciiCharMappings`

::: danger DEPRECATED
Deprecated in 3.0.10. Any corrections to ASCII char mappings should be submitted to [Stringy](https://github.com/voku/Stringy).
:::


Type

:   [array](http://php.net/language.types.array)



Any custom ASCII character mappings.

This array is merged into the default one in StringHelper::asciiCharMap(). The key is the ASCII character to
be used for the replacement and the value is an array of non-ASCII characters that the key maps to.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L190)


---

#### Example

::: code
```php
'customAsciiCharMappings' => [
    'c' => ['ç', 'ć', 'č', 'ĉ', 'ċ'],
],
```
:::


### `defaultCookieDomain`



Type

:   [string](http://php.net/language.types.string)



The domain that cookies generated by Craft should be created for. If blank, it will be left
up to the browser to determine which domain to use (almost always the current). If you want the cookies to work
for all subdomains, for example, you could set this to `'.domain.com'`.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L196)



### `defaultCpLanguage`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The default language the control panel should use for users who haven’t set a preferred language yet.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L200)



### `defaultDirMode`



Type

:   `mixed`



The default permission to be set for newly generated directories.

If set to `null`, the permission will be determined by the current environment.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L206)



### `defaultFileMode`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)



The default permission to be set for newly generated files.

If set to `null`, the permission will be determined by the current environment.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L212)



### `defaultImageQuality`



Type

:   [integer](http://php.net/language.types.integer)



The quality level Craft will use when saving JPG and PNG files. Ranges from 0 (worst quality, smallest file) to
100 (best quality, biggest file).



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L217)



### `defaultSearchTermOptions`



Type

:   [array](http://php.net/language.types.array)



The default options that should be applied to each search term.

Options include:

- `attribute` – The attribute that the term should apply to (e.g. 'title'), if any. (`null` by default)
- `exact` – Whether the term must be an exact match (only applies if `attribute` is set). (`false` by default)
- `exclude` – Whether search results should *exclude* records with this term. (`false` by default)
- `subLeft` – Whether to include keywords that contain the term, with additional characters before it. (`false` by default)
- `subRight` – Whether to include keywords that contain the term, with additional characters after it. (`true` by default)



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L229)



### `defaultTemplateExtensions`



Type

:   [string](http://php.net/language.types.string)[]



The template file extensions Craft will look for when matching a template path to a file on the front end.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L233)



### `defaultTokenDuration`



Type

:   `mixed`



The default amount of time tokens can be used before expiring.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L239)



### `defaultWeekStartDay`



Type

:   [integer](http://php.net/language.types.integer)



The default day that new users should have set as their Week Start Day.

This should be set to one of the following integers:

- `0` – Sunday
- `1` – Monday
- `2` – Tuesday
- `3` – Wednesday
- `4` – Thursday
- `5` – Friday
- `6` – Saturday



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L253)



### `deferPublicRegistrationPassword`



Type

:   [boolean](http://php.net/language.types.boolean)



By default, Craft will require a 'password' field to be submitted on front-end, public
user registrations. Setting this to `true` will no longer require it on the initial registration form.

If you have email verification enabled, new users will set their password once they've clicked on the
verification link in the email. If you don't, the only way they can set their password is to go
through your "forgot password" workflow.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L262)



### `devMode`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the system should run in [Dev Mode](https://craftcms.com/support/dev-mode).



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L266)



### `disabledPlugins`



Type

:   [string](http://php.net/language.types.string)[]

Since

:   3.1.9



Array of plugin handles that should be disabled, regardless of what the project config says.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L277)


---

#### Example

::: code
```php
'dev' => [
    'disabledPlugins' => ['webhooks'],
],
```
:::


### `elevatedSessionDuration`



Type

:   `mixed`



The amount of time a user’s elevated session will last, which is required for some sensitive actions (e.g. user group/permission assignment).

Set to `0` to disable elevated session support.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L301)



### `enableCsrfCookie`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to use a cookie to persist the CSRF token if <config:enableCsrfProtection> is enabled. If false, the CSRF token
will be stored in session under the `csrfTokenName` config setting name. Note that while storing CSRF tokens in
session increases security, it requires starting a session for every page that a CSRF token is needed, which may
degrade site performance.

See also [enableCsrfProtection](craft-config-generalconfig.md#enablecsrfprotection)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L285)



### `enableCsrfProtection`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to enable CSRF protection via hidden form inputs for all forms submitted via Craft.

See also:

- [csrfTokenName](craft-config-generalconfig.md#csrftokenname)
- [enableCsrfCookie](craft-config-generalconfig.md#enablecsrfcookie)


[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L307)



### `enableGql`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.3.1



Whether the GraphQL API should be enabled.

Note that the GraphQL API is only available for Craft Pro.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L293)



### `enableGraphQlCaching`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.3.12



Whether Craft should cache GraphQL queries.

If set to `true`, Craft will cache the results for unique GraphQL queries per access token. The cache is
automatically invalidated any time an element is saved, the site structure is updated, or a GraphQL schema is saved.

This setting will have no effect if a plugin is using the [craft\services\Gql::EVENT_BEFORE_EXECUTE_GQL_QUERY](craft-services-gql.md#event-before-execute-gql-query) event to provide
its own caching logic and setting the `result` property.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L319)



### `enableTemplateCaching`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether to enable Craft's template `{% cache %}` tag on a global basis.

See also http://craftcms.com/docs/templating/cache

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L324)



### `errorTemplatePrefix`



Type

:   [string](http://php.net/language.types.string)



The prefix that should be prepended to HTTP error status codes when determining the path to look for an error’s
template.

If set to `'_'`, then your site’s 404 template would live at `templates/_404.html`, for example.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L331)



### `extraAllowedFileExtensions`



Type

:   [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



List of file extensions that will be merged into the <config:allowedFileExtensions> config setting.

See also [allowedFileExtensions](craft-config-generalconfig.md#allowedfileextensions)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L336)



### `extraAppLocales`



Type

:   [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)

Since

:   3.0.24



List of extra locale IDs that the application should support, and users should be able to select as their Preferred Language.

Only use this setting if your server has the Intl PHP extension, or if you’ve saved the corresponding
[locale data](https://github.com/craftcms/locales) into your `config/locales/` folder.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L345)



### `extraFileKinds`



Type

:   [array](http://php.net/language.types.array)

Since

:   3.0.37



List of additional file kinds Craft should support. This array
will get merged with the one defined in `\craft\helpers\Assets::_buildFileKinds()`.

```php
'extraFileKinds' => [
    // merge .psb into list of Photoshop file kinds
    'photoshop' => [
        'extensions' => ['psb'],
    ],
    // register new "Stylesheet" file kind
    'stylesheet' => [
        'label' => 'Stylesheet',
        'extensions' => ['css', 'less', 'pcss', 'sass', 'scss', 'styl'],
    ],
],
```

::: tip
File extensions listed here won’t immediately be allowed to be uploaded. You will also need to list them with
the <config:extraAllowedFileExtensions> config setting.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L371)



### `filenameWordSeparator`



Type

:   [string](http://php.net/language.types.string), [boolean](http://php.net/language.types.boolean)



The string to use to separate words when uploading Assets. If set to `false`, spaces will be left alone.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L375)



### `generateTransformsBeforePageLoad`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether images transforms should be generated before page load.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L379)



### `headlessMode`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.3.0



Bool Whether the system should run in Headless Mode, which
optimizes the system and control panel for headless CMS implementations.

When this is enabled, the following changes will take place:

- Template settings for sections and category groups will be hidden.
- Template route management will be hidden.
- Front-end routing will skip checks for element and template requests.
- Front-end responses will be JSON-formatted rather than HTML by default.
- Twig will be configured to escape unsafe strings for JavaScript/JSON
  rather than HTML by default for front-end requests.
- The <config:loginPath>, <config:logoutPath>, <config:setPasswordPath>, and
  <config:verifyEmailPath> settings will be ignored.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L397)



### `imageDriver`



Type

:   `mixed`



The image driver Craft should use to cleanse and transform images. By default Craft will auto-detect if ImageMagick is installed and fallback to GD if not. You can explicitly set
either `'imagick'` or `'gd'` here to override that behavior.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L402)



### `indexTemplateFilenames`



Type

:   [string](http://php.net/language.types.string)[]



The template filenames Craft will look for within a directory to represent the directory’s “index” template when
matching a template path to a file on the front end.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L407)



### `invalidLoginWindowDuration`



Type

:   `mixed`



The amount of time to track invalid login attempts for a user, for determining if Craft should lock an account.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L413)



### `invalidUserTokenPath`



Type

:   `mixed`



The URI Craft should redirect to when user token validation fails. A token is used on things like setting and
resetting user account passwords. Note that this only affects front-end site requests.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getInvalidUserTokenPath()](craft-config-generalconfig.md#method-getinvalidusertokenpath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L421)



### `ipHeaders`



Type

:   [string](http://php.net/language.types.string)[], [null](http://php.net/language.types.null)



List of headers where proxies store the real client IP.

See [yii\web\Request::$ipHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$ipHeaders-detail) for more details.

If not set, the default [craft\web\Request::$ipHeaders](craft-web-request.md#ipheaders) value will be used.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L429)



### `isSystemLive`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether the site is currently live. If set to `true` or `false`, it will take precedence over the
System Status setting in Settings → General.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L434)



### `limitAutoSlugsToAscii`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether non-ASCII characters in auto-generated slugs should be converted to ASCII (i.e. ñ → n).

::: tip
This only affects the JavaScript auto-generated slugs. Non-ASCII characters can still be used in slugs if entered manually.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L442)



### `loginPath`



Type

:   `mixed`



The URI Craft should use for user login on the front-end.

This can be set to `false` to disable front-end login.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getLoginPath()](craft-config-generalconfig.md#method-getloginpath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L451)



### `logoutPath`



Type

:   `mixed`



The URI Craft should use for user logout on the front-end.

This can be set to `false` to disable front-end logout.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getLogoutPath()](craft-config-generalconfig.md#method-getlogoutpath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L460)



### `maxBackups`



Type

:   [integer](http://php.net/language.types.integer), [false](http://php.net/language.types.boolean)



The number of backups that Craft should make before it starts deleting the oldest backups.
If it is set to `false`, then Craft will not delete any backups.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L475)



### `maxCachedCloudImageSize`



Type

:   [integer](http://php.net/language.types.integer)



The maximum dimension size to use when caching images from external sources to use in transforms. Set to `0` to
never cache them.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L465)



### `maxInvalidLogins`



Type

:   [integer](http://php.net/language.types.integer)



The number of invalid login attempts Craft will allow within the specified duration before the account gets
locked.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L470)



### `maxRevisions`



Type

:   [integer](http://php.net/language.types.integer), [null](http://php.net/language.types.null)

Since

:   3.2.0



The maximum number of revisions that should be stored for each element.

Set to `0` if you want to store an unlimited number of revisions.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L483)



### `maxSlugIncrement`



Type

:   [integer](http://php.net/language.types.integer)



The highest number Craft will tack onto a slug in order to make it unique before giving up and throwing an error.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L487)



### `maxUploadFileSize`



Type

:   [integer](http://php.net/language.types.integer), [string](http://php.net/language.types.string)



The maximum upload file size allowed.

See [craft\helpers\ConfigHelper::sizeInBytes()](craft-helpers-confighelper.md#method-sizeinbytes) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L493)



### `omitScriptNameInUrls`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether generated URLs should omit `index.php` (e.g. `http://domain.com/path` instead of `http://domain.com/index.php/path`)

This can only be possible if your server is configured to redirect would-be 404's to `index.php`, for example, with
the redirect found in the `.htaccess` file that came with Craft:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule (.+) /index.php?p=$1 [QSA,L]
```



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L507)



### `optimizeImageFilesize`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should optimize images for reduced file sizes without noticeably reducing image quality.
(Only supported when ImageMagick is used.)

See also [imageDriver](craft-config-generalconfig.md#imagedriver)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L513)



### `pageTrigger`



Type

:   [string](http://php.net/language.types.string)



The string preceding a number which Craft will look for when determining if the current request is for a
particular page in a paginated list of pages.

Example Value | Example URI
------------- | -----------
`p` | `/news/p5`
`page` | `/news/page5`
`page/` | `/news/page/5`
`?page` | `/news?page=5`

::: tip
If you want to set this to `?p` (e.g. `/news?p=5`), you will need to change your <config:pathParam> setting as well,
which is set to `p` by default, and if your server is running Apache, you will need to update the redirect code
in your `.htaccess` file to match your new `pathParam` value.
:::

See also [getPageTrigger()](craft-config-generalconfig.md#method-getpagetrigger)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L533)



### `pathParam`



Type

:   [string](http://php.net/language.types.string)



The query string param that Craft will check when determining the request's path.

::: tip
If you change this and your server is running Apache, don’t forget to update the redirect code in your
`.htaccess` file to match the new value.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L542)



### `phpMaxMemoryLimit`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The maximum amount of memory Craft will try to reserve during memory intensive operations such as zipping,
unzipping and updating. Defaults to an empty string, which means it will use as much memory as it possibly can.

See <http://php.net/manual/en/faq.using.php#faq.using.shorthandbytes> for a list of acceptable values.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L549)



### `phpSessionName`



Type

:   [string](http://php.net/language.types.string)



The name of the PHP session cookie.

See also https://php.net/manual/en/function.session-name.php

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L554)



### `postCpLoginRedirect`



Type

:   `mixed`



The path that users should be redirected to after logging in from the control panel.

This setting will also come into effect if a user visits the control panel’s Login page (`/admin/login`)
or the control panel’s root URL (/admin) when they are already logged in.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getPostCpLoginRedirect()](craft-config-generalconfig.md#method-getpostcploginredirect)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L565)



### `postLoginRedirect`



Type

:   `mixed`



The path that users should be redirected to after logging in from the front-end site.

This setting will also come into effect if the user visits the Login page (as specified by the loginPath config
setting) when they are already logged in.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getPostLoginRedirect()](craft-config-generalconfig.md#method-getpostloginredirect)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L575)



### `postLogoutRedirect`



Type

:   `mixed`



The path that users should be redirected to after logging out from the front-end site.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getPostLogoutRedirect()](craft-config-generalconfig.md#method-getpostlogoutredirect)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L582)



### `preserveCmykColorspace`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.0.8



Whether CMYK should be preserved as the colorspace when manipulating images.

Setting this to `true` will prevent Craft from transforming CMYK images to sRGB, but on some ImageMagick versions
it can cause color distortion in the image. This will only have effect if ImageMagick is in use.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L591)



### `preserveExifData`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the EXIF data should be preserved when manipulating and uploading images.

Setting this to `true` will result in larger image file sizes.

This will only have effect if ImageMagick is in use.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L599)



### `preserveImageColorProfiles`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether the embedded Image Color Profile (ICC) should be preserved when manipulating images.

Setting this to `false` will reduce the image size a little bit, but on some ImageMagick versions can cause images to be saved with
an incorrect gamma value, which causes the images to become very dark. This will only have effect if ImageMagick is in use.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L606)



### `preventUserEnumeration`



Type

:   [boolean](http://php.net/language.types.boolean)



When set to `false` and you go through the "forgot password" workflow on the control panel login page, for example,
you get distinct messages saying if the username/email didn't exist or the email was successfully sent and to check
your email for further instructions. This can allow for username/email enumeration based on the response. If set
`true`, you will always get a successful response even if there was an error making it difficult to enumerate users.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L620)



### `privateTemplateTrigger`



Type

:   [string](http://php.net/language.types.string)



The template path segment prefix that should be used to identify "private" templates (templates that aren't
directly accessible via a matching URL).

Set to an empty value to disable public template routing.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L613)



### `purgePendingUsersDuration`



Type

:   `mixed`



The amount of time to wait before Craft purges pending users from the system that have not activated.

Note that any content assigned to a pending user will be deleted as well when the given time interval passes.

Set to `0` to disable this feature.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L630)



### `purgeStaleUserSessionDuration`



Type

:   `mixed`

Since

:   3.3.0



The amount of time to wait before Craft purges stale user sessions from the sessions table in the database.

Set to `0` to disable this feature.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L640)



### `purgeUnsavedDraftsDuration`



Type

:   `mixed`

Since

:   3.2.0



The amount of time to wait before Craft purges drafts of new elements that were never formally saved.

Set to `0` to disable this feature.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L650)



### `rememberUsernameDuration`



Type

:   `mixed`



The amount of time Craft will remember a username and pre-populate it on the control panel’s Login page.

Set to `0` to disable this feature altogether.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L658)



### `rememberedUserSessionDuration`



Type

:   `mixed`



The amount of time a user stays logged if “Remember Me” is checked on the login page.

Set to `0` to disable the “Remember Me” feature altogether.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L666)



### `requireMatchingUserAgentForSession`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should require a matching user agent string when restoring a user session from a cookie.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L670)



### `requireUserAgentAndIpForSession`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should require the existence of a user agent string and IP address when creating a new user
session.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L675)



### `resourceBasePath`



Type

:   [string](http://php.net/language.types.string)



The path to the root directory that should store published control panel resources.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L679)



### `resourceBaseUrl`



Type

:   [string](http://php.net/language.types.string)



The URL to the root directory that should store published control panel resources.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L683)



### `restoreCommand`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The shell command that Craft should execute to restore a database backup.

By default Craft will run `mysql` or `psql`, provided that those libraries are in the `$PATH`
variable for the user the web server  is running as.

There are several tokens you can use that Craft will swap out at runtime:

- `{path}` - the backup file path
- `{port}` - the current database port
- `{server}` - the current database host name
- `{user}` - the user to connect to the database
- `{database}` - the current database name
- `{schema}` - the current database schema (if any)

This can also be set to `false` to disable database restores completely.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L701)



### `rotateImagesOnUploadByExifData`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should rotate images according to their EXIF data on upload.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L705)



### `runQueueAutomatically`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should run pending queue jobs automatically when someone visits the control panel.

If disabled, an alternate queue worker *must* be set up separately, either as an
[always-running daemon](https://github.com/yiisoft/yii2-queue/blob/master/docs/guide/worker.md), or a
cron job that runs the `queue/run` command every minute:

```cron
* * * * * /path/to/project/craft queue/run
```

::: tip
This setting should be disabled for servers running Win32, or with Apache’s mod_deflate/mod_gzip installed,
where PHP’s [flush()](http://php.net/manual/en/function.flush.php) method won’t work.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L722)



### `sameSiteCookieValue`



Type

:   [string](http://php.net/language.types.string)

Since

:   3.1.33



The [SameSite](https://www.owasp.org/index.php/SameSite) value that should be set on Craft cookies, if any.

This can be set to `'Lax'`, `'Strict'`, or `null`.

::: tip
This setting requires PHP 7.3 or later.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L734)



### `sanitizeSvgUploads`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should sanitize uploaded SVG files and strip out potential malicious looking content.

This should definitely be enabled if you are accepting SVG uploads from untrusted sources.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L740)



### `secureHeaders`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



Lists of headers that are, by default, subject to the trusted host configuration.

See [yii\web\Request::$secureHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureHeaders-detail) for more details.

If not set, the default [yii\web\Request::$secureHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureHeaders-detail) value will be used.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L804)



### `secureProtocolHeaders`



Type

:   [array](http://php.net/language.types.array), [null](http://php.net/language.types.null)



List of headers to check for determining whether the connection is made via HTTPS.

See [yii\web\Request::$secureProtocolHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureProtocolHeaders-detail) for more details.

If not set, the default [yii\web\Request::$secureProtocolHeaders](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$secureProtocolHeaders-detail) value will be used.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L812)



### `securityKey`



Type

:   [string](http://php.net/language.types.string)



A private, random, cryptographically-secure key that is used for hashing and encrypting
data in [craft\services\Security](craft-services-security.md).

This value should be the same across all environments. Note that if this key ever changes, any data that
was encrypted with it will be inaccessible.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L748)



### `sendPoweredByHeader`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether an `X-Powered-By: Craft CMS` header should be sent, helping services like [BuiltWith](https://builtwith.com/) and [Wappalyzer](https://www.wappalyzer.com/) identify that the site is running on Craft.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L752)



### `setPasswordPath`



Type

:   `mixed`



The URI Craft should use for Set Password forms on the front-end.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

::: tip
You might also want to set <config:invalidUserTokenPath> in case a user clicks on an expired password reset link.
:::

See also [getSetPasswordPath()](craft-config-generalconfig.md#method-getsetpasswordpath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L764)



### `setPasswordSuccessPath`



Type

:   `mixed`



The URI Craft should redirect users to after setting their password from the front-end.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getSetPasswordSuccessPath()](craft-config-generalconfig.md#method-getsetpasswordsuccesspath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L771)



### `siteName`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[]



The site name(s). If set, it will take precedence over the Name settings in Settings → Sites → [Site Name].

This can be set to a string, which will override the primary site’s name only, or an array with site handles used as the keys.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L777)



### `siteUrl`



Type

:   [string](http://php.net/language.types.string), [string](http://php.net/language.types.string)[]



The base URL to the site(s). If set, it will take precedence over the Base URL settings in Settings → Sites → [Site Name].

This can be set to a string, which will override the primary site’s base URL only, or an array with site handles used as the keys.

The URL(s) must begin with either `http://`, `https://`, `//` (protocol-relative), or an [alias](config:aliases).

```php
'siteUrl' => [
    'siteA' => 'https://site-a.com/',
    'siteB' => 'https://site-b.com/',
],
```



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L792)



### `slugWordSeparator`



Type

:   [string](http://php.net/language.types.string)



The character(s) that should be used to separate words in slugs.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L796)



### `softDeleteDuration`



Type

:   `mixed`

Since

:   3.1.0



The amount of time before a soft-deleted item will be up for hard-deletion by garbage collection.

Set to `0` if you don’t ever want to delete soft-deleted items.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L822)



### `storeUserIps`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.0



Whether user IP addresses should be stored/logged by the system.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L827)



### `suppressTemplateErrors`

::: danger DEPRECATED
Deprecated in 3.3.0
:::


Type

:   [boolean](http://php.net/language.types.boolean)



Whether Twig runtime errors should be suppressed.

If it is set to `true`, the errors will still be logged to Craft’s log files.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L835)



### `testToEmailAddress`



Type

:   [string](http://php.net/language.types.string), [array](http://php.net/language.types.array), [false](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Configures Craft to send all system emails to a single email address, or an array of email addresses for testing
purposes.

By default the recipient name(s) will be “Test Recipient”, but you can customize that by setting the value with the format `['email@address.com' => 'Name']`.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L842)



### `timezone`



Type

:   [string](http://php.net/language.types.string), [null](http://php.net/language.types.null)



The timezone of the site. If set, it will take precedence over the Timezone setting in Settings → General.

This can be set to one of PHP’s [supported timezones](http://php.net/manual/en/timezones.php).



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L848)



### `tokenParam`



Type

:   [string](http://php.net/language.types.string)



The query string parameter name that Craft tokens should be set to.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L862)



### `transformGifs`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.0.7



Whether GIF files should be cleansed/transformed.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L853)



### `translationDebugOutput`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether translated messages should be wrapped in special characters, to help find any strings that are not
being run through `Craft::t()` or the `|translate` filter.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L858)



### `trustedHosts`



Type

:   [array](http://php.net/language.types.array)



The configuration for trusted security-related headers.

See [yii\web\Request::$trustedHosts](https://www.yiiframework.com/doc/api/2.0/yii-web-request#$trustedHosts-detail) for more details.

By default, all hosts are trusted.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L870)



### `upscaleImages`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.4.0



Whether images should be upscaled if the provided transform size is larger than the image.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L875)



### `useCompressedJs`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should include minified JavaScript files whenever possible, and minify JavaScript code
passed to `\craft\web\View::includeJs()` or `{% js %}` Twig tags.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L880)



### `useEmailAsUsername`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should set users’ usernames to their email addresses, rather than let them set their username separately.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L884)



### `useFileLocks`



Type

:   [boolean](http://php.net/language.types.boolean), [null](http://php.net/language.types.null)



Whether to grab an exclusive lock on a file when writing to it by using the `LOCK_EX` flag.

Some file systems, such as NFS, do not support exclusive file locking.

If not set to `true` or `false`, Craft will automatically try to detect if the underlying file system supports exclusive file
locking and cache the results.

See also http://php.net/manual/en/function.file-put-contents.php

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L925)



### `usePathInfo`



Type

:   [boolean](http://php.net/language.types.boolean)



Whether Craft should specify the path using `PATH_INFO` or as a query string parameter when generating URLs.

Note that this setting only takes effect if <config:omitScriptNameInUrls> is set to false.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L890)



### `useProjectConfigFile`



Type

:   [boolean](http://php.net/language.types.boolean)

Since

:   3.1.0



Whether the project config should be saved out to `config/project.yaml`.

If set to `true`, a hard copy of your system’s project config will be saved in `config/project.yaml`,
and any changes to `config/project.yaml` will be applied back to the system, making it possible for
multiple environments to share the same project config despite having separate databases.

::: warning
Make sure you’ve read the entire [Project Config](https://docs.craftcms.com/v3/project-config.html)
documentation, and carefully follow the “Enabling the Project Config File” steps when enabling this setting.
:::



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L940)



### `useSecureCookies`



Type

:   [boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string)



Whether Craft will set the "secure" flag when saving cookies when using `Craft::cookieConfig() to create a cookie`.

Valid values are `true`, `false`, and `'auto'`. Defaults to `'auto'`, which will set the secure flag if the page
you're currently accessing is over `https://`. `true` will always set the flag, regardless of protocol and `false`
will never automatically set the flag.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L898)



### `useSslOnTokenizedUrls`



Type

:   [boolean](http://php.net/language.types.boolean), [string](http://php.net/language.types.string)



Determines what protocol/schema Craft will use when generating tokenized URLs. If set to `'auto'`,
Craft will check the siteUrl and the protocol of the current request and if either of them are https
will use `https` in the tokenized URL. If not, will use `http`.

If set to `false`, the Craft will always use `http`. If set to `true`, then, Craft will always use `https`.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L906)



### `userSessionDuration`



Type

:   `mixed`



The amount of time before a user will get logged out due to inactivity.

Set to `0` if you want users to stay logged in as long as their browser is open rather than a predetermined
amount of time.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L915)



### `verificationCodeDuration`



Type

:   `mixed`



The amount of time a user verification code can be used before expiring.

See [craft\helpers\ConfigHelper::durationInSeconds()](craft-helpers-confighelper.md#method-durationinseconds) for a list of supported value types.



[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L946)



### `verifyEmailPath`



Type

:   `mixed`

Since

:   3.4.0



The URI Craft should use for email verification links on the front-end.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getVerifyEmailPath()](craft-config-generalconfig.md#method-getverifyemailpath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L954)



### `verifyEmailSuccessPath`



Type

:   `mixed`

Since

:   3.1.20



The URI that users without access to the control panel should be redirected to after verifying a new email address.

See [craft\helpers\ConfigHelper::localizedValue()](craft-helpers-confighelper.md#method-localizedvalue) for a list of supported value types.

See also [getVerifyEmailSuccessPath()](craft-config-generalconfig.md#method-getverifyemailsuccesspath)

[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L962)







## Public Methods

| Method                                                                                                                                    | Description
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------
| [__call()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__call()-detail "Defined by yii\base\BaseObject")                 | Calls the named method which is not a class method.
| [__construct()](craft-config-generalconfig.md#method-construct)                                                                           | Constructor.
| [__get()](craft-config-generalconfig.md#method-get)                                                                                       | Returns the value of an object property.
| [__isset()](craft-config-generalconfig.md#method-isset)                                                                                   | Checks if a property is set, i.e. defined and not null.
| [__set()](craft-config-generalconfig.md#method-set)                                                                                       | Sets value of an object property.
| [__unset()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#__unset()-detail "Defined by yii\base\BaseObject")               | Sets an object property to null.
| [canGetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canGetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be read.
| [canSetProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#canSetProperty()-detail "Defined by yii\base\BaseObject") | Returns a value indicating whether a property can be set.
| [className()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#className()-detail "Defined by yii\base\BaseObject")           | Returns the fully qualified name of this class.
| [getActivateAccountSuccessPath()](craft-config-generalconfig.md#method-getactivateaccountsuccesspath)                                     | Returns the localized Activate Account Success Path value.
| [getBackupOnUpdate()](craft-config-generalconfig.md#method-getbackuponupdate)                                                             | Returns whether the DB should be backed up before running new migrations.
| [getInvalidUserTokenPath()](craft-config-generalconfig.md#method-getinvalidusertokenpath)                                                 | Returns the localized Invalid User Token Path value.
| [getLoginPath()](craft-config-generalconfig.md#method-getloginpath)                                                                       | Returns the localized Login Path value.
| [getLogoutPath()](craft-config-generalconfig.md#method-getlogoutpath)                                                                     | Returns the localized Logout Path value.
| [getPageTrigger()](craft-config-generalconfig.md#method-getpagetrigger)                                                                   | Returns the normalized page trigger.
| [getPostCpLoginRedirect()](craft-config-generalconfig.md#method-getpostcploginredirect)                                                   | Returns the localized Post-Login Redirect path for the control panel.
| [getPostLoginRedirect()](craft-config-generalconfig.md#method-getpostloginredirect)                                                       | Returns the localized Post-Login Redirect path.
| [getPostLogoutRedirect()](craft-config-generalconfig.md#method-getpostlogoutredirect)                                                     | Returns the localized Post-Logout Redirect path.
| [getSetPasswordPath()](craft-config-generalconfig.md#method-getsetpasswordpath)                                                           | Returns the localized Set Password Path value.
| [getSetPasswordSuccessPath()](craft-config-generalconfig.md#method-getsetpasswordsuccesspath)                                             | Returns the localized Set Password Success Path value.
| [getVerifyEmailPath()](craft-config-generalconfig.md#method-getverifyemailpath)                                                           | Returns the localized Verify Email Path value.
| [getVerifyEmailSuccessPath()](craft-config-generalconfig.md#method-getverifyemailsuccesspath)                                             | Returns the localized Verify Email Success Path value.
| [hasMethod()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasMethod()-detail "Defined by yii\base\BaseObject")           | Returns a value indicating whether a method is defined.
| [hasProperty()](https://www.yiiframework.com/doc/api/2.0/yii-base-baseobject#hasProperty()-detail "Defined by yii\base\BaseObject")       | Returns a value indicating whether a property is defined.
| [init()](craft-config-generalconfig.md#method-init)                                                                                       | Initializes the object.

### `__construct()`





Constructor.



The default implementation does two things:

- Initializes the object with the given configuration `$config`.
- Call [init()](craft-config-generalconfig.md#method-init).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like `$config` here.
- call the parent implementation at the end of the constructor.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L972-L1003)


#### Arguments

- `$config` ([array](http://php.net/language.types.array)) – Name-value pairs that will be used to initialize the object properties




### `__get()`





Returns the value of an object property.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$value = $object->property;`.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1008-L1015)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name

#### Returns

`mixed` – The property value

#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is write-only


### `__isset()`





Checks if a property is set, i.e. defined and not null.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `isset($object->property)`.

Note that if the property is not defined, false will be returned.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1032-L1039)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the named property is set (not null).



### `__set()`





Sets value of an object property.



Do not call this method directly as it is a PHP magic method that
will be implicitly called when executing `$object->property = $value;`.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1020-L1027)


#### Arguments

- `$name` ([string](http://php.net/language.types.string)) – The property name or the event name
- `$value` (`mixed`) – The property value


#### Throws

- [yii\base\UnknownPropertyException](https://www.yiiframework.com/doc/api/2.0/yii-base-unknownpropertyexception)\
  if the property is not defined
- [yii\base\InvalidCallException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidcallexception)\
  if the property is read-only


### `getActivateAccountSuccessPath()`





Returns the localized Activate Account Success Path value.



See also [activateAccountSuccessPath](craft-config-generalconfig.md#activateaccountsuccesspath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1107-L1110)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getBackupOnUpdate()`





Returns whether the DB should be backed up before running new migrations.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1238-L1241)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `getInvalidUserTokenPath()`





Returns the localized Invalid User Token Path value.



See also [invalidUserTokenPath](craft-config-generalconfig.md#invalidusertokenpath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1145-L1148)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getLoginPath()`





Returns the localized Login Path value.



See also [loginPath](craft-config-generalconfig.md#loginpath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1157-L1160)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

`mixed`



### `getLogoutPath()`





Returns the localized Logout Path value.



See also [logoutPath](craft-config-generalconfig.md#logoutpath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1169-L1172)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

`mixed`



### `getPageTrigger()`



Since

:   3.2.0



Returns the normalized page trigger.



See also [pageTrigger](craft-config-generalconfig.md#pagetrigger)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1250-L1271)



#### Returns

[string](http://php.net/language.types.string)



### `getPostCpLoginRedirect()`





Returns the localized Post-Login Redirect path for the control panel.



See also [postCpLoginRedirect](craft-config-generalconfig.md#postcploginredirect)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1180-L1183)



#### Returns

[string](http://php.net/language.types.string)



### `getPostLoginRedirect()`





Returns the localized Post-Login Redirect path.



See also [postLoginRedirect](craft-config-generalconfig.md#postloginredirect)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1192-L1195)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getPostLogoutRedirect()`





Returns the localized Post-Logout Redirect path.



See also [postLogoutRedirect](craft-config-generalconfig.md#postlogoutredirect)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1204-L1207)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getSetPasswordPath()`





Returns the localized Set Password Path value.



See also [setPasswordPath](craft-config-generalconfig.md#setpasswordpath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1216-L1219)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getSetPasswordSuccessPath()`





Returns the localized Set Password Success Path value.



See also [setPasswordSuccessPath](craft-config-generalconfig.md#setpasswordsuccesspath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1228-L1231)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getVerifyEmailPath()`



Since

:   3.4.0



Returns the localized Verify Email Path value.



See also [verifyEmailPath](craft-config-generalconfig.md#verifyemailpath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1120-L1123)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `getVerifyEmailSuccessPath()`



Since

:   3.1.20



Returns the localized Verify Email Success Path value.



See also [verifyEmailSuccessPath](craft-config-generalconfig.md#verifyemailsuccesspath)
[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1133-L1136)


#### Arguments

- `$siteHandle` ([string](http://php.net/language.types.string), [null](http://php.net/language.types.null)) – The site handle the value should be defined for. Defaults to the current site.

#### Returns

[string](http://php.net/language.types.string)



### `init()`





Initializes the object.



This method is invoked at the end of the constructor after the object is initialized with the
given configuration.




[View source](https://github.com/craftcms/cms/blob/master/src/config/GeneralConfig.php#L1044-L1098)










## Constants

| Constant               | Description
| ---------------------- | -----------
| `IMAGE_DRIVER_AUTO`    |
| `IMAGE_DRIVER_GD`      |
| `IMAGE_DRIVER_IMAGICK` |



