//example of promise with .then() callback
var promise = new Promise((resolve, reject) => {
    resolve('Hello, I am a Promise!');
})
  
promise.then((promise_kept_message) => {
    console.log(promise_kept_message);
}, (error) => { console.log(error); })// This function is invoked if Promise is rejected.


//Multple Promises, Promises Chaining
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});

//Promise.all() method
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);
  });
  
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });