---
title: craft\base\ElementExporterInterface
code:
  - php
  - twig
---

# ElementExporterInterface

Type

:   Interface

Namespace

:   craft\base

Extends

:   [craft\base\ComponentInterface](craft-base-componentinterface.md)

Implemented by

:   [craft\base\ElementExporter](craft-base-elementexporter.md), [craft\elements\exporters\Expanded](craft-elements-exporters-expanded.md), [craft\elements\exporters\Raw](craft-elements-exporters-raw.md)

Since

:   3.4.0



ElementExporterInterface defines the common interface to be implemented by element exporter classes.





[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementExporterInterface.php)






## Public Methods

| Method                                                                                                          | Description
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------
| [displayName()](craft-base-componentinterface.md#method-displayname "Defined by craft\base\ComponentInterface") | Returns the display name of this class.
| [export()](craft-base-elementexporterinterface.md#method-export)                                                | Creates the export data for elements fetched with the given element query.
| [getFilename()](craft-base-elementexporterinterface.md#method-getfilename)                                      | Returns the filename (sans extension) that the export file should have.
| [setElementType()](craft-base-elementexporterinterface.md#method-setelementtype)                                | Sets the element type on the exporter.

### `export()`





Creates the export data for elements fetched with the given element query.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementExporterInterface.php#L33)


#### Arguments

- `$query` ([craft\elements\db\ElementQueryInterface](craft-elements-db-elementqueryinterface.md)) – The element query

#### Returns

[array](http://php.net/language.types.array)



### `getFilename()`





Returns the filename (sans extension) that the export file should have.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementExporterInterface.php#L40)



#### Returns

[string](http://php.net/language.types.string)



### `setElementType()`





Sets the element type on the exporter.




[View source](https://github.com/craftcms/cms/blob/master/src/base/ElementExporterInterface.php#L25)


#### Arguments

- `$elementType` ([string](http://php.net/language.types.string))










