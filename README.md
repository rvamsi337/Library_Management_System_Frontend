# Library Management Web Page

A simple web application to search and display books using an external API. Built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- Search books by title.
- Display a loading spinner while fetching data.
- Show book results with cover image and author name.
- Display "No results found" if no books match the search.

## How to Use

1. Open `index.html` in a web browser.
2. Type a book title in the search input field.
3. Press Enter to fetch results.
4. Results appear below the input field:
   - Book cover image
   - Author name
   - Or "No results found" if nothing matches

## API

- Endpoint: `https://apis.ccbp.in/book-store?title=<search_query>`
- Method: GET
- Query Parameter: `title` – the book title to search for
- Example: `https://apis.ccbp.in/book-store?title=India`

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5

## File Structure

/library-management  
│── index.html  
│── style.css  
│── script.js  
└── README.md  

