const p='"Encargado de plasmar las ideas ficticias en una realidad"';
let i=0;

    function escribir() {
      if (i < p.length) {
        document.getElementById("eslogan").innerHTML += p.charAt(i);
        i++;
        setTimeout(escribir, 50); 
      }
    }
    window.onload=escribir;
  

const cards = document.querySelectorAll("#proyectos");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.05)";
        card.style.transition = "all 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


const skillCards = document.querySelectorAll("#Frontend"); 

skillCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "scale(0.9)";
});

function showSkills() {
    skillCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = 1;
            card.style.transform = "scale(1)";
        }
    });
}

window.addEventListener("scroll", showSkills);
showSkills();

const footer = document.querySelector("footer");

function fadeFooter() {
    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
        footer.style.opacity = 1;
        footer.style.transform = "translateY(0)";
        footer.style.transition = "all 0.8s ease-out";
    }
}

window.addEventListener("scroll", fadeFooter);

// Inicialmente oculto
footer.style.opacity = 0;
footer.style.transform = "translateY(50px)";

