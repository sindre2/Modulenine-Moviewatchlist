/* --- Constants and variables --- */

import * as name from "./hideOGshow.js";
import * as select from "./selectBtn.js";

const search = Array.from(document.getElementsByClassName("search-btn"));
const myWatchList = document.getElementById("watch-btn");
const myFilmList = document.getElementById("film-btn");

const revealWatch = document.getElementsByClassName("watch-list");
const revealMovies = document.getElementsByClassName("movie-search");
const filmInput = document.getElementById("search-results");
const seeMovie = document.getElementById("search-movie");

export const bigList = document.getElementById("big-list"); 


/* --- END --- */


/* --- Event listeners for search buttons and revealing watchlist/filmlist. --- */

search.forEach( data =>
{
    data.addEventListener("click", (data) => {
        data.preventDefault();
        searchQuery();
    });
});

myWatchList.addEventListener("click", openWatchList);
myFilmList.addEventListener("click", openFilmList);

/* --- END --- */



/* --- Fetch-function to recieve the movie-data from OMDB. --- */

function searchQuery ()                                             
{ 
    let movieTitle = seeMovie.value;
    
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e3b138d2&s=${movieTitle}`)
        .then (response => response.json())
        .then (data => 
            {
                filmInput.innerHTML = "";
                window.scrollTo(0, 0)

                data.Search.forEach((counter, index) => {
                    filmInput.innerHTML += 
                    //innerHTML input starts below with "  `  "
                    `
                    <div class="movie-block">
                        <img src="${data.Search[index].Poster}" alt="Movie poster">
                        <div class="movie-description">
                            <h4>${data.Search[index].Title}</h4>
                            <div class="movie-add">
                                <p><i>Runtime: Genre: </i></p> 
                                <button type="button" class="add-btn">➕</button>
                            </div>
                            <p>Type: ${data.Search[index].Type}</p>
                        </div>
                    </div>
                    `;
                });
            })
        .then (() => 
            {
                select.selectBtns();
            });
};



/* --- Runs functions to reveal or hide watchlist/movielist. The nested functions are imported from external js on the top. --- */

function openWatchList () 
{
    name.removeHidden(revealWatch);
    name.addHidden(revealMovies);
};

function openFilmList ()
{
    name.removeHidden(revealMovies);
    name.addHidden(revealWatch);
};

/* --- END --- */
