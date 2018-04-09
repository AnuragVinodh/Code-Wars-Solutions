function iqTest(numbers){
  var arr = numbers.split(" ");                                                                                                            //convert string to array
  for(var i = 1; i < arr.length ; i++)                                                                                                    // going through the loop
    if(!(((Number(arr[i-1])%2 === 0) && (Number(arr[i])%2 === 0))||((Number(arr[i-1])%2 != 0) && (Number(arr[i])%2 != 0)))){             //checking wether both the previous element(i-1) and current element(i) are odd or even(doesn't matter which one) 
      if(i === 1 && (((Number(arr[i])%2 === 0) && (Number(arr[i+1])%2 === 0))||((Number(arr[i])%2 != 0) && (Number(arr[i+1])%2 != 0)))) // checking if it's the first elemet that is diffenrent from the others or the second element differs from the others { matters only of i = 1 }
        return i;                                                                                                                      // returning the position if the fist element is the odd one out
      return i+1;                                                                                                                     //returning the position if any other element but the first element
    }
}