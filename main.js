/* main.js — placeholder for future JS (scroll animations, slider, etc.) */

// Smooth active-link highlighting on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((s) => observer.observe(s));

// Service cards — tap anywhere to reveal details on mobile
document.querySelectorAll('.svc-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-active');
  });
});

// Hamburger menu
const burger = document.querySelector('.nav-burger');
const drawer = document.querySelector('.nav-drawer');
const drawerLinks = document.querySelectorAll('.drawer-link');

burger.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

drawerLinks.forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
