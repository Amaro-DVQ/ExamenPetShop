console.log("Naisu!");
document.getElementById("varNombre").style.display = "none";
document.getElementById("varCorreo").style.display = "none";
document.getElementById("varPassord").style.display = "none";
document.getElementById("varRPassword").style.display = "none";

function validar() {
    if (document.getElementById("form3Example1cg").value == "") {
        document.getElementById("varNombre").style.display = "inline";
        document.getElementById("form3Example1cg").classList.add("is-invalid");
    }else{
        document.getElementById("varNombre").style.display = "none";
        document.getElementById("form3Example1cg").classList.remove("is-invalid");
    }
}
