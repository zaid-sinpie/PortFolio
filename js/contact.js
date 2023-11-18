'use strict';

const mailForm = document.getElementById('mail-form');

mailForm.addEventListener('submit', function(event){
    event.preventDefault();
    name = mailForm.elements['name'];
    email = mailForm.elements['email'];
    subject = mailForm.elements['subject'];
    message = mailForm.elements['message'];
    fetch('https://portfolio-mail-server.onrender.com/sendmail',{
        method:'POST',body: JSON.stringify({name,email,subject,message})
    });
});