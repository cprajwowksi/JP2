const counter = (x, y) => {
    return (function(x){
        let i = 1
        const interval = setInterval(() => {
            console.log(i);
            i++
        }, y)
        const interval2 = setInterval(() => {
            if (i>x){
                clearInterval(interval)
                clearInterval(interval2)
            }
        }, y)
    })(x)

}

counter(5, 1000)