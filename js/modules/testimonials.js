import testimonials from "../../data/testimonials-data.js";

const track =
document.getElementById("testimonial-track");

let currentIndex = 0;

let visibleCards = 3;

if (track) {

    renderTestimonials();

    updateSlider();

    window.addEventListener(
        "resize",
        updateSlider
    );

    setInterval(nextSlide, 4000);

}

function getVisibleCards() {

    if (window.innerWidth <= 600) {

        return 1;

    }

    if (window.innerWidth <= 992) {

        return 2;

    }

    return 3;

}

function renderTestimonials() {

    track.innerHTML = "";

    testimonials.forEach(testimonial => {

        const article =
            document.createElement("article");

        article.className =
            "testimonial-card";

        article.innerHTML = `

            <blockquote>

                <p>"${testimonial.message}"</p>

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

function updateSlider() {

    visibleCards = getVisibleCards();

    currentIndex = 0;

    moveSlider();

}

function nextSlide() {

    currentIndex++;

    if (
        currentIndex >
        testimonials.length - visibleCards
    ) {

        currentIndex = 0;

    }

    moveSlider();

}

function moveSlider() {

    const card =
        document.querySelector(".testimonial-card");

    if (!card) return;

    const gap = 24;

    const slideWidth =
        card.offsetWidth + gap;

    track.style.transform =
        `translateX(-${currentIndex * slideWidth}px)`;

}