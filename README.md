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

<i style="font-size:14px">Read Promise Api js code to understand with exaple <a href ="https://github.com/loveychauhan/Advance-JavaScript/blob/main/08%20promise%20api/app.js">app.js</a></i>
