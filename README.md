# Advance-JavaScript

<h2>Higher order function</h2>
A higher-order function is a powerful concept in programming that takes other functions as arguments or returns them as results. It's a way to make your code more flexible, concise, and reusable.

<h2>Callback hell</h2>
Callback hell, also known as the "pyramid of doom," occurs when you have multiple nested callbacks in asynchronous programming, making the code difficult to read and maintain. This often happens in JavaScript when dealing with asynchronous operations like API calls or file handling.
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
<i style="font-size:14px">Read Promise Api js code to understand with example <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/08%20promise%20api/app.js">app.js</a></i>

<h2>Async Await</h2>
The async and await keywords in JavaScript enable you to write asynchronous code that's easier to read and maintain.

<h3>Non-Blocking Code Execution </h3> 
JavaScript is single-threaded, which means it can only do one thing at a time. async/await allows you to perform long-running tasks (like fetching data from an API) without freezing the entire application. This way, other operations can continue running while waiting for the asynchronous task to complete.
<h3>Readability and Maintainability</h3>  
Before async/await, asynchronous code was often written using callbacks or promises, which could become complex and hard to follow. async/await makes the code look more like synchronous code, which is easier to read and understand.
<br/>
<i style="font-size:14px">Read Async Await js code to understand with example <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/09%20async%20await/app.js">app.js</a></i>

<h2>This Keyword</h2>
<h3>this in global space</h3>
this inside global space refer to the global object e.g. in browser it is window

<h3>this inside a function</h3>
this keyword inside a function is undefined but due to ('this substitution) we get global object.

<h3>this keyword value depends on how the function is called</h3>
<h3>this inside a object menthod</h3>
this inside object method refer to the object where it is called.

<h3>call, apply and bind</h3>
call, apply and bind can be used to modify value of this.

<h3>this inside arrow funciton</h3>
arrow function doesn't provide their own this binding (it retain value of it enclosing lexical context).<br>
<i style="font-size:14px">Read this keyword in  js  with example <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/10%20this%20keyword/app.js">app.js</a></i>

