$(document).ready(function() {

  var form = $('#contact_form');
  var formStatus = $('#form_status');

  $(form).submit(function(event) {

    event.preventDefault();

    var formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })

    .done(function(response) {
      // Make sure that the formStatus div has the 'success' class.
      $(formStatus).removeClass('error text-danger animated bounceIn');
      $(formStatus).addClass('success text-success animated bounceIn');

      // Set the message text.
      $(formStatus).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })

    .fail(function(data) {
      // Make sure that the formStatus div has the 'error' class.
      $(formStatus).removeClass('success text-success animated bounceIn');
      $(formStatus).addClass('error text-danger animated bounceIn');

      // Set the message text.
      if (data.responseText !== '') {
          $(formStatus).text(data.responseText);
      } else {
          $(formStatus).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});
