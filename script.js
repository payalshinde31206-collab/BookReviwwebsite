// ===============================
// BOOK SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    const books = document.querySelectorAll(".book-card");

    books.forEach(function (book) {

        const title = book
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const author = book
            .querySelector(".author")
            .textContent
            .toLowerCase();

        if (
            title.includes(searchValue) ||
            author.includes(searchValue)
        ) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});


// ===============================
// CATEGORY FILTER
// ===============================

function filterBooks(category, clickedButton) {

    const books = document.querySelectorAll(".book-card");
    const buttons = document.querySelectorAll(".category");

    // Remove active class
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    // Add active class
    clickedButton.classList.add("active");

    // Filter books
    books.forEach(function (book) {

        if (
            category === "all" ||
            book.dataset.category === category
        ) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

}


// ===============================
// BOOK REVIEWS
// ===============================

const reviews = {

    "The Alchemist":
        "The Alchemist is an inspiring story about following your dreams, discovering your purpose, and listening to your heart.",

    "Atomic Habits":
        "Atomic Habits explains how small, consistent improvements can create remarkable changes over time. The book provides practical ideas for building good habits.",

    "The Psychology of Money":
        "This book explains how emotions, behavior, and personal experiences influence financial decisions. It provides useful lessons about money and wealth.",

    "Harry Potter":
        "Harry Potter takes readers into a magical world filled with friendship, adventure, challenges, mystery, and courage.",

    "Ikigai":
        "Ikigai introduces the Japanese idea of finding meaning and purpose in everyday life while maintaining balance and happiness.",

    "Rich Dad Poor Dad":
        "This book introduces different ways of thinking about money, assets, income, and financial independence."
};


// ===============================
// OPEN REVIEW POPUP
// ===============================

function showReview(bookName) {

    const modal = document.getElementById("reviewModal");

    const title = document.getElementById("modalTitle");

    const text = document.getElementById("modalText");

    title.textContent = bookName;

    text.textContent = reviews[bookName] ||
        "No review is available for this book.";

    modal.classList.add("show");

}


// ===============================
// CLOSE REVIEW POPUP
// ===============================

function closeReview() {

    const modal = document.getElementById("reviewModal");

    modal.classList.remove("show");

}


// ===============================
// CLOSE POPUP BY CLICKING OUTSIDE
// ===============================

window.addEventListener("click", function (event) {

    const modal = document.getElementById("reviewModal");

    if (event.target === modal) {

        closeReview();

    }

});


// ===============================
// ESC KEY CLOSES POPUP
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeReview();

    }

});