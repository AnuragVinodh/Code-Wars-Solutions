function iqTest(numbers){
var arr = numbers.split(" ");
var posEven, posOdd, oddCount = 0, evenCount = 0;
for(var i = 0; i < arr.length ; i++){  
  if(Number(arr[i])%2 === 0){
    ++evenCount;
    posEven = i+1;
  }
  else{
    ++oddCount;
    posOdd = i+1;
  }
}
if(evenCount === 1)
  return posEven;
else 
  return posOdd;
}