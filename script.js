// Current year

document.getElementById("current-year").textContent =
    new Date().getFullYear();


// Mobile navigation

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.getElementById("nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking a link

document
    .querySelectorAll("#nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });
