//contact form functionality
$(document).ready(function(){

	var form = $('.contactform');
	var formStatus = $('#formStatus');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Set the message text.
			$(formStatus).html(response);

			// Clear the form.
			$('#formName').val('');
			$('#formEmail').val('');
			$('#formMessage').val('');
		})
		.fail(function(data) {
			if (data.responseText !== '') {
				$(formStatus).html(data.responseText);
			} else {
				$(formStatus).html('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
