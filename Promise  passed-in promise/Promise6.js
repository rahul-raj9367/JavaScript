//Write a function that returns a promise with a return value of the passed-in promise if it resolves, otherwise the return value of a new promises

function promiseWithFallback(promise) {
    return promise.then((result) => {
        return result;
    })
    .catch(() => {
        return new Promise((resolve) => {
            resolve('Fallback value');
        });
    });
}
 
const successPromise = Promise.resolve('Success value');
const failurePromise = Promise.reject('Error');

promiseWithFallback(successPromise)
  .then((result) => {
    console.log('Promise resolved with:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

promiseWithFallback(failurePromise)
  .then((result) => {
    console.log('Promise resolved with:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
/*
OUTPUT
Promise resolved with: Success value
Promise resolved with: Fallback value
*/