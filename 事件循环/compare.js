setTimeout(() => {
    console.log(0)
}, 0);
let a = setInterval(() => {
    console.log(1)
    clearInterval(a)
}, 0);
