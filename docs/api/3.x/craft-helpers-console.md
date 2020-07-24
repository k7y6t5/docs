---
title: craft\helpers\Console
code:
  - php
  - twig
---

# Console

Type

:   Class

Namespace

:   craft\helpers

Inherits

:   [craft\helpers\Console](craft-helpers-console.md) &raquo;
[yii\helpers\Console](https://www.yiiframework.com/doc/api/2.0/yii-helpers-console) &raquo;
[yii\helpers\BaseConsole](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole)

Since

:   3.0.0



Console helper





[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Console.php)






## Public Methods

| Method                                                                                                                                                                | Description
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| [ansiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#ansiFormat()-detail "Defined by yii\helpers\BaseConsole")                             | Will return a string formatted with the given ANSI style.
| [ansiFormatCode()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#ansiFormatCode()-detail "Defined by yii\helpers\BaseConsole")                     | Returns the ANSI format code.
| [ansiStrlen()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#ansiStrlen()-detail "Defined by yii\helpers\BaseConsole")                             | Returns the length of the string without ANSI color codes.
| [ansiToHtml()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#ansiToHtml()-detail "Defined by yii\helpers\BaseConsole")                             | Converts an ANSI formatted string to HTML.
| [beginAnsiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#beginAnsiFormat()-detail "Defined by yii\helpers\BaseConsole")                   | Echoes an ANSI format code that affects the formatting of any text that is printed afterwards.
| [clearLine()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearLine()-detail "Defined by yii\helpers\BaseConsole")                               | Clears the line, the cursor is currently on by sending ANSI control code EL with argument 2 to the terminal.
| [clearLineAfterCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearLineAfterCursor()-detail "Defined by yii\helpers\BaseConsole")         | Clears text from cursor position to the end of the line by sending ANSI control code EL with argument 0 to the terminal.
| [clearLineBeforeCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearLineBeforeCursor()-detail "Defined by yii\helpers\BaseConsole")       | Clears text from cursor position to the beginning of the line by sending ANSI control code EL with argument 1 to the terminal.
| [clearScreen()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearScreen()-detail "Defined by yii\helpers\BaseConsole")                           | Clears entire screen content by sending ANSI control code ED with argument 2 to the terminal.
| [clearScreenAfterCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearScreenAfterCursor()-detail "Defined by yii\helpers\BaseConsole")     | Clears text from cursor to the end of the screen by sending ANSI control code ED with argument 0 to the terminal.
| [clearScreenBeforeCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#clearScreenBeforeCursor()-detail "Defined by yii\helpers\BaseConsole")   | Clears text from cursor to the beginning of the screen by sending ANSI control code ED with argument 1 to the terminal.
| [confirm()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#confirm()-detail "Defined by yii\helpers\BaseConsole")                                   | Asks user to confirm by typing y or n.
| [endAnsiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#endAnsiFormat()-detail "Defined by yii\helpers\BaseConsole")                       | Resets any ANSI format set by previous method [beginAnsiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#beginAnsiFormat()-detail) Any output after this will have default text format.
| [endProgress()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#endProgress()-detail "Defined by yii\helpers\BaseConsole")                           | Ends a progress bar that has been started by [startProgress()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#startProgress()-detail).
| [error()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#error()-detail "Defined by yii\helpers\BaseConsole")                                       | Prints text to STDERR appended with a carriage return (PHP_EOL).
| [errorSummary()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#errorSummary()-detail "Defined by yii\helpers\BaseConsole")                         | Generates a summary of the validation errors.
| [escape()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#escape()-detail "Defined by yii\helpers\BaseConsole")                                     | Escapes % so they don't get interpreted as color codes when the string is parsed by [renderColoredString()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#renderColoredString()-detail).
| [getScreenSize()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#getScreenSize()-detail "Defined by yii\helpers\BaseConsole")                       | Returns terminal screen size.
| [hideCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#hideCursor()-detail "Defined by yii\helpers\BaseConsole")                             | Hides the cursor by sending ANSI DECTCEM code ?25l to the terminal.
| [input()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#input()-detail "Defined by yii\helpers\BaseConsole")                                       | Asks the user for input. Ends when the user types a carriage return (PHP_EOL). Optionally, It also provides a prompt.
| [isColorEnabled()](craft-helpers-console.md#method-iscolorenabled)                                                                                                    | Returns whether color is enabled.
| [isRunningOnWindows()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#isRunningOnWindows()-detail "Defined by yii\helpers\BaseConsole")             | Returns true if the console is running on windows.
| [markdownToAnsi()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#markdownToAnsi()-detail "Defined by yii\helpers\BaseConsole")                     | Converts Markdown to be better readable in console environments by applying some ANSI format.
| [moveCursorBackward()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorBackward()-detail "Defined by yii\helpers\BaseConsole")             | Moves the terminal cursor backward by sending ANSI control code CUB to the terminal.
| [moveCursorDown()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorDown()-detail "Defined by yii\helpers\BaseConsole")                     | Moves the terminal cursor down by sending ANSI control code CUD to the terminal.
| [moveCursorForward()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorForward()-detail "Defined by yii\helpers\BaseConsole")               | Moves the terminal cursor forward by sending ANSI control code CUF to the terminal.
| [moveCursorNextLine()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorNextLine()-detail "Defined by yii\helpers\BaseConsole")             | Moves the terminal cursor to the beginning of the next line by sending ANSI control code CNL to the terminal.
| [moveCursorPrevLine()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorPrevLine()-detail "Defined by yii\helpers\BaseConsole")             | Moves the terminal cursor to the beginning of the previous line by sending ANSI control code CPL to the terminal.
| [moveCursorTo()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorTo()-detail "Defined by yii\helpers\BaseConsole")                         | Moves the cursor to an absolute position given as column and row by sending ANSI control code CUP or CHA to the terminal.
| [moveCursorUp()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#moveCursorUp()-detail "Defined by yii\helpers\BaseConsole")                         | Moves the terminal cursor up by sending ANSI control code CUU to the terminal.
| [output()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#output()-detail "Defined by yii\helpers\BaseConsole")                                     | Prints text to STDOUT appended with a carriage return (PHP_EOL).
| [outputCommand()](craft-helpers-console.md#method-outputcommand)                                                                                                      | Outputs a terminal command.
| [outputWarning()](craft-helpers-console.md#method-outputwarning)                                                                                                      | Outputs a warning.
| [prompt()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#prompt()-detail "Defined by yii\helpers\BaseConsole")                                     | Prompts the user for input and validates it.
| [renderColoredString()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#renderColoredString()-detail "Defined by yii\helpers\BaseConsole")           | Converts a string to ansi formatted by replacing patterns like %y (for yellow) with ansi control codes.
| [restoreCursorPosition()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#restoreCursorPosition()-detail "Defined by yii\helpers\BaseConsole")       | Restores the cursor position saved with [saveCursorPosition()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#saveCursorPosition()-detail) by sending ANSI control code RCP to the terminal.
| [saveCursorPosition()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#saveCursorPosition()-detail "Defined by yii\helpers\BaseConsole")             | Saves the current cursor position by sending ANSI control code SCP to the terminal.
| [scrollDown()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#scrollDown()-detail "Defined by yii\helpers\BaseConsole")                             | Scrolls whole page down by sending ANSI control code SD to the terminal.
| [scrollUp()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#scrollUp()-detail "Defined by yii\helpers\BaseConsole")                                 | Scrolls whole page up by sending ANSI control code SU to the terminal.
| [select()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#select()-detail "Defined by yii\helpers\BaseConsole")                                     | Gives the user an option to choose from. Giving '?' as an input will show a list of options to choose from and their explanations.
| [showCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#showCursor()-detail "Defined by yii\helpers\BaseConsole")                             | Will show a cursor again when it has been hidden by [hideCursor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#hideCursor()-detail) by sending ANSI DECTCEM code ?25h to the terminal.
| [startProgress()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#startProgress()-detail "Defined by yii\helpers\BaseConsole")                       | Starts display of a progress bar on screen.
| [stderr()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#stderr()-detail "Defined by yii\helpers\BaseConsole")                                     | Prints a string to STDERR.
| [stdin()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#stdin()-detail "Defined by yii\helpers\BaseConsole")                                       | Gets input from STDIN and returns a string right-trimmed for EOLs.
| [stdout()](craft-helpers-console.md#method-stdout)                                                                                                                    | Prints a string to STDOUT.
| [streamSupportsAnsiColors()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#streamSupportsAnsiColors()-detail "Defined by yii\helpers\BaseConsole") | Returns true if the stream supports colorization. ANSI colors are disabled if not supported by the stream.
| [stripAnsiFormat()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#stripAnsiFormat()-detail "Defined by yii\helpers\BaseConsole")                   | Strips ANSI control codes from a string.
| [updateProgress()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#updateProgress()-detail "Defined by yii\helpers\BaseConsole")                     | Updates a progress bar that has been started by [startProgress()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#startProgress()-detail).
| [wrapText()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#wrapText()-detail "Defined by yii\helpers\BaseConsole")                                 | Word wrap text with indentation to fit the screen size.
| [xtermBgColor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#xtermBgColor()-detail "Defined by yii\helpers\BaseConsole")                         | Returns the ansi format code for xterm background color.
| [xtermFgColor()](https://www.yiiframework.com/doc/api/2.0/yii-helpers-baseconsole#xtermFgColor()-detail "Defined by yii\helpers\BaseConsole")                         | Returns the ansi format code for xterm foreground color.

### `isColorEnabled()`



Since

:   3.0.38



Returns whether color is enabled.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Console.php#L55-L59)



#### Returns

[boolean](http://php.net/language.types.boolean)



### `outputCommand()`



Since

:   3.0.38



Outputs a terminal command.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Console.php#L68-L84)


#### Arguments

- `$command` ([string](http://php.net/language.types.string)) – The command to output
- `$withScriptName` ([boolean](http://php.net/language.types.boolean)) – Whether the current script name (e.g. `craft`) should be prepended to the command.




### `outputWarning()`



Since

:   3.0.38



Outputs a warning.




[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Console.php#L92-L121)


#### Arguments

- `$text` ([string](http://php.net/language.types.string))




### `stdout()`





Prints a string to STDOUT.

You may optionally format the string with ANSI codes by
passing additional parameters using the constants defined in [yii\helpers\Console](https://www.yiiframework.com/doc/api/2.0/yii-helpers-console).
Example:

```php
Console::stdout('This will be red and underlined.', Console::FG_RED, Console::UNDERLINE);
```


[View source](https://github.com/craftcms/cms/blob/master/src/helpers/Console.php#L36-L47)


#### Arguments

- `$string` ([string](http://php.net/language.types.string)) – The string to print

#### Returns

[integer](http://php.net/language.types.integer), [boolean](http://php.net/language.types.boolean) – Number of bytes printed or false on error







## Constants

| Constant      | Description
| ------------- | -----------
| `BG_BLACK`    |
| `BG_BLUE`     |
| `BG_CYAN`     |
| `BG_GREEN`    |
| `BG_GREY`     |
| `BG_PURPLE`   |
| `BG_RED`      |
| `BG_YELLOW`   |
| `BLINK`       |
| `BOLD`        |
| `CONCEALED`   |
| `CROSSED_OUT` |
| `ENCIRCLED`   |
| `FG_BLACK`    |
| `FG_BLUE`     |
| `FG_CYAN`     |
| `FG_GREEN`    |
| `FG_GREY`     |
| `FG_PURPLE`   |
| `FG_RED`      |
| `FG_YELLOW`   |
| `FRAMED`      |
| `ITALIC`      |
| `NEGATIVE`    |
| `NORMAL`      |
| `OVERLINED`   |
| `RESET`       |
| `UNDERLINE`   |



