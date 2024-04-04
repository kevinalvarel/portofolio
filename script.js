const form = document.querySelector("form");
const name = document.getElementById("Name");
const email = document.getElementById("Email");
const message = document.getElementById("Message");

function sendEmail() {
  const bodyMessage = `name: ${Name.value}<br> email: ${Email.value}<br> message ${Message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "muhammadkevinalvarel@gmail.com",
    Password: "F11E3AE4DBFA68195B99D53B3DCB8FF5E1C6",
    To: "muhammadkevinalvarel@gmail.com",
    From: "muhammadkevinalvarel@gmail.com",
    Subject: "Ini Subject",
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
