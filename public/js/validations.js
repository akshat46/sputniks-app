function validateSignUp(){
    if(validateSignUpUsername() && validateSignUpPassword() ){
        document.getElementById("SignUpError").innerHTML = "";
        document.getElementById("ButtonSignUp").disabled = false;
    }else{
        document.getElementById("SignUpError").innerHTML = "Enter Valid Email and strong Password";
        document.getElementById("ButtonSignUp").disabled = true;
    }
}
function validateSignUpUsername() {
    var usernameCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(usernameCheck.test(document.getElementById("SignUpUsername").value))
        return true;
    return false;
}

function validateSignUpPassword() {
    var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,18}$/;
    if(passwordCheck.test(document.getElementById("SignUpPassword").value))
        return true;
    return false;
}

function validateSignIn(){
    if(validateSignInUsername() && validateSignInPassword()){
        document.getElementById("SignInError").innerHTML = "";
        document.getElementById("ButtonSignIn").disabled = false;
    }else{
        document.getElementById("SignInError").innerHTML = "Enter Valid Email and strong Password";
        document.getElementById("ButtonSignIn").disabled = true;
    }
}
function validateSignInUsername() {
    var usernameCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(usernameCheck.test(document.getElementById("SignInUsername").value))
        return true;
    return false;
}

function validateSignInPassword() {
    var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,18}$/;
    if(passwordCheck.test(document.getElementById("SignInPassword").value))
        return true;
    return false;
}

function validateZip(){
    var zipCheck = /^\d{5}$/;
    if(zipCheck.test(document.getElementById("zip").value)){
        document.getElementById("zipCodeError").innerHTML = "";
        document.getElementById("detailSubmit").disabled = false;
        checkCheckBox();
    }else{
        document.getElementById("zipCodeError").innerHTML = "Enter Valid Zip";
        document.getElementById("detailSubmit").disabled = true;
    }

}

function checkCheckBox()
{
    var checkboxes=document.getElementsByName("food");
    var okay=false;
    for(var i=0,l=checkboxes.length;i<l;i++)
    {
        if(checkboxes[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay){
        document.getElementById("checkBoxError").innerHTML = "";
        document.getElementById("detailSubmit").disabled = false;
    }
    else{
        document.getElementById("checkBoxError").innerHTML = "Select at least one choice";
        document.getElementById("detailSubmit").disabled = true;
    }
}