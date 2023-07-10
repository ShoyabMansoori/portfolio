const NavHome = document.getElementById('navHome');
const NavAbout = document.getElementById('navAbout');
const NavCertificate = document.getElementById('navCertificate');
const NavProject = document.getElementById('navProject');
const NavContact = document.getElementById('navContact');
const UpScroll = document.getElementById('upScroll');

NavHome.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#home";
});
NavAbout.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#about";
});
NavCertificate.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#certificate";
});
NavProject.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#project";
});
NavContact.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#contact";
});
UpScroll.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href="#home";
});

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