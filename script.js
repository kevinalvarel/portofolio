const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = "Name: ${name.value}";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "muhammadkevinalvarel@gmail.com",
    Password: "29D7B263E07E03DF5FA919DEC6045927C682",
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
