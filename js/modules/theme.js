export async function loadThemeToggle() {


    const container =
        document.getElementById("theme-toggle-container");


    if (!container) return;



    const response =
        await fetch("../../component/theme-toggle.html");


    const html =
        await response.text();


    container.innerHTML = html;



    const button =
        document.getElementById("theme-toggle");



    if (!button) return;



    const savedTheme =
        localStorage.getItem("theme");



    const isDark =
        savedTheme === "dark";



    if (isDark) {

        document.body.classList.add("dark");

    }



    updateThemeIcon(button, isDark);





    button.addEventListener("click", () => {



        document.body.classList.toggle("dark");



        const darkMode =
            document.body.classList.contains("dark");



        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );



        updateThemeIcon(button, darkMode);



    });



}




function updateThemeIcon(button, isDark) {


    if (isDark) {


        // Sun icon (dark mode active)

        button.innerHTML = `

        <svg 
        class="theme-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2">


            <circle cx="12" cy="12" r="5"/>


            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>


            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>


            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>


        </svg>

        `;


    } else {


        // Moon icon (light mode active)

        button.innerHTML = `

        <svg 
        class="theme-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2">


            <path d="M21 12.79A9 9 0 1 1 
            11.21 3
            A7 7 0 0 0
            21 12.79z"/>


        </svg>

        `;


    }


}