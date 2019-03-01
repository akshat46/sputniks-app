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
//console.log("field: " + validation.item(0));
document.addEventListener('keyup', handler)
//document.attachEvent('onkeydown', handler)
// if (document.attachEvent) document.attachEvent('onkeydown', handler);
// else document.addEventListener('keydown', handler);

function hasClass(el, className) {
	return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
	console.log("here");
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
