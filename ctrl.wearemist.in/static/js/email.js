// code fragment

var data = {
    service_id: 'service_6bmx3vd',
    template_id: 'template_xm0lhd8',
    user_id: 'user_tf9B0UZf5eUXfl1ZyjoIH',
    template_params: {
        'username': 'Kunal',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
emailjs.send("service_6bmx3vd","template_xm0lhd8");
// code fragment
