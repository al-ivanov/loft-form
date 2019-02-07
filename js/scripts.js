$(document).ready(function () {
	var orderPhone = $('form[name="orderForm"]');
	var submitButton = $("#submitForm");
	orderPhone.submit(function (e) {
		var error = 0;
		e.preventDefault();
		var formData = new FormData();
		$userName = $("#userName");
		$userPhone = $("#userPhone");
		$userTextData = $("#userTextData");
		$userImage = $("#userImage")[0].files[0];

		if ($userName.val() == "") {
			$userName.css({
				"border-color": "red"
			});
			error = 1;
		} else {
			$userName.css({
				"border-color": "black"
			});
			error = 0;
		}
		if ($userPhone.val() == "") {
			$userPhone.css({
				"border-color": "red"
			});
			error = 1;
		} else {
			$userPhone.css({
				"border-color": "black"
			});
			error = 0;
		}
		if ($userTextData.val() == "") {
			$userTextData.css({
				"border-color": "red"
			});
			error = 1;
		} else {
			$userTextData.css({
				"border-color": "black"
			});
			error = 0;
		}

		if (error)
			return false;


		formData.append("name", $userName.val());
		formData.append("phone", $userPhone.val());
		formData.append("textarea", $userTextData.val());
		formData.append("userfile", $userImage);


		$.ajax({
			type: "POST",
			url: "mailer.php",
			processData: false,
			contentType: false,
			data: formData,
			success: function (data) {
				alert("Ваша заявка принята. В ближайшее время наш менеджер свяжется с вами");
				$userName.val("");
				$userPhone.val("");
				$userTextData.val("");
			}
		});
	});


	$("#uid2, #uid5").on("click", function (e) {
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		e.preventDefault();
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

});