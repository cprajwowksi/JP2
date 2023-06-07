
const x = setInterval(
    () => console.log("Welcome"), 1000)

setTimeout(() => clearInterval(x), 5000)