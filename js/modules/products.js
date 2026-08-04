const API =
"https://fakestoreapi.com/products";


const container =
document.getElementById("product-container");


// Stop this file on pages without products
if (!container) {
    console.log("Not a product page");
}
else {


const searchInput =
document.getElementById("search-product");


const category =
document.getElementById("category-filter");


const loading =
document.getElementById("loading");



let products = [];




async function getProducts(){


    try{


        const response =
        await fetch(API);



        products =
        await response.json();



        loading.style.display="none";


        renderProducts(products);



    }


    catch(error){


        loading.textContent =
        "Failed to load products";


        console.log(error);

    }


}






function renderProducts(items){


    container.innerHTML="";


    items.forEach(product=>{


        const card =
        document.createElement("article");



        card.className =
        "product-card";



        card.innerHTML = `

            <img 
            src="${product.image}"
            alt="${product.title}">


            <h2>
            ${product.title}
            </h2>


            <p>
            ${product.description.substring(0,120)}...
            </p>


            <strong>
            $${product.price}
            </strong>

        `;


        container.appendChild(card);


    });


}







searchInput.addEventListener(
"input",
()=>{


const value =
searchInput.value.toLowerCase();



const filtered =
products.filter(product=>

product.title
.toLowerCase()
.includes(value)

);



renderProducts(filtered);



});






category.addEventListener(
"change",
()=>{


const value =
category.value;



if(value==="all"){


    renderProducts(products);


    return;

}




const filtered =
products.filter(product=>

product.category===value

);



renderProducts(filtered);



});





getProducts();


}