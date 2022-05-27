window.onload=function(){
function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function hasSelected(input, text, message) {
	if (text === "-") {
		return showError(input, message);
	}
	return showSuccess(input);
}

const form = document.querySelector("form");

const NAME_REQUIRED = "Silahkan masukan nama Anda";
const REASON_REQUIRED = "Silahkan pilih alasan menghubungi";
const MESSAGE_REQUIRED = "Silahkan masukan pesan Anda";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	let nameValid = hasValue(form.elements["form-name"], NAME_REQUIRED);
    let reason = document.getElementById("form-topic")
	let reasonValid = hasSelected(reason, reason.options[reason.options.selectedIndex].text, REASON_REQUIRED);
	let messageValid = hasValue(form.elements["form-desc"], MESSAGE_REQUIRED);
	if (nameValid && reasonValid && messageValid) {
        let nameValue = document.getElementById("form-name").value
        let reasonValue = reason.options[reason.options.selectedIndex].text
        let messageValue = document.getElementById("form-desc").value
		alert("Halo nama saya" + nameValue + ", " + reasonValue + " dan " + messageValue);
	}
});
}