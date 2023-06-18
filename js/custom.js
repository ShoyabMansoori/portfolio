function sendEmail() {
let name=document.getElementById("nameInput").value;
let email=document.getElementById("emailInput").value;
let message=document.getElementById("messageInput").value;

let body="Name: "+name+"Email: "+email+"Message: "+message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@domainn.com",
        Password: "2486D06DB6E58403509A90F657713E63E855",
        To: 'shoyabmansury@gmail.com',
        From: email,
        Subject: "Hi i'm"+name,
        Body: body
    }).then(
        message => alert(message)
    );
}