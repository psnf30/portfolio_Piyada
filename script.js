document.getElementById("year").textContent = new Date().getFullYear();

const typed = new Typed(".typing", {
  strings: ["UX/UI Designer", "Business Analyst", "System Analyst"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

/* --- Tab switcher --- */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.tab;
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.toggle("active", b === btn));
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.toggle("active", p.id === id));
  });
});

/* footer year */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("year").textContent = new Date().getFullYear();
