# Advance-JavaScript

<h2>Let's learn Promises.</h2>
Promises in JavaScript provide a way to handle asynchronous operations. 
They allow you to write code that will only execute after a specific task (like fetching data from a server) has completed. 
Here's a step-by-step overview of how promises work and how you can use them:

<h3>Creating a Promise</h3>
A promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.

<h3>Consuming a Promise</h3>
To handle the result of a promise, you use the .then() method for successful completion and the .catch() method for handling errors.
Chaining Promises

<h3>Promise Chaining</h3>
Promises can be chained together to handle a series of asynchronous operations.<br>
Chaining promises in JavaScript allows you to execute multiple asynchronous operations in sequence.

<h2>JavaScript Promise API</h2>

JavaScript Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are a key feature for handling asynchronous operations in modern JavaScript.

<h3>Promise.all(iterable):</h3> Waits for all promises in the iterable to resolve or for any to reject. Returns an array of results.
<h3>Promise.allSettled(iterable):</h3> Waits for all promises to settle (resolve or reject) and returns an array of objects describing the outcomes.
<h3>Promise.race(iterable):</h3> Returns the value of the first promise to settle (resolve or reject).
<h3>Promise.any(iterable):</h3> Returns the first resolved promise. If all promises reject, it returns an AggregateError.
<br/>
<i style="font-size:14px">Read Promise Api js code to understand with exaple <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/08%20promise%20api/app.js">app.js</a></i>

<h2>Async Await</h2>
The async and await keywords in JavaScript enable you to write asynchronous code that's easier to read and maintain.

<h3>Non-Blocking Code Execution </h3> 
JavaScript is single-threaded, which means it can only do one thing at a time. async/await allows you to perform long-running tasks (like fetching data from an API) without freezing the entire application. This way, other operations can continue running while waiting for the asynchronous task to complete.
<h3>Readability and Maintainability</h3>  
Before async/await, asynchronous code was often written using callbacks or promises, which could become complex and hard to follow. async/await makes the code look more like synchronous code, which is easier to read and understand.
<br/>
<i style="font-size:14px">Read Promise Api js code to understand with exaple <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/08%20promise%20api/app.js">app.js</a></i>

