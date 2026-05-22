const filterButtons = document.querySelectorAll(".tab-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const types = card.dataset.type.split(" ");
      const shouldShow = filter === "all" || types.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
