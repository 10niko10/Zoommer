document.addEventListener("DOMContentLoaded", () => {
    let popup = document.querySelector(".popup-container");
    let currentDeleteLink = null; 

    document.addEventListener("click", (e) => {
        let clickedElement = e.target.closest(".remove-item");
        if (clickedElement) {
            e.preventDefault(); 

            currentDeleteLink = clickedElement.getAttribute("href"); 

            popup.classList.add("show"); 
        }
    });

    let cancelButton = document.querySelector(".popup-footer .cancel");
    cancelButton.addEventListener("click", () => {
        popup.classList.remove("show"); 
        currentDeleteLink = null; 
    });

    let closeButton = document.querySelector(".popup-header .close");
    closeButton.addEventListener("click", () => {
        popup.classList.remove("show"); 
        currentDeleteLink = null; 
    });

    let confirmButton = document.querySelector(".popup-footer .confirm");
    confirmButton.addEventListener("click", () => {
        if (currentDeleteLink) {
            window.location.href = currentDeleteLink; 
        }
    });
});
