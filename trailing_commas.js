let alphabets = ['a','b','c',,'d']
console.log(alphabets.length)
console.log(alphabets)
alphabets.forEach(function(e){ 
    console.log(e)  //for each ignores empty object
})