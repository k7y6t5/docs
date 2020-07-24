---
title: craft\helpers\FileHelper
code:
  - php
  - twig
---

# FileHelper

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\FileHelper](craft-helpers-filehelper.md) &raquo;
[yii\helpers\FileHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-filehelper) &raquo;
[yii\helpers\BaseFileHelper](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper)

Since

:   3.0.0



Class FileHelper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php)


## Public Properties

| Property                                                                                                                                               | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------
| [mimeAliasesFile](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#$mimeAliasesFile-detail "Defined by yii\helpers\BaseFileHelper") | [string](http://php.net/language.types.string) – The path (or alias) of a PHP file containing MIME aliases.
| [mimeMagicFile](craft-helpers-filehelper.md#mimemagicfile)                                                                                             | [string](http://php.net/language.types.string) – The path (or alias) of a PHP file containing MIME type information.

### `mimeMagicFile`



Type

:   [string](http://php.net/language.types.string)





The path (or alias) of a PHP file containing MIME type information.





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L31)







## Public Methods

| Method                                                                                                                                                                    | Description
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------
| [canTrustMimeType()](craft-helpers-filehelper.md#method-cantrustmimetype)                                                                                                 | Returns whether a MIME type can be trusted, or whether we should double-check based on the file extension.
| [clearDirectory()](craft-helpers-filehelper.md#method-cleardirectory)                                                                                                     | Removes all of a directory’s contents recursively.
| [copyDirectory()](craft-helpers-filehelper.md#method-copydirectory)                                                                                                       | Copies a whole directory as another one.
| [createDirectory()](craft-helpers-filehelper.md#method-createdirectory)                                                                                                   | Creates a new directory.
| [cycle()](craft-helpers-filehelper.md#method-cycle)                                                                                                                       | Moves existing files down to `*.1`, `*.2`, etc.
| [filterPath()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#filterPath()-detail "Defined by yii\helpers\BaseFileHelper")                           | Checks if the given file path satisfies the filtering options.
| [findDirectories()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#findDirectories()-detail "Defined by yii\helpers\BaseFileHelper")                 | Returns the directories found under the specified directory and subdirectories.
| [findFiles()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#findFiles()-detail "Defined by yii\helpers\BaseFileHelper")                             | Returns the files found under the specified directory and subdirectories.
| [getExtensionsByMimeType()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getExtensionsByMimeType()-detail "Defined by yii\helpers\BaseFileHelper") | Determines the extensions by given MIME type.
| [getMimeType()](craft-helpers-filehelper.md#method-getmimetype)                                                                                                           | Determines the MIME type of the specified file.
| [getMimeTypeByExtension()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getMimeTypeByExtension()-detail "Defined by yii\helpers\BaseFileHelper")   | Determines the MIME type based on the extension name of the specified file.
| [hasAnythingChanged()](craft-helpers-filehelper.md#method-hasanythingchanged)                                                                                             | Returns whether any files in a source directory have changed, compared to another directory.
| [invalidate()](craft-helpers-filehelper.md#method-invalidate)                                                                                                             | Invalidates a cached file with `clearstatcache()` and `opcache_invalidate()`.
| [isDirectoryEmpty()](craft-helpers-filehelper.md#method-isdirectoryempty)                                                                                                 | Returns whether a given directory is empty (has no files) recursively.
| [isGif()](craft-helpers-filehelper.md#method-isgif)                                                                                                                       | Returns whether the given file path is an GIF image.
| [isSvg()](craft-helpers-filehelper.md#method-issvg)                                                                                                                       | Returns whether the given file path is an SVG image.
| [isWritable()](craft-helpers-filehelper.md#method-iswritable)                                                                                                             | Tests whether a file/directory is writable.
| [lastModifiedTime()](craft-helpers-filehelper.md#method-lastmodifiedtime)                                                                                                 | Returns the last modification time for the given path.
| [localize()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#localize()-detail "Defined by yii\helpers\BaseFileHelper")                               | Returns the localized version of a specified file.
| [normalizePath()](craft-helpers-filehelper.md#method-normalizepath)                                                                                                       | Normalizes a file/directory path.
| [removeDirectory()](craft-helpers-filehelper.md#method-removedirectory)                                                                                                   | Removes a directory (and all its content) recursively.
| [removeFile()](craft-helpers-filehelper.md#method-removefile)                                                                                                             | Removes a file or symlink in a cross-platform way
| [sanitizeFilename()](craft-helpers-filehelper.md#method-sanitizefilename)                                                                                                 | Sanitizes a filename.
| [unlink()](craft-helpers-filehelper.md#method-unlink)                                                                                                                     | Removes a file or symlink in a cross-platform way
| [useFileLocks()](craft-helpers-filehelper.md#method-usefilelocks)                                                                                                         | Returns whether file locks can be used when writing to files.
| [writeGitignoreFile()](craft-helpers-filehelper.md#method-writegitignorefile)                                                                                             | Creates a `.gitignore` file in the given directory if one doesn’t exist yet.
| [writeToFile()](craft-helpers-filehelper.md#method-writetofile)                                                                                                           | Writes contents to a file.

### `canTrustMimeType()`



Since

:   3.1.7



Returns whether a MIME type can be trusted, or whether we should double-check based on the file extension.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L279-L288)


#### Arguments

- `$mimeType` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `clearDirectory()`





Removes all of a directory’s contents recursively.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L459-L489)


#### Arguments

- `$dir` ([string](http://php.net/language.types.string)) – The directory to be deleted recursively.
- `$options` ([array](http://php.net/language.types.array)) – Options for directory remove. Valid options are:
- `traverseSymlinks`: bool, whether symlinks to the directories should be traversed too.
  Defaults to `false`, meaning the content of the symlinked directory would not be deleted.
  Only symlink would be removed in that default case.
- `filter`: callback (see [findFiles()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#findFiles()-detail))
- `except`: array (see [findFiles()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#findFiles()-detail))
- `only`: array (see [findFiles()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#findFiles()-detail))


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the dir is invalid
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure


### `copyDirectory()`





Copies a whole directory as another one.



The files and sub-directories will also be copied over.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L61-L72)


#### Arguments

- `$src` ([string](http://php.net/language.types.string)) – The source directory
- `$dst` ([string](http://php.net/language.types.string)) – The destination directory
- `$options` ([array](http://php.net/language.types.array)) – Options for directory copy. Valid options are:

- dirMode: integer, the permission to be set for newly copied directories. Defaults to 0775.
- fileMode:  integer, the permission to be set for newly copied files. Defaults to the current environment setting.
- filter: callback, a PHP callback that is called for each directory or file.
  The signature of the callback should be: `function ($path)`, where `$path` refers the full path to be filtered.
  The callback can return one of the following values:

  * true: the directory or file will be copied (the "only" and "except" options will be ignored)
  * false: the directory or file will NOT be copied (the "only" and "except" options will be ignored)
  * null: the "only" and "except" options will determine whether the directory or file should be copied

- only: array, list of patterns that the file paths should match if they want to be copied.
  A path matches a pattern if it contains the pattern string at its end.
  For example, '.php' matches all file paths ending with '.php'.
  Note, the '/' characters in a pattern matches both '/' and '\' in the paths.
  If a file path matches a pattern in both "only" and "except", it will NOT be copied.
- except: array, list of patterns that the files or directories should match if they want to be excluded from being copied.
  A path matches a pattern if it contains the pattern string at its end.
  Patterns ending with '/' apply to directory paths only, and patterns not ending with '/'
  apply to file paths only. For example, '/a/b' matches all file paths ending with '/a/b';
  and '.svn/' matches directory paths ending with '.svn'. Note, the '/' characters in a pattern matches
  both '/' and '\' in the paths.
- caseSensitive: boolean, whether patterns specified at "only" or "except" should be case sensitive. Defaults to true.
- recursive: boolean, whether the files under the subdirectories should also be copied. Defaults to true.
- beforeCopy: callback, a PHP callback that is called before copying each sub-directory or file.
  If the callback returns false, the copy operation for the sub-directory or file will be cancelled.
  The signature of the callback should be: `function ($from, $to)`, where `$from` is the sub-directory or
  file to be copied from, while `$to` is the copy target.
- afterCopy: callback, a PHP callback that is called after each sub-directory or file is successfully copied.
  The signature of the callback should be: `function ($from, $to)`, where `$from` is the sub-directory or
  file copied from, while `$to` is the copy target.
- copyEmptyDirectories: boolean, whether to copy empty directories. Set this to false to avoid creating directories
  that do not contain files. This affects directories that do not contain files initially as well as directories that
  do not contain files at the target destination because files have been filtered via `only` or `except`.
  Defaults to true. This option is available since version 2.0.12. Before 2.0.12 empty directories are always copied.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if unable to open directory


### `createDirectory()`





Creates a new directory.



This method is similar to the PHP `mkdir()` function except that
it uses `chmod()` to set the permission of the created directory
in order to avoid the impact of the `umask` setting.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L77-L84)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – Path of the directory to be created.
- `$mode` ([integer](http://php.net/language.types.integer)) – The permission to be set for the created directory.
- `$recursive` ([boolean](http://php.net/language.types.boolean)) – Whether to create parent directories if they do not exist.

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the directory is created successfully

#### Throws

- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the directory could not be created (i.e. php error due to parallel changes)


### `cycle()`



Since

:   3.0.38



Moves existing files down to `*.1`, `*.2`, etc.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L611-L624)


#### Arguments

- `$basePath` ([string](http://php.net/language.types.string)) – The base path to the first file (sans `.X`)
- `$max` ([integer](http://php.net/language.types.integer)) – The most files that can coexist before we should start deleting them




### `getMimeType()`





Determines the MIME type of the specified file.



This method will first try to determine the MIME type based on
[finfo_open](https://secure.php.net/manual/en/function.finfo-open.php). If the `fileinfo` extension is not installed,
it will fall back to [getMimeTypeByExtension()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getMimeTypeByExtension()-detail) when `$checkExtension` is true.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L255-L270)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file name.
- `$magicFile` ([string](http://php.net/language.types.string)) – Name of the optional magic database file (or alias), usually something like `/path/to/magic.mime`.
This will be passed as the second parameter to [finfo_open()](https://secure.php.net/manual/en/function.finfo-open.php)
when the `fileinfo` extension is installed. If the MIME type is being determined based via [getMimeTypeByExtension()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getMimeTypeByExtension()-detail)
and this is null, it will use the file specified by [mimeMagicFile](craft-helpers-filehelper.md#mimemagicfile).
- `$checkExtension` ([boolean](http://php.net/language.types.boolean)) – Whether to use the file extension to determine the MIME type in case
`finfo_open()` cannot determine it.

#### Returns

[string](http://php.net/language.types.string) – The MIME type (e.g. `text/plain`). Null is returned if the MIME type cannot be determined.

#### Throws

- [yii\base\InvalidConfigException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidconfigexception)\
  when the `fileinfo` PHP extension is not installed and `$checkExtension` is `false`.


### `hasAnythingChanged()`





Returns whether any files in a source directory have changed, compared to another directory.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L526-L556)


#### Arguments

- `$dir` ([string](http://php.net/language.types.string)) – The source directory to check for changes in
- `$ref` ([string](http://php.net/language.types.string)) – The reference directory

#### Returns

[boolean](http://php.net/language.types.boolean)

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if $dir or $ref isn't a directory
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  if we can't get a handle on $src


### `invalidate()`



Since

:   3.4.0



Invalidates a cached file with `clearstatcache()` and `opcache_invalidate()`.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L632-L638)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file path




### `isDirectoryEmpty()`





Returns whether a given directory is empty (has no files) recursively.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L192-L219)


#### Arguments

- `$dir` ([string](http://php.net/language.types.string)) – The directory to be checked

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the directory is empty

#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the dir is invalid
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure


### `isGif()`



Since

:   3.0.9



Returns whether the given file path is an GIF image.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L320-L324)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file name.
- `$magicFile` ([string](http://php.net/language.types.string)) – Name of the optional magic database file (or alias), usually something like `/path/to/magic.mime`.
This will be passed as the second parameter to [finfo_open()](http://php.net/manual/en/function.finfo-open.php)
when the `fileinfo` extension is installed. If the MIME type is being determined based via [getMimeTypeByExtension()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getMimeTypeByExtension()-detail)
and this is null, it will use the file specified by [mimeMagicFile](craft-helpers-filehelper.md#mimemagicfile).
- `$checkExtension` ([boolean](http://php.net/language.types.boolean)) – Whether to use the file extension to determine the MIME type in case
`finfo_open()` cannot determine it.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isSvg()`





Returns whether the given file path is an SVG image.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L302-L305)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file name.
- `$magicFile` ([string](http://php.net/language.types.string)) – Name of the optional magic database file (or alias), usually something like `/path/to/magic.mime`.
This will be passed as the second parameter to [finfo_open()](http://php.net/manual/en/function.finfo-open.php)
when the `fileinfo` extension is installed. If the MIME type is being determined based via [getMimeTypeByExtension()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#getMimeTypeByExtension()-detail)
and this is null, it will use the file specified by [mimeMagicFile](craft-helpers-filehelper.md#mimemagicfile).
- `$checkExtension` ([boolean](http://php.net/language.types.boolean)) – Whether to use the file extension to determine the MIME type in case
`finfo_open()` cannot determine it.

#### Returns

[boolean](http://php.net/language.types.boolean)



### `isWritable()`





Tests whether a file/directory is writable.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L228-L250)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The file/directory path to test

#### Returns

[boolean](http://php.net/language.types.boolean) – Whether the path is writable

#### Throws

- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure


### `lastModifiedTime()`





Returns the last modification time for the given path.

If the path is a directory, any nested files/directories will be checked as well.


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L499-L515)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The directory to be checked

#### Returns

[integer](http://php.net/language.types.integer) – Unix timestamp representing the last modification time



### `normalizePath()`





Normalizes a file/directory path.



The normalization does the following work:

- Convert all directory separators into `DIRECTORY_SEPARATOR` (e.g. "\a/b\c" becomes "/a/b/c")
- Remove trailing directory separators (e.g. "/a/b/c/" becomes "/a/b/c")
- Turn multiple consecutive slashes into a single one (e.g. "/a///b/c" becomes "/a/b/c")
- Remove ".." and "." based on their meanings (e.g. "/a/./b/../c" becomes "/a/c")

Note: For registered stream wrappers, the consecutive slashes rule
and ".."/"." translations are skipped.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L42-L56)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The file/directory path to be normalized
- `$ds` ([string](http://php.net/language.types.string)) – The directory separator to be used in the normalized result. Defaults to `DIRECTORY_SEPARATOR`.

#### Returns

[string](http://php.net/language.types.string) – The normalized file/directory path



### `removeDirectory()`





Removes a directory (and all its content) recursively.








[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L89-L104)


#### Arguments

- `$dir` ([string](http://php.net/language.types.string)) – The directory to be deleted recursively.
- `$options` ([array](http://php.net/language.types.array)) – Options for directory remove. Valid options are:

- traverseSymlinks: boolean, whether symlinks to the directories should be traversed too.
  Defaults to `false`, meaning the content of the symlinked directory would not be deleted.
  Only symlink would be removed in that default case.


#### Throws

- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure


### `removeFile()`

::: danger DEPRECATED
Deprecated in 3.0.0-RC11. Use [unlink()](craft-helpers-filehelper.md#method-unlink) instead.
:::




Removes a file or symlink in a cross-platform way




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L425-L429)


#### Arguments

- `$path` ([string](http://php.net/language.types.string)) – The file to be deleted

#### Returns

[boolean](http://php.net/language.types.boolean)



### `sanitizeFilename()`





Sanitizes a filename.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L115-L182)


#### Arguments

- `$filename` ([string](http://php.net/language.types.string)) – The filename to sanitize
- `$options` ([array](http://php.net/language.types.array)) – Options for sanitization. Valid options are:
- `asciiOnly`: bool, whether only ASCII characters should be allowed. Defaults to false.
- `separator`: string|null, the separator character to use in place of whitespace. defaults to '-'. If set to null, whitespace will be preserved.

#### Returns

[string](http://php.net/language.types.string) – The cleansed filename



### `unlink()`



Since

:   3.4.16



Removes a file or symlink in a cross-platform way








[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L435-L443)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))

#### Returns

[boolean](http://php.net/language.types.boolean)



### `useFileLocks()`





Returns whether file locks can be used when writing to files.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L563-L602)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `writeGitignoreFile()`



Since

:   3.4.0



Creates a `.gitignore` file in the given directory if one doesn’t exist yet.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L401-L416)


#### Arguments

- `$path` ([string](http://php.net/language.types.string))
- `$options` ([array](http://php.net/language.types.array)) – Options for file write. Valid options are:
- `createDirs`: bool, whether to create parent directories if they do
  not exist. Defaults to `true`.
- `lock`: bool, whether a file lock should be used. Defaults to `false`.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the parent directory doesn't exist and `options[createDirs]` is `false`
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the parent directory can't be created
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure


### `writeToFile()`





Writes contents to a file.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/FileHelper.php#L342-L386)


#### Arguments

- `$file` ([string](http://php.net/language.types.string)) – The file path
- `$contents` ([string](http://php.net/language.types.string)) – The new file contents
- `$options` ([array](http://php.net/language.types.array)) – Options for file write. Valid options are:
- `createDirs`: bool, whether to create parent directories if they do
  not exist. Defaults to `true`.
- `append`: bool, whether the contents should be appended to the
  existing contents. Defaults to false.
- `lock`: bool, whether a file lock should be used. Defaults to the
  `useWriteFileLock` config setting.


#### Throws

- [yii\base\InvalidArgumentException](https://www.yiiframework.com/doc/api/2.0/yii-base-invalidargumentexception)\
  if the parent directory doesn't exist and `options[createDirs]` is `false`
- [yii\base\Exception](https://www.yiiframework.com/doc/api/2.0/yii-base-exception)\
  if the parent directory can't be created
- [yii\base\ErrorException](https://www.yiiframework.com/doc/api/2.0/yii-base-errorexception)\
  in case of failure




## Protected Methods

| Method                                                                                                                                                      | Description
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------
| [loadMimeAliases()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#loadMimeAliases()-detail "Defined by yii\helpers\BaseFileHelper")   | Loads MIME aliases from the specified file.
| [loadMimeTypes()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#loadMimeTypes()-detail "Defined by yii\helpers\BaseFileHelper")       | Loads MIME types from the specified file.
| [normalizeOptions()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-basefilehelper#normalizeOptions()-detail "Defined by yii\helpers\BaseFileHelper") |



## Constants

| Constant                   | Description
| -------------------------- | -----------
| `PATTERN_CASE_INSENSITIVE` |
| `PATTERN_ENDSWITH`         |
| `PATTERN_MUSTBEDIR`        |
| `PATTERN_NEGATIVE`         |
| `PATTERN_NODIR`            |



