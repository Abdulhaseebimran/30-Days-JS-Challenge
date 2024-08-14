// Day 25 - JS Challenge
// Movie App

const apiKey = 'f07ad48582d6243151596d1fc0e8b1a1';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const popularMovie = document.getElementById("popular-movies-grid");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results-grid");
const trendingMovie = document.getElementById("trending-movies-grid");
const searchResultsSection = document.getElementById("search-results");
const modal = document.getElementById("movie-details-modal");
const modalClose = document.getElementsByClassName("close")[0];

async function fetchMovie(endpoint) {
    try {
        const response = await fetch(
            `${baseUrl}${endpoint}?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}

function MovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
    <img src="${imageBaseUrl}${movie.poster_path}" alt="${movie.title
        }" onerror="this.src='https://via.placeholder.com/500x750?text=Image+Not+Found'">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-rating">⭐ ${movie.vote_average.toFixed(1)}</p>
        </div>
    `;
    card.addEventListener("click", () => {
        showMovieDetails(movie);
    });
    return card;
}

function displayMovie(movie, container) {
    container.innerHTML = "";
    if (movie.length === 0) {
        container.innerHTML = "No movies found";
        return;
    }

    movie.forEach((movie) => {
        const card = MovieCard(movie);
        container.appendChild(card);
    });
}

async function loadPopularMovies() {
    const movies = await fetchMovie("/movie/popular");
    displayMovie(movies, popularMovie);
}

async function loadTrendingMovies() {
    const movies = await fetchMovie("/trending/movie/week");
    displayMovie(movies, trendingMovie);
}

async function searchMovie(query) {
    try {
        const response = await fetch(
            `${baseUrl}/search/movie?query=${encodeURIComponent(
                query
            )}&api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayMovie(data.results, searchResults);
        searchResultsSection.classList.remove("hidden");

        document.getElementById("popular-movies").style.display = "none";
        document.getElementById("trending-movies").style.display = "none";
        searchResultsSection.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
        console.error("Error searching movies:", error);
        searchResults.innerHTML =
            "<p>An error occurred while searching for movies. Please try again.</p>";
    }
}

function showMovieDetails(movie) {
    document.getElementById('modal-title').textContent = movie.title || 'No Title Available';
    document.getElementById('modal-poster').src = `${imageBaseUrl}${movie.poster_path}` || 'placeholder.jpg';
    document.getElementById('modal-overview').textContent = movie.overview || 'No overview available.';
    document.getElementById('modal-rating').textContent = `Rating: ⭐ ${movie.vote_average?.toFixed(1) || 'N/A'}`;
    document.getElementById('modal-release-date').textContent = `Release Date: ${movie.release_date || 'N/A'}`;
    modal.style.display = 'block';
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        searchMovie(query);
    }
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    loadPopularMovies();
    loadTrendingMovies();
});


function resetView() {
    document.getElementById("popular-movies").style.display = "block";
    document.getElementById("trending-movies").style.display = "block";
    searchResultsSection.classList.add("hidden");
    searchInput.value = "";
}
document.querySelector('.logo').addEventListener('click', resetView);

