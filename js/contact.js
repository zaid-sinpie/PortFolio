'use strict';

const mailForm = document.getElementById('mail-form');

mailForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = mailForm.elements['name'];
    const email = mailForm.elements['email'];
    const subject = mailForm.elements['subject'];
    const message = mailForm.elements['message'];
    fetch('https://portfolio-mail-server.onrender.com/sendmail',{
        method:'POST',body: JSON.stringify({name,email,subject,message})
    });
});