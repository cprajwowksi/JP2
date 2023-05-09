const inc= (function (min,max) {
  let i = min;
  console.log(i);
  if (i<=max){
    return function() {
      return i++;
  }
}
  else{
    return undefined
  }

})(5,7);

console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());


inc();
inc();
inc();
inc();
inc();
