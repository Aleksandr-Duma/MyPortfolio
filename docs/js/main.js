$(function(){
	$('.button-burger').on('click', function(){
		$('.navigation__list').addClass('active');
		$('.button-burger').addClass('hide');
	});

	$('.button-close, .navigation__list-item').on('click', function(){
		let win = $(window).width();

		$('.navigation__list').removeClass('active');
		$('.button-burger').removeClass('hide');
		
		if(win < 768){
			$('.button-burger').fadeIn();
		}	
	});
// ......................MixItUp2......................

	$('#portfolio__body').mixItUp();

// ......................Scroll........................

	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});
// ...................JQ Validation....................

	$('.contact-form').validate({
		rules: {
			name: {required: true},
			email: {required: true, email: true},
			message: {required: true}
		},
		messages: {
			name: 'Пожалуйста, введите свое имя',
			email: {
				required: 'Поле E-mail обязательное для заполнения',
				email: 'Введите пожалуйста корректный e-mail'
			},
			message: 'Пожалуйста, введите текст сообщения'
		},
		errorClass: "error",
		validClass: "valid"
	});

//...................E-mail Ajax Send...................

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваше сообщение отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
//.......................Copiright......................	

	let date = new Date();
	let copy = document.querySelector('.copy-date').innerHTML = date.getFullYear();
});