import testimonials from "../../data/testimonials-data.js";

const track =
document.getElementById("testimonial-track");

const ITEMS_PER_SLIDE = 3;

let currentIndex = 0;

if(track){

    renderTestimonials();

    setInterval(nextSlide,4000);

}



function renderTestimonials(){

    testimonials.forEach(testimonial=>{

        const article =
        document.createElement("article");

        article.className =
        "testimonial-card";

        article.innerHTML = `

            <blockquote>

                <p>
                    "${testimonial.message}"
                </p>

            </blockquote>

            <div
                class="rating"
                aria-label="${testimonial.rating} out of 5 stars">

                ${"★".repeat(testimonial.rating)}

            </div>

            <footer>

                <h3>${testimonial.name}</h3>

                <p class="customer-role">
                    ${testimonial.role}
                </p>

            </footer>

        `;

        track.appendChild(article);

    });

}



function nextSlide(){

    currentIndex++;

    if(currentIndex >
        testimonials.length-ITEMS_PER_SLIDE){

        currentIndex = 0;

    }

    const percentage =
    (100/ITEMS_PER_SLIDE) * currentIndex;

    track.style.transform =
    `translateX(-${percentage}%)`;

}