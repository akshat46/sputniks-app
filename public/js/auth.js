$('#switch').click(function(){
	$(this).text(function(i, text){
		return text === "Sign Up" ? "Log In" : "Sign Up";
	});
	$('#login').toggleClass("on");
	$('#signup').toggleClass("on");
	$(this).toggleClass("two");
	$('#background').toggleClass("two");
	$('#image-overlay').toggleClass("two");
})

/*PASSWORD VALIDATION WITH PLAIN JS (WITHOUT JQUERY)*/

var field = document.getElementsByClassName('password-field').password;
var validation = document.getElementsByClassName('password-validate').item(0);

function handler(e) {
	if(field===document.activeElement){
		console.log("length " + (field.value));
		if((field.value.length+1)<2){
			validation.className = "password-validate ";
		}
		if((field.value.length+1)>2){
			validation.className = "password-validate " + "weak";
		}
		if((field.value.length+1)>4){
			validation.className = "password-validate " + "med";
		}
		if((field.value.length+1)>8){
			validation.className = "password-validate " + "strong";
		}
	}
}

document.addEventListener('keyup', handler)
