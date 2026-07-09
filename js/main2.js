

document.querySelector("#manal").addEventListener("submit" , function(event){
    var tasks= document.querySelector("#tasks").value;
    var output=document.querySelector("#output");
      if (tasks==""){
        alert("Enter Your works!")
        event.preventDefault();
      }else{
        var myli=document.createElement("li")
        myli.innerHTML= tasks + '<button class="btn btn-danger btn-sm ms-2"> DEL </button>';
        output.append(myli);
        document.querySelector("#tasks").value="";
        event.preventDefault();
      }
})
document.querySelector("#output").onclick = function (event){
if(event.target.tagName =="BUTTON"){
    event.target.parentElement.remove();
}

}

document.querySelector("#Del").addEventListener("click", function () {
    document.querySelector("#output").innerHTML = "";
});
