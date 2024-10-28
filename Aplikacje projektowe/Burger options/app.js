document.querySelectorAll(".burger-header").forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");

        content.style.maxHeight = content.style.maxHeight
            ? null
            : content.scrollHeight + "px";
    });
});
