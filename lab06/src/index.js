function runFunc(a, b){
    a+b;
}
function runFunc2(a, b){
    a+b;
}
const status = "status";

switch(status) {
    case 'Completed':
      runFunc();
      break;
    case 'Running':
      runFunc2();
      break;
    default:
        break;
  }