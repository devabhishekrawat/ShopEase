import { loadNavbar } from "./modules/navbar.js";
import { loadThemeToggle } from "./modules/theme.js";
import "./modules/products.js";
import "./modules/testimonials.js";

// for random products show
const API =
    "https://fakestoreapi.com/products";


const container =
    document.getElementById("featured-products");


if (container) {

    loadFeaturedProducts();

}



async function loadFeaturedProducts() {


    try {


        const response =
            await fetch(API);



        const products =
            await response.json();



        const randomProducts =
            getRandomProducts(products, 3);



        renderProducts(randomProducts);



    }
    catch (error) {

        console.log(
            "Failed loading products",
            error
        );

    }


}





function getRandomProducts(products, count) {


    return [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);


}





function renderProducts(products) {


    container.innerHTML = "";


    products.forEach(product => {


        const article =
            document.createElement("article");


        article.className =
            "product-card";



        article.innerHTML = `


            <img 
            src="${product.image}"
            alt="${product.title}">


            <h3>
                ${product.title}
            </h3>


            <p>
                ${product.description.substring(0, 100)}...
            </p>


            <span>
                $${product.price}
            </span>


        `;



        container.appendChild(article);


    });


}

// const validRoutes = [
//     "/",
//     "/index.html",
//     "/pages/products/products.html",
//     "/pages/ContactUs/contact.html"
// ];
// if (!validRoutes.includes(window.location.pathname)) {
//     window.location.href = "../pages/ErrorPage/error.html";
// }

console.log("main.js loaded");
loadNavbar();
loadThemeToggle();