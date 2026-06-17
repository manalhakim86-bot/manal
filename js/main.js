function sendmessag(){
    var user =document.getElementById("user").value;
    var mail =document.getElementById("mail").value;
    var sub =document.getElementById("sub").value;
    var result =document.getElementById("result");


if (user=="" || user.length<3 || user.length >15) {
    result.innerHTML="enter user name more than 3 and less than 15";
      return false;
}
       return true;{
} else if(mail=="" ||mail.indexOf("@,1") ==-1 || mail.indexOf(".com") ==-1 ){
         result.innerHTML="enter user name more than 3 and less than 15";
         return false;
}
       return true;{
    }
 



}