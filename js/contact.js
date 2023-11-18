"use strict";

const mailForm = document.getElementById("mail-form");

mailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const viewerName = mailForm.elements["name"].value;
  const email = mailForm.elements["email"].value;
  const subject = mailForm.elements["subject"].value;
  const message = mailForm.elements["message"].value;
  const body = JSON.stringify({
    name: viewerName,
    email,
    subject,
    content: message,
  });
  console.log(body);
  fetch("https://portfolio-mail-server.onrender.com/sendmail", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
});