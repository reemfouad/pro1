var Input = document.getElementById("mypass");
var passout = document.getElementById("passout");

function pass() {
    var password = document.getElementById("mypass").value;
    console.log(password);
    console.log(typeof password)
    if (password.lenght >= 8 && password.lenght <= 32) {
        Input.style.borderColor = "green";
    } else {
        Input.style.borderColor = "red";
        passout.innerHTML = "password between 8and32";
        passout.style.color = "red";
    }


}