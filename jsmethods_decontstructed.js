var any = function(arr, cb){
  var isTrue = false;

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      isTrue = cbOutput;
    }
  }
  
  return isTrue;
}
See .some(), .every()
Vocab:
A predicate is essentially a function that determines whether something is true or false based on its arguments. It is common (though not necessary) for predicates to be named "isX", such as isEven or isNumber .

.map() 
var map = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}
