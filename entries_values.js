const car = {
    name: 'mustang',
    model: '2012',
    company : 'ford',
    color : 'red'
}

console.log(Object.entries(car));  //prints all properties
console.log(Object.values(car));   //prints only values
console.log(Object.getOwnPropertyDescriptors(car))