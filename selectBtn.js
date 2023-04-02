/* --- Function to choose newly created buttons with querySelectorAll and function to add ability to put the movie into watchlist. --- */

import {bigList} from "./index.js"

let addBtn = [];
let selectMovie = [];
let selectWatch = [];
let selectWatchBtnBox = [];
let watchDeleteBtns = [];
let watchWatchedBtns = [];

export function selectBtns()
{
    addBtn = Array.from(document.querySelectorAll(".add-btn"));
    selectMovie = Array.from(document.querySelectorAll(".movie-block"));

    addBtn.forEach( (data, index) =>
    {
        // if(selectMovie[index].firstElementChild.currentSrc)
        data.addEventListener("click", () => 
        {
            console.log(selectMovie[index])
            bigList.innerHTML += 
            `
            <div class="watchlist-add">
                <div class="watchlist-addsmall">
                    <img src="${selectMovie[index].firstElementChild.currentSrc} 
                        alt="${selectMovie[index].firstElementChild.alt}">
                    <div class="watchlist-btnbox">
                        <button type="button" class="watchlist-deletebtn">❌</button>
                        <button type="button" class="watchlist-watchedbtn">✅</button>
                    </div>
                </div>
                <h4>${selectMovie[index].childNodes[3].childNodes[1].textContent}</h4>
                <img class="hidden img-seen" src="./Images/Watched.jpg" alt="Watched">
            </div>
            `;
            addBtn[index].innerHTML += `<h3 style="color:magenta;">Added to watchlist</h3>`
            addBtn[index].remove(addBtn[index].button);
            selectMoreBtns();
        });
    });
};


// Function to mark as watched or remove movie from watchlist.

export function selectMoreBtns()
{
    watchDeleteBtns = Array.from(document.querySelectorAll(".watchlist-deletebtn"));
    watchWatchedBtns = Array.from(document.querySelectorAll(".watchlist-watchedbtn"));
    selectWatch = Array.from(document.querySelectorAll(".watchlist-add"));
    selectWatchBtnBox = Array.from(document.querySelectorAll(".watchlist-btnbox"));

    watchDeleteBtns.forEach( (data, index) =>
    {
        data.addEventListener("click", () =>
        {
            bigList.removeChild(selectWatch[index]);
            selectMoreBtns();
        });
    });

    watchWatchedBtns.forEach( (data, index) =>
    {
        data.addEventListener("click", () => 
        {
            selectWatch[index].classList.add("watched");
            selectWatch[index].querySelector(".img-seen").classList.remove("hidden");
            selectWatchBtnBox[index].children[1].classList.add("hidden");
        });
    });
};

/* --- END --- */