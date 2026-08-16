const toggle=document.querySelector(".nav-toggle");

const menu=document.querySelector(".nav-menu");

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");
toggle.textContent = menu.classList.contains("active") ? "✕" : "☰";

});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggle.textContent = "☰";
    });
});