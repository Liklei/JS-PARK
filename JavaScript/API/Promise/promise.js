// useage
let pros = new Promise(function(resolve, reject){
    setTimeout((arg) => {
        resolve(arg);
    }, 2000, "aaaa"); 
})
pros.then(function(arg) {
    console.log(arg);
})


 