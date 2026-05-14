function convertvalue(){
    var dollar= document.getElementById("dollar").value;
    var result= document.getElementById("result");

    result.innerHTML= dollar *50
    
if(dollar==""){
 result.innerHTML= "Enter value";
}else if(isNaN(dollar)){
        result.innerHTML = "Enter number not text";
    }else if(dollar==0){
       result.innerHTML = "please enternumber more than 0";
    }else if(dollar<0){
         result.innerHTML = "please enter positive number";
    }else{
             result.innerHTML = dollar *50
    }
              return false;
}
