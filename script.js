document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
  });
});
