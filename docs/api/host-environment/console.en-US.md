# Console

Kraken implements the standard [Console API](https://developer.mozilla.org/zh-CN/docs/Web/API/Console):

- `assert()`
  Judge whether the first parameter is true, if it is `false`, an exception will be thrown and the corresponding information will be output to the console.

- `count()`
  Record the number of invocations with the parameter as the identifier, and print the identifier and the number of invocations on the console when invoking.

- `countReset()`
  Reset the counter value of the specified tag.

- `debug()`
  Print a debug message on the console.

- `dir()`
  To print a sentence starting with a triangle symbol, you can click the triangle to expand and view the properties of the object.

- `error()`
  Print an error message.

- `group()`
  Create a new inline group, and all subsequent print content will be displayed in the form of sub-levels. Call `groupEnd()` to close the group.

- `groupCollapsed`
  Create a new inline group. The usage is the same as `group()`, the difference is that the content printed by the `groupCollapsed()` method is collapsed by default. To move back out a level, call `groupEnd()`.

- `groupEnd()`
  Close the current inline group.

- `info()`
  Print information type description information.

- `log()`
  The general method of printing content.

- `table()`
  Print the list-type data into a table.

- `time()`
  Start a timer with the input parameter as a specific name, and the upper limit of the timer that can run simultaneously on the display page is 10,000.

- `timeEnd()`
  End a specific timer, and print the time it took from start to end in milliseconds.

- `timeLog()`
  Print the elapsed time of a specific timer.

- `trace()`
  Output a stack trace.

- `warn()`
  Print a warning message.
