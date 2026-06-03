function validateData(){
    var userfirst = document.getElementById("userfirst").value;
    var userlast = document.getElementById("userlast").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var result= document.getElementById("result");
       
    if( userfirst== "" && userlast== "" && mail== "" && phone== "" ){
           result.innerHTML="Enter data";
           return false;
    }else if(userfirst.length <3 ||userfirst.length >15){
        result.innerHTML="Enter first name ";
           return false;
    }else if(userlast.length <3 ||userlast.length >15){
        result.innerHTML="Enter last name ";
           return false;
    }else if(mail.indexOf("@") ==-1 || mail.indexOf(".com") ==-1){
        result.innerHTML="Enter correct mail ";
           return false;  
}
}