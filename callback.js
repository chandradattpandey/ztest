

            // callback


// function action(x,y,callback){
//     return callback (x,y);
   
// }
// function sum(x,y){
//     return ( x+y);
//  }
//  function sub(x,y){
//     return ( x-y);
//  }
//  console.log(action(10,19,sum));
//  console.log(action(19,10,sub));


             //promise    


// let promise = new Promise(function(resolve, reject) {
    
//     setTimeout(() => resolve("done"), 5000);
//     console.log("success");
//   });
//   promise.then(
//  result=> console.log("hello")
//   )
//   promise.catch(err => console.log("reeor"));




// function func1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const error = true;
//             if (error){
//                 console.log('promise resolve');
//                 resolve();
//             }else{
//                 console.log('promise reject');
//                 reject();
//             }
//         },2000);
//     })
// }

// func1().then(function(){
//     console.log('success');
// }).catch(function(){
//     console.log('Error');
// })



function number(i){
    return Promise(function(resolve, reject){
        setTimeout(() => {
            if(i % 2 == 0){
                console.log('number is even');
                resolve();
            }else{
                console.log('number is odd');
                reject();
            }
        },2000);
    })
}
number(5).then(function(){
    console.log('success')
})