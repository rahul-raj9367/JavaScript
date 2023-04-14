//Write a program to sort an array of objects by a key in ascending order.
//Object
const Product=[
    {
        name:'laptop',
        price:1000
    },
    {
        name:'mobile',
        price: 500
    },
    {
        name:'desktop',
        price:1500
    }
];
Product.sort((a,b)=>{
    return a.price-b.price;
})
console.log(Product);
/*
OUTPUT 
{name: 'mobile', price: 500} 
{name: 'laptop', price: 1000} 
{name: 'desktop', price: 1500}
*/