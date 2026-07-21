<<<<<<< HEAD
  AOS.init({
    // Global settings:
    duration: 800, // how long the animation lasts (in ms)
    once: false,    // whether animation should happen only once while scrolling down
    disable: 'mobile'
     // OPTIONAL: if you want to turn it off on mobile devices entirely
  });

const slider = document.querySelector(".nav-slider");
const links = document.querySelectorAll("nav ul li a");

function moveSlider(link){
    slider.style.width = link.parentElement.offsetWidth + "px";
    slider.style.left = link.parentElement.offsetLeft + "px";
}

window.addEventListener("load", () => {
    moveSlider(document.querySelector("nav a.active"));
});

window.addEventListener("resize", () => {
    moveSlider(document.querySelector("nav a.active"));
});

links.forEach(link=>{
    link.addEventListener("click",function(){

        links.forEach(l=>l.classList.remove("active"));
        this.classList.add("active");

        moveSlider(this);
    });
});

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.innerHTML = "☀️";
}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        toggle.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }

});


const LINES = ["Welcome to my", "Portfolio"];
 
const nameEl = document.getElementById('intro-name');
let delayIndex = 0;
LINES.forEach(text => {
  const lineEl = document.createElement('div');
  lineEl.className = 'line';
  [...text].forEach(ch => {
    const span = document.createElement('span');
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.style.animationDelay = `${0.3 + delayIndex * 0.04}s`;
    lineEl.appendChild(span);
    delayIndex++;
  });
  nameEl.appendChild(lineEl);
});
 
// 2. Remove the overlay once the wipe animation finishes
const intro = document.getElementById('intro');
const total = matchMedia('(prefers-reduced-motion: reduce)').matches
  ? 500
  : 3200; // matches the CSS animation timings
 
setTimeout(() => {
  intro.classList.add('wipe-out');
  setTimeout(() => intro.classList.add('done'), 300);
=======
  AOS.init({
    // Global settings:
    duration: 800, // how long the animation lasts (in ms)
    once: false,    // whether animation should happen only once while scrolling down
    disable: 'mobile'
     // OPTIONAL: if you want to turn it off on mobile devices entirely
  });

const slider = document.querySelector(".nav-slider");
const links = document.querySelectorAll("nav ul li a");

function moveSlider(link){
    slider.style.width = link.parentElement.offsetWidth + "px";
    slider.style.left = link.parentElement.offsetLeft + "px";
}

window.addEventListener("load", () => {
    moveSlider(document.querySelector("nav a.active"));
});

window.addEventListener("resize", () => {
    moveSlider(document.querySelector("nav a.active"));
});

links.forEach(link=>{
    link.addEventListener("click",function(){

        links.forEach(l=>l.classList.remove("active"));
        this.classList.add("active");

        moveSlider(this);
    });
});

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.innerHTML = "☀️";
}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        toggle.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }

});


const LINES = ["Welcome to my", "Portfolio"];
 
const nameEl = document.getElementById('intro-name');
let delayIndex = 0;
LINES.forEach(text => {
  const lineEl = document.createElement('div');
  lineEl.className = 'line';
  [...text].forEach(ch => {
    const span = document.createElement('span');
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.style.animationDelay = `${0.3 + delayIndex * 0.04}s`;
    lineEl.appendChild(span);
    delayIndex++;
  });
  nameEl.appendChild(lineEl);
});
 
// 2. Remove the overlay once the wipe animation finishes
const intro = document.getElementById('intro');
const total = matchMedia('(prefers-reduced-motion: reduce)').matches
  ? 500
  : 3200; // matches the CSS animation timings
 
setTimeout(() => {
  intro.classList.add('wipe-out');
  setTimeout(() => intro.classList.add('done'), 300);
>>>>>>> 77eee5169534e5289591b63037b0afc84edd589e
}, total);