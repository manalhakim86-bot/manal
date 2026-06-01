function validatedData() {

    var user = document.getElementById("user").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    if (user == "" && mail == "" && pass == "" && confirm == "") {
        result.innerHTML = "enter data";
        return false;

    } else if (user.length < 3 || user.length > 15) {
        result.innerHTML = "enter data 3-15 char in name";
        return false;

    } else if (mail.indexOf("@", 1) == -1 || mail.indexOf(".com") == -1) {
        result.innerHTML = "enter valid e-mail";
        return false;

    } else if (pass == "") {
        result.innerHTML = "enter password";
        return false;

    } else if (pass.length <8){
        result.innerHTML ="enter password more than 8 char";
        return false;

    } else if (pass!= confirm){
        result.innerHTML = "enter correct password";
        return false;
    }
}