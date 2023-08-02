// nav click lg screen*****
const NavHome = document.getElementById('navHome');
const NavAbout = document.getElementById('navAbout');
const NavCertificate = document.getElementById('navCertificate');
const NavskillLevel = document.getElementById('navSkill');
const NavProject = document.getElementById('navProject');
const NavContact = document.getElementById('navContact');

const UpScroll = document.getElementById('upScroll');



NavHome.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#home";
});
NavAbout.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#about";
});
NavskillLevel.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#skillLevel";
});
NavCertificate.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#certificate";
});
NavProject.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#project";
});
NavContact.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#contact";
});

UpScroll.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#home";
});

// end nav click lg screen*****
// nav click sm screen*****
const NavbarDropdownHome = document.getElementById('navbarDropdownHome');
const NavbarDropdownAbout = document.getElementById('navbarDropdownAbout');
const NavbarDropdownSkill = document.getElementById('navbarDropdownSkill');
const NavbarDropdownCertificate = document.getElementById('navbarDropdownCertificate');
const NavbarDropdownProject = document.getElementById('navbarDropdownProject');
const NavbarDropdownContact = document.getElementById('navbarDropdownContact');

NavbarDropdownHome.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#home";
});
NavbarDropdownAbout.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#about";
});
NavbarDropdownSkill.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#skillLevel";
});
NavbarDropdownCertificate.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#certificate";
});
NavbarDropdownProject.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#project";
});
NavbarDropdownContact.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "#contact";
});
// end nav click sm screen*****

// education section on click 
const SrSec = document.getElementById('srsec');
const Gradutaion = document.getElementById('gradutaion');
const PostGradutaion = document.getElementById('postGradutaion');

SrSec.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "https://jsdl.in/DT-99MMIQMAA6Y";
});
Gradutaion.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "https://okedu.in/";
});
PostGradutaion.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "https://www.uok.ac.in/";
});
// end education section on click


// Remove the transition class
const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('square-transition');
            return;
        }
        square.classList.remove('square-transition');
    });
});

observer.observe(document.querySelector('.square-wrapper'));

// ************************************************************

const submit = document.getElementById('formSubmit');
submit.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    if (!name || !email || !message) {
        alert('Please fill out all the required fields.');
        return false;
    }
    else {

        alert('secessfull sended ....');
        // Push the form data to Firebase
        database.ref("contacts").push({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        // Clear form fields after submission

        contactForm.reset();
    }
    return true;
});

// Your Firebase web app's configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAdX3ncCibgyNLq2M_B70VNHbi2MjlMzos",
    authDomain: "shoyab-mansoori.firebaseapp.com",
    projectId: "shoyab-mansoori",
    storageBucket: "shoyab-mansoori.appspot.com",
    messagingSenderId: "976060079049",
    appId: "1:976060079049:web:fc5d234e5d86cd1108a618",
    measurementId: "G-JHYBDTSKQ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();