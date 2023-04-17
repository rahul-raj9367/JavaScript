//Create a function that creates a promise and resolves it after a specified time interval 

function delayedPromise(delay) {
    return new Promise((resolve, reject)=>{
      setTimeout(resolve,delay,'Promise resolved after delay');
    });
}
delayedPromise(1000) // Wait for 1 second
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.error(error);
});
/*
OUTPUT
Promise resolved after delay
*/