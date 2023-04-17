//Create a function that takes an array of promises and resolves them in order, waiting for each one to resolve before starting the next

function resolvePromisesInOrder(promises) {
    return promises.reduce((chain, promise) => {
        return chain.then(() => promise)}, 
    Promise.resolve());
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Third'));

const promises = [promise1, promise2, promise3];

resolvePromisesInOrder(promises)
.then((results) => {
    console.log('All promises resolved in order:', results);
})
.catch((error) => {
    console.error('Error:', error);
});
/*
OUTPUT
All promises resolved in order: Third
*/