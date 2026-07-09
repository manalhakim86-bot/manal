
// first method function  without name
document.querySelector("#red").onclick = function (){
    document.querySelector("#demo").style.color ="red";
}
  document.querySelector("#green").onclick = function (){
    document.querySelector("#demo").style.color = "green";
  }
document.querySelector("#blue").onclick = function (){
    document.querySelector("#demo").style.color = "blue";
}
//=============================================================
 
// second method forEach loop

document.querySelectorAll("#manal").forEach(function (item){

    item.onclick=function(){

        document.querySelector("#mm").style.color=item.dataset.color;
        document.querySelector("#mm").style.textAlign=item.dataset.align;
    }
}) 
    
//==========================================================================
 document.querySelectorAll(".dark").forEach(function(item){

    item.onclick = function(){

        document.querySelector("#mode").style.backgroundColor = item.dataset.them;
    }

})


document.querySelector("#myform").addEventListener("submit", function(event){
    var works = document.querySelector("#works").value;
    var result= document.querySelector("#result");


    if(works=="") {
        alert("ENTER DATA")
        event.preventDefault();
    }else{
       var myli=document.createElement("li") 
       myli.innerHTML= works + '<button class="delete me-1 btn btn-danger">Delete</button>';
       result.append(myli);
       document.querySelector("#works").value="";
       event.preventDefault();
    }
})
 document.querySelector("#result").onclick = function(event){

    if(event.target.tagName == "BUTTON"){
        event.target.parentElement.remove();
    }

}

//===========================================================================================

function getapi( ){
    var xhttp= new XMLHttpRequest;
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var result=this.responseText;
            var mo=JSON.parse(result);
            var ali=mo.data.recipes;
            basket="";
            for(i=0;i<ali.length;i++){

                var cartoon= 
                             `<div class="col-md-4  text-center mb-5 ">
                               <img src="${ali[i].image_url}" class="w-100" style = 'height:350px'>
                                <h4>${ali[i].title}</h4>
                                <h4>${ali[i].publisher}</h4>
                                <h6>${ali[i].id}</h6>
                                </div>`; 
                                basket=basket+cartoon; 
            }
          document.querySelector(".test").innerHTML= basket;
        }
    }
    xhttp.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza" ,true)
    xhttp.send()
};


