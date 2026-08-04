export async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;


    const response = await fetch("/component/navbar.html");

    const html = await response.text();


    navbar.innerHTML = html;


    setActiveNav();

}




function setActiveNav() {

    const currentPath = window.location.pathname;


    const navLinks = document.querySelectorAll(".nav-link");


    navLinks.forEach(link => {


        const linkPath = new URL(link.href).pathname;


        if (linkPath === currentPath) {

            link.classList.add("active");

        }


    });

}