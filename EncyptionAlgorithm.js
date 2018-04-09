function encrypt(text, n) {

  if(text == null || n == null)                   //Error Testing
    return null;
    
  var firstHalf = "",secondHalf = "",newText = text;
  
  for(var j = 0 ; j < n ; ++j){
  
      for(var i = 0 ; i < text.length;i++){
    
            if(i%2 !== 0){
              firstHalf += newText[i];         //spliting every second char
            }
            else{
              secondHalf += newText[i];       //Every other char but the second char
            }
          
      }  
       
      newText =  firstHalf + secondHalf;      //concatinating both the halfs
      firstHalf = "";secondHalf = "";
    }
    
    return newText;
}







function decrypt(encryptedText, n) {

  if(encryptedText == null || n == null)
    return null;                            //error teesting
  
  var oldText = encryptedText;
  var firstHalf = oldText.slice(0,Math.floor(encryptedText.length/2));                              //splitting the encryptedTect to two halfes-
  var secondHalf = oldText.slice(Math.floor(encryptedText.length/2),encryptedText.length);
  var newtext = "";
  
  
  for(var j = 0 ; j < n ; ++j){
  
        for(var i = 0 ,k = 0, l = 0; i < oldText.length;++i ){
        
              if(i%2 === 0){
                 newtext += secondHalf[l];                   
                 ++l;
              }                                                       //fitting the all the fistHalf char in between secondHalf and repating it n times
              else{
                 newtext += firstHalf[k];                 
                 ++k;
              }
          
        }
        
        oldText = newtext;
        firstHalf = oldText.slice(0,Math.floor(encryptedText.length/2));
        secondHalf = oldText.slice(Math.floor(encryptedText.length/2),encryptedText.length);
        newtext = "";
    }
    
    
  return oldText;

}