// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
   console.log(str);
   var splitArray = [];
   for(var  i = 1 ,  j = 0; i <= str.length ; i+=2 , j ++ ) {
      if( i == str.length)
         splitArray[j]  = str[i-1] + "_";
      else
        splitArray[j]  = str[i-1] + str[i] ;  
   }
   console.log(splitArray);
   return splitArray;
}