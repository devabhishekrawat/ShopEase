import { loadNavbar } from "./navbar.js";

console.log("1")
loadNavbar();



console.log("2")
const contactForm =
    document.getElementById("contact-form");

console.log("3",contactForm)

const newsletterForm =
    document.getElementById("newsletter-form");





contactForm?.addEventListener(
    "submit",
    (e) => {


        e.preventDefault();


        console.log("Submit event fired");
        clearErrors();



        let valid = true;



        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const message =
            document.getElementById("message").value.trim();





        if (name.length < 3) {

            showError(
                "name",
                "Name must contain at least 3 characters");

            valid = false;

        }




        if (!validateEmail(email)) {


            showError(
                "email",
                "Enter a valid email address");

            valid = false;

        }




        if (message.length < 10) {


            showError(
                "message",
                "Query must contain at least 10 characters");

            valid = false;


        }





        if (valid) {


            const status =
                document.getElementById("form-status");


            status.textContent =
                "Message sent successfully!";


            status.className = "success";


            contactForm.reset();


        }


    });







newsletterForm?.addEventListener(
    "submit",
    (e) => {


        e.preventDefault();



        const email =
            document.getElementById(
                "newsletter-email"
            ).value.trim();



        const status =
            document.getElementById(
                "newsletter-status"
            );



        if (!validateEmail(email)) {


            status.textContent =
                "Please enter a valid email";


            status.className = "failed";


            return;

        }



        status.textContent =
            "Subscribed successfully!";


        status.className = "success";


        newsletterForm.reset();



    });







function validateEmail(email) {


    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);


}





function showError(
    field,
    message) {


    const input =
        document.getElementById(field);



    input
        .nextElementSibling
        .textContent = message;



}



function clearErrors() {


    document
        .querySelectorAll(".error")
        .forEach(error => {

            error.textContent = "";

        });


}