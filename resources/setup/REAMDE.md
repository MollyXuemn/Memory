### Step 0: Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?

> 7 requests / files

    223.73 KB / 225.85 KB transferred
    Finish: 252 ms

> DOMContentLoaded: 147 ms

    load: 151 ms

### Step 1: Component-oriented programming for the web is considered more maintainable. Why?

> Yes because they are more easy to manage and move between files, and Component-oriented programming a simple, elementary piece of code

    - reusable: easy to invoke several times, all over an application
    - standalone and with low coupling: it does not depends much on other components
    - with high coherence: it do only one thing, but it do it well

### Step1.2 Try to remove the 2 closures from both card.component.js & game.component.js. What happens? Why?

> Because the page don't work anymore.Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.

### Step2.2 As you can see, npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?

> Package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
