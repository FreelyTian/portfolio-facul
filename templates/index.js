document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const materiasList = document.querySelector(".materias-list");
    const selectedOption = document.getElementById("selected-option");

    dropdown.addEventListener("click", function (event) {
        materiasList.classList.toggle("show");
        event.stopPropagation();
    });

    materiasList.addEventListener("click", function (event) {
        selectedOption.textContent = event.target.textContent;
        if (event.target.tagName == "LI") {
            // Remove the declaration and assignment of the unused 'selectedValue' variable.
            // const selectedValue = event.target.getAttribute("data-value");
            materiasList.classList.remove("show");
            selectedOption.textContent = event.target.textContent;
        }
        
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            materiasList.classList.remove("show");
        }
    });
});