  document.addEventListener("included", () => {
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".hero-nav a").forEach(a => {
      const file = a.getAttribute("href");
      if (file === here) a.setAttribute("aria-current", "page");
    });
  });


const sections = document.querySelectorAll("section");

function fadeInOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) { 
            section.classList.add("fade-in");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); 
