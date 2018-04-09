function tripledouble(num1, num2) {
  var no_1 = ("" + num1 ).split("");
  var no_2 = ("" + num2 ).split("");
  console.log( num1 + " : " + num2 );
  var currNo , count_1 = 1 , count_2 = 1 , check_1 = false , check_2 = false;
  for(var i = 1 ; i < no_1.length ; ++ i ){
     if (no_1[i-1] == no_1[i])
       ++count_1 ;
     else{
     if(count_1 >= 3 )
        check_1 = true;
      count_1 = 1;
      }
  }
   for(var i = 1 ; i < no_2.length ; ++ i ){
     if (no_2[i-1] == no_2[i]){
       ++count_2 ;
       console.log("I am in here " + count_2);
       }
     else{
     if(count_2 >= 2 )
       check_2 = true
      count_2 = 1;
    }
  }
       if(count_2 >= 2 )
        check_2 = true;
       if(count_1 >= 3 )
        check_1 = true;
  console.log( check_1 + " : " + check_2 );
  if(check_1 && check_2)
    return 1;
  else
    return 0;
}