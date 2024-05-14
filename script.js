$(document).ready(function() {
    // Assuming your JSON data is stored in a variable called 'books'
    var books = [
        {
            "title": "Book 1",
            "author": "Author 1",
            "excerpt": "Excerpt 1",
            "duration": "1h 30min",
            "rating": 4.5,
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "title": "Book 2",
            "author": "Author 2",
            "excerpt": "Excerpt 2",
            "duration": "2h 15min",
            "rating": 4.2,
            "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        // Add more books as needed
    ];

    // Function to populate books on the page
    function populateBooks() {
        var bookList = $('#bookList');
        bookList.empty(); // Clear existing content

        books.forEach(function(book, index) {
            var card = $('<div class="col-md-4"></div>');
            var cardHtml = `
                <div class="card">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="excerpt">${book.excerpt}</p>
                        <p>Duration: ${book.duration}</p>
                        <p>Rating: ${book.rating}</p>
                        <button class="btn btn-primary btn-read-more" data-toggle="modal" data-target="#bookModal" data-index="${index}">Read More</button>
                    </div>
                </div>
            `;
            card.html(cardHtml);
            bookList.append(card);
        });
    }

    // Call the function to initially populate books
    populateBooks();

    // Function to populate modal with book details
    $('#bookModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var index = button.data('index');
        var modal = $(this);
        var book = books[index];
        modal.find('.modal-title').text(book.title);
        modal.find('.modal-body').html(`<p>${book.text}</p>`);
    });
});
