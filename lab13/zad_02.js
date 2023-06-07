function func1(cb){
    setTimeout(()=>{
        console.log("Wywolanie 1");
        cb(1)
    }, 2000)
}

function func2(cb){
    setTimeout(()=> {
        console.log("Wywolanie 2");   
        cb(2)
    }, 1000)
}


const razem = (fun1, fun2, cb) => {
    const arr = [null, null]
    fun1((x) => {
        arr[0] = x
        console.log(arr);
        if(arr[0] && arr[1]){
          cb(arr[0],arr[1])
        }
    })
    fun2((x) => {
        arr[1] = x
        console.log(arr);
        if(arr[0] && arr[1]){
          cb(arr[0],arr[1])
        }
    })


};

razem(func1, func2, (x, y) => {
    console.log(x, y);
})
