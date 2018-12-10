$( document ).ready(function() {

	$(".toggle-password").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $($(this).attr("toggle"));
			if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});


	$("#showRegister").click(function() {
		$("#pills-login-tab").removeClass("active show");
		$("#pills-login").removeClass("active show");
		$("#pills-register-tab").addClass("active show");
		$("#pills-register").addClass("active show");		
	});


});