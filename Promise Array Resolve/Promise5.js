//Write a function that takes an array of promises and resolves them in the order they were provided

function sequentialPromises(promises) {
  return new Promise((resolve,reject)=>{
      var addvalue=promises.reduce((previousVal,currentVal)=>{
          var total=previousVal+currentVal;
          return total;
      });
      resolve(addvalue);
  })
}

const promises = [1,2,3,4,5];

sequentialPromises(promises)
.then((num)=>{
  console.log("Total Value "+num);  
})
.catch((error)=>{
  console.error(error);
})
/*
OUTPUT
Total Value 15
*/