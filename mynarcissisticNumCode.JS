unction narcissistic( value ) {

  var arr  = [];
  var num = value;
  var sum = 0;
  var check;
  
  for(var i  = 0 ; num != 0 ; ++ i){
    arr[i] =  num%10;
    num = Math.floor(num/10);
  }
  
  for(var i  = 0 ; i < arr.length ; ++ i)
    sum += Math.pow(arr[i],arr.length);

    
  sum === value ? check = true : check = false ;
  
  return check;
}