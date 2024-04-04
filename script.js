const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "muhammadkevinalvarel@gmail.com",
    Password: "4648A982511191D3921B71C37BE31EF58FB7",
    To: "them@muhammadkevinalvarel.com",
    From: "you@muhammadkevinalvarel.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
