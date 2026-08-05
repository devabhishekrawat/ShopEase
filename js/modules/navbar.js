export async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;


    let navbarPath;


    const currentPath = window.location.pathname;


    if (currentPath.includes("/pages/")) {

        navbarPath = "../../component/navbar.html";

    }
    else if (currentPath.includes("/pages/")) {

        navbarPath = "../../component/navbar.html";

    }
    else {

        navbarPath = "./component/navbar.html";

    }


    const response = await fetch(navbarPath);


    if (!response.ok) {
        throw new Error("Navbar failed to load");
    }


    const html = await response.text();


    navbar.innerHTML = html;


    setActiveNav();

    setupMobileMenu();

}







function setActiveNav() {


    const currentPath =
        window.location.pathname;



    document
        .querySelectorAll(".nav-link")
        .forEach(link => {


            const linkPath =
                new URL(link.href).pathname;



            if (linkPath === currentPath) {

                link.classList.add("active");

            }


        });


}








function setupMobileMenu() {


    const menuButton =
        document.getElementById("menu-toggle");


    const navLinks =
        document.getElementById("nav-link");



    if (!menuButton || !navLinks)
        return;




    menuButton.addEventListener("click", () => {

        console.log("clicked");
        const isOpen =
            navLinks.classList.toggle("active");



        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


    });





    // close after clicking link

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {


            link.addEventListener("click", () => {


                navLinks.classList.remove("active");


                menuButton.setAttribute(
                    "aria-expanded",
                    false
                );


            });


        });


}