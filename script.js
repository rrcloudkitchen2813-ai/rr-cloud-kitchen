window.onload = function () {
    document.body.style.opacity = "1";
};

window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});
