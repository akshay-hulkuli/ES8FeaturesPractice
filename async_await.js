//traditional es6 method of using then

function timeConsumingWork(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('work is done after 2 seconds')
        }, 2000);
    })
}

timeConsumingWork().then(resp=>{
    console.log(resp)
})

console.log('end of 1st script');


//es8 feature -  use await

function fnTimeConsumingWork(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
          resolve('work is done after 2 seconds')
       }, 2000);
    })
}
async function my_AsyncFunc(){
    console.log('inside my_AsyncFunc')
    const response = await fnTimeConsumingWork();// clean and readable
    console.log(response)
}
my_AsyncFunc();
console.log("end of 2nd script")