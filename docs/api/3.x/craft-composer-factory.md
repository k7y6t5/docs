---
title: craft\composer\Factory
code:
  - php
  - twig
---

# Factory

Type

:   Class

Namespace

:   craft\composer

Inherits

:   [craft\composer\Factory](craft-composer-factory.md) &raquo;
`Composer\Factory`

Since

:   3.0.0



Composer Factory





[View source](https://github.com/craftcms/cms/blob/master/src/composer/Factory.php)






## Public Methods

| Method                                                                          | Description
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------
| [createArchiveManager()](craft-composer-factory.md#method-createarchivemanager) | Copied from \Composer\Factory::createArchiveManager(), but without adding the zip/phar archivers to avoid unnecessary server requirements.

### `createArchiveManager()`





Copied from \Composer\Factory::createArchiveManager(), but without adding the zip/phar archivers
to avoid unnecessary server requirements.

Full class names used when the parent implementation referenced classes relative to its own namespace.


[View source](https://github.com/craftcms/cms/blob/master/src/composer/Factory.php#L30-L43)


#### Arguments

- `$config` (`\Composer\Config`)
- `$dm` (`\Composer\Downloader\DownloadManager`, [null](http://php.net/language.types.null))

#### Returns

`\Composer\Package\Archiver\ArchiveManager`










