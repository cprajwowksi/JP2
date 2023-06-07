// const poKolei = (fun1, fun2, cb) => {
//     return fun1(fun2, cb)
// };

// const func1 = (fun2, cb) => {
//     setTimeout(() => fun2(5, cb), 1000)
// }

// const func2 = (res, cb) => {
//     setTimeout(() => cb(res*2), 1000)
// }

// const fcb = (res) => {
//     console.log(res);
// }

// poKolei(func1, func2, fcb)
function func1(fun, cb){
    setTimeout(()=>{
        console.log("Wywolanie 1");
        fun(2, cb);
    }, 2000)
}

function func2(x, cb){
    setTimeout(()=> {
        console.log("Wywolanie 2");
        cb(x + 1)
    }, 1000)
}

const poKolei = (fun1, fun2, cb) => {
    fun1(fun2, cb)
};

poKolei(func1, func2, (res) => {
    console.log(res);
})

