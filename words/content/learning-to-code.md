{ "title": "Learning to Code", "date": "2018-11-10", "hidden": 1 }

This is my take at attempting to convey the usefulness and beauty of programming to those new to the craft.

Here, you will have the opportunity to learn about some of the very basics of software development using __JavaScript__ (or JS for short) through studying __working code of practical relevance__. It is very much a __personal document__, as everyone absorbs and assimilates knowledge differently, but I don't feel like that should stop me from writing it down.

>JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm and weakly-typed language used for both client-side and server-side scripting. Its primary use is in rendering and performing manipulation of web pages
>
>From ["About JS"](https://stackoverflow.com/tags/javascript/info) on StackOverflow

While this is all well and good, we don't really care too much about what the above actually means for us, for now. The important thing to take away here, is that it's __primarily used on websites__ to render (convert data into a visual form) and manipulate them.

This means that your browser runs JavaScript code that is loaded alongside websites, which can then be used to make them interactive. To see a demonstration of your browser's JS interpreter just hit <kbd>F12</kbd> and switch to the "Console" tab.

You should now see the developer tools of your browser, which (among other things) provides you with a REPL -- a read–eval–print loop. It takes user input (in this case, JavaScript code), evaluates it, and prints the result.

![A demonstration of the REPL.](https://i.imgur.com/rxvvoks.gif)

For example, `Math.PI` is evaluated, and returned (ergo printed). Same for `Math.PI * 2`, the expression is evaluated and the result is returned.

A slightly more advanced example can be seen in the following screenshot.

![Demonstrating some more advanced features.](https://i.imgur.com/Ufvgnkd.png)

While this is pretty fun to play around with, and also great for learning and discovering new things thanks to the autocompletion suggestions, we want to write bigger, more complex scripts.

Now, as previously mentioned, JS is usually run on websites, in the browser. That's a bigger detour to actually programming things than I would like, so we are going to use [NodeJS](https://nodejs.org/en/) to run our code.

>Node.js is an event-based, non-blocking, asynchronous I/O framework that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client, as well as on server side and therefore benefit from the re-usability of code and the lack of context switching.
>
>From ["About node.js"](https://stackoverflow.com/tags/node.js/info) on StackOverflow

Yes. Got that? No? Well, that's ok. What you need to know is: NodeJS (commonly referred to as just "Node") can run JavaScript on your PC, without requiring you to load a website (be it local or not). To do that it uses the V8 engine, which is also used in Chromium, and therefore Google Chrome. There's a good chance you used V8 just now, playing around in the REPL!

It's mainly used on servers and to write quick little console scripts, but through a number of pretty neat frameworks, some beautiful desktop and mobile apps have been developed (Discord, Atom, parts of the Facebook App). To top it off, Node is Open Source (under the MIT license) and backed by the Linux Foundation. There has been much discussion on whether or not it is actually well suited to many of these tasks, and I will not attempt to get into that topic. Fact is that it's being used for these things in the real world, and it can't hurt to know your way around it and it's ecosystem.

Enough of that now, though. Let's get into writing scripts using Node! Once you've installed Node, you can use the `node` command in your terminal. On Windows, search for "cmd" or "Command Prompt" in the [Start Menu](https://i.imgur.com/SRqsdvE.jpg) (the thing that pops up when you press the "Windows" key) and search for "cmd" or "Command Prompt".

Now, with your terminal open, you can check that Node is properly installed by issuing the `node -v` command. If everything is set up the way it should be, that will output the version number of the installed Node build (anything above 8.0.0 is fine, but >= 10.0.0 would be optimal).

![CMD window with the node -v command.](https://i.imgur.com/pZfJ70c.png)

Assuming that this worked, the `node` command is now available anywhere in the terminal. You probably started out in `C:\Users\<USERNAME>` (it's alright if you didn't), but you'll most likely want to do your scripting somewhere else, in a dedicated folder.

Since we're already in the terminal, let's create a `code` folder where we will put our scripts using `mkdir`, which is a command (just like `node`) that creates directories. To "move" to this new folder, use the `cd` command which can be used to move around the directory structure.

_Note that the directory name is completely arbitrary._

![Creating the code directory and switching to it using the mkdir and cd commands](https://i.imgur.com/wo363Pu.gif)

A note on `cd`: to go "up" a directory, do `cd ..`. This can also be chained like `cd ../../some/other/path`.

Feel free to try out the `node` command, without any arguments. Lo and behold, it's a REPL!

![Node REPL inside a CMD window.](https://i.imgur.com/f3zL4eo.gif)

This is pretty nice and all, but we still haven't gotten to the point where we can actually run scripts, as in files containing JavaScript code. With NodeJS that's done by running `node <script>`, where `<script>` is the name of the file you want to run.

<script src="https://gist.github.com/LW2904/171a379fe525ca81660292f61b77566f.js"></script>

The above code introduces [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), and [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

As mentioned above, scripts like this can be run with the `node <script>` command, so in this case `node example1.js`.

![Running example1.js in cmd through node](https://i.imgur.com/qoom9bm.png)

Okay, so in the beginning I mentioned "learning to code through studying working code of practical relevance". I will now throw (well commented) code at your feet, tell you what parts of it are new/important, and give you links to relevant documentation.

If you survive that for long enough, you can call yourself a programmer, congratulations.

As a first example, let's build a program to encrypt messages.

<script src="https://gist.github.com/LW2904/61d1e0ea741f8e11c1cdd1b7063a5293.js"></script>

This is very short, but there's a load of new things here:

- [`String.fromCharCode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) and [`String.prototype.charCodeAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) and the concept of UTF-16 codes
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- using the [`for...of` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) to iterate over a string

I would really like to encourage you to at least skim the contents of the documentation I'm linking here -- this is all you're going to get.

Running this will cause the encrypted version of `message` (in this case `Hello there!`) to be printed.

![Running rot_cipher_1.js](https://i.imgur.com/8hhevvh.png)

On its own, this little script is not particularly useful. In order to change either the message or the value it is shifted with requires us to edit the code, and that is suboptimal at best. Decrypting messages, which simply requires shifting by `(previous shift) * -1` would therefore also require a change in the script -- this simply imposes too much inflexibility upon us.

Therefore, a modified and significantly more flexible version is required.

<script src="https://gist.github.com/LW2904/f864bc0f44e4d97d7d8d89a9f37c15ba.js"></script>

The main takeaway from the script obove is that you can use [`process.argv`](https://nodejs.org/docs/latest/api/process.html) to get the _arguments_ that were passed to the script. You’ve already come accross a number of programs that accept arguments, the `node` command, for example.

Other things that are new here include,

- [`Array.prototype.slice` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to remove array elements (read the `process.argv` documentation to find out why we can discard the first two elements in the above example)
- [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to parse a `String` object into a `Number` object

If it hasn't become obvious from reading the `process.argv` documentation yet (you _did_ read it, right?), this little script can be used like so: `node <script> <shift> <message>`. So, as an example:

![Encrypting and decrypting a message](https://i.imgur.com/Bvyize7.png)

