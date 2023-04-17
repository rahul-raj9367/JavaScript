//Create a function that takes a number of promises and returns a promise that resolves once all of the provided promises have resolved


function allPromises(promises) {
    return Promise.all(promises);
}

const promises = [
    Promise.resolve('First value'),
    Promise.resolve('Second value'),
    Promise.resolve('Third value')
];
  
allPromises(promises)
.then((results) => {
    console.log('All promises resolved:', results);
})
.catch((error) => {
    console.error('Error:', error);
});
/*
OUTPUT
All promises resolved: [ 'First value', 'Second value', 'Third value' ]
*/