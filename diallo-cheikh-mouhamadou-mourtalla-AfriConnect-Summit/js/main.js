
//   MENU HAMBURGER


const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
    });
}


//   DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    if(themeToggle) themeToggle.textContent = "☀️";
}

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark");
    themeToggle.textContent="☀️";
}else{
    localStorage.setItem("theme","light");
    themeToggle.textContent="🌙";
}

});

}




//   ANNÉE AUTOMATIQUE


const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


//   RETOUR EN HAUT


const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


//   COMPTE À REBOURS


const targetDate = new Date("November, 2026 09:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    if(document.getElementById("days"))
        document.getElementById("days").textContent = days;

    if(document.getElementById("hours"))
        document.getElementById("hours").textContent = hours;

    if(document.getElementById("minutes"))
        document.getElementById("minutes").textContent = minutes;

    if(document.getElementById("seconds"))
        document.getElementById("seconds").textContent = seconds;

},1000);


//   COMPTEURS ANIMÉS


function animateValue(id,endValue){

    const element = document.getElementById(id);

    if(!element) return;

    let start = 0;

    const speed = Math.max(10, Math.floor(2000/endValue));

    const counter = setInterval(()=>{

        start++;

        element.textContent = start;

        if(start >= endValue){
            clearInterval(counter);
        }

    },speed);

}

animateValue("participants",1000);
animateValue("speakers",18);
animateValue("daysEvent",3);
animateValue("countries",14);


//   ONGLETS PROGRAMME

/* -----------------------------------------------------------
   ONGLETS DU PROGRAMME (programme.html)
----------------------------------------------------------- */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabButtons.length) {
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tabTarget;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
}


//   FILTRE INTERVENANTS

/* ===========================================================
   FILTRAGE DYNAMIQUE DES INTERVENANTS — speakers.js
   Vanilla JS pur, aucune dépendance
   =========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const filterButtons = document.querySelectorAll('.speakers__filters .filter-btn');
  const speakerCards = document.querySelectorAll('.speaker-card');

  if (!filterButtons.length || !speakerCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // état actif du bouton
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // affichage / masquage des cartes selon data-category
      speakerCards.forEach(card => {
        const matches = filter === 'tous' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });

});

//   FORMULAIRE


const form = document.getElementById("registrationForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("fullName");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const participation=document.getElementById("participation");
const country=document.getElementById("country");
const message=document.getElementById("message");
const success=document.getElementById("formSuccess");

if(
name.value.trim()==="" ||
email.value.trim()==="" ||
phone.value.trim()==="" ||
participation.value==="" ||
country.value==="" ||
message.value.trim()===""
){

success.style.color="red";
success.textContent="Veuillez remplir tous les champs.";

return;

}

success.style.color="green";
success.textContent="Inscription envoyée avec succès !";

form.reset();

});

}


//  NAVBAR AU SCROLL


window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("navbar-scroll");

}else{

navbar.classList.remove("navbar-scroll");

}

});