export async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;


    const response = await fetch("/component/navbar.html");

    const html = await response.text();


    navbar.innerHTML = html;

}