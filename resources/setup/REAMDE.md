# Notes

> `this`:随着函数使用场合的不同，this 的值会发生变化。但是有一个总的原则，那就是 this 指的是，调用函数的那个对象。进一步说，this 和它声明环境无关，而完全取决于他的执行环境。

- `this` 指的是函数运行时所在的环境。</br>

### js 输出 arg：

> `function log(...args){ // varags}`

- console.log(...args) //输出所有 arguments，相当于['1','2','3']
- merge objects:

### stream:

> `['a','b','c'].map(`</br> > `x => x.toUpperCase())`</br> > `.filter(x => x >= 'C')`</br> > `.forEach(x => x+ 5)` </br>

### .reduce((total, val) => val + total, 0);

> reducer 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果相加（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。</br>

### callback function: pass the value to the function, recall the same function

# Questions

### Step 0: Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?

> 7 requests / files

    223.73 KB / 225.85 KB transferred
    Finish: 252 ms

> DOMContentLoaded: 147 ms

    load: 151 ms

### Step 1: Component-oriented programming for the web is considered more maintainable. Why?

> Yes because they are more easy to manage and move between files, and Component-oriented programming a simple, elementary piece of code:

    - reusable: easy to invoke several times, all over an application
    - standalone and with low counompling: it does not depends much on other components
    - with high coherence: it do only one thing, but it do it well

### Step1.2 Try to remove the 2 closures from both card.component.js & game.component.js. What happens? Why?

> Because the page don't work anymore.Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.

### Step2.2 As you can see, npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?

> Package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

### Step2.2: By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the ^ symbol next to the bootstrap version?

> Semantic Versioning dictates what kind of changes cause the version number to be incremented. Semver uses three-part version number like 3.9.2 and calls these three numbers from left to right as the major, minor and patch numbers.
> | 3 . | 9 . | 2 |
> | ---------- | :-----------: | :-----------: |
> | major | minor | patch |
> Instead of specifying the exact version to be installed in package.json, npm allows you to widen the range of accepted versions. You can allow a newer patch level version with tilde (~) and newer minor or patch level version with caret (^).
> </br>

### 2.3: What is a devDependency exactly? What are the differences with a dependency?

> A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.

- ex. Installing the bootstrap module that we want to use in the development phase only and not in the production or testing phase for the project, use the following command:

`npm install bootstrap --save-dev`

### 3.1 Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

> 1. In Java we can reference variables within a class without using `this`, `this` binding behaves much differently in JavaScript, as does scoping. JS use `this` when referencing variables present in a class (technically on an object instance).

> 2. JS classes provide only single inheritance. Classes only give you single inheritance, which severely limits your freedom of expression w.r.t. object-oriented design.
>    However there can be three types of inheritance in java: single, multilevel and hierarchical.

### 3.1.2 What is the .bind(this) stuff? What does happen if you delete it? Is it needed when using an arrow function ?

> "Bind" is used to change the point of "this". Deleting it will cause the point of "this" to change and eventually cause the function to return "undefined" or report an error.

- `() => {} === (function(){}).bind(this);`

### 3.2.1 What are the differences between var and let？

> 1. `let` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable **_ globally, or locally to an entire function regardless of block scope. _**
> 2. The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).
>    Just like `const` the let does not create properties of the window object when declared globally (in the top-most scope).

### 3.2.2 What is the .bind(this) stuff? What does happen if you delete it? Is it needed when using an arrow function ?

> The bind() method creates a new bound function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### 4.1.1 What are the advantages of Promises?

> They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
> Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.

### 4.1.2 What version of ECMAScript async / await was released in?

> ECMAScript 2017 JavaScript edition.

### 5.1.1 What does the @ symbol mean in @babel/\*\*\*?

**_ Did you notice, babel packages are installed as a devDependencies. _**

> 使用 @ 的格式，表示作用域，指定版本，latest 表示最新模板；我们在下载其他模块时也是这个格式。
> @: Some npm packages have a scope. Scopes are preceded by the “at” sign, for example @testing-library/react. The scope is “testing-library”, the package name is “react.” Only the organization that owns a scope can add packages to it, so you can be sure that you are using official code. A scoped package cannot be fetched just by using its name.

### 5.1.2 Look at the files produced within dist/ folder. How babel transpile your class WelcomeComponent?

> It changes the format of the file.

### 5.1.3 What is the weight of the transpiled sources compared to your original sources?

> This can be seen as a negligible time when you start to dev your new app, but it is going to grow and grow as your app gets bigger and more complex. If you choose to transpile, you lose this advantage, and not only this advantage.

> Another problem with transpiling is that the code the browser runs is not the code you have written. So, debugging and optimizing performance can become really tricky.

#### 5.1.4 Debugger

> add breakpoint in the code or the browser inspecter</br>
> in the browser ctrl + B: search the document</br>
> link VScode with browser

### 6.1.1 What is the difference between import \* from './utils' and import { parseUrl } from './utils'?

> import \* means import every modules in utils file, but import { parseUrl } means import only parseUrl module from utils.

### 6.2.1 Why the utils.js will also be transpiled?

> Because it is imported to the main.js --> ` { parseUrl } from "./app/utils/utils";`

### 6.2.2 What does the webpack --config webpack.config.js do ?

> Webpack is used to compile JavaScript modules.</br>
> Webpack configs allow you to configure and extend Webpack's basic functionality. A Webpack config is a JavaScript object that configures one of Webpack's options. Most projects define their Webpack config in a top-level webpack. config. js file, although you can also pass the config as a parameter to Webpack's Node.

### 7.1 An SPA means a single HTML document will be loaded for the entire life of the application.

### 7.2 Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download in total? How many time did it took to load them all?

> - page1: 5; page2: 11; page3: 12. </br>
> - In total: 12 files(requests)</br>
> - Time is 51.38 s.</br>
