let searchInputEle = document.getElementById("searchInput");
let searchResultsEle = document.getElementById("searchResults");
let searchResultsRowEle = document.createElement("div");
searchResultsRowEle.classList.add("d-flex", "flex-column");
searchResultsEle.appendChild(searchResultsRowEle);

let spinnerEle = document.getElementById("spinner");


function createAndAppend(book) {
    console.log("reached");
    let {
        imageLink,
        author,
        title
    } = book;
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("d-flex", "flex-column", "col-5");
    searchResultsEle.appendChild(rowContainer);

    let searchResultsRowEle = document.createElement("div");
    searchResultsRowEle.classList.add("mb-4");
    rowContainer.appendChild(searchResultsRowEle);


    //create Image
    let imageEle = document.createElement("img");
    imageEle.src = imageLink;
    // imageEle.classList.add("col-6");
    searchResultsRowEle.appendChild(imageEle);

    //create Author
    let authorEle = document.createElement("p");
    authorEle.textContent = author;
    //authorEle.classList.add("col-5")
    searchResultsRowEle.appendChild(authorEle);

}

function displayResults(searchedbooks, titleSearched) {
    searchResultsEle.textContent = "";
    let filteredBooks = [];
    for (let book of searchedbooks) {
        if (book.title.toLowerCase().includes(titleSearched.toLowerCase())) {
            filteredBooks.push(book);
        }
    }
    spinnerEle.classList.add("d-none");
    searchResultsEle.classList.remove("d-none");
    if (filteredBooks.length > 0) {
        //createAndAppend(searchedbooks[1]);
        let boxtitle = document.createElement("h1");
        boxtitle.textContent = "Popular Books";
        searchResultsEle.appendChild(boxtitle);
        for (let eachBook of filteredBooks) {
            createAndAppend(eachBook);
        }
    } else {
        let emptyMessageEle = document.createElement("p");
        emptyMessageEle.textContent = "No results found";
        searchResultsEle.appendChild(emptyMessageEle);
    }


}

function searchBook(titleSearched) {
    spinnerEle.classList.remove("d-none");
    searchResultsEle.classList.add("d-none");
    let url = "https://apis.ccbp.in/book-store";
    let urlVal = url + "?title=" + titleSearched;
    let options = {
        method: "GET"
    }
    fetch(urlVal, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let {
                search_results
            } = jsonData;
            console.log(search_results);
            displayResults(search_results, titleSearched);
        });
}
searchInputEle.addEventListener("keydown", function(event) {
    let searchInputVal = searchInputEle.value;
    if (searchInputVal !== "" && event.key === "Enter") {
        searchBook(searchInputVal);
    }
});