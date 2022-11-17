
const navToggler = document.querySelector(".intro__toggler");
const mobileNav = document.querySelector(".intro__list--mobile");


navToggler.addEventListener("click", () => {
    mobileNav.classList.toggle("hiddens");
    mobileNav.style.display = "block"
  });

