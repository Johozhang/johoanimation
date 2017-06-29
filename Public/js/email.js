function initContactButton() {
	"computer" == deviceName ? sendEmailDiv.onclick = function() {
		sendEmail()
	} : sendEmailDiv.addEventListener("touchstart", sendEmail, !1)
}

function sendEmail() {
	hideContactConfirmationContainer(), positionContactConfirmationContainer();
	var t, n, e = $("#email-address").val(),
		i = $("#email-subject").val(),
		a = $("#email-message").val();
	if(e.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i))
		if(a.length < 1 && (n = !1, focusMessage()), a.length >= 1 && (n = !0), i.length < 1 && (t = !1, focusSubject()), i.length >= 1 && (t = !0), 1 == t && 1 == n) {
			var o = "email-address=" + e + "&email-subject=" + i + "&email-message=" + a;
			setTimeout("showContactConfirmationContainer(2)", 200), setTimeout("send('" + o + "')", 2e3)
		} else setTimeout("showContactConfirmationContainer(1)", 200);
	else focusEmail(), setTimeout("showContactConfirmationContainer(0)", 200);
	return !1
}

function send(t) {
	$.ajax({
		type: "POST",
		url: "email.php",
		data: t,
		cache: !1,
		success: function(t) {
			hideContactConfirmationContainer(), positionContactConfirmationContainer(), setTimeout("showContactConfirmationContainer(4)", 200), clearAllInputField()
		}
	})
}
var sendEmailDiv = document.getElementById("send-email");
initContactButton();