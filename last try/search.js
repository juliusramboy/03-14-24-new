const dropdown = document.querySelector('.dropdown');
const inputsearch = document.getElementById('search-bar');
const cancel = document.getElementById('cancelsearch');

// Object to map movies to their corresponding HTML files
const movieToHTML = {
    "Blue Beetle": "/last try/index/test.html",
    "Dick": "/last try/index/test.html",
    "Snake": "/last try/index/test.html",
    // Add movies 
};

// Function to filter movies based on search input
function searchbar() {
    let result = [];
    let input = inputsearch.value;

    if (input.length) {
        result = Object.keys(movieToHTML).filter((movie) => {
            return movie.toLowerCase().includes(input.toLowerCase());
        });
    }

    displaysearch(result);
    if (!result.length) {
        dropdown.innerHTML = '';
    }
}

// Function to display search results
function displaysearch(result) {
    const content = result.map((movie) => {
        return '<li onclick="openHTML(\'' + movie + '\')">' + movie + '</li>';
    });

    dropdown.innerHTML = '<ul>' + content.join('') + '</ul>';
}

// Function to open HTML file corresponding to the clicked movie
function openHTML(movie) {
    const htmlFile = movieToHTML[movie];
    if (htmlFile) {
        window.location.href = htmlFile;
    }
}

// Event listener for cancel button
cancel.addEventListener('click', () => {
    inputsearch.value = '';
    dropdown.innerHTML = '';
});