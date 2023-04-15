//Use the map() method to create a new array of objects from an existing array.
const people=[
    { id:1, first_name:"Rahul", last_name:"raj"},
    { id:2, first_name:"Vembu", last_name:"ram"},
    { id:3, first_name:"Vel", last_name:"Murugan"}
];

let final=people.map(function(val){
    let fullname= [val.first_name,val.last_name].join(" ");
    let obj={id: val.id, fullname: fullname};
    return obj;
});
console.log(final);
/*
OUTPUT
[
  { id: 1, fullname: 'Rahul raj' },
  { id: 2, fullname: 'Vembu ram' },
  { id: 3, fullname: 'Vel Murugan' }
]
*/
