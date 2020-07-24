---
title: craft\console\ControllerTrait
code:
  - php
  - twig
---

# ControllerTrait

Type

:   Trait

Namespace

:   craft\console

Implemented by

:   [craft\console\Controller](craft-console-controller.md), [craft\console\controllers\BackupController](craft-console-controllers-backupcontroller.md), [craft\console\controllers\ClearCachesController](craft-console-controllers-clearcachescontroller.md), [craft\console\controllers\GcController](craft-console-controllers-gccontroller.md), [craft\console\controllers\GraphqlController](craft-console-controllers-graphqlcontroller.md), [craft\console\controllers\IndexAssetsController](craft-console-controllers-indexassetscontroller.md), [craft\console\controllers\InstallController](craft-console-controllers-installcontroller.md), [craft\console\controllers\MailerController](craft-console-controllers-mailercontroller.md), [craft\console\controllers\MigrateController](craft-console-controllers-migratecontroller.md), [craft\console\controllers\ProjectConfigController](craft-console-controllers-projectconfigcontroller.md), [craft\console\controllers\ResaveController](craft-console-controllers-resavecontroller.md), [craft\console\controllers\RestoreController](craft-console-controllers-restorecontroller.md), [craft\console\controllers\SetupController](craft-console-controllers-setupcontroller.md), [craft\console\controllers\TestsController](craft-console-controllers-testscontroller.md), [craft\console\controllers\UpdateController](craft-console-controllers-updatecontroller.md), [craft\console\controllers\utils\AsciiFilenamesController](craft-console-controllers-utils-asciifilenamescontroller.md), [craft\console\controllers\utils\FixElementUidsController](craft-console-controllers-utils-fixelementuidscontroller.md), [craft\console\controllers\utils\PruneRevisionsController](craft-console-controllers-utils-prunerevisionscontroller.md), [craft\console\controllers\utils\RepairController](craft-console-controllers-utils-repaircontroller.md)

Since

:   3.2.0



ConsoleControllerTrait implements the common methods and properties for console controllers.





[View source](https://github.com/craftcms/cms/blob/master/src/console/ControllerTrait.php)








## Protected Methods

| Method                                                                   | Description
| ------------------------------------------------------------------------ | -----------
| [outputCommand()](craft-console-controllertrait.md#method-outputcommand) |

### `outputCommand()`










[View source](https://github.com/craftcms/cms/blob/master/src/console/ControllerTrait.php#L26-L29)


#### Arguments

- `$command` ([string](http://php.net/language.types.string))
- `$withScriptName` ([boolean](http://php.net/language.types.boolean))

#### Returns

`mixed`







