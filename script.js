
// MOBILE NAV TOGGLE
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// JOIN BUTTON CLICK
const btn = document.querySelector(".btn");
if (btn) {
    btn.addEventListener("click", function() {
        alert("Welcome! You are one step closer to joining Hybrid Fitness 💪");
    });
}

// CONTACT FORM VALIDATION
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(e) {
        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;

        if (name === "" || email === "") {
            e.preventDefault();
            alert("Please fill in all fields!");
        }
    });
}

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
